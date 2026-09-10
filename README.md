# 小熊的博客

[![Deploy](https://github.com/litterbear520/Blog/actions/workflows/update.yaml/badge.svg)](https://github.com/litterbear520/Blog/actions/workflows/update.yaml)
[![Docusaurus](https://img.shields.io/badge/Docusaurus-3-3ECC5F?logo=docusaurus&logoColor=white)](https://docusaurus.io/)

个人技术笔记与博客，记录 AI 应用开发、Python、工具链和开源项目学习。

**在线访问 → [huangsitao.fun](https://huangsitao.fun)**

| 栏目 | 地址 | 内容 |
| ---- | ---- | ---- |
| 笔记 | [/docs](https://huangsitao.fun/docs/MCP) | 按主题分类的学习笔记：Agent、MCP、LangChain、Python、Docker 等 |
| 博文 | [/bloglist](https://huangsitao.fun/bloglist) | 长文与教程，支持分类筛选 |
| 路线 | [/roadmap](https://huangsitao.fun/roadmap) | 开源项目学习日志，一个项目一条线 |
| Skills | [/skills](https://huangsitao.fun/skills) | 收录的 Claude 技能与安装命令 |

## 本地开发

```bash
npm install
npm start          # http://localhost:3003，热更新
npm run build      # 构建静态站点到 build/
npm run serve      # 本地预览构建结果
```

Node >= 18。

## 项目结构

```
blog/        博文，一篇一个文件夹
docs/        笔记，目录即分类，侧边栏自动生成
roadmap/     学习日志，一个项目一个文件夹
src/         页面、组件、主题覆盖与数据
plugins/     remark / 构建期插件
tools/       博客封面生成流水线
```

## 写点什么

| 内容 | 做法 |
| ---- | ---- |
| 笔记 | 在 `docs/<分类>/` 下新建 `.md` |
| 博文 | 新建 `blog/<slug>/index.md`，并在 `src/pages/bloglist.js` 登记元数据 |
| 学习日志 | 新建 `roadmap/<项目>/YYYY-MM-DD-主题.md` |

代码块可以带「运行」按钮回放预录输出，正文支持 KaTeX 公式、图片放大与术语悬停解释，写法见 [AGENTS.md](./AGENTS.md)。

## 部署

推送到 `main` 后由 GitHub Actions 构建并发布到 GitHub Pages。
