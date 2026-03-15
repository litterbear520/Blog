# CLAUDE.md

Guidance for Claude Code when working in this repository.

## 项目概述

基于 **Docusaurus 3** 构建的个人技术博客，部署在 GitHub Pages。

- **技术栈**: Docusaurus 3, React 19, Node.js 18+
- **部署地址**: https://litterbear520.github.io/Blog/
- **语言**: 中文

## 常用命令

```bash
npm start        # 启动开发服务器（端口 3000）
npm run build    # 构建静态网站
npm run serve    # 本地预览构建结果
npm run deploy   # 部署到 GitHub Pages
npm run clear    # 清理缓存
```

## 项目结构

```
├── blog/                        # 博客文章
├── docs/                        # 文档/笔记
│   ├── Agent/                   # 智能体
│   ├── Docker/                  # Docker 容器化
│   ├── AIGC/                    # AI 生成内容
│   ├── AI编程/                  # AI 辅助编程
│   ├── LangChain/               # LangChain 笔记
│   ├── Prompt/                  # 提示词工程
│   ├── python/                  # Python 笔记
│   ├── 云开发/                  # 云开发相关
│   ├── 大模型应用/              # 大模型应用开发
│   ├── 常用命令/                # 常用命令速查
│   ├── 深度学习/                # 深度学习笔记
│   └── 项目/                    # 项目记录
├── src/
│   ├── components/
│   │   ├── CopyMarkdownButton/  # Markdown 复制按钮
│   │   ├── CsvTable.jsx         # CSV 表格组件
│   │   ├── HomepageFeatures/    # 首页特性展示
│   │   └── PasswordProtect.js   # 密码保护组件
│   ├── constants/
│   │   └── passwordConfig.js    # 密码配置
│   ├── css/
│   │   └── custom.css           # 全局自定义样式
│   ├── pages/
│   │   ├── index.js             # 首页（Canvas 雨滴动画）
│   │   └── bloglist.js          # 博客列表页
│   └── theme/
│       ├── Root.js                      # 主题根组件
│       ├── prism-cursor-theme.js        # Cursor 暗色代码主题
│       └── prism-cursor-light-theme.js  # Cursor 亮色代码主题
├── static/img/                  # 静态图片资源
├── docusaurus.config.js         # Docusaurus 主配置
└── sidebars.js                  # 侧边栏配置
```

## 内容编写规范

### 文档格式

- 使用 Markdown / MDX，文件名用英文
- frontmatter 示例：

```yaml
---
sidebar_position: 1
---
# 页面标题
```

### 数学公式（KaTeX）

```markdown
行内: $E = mc^2$

块级:
$$
\sum_{i=1}^{n} x_i = x_1 + x_2 + \cdots + x_n
$$
```

### Markdown 表格

使用最简格式，不对齐竖线（避免 markdownlint MD060 警告）：

```markdown
| 区别 | format | invoke |
| ---- | ---- | ---- |
| 功能 | 纯字符串替换 | Runnable 接口标准方法 |
| 返回值 | 字符串 | PromptValue 类对象 |
```

### 文字高亮

```markdown
<!-- 字体变色 -->
<span style={{color: 'red'}}>文字</span>

<!-- 背景高亮（推荐） -->
<mark style={{backgroundColor: '#ff9900', padding: '0 4px', borderRadius: '3px'}}>文字</mark>

<!-- 原生黄色背景 -->
<mark>文字</mark>

<!-- 块级高亮 -->
:::warning
内容
:::
```

## 部署流程

GitHub Actions 自动部署（配置：`.github/workflows/update.yaml`）：

1. 推送到任意分支触发构建
2. 仅推送到 `main` 分支时部署到 `gh-pages`

---

*© huangsitao 2025*
