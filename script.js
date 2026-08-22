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
    showTimeCapsule: '显示时间',
    showMenuButton: '显示菜单按钮',
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
    xingyuefox: '星月Fox',
    forYou: '为您呈现',
    disclaimer: '请注意，此网页与 Microsoft 无关。',
    searchPlaceholder: '搜索或输入 Web 地址',
    searchInput: '搜索输入框',
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
    useOnlineContent: '使用在线内容',
    bingDaily: '必应每日壁纸',
    customUrl: '自定义',
    customOnlineWallpaper: '自定义在线壁纸',
    imageOrVideoUrl: '图片或视频URL',
    enterUrl: '输入图片或视频URL',
    bing: 'Bing',
    baidu: '百度',
    forceBingCN: '强制使用必应中国版',
    forceBingCNDesc: '强制使用必应中国版，避免代理设置导致的 www.bing.com 无法自动跳转到 cn.bing.com',
    enhancedVisibility: '增强元素可见性',
    enhancedVisibilityDesc: '开启背景时给Logo和顶部按钮添加半透明背景，使其在背景图上更清晰'
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
    showTimeCapsule: '顯示時間',
    showMenuButton: '顯示菜單按鈕',
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
    xingyuefox: 'XingYue_Fox',
    forYou: '為您呈現',
    disclaimer: '請注意，此網頁與 Microsoft 無關。',
    searchPlaceholder: '搜尋或輸入 Web 地址',
    searchInput: '搜尋輸入框',
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
    useOnlineContent: '使用線上內容',
    bingDaily: 'Bing每日桌布',
    customUrl: '自訂',
    customOnlineWallpaper: '自訂線上桌布',
    imageOrVideoUrl: '圖片或影片網址',
    enterUrl: '輸入圖片或影片網址',
    bingCN: 'Bing',
    baidu: '百度',
    forceBingCN: '強制使用必應中國版',
    forceBingCNDesc: '強制使用必應中國版，避免代理設定導致的 www.bing.com 無法自動跳轉到 cn.bing.com',
    enhancedVisibility: '增強元素可見性',
    enhancedVisibilityDesc: '開啟背景時給Logo和頂部按鈕添加半透明背景，使其在背景圖上更清晰'
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
    showTimeCapsule: '顯時',
    showMenuButton: '顯菜按鈕',
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
    xingyuefox: '星月Fox',
    forYou: '呈獻',
    disclaimer: '謹告：此頁與微軟無涉。',
    searchPlaceholder: '或搜或鍵，惟網址依',
    searchInput: '搜尋之框',
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
    useOnlineContent: '用網圖',
    bingDaily: '必應日圖',
    customUrl: '自訂',
    customOnlineWallpaper: '自訂網圖',
    imageOrVideoUrl: '圖影鏈',
    enterUrl: '輸圖影鏈',
    bingCN: '必應',
    baidu: '百度',
    forceBingCN: '強制使用必應中國版',
    forceBingCNDesc: '強制使用必應中國版，避免代理設定導致的 www.bing.com 無法自動跳轉到 cn.bing.com',
    enhancedVisibility: '增強元素可見性',
    enhancedVisibilityDesc: '開啟背景時給Logo和頂部按鈕添加半透明背景，使其在背景圖上更清晰'
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
    showTimeCapsule: 'Show Time',
    showMenuButton: 'Show Menu Button',
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
    xingyuefox: 'XingYue_Fox',
    forYou: '',
    disclaimer: 'Note: This page is not affiliated with Microsoft.',
    searchPlaceholder: 'Search the web or enter address',
    searchInput: 'Search input',
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
    useOnlineContent: 'Use online content',
    bingDaily: 'Bing daily wallpaper',
    customUrl: 'Custom',
    customOnlineWallpaper: 'Custom online wallpaper',
    imageOrVideoUrl: 'Image or video URL',
    enterUrl: 'Enter image or video URL',
    bingCN: 'Bing',
    forceBingCN: 'Force Bing China',
    forceBingCNDesc: 'Force www.bing.com to redirect to cn.bing.com, avoiding proxy issues that prevent automatic redirection',
    enhancedVisibility: 'Enhance Element Visibility',
    enhancedVisibilityDesc: 'Adds semi-transparent backgrounds to Logo and header buttons when background is enabled for better clarity'
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
    showTimeCapsule: '時間を表示',
    showMenuButton: 'メニューボタンを表示',
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
    xingyuefox: 'XingYue_Fox',
    forYou: '',
    disclaimer: '注: このページは Microsoft とは関係ありません。',
    searchPlaceholder: 'Web を検索またはアドレスを入力',
    searchInput: '検索入力ボックス',
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
    useOnlineContent: 'オンラインコンテンツを使用',
    bingDaily: 'Bingの今日の壁紙',
    customUrl: 'カスタム',
    customOnlineWallpaper: 'カスタムオンライン壁紙',
    imageOrVideoUrl: '画像または動画のURL',
    enterUrl: '画像または動画のURLを入力',
    bingCN: 'Bing',
    forceBingCN: 'Bing中国版を強制使用',
    forceBingCNDesc: 'プロキシ設定により www.bing.com から cn.bing.com への自動リダイレクトが妨げられる場合に、中国版Bingを強制使用します',
    enhancedVisibility: '要素の視認性を向上',
    enhancedVisibilityDesc: '背景有効時にロゴとヘッダーボタンに半透明の背景を追加し、見やすくします'
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
    showTimeCapsule: 'Показать время',
    showMenuButton: 'Показать кнопку меню',
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
    xingyuefox: 'XingYue_Fox',
    forYou: '',
    disclaimer: 'Примечание: Эта страница не связана с Microsoft.',
    searchPlaceholder: 'Введите поисковый запрос или URL',
    searchInput: 'Поле поиска',
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
    useOnlineContent: 'Использовать онлайн-контент',
    bingDaily: 'Ежедневные обои Bing',
    customUrl: 'Пользовательский',
    customOnlineWallpaper: 'Пользовательские онлайн-обои',
    imageOrVideoUrl: 'URL изображения или видео',
    enterUrl: 'Введите URL изображения или видео',
    bingCN: 'Bing',
    forceBingCN: 'Принудительно использовать Bing China',
    forceBingCNDesc: 'Принудительно использовать cn.bing.com, чтобы избежать проблем с прокси, из-за которых www.bing.com не может автоматически перенаправлять на cn.bing.com',
    enhancedVisibility: 'Повысить видимость элементов',
    enhancedVisibilityDesc: 'Добавляет полупрозрачный фон к логотипу и кнопкам заголовка при включенном фоне для лучшей читаемости'
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

