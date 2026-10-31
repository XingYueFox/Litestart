const APP_VERSION = '1.8.9';      // 发行版本
const GITHUB_REPO = 'XingYueFox/Litestart';

const logos = {
  bing: `
    <svg aria-hidden="true" id="logo-icon" width="48" height="48" viewBox="0 0 48 48">
      <path fill="#00A4EF" d="M22.7 25.2H0v22.7h22.7V25.2Z"></path>
      <path fill="#FFB900" d="M47.79 25.2h-22.7v22.7h22.7V25.2Z"></path>
      <path fill="#7FBA00" d="M47.79.1h-22.7v22.7h22.7V.1Z"></path>
      <path fill="#F25022" d="M22.7.1H0v22.7h22.7V.1Z"></path>
    </svg>
    <svg aria-hidden="true" id="logo-text" width="163" height="48" viewBox="0 0 163 48">
      <path id="logo-text-path" d="M31.19 9.66v28.68H26.2v-22.5h-.1l-8.86 22.5h-3.29L4.9 15.84h-.1v22.5H.22V9.66H7.4l8.26 21.2h.1l8.67-21.2h6.77Zm4.08 2.2c0-.8.3-1.5.9-2 .6-.5 1.29-.8 2.08-.8.9 0 1.6.3 2.1.9.5.5.9 1.2.9 2 0 .79-.3 1.49-.9 1.98-.6.5-1.3.8-2.1.8-.9 0-1.49-.3-2.09-.8-.5-.7-.9-1.39-.9-2.09Zm5.37 5.87v20.6h-4.87v-20.6h4.87Zm14.74 17.12a9.16 9.16 0 0 0 4.78-1.79v4.48c-.8.5-1.7.8-2.7 1-.99.2-2.08.3-3.28.3-3.08 0-5.47-.9-7.36-2.9a9.98 9.98 0 0 1-2.9-7.26c0-3.29 1-6.07 2.9-8.16 1.89-2.1 4.68-3.19 8.26-3.19.9 0 1.8.1 2.69.3.9.3 1.69.5 2.19.8v4.67c-.7-.5-1.5-1-2.3-1.29-.79-.3-1.58-.5-2.38-.5-1.9 0-3.49.6-4.68 1.9-1.2 1.29-1.8 2.88-1.8 5.07 0 2.1.5 3.68 1.7 4.88a7.45 7.45 0 0 0 4.88 1.7ZM73.9 17.43c.4 0 .7 0 1.1.1.29.1.59.1.79.2v4.88c-.3-.2-.6-.3-1.1-.5-.5-.2-1.1-.3-1.79-.3-1.2 0-2.19.5-2.99 1.5-.8.99-1.29 2.48-1.29 4.67v10.36h-4.88V17.73h4.88V21h.1c.5-1.1 1.1-1.99 1.99-2.68.8-.6 1.9-.9 3.19-.9Zm2.09 10.95c0-3.38.9-6.07 2.88-8.06 1.9-2 4.58-2.99 8.07-2.99 3.18 0 5.67.9 7.46 2.89 1.8 1.89 2.7 4.48 2.7 7.76 0 3.29-.9 5.98-2.9 7.97-1.89 1.99-4.47 2.98-7.86 2.98-3.19 0-5.67-.9-7.57-2.78-1.89-2-2.78-4.58-2.78-7.77Zm5.07-.2c0 2.1.5 3.78 1.5 4.88a5.4 5.4 0 0 0 4.18 1.7c1.8 0 3.09-.6 4.08-1.7.9-1.1 1.4-2.79 1.4-5.08 0-2.19-.5-3.88-1.5-4.98a4.97 4.97 0 0 0-3.98-1.69c-1.8 0-3.09.6-4.08 1.8-1.2 1.19-1.6 2.88-1.6 5.07Zm23.2-4.98c0 .7.2 1.3.7 1.7.5.4 1.4.9 2.89 1.49 1.89.8 3.28 1.7 4.08 2.59.8 1 1.2 2.09 1.2 3.48 0 1.9-.7 3.49-2.3 4.68-1.5 1.2-3.48 1.8-6.07 1.8a15.8 15.8 0 0 1-5.58-1.1v-4.88c.9.6 1.9 1.1 2.9 1.5.99.3 1.88.5 2.78.5 1.1 0 1.89-.1 2.39-.5.5-.3.8-.8.8-1.5s-.3-1.3-.8-1.7c-.5-.49-1.6-.99-3.09-1.59a8.89 8.89 0 0 1-3.78-2.48 5.7 5.7 0 0 1-1.1-3.59c0-1.89.7-3.38 2.2-4.58a8.8 8.8 0 0 1 5.67-1.79c.7 0 1.6.1 2.39.3.9.1 1.69.4 2.29.6v4.58c-.7-.4-1.4-.8-2.3-1.1-.89-.3-1.69-.5-2.48-.5-.9 0-1.7.2-2.1.5-.39.5-.69.9-.69 1.6Zm10.85 5.18c0-3.38.9-6.07 2.89-8.06 2-2 4.58-2.99 8.06-2.99 3.19 0 5.68.9 7.47 2.89 1.8 1.89 2.69 4.48 2.69 7.76 0 3.29-.9 5.98-2.89 7.97-1.89 1.99-4.48 2.98-7.86 2.98-3.19 0-5.68-.9-7.57-2.78-1.8-2-2.79-4.58-2.79-7.77Zm5.08-.2c0 2.1.5 3.78 1.5 4.88a5.4 5.4 0 0 0 4.17 1.7c1.8 0 3.1-.6 4.09-1.7.9-1.1 1.4-2.79 1.4-5.08 0-2.19-.5-3.88-1.5-4.98a4.96 4.96 0 0 0-3.98-1.69c-1.8 0-3.1.6-4.09 1.8-1.1 1.19-1.59 2.88-1.59 5.07Zm32.16-6.47h-7.27v16.63h-4.88V21.7h-3.48v-3.98h3.48v-2.89c0-2.19.7-3.88 2.1-5.28a7.28 7.28 0 0 1 5.37-2.09c.6 0 1.1 0 1.6.1.49.1.89.1 1.19.3v4.18c-.1-.1-.5-.2-.9-.3-.4-.1-.9-.2-1.4-.2-.99 0-1.79.3-2.28.9-.5.7-.8 1.6-.8 2.79v2.49h7.27v-4.68l4.88-1.5v6.08h4.87v3.98h-4.87v9.66c0 1.3.2 2.19.7 2.69.49.5 1.19.8 2.18.8.3 0 .6-.1 1-.2s.7-.3 1.1-.5v3.98c-.3.2-.8.3-1.5.5-.7.1-1.4.2-2.1.2-2.08 0-3.58-.5-4.57-1.7-1-1.1-1.5-2.69-1.5-4.88V21.71h-.2Z"></path>
    </svg>
  `,
  baidu: `
    <img src="img/logo/baidu_logo_light.png" alt="Baidu Logo" class="baidu-logo-img logo-for-light">
    <img src="img/logo/baidu_logo_dark.png" alt="Baidu Logo" class="baidu-logo-img logo-for-dark">
  `,
  google: `
    <img src="img/logo/google_logo_light.png" alt="Google Logo" class="google-logo-img logo-for-light">
    <img src="img/logo/google_logo_dark.png" alt="Google Logo" class="google-logo-img logo-for-dark">
  `,
  custom: ``
};

// 语言字典
const i18nData = {
  'zh-CN': {
    pageTitle: '新标签页',
    settingsTitle: '页面设置',
    close: '关闭',
    back: '返回',
    quicklinkStyle: '快速链接样式',
    showQuicklinks: '显示快速链接',
    off: '关闭',
    on: '打开',
    rows1: '一行',
    rows2: '多行',
    showTimeCapsule: '显示时间',
    showMenuButton: '显示菜单按钮',
    searchEngine: '搜索引擎',
    custom: '自定义',
    editCustomEngine: '编辑自定义搜索引擎',
    saveHistory: '保存搜索历史记录',
    inspirational: '展望',
    focused: '聚焦',
    appreciate: '窗台',
    presets: '预设',
    background: '背景',
    enableBackground: '启用背景',
    editBackground: '编辑背景',
    language: '页面语言',
    langAuto: '默认（跟随设备）',
    cookieNotice: '隐私政策',
    license: '开源协议',
    contributor: '贡献名单',
    helpFeedback: '帮助&反馈',
    presentedBy: '由',
    xingyuefox: '秋山星月',
    AomiRaku: '羽梦千景',
    forYou: '为您呈现',
    disclaimer: '请注意，此网页与 Microsoft 无关。',
    aboutTitle: '关于 Litestart',
    download: '下载',
    updateOptions: '更新选项',
    skipThisUpdate: '暂时忽略',
    skipRestore: '恢复提醒',
    updateAvailable: '可用更新',
    aboutDesc: '一个简洁、快速的浏览器起始页。',
    litever: '版本 1.8.9 | 更新时间：2026-10-31',
    versionInfo: '版本信息',
    and: '和',
    searchPlaceholder: '今天想用 {name} 搜索什么？',
    searchPlaceholderNight: '今晚想用 {name} 搜索什么？',
    searchPlaceholderAprilFool: '哼！今天你什么都别想搜！',
    customEngineWithName: '自定义（{name}）',
    themeMode: '主题模式',
    themeAuto: '系统',
    themeLight: '浅色',
    themeDark: '深色',
    searchInput: '搜索输入框',
    clearSearchHistory: '清除搜索历史记录',
    usingDefaultBg: '正在使用默认背景',
    defaultWallpaper: '默认',
    localFile: '本地文件',
    onlineWallpaper: '自定义在线链接',
    uploadFile: '选择文件',
    editCustomLink: '编辑自定义链接',
    editShortcut: '编辑快速链接',
    name: '名称',
    bingCN: 'Bing',
    icon: '图标',
    iconAuto: '自动解析',
    iconFirstChar: '首字符',
    iconPreset: "预置",
    openInNewTab: "在新标签页打开",
    copyAddress: "复制地址",
    edit: "编辑",
    presetHome: "首页",
    presetSearch: "搜索",
    presetBookmark: "书签",
    presetStar: "收藏",
    presetHeart: "喜欢",
    presetMail: "邮箱",
    presetChat: "聊天",
    presetVideo: "视频",
    presetMusicNote2: "音乐",
    presetImage: "图片",
    presetDocument: "文档",
    presetBook: "书籍",
    presetCode: "代码",
    presetCloud: "云盘",
    presetGlobe: "网站",
    presetCart: "购物",
    presetWallet: "钱包",
    presetGift: "礼物",
    presetGames: "游戏",
    presetCalendar: "日历",
    presetClock: "时间",
    presetPerson: "个人",
    presetPeople: "社交",
    presetBriefcase: "工作",
    presetDocumentText: "笔记",
    presetNews: "新闻",
    presetCamera: "相机",
    presetMap: "地图",
    presetAirplane: "旅行",
    presetFood: "美食",
    presetBeaker: "锥形瓶",
    presetLibrary: "知识库",
    presetTranslate: "翻译",
    presetSettings: "设置",
    presetLink: "链接",
    inputNamePh: '名称',
    errorNameReq: '请输入快速链接名称',
    errorUrlReq: '请输入网址',
    delete: '删除',
    cancel: '取消',
    restoreWarnTitle: '请谨慎导入陌生来源的配置文件',
    restoreWarnDesc: '陌生来源的配置文件可能会在 快速链接、搜索引擎、壁纸链接 中包含危险的脚本。',
    continueAction: '继续',
    save: '保存',
    customEngineTitle: '自定义搜索引擎',
    engineName: '搜索引擎名称',
    engineNamePh: '例如: DuckDuckGo',
    errorEngineNameReq: '请输入搜索引擎名称',
    engineUrl: '搜索 URL (%s 替换搜索关键词)',
    errorEngineUrlFormat: '请输入搜索 URL，必须包含 %s',
    useOnlineContent: '使用在线内容',
    bingDaily: '必应每日壁纸',
    uploadedWallpaper: '上传的背景',
    localImage: '背景图片',
    baidu: 'Baidu',
    customUrl: '自定义',
    customOnlineWallpaper: '自定义在线壁纸',
    imageOrVideoUrl: '图片或视频URL',
    enterUrl: '输入图片或视频URL',
    bing: 'Bing',
    forceBingCN: '强制使用必应中国版',
    forceBingCNDesc: '<b>开启</b>：强制使用必应中国版<br><b>关闭</b>：根据网络环境自动选择。<br>此选项可以避免代理设置导致 www.bing.com 无法自动跳转到 cn.bing.com。',
    enhancedVisibility: '增强元素可见性',
    enhancedBlur: '衬底启用模糊',
    bgVignette: '背景边角晕影',
    bgFadeBlur: '背景渐显模糊',
    enhancedBlurTip: '此选项可能会对设备功耗有轻微影响。',
    addlink: '添加',
    addQuicklink: '添加快速链接',

    // 个人资料菜单
    manageProfiles: '备份与重置',

   // 编辑个人资料弹窗

    // 管理配置文件弹窗
    manageProfilesTitle: '配置备份与重置',
    selectOperation: '选择要执行的操作',
    exportConfig: '导出配置',
    importConfig: '恢复配置',
    initConfigOption: '初始化',
    next: '下一步',

    // 重置确认弹窗
    resetTitle: '重置 Litestart',
    resetDesc: '如果你遇到了一些问题，或是对于目前的设定不满意，重置可以清除所有数据并还原 Litestart 为初始状态，请注意，此操作不可撤回！',
    confirmReset: '确定',

    // 重置完成弹窗
    resetDoneTitle: '重置完成',
    resetDoneDesc: '所有设置已重置为初始状态，页面即将刷新。',
    refreshNow: '立即刷新',

    // 恢复完成弹窗
    restoreDoneTitle: '配置恢复完成',
    restoreDoneDesc: '配置已恢复，页面即将刷新以应用所有设置。',

    // 编辑页面布局弹窗
    layout: '页面布局',
    editLayout: '编辑页面布局',
    searchBoxPosition: '搜索框位置',
    showSearchBox: '显示搜索框',
    quicklinkPosition: '快速链接位置',
    qlPositionDefault: '默认',
    qlPositionBottom: '底部',
    qlPositionMiddle: '中间',
    layoutHanging: '悬挂',
    layoutCentered: '居中',
    showLogo: '显示 Logo',
    showAddButton: '在快速链接区域显示添加按钮',
    hideAddButton: '隐藏此按钮',
    addButtonHiddenTitle: '添加按钮已隐藏',
    addButtonHiddenDesc: '添加按钮已隐藏，请在 页面左上角菜单 中添加快速链接。<br>也可在 设置 - 编辑页面布局 中重新开启此按钮。',
    ok: '确定',

    //自定义搜索引擎图片部分
    customTitleImage: '自定义标题图片',
    selectImageFile: '选择图片',
    removeImage: '删除图片',
    noImageSelected: '未选择图片',
  },
  'zh-TW': {
    pageTitle: '新分頁',
    settingsTitle: '頁面設定',
    close: '關閉',
    back: '返回',
    quicklinkStyle: '快速連結樣式',
    showQuicklinks: '顯示快速連結',
    off: '關閉',
    on: '開啟',
    rows1: '一行',
    rows2: '多行',
    showTimeCapsule: '顯示時間',
    showMenuButton: '顯示菜單按鈕',
    searchEngine: '搜尋引擎',
    custom: '自訂',
    editCustomEngine: '編輯自訂搜尋引擎',
    saveHistory: '儲存搜尋紀錄',
    inspirational: '展望',
    focused: '聚焦',
    appreciate: '窗台',
    presets: '預設',
    background: '背景',
    enableBackground: '啟用背景',
    editBackground: '編輯背景',
    language: '頁面語言',
    langAuto: '預設（隨設備設定）',
    cookieNotice: '隱私政策',
    license: '開源協議',
    contributor: '貢獻名單',
    helpFeedback: '說明與意見回饋',
    presentedBy: '由',
    xingyuefox: '秋山星月',
    AomiRaku: '羽梦千景',
    forYou: '為您呈現',
    disclaimer: '請注意，此網頁與 Microsoft 無關。',
    aboutTitle: '關於 Litestart',
    download: '下載',
    updateOptions: '更新選項',
    skipThisUpdate: '暫時忽略',
    skipRestore: '恢復提醒',
    updateAvailable: '可用更新',
    aboutDesc: '一個簡潔、快速的瀏覽器起始頁。',
    litever: '版本 1.8.9 | 更新時間：2026-10-31',
    versionInfo: '版本資訊',
    and: '與',
    searchPlaceholder: '今天想用 {name} 搜尋什麼？',
    searchPlaceholderNight: '今晚想用 {name} 搜尋什麼？',
    searchPlaceholderAprilFool: '哼！今天你什麼都別想搜！',
    customEngineWithName: '自訂（{name}）',
    themeMode: '主題模式',
    themeAuto: '系統',
    themeLight: '淺色',
    themeDark: '深色',
    searchInput: '搜尋輸入框',
    clearSearchHistory: '清除搜尋紀錄',
    usingDefaultBg: '正在使用預設背景',
    defaultWallpaper: '預設',
    localFile: '本機檔案',
    onlineWallpaper: '自訂線上連結',
    uploadFile: '選擇檔案',
    editCustomLink: '編輯自訂連結',
    editShortcut: '編輯快速連結',
    name: '名稱',
    bingCN: 'Bing',
    icon: '圖示',
    iconAuto: '自動解析',
    iconFirstChar: '首字元',
    iconPreset: "預置",
    openInNewTab: "在新分頁開啟",
    copyAddress: "複製位址",
    edit: "編輯",
    presetHome: "首頁",
    presetSearch: "搜尋",
    presetBookmark: "書籤",
    presetStar: "收藏",
    presetHeart: "喜愛",
    presetMail: "信箱",
    presetChat: "聊天",
    presetVideo: "影片",
    presetMusicNote2: "音樂",
    presetImage: "圖片",
    presetDocument: "文件",
    presetBook: "書籍",
    presetCode: "程式碼",
    presetCloud: "雲端",
    presetGlobe: "網站",
    presetCart: "購物",
    presetWallet: "錢包",
    presetGift: "禮物",
    presetGames: "遊戲",
    presetCalendar: "日曆",
    presetClock: "時間",
    presetPerson: "個人",
    presetPeople: "社交",
    presetBriefcase: "工作",
    presetDocumentText: "筆記",
    presetNews: "新聞",
    presetCamera: "相機",
    presetMap: "地圖",
    presetAirplane: "旅行",
    presetFood: "美食",
    presetBeaker: "錐形瓶",
    presetLibrary: "知識庫",
    presetTranslate: "翻譯",
    presetSettings: "設定",
    presetLink: "連結",
    inputNamePh: '名稱',
    errorNameReq: '請輸入快速連結名稱',
    errorUrlReq: '請輸入網址',
    delete: '刪除',
    cancel: '取消',
    restoreWarnTitle: '請謹慎匯入陌生來源的設定檔',
    restoreWarnDesc: '陌生來源的設定檔可能會在 快速連結、搜尋引擎、桌布連結 中包含危險的指令碼。',
    continueAction: '繼續',
    save: '儲存',
    customEngineTitle: '自訂搜尋引擎',
    engineName: '搜尋引擎名稱',
    engineNamePh: '例如: DuckDuckGo',
    errorEngineNameReq: '請輸入搜尋引擎名稱',
    engineUrl: '搜尋 URL (%s 替換搜尋關鍵字)',
    errorEngineUrlFormat: '請輸入搜尋 URL，必須包含 %s',
    useOnlineContent: '使用線上內容',
    bingDaily: 'Bing每日桌布',
    uploadedWallpaper: '上傳的背景',
    localImage: '背景圖片',
    baidu: 'Baidu',
    bing: 'Bing',
    customUrl: '自訂',
    customOnlineWallpaper: '自訂線上桌布',
    imageOrVideoUrl: '圖片或影片網址',
    enterUrl: '輸入圖片或影片網址',
    forceBingCN: '強制使用必應中國版',
    forceBingCNDesc: '<b>開啟</b>：強制使用必應中國版<br><b>關閉</b>：根據網路環境自動選擇。<br>此選項可以避免代理設定導致 www.bing.com 無法自動跳轉到 cn.bing.com。',
    enhancedVisibility: '增強元素可見性',
    enhancedBlur: '襯底啟用模糊',
    bgVignette: '背景邊角暈影',
    bgFadeBlur: '背景漸顯模糊',
    enhancedBlurTip: '此選項可能會對裝置耗電有輕微影響。',
    addlink: '新增',
    addQuicklink: '新增快速連結',
    manageProfiles: '備份與重設',
    manageProfilesTitle: '設定備份與重設',
    selectOperation: '選擇要執行的操作',
    exportConfig: '匯出設定',
    importConfig: '還原設定',
    initConfigOption: '重設設定',
    next: '下一步',
    resetTitle: '重設 Litestart',
    resetDesc: '如果你遇到了一些問題，或是對於目前的設定不滿意，重設可以清除所有數據並還原 Litestart 為初始狀態，請注意，此操作不可撤回！',
    confirmReset: '確定',
    resetDoneTitle: '重設完成',
    resetDoneDesc: '所有設定已重設為初始狀態，頁面即將重新整理。',
    refreshNow: '立即重新整理',
    restoreDoneTitle: '設定還原完成',
    restoreDoneDesc: '設定已還原，頁面即將重新整理以套用所有設定。',
    layout: '頁面佈局',
    editLayout: '編輯頁面佈局',
    searchBoxPosition: '搜尋框位置',
    showSearchBox: '顯示搜尋框',
    quicklinkPosition: '快速連結位置',
    qlPositionDefault: '預設',
    qlPositionBottom: '底部',
    qlPositionMiddle: '中間',
    layoutHanging: '懸掛',
    layoutCentered: '居中',
    showLogo: '顯示 Logo',
    showAddButton: '在快速連結區域顯示新增按鈕',
    hideAddButton: '隱藏此按鈕',
    addButtonHiddenTitle: '新增按鈕已隱藏',
    addButtonHiddenDesc: '新增按鈕已隱藏，請在 頁面左上角選單 中新增快速連結。<br>也可在 設定 - 編輯頁面佈局 中重新開啟此按鈕。',
    ok: '確定',
    customTitleImage: '自訂標題圖片',
    selectImageFile: '選擇圖片',
    removeImage: '刪除圖片',
    noImageSelected: '未選擇圖片',
 },
  'en': {
    pageTitle: 'New Tab',
    settingsTitle: 'Page Settings',
    close: 'Close',
    back: 'Back',
    quicklinkStyle: 'Quicklink style',
    showQuicklinks: 'Show quicklinks',
    off: 'Off',
    on: 'On',
    rows1: 'One row',
    rows2: 'Multiple rows',
    showTimeCapsule: 'Show Time',
    showMenuButton: 'Show Menu Button',
    searchEngine: 'Search Engine',
    custom: 'Custom',
    editCustomEngine: 'Edit custom search engine',
    saveHistory: 'Save search history',
    inspirational: 'Inspirational',
    focused: 'Focused',
    appreciate: 'Windowsill',
    presets: 'Presets',

    background: 'Background',
    enableBackground: 'Enable background',
    editBackground: 'Edit background',
    language: 'Language',
    langAuto: 'Default (System)',
    cookieNotice: 'Privacy Policy',
    license: 'License',
    contributor: 'Contributor',
    helpFeedback: 'Help & Feedback',
    presentedBy: 'Presented by',
    xingyuefox: 'XingYue_Fox',
    AomiRaku: 'Raku Inkyetta',
    forYou: '',
    disclaimer: 'Note: This page is not affiliated with Microsoft.',
    aboutTitle: 'About Litestart',
    download: 'Download',
    updateOptions: 'Update options',
    skipThisUpdate: 'Pause for today',
    skipRestore: 'Resume reminders',
    updateAvailable: 'Update available',
    aboutDesc: 'A simple and fast browser start page.',
    litever: 'Version 1.8.9 | Updated: 2026-10-31',
    versionInfo: 'Version Info',
    and: '&',
    searchPlaceholder: 'What do you want to search with {name} today?',
    searchPlaceholderNight: 'What do you want to search with {name} tonight?',
    searchPlaceholderAprilFool: "Hmph! You're not searching anything today!",
    customEngineWithName: 'Custom ({name})',
    themeMode: 'Theme',
    themeAuto: 'System',
    themeLight: 'Light',
    themeDark: 'Dark',
    searchInput: 'Search input',
    clearSearchHistory: 'Clear search history',
    usingDefaultBg: 'Using default background',
    defaultWallpaper: 'Default',
    localFile: 'Local file',
    onlineWallpaper: 'Custom online link',
    uploadFile: 'Select file',
    editCustomLink: 'Edit custom link',
    editShortcut: 'Edit quick link',
    name: 'Name',
    icon: 'Icon',
    iconAuto: 'Auto (favicon)',
    iconFirstChar: 'First letter',
    iconPreset: "Preset",
    openInNewTab: "Open in new tab",
    copyAddress: "Copy address",
    edit: "Edit",
    presetHome: "Home",
    presetSearch: "Search",
    presetBookmark: "Bookmark",
    presetStar: "Star",
    presetHeart: "Heart",
    presetMail: "Mail",
    presetChat: "Chat",
    presetVideo: "Video",
    presetMusicNote2: "Music",
    presetImage: "Image",
    presetDocument: "Document",
    presetBook: "Book",
    presetCode: "Code",
    presetCloud: "Cloud",
    presetGlobe: "Website",
    presetCart: "Shopping",
    presetWallet: "Wallet",
    presetGift: "Gift",
    presetGames: "Games",
    presetCalendar: "Calendar",
    presetClock: "Time",
    presetPerson: "Person",
    presetPeople: "Social",
    presetBriefcase: "Work",
    presetDocumentText: "Notes",
    presetNews: "News",
    presetCamera: "Camera",
    presetMap: "Map",
    presetAirplane: "Travel",
    presetFood: "Food",
    presetBeaker: "Flask",
    presetLibrary: "Library",
    presetTranslate: "Translate",
    presetSettings: "Settings",
    presetLink: "Link",
    inputNamePh: 'Name',
    errorNameReq: 'Please enter quick link name',
    errorUrlReq: 'Please enter URL',
    delete: 'Delete',
    cancel: 'Cancel',
    restoreWarnTitle: 'Be careful with configuration files from unknown sources',
    restoreWarnDesc: 'Configuration files from unknown sources may contain dangerous scripts in Quick Links, Search Engines, or Wallpaper URLs.',
    continueAction: 'Continue',
    save: 'Save',
    customEngineTitle: 'Custom Search Engine',
    engineName: 'Engine Name',
    engineNamePh: 'e.g. DuckDuckGo',
    errorEngineNameReq: 'Please enter engine name',
    engineUrl: 'Search URL (%s replacing query)',
    errorEngineUrlFormat: 'Search URL must contain %s',
    useOnlineContent: 'Use online content',
    bingDaily: 'Bing daily wallpaper',
    uploadedWallpaper: 'Uploaded background',
    localImage: 'Background image',
    baidu: 'Baidu',
    bing: 'Bing',
    customUrl: 'Custom',
    customOnlineWallpaper: 'Custom online wallpaper',
    imageOrVideoUrl: 'Image or video URL',
    enterUrl: 'Enter image or video URL',
    bingCN: 'Bing',
    forceBingCN: 'Force Bing China',
    forceBingCNDesc: '<b>On</b>: Forces cn.bing.com<br><b>Off</b>: Automatically selects based on network conditions.<br>This option prevents proxy settings from interfering with automatic redirection of www.bing.com to cn.bing.com.',
    enhancedVisibility: 'Enhance Element Visibility',
    enhancedBlur: 'Enable backdrop blur',
    bgVignette: 'Background vignette',
    bgFadeBlur: 'Blur-in on background load',
    enhancedBlurTip: 'This option may slightly increase power consumption.',
    addlink: 'Add',
    addQuicklink: 'Add quicklink',
    manageProfiles: 'Backup & Reset',
    manageProfilesTitle: 'Backup & Reset',
    selectOperation: 'Select an action',
    exportConfig: 'Export Config',
    importConfig: 'Import Config',
    initConfigOption: 'Reset Config',
    next: 'Next',
    resetTitle: 'Reset Litestart',
    resetDesc: 'If you encounter issues or are unsatisfied with current settings, resetting will clear all data and restore Litestart to its initial state. Note: This action cannot be undone!',
    confirmReset: 'Confirm',
    resetDoneTitle: 'Reset Complete',
    resetDoneDesc: 'All settings have been reset to initial state. The page will refresh.',
    refreshNow: 'Refresh Now',
    restoreDoneTitle: 'Restore Complete',
    restoreDoneDesc: 'Configuration restored. The page will refresh to apply all settings.',
    layout: 'Layout',
    editLayout: 'Edit Layout',
    searchBoxPosition: 'Search Box Position',
    showSearchBox: 'Show search box',
    quicklinkPosition: 'Quicklink position',
    qlPositionDefault: 'Default',
    qlPositionBottom: 'Bottom',
    qlPositionMiddle: 'Middle',
    layoutHanging: 'Hanging',
    layoutCentered: 'Centered',
    showLogo: 'Show logo',
    showAddButton: 'Show add button in quicklinks area',
    hideAddButton: 'Hide this button',
    addButtonHiddenTitle: 'Add button hidden',
    addButtonHiddenDesc: 'The add button is hidden. Create quicklinks from the menu at the top-left corner.<br>You can also re-enable it in Settings - Edit Layout.',
    ok: 'OK',
    customTitleImage: 'Custom Title Image',
    selectImageFile: 'Select Image',
    removeImage: 'Remove Image',
    noImageSelected: 'No Image Selected',

  },
  'ja': {
    pageTitle: '新しいタブ',
    settingsTitle: '設定',
    close: '閉じる',
    back: '戻る',
    quicklinkStyle: 'クイックリンクの表示',
    showQuicklinks: 'クイックリンクを表示',
    off: 'オフ',
    on: 'オン',
    rows1: '1 行',
    rows2: '複数行',
    showTimeCapsule: '時間を表示',
    showMenuButton: 'メニューボタンを表示',
    searchEngine: '検索エンジン',
    custom: 'カスタム',
    editCustomEngine: 'カスタム検索エンジンを編集',
    saveHistory: '検索履歴を保存',
    inspirational: 'シンプル',
    focused: 'フォーカス',
    appreciate: '窓辺',
    presets: 'プリセット',

    background: '背景',
    enableBackground: '背景を有効にする',
    editBackground: '背景を編集',
    language: '言語',
    langAuto: 'デフォルト（システムに従う）',
    cookieNotice: 'プライバシーポリシー',
    license: 'License',
    contributor: '貢献者',
    helpFeedback: 'ヘルプとフィードバック',
    presentedBy: '提供:',
    xingyuefox: 'XingYue_Fox',
    AomiRaku: 'Raku Inkyetta',
    forYou: '',
    disclaimer: '注: このページは Microsoft とは関係ありません。',
    aboutTitle: 'Litestart について',
    download: 'ダウンロード',
    updateOptions: '更新オプション',
    skipThisUpdate: '今日は表示しない',
    skipRestore: '通知を再開',
    updateAvailable: 'アップデートがあります',
    aboutDesc: 'シンプルで高速なブラウザスタートページです。',
    litever: 'バージョン 1.8.9 | 更新日: 2026-10-31',
    versionInfo: 'バージョン情報',
    and: 'と',
    searchPlaceholder: '今日は {name} で何を検索しますか？',
    searchPlaceholderNight: '今夜は {name} で何を検索しますか？',
    searchPlaceholderAprilFool: 'ふん！今日は何も検索させてあげない！',
    customEngineWithName: 'カスタム（{name}）',
    themeMode: 'テーマ',
    themeAuto: 'システム',
    themeLight: 'ライト',
    themeDark: 'ダーク',
    searchInput: '検索入力ボックス',
    clearSearchHistory: '検索履歴を消去',
    usingDefaultBg: 'デフォルトの背景を使用中',
    defaultWallpaper: 'デフォルト',
    localFile: 'ローカルファイル',
    onlineWallpaper: 'カスタムオンラインリンク',
    uploadFile: 'ファイルを選択',
    editCustomLink: 'カスタムリンクを編集',
    editShortcut: 'クイックリンクを編集',
    name: '名前',
    icon: 'アイコン',
    iconAuto: '自動取得',
    iconFirstChar: '頭文字',
    iconPreset: "プリセット",
    openInNewTab: "新しいタブで開く",
    copyAddress: "アドレスをコピー",
    edit: "編集",
    presetHome: "ホーム",
    presetSearch: "検索",
    presetBookmark: "ブックマーク",
    presetStar: "お気に入り",
    presetHeart: "いいね",
    presetMail: "メール",
    presetChat: "チャット",
    presetVideo: "動画",
    presetMusicNote2: "音楽",
    presetImage: "画像",
    presetDocument: "ドキュメント",
    presetBook: "本",
    presetCode: "コード",
    presetCloud: "クラウド",
    presetGlobe: "ウェブサイト",
    presetCart: "ショッピング",
    presetWallet: "ウォレット",
    presetGift: "ギフト",
    presetGames: "ゲーム",
    presetCalendar: "カレンダー",
    presetClock: "時刻",
    presetPerson: "個人",
    presetPeople: "ソーシャル",
    presetBriefcase: "仕事",
    presetDocumentText: "メモ",
    presetNews: "ニュース",
    presetCamera: "カメラ",
    presetMap: "地図",
    presetAirplane: "旅行",
    presetFood: "グルメ",
    presetBeaker: "三角フラスコ",
    presetLibrary: "ライブラリ",
    presetTranslate: "翻訳",
    presetSettings: "設定",
    presetLink: "リンク",
    inputNamePh: '名前',
    errorNameReq: 'クイックリンク名を入力してください',
    errorUrlReq: 'URLを入力してください',
    delete: '削除',
    cancel: 'キャンセル',
    restoreWarnTitle: '不明な提供元の設定ファイルにはご注意ください',
    restoreWarnDesc: '不明な提供元の設定ファイルには、クイックリンク、検索エンジン、壁紙リンクに危険なスクリプトが含まれている可能性があります。',
    continueAction: '続行',
    save: 'OK',
    customEngineTitle: 'カスタム検索エンジン',
    engineName: '検索エンジン名',
    engineNamePh: '例: DuckDuckGo',
    errorEngineNameReq: '検索エンジン名を入力してください',
    engineUrl: '検索 URL (%s が検索語に置換されます)',
    errorEngineUrlFormat: '検索 URL には %s を含める必要があります',
    useOnlineContent: 'オンラインコンテンツを使用',
    bingDaily: 'Bingの今日の壁紙',
    uploadedWallpaper: 'アップロードした背景',
    localImage: '背景画像',
    baidu: 'Baidu',
    bing: 'Bing',
    customUrl: 'カスタム',
    customOnlineWallpaper: 'カスタムオンライン壁紙',
    imageOrVideoUrl: '画像または動画のURL',
    enterUrl: '画像または動画のURLを入力',
    bingCN: 'Bing',
    forceBingCN: 'Bing中国版を強制使用',
    forceBingCNDesc: '<b>ON</b>：cn.bing.com を強制使用<br><b>OFF</b>：ネットワーク環境に応じて自動的に選択<br>このオプションにより、プロキシ設定による www.bing.com から cn.bing.com への自動リダイレクトの妨げを防ぎます。',
    enhancedVisibility: '要素の視認性を向上',
    enhancedBlur: '下地のぼかしを有効化',
    bgVignette: '背景のビネット',
    bgFadeBlur: '背景読み込み時のぼかし',
    enhancedBlurTip: 'このオプションは消費電力にわずかな影響を与える可能性があります。',
    addlink: '追加',
    addQuicklink: 'クイックリンクを追加',
    manageProfiles: 'バックアップとリセット',
    manageProfilesTitle: 'バックアップとリセット',
    selectOperation: '実行する操作を選択',
    exportConfig: '設定をエクスポート',
    importConfig: '設定をインポート',
    initConfigOption: '設定をリセット',
    next: '次へ',
    resetTitle: 'Litestartをリセット',
    resetDesc: '問題が発生した場合や現在の設定に満足できない場合、リセットするとすべてのデータが消去されLitestartが初期状態に戻ります。この操作は元に戻せません！',
    confirmReset: 'リセット',
    resetDoneTitle: 'リセット完了',
    resetDoneDesc: 'すべての設定が初期状態にリセットされました。ページが更新されます。',
    refreshNow: '今すぐ更新',
    restoreDoneTitle: '設定の復元が完了しました',
    restoreDoneDesc: '設定を復元しました。すべての設定を反映するためページを更新します。',
    layout: 'レイアウト',
    editLayout: 'レイアウトを編集',
    searchBoxPosition: '検索ボックスの位置',
    showSearchBox: '検索ボックスを表示',
    quicklinkPosition: 'クイックリンクの位置',
    qlPositionDefault: '既定',
    qlPositionBottom: '下部',
    qlPositionMiddle: '中央',
    layoutHanging: 'ハンギング',
    layoutCentered: '中央',
    showLogo: 'ロゴを表示',
    showAddButton: 'クイックリンクに追加ボタンを表示',
    hideAddButton: 'このボタンを非表示',
    addButtonHiddenTitle: '追加ボタンを非表示にしました',
    addButtonHiddenDesc: '追加ボタンは非表示です。左上のメニューからクイックリンクを作成してください。<br>「設定 - レイアウトを編集」で再度有効にできます。',
    ok: 'OK',
    customTitleImage: 'カスタムタイトル画像',
    selectImageFile: '画像を選択',
    removeImage: '画像を削除',
    noImageSelected: '画像が選択されていません',
  },
  'ru': {
    pageTitle: 'Новая вкладка',
    settingsTitle: 'Настройки страницы',
    close: 'Закрыть',
    back: 'Назад',
    quicklinkStyle: 'Вид быстрых ссылок',
    showQuicklinks: 'Показывать быстрые ссылки',
    off: 'Выкл',
    on: 'Вкл',
    rows1: 'Одна строка',
    rows2: 'Несколько строк',
    showTimeCapsule: 'Показать время',
    showMenuButton: 'Показать кнопку меню',
    searchEngine: 'Поисковая система',
    custom: 'Пользовательская',
    editCustomEngine: 'Изменить поисковую систему',
    saveHistory: 'Сохранять историю поиска',
    inspirational: 'Вдохновение',
    focused: 'Фокус',
    appreciate: 'Подоконник',
    presets: 'Пресеты',

    background: 'Фон',
    enableBackground: 'Включить фон',
    editBackground: 'Изменить фон',
    language: 'Язык',
    langAuto: 'По умолчанию (системный)',
    cookieNotice: 'Политика конфиденциальности',
    license: 'Лицензия',
    contributor: 'Вкладчики',
    helpFeedback: 'Справка и отзывы',
    presentedBy: 'Создатель:',
    xingyuefox: 'XingYue_Fox',
    AomiRaku: 'Raku Inkyetta',
    forYou: '',
    disclaimer: 'Примечание: Эта страница не связана с Microsoft.',
    aboutTitle: 'О Litestart',
    download: 'Скачать',
    updateOptions: 'Параметры обновления',
    skipThisUpdate: 'Отложить до завтра',
    skipRestore: 'Возобновить напоминания',
    updateAvailable: 'Доступно обновление',
    aboutDesc: 'Простая и быстрая страница запуска браузера.',
    litever: 'Версия 1.8.9 | Обновлено: 2026-10-31',
    versionInfo: 'Информация о версии',
    and: 'и',
    searchPlaceholder: 'Что поищем сегодня через {name}?',
    searchPlaceholderNight: 'Что поищем вечером через {name}?',
    searchPlaceholderAprilFool: 'Хм! Сегодня ты ничего не найдёшь!',
    customEngineWithName: 'Свой ({name})',
    themeMode: 'Тема',
    themeAuto: 'Системная',
    themeLight: 'Светлая',
    themeDark: 'Тёмная',
    searchInput: 'Поле поиска',
    clearSearchHistory: 'Очистить историю поиска',
    usingDefaultBg: 'Используется стандартный фон',
    defaultWallpaper: 'По умолчанию',
    localFile: 'Локальный файл',
    onlineWallpaper: 'Своя онлайн-ссылка',
    uploadFile: 'Выбрать файл',
    editCustomLink: 'Изменить свою ссылку',
    editShortcut: 'Изменить быструю ссылку',
    name: 'Название',
    icon: 'Значок',
    iconAuto: 'Автоматически',
    iconFirstChar: 'Первая буква',
    iconPreset: "Пресет",
    openInNewTab: "Открыть в новой вкладке",
    copyAddress: "Скопировать адрес",
    edit: "Изменить",
    presetHome: "Главная",
    presetSearch: "Поиск",
    presetBookmark: "Закладка",
    presetStar: "Избранное",
    presetHeart: "Нравится",
    presetMail: "Почта",
    presetChat: "Чат",
    presetVideo: "Видео",
    presetMusicNote2: "Музыка",
    presetImage: "Изображение",
    presetDocument: "Документ",
    presetBook: "Книга",
    presetCode: "Код",
    presetCloud: "Облако",
    presetGlobe: "Сайт",
    presetCart: "Покупки",
    presetWallet: "Кошелёк",
    presetGift: "Подарок",
    presetGames: "Игры",
    presetCalendar: "Календарь",
    presetClock: "Время",
    presetPerson: "Личное",
    presetPeople: "Соцсети",
    presetBriefcase: "Работа",
    presetDocumentText: "Заметки",
    presetNews: "Новости",
    presetCamera: "Камера",
    presetMap: "Карта",
    presetAirplane: "Путешествия",
    presetFood: "Еда",
    presetBeaker: "Колба",
    presetLibrary: "Библиотека",
    presetTranslate: "Перевод",
    presetSettings: "Настройки",
    presetLink: "Ссылка",
    inputNamePh: 'Название',
    errorNameReq: 'Введите название быстрой ссылки',
    errorUrlReq: 'Введите URL',
    delete: 'Удалить',
    cancel: 'Отмена',
    restoreWarnTitle: 'Будьте осторожны с файлами конфигурации из неизвестных источников',
    restoreWarnDesc: 'Файлы конфигурации из неизвестных источников могут содержать опасные скрипты в быстрых ссылках, поисковых системах или ссылках на обои.',
    continueAction: 'Продолжить',
    save: 'Сохранить',
    customEngineTitle: 'Пользовательский поиск',
    engineName: 'Название',
    engineNamePh: 'Например: DuckDuckGo',
    errorEngineNameReq: 'Введите название',
    engineUrl: 'URL поиска (%s вместо запроса)',
    errorEngineUrlFormat: 'URL должен содержать %s',
    useOnlineContent: 'Использовать онлайн-контент',
    bingDaily: 'Ежедневные обои Bing',
    uploadedWallpaper: 'Загруженный фон',
    localImage: 'Фоновое изображение',
    baidu: 'Baidu',
    customUrl: 'Пользовательский',
    customOnlineWallpaper: 'Пользовательские онлайн-обои',
    imageOrVideoUrl: 'URL изображения или видео',
    enterUrl: 'Введите URL изображения или видео',
    bingCN: 'Bing',
    forceBingCN: 'Принудительно использовать Bing China',
    forceBingCNDesc: '<b>Вкл.</b>: Принудительно использует cn.bing.com<br><b>Выкл.</b>: Автоматический выбор в зависимости от сетевых условий<br>Этот параметр предотвращает проблемы с прокси, мешающие автоматическому редиректу www.bing.com на cn.bing.com.',
    enhancedVisibility: 'Повысить видимость элементов',
    enhancedBlur: 'Размытие подложки',
    bgVignette: 'Виньетка фона',
    bgFadeBlur: 'Размытие при загрузке фона',
    enhancedBlurTip: 'Эта опция может незначительно увеличить энергопотребление.',
    addlink: 'Добавить',
    addQuicklink: 'Добавить быструю ссылку',
    manageProfiles: 'Резервная копия',
    manageProfilesTitle: 'Резервное копирование и сброс',
    selectOperation: 'Выберите действие',
    exportConfig: 'Экспорт настроек',
    importConfig: 'Импорт настроек',
    initConfigOption: 'Сброс настроек',
    next: 'Далее',
    resetTitle: 'Сбросить Litestart',
    resetDesc: 'Если у вас возникли проблемы или вы недовольны текущими настройками, сброс удалит все данные и восстановит Litestart в исходное состояние. Обратите внимание: это действие необратимо!',
    confirmReset: 'Подтвердить',
    resetDoneTitle: 'Сброс завершён',
    resetDoneDesc: 'Все настройки сброшены до исходного состояния. Страница будет обновлена.',
    refreshNow: 'Обновить сейчас',
    restoreDoneTitle: 'Восстановление завершено',
    restoreDoneDesc: 'Настройки восстановлены. Страница будет обновлена для применения всех параметров.',
        layout: 'Макет',
    editLayout: 'Изменить макет',
    searchBoxPosition: 'Положение поисковой строки',
    showSearchBox: 'Показывать поисковую строку',
    quicklinkPosition: 'Положение быстрых ссылок',
    qlPositionDefault: 'По умолчанию',
    qlPositionBottom: 'Внизу',
    qlPositionMiddle: 'По центру',
    layoutHanging: 'Подвесной',
    layoutCentered: 'По центру',
    showLogo: 'Показывать логотип',
    showAddButton: 'Кнопка добавления в быстрых ссылках',
    hideAddButton: 'Скрыть кнопку',
    addButtonHiddenTitle: 'Кнопка добавления скрыта',
    addButtonHiddenDesc: 'Кнопка добавления скрыта. Создавайте быстрые ссылки через меню в левом верхнем углу.<br>Её можно снова включить в разделе «Настройки — Изменить макет».',
    ok: 'ОК',
    // ...
    bing: 'Bing',
    customTitleImage: 'Пользовательское изображение заголовка',
    selectImageFile: 'Выбрать изображение',
    removeImage: 'Удалить изображение',
    noImageSelected: 'Изображение не выбрано',

  }
};

