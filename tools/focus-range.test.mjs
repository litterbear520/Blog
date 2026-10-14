// focusRange 语义锚点的单测。无框架依赖：node --test tools/focus-range.test.mjs
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const read = (path) => readFileSync(new URL(path, import.meta.url), 'utf8');
const asModule = (code) => `data:text/javascript;base64,${Buffer.from(code).toString('base64')}`;
// 仓库没有 package 级 type:module：用 data URL 导入 ESM 数据文件。
const { focusRange } = await import(asModule(read('../src/data/focusRange.js')));

// 两个工具都有 "input_schema": {，用来测重复锚点。
const registry = `TOOLS = [
    {
        "name": "search_products",
        "description": "Search the catalog.",
        "input_schema": {
            "type": "object",
            "properties": {"query": {"type": "string"}},
        },
    },
    {
        "name": "get_product_details",
        "description": "Look up one product.",
        "input_schema": {
            "type": "object",
            "properties": {"product_id": {"type": "string"}},
        },
    },
]
`;

const backend = `class Backend:
    async def search_products(self, query):
        """Return matching products."""

    @cached
    async def get_product_details(self, product_id):
        """Return one product."""
`;

test('focusRange can anchor a repeated marker after a unique line', () => {
  assert.throws(() => focusRange(registry, '"input_schema": {', '"name": "get_product_details",'), /expected one anchor/);
  const schema = focusRange(registry, '"input_schema": {', '"name": "get_product_details",', { after: '"name": "search_products",' });
  const tool = focusRange(registry, '"name": "search_products",', '"name": "get_product_details",');
  assert.ok(schema.line > tool.line && schema.endLine === tool.endLine);
  assert.match(registry.split('\n')[schema.line - 1], /"input_schema": \{/);
});

test('focusRange leaves a lone opening bracket and a decorator to the next block', () => {
  const dict = focusRange(registry, '"name": "search_products",', '"name": "get_product_details",');
  assert.equal(registry.split('\n')[dict.endLine - 1].trim(), '},');
  const method = focusRange(backend, 'async def search_products(', 'async def get_product_details(');
  assert.match(backend.split('\n')[method.endLine - 1], /"""\s*$/);
});
