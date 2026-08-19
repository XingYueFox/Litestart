const logos = {
  bing: `
    <svg aria-hidden="true" id="logo-icon" width="48" height="48" viewBox="0 0 48 48">
      <path fill="#00A4EF" d="M22.7 25.2H0v22.7h22.7V25.2Z"></path>
      <path fill="#FFB900" d="M47.79 25.2h-22.7v22.7h22.7V25.2Z"></path>
      <path fill="#7FBA00" d="M47.79.1h-22.7v22.7h22.7V.1Z"></path>
      <path fill="#F25022" d="M22.7.1H0v22.7h22.7V.1Z"></path>
    </svg>
    <svg aria-hidden="true" id="logo-text" width="163" height="48" viewBox="0 0 163 48">
      <path id="logo-text-path" d="M31.19 9.66v28.68H26.2v-22.5h-.1l-8.86 22.5h-3.29L4.9 15.84h-.1v22.5H.22V9.66H7.4l8.26 21.2h.1l8.67-21.2h6.77Zm4.08 2.2c0-.8.3-1.5.9-2 .6-.5 1.29-.8 2.08-.8.9 0 1.6.3 2.1.9.5.5.9 1.2.9 2 0 .79-.3 1.49-.9 1.98-.6.5-1.3.8-2.1.8-.9 0-1.49-.3-2.09-.8-.5-.7-.9-1.39-.9-2.09Zm5.37 5.87v20.6h-4.87v-20.6h4.87Zm14.74 17.12a9.16 9.16 0 0 0 4.78-1.79v4.48c-.8.5-1.7.8-2.7 1-.99.2-2.08.3-3.28.3-3.08 0-5.47-.9-7.36-2.9a9.98 9.98 0 0 1-2.9-7.26c0-3.29 1-6.07 2.9-8.16 1.89-2.1 4.68-3.19 8.26-3.19.9 0 1.8.1 2.69.3.9.3 1.69.5 2.19.8v4.67c-.7-.5-1.5-1-2.3-1.29-.79-.3-1.58-.5-2.38-.5-1.9 0-3.49.6-4.68 1.9-1.2 1.29-1.8 2.88-1.8 5.07 0 2.1.5 3.68 1.7 4.88a7.45 7.45 0 0 0 4.88 1.7ZM73.9 17.43c.4 0 .7 0 1.1.1.29.1.59.1.79.2v4.88c-.3-.2-.6-.3-1.1-.5-.5-.2-1.1-.3-1.79-.3-1.2 0-2.19.5-2.99 1.5-.8.99-1.29 2.48-1.29 4.67v10.36h-4.88V17.73h4.88V21h.1c.5-1.1 1.1-1.99 1.99-2.68.8-.6 1.9-.9 3.19-.9Zm2.09 10.95c0-3.38.9-6.07 2.88-8.06 1.9-2 4.58-2.99 8.07-2.99 3.18 0 5.67.9 7.46 2.89 1.8 1.89 2.7 4.48 2.7 7.76 0 3.29-.9 5.98-2.9 7.97-1.89 1.99-4.47 2.98-7.86 2.98-3.19 0-5.67-.9-7.57-2.78-1.89-2-2.78-4.58-2.78-7.77Zm5.07-.2c0 2.1.5 3.78 1.5 4.88a5.4 5.4 0 0 0 4.18 1.7c1.8 0 3.09-.6 4.08-1.7.9-1.1 1.4-2.79 1.4-5.08 0-2.19-.5-3.88-1.5-4.98a4.97 4.97 0 0 0-3.98-1.69c-1.8 0-3.09.6-4.08 1.8-1.2 1.19-1.6 2.88-1.6 5.07Zm23.2-4.98c0 .7.2 1.3.7 1.7.5.4 1.4.9 2.89 1.49 1.89.8 3.28 1.7 4.08 2.59.8 1 1.2 2.09 1.2 3.48 0 1.9-.7 3.49-2.3 4.68-1.5 1.2-3.48 1.8-6.07 1.8a15.8 15.8 0 0 1-5.58-1.1v-4.88c.9.6 1.9 1.1 2.9 1.5.99.3 1.88.5 2.78.5 1.1 0 1.89-.1 2.39-.5.5-.3.8-.8.8-1.5s-.3-1.3-.8-1.7c-.5-.49-1.6-.99-3.09-1.59a8.89 8.89 0 0 1-3.78-2.48 5.7 5.7 0 0 1-1.1-3.59c0-1.89.7-3.38 2.2-4.58a8.8 8.8 0 0 1 5.67-1.79c.7 0 1.5.1 2.39.3.9.1 1.69.4 2.29.6v4.58c-.7-.4-1.4-.8-2.3-1.1-.89-.3-1.69-.5-2.48-.5-.9 0-1.7.2-2.1.5-.39.5-.69.9-.69 1.6Zm10.85 5.18c0-3.38.9-6.07 2.89-8.06 2-2 4.58-2.99 8.06-2.99 3.19 0 5.68.9 7.47 2.89 1.8 1.89 2.69 4.48 2.69 7.76 0 3.29-.9 5.98-2.89 7.97-1.89 1.99-4.48 2.98-7.86 2.98-3.19 0-5.68-.9-7.57-2.78-1.8-2-2.79-4.58-2.79-7.77Zm5.08-.2c0 2.1.5 3.78 1.5 4.88a5.4 5.4 0 0 0 4.17 1.7c1.8 0 3.1-.6 4.09-1.7.9-1.1 1.4-2.79 1.4-5.08 0-2.19-.5-3.88-1.5-4.98a4.96 4.96 0 0 0-3.98-1.69c-1.8 0-3.1.6-4.09 1.8-1.1 1.19-1.59 2.88-1.59 5.07Zm32.16-6.47h-7.27v16.63h-4.88V21.7h-3.48v-3.98h3.48v-2.89c0-2.19.7-3.88 2.1-5.28a7.28 7.28 0 0 1 5.37-2.09c.6 0 1.1 0 1.6.1.49.1.89.1 1.19.3v4.18c-.1-.1-.5-.2-.9-.3-.4-.1-.9-.2-1.4-.2-.99 0-1.79.3-2.28.9-.5.7-.8 1.6-.8 2.79v2.49h7.27v-4.68l4.88-1.5v6.08h4.87v3.98h-4.87v9.66c0 1.3.2 2.19.7 2.69.49.5 1.19.8 2.18.8.3 0 .6-.1 1-.2s.7-.3 1.1-.5v3.98c-.3.2-.8.3-1.5.5-.7.1-1.4.2-2.1.2-2.08 0-3.58-.5-4.57-1.7-1-1.1-1.5-2.69-1.5-4.88V21.71h-.2Z"></path>
    </svg>
  `,
  baidu: `
    <picture>
      <source srcset="img/logo/baidu_logo_dark.png" media="(prefers-color-scheme: dark)">
      <img src="img/logo/baidu_logo_light.png" alt="Baidu Logo" class="baidu-logo-img">
    </picture>
  `,
  google: `
    <picture>
      <source srcset="img/logo/google_logo_dark.png" media="(prefers-color-scheme: dark)">
      <img src="img/logo/google_logo_light.png" alt="Google Logo" class="google-logo-img">
    </picture>
  `,
  custom: ``
};

// 搜索引擎小图标 —— 展示于搜索框最前端
const searchEngineIcons = {
  bing: `
    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bing">
      <rect width="20" height="20" rx="5" fill="#00A4EF"/>
      <text x="10" y="14.5" font-size="13" font-weight="700" font-family="Segoe UI, Arial, sans-serif" fill="#ffffff" text-anchor="middle">b</text>
    </svg>
  `,
  baidu: `
    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Baidu">
      <rect width="20" height="20" rx="5" fill="#2932E1"/>
      <g fill="#ffffff">
        <ellipse cx="10" cy="8" rx="1.9" ry="2.6"/>
        <ellipse cx="6.6" cy="9.2" rx="1.6" ry="2.4"/>
        <ellipse cx="13.4" cy="9.2" rx="1.6" ry="2.4"/>
        <ellipse cx="5.4" cy="13" rx="1.3" ry="1.7"/>
        <ellipse cx="14.6" cy="13" rx="1.3" ry="1.7"/>
      </g>
    </svg>
  `,
  google: `
    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Google">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
    </svg>
  `,
  custom: `
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Custom"
         fill="none" stroke="currentColor">
      <circle cx="10.5" cy="10.5" r="6.5" stroke-width="2"/>
      <path d="M15.4 15.4 21 21" stroke-width="2" stroke-linecap="round"/>
    </svg>
  `
};

