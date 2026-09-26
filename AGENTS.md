# AGENTS.md

## 项目概述

基于 **Docusaurus 3（已开启 `future.v4` 模式）** 构建的个人技术博客（小熊的博客），部署在 GitHub Pages。

| 项 | 值 |
| ---- | ---- |
| 框架 | Docusaurus 3.10.1（future.v4 模式）+ React 19 |
| Node | >= 18 |
| 自定义域名 | huangsitao.fun |
| 部署 | GitHub Actions → `gh-pages` 分支 |
| 默认主题 | 暗色模式 |
| 语言 | 中文 |

## 常用命令

```bash
npm start                    # 开发服务器（端口 3003，热更新，日常写内容用这个）
npm run build                # 构建静态网站
npm run serve                # 本地预览构建结果
npm run build && npm run serve  # 构建后预览（模拟生产环境，提交前确认用这个）
npm run clear                # 清理 Docusaurus 缓存
npm run roadmap-sync         # 从同级 ../commerce-agents-dev 抽代码快照，生成 src/data/codeWalkthroughs/commerce.files.js
```

## 项目结构

```
├── blog/                          # 博客文章（7 篇，一篇一个文件夹 <slug>/index.md，图片同目录）
├── roadmap/                       # 路线：一个开源项目一条学习线，按步不按天（第二个 docs 实例，/roadmap 路由）
│   ├── 前言/                      # index.md 是 /roadmap 首页（slug: /），三篇前置阅读放在这个目录下
│   │   ├── 高效商务Agent架构指南/ # Anthropic 商务 Agent 架构指南中译（index.mdx + 原文配图同目录）
│   │   ├── 构建高效的智能体/      # Anthropic《Building Effective Agents》中译（index.md + 8 张原图同目录），商务指南里的“标准 Agent 循环”链到这里
│   │   └── 为Agent编写高效工具/  # Anthropic《Writing effective tools for agents》中译（index.md + 8 张原图同目录），商务指南“工程化 Agent 工具”一节链到这里
│   └── commerce-agents/           # anthropics/commerce-agents 学习线，目录布局照 docs/MCP 课程：index.mdx（CourseHero + 总览图 + 学习目标 + 六条规则 + 前提条件 + DocCardList），一个 Stage 一个中文目录（index.md 分组页），一课一页 NN-english-slug.mdx
├── docs/                          # 笔记文档（15 个分类目录）
│   ├── Agent/                     # 智能体
│   ├── AIGC/                      # AI 生成内容
│   ├── AI编程/                    # AI 辅助编程
│   ├── Claude Code/               # Claude Code 笔记
│   ├── Docker/                    # Docker
│   ├── Git工作流/                 # Git 功能分支工作流（index.mdx 内嵌 GitWorkflowViz 分步演示）
│   ├── LangChain/                 # LangChain
│   ├── MCP/                       # MCP 课程笔记：两门课各一个子目录（简介 / 高级主题：课程索引页 + 分组 + 课文）
│   ├── Prompt/                    # 提示词工程
│   ├── python/                    # Python（基础 / FastAPI）
│   ├── 大模型应用/                # 大模型应用开发
│   ├── 常用命令/                  # 常用命令速查
│   ├── 深度学习/                  # 深度学习（PyTorch / Transformer）
│   ├── 网络与服务器/              # 代理节点 / 服务器部署
│   └── 项目/                      # 项目记录
├── src/
│   ├── components/
│   │   ├── AgentLoopViz/          # Agent 循环分镜动画（数据驱动）：左流程图 + 右 messages[] + 本帧说明，<AgentLoopViz variant="..." />，分镜数据在 src/data/agentRuns/，配色走 --th-* 令牌
│   │   ├── CodeWalkthrough/       # 代码演进演练：示例项目按步骤快照演进，文件树 / 标签 / 代码区按行标出相对上一步的增删（diff.js 行级 LCS），下方终端点击逐行打印预录输出
│   │   ├── CopyMarkdownButton/    # 文档页"复制 Markdown"按钮
│   │   ├── CsvTable.jsx           # CSV 表格渲染组件
│   │   ├── GitWorkflowViz/        # Git 工作流分步演示：Remote / Local / Disk 三区域，逐步高亮变化的提交与传输箭头，步骤数据在 steps.js
│   │   ├── HomepageFeatures/      # 首页特性卡片
│   │   ├── InfoCards/             # 文章内横排信息卡：CardGrid（可编号 01/02/03）+ Card（title/sub/tone）+ SkillList（中文名 + 英文 id 对照的技能清单）+ LinkCallout（带按钮链接的提示框）
│   │   ├── McpCourse/             # 课程索引页顶部信息卡（CourseHero：难度/课数、来源链接）
│   │   ├── McpQuiz/               # 单选测验（一次一题、选项每次随机打乱，最后提交，显示是否通过与得分条）
│   │   ├── McpWalkthrough/        # 代码演练：分步说明 + 迷你代码查看器（文件树/标签/按步高亮定位）
│   │   ├── ProjectCodeViewer/     # 共用项目代码查看器（文件树 / 标签 / 代码区 / diff / 聚焦行 / 复制）的唯一实现，McpWalkthrough 和 CodeWalkthrough 都用它，新课程别另写一份；界面文案在 src/data/projectViewerUI.js
│   │   ├── RoadmapOverview/       # commerce-agents 路线总览：八个 Stage 两行排的 SVG，当前 Stage 用强调色，STAGES / CURRENT 直接改
│   │   ├── SkillCard/             # SkillHub 技能卡片（展开显示安装命令）
│   │   └── Term/                  # 术语悬停解释：虚线下划线，悬停 / 聚焦弹出 tip
│   ├── css/
│   │   └── custom.css             # 全局样式：主题令牌 --th-*（底色 / 文字 / 强调色 --th-accent（陶土）、-fill、-border、-tint，组件配色应引用这些变量）、字体、代码块装饰
│   ├── data/
│   │   ├── agentRuns/             # AgentLoopViz 分镜：index.js 注册表；claudeCode.js 是《The Agent Loop》笔记的默认分镜，commerceLoop.js 目前没有页面引用
│   │   ├── codeWalkthroughs/      # CodeWalkthrough 数据：index.js 注册表 + UI 文案，unittest.js 是 unittest 笔记的 10 步快照与实录输出；commerce.js 是路线的步骤文案，commerce.files.js 是 roadmap-sync 生成的代码快照（不要手改）
│   │   ├── mcpAdvancedQuiz.js     # MCP 高级主题测验题（含答案下标）
│   │   ├── mcpIntroQuiz.js        # MCP 简介课最终评估题（含答案下标）
│   │   ├── mcpWalkthroughs/       # McpWalkthrough 注册表：MCP 三个演练（sampling / notifications / roots）+ 路线第 01 课 commerceAgentLoop（数据在 ../commerceAgentLoopLesson.js，读 commerce.files.js 快照）
│   │   └── skills.js              # SkillHub 技能数据（SKILLS 数组）
│   ├── pages/
│   │   ├── index.js               # 首页（Canvas 雨滴动画）
│   │   ├── bloglist.js            # 自定义博客列表页（分类筛选 + 卡片布局）
│   │   └── skills.js              # SkillHub 页面（/skills 路由）
│   └── theme/
│       ├── Root.js                # 主题根组件（注入 CopyMarkdown 按钮）
│       ├── MDXComponents/index.js # 注册全局 MDX 组件（Term 术语悬停解释，正文直接用无需 import）
│       ├── MDXComponents/Img/     # 包装 markdown 图片：右上角放大按钮 + dialog 弹层看原图
│       ├── DocCard/Heading/Icon/  # 覆盖为空组件：去掉 DocCardList 卡片标题前的 🗃️/📄️ emoji
│       ├── Admonition/            # 提示块：index.js 包装层补中文默认标签；Icon/ 是 GitHub alerts 同款 Octicons；Types.js 注册自定义的 important 类型；配色与卡片样式在 custom.css「提示块」一节
│       ├── Icon/LightMode|DarkMode|SystemColorMode/  # 深浅切换按钮图标换成 Lucide 线条版（sun / moon / monitor），与导航栏 GitHub 图标同规格
│       ├── CodeBlock/             # 代码块「运行」按钮 + 预录输出面板：Buttons/RunButton、Layout（挂面板）、Content/String（读 data-output）、RunOutput/（context + Panel 逐行打印）
│       ├── prism-cursor-theme.js  # Cursor 暗色代码高亮主题
│       └── prism-cursor-light-theme.js
├── plugins/
│   ├── copy-markdown-source/      # 构建时生成清洗后的 .md 文件供复制
│   └── remark-run-output.js       # remark 插件：把 ```lang run 与紧随的 ```output 围栏合并成带预录输出的代码块
├── plans/ + specs/                # 功能规划与设计文档（SkillHub 等）
├── tools/
│   ├── covers/                    # 博客封面生成：配方 → 涂鸦 SVG（Node 渲染，无需浏览器），详见其 README
│   └── roadmap-sync/              # 路线代码同步：sync.mjs + <配方>.config.mjs（dev 仓库里每步的文件 → 演练里展示的路径），生成物提交进仓库
├── .claude/skills/
│   ├── blog-cover/                # /blog-cover <slug>：读文章 → 视觉隐喻 → 配方 → 渲染 → 登记
│   └── note/                      # /note <位置/标题> + 文稿 + 代码：视频讲稿 → 最小替换转写 → 小标题 → 自然的站内外链接 → 推 main 看 CI
├── static/
│   ├── CNAME                      # 自定义域名 huangsitao.fun
│   └── img/                       # 图片资源
├── docusaurus.config.js           # 主配置（ESM）
├── sidebars.js                    # 侧边栏（autogenerated）
└── .github/workflows/update.yaml  # CI：push → build，main 分支 → deploy
```

