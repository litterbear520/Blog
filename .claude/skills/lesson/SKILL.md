---
name: lesson
description: 把一个主题或一段代码的设计写成博客里的一门课（docs 或 roadmap），读起来像 academy.claude.com 的课文：一课一个概念，按内容从 Academy 各门课的讲法里挑，短段落配大图和课内快速检查，代码演练单独成页，课末概念评估。
argument-hint: "[位置/主题，如 roadmap/<项目>/<专题>]"
disable-model-invocation: true
---

# 课程笔记

把用户的一个想法写成博客里的一门**课**，读起来要像在 academy.claude.com 上课。Academy 各门课的讲法和版面各不相同：MCP 课用两个选项对照，API 课从贯穿项目的缺口推出工具，Claude Code 课先讲骨架再讲部件，AI 能力课先让读者下注，教程页让读者先预测再揭晓。所以每一课都要按内容从 Academy 的整套讲法里挑一种；读感是共同的：每课只讲一个概念，几分钟读完，段落短，图和课内检查把机制摆到眼前，代码放在紧随其后的演练页里，整门课最后一篇概念评估。读者是用户自己。

这套写法只在用户调用 `/lesson` 时使用。目标位置在 AGENTS.md 里的硬约束照守：路线页面不提 Step 编号和 dev 仓库路径、不用 `run` 输出面板、引号用 “”。AGENTS.md「路线页面」另有几条写法规则，在 `/lesson` 里由本技能代替：课文结构（“上一课留下的问题 → 机制 → 演练 → 设计取舍 → 在本地运行”）照 [讲法目录](references/skeletons.md) 选；演练单独成页，不放进课文；设计取舍不引用六条规则的编号；结尾照讲法目录的“收尾”选，不固定写成“一段话带到下一课”。

## 输入

```text
/lesson roadmap/<项目>/<专题>
想法：想讲清什么、为什么想学
代码：<源仓库路径>（讲代码设计时给）
```

- **位置**：`docs/<分类>/…` 或 `roadmap/<项目>/…`，斜杠后面是课程名；推断不出来时停下来问。
- **规模**：三个概念及以上做成课程（索引页 + 概念课 + 演练页 + 概念评估）；一两个概念写成单篇概念课加演练页，不加测验。

## 步骤

1. **同步，校准读感。** `git pull --ff-only`。读 AGENTS.md 里目标位置那一节的硬约束，再读 [读感](references/style.md) 和 [讲法目录](references/skeletons.md)。然后读范文，标杆是 Academy 原文：
   - **按这门课的主题和要用的课型，挑两三篇最接近的 Academy 原文。** 抓取稿在 `~/workspace/academy-research/`（仓库外，只在这台机器上）：`api-*.txt` 是《使用 Claude API 构建》工具使用与智能体两章，`mcp-*.txt` 是 MCP 高级主题，`cc-*.txt` 是 Claude Code 101、子代理入门和智能体技能入门，`cap-*.txt` 是 AI 能力与局限，`use-*.txt` 是教程和用例。每行开头是元素类型，`P`、`LI`、`H2` 是正文，`IMG` 是配图；配图原件在 `fig/`、`img/`，页面截图在 `shots/`，都可以直接打开看。
   - **演练页的范文**是 `docs/MCP/Model Context Protocol：高级主题/核心 MCP 功能/02-sampling-walkthrough.mdx` 和步骤数据 `src/data/mcpWalkthroughs/sampling.js`（只看 `steps`）。
   目标目录里已有的课文只用来对齐叫法和具名场景，写法以范文为准。
   完成标准：对读过的每篇范文，能说出它的课型、开头怎么切入、小标题序列、每张图前后各是什么文字、怎么收尾。
2. **读代码，拆概念。** 讲代码设计时读真实代码：入口、核心实现、测试。把要讲的东西拆成**概念**，一个概念就是一课。每个概念写下四样：读者会问的那个问题（一句），一个具体场景（顾客的一句话、一件商品，名字和数字取自代码），工作原理（4–6 步，每步主语完整，不出现代码名），实现在哪（`文件:行号`，留给核对和演练用，不进正文）。
   完成标准：每个概念的四样都齐，而且问题和原理都能用平常话说清；说不清的概念再拆。
3. **出大纲表，等确认。** 一行一页：课名（中文；概念课就用概念名）、课型和照的 Academy 课（见 [讲法目录](references/skeletons.md)）、开头怎么切入、读者的问题、具名场景、小标题序列、每张图画什么（各一句）、课内检查（快速检查的题干）、收尾方式、演练页的步骤标题。同一门课里，各课按内容选不同的课型和收尾，别全用同一个骨架。演练页排在它讲的概念课后面；相邻两课读的是同一组代码时，共用一页演练。发给用户，确认后再往下写。
   完成标准：用户确认了大纲表，提出的改动都已改进表里。
