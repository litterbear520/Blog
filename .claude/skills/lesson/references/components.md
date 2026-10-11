# 组件怎么选

先写文字，再看哪里确实需要组件。概念课里用图（见 [出图规范](diagrams.md)）和课内检查；代码演练只出现在演练页。

| 要表达的 | 组件 | 写法与数据 |
| ---- | ---- | ---- |
| 在真实项目里逐步看代码：这一步看哪几行、为什么 | `McpWalkthrough` | 只放在演练页：`<McpWalkthrough variant="名字" />`。数据文件 `src/data/<课文>Lesson.js`：`{ files, steps: [{ title, file, line, endLine, body: [{ type: 'p', text }] }] }`，`body` 里也可以放 `{ type: 'list', ordered, items }`。`files` 直接用 roadmap-sync 生成的快照，只挑这一页要看的文件，参照 `agentToolBoundaryLesson.js`。**每步一两句话，只框住这一步讲的那几行**（多在 1–15 行，范文 `src/data/mcpWalkthroughs/sampling.js`）：说明写“这几行在做什么、为什么”，代码名挑最要紧的一两个。行号用语义锚点 `focusRange(source, 起始行开头, 结束行开头)` 算（`src/data/focusRange.js`），代码一改就报错；锚点在文件里出现不止一次时（比如每个工具都有的 `"input_schema": {`），加第四个参数 `{ after: '某个唯一行的开头' }`，从那一行往后找；结束锚点前的空行、单独的左括号和装饰器归到下一段。登记到 `src/data/mcpWalkthroughs/index.js`，并把 variant 加进 `src/components/ProjectCodeViewer/actions.test.mjs` 的 `supported` 白名单。 |
| 同一份代码一步步改（看演进和 diff） | `CodeWalkthrough` | 只放在演练页：`<CodeWalkthrough variant="名字" step={n} />`，最后一个实例加 `nav`。数据 `src/data/codeWalkthroughs/<名字>.js`，登记到同目录 `index.js` 和 `actions.test.mjs` 的 `supported` 白名单。 |
| 结构、选项对照、场景、递进图组、代码标注 | `Diagram` | `<Diagram variant="名字" />`，数据在 `src/data/diagrams/`，画法见 [出图规范](diagrams.md)。 |
| 消息在几方之间怎样往返（工具调用、协议交互） | `MessageFlow` | `<MessageFlow variant="名字" upTo={n} />`。数据 `src/data/messageFlows/<名字>.js`，形状写在同目录 `index.js` 的注释里，登记到 `index.js`。`summary` 必填；结论框每张图至多一个。同一张图可以在正文几处用 `upTo` 逐步展开。消息里只写读者要看的那几个字段。 |
| 一次运行随时间怎样推进（循环、逐帧高亮） | `AgentLoopViz` | `<AgentLoopViz variant="名字" />`，数据 `src/data/agentRuns/<名字>.js`，登记到同目录 `index.js`。对话内容示意即可，工具名、字段、`stop_reason` 必须和代码一致。 |
| 先让读者下注，或讲完一个机制后当场检查 | `QuickCheck` | 全局注册，不用 import：`<QuickCheck question="题干" options={[{ text: '选项', explain: '为什么不对' }, { text: '选项', correct: true, explain: '为什么对' }]} />`。2–5 个选项，正好一个 `correct: true`，每个选项都写 `explain`（错的说清错在哪，对的说清为什么），读者点完当场看到；可以改选，不计分。题干写成场景，考判断不考背名词。一课至多两道。 |
| 边缘情况、支线、“您可能会问” | `ReadMore` | 全局注册：`<ReadMore title="读者会问的问题">`，标签和正文之间各空一行，里面照常写 Markdown。收起时页内查找也能搜到。 |
| 课文标题下的课序和时长 | `LessonMeta` | 全局注册：H1 下一行 `<LessonMeta lesson={N} minutes={M} />`，概念课和演练页都放；N、M 照 `lesson_lint.py` 的提示写，lint 会核对。 |
| 读者可能卡住的术语 | `Term` | `<Term tip="解释">术语</Term>`，全局注册，不用 import；一课一两处。 |
| 小提示、关键要点 | 提示块 | 只用 Academy 用过的两种：一节末尾 `:::tip[小提示]`，收尾 `:::important[关键要点]`；一课至多一两个。 |
| 学完后能做什么 | 提示块 | 照技能课、AI 能力课，导语后放 `:::note[学完后，您将能够]` 加三四条动词开头的清单；一门课里要么每课都放，要么都不放。 |
| 并排的几项：能做什么 / 在哪里失效、有 / 没有 | `CardGrid` + `Card` | `import { CardGrid, Card } from '@site/src/components/InfoCards'`；`<CardGrid columns={2}>`，`tone="accent"` 至多给一张。 |
| 课程首页的难度与课数 | `CourseHero` | 见 [课程结构](course.md)。 |

对照和清单优先写成粗体标签列表或成对小节；表格和 `run` 输出面板不放进课文（Academy 课文里没有表格，路线页面不用 `run`）。

## 缺组件时

现有组件表达不了时，停下来问用户：说清要表达什么、数据大概长什么样，附一段文字草图。用户同意后，做成数据驱动的通用组件（数据放 `src/data/`，配色走 `--th-*` / `--th-dg-*`），校验逻辑抽成纯函数并写单测，登记到 `AGENTS.md` 和这张表。
