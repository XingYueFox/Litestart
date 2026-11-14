/**
 * 极早执行的脚本，必须在 index.html 的 <head> 里同步引入（不加 defer/async）。
 * MV3 默认 CSP 为 script-src 'self'，内联脚本会被拦截，
 * 故此类「首帧之前」的逻辑需置于外部文件。
 *
 * 职责只有三件：设标签页图标、预置生效主题、初始化完成后放行 #inner。
 * 布局类状态（搜索框显隐 / 布局 / Logo / 快捷链接行数）不在此预判：
 * #inner 在放行前整体不可见，预判没有视觉收益，反而要把主脚本的布局规则再实现一遍。
 */
(function () {
  'use strict';

  // 主脚本异常或卡死时的放行期限，避免停在空白界面
  var READY_TIMEOUT = 1500;

  // 放行首屏：幂等，正常路径与兜底路径都可能调用
  function markReady() {
    if (document.documentElement.getAttribute('data-ready') === '1') return;
    document.documentElement.setAttribute('data-ready', '1');
  }

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

  // 2) 预置生效主题，避免首帧配色闪烁。
  //    存储值为 'auto' / 'light' / 'dark'，auto 按系统偏好解析。
  //    body 背景在 #inner 之外可见，所以这一项必须早于首帧。
  try {
    var pref = JSON.parse(localStorage.getItem('ntp_theme') || '"auto"');
    var resolved = (pref === 'light' || pref === 'dark')
      ? pref
      : (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', resolved);
  } catch (e) {
    /* 读取失败时由主脚本补上 */
  }

  // 3) 兜底放行：脚本运行时异常或初始化 Promise 失败时立即显示，
  //    资源加载失败（无 error 对象）不算致命，不触发。
  window.addEventListener('error', function (e) {
    if (e && e.error) markReady();
  });
  window.addEventListener('unhandledrejection', markReady);
  setTimeout(markReady, READY_TIMEOUT);

  // 4) 正常路径：主脚本在 DOMContentLoaded 内完成同步初始化，随后放行
  function releaseAfterInit() {
    setTimeout(markReady, 0);
  }
  if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', releaseAfterInit);
  } else {
    releaseAfterInit();
  }
})();
