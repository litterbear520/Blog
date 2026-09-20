// Only used by the first Commerce Agents lesson. Python stays in the synced
// snapshot so the inline examples and the complete walkthrough cannot diverge.
import SNAP from './codeWalkthroughs/commerce.files.js';

export function excerpt(source, start, end) {
  const lines = source.split('\n');
  const first = lines.findIndex((line) => line.trimStart().startsWith(start));
  const last = end
    ? lines.findIndex((line, index) => index > first && line.trimStart().startsWith(end))
    : lines.length;
  if (first < 0 || last <= first) {
    throw new Error(`Commerce lesson: cannot locate source excerpt "${start}" → "${end || 'EOF'}"`);
  }
  const selected = lines.slice(first, last);
  const indent = Math.min(...selected.filter((line) => line.trim()).map((line) => line.match(/^\s*/)[0].length));
  return selected.map((line) => line.slice(indent)).join('\n').trimEnd();
}

const source = SNAP.s01['agent.py'];

export const snippets = {
  search: excerpt(source, 'def search_products(', '# ── 工具调用分发'),
  schema: excerpt(source, 'search_products_schema =', '# ── 搜索函数'),
  request: excerpt(source, 'response = client.messages.create(', 'messages.append({"role": "assistant"'),
  results: excerpt(source, 'tool_results = []'),
  stop: excerpt(source, 'if response.stop_reason !=', 'tool_results = []'),
};

export const questions = [
  {
    text: '模型返回了 search_products 的工具调用请求。此时，商品搜索已经发生了吗？',
    options: [
      '已经发生，模型在生成请求时就执行了 Python 函数。',
      '还没有，需要我们的程序读取请求并执行搜索函数。',
      '已经发生，Messages API 会自动执行本地同名函数。',
    ],
    answer: 1,
    explanation: 'tool_use 表示模型提出了调用请求。这个例子中的搜索函数在我们的程序里，必须由程序执行后，才会产生搜索结果。',
  },
  {
    text: '为什么写好搜索函数以后，还需要向模型提供工具 Schema？',
    options: [
      'Schema 会把函数里的全部商品数据自动上传给模型。',
      'Schema 会代替 Python 函数完成搜索。',
      'Schema 告诉模型工具的用途、名称和可以提交的参数。',
    ],
    answer: 2,
    explanation: '模型根据 name、description 和 input_schema 了解如何请求工具；函数体仍由我们的程序运行。描述工具不等于执行工具。',
  },
  {
    text: 'tool_result 中的 tool_use_id 应该填什么？',
    options: [
      '对应的 tool_use 块中的 id。',
      '搜索到的商品 ID。',
      '搜索函数的名称 search_products。',
    ],
    answer: 0,
    explanation: '一次回复可能包含多个工具调用。tool_use_id 需要与对应请求的 id 一致，模型才能知道这个结果属于哪一次调用。',
  },
  {
    text: '哪个信号表示模型正常结束了当前这一轮回答？',
    options: [
      '回复中出现了一个 text 块。',
      'stop_reason 为 end_turn。',
      '搜索函数返回了空列表。',
    ],
    answer: 1,
    explanation: '回复里可以同时有文字和工具调用，空搜索结果也需要交回模型。end_turn 才表示本轮正常结束；max_tokens 等其他停止原因需要另行处理。',
  },
];