// 根据用户语言设置和系统语言，解析并返回实际使用的语言代码
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

// 界面渲染函数
function applyLanguage(langConfig) {
  const langCode = getResolvedLanguageCode(langConfig);
  const dict = i18nData[langCode] || i18nData['zh-CN'];
  window._i18nDict = dict; // 暴露翻译表给外部作用域使用

  document.documentElement.lang = langCode.startsWith('zh') ? (langCode === 'zh-TW' ? 'zh-TW' : 'zh-CN') : langCode;

  // 1.替换 innerText（新增diff，内容一致时跳过重排）
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const target = dict[key];
    // textContent 读取不触发重排；内容相同就完全跳过写入
    if (target !== undefined && el.textContent !== target) {
      el.textContent = target;
    }
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (dict[key] !== undefined) {
      const arrow = el.querySelector('.tooltip-arrow');
      el.innerHTML = dict[key];
      if (arrow) {
        el.insertBefore(arrow, el.firstChild);
      }
    }
  });

  // 2.替换 title 属性
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    if (dict[key] !== undefined) {
      el.setAttribute('title', dict[key]);
    }
  });

  // 3.替换 placeholder 属性
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (dict[key] !== undefined) {
      el.setAttribute('placeholder', dict[key]);
    }
  });

  // 4.替换 aria-label 属性
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.getAttribute('data-i18n-aria');
    if (dict[key] !== undefined) {
      el.setAttribute('aria-label', dict[key]);
    }
  });

  // 5.刷新特殊状态开闭文本
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

  // 6.刷新时间状态文本
  const statusTimeCapsule = document.getElementById('status-time-capsule');
  if (statusTimeCapsule) {
    const isChecked = document.getElementById('toggle-time-capsule-switch')?.checked || false;
    statusTimeCapsule.innerText = isChecked ? dict.on : dict.off;
  }

  // 7.刷新菜单按钮状态文本
  const statusMenuBtn = document.getElementById('status-menu-button');
  if (statusMenuBtn) {
    const isChecked = document.getElementById('toggle-menu-button-switch')?.checked ?? true;
    statusMenuBtn.innerText = isChecked ? dict.on : dict.off;
  }

  // 8.刷新显示标题开关状态文本
  const statusLogo = document.getElementById('status-logo');
  if (statusLogo) {
    const isChecked = document.getElementById('toggle-logo-switch')?.checked ?? true;
    statusLogo.innerText = isChecked ? dict.on : dict.off;
  }

  // 8.1 刷新快速链接"添加"按钮开关状态文本
  const statusAddButton = document.getElementById('status-add-button');
  if (statusAddButton) {
    const isChecked = document.getElementById('toggle-add-button-switch')?.checked ?? true;
    statusAddButton.innerText = isChecked ? dict.on : dict.off;
  }

  // 8.1.1 刷新"显示快速链接"开关状态文本
  const statusQuicklinks = document.getElementById('status-quicklinks');
  if (statusQuicklinks) {
    const isChecked = document.getElementById('toggle-quicklinks-switch')?.checked ?? true;
    statusQuicklinks.innerText = isChecked ? dict.on : dict.off;
  }

  // 8.2 刷新"显示搜索框"开关状态文本
  const statusSearchBox = document.getElementById('status-search-box');
  if (statusSearchBox) {
    const isChecked = document.getElementById('toggle-search-switch')?.checked ?? true;
    statusSearchBox.innerText = isChecked ? dict.on : dict.off;
  }

  // 9.强制使用必应中国版开关状态文本
  const statusForceBingCN = document.getElementById('status-force-bing-cn');
  if (statusForceBingCN) {
    const isChecked = document.getElementById('toggle-force-bing-cn')?.checked || false;
    statusForceBingCN.innerText = isChecked ? dict.on : dict.off;
  }

  // 10.刷新增强元素可见性状态文本
  const statusEnhancedVisibility = document.getElementById('status-enhanced-visibility');
  if (statusEnhancedVisibility) {
    const isChecked = document.getElementById('toggle-enhanced-visibility')?.checked || false;
    statusEnhancedVisibility.innerText = isChecked ? dict.on : dict.off;
  }

  const statusEnhancedBlur = document.getElementById('status-enhanced-blur');
  if (statusEnhancedBlur) {
    const isChecked = document.getElementById('toggle-enhanced-blur')?.checked || false;
    statusEnhancedBlur.innerText = isChecked ? dict.on : dict.off;
  }

  const statusBgVignette = document.getElementById('status-bg-vignette');
  if (statusBgVignette) {
    const isChecked = document.getElementById('toggle-bg-vignette')?.checked ?? true;
    statusBgVignette.innerText = isChecked ? dict.on : dict.off;
  }

  const statusBgFadeBlur = document.getElementById('status-bg-fade-blur');
  if (statusBgFadeBlur) {
    const isChecked = document.getElementById('toggle-bg-fade-blur')?.checked || false;
    statusBgFadeBlur.innerText = isChecked ? dict.on : dict.off;
  }

  // 11.刷新自定义下拉选项文本
  refreshCustomSelects();

  // 注：「添加」按钮的文案由第 1 步的 [data-i18n="addlink"] 扫描覆盖，
  // 不必在这里再调 syncQuicklinksLanguage —— 它定义在 DOMContentLoaded 回调内，
  // 顶层函数访问不到该标识符（typeof 返回 'undefined'，调用永不执行）。

  // 13.搜索框提示与"自定义"选项都含引擎名，要在上面刷完后再覆盖一次
  try {
    applySearchPlaceholder();
    updateCustomEngineOption();
    setupThemeOptionScroll();   // 文案长度随语言变化，需重新量一次
    updateIconPresetOption();   // 「预置（图标名）」里的名称也随语言变
  } catch (err) {
    console.warn('搜索框提示同步失败:', err);
  }

  // ===== 工具提示(Tooltip) 初始化 =====

  if (!window._tooltipInitialized) {
    window._tooltipInitialized = true;

    // 存储当前显示中的 tooltip 位置更新函数，用于滚动/缩放时重新定位
    const activeTooltipIcons = new Set();

    const tooltipReposition = () => {
      activeTooltipIcons.forEach(fn => fn());
    };
    window.addEventListener('scroll', tooltipReposition, true);
    window.addEventListener('resize', tooltipReposition);

    document.querySelectorAll('.tooltip-icon').forEach(icon => {
      const tooltip = icon.querySelector('.tooltip-content');
      if (!tooltip) return;

      // 关键：初始化时就将 tooltip 移到 body，而不是在 show 时
      document.body.appendChild(tooltip);

      let tipWidth = 0;
      let tipHeight = 0;

      // 测量 tooltip 尺寸（首次显示前调用，确保内容已渲染）
      const measureTooltip = () => {
        const tipRect = tooltip.getBoundingClientRect();
        tipWidth = tipRect.width;
        tipHeight = tipRect.height;
      };

      // 根据图标位置计算 tooltip 显示坐标
      const position = () => {
        if (tipWidth === 0 || tipHeight === 0) {
          measureTooltip();
        }
        const rect = icon.getBoundingClientRect();

        // 默认在图标上方显示
        let left = rect.left + rect.width / 2 - tipWidth / 2;
        let top = rect.top - tipHeight - 10;
        let below = false;

        // 如果上方空间不足（<8px），且下方空间充足，则改为下方显示
        if (top < 8 && rect.bottom + tipHeight + 10 < window.innerHeight) {
          top = rect.bottom + 10;
          below = true;
        }

        // 水平方向边界约束，防止超出视口
        left = Math.max(8, Math.min(left, window.innerWidth - tipWidth - 8));

        tooltip.style.left = left + 'px';
        tooltip.style.top = top + 'px';

        // 根据显示方向切换箭头朝向
        if (below) {
          tooltip.classList.add('tooltip-below');
        } else {
          tooltip.classList.remove('tooltip-below');
        }
      };

      const show = () => {
        measureTooltip();
        position();
        tooltip.style.visibility = 'visible';
        tooltip.style.opacity = '1';
        activeTooltipIcons.add(position);
      };

      const hide = () => {
        tooltip.style.visibility = 'hidden';
        tooltip.style.opacity = '0';
        activeTooltipIcons.delete(position);
      };

      icon.addEventListener('mouseenter', show);
      icon.addEventListener('focus', show);
      icon.addEventListener('click', show);
      icon.addEventListener('mouseleave', hide);
      icon.addEventListener('blur', hide);
    });
  }
}

// LocalStorage 读写封装（带 JSON 序列化与异常保护）
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
      return true;
    } catch (e) {
      if (e.name === 'QuotaExceededError' || e.name === 'NS_ERROR_DOM_QUOTA_REACHED') {
        console.warn('LocalStorage 配额已满:', e);
      } else {
        console.warn('无法保存设置到 LocalStorage:', e);
      }
      return false;
    }
  },
  remove(key) {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (e) {
      console.warn('无法删除本地设置:', e);
      return false;
    }
  }
};

// 通过 Canvas 将图片压缩/重编码为 JPEG Blob（限制最大宽度，避免 IndexedDB 占用过大）
function compressImage(file, options = {}) {
  const { maxWidth = 2560, quality = 0.85 } = options;
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        let { width, height } = img;
        if (width > maxWidth) {
          height = Math.round(height * (maxWidth / width));
          width = maxWidth;
        }
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);
        const mime = file.type === 'image/webp' ? 'image/webp' : 'image/jpeg';
        canvas.toBlob(
          (blob) => blob ? resolve(blob) : reject(new Error('图片压缩失败')),
          mime,
          quality
        );
      };
      img.onerror = () => reject(new Error('图片加载失败'));
      img.src = e.target.result;
    };
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

// 压缩自定义标题图片为 PNG DataURL（保留透明通道，适合 Logo 类图片）
function compressLogoImage(file, options = {}) {
  const { maxWidth = 600 } = options;
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        let { width, height } = img;
        if (width > maxWidth) {
          height = Math.round(height * (maxWidth / width));
          width = maxWidth;
        }
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);
        try {
          resolve(canvas.toDataURL('image/png'));
        } catch (err) {
          reject(err);
        }
      };
      img.onerror = () => reject(new Error('图片加载失败'));
      img.src = e.target.result;
    };
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}


