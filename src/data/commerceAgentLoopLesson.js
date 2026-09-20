// Only used by the first Commerce Agents section. Python stays in the synced
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
  results: excerpt(source, 'tool_results = []'),
  stop: excerpt(source, 'if response.stop_reason !=', 'tool_results = []'),
};
