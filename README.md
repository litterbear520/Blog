# 小熊的博客

基于 [Docusaurus 3](https://docusaurus.io/) 构建的个人技术博客，专注于学习、开发和分享。

**在线访问：[huangsitao.fun](https://huangsitao.fun)**

| 项 | 值 |
| ---- | ---- |
| 框架 | Docusaurus 3.10.1 + React 19 |
| Node | >= 18 |
| 部署 | GitHub Actions → `gh-pages` 分支 |
| 默认主题 | 暗色模式 |

## 快速开始

```bash
npm install        # 安装依赖
npm start          # 开发服务器（localhost:3000，热更新）
```

```bash
npm run build      # 构建静态网站
npm run serve      # 本地预览构建结果（提交前确认用）
npm run clear      # 清理 Docusaurus 缓存
```

## 内容结构

```
├── blog/                  # 博文（元数据同步维护在 src/pages/bloglist.js）
├── docs/                  # 笔记（按目录分类，侧边栏自动生成）
├── src/
│   ├── components/        # AgentLoopViz、SkillCard、密码保护等组件
│   ├── data/skills.js     # SkillHub 技能数据
│   ├── pages/             # 首页 / 博文列表 / Skills 页
│   └── theme/             # Cursor 风格代码高亮主题（深浅两套）
├── plugins/               # copy-markdown-source：生成可复制的 .md 源码
└── .github/workflows/     # CI：push 构建，main 分支自动部署
```

## 特色功能

- **自定义博文列表**（`/bloglist`）：分类筛选 + 卡片布局
- **SkillHub**（`/skills`）：收录常用的 Claude 技能，卡片展开显示安装命令与仓库链接
- **KaTeX 数学公式**：`remark-math` + `rehype-katex`
- **Cursor 代码主题**：自定义 Prism 高亮，适配亮暗模式
- **复制 Markdown 源码**：文档页一键复制清洗后的 `.md`
- **密码保护**：可选的全站访问口令（赛博朋克风登录页）

## 如何新增内容

| 内容 | 做法 |
| ---- | ---- |
| 博文 | `blog/` 下新建文章，并在 `src/pages/bloglist.js` 的 `POSTS` 数组补充元数据 |
| 笔记 | `docs/` 下建目录并添加 `index.md`，侧边栏自动生成 |
| 技能 | 在 `src/data/skills.js` 的 `SKILLS` 数组追加一个对象 |

## 部署

推送到任意分支会触发 CI 构建；推送到 `main` 自动构建并部署到 GitHub Pages（自定义域名 huangsitao.fun）。
