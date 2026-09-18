// commerce-agents 路线第 01 页：两层循环 + 一个 search_products 工具，用户找耳机。
// 对话内容是示意的；工具名、参数字段、stop_reason 与 cookbooks/stage_a/s01_search_tool.py 一致。
export default {
  loopLabel: 'while True:  # 外层等输入，内层 stop_reason == "tool_use" 就继续',
  nodes: [
    { id: 'input', label: 'input()', x: 160, y: 30, w: 120, h: 40 },
    { id: 'api', label: 'messages.create', x: 160, y: 110, w: 140, h: 40 },
    { id: 'check', label: 'stop_reason?', x: 160, y: 200, w: 140, h: 50, shape: 'diamond' },
    { id: 'tool', label: 'search_products', x: 160, y: 300, w: 140, h: 40 },
    { id: 'append', label: '追加 tool_result', x: 160, y: 380, w: 140, h: 40 },
    { id: 'print', label: '打印回复', x: 380, y: 200, w: 120, h: 40, tone: 'end' },
  ],
  edges: [
    { from: 'input', to: 'api' },
    { from: 'api', to: 'check' },
    { from: 'check', to: 'tool', label: 'tool_use', labelAt: [235, 250] },
    { from: 'tool', to: 'append' },
    { from: 'append', to: 'api', fromSide: 'left', toSide: 'left', via: [[50, 380], [50, 110]] },
    { from: 'check', to: 'print', fromSide: 'right', toSide: 'left', label: 'end_turn', labelAt: [270, 190] },
    { from: 'print', to: 'input', fromSide: 'top', toSide: 'right', via: [[380, 30]], label: '等下一句', labelAt: [300, 22] },
  ],
  frames: [
    { title: '两层循环', desc: '外层等用户输入，内层只要模型还想用工具就继续。整个 agent 就这一张图。', nodes: [], edges: [], messages: [] },
    { title: '用户输入', desc: '一句话进 messages，外层循环开始一轮。', nodes: ['input'], edges: [], messages: [{ role: 'user', detail: '我想找耳机', tone: 'user' }] },
    { title: '调模型', desc: '把 messages 和 tools=[search_products_schema] 一起发给模型，模型看到有工具可用。', nodes: ['api'], edges: ['input->api'], messages: [] },
    { title: 'stop_reason: tool_use', desc: '模型不直接回答，而是发出一个 tool_use 块：它想搜。整个 assistant 回复原样追加进 messages。', nodes: ['check', 'tool'], edges: ['api->check', 'check->tool'], messages: [{ role: 'assistant', detail: 'tool_use: search_products({"query": "耳机"})', tone: 'assistant' }] },
    { title: '执行并追加', desc: 'TOOL_MAP 找到函数，跑一遍关键词匹配，结果打包成 tool_result 作为一条 user 消息追加。', nodes: ['tool', 'append'], edges: ['tool->append'], messages: [{ role: 'tool_result', detail: '[{"id": "AR-1105", "title": "ACME Select 主动降噪耳机", "price": 249.0, …}]', tone: 'tool' }] },
    { title: '再转一圈', desc: '同样的代码路径，第二次调模型。这次它手里有搜索结果了。', nodes: ['api', 'check'], edges: ['append->api', 'api->check'], messages: [], tag: { x: 60, y: 130, text: 'iter #2' } },
    { title: 'stop_reason: end_turn', desc: '模型用结果组织回答，内层循环跳出，打印文本。', nodes: ['check', 'print'], edges: ['check->print'], messages: [{ role: 'assistant', detail: 'end_turn: ACME Select 主动降噪耳机，¥249，评分 4.8，有货。', tone: 'end' }], tag: { x: 60, y: 130, text: 'iter #2' } },
    { title: '等下一句', desc: '回到外层循环等输入。messages 不清空，下一句接着这段上下文聊；空输入退出。', nodes: ['input'], edges: ['print->input'], messages: [] },
  ],
};
