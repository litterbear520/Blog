// 复制 Markdown：plugins/copy-markdown-source 把每页 MDX 转成纯 Markdown（convert.mjs），
// 构建后写成同名 .md、在页面头部声明、汇总成 llms.txt（index.js）。
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { createRequire } from 'node:module';
import { toMarkdown, codeWalkthroughStep, dedent } from '../plugins/copy-markdown-source/convert.mjs';
import { importDataModule } from './data-module.mjs';

const require = createRequire(import.meta.url);
const plugin = require('../plugins/copy-markdown-source/index.js');
const ROOT = path.resolve(import.meta.dirname, '..');
const SITE = 'https://huangsitao.fun';

// 不经过构建的转换：素材给假地址，站内链接按源文件路径拼
function convert(source, { file = path.join(ROOT, 'docs/demo/page.mdx'), ...rest } = {}) {
  return toMarkdown(source, {
    file, siteDir: ROOT, siteUrl: SITE, pageUrl: `${SITE}/docs/demo/page`, title: '示例',
    resolveAsset: (abs) => `${SITE}/assets/${path.basename(abs)}`,
    pageUrlOf: (abs) => `${SITE}/${path.relative(ROOT, abs).replace(/\.mdx?$/, '')}`,
    childPages: [], loadModule: importDataModule, ...rest,
  });
}

// 去掉开头的标题和元信息，只看正文
const body = (md) => md.slice(md.indexOf('---\n') + 4).trim();

