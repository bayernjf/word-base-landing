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
