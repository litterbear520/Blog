import assert from 'node:assert/strict';
import { test } from 'node:test';
import { isContentPath, needsBrowser } from './ci-scope.mjs';

const ahead = (...filenames) => ({ status: 'ahead', files: filenames.map((filename) => ({ filename })) });

test('只改文章、图片、封面和说明文档时不需要浏览器', () => {
  assert.equal(needsBrowser(ahead(
    'blog/evaluating-voice-agents/index.md',
    'docs/服务器/image/a.png',
    'roadmap/前言/index.md',
    'static/img/blog/cover-evaluating-voice-agents.svg',
    'tools/covers/recipes/evaluating-voice-agents.js',
    'tools/covers/README.md',
    'src/pages/bloglist.js',
    'AGENTS.md',
  )), false);
});

test('改到代码、样式、配置、依赖或 CI 时需要浏览器', () => {
  for (const path of [
    'src/css/custom.css',
    'src/theme/MDXComponents/index.js',
    'src/components/ProjectCodeViewer/index.js',
    'src/data/mcpWalkthroughs/roots.js',
    'static/CNAME',
    'docusaurus.config.js',
    'package-lock.json',
    'plugins/remark-run-output.js',
    'tools/walkthrough-browser.mjs',
    '.github/workflows/update.yaml',
  ]) {
    assert.equal(needsBrowser(ahead('blog/a/index.md', path)), true, path);
  }
});

test('演练页本身不算内容，哪怕放在 docs 下', () => {
  assert.equal(isContentPath('docs/MCP/Model Context Protocol：高级主题/核心 MCP 功能/roots-walkthrough.mdx'), false);
});

test('改名时旧路径是代码也需要浏览器', () => {
  assert.equal(needsBrowser({
    status: 'ahead',
    files: [{ filename: 'blog/a/util.md', previous_filename: 'src/theme/util.md' }],
  }), true);
});

test('判断不了时一律走全量', () => {
  assert.equal(needsBrowser(undefined), true);
  assert.equal(needsBrowser({ status: 'diverged', files: [{ filename: 'blog/a/index.md' }] }), true);
  assert.equal(needsBrowser({ status: 'identical', files: [] }), true);
  assert.equal(needsBrowser({ status: 'ahead', files: [] }), true);
  assert.equal(needsBrowser({ status: 'ahead' }), true);
  const truncated = Array.from({ length: 300 }, (_, i) => `blog/${i}/index.md`);
  assert.equal(needsBrowser(ahead(...truncated)), true);
});
