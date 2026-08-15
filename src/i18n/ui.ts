// src/i18n/ui.ts
// Bilingual (zh/en) translation dictionary for WordBase landing.

export type Lang = 'en' | 'zh';
export const defaultLang: Lang = 'en';

type Dict = Record<string, string>;

export const dictionaries: Record<Lang, Dict> = {
  en: {
    // Nav
    'nav.workflow': 'Workflow',
    'nav.extension': 'Extension',
    'nav.learning': 'AI Learning',
    'nav.platforms': 'Multi-platform',
    'nav.faq': 'FAQ',
    'nav.webApp': 'Open Web App',
    'nav.freeUse': 'Free to Use',
    'nav.menu': 'Menu',

    // Hero
    'hero.badge': 'Ctrl+hover lookup · AI contextual deep learning',
    'hero.titleLine1': 'Browse to learn,',
    'hero.titleLine2': 'never let a word',
    'hero.titleHighlight': 'slip away',
    'hero.subtitle':
      'Browser word picker + AI contextual deep learning. Build vocabulary across all platforms.',
    'hero.installExtension': 'Install Browser Extension',
    'hero.openWeb': 'Open Web App',
    'hero.feature.chrome': 'Chrome / Edge / Safari',
    'hero.feature.openSource': 'Free & Open Source',
    'hero.feature.offline': 'Offline Dictionary',
    'hero.feature.sync': '5-Device Sync',
    'hero.installPlatform': 'Download for {platform}',
    'hero.tooltip.unavailable': 'This platform is being updated',

    // SocialProof
    'social.bookCapacity': 'Vocabulary Limit',
    'social.platforms': 'Platforms',
    'social.unlimited': 'Unlimited',
    'social.5devices': '5 devices',

    // Workflow
    'workflow.badge': '3-Step Workflow',
    'workflow.title': 'From encountering a word to truly mastering it',
    'workflow.subtitle':
      'Pick while browsing, sync seamlessly to the cloud, learn deeply with AI — vocabulary building has never been smoother.',
    'workflow.step01Title': 'Collect',
    'workflow.step01Desc':
      'While reading English pages, hold Ctrl and hover a word for an instant translation popup.',
    'workflow.step02Title': 'Sync',
    'workflow.step02Desc':
      'Click to save and it syncs to the cloud automatically. All devices update in real time, never lost.',
    'workflow.step03Title': 'Learn',
    'workflow.step03Desc':
      'Master vocabulary through AI stories, contextual practice, and SRS review on Web/Desktop/Mobile.',
    'workflow.demoStatus.off':
      'Hold {mod} key to start lookup (clicking a word also saves it)',
    'workflow.demoStatus.on':
      'Lookup mode on: hover any underlined word',
    'workflow.demoHint':
      'Tip: Hold {modKey} and hover underlined words to see definitions. Click a word to save it.',
    'workflow.book.title': 'My Word Book',
    'workflow.book.countSuffix': '{count} words',
    'workflow.book.empty':
      'No words saved yet. Try clicking an underlined word on the left.',
    'workflow.book.collected': 'Saved',
    'workflow.popup.collect': 'Save to Word Book',
    'workflow.popup.collected': 'Saved',

    // Extension
    'extension.badge': 'WordPicker Browser Extension',
    'extension.titleLine1': 'While reading English pages,',
    'extension.titleLine2': 'new words are no longer a barrier',
    'extension.subtitle':
      'After installing the WordPicker extension, you can look up and save new words without leaving the page when reading English docs, papers, or news.',
    'extension.feature.ctrlHover.title': 'Ctrl+hover lookup',
    'extension.feature.ctrlHover.desc':
      'No selection, no right-click. Hold Ctrl and hover to trigger lookup — buttery smooth.',
    'extension.feature.shadowDom.title': 'Shadow DOM isolation',
    'extension.feature.shadowDom.desc':
      'Popup renders in Shadow DOM, fully isolated from page styles. Works on every website.',
    'extension.feature.instant.title': 'Instant translation',
    'extension.feature.instant.desc':
      'Built-in free translation sources. Supports LLM translation engines and multi-language translation.',
    'extension.feature.bookmark.title': 'One-click save',
    'extension.feature.bookmark.desc':
      'Save words with sentence context, source URL, and page title for later review.',
    'extension.feature.offline.title': 'Offline dictionary',
    'extension.feature.offline.desc':
      'Built-in offline English-Chinese dictionary works without network. Privacy-safe.',
    'extension.feature.config.title': 'Fully configurable',
    'extension.feature.config.desc':
      'Add effects, custom trigger keys, hover delay, cache limits. Build your own lookup experience.',

    // Learning
    'learning.badge': 'AI Learning Workbench',
    'learning.titleLine1': 'From "knowing" to "mastering",',
    'learning.titleLine2': 'AI walks the last mile with you',
    'learning.subtitle':
      'Saving is just the start. WordBase AI learning system helps you understand in context, reinforce through practice, and remember via review.',
    'learning.feature.ai.title': 'AI deep analysis',
    'learning.feature.ai.desc':
      'AI generates definitions, root/affix breakdowns, memory tricks, and example usage — so you truly understand every word.',
    'learning.feature.story.title': 'Contextual story learning',
    'learning.feature.story.desc':
      'Auto-weaves new words into original English stories. Understand meaning and usage in real context. No more rote memorization.',
    'learning.feature.srs.title': 'SRS spaced review',
    'learning.feature.srs.desc':
      'Scientifically-backed spaced repetition algorithm. Intelligently schedules reviews for long-term retention with minimal time.',
    'learning.practice.title': 'Listen, Speak, Read, Write · Four-dimensional practice',
    'learning.practice.subtitle':
      'Every word can be reinforced through four modes to comprehensively improve language ability.',
    'learning.practice.read': 'Reading',
    'learning.practice.listen': 'Listening',
    'learning.practice.speak': 'Speaking',
    'learning.practice.write': 'Writing',
    'learning.practice.suffix': ' practice',

    // MultiPlatform
    'platforms.badge': '5-Device Sync',
    'platforms.title': 'Save once, learn anywhere',
    'platforms.subtitle':
      'Words saved in the browser are instantly visible on your computer and phone. Review on your phone during commutes, study deeply on desktop at work.',
    'platforms.web.name': 'Web',
    'platforms.web.desc': 'Browser, instant access',
    'platforms.desktop.name': 'Desktop',
    'platforms.desktop.desc': 'macOS / Windows',
    'platforms.mobile.name': 'Mobile',
    'platforms.mobile.desc': 'iOS / Android',
    'platforms.sync.realtime': 'Real-time two-way sync',
    'platforms.sync.cloud': 'Cloud backup',
    'platforms.sync.local': 'Local-first · Offline-ready',
    'platforms.checklist.extension': 'Browser extension collection',
    'platforms.checklist.books': 'Multi-book management',
    'platforms.checklist.ai': 'Custom AI models',
    'platforms.checklist.importExport': 'Data import / export',

    // Faq
    'faq.badge': 'FAQ',
    'faq.title': 'Still have questions?',
    'faq.q1': 'Is WordBase free?',
    'faq.a1':
      'Yes, WordBase is completely free and open source. Core features (word picking, SRS review, AI enhancement) are all free. AI features require you to configure your own API Key (OpenAI / Anthropic / Gemini, etc.), fees are charged by the corresponding platform.',
    'faq.q2': 'Where is data stored? Is it safe?',
    'faq.a2':
      'Data is stored in the Supabase cloud (based on PostgreSQL), protected by Row-Level Security (RLS) policies ensuring each user can only access their own data. AI API Keys are encrypted with AES-256-GCM and cannot be leaked. You can export or delete all your data at any time.',
    'faq.q3': 'Which browsers are supported?',
    'faq.a3':
      'WordPicker browser extension supports Chrome, Edge, Safari and other Chromium or WebKit based browsers. After installation, hold Ctrl and hover any word on an English page to look up and save it.',
    'faq.q4': 'What does the AI feature require?',
    'faq.a4':
      'Add your AI Provider configuration (OpenAI, Anthropic, Gemini, or any OpenAI-compatible endpoint) in settings and enter your API Key. Multiple providers can be configured and switched. Basic word picking and SRS review work without AI configuration.',
    'faq.q5': 'Which platforms are supported?',
    'faq.a5':
      'The Web app runs in any browser. Desktop supports macOS and Windows. Mobile supports iOS and Android. All platforms share the same data via real-time cloud sync.',
    'faq.q6': 'Can it work offline?',
    'faq.a6':
      'The browser extension has a built-in offline dictionary — look up words without network. Saved words are also viewable offline. AI features and cloud sync require a network connection.',

    // FinalCTA
    'cta.titleLine1': 'Start your painless',
    'cta.titleLine2': 'vocabulary journey',
    'cta.subtitle':
      'Install the browser extension now. Turn every English reading session into a vocabulary opportunity.',
    'cta.installExtension': 'Install Browser Extension',
    'cta.openWeb': 'Open Web App',

    // Footer
    'footer.tagline': 'Add memory; learn while browsing',
    'footer.products': 'Products',
    'footer.products.web': 'Web App',
    'footer.products.extension': 'Browser Extension',
    'footer.products.platforms': 'Multi-platform',
    'footer.resources': 'Resources',
    'footer.legal': 'Legal',
    'footer.legal.privacy': 'Privacy Policy',
    'footer.legal.terms': 'Terms of Service',
    'footer.legal.deleteAccount': 'Delete Account',
    'footer.legal.analyticsPref': 'Analytics Preference',
    'footer.copyright': '© {year} WordBase. All rights reserved.',

    // AnalyticsConsentBanner
    'consent.text':
      'We use Google Analytics and Microsoft Clarity to analyze traffic and usage patterns to continuously improve the product. These tools do not collect your personal information (such as email, password, learning content). You can accept or decline. You can change your preference at any time under "Analytics Preference".',
    'consent.privacy': 'Privacy Policy',
    'consent.decline': 'Decline',
    'consent.accept': 'Accept',

    // ThemeToggle
    'theme.toggle': 'Toggle theme',
  },

  zh: {
    // Nav
    'nav.workflow': '工作流',
    'nav.extension': '浏览器扩展',
    'nav.learning': 'AI 学习',
    'nav.platforms': '多端同步',
    'nav.faq': 'FAQ',
    'nav.webApp': '进入 Web 版',
    'nav.freeUse': '免费使用',
    'nav.menu': '菜单',

    // Hero
    'hero.badge': '默认 Ctrl 悬停即查词 · AI 语境深度学习',
    'hero.titleLine1': '浏览即学习，',
    'hero.titleLine2': '让每个生词都',
    'hero.titleHighlight': '不流失',
    'hero.subtitle': '浏览器划词收藏 + AI 语境深度学习，全平台词汇积累。',
    'hero.installExtension': '安装浏览器插件',
    'hero.openWeb': '打开 Web 版',
    'hero.feature.chrome': 'Chrome / Edge / Safari',
    'hero.feature.openSource': '免费开源',
    'hero.feature.offline': '离线词典可用',
    'hero.feature.sync': '五端同步',
    'hero.installPlatform': '下载 {platform} 版',
    'hero.tooltip.unavailable': '该平台紧急更新上架中',

    // SocialProof
    'social.bookCapacity': '生词本容量',
    'social.platforms': '支持平台',
    'social.unlimited': '无限',
    'social.5devices': '5 端',

    // Workflow
    'workflow.badge': '三步工作流',
    'workflow.title': '从遇到生词到真正掌握',
    'workflow.subtitle': '浏览器即点即采，云端无缝同步，AI 驱动深度学习——词汇积累从未如此顺畅。',
    'workflow.step01Title': '采集',
    'workflow.step01Desc': '浏览英文网页时按住 Ctrl 悬停单词，即时弹出翻译释义。',
    'workflow.step02Title': '同步',
    'workflow.step02Desc': '点击收藏自动同步到云端，所有设备实时更新，永不丢失。',
    'workflow.step03Title': '学习',
    'workflow.step03Desc': '在 Web/桌面/手机上通过 AI 故事、语境练习、SRS 复习掌握词汇。',
    'workflow.demoStatus.off': '按住 {mod} 键开始查词（点击单词也可收藏）',
    'workflow.demoStatus.on': '🔍 查词模式已开启：悬停带下划线的单词',
    'workflow.demoHint':
      '💡 提示：按住 <kbd>{modKey}</kbd> 键后悬停带下划线的单词查看释义，点击单词直接收藏',
    'workflow.book.title': '📚 我的单词本',
    'workflow.book.countSuffix': '{count} 词',
    'workflow.book.empty': '还没有收藏单词<br>试试点击左侧带下划线的单词',
    'workflow.book.collected': '已同步',
    'workflow.popup.collect': '收藏到单词本',
    'workflow.popup.collected': '✓ 已收藏',

    // Extension
    'extension.badge': 'WordPicker 浏览器扩展',
    'extension.titleLine1': '浏览英文网页时，',
    'extension.titleLine2': '生词不再是障碍',
    'extension.subtitle':
      '安装 WordPicker 扩展后，阅读英文文档、论文、新闻时遇到生词，无需离开页面即可查词收藏。',
    'extension.feature.ctrlHover.title': '默认 Ctrl 悬停即查',
    'extension.feature.ctrlHover.desc':
      '无需选中、无需右键，默认按住 Ctrl 键鼠标悬停即可触发查词，极致流畅。',
    'extension.feature.shadowDom.title': 'Shadow DOM 隔离',
    'extension.feature.shadowDom.desc':
      '使用 Shadow DOM 渲染悬浮弹窗，完全不污染页面样式，兼容所有网站。',
    'extension.feature.instant.title': '即时翻译',
    'extension.feature.instant.desc':
      '内置免费翻译源，支持接入大模型翻译引擎，支持多语言互译。',
    'extension.feature.bookmark.title': '一键收藏',
    'extension.feature.bookmark.desc':
      '保存单词的同时记录句子上下文、来源URL与页面标题，方便日后回顾。',
    'extension.feature.offline.title': '离线词典',
    'extension.feature.offline.desc':
      '内置离线英汉词典，无网络环境下也能正常查词，隐私安全无忧。',
    'extension.feature.config.title': '自由配置',
    'extension.feature.config.desc':
      '选择添加特效、自定义触发键、悬停延迟、缓存上限，打造属于你的查词体验。',

    // Learning
    'learning.badge': 'AI 学习工作台',
    'learning.titleLine1': '从「认识」到「掌握」，',
    'learning.titleLine2': 'AI 陪你走完最后一公里',
    'learning.subtitle':
      '收藏只是开始。WordBase 的 AI 学习系统帮你在语境中理解、在练习中巩固、在复习中记住。',
    'learning.feature.ai.title': 'AI 深度解析',
    'learning.feature.ai.desc':
      'AI 生成词义详解、词根词缀、记忆技巧、例句用法，让你真正理解每个词。',
    'learning.feature.story.title': '语境故事学习',
    'learning.feature.story.desc':
      '自动将生词编入原创英文故事，在真实语境中理解词义和用法，告别死记硬背。',
    'learning.feature.srs.title': 'SRS 间隔复习',
    'learning.feature.srs.desc':
      '基于科学的间隔重复算法，智能安排复习时间，用最少时间实现长期记忆。',
    'learning.practice.title': '听说读写 · 四维练习',
    'learning.practice.subtitle': '每个单词都可以通过四种方式强化训练，全面提升语言能力。',
    'learning.practice.read': '阅读',
    'learning.practice.listen': '听力',
    'learning.practice.speak': '口语',
    'learning.practice.write': '写作',
    'learning.practice.suffix': '练习',

    // MultiPlatform
    'platforms.badge': '五端同步',
    'platforms.title': '一次收藏，随处学习',
    'platforms.subtitle':
      '浏览器里收藏的单词，在电脑和手机上立即可见。通勤路上用手机复习，工作时用桌面端深度学习。',
    'platforms.web.name': 'Web',
    'platforms.web.desc': '浏览器即开即用',
    'platforms.desktop.name': '桌面端',
    'platforms.desktop.desc': 'macOS / Windows',
    'platforms.mobile.name': '移动端',
    'platforms.mobile.desc': 'iOS / Android',
    'platforms.sync.realtime': '实时双向同步',
    'platforms.sync.cloud': '云端备份',
    'platforms.sync.local': '本地优先 · 离线可用',
    'platforms.checklist.extension': '浏览器扩展采集',
    'platforms.checklist.books': '多单词本分类管理',
    'platforms.checklist.ai': '自定义 AI 模型',
    'platforms.checklist.importExport': '数据导入导出',

    // Faq
    'faq.badge': '常见问题',
    'faq.title': '还有疑问？',
    'faq.q1': 'WordBase 是免费的吗？',
    'faq.a1':
      '是的，WordBase 完全免费开源。核心功能（划词收藏、SRS 复习、AI 增强）全部免费使用。AI 功能需要你配置自己的 API Key（OpenAI / Anthropic / Gemini 等），费用由对应平台收取。',
    'faq.q2': '数据存储在哪里？安全吗？',
    'faq.a2':
      '数据存储在 Supabase（基于 PostgreSQL）云端，通过行级安全（RLS）策略确保每个用户只能访问自己的数据。AI API Key 使用 AES-256-GCM 加密存储，不会泄露。你随时可以导出或删除所有数据。',
    'faq.q3': '支持哪些浏览器？',
    'faq.a3':
      'WordPicker 浏览器扩展支持 Chrome、Edge、Safari 等基于 Chromium 或 WebKit 的浏览器。安装后，在任意英文网页按住 Ctrl 悬停单词即可查词并收藏。',
    'faq.q4': 'AI 功能需要什么配置？',
    'faq.a4':
      '在设置页面添加你的 AI Provider 配置（OpenAI、Anthropic、Gemini 或任意 OpenAI 兼容接口），填入 API Key 即可。支持多 Provider 同时配置和切换。不配置 AI 也能使用基础的划词收藏和 SRS 复习功能。',
    'faq.q5': '支持哪些平台？',
    'faq.a5':
      'Web 版直接在浏览器中使用，桌面端支持 macOS 和 Windows，移动端支持 iOS 和 Android。所有平台共享同一份数据，通过云端实时同步。',
    'faq.q6': '离线可以使用吗？',
    'faq.a6':
      '浏览器扩展内置离线词典，无需联网即可查词。已收藏的单词在离线时也可查看。AI 功能和云同步需要网络连接。',

    // FinalCTA
    'cta.titleLine1': '开始你的无痛',
    'cta.titleLine2': '词汇积累之旅',
    'cta.subtitle': '现在安装浏览器扩展，让每一次英文阅读都成为词汇积累的机会。',
    'cta.installExtension': '安装浏览器插件',
    'cta.openWeb': '打开 Web 版',

    // Footer
    'footer.tagline': '添忆：添加记忆；浏览即学习',
    'footer.products': '产品',
    'footer.products.web': 'Web 版',
    'footer.products.extension': '浏览器扩展',
    'footer.products.platforms': '多端支持',
    'footer.resources': '资源',
    'footer.legal': '法律',
    'footer.legal.privacy': '隐私政策',
    'footer.legal.terms': '服务条款',
    'footer.legal.deleteAccount': '账号删除',
    'footer.legal.analyticsPref': '分析偏好',
    'footer.copyright': '© {year} WordBase. All rights reserved.',

    // AnalyticsConsentBanner
    'consent.text':
      '我们使用 Google Analytics 和 Microsoft Clarity 来分析流量和使用模式，以持续改进产品。这些工具不会收集你的个人信息（如邮箱、密码、学习内容）。你可以选择接受或拒绝。你可以在任何时候在「分析偏好」中更改偏好。',
    'consent.privacy': '隐私政策',
    'consent.decline': '拒绝',
    'consent.accept': '接受',

    // ThemeToggle
    'theme.toggle': '切换主题',
  },
};