// 语言字典
const i18nData = {
  'zh-CN': {
    pageTitle: '新标签页',
    settingsTitle: '页面设置',
    close: '关闭',
    quicklinks: '网站导航',
    off: '关闭',
    on: '打开',
    rows1: '1 行',
    rows2: '2 行',
    searchEngine: '搜索引擎',
    custom: '自定义',
    editCustomEngine: '编辑自定义搜索引擎',
    saveHistory: '保存搜索历史记录',
    layout: '页面布局',
    inspirational: '展望',
    focused: '聚焦',
    background: '背景',
    editBackground: '编辑背景',
    language: '页面语言',
    langAuto: '默认（跟随设备）',
    cookieNotice: '隐私与Cookie',
    license: '开源协议',
    updates: '检查更新',
    helpFeedback: '帮助&反馈',
    presentedBy: '由',
    forYou: '为您呈现',
    disclaimer: '请注意，此网页与 Microsoft 无关。',
    searchPlaceholder: '搜索或输入 Web 地址',
    searchInput: '搜索输入框',
    searchButton: '搜索',
    clearSearchHistory: '清除搜索历史记录',
    customBackground: '自定义背景',
    usingDefaultBg: '正在使用默认背景',
    selectImage: '选择图片或视频',
    uploadFile: '上传文件',
    restoreDefault: '恢复默认',
    editShortcut: '编辑快捷方式',
    name: '名称',
    inputNamePh: '输入快捷方式名称',
    errorNameReq: '请输入快捷方式名称',
    errorUrlReq: '请输入网址',
    delete: '删除',
    cancel: '取消',
    save: '保存',
    customEngineTitle: '自定义搜索引擎',
    engineName: '搜索引擎名称',
    engineNamePh: '例如: DuckDuckGo',
    errorEngineNameReq: '请输入搜索引擎名称',
    engineUrl: '搜索 URL (%s 替换搜索关键词)',
    errorEngineUrlFormat: '请输入搜索 URL，必须包含 %s',
    bgSource: '背景来源',
    bgDefault: '默认',
    bgDaily: '每日壁纸',
    bgCustom: '自定义',
    quickMenu: '常用网站',
    skipToContent: '跳到内容',
    toolbar: '工具栏',
    pmWork: '工作 25分',
    pmBreak: '休息 5分',
    pmStart: '开始',
    pmReset: '重置',
    pmHint: '空格 = 开始/暂停',
    pureMode: '纯净模式',
    pureModeHint: '禁用全部动画与动态壁纸，零脚本、零追踪，优先保证隐私与专注',
    highContrast: '高对比模式',
    snapshot: '配置快照与备份',
    snapshotHint: '自动每日备份到本地；导出 JSON 即可手动跨设备同步',
    exportConfig: '导出配置',
    importConfig: '导入配置',
    shareConfig: '复制分享链接',
    pmPause: '暂停',
    pmCycle: '第 {n} 轮',
    exported: '配置已导出',
    imported: '已导入，正在刷新…',
    importFailed: '导入失败，格式无效',
    shared: '分享链接已复制'
  },
  'zh-TW': {
    pageTitle: '新分頁',
    settingsTitle: '頁面設定',
    close: '關閉',
    quicklinks: '網站導覽',
    off: '關閉',
    on: '開啟',
    rows1: '1 行',
    rows2: '2 行',
    searchEngine: '搜尋引擎',
    custom: '自訂',
    editCustomEngine: '編輯自訂搜尋引擎',
    saveHistory: '儲存搜尋紀錄',
    layout: '頁面佈局',
    inspirational: '展望',
    focused: '聚焦',
    background: '背景',
    editBackground: '編輯背景',
    language: '頁面語言',
    langAuto: '預設（隨設備設定）',
    cookieNotice: '隱私與 Cookie',
    license: '開源協議',
    updates: '檢查更新',
    helpFeedback: '說明與意見回饋',
    presentedBy: '由',
    forYou: '為您呈現',
    disclaimer: '請注意，此網頁與 Microsoft 無關。',
    searchPlaceholder: '搜尋或輸入 Web 地址',
    searchInput: '搜尋輸入框',
    searchButton: '搜尋',
    clearSearchHistory: '清除搜尋紀錄',
    customBackground: '自訂背景',
    usingDefaultBg: '正在使用預設背景',
    selectImage: '選擇圖片或影片',
    uploadFile: '上傳檔案',
    restoreDefault: '恢復預設',
    editShortcut: '編輯捷徑',
    name: '名稱',
    inputNamePh: '輸入捷徑名稱',
    errorNameReq: '請輸入捷徑名稱',
    errorUrlReq: '請輸入網址',
    delete: '刪除',
    cancel: '取消',
    save: '儲存',
    customEngineTitle: '自訂搜尋引擎',
    engineName: '搜尋引擎名稱',
    engineNamePh: '例如: DuckDuckGo',
    errorEngineNameReq: '請輸入搜尋引擎名稱',
    engineUrl: '搜尋 URL (%s 替換搜尋關鍵字)',
    errorEngineUrlFormat: '請輸入搜尋 URL，必須包含 %s',
    bgSource: '背景來源',
    bgDefault: '預設',
    bgDaily: '每日桌布',
    bgCustom: '自訂',
    quickMenu: '常用網站',
    skipToContent: '跳到主要內容',
    toolbar: '工具列',
    pmWork: '工作 25分',
    pmBreak: '休息 5分',
    pmStart: '開始',
    pmReset: '重設',
    pmHint: '空格 = 開始/暫停',
    pureMode: '純淨模式',
    pureModeHint: '停用所有動畫與動態桌布，零腳本、零追蹤，優先保護隱私與專注',
    highContrast: '高對比模式',
    snapshot: '設定快照與備份',
    snapshotHint: '每日自動備份到本機；匯出 JSON 即可手動跨裝置同步',
    exportConfig: '匯出設定',
    importConfig: '匯入設定',
    shareConfig: '複製分享連結',
    pmPause: '暫停',
    pmCycle: '第 {n} 輪',
    exported: '設定已匯出',
    imported: '已匯入，正在重新整理…',
    importFailed: '匯入失敗，格式無效',
    shared: '分享連結已複製'
  },
  'zh-WY': {
    pageTitle: '新標籤頁',
    settingsTitle: '頁面之設',
    close: '闔',
    quicklinks: '網要',
    off: '罷',
    on: '啟',
    rows1: '一列',
    rows2: '二列',
    searchEngine: '搜尋器',
    custom: '自訂',
    editCustomEngine: '輯自訂搜尋器',
    saveHistory: '存搜尋記',
    layout: '佈局',
    inspirational: '展望',
    focused: '專注',
    background: '底景',
    editBackground: '修撰底景',
    language: '頁語',
    langAuto: '預設（順裝置）',
    cookieNotice: '隱私與餅儲',
    license: '開源之約',
    updates: '檢新',
    helpFeedback: '求助與反饋',
    presentedBy: '由',
    forYou: '呈獻',
    disclaimer: '謹告：此頁與微軟無涉。',
    searchPlaceholder: '或搜或鍵，惟網址依',
    searchInput: '搜尋之框',
    searchButton: '搜',
    clearSearchHistory: '拭搜尋記',
    customBackground: '自定底景',
    usingDefaultBg: '現用默認底景',
    selectImage: '擇圖或影',
    uploadFile: '上傳檔案',
    restoreDefault: '復初',
    editShortcut: '修捷徑',
    name: '名',
    inputNamePh: '書捷徑之名',
    errorNameReq: '請填捷徑名',
    errorUrlReq: '請填網址',
    delete: '削',
    cancel: '罷',
    save: '儲',
    customEngineTitle: '自定搜尋器',
    engineName: '引擎之名',
    engineNamePh: '例: DuckDuckGo',
    errorEngineNameReq: '請填搜尋器名',
    engineUrl: '搜尋 URL (%s 換字)',
    errorEngineUrlFormat: '請填搜尋 URL，必含 %s',
    bgSource: '底景之源',
    bgDefault: '默認',
    bgDaily: '日日之壁',
    bgCustom: '自設',
    quickMenu: '常上之站',
    skipToContent: '跳到正文',
    toolbar: '工具欄',
    pmWork: '工作 25分',
    pmBreak: '休息 5分',
    pmStart: '開始',
    pmReset: '重設',
    pmHint: '空格 = 開始/暫停',
    pureMode: '純淨模式',
    pureModeHint: '停脱所有動畫與動態壁紙，零腳本、零追蹤，保私隱搭專注',
    highContrast: '高對比模式',
    snapshot: '設定快照與備份',
    snapshotHint: '每日自動備份到本地；導出 JSON 自好手動跨裝置同步',
    exportConfig: '導出設定',
    importConfig: '導入設定',
    shareConfig: '複製分享鏈接',
    pmPause: '暫停',
    pmCycle: '第 {n} 輪',
    exported: '設定已導出',
    imported: '已導入，正要刷新…',
    importFailed: '導入失敗，格式無效',
    shared: '分享鏈接已複製'
  },
  'en': {
    pageTitle: 'New Tab',
    settingsTitle: 'Page Settings',
    close: 'Close',
    quicklinks: 'Quick Links',
    off: 'Off',
    on: 'On',
    rows1: '1 row',
    rows2: '2 rows',
    searchEngine: 'Search Engine',
    custom: 'Custom',
    editCustomEngine: 'Edit custom search engine',
    saveHistory: 'Save search history',
    layout: 'Layout',
    inspirational: 'Inspirational',
    focused: 'Focused',
    background: 'Background',
    editBackground: 'Edit background',
    language: 'Language',
    langAuto: 'Default (System)',
    cookieNotice: 'Privacy & Cookies',
    license: 'License',
    updates: 'Check for Updates',
    helpFeedback: 'Help & Feedback',
    presentedBy: 'Presented by',
    forYou: '',
    disclaimer: 'Note: This page is not affiliated with Microsoft.',
    searchPlaceholder: 'Search the web or enter address',
    searchInput: 'Search input',
    searchButton: 'Search',
    clearSearchHistory: 'Clear search history',
    customBackground: 'Custom Background',
    usingDefaultBg: 'Using default background',
    selectImage: 'Select image or video',
    uploadFile: 'Upload file',
    restoreDefault: 'Restore default',
    editShortcut: 'Edit shortcut',
    name: 'Name',
    inputNamePh: 'Enter shortcut name',
    errorNameReq: 'Please enter shortcut name',
    errorUrlReq: 'Please enter URL',
    delete: 'Delete',
    cancel: 'Cancel',
    save: 'Save',
    customEngineTitle: 'Custom Search Engine',
    engineName: 'Engine Name',
    engineNamePh: 'e.g. DuckDuckGo',
    errorEngineNameReq: 'Please enter engine name',
    engineUrl: 'Search URL (%s replacing query)',
    errorEngineUrlFormat: 'Search URL must contain %s',
    bgSource: 'Background source',
    bgDefault: 'Default',
    bgDaily: 'Daily wallpaper',
    bgCustom: 'Custom',
    quickMenu: 'Quick sites',
    skipToContent: 'Skip to content',
    toolbar: 'Toolbar',
    pmWork: 'Work 25 min',
    pmBreak: 'Break 5 min',
    pmStart: 'Start',
    pmReset: 'Reset',
    pmHint: 'Space = start / pause',
    pureMode: 'Pure mode',
    pureModeHint: 'Disable all animations and dynamic wallpapers. Zero scripts, zero tracking — privacy and focus first.',
    highContrast: 'High contrast',
    snapshot: 'Config snapshot & backup',
    snapshotHint: 'Auto daily local backup. Export JSON to sync manually across devices.',
    exportConfig: 'Export config',
    importConfig: 'Import config',
    shareConfig: 'Copy share link',
    pmPause: 'Pause',
    pmCycle: 'Round {n}',
    exported: 'Config exported',
    imported: 'Imported, reloading…',
    importFailed: 'Import failed: invalid format',
    shared: 'Share link copied'
  },
  'ja': {
    pageTitle: '新しいタブ',
    settingsTitle: '設定',
    close: '閉じる',
    quicklinks: 'クイックリンク',
    off: 'オフ',
    on: 'オン',
    rows1: '1 行',
    rows2: '2 行',
    searchEngine: '検索エンジン',
    custom: 'カスタム',
    editCustomEngine: 'カスタム検索エンジンを編集',
    saveHistory: '検索履歴を保存',
    layout: 'レイアウト',
    inspirational: 'シンプル',
    focused: 'フォーカス',
    background: '背景',
    editBackground: '背景を編集',
    language: '言語',
    langAuto: 'デフォルト（システムに従う）',
    cookieNotice: 'プライバシーとクッキー',
    license: 'License',
    updates: '更新を確認',
    helpFeedback: 'ヘルプとフィードバック',
    presentedBy: '提供:',
    forYou: '',
    disclaimer: '注: このページは Microsoft とは関係ありません。',
    searchPlaceholder: 'Web を検索またはアドレスを入力',
    searchInput: '検索入力ボックス',
    searchButton: '検索',
    clearSearchHistory: '検索履歴を消去',
    customBackground: 'カスタム背景',
    usingDefaultBg: 'デフォルトの背景を使用中',
    selectImage: '画像または動画を選択',
    uploadFile: 'ファイルをアップロード',
    restoreDefault: 'デフォルトに戻す',
    editShortcut: 'ショートカットを編集',
    name: '名前',
    inputNamePh: 'ショートカット名を入力',
    errorNameReq: 'ショートカット名を入力してください',
    errorUrlReq: 'URLを入力してください',
    delete: '削除',
    cancel: 'キャンセル',
    save: 'OK',
    customEngineTitle: 'カスタム検索エンジン',
    engineName: '検索エンジン名',
    engineNamePh: '例: DuckDuckGo',
    errorEngineNameReq: '検索エンジン名を入力してください',
    engineUrl: '検索 URL (%s が検索語に置換されます)',
    errorEngineUrlFormat: '検索 URL には %s を含める必要があります',
    bgSource: '背景の種類',
    bgDefault: 'デフォルト',
    bgDaily: '毎日の壁紙',
    bgCustom: 'カスタム',
    quickMenu: 'よく使うサイト',
    skipToContent: '本文へスキップ',
    toolbar: 'ツールバー',
    pmWork: '作業 25分',
    pmBreak: '休憩 5分',
    pmStart: '開始',
    pmReset: 'リセット',
    pmHint: 'スペース = 開始/一時停止',
    pureMode: 'ピュアモード',
    pureModeHint: 'すべてのアニメーションと動的壁紙を無効化。ゼロスクリプト・ゼロトラッキングでプライバシーと集中を優先。',
    highContrast: 'ハイコントラスト',
    snapshot: '設定スナップショットとバックアップ',
    snapshotHint: '毎日自動でローカルにバックアップ。JSONをエクスポートして手動で同期。',
    exportConfig: 'エクスポート',
    importConfig: 'インポート',
    shareConfig: '共有リンクをコピー',
    pmPause: '一時停止',
    pmCycle: '第 {n} 輪',
    exported: '設定をエクスポートしました',
    imported: 'インポートしました。更新中…',
    importFailed: 'インポート失敗：形式が無効',
    shared: '共有リンクをコピーしました'
  },
  'ru': {
    pageTitle: 'Новая вкладка',
    settingsTitle: 'Настройки страницы',
    close: 'Закрыть',
    quicklinks: 'Быстрые ссылки',
    off: 'Выкл',
    on: 'Вкл',
    rows1: '1 строка',
    rows2: '2 строки',
    searchEngine: 'Поисковая система',
    custom: 'Пользовательская',
    editCustomEngine: 'Изменить поисковую систему',
    saveHistory: 'Сохранять историю поиска',
    layout: 'Макет',
    inspirational: 'Вдохновение',
    focused: 'Фокус',
    background: 'Фон',
    editBackground: 'Изменить фон',
    language: 'Язык',
    langAuto: 'По умолчанию (системный)',
    cookieNotice: 'Конфиденциальность и файлы cookie',
    license: 'Лицензия',
    updates: 'Обновления',
    helpFeedback: 'Справка и отзывы',
    presentedBy: 'Создатель:',
    forYou: '',
    disclaimer: 'Примечание: Эта страница не связана с Microsoft.',
    searchPlaceholder: 'Введите поисковый запрос или URL',
    searchInput: 'Поле поиска',
    searchButton: 'Поиск',
    clearSearchHistory: 'Очистить историю поиска',
    customBackground: 'Пользовательский фон',
    usingDefaultBg: 'Используется стандартный фон',
    selectImage: 'Выберите фото или видео',
    uploadFile: 'Загрузить файл',
    restoreDefault: 'Сбросить',
    editShortcut: 'Изменить ярлык',
    name: 'Название',
    inputNamePh: 'Введите название ярлыка',
    errorNameReq: 'Введите название',
    errorUrlReq: 'Введите URL',
    delete: 'Удалить',
    cancel: 'Отмена',
    save: 'Сохранить',
    customEngineTitle: 'Пользовательский поиск',
    engineName: 'Название',
    engineNamePh: 'Например: DuckDuckGo',
    errorEngineNameReq: 'Введите название',
    engineUrl: 'URL поиска (%s вместо запроса)',
    errorEngineUrlFormat: 'URL должен содержать %s',
    bgSource: 'Источник фона',
    bgDefault: 'По умолчанию',
    bgDaily: 'Ежедневные обои',
    bgCustom: 'Своя',
    quickMenu: 'Частые сайты',
    skipToContent: 'К содержанию',
    toolbar: 'Панель',
    pmWork: 'Работа 25 мин',
    pmBreak: 'Перерыв 5 мин',
    pmStart: 'Старт',
    pmReset: 'Сброс',
    pmHint: 'Пробел = старт/пауза',
    pureMode: 'Чистый режим',
    pureModeHint: 'Отключить все анимации и динамические обои. Ноль скриптов, ноль трекинга — приватность и фокус.',
    highContrast: 'Высокая контрастность',
    snapshot: 'Снимок и резервная копия',
    snapshotHint: 'Ежедневная локальная резервная копия. Экспортируйте JSON для ручной синхронизации.',
    exportConfig: 'Экспорт',
    importConfig: 'Импорт',
    shareConfig: 'Скопировать ссылку',
    pmPause: 'Пауза',
    pmCycle: 'Круг {n}',
    exported: 'Конфиг экспортирован',
    imported: 'Импортировано, обновление…',
    importFailed: 'Ошибка импорта: неверный формат',
    shared: 'Ссылка скопирована'
  }
};