// IndexedDB 封装：用 Blob 直接存壁纸二进制（配额远大于 localStorage 的 5MB，且无 base64 膨胀）
const WallpaperDB = {
  _db: null,
  _initPromise: null,

  init() {
    if (this._db) return Promise.resolve(this._db);
    if (this._initPromise) return this._initPromise;
    this._initPromise = new Promise((resolve, reject) => {
      const req = indexedDB.open('LitestartWallpaper', 1);
      req.onupgradeneeded = (e) => {
        e.target.result.createObjectStore('blob', { keyPath: 'key' });
      };
      req.onsuccess = (e) => {
        this._db = e.target.result;
        resolve(this._db);
      };
      req.onerror = () => reject(req.error);
    });
    return this._initPromise;
  },

  async save(blob, key) {
    await this.init();
    return new Promise((resolve, reject) => {
      const tx = this._db.transaction('blob', 'readwrite');
      tx.objectStore('blob').put({ key: key || 'current', blob });
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
  },

  async load(key) {
    await this.init();
    return new Promise((resolve, reject) => {
      const tx = this._db.transaction('blob', 'readonly');
      const req = tx.objectStore('blob').get(key || 'current');
      req.onsuccess = () => resolve(req.result ? req.result.blob : null);
      req.onerror = () => reject(req.error);
    });
  },

  async remove(key) {
    if (!this._db) {
      try { await this.init(); } catch { return; }
    }
    return new Promise((resolve, reject) => {
      const tx = this._db.transaction('blob', 'readwrite');
      tx.objectStore('blob').delete(key || 'current');
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
  }
};

// 判断壁纸是否为远程资源（必应每日壁纸 或 http(s) URL）
function isRemoteWallpaper(data) {
  if (!data) return false;
  return data.type === 'bing_daily' || (data.url && data.url.startsWith('http'));
}

// 释放旧的 blob: URL，避免内存泄漏（每次生成新 blob URL 前调用）
function revokeBlobUrl(url) {
  if (url && url.startsWith('blob:')) {
    try { URL.revokeObjectURL(url); } catch (e) {}
  }
}

// 壁纸统一保存入口：远程资源存 localStorage，本地 Blob 存 IndexedDB
async function saveWallpaperData(data) {
  if (!data) {
    await WallpaperDB.remove().catch(() => {});
    Storage.set('ntp_custom_wallpaper', null);
    return true;
  }

  if (isRemoteWallpaper(data)) {
    await WallpaperDB.remove().catch(() => {});
    Storage.set('ntp_custom_wallpaper', data);
    return true;
  }

  let blob;
  if (data.blob instanceof Blob) {
    blob = data.blob;
  } else if (data.url && data.url.startsWith('data:')) {
    const [meta, base64] = data.url.split(',');
    const mime = meta.match(/:(.*?);/)[1];
    const binary = atob(base64);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
    blob = new Blob([bytes], { type: mime });
  } else {
    Storage.set('ntp_custom_wallpaper', data);
    return true;
  }

  try {
    await WallpaperDB.save(blob);
    const meta = {
      type: data.type,
      source: data.source
    };
    Storage.set('ntp_custom_wallpaper', meta);
    return true;
  } catch (e) {
    console.error('壁纸存储失败:', e);
    return false;
  }
}

// 壁纸统一加载入口：从 IndexedDB 取回 Blob，生成 blob: URL 给渲染层使用
async function loadWallpaperData() {
  const meta = Storage.get('ntp_custom_wallpaper', null);
  if (!meta) return null;

  if (isRemoteWallpaper(meta)) {
    return meta;
  }

  try {
    const blob = await WallpaperDB.load();
    if (!blob) return meta;
    return {
      type: meta.type,
      url: URL.createObjectURL(blob),
      source: meta.source
    };
  } catch (e) {
    console.error('壁纸读取失败:', e);
    return meta;
  }
}

// 保留的本地壁纸：切到其它来源后仍可原样切回。
// 与「当前壁纸」分开存放，当前壁纸被替换或清除时不受影响
const LOCAL_WALLPAPER_KEY = 'local';
const LOCAL_WALLPAPER_TYPE_KEY = 'ntp_local_wallpaper_type';
let localWallpaperBlob = null;
let localWallpaperType = null;

async function loadLocalWallpaperBackup() {
  try {
    const blob = await WallpaperDB.load(LOCAL_WALLPAPER_KEY);
    if (!blob) return;
    localWallpaperBlob = blob;
    localWallpaperType = Storage.get(LOCAL_WALLPAPER_TYPE_KEY, 'image');
  } catch (e) {
    console.error('本地壁纸读取失败:', e);
  }
}

// 解析Hostname域名
function getDomain(urlStr) {
  try {
    if (!/^[a-z][a-z0-9+.-]*:\/\//i.test(urlStr)) {
      urlStr = 'https://' + urlStr;
    }
    const url = new URL(urlStr);
    return url.hostname;
  } catch (e) {
    return '';
  }
}

// 获取网站缩略图
function getFaviconUrl(urlStr) {
  const domain = getDomain(urlStr);
  if (!domain) return '';
  return `https://api.xinac.net/icon/?url=${domain}`;
}

// ===== 快速链接「预置」图标 =====
// 取自 Fluent UI System Icons（Microsoft, MIT），经 Iconify 导出（https://api.iconify.design/fluent.json）。
// 只存 SVG 内容，渲染时统一用 width/height + currentColor，跟随主题文字色。
const QUICKLINK_PRESET_ICONS = [
  { id: "home", body: "<path fill=\"currentColor\" d=\"M13.45 2.533a2.25 2.25 0 0 0-2.9 0L3.8 8.228a2.25 2.25 0 0 0-.8 1.72v9.305c0 .966.784 1.75 1.75 1.75h3a1.75 1.75 0 0 0 1.75-1.75V15.25c0-.68.542-1.232 1.217-1.25h2.566a1.25 1.25 0 0 1 1.217 1.25v4.003c0 .966.784 1.75 1.75 1.75h3a1.75 1.75 0 0 0 1.75-1.75V9.947a2.25 2.25 0 0 0-.8-1.72z\"/>", regular: "<path fill=\"currentColor\" d=\"M10.55 2.532a2.25 2.25 0 0 1 2.9 0l6.75 5.692c.507.428.8 1.057.8 1.72v9.31a1.75 1.75 0 0 1-1.75 1.75h-3.5a1.75 1.75 0 0 1-1.75-1.75v-5.007a.25.25 0 0 0-.25-.25h-3.5a.25.25 0 0 0-.25.25v5.007a1.75 1.75 0 0 1-1.75 1.75h-3.5A1.75 1.75 0 0 1 3 19.254v-9.31c0-.663.293-1.292.8-1.72zm1.933 1.147a.75.75 0 0 0-.966 0L4.767 9.37a.75.75 0 0 0-.267.573v9.31c0 .138.112.25.25.25h3.5a.25.25 0 0 0 .25-.25v-5.007c0-.967.784-1.75 1.75-1.75h3.5c.966 0 1.75.783 1.75 1.75v5.007c0 .138.112.25.25.25h3.5a.25.25 0 0 0 .25-.25v-9.31a.75.75 0 0 0-.267-.573z\"/>" },
  { id: "search", body: "<path fill=\"currentColor\" d=\"M15.843 17.368a8 8 0 1 1 1.428-1.4l4.427 4.316a1 1 0 1 1-1.396 1.432zM17 11a6 6 0 1 0-12 0a6 6 0 0 0 12 0\"/>", regular: "<path fill=\"currentColor\" d=\"M16.102 17.162a8 8 0 1 1 1.06-1.06l4.618 4.618a.75.75 0 1 1-1.06 1.06zM17.5 11a6.5 6.5 0 1 0-13 0a6.5 6.5 0 0 0 13 0\"/>" },
  { id: "bookmark", body: "<path fill=\"currentColor\" d=\"M6.19 21.855a.75.75 0 0 1-1.187-.61V6.25A3.25 3.25 0 0 1 8.253 3h7.498a3.25 3.25 0 0 1 3.25 3.25v14.996a.75.75 0 0 1-1.188.609l-5.81-4.181z\"/>", regular: "<path fill=\"currentColor\" d=\"M6.19 21.855a.75.75 0 0 1-1.187-.61V6.25A3.25 3.25 0 0 1 8.253 3h7.498a3.25 3.25 0 0 1 3.25 3.25v14.996a.75.75 0 0 1-1.188.609l-5.81-4.181zM17.502 6.25a1.75 1.75 0 0 0-1.75-1.75H8.253a1.75 1.75 0 0 0-1.75 1.75v13.532l5.061-3.641a.75.75 0 0 1 .876 0l5.061 3.641z\"/>" },
  { id: "star", body: "<path fill=\"currentColor\" d=\"M10.788 3.102c.495-1.003 1.926-1.003 2.421 0l2.358 4.778l5.273.766c1.107.16 1.549 1.522.748 2.303l-3.816 3.719l.901 5.25c.19 1.104-.968 1.945-1.959 1.424l-4.716-2.48l-4.715 2.48c-.99.52-2.148-.32-1.96-1.423l.901-5.251l-3.815-3.72c-.801-.78-.359-2.141.748-2.302L8.43 7.88z\"/>", regular: "<path fill=\"currentColor\" d=\"M10.788 3.102c.495-1.003 1.926-1.003 2.421 0l2.358 4.778l5.273.766c1.107.16 1.549 1.522.748 2.303l-3.816 3.719l.901 5.25c.19 1.104-.968 1.945-1.959 1.424l-4.716-2.48l-4.715 2.48c-.99.52-2.148-.32-1.96-1.423l.901-5.251l-3.815-3.72c-.801-.78-.359-2.141.748-2.302L8.43 7.88zm1.21.937L9.74 8.614a1.35 1.35 0 0 1-1.016.739l-5.05.734l3.654 3.562c.318.31.463.757.388 1.195l-.862 5.029l4.516-2.375a1.35 1.35 0 0 1 1.257 0l4.516 2.375l-.862-5.03a1.35 1.35 0 0 1 .388-1.194l3.654-3.562l-5.05-.734a1.35 1.35 0 0 1-1.016-.739z\"/>" },
  { id: "heart", body: "<path fill=\"currentColor\" d=\"m12.82 5.58l-.82.822l-.824-.824a5.375 5.375 0 1 0-7.601 7.602l7.895 7.895a.75.75 0 0 0 1.06 0l7.902-7.897a5.376 5.376 0 0 0-.001-7.599a5.38 5.38 0 0 0-7.611 0\"/>", regular: "<path fill=\"currentColor\" d=\"m12.82 5.58l-.82.822l-.824-.824a5.375 5.375 0 1 0-7.601 7.602l7.895 7.895a.75.75 0 0 0 1.06 0l7.902-7.897a5.376 5.376 0 0 0-.001-7.599a5.38 5.38 0 0 0-7.611 0m6.548 6.54L12 19.485L4.635 12.12a3.875 3.875 0 1 1 5.48-5.48l1.358 1.357a.75.75 0 0 0 1.073-.012L13.88 6.64a3.88 3.88 0 0 1 5.487 5.48\"/>" },
  { id: "mail", body: "<path fill=\"currentColor\" d=\"M22 8.608v8.142a3.25 3.25 0 0 1-3.066 3.245L18.75 20H5.25a3.25 3.25 0 0 1-3.245-3.066L2 16.75V8.608l9.652 5.056a.75.75 0 0 0 .696 0zM5.25 4h13.5a3.25 3.25 0 0 1 3.234 2.924L12 12.154l-9.984-5.23a3.25 3.25 0 0 1 3.048-2.919zh13.5z\"/>", regular: "<path fill=\"currentColor\" d=\"M5.25 4h13.5a3.25 3.25 0 0 1 3.245 3.066L22 7.25v9.5a3.25 3.25 0 0 1-3.066 3.245L18.75 20H5.25a3.25 3.25 0 0 1-3.245-3.066L2 16.75v-9.5a3.25 3.25 0 0 1 3.066-3.245zh13.5zM20.5 9.373l-8.15 4.29a.75.75 0 0 1-.603.043l-.096-.042L3.5 9.374v7.376a1.75 1.75 0 0 0 1.606 1.744l.144.006h13.5a1.75 1.75 0 0 0 1.744-1.607l.006-.143zM18.75 5.5H5.25a1.75 1.75 0 0 0-1.744 1.606L3.5 7.25v.429l8.5 4.474l8.5-4.475V7.25a1.75 1.75 0 0 0-1.607-1.744z\"/>" },
  { id: "chat", body: "<path fill=\"currentColor\" d=\"M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.96 9.96 0 0 1-4.644-1.142l-4.29 1.117a.85.85 0 0 1-1.037-1.036l1.116-4.289A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2m1.252 11H8.75l-.102.007a.75.75 0 0 0 0 1.486l.102.007h4.502l.101-.007a.75.75 0 0 0 0-1.486zm1.998-3.5h-6.5l-.102.007a.75.75 0 0 0 0 1.486L8.75 11h6.5l.102-.007a.75.75 0 0 0 0-1.486z\"/>", regular: "<path fill=\"currentColor\" d=\"M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.96 9.96 0 0 1-4.587-1.112l-3.826 1.067a1.25 1.25 0 0 1-1.54-1.54l1.068-3.823A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2m0 1.5A8.5 8.5 0 0 0 3.5 12c0 1.47.373 2.883 1.073 4.137l.15.27l-1.112 3.984l3.987-1.112l.27.15A8.5 8.5 0 1 0 12 3.5M8.75 13h4.498a.75.75 0 0 1 .102 1.493l-.102.007H8.75a.75.75 0 0 1-.102-1.493zh4.498zm0-3.5h6.505a.75.75 0 0 1 .101 1.493l-.101.007H8.75a.75.75 0 0 1-.102-1.493zh6.505z\"/>" },
  { id: "video", body: "<path fill=\"currentColor\" d=\"M2 8.25A3.25 3.25 0 0 1 5.25 5h6.5A3.25 3.25 0 0 1 15 8.25v7.5A3.25 3.25 0 0 1 11.75 19h-6.5A3.25 3.25 0 0 1 2 15.75zm17.257 9.438L16 15.44V8.562l3.257-2.249c1.161-.802 2.745.03 2.745 1.44v8.495c0 1.41-1.584 2.242-2.745 1.44\"/>", regular: "<path fill=\"currentColor\" d=\"M5.25 5A3.25 3.25 0 0 0 2 8.25v7.5A3.25 3.25 0 0 0 5.25 19h7.5A3.25 3.25 0 0 0 16 15.75v-.312l3.258 2.25c1.16.8 2.744-.03 2.744-1.44V7.751c0-1.41-1.584-2.242-2.744-1.44L16 8.562V8.25A3.25 3.25 0 0 0 12.75 5zM16 10.384l4.11-2.838a.25.25 0 0 1 .392.206v8.495a.25.25 0 0 1-.392.206L16 13.615zM3.5 8.25c0-.966.784-1.75 1.75-1.75h7.5c.966 0 1.75.784 1.75 1.75v7.5a1.75 1.75 0 0 1-1.75 1.75h-7.5a1.75 1.75 0 0 1-1.75-1.75z\"/>" },
  { id: "music-note-2", body: "<path fill=\"currentColor\" d=\"M20 2.75a.75.75 0 0 0-.965-.718l-10 3a.75.75 0 0 0-.535.718v9.877a3.5 3.5 0 1 0 1.496 2.702L10 18.25v-7.942l8.5-2.55v5.87a3.5 3.5 0 1 0 1.496 2.702l.004-.08z\"/>", regular: "<path fill=\"currentColor\" d=\"M19.698 2.148A.75.75 0 0 1 20 2.75v13.5l-.004.079q.004.086.004.171a3.5 3.5 0 1 1-1.5-2.873V7.758l-8.5 2.55v7.942l-.004.079q.004.085.004.171a3.5 3.5 0 1 1-1.5-2.873V5.75a.75.75 0 0 1 .534-.718l10-3a.75.75 0 0 1 .664.116M10 8.742l8.5-2.55V3.758L10 6.308zM6.5 16.5a2 2 0 1 0 0 4a2 2 0 0 0 0-4m8 0a2 2 0 1 0 4 0a2 2 0 0 0-4 0\"/>" },
  { id: "image", body: "<path fill=\"currentColor\" d=\"m11.558 13.647l-.083.07l-6.928 6.802A3.24 3.24 0 0 0 6.25 21h11.5c.625 0 1.208-.176 1.703-.481l-6.928-6.801l-.093-.078a.75.75 0 0 0-.874.007M21 6.25A3.25 3.25 0 0 0 17.75 3H6.25A3.25 3.25 0 0 0 3 6.25v11.5c0 .627.178 1.213.485 1.71l6.939-6.812l.135-.123a2.25 2.25 0 0 1 2.889.006l.128.117l6.939 6.811A3.24 3.24 0 0 0 21 17.75zm-5.75 4.5a2 2 0 1 1 0-4a2 2 0 0 1 0 4\"/>", regular: "<path fill=\"currentColor\" d=\"M17.75 3A3.25 3.25 0 0 1 21 6.25v11.5A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75V6.25A3.25 3.25 0 0 1 6.25 3zm.58 16.401l-5.805-5.686a.75.75 0 0 0-.966-.071l-.084.07l-5.807 5.687q.274.097.582.099h11.5c.203 0 .399-.035.58-.099l-5.805-5.686zM17.75 4.5H6.25A1.75 1.75 0 0 0 4.5 6.25v11.5q.001.313.103.594l5.823-5.701a2.25 2.25 0 0 1 3.02-.116l.128.116l5.822 5.702q.102-.28.104-.595V6.25a1.75 1.75 0 0 0-1.75-1.75m-2.498 2a2.252 2.252 0 1 1 0 4.504a2.252 2.252 0 0 1 0-4.504m0 1.5a.752.752 0 1 0 0 1.504a.752.752 0 0 0 0-1.504\"/>" },
  { id: "document", body: "<path fill=\"currentColor\" d=\"M12 2v6a2 2 0 0 0 2 2h6v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm1.5.5V8a.5.5 0 0 0 .5.5h5.5z\"/>", regular: "<path fill=\"currentColor\" d=\"M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9.828a2 2 0 0 0-.586-1.414l-5.828-5.828A2 2 0 0 0 12.172 2zm-.5 2a.5.5 0 0 1 .5-.5h6V8a2 2 0 0 0 2 2h4.5v10a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5zm11.88 4.5H14a.5.5 0 0 1-.5-.5V4.62z\"/>" },
  { id: "book", body: "<path fill=\"currentColor\" d=\"M6.5 2A2.5 2.5 0 0 0 4 4.5v15A2.5 2.5 0 0 0 6.5 22h13.25a.75.75 0 0 0 0-1.5H6.5a1 1 0 0 1-1-1h14.25a.75.75 0 0 0 .75-.75V4.5A2.5 2.5 0 0 0 18 2zM8 5h8a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1\"/>", regular: "<path fill=\"currentColor\" d=\"M7 6a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1zm1.5 1.5h7v-1h-7zM4 4.5A2.5 2.5 0 0 1 6.5 2H18a2.5 2.5 0 0 1 2.5 2.5v14.25a.75.75 0 0 1-.75.75H5.5a1 1 0 0 0 1 1h13.25a.75.75 0 0 1 0 1.5H6.5A2.5 2.5 0 0 1 4 19.5zM5.5 18H19V4.5a1 1 0 0 0-1-1H6.5a1 1 0 0 0-1 1z\"/>" },
  { id: "code", body: "<path fill=\"currentColor\" d=\"M14.042 1.713a1 1 0 0 1 1.916.574l-6 20a1 1 0 0 1-1.916-.574zm-7.749 4.58a1 1 0 0 1 1.414 1.414L3.414 12l4.293 4.293a1 1 0 0 1-1.414 1.414l-5-5a1 1 0 0 1 0-1.414zm10 0a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414-1.414L20.586 12l-4.293-4.293a1 1 0 0 1 0-1.414\"/>", regular: "<path fill=\"currentColor\" d=\"M15.046 1.492a.75.75 0 0 1 1.408.516l-7.5 20.5a.75.75 0 0 1-1.408-.516zm-8.839 4.74a.75.75 0 0 1 1.086 1.036L2.785 12l4.508 4.733a.75.75 0 0 1-1.086 1.035l-5-5.25a.75.75 0 0 1 0-1.036zm10.526-.025a.75.75 0 0 1 1.06.025l5 5.25a.75.75 0 0 1 0 1.036l-5 5.25a.75.75 0 0 1-1.086-1.035L21.215 12l-4.508-4.732a.75.75 0 0 1 .026-1.06\"/>" },
  { id: "cloud", body: "<path fill=\"currentColor\" d=\"M6.08 9.02a6.001 6.001 0 0 1 11.84 0A4.5 4.5 0 0 1 17.5 18h-11a4.5 4.5 0 0 1-.42-8.98\"/>", regular: "<path fill=\"currentColor\" d=\"M12 5.5a4.5 4.5 0 0 0-4.495 4.285a.75.75 0 0 1-.75.715H6.5a3 3 0 1 0 0 6h11a3 3 0 1 0 0-6h-.256a.75.75 0 0 1-.749-.715A4.5 4.5 0 0 0 12 5.5M6.08 9.02a6.001 6.001 0 0 1 11.84 0A4.5 4.5 0 0 1 17.5 18h-11a4.5 4.5 0 0 1-.42-8.98\"/>" },
  { id: "globe", body: "<path fill=\"currentColor\" d=\"M8.904 16.5h6.192C14.476 19.773 13.235 22 12 22c-1.197 0-2.4-2.094-3.038-5.204zh6.192zm-5.838.001h4.306c.364 2.082.983 3.854 1.792 5.093a10.03 10.03 0 0 1-5.952-4.814zm13.563 0h4.305a10.03 10.03 0 0 1-6.097 5.093c.755-1.158 1.344-2.778 1.715-4.681zh4.305zm.302-6.5h4.87a10.05 10.05 0 0 1-.257 5H16.84a29 29 0 0 0 .13-4.344zh4.87zM2.2 10h4.87a28 28 0 0 0 .033 4.42l.057.58H2.456a10.05 10.05 0 0 1-.258-5m6.377 0h6.849a26 26 0 0 1-.037 4.425l-.062.575H8.674a26 26 0 0 1-.132-4.512zh6.849zm6.368-7.424l-.108-.17A10.03 10.03 0 0 1 21.373 8.5h-4.59c-.316-2.416-.957-4.492-1.838-5.923l-.108-.17zm-5.902-.133l.122-.037c-.88 1.351-1.535 3.33-1.883 5.654l-.062.44H2.63a10.03 10.03 0 0 1 6.413-6.057l.122-.037zM12 2.002c1.319 0 2.646 2.542 3.214 6.183l.047.315H8.739C9.28 4.691 10.644 2.002 12 2.002\"/>", regular: "<path fill=\"currentColor\" d=\"M12 1.998c5.524 0 10.002 4.478 10.002 10.002c0 5.523-4.478 10-10.002 10S2 17.523 2 12C1.999 6.476 6.476 1.998 12 1.998M14.94 16.5H9.061c.652 2.415 1.786 4.002 2.94 4.002s2.286-1.588 2.938-4.002m-7.43 0H4.785a8.53 8.53 0 0 0 4.095 3.41c-.522-.82-.953-1.846-1.27-3.015zm11.705 0h-2.722c-.324 1.335-.792 2.5-1.373 3.411a8.53 8.53 0 0 0 3.91-3.127zM7.094 10H3.736l-.005.017A8.5 8.5 0 0 0 3.5 12a8.5 8.5 0 0 0 .544 3h3.173A20 20 0 0 1 7 12c0-.684.032-1.354.095-2.001m8.303 0H8.603a19 19 0 0 0 .135 5h6.524a19 19 0 0 0 .135-5m4.868 0h-3.358c.062.647.095 1.317.095 2a20 20 0 0 1-.218 3h3.173a8.5 8.5 0 0 0 .545-3c0-.689-.082-1.359-.237-2M8.88 4.088l-.023.008A8.53 8.53 0 0 0 4.25 8.5h3.048c.314-1.752.86-3.278 1.583-4.41m3.12-.591l-.117.005C10.62 3.62 9.397 5.621 8.83 8.5h6.342c-.566-2.87-1.783-4.869-3.045-4.995zm3.12.59l.106.175c.67 1.112 1.177 2.572 1.475 4.237h3.048a8.53 8.53 0 0 0-4.339-4.29z\"/>" },
  { id: "cart", body: "<path fill=\"currentColor\" d=\"M2.5 4.25a.75.75 0 0 1 .75-.75h.558c.95 0 1.52.639 1.845 1.233c.217.396.374.855.497 1.271L6.25 6h12.498c.83 0 1.43.794 1.202 1.593l-1.828 6.409a2.75 2.75 0 0 1-2.644 1.996H9.53a2.75 2.75 0 0 1-2.652-2.022l-.76-2.772l-1.26-4.248l-.001-.008c-.156-.567-.302-1.098-.52-1.494C4.128 5.069 3.96 5 3.809 5H3.25a.75.75 0 0 1-.75-.75M9 21a2 2 0 1 0 0-4a2 2 0 0 0 0 4m7 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4\"/>", regular: "<path fill=\"currentColor\" d=\"M2.5 4.25a.75.75 0 0 1 .75-.75h.558c.95 0 1.52.639 1.845 1.233c.217.396.374.855.497 1.271L6.25 6h12.498c.83 0 1.43.794 1.202 1.593l-1.828 6.409a2.75 2.75 0 0 1-2.644 1.996H9.53a2.75 2.75 0 0 1-2.652-2.022l-.76-2.772l-1.26-4.248l-.001-.008c-.156-.567-.302-1.098-.52-1.494C4.128 5.069 3.96 5 3.809 5H3.25a.75.75 0 0 1-.75-.75m5.073 6.59l.751 2.739c.15.542.643.919 1.206.919h5.948a1.25 1.25 0 0 0 1.202-.907L18.417 7.5H6.585l.974 3.287zM11 19a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-1.5 0a.5.5 0 1 0-1 0a.5.5 0 0 0 1 0m8.5 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-1.5 0a.5.5 0 1 0-1 0a.5.5 0 0 0 1 0\"/>" },
  { id: "wallet", body: "<path fill=\"currentColor\" d=\"M3 5v12.75A3.25 3.25 0 0 0 6.25 21h12a3.25 3.25 0 0 0 3.25-3.25v-8.5A3.25 3.25 0 0 0 19 6.087V5.25A2.25 2.25 0 0 0 16.75 3H5.25a2.25 2.25 0 0 0-2.236 2zm2.25 1a.75.75 0 0 1 0-1.5h11.5a.75.75 0 0 1 .75.75V6zm11 7h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5\"/>", regular: "<path fill=\"currentColor\" d=\"M15.5 13.75a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75M3 5h.014A2.25 2.25 0 0 1 5.25 3h11.5A2.25 2.25 0 0 1 19 5.25v.837a3.25 3.25 0 0 1 2.5 3.163v8.5A3.25 3.25 0 0 1 18.25 21h-12A3.25 3.25 0 0 1 3 17.75zm15.25 2.5H4.5v10.25c0 .966.784 1.75 1.75 1.75h12A1.75 1.75 0 0 0 20 17.75v-8.5a1.75 1.75 0 0 0-1.75-1.75M17.5 6v-.75a.75.75 0 0 0-.75-.75H5.25a.75.75 0 0 0 0 1.5z\"/>" },
  { id: "gift", body: "<path fill=\"currentColor\" d=\"M11.25 13v9h-4A3.25 3.25 0 0 1 4 18.75V13zM20 13v5.75A3.25 3.25 0 0 1 16.75 22h-4v-9zM14.5 2a3.25 3.25 0 0 1 2.738 5.002L19.75 7c.69 0 1.25.466 1.25 1.042v2.916c0 .576-.56 1.042-1.25 1.042l-7-.001V7h-1.5v4.999l-7 .001C3.56 12 3 11.534 3 10.958V8.042C3 7.466 3.56 7 4.25 7l2.512.002A3.25 3.25 0 0 1 12 3.174A3.24 3.24 0 0 1 14.5 2m-5 1.5a1.75 1.75 0 0 0-.144 3.494L9.5 7h1.75V5.25l-.006-.144A1.75 1.75 0 0 0 9.5 3.5m5 0a1.75 1.75 0 0 0-1.75 1.75V7h1.75a1.75 1.75 0 1 0 0-3.5\"/>", regular: "<path fill=\"currentColor\" d=\"M14.5 2a3.25 3.25 0 0 1 2.739 5h2.511c.69 0 1.25.56 1.25 1.25v3.5a1.25 1.25 0 0 1-1 1.225v5.775a3.25 3.25 0 0 1-3.066 3.245L16.75 22h-9.5a3.25 3.25 0 0 1-3.245-3.066L4 18.75v-5.775c-.57-.116-1-.62-1-1.225v-3.5C3 7.56 3.56 7 4.25 7h2.511a3.25 3.25 0 0 1 5.24-3.827A3.24 3.24 0 0 1 14.5 2m-3.25 10.999H5.5v5.751a1.75 1.75 0 0 0 1.606 1.744l.144.006h4zm7.25 0h-5.75V20.5h4a1.75 1.75 0 0 0 1.744-1.607l.006-.143zM11.25 8.5H4.5v3l6.75-.001zm8.25 3v-3h-6.75v2.999zm-5-8a1.75 1.75 0 0 0-1.75 1.75v1.749h1.774l.12-.005A1.75 1.75 0 0 0 14.5 3.5m-5 0a1.75 1.75 0 0 0-.144 3.494l.12.005h1.774V5.25l-.006-.144A1.75 1.75 0 0 0 9.5 3.5\"/>" },
  { id: "games", body: "<path fill=\"currentColor\" d=\"M14.998 5a7 7 0 0 1 .24 13.996l-.24.004H9.002a7 7 0 0 1-.24-13.996L9.001 5zm-.248 7.5a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5M8 9a.75.75 0 0 0-.743.648l-.007.102v1.498h-1.5a.75.75 0 0 0-.102 1.494l.102.007l1.5-.001v1.502a.75.75 0 0 0 1.493.102l.007-.102v-1.502h1.5a.75.75 0 0 0 .102-1.492l-.102-.007l-1.5-.001V9.75A.75.75 0 0 0 8 9m8.75 0a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5\"/>", regular: "<path fill=\"currentColor\" d=\"M14.998 5a7 7 0 0 1 .24 13.996l-.24.004H9.002a7 7 0 0 1-.24-13.996L9.001 5zm0 1.5H9.002a5.5 5.5 0 0 0-.221 10.996l.221.004h5.996a5.5 5.5 0 0 0 .221-10.996zM8 9a.75.75 0 0 1 .75.75v1.498h1.5a.75.75 0 0 1 0 1.5h-1.5v1.502a.75.75 0 0 1-1.5 0v-1.502h-1.5a.75.75 0 1 1 0-1.5h1.5V9.75A.75.75 0 0 1 8 9m6.75 3.5a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5m2-3.5a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5\"/>" },
  { id: "calendar", body: "<path fill=\"currentColor\" d=\"M21 8.5v9.25A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75V8.5zM7.25 15a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5M12 15a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5m-4.75-4.5a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5m4.75 0a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5m4.75 0a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5m1-7.5A3.25 3.25 0 0 1 21 6.25V7H3v-.75A3.25 3.25 0 0 1 6.25 3z\"/>", regular: "<path fill=\"currentColor\" d=\"M17.75 3A3.25 3.25 0 0 1 21 6.25v11.5A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75V6.25A3.25 3.25 0 0 1 6.25 3zm1.75 5.5h-15v9.25c0 .966.784 1.75 1.75 1.75h11.5a1.75 1.75 0 0 0 1.75-1.75zm-11.75 6a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5m4.25 0a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5m-4.25-4a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5m4.25 0a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5m4.25 0a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5m1.5-6H6.25A1.75 1.75 0 0 0 4.5 6.25V7h15v-.75a1.75 1.75 0 0 0-1.75-1.75\"/>" },
  { id: "clock", body: "<path fill=\"currentColor\" d=\"M15.25 13.5h-4a.75.75 0 0 1-.75-.75v-6a.75.75 0 0 1 1.5 0V12h3.25a.75.75 0 0 1 0 1.5M12 2C6.478 2 2 6.478 2 12s4.478 10 10 10s10-4.478 10-10S17.522 2 12 2\"/>", regular: "<path fill=\"currentColor\" d=\"M3.5 12a8.5 8.5 0 1 1 17 0a8.5 8.5 0 0 1-17 0M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2m-.007 4.648a.75.75 0 0 0-1.493.102v6l.007.102a.75.75 0 0 0 .743.648h4l.102-.007A.75.75 0 0 0 15.25 12H12V6.75z\"/>" },
  { id: "person", body: "<path fill=\"currentColor\" d=\"M17.755 14a2.25 2.25 0 0 1 2.248 2.25v.918a2.75 2.75 0 0 1-.512 1.598c-1.546 2.164-4.07 3.235-7.49 3.235c-3.422 0-5.945-1.072-7.487-3.236a2.75 2.75 0 0 1-.51-1.596v-.92A2.25 2.25 0 0 1 6.253 14zM12 2.005a5 5 0 1 1 0 10a5 5 0 0 1 0-10\"/>", regular: "<path fill=\"currentColor\" d=\"M17.755 14a2.25 2.25 0 0 1 2.248 2.25v.575c0 .894-.32 1.759-.9 2.438c-1.57 1.833-3.957 2.738-7.103 2.738s-5.532-.905-7.098-2.74a3.75 3.75 0 0 1-.898-2.434v-.578A2.25 2.25 0 0 1 6.253 14zm0 1.5H6.252a.75.75 0 0 0-.75.75v.577c0 .535.192 1.053.54 1.46c1.253 1.469 3.22 2.214 5.957 2.214c2.739 0 4.706-.745 5.963-2.213a2.25 2.25 0 0 0 .54-1.463v-.576a.75.75 0 0 0-.748-.749M12 2.005a5 5 0 1 1 0 10a5 5 0 0 1 0-10m0 1.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7\"/>" },
  { id: "people", body: "<path fill=\"currentColor\" d=\"M8 12a4 4 0 1 0 0-8a4 4 0 0 0 0 8m9 0a3 3 0 1 0 0-6a3 3 0 0 0 0 6M4.25 14A2.25 2.25 0 0 0 2 16.25v.25S2 21 8 21s6-4.5 6-4.5v-.25A2.25 2.25 0 0 0 11.75 14zM17 19.5c-1.171 0-2.068-.181-2.755-.458a5.5 5.5 0 0 0 .736-2.207A4 4 0 0 0 15 16.55v-.3a3.24 3.24 0 0 0-.902-2.248L14.2 14h5.6a2.2 2.2 0 0 1 2.2 2.2s0 3.3-5 3.3\"/>", regular: "<path fill=\"currentColor\" d=\"M5.5 8a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0M8 4a4 4 0 1 0 0 8a4 4 0 0 0 0-8m7.5 5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0M17 6a3 3 0 1 0 0 6a3 3 0 0 0 0-6m-2.752 13.038c.703.285 1.604.462 2.753.462c2.282 0 3.586-.697 4.297-1.558c.345-.418.52-.84.61-1.163a2.7 2.7 0 0 0 .093-.573v-.027A2.18 2.18 0 0 0 19.822 14H14.18q-.042 0-.082.002c.394.41.68.925.816 1.498h4.908c.372 0 .674.299.679.669l-.003.032q-.006.058-.037.18a1.6 1.6 0 0 1-.32.605c-.35.426-1.172 1.014-3.14 1.014c-.98 0-1.676-.146-2.17-.345c-.108.4-.286.883-.583 1.383M4.25 14A2.25 2.25 0 0 0 2 16.25v.278a2 2 0 0 0 .014.208a4.5 4.5 0 0 0 .778 2.07C3.61 19.974 5.172 21 8 21s4.39-1.025 5.208-2.195a4.5 4.5 0 0 0 .778-2.07a3 3 0 0 0 .014-.207v-.278A2.25 2.25 0 0 0 11.75 14zm-.75 2.507v-.257a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 .75.75v.257l-.007.08a3 3 0 0 1-.514 1.358C11.486 18.65 10.422 19.5 8 19.5s-3.486-.85-3.98-1.555a3 3 0 0 1-.513-1.358z\"/>" },
  { id: "briefcase", body: "<path fill=\"currentColor\" d=\"M22 17.75A3.25 3.25 0 0 1 18.75 21H5.25A3.25 3.25 0 0 1 2 17.75v-5.04A4.73 4.73 0 0 0 5.25 14H10a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1h4.75c1.258 0 2.4-.49 3.25-1.29zM13.75 2A2.25 2.25 0 0 1 16 4.25V6h2.75q.084 0 .167.004a3.25 3.25 0 0 1-.167 6.496H14V12a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v.5H5.25a3.25 3.25 0 0 1 0-6.5H8V4.25A2.25 2.25 0 0 1 10.25 2zm-3.5 1.5a.75.75 0 0 0-.75.75V6h5V4.25a.75.75 0 0 0-.75-.75z\"/>", regular: "<path fill=\"currentColor\" d=\"M13.75 2A2.25 2.25 0 0 1 16 4.25V6h2.75A3.25 3.25 0 0 1 22 9.25v8.5A3.25 3.25 0 0 1 18.75 21H5.25A3.25 3.25 0 0 1 2 17.75v-8.5A3.25 3.25 0 0 1 5.25 6H8V4.25A2.25 2.25 0 0 1 10.25 2zm6.75 11.487a3.23 3.23 0 0 1-1.75.513H14a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1H5.25a3.23 3.23 0 0 1-1.75-.513v4.263c0 .966.784 1.75 1.75 1.75h13.5a1.75 1.75 0 0 0 1.75-1.75zM5.25 7.5A1.75 1.75 0 0 0 3.5 9.25v1.5c0 .966.784 1.75 1.75 1.75H10V12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v.5h4.75a1.75 1.75 0 0 0 1.75-1.75v-1.5a1.75 1.75 0 0 0-1.75-1.75zm5-4a.75.75 0 0 0-.75.75V6h5V4.25a.75.75 0 0 0-.75-.75z\"/>" },
  { id: "document-text", body: "<path fill=\"currentColor\" d=\"M12 8V2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10h-6a2 2 0 0 1-2-2m-3.75 3.5h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5m0 2.75h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5m0 2.75h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5m5.25-9V2.5l6 6H14a.5.5 0 0 1-.5-.5\"/>", regular: "<path fill=\"currentColor\" d=\"M8.75 11.5a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5zm0 2.75a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5zm0 2.75a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5zm4.835-14.414l5.829 5.828A2 2 0 0 1 20 9.828V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h6.172c.515 0 1.047.22 1.413.586M18 20.5a.5.5 0 0 0 .5-.5V10H14a2 2 0 0 1-2-2V3.5H6a.5.5 0 0 0-.5.5v16a.5.5 0 0 0 .5.5zm-.622-12L13.5 4.621V8a.5.5 0 0 0 .5.5z\"/>" },
  { id: "news", body: "<path fill=\"currentColor\" d=\"M16.75 4a2.25 2.25 0 0 1 2.245 2.096L19 6.25V17.5a.5.5 0 0 0 .992.09L20 17.5V7.014a2.25 2.25 0 0 1 1.994 2.072L22 9.25v7.5a3.25 3.25 0 0 1-3.066 3.245L18.75 20H5.25a3.25 3.25 0 0 1-3.245-3.066L2 16.75V6.25a2.25 2.25 0 0 1 2.096-2.245L4.25 4zm-7.502 7h-3.5a.75.75 0 0 0-.75.75v3.5c0 .414.336.75.75.75h3.5a.75.75 0 0 0 .75-.75v-3.5a.75.75 0 0 0-.75-.75m6.004 3.5h-2.498l-.102.007A.75.75 0 0 0 12.754 16h2.498l.102-.007a.75.75 0 0 0-.102-1.493m-6.754-2v2h-2v-2zM15.25 11l-2.498.005l-.102.006a.75.75 0 0 0 .104 1.494l2.499-.005l.101-.007A.75.75 0 0 0 15.251 11m.001-3.496H5.748l-.102.007a.75.75 0 0 0 .102 1.493h9.504l.102-.006a.75.75 0 0 0-.102-1.494\"/>", regular: "<path fill=\"currentColor\" d=\"M18.75 20H5.25a3.25 3.25 0 0 1-3.245-3.066L2 16.75V6.25a2.25 2.25 0 0 1 2.096-2.245L4.25 4h12.5a2.25 2.25 0 0 1 2.245 2.096L19 6.25V7h.75a2.25 2.25 0 0 1 2.245 2.096L22 9.25v7.5a3.25 3.25 0 0 1-3.066 3.245zH5.25zm-13.5-1.5h13.5a1.75 1.75 0 0 0 1.744-1.607l.006-.143v-7.5a.75.75 0 0 0-.648-.743L19.75 8.5H19v7.75a.75.75 0 0 1-.648.743L18.25 17a.75.75 0 0 1-.743-.648l-.007-.102v-10a.75.75 0 0 0-.648-.743L16.75 5.5H4.25a.75.75 0 0 0-.743.648L3.5 6.25v10.5a1.75 1.75 0 0 0 1.606 1.744zh13.5zm6.996-4h3.006a.75.75 0 0 1 .102 1.493l-.102.007h-3.006a.75.75 0 0 1-.102-1.493zh3.006zm-3.003-3.495a.75.75 0 0 1 .75.75v3.495a.75.75 0 0 1-.75.75H5.748a.75.75 0 0 1-.75-.75v-3.495a.75.75 0 0 1 .75-.75zm-.75 1.5H6.498V14.5h1.995zm3.753-1.5h3.006a.75.75 0 0 1 .102 1.493l-.102.007h-3.006a.75.75 0 0 1-.102-1.494zh3.006zM5.748 7.502h9.504a.75.75 0 0 1 .102 1.494l-.102.006H5.748a.75.75 0 0 1-.102-1.493zh9.504z\"/>" },
  { id: "camera", body: "<path fill=\"currentColor\" d=\"M13.925 2.504a2.25 2.25 0 0 1 1.94 1.11l.814 1.387h2.071A3.25 3.25 0 0 1 22 8.25v9.5A3.25 3.25 0 0 1 18.75 21H5.25A3.25 3.25 0 0 1 2 17.75v-9.5A3.25 3.25 0 0 1 5.25 5h2.08l.875-1.424a2.25 2.25 0 0 1 1.917-1.073zM12 8a4.5 4.5 0 1 0 0 9a4.5 4.5 0 0 0 0-9m0 1.5a3 3 0 1 1 0 6a3 3 0 0 1 0-6\"/>", regular: "<path fill=\"currentColor\" d=\"M13.925 2.504a2.25 2.25 0 0 1 1.94 1.11l.814 1.387h2.071A3.25 3.25 0 0 1 22 8.25v9.5A3.25 3.25 0 0 1 18.75 21H5.25A3.25 3.25 0 0 1 2 17.75v-9.5A3.25 3.25 0 0 1 5.25 5h2.08l.875-1.424a2.25 2.25 0 0 1 1.917-1.073zm0 1.5h-3.803a.75.75 0 0 0-.574.268l-.065.09l-1.093 1.78a.75.75 0 0 1-.639.358h-2.5A1.75 1.75 0 0 0 3.5 8.25v9.5c0 .966.784 1.75 1.75 1.75h13.5a1.75 1.75 0 0 0 1.75-1.75v-9.5a1.75 1.75 0 0 0-1.75-1.75h-2.5a.75.75 0 0 1-.647-.37l-1.032-1.757a.75.75 0 0 0-.646-.37M12 8a4.5 4.5 0 1 1 0 9a4.5 4.5 0 0 1 0-9m0 1.5a3 3 0 1 0 0 6a3 3 0 0 0 0-6\"/>" },
  { id: "map", body: "<path fill=\"currentColor\" d=\"M8.5 4.358v12.465l-4.32 3.038a.75.75 0 0 1-1.174-.509l-.007-.104V8.615a.75.75 0 0 1 .238-.548l.08-.065zm12.494.29l.007.104v10.633a.75.75 0 0 1-.238.548l-.08.065L15.5 19.64V7.174l4.32-3.035a.75.75 0 0 1 1.174.509M10 4.359l4 2.812v12.467l-4-2.814z\"/>", regular: "<path fill=\"currentColor\" d=\"m9.203 4l.047-.002l.046.001l.068.007l.016.004q.129.02.25.092l.053.034l5.07 3.565L19.82 4.14a.75.75 0 0 1 1.174.51l.007.104v10.632a.75.75 0 0 1-.238.548l-.08.066l-5.5 3.866a.74.74 0 0 1-.828.023L9.25 16.297l-5.07 3.565a.75.75 0 0 1-1.174-.51l-.007-.104V8.616a.75.75 0 0 1 .238-.548l.08-.066l5.5-3.866a.8.8 0 0 1 .2-.101l.123-.028zm10.298 2.197l-4 2.812v8.799l4-2.812zM8.5 6.193l-4 2.812v8.8l4-2.813zm1.502 0v8.8l4 2.811V9.005z\"/>" },
  { id: "airplane", body: "<path fill=\"currentColor\" d=\"M21.989 11.946a1.99 1.99 0 0 1-2.05 1.99l-4.738-.139l-3.454 7.143c-.277.574-.86.94-1.498.94a.926.926 0 0 1-.92-1.037l.863-7.193l-3.765-.11l-.49 1.341a1.29 1.29 0 0 1-1.211.847a.9.9 0 0 1-.901-.902V13.35l-.81-.169a1.261 1.261 0 0 1 0-2.469l.81-.168V9.066a.9.9 0 0 1 .788-.894l.113-.007a1.29 1.29 0 0 1 1.21.846l.492 1.34l3.751-.11l-.85-7.084l-.004-.055l-.002-.055c0-.511.415-.926.926-.926c.585 0 1.123.307 1.423.8l.075.14l3.403 7.035l4.79-.14a1.99 1.99 0 0 1 2.048 1.932z\"/>", regular: "<path fill=\"currentColor\" d=\"M9.47 9.643L8.768 3.77l-.002-.074c0-.889.72-1.61 1.61-1.61c.802 0 1.545.42 1.977 1.135l.087.161l2.945 6.09l3.957-.117a2.6 2.6 0 0 1 2.672 2.53l.001.066a2.6 2.6 0 0 1-2.62 2.597l-3.963-.116l-2.992 6.188a2.29 2.29 0 0 1-2.065 1.295c-.889 0-1.609-.72-1.609-1.631l.007-.118l.707-5.908l-2.132-.063l-.27.736a1.95 1.95 0 0 1-1.827 1.278c-.876 0-1.586-.71-1.586-1.587v-.76l-.154-.032a1.92 1.92 0 0 1 0-3.758l.155-.032v-.76c0-.803.597-1.475 1.434-1.579l.151-.008c.745 0 1.423.426 1.765 1.127l.063.15l.27.736zm.906-6.057c-.06 0-.109.049-.11.087l.887 7.422l-4.84.141l-.628-1.715l-.032-.079c-.075-.152-.23-.25-.354-.251l-.058.002a.086.086 0 0 0-.075.085l.001 1.98l-1.35.282a.419.419 0 0 0 0 .821l1.35.281v1.98c0 .047.038.086.085.086a.45.45 0 0 0 .419-.293l.64-1.751l4.854.141l-.897 7.471v.03c0 .06.048.108.108.108a.79.79 0 0 0 .714-.448l3.415-7.063l4.914.144c.606 0 1.097-.491 1.097-1.086v-.043a1.097 1.097 0 0 0-1.13-1.064l-4.928.144l-3.351-6.932l-.053-.099a.79.79 0 0 0-.678-.381\"/>" },
  { id: "food", body: "<path fill=\"currentColor\" d=\"M3.743 2.816A.88.88 0 0 1 5.5 2.88v4.494a.625.625 0 1 0 1.25 0V2.75a.75.75 0 0 1 1.5 0v4.624a.625.625 0 1 0 1.25 0V2.88a.88.88 0 0 1 1.757-.064C11.3 3.428 11.5 6.37 11.5 8c0 1.35-.67 2.544-1.692 3.267c-.216.153-.268.315-.263.397c.123 1.878.455 7.018.455 7.833a2.5 2.5 0 0 1-5 0c0-.816.332-5.955.455-7.833c.005-.082-.047-.244-.263-.397A4 4 0 0 1 3.5 8c0-1.63.2-4.572.243-5.184M13 7.75A5.75 5.75 0 0 1 18.75 2a.75.75 0 0 1 .75.75v8.5c0 .318.106 1.895.225 3.642l.005.083c.13 1.908.27 3.983.27 4.522a2.5 2.5 0 0 1-5 0c0-.514.128-2.611.252-4.534c.062-.971.125-1.912.172-2.61l.023-.353h-.697A1.75 1.75 0 0 1 13 10.25z\"/>", regular: "<path fill=\"currentColor\" d=\"M3.193 3.726A1.89 1.89 0 0 1 5.085 2c.45 0 .866.156 1.193.417A2 2 0 0 1 7.5 2c.46 0 .884.155 1.222.417A1.9 1.9 0 0 1 9.915 2c.976 0 1.807.737 1.892 1.726c.084.975.193 2.483.193 3.774a4.5 4.5 0 0 1-2.176 3.854c-.222.134-.28.3-.274.386c.127 1.934.45 6.952.45 7.757a2.5 2.5 0 0 1-5 0c0-.805.323-5.823.45-7.757c.005-.087-.052-.252-.274-.386A4.5 4.5 0 0 1 3 7.5c0-1.29.109-2.799.193-3.774M9.5 7.25a.75.75 0 0 1-1.5 0V4a.5.5 0 0 0-1 0v3.25a.75.75 0 0 1-1.5 0V3.915a.415.415 0 0 0-.415-.415a.393.393 0 0 0-.398.355C4.604 4.82 4.5 6.275 4.5 7.5c0 1.09.58 2.044 1.452 2.57c.545.33 1.047.96.995 1.768c-.13 1.98-.447 6.918-.447 7.66a1 1 0 1 0 2 0c0-.742-.317-5.68-.447-7.66c-.052-.808.45-1.438.995-1.768A3 3 0 0 0 10.5 7.5c0-1.224-.104-2.68-.187-3.645a.393.393 0 0 0-.398-.355a.415.415 0 0 0-.415.415zm3.5.5A5.75 5.75 0 0 1 18.75 2a.75.75 0 0 1 .75.75v8.5c0 .318.106 1.895.225 3.642l.005.083c.13 1.908.27 3.983.27 4.522a2.5 2.5 0 0 1-5 0c0-.514.128-2.611.252-4.534c.062-.971.125-1.912.172-2.61l.023-.353h-.697A1.75 1.75 0 0 1 13 10.25zm3.998 3.552l-.021.314a798 798 0 0 0-.229 3.444c-.126 1.96-.248 3.986-.248 4.437a1 1 0 1 0 2 0c0-.48-.138-2.526-.272-4.504l-.007-.104C18.108 13.23 18 11.627 18 11.25V3.566a4.25 4.25 0 0 0-3.5 4.184v2.5c0 .138.112.25.25.25h1.5a.75.75 0 0 1 .748.802\"/>" },
  { id: "beaker", body: "<path fill=\"currentColor\" d=\"M9 4.5v6.238c0 .375-.094.744-.273 1.074L7.54 14h8.922l-1.188-2.188A2.25 2.25 0 0 1 15 10.738V4.5h1A.75.75 0 0 0 16 3H8a.75.75 0 0 0 0 1.5zm8.275 11H6.725l-1.582 2.915A1.75 1.75 0 0 0 6.68 21h10.638a1.75 1.75 0 0 0 1.538-2.585z\"/>", regular: "<path fill=\"currentColor\" d=\"M8 4.5h1v6.238c0 .375-.094.744-.273 1.074l-3.584 6.603A1.75 1.75 0 0 0 6.68 21h10.638a1.75 1.75 0 0 0 1.538-2.585l-3.584-6.603A2.25 2.25 0 0 1 15 10.738V4.5h1A.75.75 0 0 0 16 3H8a.75.75 0 0 0 0 1.5m2.5 6.238V4.5h3v6.238c0 .625.156 1.24.454 1.79l.8 1.472H9.246l.8-1.473a3.75 3.75 0 0 0 .454-1.789M8.432 15.5h7.136l1.971 3.63a.25.25 0 0 1-.22.37H6.681a.25.25 0 0 1-.22-.37z\"/>" },
  { id: "library", body: "<path fill=\"currentColor\" d=\"M5.5 3A1.5 1.5 0 0 1 7 4.5v15A1.5 1.5 0 0 1 5.5 21h-2A1.5 1.5 0 0 1 2 19.5v-15A1.5 1.5 0 0 1 3.5 3zm6 0A1.5 1.5 0 0 1 13 4.5v15a1.5 1.5 0 0 1-1.5 1.5h-2A1.5 1.5 0 0 1 8 19.5v-15A1.5 1.5 0 0 1 9.5 3zm7.281 3.124l3.214 12.519a1.5 1.5 0 0 1-1.08 1.826l-1.876.48a1.5 1.5 0 0 1-1.826-1.08L13.999 7.354a1.5 1.5 0 0 1 1.08-1.826l1.876-.483a1.5 1.5 0 0 1 1.826 1.08\"/>", regular: "<path fill=\"currentColor\" d=\"M4 3h1c1.054 0 1.918.816 1.995 1.85L7 5v14a2 2 0 0 1-1.85 1.994L5 21H4a2 2 0 0 1-1.995-1.85L2 19V5c0-1.054.816-1.918 1.85-1.995zh1zm6 0h1c1.054 0 1.918.816 1.995 1.85L13 5v14a2 2 0 0 1-1.85 1.994L11 21h-1a2 2 0 0 1-1.995-1.85L8 19V5c0-1.054.816-1.918 1.85-1.995zh1zm6.974 2c.84 0 1.608.531 1.89 1.346l.047.157l3.015 11.746a2 2 0 0 1-1.296 2.391l-.144.043l-.969.248a2 2 0 0 1-2.387-1.284l-.047-.155l-3.016-11.745a2 2 0 0 1 1.298-2.392l.143-.043l.968-.248q.25-.064.498-.064M5 4.5H4a.5.5 0 0 0-.492.41L3.5 5v14c0 .244.177.45.41.492L4 19.5h1c.245 0 .45-.178.492-.41L5.5 19V5a.5.5 0 0 0-.41-.492zm6 0h-1a.5.5 0 0 0-.492.41L9.5 5v14c0 .244.177.45.41.492l.09.008h1c.245 0 .45-.178.492-.41L11.5 19V5a.5.5 0 0 0-.41-.492zm5.975 2l-.063.004l-.063.013l-.968.247a.5.5 0 0 0-.376.51l.015.1l3.016 11.745a.5.5 0 0 0 .483.375l.063-.003l.062-.012l.97-.25a.5.5 0 0 0 .374-.519l-.015-.088l-3.015-11.747a.5.5 0 0 0-.483-.375\"/>" },
  { id: "translate", body: "<path fill=\"currentColor\" d=\"M3.08 5.62a6.34 6.34 0 0 1 4.456-.33h.003q.957.284 1.547.881c.394.398.624.852.755 1.29c.202.678.18 1.422.168 1.838q-.005.12-.005.201v5.503a1 1 0 0 1-1.96.282l-.08.039c-.964.462-2.397.92-3.877.507c-1.632-.457-2.453-1.81-2.572-3.136c-.114-1.28.41-2.736 1.682-3.448c1.529-.855 3.116-.839 4.262-.64a8 8 0 0 1 .555.116a2.5 2.5 0 0 0-.09-.689a1.05 1.05 0 0 0-.258-.454c-.121-.122-.325-.263-.69-.37a4.34 4.34 0 0 0-3.048.222a1 1 0 1 1-.848-1.811m4.037 4.957c-.884-.153-1.956-.137-2.943.416c-.424.237-.729.83-.667 1.523c.058.647.421 1.193 1.119 1.389c.79.22 1.681-.005 2.473-.385c.367-.176.68-.37.905-.523V10.8a6 6 0 0 0-.887-.222m9.186-3.53a1 1 0 0 1 .65 1.256a7 7 0 0 0-.155.584a18 18 0 0 0 1.964-.358a1 1 0 1 1 .476 1.942a20 20 0 0 1-2.842.473q-.096.508-.166.964a6 6 0 0 1 1.796-.138A1 1 0 0 1 20 12q0 .164-.006.326a4.75 4.75 0 0 1 2.103 2.164a4.44 4.44 0 0 1 .17 3.465c-.435 1.182-1.38 2.22-2.82 2.94a1 1 0 1 1-.895-1.79c1.06-.53 1.606-1.209 1.84-1.842a2.44 2.44 0 0 0-.1-1.91a2.7 2.7 0 0 0-.657-.864a8.4 8.4 0 0 1-2.735 4.06l.041.114a1 1 0 0 1-1.746.931a5.3 5.3 0 0 1-.988.32c-.795.17-1.824.148-2.5-.589c-.939-1.026-.863-2.6-.239-3.882c.495-1.017 1.374-1.984 2.638-2.7c.054-.523.133-1.086.239-1.698a20 20 0 0 1-1.417-.047a1 1 0 0 1 .143-1.995c.531.037 1.087.05 1.652.037c.088-.445.2-.954.324-1.343a1 1 0 0 1 1.256-.65m-2.278 8.234c-.344.34-.593.697-.758 1.037c-.424.87-.257 1.451-.095 1.645l.003.001c.027.012.186.085.615-.006c.203-.043.431-.118.674-.227a9.6 9.6 0 0 1-.341-1.478a11 11 0 0 1-.098-.973m2.172 1.204a6.36 6.36 0 0 0 1.568-2.73l-1.651.265l-.1.036a10.4 10.4 0 0 0 .087 1.905q.042.28.096.524\"/>", regular: "<path fill=\"currentColor\" d=\"M3.385 5.997a6.07 6.07 0 0 1 4.576-.467h.001c1.232.362 1.906 1.11 2.237 1.94c.3.754.3 1.536.3 1.99v5.79a.75.75 0 0 1-1.5 0v-.3a9 9 0 0 1-.396.222c-.952.505-2.327 1.018-3.757.761c-1.584-.285-2.576-1.595-2.8-2.952c-.229-1.38.316-2.937 1.902-3.697c1.44-.69 2.99-.628 4.122-.427c.342.061.653.136.923.211c-.013-.351-.055-.71-.188-1.042c-.166-.417-.491-.83-1.264-1.056a4.57 4.57 0 0 0-3.431.34a.75.75 0 0 1-.725-1.313m4.423 4.337c-.986-.175-2.175-.194-3.212.303c-.891.427-1.208 1.27-1.07 2.1c.141.854.741 1.568 1.586 1.72c.938.169 1.947-.164 2.788-.61a8 8 0 0 0 1.098-.702v-2.507a8.4 8.4 0 0 0-1.19-.304m8.677-3.296a.75.75 0 0 1 .476.948c-.09.27-.185.61-.271.94c.948-.088 1.87-.226 2.638-.406a.75.75 0 1 1 .343 1.46c-.973.229-2.152.392-3.336.481q-.164.818-.257 1.5a6 6 0 0 1 1.672-.238a.75.75 0 0 1 1.5.027l-.003.222a4.04 4.04 0 0 1 2.504 2.423a3.98 3.98 0 0 1-.154 3.128c-.496 1.025-1.44 1.894-2.827 2.427a.75.75 0 0 1-.538-1.4c1.083-.416 1.708-1.046 2.015-1.68a2.48 2.48 0 0 0 .097-1.954a2.55 2.55 0 0 0-1.278-1.399a7.63 7.63 0 0 1-2.285 4.047q.086.197.17.424a.75.75 0 1 1-1.423.478a4.7 4.7 0 0 1-1.24.474c-.72.155-1.557.099-2.13-.486c-.865-.886-.818-2.277-.204-3.442c.477-.908 1.323-1.77 2.538-2.413c.06-.614.157-1.298.3-2.064c-.654.014-1.28.002-1.844-.037a.75.75 0 0 1 .102-1.496c.622.042 1.331.05 2.067.024c.116-.472.272-1.067.42-1.512a.75.75 0 0 1 .948-.476m-2.058 7.372c-.546.413-.92.87-1.146 1.3c-.444.843-.289 1.45-.05 1.695c.055.057.258.172.742.068c.345-.074.672-.202.977-.373a8 8 0 0 1-.386-1.373a9 9 0 0 1-.137-1.317m1.755 1.66a6.65 6.65 0 0 0 1.413-2.848a4.7 4.7 0 0 0-1.328.25a8 8 0 0 0-.34.12a8.6 8.6 0 0 0 .113 1.867q.062.338.142.611\"/>" },
  { id: "settings", body: "<path fill=\"currentColor\" d=\"M12.012 2.25c.734.008 1.465.093 2.182.253a.75.75 0 0 1 .582.649l.17 1.527a1.384 1.384 0 0 0 1.927 1.116l1.4-.615a.75.75 0 0 1 .85.174a9.8 9.8 0 0 1 2.205 3.792a.75.75 0 0 1-.272.825l-1.241.916a1.38 1.38 0 0 0 0 2.226l1.243.915a.75.75 0 0 1 .272.826a9.8 9.8 0 0 1-2.204 3.792a.75.75 0 0 1-.849.175l-1.406-.617a1.38 1.38 0 0 0-1.926 1.114l-.17 1.526a.75.75 0 0 1-.571.647a9.5 9.5 0 0 1-4.406 0a.75.75 0 0 1-.572-.647l-.169-1.524a1.382 1.382 0 0 0-1.925-1.11l-1.406.616a.75.75 0 0 1-.85-.175a9.8 9.8 0 0 1-2.203-3.796a.75.75 0 0 1 .272-.826l1.243-.916a1.38 1.38 0 0 0 0-2.226l-1.243-.914a.75.75 0 0 1-.272-.826a9.8 9.8 0 0 1 2.205-3.792a.75.75 0 0 1 .85-.174l1.4.615a1.387 1.387 0 0 0 1.93-1.118l.17-1.526a.75.75 0 0 1 .583-.65q1.074-.238 2.201-.252M12 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6\"/>", regular: "<path fill=\"currentColor\" d=\"M12.012 2.25c.734.008 1.465.093 2.182.253a.75.75 0 0 1 .582.649l.17 1.527a1.384 1.384 0 0 0 1.927 1.116l1.4-.615a.75.75 0 0 1 .85.174a9.8 9.8 0 0 1 2.205 3.792a.75.75 0 0 1-.272.825l-1.241.916a1.38 1.38 0 0 0 0 2.226l1.243.915a.75.75 0 0 1 .272.826a9.8 9.8 0 0 1-2.204 3.792a.75.75 0 0 1-.849.175l-1.406-.617a1.38 1.38 0 0 0-1.926 1.114l-.17 1.526a.75.75 0 0 1-.571.647a9.5 9.5 0 0 1-4.406 0a.75.75 0 0 1-.572-.647l-.169-1.524a1.382 1.382 0 0 0-1.925-1.11l-1.406.616a.75.75 0 0 1-.85-.175a9.8 9.8 0 0 1-2.203-3.796a.75.75 0 0 1 .272-.826l1.243-.916a1.38 1.38 0 0 0 0-2.226l-1.243-.914a.75.75 0 0 1-.272-.826a9.8 9.8 0 0 1 2.205-3.792a.75.75 0 0 1 .85-.174l1.4.615a1.387 1.387 0 0 0 1.93-1.118l.17-1.526a.75.75 0 0 1 .583-.65q1.074-.238 2.201-.252m0 1.5a9 9 0 0 0-1.354.117l-.11.977A2.886 2.886 0 0 1 6.526 7.17l-.899-.394A8.3 8.3 0 0 0 4.28 9.092l.797.587a2.88 2.88 0 0 1 .001 4.643l-.799.588c.32.842.776 1.626 1.348 2.322l.905-.397a2.882 2.882 0 0 1 4.017 2.318l.109.984c.89.15 1.799.15 2.688 0l.11-.984a2.88 2.88 0 0 1 4.018-2.322l.904.396a8.3 8.3 0 0 0 1.348-2.318l-.798-.588a2.88 2.88 0 0 1-.001-4.643l.797-.587a8.3 8.3 0 0 0-1.348-2.317l-.897.393a2.884 2.884 0 0 1-4.023-2.324l-.109-.976a9 9 0 0 0-1.334-.117M12 8.25a3.75 3.75 0 1 1 0 7.5a3.75 3.75 0 0 1 0-7.5m0 1.5a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5\"/>" },
  { id: "link", body: "<path fill=\"currentColor\" d=\"M9 7a1 1 0 0 1 .117 1.993L9 9H7a3 3 0 0 0-.176 5.995L7 15h2a1 1 0 0 1 .117 1.993L9 17H7a5 5 0 0 1-.217-9.995L7 7zm8 0a5 5 0 0 1 .217 9.995L17 17h-2a1 1 0 0 1-.117-1.993L15 15h2a3 3 0 0 0 .176-5.995L17 9h-2a1 1 0 0 1-.117-1.993L15 7zM7 11h10a1 1 0 0 1 .117 1.993L17 13H7a1 1 0 0 1-.117-1.993zh10z\"/>", regular: "<path fill=\"currentColor\" d=\"M9.25 7a.75.75 0 0 1 .11 1.492l-.11.008H7a3.5 3.5 0 0 0-.206 6.994L7 15.5h2.25a.75.75 0 0 1 .11 1.492L9.25 17H7a5 5 0 0 1-.25-9.994L7 7zM17 7a5 5 0 0 1 .25 9.994L17 17h-2.25a.75.75 0 0 1-.11-1.492l.11-.008H17a3.5 3.5 0 0 0 .206-6.994L17 8.5h-2.25a.75.75 0 0 1-.11-1.492L14.75 7zM7 11.25h10a.75.75 0 0 1 .102 1.493L17 12.75H7a.75.75 0 0 1-.102-1.493zh10z\"/>" }
];
const QUICKLINK_PRESET_ICON_MAP = Object.fromEntries(QUICKLINK_PRESET_ICONS.map(i => [i.id, i]));
// 取某个图标在指定变体下的 SVG：style 为 'regular'（描边）或默认 'filled'（实心）
function quicklinkPresetBody(id, style) {
  const icon = QUICKLINK_PRESET_ICON_MAP[id];
  if (!icon) return '';
  return (style === 'regular' ? icon.regular : icon.body) || '';
}

// ===== 站点图标覆盖 =====
// 有些站点自动解析出的 favicon 在深色主题下不可用（GitHub 的图标是纯黑，
// 深色主题下还是黑的）。这里为这些域名备一份 fill="currentColor" 的官方标记，
// 颜色跟随 .quicklink-icon 的文字色，于是在深色主题下自动变成浅色。
const SITE_ICON_OVERRIDES = {
  "github.com": {
    viewBox: "0 0 512 512",
    body: "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M256 6.3C114.6 6.3 0 120.9 0 262.3c0 113.3 73.3 209 175 242.9c12.8 2.2 17.6-5.4 17.6-12.2c0-6.1-.3-26.2-.3-47.7c-64.3 11.8-81-15.7-86.1-30.1c-2.9-7.4-15.4-30.1-26.2-36.2c-9-4.8-21.8-16.6-.3-17c20.2-.3 34.6 18.6 39.4 26.2c23 38.7 59.8 27.8 74.6 21.1c2.2-16.6 9-27.8 16.3-34.2c-57-6.4-116.5-28.5-116.5-126.4c0-27.8 9.9-50.9 26.2-68.8c-2.6-6.4-11.5-32.6 2.6-67.8c0 0 21.4-6.7 70.4 26.2c20.5-5.8 42.2-8.6 64-8.6s43.5 2.9 64 8.6c49-33.3 70.4-26.2 70.4-26.2c14.1 35.2 5.1 61.4 2.6 67.8c16.3 17.9 26.2 40.6 26.2 68.8c0 98.2-59.8 120-116.8 126.4c9.3 8 17.3 23.4 17.3 47.4c0 34.2-.3 61.8-.3 70.4c0 6.7 4.8 14.7 17.6 12.2C438.7 471.3 512 375.3 512 262.3c0-141.4-114.6-256-256-256\"/>"
  }
};

// 取某个 URL 的站点图标覆盖项；忽略 www. 前缀与大小写，子域不匹配
function getSiteIconOverride(urlStr) {
  const host = String(getDomain(urlStr) || "").replace(/^www\./i, "").toLowerCase();
  return host ? (SITE_ICON_OVERRIDES[host] || null) : null;
}

// 对用户输入进行 HTML 转义，防止 XSS
function sanitizeInput(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/`/g, '&#96;');
}

// 反转 HTML 转义，用于把转义过的文本还原显示（&amp; 放最后，避免二次解码）
function decodeInput(str) {
  return String(str)
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#96;/g, '`')
    .replace(/&amp;/g, '&');
}

// ===== 重写下拉菜单(Custom Select) =====


  // 清除下拉面板的内联样式（transform/visibility），
  // 这些样式由 activateDropdown() 临时设置用于动画起始状态
  function clearDropdownInlineStyles(dd) {
    dd.style.transform = '';
    dd.style.visibility = '';
  }

  function initCustomSelects() {
    const displays = document.querySelectorAll('.custom-select-display');
    displays.forEach(display => {
      const selectId = display.getAttribute('data-for');
      const nativeSelect = document.getElementById(selectId);
      if (!nativeSelect) return;

      const textEl = display.querySelector('.custom-select-text');
      let dropdown = null;

      // 关闭所有其他已打开的下拉（除了 exceptDisplay 对应的那个）
      function closeAll(exceptDisplay) {
        document.querySelectorAll('.custom-select-dropdown.active').forEach(dd => {
          if (dd._display !== exceptDisplay) {
            dd.classList.remove('active');
            clearDropdownInlineStyles(dd);
            dd._display.classList.remove('active');
          }
        });
      }

      // 将原生 select 的选中项文本同步到自定义显示组件
      function updateDisplayText() {
        const selectedOption = nativeSelect.options[nativeSelect.selectedIndex];
        if (selectedOption) {
          textEl.textContent = selectedOption.textContent.trim();
        }
      }

      // 根据可用空间计算下拉面板的位置和展开方向
      // 返回值：dropdown._openingUp = true 表示向上展开
      function positionDropdown() {
        if (!dropdown) return;
        const rect = display.getBoundingClientRect();
        dropdown.style.width = rect.width + 'px';

        const dropdownHeight = dropdown.offsetHeight;
        const spaceBelow = window.innerHeight - rect.bottom - 4;
        const spaceAbove = rect.top - 4;

        let openingUp = false;

        // 优先在下方展开（空间充足时）
        if (spaceBelow >= dropdownHeight) {
          dropdown.style.top = rect.bottom + 4 + 'px';
          dropdown.style.left = rect.left + 'px';
        } else if (spaceAbove > spaceBelow && spaceAbove > 0) {
          // 上方空间比下方大，且上方有空间，则向上展开
          dropdown.style.top = Math.max(4, rect.top - dropdownHeight - 4) + 'px';
          dropdown.style.left = rect.left + 'px';
          openingUp = true;
        } else {
          // 空间都不足时，选择可见区域更大的方向，并夹紧到视口内
          const belowTop = rect.bottom + 4;
          const belowClamped = Math.min(belowTop, window.innerHeight - dropdownHeight - 4);
          const aboveTop = rect.top - dropdownHeight - 4;
          const aboveClamped = Math.max(4, aboveTop);

          const belowVisible = window.innerHeight - belowClamped - 4;
          const aboveVisible = aboveClamped + dropdownHeight;

          if (belowVisible >= aboveVisible) {
            dropdown.style.top = belowClamped + 'px';
          } else {
            dropdown.style.top = aboveClamped + 'px';
            openingUp = true;
          }
          dropdown.style.left = rect.left + 'px';
        }

        dropdown._openingUp = openingUp;
      }

      // 激活下拉面板
      function activateDropdown() {
        const openingUp = dropdown._openingUp;
        dropdown.style.transform = openingUp ? 'translateY(4px)' : 'translateY(-4px)';
        dropdown.style.visibility = 'visible';

        // 强制重排，让上述 transform 生效，确保 transition 起点正确
        void dropdown.offsetHeight;

        display.classList.add('active');
        dropdown.classList.add('active');
        dropdown.style.transform = '';
      }

      // 构建下拉面板 DOM —— 从原生 select 的 options 生成自定义选项
      function buildDropdown() {
        if (dropdown) dropdown.remove();
        dropdown = document.createElement('div');
        dropdown.className = 'custom-select-dropdown';
        dropdown._display = display;
        dropdown.setAttribute('data-for-select', selectId);

        Array.from(nativeSelect.options).forEach((opt, index) => {
          const optionEl = document.createElement('div');
          optionEl.className = 'custom-select-option';
          optionEl.textContent = opt.textContent.trim();
          optionEl.setAttribute('data-value', opt.value);
          if (index === nativeSelect.selectedIndex) {
            optionEl.classList.add('selected');
          }
          dropdown.appendChild(optionEl);
          // 原生 option 被禁用时：只展示、不选中，但依然要吃掉这次点击，
          // 否则事件会冒泡到 document，被当成"点击面板外部"而把设置面板收起来
          if (opt.disabled) {
            optionEl.classList.add('disabled');
            optionEl.addEventListener('click', (e) => e.stopPropagation());
            return;
          }
          optionEl.addEventListener('click', (e) => {
            e.stopPropagation();
            nativeSelect.value = opt.value;
            nativeSelect.dispatchEvent(new Event('change', { bubbles: true }));
            closeAll(null);
            updateDisplayText();
          });
        });

        // 浮层内部的点击一律不外传：避免点到禁用项或空白时被当成外部点击
        dropdown.addEventListener('click', (e) => e.stopPropagation());

        // 挂到 body 上，脱离父容器 overflow 裁剪
        document.body.appendChild(dropdown);
        positionDropdown();
      }

      // 点击触发器：切换下拉的展开/收起
      display.addEventListener('click', (e) => {
        e.stopPropagation();
        if (display.classList.contains('active')) {
          closeAll(null);
        } else {
          closeAll(display);
          if (!dropdown || !dropdown.isConnected) {
            buildDropdown();
          } else {
            positionDropdown();
            dropdown.querySelectorAll('.custom-select-option').forEach((optEl, i) => {
              optEl.classList.toggle('selected', i === nativeSelect.selectedIndex);
            });
          }
          activateDropdown();
        }
      });

      // 原生 select 变化时同步 UI
      nativeSelect.addEventListener('change', () => {
        updateDisplayText();
        if (dropdown) {
          dropdown.querySelectorAll('.custom-select-option').forEach((optEl, i) => {
            optEl.classList.toggle('selected', i === nativeSelect.selectedIndex);
          });
        }
      });

      updateDisplayText();
    });

    // 点击页面其他位置时关闭所有下拉
    document.addEventListener('click', (e) => {
      const isClickOnDropdown = e.target.closest('.custom-select-dropdown');
      const isClickOnDisplay = e.target.closest('.custom-select-display');
      if (!isClickOnDropdown && !isClickOnDisplay) {
        document.querySelectorAll('.custom-select-dropdown.active').forEach(dd => {
          dd.classList.remove('active');
          clearDropdownInlineStyles(dd);
          dd._display.classList.remove('active');
        });
      }
      // 同步收掉关于页「更新」拆分按钮弹出的菜单
      window.dispatchEvent(new Event('liteStart:hideFloatingLayers'));
    });

    // ESC 键关闭所有下拉
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        document.querySelectorAll('.custom-select-dropdown.active').forEach(dd => {
          dd.classList.remove('active');
          clearDropdownInlineStyles(dd);
          dd._display.classList.remove('active');
        });
      }
    });

    // 滚动/窗口大小变化时重新定位下拉面板
    // 如果触发器已不可见则直接关闭
    function repositionOrClose() {
      const activeDropdowns = document.querySelectorAll('.custom-select-dropdown.active');
      if (!activeDropdowns.length) return;
      activeDropdowns.forEach(dd => {
        const display = dd._display;
        if (!display || !document.body.contains(display)) {
          dd.classList.remove('active');
          clearDropdownInlineStyles(dd);
          if (display) display.classList.remove('active');
          return;
        }
        const rect = display.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > window.innerHeight || rect.right < 0 || rect.left > window.innerWidth) {
          dd.classList.remove('active');
          clearDropdownInlineStyles(dd);
          display.classList.remove('active');
          return;
        }
        dd.style.width = rect.width + 'px';
        const dropdownHeight = dd.offsetHeight;
        const spaceBelow = window.innerHeight - rect.bottom - 4;
        const spaceAbove = rect.top - 4;

        if (spaceBelow >= dropdownHeight) {
          dd.style.top = rect.bottom + 4 + 'px';
          dd.style.left = rect.left + 'px';
        } else if (spaceAbove > spaceBelow && spaceAbove > 0) {
          dd.style.top = Math.max(4, rect.top - dropdownHeight - 4) + 'px';
          dd.style.left = rect.left + 'px';
        } else {
          const belowTop = rect.bottom + 4;
          const belowClamped = Math.min(belowTop, window.innerHeight - dropdownHeight - 4);
          const aboveTop = rect.top - dropdownHeight - 4;
          const aboveClamped = Math.max(4, aboveTop);
          const belowVisible = window.innerHeight - belowClamped - 4;
          const aboveVisible = aboveClamped + dropdownHeight;
          if (belowVisible >= aboveVisible) {
            dd.style.top = belowClamped + 'px';
          } else {
            dd.style.top = aboveClamped + 'px';
          }
          dd.style.left = rect.left + 'px';
        }
    });
  }

  const settingsPanel = document.getElementById('popover-settings');
  if (settingsPanel) {
    settingsPanel.addEventListener('scroll', repositionOrClose);
  }
  window.addEventListener('resize', repositionOrClose);
  window.addEventListener('scroll', repositionOrClose, true);
}

