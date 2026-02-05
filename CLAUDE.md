# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

这是一个基于 **Docusaurus 3** 构建的个人技术博客（小熊的博客），部署在 GitHub Pages。

- **技术栈**: Docusaurus 3, React 19, Node.js 18+
- **部署地址**: https://litterbear520.github.io/Blog/
- **语言**: 中文

## 常用命令

```bash
# 启动开发服务器 (默认端口 3000)
npm start

# 构建静态网站
npm run build

# 本地预览构建结果
npm run serve

# 部署到 GitHub Pages
npm run deploy

# 清理缓存
npm run clear
```

## 项目结构

```
├── blog/                  # 博客文章
├── docs/                  # 文档/笔记（主要分类）
│   ├── Agent/            # 智能体相关
│   ├── AIGC/             # AI 生成内容
│   ├── Prompt/           # 提示词工程
│   ├── Python/           # Python 笔记
│   └── ...
├── src/
│   ├── components/       # React 组件
│   ├── pages/            # 自定义页面
│   │   ├── index.js      # 首页（带雨滴动画）
│   │   └── bloglist.js   # 博客列表页
│   ├── css/              # 自定义样式
│   └── theme/            # 主题配置
│       ├── prism-cursor-theme.js       # Cursor 暗色代码主题
│       └── prism-cursor-light-theme.js # Cursor 亮色代码主题
├── static/img/           # 静态图片资源
├── docusaurus.config.js  # Docusaurus 配置
└── sidebars.js           # 侧边栏配置
```

## 内容编写规范

### 文档格式

- 使用 Markdown + MDX 格式
- 文件命名使用英文，如 `intro.md`, `getting-started.md`
- 在 frontmatter 中设置标题和侧边栏位置：

```yaml
---
sidebar_position: 1
---

# 页面标题
```

### 数学公式支持

项目支持 KaTeX 数学公式：

- 行内公式: `$...$`
- 块级公式: `$$...$$`

```markdown
行内公式: $E = mc^2$

块级公式:
$$
\sum_{i=1}^{n} x_i = x_1 + x_2 + \cdots + x_n
$$
```

### 代码块

使用自定义 Cursor 主题，支持语法高亮的语言：bash, json, python, java, typescript, rust, go, cpp, c

```markdown
```python
def hello():
    print("Hello, World!")
```
```

## 部署流程

项目使用 GitHub Actions 自动部署：

1. 触发条件: 推送到任意分支
2. 构建环境: Ubuntu, Node.js 20
3. 构建步骤:
   - 检出代码
   - 安装依赖 (`npm install`)
   - 构建静态网站 (`npm run build`)
   - 部署到 `gh-pages` 分支（仅当推送到 main 分支时）

工作流配置: `.github/workflows/update.yaml`

## 自定义主题

项目使用自定义 Cursor 风格的代码高亮主题：

- **暗色主题**: `src/theme/prism-cursor-theme.js`
- **亮色主题**: `src/theme/prism-cursor-light-theme.js`

主题在 `docusaurus.config.js` 中配置，并通过 `prism` 配置应用到代码块。

## 首页特效

首页 (`src/pages/index.js`) 实现了 Canvas 雨滴动画效果：

- 动态雨滴粒子系统
- 响应式设计，适配不同屏幕
- 页面不可见时自动暂停以节省资源
- 计时器显示网站运行时间

---

*版权所有 © huangsitao 2025*