// 检测与解析当前实际的语言代号
function getResolvedLanguageCode(langConfig) {
  if (langConfig && langConfig !== 'auto') {
    return langConfig;
  }
  const sysLang = (navigator.language || navigator.userLanguage || 'zh-CN').toLowerCase();
  if (sysLang.startsWith('zh')) {
    if (sysLang.includes('tw') || sysLang.includes('hk') || sysLang.includes('mo')) {
      return 'zh-TW';
    }
    return 'zh-CN';
  }
  if (sysLang.startsWith('ja')) return 'ja';
  if (sysLang.startsWith('ru')) return 'ru';
  if (sysLang.startsWith('en')) return 'en';
  return 'zh-CN';
}

// 界面国际化渲染核心函数
function applyLanguage(langConfig) {
  const langCode = getResolvedLanguageCode(langConfig);
  const dict = i18nData[langCode] || i18nData['zh-CN'];

  document.documentElement.lang = langCode.startsWith('zh') ? (langCode === 'zh-TW' ? 'zh-TW' : 'zh-CN') : langCode;

  // 1. 替换 innerText
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      el.innerText = dict[key];
    }
  });

  // 2. 替换 title 属性
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    if (dict[key] !== undefined) {
      el.setAttribute('title', dict[key]);
    }
  });

  // 3. 替换 placeholder 属性
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (dict[key] !== undefined) {
      el.setAttribute('placeholder', dict[key]);
    }
  });

  // 4. 替换 aria-label 属性
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.getAttribute('data-i18n-aria');
    if (dict[key] !== undefined) {
      el.setAttribute('aria-label', dict[key]);
    }
  });

  // 5. 刷新特殊状态开闭文本
  const statusHist = document.getElementById('status-history');
  if (statusHist) {
    const isChecked = document.getElementById('toggle-history-switch').checked;
    statusHist.innerText = isChecked ? dict.on : dict.off;
  }
  
  const statusBg = document.getElementById('status-bg');
  if (statusBg) {
    const isChecked = document.getElementById('toggle-bg-switch').checked;
    statusBg.innerText = isChecked ? dict.on : dict.off;
  }

  const statusBgModal = document.getElementById('status-bg-modal');
  if (statusBgModal) {
    const isChecked = document.getElementById('toggle-bg-modal-switch').checked;
    statusBgModal.innerText = isChecked ? dict.on : dict.off;
  }

  const statusPure = document.getElementById('status-pure');
  if (statusPure) {
    const isChecked = document.getElementById('toggle-pure-switch').checked;
    statusPure.innerText = isChecked ? dict.on : dict.off;
  }

  const statusHc = document.getElementById('status-hc');
  if (statusHc) {
    const isChecked = document.getElementById('toggle-hc-switch').checked;
    statusHc.innerText = isChecked ? dict.on : dict.off;
  }
}