// 重新同步自定义下拉菜单的显示文本与选项（语言切换后调用）
function refreshCustomSelects() {
  document.querySelectorAll('.custom-select-display').forEach(display => {
    const selectId = display.getAttribute('data-for');
    const nativeSelect = document.getElementById(selectId);
    if (!nativeSelect) return;
    const textEl = display.querySelector('.custom-select-text');
    const selectedOption = nativeSelect.options[nativeSelect.selectedIndex];
    if (selectedOption) {
      textEl.textContent = selectedOption.textContent.trim();
    }
    // 刷新"所有已创建"的浮层，而不只是当前打开的那个：
    // 浮层是懒创建后缓存复用的，切语言时它多半是关着的，只改 active 的那个
    // 会让下次打开时仍是旧语言的选项文本（表现为"必须刷新页面"）。
    document.querySelectorAll('.custom-select-dropdown[data-for-select="' + selectId + '"]')
      .forEach(dropdown => {
        dropdown.querySelectorAll('.custom-select-option').forEach((optEl, i) => {
          const src = nativeSelect.options[i];
          if (src) optEl.textContent = src.textContent.trim();
          optEl.classList.toggle('selected', i === nativeSelect.selectedIndex);
        });
      });
  });
}

//  检查更新实现
// 语义化版本比较：a>b 返回 1，a<b 返回 -1，相等返回 0
// 不能用字符串比，"1.10.0" 在字符串里小于 "1.9.0"
function compareVersions(a, b) {
  const pa = String(a).replace(/^v/i, '').split('.').map(n => parseInt(n, 10) || 0);
  const pb = String(b).replace(/^v/i, '').split('.').map(n => parseInt(n, 10) || 0);
  const len = Math.max(pa.length, pb.length);
  for (let i = 0; i < len; i++) {
    const x = pa[i] || 0, y = pb[i] || 0;
    if (x > y) return 1;
    if (x < y) return -1;
  }
  return 0;
}

// ISO 日期 → yymmdd，如 "2026-10-03T..." → "261003"
function formatReleaseDateCode(isoStr) {
  if (!isoStr) return '';
  const d = new Date(isoStr);
  if (isNaN(d.getTime())) return '';
  const yy = String(d.getFullYear()).slice(-2);
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  return yy + mm + dd;
}

// 拉取最新 release；若仓库只有 tag 没建 release，回退到 /tags
async function fetchLatestRelease() {
  const headers = { 'Accept': 'application/vnd.github+json' };

  let res = await fetch(`https://api.github.com/repos/${GITHUB_REPO}/releases/latest`, { headers });
  if (res.ok) {
    const data = await res.json();
    return {
      tag: data.tag_name,
      url: data.html_url,
      publishedAt: data.published_at
    };
  }

  // 404：说明没有 stable release（全发成了 prerelease 或纯 tag）
  if (res.status === 404) {
    res = await fetch(`https://api.github.com/repos/${GITHUB_REPO}/tags`, { headers });
    if (res.ok) {
      const list = await res.json();
      if (Array.isArray(list) && list.length) {
        // /tags 接口不返回发布日期，此分支下 (261003) 会省略
        return {
          tag: list[0].name,
          url: `https://github.com/${GITHUB_REPO}/releases`,
          publishedAt: null
        };
      }
    }
  }

  throw new Error('HTTP ' + res.status);
}

// 检查更新--12小时缓存
// 缓存只存远端原始信息（tag / url / publishedAt），hasUpdate 每次按当前
// APP_VERSION 现算：若把算好的结果整包缓存，改版本号或升级后 12 小时内
// 拿到的仍是旧结论（例如从 1.8.9 改回 1.8.6 也照样显示“无更新”）。
async function checkForUpdate({ force = false } = {}) {
  const CACHE_KEY = 'ntp_update_check';
  const INTERVAL = 12 * 60 * 60 * 1000;

  let remote = null;
  if (!force) {
    const cached = Storage.get(CACHE_KEY, null);
    if (cached && Date.now() - cached.checkedAt < INTERVAL) {
      remote = cached.remote
        // 兼容旧格式：早期缓存把整个结果放在 result 里
        || (cached.result && cached.result.tag
          ? { tag: cached.result.tag, url: cached.result.url, publishedAt: null }
          : null);
    }
  }

  if (!remote) {
    try {
      remote = await fetchLatestRelease();
    } catch (e) {
      console.warn('检查更新失败:', e);
      return null;   // 静默失败：不打扰用户，控制台留痕即可
    }
    Storage.set(CACHE_KEY, { checkedAt: Date.now(), remote });
  }

  const latest = String(remote.tag || '').replace(/^v/i, '');
  return {
    tag: remote.tag,
    latest,                                        // "版本号"
    dateCode: formatReleaseDateCode(remote.publishedAt),  // "发布号" 或 ""
    hasUpdate: compareVersions(latest, APP_VERSION) > 0,
    url: remote.url                                // release 页面
  };
}

