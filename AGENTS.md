# AGENTS.md

小熊的博客：Docusaurus 3.10（开启 `future.v4: true`）+ React 19 的中文个人技术博客，域名 huangsitao.fun，GitHub Pages 部署，默认暗色主题。

## 命令

```bash
npm start                    # 开发服务器（端口 3003，热更新，日常写内容用这个）
npm run build                # 构建；prebuild 先跑全部单测，其中 test:code-viewer 会启动 Chromium
npm run serve                # 本地预览构建结果
npm run build && npm run serve  # 构建后预览（模拟生产环境，提交前确认用这个）
npm run clear                # 清理 Docusaurus 缓存
npm run test:<名>            # 单测：code-viewer / focus-range / message-flow / diagrams / quick-check
npm run cover -- <slug> --preview  # 渲染博客封面，用法见 tools/covers/README.md
```

## 部署

`.github/workflows/update.yaml`：任意分支 push → 数据单测 + Chromium 布局测试 → `npm run build --ignore-scripts` → `tools/walkthrough-browser.mjs` 在桌面和手机宽度验证演练页。只有 `main` 会部署到 `gh-pages`，部署后再验证一次线上页面。同一分支的新 push 会取消未完成的旧构建。

## 框架注意事项

- 站点运行在 Docusaurus v4 模式，部分 API 与 v3 不同：涉及框架 API、配置、插件用法时，先用 context7 查 Docusaurus 最新文档，再动手。
- `docusaurus.config.js` 是 ESM（`import/export`）。
- 三个内容插件：docs（`docs/`，`sidebars.js` 按目录自动生成）、roadmap（第二个 docs 实例，id `roadmap`，`/roadmap` 路由，`sidebarsRoadmap.js`）、blog（`blogSidebarCount: 0`，列表页是自定义的 `/bloglist`）。提示块关键字和 `remark-run-output` 在三个插件里各配一遍，改动时三处一起改；KaTeX（`remark-math` + `rehype-katex`）只配在 docs 和 roadmap。
- 新增文档分类：在 `docs/` 下建目录并加 `index.md`。

## 目录

| 路径 | 内容 |
| ---- | ---- |
| `blog/<slug>/index.md(x)` | 一篇文章一个文件夹，正文图片放同目录 |
| `docs/<分类>/` | 笔记；MCP 课程在 `docs/MCP/<课程名>/` |
| `roadmap/前言/` | `index.md` 是 `/roadmap` 首页（`slug: /`），子目录是三篇 Anthropic 文章的中译，原图放同目录 |
| `src/components/` | 组件，见下文“组件” |
| `src/data/` | 组件数据：一个 variant 一个文件，在同目录 `index.js` 登记；另有 `skills.js`（SkillHub）、`swatches.json`（封面底色）、`mcp*Quiz.js`（题库） |
| `src/theme/` | swizzle 覆盖，见下文“主题覆盖” |
| `src/css/custom.css` | 全局样式和主题令牌 |
| `src/pages/` | `index.js` 首页、`bloglist.js` 博客列表（`POSTS`）、`skills.js` SkillHub（`/skills`） |
| `plugins/` | `copy-markdown-source/`（构建时生成清洗后的 `.md`，供“复制 Markdown”按钮用）、`remark-run-output.js` |
| `tools/` | `covers/` 封面流水线；`*.test.mjs` 单测；`walkthrough-browser.mjs` CI 浏览器验证 |
| `.claude/skills/` | `blog-cover`、`lesson`、`note`、`academy-diagram-design`（Academy 课件风配图），用法见各自 `SKILL.md`；跨项目通用的 `/explain` 在全局 `~/.claude/skills/` |

## 样式令牌

组件配色引用 `custom.css` 里的变量，不写死颜色：

- `--th-*`：底色、文字、线条，强调色 `--th-accent`（陶土）及其 `-fill` / `-border` / `-tint`。
- `--th-dg-*`：图表角色色 neutral / process / done / external，加 body、stroke、loop，深浅两套，画图的组件都用它。
- `--th-admonition-*`：提示块配色。

docs / roadmap 正文图片宽度封顶 768px，大图靠放大按钮看原图；博客不受这条限制。

## 组件

`Term`、`QuickCheck`、`ReadMore`、`LessonMeta` 在 `src/theme/MDXComponents/index.js` 全局注册，docs / roadmap / blog 正文直接写，不用 import。

