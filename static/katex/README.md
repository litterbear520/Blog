# KaTeX 静态资源

固定使用原站 CDN 引用的 KaTeX **0.16.9**，来自官方 npm 包：

<https://registry.npmjs.org/katex/-/katex-0.16.9.tgz>

`katex.min.css`、`fonts/` 和 `LICENSE` 均原样保存；CSS 的 SHA-384 与站点配置中的原 SRI 值一致。保留字体相对于 CSS 的目录结构，避免公式字形变化或资源缺失。

对应 Docusaurus 官方方案：[Self-hosting KaTeX assets](https://docusaurus.io/docs/markdown-features/math-equations#self-hosting-katex-assets)。