document.addEventListener('DOMContentLoaded', () => {
  // DOM元素引用
  const btnWaffle = document.getElementById('waffle');
  const btnSettings = document.getElementById('settings');
  const popoverWaffle = document.getElementById('popover-waffle');
  const popoverSettings = document.getElementById('popover-settings');

  // 面板展开期间，让对应的触发按钮保持"悬停"高亮，直到面板关闭。
  // 用 MutationObserver 跟随面板的 active 类，这样任何关闭路径（再点一次、
  // 点面板外、点菜单项）都会自动取消高亮，不必逐处补代码。
  function syncHeaderButtonActive() {
    btnSettings?.classList.toggle('active', !!popoverSettings?.classList.contains('active'));
    btnWaffle?.classList.toggle('active', !!popoverWaffle?.classList.contains('active'));
  }
  if (typeof MutationObserver === 'function') {
    const headerButtonObserver = new MutationObserver(syncHeaderButtonActive);
    [popoverSettings, popoverWaffle].forEach((el) => {
      if (el) headerButtonObserver.observe(el, { attributes: true, attributeFilter: ['class'] });
    });
  }

  const selectEngine = document.getElementById('select-engine');
  const btnEditEngine = document.getElementById('btn-edit-engine');
  const forceBingCNRow = document.getElementById('force-bing-cn-row');
  const toggleForceBingCN = document.getElementById('toggle-force-bing-cn');
  const toggleHistorySwitch = document.getElementById('toggle-history-switch');
  const selectQuicklinks = document.getElementById('select-quicklinks');
  const selectQuicklinkPosition = document.getElementById('select-quicklink-position');
  const quicklinksElem = document.getElementById('quicklinks');
  const logoContainer = document.getElementById('logo');
  const selectLanguage = document.getElementById('select-language');

  // 编辑页面布局相关 DOM（布局设置现在是设置面板内的二级页）
  const toggleLogoSwitch = document.getElementById('toggle-logo-switch');
  const toggleSearchSwitch = document.getElementById('toggle-search-switch');
  const toggleQuicklinksSwitch = document.getElementById('toggle-quicklinks-switch');
  const toggleAddButtonSwitch = document.getElementById('toggle-add-button-switch');
  const selectLayout = document.getElementById('select-layout');
  const btnOpenLayoutModal = document.getElementById('btn-open-layout-modal');
  const btnCloseLayoutModal = document.getElementById('btn-close-layout-modal');

  // 设置面板内的二级页面（背景 / 布局）
  const settingsPageBg = document.getElementById('settings-page-bg');
  const settingsPageLayout = document.getElementById('settings-page-layout');

  // 在设置面板内切换页面：'main' 主设置页、'bg' 背景设置、'layout' 布局设置
  // 切换带 0.2s 过渡：新内容淡入 + 面板高度平滑变化
  const SETTINGS_PAGE_ANIM_MS = 200;
  let settingsPageAnimTimer = null;
  // 面板内容高度变化（按钮行显示/隐藏等）的进行中动画与兜底定时器
  let settingsHeightAnim = null;
  let settingsHeightAnimTimer = null;

  // 面板内容自身高度变化时，按页面切换同样的方式过渡：
  // 先量旧高度，执行内容变更，再从旧高度过渡到新高度
  function animateSettingsPanelHeight(mutate) {
    const panel = popoverSettings;
    // 面板未显示、页面切换动画进行中、或系统要求减少动态效果时直接应用
    if (!panel || !panel.offsetHeight || settingsPageAnimTimer ||
        window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      mutate();
      return;
    }
    // 结束上一次高度动画，避免互相叠加
    if (settingsHeightAnim) {
      try { settingsHeightAnim.cancel(); } catch (e) { /* 已结束 */ }
      settingsHeightAnim = null;
    }
    if (settingsHeightAnimTimer) {
      clearTimeout(settingsHeightAnimTimer);
      settingsHeightAnimTimer = null;
    }

    const startHeight = panel.offsetHeight;
    mutate();
    // auto 状态下量得的高度已受 max-height 约束
    const endHeight = panel.getBoundingClientRect().height;
    if (Math.abs(endHeight - startHeight) < 1) {
      updateSettingsScrollbar();
      return;
    }

    // 显式动画：不依赖样式重算触发的隐式过渡，也不会被其它样式写入打断
    panel.style.overflowY = 'hidden';
    const finish = () => {
      if (settingsHeightAnimTimer) {
        clearTimeout(settingsHeightAnimTimer);
        settingsHeightAnimTimer = null;
      }
      if (settingsHeightAnim) {
        try { settingsHeightAnim.cancel(); } catch (e) { /* 已结束 */ }
        settingsHeightAnim = null;
      }
      panel.style.overflowY = '';
      updateSettingsScrollbar();
    };
    settingsHeightAnim = panel.animate(
      [{ height: startHeight + 'px' }, { height: endHeight + 'px' }],
      { duration: SETTINGS_PAGE_ANIM_MS, easing: 'ease' }
    );
    settingsHeightAnim.onfinish = finish;
    settingsHeightAnim.oncancel = () => { settingsHeightAnim = null; };
    // 兜底：动画被打断或未触发 onfinish 时也要恢复滚动
    settingsHeightAnimTimer = setTimeout(finish, SETTINGS_PAGE_ANIM_MS + 60);
  }

  // 仅切换页面的显示状态（不含动画），供动画与"减少动态效果"两条路径复用
  function applySettingsPageClasses(name) {
    const isMain = name === 'main';
    popoverSettings?.classList.toggle('in-subpage', !isMain);
    settingsPageBg?.classList.toggle('active', name === 'bg');
    settingsPageLayout?.classList.toggle('active', name === 'layout');
  }

  function showSettingsPage(name) {
    if (!popoverSettings) return;

    // 上一次过渡还没结束又切换：先清掉残留的内联样式与定时器
    if (settingsPageAnimTimer) {
      clearTimeout(settingsPageAnimTimer);
      settingsPageAnimTimer = null;
    }
    if (settingsHeightAnim) {
      try { settingsHeightAnim.cancel(); } catch (e) { /* 已结束 */ }
      settingsHeightAnim = null;
    }
    if (settingsHeightAnimTimer) {
      clearTimeout(settingsHeightAnimTimer);
      settingsHeightAnimTimer = null;
    }
    popoverSettings.style.transition = '';
    popoverSettings.style.height = '';
    popoverSettings.style.overflowY = '';
    popoverSettings.classList.remove('page-fading');

    // 系统开启"减少动态效果"时直接切换，不做过渡
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      applySettingsPageClasses(name);
      popoverSettings.scrollTop = 0;
      updateSettingsScrollbar();
      revealSettingsScrollbar();
      return;
    }

    // FLIP：记住旧高度 → 切页面 → 量出新高度 → 从旧高度过渡过去
    const startHeight = popoverSettings.offsetHeight;

    // 测量前先把滑块归零（否则它的溢出会算进 scrollHeight），同时记下当前尺寸用于淡出
    const prevThumbHeight = settingsScrollbarThumb ? settingsScrollbarThumb.style.height : '';
    const prevThumbTransform = settingsScrollbarThumb ? settingsScrollbarThumb.style.transform : '';
    if (settingsScrollbarThumb) {
      settingsScrollbarThumb.style.height = '0px';
      settingsScrollbarThumb.style.transform = 'none';
    }

    popoverSettings.classList.add('page-fading');
    applySettingsPageClasses(name);
    popoverSettings.scrollTop = 0;

    void popoverSettings.offsetHeight;
    popoverSettings.style.height = 'auto';
    void popoverSettings.offsetHeight;
    // auto 状态下量得的高度已受 max-height: 85vh 约束
    const endHeight = popoverSettings.getBoundingClientRect().height;
    const endScrollHeight = popoverSettings.scrollHeight;

    // 滚动条与页面内容在同一时刻过渡：
    // 目标页面放不下 → 显示（2s 后隐藏）；放得下 → 带着原尺寸随旧内容一起淡出
    if (settingsScrollbar && settingsScrollbarThumb) {
      const metrics = computeSettingsScrollbarMetrics(endHeight, endScrollHeight);
      settingsScrollbarCanScroll = metrics.maxScroll > 2;
      if (settingsScrollbarCanScroll) {
        settingsScrollbarThumb.style.height = metrics.thumbHeight + 'px';
        settingsScrollbarThumb.style.transform = 'translateY(' + SETTINGS_SCROLLBAR_INSET + 'px)';
        revealSettingsScrollbar();
      } else {
        settingsScrollbarThumb.style.height = prevThumbHeight;
        settingsScrollbarThumb.style.transform = prevThumbTransform;
        hideSettingsScrollbar();
      }
    }

    popoverSettings.style.height = startHeight + 'px';
    void popoverSettings.offsetHeight;
    popoverSettings.style.transition = 'height ' + SETTINGS_PAGE_ANIM_MS + 'ms ease';
    popoverSettings.style.overflowY = 'hidden';
    popoverSettings.style.height = endHeight + 'px';

    // 下一帧取消遮罩状态，触发内容 0 → 1 的淡入
    requestAnimationFrame(() => {
      popoverSettings.classList.remove('page-fading');
    });

    // 过渡结束后交还高度控制权（回到 auto），保留原有滚动行为
    settingsPageAnimTimer = setTimeout(() => {
      popoverSettings.style.transition = '';
      popoverSettings.style.height = '';
      popoverSettings.style.overflowY = '';
      settingsPageAnimTimer = null;
      // 只同步几何；显隐时机已在切换那一刻按目标页面决定
      updateSettingsScrollbar();
    }, SETTINGS_PAGE_ANIM_MS + 30);
  }

  // ===== 设置面板的悬浮滚动条 =====
  // 原生滚动条在 Windows 上会占据内容宽度，这里隐藏它并自绘一条覆盖在内容上的滑块
  const settingsScrollbar = document.getElementById('settings-scrollbar');
  const settingsScrollbarThumb = document.getElementById('settings-scrollbar-thumb');
  // 上下安全间距（与面板 12px 圆角一致），避免滑块贴边被圆角裁切
  const SETTINGS_SCROLLBAR_INSET = 12;
  // 页面出现后 / 停止滚动后，多久自动隐藏（1.3s）
  const SETTINGS_SCROLLBAR_HIDE_DELAY = 1300;
  // 鼠标进入面板右侧多宽的条带，算作"停在滚动条上"
  const SETTINGS_SCROLLBAR_HOVER_ZONE = 20;

  let settingsScrollbarDrag = null;
  let settingsScrollbarCanScroll = false;
  let settingsScrollbarHovering = false;
  let settingsScrollbarHideTimer = null;

  // 由「可视高度 + 内容高度」算出滑块高度与可移动范围
  function computeSettingsScrollbarMetrics(viewHeight, contentHeight) {
    const maxScroll = contentHeight - viewHeight;
    const trackHeight = Math.max(1, viewHeight - SETTINGS_SCROLLBAR_INSET * 2);
    const thumbHeight = Math.min(
      trackHeight,
      Math.max(24, Math.round(trackHeight * viewHeight / contentHeight))
    );
    return {
      maxScroll: maxScroll,
      thumbHeight: thumbHeight,
      maxThumbTop: Math.max(0, trackHeight - thumbHeight)
    };
  }

  // 按面板当前尺寸量一次
  function measureSettingsScrollbar() {
    return computeSettingsScrollbarMetrics(popoverSettings.clientHeight, popoverSettings.scrollHeight);
  }

  // 立即隐藏（例如切到放得下的页面）
  function hideSettingsScrollbar() {
    if (settingsScrollbarHideTimer) {
      clearTimeout(settingsScrollbarHideTimer);
      settingsScrollbarHideTimer = null;
    }
    settingsScrollbar?.classList.remove('visible');
  }

  // 延迟隐藏：鼠标还停在滚动条上、或正在拖动时不隐藏
  function scheduleSettingsScrollbarHide() {
    if (settingsScrollbarHideTimer) clearTimeout(settingsScrollbarHideTimer);
    settingsScrollbarHideTimer = setTimeout(() => {
      settingsScrollbarHideTimer = null;
      if (settingsScrollbarHovering || settingsScrollbarDrag) return;
      settingsScrollbar?.classList.remove('visible');
    }, SETTINGS_SCROLLBAR_HIDE_DELAY);
  }

  // 显示滑块并重新开始倒计时（只有确实能滚动时才显示）
  function revealSettingsScrollbar() {
    if (!settingsScrollbarCanScroll) return;
    settingsScrollbar?.classList.add('visible');
    scheduleSettingsScrollbarHide();
  }

  // 同步几何与"能否滚动"；不主动显示，只在一变得放不下时立即隐藏
  function updateSettingsScrollbar() {
    if (!popoverSettings || !settingsScrollbar || !settingsScrollbarThumb) return;
    // 面板高度过渡期间不同步，避免每帧强制重排；过渡结束时会再调用一次
    if (settingsPageAnimTimer) return;

    // 先让滑块归零：被 translateY 移出面板的部分会算进 scrollHeight，
    // 会让放得下的页面（例如较短的二级页）被误判成"可以滚动"
    const prevHeight = settingsScrollbarThumb.style.height;
    const prevTransform = settingsScrollbarThumb.style.transform;
    settingsScrollbarThumb.style.height = '0px';
    settingsScrollbarThumb.style.transform = 'none';

    const m = measureSettingsScrollbar();
    // 容忍亚像素取整带来的 1~2px 误差
    settingsScrollbarCanScroll = m.maxScroll > 2;

    if (!settingsScrollbarCanScroll) {
      // 放得下却残留了一点滚动位置（亚像素）时归零，避免内容看起来被顶上去
      if (popoverSettings.scrollTop !== 0) popoverSettings.scrollTop = 0;
      // 还原尺寸再淡出，否则高度被归零会让它"瞬间消失"
      settingsScrollbarThumb.style.height = prevHeight;
      settingsScrollbarThumb.style.transform = prevTransform;
      hideSettingsScrollbar();
      return;
    }

    const progress = popoverSettings.scrollTop / m.maxScroll;
    const top = SETTINGS_SCROLLBAR_INSET + Math.round(progress * m.maxThumbTop);
    settingsScrollbarThumb.style.height = m.thumbHeight + 'px';
    settingsScrollbarThumb.style.transform = 'translateY(' + top + 'px)';
  }

  // 滚动时显示，停止滚动 2s 后隐藏
  popoverSettings?.addEventListener('scroll', () => {
    updateSettingsScrollbar();
    revealSettingsScrollbar();
  }, { passive: true });

  // 面板内容放得下时直接吃掉滚轮事件：否则浏览器会把滚动动作交给外层容器，
  // 表现为"滚一下、内容轻微上移又弹回来"
  popoverSettings?.addEventListener('wheel', (e) => {
    if (!settingsScrollbarCanScroll) e.preventDefault();
  }, { passive: false });

  // 尺寸变化只同步几何，不主动显示
  window.addEventListener('resize', updateSettingsScrollbar);
  if (typeof ResizeObserver === 'function' && popoverSettings) {
    new ResizeObserver(updateSettingsScrollbar).observe(popoverSettings);
  }

  // 鼠标移到面板右侧的滚动条区域时显示
  popoverSettings?.addEventListener('pointermove', (e) => {
    const rect = popoverSettings.getBoundingClientRect();
    const inZone = e.clientX >= rect.right - SETTINGS_SCROLLBAR_HOVER_ZONE &&
      e.clientY >= rect.top && e.clientY <= rect.bottom;
    if (inZone === settingsScrollbarHovering) return;
    settingsScrollbarHovering = inZone;
    if (inZone) {
      revealSettingsScrollbar();
    } else {
      scheduleSettingsScrollbarHide();
    }
  });

  popoverSettings?.addEventListener('pointerleave', () => {
    if (!settingsScrollbarHovering) return;
    settingsScrollbarHovering = false;
    scheduleSettingsScrollbarHide();
  });

  // 拖动滑块滚动面板
  settingsScrollbarThumb?.addEventListener('pointerdown', (e) => {
    if (!popoverSettings) return;
    const m = measureSettingsScrollbar();
    e.preventDefault();
    settingsScrollbarDrag = {
      startY: e.clientY,
      startScroll: popoverSettings.scrollTop,
      ratio: m.maxScroll / Math.max(1, m.maxThumbTop)
    };
    if (settingsScrollbarThumb.setPointerCapture) {
      settingsScrollbarThumb.setPointerCapture(e.pointerId);
    }
  });

  settingsScrollbarThumb?.addEventListener('pointermove', (e) => {
    if (!settingsScrollbarDrag || !popoverSettings) return;
    const delta = e.clientY - settingsScrollbarDrag.startY;
    popoverSettings.scrollTop = settingsScrollbarDrag.startScroll + delta * settingsScrollbarDrag.ratio;
  });

  function endSettingsScrollbarDrag() {
    settingsScrollbarDrag = null;
    scheduleSettingsScrollbarHide();
  }
  settingsScrollbarThumb?.addEventListener('pointerup', endSettingsScrollbarDrag);
  settingsScrollbarThumb?.addEventListener('pointercancel', endSettingsScrollbarDrag);

  const searchContainer = document.getElementById('search-container');
  const fakebox = document.getElementById('fakebox');
  const searchInput = document.getElementById('search-input');
  const suggestionList = document.getElementById('suggestion-list');
  const suggestionsFooter = document.getElementById('suggestions-footer');
  const clearHistoryBtn = document.getElementById('clear-history-btn');

  // Modal相关DOM元素(快速链接
  const modalOverlay = document.getElementById('modal');
  const modalForm = document.getElementById('modal-form');
  const inputName = document.getElementById('input-name');
  const inputUrl = document.getElementById('input-url');
  const selectIconMode = document.getElementById('select-icon-mode');
  const containerName = document.getElementById('container-name');
  const containerUrl = document.getElementById('container-url');
  const tipName = document.getElementById('tip-name');
  const tipUrl = document.getElementById('tip-url');

  const btnDelete = document.getElementById('btn-delete');
  const btnCancel = document.getElementById('btn-cancel');

  // Modal相关DOM元素(自定义搜索引擎
  const customEngineModal = document.getElementById('custom-engine-modal');
  const customEngineForm = document.getElementById('custom-engine-form');
  const inputEngineName = document.getElementById('input-engine-name');
  const inputEngineUrl = document.getElementById('input-engine-url');
  const containerEngineName = document.getElementById('container-engine-name');
  const containerEngineUrl = document.getElementById('container-engine-url');
  const tipEngineName = document.getElementById('tip-engine-name');
  const tipEngineUrl = document.getElementById('tip-engine-url');
  const btnEngineCancel = document.getElementById('btn-engine-cancel');
  const btnEngineDelete = document.getElementById('btn-engine-delete');

  // 自定义标题图片相关 DOM
  const engineLogoImg = document.getElementById('engine-logo-img');
  const engineLogoEmpty = document.getElementById('engine-logo-empty');
  const btnUploadEngineLogo = document.getElementById('btn-upload-engine-logo');
  const btnRemoveEngineLogo = document.getElementById('btn-remove-engine-logo');
  const inputEngineLogoFile = document.getElementById('input-engine-logo-file');
  let tempEngineLogo = ''; // 弹窗内的临时标题图片（DataURL）

  // 背景/壁纸控制DOM元素
  const toggleBgSwitch = document.getElementById('toggle-bg-switch');
  const btnOpenBgModal = document.getElementById('btn-open-bg-modal');
  const toggleEnhancedVisibility = document.getElementById('toggle-enhanced-visibility');
  const toggleEnhancedBlur = document.getElementById('toggle-enhanced-blur');
  const toggleBgVignette = document.getElementById('toggle-bg-vignette');
  const toggleBgFadeBlur = document.getElementById('toggle-bg-fade-blur');
  
  const btnCloseWallpaperModal = document.getElementById('btn-close-wallpaper-modal');
  const toggleBgModalSwitch = document.getElementById('toggle-bg-modal-switch');
  const wallpaperPreviewContainer = document.getElementById('wallpaper-preview-container');
  const btnUploadWallpaper = document.getElementById('btn-upload-wallpaper');
  const btnEditOnlineWallpaper = document.getElementById('btn-edit-online-wallpaper');
  const inputWallpaperFile = document.getElementById('input-wallpaper-file');
  const selectWallpaperSource = document.getElementById('select-wallpaper-source');
  const wallpaperFileRow = document.getElementById('wallpaper-file-row');
  const bgDependentSettings = document.getElementById('bg-dependent-settings');

  const bgVideo = document.getElementById('bg-video');
  const bgImage = document.getElementById('bg-image');
  const bgOverlay = document.getElementById('bg-overlay');

  // ===== 关于弹窗的更新提示 =====
  // 「暂时忽略」的记录：存忽略当天的日期与当时看到的版本号。
  // 按「发生日」而非固定 24 小时计算，跨天零点即恢复提醒；
  // 记录版本号是为了日后出现更新的版本时不再被旧的忽略状态挡住。
  const UPDATE_SKIP_KEY = 'ntp_update_skipped';
  // 弹窗内其它浮层的关闭信号：隐藏「暂时忽略」菜单
  const HIDE_UPDATE_LAYERS_EVT = 'liteStart:hideFloatingLayers';

  function getLocalDateStr(d = new Date()) {
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  }

  // 返回当前跳过记录的版本号，没有生效中的跳过记录则返回 null
  function getSkippedUpdateVersion() {
    const rec = Storage.get(UPDATE_SKIP_KEY, null);
    if (!rec || typeof rec !== 'object') return null;
    if (rec.date !== getLocalDateStr()) return null;   // 已跨天，提醒恢复
    return typeof rec.version === 'string' ? rec.version : '';
  }

  const updateNotice = document.getElementById('update-notice');
  const updateVersionText = document.getElementById('update-version-text');
  const updateDownloadBtn = document.getElementById('update-download-btn');
  const updateSkipTip = document.getElementById('update-skip-tip');
  const updateSplitBtn = document.getElementById('update-split-btn');
  const updateSplitToggle = document.getElementById('update-split-toggle');
  const updateSkipMenu = document.getElementById('update-skip-menu');
  const updateSkipBtn = document.getElementById('update-skip-btn');

  // 下载按钮的矩形；用于让下拉菜单与其左边缘对齐
  function updateDownloadRect() {
    const el = updateDownloadBtn || updateSplitToggle || updateSplitBtn;
    return el.getBoundingClientRect();
  }

  // 下拉菜单：左边缘与「下载」按钮对齐，垂直方向贴着整个拆分按钮下方
  function positionUpdateSkipMenu() {
    if (!updateSkipMenu || !updateSplitToggle) return;
    const menuW = Math.max(updateSkipMenu.offsetWidth || 0, updateSplitBtn?.offsetWidth || 100);
    const h = updateDownloadRect();
    const anchor = updateSplitBtn || updateSplitToggle;
    const r = anchor.getBoundingClientRect();
    const menuH = updateSkipMenu.offsetHeight || 40;
    const gap = 4;
    // 与下载按钮左边缘对齐；右侧贴边时向左回收，不越出视口
    const left = Math.max(8, Math.min(h.left, window.innerWidth - menuW - 8));
    updateSkipMenu.style.minWidth = `${Math.round(menuW)}px`;
    updateSkipMenu.style.left = `${Math.round(left)}px`;
    const below = r.bottom + gap;
    if (below + menuH > window.innerHeight - 8 && r.top - gap - menuH > 8) {
      updateSkipMenu.style.top = `${Math.round(r.top - gap - menuH)}px`;
    } else {
      updateSkipMenu.style.top = `${Math.round(below)}px`;
    }
  }

  function openUpdateSkipMenu() {
    if (!updateSkipMenu) return;
    updateSkipMenu.classList.add('active');
    updateSplitToggle?.setAttribute('aria-expanded', 'true');
    positionUpdateSkipMenu();
    updateSkipBtn?.focus({ preventScroll: true });
  }

  function closeUpdateSkipMenu() {
    if (!updateSkipMenu?.classList.contains('active')) return;
    updateSkipMenu.classList.remove('active');
    updateSplitToggle?.setAttribute('aria-expanded', 'false');
  }

  async function refreshUpdateNotice() {
    if (!updateNotice) return;
    updateNotice.style.display = 'none';   // 先隐藏，避免上次结果残留
    closeUpdateSkipMenu();

    // 设计约定：不主动打扰用户。既不在没有新版本时提示，也不提示
    // 检查失败（断网、GitHub 限流 403 等）——失败就是安静地什么都不显示。
    const result = await checkForUpdate();
    if (!result?.hasUpdate) return;

    const skippedVersion = getSkippedUpdateVersion();
    if (skippedVersion !== null && skippedVersion === result.latest) {
      // 今天已选择暂时忽略：不展示更新框
      return;
    }

    updateVersionText.textContent = result.latest + (result.dateCode ? ` (${result.dateCode})` : '');
    updateDownloadBtn.href = result.url;
    updateNotice.style.display = 'flex';
  }

  updateSplitToggle?.addEventListener('click', (e) => {
    e.stopPropagation();
    if (updateSkipMenu?.classList.contains('active')) {
      closeUpdateSkipMenu();
    } else {
      openUpdateSkipMenu();
    }
  });

  // 「暂时忽略」：记录今天已忽略该版本，收起提示框
  updateSkipBtn?.addEventListener('click', () => {
    // 版本号形如「1.8.10 (261026)」，取第一段即可
    const ver = (updateVersionText?.textContent || '').trim().split(' ')[0];
    Storage.set(UPDATE_SKIP_KEY, { date: getLocalDateStr(), version: ver });
    closeUpdateSkipMenu();
    if (updateNotice) updateNotice.style.display = 'none';
  });

  // 点其它位置 / Esc / 窗口尺寸变化时收起菜单
  document.addEventListener('click', (e) => {
    if (!updateSkipMenu?.classList.contains('active')) return;
    if (e.target instanceof Element &&
        (e.target.closest('#update-skip-menu') || e.target.closest('#update-split-toggle'))) return;
    closeUpdateSkipMenu();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeUpdateSkipMenu();
  });
  window.addEventListener('resize', closeUpdateSkipMenu);
  window.addEventListener(HIDE_UPDATE_LAYERS_EVT, closeUpdateSkipMenu);

  function openAboutModal() {
    popoverWaffle?.classList.remove('active');
    popoverSettings?.classList.remove('active');
    document.getElementById('modal-about')?.classList.add('active');
    refreshUpdateNotice();   // 不 await，避免阻塞弹窗打开动画
  }

  document.getElementById('btn-about')?.addEventListener('click', openAboutModal);
  document.getElementById('btn-footer-version')?.addEventListener('click', (e) => {
    e.preventDefault();
    openAboutModal();
  });

  document.getElementById('btn-versioninfo')?.addEventListener('click', () => {
    window.open(`https://github.com/${GITHUB_REPO}/releases`, '_blank', 'noopener');
  });

  document.getElementById('btn-about-close')?.addEventListener('click', () => {
    document.getElementById('modal-about')?.classList.remove('active');
    closeUpdateSkipMenu();
  });

  // 点击遮罩层关闭
  const modalAbout = document.getElementById('modal-about');
  modalAbout?.addEventListener('click', (e) => {
    if (e.target === modalAbout) {
      modalAbout.classList.remove('active');
      closeUpdateSkipMenu();
    }
  });
  //关于弹窗（结束）

  if (searchInput && searchInput.value.trim() !== '') {
  const fakebox = document.getElementById('fakebox');
  fakebox?.classList.add('has-value');
  }

  let currentEditingId = null;
  let draggedId = null;//拖拽实现
  let selectedSuggestionIndex = -1;

  // ===== 主题模式（跟随系统 / 浅色 / 深色）=====
  const THEME_KEY = 'ntp_theme';
  const themeOptionEls = document.querySelectorAll('.theme-option');

  // 'auto' 时按系统偏好解析成实际生效的主题
  function resolveTheme(pref) {
    if (pref === 'light' || pref === 'dark') return pref;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  // 应用主题：写 <html data-theme>、同步按钮选中态、同步标签页图标
  function applyTheme() {
    const pref = Storage.get(THEME_KEY, 'auto');
    const resolved = resolveTheme(pref);
    document.documentElement.setAttribute('data-theme', resolved);

    themeOptionEls.forEach(el => {
      const on = el.getAttribute('data-theme-val') === pref;
      el.classList.toggle('active', on);
      el.setAttribute('aria-checked', on ? 'true' : 'false');
    });

    // 滑块位置：交给 .theme-switch::before 做位移动画
    const themeSwitchEl = document.getElementById('theme-switch');
    if (themeSwitchEl) {
      const idx = ({ auto: 0, light: 1, dark: 2 })[pref] ?? 0;
      themeSwitchEl.classList.remove('idx-0', 'idx-1', 'idx-2');
      themeSwitchEl.classList.add('idx-' + idx);
    }

    const link = document.getElementById('favicon');
    if (link) {
      link.href = (resolved === 'dark' ? 'img/icon_d.svg' : 'img/icon_l.svg') + '?r=' + Math.random();
    }

    // 选中项会加粗，文字宽度随之变化，重新量一次
    setupThemeOptionScroll();
  }

  themeOptionEls.forEach(el => {
    el.addEventListener('click', () => {
      Storage.set(THEME_KEY, el.getAttribute('data-theme-val'));
      applyTheme();
    });
  });

  // 系统主题变化：只有"跟随系统"时才需要跟着变
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if (Storage.get(THEME_KEY, 'auto') === 'auto') applyTheme();
  });

  // 兜一层：主题应用失败不该连累后面的初始化（背景、快速链接等都排在它后面）
  try {
    applyTheme();
  } catch (err) {
    console.warn('主题初始化失败:', err);
  }

  // 默认与自定义搜索引擎
  let customEngineConfig = Storage.get('ntp_custom_engine_config', {
    name: '',
    url: ''
  });
  // 切到"自定义"之前选中的引擎；用户取消编辑时用它回退
  let engineBeforeCustom = null;

  const engineSearchUrls = {
    bing: 'https://www.bing.com/search?q=',
    baidu: 'https://www.baidu.com/s?wd=',
    google: 'https://www.google.com/search?q='
  };

  const bingCNSearchUrl = 'https://cn.bing.com/search?q=';

  // 切换弹出层动画
  function togglePopover(popoverToToggle, otherPopover) {
    otherPopover.classList.remove('active');
    popoverToToggle.classList.toggle('active');
  }

  btnWaffle?.addEventListener('click', (e) => {
    e.stopPropagation();
    togglePopover(popoverWaffle, popoverSettings);
  });

  btnSettings?.addEventListener('click', (e) => {
    e.stopPropagation();
    togglePopover(popoverSettings, popoverWaffle);
    // 打开时保留上次所在的页面（点外部收起不会重置页面状态，刷新页面才会回到主设置页），
    // 这里只同步一下滚动条，避免高度变化后滑块位置不对
    if (popoverSettings?.classList.contains('active')) {
      updateSettingsScrollbar();
      revealSettingsScrollbar();
    }
    // 设置面板打开时，按当前语言同步快速链接的“添加”按钮文案
    if (typeof syncQuicklinksLanguage === 'function') syncQuicklinksLanguage();
  });

  document.addEventListener('click', (e) => {
    // 弹窗（如"自定义搜索引擎"）挂在 body 下，不在任何面板内部。
    // 若按"面板外"处理，点一下弹窗就会把设置面板一起收起，很反直觉，所以直接跳过
    if (e.target.closest && e.target.closest('.modal-overlay')) return;

    if (!popoverWaffle?.contains(e.target) && !btnWaffle?.contains(e.target)) {
      popoverWaffle?.classList.remove('active');
    }
    if (!popoverSettings?.contains(e.target) && !btnSettings?.contains(e.target)) {
      popoverSettings?.classList.remove('active');
    }
    if (!searchContainer?.contains(e.target)) {
      closeSuggestions();
    }
  });

  // 切换Logo（自定义引擎支持显示自定义标题图片）
  function setLogo(engine) {
    if (!logoContainer) return;
    if (engine === 'custom') {
      logoContainer.innerHTML = '';
      if (customEngineConfig.logo) {
        const img = document.createElement('img');
        img.src = customEngineConfig.logo;
        img.alt = '';
        img.className = 'custom-engine-logo';
        // 加载失败时静默清空，避免显示破图
        img.onerror = () => { logoContainer.innerHTML = ''; };
        logoContainer.appendChild(img);
      }
      return;
    }
    if (logos[engine] !== undefined) {
      logoContainer.innerHTML = logos[engine];
    }
  }

  // 动态管理自定义搜索引擎编辑按钮显隐
  function updateEngineEditButton(engine) {
    if (btnEditEngine) {
      btnEditEngine.style.display = engine === 'custom' ? 'inline-flex' : 'none';
    }
  }

  // 根据当前引擎决定是否显示"强制必应中国版"选项行
  function updateForceBingCNRow(engine) {
    if (forceBingCNRow) {
      forceBingCNRow.style.display = engine === 'bing' ? 'flex' : 'none';
    }
  }

    // 时间开关相关函数
  let timeCapsuleTimer = null;

  // 更新时间显示的当前时间与日期文本
  function updateTimeCapsule() {
    const display = document.getElementById('time-display');
    if (!display) return;
    if (!display.classList.contains('active')) return;
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const timeStr = hours + ':' + minutes;
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const dateStr = year + '/' + month + '/' + day;

    const timeValue = display.querySelector('.time-value');
    const timeDate = display.querySelector('.time-date');
    if (timeValue) timeValue.innerText = timeStr;
    if (timeDate) timeDate.innerText = dateStr;
  }

  // 根据设置控制时间的显示/隐藏与定时器启停
  function applyTimeCapsuleVisibility() {
    const display = document.getElementById('time-display');
    if (!display) return;
    if (showTimeCapsule) {
      display.classList.add('active');
      updateTimeCapsule();
      startTimeCapsuleTimer();
    } else {
      display.classList.remove('active');
      stopTimeCapsuleTimer();
    }
  }

  // 根据设置控制菜单按钮（饼图标）的显示/隐藏
  function applyMenuButtonVisibility() {
    const btn = document.getElementById('waffle');
    const popover = document.getElementById('popover-waffle');
    if (!btn) return;
    if (showMenuButton) {
      btn.style.display = '';
      if (popover) popover.style.display = '';
    } else {
      btn.style.display = 'none';
      if (popover) popover.classList.remove('active');
    }
  }

  // 启动时间定时器（每分钟更新一次）
  function startTimeCapsuleTimer() {
    if (timeCapsuleTimer) clearInterval(timeCapsuleTimer);
    updateTimeCapsule();
    timeCapsuleTimer = setInterval(updateTimeCapsule, 60000);
  }

  // 停止时间定时器
  function stopTimeCapsuleTimer() {
    if (timeCapsuleTimer) {
      clearInterval(timeCapsuleTimer);
      timeCapsuleTimer = null;
    }
  }

    // B1.读取并应用保存的页面设置/此为默认配置值
  let savedEngine = Storage.get('ntp_engine', 'bing');
  if (savedEngine === 'bingCN') {
    savedEngine = 'bing';
    Storage.set('ntp_engine', 'bing');
    Storage.set('ntp_force_bing_cn', true);
  }
  const savedLayout = Storage.get('ntp_layout', 'focused');
  // 快速链接的"样式"（一行 / 多行）与"是否显示"现在分开：
  // 旧版本用 ntp_quicklinks = '0' 表示关闭，这里迁移成"样式=一行 + 显示开关关闭"
  let savedQuicklinksRow = Storage.get('ntp_quicklinks', '1');
  let showQuicklinks = Storage.get('ntp_show_quicklinks', null);
  if (showQuicklinks === null) {
    showQuicklinks = savedQuicklinksRow !== '0';
    Storage.set('ntp_show_quicklinks', showQuicklinks);
  }
  if (savedQuicklinksRow === '0') {
    savedQuicklinksRow = '1';
    Storage.set('ntp_quicklinks', '1');
  }
  // 快速链接位置：'auto' 跟随布局；'bottom' 固定在页面底部（该模式强制一行）
  let quicklinkPosition = Storage.get('ntp_quicklink_position', 'auto');
  let historyEnabled = Storage.get('ntp_history_enabled', true);
  let searchHistory = Storage.get('ntp_search_history', []);
  if (!Array.isArray(searchHistory)) searchHistory = [];   // 备份导入/手改可能写入非数组
  let showTimeCapsule = Storage.get('ntp_show_time_capsule', false);
  let showMenuButton = Storage.get('ntp_show_menu_button', true);
  let forceBingCN = Storage.get('ntp_force_bing_cn', false);
  
  let bgEnabled = Storage.get('ntp_bg_enabled', false);
  let customWallpaperData = null;
  let enhancedVisibility = Storage.get('ntp_enhanced_visibility', false);
  // 默认开启
  let enhancedBlur = Storage.get('ntp_enhanced_blur', true);
  // 背景边角晕影默认开启，所以缺省值是 true
  let bgVignette = Storage.get('ntp_bg_vignette', true);
  // 背景渐显模糊默认开启（用默认壁纸时会自动关掉，见 renderWallpaper）
  let bgFadeBlur = Storage.get('ntp_bg_fade_blur', true);
  let searchVisible = Storage.get('ntp_search_visible', true);
  let showLogo = Storage.get('ntp_show_logo', true);
  // 快速链接区"添加"按钮的显隐（默认关闭）
  let showAddButton = Storage.get('ntp_show_add_button', true);

  // 获取今天的日期字符串，如 "2026-09-03"，用于判断壁纸是否过期
  function getTodayStr() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  }

  // 从必应壁纸 API 拉取图片 URL、标题、版权信息
  async function fetchBingWallpaper() {
    try {
      const response = await fetch('https://bing.biturl.top/?resolution=1920x1080&format=json', { cache: 'no-store' });
      if (!response.ok) throw new Error('网络请求失败');
      const data = await response.json();
      let url = data.url;
      if (url && url.startsWith('http')) {
        // 与其它入口一致：缺协议时补 http（支持 https 的站点会自行跳转）
        if (!url.startsWith('http://') && !url.startsWith('https://')) {
          url = 'http://' + url;
        }
        return { url, title: data.title || '', copyright: data.copyright || '' };
      }
      throw new Error('返回数据无效');
    } catch (e) {
      console.error('自动获取必应壁纸失败:', e);
      return null;
    }
  }

  // 如果当前壁纸是必应每日壁纸且缓存日期不是今天，自动拉取新图替换
  async function ensureBingDailyFresh() {
    if (!customWallpaperData || customWallpaperData.type !== 'bing_daily') return;
    const today = getTodayStr();
    if (customWallpaperData.fetchDate === today) return;
    const result = await fetchBingWallpaper();
    if (result) {
      revokeBlobUrl(customWallpaperData?.url);
      customWallpaperData = {
        type: 'bing_daily',
        url: result.url,
        title: result.title,
        copyright: result.copyright,
        fetchDate: today
      };
      await saveWallpaperData(customWallpaperData);
      if (bgEnabled) {
        renderWallpaper();
      }
    }
  }

  if (selectEngine) selectEngine.value = savedEngine;
  if (selectQuicklinks) selectQuicklinks.value = savedQuicklinksRow;
  if (toggleHistorySwitch) toggleHistorySwitch.checked = historyEnabled;
  if (toggleForceBingCN) toggleForceBingCN.checked = forceBingCN;
  if (toggleEnhancedVisibility) toggleEnhancedVisibility.checked = enhancedVisibility;
  if (toggleEnhancedBlur) toggleEnhancedBlur.checked = enhancedBlur;
  if (toggleBgVignette) toggleBgVignette.checked = bgVignette;
  if (toggleBgFadeBlur) toggleBgFadeBlur.checked = bgFadeBlur;

  setLogo(savedEngine);
  updateEngineEditButton(savedEngine);
  updateForceBingCNRow(savedEngine);
  // data-layout 同时写在 <html> 和 <body> 上，两处必须一致：
  // <html> 上的值由 early.js 在首帧前设置（避免悬挂布局下搜索框先出现在页面中部），
  // 不一致会让 CSS 选择器继续命中旧的布局。
  function setLayoutAttr(value) {
    document.documentElement.setAttribute('data-layout', value);
    document.body.setAttribute('data-layout', value);
  }

  setLayoutAttr(savedLayout === 'hidden' ? 'focused' : savedLayout);
  // 应用快速链接位置（"底部"模式会强制一行并锁定数量下拉）
  applyQuicklinkPosition();

  // 背景显隐及渲染逻辑
  function applyBackgroundState() {
    if (toggleBgSwitch) toggleBgSwitch.checked = bgEnabled;
    if (toggleBgModalSwitch) toggleBgModalSwitch.checked = bgEnabled;

    if (bgEnabled) {
      document.body.classList.add('bg-enabled');
      renderWallpaper();
    } else {
      document.body.classList.remove('bg-enabled');
      // 关闭背景时清除 .loaded，确保下次开启能从透明渐入
      if (bgVideo) {
        bgVideo.classList.remove('loaded');
        bgVideo.style.display = 'none';
      }
      if (bgImage) {
        bgImage.classList.remove('loaded');
        bgImage.style.display = 'none';
      }
      if (bgOverlay) {
        bgOverlay.classList.remove('loaded');
      }
      // 这里刻意不复位「增强元素可见性」：它的效果由 applyEnhancedVisibility
      // 结合 bgEnabled 判断，背景关闭期间自然不生效，但开关状态保留，
      // 重新开启背景后会自动恢复；该卡片也会随背景依赖组一起置灰。
    }

    applyEnhancedVisibility();
    applyBgVignette();
    applyBgFadeBlur();
    applyBgDependentEnabled();
    // 预览不受背景开关影响，始终显示当前选择的壁纸
    renderWallpaperPreview();
  }

  // 根据"增强可见性"设置与背景开关，切换 body 的 data 属性
  function applyEnhancedVisibility() {
    const active = !!(enhancedVisibility && bgEnabled);
    if (active) {
      document.body.setAttribute('data-enhanced-visibility', 'true');
    } else {
      document.body.removeAttribute('data-enhanced-visibility');
    }

    // 「衬底启用模糊」独立于增强可见性开关，后者不会复位它。
    // 其效果只作用于增强可见性产生的衬底，故后者关闭期间不可见：
    // CSS 选择器同时要求 data-enhanced-visibility="true" 与 data-enhanced-blur="true"。
    if (enhancedBlur) {
      document.body.setAttribute('data-enhanced-blur', 'true');
    } else {
      document.body.removeAttribute('data-enhanced-blur');
    }

    // 状态文案与勾选框同源
    const statusBlur = document.getElementById('status-enhanced-blur');
    if (statusBlur) {
      const d = currentDict();
      statusBlur.innerText = (toggleEnhancedBlur && toggleEnhancedBlur.checked) ? d.on : d.off;
    }

    // 该行始终显示：增强可见性关闭时整行置灰（复用 .setting-row.disabled 的样式），
    // 不再显隐，因此也不需要高度过渡
    const blurRow = document.getElementById('enhanced-blur-row');
    if (blurRow) {
      blurRow.classList.toggle('disabled', !active);
      if (active) {
        blurRow.removeAttribute('inert');
      } else {
        blurRow.setAttribute('inert', '');   // 置灰时同时移出可聚焦序列
      }
    }
  }

  // 背景关闭时，依赖背景的设置（选择图片 / 在线内容）整体置灰且不可交互
  // 背景边角晕影：只切换 body 上的标记，具体遮罩在 CSS 里换掉 radial 那层
  function applyBgVignette() {
    if (bgVignette) {
      document.body.removeAttribute('data-bg-vignette');
    } else {
      document.body.setAttribute('data-bg-vignette', 'off');
    }
    // 状态文案与开关同源，避免出现"开关关闭、文案打开"
    const status = document.getElementById('status-bg-vignette');
    if (status) {
      const d = currentDict();
      status.innerText = bgVignette ? d.on : d.off;
    }
  }

  // 换了壁纸（或重新开启背景）时把晕影复位为打开：
  // 新壁纸的明暗分布与上一张不同，沿用上次的关闭状态往往不合适。
  function resetBgVignette() {
    if (bgVignette) return;                 // 本来就是开的，不必动存储
    bgVignette = true;
    Storage.set('ntp_bg_vignette', true);
    if (toggleBgVignette) toggleBgVignette.checked = true;
    applyBgVignette();
  }

  // 背景渐显模糊：只切换 body 上的标记，具体动画在 CSS 里
  function applyBgFadeBlur() {
    if (bgFadeBlur) {
      document.body.setAttribute('data-bg-fade-blur', 'true');
    } else {
      document.body.removeAttribute('data-bg-fade-blur');
    }
    // 状态文案与开关同源，避免"开关关闭、文案打开"
    const status = document.getElementById('status-bg-fade-blur');
    if (status) {
      const d = currentDict();
      status.innerText = bgFadeBlur ? d.on : d.off;
    }
  }

  function applyBgDependentEnabled() {
    if (!bgDependentSettings) return;
    if (bgEnabled) {
      bgDependentSettings.classList.remove('disabled');
      bgDependentSettings.removeAttribute('inert');
    } else {
      bgDependentSettings.classList.add('disabled');
      bgDependentSettings.setAttribute('inert', '');
    }
  }

  // 当前壁纸对应的下拉选项值
  function getWallpaperSourceValue() {
    if (!customWallpaperData) return 'default';
    if (customWallpaperData.type === 'bing_daily') return 'bing';
    const url = customWallpaperData.url || '';
    if (url.startsWith('http://') || url.startsWith('https://')) return 'online';
    return 'local';
  }

  // 把下拉框设置到指定值，并把显示文本同步成当前语言
  function setWallpaperSourceValue(value) {
    if (!selectWallpaperSource) return;
    selectWallpaperSource.value = value;
    refreshCustomSelects();
    updateWallpaperFileRow();
  }

  // 下拉跟随当前壁纸：上游改动（上传、恢复默认、导入配置）都经这里回写
  function syncWallpaperSourceSelect() {
    setWallpaperSourceValue(getWallpaperSourceValue());
  }

  // 本地文件显示「选择文件」，自定义在线链接显示「编辑自定义链接」；
  // 默认与必应没有可操作的按钮
  // 上一次按钮行的显示形态，用于识别真实变化
  let lastWallpaperRowMode = null;

  function updateWallpaperFileRow() {
    if (!wallpaperFileRow) return;
    const value = selectWallpaperSource?.value || 'default';
    const showRow = (value === 'local' || value === 'online');
    const mode = value === 'local' ? 'local' : (value === 'online' ? 'online' : 'none');
    const applyNow = () => {
      wallpaperFileRow.style.display = showRow ? 'flex' : 'none';
      if (btnUploadWallpaper) {
        btnUploadWallpaper.style.display = value === 'local' ? '' : 'none';
      }
      if (btnEditOnlineWallpaper) {
        btnEditOnlineWallpaper.style.display = value === 'online' ? '' : 'none';
      }
    };
    // 形态没变（含连续调用的第二次）只同步样式，不重启动画
    if (mode === lastWallpaperRowMode) {
      applyNow();
      return;
    }
    lastWallpaperRowMode = mode;
    // 按钮行的显隐会改变面板高度，按页面切换的方式过渡
    animateSettingsPanelHeight(applyNow);
  }

  // 当前已经渲染到页面上的壁纸标识（类型 + 地址）。
  // 用它判断"这次渲染是否只是重复渲染同一张壁纸"，避免重播加载动画。
  let renderedWallpaperKey = null;

  const PREVIEW_FADE_MS = 200;

  // 旧内容先淡出再移除，避免切换时瞬间消失
  function fadeOutPreviewNode(node) {
    if (!node || !node.isConnected) return;
    node.style.opacity = '0';
    setTimeout(() => node.remove(), PREVIEW_FADE_MS);
  }

  // 让预览框里的旧图片与旧提示一起淡出
  function fadeOutPreviewContent() {
    if (!wallpaperPreviewContainer) return;
    wallpaperPreviewContainer.querySelectorAll('img, .wallpaper-preview-status').forEach(fadeOutPreviewNode);
  }

  // 预览框的状态提示（加载中 / 加载失败）
  function createPreviewStatus(text) {
    const wrap = document.createElement('div');
    wrap.className = 'wallpaper-preview-status';
    wrap.textContent = text;
    return wrap;
  }

  // 渲染预览：旧内容淡出，新图片先挂到文档再等就绪（脱离文档的图片不保证触发 load），
  // 就绪后淡入；就绪前用提示层盖住，避免露出上一张
  function renderPreview(url, alt) {
    if (!wallpaperPreviewContainer) return;
    fadeOutPreviewContent();

    const status = createPreviewStatus('LOADING');
    status.style.opacity = '0';
    const img = document.createElement('img');
    img.alt = alt || '背景预览';
    img.style.opacity = '0';
    img.addEventListener('load', () => {
      img.style.opacity = '1';
      fadeOutPreviewNode(status);
    });
    img.addEventListener('error', () => {
      img.remove();
      status.textContent = 'NOT FOUND';
      status.style.opacity = '1';
    });
    wallpaperPreviewContainer.appendChild(img);
    wallpaperPreviewContainer.appendChild(status);
    // 强制回流让初始透明度生效，再触发淡入
    void status.offsetWidth;
    status.style.opacity = '1';
    img.src = url;
  }

  function setPreviewLoading() {
    if (!wallpaperPreviewContainer) return;
    fadeOutPreviewContent();
    const status = createPreviewStatus('LOADING');
    status.style.opacity = '0';
    wallpaperPreviewContainer.appendChild(status);
    void status.offsetWidth;
    status.style.opacity = '1';
  }

  // 预览展示当前选择的壁纸，与背景是否启用无关
  function renderWallpaperPreview() {
    if (customWallpaperData) renderPreview(customWallpaperData.url, '背景预览');
    else renderPreview('img/background.webp', '默认背景预览');
  }

  // 根据自定义壁纸数据，渲染视频/图片背景到页面和预览容器
  // 渐入逻辑：先移除 .loaded 让元素透明 → 设置 src → 等就绪 → 加上 .loaded 触发 transition
  //
  // 渲染令牌：decode() 绑定的是调用时的图片，若连续切换壁纸，
  // 上一张图的回调可能先跑完并提前加上 .loaded（新图尚未就绪就显形、动画也被消耗）。
  // 每次渲染递增，过期回调直接丢弃。
  let wallpaperRenderToken = 0;
  // 就绪兜底：decode() / canplay 可能因网络问题长时间挂起，
  // 超时后强制显示，避免背景一直停在透明状态（此时不会有渐入动画，但至少可见）。
  const WALLPAPER_READY_TIMEOUT = 8000;
  function renderWallpaper() {
    // 每次进入背景设置页都会调用本函数。若壁纸没变，重设 src 会让浏览器重新加载
    // 并再播一遍"渐入 + 模糊"，所以要能识别出"还是同一张"并跳过重设。
    const wpKey = customWallpaperData
      ? (customWallpaperData.type || 'image') + '|' + (customWallpaperData.url || '')
      : 'default';
    // 元素当前是否真的显示着壁纸：关闭背景时会被 display:none，
    // 但壁纸标识不变，只比对 key 会把"重新开启背景"误判成重复渲染而跳过。
    const wallpaperShown =
      !!(bgImage && bgImage.style.display !== 'none' && bgImage.classList.contains('loaded')) ||
      !!(bgVideo && bgVideo.style.display !== 'none' && bgVideo.classList.contains('loaded'));
    const alreadyRendered = (wpKey === renderedWallpaperKey) && wallpaperShown;
    const isFirstRender = (renderedWallpaperKey === null);
    renderedWallpaperKey = wpKey;

    // 壁纸换了时同步「背景渐显模糊」：
    //   默认壁纸 → 关闭；本地文件 / 必应每日 / 自定义链接 → 打开。
    // 首次渲染只在存储里还没有用户选择时才套用，避免覆盖用户手动关掉的结果。
    const hasStoredChoice = localStorage.getItem('ntp_bg_fade_blur') !== null;
    if (!alreadyRendered && (!isFirstRender || !hasStoredChoice)) {
      const wantFadeBlur = !!customWallpaperData;
      if (bgFadeBlur !== wantFadeBlur) {
        bgFadeBlur = wantFadeBlur;
        Storage.set('ntp_bg_fade_blur', wantFadeBlur);
        if (toggleBgFadeBlur) toggleBgFadeBlur.checked = wantFadeBlur;
      }
      applyBgFadeBlur();
    }

    if (!customWallpaperData) {
      if (!alreadyRendered) {
        if (bgVideo) {
          bgVideo.style.display = 'none';
          bgVideo.classList.remove('loaded');
        }
        if (bgImage) {
          bgImage.classList.remove('loaded');
          bgImage.style.display = 'block';
          bgImage.src = 'img/background.webp';
          // 默认背景就绪后渐入（decode 保证已解码且异步完成，见文件内说明）
          const token = ++wallpaperRenderToken;
          // settled 保证就绪回调与超时回调只生效一次
          let settled = false;
          const showDefaultBg = () => {
            if (settled) return;
            settled = true;
            if (token !== wallpaperRenderToken) return;   // 期间又渲染过别的，丢弃
            void bgImage.offsetWidth;   // 强制样式计算，确保上面的 remove('loaded') 已生效
            bgImage.classList.add('loaded');
            bgOverlay?.classList.add('loaded');
          };
          setTimeout(showDefaultBg, WALLPAPER_READY_TIMEOUT);
          bgImage.decode().then(showDefaultBg).catch(showDefaultBg);
        }
      }
      syncWallpaperSourceSelect();
      applyLanguage(localStorage.getItem('liteStart_language') || 'auto');
      return;
    }

    syncWallpaperSourceSelect();

    if (customWallpaperData.type === 'video') {
      if (!alreadyRendered) {
        if (bgImage) {
          bgImage.style.display = 'none';
          bgImage.classList.remove('loaded');
        }
        if (bgVideo) {
          bgVideo.classList.remove('loaded');
          bgVideo.style.display = 'block';
          bgVideo.src = customWallpaperData.url;
          // 视频缓冲到可播放时再渐入
          const token = ++wallpaperRenderToken;
          // settled 保证就绪回调与超时回调只生效一次
          let settled = false;
          const onCanPlay = () => {
            if (settled) return;
            settled = true;
            if (token !== wallpaperRenderToken) return;   // 期间又渲染过别的，丢弃
            void bgVideo.offsetWidth;   // 强制样式计算，确保上面的 remove('loaded') 已生效
            bgVideo.classList.add('loaded');
            bgOverlay?.classList.add('loaded');
            bgVideo.removeEventListener('canplay', onCanPlay);
            bgVideo.play().catch(() => {});
          };
          setTimeout(onCanPlay, WALLPAPER_READY_TIMEOUT);
          bgVideo.addEventListener('canplay', onCanPlay);
        }
      }

      if (wallpaperPreviewContainer) {
        const previewVideo = document.createElement('video');
        previewVideo.src = customWallpaperData.url;
        previewVideo.autoplay = true;
        previewVideo.loop = true;
        previewVideo.muted = true;
        previewVideo.playsInline = true;
        previewVideo.style.cssText = 'width:100%;height:100%;object-fit:cover;';
        wallpaperPreviewContainer.textContent = '';
        wallpaperPreviewContainer.appendChild(previewVideo);
      }
    } else {
      if (!alreadyRendered) {
        if (bgVideo) {
          bgVideo.style.display = 'none';
          bgVideo.classList.remove('loaded');
        }
        if (bgImage) {
          bgImage.classList.remove('loaded');
          bgImage.style.display = 'block';
          bgImage.src = customWallpaperData.url;
          // 图片就绪后渐入。
          // 用 decode() 而非 load + complete 判断：
          //   · 必定异步完成，不会与上面的 remove('loaded') 落在同一帧
          //   · src 未变时浏览器不派发 load，decode() 仍会 resolve
          //   · 避免 complete / naturalWidth 读到上一张图的状态
          const token = ++wallpaperRenderToken;
          // settled 保证就绪回调与超时回调只生效一次
          let settled = false;
          const showWallpaper = () => {
            if (settled) return;
            settled = true;
            if (token !== wallpaperRenderToken) return;   // 期间又渲染过别的，丢弃
            void bgImage.offsetWidth;   // 强制样式计算，确保上面的 remove('loaded') 已生效
            bgImage.classList.add('loaded');
            bgOverlay?.classList.add('loaded');
          };
          setTimeout(showWallpaper, WALLPAPER_READY_TIMEOUT);
          bgImage.decode().then(showWallpaper).catch(showWallpaper);
        }
      }

    }
  }


  // ===== 初始化配置已迁移 =====
  // ===== 重置确认弹窗 =====
  const modalResetConfirm = document.getElementById('modal-reset-confirm');
  const btnResetCancel = document.getElementById('btn-reset-cancel');
  const btnResetConfirm = document.getElementById('btn-reset-confirm');
  const modalResetDone = document.getElementById('modal-reset-done');
  const btnResetDoneConfirm = document.getElementById('btn-reset-done-confirm');

  // 清除全部本地数据：ntp_* 设置项、界面语言（liteStart_*）以及 IndexedDB 中的自定义壁纸
  async function resetAllLocalData() {
    Object.keys(localStorage).forEach(key => {
      if (key.startsWith('ntp_') || key.startsWith('liteStart_')) {
        localStorage.removeItem(key);
      }
    });
    // 自定义壁纸的二进制存放在 IndexedDB，也需要一并清除；
    // 个别环境（无痕/存储受限）下 IndexedDB 可能长时间无响应，最多等待 1.5s，避免卡住完成弹窗
    await Promise.race([
      WallpaperDB.remove().catch(() => {}),
      new Promise(resolve => setTimeout(resolve, 1500))
    ]);
  }

  // 取消按钮
  btnResetCancel?.addEventListener('click', () => {
    modalResetConfirm?.classList.remove('active');
  });

  // 确定按钮 - 执行重置（包含界面语言，刷新后回到“跟随设备”）
  btnResetConfirm?.addEventListener('click', async () => {
    await resetAllLocalData();
    modalResetConfirm?.classList.remove('active');
    // 显示完成弹窗
    modalResetDone?.classList.add('active');
  });

  // 点击遮罩关闭重置确认弹窗
  modalResetConfirm?.addEventListener('click', (e) => {
    if (e.target === modalResetConfirm) {
      modalResetConfirm.classList.remove('active');
    }
  });

  // 完成弹窗 - 刷新页面
  btnResetDoneConfirm?.addEventListener('click', () => {
    window.location.reload();
  });

  // 点击遮罩刷新
  modalResetDone?.addEventListener('click', (e) => {
    if (e.target === modalResetDone) {
      window.location.reload();
    }
  });
  // ===== 管理配置文件 - 选择操作（导出 / 恢复 / 初始化）=====
  const modalManageProfiles = document.getElementById('modal-manage-profiles');
  const btnManageProfiles = document.getElementById('btn-manage-profiles');
  const btnManageProfilesCancel = document.getElementById('btn-manage-profiles-cancel');
  const btnManageProfilesNext = document.getElementById('btn-manage-profiles-next');
  const manageProfileOptions = document.getElementById('manage-profile-options');
  const fileInputRestore = document.getElementById('file-input-restore');
  const modalRestoreWarn = document.getElementById('modal-restore-warn');
  const btnRestoreWarnCancel = document.getElementById('btn-restore-warn-cancel');
  const btnRestoreWarnContinue = document.getElementById('btn-restore-warn-continue');
  const modalRestoreDone = document.getElementById('modal-restore-done');
  const btnRestoreDoneConfirm = document.getElementById('btn-restore-done-confirm');

  // 恢复完成弹窗：点击“立即刷新”或遮罩后刷新页面以应用新设置
  btnRestoreDoneConfirm?.addEventListener('click', () => {
    window.location.reload();
  });
  modalRestoreDone?.addEventListener('click', (e) => {
    if (e.target === modalRestoreDone) window.location.reload();
  });

  // 需要备份的设置项（由 Storage 写入的 JSON 值）
  const CONFIG_KEYS = [
    'ntp_engine',
    'ntp_layout',
    'ntp_quicklinks',
    'ntp_quicklink_position',
    'ntp_quicklinks_list',
    'ntp_online_wallpaper_url',
    'ntp_history_enabled',
    'ntp_search_history',
    'ntp_show_time_capsule',
    'ntp_show_menu_button',
    'ntp_show_logo',
    'ntp_show_add_button',
    'ntp_show_quicklinks',
    'ntp_theme',
    'ntp_search_visible',
    'ntp_force_bing_cn',
    'ntp_bg_enabled',
    'ntp_enhanced_visibility',
    'ntp_enhanced_blur',
    'ntp_bg_vignette',
    'ntp_bg_fade_blur',
    'ntp_custom_engine_config',
    'ntp_custom_wallpaper'
  ];
  // 以纯字符串保存的设置项（界面语言），导入时需要原样写回
  const RAW_CONFIG_KEYS = ['liteStart_language'];
  // 恢复配置时只接受 Litestart 自己的键，避免写入无关数据
  const RESTORABLE_KEY_PATTERN = /^(ntp_|liteStart_)/;

  const DEFAULT_MANAGE_ACTION = 'export';
  let manageSelectedAction = DEFAULT_MANAGE_ACTION;

  // 切换操作列表选中项：同步 aria-selected、tabindex 以及左侧指示条
  function setManageSelectedAction(action) {
    if (!action) return;
    manageSelectedAction = action;
    manageProfileOptions?.querySelectorAll('.manage-option').forEach(option => {
      const selected = option.dataset.action === action;
      option.setAttribute('aria-selected', selected ? 'true' : 'false');
      option.tabIndex = selected ? 0 : -1;
    });
    // 选中「初始化」（不可撤回）时，把「下一步」换成与"重置 Litestart"同款的危险按钮样式
    if (btnManageProfilesNext) {
      const isDanger = action === 'init';
      btnManageProfilesNext.classList.toggle('btn-danger', isDanger);
      btnManageProfilesNext.classList.toggle('btn-primary', !isDanger);
    }
  }

  function closeManageProfilesModal() {
    modalManageProfiles?.classList.remove('active');
  }

  // 打开管理配置文件弹窗（默认选中“导出配置”）
  btnManageProfiles?.addEventListener('click', () => {
    popoverWaffle?.classList.remove('active'); // 关闭菜单
    setManageSelectedAction(DEFAULT_MANAGE_ACTION);
    modalManageProfiles?.classList.add('active');
  });

  // 取消按钮
  btnManageProfilesCancel?.addEventListener('click', closeManageProfilesModal);

  // 鼠标点击选择操作项
  manageProfileOptions?.addEventListener('click', (e) => {
    const option = e.target.closest('.manage-option');
    if (option) setManageSelectedAction(option.dataset.action);
  });

  // 键盘操作：方向键切换、回车/空格直接进入下一步
  manageProfileOptions?.addEventListener('keydown', (e) => {
    const options = Array.from(manageProfileOptions.querySelectorAll('.manage-option'));
    const current = e.target.closest?.('.manage-option');
    const index = options.indexOf(current);
    if (index === -1) return;

    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      runManageProfilesAction();
      return;
    }

    let nextIndex;
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      nextIndex = (index + 1) % options.length;
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      nextIndex = (index - 1 + options.length) % options.length;
    } else if (e.key === 'Home') {
      nextIndex = 0;
    } else if (e.key === 'End') {
      nextIndex = options.length - 1;
    } else {
      return;
    }

    e.preventDefault();
    setManageSelectedAction(options[nextIndex].dataset.action);
    options[nextIndex].focus();
  });

  // 下一步：按所选操作执行
  btnManageProfilesNext?.addEventListener('click', runManageProfilesAction);

  function runManageProfilesAction() {
    if (manageSelectedAction === 'import') {
      // 先弹风险提示，用户点「继续」才打开文件选择器
      modalRestoreWarn?.classList.add('active');
    } else if (manageSelectedAction === 'init') {
      closeManageProfilesModal();
      // 初始化需要二次确认，沿用原有确认弹窗
      modalResetConfirm?.classList.add('active');
    } else {
      exportConfigFile();
      closeManageProfilesModal();
    }
  }

  // 风险提示的两个按钮：取消则什么都不做；继续才去选文件
  btnRestoreWarnCancel?.addEventListener('click', () => {
    modalRestoreWarn?.classList.remove('active');
  });

  btnRestoreWarnContinue?.addEventListener('click', () => {
    modalRestoreWarn?.classList.remove('active');
    closeManageProfilesModal();
    // 由这次点击同步触发，保证能唤起文件选择框
    fileInputRestore?.click();
  });

  // 导出配置
  function exportConfigFile() {
    const data = {};
    CONFIG_KEYS.forEach(key => {
      const val = localStorage.getItem(key);
      if (val === null) return;
      try {
        data[key] = JSON.parse(val);
      } catch (e) {
        data[key] = val;
      }
    });
    RAW_CONFIG_KEYS.forEach(key => {
      const val = localStorage.getItem(key);
      if (val !== null) data[key] = val; // 语言等纯字符串设置原样导出
    });

    const jsonStr = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    const dateStr = new Date().toISOString().slice(0, 10);
    a.download = `Litestart_Backup_${dateStr}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  // 文件选择后的处理（恢复配置）
  fileInputRestore?.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const data = JSON.parse(event.target.result);
        // 检查是否是有效的配置文件（至少包含一个可恢复的设置项）
        if (!data || typeof data !== 'object' || Array.isArray(data)) {
          throw new Error('无效的配置文件格式');
        }

        const keys = Object.keys(data).filter(key => RESTORABLE_KEY_PATTERN.test(key));
        if (keys.length === 0) {
          throw new Error('配置文件中没有可恢复的设置');
        }

        // 写入 localStorage
        keys.forEach(key => {
          if (RAW_CONFIG_KEYS.includes(key)) {
            localStorage.setItem(key, String(data[key]));
          } else {
            localStorage.setItem(key, JSON.stringify(data[key]));
          }
        });

        // 恢复完成：弹出应用内提示弹窗（由用户点击“立即刷新”后再刷新，不使用浏览器原生提示）
        modalRestoreDone?.classList.add('active');
      } catch (err) {
        alert('配置文件格式错误，请确保选择的是正确的 JSON 备份文件。');
        console.error('导入配置失败:', err);
      }
    };
    reader.readAsText(file);

    // 重置文件输入，允许重复选择同一文件
    fileInputRestore.value = '';
  });
  
  // 初始化：异步加载壁纸（可能需要从 IndexedDB 取 Blob），再渲染
  (async () => {
    customWallpaperData = await loadWallpaperData();
    await loadLocalWallpaperBackup();
    applyBackgroundState();
    ensureBingDailyFresh();
  })();

  // 背景开关同步响应
  toggleBgSwitch?.addEventListener('change', (e) => {
    bgEnabled = e.target.checked;
    Storage.set('ntp_bg_enabled', bgEnabled);
    applyBackgroundState();
    if (bgEnabled) ensureBingDailyFresh();
    applyLanguage(localStorage.getItem('liteStart_language') || 'auto');
  });

  toggleBgModalSwitch?.addEventListener('change', (e) => {
    bgEnabled = e.target.checked;
    Storage.set('ntp_bg_enabled', bgEnabled);
    if (bgEnabled) resetBgVignette();     // 重新开启背景时，晕影复位为打开
    applyBackgroundState();
    if (bgEnabled) ensureBingDailyFresh();
    applyLanguage(localStorage.getItem('liteStart_language') || 'auto');
  });

  toggleEnhancedVisibility?.addEventListener('change', (e) => {
    enhancedVisibility = e.target.checked;
    Storage.set('ntp_enhanced_visibility', enhancedVisibility);
    applyEnhancedVisibility();
    applyLanguage(localStorage.getItem('liteStart_language') || 'auto');
  });

  toggleEnhancedBlur?.addEventListener('change', (e) => {
    enhancedBlur = e.target.checked;
    Storage.set('ntp_enhanced_blur', enhancedBlur);
    applyEnhancedVisibility();
    applyLanguage(localStorage.getItem('liteStart_language') || 'auto');
  });

  toggleBgVignette?.addEventListener('change', (e) => {
    bgVignette = e.target.checked;
    Storage.set('ntp_bg_vignette', bgVignette);
    applyBgVignette();
  });

  toggleBgFadeBlur?.addEventListener('change', (e) => {
    bgFadeBlur = e.target.checked;
    Storage.set('ntp_bg_fade_blur', bgFadeBlur);
    applyBgFadeBlur();
  });

  // 背景设置：在设置面板内切换到二级页（不再弹窗）
  btnOpenBgModal?.addEventListener('click', () => {
    showSettingsPage('bg');
    renderWallpaper();
    applyLanguage(localStorage.getItem('liteStart_language') || 'auto');
  });

  // 背景二级页标题栏的返回按钮：回到主设置页
  btnCloseWallpaperModal?.addEventListener('click', () => {
    showSettingsPage('main');
  });

  // 正在等待文件选择结果；取消时把下拉退回当前实际来源
  let localPickPending = false;

  function startLocalFilePick() {
    if (!inputWallpaperFile) return;
    localPickPending = true;
    inputWallpaperFile.click();
  }

  function cancelLocalFilePick() {
    if (!localPickPending) return;
    localPickPending = false;
    // 壁纸未变，下拉与预览都回到当前实际来源
    syncWallpaperSourceSelect();
    renderWallpaperPreview();
  }

  // 文件选择框关闭后窗口重新获得焦点；此时 change 尚未触发即视为取消
  window.addEventListener('focus', () => {
    if (!localPickPending) return;
    setTimeout(cancelLocalFilePick, 350);
  });

  btnUploadWallpaper?.addEventListener('click', startLocalFilePick);
  // 较新的浏览器会直接派发 cancel 事件
  inputWallpaperFile?.addEventListener('cancel', cancelLocalFilePick);

  inputWallpaperFile?.addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (!file) {
      cancelLocalFilePick();
      return;
    }
    localPickPending = false;

    const isVideo = file.type.startsWith('video/');

    try {
      // 图片先压缩，视频直接用原文件（不做压缩）
      let blob = file;
      if (!isVideo) {
        blob = await compressImage(file, { maxWidth: 2560, quality: 0.85 });
      }

      const ok = await saveWallpaperData({ type: isVideo ? 'video' : 'image', blob });
      if (ok) {
        // 留存一份，供切到其它来源后切回
        localWallpaperBlob = blob;
        localWallpaperType = isVideo ? 'video' : 'image';
        Storage.set(LOCAL_WALLPAPER_TYPE_KEY, localWallpaperType);
        WallpaperDB.save(blob, LOCAL_WALLPAPER_KEY).catch(() => {});
        // 释放旧 blob URL，生成新的 blob URL 供当前会话渲染
        revokeBlobUrl(customWallpaperData?.url);
        customWallpaperData = {
          type: isVideo ? 'video' : 'image',
          url: URL.createObjectURL(blob)
        };
        resetBgVignette();
        applyBackgroundState();
      } else {
        alert('壁纸保存失败，请重试。');
      }
    } catch (err) {
      console.error('壁纸处理失败:', err);
      alert('壁纸处理失败，请重试或选择其他图片。');
    }
  });

  // 壁纸来源下拉：切换即切换壁纸来源
  selectWallpaperSource?.addEventListener('change', async () => {
    const value = selectWallpaperSource.value;
    // 新壁纸就绪前先进入加载态，不保留上一张预览
    setPreviewLoading();
    if (value === 'default') {
      // 选中默认即清掉当前壁纸；界面先更新，存储清理随后进行
      const hadWallpaper = !!customWallpaperData;
      if (hadWallpaper) {
        revokeBlobUrl(customWallpaperData.url);
        customWallpaperData = null;
      }
      updateWallpaperFileRow();
      if (hadWallpaper) {
        // 先让界面回到默认壁纸，存储清理随后进行
        resetBgVignette();
        applyBackgroundState();
        await saveWallpaperData(null);
      }
    } else if (value === 'local') {
      updateWallpaperFileRow();
      if (getWallpaperSourceValue() === 'local') {
        // 当前已经是本地壁纸，无需处理
      } else if (localWallpaperBlob) {
        // 保存过本地壁纸：直接应用，不再要求重新选择
        await applyLocalWallpaper();
      } else {
        startLocalFilePick();
      }
    } else if (value === 'online') {
      updateWallpaperFileRow();
      // 保存过链接就直接应用，不再要求重新填写
      const savedUrl = getSavedOnlineUrl();
      if (savedUrl) {
        await applyOnlineWallpaperUrl(savedUrl);
      } else {
        openOnlineModal();
      }
    } else if (value === 'bing') {
      updateWallpaperFileRow();
      const ok = await applyBingWallpaper();
      if (!ok) {
        syncWallpaperSourceSelect();
        renderWallpaperPreview();
      }
    }
  });


  // ===== 在线壁纸功能 =====
  // 最近一次设置的自定义链接。与当前壁纸分开保存，切换到其它来源后仍可复用
  const ONLINE_WALLPAPER_KEY = 'ntp_online_wallpaper_url';
  function getSavedOnlineUrl() {
    const v = Storage.get(ONLINE_WALLPAPER_KEY, '');
    return typeof v === 'string' ? v : '';
  }

  // 壁纸切换后的统一收尾：确保背景开启，并刷新渲染与文案
  // 注：这里不自动改动「增强元素可见性」等其它附加设置，任何来源的壁纸都只切壁纸本身。
  function commitWallpaperAsActive() {
    if (!bgEnabled) {
      bgEnabled = true;
      Storage.set('ntp_bg_enabled', true);
    }
    resetBgVignette();
    applyBackgroundState();
    if (toggleBgSwitch) toggleBgSwitch.checked = true;
    if (toggleBgModalSwitch) toggleBgModalSwitch.checked = true;
    applyLanguage(localStorage.getItem('liteStart_language') || 'auto');
  }

  // 应用保留的本地壁纸。blob URL 每次重新生成，避免与已释放的地址冲突
  async function applyLocalWallpaper() {
    if (!localWallpaperBlob) return;
    const type = localWallpaperType || 'image';
    revokeBlobUrl(customWallpaperData?.url);
    customWallpaperData = { type: type, url: URL.createObjectURL(localWallpaperBlob) };
    commitWallpaperAsActive();
    await saveWallpaperData({ type: type, blob: localWallpaperBlob });
  }

  // 应用一个自定义链接作为壁纸
  async function applyOnlineWallpaperUrl(url) {
    const isVideo = /\.(mp4|webm|ogg|mov|avi|mkv)$/i.test(url);
    revokeBlobUrl(customWallpaperData?.url);
    customWallpaperData = { type: isVideo ? 'video' : 'image', url: url };
    commitWallpaperAsActive();
    await saveWallpaperData(customWallpaperData);
  }

  const modalOnlineWallpaper = document.getElementById('modal-online-wallpaper');
  const onlineWallpaperForm = document.getElementById('online-wallpaper-form');
  const inputOnlineUrl = document.getElementById('input-online-url');
  const containerOnlineUrl = document.getElementById('container-online-url');
  const tipOnlineUrl = document.getElementById('tip-online-url');
  const btnOnlineCancel = document.getElementById('btn-online-cancel');

  // 必应每日壁纸：下拉选中该项时执行，失败返回 false 交由调用方回退选项
  async function applyBingWallpaper() {
    const result = await fetchBingWallpaper();
    if (!result) {
      alert('获取必应壁纸失败，请检查网络。');
      return false;
    }
    revokeBlobUrl(customWallpaperData?.url);
    customWallpaperData = {
      type: 'bing_daily',
      url: result.url,
      title: result.title,
      copyright: result.copyright,
      fetchDate: getTodayStr()
    };
    saveWallpaperData(customWallpaperData);
    // 与本地/在线壁纸走相同的收尾流程，不额外改动「增强元素可见性」等设置
    commitWallpaperAsActive();
    return true;
  }

  // 在线壁纸弹窗：由下拉「在线壁纸」触发打开，取消时要把下拉退回原选项
  let wallpaperSourceBeforeOnline = null;

  // 自定义URL - 打开弹窗
  function openOnlineModal() {
    // 如果当前正在使用自定义链接背景（非 Bing、非本地 data URL），预填当前链接
    const curUrl = customWallpaperData?.url || '';
    // 排除必应壁纸 + 排除本地上传的 data: URL，剩下的 http(s) 链接即为自定义链接
    const isCustomUrl = customWallpaperData?.type !== 'bing_daily' &&
      (curUrl.startsWith('http://') || curUrl.startsWith('https://'));
    wallpaperSourceBeforeOnline = getWallpaperSourceValue();
    inputOnlineUrl.value = isCustomUrl ? curUrl : getSavedOnlineUrl();
    containerOnlineUrl?.classList.remove('error');
    tipOnlineUrl?.classList.remove('active');
    modalOnlineWallpaper?.classList.add('active');
    setTimeout(() => {
      inputOnlineUrl?.focus();
      // 关于页「更新」菜单是 fixed 定位，弹窗叠上来后需收起，避免残留在上层
      window.dispatchEvent(new Event(HIDE_UPDATE_LAYERS_EVT));
    }, 50);
  }

  // 关闭自定义URL弹窗
  function closeOnlineModal() {
    modalOnlineWallpaper?.classList.remove('active');
    containerOnlineUrl?.classList.remove('error');
    tipOnlineUrl?.classList.remove('active');
    if (wallpaperSourceBeforeOnline !== null) {
      wallpaperSourceBeforeOnline = null;
      syncWallpaperSourceSelect();
      renderWallpaperPreview();
    }
  }

  btnEditOnlineWallpaper?.addEventListener('click', () => {
    openOnlineModal();
  });

  btnOnlineCancel?.addEventListener('click', closeOnlineModal);

  // 表单提交
  onlineWallpaperForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  // URL 原样保存；预览改用 DOM 赋值，不再拼进 HTML
  // 注意用 let：下面缺协议时会重新赋值（const 会抛 TypeError 让整个提交静默中断）
  let url = inputOnlineUrl.value.trim();
  containerOnlineUrl?.classList.remove('error');
  tipOnlineUrl?.classList.remove('active');

  if (!url) {
    containerOnlineUrl?.classList.add('error');
    tipOnlineUrl?.classList.add('active');
    inputOnlineUrl?.focus();
    return;
  }

  // 省略协议时补上 http://（与快速链接同一套规则）：
  // 形如 "example.com/a.jpg" 也能直接用；带冒号的（WeChat://、about:blank 等）原样保留，
  // 随后仍会被下面的 http(s) 白名单拦掉
  if (!/^[a-z][a-z0-9+.-]*:/i.test(url)) {
    url = 'http://' + url;
  }

  // 只允许 http(s)：该值最终赋给 <img>/<video> 的 src，
  // 限定协议可以避免填进其它协议后静默加载失败
  if (!/^https?:\/\//i.test(url)) {
    containerOnlineUrl?.classList.add('error');
    tipOnlineUrl?.classList.add('active');
    inputOnlineUrl?.focus();
    return;
  }

  // 简单URL格式校验
  try {
    new URL(url);
  } catch (_) {
    containerOnlineUrl?.classList.add('error');
    tipOnlineUrl?.classList.add('active');
    inputOnlineUrl?.focus();
    return;
  }

  // 判断类型（根据文件扩展名）
  const isVideo = /\.(mp4|webm|ogg|mov|avi|mkv)$/i.test(url);
  revokeBlobUrl(customWallpaperData?.url);
  customWallpaperData = { type: isVideo ? 'video' : 'image', url: url };
  Storage.set(ONLINE_WALLPAPER_KEY, url);
  saveWallpaperData(customWallpaperData);
  if (!bgEnabled) {
    bgEnabled = true;
    Storage.set('ntp_bg_enabled', true);
  }
  resetBgVignette();
  applyBackgroundState();
  if (toggleBgSwitch) toggleBgSwitch.checked = true;
  if (toggleBgModalSwitch) toggleBgModalSwitch.checked = true;
  applyLanguage(localStorage.getItem('liteStart_language') || 'auto');
  closeOnlineModal();
});

// 输入时清除错误状态
inputOnlineUrl?.addEventListener('input', () => {
  containerOnlineUrl?.classList.remove('error');
  tipOnlineUrl?.classList.remove('active');
});


  // 布局切换-------------
  // 只负责搜索框的"悬挂 / 居中"；是否显示由"显示搜索框"开关接管
  function applyLayout(layoutVal) {
    if (!layoutVal || layoutVal === 'hidden') return;

    // 切换布局时恢复搜索栏显示
    setLayoutAttr(layoutVal);
    Storage.set('ntp_layout', layoutVal);

    // 悬挂与否决定"中间"选项的可用性，布局变化后立即重算
    applyQuicklinkPosition();

    if (!searchVisible) {
      searchVisible = true;
      Storage.set('ntp_search_visible', true);
    }
    applySearchVisibility();
    applyLogoSwitchAvailability();
    refreshCustomSelects();
    syncLayoutPresetSelection();
  }

  // 把某条下拉整体置灰（该设置已经没有意义时）
  function setSelectDisabled(selectId, disabled) {
    const display = document.querySelector('.custom-select-display[data-for="' + selectId + '"]');
    if (display) display.classList.toggle('disabled', disabled);
    if (!disabled) return;
    // 收起已展开的面板，避免留下无效浮层
    display?.classList.remove('active');
    document.querySelector('.custom-select-dropdown[data-for-select="' + selectId + '"]')?.remove();
  }

  // 同步"开关关掉后就没意义"的下拉与开关：
  // 显示搜索框关闭 → 搜索框位置不可用；显示快速链接关闭 → 位置/样式下拉与"添加按钮"开关都不可用
  function syncLayoutSelectAvailability() {
    setSelectDisabled('select-layout', !searchVisible);
    setSelectDisabled('select-quicklink-position', !showQuicklinks);
    setSelectDisabled('select-quicklinks', !showQuicklinks);

    // 快速链接整体都关了，"在快速链接区域显示添加按钮"也就没有意义
    const addButtonRow = toggleAddButtonSwitch ? toggleAddButtonSwitch.closest('.setting-row') : null;
    if (addButtonRow) addButtonRow.classList.toggle('disabled', !showQuicklinks);
  }

  // 快速链接位置：'bottom' 时固定到页面底部。该模式不支持多行，
  // 因此只把"多行"这一项禁掉，仍允许在一行与关闭之间切换
  // 'middle'（垂直居中）只在悬挂布局下可用：其它布局按默认处理，
  // 存储值保留，切回悬挂时还原（与"底部模式暂存多行"同一套处理）
  function applyQuicklinkPosition() {
    const isHanging = (document.body.getAttribute('data-layout') || 'focused') === 'inspirational';
    const effective = (quicklinkPosition === 'middle' && !isHanging) ? 'auto' : quicklinkPosition;
    const pos = (effective === 'bottom' || effective === 'middle') ? effective : 'auto';
    document.body.setAttribute('data-quicklink-position', pos);

    // "中间"选项只在悬挂布局下可选
    const middleOption = selectQuicklinkPosition ? selectQuicklinkPosition.querySelector('option[value="middle"]') : null;
    if (middleOption) middleOption.disabled = !isHanging;

    let savedRow = Storage.get('ntp_quicklinks', '1');
    // 旧数据里 '0' 曾表示"关闭"，现在关闭由显示开关承担
    if (savedRow === '0') savedRow = '1';
    // 底部模式下若之前存的是"多行"，按一行处理（存储值保留，切回默认时还原）
    const effectiveRow = (effective === 'bottom' && savedRow === '2') ? '1' : savedRow;

    const multiRowOption = selectQuicklinks ? selectQuicklinks.querySelector('option[value="2"]') : null;
    if (multiRowOption) multiRowOption.disabled = effective === 'bottom';

    // 不显示时用 rows="0" 表达（复用既有的隐藏逻辑）
    if (quicklinksElem) {
      quicklinksElem.setAttribute('rows', showQuicklinks ? effectiveRow : '0');
    }
    // 首帧占位到此交给真实内容决定高度
    document.documentElement.removeAttribute('data-quicklinks-lines');
    if (selectQuicklinks) {
      selectQuicklinks.value = effectiveRow;
    }
    // 把当前位置写回下拉（首次加载时靠这句恢复上次的选择）；
    // 非悬挂布局下"中间"按默认展示，存储值不动
    if (selectQuicklinkPosition) {
      selectQuicklinkPosition.value = effective;
    }
    // 禁用状态变了，已建好的下拉丢掉，下次展开时按新状态重建
    document.querySelector('.custom-select-dropdown[data-for-select="select-quicklinks"]')?.remove();
    document.querySelector('.custom-select-dropdown[data-for-select="select-quicklink-position"]')?.remove();
    refreshCustomSelects();
    syncLayoutSelectAvailability();
  }

  // 应用搜索栏可见性（使用 visibility，保留网格占位，避免其他元素位移）
  function applySearchVisibility() {
    if (searchVisible) {
      document.documentElement.removeAttribute('data-search-hidden');
    } else {
      document.documentElement.setAttribute('data-search-hidden', 'true');
    }
    // 下拉只表示"悬挂 / 居中"，是否显示由开关承担
    if (selectLayout) {
      selectLayout.value = document.body.getAttribute('data-layout') || 'focused';
    }
    if (toggleSearchSwitch) toggleSearchSwitch.checked = searchVisible;
    refreshCustomSelects();
    syncLayoutSelectAvailability();
    // 搜索框显隐会连带动到 Logo 的显示，以及"显示 Logo"开关的可用性
    applyLogoVisibility();
    applyLogoSwitchAvailability();
  }

  // 应用标题（Logo）显示。
  // 搜索框关闭时 Logo 也一并隐藏，但不去改 showLogo 本身：
  // 这样重新打开搜索框时 Logo 会立刻回来，"显示 Logo"开关的状态也保持不变
  function applyLogoVisibility() {
    if (logoContainer) {
      logoContainer.style.display = (showLogo && searchVisible) ? '' : 'none';
    }
    // 首帧预置到此失效，显隐改由内联样式控制
    document.documentElement.removeAttribute('data-logo-hidden');
  }

  // 两种情况下"显示 Logo"开关都没有意义，置灰禁用（但不去改它的开关值）：
  // 1) "悬挂"布局下 Logo 本来就不显示；2) 搜索框关闭时 Logo 也一并隐藏
  function applyLogoSwitchAvailability() {
    const logoRow = toggleLogoSwitch ? toggleLogoSwitch.closest('.setting-row') : null;
    if (!logoRow) return;
    const isHanging = document.body.getAttribute('data-layout') === 'inspirational';
    logoRow.classList.toggle('disabled', isHanging || !searchVisible);
  }

  // 旧数据兼容：早期版本把"关闭搜索框"存成了 ntp_layout = 'hidden'
  const initialLayout = savedLayout === 'hidden' ? 'focused' : savedLayout;
  if (selectLayout) selectLayout.value = initialLayout;

  // 初始化搜索栏可见性与标题显示
  applySearchVisibility();
  applyLogoVisibility();
  applyLogoSwitchAvailability();


  // 三个预设各自要改的项；没列出来的项保持用户当前设置不动
  // layout 为 null 表示"搜索框位置不动"
  const LAYOUT_PRESETS = {
    inspirational: {
      layout: 'inspirational',
      searchVisible: true,
      showLogo: false,
      quicklinkPosition: 'middle',
      showQuicklinks: true
    },
    focused: {
      layout: 'focused',
      searchVisible: true,
      showLogo: true,
      quicklinkPosition: 'auto',
      showQuicklinks: true
    },
    appreciate: {
      layout: null,
      searchVisible: false,
      showLogo: false,
      quicklinkPosition: 'bottom',
      showQuicklinks: true
    }
  };

  // 应用预设
  function applyLayoutPreset(name) {
    const preset = LAYOUT_PRESETS[name];
    if (!preset) return;

    // 搜索框位置（内部会写 data-layout 与 ntp_layout）；为 null 时保持不动
    if (preset.layout) applyLayout(preset.layout);

    // 显示搜索框
    searchVisible = preset.searchVisible;
    Storage.set('ntp_search_visible', searchVisible);

    // 显示 Logo
    showLogo = preset.showLogo;
    Storage.set('ntp_show_logo', showLogo);
    applyLogoVisibility();
    if (toggleLogoSwitch) toggleLogoSwitch.checked = showLogo;

    // 显示快速链接
    showQuicklinks = preset.showQuicklinks;
    Storage.set('ntp_show_quicklinks', showQuicklinks);
    if (toggleQuicklinksSwitch) toggleQuicklinksSwitch.checked = showQuicklinks;

    // 快速链接位置
    quicklinkPosition = preset.quicklinkPosition;
    Storage.set('ntp_quicklink_position', quicklinkPosition);
    applyQuicklinkPosition();
    renderQuicklinks(true);

    // 同步界面（开关勾选、状态文字、下拉文本）
    applySearchVisibility();
    applyLanguage(localStorage.getItem('liteStart_language') || 'auto');

    // 按当前配置重新判定选中态
    syncLayoutPresetSelection();
  }

  // 当前配置是否与某个预设完全一致（只比预设里列出的项）
  // 注意 preset.layout 为 null 表示"该项不参与比较"
  function matchLayoutPreset() {
    const layout = document.body.getAttribute('data-layout') || 'focused';
    const names = Object.keys(LAYOUT_PRESETS);
    for (let i = 0; i < names.length; i++) {
      const preset = LAYOUT_PRESETS[names[i]];
      if (preset.layout && preset.layout !== layout) continue;
      if (preset.searchVisible !== searchVisible) continue;
      if (preset.showLogo !== showLogo) continue;
      if (preset.quicklinkPosition !== quicklinkPosition) continue;
      if (preset.showQuicklinks !== showQuicklinks) continue;
      return names[i];
    }
    return null;
  }

  // 刷新预设卡片选中态：与某个预设完全一致才选中它，都不一致则三个都不选
  function syncLayoutPresetSelection() {
    const matched = matchLayoutPreset();
    document.querySelectorAll('.preset-card').forEach(card => {
      card.classList.toggle('active', card.dataset.layoutVal === matched);
    });

    // 滑块位置：交给 .layout-presets::before 做位移动画；三个都不匹配时隐藏滑块
    const presetsEl = document.querySelector('.layout-presets');
    if (presetsEl) {
      const idx = ['inspirational', 'focused', 'appreciate'].indexOf(matched);
      presetsEl.classList.remove('idx-0', 'idx-1', 'idx-2', 'no-thumb');
      presetsEl.classList.add(idx < 0 ? 'no-thumb' : 'idx-' + idx);
    }
  }

  // 初始化：按当前配置决定选中态（可能一个都不选）
  syncLayoutPresetSelection();

  // 布局卡片点击监听
  document.querySelectorAll('.preset-card').forEach(card => {
    card.addEventListener('click', () => {
      applyLayoutPreset(card.dataset.layoutVal);
    });
  });

  // 弹窗内「搜索框位置」下拉框监听
  selectLayout?.addEventListener('change', (e) => {
    applyLayout(e.target.value);
  });

  // 关闭弹窗内所有已展开的自定义下拉
  function closeLayoutDropdowns() {
    document.querySelectorAll('.custom-select-dropdown.active').forEach(dd => {
      dd.classList.remove('active');
      clearDropdownInlineStyles(dd);
      if (dd._display) dd._display.classList.remove('active');
    });
  }

  // 布局二级页返回：回到主设置页
  function closeLayoutModal() {
    showSettingsPage('main');
    closeLayoutDropdowns();
  }

  // 布局设置：在设置面板内切换到二级页（不再弹窗）
  btnOpenLayoutModal?.addEventListener('click', () => {
    closeLayoutDropdowns();
    // 同步为当前实际布局
    if (selectLayout) {
      selectLayout.value = searchVisible
        ? (document.body.getAttribute('data-layout') || 'focused')
        : 'hidden';
    }
    showSettingsPage('layout');
    applyLanguage(localStorage.getItem('liteStart_language') || 'auto');
  });

  btnCloseLayoutModal?.addEventListener('click', closeLayoutModal);

  // 背景/布局是设置面板内的二级页，不需要遮罩点击关闭


  // 设置面板切换监听
  selectEngine?.addEventListener('change', (e) => {
    const val = e.target.value;
    // 切换前的选择。下面马上会写存储，须在此之前读取
    const previousEngine = Storage.get('ntp_engine', 'bing');
    setLogo(val);
    updateEngineEditButton(val);
    updateForceBingCNRow(val);
    Storage.set('ntp_engine', val);
    applySearchPlaceholder();
    if (val === 'custom' && (!customEngineConfig.url || customEngineConfig.url === 'https://duckduckgo.com/?q=%s')) {
      // 配置未填好时弹窗会拦住；先记住当前选择，取消时回退
      engineBeforeCustom = previousEngine === 'custom' ? 'bing' : previousEngine;
      openCustomEngineModal();
    }
  });

  toggleForceBingCN?.addEventListener('change', (e) => {
    forceBingCN = e.target.checked;
    Storage.set('ntp_force_bing_cn', forceBingCN);
    applyLanguage(localStorage.getItem('liteStart_language') || 'auto'); 
  });

  btnEditEngine?.addEventListener('click', () => {
    openCustomEngineModal(true);
  });

  toggleHistorySwitch?.addEventListener('change', (e) => {
    historyEnabled = e.target.checked;
    Storage.set('ntp_history_enabled', historyEnabled);
    applyLanguage(localStorage.getItem('liteStart_language') || 'auto');
    fetchAndShowSuggestions();
  });

  selectQuicklinks?.addEventListener('change', (e) => {
    let val = e.target.value;
    // "底部"模式下不支持多行（该选项本身已禁用，这里再兜一层）
    if (quicklinkPosition === 'bottom' && val === '2') {
      val = '1';
      selectQuicklinks.value = val;
    }
    Storage.set('ntp_quicklinks', val);
    quicklinksElem?.setAttribute('rows', val);
    // 行数变化会改变每行/总数上限，强制重建一次
    renderQuicklinks(true);
  });

  // 快速链接位置切换
  selectQuicklinkPosition?.addEventListener('change', (e) => {
    quicklinkPosition = e.target.value;
    Storage.set('ntp_quicklink_position', quicklinkPosition);
    applyQuicklinkPosition();
    renderQuicklinks(true);
    syncLayoutPresetSelection();
  });

    // 时间开关事件
  const toggleTimeCapsuleSwitch = document.getElementById('toggle-time-capsule-switch');
  const statusTimeCapsuleText = document.getElementById('status-time-capsule');

  if (toggleTimeCapsuleSwitch) {
    toggleTimeCapsuleSwitch.checked = showTimeCapsule;
    // 初始状态文字
    const savedLang = localStorage.getItem('liteStart_language') || 'auto';
    const dict = i18nData[getResolvedLanguageCode(savedLang)] || i18nData['zh-CN'];
    if (statusTimeCapsuleText) {
      statusTimeCapsuleText.innerText = showTimeCapsule ? dict.on : dict.off;
    }

    toggleTimeCapsuleSwitch.addEventListener('change', (e) => {
      showTimeCapsule = e.target.checked;
      Storage.set('ntp_show_time_capsule', showTimeCapsule);
      applyLanguage(localStorage.getItem('liteStart_language') || 'auto');
      applyTimeCapsuleVisibility();
    });
  }

  // 菜单按钮开关事件
  const toggleMenuButtonSwitch = document.getElementById('toggle-menu-button-switch');
  const statusMenuButtonText = document.getElementById('status-menu-button');

  if (toggleMenuButtonSwitch) {
    toggleMenuButtonSwitch.checked = showMenuButton;
    const savedLang = localStorage.getItem('liteStart_language') || 'auto';
    const dict = i18nData[getResolvedLanguageCode(savedLang)] || i18nData['zh-CN'];
    if (statusMenuButtonText) {
      statusMenuButtonText.innerText = showMenuButton ? dict.on : dict.off;
    }

    toggleMenuButtonSwitch.addEventListener('change', (e) => {
      showMenuButton = e.target.checked;
      Storage.set('ntp_show_menu_button', showMenuButton);
      applyLanguage(localStorage.getItem('liteStart_language') || 'auto');
      applyMenuButtonVisibility();
    });
  }

    // "显示搜索框"开关：控制搜索栏显隐（原"关闭"选项改由它承担）
  if (toggleSearchSwitch) {
    toggleSearchSwitch.checked = searchVisible;

    toggleSearchSwitch.addEventListener('change', (e) => {
      searchVisible = e.target.checked;
      Storage.set('ntp_search_visible', searchVisible);
      applySearchVisibility();
      syncLayoutPresetSelection();
      applyLanguage(localStorage.getItem('liteStart_language') || 'auto');
    });
  }

    // 显示标题开关事件
  if (toggleLogoSwitch) {
    toggleLogoSwitch.checked = showLogo;

    toggleLogoSwitch.addEventListener('change', (e) => {
      showLogo = e.target.checked;
      Storage.set('ntp_show_logo', showLogo);
      applyLogoVisibility();
      syncLayoutPresetSelection();
      applyLanguage(localStorage.getItem('liteStart_language') || 'auto');
    });
  }

  // 快速链接整体显示开关（关闭时快速链接区不渲染）
  if (toggleQuicklinksSwitch) {
    toggleQuicklinksSwitch.checked = showQuicklinks;

    toggleQuicklinksSwitch.addEventListener('change', (e) => {
      showQuicklinks = e.target.checked;
      Storage.set('ntp_show_quicklinks', showQuicklinks);
      applyQuicklinkPosition();
      renderQuicklinks(true);
      syncLayoutPresetSelection();
      applyLanguage(localStorage.getItem('liteStart_language') || 'auto');
    });
  }

  // 快速链接"添加"按钮显隐开关（按钮由脚本渲染，改动后需要重建列表）
  if (toggleAddButtonSwitch) {
    toggleAddButtonSwitch.checked = showAddButton;

    toggleAddButtonSwitch.addEventListener('change', (e) => {
      showAddButton = e.target.checked;
      Storage.set('ntp_show_add_button', showAddButton);
      renderQuicklinks(true);
      applyLanguage(localStorage.getItem('liteStart_language') || 'auto');
    });
  }


  // 如果初始状态是开启，启动定时器并显示
  if (showTimeCapsule) {
    applyTimeCapsuleVisibility();
  }
  // 应用菜单按钮初始可见性
  applyMenuButtonVisibility();
  
  // 自定义搜索引擎对话框逻辑
  // 刷新弹窗内标题图片预览区
  function updateEngineLogoPreview() {
    if (!engineLogoImg || !engineLogoEmpty) return;
    if (tempEngineLogo) {
      engineLogoImg.src = tempEngineLogo;
      engineLogoImg.style.display = 'block';
      engineLogoEmpty.style.display = 'none';
      if (btnRemoveEngineLogo) btnRemoveEngineLogo.style.display = 'inline-flex';
    } else {
      engineLogoImg.removeAttribute('src');
      engineLogoImg.style.display = 'none';
      engineLogoEmpty.style.display = 'block';
      if (btnRemoveEngineLogo) btnRemoveEngineLogo.style.display = 'none';
    }
  }

  // 打开/重置自定义搜索引擎编辑弹窗
  // fromEdit 为 true 表示用户是从"编辑自定义搜索引擎"按钮进来的；
  // 首次选"自定义"时是弹窗拦着让用户配置，这时显示删除按钮会反直觉，所以不显示
  function openCustomEngineModal(fromEdit) {
    if (inputEngineName) inputEngineName.value = customEngineConfig.name || '';
    if (inputEngineUrl) inputEngineUrl.value = customEngineConfig.url || '';
    // 恢复已保存的标题图片到临时变量
    tempEngineLogo = customEngineConfig.logo || '';
    updateEngineLogoPreview();
    containerEngineName?.classList.remove('error');
    containerEngineUrl?.classList.remove('error');
    tipEngineName?.classList.remove('active');
    tipEngineUrl?.classList.remove('active');
    if (btnEngineDelete) btnEngineDelete.style.display = fromEdit ? 'inline-flex' : 'none';
    customEngineModal?.classList.add('active');
    setTimeout(() => inputEngineName?.focus(), 50);
  }

  // 关闭自定义搜索引擎编辑弹窗。
  // 如果此时仍没有可用的自定义配置（例如用户直接取消），就把引擎选择退回切换前的那个，
  // 否则界面会停在"自定义"上、首页既没有搜索引擎也没有 Logo
  function closeCustomEngineModal() {
    customEngineModal?.classList.remove('active');
    if (!customEngineConfig.url && engineBeforeCustom) {
      const target = engineBeforeCustom;
      selectEngine.value = target;
      setLogo(target);
      updateEngineEditButton(target);
      updateForceBingCNRow(target);
      Storage.set('ntp_engine', target);
      refreshCustomSelects();    // 同步自定义下拉的显示文本
      applySearchPlaceholder();  // 搜索框提示里也带着引擎名，一起退回
    }
    engineBeforeCustom = null;
  }

  btnEngineCancel?.addEventListener('click', closeCustomEngineModal);

  // 删除自定义搜索引擎：清空配置并切回默认的 Bing
  btnEngineDelete?.addEventListener('click', () => {
    customEngineConfig = { name: '', url: '', logo: '' };
    Storage.remove('ntp_custom_engine_config');
    tempEngineLogo = '';

    // 已经手动切回默认引擎，清掉回退记录避免关闭弹窗时重复处理
    engineBeforeCustom = null;
    selectEngine.value = 'bing';
    setLogo('bing');
    updateEngineEditButton('bing');
    updateForceBingCNRow('bing');
    Storage.set('ntp_engine', 'bing');
    refreshCustomSelects();
    applySearchPlaceholder();
    updateCustomEngineOption();
    closeCustomEngineModal();
  });
  // ===== 自定义标题图片：选择 / 删除 =====
  btnUploadEngineLogo?.addEventListener('click', () => {
    inputEngineLogoFile?.click();
  });

  inputEngineLogoFile?.addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      inputEngineLogoFile.value = '';
      return;
    }
    try {
      const dataUrl = await compressLogoImage(file, { maxWidth: 600 });
      tempEngineLogo = dataUrl;
      updateEngineLogoPreview();
    } catch (err) {
      console.error('标题图片处理失败:', err);
    }
    inputEngineLogoFile.value = '';
  });

  btnRemoveEngineLogo?.addEventListener('click', () => {
    tempEngineLogo = '';
    updateEngineLogoPreview();
  });

  customEngineForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    let name = sanitizeInput(inputEngineName.value.trim());
    // URL 原样保存，使用时经 encodeURIComponent 拼接
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
    } else {
      // 省略协议时补上 http://（与快速链接同一套规则）：
      // 否则 location.href 会把它当相对地址，跳到扩展自己的路径下
      if (!/^[a-z][a-z0-9+.-]*:/i.test(url)) {
        url = 'http://' + url;
      }
      if (!url.includes('%s')) {
        // 必须含 %s 作为搜索词占位符；不限制协议
        containerEngineUrl?.classList.add('error');
        tipEngineUrl?.classList.add('active');
        if (!hasError) inputEngineUrl?.focus();
        hasError = true;
      }
    }

    if (hasError) return;

    customEngineConfig = { name, url, logo: tempEngineLogo || '' };
    Storage.set('ntp_custom_engine_config', customEngineConfig);
    // 如果当前选中的就是自定义引擎，立即刷新首页 Logo
    if (selectEngine && selectEngine.value === 'custom') {
      setLogo('custom');
    }
    // 名称可能变了，同步搜索框提示与下拉里的"自定义（名称）"
    applySearchPlaceholder();
    updateCustomEngineOption();
    closeCustomEngineModal();
  });

  // B2.快速链接列表管理
  let quicklinksList = Storage.get('ntp_quicklinks_list', []);
  if (!Array.isArray(quicklinksList)) quicklinksList = [];


  //=====快捷方式自适应计算--开始=====

  // 单个快捷方式项的宽度
  const QUICKLINK_ITEM_WIDTH = 80;
  // 项与项之间的间距
  const QUICKLINK_GAP = 10;
  // 页面左右各保留的安全边距
  const QUICKLINK_SIDE_MARGIN = 16;
  // 单行模式：每行最多显示的项数，超出的项与"添加"按钮都不再渲染
  const QUICKLINK_MAX_COLUMNS_ONE_ROW = 15;
  // 多行模式：每行显示的项数，行数不限（窗口过窄时按实际可用列数收缩）
  const QUICKLINK_MAX_COLUMNS_MULTI_ROW = 9;

  // 当前生效的列数；仅当它发生变化时才需要重建 DOM
  let quicklinksColumns = 0;
  let quicklinksLastRenderKey = '';

  // 由列数反推容器内容宽度：n*80 + (n-1)*16
  function quicklinksWidthForColumns(cols) {
    return cols * QUICKLINK_ITEM_WIDTH + Math.max(0, cols - 1) * QUICKLINK_GAP;
  }

  // 当前视口宽度下，单行最多能放多少项
  // 只读视口宽度、不读取布局，避免 resize 期间反复强制重排
  function quicklinksAvailableColumns() {
    if (!quicklinksElem) return 0;
    // 视口再宽也不会超过单行模式的上限；多行模式的每行项数更少，取两者较大值即可
    const maxColumns = Math.max(QUICKLINK_MAX_COLUMNS_ONE_ROW, QUICKLINK_MAX_COLUMNS_MULTI_ROW);
    // 可用宽度受「视口 - 两侧安全边距」与「每行项数上限」共同约束
    const availableWidth = Math.min(
      document.documentElement.clientWidth - QUICKLINK_SIDE_MARGIN * 2,
      quicklinksWidthForColumns(maxColumns)
    );
    // 反推列数：cols*80 + (cols-1)*16 <= availableWidth
    return Math.max(1, Math.min(
      maxColumns,
      Math.floor((availableWidth + QUICKLINK_GAP) / (QUICKLINK_ITEM_WIDTH + QUICKLINK_GAP))
    ));
  }

  // 当前设置下每行允许的列数
  // 单行模式：最多 10 列；多行模式：每行 9 列（窄窗口按实际可用列数收缩）
  function quicklinksColumnsPerRow(rowsValue) {
    const available = quicklinksAvailableColumns();
    if (rowsValue === '2') return Math.min(available, QUICKLINK_MAX_COLUMNS_MULTI_ROW);
    return Math.min(available, QUICKLINK_MAX_COLUMNS_ONE_ROW);
  }

  //=====快捷方式自适应计算--结束=====

  
  // 创建快速链接项（图标 + 标题 + 编辑按钮 + 拖拽事件）
  function createQuicklinkNode(item) {
    const linkElem = document.createElement('a');
    linkElem.href = item.url;
    linkElem.className = 'quicklink-item';
    linkElem.setAttribute('data-id', item.id);

    const safeTitle = sanitizeInput(item.title);
    const initialChar = (safeTitle || 'W').charAt(0).toUpperCase();
    // 图标模式：auto = 解析站点图标（失败回退首字符）；text = 首字符；preset = 内置预置图标
    const faviconUrl = (item.iconMode === 'text' || item.iconMode === 'preset') ? '' : getFaviconUrl(item.url);
    const presetStyle = item.iconPresetStyle === 'regular' ? 'regular' : 'filled';
    const presetBody = item.iconMode === 'preset' ? quicklinkPresetBody(item.iconPreset, presetStyle) : '';
    // 站点图标覆盖只在"自动解析"模式下生效（首字符/预置是用户显式指定的）
    const siteOverride = (item.iconMode || 'auto') === 'auto' ? getSiteIconOverride(item.url) : null;
    // 取自 i18n 字典时是原文，需要转义；回退到 safeTitle 时已经转义过了
    const presetLabel = item.iconMode === 'preset' ? (currentDict()[iconPresetKey(item.iconPreset)] || '') : '';

    let iconContent = '';
    if (presetBody) {
      const label = presetLabel ? sanitizeInput(presetLabel) : safeTitle;
      iconContent = `<svg viewBox="0 0 24 24" width="20" height="20" role="img" aria-label="${label}">${presetBody}</svg>`;
    } else if (siteOverride) {
      // 用站点官方标记替代 favicon；fill=currentColor 让它跟随主题（深色下自动变浅）
      iconContent = `<svg class="quicklink-site-icon" viewBox="${siteOverride.viewBox}" role="img" aria-label="${safeTitle}">${siteOverride.body}</svg>`;
    } else if (faviconUrl) {
      iconContent = `<img src="${faviconUrl}" alt="${safeTitle}" loading="lazy">`;
    } else {
      iconContent = initialChar;
    }

    linkElem.innerHTML = `
      <div class="quicklink-icon">${iconContent}</div>
      <span class="quicklink-title">${safeTitle}</span>
      <button type="button" class="quicklink-edit-btn" title="${sanitizeInput(currentDict().editShortcut || '编辑快速链接')}" data-i18n-title="editShortcut">
        <svg width="14" height="14" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.5 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0zm5 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0zm5 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0z"/>
        </svg>
      </button>
    `;

    // 站点图标加载失败时回退为首字符
    const quicklinkIconImg = linkElem.querySelector('.quicklink-icon img');
    quicklinkIconImg?.addEventListener('error', () => {
      quicklinkIconImg.replaceWith(document.createTextNode(initialChar));
    }, { once: true });

    // 拖拽事件
    linkElem.draggable = true;
    linkElem.addEventListener('dragstart', onDragStart);
    linkElem.addEventListener('dragend', onDragEnd);
    linkElem.addEventListener('dragover', onDragOver);
    linkElem.addEventListener('dragenter', onDragEnter);
    linkElem.addEventListener('dragleave', onDragLeave);
    linkElem.addEventListener('drop', onDrop);

    const editBtn = linkElem.querySelector('.quicklink-edit-btn');
    editBtn?.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();          // 别让 document 上的关闭逻辑立刻把菜单收掉
      const r = editBtn.getBoundingClientRect();
      showQuicklinkMenu(item, r.left, r.bottom + 4);
    });

    return linkElem;
  }

  // 创建"添加"按钮项
  function createQuicklinkAddNode() {
    const addElem = document.createElement('div');
    addElem.className = 'quicklink-item quicklink-add-btn';
    addElem.innerHTML = `
      <div class="quicklink-icon quicklink-add-icon">
        <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
        </svg>
      </div>
      <span class="quicklink-title" data-i18n="addlink">添加</span>
    `;
    addElem.addEventListener('click', () => openAddModal());
    return addElem;
  }

  // 只同步"添加"按钮的文案；语言切换时无需整页重扫，也不用重建列表
  function syncQuicklinksLanguage() {
    if (!quicklinksElem) return;
    const label = quicklinksElem.querySelector('.quicklink-add-btn .quicklink-title');
    if (!label) return;
    const dict = window._i18nDict
      || i18nData[getResolvedLanguageCode(localStorage.getItem('liteStart_language') || 'auto')]
      || i18nData['zh-CN'];
    if (dict && dict.addlink !== undefined) label.textContent = dict.addlink;
  }

  // 渲染快速链接列表
  // 仅在「列数 / 行数设置 / 数据」变化时重建 DOM，窗口缩放不会引发无谓的重排
  function renderQuicklinks(force) {
    if (!quicklinksElem) return;

    const rows = quicklinksElem.getAttribute('rows') || '0';
    const perRow = quicklinksColumnsPerRow(rows);
    quicklinksColumns = perRow;

    // 关闭快速链接：清空内容并退出
    if (rows === '0') {
      quicklinksElem.textContent = '';
      quicklinksElem.style.removeProperty('--quicklinks-content-width');
      quicklinksLastRenderKey = 'off';
      return;
    }

    // 单行模式：最多渲染 perRow 项（超出部分与"添加"按钮都不渲染）
    // 多行模式：不限项数，全部渲染，由 CSS 换行成多行
    const multiRow = rows === '2';
    const maxItems = multiRow ? Infinity : perRow;
    const shownLinks = quicklinksList.slice(0, maxItems);
    // "添加"按钮显示条件：设置里开启 + 单行模式尚未排满（多行模式不限项数，只看开关）
    const hasAddButton = showAddButton && quicklinksList.length < maxItems;
    // 容器内容宽度：多行模式固定为 perRow 列，保证每行排满 perRow 项后才换行（行数不限）；
    // 单行模式按实际渲染项数收缩，左右不留空档
    const widthColumns = multiRow
      ? perRow
      : Math.min(perRow, Math.max(1, shownLinks.length + (hasAddButton ? 1 : 0)));
    const contentWidth = quicklinksWidthForColumns(widthColumns);
    // 缓存键必须带上标题与网址：只改名称时项数与 id 都没变，
    // 否则这里会被判成"无需重建"，界面要刷新才更新
    const renderKey = [rows, perRow, showAddButton ? '1' : '0', quicklinksList.length,
      quicklinksList.map(i => i.id + '~' + i.title + '~' + i.url + '~' + (i.iconMode || 'auto') + '~' + (i.iconPreset || '') + '~' + (i.iconPresetStyle || '')).join(';')].join('|');
    const widthChanged = quicklinksElem.style.getPropertyValue('--quicklinks-content-width') !== contentWidth + 'px';

    if (!force && renderKey === quicklinksLastRenderKey && !widthChanged) return;
    quicklinksLastRenderKey = renderKey;
    quicklinksElem.style.setProperty('--quicklinks-content-width', contentWidth + 'px');

    // 整体重建：链接项在前，"添加"按钮在末尾
    const fragment = document.createDocumentFragment();
    shownLinks.forEach(item => {
      fragment.appendChild(createQuicklinkNode(item));
    });
    // 单行模式未超出显示上限时才显示"添加"按钮；多行模式始终显示在末尾
    if (hasAddButton) {
      fragment.appendChild(createQuicklinkAddNode());
    }

    quicklinksElem.textContent = '';
    quicklinksElem.appendChild(fragment);
    syncQuicklinksLanguage();

  }

  // 窗口尺寸变化：合并到下一帧处理，并且只在列数真正变化时才重建 DOM
  let quicklinksResizeQueued = false;
  window.addEventListener('resize', () => {
    if (quicklinksResizeQueued) return;
    quicklinksResizeQueued = true;
    requestAnimationFrame(() => {
      quicklinksResizeQueued = false;
      if (!quicklinksElem) return;
      const rows = quicklinksElem.getAttribute('rows');
      if (rows === '0') return;
      if (quicklinksColumnsPerRow(rows) !== quicklinksColumns) renderQuicklinks();
    });
  });


  // ========== 拖拽事件处理函数 ==========
function onDragStart(e) {
  const item = e.currentTarget;
  const id = item.dataset.id;
  if (!id) {
    e.preventDefault();
    return;
  }
  draggedId = id;
  e.dataTransfer.effectAllowed = 'move';
  // 部分浏览器（Firefox）必须在 dragstart 里写入数据才会真正开始拖拽
  try { e.dataTransfer.setData('text/plain', id); } catch (err) { /* 个别环境禁止写入，忽略 */ }
  // 给被拖拽元素添加样式
  item.classList.add('dragging');
}

function onDragEnd(e) {
  const item = e.currentTarget;
  item.classList.remove('dragging');
  // 清理所有高亮
  document.querySelectorAll('.quicklink-item.drag-over').forEach(el => {
    el.classList.remove('drag-over');
    el.removeAttribute('data-drop');
  });
  draggedId = null;
}

// 按鼠标落在目标项的左半/右半，决定"插到前面"还是"插到后面"
function updateDropIndicator(target, clientX) {
  const rect = target.getBoundingClientRect();
  const after = clientX > rect.left + rect.width / 2;
  document.querySelectorAll('.quicklink-item.drag-over').forEach(el => {
    if (el !== target) {
      el.classList.remove('drag-over');
      el.removeAttribute('data-drop');
    }
  });
  target.classList.add('drag-over');
  target.setAttribute('data-drop', after ? 'after' : 'before');
}

function onDragOver(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = 'move';
  // dragenter 只在进入时触发一次，鼠标在同一项内左右移动要靠 dragover 持续更新
  const target = e.currentTarget;
  const targetId = target.dataset.id;
  if (targetId && targetId !== draggedId) {
    updateDropIndicator(target, e.clientX);
  }
}

function onDragEnter(e) {
  e.preventDefault();
  const target = e.currentTarget;
  const targetId = target.dataset.id;
  // 只有快速链接（有 data-id）且不是被拖拽自身时，才显示落点
  if (targetId && targetId !== draggedId) {
    updateDropIndicator(target, e.clientX);
  }
}

function onDragLeave(e) {
  const target = e.currentTarget;
  // 指针从项本身移到它自己的子元素（图标/标题）时 dragleave 也会冒泡上来，
  // 此时不该清掉落点，否则竖线会闪一下
  if (e.relatedTarget && target.contains(e.relatedTarget)) {
    return;
  }
  target.classList.remove('drag-over');
  target.removeAttribute('data-drop');
}

function onDrop(e) {
  e.preventDefault();
  const target = e.currentTarget;
  const after = target.getAttribute('data-drop') === 'after';
  target.classList.remove('drag-over');
  target.removeAttribute('data-drop');

  const targetId = target.dataset.id;
  if (!targetId || !draggedId || targetId === draggedId) {
    return;
  }

  // 查找两个元素在数组中的位置
  const draggedIndex = quicklinksList.findIndex(item => item.id === draggedId);
  let targetIndex = quicklinksList.findIndex(item => item.id === targetId);

  if (draggedIndex === -1 || targetIndex === -1) {
    return;
  }

  const [draggedItem] = quicklinksList.splice(draggedIndex, 1);
  // 取走后，其后的目标整体前移一位
  if (draggedIndex < targetIndex) {
    targetIndex -= 1;
  }
  // 落在目标项右半 → 插到它后面
  if (after) {
    targetIndex += 1;
  }
  quicklinksList.splice(targetIndex, 0, draggedItem);

  // 持久化并重新渲染
  Storage.set('ntp_quicklinks_list', quicklinksList);
  renderQuicklinks();
}
// ========== 拖拽事件处理函数结束 ==========


  // B3.自定义校验与 Modal 对话框逻辑
  // 清除表单中所有的错误高亮状态
  function clearErrors() {
    containerName?.classList.remove('error');
    containerUrl?.classList.remove('error');
    tipName?.classList.remove('active');
    tipUrl?.classList.remove('active');
  }

  // 显示名称字段的错误提示
  function showNameError() {
    containerName?.classList.add('error');
    tipName?.classList.add('active');
  }

  // 显示URL字段的错误提示
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

  // 复制文本到剪贴板：优先 Clipboard API，失败时退回旧的 execCommand 方案
  // （扩展页面是安全上下文，正常走第一条路径）
  async function copyTextToClipboard(text) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (err) {
      try {
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.setAttribute('readonly', '');
        ta.style.position = 'fixed';
        ta.style.top = '-1000px';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        const done = document.execCommand('copy');
        document.body.removeChild(ta);
        return done;
      } catch (err2) {
        console.warn('复制链接失败:', err2);
        return false;
      }
    }
  }

  // ===== 快速链接的右键菜单：在新标签页打开 / 复制链接 / 编辑 =====
  const quicklinkMenu = document.getElementById('quicklink-menu');
  let quicklinkMenuTarget = null;

  function hideQuicklinkMenu() {
    quicklinkMenu?.classList.remove('active');
    // 收起时清掉选中态，下次弹出不会残留高亮
    quicklinkMenu?.querySelectorAll('.quicklink-menu-item').forEach(item => {
      item.classList.remove('selected');
      item.removeAttribute('aria-current');
    });
    quicklinkMenuTarget = null;
  }

  // 在指定位置弹出菜单（三个点按钮与右键共用同一套）
  // forAddButton 为真时只显示针对添加按钮的项
  function showQuicklinkMenu(link, left, top, forAddButton) {
    if (!quicklinkMenu) return;
    quicklinkMenuTarget = link;
    quicklinkMenu.querySelectorAll('.quicklink-menu-item').forEach(item => {
      item.hidden = forAddButton ? item.dataset.action !== 'hide-add' : item.dataset.action === 'hide-add';
      item.classList.remove('selected');
      item.removeAttribute('aria-current');
    });
    quicklinkMenu.classList.add('active');
    const rect = quicklinkMenu.getBoundingClientRect();
    if (left + rect.width > window.innerWidth - 8) left = window.innerWidth - rect.width - 8;
    if (top + rect.height > window.innerHeight - 8) top = window.innerHeight - rect.height - 8;
    quicklinkMenu.style.left = Math.max(8, left) + 'px';
    quicklinkMenu.style.top = Math.max(8, top) + 'px';
  }

  quicklinksElem?.addEventListener('contextmenu', (e) => {
    const item = e.target instanceof Element ? e.target.closest('.quicklink-item') : null;
    if (!item) return;
    e.preventDefault();
    if (item.classList.contains('quicklink-add-btn')) {
      showQuicklinkMenu(null, e.clientX, e.clientY, true);
      return;
    }
    const link = quicklinksList.find(x => x.id === item.getAttribute('data-id'));
    if (!link) return;
    showQuicklinkMenu(link, e.clientX, e.clientY);
  });

  quicklinkMenu?.addEventListener('click', (e) => {
    const btn = e.target instanceof Element ? e.target.closest('.quicklink-menu-item') : null;
    if (!btn) return;
    // 点击时先落到该项上（视觉与键盘导航一致），再执行动作并收起
    setQuicklinkMenuItemSelected(btn);
    const link = quicklinkMenuTarget;
    const action = btn.dataset.action;
    hideQuicklinkMenu();
    if (action === 'hide-add') {
      hideQuicklinkAddButton();
      return;
    }
    if (!link) return;
    if (action === 'open') {
      window.open(link.url, '_blank', 'noopener');
    } else if (action === 'copy') {
      copyTextToClipboard(link.url);
    } else if (action === 'edit') {
      openEditModal(link);            // 与三个点按钮同一个入口
    }
  });

  // 隐藏添加按钮：等同于关闭设置中的开关，并给出重新开启的入口说明
  const modalAddButtonHidden = document.getElementById('modal-add-button-hidden');
  const btnAddButtonHiddenOk = document.getElementById('btn-add-button-hidden-ok');

  function hideQuicklinkAddButton() {
    showAddButton = false;
    Storage.set('ntp_show_add_button', false);
    if (toggleAddButtonSwitch) toggleAddButtonSwitch.checked = false;
    renderQuicklinks(true);
    applyLanguage(localStorage.getItem('liteStart_language') || 'auto');
    modalAddButtonHidden?.classList.add('active');
  }

  btnAddButtonHiddenOk?.addEventListener('click', () => {
    modalAddButtonHidden?.classList.remove('active');
  });
  modalAddButtonHidden?.addEventListener('click', (e) => {
    if (e.target === modalAddButtonHidden) modalAddButtonHidden.classList.remove('active');
  });

  // 点空白处、按 Esc、失焦、改变窗口大小都收起
  document.addEventListener('click', (e) => {
    if (!quicklinkMenu?.classList.contains('active')) return;
    if (e.target instanceof Element && e.target.closest('.quicklink-menu')) return;
    hideQuicklinkMenu();
  });
  // 选中项按选项菜单的规则：单选、铺满整项、加粗强调色。
  // 菜单内的当前选中项以 aria-current 标记，供样式与键盘导航共用。
  function setQuicklinkMenuItemSelected(item) {
    if (!quicklinkMenu) return;
    quicklinkMenu.querySelectorAll('.quicklink-menu-item').forEach(el => {
      const on = el === item;
      el.classList.toggle('selected', on);
      if (on) el.setAttribute('aria-current', 'true');
      else el.removeAttribute('aria-current');
    });
  }

  // 键盘上下键在本菜单内移动选中项，Enter/空格即触发（按钮默认行为）
  quicklinkMenu?.addEventListener('keydown', (e) => {
    if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return;
    e.preventDefault();
    const items = Array.from(quicklinkMenu.querySelectorAll('.quicklink-menu-item'))
      .filter(el => !el.hidden);
    if (!items.length) return;
    const cur = items.findIndex(el => el.getAttribute('aria-current') === 'true');
    const step = e.key === 'ArrowDown' ? 1 : -1;
    const next = cur < 0
      ? (step > 0 ? 0 : items.length - 1)
      : (cur + step + items.length) % items.length;
    setQuicklinkMenuItemSelected(items[next]);
    items[next].focus({ preventScroll: true });
  });

  // 关闭所有临时浮层（右键菜单 + 预置宫格）
  function hideQuicklinkPopups() {
    hideQuicklinkMenu();
    hideIconPresetPanel();
  }
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') hideQuicklinkPopups(); });
  window.addEventListener('blur', hideQuicklinkPopups);
  window.addEventListener('resize', hideQuicklinkPopups);

  // ===== 「预置」图标的二级宫格面板 =====
  const iconPresetPanel = document.getElementById('icon-preset-panel');
  let iconPresetHideTimer = 0;

  // 用内置的 35 个图标填充面板（5 列 × 7 行）
  if (iconPresetPanel) {
    // 左：实心（filled）；右：描边（regular）
    [['filled', 'body'], ['regular', 'regular']].forEach(([variant, field]) => {
      const group = document.createElement('div');
      group.className = 'icon-preset-group';
      QUICKLINK_PRESET_ICONS.forEach(icon => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'icon-preset-item';
        btn.dataset.iconId = icon.id;
        btn.dataset.variant = variant;
        btn.setAttribute('role', 'option');
        btn.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true">' + (icon[field] || '') + '</svg>';
        group.appendChild(btn);
      });
      iconPresetPanel.appendChild(group);
    });
  }

  function markSelectedIconPreset() {
    if (!iconPresetPanel) return;
    iconPresetPanel.querySelectorAll('.icon-preset-item').forEach(btn => {
      const style = window.__iconPresetStyle === 'regular' ? 'regular' : 'filled';
      btn.classList.toggle('selected',
        btn.dataset.iconId === window.__iconPresetId && btn.dataset.variant === style);
    });
  }

  function hideIconPresetPanel() {
    clearTimeout(iconPresetHideTimer);
    iconPresetPanel?.classList.remove('active');
  }

  // 面板贴在「预置」那一项的右侧；右侧放不下就改放左侧
  function showIconPresetPanel(anchorRect) {
    if (!iconPresetPanel) return;
    clearTimeout(iconPresetHideTimer);
    markSelectedIconPreset();
    iconPresetPanel.classList.add('active');

    const rect = iconPresetPanel.getBoundingClientRect();
    let left = anchorRect.right + 4;
    if (left + rect.width > window.innerWidth - 8) {
      left = Math.max(8, anchorRect.left - rect.width - 4);
    }
    let top = anchorRect.top;
    if (top + rect.height > window.innerHeight - 8) {
      top = Math.max(8, window.innerHeight - rect.height - 8);
    }
    iconPresetPanel.style.left = left + 'px';
    iconPresetPanel.style.top = top + 'px';
  }

  // 悬停到「预置」选项时展开二级面板（事件委托：下拉浮层是动态创建的）
  document.addEventListener('mouseover', (e) => {
    const opt = e.target instanceof Element ? e.target.closest('.custom-select-option') : null;
    if (!opt) return;
    if (opt.dataset.value === 'preset') {
      showIconPresetPanel(opt.getBoundingClientRect());
    } else {
      hideIconPresetPanel();
    }
  });

  // 鼠标在选项与面板之间移动时不要立刻收起，给一点缓冲
  iconPresetPanel?.addEventListener('mouseenter', () => clearTimeout(iconPresetHideTimer));
  iconPresetPanel?.addEventListener('mouseleave', () => {
    iconPresetHideTimer = setTimeout(hideIconPresetPanel, 150);
  });

  // 选中一个预置图标
  iconPresetPanel?.addEventListener('click', (e) => {
    const btn = e.target instanceof Element ? e.target.closest('.icon-preset-item') : null;
    if (!btn) return;
    window.__iconPresetId = btn.dataset.iconId || '';
    window.__iconPresetStyle = btn.dataset.variant === 'regular' ? 'regular' : 'filled';
    if (selectIconMode) selectIconMode.value = 'preset';
    updateIconPresetOption();
    markSelectedIconPreset();
    hideIconPresetPanel();
    // 收起自定义下拉浮层
    document.querySelectorAll('.custom-select-dropdown.active').forEach(dd => {
      dd.classList.remove('active');
      dd._display?.classList.remove('active');
    });
  });

  hideIconPresetPanel();

  // 打开"添加快速链接"弹窗，清空表单并隐藏删除按钮
  function openAddModal() {
    currentEditingId = null;
    if (inputName) inputName.value = '';
    if (inputUrl) inputUrl.value = '';
    if (selectIconMode) selectIconMode.value = 'auto';
    window.__iconPresetId = '';
    window.__iconPresetStyle = 'filled';
    hideIconPresetPanel();           // 收掉上一次残留的宫格面板
    updateIconPresetOption();        // 同步下拉的显示文本
    clearErrors();
    if (btnDelete) btnDelete.style.display = 'none';
    modalOverlay?.classList.add('active');
    setTimeout(() => inputName?.focus(), 50);
  }

  // 左上角菜单里的"添加快速链接"：与快速链接区的"添加"按钮同功能，始终可用
  document.getElementById('btn-add-quicklink')?.addEventListener('click', () => {
    popoverWaffle?.classList.remove('active');
    openAddModal();
  });

  // 打开"编辑快速链接"弹窗，填充当前数据并显示删除按钮
  function openEditModal(item) {
    currentEditingId = item.id;
    if (inputName) inputName.value = item.title;
    if (inputUrl) inputUrl.value = item.url;
    if (selectIconMode) {
      selectIconMode.value = (item.iconMode === 'text' || item.iconMode === 'preset') ? item.iconMode : 'auto';
    }
    window.__iconPresetId = item.iconPreset || '';
    window.__iconPresetStyle = item.iconPresetStyle === 'regular' ? 'regular' : 'filled';
    hideIconPresetPanel();
    updateIconPresetOption();
    clearErrors();
    if (btnDelete) btnDelete.style.display = 'inline-flex';
    modalOverlay?.classList.add('active');
    setTimeout(() => inputName?.focus(), 50);
  }

  // 关闭快速链接编辑弹窗，清空编辑状态
  function closeModal() {
    modalOverlay?.classList.remove('active');
    currentEditingId = null;
    clearErrors();
    hideIconPresetPanel();           // 面板挂在弹窗内，关弹窗时必须一并收起
  }

  // 从下拉里改选图标模式后，触发器文本会被 updateDisplayText 整体重写，
  // 需要重挂一次预置图标（否则切回「预置」时图标会丢）
  selectIconMode?.addEventListener('change', () => {
    updateIconPresetOption();
  });

  btnCancel?.addEventListener('click', closeModal);

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

    const title = sanitizeInput(inputName.value.trim());
    const rawIconMode = selectIconMode?.value;
    const iconMode = (rawIconMode === 'text' || rawIconMode === 'preset') ? rawIconMode : 'auto';
    const iconPreset = iconMode === 'preset' ? (window.__iconPresetId || '') : '';
    const iconPresetStyle = iconMode === 'preset'
      ? (window.__iconPresetStyle === 'regular' ? 'regular' : 'filled')
      : '';
    // URL 原样保存：它只会被赋给 href/src 这类属性，不经过 HTML 解析；
    // 在这里转义会把含 & 的地址（多个查询参数）写坏
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
      // 省略协议时补上 http://（带任何协议的都原样保留，
      // 这样 javascript:、about:blank、edge://flags、WeChat:// 都能直接用）。
      // 用 http 而不是 https 作默认值：只支持 http 的站点用 https 会连不上，
      // 而支持 https 的站点收到 http 请求会自行 301 跳转，兼容性更好。
      if (!/^[a-z][a-z0-9+.-]*:/i.test(url)) {
        url = 'http://' + url;
      }
      // 只校验能被解析成合法 URL，不限制协议。
      // 这里不能用 getDomain()（它取 hostname）：about:blank、javascript:xxx
      // 这类地址没有主机名，会被误判为空而拒绝。
      let parsedOk = true;
      try {
        new URL(url);
      } catch (err) {
        parsedOk = false;
      }
      if (!parsedOk) {
        showUrlError();
        if (!hasError) inputUrl.focus();
        hasError = true;
      }
    }

    if (hasError) return;

    if (currentEditingId) {
      const itemIndex = quicklinksList.findIndex(item => item.id === currentEditingId);
      if (itemIndex !== -1) {
        quicklinksList[itemIndex] = { ...quicklinksList[itemIndex], title, url, iconMode, iconPreset, iconPresetStyle };
      }
    } else {
      const newItem = {
        id: Date.now().toString(),
        title,
        url,
        iconMode,
        iconPreset,
        iconPresetStyle
      };
      quicklinksList.push(newItem);
    }

    Storage.set('ntp_quicklinks_list', quicklinksList);
    renderQuicklinks();
    closeModal();
  });

  renderQuicklinks();

  // B4.搜索框历史记录与搜索建议词条
  clearHistoryBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    searchHistory = [];
    Storage.set('ntp_search_history', []);
    fetchAndShowSuggestions();
  });

  // 将搜索关键词存入历史记录（去重、限长50条）
  function saveSearchHistory(query) {
    if (!historyEnabled || !query) return;
    const safeQuery = sanitizeInput(query);
    searchHistory = searchHistory.filter(item => item.toLowerCase() !== safeQuery.toLowerCase());
    searchHistory.unshift(safeQuery);
    if (searchHistory.length > 50) {
      searchHistory.pop();
    }
    Storage.set('ntp_search_history', searchHistory);
  }

  const historySvgIcon = `<svg width="18" height="18" viewBox="0 0 24 24"><path d="M13 3a9 9 0 0 0-9 9H1l3.89 3.89.07.14L9 12H6a7 7 0 1 1 7 7 7.07 7.07 0 0 1-6-3.37l-1.44 1.44A8.95 8.95 0 0 0 13 21a9 9 0 0 0 0-18zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/></svg>`;
  const searchSvgIcon = `<svg width="18" height="18" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>`;

  // 关闭搜索联想下拉面板，重置选中索引
  function closeSuggestions() {
    searchContainer?.classList.remove('suggestions-open');
    selectedSuggestionIndex = -1;
  }

  // 渲染搜索联想下拉列表，合并历史记录与在线建议词条
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
      // 历史项入库时已转义，只需转义来自接口的建议词
      const labelText = itemObj.isHistory ? itemObj.text : sanitizeInput(itemObj.text);
      li.innerHTML = `${itemObj.isHistory ? historySvgIcon : searchSvgIcon}<span class="suggestion-text">${labelText}</span>`;
      
      li.addEventListener('click', () => {
        if (searchInput) searchInput.value = decodeInput(itemObj.text);
        doSearch(decodeInput(itemObj.text));   // 搜索要用原文，不能用转义后的实体
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

  // 获取搜索联想建议：匹配历史记录 + 异步请求搜索引擎建议
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

  // 通用防抖工具函数：延迟执行高频触发的函数调用
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

  // 更新联想列表中键盘选中项的高亮状态
  function updateSuggestionSelection(items) {
    items.forEach((item, index) => {
      if (index === selectedSuggestionIndex) {
        item.classList.add('selected');
        if (searchInput) searchInput.value = decodeInput(item.querySelector('.suggestion-text').textContent);
      } else {
        item.classList.remove('selected');
      }
    });
  }

  // 执行搜索逻辑
  function doSearch(queryText = searchInput ? searchInput.value.trim() : '') {
    const query = queryText;
    if (query) {
      saveSearchHistory(query);
      closeSuggestions();

      const engine = selectEngine ? selectEngine.value : 'bing';
      let targetUrl;

      if (engine === 'custom' && customEngineConfig.url) {
        targetUrl = customEngineConfig.url.replace('%s', encodeURIComponent(query));
      } else {
        let baseUrl = engineSearchUrls[engine] || engineSearchUrls.bing;
        if (engine === 'bing' && forceBingCN) {
          baseUrl = bingCNSearchUrl;
        }
        targetUrl = baseUrl + encodeURIComponent(query);
      }
      window.location.href = targetUrl;
    }
  }

  // 语言选择与应用初始化
  const savedLang = localStorage.getItem('liteStart_language') || 'auto';
  // 若存的是已下架的语言（例如 zh-WY），回落到"跟随设备"
  const initialLang = (savedLang === 'auto' || i18nData[savedLang]) ? savedLang : 'auto';
  if (selectLanguage) {
    selectLanguage.value = initialLang;
    selectLanguage.addEventListener('change', (e) => {
      const val = e.target.value;
      localStorage.setItem('liteStart_language', val);
      applyLanguage(val);
      renderWallpaper();      // 同步刷新壁纸类型标题（该文本由脚本写入，不随 data-i18n 自动更新）
    });
  }

  // 初始化应用全页翻译
  applyLanguage(initialLang);

  // 初始化自定义下拉组件
  // ===== 搜索框提示与"自定义"选项的引擎名同步 =====
  // 必须定义在 applyLanguage 之外：它内部会调用，外部（切换/保存/删除自定义引擎）也要用。
  // 实现上只读 DOM 与 localStorage，不依赖可能在前面尚未初始化的模块级变量。

  initCustomSelects();

  // 开关手柄可拖拽
  initSwitchDrag();

  // 初始化悬浮滚动条
  updateSettingsScrollbar();
});

// ===== 开关手柄拖拽 =====
// 手柄是 .slider::before 伪元素，没法直接绑事件，所以指针事件由铺满控件的 .slider 接收，
// 再用坐标判断指针是否落在手柄上 —— 只有按到手柄才进入拖动；
// 按在两侧胶囊上则完全不接管，交给 <label> 的默认行为完成普通点击切换。
//
// 起步有阈值（DRAG_THRESHOLD）：pointerdown 时只记下候选，不立刻改状态也不加类，
// 位移超过阈值才真正开始拖。这样手抖、误触、想点击却略微移动一下都不会误拖。
//
// 拖动时把进度写进内联的 --p（样式里用 @property 注册过，是真正可插值的数值），
// 两侧胶囊宽度跟着手柄走，间隙仍恒为 2px；松手移除内联值，交回 CSS 的 0 / 1。
function initSwitchDrag() {
  const root = document.documentElement;
  if (root.dataset.switchDragReady) return;
  root.dataset.switchDragReady = '1';

  // 位移超过这个像素数才算拖动，否则按点击处理
  const DRAG_THRESHOLD = 5;
  // 手柄命中范围的左右容差：手柄只有 5px 宽，太窄不好按
  const HIT_TOLERANCE = 5;

  // 拖动上下文；未按下时为 null。dragging 为 true 才算真正进入拖动
  let ctx = null;

  // 手柄直径。--thumb-w 是字面量，未注册也能被 getComputedStyle 读到
  // （若值是 calc() 表达式，读取会得到原始表达式串而无法解析）。
  const thumbWidthOf = sw =>
    parseFloat(getComputedStyle(sw).getPropertyValue('--thumb-w')) || 11;

  // 手柄在两端的位置，和样式里的 --thumb-start / --thumb-end 同源。
  // 分开读是因为左右两端可以不同（关闭态向内收、打开态贴边）。
  const thumbStartOf = sw =>
    parseFloat(getComputedStyle(sw).getPropertyValue('--thumb-start')) || 0;
  const thumbEndOf = sw =>
    parseFloat(getComputedStyle(sw).getPropertyValue('--thumb-end')) || 0;

  const scaleOf = (sw, rect) => rect.width / (sw.offsetWidth || rect.width || 1);

  // 当前进度：优先读内联值（拖动中），否则是 CSS 算出来的 0 / 1
  const progressOf = sw => {
    const v = parseFloat(getComputedStyle(sw).getPropertyValue('--p'));
    return Number.isFinite(v) ? v : 0;
  };


  // 手柄在视口坐标下的水平范围（带容差）
  const thumbHitRange = sw => {
    const rect = sw.getBoundingClientRect();
    const scale = scaleOf(sw, rect);
    const thumbPx = thumbWidthOf(sw) * scale;
    const startPx = thumbStartOf(sw) * scale;
    const endPx = thumbEndOf(sw) * scale;
    const travelPx = Math.max(1, rect.width - thumbPx - startPx - endPx);
    const left = rect.left + startPx + progressOf(sw) * travelPx;
    const tol = HIT_TOLERANCE * scale;
    return { left: left - tol, right: left + thumbPx + tol };
  };

  // 由指针位置反推进度（0~1），让手柄中心跟着指针走
  const progressAt = (sw, clientX) => {
    const rect = sw.getBoundingClientRect();
    // 元素可能被 transform: scale() 缩放过：rect 是视口坐标下的尺寸，
    // 而 --thumb-w / --thumb-start / --thumb-end 读到的是原始像素。求出缩放比统一坐标系后再算。
    const scale = scaleOf(sw, rect);
    const thumbPx = thumbWidthOf(sw) * scale;
    const startPx = thumbStartOf(sw) * scale;
    const endPx = thumbEndOf(sw) * scale;
    const travelPx = Math.max(1, rect.width - thumbPx - startPx - endPx);
    const p = (clientX - rect.left - startPx - thumbPx / 2) / travelPx;
    return p < 0 ? 0 : p > 1 ? 1 : p;
  };

  const clearCtx = () => {
    if (ctx) {
      ctx.sw.classList.remove('dragging');
      ctx.sw.style.removeProperty('--p');
    }
    ctx = null;
  };

  document.addEventListener('pointerdown', e => {
    const sw = e.target.closest && e.target.closest('.switch');
    if (!sw) return;
    const input = sw.querySelector('input[type="checkbox"]');
    const slider = sw.querySelector('.slider');
    if (!input || !slider || input.disabled || sw.classList.contains('disabled')) return;
    if (!slider.contains(e.target) && e.target !== slider) return;
    // 只有按在手柄上才接管；按到两侧胶囊则完全不管，让 label 正常切换
    const hit = thumbHitRange(sw);
    if (e.clientX < hit.left || e.clientX > hit.right) return;

    // 阻止 label 默认行为，松手时自行决定是否切换
    e.preventDefault();
    // 只记候选，先不改状态、不加类 —— 要等位移超过阈值才真正进入拖动
    ctx = { sw, input, slider, moved: false, dragging: false, startX: e.clientX };
    // 捕获指针，拖出控件也能继续跟手；个别环境会抛错，忽略即可
    try { slider.setPointerCapture(e.pointerId); } catch (_) { /* 忽略 */ }
  });

  document.addEventListener('pointermove', e => {
    if (!ctx) return;
    if (!ctx.dragging) {
      // 还没进入拖动：位移不够就当什么都没发生（防抖）
      if (Math.abs(e.clientX - ctx.startX) <= DRAG_THRESHOLD) return;
      ctx.dragging = true;
      ctx.moved = true;
      ctx.sw.classList.add('dragging');
    }
    ctx.sw.style.setProperty('--p', String(progressAt(ctx.sw, e.clientX)));
  });

  document.addEventListener('pointerup', e => {
    if (!ctx) return;
    const { sw, input, dragging, moved } = ctx;

    if (dragging) {
      // 按最终位置提交
      const p = progressAt(sw, e.clientX);
      clearCtx();
      const next = p >= 0.5;
      if (next !== input.checked) {
        input.checked = next;
        // 程序改 checked 不会派发 change，这里补上，设置项的保存逻辑才收得到
        input.dispatchEvent(new Event('change', { bubbles: true }));
      }
    } else {
      // 按下后位移没超过阈值：当作点击，取反当前状态
      clearCtx();
      input.checked = !input.checked;
      input.dispatchEvent(new Event('change', { bubbles: true }));
    }
    // 标记这次指针交互已处理状态，供后面拦掉 label 补发的 click
    root.dataset.switchDragHandled = '1';
  });

  document.addEventListener('pointercancel', () => {
    // checkbox 没被改过，清掉内联值即回到 CSS 的 0 / 1
    clearCtx();
  });

  // 指针交互后浏览器还会补一个 click，而 .slider 在 <label> 内，
  // label 的默认行为会再切换一次（等于把刚设好的状态切回去），这里拦下。
  // 只拦"指针处理过的"那一次：按在胶囊上时我们没接管（不会走上面那条路径），
  // 键盘（Tab + 空格）也不产生 pointer 事件，它们的 label 默认行为都照常生效。
  document.addEventListener('click', e => {
    if (!root.dataset.switchDragHandled) return;
    delete root.dataset.switchDragHandled;
    e.preventDefault();
    e.stopPropagation();
  }, true);
}

// ===== 搜索框提示与「自定义」选项的引擎名同步 =====
// 必须和 applyLanguage / refreshCustomSelects 同级（即在 DOMContentLoaded 回调之外）：
// applyLanguage 内部会调用它们，若定义在回调内部，那边的作用域看不到，会抛 ReferenceError。
// 实现上只读 DOM 与 localStorage，不依赖回调里尚未初始化的模块级变量。

// 当前搜索引擎的展示名：内置用固定名，自定义用用户填的名称
function getEngineDisplayName() {
  const sel = document.getElementById('select-engine');
  const engine = sel ? sel.value : 'bing';
  if (engine === 'custom') {
    const cfg = Storage.get('ntp_custom_engine_config', {}) || {};
    return cfg.name || 'Custom';
  }
  const names = { bing: 'Bing', baidu: 'Baidu', google: 'Google' };
  return names[engine] || 'Bing';
}

// 预置图标 id（如 'music-note-2'）→ i18n 键名（presetMusicNote2）
function iconPresetKey(id) {
  return 'preset' + String(id || '').split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('');
}

// 取当前语言字典（供顶层函数使用）
function currentDict() {
  return i18nData[getResolvedLanguageCode(localStorage.getItem('liteStart_language') || 'auto')] || i18nData['zh-CN'];
}

// 刷新「预置」选项的显示文本，并在触发器上补一个已选图标。
// <option> 只能放文本，所以选项文字固定是"预置"，图形只能画在
// .custom-select-text 里（见下面的 .custom-select-preset-icon）。
// 必须与 applyLanguage / refreshCustomSelects 同级：applyLanguage 内部会调用它，
// 否则切语言时触发器会丢掉那个图标。
function updateIconPresetOption() {
  const sel = document.getElementById('select-icon-mode');
  if (!sel) return;
  const opt = sel.querySelector('option[value="preset"]');
  if (!opt) return;
  const base = currentDict().iconPreset || '预置';
  opt.textContent = base;
  refreshCustomSelects();

  const textEl = sel.closest('.custom-select-wrapper')?.querySelector('.custom-select-text');
  if (!textEl) return;
  textEl.querySelector('.custom-select-preset-icon')?.remove();
  const id = window.__iconPresetId || '';
  if (sel.value !== 'preset' || !id) return;
  const body = quicklinkPresetBody(id, window.__iconPresetStyle);
  if (!body) return;
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('class', 'custom-select-preset-icon');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('aria-hidden', 'true');
  svg.innerHTML = body;
  textEl.appendChild(svg);
}

// 主题模式按钮的文案在俄语等语言下会比格子宽；量出溢出距离交给 CSS 来回滚动。
// 与 applyLanguage / refreshCustomSelects 同级：applyLanguage 内部要调用它。
function setupThemeOptionScroll() {
  // 注意：要量"裁切窗口"(.theme-option-label) —— 内层是 inline-block + nowrap，
  // 宽度恒等于全部文字宽，scrollWidth - clientWidth 永远是 0，量它测不出溢出。
  document.querySelectorAll('.theme-option-label').forEach(label => {
    const inner = label.querySelector('.theme-option-label-inner');
    if (!inner) return;
    const overflow = label.scrollWidth - label.clientWidth;
    if (overflow > 1) {
      // 居中导致两端各溢出 half，来回各走 half（+2px 余量，确保能看到首尾字符）
      inner.style.setProperty('--label-scroll-x', (overflow / 2 + 2) + 'px');
      inner.classList.add('overflowing');
    } else {
      inner.classList.remove('overflowing');
      inner.style.removeProperty('--label-scroll-x');
    }
  });
}

// 搜索框提示文本：把模板里的 {name} 换成当前引擎名。
// 必须排在 applyLanguage 的 data-i18n 扫描之后，否则模板会被原样写进 DOM
// 4 月 1 日愚人节：整日使用彩蛋文案（优先级高于"今晚"）。
// 注意 getMonth() 从 0 开始，所以 4 月是 3。
function isAprilFools() {
  const now = new Date();
  return now.getMonth() === 3 && now.getDate() === 1;
}

// 19:40 – 次日 04:00 之间算"今晚"；04:00 整点起回到"今天"。
// 只在页面加载 / 切换语言 / 切换引擎时求值，不做实时轮询。
function isTonight() {
  const now = new Date();
  const h = now.getHours(), m = now.getMinutes();
  if (h < 4) return true;                 // 00:00 – 03:59
  if (h > 19) return true;                // 20:00 – 23:59
  return h === 19 && m >= 40;             // 19:40 – 19:59
}

function applySearchPlaceholder() {
  const el = document.getElementById('placeholder');
  if (!el) return;
  const dict = i18nData[getResolvedLanguageCode(localStorage.getItem('liteStart_language') || 'auto')] || i18nData['zh-CN'];
  // 优先级：愚人节彩蛋 > 今晚 > 今天；任一模板缺失都会自动回退，不会出现空白
  const tpl = (isAprilFools() && dict.searchPlaceholderAprilFool)
    || (isTonight() && dict.searchPlaceholderNight)
    || dict.searchPlaceholder;
  if (!tpl) return;
  const text = String(tpl).replace('{name}', getEngineDisplayName());
  el.textContent = text;
  const fakebox = document.getElementById('fakebox');
  if (fakebox) fakebox.setAttribute('aria-label', text);
}

// 设置里的「自定义」选项：配过自定义引擎就显示成「自定义（名称）」
function updateCustomEngineOption() {
  const sel = document.getElementById('select-engine');
  if (!sel) return;
  const opt = sel.querySelector('option[value="custom"]');
  if (!opt) return;
  const dict = i18nData[getResolvedLanguageCode(localStorage.getItem('liteStart_language') || 'auto')] || i18nData['zh-CN'];
  const cfg = Storage.get('ntp_custom_engine_config', {}) || {};
  const name = cfg.name;
  opt.textContent = name
    ? String(dict.customEngineWithName || '').replace('{name}', name)
    : (dict.custom || '自定义');
  // 自定义下拉面板的选项文本是构建时固化的：这里主动丢弃它，
  // 下次展开时会按新的 option 文本重建（否则会一直显示旧名字）
  document.querySelector('.custom-select-dropdown[data-for-select="select-engine"]')?.remove();
  refreshCustomSelects();
}