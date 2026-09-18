// 《The Agent Loop》笔记里的默认分镜：一个 while 循环 + 读文件/改文件两个工具，修一个登录 bug。
//
// nodes：{ id, label, x, y, w, h, shape: 'rect' | 'diamond', tone?: 'end' }，x/y 是中心点，画布 500×440。
// edges：{ from, to, label?, fromSide?, toSide?, via?: [[x, y], …], labelAt?: [x, y] }
//   默认从 from 的底边中点连到 to 的顶边中点；via 是折线的中间拐点；label 默认放在线段中点旁边。
// frames：{ title, desc, nodes: [id, …], edges: ['from->to', …], messages: [{ role, detail, tone }], tag?: { x, y, text } }
//   messages 逐帧累积；tone 决定气泡配色：user / assistant / tool / end。
export default {
  loopLabel: 'while (stop_reason === "tool_use")',
  nodes: [
    { id: 'start', label: 'Start', x: 160, y: 30, w: 120, h: 40 },
    { id: 'api_call', label: 'API Call', x: 160, y: 110, w: 120, h: 40 },
    { id: 'check', label: 'stop_reason?', x: 160, y: 200, w: 140, h: 50, shape: 'diamond' },
    { id: 'execute', label: 'Execute Tool', x: 160, y: 300, w: 120, h: 40 },
    { id: 'append', label: 'Append Result', x: 160, y: 380, w: 120, h: 40 },
    { id: 'end', label: 'Break / Done', x: 380, y: 200, w: 120, h: 40, tone: 'end' },
  ],
  edges: [
    { from: 'start', to: 'api_call' },
    { from: 'api_call', to: 'check' },
    { from: 'check', to: 'execute', label: 'tool_use', labelAt: [235, 250] },
    { from: 'execute', to: 'append' },
    { from: 'append', to: 'api_call', fromSide: 'left', toSide: 'left', via: [[50, 380], [50, 110]] },
    { from: 'check', to: 'end', fromSide: 'right', toSide: 'left', label: 'end_turn', labelAt: [270, 190] },
  ],
  frames: [
    { title: 'The While Loop', desc: '每个 Agent 都是一个 while 循环，持续调用模型直到它说「停止」。', nodes: [], edges: [], messages: [] },
    { title: '用户输入', desc: '循环从用户发送消息开始。', nodes: ['start'], edges: [], messages: [{ role: 'user', detail: 'Fix the login bug', tone: 'user' }] },
    { title: '调用模型', desc: '将所有消息发给 LLM，它看到全部上下文后决定下一步。', nodes: ['api_call'], edges: ['start->api_call'], messages: [] },
    { title: 'stop_reason: tool_use', desc: '模型想使用工具，循环继续。', nodes: ['check', 'execute'], edges: ['api_call->check', 'check->execute'], messages: [{ role: 'assistant', detail: 'tool_use: read_file', tone: 'assistant' }] },
    { title: '执行并追加', desc: '运行工具，将结果追加到 messages[]，再次喂给模型。', nodes: ['execute', 'append'], edges: ['execute->append'], messages: [{ role: 'tool_result', detail: 'auth.ts contents...', tone: 'tool' }] },
    {
      title: '再次循环', desc: '同样的代码路径，第二次迭代。模型决定编辑文件。',
      nodes: ['api_call', 'check', 'execute', 'append'], edges: ['append->api_call', 'api_call->check', 'check->execute', 'execute->append'],
      messages: [{ role: 'assistant', detail: 'tool_use: edit_file', tone: 'assistant' }, { role: 'tool_result', detail: 'file updated', tone: 'tool' }],
      tag: { x: 60, y: 130, text: 'iter #2' },
    },
    { title: 'stop_reason: end_turn', desc: '模型完成任务，循环退出。这就是整个 Agent。', nodes: ['check', 'end'], edges: ['api_call->check', 'check->end'], messages: [{ role: 'assistant', detail: 'end_turn: Done!', tone: 'end' }], tag: { x: 60, y: 130, text: 'iter #2' } },
  ],
};
