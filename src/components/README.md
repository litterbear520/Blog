# 组件

正文里能用的组件和各自的数据位置。`Term`、`QuickCheck`、`ReadMore`、`LessonMeta`、`VideoFigure` 在 `src/theme/MDXComponents/index.js` 全局注册，docs / roadmap / blog 正文直接写，不用 import。新组件要在这张表登记，并在 `plugins/copy-markdown-source/convert.mjs` 的 `RENDERERS` 里写明怎么转成文字。

| 组件 | 写法与约定 | 数据 |
| ---- | ---- | ---- |
| `Term` | `<Term tip="解释">LOAD_FAST</Term>`：术语悬停或聚焦时弹出解释，弹层 fixed 定位，表格这类滚动容器裁不到 | 坐标计算在 `placement.mjs`，带单测 |
| `QuickCheck` | `<QuickCheck question options />`：课文里当场判对错的单选，每个选项带解释，可改选，不计分 | 校验在 `model.mjs`，带单测 |
| `ReadMore` | `<ReadMore title="...">`：折叠卡，标题写成读者会问的问题；传 `id` 后正文可用 `[文字](#id)` 跳过来并自动展开（视频笔记开头的简介块就是 `id="简介"`） | |
| `LessonMeta` | `<LessonMeta lesson minutes />`：课文标题下的课序和时长，数字由 `/lesson` 的 `lesson_lint.py` 算出并核对 | |
| `VideoFigure` | `<VideoFigure src={clip} poster={clipPoster} fig="A" label="画面描述">图注</VideoFigure>`：正文里的视频一律用它，不手写 `<video>`。原生播放器 + 封面图 + 预留宽高（默认 1920×1080，其他尺寸写 `width` / `height`），封面图和视频索引都是滚到视口附近才加载；文章开头首屏就能看到的视频加 `eager`，封面图直接出；`loop` 是当动图用的无声循环短片，`preload="none"` 给索引很大的长视频；不写图注就只有视频，可放进 `Tabs`。视频和封面图放文章文件夹，在 `.mdx` 里 `import` 进来；视频用 H.264 MP4，索引放文件开头（`-movflags +faststart`） | 加载逻辑在 `lazy.mjs` |
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
| 其他 | `CsvTable`、`SkillCard`（SkillHub）、`HomepageFeatures`、`CopyMarkdownButton`（由 `Root.js` 注入到有 `.md` 的页面标题旁）、`Lightbox`（markdown 图片和 `Diagram` 共用的放大弹层） | |
