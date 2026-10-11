# 组件怎么选

先写文字，再看哪里确实需要组件。概念课里的组件就是图（见 [出图规范](diagrams.md)）；代码演练只出现在演练页。

| 要表达的 | 组件 | 写法与数据 |
| ---- | ---- | ---- |
| 在真实项目里逐步看代码：这一步看哪几行、为什么 | `McpWalkthrough` | 只放在演练页：`<McpWalkthrough variant="名字" />`。数据文件 `src/data/<课文>Lesson.js`：`{ files, steps: [{ title, file, line, endLine, body: [{ type: 'p', text }] }] }`，`body` 里也可以放 `{ type: 'list', ordered, items }`。`files` 直接用 roadmap-sync 生成的快照，只挑这一页要看的文件，参照 `agentToolBoundaryLesson.js`。**每步一两句话，只框住这一步讲的那几行**（多在 1–15 行，范文 `src/data/mcpWalkthroughs/sampling.js`）：说明写“这几行在做什么、为什么”，代码名挑最要紧的一两个。行号用语义锚点 `focusRange(source, 起始行开头, 结束行开头)` 算（`src/data/focusRange.js`），代码一改就报错；结束锚点前的空行、单独的左括号和装饰器归到下一段。登记到 `src/data/mcpWalkthroughs/index.js`，并把 variant 加进 `src/components/ProjectCodeViewer/actions.test.mjs` 的 `supported` 白名单。 |
| 同一份代码一步步改（看演进和 diff） | `CodeWalkthrough` | 只放在演练页：`<CodeWalkthrough variant="名字" step={n} />`，最后一个实例加 `nav`。数据 `src/data/codeWalkthroughs/<名字>.js`，登记到同目录 `index.js` 和 `actions.test.mjs` 的 `supported` 白名单。 |
| 结构、选项对照、场景、递进图组、代码标注 | `Diagram` | `<Diagram variant="名字" />`，数据在 `src/data/diagrams/`，画法见 [出图规范](diagrams.md)。 |
| 消息在几方之间怎样往返（工具调用、协议交互） | `MessageFlow` | `<MessageFlow variant="名字" upTo={n} />`。数据 `src/data/messageFlows/<名字>.js`，形状写在同目录 `index.js` 的注释里，登记到 `index.js`。`summary` 必填；结论框每张图至多一个。同一张图可以在正文几处用 `upTo` 逐步展开。消息里只写读者要看的那几个字段。 |
| 一次运行随时间怎样推进（循环、逐帧高亮） | `AgentLoopViz` | `<AgentLoopViz variant="名字" />`，数据 `src/data/agentRuns/<名字>.js`，登记到同目录 `index.js`。对话内容示意即可，工具名、字段、`stop_reason` 必须和代码一致。 |
| 读者可能卡住的术语 | `Term` | `<Term tip="解释">术语</Term>`，全局注册，不用 import；一课一两处。 |
| 课程首页的难度与课数 | `CourseHero` | 见 [课程结构](course.md)。 |

对照和清单写成粗体标签列表；`CardGrid`、表格、提示块和 `run` 输出面板都不放进概念课。

## 缺组件时

现有组件表达不了时，停下来问用户：说清要表达什么、数据大概长什么样，附一段文字草图。用户同意后，做成数据驱动的通用组件（数据放 `src/data/`，配色走 `--th-*` / `--th-dg-*`），校验逻辑抽成纯函数并写单测，登记到 `AGENTS.md` 和这张表。