// 界面渲染函数
function applyLanguage(langConfig) {
  const langCode = getResolvedLanguageCode(langConfig);
  const dict = i18nData[langCode] || i18nData['zh-CN'];

  document.documentElement.lang = langCode.startsWith('zh') ? (langCode === 'zh-TW' ? 'zh-TW' : 'zh-CN') : langCode;

  // 1.替换 innerText
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      el.innerText = dict[key];
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

  // 6.刷新时间胶囊状态文本
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
}

// LocalStorage持久化辅助对象
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

// 解析Hostname域名
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

// 获取网站缩略图
function getFaviconUrl(urlStr) {
  const domain = getDomain(urlStr);
  if (!domain) return '';
  return `https://api.xinac.net/icon/?url=${domain}`;
}

document.addEventListener('DOMContentLoaded', () => {
  // DOM元素引用
  const btnWaffle = document.getElementById('waffle');
  const btnSettings = document.getElementById('settings');
  const btnCloseSettings = document.getElementById('btn-close-settings');
  const popoverWaffle = document.getElementById('popover-waffle');
  const popoverSettings = document.getElementById('popover-settings');

  const selectEngine = document.getElementById('select-engine');
  const btnEditEngine = document.getElementById('btn-edit-engine');
  const forceBingCNRow = document.getElementById('force-bing-cn-row');
  const toggleForceBingCN = document.getElementById('toggle-force-bing-cn');
  const toggleHistorySwitch = document.getElementById('toggle-history-switch');
  const statusHistoryText = document.getElementById('status-history');
  const selectQuicklinks = document.getElementById('select-quicklinks');
  const quicklinksElem = document.getElementById('quicklinks');
  const logoContainer = document.getElementById('logo');
  const selectLanguage = document.getElementById('select-language');
  
  const searchContainer = document.getElementById('search-container');
  const fakebox = document.getElementById('fakebox');
  const searchInput = document.getElementById('search-input');
  const suggestionsBox = document.getElementById('suggestions-box');
  const suggestionList = document.getElementById('suggestion-list');
  const suggestionsFooter = document.getElementById('suggestions-footer');
  const clearHistoryBtn = document.getElementById('clear-history-btn');

  // Modal相关DOM元素(快捷方式
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

  // Modal相关DOM元素(自定义搜索引擎
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

  // 背景/壁纸控制DOM元素
  const toggleBgSwitch = document.getElementById('toggle-bg-switch');
  const statusBgText = document.getElementById('status-bg');
  const btnOpenBgModal = document.getElementById('btn-open-bg-modal');
  const enhancedVisibilityRow = document.getElementById('enhanced-visibility-row');
  const toggleEnhancedVisibility = document.getElementById('toggle-enhanced-visibility');
  
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

  if (searchInput && searchInput.value.trim() !== '') {
  const fakebox = document.getElementById('fakebox');
  fakebox?.classList.add('has-value');
  }

  let currentEditingId = null;
  let draggedId = null;//拖拽实现
  let selectedSuggestionIndex = -1;

  // 默认与自定义搜索引擎
  let customEngineConfig = Storage.get('ntp_custom_engine_config', {
    name: '',
    url: ''
  });

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
  });

  if (btnCloseSettings) {
    btnCloseSettings.addEventListener('click', () => {
      popoverSettings.classList.remove('active');
    });
  }

  document.addEventListener('click', (e) => {
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

  // 切换Logo
  function setLogo(engine) {
    if (logos[engine] !== undefined && logoContainer) {
      logoContainer.innerHTML = logos[engine];
    }
  }

  // 动态管理自定义搜索引擎编辑按钮显隐
  function updateEngineEditButton(engine) {
    if (btnEditEngine) {
      btnEditEngine.style.display = engine === 'custom' ? 'inline-flex' : 'none';
    }
  }

  function updateForceBingCNRow(engine) {
    if (forceBingCNRow) {
      forceBingCNRow.style.display = engine === 'bing' ? 'flex' : 'none';
    }
  }

    // 时间开关相关函数
  let timeCapsuleTimer = null;

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

  function startTimeCapsuleTimer() {
    if (timeCapsuleTimer) clearInterval(timeCapsuleTimer);
    updateTimeCapsule();
    timeCapsuleTimer = setInterval(updateTimeCapsule, 60000);
  }

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
  const savedQuicklinksRow = Storage.get('ntp_quicklinks', '0');
  let historyEnabled = Storage.get('ntp_history_enabled', true);
  let searchHistory = Storage.get('ntp_search_history', []);
  let showTimeCapsule = Storage.get('ntp_show_time_capsule', false);
  let showMenuButton = Storage.get('ntp_show_menu_button', true);
  let forceBingCN = Storage.get('ntp_force_bing_cn', false);
  
  let bgEnabled = Storage.get('ntp_bg_enabled', false);
  let customWallpaperData = Storage.get('ntp_custom_wallpaper', null);
  let enhancedVisibility = Storage.get('ntp_enhanced_visibility', false);

  if (selectEngine) selectEngine.value = savedEngine;
  if (selectQuicklinks) selectQuicklinks.value = savedQuicklinksRow;
  if (toggleHistorySwitch) toggleHistorySwitch.checked = historyEnabled;
  if (toggleForceBingCN) toggleForceBingCN.checked = forceBingCN;
  if (toggleEnhancedVisibility) toggleEnhancedVisibility.checked = enhancedVisibility;

  setLogo(savedEngine);
  updateEngineEditButton(savedEngine);
  updateForceBingCNRow(savedEngine);
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
      if (enhancedVisibility) {
        enhancedVisibility = false;
        Storage.set('ntp_enhanced_visibility', false);
        if (toggleEnhancedVisibility) toggleEnhancedVisibility.checked = false;
      }
    }

    if (enhancedVisibilityRow) {
      enhancedVisibilityRow.style.display = bgEnabled ? 'flex' : 'none';
    }
    applyEnhancedVisibility();
  }

  function applyEnhancedVisibility() {
    if (enhancedVisibility && bgEnabled) {
      document.body.setAttribute('data-enhanced-visibility', 'true');
    } else {
      document.body.removeAttribute('data-enhanced-visibility');
    }
  }

  function renderWallpaper() {
    if (!customWallpaperData) {
      if (bgVideo) bgVideo.style.display = 'none';
      if (bgImage) {
        bgImage.style.display = 'block';
        bgImage.src = 'img/background.webp';
      }
      if (wallpaperTypeTitle) wallpaperTypeTitle.textContent = '选择图片';
      if (wallpaperPreviewContainer) {
        wallpaperPreviewContainer.innerHTML = `<span style="font-size: 13px; color: var(--settings-text-secondary);" data-i18n="usingDefaultBg">正在使用默认背景</span>`;
      }
      return;
    }

    if (wallpaperTypeTitle) wallpaperTypeTitle.textContent = '上传的背景';

    if (customWallpaperData.type === 'video') {
      if (bgImage) bgImage.style.display = 'none';
      if (bgVideo) {
        bgVideo.style.display = 'block';
        bgVideo.src = customWallpaperData.url;
        bgVideo.play().catch(() => {});
      }

      if (wallpaperPreviewContainer) {
        wallpaperPreviewContainer.innerHTML = `
          <video src="${customWallpaperData.url}" autoplay loop muted playsinline style="width:100%;height:100%;object-fit:cover;"></video>
        `;
      }
    } else {
      if (bgVideo) bgVideo.style.display = 'none';
      if (bgImage) {
        bgImage.style.display = 'block';
        bgImage.src = customWallpaperData.url;
      }

      if (wallpaperPreviewContainer) {
        wallpaperPreviewContainer.innerHTML = `
          <img src="${customWallpaperData.url}" alt="背景预览" style="width:100%;height:100%;object-fit:cover;" />
        `;
      }
    }
  }

  applyBackgroundState();

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

  toggleEnhancedVisibility?.addEventListener('change', (e) => {
    enhancedVisibility = e.target.checked;
    Storage.set('ntp_enhanced_visibility', enhancedVisibility);
    applyEnhancedVisibility();
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
      Storage.set('ntp_custom_wallpaper', customWallpaperData);
      applyBackgroundState();
    };

    reader.readAsDataURL(file);
  });

  btnRemoveWallpaper?.addEventListener('click', () => {
    customWallpaperData = null;
    Storage.set('ntp_custom_wallpaper', null);
    applyBackgroundState();
  });


  // ===== 在线壁纸功能 =====
  const btnBingWallpaper = document.getElementById('btn-bing-wallpaper');
  const btnCustomUrlWallpaper = document.getElementById('btn-custom-url-wallpaper');
  const modalOnlineWallpaper = document.getElementById('modal-online-wallpaper');
  const onlineWallpaperForm = document.getElementById('online-wallpaper-form');
  const inputOnlineUrl = document.getElementById('input-online-url');
  const containerOnlineUrl = document.getElementById('container-online-url');
  const tipOnlineUrl = document.getElementById('tip-online-url');
  const btnOnlineCancel = document.getElementById('btn-online-cancel');

  // 必应每日壁纸
  btnBingWallpaper?.addEventListener('click', async () => {
    try {
      const response = await fetch('https://bing.biturl.top/?resolution=1920x1080&format=json');
      if (!response.ok) throw new Error('网络请求失败');
      const data = await response.json();
      let url = data.url;
      if (url && url.startsWith('http')) {
        if (!url.startsWith('http://') && !url.startsWith('https://')) {
          url = 'https://' + url;
        }
        customWallpaperData = { type: 'image', url: url };
        Storage.set('ntp_custom_wallpaper', customWallpaperData);
        if (!bgEnabled) {
          bgEnabled = true;
          Storage.set('ntp_bg_enabled', true);
        }
        applyBackgroundState();
        if (toggleBgSwitch) toggleBgSwitch.checked = true;
        if (toggleBgModalSwitch) toggleBgModalSwitch.checked = true;
        applyLanguage(localStorage.getItem('liteStart_language') || 'auto');
      } else {
        alert('获取必应壁纸失败，请稍后重试。');
      }
    } catch (e) {
      console.error('获取必应壁纸错误:', e);
      alert('获取必应壁纸失败，请检查网络。');
    }
  });


  // 自定义URL - 打开弹窗
  btnCustomUrlWallpaper?.addEventListener('click', () => {
    inputOnlineUrl.value = '';
    containerOnlineUrl?.classList.remove('error');
    tipOnlineUrl?.classList.remove('active');
    modalOnlineWallpaper?.classList.add('active');
    setTimeout(() => inputOnlineUrl?.focus(), 50);
  });

  // 关闭自定义URL弹窗
  function closeOnlineModal() {
    modalOnlineWallpaper?.classList.remove('active');
    containerOnlineUrl?.classList.remove('error');
    tipOnlineUrl?.classList.remove('active');
  }

  btnOnlineCancel?.addEventListener('click', closeOnlineModal);

  // 点击遮罩关闭
  modalOnlineWallpaper?.addEventListener('click', (e) => {
    if (e.target === modalOnlineWallpaper) closeOnlineModal();
  });

  // 表单提交
  onlineWallpaperForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  const url = inputOnlineUrl.value.trim();
  containerOnlineUrl?.classList.remove('error');
  tipOnlineUrl?.classList.remove('active');

  if (!url) {
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
  customWallpaperData = { type: isVideo ? 'video' : 'image', url: url };
  Storage.set('ntp_custom_wallpaper', customWallpaperData);
  if (!bgEnabled) {
    bgEnabled = true;
    Storage.set('ntp_bg_enabled', true);
  }
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

  // 布局卡片点击监听
  document.querySelectorAll('.preset-card').forEach(card => {
    card.addEventListener('click', () => {
      const layoutVal = card.dataset.layoutVal;
      document.body.setAttribute('data-layout', layoutVal);
      Storage.set('ntp_layout', layoutVal);
      updateLayoutPresetUI(layoutVal);
    });
  });

  // 设置面板切换监听
  selectEngine?.addEventListener('change', (e) => {
    const val = e.target.value;
    setLogo(val);
    updateEngineEditButton(val);
    updateForceBingCNRow(val);
    Storage.set('ntp_engine', val);
    if (val === 'custom' && (!customEngineConfig.url || customEngineConfig.url === 'https://duckduckgo.com/?q=%s')) {
      openCustomEngineModal();
    }
  });

  toggleForceBingCN?.addEventListener('change', (e) => {
    forceBingCN = e.target.checked;
    Storage.set('ntp_force_bing_cn', forceBingCN);
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

  // 如果初始状态是开启，启动定时器并显示
  if (showTimeCapsule) {
    applyTimeCapsuleVisibility();
  }
  // 应用菜单按钮初始可见性
  applyMenuButtonVisibility();
  
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

  // B2.快捷方式列表管理
  let quicklinksList = Storage.get('ntp_quicklinks_list', []);

    function renderQuicklinks() {
    if (!quicklinksElem) return;
    const rows = quicklinksElem.getAttribute('rows');
    if (rows === '0') {
      quicklinksElem.innerHTML = '';
      return;
    }

    quicklinksElem.innerHTML = '';

    // C1. 渲染已有的快捷方式
quicklinksList.forEach(item => {
  const linkElem = document.createElement('a');
  linkElem.href = item.url;
  linkElem.className = 'quicklink-item';
  linkElem.target = '_blank';
  linkElem.setAttribute('data-id', item.id);

  const initialChar = (item.title || 'W').charAt(0).toUpperCase();
  const faviconUrl = getFaviconUrl(item.url);

  let iconContent = '';
  if (faviconUrl) {
    iconContent = `<img src="${faviconUrl}" alt="${item.title}" loading="lazy" 
                      onerror="this.onerror=null; this.parentNode.innerText='${initialChar}';">`;
  } else {
    iconContent = initialChar;
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

  // ---------- 拖拽支持（测试） ----------
  linkElem.draggable = true;
  linkElem.addEventListener('dragstart', onDragStart);
  linkElem.addEventListener('dragend', onDragEnd);
  linkElem.addEventListener('dragover', onDragOver);
  linkElem.addEventListener('dragenter', onDragEnter);
  linkElem.addEventListener('dragleave', onDragLeave);
  linkElem.addEventListener('drop', onDrop);
  // --------------------

  const editBtn = linkElem.querySelector('.quicklink-edit-btn');
  editBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    openEditModal(item);
  });

  quicklinksElem.appendChild(linkElem);
});

    // C3. 添加“添加”按钮
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
  // 给被拖拽元素添加样式
  item.classList.add('dragging');
}

function onDragEnd(e) {
  const item = e.currentTarget;
  item.classList.remove('dragging');
  // 清理所有高亮
  document.querySelectorAll('.quicklink-item.drag-over').forEach(el => {
    el.classList.remove('drag-over');
  });
  draggedId = null;
}

function onDragOver(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = 'move';
}

function onDragEnter(e) {
  e.preventDefault();
  const target = e.currentTarget;
  const targetId = target.dataset.id;
  // 只有快捷方式（有 data-id）且不是被拖拽自身时，才高亮
  if (targetId && targetId !== draggedId) {
    target.classList.add('drag-over');
  }
}

function onDragLeave(e) {
  const target = e.currentTarget;
  target.classList.remove('drag-over');
}

function onDrop(e) {
  e.preventDefault();
  const target = e.currentTarget;
  target.classList.remove('drag-over');

  const targetId = target.dataset.id;
  if (!targetId || !draggedId || targetId === draggedId) {
    return;
  }

  // 查找两个元素在数组中的位置
  const draggedIndex = quicklinksList.findIndex(item => item.id === draggedId);
  const targetIndex = quicklinksList.findIndex(item => item.id === targetId);

  if (draggedIndex === -1 || targetIndex === -1) {
    return;
  }

  // 交换位置（将 draggedItem 移动到 targetIndex 位置）
  const [draggedItem] = quicklinksList.splice(draggedIndex, 1);
  quicklinksList.splice(targetIndex, 0, draggedItem);

  // 持久化并重新渲染
  Storage.set('ntp_quicklinks_list', quicklinksList);
  renderQuicklinks();
}
// ========== 拖拽事件处理函数结束 ==========


  // B3.自定义校验与 Modal 对话框逻辑
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

  // B4.搜索框历史记录与搜索建议词条
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

  // 执行搜索逻辑
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
});