## 关键特性

- **KaTeX 数学公式**：通过 `remark-math` + `rehype-katex` 支持
- **Cursor 代码主题**：自定义 Prism 主题，深浅两套
- **复制 Markdown 源码**：自定义插件 `copy-markdown-source` 构建时生成清洗后 `.md`，按钮由 `Root.js` 注入
- **自定义博客列表**：`/bloglist` 路由，支持分类筛选，不使用 Docusaurus 默认博客列表
- **SkillHub**：`/skills` 路由，技能卡片墙；数据在 `src/data/skills.js`，描述须工具中立、取材自技能仓库 README
- **路线**：`/roadmap` 路由，第二个 `plugin-content-docs` 实例（id: `roadmap`，侧边栏 `sidebarsRoadmap.js` 自动生成）。一个开源项目一个文件夹，按步不按天，一步一页；`前言/` 放前言和前置阅读。代码不手抄，从同级 dev 仓库用 `npm run roadmap-sync` 抽成快照，演练里相邻步骤按行 diff
- **交互式可视化**：`AgentLoopViz` 组件（Agent 循环分镜动画，数据驱动：节点图、连线、逐帧高亮与消息都在 `src/data/agentRuns/<variant>.js`，静止在第 0 帧就是结构图，播放就是一次运行示例；对话内容示意即可，但工具名、字段、stop_reason 必须和代码一致）、`GitWorkflowViz` 组件（Git 工作流 15 步状态演示，在 `docs/Git工作流/index.mdx` 里通过 `BrowserOnly` 挂载）
- **代码演进演练**：`CodeWalkthrough` 组件，用于“一步步改代码”的笔记（如 `docs/python/unittest.mdx`）。数据在 `src/data/codeWalkthroughs/<variant>.js`，每一步只写本步改动的文件（`null` 表示删除）、说明段落和可运行命令；不改文件、只写 `file` + `lines: [[起, 止]]` 的步骤会把这些行标成聚焦行（强调色淡底）并滚过去，用来在同一份代码里逐段讲；组件切到某步时自动打开改动的文件，相对上一步新增行绿底、删除行红底幽灵行，右上角可切「只看当前」；整个演练只有一个文件时不显示文件树和标签栏，只留一条文件名顶栏，代码卡片按行数撑开（照普通代码块），这一步只有一条命令时运行按钮放在代码右上角、输出在代码下方展开（和 `run` 代码块同一个面板），不显示终端栏；终端里的输出必须是本地实跑录下来的。文章里每一节写 `<CodeWalkthrough variant="unittest" step={3} />` 让演练停在对应步骤；上一步/下一步默认不显示，只给最后一个实例加 `nav` 让读者回翻。终端面板不写字，终端图标排在输出第一行的行首、文字紧随其后（照 Claude Cookbook 输出块的布局）
- **MCP 课程笔记**：`docs/MCP/<课程名>/` 一门课一个目录（目前有《Model Context Protocol 简介》和《高级主题》），`index.mdx` 是课程索引页（`CourseHero` + 学习目标 + `DocCardList`），课文按官方分组放子目录，文件名用 `01-xxx.md` 数字前缀排序；演练页只需 `<McpWalkthrough variant="..." />`，数据在 `src/data/mcpWalkthroughs/`；测验页用 `<McpQuiz questions={...} />`，题目数据在 `src/data/mcp*Quiz.js`；原站的 `CodeCommand` 组件对应 bash 代码块，`GenericPrompt`（用户提示卡）对应 `:::info[用户提示]`
- **文档图片宽度**：`custom.css` 把 docs / roadmap 正文图片宽度封顶 768px（与课程原站列宽一致），大图靠放大按钮看原图；博客不受影响
- **代码块预录输出**：代码围栏加 `run`，紧接一个 `output` 围栏写运行结果，构建时由 `plugins/remark-run-output.js` 合并；页面上代码块右上角出现 ▷ 按钮，点击后底部展开输出面板逐行打印，终端图标排在输出第一行的行首、文字紧随其后（悬停图标提示为预录），不单独占一行，再点收起。不是真跑代码，输出要先在本地跑一遍如实录入
- **术语悬停解释**：正文里写 `<Term tip="解释">LOAD_FAST</Term>`，词下有虚线，鼠标悬停或 Tab 聚焦弹出解释；已注册进 MDX 全局，docs / roadmap / blog 通用，无需 import
- **提示块样式**：`:::note / info / tip / important / warning / danger` 照 GitHub alerts 的图标（Octicons）和配色（note/info 蓝、tip 绿、important 紫、warning 黄、danger 红，令牌 `--th-admonition-*`），但不画左侧竖线，改成 8px 圆角卡片，靠类型色调淡的框底和框边区分；标题与图标同色、不大写、不缩小，中文长句标题可换行，图标直接放在框底上不另垫底；没写 `[标题]` 时显示中文默认标签（备注 / 信息 / 提示 / 重要 / 注意 / 危险）。`important` 是自定义类型：关键字在 `docusaurus.config.js` 三个内容插件的 `admonitions.keywords` 注册，组件在 `src/theme/Admonition/Types.js`。标题写“提示”就用 `:::tip`、写“注意”就用 `:::warning`，别用 `:::info[提示]`
- **图片放大**：`src/theme/MDXComponents/Img` 包装了所有 markdown 图片（docs / roadmap / blog 通用），原图比显示尺寸大时右上角出现放大按钮，点击用原生 dialog 弹层显示原图，长图可滚动，Esc / 点空白关闭；正文里正常写 `![]()` 即可，无需额外语法

