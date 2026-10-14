// focusRange 语义锚点的单测，用 roadmap-sync 生成的 agent-tools 快照当样本。无框架依赖：node --test tools/focus-range.test.mjs
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const read = (path) => readFileSync(new URL(path, import.meta.url), 'utf8');
const asModule = (code) => `data:text/javascript;base64,${Buffer.from(code).toString('base64')}`;
// 仓库没有 package 级 type:module：用 data URL 导入 ESM 数据文件。
const snapshot = (await import(asModule(read('../src/data/codeWalkthroughs/agentTools.files.js')))).default.tools;
const { focusRange } = await import(asModule(read('../src/data/focusRange.js')));

test('focusRange can anchor a repeated marker after a unique line', () => {
  const registry = snapshot['shopping_agent/tools/registry.py'];
  assert.throws(() => focusRange(registry, '"input_schema": {', '"name": "get_product_details",'), /expected one anchor/);
  const schema = focusRange(registry, '"input_schema": {', '"name": "get_product_details",', { after: '"name": "search_products",' });
  const tool = focusRange(registry, '"name": "search_products",', '"name": "get_product_details",');
  assert.ok(schema.line > tool.line && schema.endLine === tool.endLine);
  assert.match(registry.split('\n')[schema.line - 1], /"input_schema": \{/);
});

test('focusRange leaves a lone opening bracket and a decorator to the next block', () => {
  const registry = snapshot['shopping_agent/tools/registry.py'];
  const dict = focusRange(registry, '"name": "search_products",', '"name": "get_product_details",');
  assert.equal(registry.split('\n')[dict.endLine - 1].trim(), '},');
  const backend = snapshot['shopping_agent/backend.py'];
  const method = focusRange(backend, 'async def search_products(', 'async def get_product_details(');
  assert.match(backend.split('\n')[method.endLine - 1], /"""\s*$/);
});
