#!/usr/bin/env node
// 用法（仓库根目录）：node .claude/skills/note/scripts/check_note.mjs <笔记.md>...
// 推送前的自检，几秒出结果，不用等 CI：
//   1. 按 MDX 编译（站点把 .md 也当 MDX）：没闭合的组件、裸的 < 和 { 会在这里报出来；
//   2. 链接文字里包了行内代码，如 [`dis` 模块](...)；
//   3. 相对链接、图片指向的文件不存在，或 #锚点 对不上小标题和 id="..."。
//      CI 对坏锚点只报 WARNING、照样部署，坏锚点只有这里拦得住。
// 有问题时逐条打印“文件:行 说明”，退出码 1。
// 用到的 @mdx-js/mdx、remark-*、github-slugger 都是 Docusaurus 带进来的，新克隆的仓库先 npm ci。
import fs from 'node:fs';
import path from 'node:path';
import { compile } from '@mdx-js/mdx';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import remarkDirective from 'remark-directive';
import GithubSlugger from 'github-slugger';

const files = process.argv.slice(2);
if (!files.length) {
  console.error('用法：node .claude/skills/note/scripts/check_note.mjs <笔记.md>...');
  process.exit(2);
}

// 正文行：去掉 frontmatter 和代码围栏里的行（代码里的 [x](y)、# 注释不算链接和标题）
function bodyLines(src) {
  const lines = src.split('\n');
  const out = [];
  let i = 0;
  if (lines[0] === '---') {
    i = lines.indexOf('---', 1) + 1;
  }
  let fence = null;
  for (; i < lines.length; i++) {
    const m = lines[i].match(/^\s*(`{3,}|~{3,})/);
    if (fence) {
      if (m && m[1][0] === fence[0] && m[1].length >= fence.length) fence = null;
      continue;
    }
    if (m) {
      fence = m[1];
      continue;
    }
    out.push({ n: i + 1, text: lines[i] });
  }
  return out;
}

// 一篇笔记能被跳到的锚点：小标题（github-slugger，同名自动加 -1）、{/* #自定义 */}、id="..."，
// 以及代码围栏 meta 里的 id=xxx（plugins/remark-run-output.js 把它变成代码块的锚点）
const anchorCache = new Map();
function anchorsOf(file) {
  if (anchorCache.has(file)) return anchorCache.get(file);
  const slugger = new GithubSlugger();
  const set = new Set();
  const src = fs.readFileSync(file, 'utf8');
  for (const m of src.matchAll(/^\s*(?:`{3,}|~{3,}).*\bid=([^\s}]+)/gm)) set.add(m[1]);
  for (const { text } of bodyLines(src)) {
    const h = text.match(/^#{1,6}\s+(.*?)\s*$/);
    if (h) {
      const custom = h[1].match(/\{\/\*\s*#([^\s*]+)\s*\*\/\}\s*$|\{#([^}\s]+)\}\s*$/);
      if (custom) {
        set.add(custom[1] ?? custom[2]);
      } else {
        const plain = h[1]
          .replace(/!?\[([^\]]*)\]\([^)]*\)/g, '$1')
          .replace(/<[^>]+>/g, '')
          .replace(/[`*]/g, ''); // 下划线留着：RETURN_VALUE、os._exit 的锚点里有它
        set.add(slugger.slug(plain));
      }
    }
    for (const m of text.matchAll(/\bid=["']([^"']+)["']/g)) set.add(m[1]);
  }
  anchorCache.set(file, set);
  return set;
}

let problems = 0;
const report = (file, line, msg) => {
  problems++;
  console.log(`${file}:${line} ${msg}`);
};

for (const file of files) {
  const src = fs.readFileSync(file, 'utf8');

  // 1. MDX 编译。去掉 frontmatter，行号再加回去
  const fm = src.match(/^---\n[\s\S]*?\n---\n/);
  const offset = fm ? fm[0].split('\n').length - 1 : 0;
  try {
    await compile(fm ? src.slice(fm[0].length) : src, {
      remarkPlugins: [remarkGfm, remarkMath, remarkDirective],
    });
  } catch (e) {
    // 闭合标签类的错误不带 line 字段，位置只写在说明的括号里，如 (4:1-4:110)
    const msg = e.reason ?? e.message;
    const line = e.place?.start?.line ?? e.place?.line ?? e.line ?? Number(msg.match(/\((\d+):\d+/)?.[1] ?? 0);
    report(file, line + offset, `MDX 编译失败：${msg}`);
  }

  for (const { n, text } of bodyLines(src)) {
    // 2. 链接文字里有行内代码
    if (/\[[^\]]*`[^\]]*\]\([^)]*\)/.test(text)) {
      report(file, n, '链接文字里包了行内代码，把代码移到链接外面');
    }
    // 3. 相对链接、图片、锚点。行内代码里的 [文字](#xx) 是语法示例，先去掉再扫
    const prose = text.replace(/`[^`]*`/g, '');
    for (const m of prose.matchAll(/!?\[[^\]]*\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g)) {
      const target = m[1];
      if (/^[a-z][a-z0-9+.-]*:/i.test(target)) continue; // https:、mailto: 等
      const [rawPath, rawAnchor] = target.split('#');
      let dest = file;
      if (rawPath) {
        if (rawPath.startsWith('/')) {
          // 站内绝对路径：只核对 static/ 下的文件（/img/...），路由交给 CI
          if (!path.extname(rawPath)) continue;
          dest = path.join('static', decodeURIComponent(rawPath));
        } else {
          dest = path.join(path.dirname(file), decodeURIComponent(rawPath));
        }
        if (!fs.existsSync(dest)) {
          report(file, n, `找不到文件：${rawPath}`);
          continue;
        }
      }
      if (rawAnchor !== undefined && /\.mdx?$/.test(dest)) {
        const anchor = decodeURIComponent(rawAnchor);
        if (!anchorsOf(dest).has(anchor)) {
          report(file, n, `锚点对不上：#${anchor}（${path.basename(dest)} 里没有这个小标题或 id）`);
        }
      }
    }
  }
}

console.log(problems ? `${problems} 处问题` : `${files.length} 个文件没有问题`);
process.exit(problems ? 1 : 0);