## 内容编写规范

### 文档 frontmatter

```yaml
---
sidebar_position: 1
---
# 页面标题
```

### 博客 frontmatter

一篇文章一个文件夹：`blog/<slug>/index.md`，正文图片放在同一文件夹里用 `![](./xxx.png)` 相对引用；URL 由 frontmatter 的 `slug` 决定。同时需要在 `src/pages/bloglist.js` 的 `POSTS` 数组中添加元数据：

```javascript
{ title, date: 'YYYY-MM-DD', slug, category: '教程'|'AI'|'比赛', swatch, cover }
```

卡片只显示日期、标题、分类，没有一句话介绍。`swatch`（底色名，见 `src/data/swatches.json`）是卡片纯色底，`cover` 是透明 SVG 封面，整图居中不裁切。

### 路线页面

docs 形态（非 blog），目录布局和文风都照 `docs/MCP` 课程章节。每个项目在 `roadmap/<项目>/` 下：`index.mdx` 是课程索引页（`CourseHero` + `RoadmapOverview` 总览图 + 学习目标 + 六条规则表 + 前提条件 + `DocCardList`），一个 Stage 一个中文目录（不带编号，`index.md` 写 `sidebar_position`、`description`、H1、一句话、`DocCardList`），一课一页 `NN-english-slug.mdx`（frontmatter 只写 `description`，H1 是中文课名不带编号）。文风：课程讲解口吻，用“我们”“您”，句子完整不省主语，每段先给结论再举具体例子，段落之间有过渡句；动画每帧的说明、演练每步的说明同样口吻。内容取舍上仍是自己的学习线：没有 `run` 输出面板、没有“试一下”、没有对照源码，`BUILD_ROADMAP.md` 里的 checklist 和当时给自己看的话不搬，几个路线 Step 可以合成一课。博客单独看就要能懂：正文、演练说明、总览图、规则表里都**不提** `BUILD_ROADMAP.md` 的 Step 编号、dev 仓库的文件路径，引用位置一律用课名或 Stage 名。**不需要**封面、bloglist.js 元数据和 truncate 分隔符。

