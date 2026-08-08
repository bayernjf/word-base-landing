# Handoff — word-base-landing

更新时间：2026-08-08

## 项目概况
WordBase（浏览器背单词扩展）落地页。Astro 7 静态站点，中英双语，部署于 Cloudflare Pages。
通过页头/页脚链接回 hub 站 bayjf.com，不与其他落地页直接互链。

## 已完成（本地未推送，分支 dev，共 7 个提交）
- `8e7507e` build: upgrade Astro to v7
- `497b9f0` fix(seo): remove fabricated aggregate rating（删除虚构评分 JSON-LD，仅 5 行删除）
- `6a21386` feat(analytics): track extension download clicks
- `7a01abf` fix(demo): show correct modifier key on macOS
- `693a31d` feat(seo): add OG preview image（public/preview.png）
- `e54e863` feat(pages): add custom 404 page
- `0c8ab41` docs: add README with project overview

## 注意点
- ⚠️ 域名不一致：仓库配置/布局中 baseUrl 是 https://word-base-landing.pages.dev（无法访问），
  而实际线上站点是 https://word-base.pages.dev（已确认 200）。canonical、og:url、sitemap 均受影响，建议统一到线上域名。
- fix(seo) 提交曾因拆分脚本方向错误返工过一次，当前版本已核验只含评分删除。
- robots.txt 已就位；构建通过；提交仅在本地。

## 下一步
1. 决定并统一正式域名（大概率改为 word-base.pages.dev），更新 baseUrl/canonical/sitemap。
2. `git push`（dev 分支，推送前可先 `git pull --rebase`）。
3. 部署后验证下载点击统计埋点、og:image、404 页面。

## taste-skill 设计审计（2026-08-08，本地未提交）
按 taste-skill 反 AI-slop 方法论清理设计 Tell，仅动样式与文案，
未改动内容 IA、URL、路由和功能逻辑。
- 英文文案 em-dash 清扫：SEO 标题 `X — Brand` 统一为 `X | Brand`、404 标题改用冒号、
  正文按语义改冒号/分号/逗号；中文“——”为规范破折号，保留未动。
- 导航栏阴影切换由 scroll 监听改为 IntersectionObserver 顶部哨兵
  （src/components/Nav.astro），项目内 scroll 监听零残留。
- 去 AI 紫、换 emerald 单色 accent：Nav/Hero/FinalCTA 共 5 处 indigo→purple
  渐变按钮改为 emerald-500 实色；global.css 标题强调色由紫粉动画渐变改为
  静态 #34d399 并删除 gradient-shift 循环动画；WorkflowSection 的 JS classList
  类名同步更新。
- `npm run build` 验证通过（5 页）。

后续：审阅上述改动后按原子规则分批提交推送（英文 Conventional Commits）。
