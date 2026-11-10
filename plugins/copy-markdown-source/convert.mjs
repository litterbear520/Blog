// 把一篇 MDX 源文件转成给人和模型读的纯 Markdown，“复制 Markdown”按钮和每页的 .md 都用它。
//
// 照 claude.dev、platform.claude.com、code.claude.com 的做法：
// - 开头写标题、原文地址（博客加日期），正文里的交互组件全部展开成文字，代码一个不丢；
// - 标签页每个标签的内容都写出来，前面标上标签名；提示块变成 > **标题** 引用；
// - 视频写成 [视频：图注](视频地址)，图片、站内链接换成绝对地址，站内页面指向它的 .md。
// 演练、测验、图示的内容在 src/data/ 里，按组件参数读出来展开，见下面的 RENDERERS。
//
// 只依赖 Node 自带模块，不需要 MDX 解析器：按行扫描，代码围栏原样保留，
// 行首的 <组件 …> 按括号和引号配对找到整个元素，参数里的 {表达式} 在 import 进来的名字上求值。
import path from 'node:path';

const FENCE = /^(\s*)(`{3,}|~{3,})(.*)$/;
const ADMONITION_LABELS = { note: '备注', tip: '提示', info: '信息', important: '重要', warning: '注意', caution: '注意', danger: '危险' };

// ── 文本工具 ─────────────────────────────────────────────

// 去掉一段文字共同的缩进：组件里的内容常缩进两格，不去掉的话四格以上会变成代码块
export function dedent(text) {
  const lines = text.replace(/^\n+|\s+$/g, '').split('\n');
  const indents = lines.filter((l) => l.trim()).map((l) => l.match(/^ */)[0].length);
  const cut = indents.length ? Math.min(...indents) : 0;
  return lines.map((l) => l.slice(cut)).join('\n');
}

const fenceOf = (code, lang = '') => {
  // 代码里自己带三个反引号时，外层围栏多加一个
  const longest = Math.max(2, ...[...code.matchAll(/`{3,}/g)].map((m) => m[0].length));
  const fence = '`'.repeat(longest + 1);
  return `${fence}${lang}\n${code.replace(/\n$/, '')}\n${fence}`;
};

const LANGS = { py: 'python', js: 'javascript', mjs: 'javascript', ts: 'typescript', tsx: 'tsx', jsx: 'jsx', json: 'json', sh: 'bash', md: 'markdown', yaml: 'yaml', yml: 'yaml', toml: 'toml', html: 'html', css: 'css', c: 'c', h: 'c', go: 'go', rs: 'rust', java: 'java' };
const langOf = (file) => LANGS[path.extname(file || '').slice(1).toLowerCase()] || '';