// LocalStorage 持久化辅助对象
const Storage = {
  get(key, defaultValue) {
    try {
      const val = localStorage.getItem(key);
      return val !== null ? JSON.parse(val) : defaultValue;
    } catch (e) {
      return defaultValue;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.warn('无法保存设置到 LocalStorage:', e);
    }
  }
};

// 解析 Hostname 域名
function getDomain(urlStr) {
  try {
    if (!urlStr.startsWith('http://') && !urlStr.startsWith('https://')) {
      urlStr = 'https://' + urlStr;
    }
    const url = new URL(urlStr);
    return url.hostname;
  } catch (e) {
    return '';
  }
}

// 获取网站 Favicon Icon URL
function getFaviconUrl(urlStr) {
  const domain = getDomain(urlStr);
  if (!domain) return '';
  // DuckDuckGo 图标服务，国内可用且稳定
  return `https://api.xinac.net/icon/?url=${domain}`;
}

document.addEventListener('DOMContentLoaded', () => {
  // DOM 元素引用
  const btnSettings = document.getElementById('settings');
  const btnCloseSettings = document.getElementById('btn-close-settings');
  const popoverSettings = document.getElementById('popover-settings');
  const btnMenu = document.getElementById('menu-btn');
  const btnCloseMenu = document.getElementById('btn-close-menu');
  const popoverMenu = document.getElementById('popover-menu');

  const selectEngine = document.getElementById('select-engine');
  const btnEditEngine = document.getElementById('btn-edit-engine');
  const toggleHistorySwitch = document.getElementById('toggle-history-switch');
  const statusHistoryText = document.getElementById('status-history');
  const selectQuicklinks = document.getElementById('select-quicklinks');
  const quicklinksElem = document.getElementById('quicklinks');
  const logoContainer = document.getElementById('logo');
  const selectLanguage = document.getElementById('select-language');
  
  const searchContainer = document.getElementById('search-container');
  const fakebox = document.getElementById('fakebox');
  const searchInput = document.getElementById('search-input');
  const searchEngineIcon = document.getElementById('search-engine-icon');
  const searchButton = document.getElementById('search-button');
  const suggestionsBox = document.getElementById('suggestions-box');
  const suggestionList = document.getElementById('suggestion-list');
  const suggestionsFooter = document.getElementById('suggestions-footer');
  const clearHistoryBtn = document.getElementById('clear-history-btn');

  // Modal 相关 DOM 元素 (快捷方式)
  const modalOverlay = document.getElementById('modal');
  const modalTitle = document.getElementById('modal-title');
  const modalForm = document.getElementById('modal-form');
  const inputName = document.getElementById('input-name');
  const inputUrl = document.getElementById('input-url');
  const containerName = document.getElementById('container-name');
  const containerUrl = document.getElementById('container-url');
  const tipName = document.getElementById('tip-name');
  const tipUrl = document.getElementById('tip-url');
  const textUrlError = document.getElementById('text-url-error');

  const btnDelete = document.getElementById('btn-delete');
  const btnCancel = document.getElementById('btn-cancel');

  // Modal 相关 DOM 元素 (自定义搜索引擎)
  const customEngineModal = document.getElementById('custom-engine-modal');
  const customEngineForm = document.getElementById('custom-engine-form');
  const inputEngineName = document.getElementById('input-engine-name');
  const inputEngineUrl = document.getElementById('input-engine-url');
  const containerEngineName = document.getElementById('container-engine-name');
  const containerEngineUrl = document.getElementById('container-engine-url');
  const tipEngineName = document.getElementById('tip-engine-name');
  const tipEngineUrl = document.getElementById('tip-engine-url');
  const textEngineUrlError = document.getElementById('text-engine-url-error');
  const btnEngineCancel = document.getElementById('btn-engine-cancel');

  // 背景/壁纸控制 DOM 元素
  const toggleBgSwitch = document.getElementById('toggle-bg-switch');
  const statusBgText = document.getElementById('status-bg');
  const btnOpenBgModal = document.getElementById('btn-open-bg-modal');
  
  const modalWallpaper = document.getElementById('modal-wallpaper');
  const btnCloseWallpaperModal = document.getElementById('btn-close-wallpaper-modal');
  const toggleBgModalSwitch = document.getElementById('toggle-bg-modal-switch');
  const statusBgModalText = document.getElementById('status-bg-modal');
  const wallpaperPreviewContainer = document.getElementById('wallpaper-preview-container');
  const btnUploadWallpaper = document.getElementById('btn-upload-wallpaper');
  const btnRemoveWallpaper = document.getElementById('btn-remove-wallpaper');
  const inputWallpaperFile = document.getElementById('input-wallpaper-file');
  const wallpaperTypeTitle = document.getElementById('wallpaper-type-title');

  const bgVideo = document.getElementById('bg-video');
  const bgImage = document.getElementById('bg-image');
  const bgSourceOptions = document.querySelectorAll('.bg-source-option');

  if (searchInput && searchInput.value.trim() !== '') {
  const fakebox = document.getElementById('fakebox');
  fakebox?.classList.add('has-value');
  }

  let currentEditingId = null;
  let selectedSuggestionIndex = -1;

  // 默认与自定义搜索引擎 URL
  let customEngineConfig = Storage.get('ntp_custom_engine_config', {
    name: '',
    url: ''
  });

  const engineSearchUrls = {
    bing: 'https://www.bing.com/search?q=',
    baidu: 'https://www.baidu.com/s?wd=',
    google: 'https://www.google.com/search?q='
  };

  // 切换设置面板显隐（与快捷菜单互斥）
  btnSettings?.addEventListener('click', (e) => {
    e.stopPropagation();
    popoverMenu?.classList.remove('active');
    popoverSettings.classList.toggle('active');
  });

  // 切换左上角常用网站快捷菜单显隐（与设置面板互斥）
  btnMenu?.addEventListener('click', (e) => {
    e.stopPropagation();
    popoverSettings?.classList.remove('active');
    popoverMenu.classList.toggle('active');
  });

  // 关闭按钮
  btnCloseMenu?.addEventListener('click', () => popoverMenu?.classList.remove('active'));

  // 点击快捷启动面板中的站点后收起面板
  document.querySelectorAll('#quick-menu a.qm-tile').forEach(tile => {
    tile.addEventListener('click', () => popoverMenu?.classList.remove('active'));
  });

  if (btnCloseSettings) {
    btnCloseSettings.addEventListener('click', () => {
      popoverSettings.classList.remove('active');
    });
  }

  document.addEventListener('click', (e) => {
    if (popoverSettings && !popoverSettings.contains(e.target) && !btnSettings?.contains(e.target)) {
      popoverSettings.classList.remove('active');
    }
    if (popoverMenu && !popoverMenu.contains(e.target) && !btnMenu?.contains(e.target)) {
      popoverMenu.classList.remove('active');
    }
    if (!searchContainer?.contains(e.target)) {
      closeSuggestions();
    }
  });

  // 切换 Logo
  function setLogo(engine) {
    if (logos[engine] !== undefined && logoContainer) {
      logoContainer.innerHTML = logos[engine];
    }
  }

  // 切换搜索框最前端的搜索引擎图标
  function updateSearchEngineIcon(engine) {
    if (searchEngineIcon) {
      searchEngineIcon.innerHTML = searchEngineIcons[engine] || searchEngineIcons.bing;
      // 重新触发弹跳动画，让图标切换更醒目
      searchEngineIcon.classList.remove('icon-pop');
      void searchEngineIcon.offsetWidth;
      searchEngineIcon.classList.add('icon-pop');
    }
  }

  // 动态管理自定义搜索引擎“编辑”按钮显隐
  function updateEngineEditButton(engine) {
    if (btnEditEngine) {
      btnEditEngine.style.display = engine === 'custom' ? 'inline-flex' : 'none';
    }
  }

  // --- 1. 读取并应用保存的页面设置 ---
  const savedEngine = Storage.get('ntp_engine', 'bing');
  const savedLayout = Storage.get('ntp_layout', 'focused');
  const savedQuicklinksRow = Storage.get('ntp_quicklinks', '1');
  let historyEnabled = Storage.get('ntp_history_enabled', true);
  let searchHistory = Storage.get('ntp_search_history', []);
  
  let bgEnabled = Storage.get('ntp_bg_enabled', false);
  let customWallpaperData = Storage.get('ntp_custom_wallpaper', null);
  let bgMode = Storage.get('ntp_bg_mode', 'default');

  if (selectEngine) selectEngine.value = savedEngine;
  if (selectQuicklinks) selectQuicklinks.value = savedQuicklinksRow;
  if (toggleHistorySwitch) toggleHistorySwitch.checked = historyEnabled;

  setLogo(savedEngine);
  updateEngineEditButton(savedEngine);
  updateSearchEngineIcon(savedEngine);
  document.body.setAttribute('data-layout', savedLayout);
  quicklinksElem?.setAttribute('rows', savedQuicklinksRow);

  // 背景显隐及渲染逻辑
  function applyBackgroundState() {
    if (toggleBgSwitch) toggleBgSwitch.checked = bgEnabled;
    if (toggleBgModalSwitch) toggleBgModalSwitch.checked = bgEnabled;

    if (bgEnabled) {
      document.body.classList.add('bg-enabled');
      renderWallpaper();
    } else {
      document.body.classList.remove('bg-enabled');
      if (bgVideo) bgVideo.style.display = 'none';
      if (bgImage) bgImage.style.display = 'none';
    }
  }

  function updateBgSourceUI() {
    bgSourceOptions.forEach(opt => {
      opt.classList.toggle('active', opt.dataset.bgMode === bgMode);
    });
  }

  function applyBgMedia(src, isVideo) {
    if (bgVideo) bgVideo.style.display = isVideo ? 'block' : 'none';
    if (bgImage) bgImage.style.display = isVideo ? 'none' : 'block';
    if (isVideo) {
      if (bgVideo) { bgVideo.src = src; bgVideo.play().catch(() => {}); }
    } else if (bgImage) {
      bgImage.src = src;
    }
  }

  function resetWallpaperPreview() {
    if (wallpaperPreviewContainer) {
      wallpaperPreviewContainer.innerHTML = `<span style="font-size: 13px; color: var(--settings-text-secondary);" data-i18n="usingDefaultBg">正在使用默认背景</span>`;
    }
  }

  function updateWallpaperPreview(src) {
    if (wallpaperPreviewContainer) {
      wallpaperPreviewContainer.innerHTML = `<img src="${src}" alt="背景预览" style="width:100%;height:100%;object-fit:cover;" />`;
    }
  }

  // 拉取并应用 Microsoft 每日壁纸（Bing 每日图片）
  async function applyBingDailyWallpaper() {
    if (wallpaperTypeTitle) wallpaperTypeTitle.textContent = 'Microsoft 每日壁纸';
    try {
      const res = await fetch('https://bing.biturl.top/?resolution=1920&format=json&mkt=zh-CN');
      const data = await res.json();
      const url = (data && data.url) ||
        (data && data.images && data.images[0] && 'https://www.bing.com' + data.images[0].url);
      if (!url) throw new Error('no image url');
      const probe = new Image();
      probe.onload = () => {
        applyBgMedia(url, false);
        updateWallpaperPreview(url);
      };
      probe.onerror = () => {
        applyBgMedia('img/background.webp', false);
        resetWallpaperPreview();
      };
      probe.src = url;
    } catch (e) {
      console.warn('获取 Microsoft 每日壁纸失败，使用默认背景:', e);
      applyBgMedia('img/background.webp', false);
      resetWallpaperPreview();
    }
  }

  function renderWallpaper() {
    if (bgMode === 'bingdaily') {
      applyBingDailyWallpaper();
      return;
    }
    if (bgMode === 'custom' && customWallpaperData) {
      if (wallpaperTypeTitle) wallpaperTypeTitle.textContent = '上传的背景';
      applyBgMedia(customWallpaperData.url, customWallpaperData.type === 'video');
      if (wallpaperPreviewContainer) {
        wallpaperPreviewContainer.innerHTML = (customWallpaperData.type === 'video')
          ? `<video src="${customWallpaperData.url}" autoplay loop muted playsinline style="width:100%;height:100%;object-fit:cover;"></video>`
          : `<img src="${customWallpaperData.url}" alt="背景预览" style="width:100%;height:100%;object-fit:cover;" />`;
      }
      return;
    }
    // 默认背景（或自定义来源但尚未上传）
    if (wallpaperTypeTitle) wallpaperTypeTitle.textContent = '选择图片';
    applyBgMedia('img/background.webp', false);
    resetWallpaperPreview();
  }

  applyBackgroundState();
  updateBgSourceUI();

  // 背景开关同步响应
  toggleBgSwitch?.addEventListener('change', (e) => {
    bgEnabled = e.target.checked;
    Storage.set('ntp_bg_enabled', bgEnabled);
    applyBackgroundState();
    applyLanguage(localStorage.getItem('liteStart_language') || 'auto');
  });

  toggleBgModalSwitch?.addEventListener('change', (e) => {
    bgEnabled = e.target.checked;
    Storage.set('ntp_bg_enabled', bgEnabled);
    applyBackgroundState();
    applyLanguage(localStorage.getItem('liteStart_language') || 'auto');
  });

  // 背景来源切换
  bgSourceOptions.forEach(opt => {
    opt.addEventListener('click', () => {
      bgMode = opt.dataset.bgMode;
      Storage.set('ntp_bg_mode', bgMode);
      bgEnabled = true;
      Storage.set('ntp_bg_enabled', bgEnabled);
      updateBgSourceUI();
      applyBackgroundState();
      if (bgMode === 'custom' && !customWallpaperData) {
        popoverSettings?.classList.remove('active');
        modalWallpaper?.classList.add('active');
      }
      applyLanguage(localStorage.getItem('liteStart_language') || 'auto');
    });
  });

  // 壁纸弹窗逻辑
  btnOpenBgModal?.addEventListener('click', () => {
    popoverSettings?.classList.remove('active');
    modalWallpaper?.classList.add('active');
    renderWallpaper();
    applyLanguage(localStorage.getItem('liteStart_language') || 'auto');
  });

  btnCloseWallpaperModal?.addEventListener('click', () => {
    modalWallpaper?.classList.remove('active');
  });

  btnUploadWallpaper?.addEventListener('click', () => {
    inputWallpaperFile?.click();
  });

  inputWallpaperFile?.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const isVideo = file.type.startsWith('video/');
    const reader = new FileReader();

    reader.onload = (event) => {
      customWallpaperData = {
        type: isVideo ? 'video' : 'image',
        url: event.target.result
      };
      bgMode = 'custom';
      Storage.set('ntp_custom_wallpaper', customWallpaperData);
      Storage.set('ntp_bg_mode', bgMode);
      updateBgSourceUI();
      applyBackgroundState();
    };

    reader.readAsDataURL(file);
  });

  btnRemoveWallpaper?.addEventListener('click', () => {
    customWallpaperData = null;
    bgMode = 'default';
    Storage.set('ntp_custom_wallpaper', null);
    Storage.set('ntp_bg_mode', bgMode);
    updateBgSourceUI();
    applyBackgroundState();
  });

  // 初始化更新布局预设卡片选中状态
  function updateLayoutPresetUI(currentLayout) {
    document.querySelectorAll('.preset-card').forEach(card => {
      if (card.dataset.layoutVal === currentLayout) {
        card.classList.add('active');
      } else {
        card.classList.remove('active');
      }
    });
  }
  updateLayoutPresetUI(savedLayout);

  // 切换页面布局时，让搜索框平滑滑动过渡
  function animateLayoutTransition(prevLayout, nextLayout) {
    const el = document.getElementById('search-container');
    if (!el) return;
    const slideDown = prevLayout === 'inspirational' && nextLayout === 'focused';
    const slideUp = prevLayout === 'focused' && nextLayout === 'inspirational';
    if (!slideDown && !slideUp) return;
    el.style.animation = 'none';
    void el.offsetWidth; // 强制重排以重置动画
    el.style.animation = slideUp
      ? 'slideLayoutUp 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)'
      : 'slideLayoutDown 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)';
  }

  // 布局卡片点击监听
  document.querySelectorAll('.preset-card').forEach(card => {
    card.addEventListener('click', () => {
      const prevLayout = document.body.getAttribute('data-layout') || 'focused';
      const layoutVal = card.dataset.layoutVal;
      if (prevLayout === layoutVal) return;
      document.body.setAttribute('data-layout', layoutVal);
      Storage.set('ntp_layout', layoutVal);
      updateLayoutPresetUI(layoutVal);
      animateLayoutTransition(prevLayout, layoutVal);
    });
  });

  // 设置面板切换监听
  selectEngine?.addEventListener('change', (e) => {
    const val = e.target.value;
    setLogo(val);
    updateEngineEditButton(val);
    updateSearchEngineIcon(val);
    Storage.set('ntp_engine', val);
    if (val === 'custom' && (!customEngineConfig.url || customEngineConfig.url === 'https://duckduckgo.com/?q=%s')) {
      openCustomEngineModal();
    }
  });

  btnEditEngine?.addEventListener('click', () => {
    openCustomEngineModal();
  });

  toggleHistorySwitch?.addEventListener('change', (e) => {
    historyEnabled = e.target.checked;
    Storage.set('ntp_history_enabled', historyEnabled);
    applyLanguage(localStorage.getItem('liteStart_language') || 'auto');
    fetchAndShowSuggestions();
  });

  selectQuicklinks?.addEventListener('change', (e) => {
    const val = e.target.value;
    quicklinksElem?.setAttribute('rows', val);
    Storage.set('ntp_quicklinks', val);
  });

  // 自定义搜索引擎对话框逻辑
  function openCustomEngineModal() {
    if (inputEngineName) inputEngineName.value = customEngineConfig.name || '';
    if (inputEngineUrl) inputEngineUrl.value = customEngineConfig.url || '';
    containerEngineName?.classList.remove('error');
    containerEngineUrl?.classList.remove('error');
    tipEngineName?.classList.remove('active');
    tipEngineUrl?.classList.remove('active');
    customEngineModal?.classList.add('active');
    setTimeout(() => inputEngineName?.focus(), 50);
  }

  function closeCustomEngineModal() {
    customEngineModal?.classList.remove('active');
  }

  btnEngineCancel?.addEventListener('click', closeCustomEngineModal);

  customEngineForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    let name = inputEngineName.value.trim();
    let url = inputEngineUrl.value.trim();
    let hasError = false;

    containerEngineName?.classList.remove('error');
    containerEngineUrl?.classList.remove('error');
    tipEngineName?.classList.remove('active');
    tipEngineUrl?.classList.remove('active');

    if (!name) {
      containerEngineName?.classList.add('error');
      tipEngineName?.classList.add('active');
      inputEngineName?.focus();
      hasError = true;
    }

    if (!url) {
      containerEngineUrl?.classList.add('error');
      tipEngineUrl?.classList.add('active');
      if (!hasError) inputEngineUrl?.focus();
      hasError = true;
    } else if (!url.includes('%s')) {
      containerEngineUrl?.classList.add('error');
      tipEngineUrl?.classList.add('active');
      if (!hasError) inputEngineUrl?.focus();
      hasError = true;
    }

    if (hasError) return;

    customEngineConfig = { name, url };
    Storage.set('ntp_custom_engine_config', customEngineConfig);
    closeCustomEngineModal();
  });

  // --- 2. 快捷方式列表管理 ---
  let quicklinksList = Storage.get('ntp_quicklinks_list', []);

  function renderQuicklinks() {
  if (!quicklinksElem) return;
  quicklinksElem.innerHTML = '';

  quicklinksList.forEach((item, index) => {
    const linkElem = document.createElement('a');
    linkElem.href = item.url;
    linkElem.className = 'quicklink-item';
    linkElem.target = '_blank';
    linkElem.setAttribute('data-id', item.id);

    const initialChar = (item.title || 'W').charAt(0).toUpperCase();
    const faviconUrl = getFaviconUrl(item.url);

    // 构建图标内容：立即显示首字母，favicon 加载成功后淡入覆盖
    let iconContent = '';
    if (faviconUrl) {
      iconContent = `<span class="ql-fallback">${initialChar}</span>
        <img src="${faviconUrl}" alt="${item.title}" class="ql-img"
             onload="this.classList.add('ql-loaded')" onerror="this.remove()">`;
    } else {
      iconContent = `<span class="ql-fallback">${initialChar}</span>`;
    }

    linkElem.innerHTML = `
      <div class="quicklink-icon">${iconContent}</div>
      <span class="quicklink-title">${item.title}</span>
      <button type="button" class="quicklink-edit-btn" title="编辑快捷方式">
        <svg width="14" height="14" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0zm5 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0zm5 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0z"/>
        </svg>
      </button>
    `;

    const editBtn = linkElem.querySelector('.quicklink-edit-btn');
    editBtn?.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      openEditModal(item);
    });

    // 逐项错峰入场，营造更流畅的动画过渡
    linkElem.style.animationDelay = `${index * 0.04}s`;

    quicklinksElem.appendChild(linkElem);
  });

  // 添加“添加”按钮（保持不变）
  const addBtnElem = document.createElement('div');
  addBtnElem.className = 'quicklink-item quicklink-add-btn';
  addBtnElem.title = '添加快捷方式';
  addBtnElem.innerHTML = `
    <div class="quicklink-icon quicklink-add-icon">
      <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
      </svg>
    </div>
    <span class="quicklink-title">添加</span>
  `;

  addBtnElem.addEventListener('click', () => {
    openAddModal();
  });

  quicklinksElem.appendChild(addBtnElem);
}

  // --- 3. 自定义校验与 Modal 对话框逻辑 ---
  function clearErrors() {
    containerName?.classList.remove('error');
    containerUrl?.classList.remove('error');
    tipName?.classList.remove('active');
    tipUrl?.classList.remove('active');
  }

  function showNameError() {
    containerName?.classList.add('error');
    tipName?.classList.add('active');
  }

  function showUrlError() {
    containerUrl?.classList.add('error');
    tipUrl?.classList.add('active');
  }

  inputName?.addEventListener('input', () => {
    containerName?.classList.remove('error');
    tipName?.classList.remove('active');
  });

  inputUrl?.addEventListener('input', () => {
    containerUrl?.classList.remove('error');
    tipUrl?.classList.remove('active');
  });

  function openAddModal() {
    currentEditingId = null;
    if (inputName) inputName.value = '';
    if (inputUrl) inputUrl.value = '';
    clearErrors();
    if (btnDelete) btnDelete.style.display = 'none';
    modalOverlay?.classList.add('active');
    setTimeout(() => inputName?.focus(), 50);
  }

  function openEditModal(item) {
    currentEditingId = item.id;
    if (inputName) inputName.value = item.title;
    if (inputUrl) inputUrl.value = item.url;
    clearErrors();
    if (btnDelete) btnDelete.style.display = 'inline-flex';
    modalOverlay?.classList.add('active');
    setTimeout(() => inputName?.focus(), 50);
  }

  function closeModal() {
    modalOverlay?.classList.remove('active');
    currentEditingId = null;
    clearErrors();
  }

  btnCancel?.addEventListener('click', closeModal);

  modalOverlay?.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

  btnDelete?.addEventListener('click', () => {
    if (currentEditingId) {
      quicklinksList = quicklinksList.filter(item => item.id !== currentEditingId);
      Storage.set('ntp_quicklinks_list', quicklinksList);
      renderQuicklinks();
      closeModal();
    }
  });

  modalForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    clearErrors();

    const title = inputName.value.trim();
    let url = inputUrl.value.trim();
    let hasError = false;

    if (!title) {
      showNameError();
      inputName.focus();
      hasError = true;
    }

    if (!url) {
      showUrlError();
      if (!hasError) inputUrl.focus();
      hasError = true;
    } else {
      const domain = getDomain(url);
      if (!domain) {
        showUrlError();
        if (!hasError) inputUrl.focus();
        hasError = true;
      }
    }

    if (hasError) return;

    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      url = 'https://' + url;
    }

    if (currentEditingId) {
      const itemIndex = quicklinksList.findIndex(item => item.id === currentEditingId);
      if (itemIndex !== -1) {
        quicklinksList[itemIndex] = { ...quicklinksList[itemIndex], title, url };
      }
    } else {
      const newItem = {
        id: Date.now().toString(),
        title,
        url
      };
      quicklinksList.push(newItem);
    }

    Storage.set('ntp_quicklinks_list', quicklinksList);
    renderQuicklinks();
    closeModal();
  });

  renderQuicklinks();

  // --- 4. 搜索框历史记录与搜索建议词条 ---
  clearHistoryBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    searchHistory = [];
    Storage.set('ntp_search_history', []);
    fetchAndShowSuggestions();
  });

  function saveSearchHistory(query) {
    if (!historyEnabled || !query) return;
    searchHistory = searchHistory.filter(item => item.toLowerCase() !== query.toLowerCase());
    searchHistory.unshift(query);
    if (searchHistory.length > 50) {
      searchHistory.pop();
    }
    Storage.set('ntp_search_history', searchHistory);
  }

  const historySvgIcon = `<svg width="18" height="18" viewBox="0 0 24 24"><path d="M13 3a9 9 0 0 0-9 9H1l3.89 3.89.07.14L9 12H6a7 7 0 1 1 7 7 7.07 7.07 0 0 1-6-3.37l-1.44 1.44A8.95 8.95 0 0 0 13 21a9 9 0 0 0 0-18zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/></svg>`;
  const searchSvgIcon = `<svg width="18" height="18" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>`;

  function closeSuggestions() {
    searchContainer?.classList.remove('suggestions-open');
    selectedSuggestionIndex = -1;
  }

  function renderSuggestions(historyItems, suggestionItems) {
    if (!suggestionList) return;
    suggestionList.innerHTML = '';
    selectedSuggestionIndex = -1;

    const totalItems = [];

    historyItems.forEach(item => {
      totalItems.push({ text: item, isHistory: true });
    });

    suggestionItems.forEach(item => {
      if (!totalItems.some(i => i.text.toLowerCase() === item.toLowerCase())) {
        totalItems.push({ text: item, isHistory: false });
      }
    });

    if (totalItems.length === 0) {
      closeSuggestions();
      return;
    }

    totalItems.forEach((itemObj) => {
      const li = document.createElement('li');
      li.className = 'suggestion-item' + (itemObj.isHistory ? ' history' : '');
      li.innerHTML = `${itemObj.isHistory ? historySvgIcon : searchSvgIcon}<span class="suggestion-text">${itemObj.text}</span>`;
      
      li.addEventListener('click', () => {
        if (searchInput) searchInput.value = itemObj.text;
        doSearch(itemObj.text);
      });

      suggestionList.appendChild(li);
    });

    if (suggestionsFooter) {
      suggestionsFooter.style.display = historyItems.length > 0 ? 'block' : 'none';
    }

    searchContainer?.classList.add('suggestions-open');
  }

  // 扩展专用的异步 Fetch 搜索
  async function fetchSearchSuggestions(engine, query) {
    try {
      if (engine === 'baidu' || engine === 'bing') {
        const response = await fetch(`https://suggestion.baidu.com/su?wd=${encodeURIComponent(query)}&p=3`);
        const buffer = await response.arrayBuffer();
        const decoder = new TextDecoder('gbk'); // 百度联想词通常返回 GBK 编码
        const text = decoder.decode(buffer);
        const match = text.match(/s:\[(.*?)\]/);
        if (match && match[1]) {
          return match[1].split(',').map(item => item.replace(/^"|"$/g, '').trim()).filter(Boolean);
        }
      } else if (engine === 'google') {
        const response = await fetch(`https://suggestqueries.google.com/complete/search?client=chrome&q=${encodeURIComponent(query)}`);
        const data = await response.json();
        if (Array.isArray(data) && Array.isArray(data[1])) {
          return data[1];
        }
      } 
    } catch (e) {
      console.warn('获取搜索联想建议词条失败:', e);
    }
    return [];
  }

  async function fetchAndShowSuggestions() {
    if (!searchInput) return;
    const query = searchInput.value.trim();

    let matchedHistory = [];
    if (historyEnabled) {
      if (query) {
        matchedHistory = searchHistory.filter(h => h.toLowerCase().includes(query.toLowerCase())).slice(0, 5);
      } else {
        matchedHistory = searchHistory.slice(0, 5);
      }
    }

    if (!query) {
      if (matchedHistory.length > 0) {
        renderSuggestions(matchedHistory, []);
      } else {
        closeSuggestions();
      }
      return;
    }

    const engine = selectEngine ? selectEngine.value : 'bing';
    let fetchedSuggestions = [];

    if (engine !== 'custom') {
      fetchedSuggestions = await fetchSearchSuggestions(engine, query);
    }

    renderSuggestions(matchedHistory, fetchedSuggestions.slice(0, 8));
  }

  function debounce(fn, delay) {
    let timer = null;
    return function(...args) {
      clearTimeout(timer);
      timer = setTimeout(() => fn.apply(this, args), delay);
    };
  }

  const debouncedFetchSuggestions = debounce(fetchAndShowSuggestions, 150);

  fakebox?.addEventListener('click', () => {
    searchInput?.focus();
  });

  // 点击右侧搜索按钮触发搜索（配合键盘 Enter 使用）
  searchButton?.addEventListener('click', (e) => {
    e.stopPropagation();
    doSearch();
  });

  searchInput?.addEventListener('focus', () => {
    fetchAndShowSuggestions();
  });


