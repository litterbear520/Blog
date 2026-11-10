// tools/data-module.mjs：演练浏览器测试靠它在 Node 里导入 src/data/ 下的数据文件
import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { headerEnd, importDataModule } from './data-module.mjs';

const repo = resolve(import.meta.dirname, '..');

test('现有的演练数据都能导入', async () => {
  for (const name of ['notifications', 'roots', 'sampling']) {
    const data = (await importDataModule(join(repo, 'src/data/mcpWalkthroughs', `${name}.js`))).default;
    assert.ok(Array.isArray(data.steps) && data.steps.length > 0, name);
  }
});

test('相对引用不写扩展名也能逐层导入，正文里的 import 字符串原样保留', async () => {
  const dir = mkdtempSync(join(tmpdir(), 'data-module-'));
  mkdirSync(join(dir, 'lib'));
  writeFileSync(join(dir, 'lib', 'index.js'), "export const step = (n) => n * 2;\n");
  writeFileSync(join(dir, 'files.js'), "import { step } from './lib';\nexport default { 'a.ts': `import x from './y';\\n${step(1)}` };\n");
  writeFileSync(join(dir, 'lesson.js'), [
    '// 演练数据',
    "import files from './files';",
    'import {',
    '  step,',
    "} from './lib/index.js';",
    "export { step } from './lib';",
    '',
    "const note = \"import z from './not-a-file'\";",
    'export default { files, note, two: step(1) };',
    '',
  ].join('\n'));
  const data = (await importDataModule(join(dir, 'lesson.js'))).default;
  assert.equal(data.two, 2);
  assert.equal(data.files['a.ts'], "import x from './y';\n2");
  assert.equal(data.note, "import z from './not-a-file'");
});

test('导入区到第一行别的代码为止', () => {
  const text = "/* 说明\n跨行 */\nimport a from './a';\n\nconst b = \"import c from './c'\";\n";
  assert.equal(text.slice(headerEnd(text)), "const b = \"import c from './c'\";\n");
});

test('不带 from 的本地导出不会把正文吞进导入区', () => {
  for (const exp of ['export { a };', 'export {\n  a,\n};']) {
    const text = `import a from './a';\n${exp}\nconst b = "import c from './c'";\n`;
    assert.equal(text.slice(headerEnd(text)), "const b = \"import c from './c'\";\n", exp);
  }
});

test('引用的文件不存在时说清是哪个', async () => {
  const dir = mkdtempSync(join(tmpdir(), 'data-module-'));
  writeFileSync(join(dir, 'lesson.js'), "import x from './missing';\nexport default x;\n");
  await assert.rejects(importDataModule(join(dir, 'lesson.js')), /引用的 \.\/missing 找不到/);
});
