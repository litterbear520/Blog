// No framework dependency: run with Node 18+ before the Docusaurus build.
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const read = (path) => readFileSync(new URL(path, import.meta.url), 'utf8');
const asModule = (code) => `data:text/javascript;base64,${Buffer.from(code).toString('base64')}`;
const snapshotUrl = asModule(read('../src/data/codeWalkthroughs/commerce.files.js'));
const snapshot = (await import(snapshotUrl)).default;
// The repository intentionally has no package-wide type:module. Data URLs let
// Node test these ESM data files without changing that package setting.
const lessonSource = read('../src/data/commerceAgentLoopLesson.js');
const lessonUrl = asModule(lessonSource.replace(
  "'./codeWalkthroughs/commerce.files.js'", JSON.stringify(snapshotUrl),
));
const { default: lesson, focusRange } = await import(lessonUrl);
const article = read('../roadmap/commerce-agents/一个文件，一段对话/01-the-agent-loop.mdx');
const registry = read('../src/data/mcpWalkthroughs/index.js');
const source = snapshot.s01['agent.py'];
const anchors = [
  ['PRODUCTS = [', '# ── 工具 Schema'],
  ['def search_products(', '# ── 工具调用分发'],
  ['search_products_schema =', '# ── 搜索函数'],
  ['user_input = input(', 'messages.append({"role": "assistant"'],
  ['messages.append({"role": "assistant"', 'if response.stop_reason !='],
  ['tool_results = []', 'tool_results.append('],
  ['tool_results.append(', undefined],
  ['if response.stop_reason !=', 'tool_results = []'],
];

test('the lesson reuses the complete synced snapshot, without a second Python copy', () => {
  assert.strictEqual(lesson.files, snapshot.s01);
  assert.equal(lesson.files['agent.py'], source);
  assert.ok(!lessonSource.includes('PRODUCTS = [\n'));
});

test('all eight steps point to their intended, nonempty source ranges', () => {
  assert.equal(lesson.steps.length, anchors.length);
  const lines = source.split('\n');
  lesson.steps.forEach((step, index) => {
    assert.equal(step.file, 'agent.py');
    assert.ok(Number.isInteger(step.line) && step.line > 0);
    assert.ok(step.endLine >= step.line && step.endLine <= lines.length);
    assert.ok(lines[step.line - 1].trimStart().startsWith(anchors[index][0]));
    assert.deepEqual({ line: step.line, endLine: step.endLine }, focusRange(source, ...anchors[index]));
    const highlighted = lines.slice(step.line - 1, step.endLine).join('\n');
    assert.ok(highlighted.trim());
    if (anchors[index][1]) assert.ok(!highlighted.includes(anchors[index][1]));
  });
});

test('every step has text supported by the shared MCP body renderer', () => {
  assert.equal(new Set(lesson.steps.map((step) => step.title)).size, lesson.steps.length);
  for (const step of lesson.steps) {
    assert.ok(step.title.length > 0);
    assert.ok(step.body.length >= 1);
    for (const block of step.body) {
      assert.equal(block.type, 'p');
      assert.equal(typeof block.text, 'string');
      assert.ok(block.text.trim());
      assert.equal((block.text.match(/`/g) || []).length % 2, 0, `unpaired inline code: ${step.title}`);
    }
  }
});

test('semantic anchors follow inserted lines and CRLF without manual renumbering', () => {
  const [start, end] = anchors[1];
  const original = focusRange(source, start, end);
  assert.deepEqual(focusRange(`\n# inserted comment\n${source}`, start, end), {
    line: original.line + 2, endLine: original.endLine + 2,
  });
  assert.deepEqual(focusRange(source.replaceAll('\n', '\r\n'), start, end), original);
});

test('missing, ambiguous and reversed anchors fail instead of silently mis-highlighting', () => {
  assert.throws(() => focusRange(source, 'not_a_real_anchor'), /expected one anchor/);
  assert.throws(() => focusRange(source, 'while True:'), /found 2/);
  assert.throws(() => focusRange(source, 'PRODUCTS = [', 'not_a_real_end'), /expected one anchor/);
  assert.throws(() => focusRange(source, 'def search_products(', 'PRODUCTS = ['), /invalid range/);
  assert.throws(() => focusRange(source, 'PRODUCTS = [', 'PRODUCTS = ['), /invalid range/);
});

test('the first page uses the actual MCP guide once, outside collapsed details', () => {
  assert.match(article, /import McpWalkthrough from '@site\/src\/components\/McpWalkthrough'/);
  assert.equal((article.match(/<McpWalkthrough\b/g) || []).length, 1);
  assert.match(article, /<McpWalkthrough variant="commerceAgentLoop" \/>/);
  assert.doesNotMatch(article, /<details|<CodeWalkthrough|<AgentLoopViz|<CardGrid|<McpQuiz|:::|<CodeBlock/);
  assert.doesNotMatch(article, /```python/);
});

test('the new variant is registered without replacing existing MCP lessons', () => {
  assert.match(registry, /import commerceAgentLoop from '\.\.\/commerceAgentLoopLesson\.js'/);
  assert.match(registry, /\{\s*sampling,\s*notifications,\s*roots,\s*commerceAgentLoop\s*\}/);
});

test('the note retains runnable setup and distinguishes demonstrations from live execution', () => {
  assert.match(article, /python -m pip install anthropic python-dotenv/);
  assert.match(article, /ANTHROPIC_API_KEY=/);
  assert.match(article, /python agent\.py/);
  assert.match(article, /不会发送 API 请求/);
  assert.match(article, /不是预录运行结果/);
  assert.match(article, /max_tokens/);
  assert.match(article, /不是 Anthropic 官方服务/);
});