// JSX 写成的一小段（卡片标题里的 <a href>…</a>）转成 Markdown
function jsxToText(src) {
  return src
    .replace(/<a\s[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/g, '[$2]($1)')
    .replace(/<(strong|b)>([\s\S]*?)<\/\1>/g, '**$2**')
    .replace(/<code>([\s\S]*?)<\/code>/g, '`$1`')
    .replace(/<[^>]+>/g, '')
    .trim();
}

// ── JSX 元素解析 ─────────────────────────────────────────

// 从 text[start]（一个 '<'）开始读开始标签，返回 { name, attrs, selfClosing, end }，end 是 '>' 后一位。
// 参数值里的引号、{…} 和模板字符串都配对跳过，所以多行的数组、对象参数也能读完整
export function readOpenTag(text, start) {
  const m = /^<([A-Za-z][\w.]*)/.exec(text.slice(start));
  if (!m) return null;
  const name = m[1];
  let i = start + m[0].length;
  const attrs = {};
  while (i < text.length) {
    while (/\s/.test(text[i])) i++;
    if (text[i] === '/' && text[i + 1] === '>') return { name, attrs, selfClosing: true, end: i + 2 };
    if (text[i] === '>') return { name, attrs, selfClosing: false, end: i + 1 };
    const key = /^[\w:.-]+/.exec(text.slice(i));
    if (!key) throw new Error(`读不懂 <${name}> 的参数：${text.slice(i, i + 40)}`);
    i += key[0].length;
    while (/\s/.test(text[i])) i++;
    if (text[i] !== '=') {
      attrs[key[0]] = { kind: 'bool' };
      continue;
    }
    i++;
    while (/\s/.test(text[i])) i++;
    if (text[i] === '"' || text[i] === "'") {
      const q = text[i];
      const close = text.indexOf(q, i + 1);
      attrs[key[0]] = { kind: 'string', value: text.slice(i + 1, close) };
      i = close + 1;
    } else if (text[i] === '{') {
      const close = matchBrace(text, i);
      attrs[key[0]] = { kind: 'expr', value: text.slice(i + 1, close) };
      i = close + 1;
    } else {
      throw new Error(`读不懂 <${name}> 的参数 ${key[0]}`);
    }
  }
  throw new Error(`<${name}> 的开始标签没有结束`);
}

// text[open] 是 '{'，返回配对的 '}' 位置；跳过字符串、模板字符串（含 ${…}）和注释
function matchBrace(text, open) {
  let depth = 0;
  for (let i = open; i < text.length; i++) {
    const c = text[i];
    if (c === '"' || c === "'") {
      i = skipString(text, i, c);
    } else if (c === '`') {
      i = skipTemplate(text, i);
    } else if (c === '/' && text[i + 1] === '*') {
      i = text.indexOf('*/', i + 2) + 1;
    } else if (c === '/' && text[i + 1] === '/') {
      i = text.indexOf('\n', i);
    } else if (c === '{') {
      depth++;
    } else if (c === '}') {
      depth--;
      if (depth === 0) return i;
    }
  }
  throw new Error('花括号没有配对');
}

function skipString(text, i, q) {
  for (i++; i < text.length; i++) {
    if (text[i] === '\\') i++;
    else if (text[i] === q) return i;
  }
  return i;
}

function skipTemplate(text, i) {
  for (i++; i < text.length; i++) {
    if (text[i] === '\\') i++;
    else if (text[i] === '`') return i;
    else if (text[i] === '$' && text[i + 1] === '{') i = matchBrace(text, i + 1);
  }
  return i;
}

// 开始标签之后找配对的 </Name>，同名元素嵌套时按层数配对
function findClose(text, name, from) {
  const re = new RegExp(`<${name}(?=[\\s/>])|</${name}\\s*>`, 'g');
  re.lastIndex = from;
  let depth = 1;
  for (let m; (m = re.exec(text));) {
    if (m[0].startsWith('</')) {
      depth--;
      if (depth === 0) return { start: m.index, end: m.index + m[0].length };
    } else {
      const tag = readOpenTag(text, m.index);
      if (!tag.selfClosing) depth++;
      re.lastIndex = tag.end;
    }
  }
  throw new Error(`<${name}> 没有闭合`);
}

// ── 主流程 ───────────────────────────────────────────────

// ctx：
//   file           源文件绝对路径
//   siteDir        仓库根目录
//   siteUrl        站点地址，如 https://huangsitao.fun
//   pageUrl        这一页的完整地址
//   title          页面标题；date 博客日期（YYYY-MM-DD）；description 前言里写明的一句话描述
//   resolveAsset(absFile)   正文引用的图片、视频 → 构建后的完整地址，找不到返回 null
//   pageUrlOf(absFile)      站内另一篇源文件 → 它的页面地址，找不到返回 null
//   childPages     DocCardList 要列出的下级页面 [{ title, url, description }]
//   loadModule(absFile)     导入 src/data/ 下的数据文件（tools/data-module.mjs）
export async function toMarkdown(source, ctx) {
  const { body, frontMatter } = splitFrontMatter(source);
  const scope = await importScope(body, ctx);
  const converted = await convertBlock(stripMdxComments(body), { ...ctx, scope });
  const md = tidy(converted);
  return withHeader(md, { ...ctx, frontMatter });
}

export function splitFrontMatter(source) {
  const m = /^﻿?---\r?\n([\s\S]*?)\r?\n---[ \t]*(?:\r?\n|$)/.exec(source);
  if (!m) return { body: source, frontMatter: {} };
  const frontMatter = {};
  for (const line of m[1].split('\n')) {
    const kv = /^([\w-]+):\s*(.*)$/.exec(line);
    if (kv) frontMatter[kv[1]] = kv[2].replace(/^(['"])(.*)\1$/, '$2');
  }
  return { body: source.slice(m[0].length), frontMatter };
}

// {/* … */} 注释（含 truncate 标记）在围栏外面才删
function stripMdxComments(body) {
  return mapProse(body, (text) => text.replace(/\{\/\*[\s\S]*?\*\/\}/g, ''));
}

// 只对代码围栏外面的文字做 fn，围栏里原样保留
function mapProse(text, fn) {
  const out = [];
  let prose = [];
  let fence = null;
  for (const line of text.split('\n')) {
    const m = FENCE.exec(line);
    if (fence) {
      out.push(line);
      if (m && m[2][0] === fence[0] && m[2].length >= fence.length && !m[3].trim()) fence = null;
    } else if (m) {
      out.push(fn(prose.join('\n')));
      prose = [];
      fence = m[2];
      out.push(line);
    } else {
      prose.push(line);
    }
  }
  out.push(fn(prose.join('\n')));
  return out.join('\n');
}

// 代码围栏里的行换成空行，只留正文：代码示例里的 import 不算
function proseOnly(text) {
  let fence = null;
  return text.split('\n').map((line) => {
    const m = FENCE.exec(line);
    if (fence) {
      if (m && m[2][0] === fence[0] && m[2].length >= fence.length && !m[3].trim()) fence = null;
      return '';
    }
    if (m) { fence = m[2]; return ''; }
    return line;
  }).join('\n');
}

// 照 webpack 的写法补扩展名
async function findFile(abs) {
  const { existsSync, statSync } = await import('node:fs');
  for (const c of [abs, `${abs}.js`, `${abs}.mjs`, path.join(abs, 'index.js')]) {
    if (existsSync(c) && statSync(c).isFile()) return c;
  }
  throw new Error(`找不到 ${abs}`);
}

// import 进来的名字：相对路径的素材 → 构建后的地址；@site/ 和相对路径的 .js → 模块内容
async function importScope(body, ctx) {
  const scope = {};
  const imports = proseOnly(body).match(/^import\s+[\s\S]*?from\s+['"][^'"]+['"];?\s*$/gm) || [];
  for (const stmt of imports) {
    const [, clause, spec] = /^import\s+([\s\S]*?)\s+from\s+['"]([^'"]+)['"]/.exec(stmt);
    if (/^@(theme|docusaurus)\//.test(spec) || /\/components\//.test(spec)) continue;
    const abs = spec.startsWith('@site/') ? path.join(ctx.siteDir, spec.slice(6)) : path.resolve(path.dirname(ctx.file), spec);
    if (/\.(png|jpe?g|gif|webp|svg|mp4|webm|mov|pdf|zip)$/i.test(spec)) {
      const name = clause.trim();
      scope[name] = ctx.resolveAsset(abs) ?? spec;
      continue;
    }
    const mod = await ctx.loadModule(await findFile(abs));
    const def = /^(\w+)/.exec(clause);
    if (def && !clause.trim().startsWith('{')) scope[def[1]] = mod.default;
    for (const [, inner] of clause.matchAll(/\{([^}]*)\}/g)) {
      for (const part of inner.split(',').map((s) => s.trim()).filter(Boolean)) {
        const [orig, alias = orig] = part.split(/\s+as\s+/);
        scope[alias] = mod[orig];
      }
    }
  }
  return scope;
}

function evalExpr(expr, scope) {
  const src = expr.trim();
  if (src.startsWith('<')) return { jsx: src };
  const names = Object.keys(scope);
  // 内容是仓库自己的源文件，参数多是数组、对象字面量和 import 进来的名字
  // eslint-disable-next-line no-new-func
  return new Function(...names, `return (${src});`)(...names.map((n) => scope[n]));
}

function attrValue(attr, scope) {
  if (!attr) return undefined;
  if (attr.kind === 'bool') return true;
  if (attr.kind === 'string') return attr.value;
  return evalExpr(attr.value, scope);
}

const textOf = (value) => (value && typeof value === 'object' && 'jsx' in value ? jsxToText(value.jsx) : value);

async function convertBlock(text, ctx) {
  const out = [];
  const lines = text.split('\n');
  // 每行在原文里的起始位置，组件可能跨好几行，读完以后跳到它结束的那一行
  const starts = [];
  lines.reduce((pos, line) => (starts.push(pos), pos + line.length + 1), 0);
  const lineAt = (pos) => {
    let lo = 0;
    while (lo < starts.length - 1 && starts[lo + 1] <= pos) lo++;
    return lo;
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const fence = FENCE.exec(line);
    if (fence) {
      let j = i + 1;
      while (j < lines.length) {
        const m = FENCE.exec(lines[j]);
        if (m && m[2][0] === fence[2][0] && m[2].length >= fence[2].length && !m[3].trim()) break;
        j++;
      }
      out.push(renderFence(lines.slice(i, j + 1), ctx));
      i = j;
      continue;
    }
    const t = line.trim();
    if (/^import\s/.test(t)) {
      // 多行 import 读到 from '…' 那一行
      while (i < lines.length && !/from\s+['"][^'"]+['"]/.test(lines[i]) && !/^import\s+['"]/.test(lines[i].trim())) i++;
      continue;
    }
    if (/^export\s+(const|default|function)\b/.test(t)) continue;
    const adm = /^:::(\w+)(?:\[(.*)\])?\s*$/.exec(t);
    if (adm) {
      // 找配对的 :::，中间的代码围栏原样带上
      let j = i + 1;
      let depth = 1;
      let inFence = null;
      for (; j < lines.length; j++) {
        const m = FENCE.exec(lines[j]);
        if (inFence) {
          if (m && m[2][0] === inFence[0] && m[2].length >= inFence.length && !m[3].trim()) inFence = null;
          continue;
        }
        if (m) { inFence = m[2]; continue; }
        if (/^:::\w/.test(lines[j].trim())) depth++;
        else if (lines[j].trim() === ':::' && --depth === 0) break;
      }
      const inner = await convertBlock(lines.slice(i + 1, j).join('\n'), ctx);
      const label = adm[2] || ADMONITION_LABELS[adm[1]] || adm[1];
      out.push(['', `**${label}**`, '', ...tidy(inner).split('\n')].map((l) => (l ? `> ${l}` : '>')).join('\n').replace(/^>\n/, ''));
      i = j;
      continue;
    }
    // 行首的 <Term> 是一句话的开头，按行内处理
    if (/^<[A-Z]/.test(t) && !/^<Term\b/.test(t)) {
      const at = starts[i] + line.indexOf('<');
      const tag = readOpenTag(text, at);
      let children = '';
      let end = tag.end;
      if (!tag.selfClosing) {
        const close = findClose(text, tag.name, tag.end);
        children = text.slice(tag.end, close.start);
        end = close.end;
      }
      // 块级组件前后留空行，免得和相邻的段落、代码块粘在一起；多出的空行最后由 tidy 合并
      out.push('', await renderComponent(tag, children, ctx), '');
      i = lineAt(end - 1);
      // 结束标签后面同一行还有文字时接着输出
      const rest = text.slice(end, starts[i] + lines[i].length);
      if (rest.trim()) out.push(inline(rest, ctx));
      continue;
    }
    out.push(inline(line, ctx));
  }
  return out.join('\n');
}

// 代码围栏：去掉 run、id=、{1-3}、title= 这些站内标记；output 围栏写成“输出：”加 text 代码块
function renderFence(block, ctx) {
  const [, indent, mark, meta] = FENCE.exec(block[0]);
  const words = meta.trim();
  const lang = words.split(/\s+/)[0] || '';
  const title = /title=["']([^"']+)["']/.exec(words)?.[1];
  const body = block.slice(1, -1);
  if (lang === 'output') {
    const status = words.slice(6);
    const exit = /exit=(\d+)/.exec(status)?.[1];
    if (/(^|\s)empty(\s|$)/.test(status)) return `${indent}运行后没有输出。`;
    const label = /(^|\s)hang(\s|$)/.test(status) ? '输出（程序不会自己退出，按 Ctrl+C 结束）：'
      : exit && exit !== '0' ? `输出（退出码 ${exit}）：` : '输出：';
    return [`${indent}${label}`, '', `${indent}${mark}text`, ...body, `${indent}${mark}`].join('\n');
  }
  // 四个反引号包起来的是“怎么写”的示例，里面的标记原样保留
  if (mark.length > 3) return block.join('\n');
  const head = `${indent}${mark}${lang}`;
  return [...(title ? [`${indent}\`${title}\`：`, ''] : []), head, ...body, block[block.length - 1]].join('\n');
}

// 行内：术语、高亮、样式标签只留文字；图片、链接换成绝对地址；去掉标题的 {#自定义锚点}
function inline(line, ctx) {
  let s = line
    .replace(/<Term\s+tip=(?:"[^"]*"|'[^']*'|\{[^}]*\})\s*>([\s\S]*?)<\/Term>/g, '$1')
    .replace(/<(mark|span|u|small)\b[^>]*>([\s\S]*?)<\/\1>/g, '$2')
    .replace(/<(strong|b)>([\s\S]*?)<\/\1>/g, '**$2**')
    .replace(/<br\s*\/?>/g, '<br>')
    .replace(/\s+(style|className)=\{\{?[^}]*\}?\}/g, '')
    .replace(/^(#{1,6}\s.*?)\s*\{#[^}]+\}\s*$/, '$1');
  s = s.replace(/(!?)\[([^\]]*)\]\(([^)\s]+)((?:\s+"[^"]*")?)\)/g, (all, bang, label, href, title) => {
    const url = bang ? assetUrl(href, ctx) : linkUrl(href, ctx);
    return `${bang}[${label}](${url}${title})`;
  });
  return s;
}

function assetUrl(href, ctx) {
  if (/^[a-z][a-z0-9+.-]*:/i.test(href) || href.startsWith('#')) return href;
  if (href.startsWith('/')) return ctx.siteUrl + href;
  const abs = path.resolve(path.dirname(ctx.file), decodeURIComponent(href));
  return ctx.resolveAsset(abs) ?? href;
}

function linkUrl(href, ctx) {
  if (/^[a-z][a-z0-9+.-]*:/i.test(href)) return href;
  if (href.startsWith('#')) return ctx.pageUrl + href;
  const [p, hash] = href.split('#');
  const anchor = hash ? `#${hash}` : '';
  if (href.startsWith('/')) {
    // 站内页面指向它的 .md；static 下的文件（带扩展名）直接给地址
    if (/^\/(docs|blog|roadmap)(\/|$)/.test(p) && !path.extname(p)) return `${ctx.siteUrl}${p.replace(/\/$/, '')}.md${anchor}`;
    return ctx.siteUrl + href;
  }
  const abs = path.resolve(path.dirname(ctx.file), decodeURIComponent(p));
  if (/\.mdx?$/.test(p)) {
    const url = ctx.pageUrlOf(abs);
    return url ? `${url}.md${anchor}` : href;
  }
  return ctx.resolveAsset(abs) ?? href;
}

async function renderComponent(tag, children, ctx) {
  const render = RENDERERS[tag.name];
  const props = {};
  for (const [k, a] of Object.entries(tag.attrs)) {
    if (k === 'children') continue;
    props[k] = a.kind === 'expr' && tag.name === 'BrowserOnly' ? undefined : attrValue(a, ctx.scope);
  }
  const inner = async () => tidy(await convertBlock(dedent(children), ctx));
  if (render) return render(props, inner, ctx);
  // 没登记的组件：有内容就展开内容，自闭合的就略过
  return children.trim() ? inner() : '';
}

// ── 各组件 ───────────────────────────────────────────────

let dataCache = new WeakMap();
async function data(ctx, rel) {
  if (!dataCache.has(ctx.loadModule)) dataCache.set(ctx.loadModule, new Map());
  const cache = dataCache.get(ctx.loadModule);
  if (!cache.has(rel)) cache.set(rel, ctx.loadModule(path.join(ctx.siteDir, rel)));
  return cache.get(rel);
}

const interactive = (ctx, what) => `（这里是${what}，请在网页上查看：${ctx.pageUrl}）`;

const RENDERERS = {
  Tabs: (props, inner) => inner(),
  TabItem: async (props, inner) => `**${props.label ?? props.value}**\n\n${await inner()}`,
  ReadMore: async (props, inner) => `**${textOf(props.title) ?? props.label ?? '展开阅读'}**\n\n${await inner()}`,
  Details: async (props, inner) => inner(),
  CardGrid: (props, inner) => inner(),
  Card: async (props, inner) => {
    const title = [textOf(props.title), props.sub && `（${props.sub}）`].filter(Boolean).join('');
    return `**${title}**\n\n${await inner()}`;
  },
  SkillList: (props) => (props.items || []).map(([id, name]) => `- \`${id}\`：${name}`).join('\n'),
  LinkCallout: async (props, inner) => `${await inner()}\n\n[${props.linkText || props.label || props.href}](${props.href})`,
  LessonMeta: () => '',
  CourseHero: async (props, inner) => {
    const facts = [props.level && `难度：${props.level}`, props.lessonCount && `${props.lessonCount} 课`,
      props.sourceHref && `原课程：[${props.sourceLabel || 'Claude Academy'}](${props.sourceHref})`].filter(Boolean);
    return `${await inner()}\n\n${facts.join(' · ')}`;
  },
  DocCardList: (props, inner, ctx) => (ctx.childPages || [])
    .map((p) => `- [${p.title}](${p.url}.md)${p.description ? `：${p.description}` : ''}`).join('\n'),
  BrowserOnly: (props, inner, ctx) => interactive(ctx, '交互演示'),
  AgentLoopViz: (props, inner, ctx) => interactive(ctx, '分步动画'),
  GitWorkflowViz: (props, inner, ctx) => interactive(ctx, '交互演示'),
  CsvTable: (props) => {
    const rows = String(props.data || '').trim().split('\n').map((r) => r.split(',').map((c) => c.trim().replace(/\|/g, '\\|')));
    if (!rows.length) return '';
    return [rows[0], rows[0].map(() => '----'), ...rows.slice(1)].map((r) => `| ${r.join(' | ')} |`).join('\n');
  },
  VideoFigure: async (props, inner) => {
    const caption = (await inner()).replace(/\s*\n\s*/g, ' ');
    const label = [props.fig && `图 ${props.fig}`, caption].filter(Boolean).join('：') || '视频';
    return `[视频：${label}](${props.src})${props.label ? ` — ${props.label}` : ''}`;
  },
  Diagram: async (props, inner, ctx) => {
    const svg = (await data(ctx, 'src/data/diagrams/index.js')).default[props.variant];
    const title = /<title[^>]*>([\s\S]*?)<\/title>/.exec(svg || '')?.[1]?.trim();
    const desc = /<desc[^>]*>([\s\S]*?)<\/desc>/.exec(svg || '')?.[1]?.trim();
    return `[图：${title || props.variant}]${desc ? ` ${desc}` : ''}`;
  },
  QuickCheck: (props) => quiz([{ text: props.question, options: props.options }], { heading: '快速检查' }),
  McpQuiz: (props) => quiz(props.questions || [], { heading: null }),
  McpWalkthrough: async (props, inner, ctx) => {
    const walk = (await data(ctx, 'src/data/mcpWalkthroughs/index.js')).default[props.variant];
    if (!walk) throw new Error(`McpWalkthrough 找不到 variant ${props.variant}`);
    return walk.steps.map((step, k) => {
      const parts = [`**${k + 1}. ${step.title}**`, ...blocks(step.body)];
      const code = walk.files?.[step.file];
      if (code != null && step.line) {
        const from = step.line, to = step.endLine ?? step.line;
        parts.push(`\`${step.file}\` 第 ${from === to ? from : `${from}–${to}`} 行：`, fenceOf(code.split('\n').slice(from - 1, to).join('\n'), langOf(step.file)));
      }
      return parts.join('\n\n');
    }).join('\n\n');
  },
  CodeWalkthrough: async (props, inner, ctx) => {
    const walk = (await data(ctx, 'src/data/codeWalkthroughs/index.js')).default[props.variant];
    if (!walk) throw new Error(`CodeWalkthrough 找不到 variant ${props.variant}`);
    const n = Math.min(Math.max(Number(props.step ?? 1), 1), walk.steps.length);
    return codeWalkthroughStep(walk.steps, n);
  },
};

// 段落和列表：McpWalkthrough 的 body 是 [{ type: 'p' | 'list' }]，CodeWalkthrough 的是字符串
function blocks(body = []) {
  return body.map((b) => {
    if (typeof b === 'string') return b;
    if (b.type === 'list') return b.items.map((item, i) => `${b.ordered ? `${i + 1}.` : '-'} ${item}`).join('\n');
    return b.text;
  });
}

// 第 n 步看到的代码：从第一步起把每一步改动的文件合并上去，null 表示删掉
export function codeWalkthroughStep(steps, n) {
  const snapshot = {};
  for (const step of steps.slice(0, n)) {
    for (const [file, content] of Object.entries(step.files || {})) {
      if (content === null) delete snapshot[file];
      else snapshot[file] = content;
    }
  }
  const step = steps[n - 1];
  const parts = [`**第 ${n} 步 · ${step.title}**`, ...blocks(step.body)];
  const range = ([from, to = from]) => (from === to ? `${from}` : `${from}–${to}`);
  const changedHere = (file) => Object.hasOwn(step.files || {}, file);
  if (step.lines?.length && step.file && snapshot[step.file] != null && !changedHere(step.file)) {
    // 代码没变、只换个位置讲的步骤：摘出这几行，标上行号
    const all = snapshot[step.file].split('\n');
    for (const [from, to = from] of step.lines) {
      parts.push(`\`${step.file}\` 第 ${range([from, to])} 行：`, fenceOf(all.slice(from - 1, to).join('\n'), langOf(step.file)));
    }
  } else {
    const changed = Object.keys(step.files || {}).filter((f) => snapshot[f] != null);
    const shown = step.file ? [step.file, ...changed.filter((f) => f !== step.file)] : changed;
    for (const file of shown) {
      if (snapshot[file] == null) continue;
      // 这一步改了文件又要框住几行时，给全文并注明重点看哪几行
      const focus = file === step.file && step.lines?.length ? `（重点看第 ${step.lines.map(range).join('、')} 行）` : '';
      parts.push(`\`${file}\`${focus}：`, fenceOf(snapshot[file], langOf(file)));
    }
  }
  for (const run of step.runs || []) {
    parts.push('```bash\n' + run.cmd + '\n```');
    if (run.output) parts.push(`输出${run.exit ? `（退出码 ${run.exit}）` : ''}：`, fenceOf(run.output, 'text'));
    else parts.push('运行后没有输出。');
  }
  return parts.join('\n\n');
}

// 单选题：选项前标字母，答案和每个选项的解释放在题目后面
function quiz(questions, { heading }) {
  const letters = 'ABCDEFGH';
  return questions.map((q, k) => {
    const options = (q.options || []).map((o) => (typeof o === 'string' ? { text: o } : o));
    const correct = options.findIndex((o, i) => o.correct || q.answer === i);
    const lines = [`**${heading ?? `第 ${k + 1} 题`}：** ${q.text}`, '', ...options.map((o, i) => `- ${letters[i]}. ${o.text}`)];
    if (correct >= 0) lines.push('', `答案：${letters[correct]}`);
    const explains = options.map((o, i) => (o.explain ? `- ${letters[i]}：${o.explain}` : null)).filter(Boolean);
    if (explains.length) lines.push('', ...explains);
    if (q.explain) lines.push('', `解析：${q.explain}`);
    return lines.join('\n');
  }).join('\n\n');
}

// ── 收尾 ─────────────────────────────────────────────────

// 合并多余空行，去掉行尾空白（代码围栏里不动）
function tidy(text) {
  return mapProse(text, (t) => t.replace(/[ \t]+$/gm, (m, off, s) => (s[off - 1] && m === '  ' ? m : '')).replace(/\n{3,}/g, '\n\n'))
    .replace(/\n{3,}/g, '\n\n').trim();
}

function withHeader(md, ctx) {
  const meta = [`- 原文：<${ctx.pageUrl}>`];
  if (ctx.date) meta.push(`- 日期：${ctx.date}`);
  const description = ctx.description ?? ctx.frontMatter.description;
  const h1 = /^# .+$/m.exec(md);
  const startsWithH1 = h1 && md.slice(0, h1.index).trim() === '';
  const head = [`# ${startsWithH1 ? h1[0].slice(2) : ctx.title}`, '', ...(description ? [`> ${description}`, ''] : []), ...meta, '', '---', ''];
  const rest = startsWithH1 ? md.slice(h1.index + h1[0].length).replace(/^\n+/, '') : md;
  return `${head.join('\n')}\n${rest}\n`;
}
