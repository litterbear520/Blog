// 在 Node 里导入 src/data/ 下的数据文件。
// 这些文件按 webpack 的写法：ESM 语法、相对引用不写扩展名（import focusRange from '../focusRange'），
// 而仓库的 package.json 没声明 "type": "module"，Node 直接按路径导入认不出来。
// 这里把文件读成文本、包成 data: 地址再导入；文件开头 import / export … from 里的相对路径
// 一并递归换成被引用文件的 data: 地址。只改开头那几行导入语句：数据文件里的代码快照
// 常有 `import x from './y'` 这样的字符串，正文要是被改了，和页面上的内容就对不上。
import { existsSync, readFileSync, statSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';

const toDataURL = (text) => `data:text/javascript;base64,${Buffer.from(text).toString('base64')}`;

// 按 webpack 的顺序补扩展名：原样、.js、.mjs、目录下的 index.js
export function resolveSpecifier(fromFile, spec) {
  const base = resolve(dirname(fromFile), spec);
  for (const candidate of [base, `${base}.js`, `${base}.mjs`, join(base, 'index.js')]) {
    if (existsSync(candidate) && statSync(candidate).isFile()) return candidate;
  }
  throw new Error(`${fromFile} 引用的 ${spec} 找不到`);
}

// 文件开头的导入区：空行、注释、import 语句和 export … from 语句，到第一行别的代码为止。
// 返回导入区的结束位置（字符下标）。多行的 import { a, b } 一直读到带 from '…' 的那一行。
export function headerEnd(text) {
  let pos = 0;
  let inStatement = false;
  let inComment = false;
  for (const line of text.split('\n')) {
    const t = line.trim();
    const next = pos + line.length + 1;
    if (inComment) {
      if (t.includes('*/')) inComment = false;
    } else if (inStatement) {
      // 带 from '…' 的那一行收尾；export { a, b }; 这种本地导出没有 from，到右花括号收尾
      if (/\bfrom\s*['"][^'"]+['"]/.test(t) || /^['"][^'"]+['"];?$/.test(t) || /^\}\s*;?$/.test(t)) inStatement = false;
    } else if (t === '' || t.startsWith('//')) {
      // 跳过
    } else if (t.startsWith('/*')) {
      if (!t.includes('*/')) inComment = true;
    } else if (/^import\b/.test(t) || /^export\s*[{*]/.test(t)) {
      // export 只认 export { … } from、export * from：export default 后面就是正文了
      const done = /\bfrom\s*['"][^'"]+['"]/.test(t) || /^import\s*['"][^'"]+['"]/.test(t) || /^export\s*\{[^}]*\}\s*;?$/.test(t);
      if (!done) inStatement = true;
    } else {
      return pos;
    }
    pos = next;
  }
  return text.length;
}

const RELATIVE = /(\bfrom\s*|^\s*import\s*)(['"])(\.{1,2}\/[^'"]+)\2/gm;

// 返回能直接 import() 的 data: 地址。cache 让被多处引用的文件只转换一次
export function dataModuleURL(file, cache = new Map()) {
  const abs = resolve(file);
  if (cache.has(abs)) return cache.get(abs);
  const text = readFileSync(abs, 'utf8');
  const end = headerEnd(text);
  const header = text.slice(0, end).replace(RELATIVE, (_, lead, quote, spec) => (
    `${lead}${quote}${dataModuleURL(resolveSpecifier(abs, spec), cache)}${quote}`
  ));
  const url = toDataURL(header + text.slice(end));
  cache.set(abs, url);
  return url;
}

export async function importDataModule(file) {
  return import(dataModuleURL(file));
}