4. **做代码快照。** 演练里的代码不手抄：把要展示的文件从源仓库原样复制进 `src/data/codeWalkthroughs/<名字>.files.js`（`export default { 展示路径: 文件内容 }`，文件头注释写明来源仓库和提交），用脚本生成、别手改，一起提交，因为 CI 里没有源仓库。
5. **写概念课和配图。** 照大纲表写，读感照 [读感](references/style.md)：先合上代码，按第 2 步写下的平常话把课写完；再逐句对照代码核对事实，错了就改那句话，核对的过程不写进正文。图照 [出图规范](references/diagrams.md)，组件（快速检查、阅读更多等）照 [组件怎么选](references/components.md)，文件结构照 [课程结构](references/course.md)。
   画完的图用 `scripts/preview_diagrams.py <variant> ... --shot` 渲染出来看一眼。
   标题下的课序和时长由 lint 算：写完先跑 `python3 .claude/skills/lesson/scripts/lesson_lint.py --fix <课文>`，它把 `<LessonMeta>` 写到 H1 下一行（已有就更新数字），篇幅改了再跑一次。
   完成标准：`python3 .claude/skills/lesson/scripts/lesson_lint.py <课文>` 没有 FAIL；每个 WARN 要么改掉，要么能说出保留的理由。
6. **写演练页。** 页面照 [讲法目录](references/skeletons.md) 的“演练页”，步骤数据照 [组件怎么选](references/components.md) 的 `McpWalkthrough` 一行：每步一两句话，只框住这一步讲的那几行。
   完成标准：对演练页跑同一个 lint 没有 FAIL。
7. **补测试。** 新演练照 `tools/agent-tool-lessons.test.mjs` 的 `LESSONS` 登记：演练页路径 `walkthrough`、它讲的概念课 `pages[]`（每页列出嵌的图和消息流）、快照文件和每一步的语义锚点（`[文件, 起始锚点, 结束锚点]`，用了 `{ after }` 的步骤把它写成第 4 项），并加进 `tools/walkthrough-browser.mjs` 的 `lessons`；新 variant 加进 `src/components/ProjectCodeViewer/actions.test.mjs` 的 `supported` 白名单；新图由 `npm run test:diagrams` 校验，新消息流图由 `npm run test:message-flow` 校验。本机内存跑不动构建和浏览器测试，只跑这几个纯 Node 的测试：`npm run test:diagrams && npm run test:message-flow && npm run test:agent-tools && npm run test:quick-check && node --test src/components/ProjectCodeViewer/actions.test.mjs`；其余交给 CI。
8. **通读对照。** 先跑 `python3 .claude/skills/lesson/scripts/lesson_lint.py --stats <自己的课> <第 1 步挑的 Academy 抓取稿 .txt>`，把字数、段落、图和密度并排看；再重读那几篇原文，从头读自己的课：段落的长短、图和检查出现的频率、读到哪里需要停下来查别处，都和原文比一比。哪一段读着比原文吃力，就把那段拆短，或者把细节挪进演练、收进“阅读更多”。
9. **提交、看 CI、截图对照。** 提交信息用中文，按 `feat:` / `docs:` 前缀写改了什么，只描述改动本身；直接推 `main`，`gh run watch <id> --exit-status` 等 CI。CI 通过后用 `python3 .claude/skills/lesson/scripts/page_shots.py <线上链接> ...` 截线上页面（浅色；内存够时加 `--theme dark` 再截一遍），和 `~/workspace/academy-research/shots/` 里同课型的 Academy 截图（同样 1280 宽；这一型没有整页截图时，版面用最接近的整页截图对照，图用 `fig/`、`img/` 里的原图对照）并排看：图有没有被裁、图里的字是不是太小、段落和图的节奏、标题下的标签、快速检查和演练能不能用。哪里不如原文，改了再推，再截。
   完成标准：截图里每一页都说得出和对应 Academy 截图的差别，剩下的差别都是有意的（比如深色模式、可放大的图）。
10. **给链接。** 把线上链接交给用户，并附上每课照的 Academy 原文链接（`https://academy.claude.com/zh-CN/courses/<课程>/<课>`，抓取稿第一行就是），方便用户对照着读。截图只给自己核对用，不交给用户。

## 报告

- 改了哪些文件，新登记了哪些数据和测试；
- 每课的课型和照的 Academy 课，每页 lint 的结果（字数和保留的 WARN）；
- 和大纲表不一样的地方，以及原因；
- CI 结果、线上链接和对应的 Academy 原文链接。
