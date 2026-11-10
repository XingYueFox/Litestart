const APP_VERSION = '27.0.92';      // 发行版本
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

// 界面语言的存储键与读取入口
const LANG_KEY = 'liteStart_language';

// 「预置」图标选择状态：当前选中的图标 id 与风格
let iconPresetId = '';
let iconPresetStyle = 'filled';

function getSavedLang() {
  return localStorage.getItem(LANG_KEY) || 'auto';
}

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
    language: '页面语言',
    langAuto: '默认（跟随设备）',
    cookieNotice: '隐私政策',
    license: '开源协议',
    contributor: '贡献名单',
    helpFeedback: '帮助&反馈',
    presentedBy: '由',
    xingyuefox: '星月_Fox',
    AomiRaku: '羽梦千景',
    forYou: '为您呈现',
    disclaimer: '此扩展与 Microsoft 无关。',
    aboutTitle: '关于 Litestart',
    download: '下载',
    updateOptions: '更新选项',
    skipThisUpdate: '暂时忽略',
    skipRestore: '恢复提醒',
    updateAvailable: '可用更新',
    aboutDesc: '一个简洁、快速的浏览器起始页。',
    litever: '版本 27.0.92 | 更新时间：2026-11-09',
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
    fillSuggestion: '填入搜索框',
    clearSearchHistory: '清除搜索历史记录',
    defaultWallpaper: '默认',
    localFile: '本地文件',
    onlineWallpaper: '自定义在线链接',
    wallpaper: '壁纸',
    color: '颜色',
    mdColor: '自适应颜色',
    mdColorOff: '关闭',
    mdColorWallpaper: '壁纸',
    mdColorCustom: '手动',
    mdPresets: '预设配色',
    mdPresetDefault: '默认',
    mdPresetBlue: '淡蓝',
    mdPresetPurple: '丁香紫',
    mdPresetGreen: '苔绿',
    mdPresetRed: '陶红',
    mdHueSlider: '自定义',
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
    bingDaily: '必应每日壁纸',
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
    bgVignette: '深色模式边角晕影',
    editBackgroundEntry: '编辑背景',
    newQuicklink: '新建快速链接',
    dontRemindAgain: '不再提醒',
    gotIt: '好',
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
    qlPositionDefault: '跟随搜索框',
    qlPositionBottom: '底部',
    qlPositionMiddle: '居中',
    layoutHanging: '悬挂',
    layoutCentered: '居中',
    showLogo: '显示 Logo',
    showAddButton: '显示添加按钮',
    hideAddButton: '隐藏此按钮',
    addButtonHiddenTitle: '添加按钮已隐藏',
    addButtonHiddenDesc: '添加按钮已隐藏，可右键空白处新建快速链接。<br>也可在 设置 - 编辑页面布局 中重新开启此按钮。',
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
    language: '頁面語言',
    langAuto: '預設（隨設備設定）',
    cookieNotice: '隱私政策',
    license: '開源協議',
    contributor: '貢獻名單',
    helpFeedback: '說明與意見回饋',
    presentedBy: '由',
    xingyuefox: '星月_Fox',
    AomiRaku: '羽梦千景',
    forYou: '為您呈現',
    disclaimer: '此擴充功能與 Microsoft 無關。',
    aboutTitle: '關於 Litestart',
    download: '下載',
    updateOptions: '更新選項',
    skipThisUpdate: '暫時忽略',
    skipRestore: '恢復提醒',
    updateAvailable: '可用更新',
    aboutDesc: '一個簡潔、快速的瀏覽器起始頁。',
    litever: '版本 27.0.92 | 更新時間：2026-11-09',
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
    fillSuggestion: '填入搜尋框',
    clearSearchHistory: '清除搜尋紀錄',
    defaultWallpaper: '預設',
    localFile: '本機檔案',
    onlineWallpaper: '自訂線上連結',
    wallpaper: '桌布',
    color: '顏色',
    mdColor: '自適應顏色',
    mdColorOff: '關閉',
    mdColorWallpaper: '桌布',
    mdColorCustom: '手動',
    mdPresets: '預設配色',
    mdPresetDefault: '預設',
    mdPresetBlue: '淡藍',
    mdPresetPurple: '丁香紫',
    mdPresetGreen: '苔綠',
    mdPresetRed: '陶紅',
    mdHueSlider: '自訂',
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
    bingDaily: 'Bing每日桌布',
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
    bgVignette: '深色模式邊角暈影',
    editBackgroundEntry: '編輯背景',
    newQuicklink: '新建快速連結',
    dontRemindAgain: '不再提醒',
    gotIt: '好',
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
    qlPositionDefault: '跟隨搜尋框',
    qlPositionBottom: '底部',
    qlPositionMiddle: '居中',
    layoutHanging: '懸掛',
    layoutCentered: '居中',
    showLogo: '顯示 Logo',
    showAddButton: '顯示新增按鈕',
    hideAddButton: '隱藏此按鈕',
    addButtonHiddenTitle: '新增按鈕已隱藏',
    addButtonHiddenDesc: '新增按鈕已隱藏，可右鍵空白處新增快速連結。<br>也可在 設定 - 編輯頁面佈局 中重新開啟此按鈕。',
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
    disclaimer: 'This extension is not affiliated with Microsoft.',
    aboutTitle: 'About Litestart',
    download: 'Download',
    updateOptions: 'Update options',
    skipThisUpdate: 'Pause for today',
    skipRestore: 'Resume reminders',
    updateAvailable: 'Update available',
    aboutDesc: 'A simple and fast browser start page.',
    litever: 'Version 27.0.92 | Updated: 2026-11-09',
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
    fillSuggestion: 'Fill into search box',
    clearSearchHistory: 'Clear search history',
    defaultWallpaper: 'Default',
    localFile: 'Local file',
    onlineWallpaper: 'Custom online link',
    wallpaper: 'Wallpaper',
    color: 'Color',
    mdColor: 'Adaptive color',
    mdColorOff: 'Off',
    mdColorWallpaper: 'Wallpaper',
    mdColorCustom: 'Manual',
    mdPresets: 'Presets',
    mdPresetDefault: 'Default',
    mdPresetBlue: 'Pastel blue',
    mdPresetPurple: 'Lilac',
    mdPresetGreen: 'Moss',
    mdPresetRed: 'Terracotta',
    mdHueSlider: 'Custom',
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
    bingDaily: 'Bing daily wallpaper',
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
    bgVignette: 'Dark mode vignette',
    editBackgroundEntry: 'Edit background',
    newQuicklink: 'New quicklink',
    dontRemindAgain: "Don't remind again",
    gotIt: 'OK',
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
    qlPositionDefault: 'Follow search box',
    qlPositionBottom: 'Bottom',
    qlPositionMiddle: 'Center',
    layoutHanging: 'Hanging',
    layoutCentered: 'Centered',
    showLogo: 'Show logo',
    showAddButton: 'Show add button',
    hideAddButton: 'Hide this button',
    addButtonHiddenTitle: 'Add button hidden',
    addButtonHiddenDesc: 'The add button is hidden. Right-click the background to create a quicklink.<br>You can also re-enable it in Settings - Edit Layout.',
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
    disclaimer: 'この拡張機能は Microsoft とは関係ありません。',
    aboutTitle: 'Litestart について',
    download: 'ダウンロード',
    updateOptions: '更新オプション',
    skipThisUpdate: '今日は表示しない',
    skipRestore: '通知を再開',
    updateAvailable: 'アップデートがあります',
    aboutDesc: 'シンプルで高速なブラウザスタートページです。',
    litever: 'バージョン 27.0.92 | 更新日: 2026-11-09',
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
    fillSuggestion: '検索ボックスに入力',
    clearSearchHistory: '検索履歴を消去',
    defaultWallpaper: 'デフォルト',
    localFile: 'ローカルファイル',
    onlineWallpaper: 'カスタムオンラインリンク',
    wallpaper: '壁紙',
    color: '色',
    mdColor: 'アダプティブカラー',
    mdColorOff: 'オフ',
    mdColorWallpaper: '壁紙',
    mdColorCustom: '手動',
    mdPresets: 'プリセット',
    mdPresetDefault: '既定',
    mdPresetBlue: 'ペールブルー',
    mdPresetPurple: 'ライラック',
    mdPresetGreen: 'モス',
    mdPresetRed: 'テラコッタ',
    mdHueSlider: 'カスタム',
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
    bingDaily: 'Bingの今日の壁紙',
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
    bgVignette: 'ダークモードのビネット',
    editBackgroundEntry: '背景を編集',
    newQuicklink: 'クイックリンクを新規作成',
    dontRemindAgain: '今後表示しない',
    gotIt: 'OK',
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
    qlPositionDefault: '検索ボックスに合わせる',
    qlPositionBottom: '下部',
    qlPositionMiddle: '中央',
    layoutHanging: 'ハンギング',
    layoutCentered: '中央',
    showLogo: 'ロゴを表示',
    showAddButton: '追加ボタンを表示',
    hideAddButton: 'このボタンを非表示',
    addButtonHiddenTitle: '追加ボタンを非表示にしました',
    addButtonHiddenDesc: '追加ボタンは非表示です。背景を右クリックしてクイックリンクを作成できます。<br>「設定 - レイアウトを編集」で再度有効にできます。',
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
    disclaimer: 'Это расширение не связано с Microsoft.',
    aboutTitle: 'О Litestart',
    download: 'Скачать',
    updateOptions: 'Параметры обновления',
    skipThisUpdate: 'Отложить до завтра',
    skipRestore: 'Возобновить напоминания',
    updateAvailable: 'Доступно обновление',
    aboutDesc: 'Простая и быстрая страница запуска браузера.',
    litever: 'Версия 27.0.92 | Обновлено: 2026-11-09',
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
    fillSuggestion: 'Вставить в поле поиска',
    clearSearchHistory: 'Очистить историю поиска',
    defaultWallpaper: 'По умолчанию',
    localFile: 'Локальный файл',
    onlineWallpaper: 'Своя онлайн-ссылка',
    wallpaper: 'Обои',
    color: 'Цвет',
    mdColor: 'Адаптивный цвет',
    mdColorOff: 'Выкл.',
    mdColorWallpaper: 'Обои',
    mdColorCustom: 'Вручную',
    mdPresets: 'Пресеты',
    mdPresetDefault: 'По умолчанию',
    mdPresetBlue: 'Бледно-синий',
    mdPresetPurple: 'Сиреневый',
    mdPresetGreen: 'Мшистый',
    mdPresetRed: 'Терракота',
    mdHueSlider: 'Свой цвет',
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
    bingDaily: 'Ежедневные обои Bing',
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
    bgVignette: 'Виньетка тёмной темы',
    editBackgroundEntry: 'Изменить фон',
    newQuicklink: 'Создать быструю ссылку',
    dontRemindAgain: 'Больше не напоминать',
    gotIt: 'Хорошо',
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
    qlPositionDefault: 'Следовать за полем поиска',
    qlPositionBottom: 'Внизу',
    qlPositionMiddle: 'По центру',
    layoutHanging: 'Подвесной',
    layoutCentered: 'По центру',
    showLogo: 'Показывать логотип',
    showAddButton: 'Показать кнопку добавления',
    hideAddButton: 'Скрыть кнопку',
    addButtonHiddenTitle: 'Кнопка добавления скрыта',
    addButtonHiddenDesc: 'Кнопка добавления скрыта. Создайте быструю ссылку правым щелчком по фону.<br>Её можно снова включить в разделе «Настройки — Изменить макет».',
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
// 按当前存储的语言重新应用一次文案
function reapplyLanguage() {
  applyLanguage(getSavedLang());
}

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
      source: data.source,
      // 壁纸内容标识：壁纸取色缓存按它区分同一张图与换图
      mdId: Date.now().toString(36) + Math.random().toString(36).slice(2, 8)
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
  { id: "home", body: "<path fill=\"currentColor\" d=\"M160-200v-360q0-19 8.5-36t23.5-28l240-180q21-16 48-16t48 16l240 180q15 11 23.5 28t8.5 36v360q0 33-23.5 56.5T720-120H600q-17 0-28.5-11.5T560-160v-200q0-17-11.5-28.5T520-400h-80q-17 0-28.5 11.5T400-360v200q0 17-11.5 28.5T360-120H240q-33 0-56.5-23.5T160-200Z\"/>", regular: "<path fill=\"currentColor\" d=\"M240-200h120v-200q0-17 11.5-28.5T400-440h160q17 0 28.5 11.5T600-400v200h120v-360L480-740 240-560v360Zm-80 0v-360q0-19 8.5-36t23.5-28l240-180q21-16 48-16t48 16l240 180q15 11 23.5 28t8.5 36v360q0 33-23.5 56.5T720-120H560q-17 0-28.5-11.5T520-160v-200h-80v200q0 17-11.5 28.5T400-120H240q-33 0-56.5-23.5T160-200Zm320-270Z\"/>" },
  { id: "search", body: "<path fill=\"currentColor\" d=\"M380-320q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l224 224q11 11 11 28t-11 28q-11 11-28 11t-28-11L532-372q-30 24-69 38t-83 14Zm0-80q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z\"/>", regular: "<path fill=\"currentColor\" d=\"M380-320q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l224 224q11 11 11 28t-11 28q-11 11-28 11t-28-11L532-372q-30 24-69 38t-83 14Zm0-80q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z\"/>" },
  { id: "bookmark", body: "<path fill=\"currentColor\" d=\"m400-200-182 91q-20 10-39-1.5T160-145v-495q0-33 23.5-56.5T240-720h320q33 0 56.5 23.5T640-640v495q0 23-19 34.5t-39 1.5l-182-91Zm331.5-51.5Q720-263 720-280v-520H320q-17 0-28.5-11.5T280-840q0-17 11.5-28.5T320-880h400q33 0 56.5 23.5T800-800v520q0 17-11.5 28.5T760-240q-17 0-28.5-11.5Z\"/>", regular: "<path fill=\"currentColor\" d=\"m400-200-182 91q-20 10-39-1.5T160-145v-495q0-33 23.5-56.5T240-720h320q33 0 56.5 23.5T640-640v495q0 23-19 34.5t-39 1.5l-182-91Zm-160-1 122-66q18-10 38-10t38 10l122 66v-439H240v439Zm491.5-50.5Q720-263 720-280v-520H320q-17 0-28.5-11.5T280-840q0-17 11.5-28.5T320-880h400q33 0 56.5 23.5T800-800v520q0 17-11.5 28.5T760-240q-17 0-28.5-11.5ZM240-640h320-320Z\"/>" },
  { id: "star", body: "<path fill=\"currentColor\" d=\"M480-269 314-169q-11 7-23 6t-21-8q-9-7-14-17.5t-2-23.5l44-189-147-127q-10-9-12.5-20.5T140-571q4-11 12-18t22-9l194-17 75-178q5-12 15.5-18t21.5-6q11 0 21.5 6t15.5 18l75 178 194 17q14 2 22 9t12 18q4 11 1.5 22.5T809-528L662-401l44 189q3 13-2 23.5T690-171q-9 7-21 8t-23-6L480-269Z\"/>", regular: "<path fill=\"currentColor\" d=\"m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143Zm126 18L314-169q-11 7-23 6t-21-8q-9-7-14-17.5t-2-23.5l44-189-147-127q-10-9-12.5-20.5T140-571q4-11 12-18t22-9l194-17 75-178q5-12 15.5-18t21.5-6q11 0 21.5 6t15.5 18l75 178 194 17q14 2 22 9t12 18q4 11 1.5 22.5T809-528L662-401l44 189q3 13-2 23.5T690-171q-9 7-21 8t-23-6L480-269Zm0-201Z\"/>" },
  { id: "heart", body: "<path fill=\"currentColor\" d=\"M451.5-152q-14.5-5-25.5-16l-69-63q-106-97-191.5-192.5T80-634q0-94 63-157t157-63q53 0 100 22.5t80 61.5q33-39 80-61.5T660-854q94 0 157 63t63 157q0 115-85 211T602-230l-68 62q-11 11-25.5 16t-28.5 5q-14 0-28.5-5Z\"/>", regular: "<path fill=\"currentColor\" d=\"M451.5-152q-14.5-5-25.5-16l-69-63q-106-97-191.5-192.5T80-634q0-94 63-157t157-63q53 0 100 22.5t80 61.5q33-39 80-61.5T660-854q94 0 157 63t63 157q0 115-85 211T602-230l-68 62q-11 11-25.5 16t-28.5 5q-14 0-28.5-5ZM442-690q-29-41-62-62.5T300-774q-60 0-100 40t-40 100q0 52 37 110.5T285.5-410q51.5 55 106 103t88.5 79q34-31 88.5-79t106-103Q726-465 763-523.5T800-634q0-60-40-100t-100-40q-47 0-80 21.5T518-690q-7 10-17 15t-21 5q-11 0-21-5t-17-15Zm38 189Z\"/>" },
  { id: "mail", body: "<path fill=\"currentColor\" d=\"M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm330.5-288.5Q496-450 501-453l283-177q8-5 12-12.5t4-16.5q0-20-17-30t-35 1L480-520 212-688q-18-11-35-.5T160-659q0 10 4 17.5t12 11.5l283 177q5 3 10.5 4.5T480-447q5 0 10.5-1.5Z\"/>", regular: "<path fill=\"currentColor\" d=\"M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm640-480L501-453q-5 3-10.5 4.5T480-447q-5 0-10.5-1.5T459-453L160-640v400h640v-400ZM480-520l320-200H160l320 200ZM160-640v10-59 1-32 32-.5 58.5-10 400-400Z\"/>" },
  { id: "chat", body: "<path fill=\"currentColor\" d=\"m240-240-92 92q-19 19-43.5 8.5T80-177v-623q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240Zm40-160h240q17 0 28.5-11.5T560-440q0-17-11.5-28.5T520-480H280q-17 0-28.5 11.5T240-440q0 17 11.5 28.5T280-400Zm0-120h400q17 0 28.5-11.5T720-560q0-17-11.5-28.5T680-600H280q-17 0-28.5 11.5T240-560q0 17 11.5 28.5T280-520Zm0-120h400q17 0 28.5-11.5T720-680q0-17-11.5-28.5T680-720H280q-17 0-28.5 11.5T240-680q0 17 11.5 28.5T280-640Z\"/>", regular: "<path fill=\"currentColor\" d=\"m240-240-92 92q-19 19-43.5 8.5T80-177v-623q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240Zm-34-80h594v-480H160v525l46-45Zm-46 0v-480 480Zm120-80h240q17 0 28.5-11.5T560-440q0-17-11.5-28.5T520-480H280q-17 0-28.5 11.5T240-440q0 17 11.5 28.5T280-400Zm0-120h400q17 0 28.5-11.5T720-560q0-17-11.5-28.5T680-600H280q-17 0-28.5 11.5T240-560q0 17 11.5 28.5T280-520Zm0-120h400q17 0 28.5-11.5T720-680q0-17-11.5-28.5T680-720H280q-17 0-28.5 11.5T240-680q0 17 11.5 28.5T280-640Z\"/>" },
  { id: "video", body: "<path fill=\"currentColor\" d=\"M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h480q33 0 56.5 23.5T720-720v180l126-126q10-10 22-5t12 19v344q0 14-12 19t-22-5L720-420v180q0 33-23.5 56.5T640-160H160Z\"/>", regular: "<path fill=\"currentColor\" d=\"M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h480q33 0 56.5 23.5T720-720v180l126-126q10-10 22-5t12 19v344q0 14-12 19t-22-5L720-420v180q0 33-23.5 56.5T640-160H160Zm0-80h480v-480H160v480Zm0 0v-480 480Z\"/>" },
  { id: "music-note-2", body: "<path fill=\"currentColor\" d=\"M287-167q-47-47-47-113t47-113q47-47 113-47 23 0 42.5 5.5T480-418v-382q0-17 11.5-28.5T520-840h160q17 0 28.5 11.5T720-800v80q0 17-11.5 28.5T680-680H560v400q0 66-47 113t-113 47q-66 0-113-47Z\"/>", regular: "<path fill=\"currentColor\" d=\"M287-167q-47-47-47-113t47-113q47-47 113-47 23 0 42.5 5.5T480-418v-382q0-17 11.5-28.5T520-840h160q17 0 28.5 11.5T720-800v80q0 17-11.5 28.5T680-680H560v400q0 66-47 113t-113 47q-66 0-113-47Z\"/>" },
  { id: "image", body: "<path fill=\"currentColor\" d=\"M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm80-160h400q12 0 18-11t-2-21L586-459q-6-8-16-8t-16 8L450-320l-74-99q-6-8-16-8t-16 8l-80 107q-8 10-2 21t18 11Z\"/>", regular: "<path fill=\"currentColor\" d=\"M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0 0v-560 560Zm80-80h400q12 0 18-11t-2-21L586-459q-6-8-16-8t-16 8L450-320l-74-99q-6-8-16-8t-16 8l-80 107q-8 10-2 21t18 11Z\"/>" },
  { id: "document", body: "<path fill=\"currentColor\" d=\"M360-240h240q17 0 28.5-11.5T640-280q0-17-11.5-28.5T600-320H360q-17 0-28.5 11.5T320-280q0 17 11.5 28.5T360-240Zm0-160h240q17 0 28.5-11.5T640-440q0-17-11.5-28.5T600-480H360q-17 0-28.5 11.5T320-440q0 17 11.5 28.5T360-400ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h287q16 0 30.5 6t25.5 17l194 194q11 11 17 25.5t6 30.5v447q0 33-23.5 56.5T720-80H240Zm280-560q0 17 11.5 28.5T560-600h160L520-800v160Z\"/>", regular: "<path fill=\"currentColor\" d=\"M360-240h240q17 0 28.5-11.5T640-280q0-17-11.5-28.5T600-320H360q-17 0-28.5 11.5T320-280q0 17 11.5 28.5T360-240Zm0-160h240q17 0 28.5-11.5T640-440q0-17-11.5-28.5T600-480H360q-17 0-28.5 11.5T320-440q0 17 11.5 28.5T360-400ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h287q16 0 30.5 6t25.5 17l194 194q11 11 17 25.5t6 30.5v447q0 33-23.5 56.5T720-80H240Zm280-560v-160H240v640h480v-440H560q-17 0-28.5-11.5T520-640ZM240-800v200-200 640-640Z\"/>" },
  { id: "book", body: "<path fill=\"currentColor\" d=\"M520-278q44-21 88.5-31.5T700-320q36 0 70.5 6t69.5 18v-396q-33-14-68.5-21t-71.5-7q-47 0-93 12t-87 36v394Zm-66.5 93.5Q441-188 430-194q-39-23-82-34.5T260-240q-42 0-82.5 11T100-198q-21 11-40.5-1T40-234v-482q0-11 5.5-21T62-752q47-23 96.5-35.5T260-800q58 0 113.5 15T480-740q51-30 106.5-45T700-800q52 0 101.5 12.5T898-752q11 5 16.5 15t5.5 21v482q0 23-19.5 35t-40.5 1q-37-20-77.5-31T700-240q-45 0-88 11.5T530-194q-11 6-23.5 9.5T480-181q-14 0-26.5-3.5ZM560-609q0-9 6.5-18.5T581-640q29-10 58-15t61-5q20 0 39.5 2.5T778-651q9 2 15.5 10t6.5 18q0 17-11 25t-28 4q-14-3-29.5-4.5T700-600q-26 0-51 5t-48 13q-18 7-29.5-1T560-609Zm0 220q0-9 6.5-18.5T581-420q29-10 58-15t61-5q20 0 39.5 2.5T778-431q9 2 15.5 10t6.5 18q0 17-11 25t-28 4q-14-3-29.5-4.5T700-380q-26 0-51 4.5T601-363q-18 7-29.5-.5T560-389Zm0-110q0-9 6.5-18.5T581-530q29-10 58-15t61-5q20 0 39.5 2.5T778-541q9 2 15.5 10t6.5 18q0 17-11 25t-28 4q-14-3-29.5-4.5T700-490q-26 0-51 5t-48 13q-18 7-29.5-1T560-499Z\"/>", regular: "<path fill=\"currentColor\" d=\"M260-320q47 0 91.5 10.5T440-278v-394q-41-24-87-36t-93-12q-36 0-71.5 7T120-692v396q35-12 69.5-18t70.5-6Zm260 42q44-21 88.5-31.5T700-320q36 0 70.5 6t69.5 18v-396q-33-14-68.5-21t-71.5-7q-47 0-93 12t-87 36v394Zm-66.5 93.5Q441-188 430-194q-39-23-82-34.5T260-240q-42 0-82.5 11T100-198q-21 11-40.5-1T40-234v-482q0-11 5.5-21T62-752q46-24 96-36t102-12q58 0 113.5 15T480-740q51-30 106.5-45T700-800q52 0 102 12t96 36q11 5 16.5 15t5.5 21v482q0 23-19.5 35t-40.5 1q-37-20-77.5-31T700-240q-45 0-88 11.5T530-194q-11 6-23.5 9.5T480-181q-14 0-26.5-3.5ZM280-494Zm280-115q0-9 6.5-18.5T581-640q29-10 58-15t61-5q20 0 39.5 2.5T778-651q9 2 15.5 10t6.5 18q0 17-11 25t-28 4q-14-3-29.5-4.5T700-600q-26 0-51 5t-48 13q-18 7-29.5-1T560-609Zm0 220q0-9 6.5-18.5T581-420q29-10 58-15t61-5q20 0 39.5 2.5T778-431q9 2 15.5 10t6.5 18q0 17-11 25t-28 4q-14-3-29.5-4.5T700-380q-26 0-51 4.5T601-363q-18 7-29.5-.5T560-389Zm0-110q0-9 6.5-18.5T581-530q29-10 58-15t61-5q20 0 39.5 2.5T778-541q9 2 15.5 10t6.5 18q0 17-11 25t-28 4q-14-3-29.5-4.5T700-490q-26 0-51 5t-48 13q-18 7-29.5-1T560-499Z\"/>" },
  { id: "code", body: "<path fill=\"currentColor\" d=\"m193-479 155 155q11 11 11 28t-11 28q-11 11-28 11t-28-11L108-452q-6-6-8.5-13T97-480q0-8 2.5-15t8.5-13l184-184q12-12 28.5-12t28.5 12q12 12 12 28.5T349-635L193-479Zm574-2L612-636q-11-11-11-28t11-28q11-11 28-11t28 11l184 184q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L668-268q-12 12-28 11.5T612-269q-12-12-12-28.5t12-28.5l155-155Z\"/>", regular: "<path fill=\"currentColor\" d=\"m193-479 155 155q11 11 11 28t-11 28q-11 11-28 11t-28-11L108-452q-6-6-8.5-13T97-480q0-8 2.5-15t8.5-13l184-184q12-12 28.5-12t28.5 12q12 12 12 28.5T349-635L193-479Zm574-2L612-636q-11-11-11-28t11-28q11-11 28-11t28 11l184 184q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L668-268q-12 12-28 11.5T612-269q-12-12-12-28.5t12-28.5l155-155Z\"/>" },
  { id: "cloud", body: "<path fill=\"currentColor\" d=\"M260-160q-91 0-155.5-63T40-377q0-78 47-139t123-78q25-92 100-149t170-57q117 0 198.5 81.5T760-520q69 8 114.5 59.5T920-340q0 75-52.5 127.5T740-160H260Z\"/>", regular: "<path fill=\"currentColor\" d=\"M260-160q-91 0-155.5-63T40-377q0-78 47-139t123-78q25-92 100-149t170-57q117 0 198.5 81.5T760-520q69 8 114.5 59.5T920-340q0 75-52.5 127.5T740-160H260Zm0-80h480q42 0 71-29t29-71q0-42-29-71t-71-29h-60v-80q0-83-58.5-141.5T480-720q-83 0-141.5 58.5T280-520h-20q-58 0-99 41t-41 99q0 58 41 99t99 41Zm220-240Z\"/>" },
  { id: "globe", body: "<path fill=\"currentColor\" d=\"M325-111.5q-73-31.5-127.5-86t-86-127.5Q80-398 80-480.5t31.5-155q31.5-72.5 86-127t127.5-86Q398-880 480.5-880t155 31.5q72.5 31.5 127 86t86 127Q880-563 880-480.5T848.5-325q-31.5 73-86 127.5t-127 86Q563-80 480.5-80T325-111.5ZM480-162q26-36 45-75t31-83H404q12 44 31 83t45 75Zm-104-16q-18-33-31.5-68.5T322-320H204q29 50 72.5 87t99.5 55Zm208 0q56-18 99.5-55t72.5-87H638q-9 38-22.5 73.5T584-178ZM170-400h136q-3-20-4.5-39.5T300-480q0-21 1.5-40.5T306-560H170q-5 20-7.5 39.5T160-480q0 21 2.5 40.5T170-400Zm216 0h188q3-20 4.5-39.5T580-480q0-21-1.5-40.5T574-560H386q-3 20-4.5 39.5T380-480q0 21 1.5 40.5T386-400Zm268 0h136q5-20 7.5-39.5T800-480q0-21-2.5-40.5T790-560H654q3 20 4.5 39.5T660-480q0 21-1.5 40.5T654-400Zm-16-240h118q-29-50-72.5-87T584-782q18 33 31.5 68.5T638-640Zm-234 0h152q-12-44-31-83t-45-75q-26 36-45 75t-31 83Zm-200 0h118q9-38 22.5-73.5T376-782q-56 18-99.5 55T204-640Z\"/>", regular: "<path fill=\"currentColor\" d=\"M325-111.5q-73-31.5-127.5-86t-86-127.5Q80-398 80-480.5t31.5-155q31.5-72.5 86-127t127.5-86Q398-880 480.5-880t155 31.5q72.5 31.5 127 86t86 127Q880-563 880-480.5T848.5-325q-31.5 73-86 127.5t-127 86Q563-80 480.5-80T325-111.5ZM480-162q26-36 45-75t31-83H404q12 44 31 83t45 75Zm-104-16q-18-33-31.5-68.5T322-320H204q29 50 72.5 87t99.5 55Zm208 0q56-18 99.5-55t72.5-87H638q-9 38-22.5 73.5T584-178ZM170-400h136q-3-20-4.5-39.5T300-480q0-21 1.5-40.5T306-560H170q-5 20-7.5 39.5T160-480q0 21 2.5 40.5T170-400Zm216 0h188q3-20 4.5-39.5T580-480q0-21-1.5-40.5T574-560H386q-3 20-4.5 39.5T380-480q0 21 1.5 40.5T386-400Zm268 0h136q5-20 7.5-39.5T800-480q0-21-2.5-40.5T790-560H654q3 20 4.5 39.5T660-480q0 21-1.5 40.5T654-400Zm-16-240h118q-29-50-72.5-87T584-782q18 33 31.5 68.5T638-640Zm-234 0h152q-12-44-31-83t-45-75q-26 36-45 75t-31 83Zm-200 0h118q9-38 22.5-73.5T376-782q-56 18-99.5 55T204-640Z\"/>" },
  { id: "cart", body: "<path fill=\"currentColor\" d=\"M223.5-103.5Q200-127 200-160t23.5-56.5Q247-240 280-240t56.5 23.5Q360-193 360-160t-23.5 56.5Q313-80 280-80t-56.5-23.5Zm400 0Q600-127 600-160t23.5-56.5Q647-240 680-240t56.5 23.5Q760-193 760-160t-23.5 56.5Q713-80 680-80t-56.5-23.5ZM208-800h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h440q17 0 28.5 11.5T760-320q0 17-11.5 28.5T720-280H280q-45 0-68-39.5t-2-78.5l54-98-144-304H80q-17 0-28.5-11.5T40-840q0-17 11.5-28.5T80-880h65q11 0 21 6t15 17l27 57Z\"/>", regular: "<path fill=\"currentColor\" d=\"M223.5-103.5Q200-127 200-160t23.5-56.5Q247-240 280-240t56.5 23.5Q360-193 360-160t-23.5 56.5Q313-80 280-80t-56.5-23.5Zm400 0Q600-127 600-160t23.5-56.5Q647-240 680-240t56.5 23.5Q760-193 760-160t-23.5 56.5Q713-80 680-80t-56.5-23.5ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h440q17 0 28.5 11.5T760-320q0 17-11.5 28.5T720-280H280q-45 0-68-39.5t-2-78.5l54-98-144-304H80q-17 0-28.5-11.5T40-840q0-17 11.5-28.5T80-880h65q11 0 21 6t15 17l27 57Zm134 280h280-280Z\"/>" },
  { id: "wallet", body: "<path fill=\"currentColor\" d=\"M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760H520q-71 0-115.5 44.5T360-600v240q0 71 44.5 115.5T520-200h320q0 33-23.5 56.5T760-120H200Zm320-160q-33 0-56.5-23.5T440-360v-240q0-33 23.5-56.5T520-680h280q33 0 56.5 23.5T880-600v240q0 33-23.5 56.5T800-280H520Zm163-157q17-17 17-43t-17-43q-17-17-43-17t-43 17q-17 17-17 43t17 43q17 17 43 17t43-17Z\"/>", regular: "<path fill=\"currentColor\" d=\"M200-200v-560 560Zm0 80q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v100h-80v-100H200v560h560v-100h80v100q0 33-23.5 56.5T760-120H200Zm320-160q-33 0-56.5-23.5T440-360v-240q0-33 23.5-56.5T520-680h280q33 0 56.5 23.5T880-600v240q0 33-23.5 56.5T800-280H520Zm280-80v-240H520v240h280Zm-117.5-77.5Q700-455 700-480t-17.5-42.5Q665-540 640-540t-42.5 17.5Q580-505 580-480t17.5 42.5Q615-420 640-420t42.5-17.5Z\"/>" },
  { id: "gift", body: "<path fill=\"currentColor\" d=\"M160-280v80h640v-80H160Zm0-440h88q-5-9-6.5-19t-1.5-21q0-50 35-85t85-35q30 0 55.5 15.5T460-826l20 26 20-26q18-24 44-39t56-15q50 0 85 35t35 85q0 11-1.5 21t-6.5 19h88q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120H160q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720Zm0 320h640v-240H596l60 82q10 14 8 29.5T648-503q-14 10-29.5 7.5T593-511L480-664 367-511q-10 13-25.5 15.5T312-503q-14-10-16.5-25.5T303-558l59-82H160v240Zm228.5-331.5Q400-743 400-760t-11.5-28.5Q377-800 360-800t-28.5 11.5Q320-777 320-760t11.5 28.5Q343-720 360-720t28.5-11.5ZM600-720q17 0 28.5-11.5T640-760q0-17-11.5-28.5T600-800q-17 0-28.5 11.5T560-760q0 17 11.5 28.5T600-720Z\"/>", regular: "<path fill=\"currentColor\" d=\"M160-280v80h640v-80H160Zm0-440h88q-5-9-6.5-19t-1.5-21q0-50 35-85t85-35q30 0 55.5 15.5T460-826l20 26 20-26q18-24 44-39t56-15q50 0 85 35t35 85q0 11-1.5 21t-6.5 19h88q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120H160q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720Zm0 320h640v-240H596l60 82q10 14 8 29.5T648-503q-14 10-29.5 7.5T593-511L480-664 367-511q-10 13-25.5 15.5T312-503q-14-10-16.5-25.5T303-558l59-82H160v240Zm228.5-331.5Q400-743 400-760t-11.5-28.5Q377-800 360-800t-28.5 11.5Q320-777 320-760t11.5 28.5Q343-720 360-720t28.5-11.5ZM600-720q17 0 28.5-11.5T640-760q0-17-11.5-28.5T600-800q-17 0-28.5 11.5T560-760q0 17 11.5 28.5T600-720Z\"/>" },
  { id: "games", body: "<path fill=\"currentColor\" d=\"M182-200q-51 0-79-35.5T82-322l42-300q9-60 53.5-99T282-760h396q60 0 104.5 39t53.5 99l42 300q7 51-21 86.5T778-200q-21 0-39-7.5T706-230l-90-90H344l-90 90q-15 15-33 22.5t-39 7.5Zm526.5-251.5Q720-463 720-480t-11.5-28.5Q697-520 680-520t-28.5 11.5Q640-497 640-480t11.5 28.5Q663-440 680-440t28.5-11.5Zm-80-120Q640-583 640-600t-11.5-28.5Q617-640 600-640t-28.5 11.5Q560-617 560-600t11.5 28.5Q583-560 600-560t28.5-11.5ZM310-510v40q0 13 8.5 21.5T340-440q13 0 21.5-8.5T370-470v-40h40q13 0 21.5-8.5T440-540q0-13-8.5-21.5T410-570h-40v-40q0-13-8.5-21.5T340-640q-13 0-21.5 8.5T310-610v40h-40q-13 0-21.5 8.5T240-540q0 13 8.5 21.5T270-510h40Z\"/>", regular: "<path fill=\"currentColor\" d=\"M182-200q-51 0-79-35.5T82-322l42-300q9-60 53.5-99T282-760h396q60 0 104.5 39t53.5 99l42 300q7 51-21 86.5T778-200q-21 0-39-7.5T706-230l-90-90H344l-90 90q-15 15-33 22.5t-39 7.5Zm16-86 114-114h336l114 114q2 2 16 6 11 0 17.5-6.5T800-304l-44-308q-4-29-26-48.5T678-680H282q-30 0-52 19.5T204-612l-44 308q-2 11 4.5 17.5T182-280q2 0 16-6Zm510.5-165.5Q720-463 720-480t-11.5-28.5Q697-520 680-520t-28.5 11.5Q640-497 640-480t11.5 28.5Q663-440 680-440t28.5-11.5Zm-80-120Q640-583 640-600t-11.5-28.5Q617-640 600-640t-28.5 11.5Q560-617 560-600t11.5 28.5Q583-560 600-560t28.5-11.5ZM480-480Zm-170-30v40q0 13 8.5 21.5T340-440q13 0 21.5-8.5T370-470v-40h40q13 0 21.5-8.5T440-540q0-13-8.5-21.5T410-570h-40v-40q0-13-8.5-21.5T340-640q-13 0-21.5 8.5T310-610v40h-40q-13 0-21.5 8.5T240-540q0 13 8.5 21.5T270-510h40Z\"/>" },
  { id: "calendar", body: "<path fill=\"currentColor\" d=\"M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-40q0-17 11.5-28.5T280-880q17 0 28.5 11.5T320-840v40h320v-40q0-17 11.5-28.5T680-880q17 0 28.5 11.5T720-840v40h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm280-240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-188.5-11.5Q280-423 280-440t11.5-28.5Q303-480 320-480t28.5 11.5Q360-457 360-440t-11.5 28.5Q337-400 320-400t-28.5-11.5ZM640-400q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-188.5-11.5Q280-263 280-280t11.5-28.5Q303-320 320-320t28.5 11.5Q360-297 360-280t-11.5 28.5Q337-240 320-240t-28.5-11.5ZM640-240q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z\"/>", regular: "<path fill=\"currentColor\" d=\"M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-40q0-17 11.5-28.5T280-880q17 0 28.5 11.5T320-840v40h320v-40q0-17 11.5-28.5T680-880q17 0 28.5 11.5T720-840v40h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-188.5-11.5Q280-423 280-440t11.5-28.5Q303-480 320-480t28.5 11.5Q360-457 360-440t-11.5 28.5Q337-400 320-400t-28.5-11.5ZM640-400q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-188.5-11.5Q280-263 280-280t11.5-28.5Q303-320 320-320t28.5 11.5Q360-297 360-280t-11.5 28.5Q337-240 320-240t-28.5-11.5ZM640-240q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z\"/>" },
  { id: "clock", body: "<path fill=\"currentColor\" d=\"M520-496v-144q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640v159q0 8 3 15.5t9 13.5l132 132q11 11 28 11t28-11q11-11 11-28t-11-28L520-496ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z\"/>", regular: "<path fill=\"currentColor\" d=\"M520-496v-144q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640v159q0 8 3 15.5t9 13.5l132 132q11 11 28 11t28-11q11-11 11-28t-11-28L520-496ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z\"/>" },
  { id: "person", body: "<path fill=\"currentColor\" d=\"M367-527q-47-47-47-113t47-113q47-47 113-47t113 47q47 47 47 113t-47 113q-47 47-113 47t-113-47ZM160-240v-32q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v32q0 33-23.5 56.5T720-160H240q-33 0-56.5-23.5T160-240Z\"/>", regular: "<path fill=\"currentColor\" d=\"M367-527q-47-47-47-113t47-113q47-47 113-47t113 47q47 47 47 113t-47 113q-47 47-113 47t-113-47ZM160-240v-32q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v32q0 33-23.5 56.5T720-160H240q-33 0-56.5-23.5T160-240Zm80 0h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm296.5-343.5Q560-607 560-640t-23.5-56.5Q513-720 480-720t-56.5 23.5Q400-673 400-640t23.5 56.5Q447-560 480-560t56.5-23.5ZM480-640Zm0 400Z\"/>" },
  { id: "people", body: "<path fill=\"currentColor\" d=\"M40-272q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v32q0 33-23.5 56.5T600-160H120q-33 0-56.5-23.5T40-240v-32Zm698 112q11-18 16.5-38.5T760-240v-40q0-44-24.5-84.5T666-434q51 6 96 20.5t84 35.5q36 20 55 44.5t19 53.5v40q0 33-23.5 56.5T840-160H738ZM247-527q-47-47-47-113t47-113q47-47 113-47t113 47q47 47 47 113t-47 113q-47 47-113 47t-113-47Zm466 0q-47 47-113 47-11 0-28-2.5t-28-5.5q27-32 41.5-71t14.5-81q0-42-14.5-81T544-792q14-5 28-6.5t28-1.5q66 0 113 47t47 113q0 66-47 113Z\"/>", regular: "<path fill=\"currentColor\" d=\"M40-272q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v32q0 33-23.5 56.5T600-160H120q-33 0-56.5-23.5T40-240v-32Zm800 112H738q11-18 16.5-38.5T760-240v-40q0-44-24.5-84.5T666-434q51 6 96 20.5t84 35.5q36 20 55 44.5t19 53.5v40q0 33-23.5 56.5T840-160ZM247-527q-47-47-47-113t47-113q47-47 113-47t113 47q47 47 47 113t-47 113q-47 47-113 47t-113-47Zm466 0q-47 47-113 47-11 0-28-2.5t-28-5.5q27-32 41.5-71t14.5-81q0-42-14.5-81T544-792q14-5 28-6.5t28-1.5q66 0 113 47t47 113q0 66-47 113ZM120-240h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm296.5-343.5Q440-607 440-640t-23.5-56.5Q393-720 360-720t-56.5 23.5Q280-673 280-640t23.5 56.5Q327-560 360-560t56.5-23.5ZM360-240Zm0-400Z\"/>" },
  { id: "briefcase", body: "<path fill=\"currentColor\" d=\"M160-120q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120H160Zm240-600h160v-80H400v80Z\"/>", regular: "<path fill=\"currentColor\" d=\"M160-120q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120H160Zm0-80h640v-440H160v440Zm240-520h160v-80H400v80ZM160-200v-440 440Z\"/>" },
  { id: "document-text", body: "<path fill=\"currentColor\" d=\"M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm120-160h200q17 0 28.5-11.5T560-320q0-17-11.5-28.5T520-360H320q-17 0-28.5 11.5T280-320q0 17 11.5 28.5T320-280Zm0-160h320q17 0 28.5-11.5T680-480q0-17-11.5-28.5T640-520H320q-17 0-28.5 11.5T280-480q0 17 11.5 28.5T320-440Zm0-160h320q17 0 28.5-11.5T680-640q0-17-11.5-28.5T640-680H320q-17 0-28.5 11.5T280-640q0 17 11.5 28.5T320-600Z\"/>", regular: "<path fill=\"currentColor\" d=\"M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Zm120 480h200q17 0 28.5-11.5T560-320q0-17-11.5-28.5T520-360H320q-17 0-28.5 11.5T280-320q0 17 11.5 28.5T320-280Zm0-160h320q17 0 28.5-11.5T680-480q0-17-11.5-28.5T640-520H320q-17 0-28.5 11.5T280-480q0 17 11.5 28.5T320-440Zm0-160h320q17 0 28.5-11.5T680-640q0-17-11.5-28.5T640-680H320q-17 0-28.5 11.5T280-640q0 17 11.5 28.5T320-600Z\"/>" },
  { id: "news", body: "<path fill=\"currentColor\" d=\"M160-120q-33 0-56.5-23.5T80-200v-616q0-7 6-9.5t11 2.5l50 50 52-53q6-6 14-6t14 6l53 53 53-53q6-6 14-6t14 6l52 53 53-53q6-6 14-6t14 6l53 53 52-53q6-6 14-6t14 6l53 53 53-53q6-6 14-6t14 6l52 53 50-50q5-5 11-2.5t6 9.5v616q0 33-23.5 56.5T800-120H160Zm0-80h280v-240H160v240Zm360 0h280v-80H520v80Zm0-160h280v-80H520v80ZM160-520h640v-120H160v120Z\"/>", regular: "<path fill=\"currentColor\" d=\"M160-120q-33 0-56.5-23.5T80-200v-616q0-7 6-9.5t11 2.5l50 50 52-53q6-6 14-6t14 6l53 53 53-53q6-6 14-6t14 6l52 53 53-53q6-6 14-6t14 6l53 53 52-53q6-6 14-6t14 6l53 53 53-53q6-6 14-6t14 6l52 53 50-50q5-5 11-2.5t6 9.5v616q0 33-23.5 56.5T800-120H160Zm0-80h280v-240H160v240Zm360 0h280v-80H520v80Zm0-160h280v-80H520v80ZM160-520h640v-120H160v120Z\"/>" },
  { id: "camera", body: "<path fill=\"currentColor\" d=\"M480-260q75 0 127.5-52.5T660-440q0-75-52.5-127.5T480-620q-75 0-127.5 52.5T300-440q0 75 52.5 127.5T480-260Zm0-80q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM160-120q-33 0-56.5-23.5T80-200v-480q0-33 23.5-56.5T160-760h126l50-54q11-12 26.5-19t32.5-7h170q17 0 32.5 7t26.5 19l50 54h126q33 0 56.5 23.5T880-680v480q0 33-23.5 56.5T800-120H160Z\"/>", regular: "<path fill=\"currentColor\" d=\"M480-260q75 0 127.5-52.5T660-440q0-75-52.5-127.5T480-620q-75 0-127.5 52.5T300-440q0 75 52.5 127.5T480-260Zm0-80q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM160-120q-33 0-56.5-23.5T80-200v-480q0-33 23.5-56.5T160-760h126l50-54q11-12 26.5-19t32.5-7h170q17 0 32.5 7t26.5 19l50 54h126q33 0 56.5 23.5T880-680v480q0 33-23.5 56.5T800-120H160Zm0-80h640v-480H638l-73-80H395l-73 80H160v480Zm320-240Z\"/>" },
  { id: "map", body: "<path fill=\"currentColor\" d=\"m574-129-214-75-186 72q-10 4-19.5 2.5T137-136q-8-5-12.5-13.5T120-169v-561q0-13 7.5-23t20.5-15l186-63q6-2 12.5-3t13.5-1q7 0 13.5 1t12.5 3l214 75 186-72q10-4 19.5-2.5T823-824q8 5 12.5 13.5T840-791v561q0 13-7.5 23T812-192l-186 63q-6 2-12.5 3t-13.5 1q-7 0-13.5-1t-12.5-3Zm-14-89v-468l-160-56v468l160 56Z\"/>", regular: "<path fill=\"currentColor\" d=\"m574-129-214-75-186 72q-10 4-19.5 2.5T137-136q-8-5-12.5-13.5T120-169v-561q0-13 7.5-23t20.5-15l186-63q6-2 12.5-3t13.5-1q7 0 13.5 1t12.5 3l214 75 186-72q10-4 19.5-2.5T823-824q8 5 12.5 13.5T840-791v561q0 13-7.5 23T812-192l-186 63q-6 2-12.5 3t-13.5 1q-7 0-13.5-1t-12.5-3Zm-14-89v-468l-160-56v468l160 56Zm80 0 120-40v-474l-120 46v468Zm-440-10 120-46v-468l-120 40v474Zm440-458v468-468Zm-320-56v468-468Z\"/>" },
  { id: "airplane", body: "<path fill=\"currentColor\" d=\"M400-408 147-307q-24 10-45.5-4.5T80-352v-22q0-12 5.5-23t15.5-18l299-209v-176q0-33 23.5-56.5T480-880q33 0 56.5 23.5T560-800v176l299 209q10 7 15.5 18t5.5 23v22q0 26-21.5 40.5T813-307L560-408v144l103 72q8 6 12.5 14.5T680-159v24q0 20-16.5 32.5T627-96l-147-44-147 44q-20 6-36.5-6.5T280-135v-24q0-10 4.5-18.5T297-192l103-72v-144Z\"/>", regular: "<path fill=\"currentColor\" d=\"M400-408 147-307q-24 10-45.5-4.5T80-352v-22q0-12 5.5-23t15.5-18l299-209v-176q0-33 23.5-56.5T480-880q33 0 56.5 23.5T560-800v176l299 209q10 7 15.5 18t5.5 23v22q0 26-21.5 40.5T813-307L560-408v144l103 72q8 6 12.5 14.5T680-159v24q0 20-16.5 32.5T627-96l-147-44-147 44q-20 6-36.5-6.5T280-135v-24q0-10 4.5-18.5T297-192l103-72v-144Z\"/>" },
  { id: "food", body: "<path fill=\"currentColor\" d=\"M280-600v-240q0-17 11.5-28.5T320-880q17 0 28.5 11.5T360-840v240h40v-240q0-17 11.5-28.5T440-880q17 0 28.5 11.5T480-840v240q0 56-34.5 98T360-446v326q0 17-11.5 28.5T320-80q-17 0-28.5-11.5T280-120v-326q-51-14-85.5-56T160-600v-240q0-17 11.5-28.5T200-880q17 0 28.5 11.5T240-840v240h40Zm400 200h-80q-17 0-28.5-11.5T560-440v-240q0-70 51.5-135T718-880q18 0 30 14t12 33v713q0 17-11.5 28.5T720-80q-17 0-28.5-11.5T680-120v-280Z\"/>", regular: "<path fill=\"currentColor\" d=\"M280-600v-240q0-17 11.5-28.5T320-880q17 0 28.5 11.5T360-840v240h40v-240q0-17 11.5-28.5T440-880q17 0 28.5 11.5T480-840v240q0 56-34.5 98T360-446v326q0 17-11.5 28.5T320-80q-17 0-28.5-11.5T280-120v-326q-51-14-85.5-56T160-600v-240q0-17 11.5-28.5T200-880q17 0 28.5 11.5T240-840v240h40Zm400 200h-80q-17 0-28.5-11.5T560-440v-240q0-70 51.5-135T718-880q18 0 30 14t12 33v713q0 17-11.5 28.5T720-80q-17 0-28.5-11.5T680-120v-280Z\"/>" },
  { id: "beaker", body: "<path fill=\"currentColor\" d=\"M200-120q-51 0-72.5-45.5T138-250l222-270v-240h-40q-17 0-28.5-11.5T280-800q0-17 11.5-28.5T320-840h320q17 0 28.5 11.5T680-800q0 17-11.5 28.5T640-760h-40v240l222 270q32 39 10.5 84.5T760-120H200Z\"/>", regular: "<path fill=\"currentColor\" d=\"M200-120q-51 0-72.5-45.5T138-250l222-270v-240h-40q-17 0-28.5-11.5T280-800q0-17 11.5-28.5T320-840h320q17 0 28.5 11.5T680-800q0 17-11.5 28.5T640-760h-40v240l222 270q32 39 10.5 84.5T760-120H200Zm0-80h560L520-492v-268h-80v268L200-200Zm280-280Z\"/>" },
  { id: "library", body: "<path fill=\"currentColor\" d=\"M440-400h80q17 0 28.5-11.5T560-440q0-17-11.5-28.5T520-480h-80q-17 0-28.5 11.5T400-440q0 17 11.5 28.5T440-400Zm0-120h240q17 0 28.5-11.5T720-560q0-17-11.5-28.5T680-600H440q-17 0-28.5 11.5T400-560q0 17 11.5 28.5T440-520Zm0-120h240q17 0 28.5-11.5T720-680q0-17-11.5-28.5T680-720H440q-17 0-28.5 11.5T400-680q0 17 11.5 28.5T440-640ZM320-240q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320ZM160-80q-33 0-56.5-23.5T80-160v-520q0-17 11.5-28.5T120-720q17 0 28.5 11.5T160-680v520h520q17 0 28.5 11.5T720-120q0 17-11.5 28.5T680-80H160Z\"/>", regular: "<path fill=\"currentColor\" d=\"M440-400h80q17 0 28.5-11.5T560-440q0-17-11.5-28.5T520-480h-80q-17 0-28.5 11.5T400-440q0 17 11.5 28.5T440-400Zm0-120h240q17 0 28.5-11.5T720-560q0-17-11.5-28.5T680-600H440q-17 0-28.5 11.5T400-560q0 17 11.5 28.5T440-520Zm0-120h240q17 0 28.5-11.5T720-680q0-17-11.5-28.5T680-720H440q-17 0-28.5 11.5T400-680q0 17 11.5 28.5T440-640ZM320-240q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320Zm0-80h480v-480H320v480ZM160-80q-33 0-56.5-23.5T80-160v-520q0-17 11.5-28.5T120-720q17 0 28.5 11.5T160-680v520h520q17 0 28.5 11.5T720-120q0 17-11.5 28.5T680-80H160Zm160-720v480-480Z\"/>" },
  { id: "translate", body: "<path fill=\"currentColor\" d=\"m603-202-34 97q-4 11-14 18t-22 7q-20 0-32.5-16.5T496-133l152-402q5-11 15-18t22-7h30q12 0 22 7t15 18l152 403q8 19-4 35.5T868-80q-13 0-22.5-7T831-106l-34-96H603ZM362-401 188-228q-11 11-27.5 11.5T132-228q-11-11-11-28t11-28l174-174q-35-35-63.5-80T190-640h84q20 39 40 68t48 58q33-33 68.5-92.5T484-720H80q-17 0-28.5-11.5T40-760q0-17 11.5-28.5T80-800h240v-40q0-17 11.5-28.5T360-880q17 0 28.5 11.5T400-840v40h240q17 0 28.5 11.5T680-760q0 17-11.5 28.5T640-720h-76q-21 72-63 148t-83 116l96 98-30 82-122-125Zm266 129h144l-72-204-72 204Z\"/>", regular: "<path fill=\"currentColor\" d=\"m603-202-34 97q-4 11-14 18t-22 7q-20 0-32.5-16.5T496-133l152-402q5-11 15-18t22-7h30q12 0 22 7t15 18l152 403q8 19-4 35.5T868-80q-13 0-22.5-7T831-106l-34-96H603ZM362-401 188-228q-11 11-27.5 11.5T132-228q-11-11-11-28t11-28l174-174q-35-35-63.5-80T190-640h84q20 39 40 68t48 58q33-33 68.5-92.5T484-720H80q-17 0-28.5-11.5T40-760q0-17 11.5-28.5T80-800h240v-40q0-17 11.5-28.5T360-880q17 0 28.5 11.5T400-840v40h240q17 0 28.5 11.5T680-760q0 17-11.5 28.5T640-720h-76q-21 72-63 148t-83 116l96 98-30 82-122-125Zm266 129h144l-72-204-72 204Z\"/>" },
  { id: "settings", body: "<path fill=\"currentColor\" d=\"M433-80q-27 0-46.5-18T363-142l-9-66q-13-5-24.5-12T307-235l-62 26q-25 11-50 2t-39-32l-47-82q-14-23-8-49t27-43l53-40q-1-7-1-13.5v-27q0-6.5 1-13.5l-53-40q-21-17-27-43t8-49l47-82q14-23 39-32t50 2l62 26q11-8 23-15t24-12l9-66q4-26 23.5-44t46.5-18h94q27 0 46.5 18t23.5 44l9 66q13 5 24.5 12t22.5 15l62-26q25-11 50-2t39 32l47 82q14 23 8 49t-27 43l-53 40q1 7 1 13.5v27q0 6.5-2 13.5l53 40q21 17 27 43t-8 49l-48 82q-14 23-39 32t-50-2l-60-26q-11 8-23 15t-24 12l-9 66q-4 26-23.5 44T527-80h-94Zm49-260q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Z\"/>", regular: "<path fill=\"currentColor\" d=\"M433-80q-27 0-46.5-18T363-142l-9-66q-13-5-24.5-12T307-235l-62 26q-25 11-50 2t-39-32l-47-82q-14-23-8-49t27-43l53-40q-1-7-1-13.5v-27q0-6.5 1-13.5l-53-40q-21-17-27-43t8-49l47-82q14-23 39-32t50 2l62 26q11-8 23-15t24-12l9-66q4-26 23.5-44t46.5-18h94q27 0 46.5 18t23.5 44l9 66q13 5 24.5 12t22.5 15l62-26q25-11 50-2t39 32l47 82q14 23 8 49t-27 43l-53 40q1 7 1 13.5v27q0 6.5-2 13.5l53 40q21 17 27 43t-8 49l-48 82q-14 23-39 32t-50-2l-60-26q-11 8-23 15t-24 12l-9 66q-4 26-23.5 44T527-80h-94Zm7-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z\"/>" },
  { id: "link", body: "<path fill=\"currentColor\" d=\"M280-280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h120q17 0 28.5 11.5T440-640q0 17-11.5 28.5T400-600H280q-50 0-85 35t-35 85q0 50 35 85t85 35h120q17 0 28.5 11.5T440-320q0 17-11.5 28.5T400-280H280Zm80-160q-17 0-28.5-11.5T320-480q0-17 11.5-28.5T360-520h240q17 0 28.5 11.5T640-480q0 17-11.5 28.5T600-440H360Zm200 160q-17 0-28.5-11.5T520-320q0-17 11.5-28.5T560-360h120q50 0 85-35t35-85q0-50-35-85t-85-35H560q-17 0-28.5-11.5T520-640q0-17 11.5-28.5T560-680h120q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H560Z\"/>", regular: "<path fill=\"currentColor\" d=\"M280-280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h120q17 0 28.5 11.5T440-640q0 17-11.5 28.5T400-600H280q-50 0-85 35t-35 85q0 50 35 85t85 35h120q17 0 28.5 11.5T440-320q0 17-11.5 28.5T400-280H280Zm80-160q-17 0-28.5-11.5T320-480q0-17 11.5-28.5T360-520h240q17 0 28.5 11.5T640-480q0 17-11.5 28.5T600-440H360Zm200 160q-17 0-28.5-11.5T520-320q0-17 11.5-28.5T560-360h120q50 0 85-35t35-85q0-50-35-85t-85-35H560q-17 0-28.5-11.5T520-640q0-17 11.5-28.5T560-680h120q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H560Z\"/>" }
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
    viewBox: "-8 -8 528 528",
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

  // 收起所有展开中的自定义下拉浮层；exceptDisplay 对应的那一个保留
  function closeAllDropdowns(exceptDisplay) {
    document.querySelectorAll('.custom-select-dropdown.active').forEach(dd => {
      if (exceptDisplay && dd._display === exceptDisplay) return;
      dd.classList.remove('active');
      clearDropdownInlineStyles(dd);
      dd._display?.classList.remove('active');
    });
  }

  // 按可用空间摆放下拉面板：宽度贴合内容、与触发器右边缘对齐、必要时向上展开。
  // 返回是否向上展开，供展开动画决定起始位移方向
  function placeDropdown(display, dd) {
    const rect = display.getBoundingClientRect();
    dd.style.width = 'auto';
    // 菜单不窄于触发器本身，也不窄于 100px（与 CSS 的 min-width 一致）
    dd.style.minWidth = Math.max(100, Math.round(rect.width)) + 'px';
    const dropdownHeight = dd.offsetHeight;
    const dropdownWidth = dd.offsetWidth;
    const left = Math.max(4, Math.min(rect.right - dropdownWidth, window.innerWidth - dropdownWidth - 4));
    const spaceBelow = window.innerHeight - rect.bottom - 4;
    const spaceAbove = rect.top - 4;

    let top;
    let openingUp = false;
    if (spaceBelow >= dropdownHeight) {
      top = rect.bottom + 4;
    } else if (spaceAbove > spaceBelow && spaceAbove > 0) {
      top = Math.max(4, rect.top - dropdownHeight - 4);
      openingUp = true;
    } else {
      // 空间都不足时，选择可见区域更大的方向，并夹紧到视口内
      const belowClamped = Math.min(rect.bottom + 4, window.innerHeight - dropdownHeight - 4);
      const aboveClamped = Math.max(4, rect.top - dropdownHeight - 4);
      const belowVisible = window.innerHeight - belowClamped - 4;
      const aboveVisible = aboveClamped + dropdownHeight;
      if (belowVisible >= aboveVisible) {
        top = belowClamped;
      } else {
        top = aboveClamped;
        openingUp = true;
      }
    }
    dd.style.top = top + 'px';
    dd.style.left = left + 'px';
    return openingUp;
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
        closeAllDropdowns(exceptDisplay);
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
        dropdown._openingUp = placeDropdown(display, dropdown);
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
          // 隐藏选项（如「动态颜色」的默认态）只在原生 select 里用于回显，不进下拉面板
          if (opt.hidden) return;
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
          if (opt.disabled || opt.hasAttribute('data-md-disabled')) {
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

      // 合并行模式（设置行内嵌下拉）：点击整行任意位置都视为触发下拉，
      // 行内的开关、按钮、链接、提示图标等子控件除外。
      // 先阻止冒泡：否则原始点击继续冒泡到 document 的「点外关闭」逻辑，
      // 会把刚展开的下拉立刻关掉。
      const hostRow = display.closest('.setting-row');
      if (hostRow) {
        hostRow.addEventListener('click', (e) => {
          if (e.target.closest('.custom-select-display, .custom-select-dropdown, .switch-container, button, a, input, .tooltip-icon')) return;
          e.stopPropagation();
          display.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        });
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
        closeAllDropdowns();
      }
      // 同步收掉关于页「更新」拆分按钮弹出的菜单
      window.dispatchEvent(new Event('liteStart:hideFloatingLayers'));
    });

    // ESC 键关闭所有下拉
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeAllDropdowns();
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
        placeDropdown(display, dd);
      });
  }

  const settingsPanel = document.getElementById('popover-settings');
  if (settingsPanel) {
    settingsPanel.addEventListener('scroll', repositionOrClose);
  }
  window.addEventListener('resize', repositionOrClose);
  window.addEventListener('scroll', repositionOrClose, true);
}

