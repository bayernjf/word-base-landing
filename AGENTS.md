# AGENTS.md — word-base-landing

供 AI coding agents（Claude Code / Codex / Cursor / Copilot 等）在本仓库工作时自动读取。

## 项目概览
word-base 落地页（Astro 静态站点，站点地址 `https://word-base.bayjf.com`）。
**注意**：word-base 主仓库 `apps/web/src/landing/` 还有一套内置 React 落地页（部署在 `word-base.pages.dev`），
与本仓库区块一一对应，两套文案已于 2026-08-08 逐区块对齐。

## 技术栈
| 类别 | 方案 |
|------|------|
| 框架 | Astro（SSG 静态输出） |
| 共享设计包 | `@bay/landing-ui` |
| 图标 | 统一走 `@bay/landing-ui/components/Icon.astro`（内联 Lucide SVG，无运行时依赖） |
| 设计令牌 | `@bay/landing-ui/styles/tokens.css`（`--lui-*`）；品牌色在 `src/styles/global.css` 用 `:root { --lui-accent }` 覆盖 |
| 包管理 | npm |

## 常用命令
```bash
npm install
npm run dev
npm run build     # astro build && node scripts/shot.mjs
npm run preview
```

## 约定
- **改任一侧文案都要同步另一侧**（本仓库 ↔ word-base 主仓库内置 React 落地页），否则两份站点会漂移。
- 升级共享设计包：改 `package.json` 里 `@bay/landing-ui` 的 git tag 后重新 `npm install`。
- 不要新增本地 `Icon.astro` / `global.css` 副本，一律用共享包。
- 部署细节见 `docs/DEPLOYMENT.md`。

## 不要做的事
- 不要在组件里内联 emoji 或自定义图标（走共享包的 Icon）。
- 不要只改一侧落地页文案。
- 不要提交构建产物与 `.env`。
- 不要跳过 `git pull --rebase` 直接 push。