searchInput?.addEventListener('input', () => {
  const fakebox = document.getElementById('fakebox');
  if (searchInput.value.trim() !== '') {
    fakebox?.classList.add('has-value');
  } else {
    fakebox?.classList.remove('has-value');
  }
  debouncedFetchSuggestions();
});

  searchInput?.addEventListener('keydown', (e) => {
    if (!suggestionList) return;
    const items = suggestionList.querySelectorAll('.suggestion-item');
    
    if (e.key === 'ArrowDown') {
      if (items.length > 0) {
        e.preventDefault();
        if (selectedSuggestionIndex < items.length - 1) {
          selectedSuggestionIndex++;
        } else {
          selectedSuggestionIndex = 0;
        }
        updateSuggestionSelection(items);
      }
    } else if (e.key === 'ArrowUp') {
      if (items.length > 0) {
        e.preventDefault();
        if (selectedSuggestionIndex > 0) {
          selectedSuggestionIndex--;
        } else {
          selectedSuggestionIndex = items.length - 1;
        }
        updateSuggestionSelection(items);
      }
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (selectedSuggestionIndex >= 0 && items[selectedSuggestionIndex]) {
        const text = items[selectedSuggestionIndex].querySelector('.suggestion-text').textContent;
        if (searchInput) searchInput.value = text;
        doSearch(text);
      } else {
        doSearch(searchInput.value.trim());
      }
    } else if (e.key === 'Escape') {
      closeSuggestions();
    }
  });

  function updateSuggestionSelection(items) {
    items.forEach((item, index) => {
      if (index === selectedSuggestionIndex) {
        item.classList.add('selected');
        if (searchInput) searchInput.value = item.querySelector('.suggestion-text').textContent;
      } else {
        item.classList.remove('selected');
      }
    });
  }

  // --- 5. 执行搜索逻辑 ---
  function doSearch(queryText) {
    const query = queryText !== undefined ? queryText : (searchInput ? searchInput.value.trim() : '');
    if (query) {
      saveSearchHistory(query);
      closeSuggestions();

      const engine = selectEngine ? selectEngine.value : 'bing';
      let targetUrl = '';

      if (engine === 'custom' && customEngineConfig.url) {
        targetUrl = customEngineConfig.url.replace('%s', encodeURIComponent(query));
      } else {
        const baseUrl = engineSearchUrls[engine] || engineSearchUrls.bing;
        targetUrl = baseUrl + encodeURIComponent(query);
      }

      window.location.href = targetUrl;
    }
  }

  // --- 6. 语言选择与应用初始化 ---
  const savedLang = localStorage.getItem('liteStart_language') || 'auto';
  if (selectLanguage) {
    selectLanguage.value = savedLang;
    selectLanguage.addEventListener('change', (e) => {
      const val = e.target.value;
      localStorage.setItem('liteStart_language', val);
      applyLanguage(val);
    });
  }

  // 初始化应用全页翻译
  applyLanguage(savedLang);

  // 当前生效语言字典（供运行时提示文案使用）
  const curDictNow = i18nData[getResolvedLanguageCode(savedLang)] || i18nData['zh-CN'];

  // =====================================================================
  // 功能 A. 纯净模式：一键禁用全部动画与动态壁纸（零脚本零追踪）
  // =====================================================================
  const togglePureSwitch = document.getElementById('toggle-pure-switch');
  const applyPureMode = (on) => document.body.classList.toggle('pure-mode', !!on);
  if (togglePureSwitch) {
    togglePureSwitch.checked = !!Storage.get('ntp_pure_mode', false);
    applyPureMode(togglePureSwitch.checked);
    togglePureSwitch.addEventListener('change', () => {
      const on = togglePureSwitch.checked;
      Storage.set('ntp_pure_mode', on);
      applyPureMode(on);
      // 纯净模式下暂停动态壁纸视频
      if (on && bgVideo && bgVideo.tagName === 'VIDEO') {
        try { bgVideo.pause(); } catch (e) {}
      }
      applyLanguage(savedLang);
    });
  } else {
    applyPureMode(Storage.get('ntp_pure_mode', false));
  }

  // =====================================================================
  // 功能 B. 高对比模式（无障碍增强）
  // =====================================================================
  const toggleHcSwitch = document.getElementById('toggle-hc-switch');
  const applyHcMode = (on) => document.body.classList.toggle('high-contrast', !!on);
  if (toggleHcSwitch) {
    toggleHcSwitch.checked = !!Storage.get('ntp_high_contrast', false);
    applyHcMode(toggleHcSwitch.checked);
    toggleHcSwitch.addEventListener('change', () => {
      const on = toggleHcSwitch.checked;
      Storage.set('ntp_high_contrast', on);
      applyHcMode(on);
      applyLanguage(savedLang);
    });
  } else {
    applyHcMode(Storage.get('ntp_high_contrast', false));
  }
  // 刷新纯净/高对比状态文本
  applyLanguage(savedLang);

  // =====================================================================
  // 功能 C. 底部工具栏：番茄钟（环形进度/工作-休息/空格控制/持久化）
  // =====================================================================
  const fabBtn = document.getElementById('toolbar-fab-btn');
  const pmPanel = document.getElementById('pomodoro-panel');
  const pmClose = document.getElementById('pomodoro-close');
  const pmStartBtn = document.getElementById('pomodoro-start');
  const pmResetBtn = document.getElementById('pomodoro-reset');
  const pmTimeEl = document.getElementById('pomodoro-time');
  const pmCycleEl = document.getElementById('pomodoro-cycle');
  const pmRing = document.getElementById('pomodoro-ring');
  const pmModeBtns = document.querySelectorAll('.pomodoro-mode-btn');

  const PMCONFIG = { work: 25 * 60, break: 5 * 60 };
  let pmState = Object.assign({ mode: 'work', cycle: 0 }, Storage.get('ntp_pomodoro', {}));
  if (pmState.mode !== 'work' && pmState.mode !== 'break') pmState.mode = 'work';
  if (typeof pmState.cycle !== 'number') pmState.cycle = 0;
  let pmRemaining = PMCONFIG[pmState.mode];
  let pmRunning = false;
  let pmTimer = null;

  const pmFmt = (sec) => {
    const m = String(Math.floor(sec / 60)).padStart(2, '0');
    const s = String(sec % 60).padStart(2, '0');
    return m + ':' + s;
  };

  function pmRender() {
    const total = PMCONFIG[pmState.mode] || 1;
    const p = ((total - pmRemaining) / total) * 100;
    if (pmRing) pmRing.style.setProperty('--p', String(Math.min(100, Math.max(0, p))));
    if (pmTimeEl) pmTimeEl.textContent = pmFmt(pmRemaining);
    if (pmCycleEl) pmCycleEl.textContent = (curDictNow.pmCycle || '第 {n} 轮').replace('{n}', String(pmState.cycle));
    pmModeBtns.forEach(b => b.classList.toggle('active', b.dataset.pmMode === pmState.mode));
    if (pmStartBtn) pmStartBtn.textContent = pmRunning ? (curDictNow.pmPause || '暂停') : (curDictNow.pmStart || '开始');
  }

  function pmBeep() {
    try {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      if (!Ctx) return;
      const ctx = new Ctx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = 'sine';
      osc.frequency.value = 880;
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      osc.start();
      osc.stop(ctx.currentTime + 0.4);
    } catch (e) {}
  }

  function pmStopTimer() {
    if (pmTimer) { clearInterval(pmTimer); pmTimer = null; }
    pmRunning = false;
  }

  function pmTick() {
    pmRemaining--;
    if (pmRemaining <= 0) {
      pmBeep();
      if (pmState.mode === 'work') {
        pmState.cycle++;
        pmState.mode = 'break';
      } else {
        pmState.mode = 'work';
      }
      Storage.set('ntp_pomodoro', { mode: pmState.mode, cycle: pmState.cycle });
      pmRemaining = PMCONFIG[pmState.mode];
    }
    pmRender();
  }

  function pmToggle() {
    if (pmRunning) {
      pmStopTimer();
    } else {
      if (pmRemaining <= 0) pmRemaining = PMCONFIG[pmState.mode];
      pmRunning = true;
      pmTimer = setInterval(pmTick, 1000);
    }
    pmRender();
  }

  function pmSetMode(mode) {
    if (!PMCONFIG[mode]) return;
    pmState.mode = mode;
    Storage.set('ntp_pomodoro', { mode: pmState.mode, cycle: pmState.cycle });
    pmRemaining = PMCONFIG[mode];
    pmRender();
  }

  function pmReset() {
    pmStopTimer();
    pmRemaining = PMCONFIG[pmState.mode];
    pmRender();
  }

  if (pmStartBtn) pmStartBtn.addEventListener('click', pmToggle);
  if (pmResetBtn) pmResetBtn.addEventListener('click', pmReset);
  pmModeBtns.forEach(b => b.addEventListener('click', () => pmSetMode(b.dataset.pmMode)));

  if (fabBtn && pmPanel) {
    fabBtn.addEventListener('click', () => {
      const close = !pmPanel.hidden;
      pmPanel.hidden = close;
      fabBtn.setAttribute('aria-expanded', String(!close));
      if (!close) pmRender();
    });
  }
  if (pmClose) {
    pmClose.addEventListener('click', () => {
      if (pmPanel) pmPanel.hidden = true;
      if (fabBtn) fabBtn.setAttribute('aria-expanded', 'false');
    });
  }

  // 键盘控制：空格 = 开始/暂停；Esc = 关闭面板
  document.addEventListener('keydown', (e) => {
    if (pmPanel && !pmPanel.hidden) {
      if (e.code === 'Space') {
        const tag = (e.target && e.target.tagName || '').toLowerCase();
        if (!['input', 'textarea', 'select', 'button'].includes(tag)) {
          e.preventDefault();
          pmToggle();
        }
      } else if (e.key === 'Escape') {
        pmPanel.hidden = true;
        if (fabBtn) fabBtn.setAttribute('aria-expanded', 'false');
      }
    }
  });

  pmRender();

  // =====================================================================
  // 功能 D. 配置快照与同步：导出/导入 JSON、分享链接、每日自动备份
  // =====================================================================
  const CONFIG_KEYS = [
    // 语言
    'liteStart_language',
    // 默认搜索引擎 + 自定义引擎配置
    'ntp_engine',
    'ntp_custom_engine_config',
    // 其他界面设置（布局 / 行数 / 搜索历史开关）
    'ntp_layout',
    'ntp_quicklinks',
    'ntp_history_enabled',
    // 纯净模式 / 高对比模式
    'ntp_pure_mode',
    'ntp_high_contrast',
    // 壁纸设置（开关 / 来源模式 / 自定义壁纸数据）
    'ntp_bg_enabled',
    'ntp_bg_mode',
    'ntp_custom_wallpaper',
    // 网站快捷方式列表 + 搜索历史
    'ntp_quicklinks_list',
    'ntp_search_history'
  ];

  function collectConfig() {
    const cfg = { version: 1, exportedAt: new Date().toISOString(), data: {} };
    CONFIG_KEYS.forEach((k) => {
      try {
        const raw = localStorage.getItem(k);
        if (raw !== null) cfg.data[k] = raw;
      } catch (e) {}
    });
    return cfg;
  }

  function serializeConfig(cfg) {
    return btoa(unescape(encodeURIComponent(JSON.stringify(cfg))));
  }
  function deserializeConfig(str) {
    try {
      const json = decodeURIComponent(escape(atob(str)));
      return JSON.parse(json);
    } catch (e) {
      return null;
    }
  }
  function applyConfig(cfg) {
    if (!cfg || !cfg.data || typeof cfg.data !== 'object') return false;
    Object.keys(cfg.data).forEach((k) => {
      try { localStorage.setItem(k, cfg.data[k]); } catch (e) {}
    });
    return true;
  }
  function downloadFile(filename, content, mime) {
    const blob = new Blob([content], { type: mime || 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => { document.body.removeChild(a); URL.revokeObjectURL(url); }, 0);
  }

  const btnExport = document.getElementById('btn-export-config');
  const btnImport = document.getElementById('btn-import-config');
  const btnShare = document.getElementById('btn-share-config');
  const inputCfg = document.getElementById('input-config-file');
  const snapshotHint = document.getElementById('snapshot-hint');
  const flashHint = (() => {
    let tid = null;
    return (msg) => {
      if (!snapshotHint) return;
      const prev = snapshotHint.innerText;
      snapshotHint.innerText = msg;
      if (tid) clearTimeout(tid);
      tid = setTimeout(() => { snapshotHint.innerText = prev; }, 2600);
    };
  })();

  if (btnExport) {
    btnExport.addEventListener('click', () => {
      const cfg = collectConfig();
      downloadFile('lite-start-config.json', JSON.stringify(cfg, null, 2));
      flashHint(curDictNow.exported || '配置已导出');
    });
  }

  if (btnImport && inputCfg) {
    btnImport.addEventListener('click', () => inputCfg.click());
    inputCfg.addEventListener('change', () => {
      const file = inputCfg.files && inputCfg.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const cfg = JSON.parse(e.target.result);
          if (applyConfig(cfg)) {
            flashHint(curDictNow.imported || '已导入，正在刷新…');
            setTimeout(() => location.reload(), 400);
          } else {
            flashHint(curDictNow.importFailed || '导入失败，格式无效');
          }
        } catch (err) {
          flashHint(curDictNow.importFailed || '导入失败，格式无效');
        }
        inputCfg.value = '';
      };
      reader.readAsText(file);
    });
  }

  if (btnShare) {
    btnShare.addEventListener('click', () => {
      const cfg = collectConfig();
      const encoded = serializeConfig(cfg);
      const url = new URL(location.href);
      url.searchParams.set('config', encoded);
      const shareUrl = url.toString();
      const done = () => flashHint(curDictNow.shared || '分享链接已复制');
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(done, () => copyFallback(shareUrl, done));
      } else {
        copyFallback(shareUrl, done);
      }
    });
  }
  function copyFallback(text, done) {
    const tmp = document.createElement('textarea');
    tmp.value = text;
    tmp.style.position = 'fixed';
    tmp.style.opacity = '0';
    document.body.appendChild(tmp);
    tmp.select();
    try { document.execCommand('copy'); } catch (e) {}
    document.body.removeChild(tmp);
    done();
  }

  // 从分享链接 URL 参数恢复配置
  (function loadFromUrl() {
    try {
      const params = new URLSearchParams(location.search);
      const enc = params.get('config');
      if (enc) {
        const cfg = deserializeConfig(enc);
        if (cfg && applyConfig(cfg)) {
          const clean = location.pathname + location.search.replace(/[?&]config=[^&]*/, '').replace(/^&/, '?');
          history.replaceState(null, '', clean.replace(/\?$/, ''));
          location.reload();
        }
      }
    } catch (e) {}
  })();

  // 每日自动备份（本地快照，按日期留存）
  (function dailyBackup() {
    try {
      const today = new Date().toISOString().slice(0, 10);
      const last = Storage.get('ntp_backup_last', '');
      if (last !== today) {
        const cfg = collectConfig();
        localStorage.setItem('ntp_backup_' + today, JSON.stringify(cfg.data));
        Storage.set('ntp_backup_last', today);
      }
    } catch (e) {}
  })();

  // =====================================================================
  // 功能 E. PWA：注册 Service Worker（离线缓存）
  // =====================================================================
  if ('serviceWorker' in navigator && location.protocol !== 'file:') {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('service-worker.js').catch(() => {});
    });
  }
});