test('开头写标题、描述和原文地址；文章自己的 H1 不重复', async () => {
  const md = await convert('---\ndescription: 一句话\n---\n# 我的标题\n\n正文\n');
  assert.equal(md, `# 我的标题\n\n> 一句话\n\n- 原文：<${SITE}/docs/demo/page>\n\n---\n\n正文\n`);
  const blog = await convert('正文\n', { title: '博客标题', date: '2026-11-10' });
  assert.match(blog, /^# 博客标题\n\n- 原文：.*\n- 日期：2026-11-10\n/);
});

test('没有 frontmatter 时，正文里两条分隔线之间的内容不丢', async () => {
  const doc = '# 标题\n\n第一节\n\n---\n\n第二节\n\n---\n\n第三节\n';
  assert.equal(body(await convert(doc)), '第一节\n\n---\n\n第二节\n\n---\n\n第三节');
});

test('术语、注释、标签页、折叠块、提示块展开成文字，代码围栏里不动', async () => {
  const md = body(await convert([
    "import Tabs from '@theme/Tabs';",
    "import TabItem from '@theme/TabItem';",
    '',
    '<Term tip="解释 > 说明">LOAD_FAST</Term> 是一条指令。{/* truncate */}',
    '',
    '<Tabs>',
    '<TabItem value="en" label="English">',
    '',
    '```text',
    'hello',
    '```',
    '',
    '</TabItem>',
    '<TabItem value="zh" label="中文">',
    '',
    '你好',
    '',
    '</TabItem>',
    '</Tabs>',
    '',
    '<ReadMore id="简介" label="简介" title="视频标题">',
    '',
    '简介内容',
    '',
    '</ReadMore>',
    '',
    ':::warning[小心]',
    '',
    '别这么写：',
    '',
    '```js',
    "import x from './y';",
    '```',
    '',
    ':::',
    '',
    '```jsx',
    '<Term tip="x">y</Term>',
    '```',
  ].join('\n')));
  assert.equal(md, [
    'LOAD_FAST 是一条指令。',
    '',
    '**English**',
    '',
    '```text',
    'hello',
    '```',
    '',
    '**中文**',
    '',
    '你好',
    '',
    '**视频标题**',
    '',
    '简介内容',
    '',
    '> **小心**',
    '>',
    '> 别这么写：',
    '>',
    '> ```js',
    "> import x from './y';",
    '> ```',
    '',
    '```jsx',
    '<Term tip="x">y</Term>',
    '```',
  ].join('\n'));
});

test('代码围栏去掉站内标记，output 写成“输出：”', async () => {
  const md = body(await convert([
    '```python run title="a.py" id=demo {1}',
    "print('hi')",
    '```',
    '',
    '```output exit=1 {1}',
    'hi',
    '```',
    '',
    '```output hang',
    '...',
    '```',
    '',
    '```output empty',
    '```',
  ].join('\n')));
  assert.equal(md, [
    '`a.py`：', '', '```python', "print('hi')", '```', '',
    '输出（退出码 1）：', '', '```text', 'hi', '```', '',
    '输出（程序不会自己退出，按 Ctrl+C 结束）：', '', '```text', '...', '```', '',
    '运行后没有输出。',
  ].join('\n'));
});

test('图片、视频、站内链接换成绝对地址', async () => {
  const md = body(await convert([
    "import clip from './clip.mp4';",
    '',
    '看[另一篇](./other.md#小节)和[博客](/blog/fold-subagents)，![图](./img/a.png)。',
    '',
    '<VideoFigure src={clip} fig="A" label="画面描述">',
    '图注文字',
    '</VideoFigure>',
  ].join('\n')));
  assert.equal(md, [
    `看[另一篇](${SITE}/docs/demo/other.md#小节)和[博客](${SITE}/blog/fold-subagents.md)，![图](${SITE}/assets/a.png)。`,
    '',
    `[视频：图 A：图注文字](${SITE}/assets/clip.mp4) — 画面描述`,
  ].join('\n'));
});

test('快速检查和测验写出选项、答案和解释', async () => {
  const md = body(await convert(`<QuickCheck
  question="哪个对？"
  options={[
    { text: '甲', explain: '不对，因为……' },
    { text: '乙', correct: true, explain: '对。' },
  ]}
/>`));
  assert.equal(md, '**快速检查：** 哪个对？\n\n- A. 甲\n- B. 乙\n\n答案：B\n\n- A：不对，因为……\n- B：对。');
});

test('CodeWalkthrough：累积到这一步的代码、命令和输出都写出来', () => {
  const steps = [
    { title: '第一版', body: ['先写一行。'], file: 'main.py', files: { 'main.py': 'a = 1\n', 'old.py': 'x\n' },
      runs: [{ cmd: 'python main.py', exit: 0, output: '' }] },
    { title: '再加一行', body: [], file: 'main.py', files: { 'main.py': 'a = 1\nprint(a)\n', 'old.py': null },
      lines: [[2, 2]], runs: [{ cmd: 'python main.py', exit: 0, output: '1\n' }] },
    { title: '回头看第一行', body: ['讲解。'], file: 'main.py', lines: [[1, 1]] },
  ];
  assert.equal(codeWalkthroughStep(steps, 2), [
    '**第 2 步 · 再加一行**', '`main.py`（重点看第 2 行）：', '```python\na = 1\nprint(a)\n```',
    '```bash\npython main.py\n```', '输出：', '```text\n1\n```',
  ].join('\n\n'));
  // 代码没变、只换个位置讲的步骤只摘那几行
  assert.equal(codeWalkthroughStep(steps, 3), ['**第 3 步 · 回头看第一行**', '讲解。', '`main.py` 第 1 行：', '```python\na = 1\n```'].join('\n\n'));
});

test('dedent 去掉组件内容的共同缩进', () => {
  assert.equal(dedent('\n    第一行\n      缩进\n    第二行\n  '), '第一行\n  缩进\n第二行');
});

// 全站每一页都能转换：不报错，正文外不留组件标签、提示块记号和相对路径的素材
test('docs、博客、路线的每一页都能转换干净', async () => {
  const files = [];
  const walk = (dir) => {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) walk(p);
      else if (/\.mdx?$/.test(e.name)) files.push(p);
    }
  };
  ['docs', 'blog', 'roadmap'].forEach((d) => walk(path.join(ROOT, d)));
  const problems = [];
  for (const file of files) {
    const rel = path.relative(ROOT, file);
    let md;
    try {
      md = await convert(fs.readFileSync(file, 'utf8'), { file });
    } catch (e) {
      problems.push(`${rel}：${e.message}`);
      continue;
    }
    const prose = md.replace(/(`{3,}|~{3,})[^\n]*\n[\s\S]*?\n\1/g, '').replace(/`[^`\n]+`/g, '');
    for (const [what, re] of [['组件标签', /<(?!TAILSCALE)[A-Z][A-Za-z]*[\s/>]/], ['提示块记号', /^:::/m], ['import', /^import\s/m], ['相对路径的素材', /!\[[^\]]*\]\(\.\.?\//]]) {
      if (re.test(prose)) problems.push(`${rel}：正文里还有${what}`);
    }
  }
  assert.deepEqual(problems, []);
});

test('postBuild：写出 .md、在页面头部声明、生成 llms.txt', async () => {
  const out = fs.mkdtempSync(path.join(os.tmpdir(), 'copy-md-'));
  const blogFile = 'blog/which-claude-model/index.mdx';
  const docFile = 'docs/python/描述器.mdx';
  const page = (dir, assets = '') => {
    fs.mkdirSync(path.join(out, dir), { recursive: true });
    fs.writeFileSync(path.join(out, dir, 'index.html'), `<html><head><title>t</title></head><body>${assets}</body></html>`);
  };
  page('blog/which-claude-model', '<source src="/assets/medias/fig-a-alley-312565c1b4.mp4">');
  page('docs/python/描述器');
  const plugins = [
    { name: 'docusaurus-plugin-content-docs', options: { id: 'default' }, content: { loadedVersions: [{ docs: [
      { source: `@site/${docFile}`, permalink: '/docs/python/描述器', title: '描述器', frontMatter: {} },
    ] }] } },
    { name: 'docusaurus-plugin-content-blog', options: {}, content: { blogPosts: [
      { metadata: { source: `@site/${blogFile}`, permalink: '/blog/which-claude-model', title: '该用哪个 Claude 模型',
        date: new Date('2026-11-10T00:00:00Z'), frontMatter: { description: '模型选择' } } },
    ] } },
  ];
  const instance = plugin({ siteDir: ROOT, siteConfig: { url: SITE, title: '小熊的博客', tagline: '专注于学习、开发和分享' } });
  const log = console.log;
  console.log = () => {};
  try {
    await instance.postBuild({ outDir: out, plugins });
  } finally {
    console.log = log;
  }

  const blogMd = fs.readFileSync(path.join(out, 'blog/which-claude-model.md'), 'utf8');
  assert.match(blogMd, /^# 该用哪个 Claude 模型\n\n> 模型选择\n\n- 原文：<https:\/\/huangsitao\.fun\/blog\/which-claude-model>\n- 日期：2026-11-10\n/);
  assert.match(blogMd, /\[视频：图 A：同一张小巷照片[^\]]*\]\(https:\/\/huangsitao\.fun\/assets\/medias\/fig-a-alley-312565c1b4\.mp4\)/);
  // 页面里没有构建地址的视频退回仓库里的原文件
  assert.match(blogMd, /\]\(https:\/\/github\.com\/litterbear520\/Blog\/raw\/main\/blog\/which-claude-model\/fig-b-portfolio\.mp4\)/);

  const docMd = fs.readFileSync(path.join(out, 'docs/python/描述器.md'), 'utf8');
  assert.match(docMd, /\*\*第 1 步 · 打印 o\.name\*\*/);
  assert.match(docMd, /```python\nclass Name:/);

  const html = fs.readFileSync(path.join(out, 'blog/which-claude-model/index.html'), 'utf8');
  assert.match(html, /<link rel="alternate" type="text\/markdown" href="https:\/\/huangsitao\.fun\/blog\/which-claude-model\.md"><\/head>/);

  const llms = fs.readFileSync(path.join(out, 'llms.txt'), 'utf8');
  assert.match(llms, /^# 小熊的博客\n/);
  assert.match(llms, /## 博客\n\n- \[该用哪个 Claude 模型\]\(https:\/\/huangsitao\.fun\/blog\/which-claude-model\.md\): 模型选择/);
  assert.match(llms, /## 笔记\n\n- \[描述器\]\(https:\/\/huangsitao\.fun\/docs\/python\/描述器\.md\)/);
  fs.rmSync(out, { recursive: true, force: true });
});