小标题照 MCP 课文写成这一课内容的短语（“只会聊天还不够”“一次搜索怎样完成”“逐步查看代码”），不用“起点 / 方案”这类通用标签。一课依次讲：上一课留下的问题 → 这一课的机制（编号步骤或信号/动作表；需要动画时才用 `<AgentLoopViz variant="..." />`）→ 演练（`<McpWalkthrough variant="..." />`，代码取自 roadmap-sync 快照，步骤说明写在 `src/data/` 的课文数据里，参照 `commerceAgentLoopLesson.js`）→ 设计取舍（引用六条规则的编号）→ 在本地运行（可选）。结尾不加收尾标题，直接一段话带到下一课。

代码从同级 `../commerce-agents-dev` 抽：在 `tools/roadmap-sync/commerce.config.mjs` 里登记每步的文件与展示路径，跑 `npm run roadmap-sync`，生成的 `commerce.files.js` 一起提交。Stage A 每步在 dev 里是独立文件，演练里统一显示成 `agent.py`，相邻步骤才能按行 diff。

### 博客封面与头图

**列表封面**（`cover` 字段，显示在 `/bloglist` 卡片顶部）统一用 `tools/covers/` 的涂鸦流水线生成，**不要手绘、不要用 AI 生成图片、不要外部找图**。新文章用 `/blog-cover <slug>` skill，或手动：

