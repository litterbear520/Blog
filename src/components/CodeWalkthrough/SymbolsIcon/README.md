# CodeWalkthrough 的 Symbols 文件图标

图标来自 [Miguel Solorio / vscode-symbols](https://github.com/miguelsolorio/vscode-symbols)，按上游 MIT 许可证使用，完整版权与许可文本保存在本目录的 `LICENSE`。`icons/` 中的 SVG 与上游原件逐字节一致，不重绘、不改色；`upstream.json` 记录原始路径与 Git blob SHA，测试会校验这些 SHA。

## 范围

只替换 CodeWalkthrough 文件树与文件标签栏的图标，不更改网站配色、Prism 语法高亮、步骤数据、复制按钮或终端运行行为。所有引用 CodeWalkthrough 的页面都会使用它。

此目录内置当前演练所需的轻量子集，不打包完整的 VS Code 扩展：Python、Git、TOML / 环境配置、JSON、Markdown、文本、默认文件和文件夹，以及测试目录的红色代码文件夹。`.pyi` / `.pyw`、`.jsonc` / `.json5`、`.markdown` 和 `.env.*` 是同类文件的补充关联。未知文件或目录回退到 Symbols 默认图标，而不是 emoji。

SVG 通过 Docusaurus 自带的 SVGR 作为 React 组件导入，随站点本地打包，渲染时不依赖 GitHub 或 CDN。图标尺寸固定、不被长文件名挤压；文件夹用独立箭头显示展开状态；图标对屏幕阅读器隐藏，由原有按钮名称和 `aria-expanded` 传达内容与状态。

## 维护与验证

新增文件类型时，在 `associations.mjs` 登记关联，在 `index.jsx` 注册对应的上游 SVG，并更新 `upstream.json`。保留上游许可证；不要将缩进、行号或差异标记引入复制内容。

在仓库根目录运行：

```bash
node --test src/components/CodeWalkthrough/SymbolsIcon/icons.test.mjs
npm run build
```

第一条命令只使用 Node 标准库，检查文件关联、目录关联、未知名称回退、原始 SVG 完整性和接入点。第二条命令检查真实 Docusaurus / React / SVG 构建。