| 组件 | 写法与约定 | 数据 |
| ---- | ---- | ---- |
| `Term` | `<Term tip="解释">LOAD_FAST</Term>`：术语悬停或聚焦时弹出解释 | |
| `QuickCheck` | `<QuickCheck question options />`：课文里当场判对错的单选，每个选项带解释，可改选，不计分 | 校验在 `model.mjs`，带单测 |
| `ReadMore` | `<ReadMore title="...">`：折叠卡，标题写成读者会问的问题 | |
| `LessonMeta` | `<LessonMeta lesson minutes />`：课文标题下的课序和时长，数字由 `/lesson` 的 `lesson_lint.py` 算出并核对 | |
| `AgentLoopViz` | `<AgentLoopViz variant="..." />`：Agent 循环分镜动画，第 0 帧就是结构图。对话内容示意即可，但工具名、字段、`stop_reason` 必须和代码一致 | `src/data/agentRuns/` |
| `CodeWalkthrough` | “一步步改代码”的演练（如 `docs/python/unittest.mdx`）。每一步只写本步改动的文件（`null` 表示删除）、说明和可运行命令；只写 `file` + `lines: [[起, 止]]` 的步骤用来在同一份代码里逐段讲。文章每节写 `<CodeWalkthrough variant="..." step={3} />` 停在对应步骤，只给最后一个实例加 `nav`。终端输出必须是本地实跑录下来的 | `src/data/codeWalkthroughs/` |
| `McpWalkthrough` | `<McpWalkthrough variant="..." />`：分步说明 + 代码查看器 | `src/data/mcpWalkthroughs/`；高亮行号可用 `src/data/focusRange.js` 的语义锚点算 |
| `ProjectCodeViewer` | 上面两种演练共用的代码查看器，唯一实现，新演练别另写一份 | 界面文案在 `src/data/projectViewerUI.js` |
| `Diagram` | `<Diagram variant="..." />`：diagram-design 技能画的 SVG 原样嵌入，另有手写场景图用的 `s-*` 零件。SVG 里只写类名，配色由 `styles.module.css` 映射到令牌 | `src/data/diagrams/`，`index.js` 注释里是类名清单 |
| `MessageFlow` | `<MessageFlow variant="..." upTo={n} />`：消息流（泳道）图，`upTo` 只画前 n 项 | `src/data/messageFlows/`，数据形状写在 `index.js` 文件头；校验在 `model.mjs`，带单测 |
| `McpQuiz` | `<McpQuiz questions={...} />`：单选测验，题目带 `explain` 时交卷后逐题显示解析 | `src/data/mcp*Quiz.js` |
| `CourseHero` | 课程索引页顶部信息卡（在 `McpCourse/`） | |
| `InfoCards` | `CardGrid`（可编号）+ `Card` + `SkillList` + `LinkCallout` | |
| `GitWorkflowViz` | Git 工作流分步演示，在 `docs/Git工作流/index.mdx` 里用 `BrowserOnly` 挂载 | `steps.js` |
| 其他 | `CsvTable`、`SkillCard`（SkillHub）、`HomepageFeatures`、`CopyMarkdownButton`（由 `Root.js` 注入）、`Lightbox`（markdown 图片和 `Diagram` 共用的放大弹层） | |

## 主题覆盖

- `MDXComponents/`：注册全局组件；`Table/` 给 markdown 表格套一层 `.md-table` 卡片（组件里手写的 `<table>` 不经过这层）；`Img/` 给 markdown 图片加放大按钮。样式在 `custom.css`「表格」一节。
- `Admonition/`：补中文默认标签；`Types.js` 注册自定义的 `important` 类型（关键字在三个内容插件的 `admonitions.keywords`）。样式照 GitHub alerts 的图标和配色，但不画左侧竖线，改用 8px 圆角卡片，靠淡底和淡边区分类型。
- `CodeBlock/`：代码块的 ▷ 运行按钮和预录输出面板，配合 `plugins/remark-run-output.js`。
- `DocCard/Heading/Icon/` 覆盖成空组件，去掉卡片标题前的 emoji；`Icon/` 把深浅切换图标换成 Lucide 线条版；`prism-cursor-theme.js` / `prism-cursor-light-theme.js` 是深浅两套代码主题；`prism-include-languages.js` + `prism-grammar-tweaks.js` 加载语言并细化切分。

## 内容编写规范

### 文档

```yaml
---
sidebar_position: 1
---
# 页面标题
```

### 博客

一篇文章一个文件夹 `blog/<slug>/index.md`，正文图片放同一文件夹，用 `![](./xxx.png)` 相对引用；URL 由 frontmatter 的 `slug` 决定。同时在 `src/pages/bloglist.js` 的 `POSTS` 数组里登记：

```javascript
{ title, date: 'YYYY-MM-DD', slug, category: '教程'|'AI'|'比赛', swatch, cover }
```

卡片只显示日期、标题、分类，没有一句话介绍。`swatch` 是卡片纯色底（名称见 `src/data/swatches.json`），`cover` 是透明 SVG 封面，整图居中不裁切。

**列表封面**统一用 `tools/covers/` 流水线生成（剪纸 + 毛笔线的透明 SVG），全站风格才统一：不手绘，不用 AI 生成图片，不从外部找图。新文章用 `/blog-cover <slug>`，手动流程见 `tools/covers/README.md`。

