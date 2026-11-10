// 两个构建插件的单测：复制 Markdown 的清洗、代码运行输出的围栏标记；
// 外加一遍全站扫描，保证每个 run 围栏后面都跟着 output 围栏。
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import remarkRunOutput, { parseStatus, parseHighlight, hasRunFlag } from '../plugins/remark-run-output.js';

const require = createRequire(import.meta.url);
const { cleanMarkdown } = require('../plugins/copy-markdown-source/index.js');
const ROOT = path.resolve(import.meta.dirname, '..');

test('frontmatter 只删文件开头那一段', () => {
  assert.equal(cleanMarkdown('---\nsidebar_position: 1\n---\n\n# 标题\n\n正文\n'), '# 标题\n\n正文\n');
  // 没有 frontmatter 的文档：两条分隔线之间的正文要留着
  const doc = '# 标题\n\n第一节\n\n---\n\n第二节\n\n---\n\n第三节\n';
  assert.equal(cleanMarkdown(doc), doc);
});

test('清洗 MDX 组件，代码围栏里的不动', () => {
  const doc = [
    "import Tabs from '@theme/Tabs';",
    '',
    '<Term tip="解释 > 说明">LOAD_FAST</Term> 是一条指令。{/* truncate */}',
    '',
    '<ReadMore id="简介" label="简介" title="视频标题">',
    '',
    '简介内容',
    '',
    '</ReadMore>',
    '',
    '```jsx',
    "import Tabs from '@theme/Tabs';",
    '<Term tip="x">y</Term>',
    '---',
    '```',
    '',
  ].join('\n');
  assert.equal(cleanMarkdown(doc), [
    'LOAD_FAST 是一条指令。',
    '',
    '**视频标题**',
    '',
    '简介内容',
    '',
    '```jsx',
    "import Tabs from '@theme/Tabs';",
    '<Term tip="x">y</Term>',
    '---',
    '```',
    '',
  ].join('\n'));
});

test('output 围栏的进程状态', () => {
  assert.equal(parseStatus(''), 'exit:0');
  assert.equal(parseStatus('exit=1 {2}'), 'exit:1');
  assert.equal(parseStatus('hang'), 'hang');
  assert.equal(parseStatus('hang {3,7-9}'), 'hang');
  assert.equal(parseStatus('{2} empty id=foo'), 'empty');
  assert.equal(parseStatus('title="exit=2 demo"'), 'exit:0');
  assert.equal(parseHighlight('exit=0 {3,7-9}'), '3,7,8,9');
  assert.equal(parseHighlight('exit=0'), undefined);
});

test('run 标记不会被 title 里的字误触发', () => {
  assert.equal(hasRunFlag('run'), true);
  assert.equal(hasRunFlag('title="a.py" run id=x {1-3}'), true);
  assert.equal(hasRunFlag('title="npm run build"'), false);
  assert.equal(hasRunFlag('showLineNumbers'), false);
});

test('run 围栏和后面的 output 围栏合并', () => {
  const tree = { type: 'root', children: [
    { type: 'code', lang: 'python', meta: 'run', value: 'print(1)' },
    { type: 'code', lang: 'output', meta: 'exit=1 {1}', value: '1' },
    { type: 'paragraph', children: [] },
  ] };
  remarkRunOutput()(tree);
  assert.equal(tree.children.length, 2);
  assert.deepEqual(tree.children[0].data.hProperties, {
    'data-output': '1', 'data-output-status': 'exit:1', 'data-output-highlight': '1',
  });
});

// 配对失败时构建不会报错：页面上少一个 ▷ 按钮，多一个叫 output 的普通代码块。在这里拦住。
test('全站每个 run 围栏后面都紧跟 output 围栏，没有落单的 output', () => {
  const files = [];
  const walk = (dir) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (/\.mdx?$/.test(entry.name)) files.push(full);
    }
  };
  ['docs', 'blog', 'roadmap'].forEach((dir) => walk(path.join(ROOT, dir)));

  const problems = [];
  for (const file of files) {
    const lines = fs.readFileSync(file, 'utf8').split('\n');
    const fences = []; // { lang, meta, line, endLine }
    let open = null;
    lines.forEach((line, i) => {
      const mark = line.match(/^(\s*)(`{3,}|~{3,})(.*)$/);
      if (!mark) return;
      if (open) {
        if (mark[2][0] === open.mark[0] && mark[2].length >= open.mark.length && !mark[3].trim()) {
          fences.push({ ...open, endLine: i });
          open = null;
        }
        return;
      }
      const [lang = '', ...meta] = mark[3].trim().split(/\s+/);
      open = { mark: mark[2], indent: mark[1].length, lang, meta: meta.join(' '), line: i };
    });
    const rel = path.relative(ROOT, file);
    fences.forEach((fence, k) => {
      // 写在四个反引号示例里的围栏（讲怎么写 run 的文档）已经被外层围栏吃掉，不会出现在这里
      const next = fences[k + 1];
      const between = next ? lines.slice(fence.endLine + 1, next.line).join('').trim() : 'x';
      const paired = next && next.lang === 'output' && between === '' && next.indent === fence.indent;
      if (hasRunFlag(fence.meta) && fence.lang !== 'output' && !paired) problems.push(`${rel}:${fence.line + 1} run 围栏后面没有紧跟 output 围栏`);
      if (fence.lang === 'output') {
        const prev = fences[k - 1];
        const gap = prev ? lines.slice(prev.endLine + 1, fence.line).join('').trim() : 'x';
        if (!(prev && hasRunFlag(prev.meta) && gap === '')) problems.push(`${rel}:${fence.line + 1} output 围栏前面没有 run 围栏`);
      }
    });
  }
  assert.deepEqual(problems, []);
});
