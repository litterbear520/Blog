// commerce-agents 路线的代码演练：代码快照由 npm run roadmap-sync 从 dev 仓库生成（commerce.files.js），
// 这里只写每一步的标题、说明和聚焦位置。没有 files 的步骤继承上一步的代码，只用 file + lines 把视线带到某一段。
import SNAP from './commerce.files';

export const steps = [
  {
    title: '第一次 API 调用',
    body: [
      '我们先写一个最简单的脚本：用 `Anthropic()` 创建客户端，调用 `messages.create()` 发送一句系统提示词和一条用户消息，然后把回复里的 text 块打印出来。这里没有工具，也没有循环，模型只能聊天。',
      '这个脚本走的是 DeepSeek 的 Anthropic 兼容接口，所以 `base_url` 和 `model` 填的是 DeepSeek 的值。如果换回官方接口，只需要删掉 `base_url` 并改模型名。',
    ],
    file: 'agent.py',
    files: { 'agent.py': SNAP.s00['agent.py'] },
  },
  {
    title: '加入 search_products 工具',
    body: [
      '这一步一次加入了四样东西：假商品列表、工具 schema、搜索函数和对话循环。绿底的行是相对上一步新增的内容，右上角可以切换到“只看当前”查看完整文件。',
      '接下来的三步，我们把这四样东西拆开逐段来看。',
    ],
    file: 'agent.py',
    files: { 'agent.py': SNAP.s01['agent.py'] },
  },
  {
    title: '工具 schema 就是给模型的说明书',
    body: [
      '`description` 不是注释，而是给模型的使用说明：什么时候该搜、怎么搜、顾客提到多个商品时要分开搜。`input_schema` 里每个字段的 description 也是同样的道理。',
      '模型只能看到这段文字，看不到函数体。因此函数写得再好，如果 description 没有说清楚，模型照样不会用，或者用错。',
    ],
    file: 'agent.py',
    lines: [[49, 72]],
  },
  {
    title: '搜索函数与分发表',
    body: [
      '搜索函数只做关键词匹配，并返回 JSON 字符串。这是因为工具结果最终要作为文本放进 messages，所以我们在这里直接序列化。',
      '`TOOL_MAP` 把工具名映射到对应的函数。以后加新工具时，只需要往这张表里添一行，循环本身不用改动。',
    ],
    file: 'agent.py',
    lines: [[75, 87]],
  },
  {
    title: '两层 while',
    body: [
      '外层 `while` 负责等待用户输入，遇到空输入就退出。内层 `while` 才是 agent 循环的本体：调用模型，把 assistant 的回复整个追加进 messages；如果 `stop_reason` 不是 `tool_use` 就跳出；否则执行每一个 tool_use 块，把 `tool_result` 打包成一条 user 消息追加进去，然后再循环一次。',
      '有一个细节需要注意：assistant 的 `response.content` 要原样追加，包括其中的 tool_use 块；下一条 user 消息里的 `tool_use_id` 必须与之对应，模型才知道哪个结果属于哪次调用。',
    ],
    file: 'agent.py',
    lines: [[102, 139]],
  },
];

export default { steps };
