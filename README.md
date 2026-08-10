# WordBase 落地页

WordBase 是一个"浏览即学习"的 AI 词汇工作台:浏览器划词收藏生词,结合 AI 语境深度学习,全平台积累词汇。本仓库是该产品的官方落地页站点。

## 技术栈

- **框架**:Astro ^5.0.0(静态输出)
- **样式**:Tailwind CSS ^4.0.0(通过 `@tailwindcss/vite` ^4.0.0 Vite 插件接入)
- **SEO**:@astrojs/sitemap ^3.2.1
- **i18n**:仅中文单语言站点(未配置 i18n,无 `/en` 路由)

## 快速开始

包管理器为 npm(仓库包含 `package-lock.json`)。

```bash
npm install        # 安装依赖
npm run dev        # 启动开发服务器
npm run build      # 构建生产版本(输出到 dist/)
npm run preview    # 预览构建产物
```

## 项目结构

```text
word-base-landing/
├── public/                  # 静态资源(favicon、llms.txt、llms-full.txt、robots.txt)
├── src/
│   ├── components/          # 落地页区块(Hero、Workflow、Extension、Learning、
│   │                        #   MultiPlatform、FAQ、FinalCTA、SocialProof 等)
│   │                        #   另含 Nav、Footer、ThemeToggle、AnalyticsConsentBanner
│   ├── layouts/             # BaseLayout
│   ├── pages/               # 路由(单页落地页 + 法务页)
│   └── styles/              # global.css(Tailwind v4)
├── astro.config.mjs         # Astro 配置(site、sitemap、Tailwind Vite 插件)
├── tsconfig.json
└── package.json
```

## 路由说明

| 路径 | 页面 |
|------|------|
| `/` | 首页(单页落地页,含 Hero、工作流、扩展介绍、学习方式、多平台、FAQ 等区块) |
| `/privacy` | 隐私政策 |
| `/terms` | 服务条款 |
| `/delete-account` | 删除账号 |
| `/404` | 404 页面 |

## 部署

`astro.config.mjs` 中 `site` 配置为 `https://word-base-landing.pages.dev`,构建产物为纯静态文件(`dist/`),可直接部署到 Cloudflare Pages 或任意静态托管。

## 共享设计包

本仓库使用共享设计包 `@bay/landing-ui`(`github:bayernjf/landing-ui#v1.1.0`):
- 图标统一走 `@bay/landing-ui/components/Icon.astro`(内联 Lucide SVG,无运行时依赖)
- 设计令牌来自 `@bay/landing-ui/styles/tokens.css`(`--lui-*`),品牌色(emerald)在 `src/styles/global.css` 以 `:root { --lui-accent }` 覆盖
- 包版本以 git tag 管理;升级时改 `package.json` 中的 tag 后重新 `npm install`

## 与 word-base 内置落地页的关系

word-base 主仓库(`apps/web/src/landing/`,部署在 `word-base.pages.dev`)内置了一套 React 落地页,与本仓库区块一一对应。两套文案已于 2026-08-08 逐区块对齐,修改任一侧内容时请同步另一侧:

| 能力 | 本仓库(Astro) | word-base 内置(React) |
|------|------|------|
| 修饰键提示 | `WorkflowSection.astro` 内联脚本按 `navigator.platform` 动态显示 ⌘ Cmd / Ctrl | 同逻辑(组件内 useEffect) |
| 下载按钮 | `BaseLayout.astro` 全局脚本调 GitHub API 替换 `.ext-download-link` 为 chrome zip 直链,失败 fallback releases 页 | `useDownloadUrls` hook |
| 埋点 | `window.wordbase.trackEvent`(`download_click`,platform=browser_extension) | shared/lib/analytics `trackEvent`,同口径 |
| 语言 | 仅中文 | 中/英切换 |
| 主题 | 明/暗(localStorage `wordbase-landing-theme`) | 明/暗 |
