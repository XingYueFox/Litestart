/**
 * 搜索联想词代理。
 * MV3 扩展页面受 CORS 与 CSP 双重限制，无法直接请求联想接口，
 * 由 service worker 代为请求并解析，再把词条回传给页面。
 */

// 各引擎的请求构造与响应解析：三家返回结构互不相同
const ENGINES = {
  bing: {
    // 不带 cb 参数时直接返回纯 JSON
    url: q => `https://api.bing.com/qsonhs.aspx?q=${q}`,
    charset: 'utf-8',
    parse: data => {
      const results = (data && data.AS && data.AS.Results) || [];
      const items = results.flatMap(r => ((r && r.Suggests) || []).map(s => s && s.Txt).filter(Boolean));
      return [...new Set(items)];
    }
  },
  baidu: {
    // json=1 时对象 key 带引号，外层仍包在 window.baidu.sug(...) 里
    url: q => `https://suggestion.baidu.com/su?wd=${q}&p=3&json=1`,
    charset: 'gbk',
    parse: data => {
      const grouped = ((data && data.g) || []).map(item => item && item.q).filter(Boolean);
      if (grouped.length) return grouped;
      return Array.isArray(data && data.s) ? data.s : [];
    }
  },
  google: {
    url: q => `https://suggestqueries.google.com/complete/search?client=youtube&q=${q}&callback=__liteSuggest`,
    charset: 'utf-8',
    parse: data => {
      if (!Array.isArray(data) || !Array.isArray(data[1])) return [];
      return data[1].map(item => (Array.isArray(item) ? item[0] : item)).filter(Boolean);
    }
  }
};

// 响应既可能是纯 JSON，也可能包在回调外层
function unwrapPayload(text) {
  const body = String(text).trim();
  if (body.startsWith('{') || body.startsWith('[')) return JSON.parse(body);
  const open = body.indexOf('(');
  const close = body.lastIndexOf(')');
  if (open !== -1 && close > open) return JSON.parse(body.slice(open + 1, close));
  throw new Error('无法解析联想词响应');
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (!message || message.type !== 'liteSuggest') return;
  const engine = ENGINES[message.engine];
  if (!engine || typeof message.query !== 'string') {
    sendResponse({ ok: false, error: 'bad request' });
    return;
  }
  fetch(engine.url(encodeURIComponent(message.query)), { credentials: 'omit', cache: 'no-store' })
    .then(response => {
      if (!response.ok) throw new Error('HTTP ' + response.status);
      return response.arrayBuffer();
    })
    .then(buffer => {
      let text;
      try {
        text = new TextDecoder(engine.charset).decode(buffer);
      } catch (e) {
        text = new TextDecoder('utf-8').decode(buffer);
      }
      sendResponse({ ok: true, items: engine.parse(unwrapPayload(text)) });
    })
    .catch(error => {
      sendResponse({ ok: false, error: String((error && error.message) || error) });
    });
  return true;   // 异步响应
});