1. 复制 `tools/covers/recipes/example.js` 为 `recipes/<slug>.js`，写 `swatch`（底色名）、`seed`、`draw(d, m)`（`lib/doodle.js` 原语 + `lib/motifs.js` 母题）
2. `npm run cover -- <slug> --preview`，看 `tools/covers/.preview/<slug>.png`，不满意改配方重渲
3. 产出 `static/img/blog/cover-<slug>.svg`（透明，1000×1000）；bloglist.js 加 `swatch` + `cover`
4. 更新 `tools/covers/README.md` 封面清单
5. 风格规则、原语与母题说明见 `tools/covers/README.md`

**文章头图**（正文开头大图）可用编辑排版风或用户提供的图，直接放 `static/img/blog/`，正文首行用 `![alt](/img/blog/xxx)` 引入。

### 代码运行输出

代码围栏加 `run`，紧接一个 `output` 围栏（两段之间空一行），`output` 的 meta 写进程状态：`exit=0`（默认）、`exit=1`、`hang`（不退出，需 Ctrl+C）、`empty`（无输出）；再加 `{3,7-9}` 可高亮输出里的第 3、7、8、9 行（1 起数），标出读者该看的位置。docs / roadmap / blog 通用。只给完整、能独立运行的示例加 `run`；用来示意的片段（如单独一段 `while` 循环、故意写错的反例）不加。围栏 meta 还可以写 `id=xxx` 给代码块加锚点，正文用 `[文字](#xxx)` 跳转，跳到后边框会用强调色闪一下；`run`、`id=`、高亮范围 `{1-3}` 可同时写。

````markdown
```python run
print('hi')
```

```output exit=0
hi
```
````

### 数学公式

```markdown
行内: $E = mc^2$
块级:
$$
\sum_{i=1}^{n} x_i
$$
```

### 表格格式

不对齐竖线（避免 markdownlint MD060）：

```markdown
| 列A | 列B |
| ---- | ---- |
| 值1 | 值2 |
```

### 文字高亮

```markdown
<span style={{color: 'red'}}>红色文字</span>
<mark style={{backgroundColor: '#ff9900', padding: '0 4px', borderRadius: '3px'}}>橙色高亮</mark>
<mark>默认黄色高亮</mark>
:::warning[标题]
块级警告（v4 语法，标题必须用 [] 包裹）
:::
```

### 支持的代码语言

bash, json, python, java, typescript, rust, go, cpp, c

## 部署流程

GitHub Actions（`.github/workflows/update.yaml`）：

1. 任意分支 push → `npm ci`（setup-node 缓存 npm）+ `npm run build`；同一分支新 push 会取消未完成的旧构建
2. 仅 `main` 分支 → 部署到 `gh-pages`（peaceiris/actions-gh-pages），GitHub 随后自动发布该分支

## 注意事项

- 本项目已启用 `future.v4: true`，运行在 Docusaurus v4 模式，部分 API 与 v3 有差异。涉及框架相关的 API、配置、插件用法时，务必先通过 context7 查阅 Docusaurus 最新文档，避免使用已废弃或变更的 API
- `docusaurus.config.js` 使用 ESM（`import/export`），不是 CommonJS
- 侧边栏为 `autogenerated` 模式，按 `docs/` 目录结构自动生成
- `blogSidebarCount: 0`，博客侧边栏已禁用
- 新增文档分类时只需在 `docs/` 下建目录并添加 `index.md`
