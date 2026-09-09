# 部署 — word-base-landing

更新时间：2026-09-09

## 站点信息
- `astro.config.mjs` 中 `site`：`https://word-base.bayjf.com`
- 技术栈：Astro（SSG 静态输出）+ `@bay/landing-ui`（图标走 `@bay/landing-ui/components/Icon.astro`，
  设计令牌来自 `@bay/landing-ui/styles/tokens.css`，品牌色在 `src/styles/global.css` 以
  `:root { --lui-accent }` 覆盖）
- 包管理器：npm

## 构建
```bash
npm install
npm run build     # astro build && node scripts/shot.mjs
npm run preview
```
产物目录 `dist`（纯静态），可部署到 Cloudflare Pages 或任意静态托管。

## 升级共享设计包
`@bay/landing-ui` 以 git tag 管理版本：改 `package.json` 里的 tag（如 `#v1.1.0`）后重新 `npm install`。

## 与 word-base 主仓库内置落地页的同步
word-base 主仓库（`apps/web/src/landing/`，部署在 `word-base.pages.dev`）内置一套 React 落地页，
与本仓库区块一一对应，两侧文案已于 2026-08-08 逐区块对齐。
**改任一侧内容都要同步另一侧**，否则两份落地页会漂移。

## 发布后验证
1. 中英双语首页与语言切换正常。
2. `robots.txt`、`sitemap.xml` 可访问且域名一致。
3. 与 `word-base.pages.dev` 的对应区块文案一致。
4. OG 图（构建时截出）可访问。
