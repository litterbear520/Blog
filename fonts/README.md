# 本站字体

从原有 Google Fonts 样式请求保存的 WOFF2 文件（2026-09-12），仅更改托管位置。保持 Inter、Noto Sans SC、Source Serif 4、Noto Serif SC 的字重、斜体、字符范围和 `font-display: swap`。不对字体文件重新编码，不裁减原有字符覆盖。

原样式来源：

<https://fonts.googleapis.com/css2?family=Inter:wght@300..700&family=Noto+Sans+SC:wght@300..700&family=Source+Serif+4:ital,opsz,wght@0,8..60,400..700;1,8..60,400..700&family=Noto+Serif+SC:wght@400..700&display=swap>

- `google-fonts.css`：保留原有 `@font-face` 声明，只替换 URL、去除注释和排版空白；浏览器按 `unicode-range` 选择所需分片。
- `manifest.json`：原始 URL、文件长度及 SHA-256；文件名包含内容摘要，更新字体时应同步更新 CSS 和清单。
- `*-OFL.txt`：各字体在 Google Fonts 官方仓库中的 SIL Open Font License。

更新时应保留完整的字体家族、字重、斜体和 Unicode 范围，并在字体加载完成后对比文章布局。不能只保存首页用到的中文分片，否则其他文章可能回退到系统字体。
