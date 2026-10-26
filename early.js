/**
 * 极早执行的脚本，必须在 index.html 的 <head> 里同步引入（不加 defer/async）。
 * MV3 默认 CSP 为 script-src 'self'，内联脚本会被拦截，
 * 故此类「首帧之前」的逻辑需置于外部文件。
 */
(function () {
  // 1) 按系统主题设置标签页图标（深色用 icon_d，浅色用 icon_l）
  try {
    var isDark = matchMedia('(prefers-color-scheme: dark)').matches;
    var link = document.createElement('link');
    link.rel = 'icon';
    link.id = 'favicon';
    link.type = 'image/svg+xml';
    link.href = (isDark ? 'img/icon_d.svg' : 'img/icon_l.svg') + '?r=' + Math.random();
    document.head.appendChild(link);
  } catch (e) {
    /* 图标设置失败不应影响页面 */
  }

  // 2) 提前把「隐藏搜索框」状态写到 <html>。
  //    主脚本在 DOMContentLoaded 时运行，届时首帧已绘制，隐藏状态下搜索框会先闪现再消失。
  try {
    if (JSON.parse(localStorage.getItem('ntp_search_visible')) === false) {
      document.documentElement.setAttribute('data-search-hidden', 'true');
    }
  } catch (e) {
    /* 读不到或格式异常时按默认（显示）处理，交给主脚本修正 */
  }
  // 3) 提前把布局模式写到 <html>。
  //    主脚本把 data-layout 写到 <body>，首帧会先按默认网格排布，搜索框随后跳位。
  //    CSS 用 :is(html, body)[data-layout=...] 同时识别这两个位置。
  try {
    var layout = JSON.parse(localStorage.getItem('ntp_layout') || '"centered"');
    if (layout === 'inspirational') {
      document.documentElement.setAttribute('data-layout', 'inspirational');
    }
  } catch (e) {
    /* 读不到时按默认布局处理，交给主脚本修正 */
  }

  // 4) 提前把生效主题写到 <html>，避免首帧配色闪烁。
  //    存储值为 'auto' / 'light' / 'dark'，auto 按系统偏好解析。
  try {
    var pref = JSON.parse(localStorage.getItem('ntp_theme') || '"auto"');
    var resolved = (pref === 'light' || pref === 'dark')
      ? pref
      : (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', resolved);
  } catch (e) {
    /* 失败时由主脚本补上 */
  }

  // 5) 快速链接行数：提前写到 <html>，让首帧按最终行数占位。
  //    容器在渲染前是 rows="0"、不占网格行，渲染后撑开会把居中布局的搜索框顶上去。
  try {
    var qlRow = JSON.parse(localStorage.getItem('ntp_quicklinks') || '"1"');
    var qlShow = JSON.parse(localStorage.getItem('ntp_show_quicklinks') || 'null');
    var qlPos = JSON.parse(localStorage.getItem('ntp_quicklink_position') || '"auto"');
    var qlList = JSON.parse(localStorage.getItem('ntp_quicklinks_list') || '[]');
    if (qlShow === null) qlShow = qlRow !== '0';   // 旧数据用 '0' 表示关闭
    if (qlRow === '0') qlRow = '1';
    var qlVw = document.documentElement.clientWidth || window.innerWidth || 0;
    // 严格按布尔判断，避免存储里出现字符串 'false' 时被当作真值
    var qlEnabled = (qlShow === null) ? (qlRow !== '0') : (qlShow === true || qlShow === 'true');
    if (qlEnabled && qlPos !== 'bottom' && qlVw > 0) {
      // 与 script.js 的 QUICKLINK_* 常量保持一致
      var qlItemW = 80, qlGap = 10, qlSide = 16;
      var qlMaxCols = qlRow === '2' ? 9 : 15;
      var qlAvail = Math.min(
        qlVw - qlSide * 2,
        qlMaxCols * qlItemW + (qlMaxCols - 1) * qlGap
      );
      var qlCols = Math.min(qlMaxCols, Math.max(1, Math.floor((qlAvail + qlGap) / (qlItemW + qlGap))));
      // 与实际渲染规则一致：单行模式只渲染前 perRow 项，多行模式全部渲染
      var qlAddBtn = JSON.parse(localStorage.getItem('ntp_show_add_button') || 'true');
      var qlAddOn = (qlAddBtn !== false);
      var qlCount = Array.isArray(qlList) ? qlList.length : 0;
      var qlMaxItems = qlRow === '2' ? Infinity : qlCols;
      var qlShown = Math.min(qlCount, qlMaxItems);
      var qlHasAdd = qlAddOn && qlCount < qlMaxItems;
      var qlTiles = qlShown + (qlHasAdd ? 1 : 0);
      // 无格子时容器只靠 min-height 撑开
      var qlLines = qlTiles === 0 ? 0 : Math.max(1, Math.min(5, Math.ceil(qlTiles / qlCols)));
      document.documentElement.setAttribute('data-quicklinks-lines', String(qlLines));
    }
  } catch (e) {
    /* 失败时按未预置处理，由主脚本正常渲染 */
  }

  // 6) Logo 显隐：提前写到 <html>。
  //    Logo 占据网格第 2 行，隐藏后该行会塌陷，首帧不预置会让居中布局的搜索框先偏下再上移。
  try {
    if (JSON.parse(localStorage.getItem('ntp_show_logo') || 'true') === false) {
      document.documentElement.setAttribute('data-logo-hidden', 'true');
    }
  } catch (e) {
    /* 失败时保持显示，由主脚本修正 */
  }


  // 7) 内容就绪后再显示：主脚本在 DOMContentLoaded 内完成同步初始化，
  //    在其后打标记，首帧布局差异不会呈现到屏幕上。
  window.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
      document.documentElement.setAttribute('data-ready', '1');
    }, 0);
  });
})();
