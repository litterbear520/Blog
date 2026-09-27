// “工程化 Agent 工具”专题的演练数据测试。无框架依赖：node --test tools/agent-tool-lessons.test.mjs
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const read = (path) => readFileSync(new URL(path, import.meta.url), 'utf8');
const asModule = (code) => `data:text/javascript;base64,${Buffer.from(code).toString('base64')}`;
// 仓库没有 package 级 type:module：用 data URL 导入 ESM 数据文件，相对 import 换成 data URL。
const snapshotUrl = asModule(read('../src/data/codeWalkthroughs/agentTools.files.js'));
const focusRangeUrl = asModule(read('../src/data/focusRange.js'));
const snapshot = (await import(snapshotUrl)).default.tools;
const { focusRange } = await import(focusRangeUrl);
const loadLesson = async (file) => {
  const source = read(`../src/data/${file}`);
  const url = asModule(source
    .replace("'./codeWalkthroughs/agentTools.files.js'", JSON.stringify(snapshotUrl))
    .replace("'./focusRange.js'", JSON.stringify(focusRangeUrl)));
  return { source, lesson: (await import(url)).default };
};
const walkthroughs = read('../src/data/mcpWalkthroughs/index.js');
const flows = read('../src/data/messageFlows/index.js');

const LESSONS = [
  {
    data: 'agentToolBoundaryLesson.js',
    variant: 'agentToolBoundary',
    article: '../roadmap/commerce-agents/工程化Agent工具/01-tool-boundaries.mdx',
    flows: ['toolBoundarySearch'],
    files: [
      'shopping_agent/tools/registry.py',
      'commerce_common/execution.py',
      'shopping_agent/executor.py',
      'shopping_agent/backend.py',
    ],
    anchors: [
      ['shopping_agent/tools/registry.py', '"""购物 agent 的工具定义', '# 项目中对应'],
      ['shopping_agent/tools/registry.py', '"name": "search_products",', '"name": "get_product_details",'],
      ['shopping_agent/tools/registry.py', 'def _filters_schema()', 'def build_tools('],
      ['shopping_agent/tools/registry.py', 'absent = config.absent_tools()', 'return tools'],
      ['commerce_common/execution.py', 'async def dispatch(', 'def _load_skill('],
      ['shopping_agent/executor.py', 'async def _search_products(', 'async def _get_product_details('],
      ['shopping_agent/backend.py', 'async def search_products(', 'async def get_product_details('],
    ],
  },
];

for (const spec of LESSONS) {
  const { source, lesson } = await loadLesson(spec.data);
  const article = read(spec.article);

  test(`${spec.variant}: files are the synced snapshot, limited to this lesson`, () => {
    assert.deepEqual(Object.keys(lesson.files), spec.files);
    for (const path of spec.files) assert.equal(lesson.files[path], snapshot[path], path);
    // Anchors are short line openings; any long source line in the data file means copied code.
    const copied = spec.files.flatMap((path) => snapshot[path].split('\n'))
      .map((line) => line.trim()).filter((line) => line.length > 45 && source.includes(line));
    assert.deepEqual(copied, [], 'no second copy of Python source in the lesson data');
  });

  test(`${spec.variant}: every step highlights its intended, nonempty range`, () => {
    assert.equal(lesson.steps.length, spec.anchors.length);
    lesson.steps.forEach((step, index) => {
      const [file, start, end] = spec.anchors[index];
      const lines = lesson.files[file].split('\n');
      assert.equal(step.file, file);
      assert.deepEqual({ line: step.line, endLine: step.endLine }, focusRange(lesson.files[file], start, end));
      assert.ok(lines[step.line - 1].trimStart().startsWith(start));
      const highlighted = lines.slice(step.line - 1, step.endLine);
      assert.ok(highlighted.join('\n').trim());
      assert.ok(!highlighted.join('\n').includes(end), `${step.title}: end anchor stays outside`);
      assert.doesNotMatch(highlighted.at(-1), /^\s*(?:[[{(]\s*)?$|^\s*@\w/, `${step.title}: no trailing lead-in line`);
    });
  });

  test(`${spec.variant}: step text renders in the shared body renderer`, () => {
    assert.equal(new Set(lesson.steps.map((step) => step.title)).size, lesson.steps.length);
    for (const step of lesson.steps) {
      assert.ok(step.body.length >= 1);
      for (const block of step.body) {
        assert.equal(block.type, 'p');
        assert.ok(block.text.trim());
        assert.equal((block.text.match(/`/g) || []).length % 2, 0, `unpaired inline code: ${step.title}`);
      }
    }
  });

  test(`${spec.variant}: the article embeds each registered component once`, () => {
    assert.equal((article.match(/<McpWalkthrough\b/g) || []).length, 1);
    assert.match(article, new RegExp(`<McpWalkthrough variant="${spec.variant}" />`));
    assert.match(walkthroughs, new RegExp(`import ${spec.variant} from '\\.\\./${spec.data.replace('.', '\\.')}'`));
    assert.match(walkthroughs, new RegExp(`WALKTHROUGHS = \\{[^}]*\\b${spec.variant}\\b`));
    for (const flow of spec.flows) {
      assert.match(article, new RegExp(`<MessageFlow variant="${flow}"`));
      assert.match(flows, new RegExp(`import ${flow} from '\\./${flow}'`));
    }
  });

  test(`${spec.variant}: roadmap pages name places by lesson and Stage, not by dev paths`, () => {
    const prose = [article, ...lesson.steps.flatMap((step) => step.body.map((block) => block.text))].join('\n');
    assert.doesNotMatch(prose, /BUILD_ROADMAP|commerce-agents-dev|shopping-agent\/core|commerce-common\/|cookbooks\/|\bStep \d/);
  });
}

test('focusRange leaves a lone opening bracket and a decorator to the next block', () => {
  const registry = snapshot['shopping_agent/tools/registry.py'];
  const dict = focusRange(registry, '"name": "search_products",', '"name": "get_product_details",');
  assert.equal(registry.split('\n')[dict.endLine - 1].trim(), '},');
  const backend = snapshot['shopping_agent/backend.py'];
  const method = focusRange(backend, 'async def search_products(', 'async def get_product_details(');
  assert.match(backend.split('\n')[method.endLine - 1], /"""\s*$/);
});
