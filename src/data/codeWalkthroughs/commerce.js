// commerce-agents 路线的代码演练：代码快照由 npm run roadmap-sync 从 dev 仓库生成（commerce.files.js），
// 这里只写每一步的标题、说明和聚焦位置。没有 files 的步骤继承上一步的代码，只用 file + lines 把视线带到某一段。
import SNAP from './commerce.files';

export const steps = [
  {
    title: '第一次 API 调用',
    body: [
      '一个脚本：`Anthropic()` 建客户端，`messages.create()` 发一句系统提示词和一条用户消息，把回复里的 text 块打印出来。没有工具，没有循环，模型只能聊天。',
      '这里走的是 DeepSeek 的 Anthropic 兼容接口，所以 `base_url` 和 `model` 是 DeepSeek 的；换回官方只要删掉 `base_url`、改模型名。dev 里这一步是 `cookbooks/stage_a/s00_llm_request.py`。',
    ],
    file: 'agent.py',
    files: { 'agent.py': SNAP.s00['agent.py'] },
  },
  {
    title: '加入 search_products 工具',
    body: [
      '这一步一次加了四样：假商品列表、工具 schema、搜索函数、对话循环。绿底是相对上一步新增的行，右上角可以切「只看当前」。',
      '后面三步把这四样拆开看。dev 里这一步是 `cookbooks/stage_a/s01_search_tool.py`。',
    ],
    file: 'agent.py',
    files: { 'agent.py': SNAP.s01['agent.py'] },
  },
  {
    title: '工具 schema 就是给模型的说明书',
    body: [
      '`description` 不是注释，是给模型的使用说明：什么时候搜、怎么搜、顾客提到多个商品要分开搜。`input_schema` 里每个字段的 description 同理。',
      '模型只看得到这段文字，看不到函数体。函数写得再好，description 没说清楚，模型照样不会用或用错。',
    ],
    file: 'agent.py',
    lines: [[49, 72]],
  },
  {
    title: '搜索函数与分发表',
    body: [
      '搜索函数就是关键词匹配，返回 JSON 字符串。工具结果最终要作为文本放进 messages，所以这里直接序列化。',
      '`TOOL_MAP` 把工具名映射到函数。后面加工具只是往这张表里添一行，循环本身不用动。',
    ],
    file: 'agent.py',
    lines: [[75, 87]],
  },
  {
    title: '两层 while',
    body: [
      '外层 `while` 等用户输入，空输入退出。内层 `while` 是 agent 循环本体：调模型，把 assistant 回复整个追加进 messages，`stop_reason` 不是 `tool_use` 就跳出；否则执行每个 tool_use 块，把 `tool_result` 打包成一条 user 消息追加，再转一圈。',
      'assistant 的 `response.content` 要原样追加，包括 tool_use 块；下一条 user 消息里的 `tool_use_id` 要对上，模型才知道哪个结果对应哪个调用。',
    ],
    file: 'agent.py',
    lines: [[102, 139]],
  },
];

export default { steps };
