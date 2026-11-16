# 《构建始终在线的 Agent》配图译文

文章：blog/building-always-on-agents。“做梦”沿用 `specs/components-of-agent-memory/GLOSSARY.md`。正文、图注、alt 和图里用同一套叫法。

## 术语
2026-11-16 用户要求：开发者平时直接说英文的术语保留原词，第一次出现用 Term 给中文解释；图和 GIF 里同样保留。
- 保留英文：五个核心构件 event inbox / inbox、timer、memory、permissions、outbox 一律保留；另有 Agent、run、session、follow-up、schedule、transcript、auto memory、memory tool、agent loop、compaction、auto mode、hook、webhook、token；角色名大写：Worker、Handler、Scheduler、Dispatcher
- 图里整块是这些词的标签（Run / The agent loop、Event inbox、Session、Timers、Follow-up、Schedule、Scheduler、Outbox、Memory、Permissions、Dispatcher、Compaction、A run）保留原图像素，不替换
- 混在中文里时：句中小写（启动 run、每次 run），标签开头大写（Run 写回结果、Session 开始）
- 译成中文：事件、上下文、泛指的访问权限、持久状态（Stored state）、休眠（Asleep）、数据库表、后台服务、HTTP 端点、延后的工具调用、做梦、提示词缓存；pending → 待处理（inbox）/ 待发送（outbox）
- 文件名（instructions.md、notes/ 等）、时刻（09:00）、Chat ID 里的 ID 保留

## 各图译文
fig01：Asleep / no tokens spent → 休眠 / 不消耗 token；A webhook arrives → 收到一个 webhook；A timer fires → Timer 触发；The user sends a message → 用户发来一条消息；awake briefly → 短暂醒来；An event arrives → 事件到达；A session starts → Session 开始；The agent loop runs → Agent loop 运行；The run writes back → Run 写回结果；read / write → 读取 / 写入；Stored state / Carries over between runs → 持久状态 / 在多次 run 之间保留
fig02：An event → 一个事件；Write the event → 写入事件；Wake the worker → 唤醒 Worker；When / What happened / Status → 时间 / 发生了什么 / 状态；A record changed → 一条记录变了；done → 已完成；Delivered twice, same ID → 重复送达，ID 相同；dropped → 已丢弃；A background job finished → 一个后台作业完成了；The user sent a message → 用户发来一条消息；Chat ID → 聊天 ID；Read what's pending → 读取待处理的事件；Mark done → 标为已完成；Start the run → 启动 run；Wait for it to finish → 等待 run 结束
fig03：Set a timer → 设置一个 timer；Thu 18:00 / Fri 09:00 → 周四 18:00 / 周五 09:00；Check whether the reply came → 查看回复到了没有；Daily newsletter → 每日新闻简报；Set by the agent / user → 由 Agent / 用户设置；Find what's due → 找出到期的 timer；Add an event → 添加一个事件
fig04：Name / What it holds / Read → 文件名 / 存放内容 / 读取时机；Instructions from the user → 用户给的指令；Index of notes/ and progress/ → notes/ 和 progress/ 的索引；What it's already told the user → 已经告诉过用户的事；What it's learned about the user / Small, focused files → 对用户的了解 / 按主题拆分的小文件；Progress on ongoing tasks / One file per task → 进行中任务的进度 / 每个任务一个文件；Every run / When needed → 每次 run / 需要时；Load at the start / Write during the run / Read when needed → 开始时加载 / Run 过程中写入 / 需要时读取
fig05：Context used / Context limit / Time → 已用上下文 / 上下文上限 / 时间；Older transcript becomes a summary → 较早的 transcript 变成一份摘要；Existing session / New session → 已有的 session / 新 session；On every run: system prompt, tools, memory → 每次 run 都有：系统提示词、工具和 memory；whole transcript / last few messages → 全部 transcript / 最近几条消息
fig06：Nothing to say → 没什么要说的；Send / Tool call → 发送 / 工具调用；Ask the user → 询问用户；What the agent said → Agent 说了什么；Earlier messages → 更早的消息；The export failed → 导出失败了；sent → 已发送；No reply yet → 还没收到回复；The invoice is late → 发票逾期了；The report is ready → 报告做好了；As a message → 作为消息；Approve a refund? → 批准这笔退款吗？；The user → 用户；Either route works. It's up to you. → 两条路都行。由你决定。；Or in your own interface → 或者在你自己的界面里
fig07：What starts a run / What a run works with / What leaves a run → 启动 run 的 / Run 用到的 / Run 送出的；Fires later → 稍后触发；Starts or resumes → 启动或恢复；Sets a follow-up → 设一个 follow-up；in a session → 在 session 里；Sends, or says nothing → 发消息，或什么都不发；Reads, and writes what it learned → 读取，并写下学到的东西；Each tool call is checked → 每次工具调用都要检查；The answer, as an event → 回答作为一个事件回来