// 丢弃已缓存的下拉面板：下次展开时按原生 select 重建
function discardCustomSelectDropdown(selectId) {
  const stale = document.querySelector('.custom-select-dropdown[data-for-select="' + selectId + '"]');
  if (!stale) return;
  // 面板与触发器的展开态需一起清除
  if (stale._display) stale._display.classList.remove('active');
  stale.remove();
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
// 拿到的仍是旧结论（例如从 1.8.10 改回 1.8.6 也照样显示“无更新”）。
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

  // 设置面板内的二级页面（背景 / 布局 / 颜色）
  const settingsPageBg = document.getElementById('settings-page-bg');
  const settingsPageLayout = document.getElementById('settings-page-layout');
  const settingsPageColor = document.getElementById('settings-page-color');

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
    settingsPageColor?.classList.toggle('active', name === 'color');
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
  
  const btnCloseWallpaperModal = document.getElementById('btn-close-wallpaper-modal');
  const wallpaperPreviewContainer = document.getElementById('wallpaper-preview-container');
  const btnUploadWallpaper = document.getElementById('btn-upload-wallpaper');
  const btnEditOnlineWallpaper = document.getElementById('btn-edit-online-wallpaper');
  const inputWallpaperFile = document.getElementById('input-wallpaper-file');
  const selectWallpaperSource = document.getElementById('select-wallpaper-source');
  const wallpaperFileRow = document.getElementById('wallpaper-file-row');
  const bgDependentSettings = document.getElementById('bg-dependent-settings');
  const wallpaperSourceCard = document.getElementById('wallpaper-source-card');
  const toggleBgMaster = document.getElementById('toggle-bg-master');

  const bgVideo = document.getElementById('bg-video');
  // 换壁纸时会重建 <img>，以便再次触发 Element Timing 的首次绘制上报
  let bgImage = document.getElementById('bg-image');
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
let previewDropKey = null;//实时预览的落点键，避免同一位置重复移动
  let selectedSuggestionIndex = -1;

  // ===== 主题模式（跟随系统 / 浅色 / 深色）=====
  const THEME_KEY = 'ntp_theme';
  const themeOptionEls = document.querySelectorAll('.theme-option');

  // 'auto' 时按系统偏好解析成实际生效的主题
  function resolveTheme(pref) {
    if (pref === 'light' || pref === 'dark') return pref;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  // ===== MD3 动态配色（material-color-utilities / HCT）=====
  // 整个模块必须排在 applyTheme 之前：applyTheme 会调用 renderMdSwatches，
  // 若这些 const 声明在后面就会触发 TDZ（Cannot access 'mdSwatches' before initialization）
  const MCU_API = window.MCU || null;
  // 三种模式：off=原版配色；wallpaper=从壁纸提取种子色；custom=自定义种子色。
  // 同时生成浅色/深色两套 scheme，注入与现有 CSS 变量同名的变量，
  // 不改变任何现有变量名与选择器结构（最小侵入）。
  const MD_MODE_KEY = 'ntp_md_color_mode';   // wallpaper | custom | off
  const MD_PREV_MODE_KEY = 'ntp_md_prev_mode'; // 进入壁纸取色前的模式，用于关闭开关时还原
  const MD_SEED_KEY = 'ntp_md_seed';         // 自定义种子色（hex，如 #6750a4）
  const toggleMdDynamic = document.getElementById('toggle-md-dynamic');
  const mdCustomSettings = document.getElementById('md-custom-settings');
  const mdHueSlider = document.getElementById('md-hue-slider');
  const mdCustomPanel = document.getElementById('md-custom-panel');
  const mdSwatches = document.querySelectorAll('.md-swatch');
  const mdSwatchCustom = document.querySelector('.md-swatch-custom');
  const btnOpenColorModal = document.getElementById('btn-open-color-modal');
  const btnCloseColorModal = document.getElementById('btn-close-color-modal');

  // 预设色板渲染：不直接铺种子色（饱和原色刺眼、不符合 MD 观感），
  // 而是按当前明暗主题取该色相的 tonal 结果：
  //   卡片下半 = primaryContainer，中央圆点 = onPrimaryContainer，上半固定为白
  // 上次已渲染的色板标识，避免重复构造配色方案
  let lastSwatchKey = '';
  function renderMdSwatches() {
    // MCU_API 已提前声明（见文件上方），这里可直接使用
    const api = MCU_API;
    if (!api) return;
    const dark = document.documentElement.getAttribute('data-theme') === 'dark';
    // 同一主题下色板的取色结果不变，重复渲染会反复构造配色方案
    const swatchKey = (dark ? 'dark' : 'light') + '|' +
      Array.prototype.map.call(mdSwatches, (sw) => sw.getAttribute('data-seed') || '').join(',');
    if (swatchKey === lastSwatchKey) return;
    lastSwatchKey = swatchKey;
    mdSwatches.forEach((sw) => {
      const seed = sw.getAttribute('data-seed');
      if (!seed) return; // 自定义卡片无种子色
      try {
        const seedArgb = api.argbFromHex(seed);
        const scheme = mdScheme(seedArgb, dark);
        const seedHct = api.Hct.fromInt(seedArgb);
        // 上半：浅色取该色最淡的一档，深色取最深的一档；下半用 primaryContainer
        const topTone = dark ? 15 : 95;
        const top = api.Hct.from(seedHct.hue, seedHct.chroma, topTone).toInt();
        sw.style.setProperty('--swatch-top', api.hexFromArgb(top));
        sw.style.setProperty('--swatch-bg', api.hexFromArgb(scheme.primaryContainer));
        sw.style.setProperty('--swatch-dot', api.hexFromArgb(scheme.onPrimaryContainer));
      } catch (e) { /* 配色工具未就绪时保持原样 */ }
    });
  }

  // 用 DynamicScheme（TonalSpot）生成完整 M3-2023 角色表。
  // 注：不要用 themeFromSourceColor——它返回的是旧的 Material You 方案，
  // 不含 surfaceContainer* 系列角色，取值为 undefined 会让变量全变成 #000000。
  // 配色方案构造较慢，按「种子色 + 明暗」缓存，避免重复计算。
  const MD_SCHEME_CACHE = new Map();
  function mdScheme(seedArgb, dark) {
    const key = seedArgb + (dark ? '|d' : '|l');
    let scheme = MD_SCHEME_CACHE.get(key);
    if (!scheme) {
      scheme = new MCU_API.SchemeTonalSpot(MCU_API.Hct.fromInt(seedArgb), dark, 0.0);
      if (MD_SCHEME_CACHE.size > 32) MD_SCHEME_CACHE.clear();
      MD_SCHEME_CACHE.set(key, scheme);
    }
    return scheme;
  }

  // MD3 角色 → 现有 CSS 变量的映射。
  // 按「层级由低到高」取值：页面底色 < 卡片 < 输入框，保证浅/深两套都有层次、不糊成一片
  function mdBuildVarText(scheme, dark) {
    const c = (role) => MCU_API.hexFromArgb(scheme[role]);
    // M3 状态层：把 on-color 以指定不透明度叠在基色上，而不是换成另一个颜色角色。
    // hover 8%、focus 10%、pressed 12%（Material 3 state layer 规范值）。
    const layer = (baseRole, onRole, alpha) => {
      const b = scheme[baseRole], o = scheme[onRole];
      if (b == null || o == null) return c(baseRole);
      const ch = (argb, shift) => (argb >> shift) & 0xff;
      const mix = (shift) => Math.round(ch(b, shift) * (1 - alpha) + ch(o, shift) * alpha);
      const argb = (255 << 24) | (mix(16) << 16) | (mix(8) << 8) | mix(0);
      return MCU_API.hexFromArgb(argb >>> 0);
    };
    const vars = {
      // ===== 表面层 =====
      '--fill-color': c('surface'),
      '--fill-popup-color': c('surfaceContainerLow'),
      '--neutral-layer-floating': c('surfaceContainerLow'),
      '--neutral-layer-floating-hover': c('surfaceContainerHighest'),
      '--modal-bg': c('surfaceContainerLow'),
      '--settings-card-bg': c('surfaceContainerLow'),
      '--settings-card-hover': c('surfaceContainerHigh'),
      // 按钮/选项的悬停填充：onSurface 带透明度叠在任意底色上，色相跟随当前配色
      '--neutral-fill-hover': c('onSurface') + '1C',
      '--neutral-fill-rest': c('onSurface') + '0D',
      '--settings-panel-bg': c('surfaceContainerHigh'),
      '--suggestion-bg': c('surfaceContainerLow'),
      '--suggestion-hover': c('surfaceContainerHighest'),
      '--input-bg': c('surfaceContainerHighest'),
      // 搜索框悬停底色：surfaceContainer 比常态的 surfaceContainerLow 深一档（深色模式则浅一档）
      '--search-box-bg-hover': c('surfaceContainer'),
      // 增强可见性衬底：surfaceContainerLowest 为浅色模式最亮、深色模式最暗的一档
      // 浅色模式下透明度更高，让衬底更接近纯白
      '--enhanced-visibility-bg': c('surfaceContainerLowest') + (dark ? '73' : '99'),
      '--enhanced-visibility-bg-hover': c('surfaceContainerLowest') + (dark ? 'A6' : 'C7'),
      '--enhanced-visibility-logo-bg': c('surfaceContainerLowest') + (dark ? '99' : 'B8'),
      // 输入框（仅 MD 开启时生效）：
      //   常规态与卡片同层（surfaceContainerLow），hover 抬到 surfaceContainerHighest，
      //   聚焦保持最高档并用 primary 描边。这样深色模式下不再落到旧的 #282828 纯灰。
      '--input-rest-bg': c('surfaceContainerLow'),
      '--input-hover-bg': c('surfaceContainerHighest'),
      '--input-focus-bg': c('surfaceContainerHighest'),
      '--input-focus-border': c('primary'),
      '--settings-thumb-bg': c('surfaceContainer'),
      // ===== 描边 =====
      '--modal-border': c('outlineVariant'),
      '--settings-card-border': c('outlineVariant'),
      '--settings-thumb-border': c('outlineVariant'),
      '--input-border': c('outlineVariant'),
      '--input-border-focus': c('outline'),
      // ===== 文字 =====
      '--neutral-foreground-rest': c('onSurface'),
      '--neutral-foreground-secondary': c('onSurfaceVariant'),
      '--settings-text-primary': c('onSurface'),
      '--settings-text-secondary': c('onSurfaceVariant'),
      '--placeholder-color': c('outline'),
      '--logo-color': c('onSurfaceVariant'),
      // ===== 强调 =====
      '--accent-foreground-rest': c('primary'),
      // 强调色 hover：M3 下同样用 8% onPrimary 状态层，保持同一色相（原来是跳到 tertiary）
      '--accent-foreground-hover': layer('primary', 'onPrimary', 0.08),
      '--accent-foreground-invert': c('onPrimary'),
      // ===== 按钮 =====
      // 次级按钮（tonal button）：secondaryContainer 底 + onSecondaryContainer 字，
      // hover 同样叠 8% onSecondaryContainer，保持色相一致
      '--btn-secondary-bg': c('secondaryContainer'),
      '--btn-secondary-hover': layer('secondaryContainer', 'onSecondaryContainer', 0.08),
      '--btn-secondary-text': c('onSecondaryContainer'),
      // 主按钮：primary 底 + onPrimary 字。
      // hover 按 M3 state layer 规范叠 8% onPrimary，而不是换到 primaryDim/tertiary 这类别的角色色
      // M3 slider handle 用 primary（标准做法，浅深模式都清晰，无需描边/阴影）
      '--md-hue-thumb': c('primary'),
      '--btn-primary-bg': c('primary'),
      '--btn-primary-text': c('onPrimary'),
      '--btn-primary-hover': layer('primary', 'onPrimary', 0.08),
      // ===== 语义色 =====
      '--btn-danger-color': c('error'),
      '--btn-danger-hover': c('errorContainer'),
      '--suggestion-footer-color': c('tertiary')
    };
    return ':root[data-theme="' + (dark ? 'dark' : 'light') + '"]{' +
      Object.entries(vars).map(([k, v]) => k + ':' + v).join(';') + '}';
  }

  // 由色相生成种子色（固定饱和度/亮度，保证生成结果稳定可用）
  function mdHueToSeed(h) {
    const s = 0.72, l = 0.42;
    const f = n => {
      const k = (n + h / 30) % 12;
      const a = s * Math.min(l, 1 - l);
      const v = l - a * Math.max(-1, Math.min(k - 3, 9 - k, 1));
      return Math.round(255 * v).toString(16).padStart(2, '0');
    };
    return '#' + f(0) + f(8) + f(4);
  }

  // 种子色 -> 滑块色相。
  // 必须与 mdHueToSeed 互逆（HSL 空间），否则回显时滑块位置会与用户选择不一致。
  // 仅当色相无法从色值可靠还原时（如灰阶/预设原色）才退回 HCT 色相。
  function mdSeedToHue(hex) {
    const m = /^#?([0-9a-f]{6})$/i.exec(String(hex || '').trim());
    if (m) {
      const n = parseInt(m[1], 16);
      const r = (n >> 16 & 255) / 255, g = (n >> 8 & 255) / 255, b = (n & 255) / 255;
      const max = Math.max(r, g, b), min = Math.min(r, g, b), d = max - min;
      if (d > 0.02) { // 有彩度：按 HSL 反算色相
        let h;
        if (max === r) h = ((g - b) / d) % 6;
        else if (max === g) h = (b - r) / d + 2;
        else h = (r - g) / d + 4;
        h = h * 60;
        if (h < 0) h += 360;
        return Math.round(h);
      }
      return 0; // 灰阶无意义色相
    }
    return mdSeedToHueHct(hex);
  }

  // 旧实现（HCT 色相）：仅作兜底
  function mdSeedToHueHct(hex) {
    try {
      const hct = MCU_API.Hct.fromInt(MCU_API.argbFromHex(hex));
      return Math.round(hct.hue);
    } catch (e) { return 220; }
  }

  let mdWallpaperAvailable = true;
  // 壁纸不可用时「动态颜色」开关整行置灰且不可交互
  function syncMdWallpaperOption(available) {
    mdWallpaperAvailable = available;
    if (!toggleMdDynamic) return;
    const row = toggleMdDynamic.closest('.setting-row');
    if (!row) return;
    row.classList.toggle('disabled', !available);
    if (available) row.removeAttribute('inert');
    else row.setAttribute('inert', '');
  }

  // 选出用于取色的壁纸 <img>：优先背景图，其次预览图
  function pickWallpaperImageEl() {
    return [
      document.getElementById('bg-image'),
      document.querySelector('#wallpaper-preview-container img')
    ].find(img => img && img.src) || null;
  }

  // 以 crossOrigin="anonymous" 重新加载同一 URL，保证 canvas 可读像素。
  // blob:/data: 本地资源直接复用原图，无需重复加载。
  function loadImageForSampling(url) {
    if (!url) return Promise.reject(new Error('empty url'));
    if (/^(blob:|data:)/i.test(url)) {
      const img = pickWallpaperImageEl();
      if (img && img.complete && img.naturalWidth > 0) return Promise.resolve(img);
      return Promise.reject(new Error('local image not ready'));
    }
    return new Promise((resolve, reject) => {
      const img = new Image();
      // 两次尝试：CORS 失败时退回不带 crossOrigin 的普通加载
      // （此时 canvas 会被污染，取色仍会失败，但至少能给出明确日志）
      img.crossOrigin = 'anonymous';
      img.decoding = 'async';
      img.onload = () => resolve(img);
      img.onerror = () => reject(new Error('load error: ' + url));
      img.src = url;
    });
  }

  // 应用 MD 配色：生成浅/深两套 scheme 并注入 <style>
  // 取色结果缓存：图片 URL → ARGB，避免重复量化开销
  // 默认种子色 = 中性灰（与色板「淡蓝」预设同值）
  const MD_DEFAULT_SEED = '#5f6368';
  function getMdSeed() { return Storage.get(MD_SEED_KEY, MD_DEFAULT_SEED); }

  const MD_SEED_CACHE = new Map();
  // 取色算法变更时递增此值，使旧结果失效
  const MD_SEED_CACHE_VERSION = 2;
  const mdSeedCacheKey = (url) => MD_SEED_CACHE_VERSION + '|' + url;

  // 壁纸取色的持久缓存：壁纸标识 → 种子色，跨会话复用，命中即无需采样
  const MD_WALLPAPER_SEED_KEY = 'ntp_md_wallpaper_seed';

  // 壁纸标识：内置壁纸固定；远程壁纸按 URL（URL 不变即同一张图）；本地壁纸取保存时生成的内容标识
  function mdWallpaperSeedId() {
    const meta = Storage.get('ntp_custom_wallpaper', null);
    if (!meta) return 'default';
    if (isRemoteWallpaper(meta) && meta.url) return 'url|' + meta.url;
    return 'local|' + (meta.mdId || 'legacy');
  }

  // 内置壁纸的取色结果（img/background.webp 固定不变，首次加载即可上色）；图片替换后需重新取值
  const MD_DEFAULT_WALLPAPER_SEED = '#a5bad5';

  function readMdWallpaperSeed(id) {
    const rec = Storage.get(MD_WALLPAPER_SEED_KEY, null);
    if (rec && rec.v === MD_SEED_CACHE_VERSION && rec.id === id && rec.seed) return rec.seed;
    if (id === 'default') return MD_DEFAULT_WALLPAPER_SEED;
    return null;
  }

  // 采样结果落盘：壁纸在采样期间被换掉时丢弃，避免旧结果覆盖新壁纸的缓存
  function storeMdWallpaperSeed(id, seedHex) {
    if (id !== mdWallpaperSeedId()) return;
    Storage.set(MD_WALLPAPER_SEED_KEY, { v: MD_SEED_CACHE_VERSION, id: id, seed: seedHex });
  }
  let mdApplyTimer = null;
  // 上次已应用的配色标识，避免重复重建样式表
  let lastMdAppliedKey = '';
  // 背景进入动画计时器：控制搜索框阴影的出现时机

  // 取色：先把图片缩到小画布再量化，避免对全尺寸位图生成百万级像素数组
  function sampleImageColor(img) {
    const api = MCU_API;
    if (!api || !img) return null;
    const SIZE = 112;
    let canvas, ctx;
    try {
      canvas = document.createElement('canvas');
      canvas.width = SIZE;
      canvas.height = SIZE;
      ctx = canvas.getContext('2d', { willReadFrequently: true });
      if (!ctx) return null;
      ctx.drawImage(img, 0, 0, SIZE, SIZE);
    } catch (e) {
      return null;
    }
    const data = ctx.getImageData(0, 0, SIZE, SIZE).data;
    const pixels = new Array(data.length / 4);
    for (let i = 0, j = 0; i < data.length; i += 4, j++) {
      pixels[j] = ((255 << 24) | (data[i] << 16) | (data[i + 1] << 8) | data[i + 2]) >>> 0;
    }
    try {
      const quantized = api.QuantizerCelebi.quantize(pixels, 64);
      // 取画面中占比最大的色相族：色相按 10 度分桶累加面积，选出面积最大的桶，
      // 再在该桶内按面积加权求平均色相、饱和度、明度并合成种子色
      const BUCKET = 10;
      const bucketSum = new Array(360 / BUCKET).fill(0);
      const hctOf = (argb) => {
        const r = (argb >> 16) & 0xff, g = (argb >> 8) & 0xff, b = argb & 0xff;
        const max = Math.max(r, g, b), min = Math.min(r, g, b), d = max - min;
        if (d < 12) return null;
        let h;
        if (max === r) h = ((g - b) / d) % 6;
        else if (max === g) h = (b - r) / d + 2;
        else h = (r - g) / d + 4;
        h *= 60;
        if (h < 0) h += 360;
        return { hue: h, sat: d / max, light: (max + min) / 510 };
      };
      quantized.forEach((count, argb) => {
        const c = hctOf(argb);
        if (!c) return;
        bucketSum[Math.floor(c.hue / BUCKET) % bucketSum.length] += count;
      });
      let bestBucket = -1, bestBucketSum = 0;
      for (let i = 0; i < bucketSum.length; i++) {
        if (bucketSum[i] > bestBucketSum) { bestBucketSum = bucketSum[i]; bestBucket = i; }
      }
      if (bestBucket < 0) return null;
      // 该桶内的加权平均（色相用向量求和，避免 0/360 跨界）
      let sumX = 0, sumY = 0, sumSat = 0, sumLight = 0, total = 0;
      quantized.forEach((count, argb) => {
        const c = hctOf(argb);
        if (!c) return;
        if (Math.floor(c.hue / BUCKET) % bucketSum.length !== bestBucket) return;
        const rad = (c.hue * Math.PI) / 180;
        sumX += Math.cos(rad) * count;
        sumY += Math.sin(rad) * count;
        sumSat += c.sat * count;
        sumLight += c.light * count;
        total += count;
      });
      if (!total) return null;
      let hue = (Math.atan2(sumY, sumX) * 180) / Math.PI;
      if (hue < 0) hue += 360;
      const sat = Math.max(sumSat / total, 0.36);
      const light = Math.min(0.74, Math.max(0.38, sumLight / total));
      // HSL -> ARGB
      const k = (n) => (n + hue / 30) % 12;
      const a = sat * Math.min(light, 1 - light);
      const f = (n) => light - a * Math.max(-1, Math.min(k(n) - 3, 9 - k(n), 1));
      const to255 = (v) => Math.round(255 * Math.max(0, Math.min(1, v)));
      return ((255 << 24) | (to255(f(0)) << 16) | (to255(f(8)) << 8) | to255(f(4))) >>> 0;
    } catch (e) {
      return null;
    }
  }

  function applyMdColor() {
    const storedMode = Storage.get(MD_MODE_KEY, 'off');
    // 模式优先级：off（原生主题）> wallpaper（壁纸取色，需背景启用）> custom（色板种子色）
    let wallpaperAvailable = false;
    try {
      wallpaperAvailable = !!bgEnabled;
    } catch (e) {
      // 初始化阶段 bgEnabled 尚未声明，退回读取存储值
      wallpaperAvailable = !!Storage.get('ntp_bg_enabled', false);
    }
    const mode = storedMode === 'off' ? 'off'
               : (storedMode === 'wallpaper' && wallpaperAvailable ? 'wallpaper' : 'custom');
    // 非壁纸取色时同步记录当前模式，保证关闭开关时能还原到同一档
    if (storedMode !== 'wallpaper' && Storage.get(MD_PREV_MODE_KEY) !== storedMode) {
      Storage.set(MD_PREV_MODE_KEY, storedMode);
    }
    syncMdWallpaperOption(wallpaperAvailable);
    if (toggleMdDynamic) toggleMdDynamic.checked = (mode === 'wallpaper');
    if (mdCustomSettings) {
      mdCustomSettings.classList.toggle('disabled', mode === 'wallpaper');
      if (mode === 'wallpaper') mdCustomSettings.setAttribute('inert', '');
      else mdCustomSettings.removeAttribute('inert');
    }
    let styleEl = document.getElementById('md-color-style');
    if (mode === 'off' || !MCU_API) {
      // 默认模式：不接管配色，回到页面原生黑白主题
      styleEl?.remove();
      document.documentElement.removeAttribute('data-md-color');
      // 清空缓存键：否则回到 off 前的同一个配色时会被判为「已应用」而跳过重建
      lastMdAppliedKey = '';
      mdSwatches.forEach((sw) => sw.classList.toggle('active', sw.getAttribute('data-mode') === 'off'));
      renderMdSwatches();
      return;
    }

    const build = (seedArgb) => {
      // 同一份配色不重复生成：applyMdColor 会被主题切换、壁纸切换等多处调用
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      const applyKey = mode + '|' + seedArgb + '|' + (isDark ? 'dark' : 'light');
      if (applyKey === lastMdAppliedKey) return;
      lastMdAppliedKey = applyKey;
      // 只生成当前主题的变量段；另一主题在切换时重新生成
      const css = mdBuildVarText(mdScheme(seedArgb, isDark), isDark);
      if (!styleEl) {
        styleEl = document.createElement('style');
        styleEl.id = 'md-color-style';
        document.head.appendChild(styleEl);
      }
      styleEl.textContent = css;
      // 给 :root 打标记，供 .input 等「仅 MD 下生效」的规则使用
      document.documentElement.setAttribute('data-md-color', 'on');
    };

    if (mode === 'wallpaper') {
      // 从当前壁纸图片提取种子色。
      // 关键：远程图（必应每日、自定义在线链接）若直接用页面上的 <img> 取像素，
      // canvas 会被标记为「污染」(tainted)，getImageData 抛 SecurityError 后静默失败。
      // 因此远程 URL 一律用 crossOrigin="anonymous" 的临时 Image 重新加载一次再取色。
      const fallback = getMdSeed();
      const sourceImg = pickWallpaperImageEl();
      const seedId = mdWallpaperSeedId();
      const storedSeed = readMdWallpaperSeed(seedId);

      const sampleWallpaper = () => {
        if (!sourceImg || !sourceImg.src) {
          build(MCU_API.argbFromHex(fallback));
          return;
        }
        // 用 src 而不是 currentSrc：后者指向当前已加载完成的资源，
        // 新图尚未下载完时仍是上一张的地址
        const url = sourceImg.src || sourceImg.currentSrc;
        const cacheKey = mdSeedCacheKey(url);
        const cached = MD_SEED_CACHE.get(cacheKey);
        if (cached !== undefined) {
          build(cached);
          return;
        }
        loadImageForSampling(url).then(
          img => sampleImageColor(img) ?? MCU_API.argbFromHex(fallback),
          () => { throw new Error('image reload failed'); }
        ).then(
          argb => {
            if (MD_SEED_CACHE.size > 32) MD_SEED_CACHE.clear();
            MD_SEED_CACHE.set(cacheKey, argb);
            storeMdWallpaperSeed(seedId, MCU_API.hexFromArgb(argb));
            build(argb);
          },
          err => {
            console.warn('壁纸取色失败，回退默认色:', err);
            // 失败结果同样缓存，避免反复重试
            if (MD_SEED_CACHE.size > 32) MD_SEED_CACHE.clear();
            MD_SEED_CACHE.set(cacheKey, MCU_API.argbFromHex(fallback));
            build(MCU_API.argbFromHex(fallback));
          }
        );
      };
      // 取色是同步重活，推迟到背景进入动画（1.3s + 渐显 0.6s）之后再执行，
      // 避免与遮罩动画争抢主线程
      const scheduleSampling = () => {
        if (typeof requestIdleCallback === 'function') {
          requestIdleCallback(sampleWallpaper, { timeout: 2000 });
        } else {
          setTimeout(sampleWallpaper, 0);
        }
      };
      if (storedSeed) {
        // 命中持久缓存：直接按上次的种子色上色，不采样
        build(MCU_API.argbFromHex(storedSeed));
      } else {
        setTimeout(scheduleSampling, 1500);
      }
    } else {
      build(MCU_API.argbFromHex(getMdSeed()));
    }

    // 遵循壁纸取色时不参与色板选中判断：此时配色来自壁纸，
    // 用旧的手动种子色去比对会把选中态错误地指向某个预设
    if (mode === 'wallpaper') {
      setCustomPanelOpen(false);
      renderMdSwatches();
      return;
    }

    // 选中态：命中等价预设色 -> 该色块选中；否则（滑块调出来的色）高亮末位自定义卡片
    if (mdSwatches.length) {
      const seed = getMdSeed().toLowerCase();
      let matched = false;
      mdSwatches.forEach((sw) => {
        const s = sw.getAttribute('data-seed');
        const isMatch = !!s && s.toLowerCase() === seed;
        if (isMatch) matched = true;
        sw.classList.toggle('active', isMatch);
      });
      if (mdSwatchCustom) mdSwatchCustom.classList.toggle('active', !matched);
      if (!matched) setCustomPanelOpen(true);
    }
    renderMdSwatches();
  }


  // 滑块拖动：实时重着色（rAF 合帧），松手才落盘
  if (mdHueSlider) {
    let raf = null;
    mdHueSlider.addEventListener('input', () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const seed = mdHueToSeed(Number(mdHueSlider.value));
        Storage.set(MD_SEED_KEY, seed);
        // 拖滑块属于手动取色
        Storage.set(MD_MODE_KEY, 'custom');
        applyMdColor();
      });
    });
    mdHueSlider.addEventListener('change', () => {
      // 注意：这里不要再把滑块回显「校准」到 HCT 色相。
      // mdHueToSeed 用 HSL 生成颜色，而 mdSeedToHue 读的是 HCT 色相，
      // 两者在黄绿/青色区可差 40°+，松手后滑块会突然跳走（用户感知为「回弹」）。
      // 滑块值本身就是用户的真实选择，保持不动。
      applyMdColor();
    });
  }

  // 末位「自定义」卡片：点击展开/收起色相滑块
  function setCustomPanelOpen(open) {
    if (!mdCustomPanel || !mdSwatchCustom) return;
    mdCustomPanel.hidden = !open;
    mdSwatchCustom.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (open) {
      // 展开后才有布局尺寸，先同步手柄位置（等一帧再量宽）
    }
  }
  mdSwatchCustom?.addEventListener('click', (e) => {
    e.stopPropagation();
    const open = mdSwatchCustom.getAttribute('aria-expanded') !== 'true';
    if (open && mdHueSlider) mdHueSlider.value = mdSeedToHue(getMdSeed());
    setCustomPanelOpen(open);
  });

  // 预设色板：点击即以该颜色为种子色；「默认」卡回到原生黑白主题
  mdSwatches.forEach(sw => {
    if (sw.hasAttribute('data-custom')) return;
    sw.addEventListener('click', () => {
      if (sw.getAttribute('data-mode') === 'off') {
        Storage.set(MD_MODE_KEY, 'off');
        setCustomPanelOpen(false);
        applyMdColor();
        return;
      }
      Storage.set(MD_SEED_KEY, sw.getAttribute('data-seed'));
      Storage.set(MD_MODE_KEY, 'custom');
      if (mdHueSlider) mdHueSlider.value = mdSeedToHue(sw.getAttribute('data-seed'));
      setCustomPanelOpen(false);
      applyMdColor();
    });
  });

  // 动态颜色开关：开启时从壁纸取色，关闭时回到色板选定的模式
  toggleMdDynamic?.addEventListener('change', () => {
    if (toggleMdDynamic.checked && !mdWallpaperAvailable) {
      toggleMdDynamic.checked = false;
      return;
    }
    if (toggleMdDynamic.checked) {
      // 记录进入壁纸取色前的模式，关闭开关时原样还原（含「默认」这一档）
      const cur = Storage.get(MD_MODE_KEY, 'off');
      if (cur !== 'wallpaper') Storage.set(MD_PREV_MODE_KEY, cur);
      Storage.set(MD_MODE_KEY, 'wallpaper');
    } else {
      const prev = Storage.get(MD_PREV_MODE_KEY, 'off');
      Storage.set(MD_MODE_KEY, prev === 'off' ? 'off' : 'custom');
    }
    applyMdColor();
  });

  // 「跟随壁纸」模式下壁纸变化后重新取色。
  // 同时挂 bg-image 的 load（自定义/必应壁纸）与预览图 load（默认壁纸、背景关闭态），
  // 任意一路就绪都重算一次；applyMdColor 内部会做就绪判断，未就绪时保持上一次结果。
  ['bg-image', 'wallpaper-preview-container'].forEach(id => {
    const host = document.getElementById(id);
    if (!host) return;
    const onReady = (e) => {
      const t = e.target;
      if (!t || t.tagName !== 'IMG') return;
      if (Storage.get(MD_MODE_KEY, 'off') !== 'wallpaper') return;
      // 图片已解码后再取色，避免读到空画布
      if (t.decode) t.decode().catch(() => {}).then(refreshMdColorFromWallpaper);
      else refreshMdColorFromWallpaper();
    };
    host.addEventListener('load', onReady, true);
  });

  // 颜色二级页跳转
  btnOpenColorModal?.addEventListener('click', () => {
    // 打开时把滑块回显为当前种子色的色相
    if (mdHueSlider) mdHueSlider.value = mdSeedToHue(getMdSeed());
    showSettingsPage('color');
  });
  btnCloseColorModal?.addEventListener('click', () => showSettingsPage('main'));

  // 初始化（MCU 加载失败则静默保持原配色）
  try {
    applyMdColor();
  } catch (err) {
    console.warn('MD 配色初始化失败:', err);
  }

  // 边角晕影只在深色模式渲染，浅色模式下对应开关置灰
  function syncBgVignetteRow() {
    const row = toggleBgVignette ? toggleBgVignette.closest('.setting-row') : null;
    if (!row) return;
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    row.classList.toggle('disabled', !isDark);
    if (isDark) row.removeAttribute('inert');
    else row.setAttribute('inert', '');
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


    // 选中项会加粗，文字宽度随之变化，重新量一次
    setupThemeOptionScroll();

    // 明暗切换后色板的 tonal 底色要跟着换一套（renderMdSwatches 定义在下方，
    // 用 typeof 兜住首次调用的时序）
    if (typeof renderMdSwatches === 'function') renderMdSwatches();
    // 配色变量按当前主题生成，切主题后需要按新主题重建一次
    if (typeof applyMdColor === 'function') applyMdColor();
    // 边角晕影只在深色模式渲染，浅色下对应开关置灰
    syncBgVignetteRow();
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
    // 顶栏按钮的点击会阻断 document 上的关闭逻辑，这里显式收起搜索建议，
    // 否则建议面板会与弹出面板同时显示
    closeSuggestions();
    togglePopover(popoverWaffle, popoverSettings);
  });

  btnSettings?.addEventListener('click', (e) => {
    e.stopPropagation();
    closeSuggestions();
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
  let savedQuicklinksRow = Storage.get('ntp_quicklinks', '2');
  let showQuicklinks = Storage.get('ntp_show_quicklinks', null);
  if (showQuicklinks === null) {
    showQuicklinks = savedQuicklinksRow !== '0';
    Storage.set('ntp_show_quicklinks', showQuicklinks);
  }
  if (savedQuicklinksRow === '0') {
    savedQuicklinksRow = '2';
    Storage.set('ntp_quicklinks', '2');
  }

  // 一次性迁移：快速链接改为胶囊样式后默认多行，旧版的一行设置统一重置为多行
  const QUICKLINK_ROWS_MIGRATION_KEY = 'ntp_quicklinks_rows_v2';
  if (!Storage.get(QUICKLINK_ROWS_MIGRATION_KEY)) {
    if (savedQuicklinksRow === '1') {
      savedQuicklinksRow = '2';
      Storage.set('ntp_quicklinks', '2');
    }
    Storage.set(QUICKLINK_ROWS_MIGRATION_KEY, true);
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
  // 深色模式边角晕影默认开启，所以缺省值是 true
  let bgVignette = Storage.get('ntp_bg_vignette', true);
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
    if (toggleBgMaster) toggleBgMaster.checked = bgEnabled;

    if (bgEnabled) {
      document.body.classList.add('bg-enabled');
      renderWallpaper();
    } else {
      document.body.classList.remove('bg-enabled');
      // 无背景时不播放进入动画，立即结束阴影延迟期
      if (bgVideo) {
        bgVideo.style.display = 'none';
      }
      if (bgImage) {
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
    applyBgDependentEnabled();
    // 同步壁纸来源下拉（背景关闭时显示「关闭」）
    syncWallpaperSourceSelect();
    // 预览不受背景开关影响，始终显示当前选择的壁纸
    renderWallpaperPreview();
    // 背景启停影响「跟随壁纸」是否可用，并决定 MD 配色是否需要回退到默认种子色
    // （用 typeof 防御：本函数可能在 MD 配色模块定义之前就被调用）
    if (typeof applyMdColor === 'function') applyMdColor();
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
  // 深色模式边角晕影：只切换 body 上的标记，具体遮罩在 CSS 里换掉 radial 那层
  function applyBgVignette() {
    if (bgVignette) {
      document.body.removeAttribute('data-bg-vignette');
    } else {
      document.body.setAttribute('data-bg-vignette', 'off');
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

  function applyBgDependentEnabled() {
    const rows = [bgDependentSettings, wallpaperSourceCard].filter(Boolean);
    rows.forEach((el) => {
      if (bgEnabled) {
        el.classList.remove('disabled');
        el.removeAttribute('inert');
      } else {
        el.classList.add('disabled');
        el.setAttribute('inert', '');
      }
    });
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

  // 进入动画：可见区域从中心扩展，遮罩由 .revealing 驱动
  function playReveal(el) {
    if (!el) return;
    el.classList.remove('revealing', 'paused');
    // 先挂遮罩并暂停在起点：此时元素被完全遮住，不会出现无遮罩的中间态
    el.classList.add('revealing', 'paused');
    el.classList.remove('pending');
    void el.offsetWidth;
    // 等两帧让图片完成绘制，再解除暂停，动画从起点开始
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        el.classList.remove('paused');
      });
    });
  }

  // 媒体就绪后立即播放动画；failDelay 仅用于防止永久挂起
  function revealWhenReady(el, failDelay) {
    if (!el) return;
    el.classList.add('pending');   // 就绪前不显示
    let done = false;
    let onEnough = null;
    const run = () => {
      if (done) return;
      done = true;
      if (onEnough) el.removeEventListener('progress', onEnough);
      playReveal(el);
    };
    if (el.tagName === 'VIDEO') {
      // HAVE_ENOUGH_DATA：足以流畅播放到底，而不是仅仅能播第一帧
      onEnough = () => {
        if (el.readyState >= 4) run();
      };
      el.addEventListener('canplaythrough', onEnough, { once: true });
      el.addEventListener('progress', onEnough);
    } else if (typeof el.decode === 'function') {
      el.decode().then(run).catch(run);
    } else {
      el.addEventListener('load', run, { once: true });
    }
    // 加载失败时也要显示，避免一直空白
    el.addEventListener('error', run, { once: true });
    setTimeout(run, failDelay);
  }

  // 根据自定义壁纸数据，渲染视频/图片背景到页面和预览容器
  // 图片与视频都直接显示，进入时播放中心扩展动画
  function renderWallpaper() {
    // 每次进入背景设置页都会调用本函数。若壁纸没变，重设 src 会让浏览器重新加载，
    // 所以要能识别出"还是同一张"并跳过重设。
    const wpKey = customWallpaperData
      ? (customWallpaperData.type || 'image') + '|' + (customWallpaperData.url || '')
      : 'default';
    // 元素当前是否真的显示着壁纸：关闭背景时会被 display:none，
    // 但壁纸标识不变，只比对 key 会把"重新开启背景"误判成重复渲染而跳过。
    const wallpaperShown =
      !!(bgImage && bgImage.style.display !== 'none') ||
      !!(bgVideo && bgVideo.style.display !== 'none');
    const alreadyRendered = (wpKey === renderedWallpaperKey) && wallpaperShown;
    renderedWallpaperKey = wpKey;

    if (!customWallpaperData) {
      if (!alreadyRendered) {
        if (bgVideo) {
          bgVideo.style.display = 'none';
        }
        if (bgImage) {
          bgImage.style.display = 'block';
          bgImage.src = 'img/background.webp';
          bgOverlay?.classList.add('loaded');
          revealWhenReady(bgImage, 15000);
        }
      }
      syncWallpaperSourceSelect();
      reapplyLanguage();
      return;
    }

    syncWallpaperSourceSelect();

    if (customWallpaperData.type === 'video') {
      if (!alreadyRendered) {
        if (bgImage) {
          bgImage.style.display = 'none';
        }
        if (bgVideo) {
          bgVideo.style.display = 'block';
          bgVideo.src = customWallpaperData.url;
          bgOverlay?.classList.add('loaded');
          bgVideo.play().catch(() => {});
          revealWhenReady(bgVideo, 15000);
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
        }
        if (bgImage) {
          bgImage.style.display = 'block';
          bgImage.src = customWallpaperData.url;
          bgOverlay?.classList.add('loaded');
          revealWhenReady(bgImage, 15000);
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
    'ntp_custom_engine_config',
    'ntp_custom_wallpaper'
  ];
  // 以纯字符串保存的设置项（界面语言），导入时需要原样写回
  const RAW_CONFIG_KEYS = [LANG_KEY];
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
  function onBgEnabledToggle(e) {
    bgEnabled = e.target.checked;
    Storage.set('ntp_bg_enabled', bgEnabled);
    applyBackgroundState();
    if (bgEnabled) ensureBingDailyFresh();
    reapplyLanguage();
  }

  toggleBgSwitch?.addEventListener('change', onBgEnabledToggle);
  toggleBgMaster?.addEventListener('change', onBgEnabledToggle);

  toggleEnhancedVisibility?.addEventListener('change', (e) => {
    enhancedVisibility = e.target.checked;
    Storage.set('ntp_enhanced_visibility', enhancedVisibility);
    applyEnhancedVisibility();
    reapplyLanguage();
  });

  toggleEnhancedBlur?.addEventListener('change', (e) => {
    enhancedBlur = e.target.checked;
    Storage.set('ntp_enhanced_blur', enhancedBlur);
    applyEnhancedVisibility();
    reapplyLanguage();
  });

  toggleBgVignette?.addEventListener('change', (e) => {
    bgVignette = e.target.checked;
    Storage.set('ntp_bg_vignette', bgVignette);
    applyBgVignette();
  });

  // 背景设置：在设置面板内切换到二级页（不再弹窗）
  btnOpenBgModal?.addEventListener('click', () => {
    showSettingsPage('bg');
    renderWallpaper();
    reapplyLanguage();
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
    // 选任一具体来源：确保背景开启
    if (!bgEnabled) {
      bgEnabled = true;
      Storage.set('ntp_bg_enabled', true);
      applyBackgroundState();
    }
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
    reapplyLanguage();
    // 壁纸已切换到新图：「跟随壁纸」模式下重新取色。
    // 不等 bg-image 的 load 事件——renderWallpaper 对同源/同 URL 可能复用节点，
    // 这里统一主动触发更可靠。
    refreshMdColorFromWallpaper();
  }

  // 壁纸切换后的取色触发（供 commitWallpaperAsActive 与图片 load 两路调用）
  function refreshMdColorFromWallpaper() {
    if (typeof applyMdColor !== 'function') return;
    if (Storage.get(MD_MODE_KEY, 'off') !== 'wallpaper') return;
    // 等下一帧，确保 renderWallpaper 已把新 src 写到 <img> 上
    requestAnimationFrame(() => {
      const img = pickWallpaperImageEl();
      if (img && img.src) {
        // 新 URL 未进入缓存：清掉旧缓存项无关紧要，按 URL 取即可
        MD_SEED_CACHE.delete(mdSeedCacheKey(img.src || img.currentSrc));
      }
      applyMdColor();
    });
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
  reapplyLanguage();
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

    // 悬挂与否决定"居中"是否生效，布局变化后立即重算
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
    discardCustomSelectDropdown(selectId);
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
  // 'middle'（垂直居中）在悬挂布局下生效：其它布局按默认处理，
  // 存储值保留，切回悬挂时还原
  function applyQuicklinkPosition() {
    const isHanging = (document.body.getAttribute('data-layout') || 'focused') === 'inspirational';
    const effective = (quicklinkPosition === 'middle' && !isHanging) ? 'auto' : quicklinkPosition;
    const pos = (effective === 'bottom' || effective === 'middle') ? effective : 'auto';
    document.body.setAttribute('data-quicklink-position', pos);

    let savedRow = Storage.get('ntp_quicklinks', '2');
    // 旧数据里 '0' 曾表示"关闭"，现在关闭由显示开关承担
    if (savedRow === '0') savedRow = '2';
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
    // 下拉回显存储的选择；非悬挂布局下"居中"的实际效果与默认相同
    if (selectQuicklinkPosition) {
      // 回显实际生效的位置：展望模式下会显示为默认
      selectQuicklinkPosition.value = (quicklinkPosition === 'bottom' || quicklinkPosition === 'middle')
        ? quicklinkPosition
        : 'auto';
    }
    // 禁用状态变了，已建好的下拉丢掉，下次展开时按新状态重建
    discardCustomSelectDropdown('select-quicklinks');
    discardCustomSelectDropdown('select-quicklink-position');
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
      quicklinkPosition: 'auto',
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
    reapplyLanguage();

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
    closeAllDropdowns();
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
    reapplyLanguage();
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
    reapplyLanguage(); 
  });

  btnEditEngine?.addEventListener('click', () => {
    openCustomEngineModal(true);
  });

  toggleHistorySwitch?.addEventListener('change', (e) => {
    historyEnabled = e.target.checked;
    Storage.set('ntp_history_enabled', historyEnabled);
    reapplyLanguage();
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

  if (toggleTimeCapsuleSwitch) {
    toggleTimeCapsuleSwitch.checked = showTimeCapsule;

    toggleTimeCapsuleSwitch.addEventListener('change', (e) => {
      showTimeCapsule = e.target.checked;
      Storage.set('ntp_show_time_capsule', showTimeCapsule);
      reapplyLanguage();
      applyTimeCapsuleVisibility();
    });
  }

  // 菜单按钮开关事件
  const toggleMenuButtonSwitch = document.getElementById('toggle-menu-button-switch');

  if (toggleMenuButtonSwitch) {
    toggleMenuButtonSwitch.checked = showMenuButton;

    toggleMenuButtonSwitch.addEventListener('change', (e) => {
      showMenuButton = e.target.checked;
      Storage.set('ntp_show_menu_button', showMenuButton);
      reapplyLanguage();
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
      reapplyLanguage();
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
      reapplyLanguage();
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
      reapplyLanguage();
    });
  }

  // 快速链接"添加"按钮显隐开关（按钮由脚本渲染，改动后需要重建列表）
  if (toggleAddButtonSwitch) {
    toggleAddButtonSwitch.checked = showAddButton;

    toggleAddButtonSwitch.addEventListener('change', (e) => {
      showAddButton = e.target.checked;
      Storage.set('ntp_show_add_button', showAddButton);
      renderQuicklinks(true);
      reapplyLanguage();
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
  const QUICKLINK_ITEM_WIDTH = 104;
  // 项与项之间的间距
  const QUICKLINK_GAP = 18;
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
      iconContent = `<svg viewBox="0 -960 960 960" width="20" height="20" role="img" aria-label="${label}">${presetBody}</svg>`;
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
    // 触屏：长按呼出菜单；长按后继续拖动则进入排序
    let touchTimer = null;
    let touchStartX = 0;
    let touchStartY = 0;
    let touchLongPress = false;
    let touchDragging = false;
    let touchTarget = null;
    const LONG_PRESS_MS = 500;      // 长按判定时长
    const MOVE_THRESHOLD = 10;      // 超过该位移视为移动，取消长按判定

    linkElem.addEventListener('touchstart', (e) => {
      if (e.touches.length !== 1) return;
      const t = e.touches[0];
      touchStartX = t.clientX;
      touchStartY = t.clientY;
      touchLongPress = false;
      touchDragging = false;
      touchTarget = null;
      clearTimeout(touchTimer);
      touchTimer = setTimeout(() => {
        touchLongPress = true;
        if (navigator.vibrate) navigator.vibrate(10);
        showQuicklinkMenu(item, touchStartX, touchStartY, false, linkElem);
      }, LONG_PRESS_MS);
    }, { passive: true });

    linkElem.addEventListener('touchmove', (e) => {
      const t = e.touches[0];
      if (!t) return;
      const moved = Math.hypot(t.clientX - touchStartX, t.clientY - touchStartY);

      if (!touchLongPress) {
        // 长按判定前移动，视为滑动而非长按
        if (moved > MOVE_THRESHOLD) clearTimeout(touchTimer);
        return;
      }
      if (!touchDragging && moved > MOVE_THRESHOLD) {
        // 长按后开始移动：收起菜单，改判为排序
        touchDragging = true;
        hideQuicklinkMenu();
        draggedId = item.id;
        linkElem.classList.add('dragging');
      }
      if (!touchDragging) return;
      e.preventDefault();
      const hit = document.elementFromPoint(t.clientX, t.clientY);
      const target = hit && hit.closest ? hit.closest('.quicklink-item') : null;
      if (target && target.dataset.id && target.dataset.id !== item.id) {
        touchTarget = target;
        previewDropPosition(target, t.clientX);
      }
    }, { passive: false });

    const endTouch = () => {
      clearTimeout(touchTimer);
      if (touchDragging) {
        commitDropOrder();
      }
      linkElem.classList.remove('dragging');
      draggedId = null;
      previewDropKey = null;
      touchLongPress = false;
      touchDragging = false;
      touchTarget = null;
    };
    linkElem.addEventListener('touchend', endTouch, { passive: true });
    linkElem.addEventListener('touchcancel', endTouch, { passive: true });



    return linkElem;
  }

  // 创建"添加"按钮项
  function createQuicklinkAddNode() {
    const addElem = document.createElement('div');
    addElem.className = 'quicklink-item quicklink-add-btn';
    addElem.innerHTML = `
      <div class="quicklink-icon quicklink-add-icon">
        <svg width="18" height="18" viewBox="0 -960 960 960" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
          <path d="M440-440H240q-17 0-28.5-11.5T200-480q0-17 11.5-28.5T240-520h200v-200q0-17 11.5-28.5T480-760q17 0 28.5 11.5T520-720v200h200q17 0 28.5 11.5T760-480q0 17-11.5 28.5T720-440H520v200q0 17-11.5 28.5T480-200q-17 0-28.5-11.5T440-240v-200Z"/>
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
      || i18nData[getResolvedLanguageCode(localStorage.getItem(LANG_KEY) || 'auto')]
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
    const renderKey = [rows, perRow, document.body.getAttribute('data-quicklink-position') || '', showAddButton ? '1' : '0', quicklinksList.length,
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
  document.querySelectorAll('.quicklink-item').forEach(el => {
    el.classList.remove('drag-over');
    el.removeAttribute('data-drop');
  });
  draggedId = null;
}

// 按鼠标落在目标项的左半/右半，决定"插到前面"还是"插到后面"
// 拖动中把被拖拽项实时插到目标位置，形成半透明预览
function previewDropPosition(target, clientX) {
  const rect = target.getBoundingClientRect();
  const after = clientX > rect.left + rect.width / 2;
  const draggedEl = document.querySelector('.quicklink-item.dragging');
  if (!draggedEl || draggedEl === target) return false;

  const key = target.dataset.id + (after ? ':after' : ':before');
  if (key === previewDropKey) return false;
  previewDropKey = key;

  // 记录移动前的布局，供 FLIP 动画计算位移
  const moving = Array.from(quicklinksElem.querySelectorAll('.quicklink-item'));
  const beforeRects = new Map();
  moving.forEach(el => beforeRects.set(el, el.getBoundingClientRect()));

  if (after) {
    target.after(draggedEl);
  } else {
    target.before(draggedEl);
  }

  // FLIP：其余项从旧位置滑到新位置，形成让位动画
  moving.forEach(el => {
    if (el === draggedEl) return;
    const first = beforeRects.get(el);
    const last = el.getBoundingClientRect();
    const dx = first.left - last.left;
    const dy = first.top - last.top;
    if (!dx && !dy) return;
    el.animate(
      [
        { transform: 'translate(' + dx + 'px, ' + dy + 'px)' },
        { transform: 'translate(0, 0)' }
      ],
      { duration: 160, easing: 'ease-out' }
    );
  });
  return true;
}

// 松手时按 DOM 当前顺序回写数组，完成排序
function commitDropOrder() {
  if (!quicklinksElem) return;
  const ids = Array.from(quicklinksElem.querySelectorAll('.quicklink-item[data-id]'))
    .map(el => el.dataset.id);
  if (!ids.length || ids.length !== quicklinksList.length) return;
  const byId = new Map(quicklinksList.map(item => [item.id, item]));
  const reordered = ids.map(id => byId.get(id)).filter(Boolean);
  if (reordered.length !== quicklinksList.length) return;
  quicklinksList = reordered;
  Storage.set('ntp_quicklinks_list', quicklinksList);
  renderQuicklinks(true);
}

function onDragOver(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = 'move';
  // dragenter 只在进入时触发一次，鼠标在同一项内左右移动要靠 dragover 持续更新
  const target = e.currentTarget;
  const targetId = target.dataset.id;
  if (targetId && targetId !== draggedId) {
    previewDropPosition(target, e.clientX);
  }
}

function onDragEnter(e) {
  e.preventDefault();
  const target = e.currentTarget;
  const targetId = target.dataset.id;
  // 只有快速链接（有 data-id）且不是被拖拽自身时，才显示落点
  if (targetId && targetId !== draggedId) {
    previewDropPosition(target, e.clientX);
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
  commitDropOrder();
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
  const backgroundMenu = document.getElementById('background-menu');

  // 通用右键菜单：先定位，下一帧再显示，保证淡入有起点
  function showContextMenu(menuEl, x, y) {
    if (!menuEl) return;
    menuEl.classList.remove('active');
    const rect = menuEl.getBoundingClientRect();
    if (x + rect.width > window.innerWidth - 8) x = window.innerWidth - rect.width - 8;
    if (y + rect.height > window.innerHeight - 8) y = window.innerHeight - rect.height - 8;
    menuEl.style.left = Math.max(8, x) + 'px';
    menuEl.style.top = Math.max(8, y) + 'px';
    requestAnimationFrame(() => menuEl.classList.add('active'));
  }

  function hideContextMenu(menuEl) {
    menuEl?.classList.remove('active');
  }
  // 空白处右键：屏蔽浏览器菜单，改为页面自己的菜单
  // 右键与长按都不接管的交互区域
  const contextMenuExclude = [
    '#header', '#popover-settings', '#popover-waffle',
    '#search-container', 'ntp-quicklinks', '.quicklink-item',
    '.modal-overlay', '.modal-dialog', '.context-menu'
  ].join(',');

  document.addEventListener('contextmenu', (e) => {
    if (e.defaultPrevented) return;                       // 快速链接已自行处理
    const target = e.target instanceof Element ? e.target : null;
    if (!target) return;
    // 输入控件保留浏览器原生菜单
    if (target.closest('input, textarea, select, [contenteditable="true"]')) return;
    // 其余位置一律屏蔽浏览器菜单
    e.preventDefault();
    // 右键外部时收起已展开的面板，与左键点击一致
    if (!target.closest('#popover-settings, #popover-waffle, #settings, #waffle')) {
      popoverSettings?.classList.remove('active');
      popoverWaffle?.classList.remove('active');
    }
    // 交互区域不弹出页面菜单，只有背景与空白处才弹
    if (target.closest(contextMenuExclude)) return;
    hideQuicklinkMenu();
    showContextMenu(backgroundMenu, e.clientX, e.clientY);
  });

  // 空白处长按：触屏上与右键等价，呼出同一个菜单
  const BACKGROUND_LONG_PRESS = 500;
  const BACKGROUND_MOVE_THRESHOLD = 10;
  let backgroundTouchTimer = 0;
  let backgroundTouchX = 0;
  let backgroundTouchY = 0;

  document.addEventListener('touchstart', (e) => {
    if (e.touches.length !== 1) return;
    const target = e.target instanceof Element ? e.target : null;
    if (!target) return;
    if (target.closest('input, textarea, select, [contenteditable="true"]')) return;
    if (target.closest(contextMenuExclude)) return;
    const t = e.touches[0];
    backgroundTouchX = t.clientX;
    backgroundTouchY = t.clientY;
    clearTimeout(backgroundTouchTimer);
    backgroundTouchTimer = setTimeout(() => {
      if (navigator.vibrate) navigator.vibrate(10);
      hideQuicklinkMenu();
      showContextMenu(backgroundMenu, backgroundTouchX, backgroundTouchY);
    }, BACKGROUND_LONG_PRESS);
  }, { passive: true });

  document.addEventListener('touchmove', (e) => {
    const t = e.touches[0];
    if (!t) return;
    if (Math.hypot(t.clientX - backgroundTouchX, t.clientY - backgroundTouchY) > BACKGROUND_MOVE_THRESHOLD) {
      clearTimeout(backgroundTouchTimer);
    }
  }, { passive: true });

  document.addEventListener('touchend', () => {
    clearTimeout(backgroundTouchTimer);
  }, { passive: true });

  document.addEventListener('touchcancel', () => {
    clearTimeout(backgroundTouchTimer);
  }, { passive: true });

  // 背景菜单的动作
  backgroundMenu?.addEventListener('click', (e) => {
    const btn = e.target instanceof Element ? e.target.closest('.context-menu-item') : null;
    if (!btn) return;
    // 阻止冒泡到 document 的点击处理，否则刚打开的面板会被立刻收起
    e.stopPropagation();
    const action = btn.dataset.action;
    hideContextMenu(backgroundMenu);
    if (action === 'edit-background') {
      const wasOpen = !!popoverSettings?.classList.contains('active');
      // 面板未展开时先触发打开，让展开过渡完整播放
      if (!wasOpen) btnSettings?.click();
      const applyBackgroundPage = () => {
        showSettingsPage('bg');
        renderWallpaper();
        reapplyLanguage();
      };
      // 面板刚展开时延后切页，避免切页的高度处理打断展开动画
      if (wasOpen) applyBackgroundPage();
      else setTimeout(applyBackgroundPage, 120);
    } else if (action === 'add-quicklink') {
      openAddModal();
    }
  });


  let quicklinkMenuTarget = null;

  function hideQuicklinkMenu() {
    quicklinkMenu?.classList.remove('active');
    // 收起时清掉选中态，下次弹出不会残留高亮
    quicklinkMenu?.querySelectorAll('.context-menu-item').forEach(item => {
      item.classList.remove('selected');
      item.removeAttribute('aria-current');
    });
    // 菜单打开期间触发元素保持高亮，收起时一并撤销
    quicklinkMenu?._sourceEl?.classList.remove('menu-open');
    if (quicklinkMenu) quicklinkMenu._sourceEl = null;
    quicklinkMenuTarget = null;
  }

  // 在指定位置弹出菜单（三个点按钮与右键共用同一套）
  // forAddButton 为真时只显示针对添加按钮的项
  // sourceEl 为触发菜单的元素，菜单展开期间保持它的悬停态
  function showQuicklinkMenu(link, left, top, forAddButton, sourceEl) {
    if (!quicklinkMenu) return;
    // 先撤掉显示状态：菜单已开着时右键别处，也要先消失再重新淡入
    quicklinkMenu.classList.remove('active');
    // 连续右键不同项时先撤掉上一次的高亮
    if (quicklinkMenu._sourceEl && quicklinkMenu._sourceEl !== sourceEl) {
      quicklinkMenu._sourceEl.classList.remove('menu-open');
    }
    quicklinkMenu._sourceEl = sourceEl || null;
    sourceEl?.classList.add('menu-open');
    quicklinkMenuTarget = link;
    quicklinkMenu.querySelectorAll('.context-menu-item').forEach(item => {
      item.hidden = forAddButton ? item.dataset.action !== 'hide-add' : item.dataset.action === 'hide-add';
      item.classList.remove('selected');
      item.removeAttribute('aria-current');
    });
    const rect = quicklinkMenu.getBoundingClientRect();
    if (left + rect.width > window.innerWidth - 8) left = window.innerWidth - rect.width - 8;
    if (top + rect.height > window.innerHeight - 8) top = window.innerHeight - rect.height - 8;
    quicklinkMenu.style.left = Math.max(8, left) + 'px';
    quicklinkMenu.style.top = Math.max(8, top) + 'px';
    requestAnimationFrame(() => quicklinkMenu.classList.add('active'));
  }

  quicklinksElem?.addEventListener('contextmenu', (e) => {
    const item = e.target instanceof Element ? e.target.closest('.quicklink-item') : null;
    if (!item) return;
    e.preventDefault();
    if (item.classList.contains('quicklink-add-btn')) {
      showQuicklinkMenu(null, e.clientX, e.clientY, true, item);
      return;
    }
    const link = quicklinksList.find(x => x.id === item.getAttribute('data-id'));
    if (!link) return;
    showQuicklinkMenu(link, e.clientX, e.clientY, false, item);
  });

  quicklinkMenu?.addEventListener('click', (e) => {
    const btn = e.target instanceof Element ? e.target.closest('.context-menu-item') : null;
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
  const btnAddButtonHiddenMute = document.getElementById('btn-add-button-hidden-mute');

  // 隐藏添加按钮后的说明弹窗；用户选择"不再提醒"后不再弹出
  const ADD_BUTTON_NOTICE_KEY = 'ntp_add_button_notice_muted';
  function hideQuicklinkAddButton() {
    showAddButton = false;
    Storage.set('ntp_show_add_button', false);
    if (toggleAddButtonSwitch) toggleAddButtonSwitch.checked = false;
    renderQuicklinks(true);
    reapplyLanguage();
    if (!Storage.get(ADD_BUTTON_NOTICE_KEY, false)) {
      modalAddButtonHidden?.classList.add('active');
    }
  }

  btnAddButtonHiddenOk?.addEventListener('click', () => {
    modalAddButtonHidden?.classList.remove('active');
  });

  btnAddButtonHiddenMute?.addEventListener('click', () => {
    // 记住选择：此后隐藏添加按钮不再弹出说明
    Storage.set(ADD_BUTTON_NOTICE_KEY, true);
    modalAddButtonHidden?.classList.remove('active');
  });
  modalAddButtonHidden?.addEventListener('click', (e) => {
    if (e.target === modalAddButtonHidden) modalAddButtonHidden.classList.remove('active');
  });

  // 指针按下即收起菜单：捕获阶段执行，不受控件自身 stopPropagation 影响
  document.addEventListener('pointerdown', (e) => {
    if (e.target instanceof Element && e.target.closest('.context-menu')) return;
    hideQuicklinkMenu();
    hideContextMenu(backgroundMenu);
  }, true);
  // 选中项按选项菜单的规则：单选、铺满整项、加粗强调色。
  // 菜单内的当前选中项以 aria-current 标记，供样式与键盘导航共用。
  function setQuicklinkMenuItemSelected(item) {
    if (!quicklinkMenu) return;
    quicklinkMenu.querySelectorAll('.context-menu-item').forEach(el => {
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
    const items = Array.from(quicklinkMenu.querySelectorAll('.context-menu-item'))
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
    hideContextMenu(backgroundMenu);
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
        btn.innerHTML = '<svg viewBox="0 -960 960 960" aria-hidden="true">' + (icon[field] || '') + '</svg>';
        group.appendChild(btn);
      });
      iconPresetPanel.appendChild(group);
    });
  }

  function markSelectedIconPreset() {
    if (!iconPresetPanel) return;
    iconPresetPanel.querySelectorAll('.icon-preset-item').forEach(btn => {
      const style = iconPresetStyle === 'regular' ? 'regular' : 'filled';
      btn.classList.toggle('selected',
        btn.dataset.iconId === iconPresetId && btn.dataset.variant === style);
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
    iconPresetId = btn.dataset.iconId || '';
    iconPresetStyle = btn.dataset.variant === 'regular' ? 'regular' : 'filled';
    if (selectIconMode) selectIconMode.value = 'preset';
    updateIconPresetOption();
    markSelectedIconPreset();
    hideIconPresetPanel();
    closeAllDropdowns();
  });

  hideIconPresetPanel();

  // 打开"添加快速链接"弹窗，清空表单并隐藏删除按钮
  function openAddModal() {
    currentEditingId = null;
    if (inputName) inputName.value = '';
    if (inputUrl) inputUrl.value = '';
    if (selectIconMode) selectIconMode.value = 'auto';
    iconPresetId = '';
    iconPresetStyle = 'filled';
    hideIconPresetPanel();           // 收掉上一次残留的宫格面板
    updateIconPresetOption();        // 同步下拉的显示文本
    clearErrors();
    if (btnDelete) btnDelete.style.display = 'none';
    modalOverlay?.classList.add('active');
    setTimeout(() => inputName?.focus(), 50);
  }


  // 打开"编辑快速链接"弹窗，填充当前数据并显示删除按钮
  function openEditModal(item) {
    currentEditingId = item.id;
    if (inputName) inputName.value = item.title;
    if (inputUrl) inputUrl.value = item.url;
    if (selectIconMode) {
      selectIconMode.value = (item.iconMode === 'text' || item.iconMode === 'preset') ? item.iconMode : 'auto';
    }
    iconPresetId = item.iconPreset || '';
    iconPresetStyle = item.iconPresetStyle === 'regular' ? 'regular' : 'filled';
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
    const iconPreset = iconMode === 'preset' ? (iconPresetId || '') : '';
    const savedPresetStyle = iconMode === 'preset'
      ? (iconPresetStyle === 'regular' ? 'regular' : 'filled')
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
        quicklinksList[itemIndex] = { ...quicklinksList[itemIndex], title, url, iconMode, iconPreset, iconPresetStyle: savedPresetStyle };
      }
    } else {
      const newItem = {
        id: Date.now().toString(),
        title,
        url,
        iconMode,
        iconPreset,
        iconPresetStyle: savedPresetStyle
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

  const historySvgIcon = `<svg width="18" height="18" viewBox="0 -960 960 960" fill="currentColor"><path d="M480-120q-126 0-223-76.5T131-392q-4-15 6-27.5t27-14.5q16-2 29 6t18 24q24 90 99 147t170 57q117 0 198.5-81.5T760-480q0-117-81.5-198.5T480-760q-69 0-129 32t-101 88h70q17 0 28.5 11.5T360-600q0 17-11.5 28.5T320-560H160q-17 0-28.5-11.5T120-600v-160q0-17 11.5-28.5T160-800q17 0 28.5 11.5T200-760v54q51-64 124.5-99T480-840q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-120Zm40-376 100 100q11 11 11 28t-11 28q-11 11-28 11t-28-11L452-452q-6-6-9-13.5t-3-15.5v-159q0-17 11.5-28.5T480-680q17 0 28.5 11.5T520-640v144Z"/></svg>`;
  const searchSvgIcon = `<svg width="18" height="18" viewBox="0 -960 960 960" fill="currentColor" aria-hidden="true"><path d="M378-329q-108.16 0-183.08-75Q120-479 120-585t75-181q75-75 181.5-75t181 75Q632-691 632-584.85 632-542 618-502q-14 40-42 75l242 240q9 8.56 9 21.78T818-143q-9 9-22.22 9-13.22 0-21.78-9L533-384q-30 26-69.96 40.5Q423.08-329 378-329Zm-1-60q81.25 0 138.13-57.5Q572-504 572-585t-56.87-138.5Q458.25-781 377-781q-82.08 0-139.54 57.5Q180-666 180-585t57.46 138.5Q294.92-389 377-389Z"/></svg>`;

  // 关闭搜索联想下拉面板，重置选中索引
  function closeSuggestions() {
    searchContainer?.classList.remove('suggestions-open');
    selectedSuggestionIndex = -1;
  }

  // 单条建议高度下限（面板至少保留一行）、距视口底部的留白
  const SUGGEST_ITEM_H = 40;
  const SUGGEST_EDGE = 8;

  // 从搜索历史中移除一条并重渲染
  function removeSearchHistoryEntry(text) {
    const index = searchHistory.indexOf(text);
    if (index === -1) return;
    searchHistory.splice(index, 1);
    Storage.set('ntp_search_history', searchHistory);
    fetchAndShowSuggestions();
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

      // 右侧「填入搜索框」按钮：悬停或键盘选中时显现，点击只填充不直接搜索
      const fillBtn = document.createElement('button');
      fillBtn.type = 'button';
      fillBtn.className = 'suggestion-fill';
      const fillLabel = (window._i18nDict && window._i18nDict.fillSuggestion) || '填入搜索框';
      fillBtn.title = fillLabel;
      fillBtn.setAttribute('aria-label', fillLabel);
      fillBtn.innerHTML = `<svg width="18" height="18" viewBox="0 -960 960 960" fill="currentColor" aria-hidden="true"><path d="M280-624v224q0 17-11.5 28.5T240-360q-17 0-28.5-11.5T200-400v-320q0-17 11.5-28.5T240-760h320q17 0 28.5 11.5T600-720q0 17-11.5 28.5T560-680H336l436 436q11 11 11 28t-11 28q-11 11-28 11t-28-11L280-624Z"/></svg>`;
      // mousedown 阻止默认行为：避免按钮抢走输入框焦点（保持光标在框内）
      fillBtn.addEventListener('mousedown', (e) => {
        e.preventDefault();
        e.stopPropagation();
      });
      fillBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const text = decodeInput(itemObj.text);
        if (searchInput) {
          searchInput.value = text;
          searchInput.focus();
          try { searchInput.setSelectionRange(text.length, text.length); } catch (err) { /* 忽略 */ }
          // 触发 input 事件：同步 fakebox 的 has-value 状态并按新词刷新联想
          searchInput.dispatchEvent(new Event('input', { bubbles: true }));
        }
      });
      li.appendChild(fillBtn);

      // 历史项额外提供删除按钮，位置在填入按钮右侧
      if (itemObj.isHistory) {
        const delBtn = document.createElement('button');
        delBtn.type = 'button';
        delBtn.className = 'suggestion-fill suggestion-delete';
        const delLabel = (window._i18nDict && window._i18nDict.delete) || '删除';
        delBtn.title = delLabel;
        delBtn.setAttribute('aria-label', delLabel);
        delBtn.innerHTML = `<svg width="18" height="18" viewBox="0 -960 960 960" fill="currentColor" aria-hidden="true"><path d="M480-424 284-228q-11 11-28 11t-28-11q-11-11-11-28t11-28l196-196-196-196q-11-11-11-28t11-28q11-11 28-11t28 11l196 196 196-196q11-11 28-11t28 11q11 11 11 28t-11 28L536-480l196 196q11 11 11 28t-11 28q-11 11-28 11t-28-11L480-424Z"/></svg>`;
        delBtn.addEventListener('mousedown', (e) => {
          e.preventDefault();
          e.stopPropagation();
        });
        delBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          removeSearchHistoryEntry(itemObj.text);
        });
        li.appendChild(delBtn);
      }

      li.addEventListener('click', () => {
        if (searchInput) searchInput.value = decodeInput(itemObj.text);
        doSearch(decodeInput(itemObj.text));   // 搜索要用原文，不能用转义后的实体
      });

      suggestionList.appendChild(li);
    });

    if (suggestionsFooter) {
      suggestionsFooter.style.display = historyItems.length > 0 ? 'block' : 'none';
    }

    // 面板高度不超过视口：按实际渲染高度从末尾裁掉多余条目，不出现滚动条
    const box = document.getElementById('suggestions-box');
    if (box) {
      const top = box.getBoundingClientRect().top;
      const maxHeight = Math.max(SUGGEST_ITEM_H, window.innerHeight - top - SUGGEST_EDGE);
      box.style.maxHeight = maxHeight + 'px';
      box.style.overflowY = 'hidden';
      let guard = 0;
      while (box.scrollHeight > maxHeight &&
             suggestionList.children.length > 1 &&
             guard++ < 100) {
        suggestionList.removeChild(suggestionList.lastElementChild);
      }
    }

    searchContainer?.classList.add('suggestions-open');
  }

  // JSONP 工具：动态插入 <script> 跨域获取数据
  // 网页 / file:// / 扩展页面三种环境通用（JSONP 不受 CORS 限制）
  let jsonpSeq = 0;
  function jsonpFetch(url, { timeout = 5000, charset } = {}) {
    return new Promise((resolve, reject) => {
      const cbName = `__litestartSugCb${Date.now()}_${jsonpSeq++}`;
      const script = document.createElement('script');
      if (charset) script.setAttribute('charset', charset);
      let settled = false;
      const cleanup = () => {
        clearTimeout(timer);
        try { delete window[cbName]; } catch (e) { window[cbName] = undefined; }
        script.remove();
      };
      const timer = setTimeout(() => {
        if (settled) return;
        settled = true;
        cleanup();
        reject(new Error('JSONP 请求超时'));
      }, timeout);
      window[cbName] = (data) => {
        if (settled) return;
        settled = true;
        cleanup();
        resolve(data);
      };
      script.onerror = () => {
        if (settled) return;
        settled = true;
        cleanup();
        reject(new Error('JSONP 请求失败'));
      };
      script.src = url.replace('{cb}', cbName);
      document.head.appendChild(script);
    });
  }

  // 取联想词：扩展环境交给 background 代取并解析，网页环境返回 null 由调用方走 JSONP。
  // 扩展页面的 fetch 受 CORS 限制，而三家接口都不返回 CORS 头，只能由 service worker 代取
  async function requestSuggestFromProxy(engine, query) {
    const runtime = (typeof chrome !== 'undefined' && chrome.runtime &&
      typeof chrome.runtime.sendMessage === 'function') ? chrome.runtime : null;
    if (!runtime) return null;
    const reply = await new Promise(resolve => {
      try {
        runtime.sendMessage({ type: 'liteSuggest', engine, query }, res => {
          // 没有接收方时 lastError 会被置位，此处按失败处理并回退
          if (runtime.lastError) {
            console.warn('联想词代理不可用:', runtime.lastError.message);
            resolve(null);
          } else {
            resolve(res || null);
          }
        });
      } catch (e) {
        console.warn('联想词代理调用异常:', e);
        resolve(null);
      }
    });
    if (reply && reply.ok) return reply.items;
    if (reply && reply.error) console.warn('联想词代理返回失败:', reply.error);
    return null;
  }

  // 解析必应 qsonhs 接口返回的数据结构
  function parseBingSuggestions(data) {
    const results = data?.AS?.Results || [];
    const items = results.flatMap(r => (r?.Suggests || []).map(s => s?.Txt).filter(Boolean));
    return [...new Set(items)];
  }

  // 解析百度 su 接口返回的数据结构
  function parseBaiduSuggestions(data) {
    const grouped = (data?.g || []).map(item => item?.q).filter(Boolean);
    if (grouped.length) return grouped;
    return Array.isArray(data?.s) ? data.s : [];
  }

  // 获取搜索联想建议：扩展环境经 background 代理，网页环境走 JSONP
  async function fetchSearchSuggestions(engine, query) {
    const q = encodeURIComponent(query);
    try {
      const proxied = await requestSuggestFromProxy(engine, query);
      if (proxied) return proxied;

      if (engine === 'baidu') {
        const data = await jsonpFetch(`https://suggestion.baidu.com/su?wd=${q}&p=3&cb={cb}`, { charset: 'gbk' });
        return parseBaiduSuggestions(data);
      }
      if (engine === 'bing') {
        try {
          const data = await jsonpFetch(`https://api.bing.com/qsonhs.aspx?type=cb&q=${q}&cb={cb}`);
          return parseBingSuggestions(data);
        } catch (bingError) {
          console.warn('必应联想词获取失败，回退到百度词条:', bingError);
          const data = await jsonpFetch(`https://suggestion.baidu.com/su?wd=${q}&p=3&cb={cb}`, { charset: 'gbk' });
          return parseBaiduSuggestions(data);
        }
      }
      if (engine === 'google') {
        const data = await jsonpFetch(`https://suggestqueries.google.com/complete/search?client=youtube&q=${q}&callback={cb}`);
        if (Array.isArray(data) && Array.isArray(data[1])) {
          // client=youtube 返回 [词, 相关度] 二元组数组，client=chrome 返回纯字符串数组，两者都兼容
          return data[1].map(item => Array.isArray(item) ? item[0] : item).filter(Boolean);
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

  // 视口尺寸变化后按新的剩余空间重排条数；面板未展开时不处理
  window.addEventListener('resize', () => {
    if (searchContainer?.classList.contains('suggestions-open')) {
      debouncedFetchSuggestions();
    }
  });

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
  const savedLang = getSavedLang();
  // 若存的是已下架的语言（例如 zh-WY），回落到"跟随设备"
  const initialLang = (savedLang === 'auto' || i18nData[savedLang]) ? savedLang : 'auto';
  if (selectLanguage) {
    selectLanguage.value = initialLang;
    selectLanguage.addEventListener('change', (e) => {
      const val = e.target.value;
      localStorage.setItem(LANG_KEY, val);
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
  return i18nData[getResolvedLanguageCode(getSavedLang())] || i18nData['zh-CN'];
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
  const id = iconPresetId || '';
  if (sel.value !== 'preset' || !id) return;
  const body = quicklinkPresetBody(id, iconPresetStyle);
  if (!body) return;
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('class', 'custom-select-preset-icon');
  svg.setAttribute('viewBox', '0 -960 960 960');
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
  const dict = currentDict();
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
  const dict = currentDict();
  const cfg = Storage.get('ntp_custom_engine_config', {}) || {};
  const name = cfg.name;
  opt.textContent = name
    ? String(dict.customEngineWithName || '').replace('{name}', name)
    : (dict.custom || '自定义');
  // 自定义下拉面板的选项文本是构建时固化的：这里主动丢弃它，
  // 下次展开时会按新的 option 文本重建（否则会一直显示旧名字）
  discardCustomSelectDropdown('select-engine');
  refreshCustomSelects();
}