**文章头图**（正文开头的大图）可以用编辑排版风或用户提供的图，放在 `static/img/blog/`，正文首行用 `![alt](/img/blog/xxx)` 引入。

### 课程

- 一个主题写成一门课用 `/lesson`：课程索引页（`CourseHero` + 学习目标 + `DocCardList`）→ 课文（一课一个概念，课内一道快速检查）和单独成页的演练 → 整门课最后一篇概念评估（`McpQuiz` + `explain` 解析），每课不单独出题。结构图用 diagram-design 技能画，消息往返用 `MessageFlow`。
- MCP 课程：`docs/MCP/<课程名>/index.mdx` 是课程索引页，课文按官方分组放子目录，文件名用 `01-xxx.md` 数字前缀排序；演练页只放 `<McpWalkthrough>`，测验页只放 `<McpQuiz>`。原站的 `CodeCommand` 写成 bash 代码块，`GenericPrompt`（用户提示卡）写成 `:::info[用户提示]`。

### 路线页面

docs 形态（非 blog），目录布局和文风都照 `docs/MCP` 课程章节。每个项目在 `roadmap/<项目>/` 下：`index.mdx` 是课程索引页（`CourseHero` + 学习目标 + 六条规则表 + 前提条件 + `DocCardList`），一个 Stage 一个中文目录（不带编号，`index.md` 写 `sidebar_position`、`description`、H1、一句话、`DocCardList`），一课一页 `NN-english-slug.mdx`（frontmatter 只写 `description`，H1 是中文课名不带编号）。文风：课程讲解口吻，用“我们”“您”，句子完整不省主语，每段先给结论再举具体例子，段落之间有过渡句；动画每帧的说明、演练每步的说明同样口吻。内容取舍上仍是自己的学习线：没有 `run` 输出面板、没有“试一下”、没有对照源码，`BUILD_ROADMAP.md` 里的 checklist 和当时给自己看的话不搬，几个路线 Step 可以合成一课。博客单独看就要能懂：正文、演练说明、总览图、规则表里都**不提** `BUILD_ROADMAP.md` 的 Step 编号、dev 仓库的文件路径，引用位置一律用课名或 Stage 名。**不需要**封面、bloglist.js 元数据和 truncate 分隔符。

小标题照 MCP 课文写成这一课内容的短语（“只会聊天还不够”“一次搜索怎样完成”“逐步查看代码”），不用“起点 / 方案”这类通用标签。一课依次讲：上一课留下的问题 → 这一课的机制（编号步骤或信号/动作表；需要动画时才用 `<AgentLoopViz variant="..." />`）→ 演练（`<McpWalkthrough variant="..." />`，代码从源仓库原样复制成快照，步骤说明写在 `src/data/` 的课文数据里）→ 设计取舍（引用六条规则的编号）→ 在本地运行（可选）。结尾不加收尾标题，直接一段话带到下一课。

### 代码运行输出

代码围栏加 `run`，紧接一个 `output` 围栏（两段之间空一行），构建时由 `plugins/remark-run-output.js` 合并成带 ▷ 按钮的代码块。`output` 的 meta 写进程状态：`exit=0`（默认）、`exit=1`、`hang`（不退出，需 Ctrl+C）、`empty`（无输出）；再加 `{3,7-9}` 可高亮输出里的第 3、7、8、9 行（1 起数），标出读者该看的位置。输出要先在本地实跑一遍再如实录入。只给完整、能独立运行的示例加 `run`；示意片段（如单独一段 `while` 循环、故意写错的反例）不加。围栏 meta 还可以写 `id=xxx` 给代码块加锚点，正文用 `[文字](#xxx)` 跳转；`run`、`id=`、高亮范围 `{1-3}` 可以同时写。docs / roadmap / blog 通用。

````markdown
```python run
print('hi')
```

```output exit=0
hi
```
````

### 其他写法

- **提示块**：`:::note / info / tip / important / warning / danger`，标题写成 `:::warning[标题]`（v4 语法，必须用 `[]`）；不写标题时显示中文默认标签。标题写“提示”就用 `:::tip`，写“注意”就用 `:::warning`，别用 `:::info[提示]`。
- **表格**：竖线不对齐（避免 markdownlint MD060），分隔行写 `| ---- | ---- |`。
- **数学公式**：KaTeX，行内 `$E = mc^2$`，块级 `$$ ... $$`；只在 docs / roadmap 生效，博客没配。
- **文字高亮**：MDX 写法，`<span style={{color: 'red'}}>红色文字</span>`、`<mark>默认黄色高亮</mark>`。
- **图片**：正常写 `![]()`，原图比显示尺寸大时自动出现放大按钮。
- **代码高亮语言**：bash, json, python, java, typescript, rust, go, cpp, c, diff；其他语言没有高亮。
- **SkillHub**：数据在 `src/data/skills.js`，描述保持工具中立，取材自技能仓库的 README。
