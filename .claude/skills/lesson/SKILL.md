---
name: lesson
description: 把一个主题或一段代码的设计写成博客里的一门课（docs 或 roadmap），读起来像 Claude Academy 的课程：一课一个概念、短段落配大图、代码演练单独成页、课末概念评估。
argument-hint: "[位置/主题，如 roadmap/commerce-agents/工程化Agent工具]"
disable-model-invocation: true
---

# 课程笔记

把用户的一个想法写成博客里的一门**课**，读感对标 academy.claude.com，也就是博客里 `docs/MCP` 那两门课的中译：每课只讲一个概念，几分钟读完；段落短，大图把机制画出来；代码放在紧随其后的演练页里，一步一两句；整门课最后一篇概念评估。读者是用户自己，他要的是“像在 Academy 上课”的那种轻松和清楚。

这套写法只在用户调用 `/lesson` 时使用。目标位置在 AGENTS.md 里的硬约束照守：路线页面不提 Step 编号和 dev 仓库路径、不用 `run` 输出面板、引号用 “”。AGENTS.md 对课文结构和结尾过渡另有写法规则（比如路线页面的“一段话带到下一课”），在 `/lesson` 里以本技能为准。

## 输入

```text
/lesson roadmap/commerce-agents/工程化Agent工具
想法：想讲清什么、为什么想学
代码：../commerce-agents-dev（讲代码设计时给）
```

- **位置**：`docs/<分类>/…` 或 `roadmap/<项目>/…`，斜杠后面是课程名；推断不出来时停下来问。
- **规模**：三个概念及以上做成课程（索引页 + 概念课 + 演练页 + 概念评估）；一两个概念写成单篇概念课加演练页，不加测验。

## 步骤

1. **同步，校准读感。** `git pull --ff-only`。读 AGENTS.md 里目标位置那一节的硬约束，再读 [读感](references/style.md)。然后完整读两篇范文：`docs/MCP/Model Context Protocol：高级主题/核心 MCP 功能/01-sampling.md` 和 `05-roots.md`，以及演练页 `02-sampling-walkthrough.mdx` 和它的步骤数据 `src/data/mcpWalkthroughs/sampling.js`（只看 `steps`）。目标目录里已有的课文只用来对齐叫法和具名场景，写法以范文为准。
   完成标准：能说出 Sampling 一课的小标题序列、导语有几句、两张图前后各是什么文字，以及演练一步写几句话。
2. **读代码，拆概念。** 讲代码设计时读真实代码：入口、核心实现、测试。把要讲的东西拆成**概念**，一个概念就是一课。每个概念写下四样：读者会问的那个问题（一句），一个具体场景（顾客的一句话、一件商品，名字和数字取自代码），工作原理（4–6 步，每步主语完整，不出现代码名），实现在哪（`文件:行号`，留给核对和演练用，不进正文）。
   完成标准：每个概念的四样都齐，而且问题和原理都能用平常话说清；说不清的概念再拆。
3. **出大纲表，等确认。** 一行一页：课名（中文；概念课就用概念名）、页型（概念课 / 演练页 / 概念评估，见 [课型骨架](references/skeletons.md)）、读者的问题、具名场景、小标题序列、每张图画什么（各一句）、演练页的步骤标题。演练页排在它讲的概念课后面；相邻两课读的是同一组代码时，共用一页演练。发给用户，确认后再往下写。
   完成标准：用户确认了大纲表，提出的改动都已改进表里。
4. **抽代码快照。** 演练里的代码不手抄：在 `tools/roadmap-sync/<配方>.config.mjs` 登记要展示的文件（没有配方就照 `commerce.config.mjs` 新建一个），跑 `npm run roadmap-sync -- <配方>`，生成的 `*.files.js` 一起提交，因为 CI 里没有源仓库。
5. **写概念课和配图。** 照大纲表和 [课型骨架](references/skeletons.md) 写，读感照 [读感](references/style.md)：先合上代码，按第 2 步写下的平常话把课写完；再逐句对照代码核对事实，错了就改那句话，核对的过程不写进正文。图照 [出图规范](references/diagrams.md)，组件照 [组件怎么选](references/components.md)，文件结构照 [课程结构](references/course.md)。
   完成标准：`python3 .claude/skills/lesson/scripts/lesson_lint.py <课文>` 没有 FAIL；每个 WARN 要么改掉，要么能说出保留的理由。
6. **写演练页。** 页面照 [课型骨架](references/skeletons.md) 的“演练页”，步骤数据照 [组件怎么选](references/components.md) 的 `McpWalkthrough` 一行：每步一两句话，只框住这一步讲的那几行。
   完成标准：对演练页跑同一个 lint 没有 FAIL。
7. **补测试。** 新演练照 `tools/agent-tool-lessons.test.mjs` 写语义锚点测试（课文路径、演练、图都登记进去），并加进 `tools/walkthrough-browser.mjs` 的 `lessons`；新 variant 加进 `src/components/ProjectCodeViewer/actions.test.mjs` 的 `supported` 白名单；新图由 `npm run test:diagrams` 校验，新消息流图由 `npm run test:message-flow` 校验。本机内存跑不动构建和浏览器测试，只跑这几个纯 Node 的测试：`npm run test:diagrams && npm run test:message-flow && npm run test:agent-tools && node --test src/components/ProjectCodeViewer/actions.test.mjs`；其余交给 CI。
8. **通读对照。** 先重读一遍 Sampling，再从头读自己的概念课：段落的长短、图出现的频率、读到哪里需要停下来查别处，都和 Sampling 比一比。哪一段读着比 Sampling 吃力，就把那段拆短，或者把细节挪进演练。
9. **提交、看 CI、给链接。** 提交信息用中文，按 `feat:` / `docs:` 前缀写改了什么，只描述改动本身；直接推 `main`，`gh run watch <id> --exit-status` 等 CI。CI 通过后把线上链接交给用户，由用户自己看页面，不截图。

## 报告

- 改了哪些文件，新登记了哪些数据和测试；
- 每页 lint 的结果（字数和保留的 WARN）；
- 和大纲表不一样的地方，以及原因；
- CI 结果和线上链接。
