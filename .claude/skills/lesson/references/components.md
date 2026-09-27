# 组件怎么选

先写文字，再看哪一节确实需要组件：一节里至多一个组件或一张图。

| 要表达的 | 组件 | 写法与数据 |
| ---- | ---- | ---- |
| 在真实项目里逐步看代码：这一步看哪几行、为什么 | `McpWalkthrough` | `<McpWalkthrough variant="名字" />`。数据文件 `src/data/<课文>Lesson.js`：`{ files, steps: [{ title, file, line, endLine, body: [{ type: 'p', text }] }] }`；`files` 直接用 roadmap-sync 生成的快照，不另抄一份。行号用语义锚点 `focusRange(source, 起始行开头, 结束行开头)` 算（`src/data/focusRange.js`），代码一改就报错，不会高亮错行；结束锚点前的空行、单独的左括号和装饰器归到下一段。专题课几课共用一个快照时，每课只挑自己要看的文件，参照 `agentToolBoundaryLesson.js`。登记到 `src/data/mcpWalkthroughs/index.js`。 |
| 同一份代码一步步改（看演进和 diff） | `CodeWalkthrough` | `<CodeWalkthrough variant="名字" step={n} />`，最后一个实例加 `nav`。数据 `src/data/codeWalkthroughs/<名字>.js`，登记到同目录 `index.js` 和 `src/components/ProjectCodeViewer/actions.test.mjs` 的 `supported` 白名单。 |
| 消息在几方之间怎样往返（工具调用、协议交互、门控拦截） | `MessageFlow` | `<MessageFlow variant="名字" upTo={n} />`。数据 `src/data/messageFlows/<名字>.js`，形状写在同目录 `index.js` 的注释里，登记到 `index.js`。`summary` 必填；结论框每张图至多一个。同一张图可以在正文几处用 `upTo` 逐步展开。 |
| 一次运行随时间怎样推进（循环、逐帧高亮） | `AgentLoopViz` | `<AgentLoopViz variant="名字" />`，数据 `src/data/agentRuns/<名字>.js`，登记到同目录 `index.js`。对话内容示意即可，工具名、字段、`stop_reason` 必须和代码一致。 |
| 结构、分层、边界（静态的架构图、流程图） | 自己画的 SVG 组件 | 见 [出图规范](diagrams.md)。 |
| 并排的几个选项、“有 / 没有”对照 | `CardGrid` + `Card` | `import { CardGrid, Card } from '@site/src/components/InfoCards'`；`<CardGrid columns={2}>`，`numbered` 给有顺序的卡片编号；`tone="accent"` 至多给一张。 |
| 读者可能卡住的术语 | `Term` | `<Term tip="解释">术语</Term>`，全局注册，不用 import。 |
| 主线之外的提醒 | 提示块 | `:::tip` / `:::warning` / `:::important` / `:::info` / `:::note` / `:::danger`，按含义选；标题写成 `:::tip[标题]`。 |
| 完整、能独立运行的示例和它的输出 | 代码块 `run` + `output` | 只用在 docs 课程里，输出在本地实跑后录入（写法见 `AGENTS.md`「代码运行输出」）。路线页面不用。 |
| 课程首页的难度与课数 | `CourseHero` | 见 [课程结构](course.md)。 |

## 缺组件时

现有组件表达不了时，停下来问用户：说清要表达什么、数据大概长什么样，附一段文字草图。用户同意后，做成数据驱动的通用组件（数据放 `src/data/`，配色走 `--th-*` / `--th-dg-*`），校验逻辑抽成纯函数并写单测，登记到 `AGENTS.md` 和这张表。
