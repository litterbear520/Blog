// 决定这次 push 要不要跑浏览器验证，结果写进 GITHUB_OUTPUT：browser=true|false。
// 和线上版本比，不和上一次 push 比：上一次含代码的构建可能被新 push 取消，它的改动还没验证过。
// 判断不了一律走全量，宁可多跑。
import { appendFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';

// 这些路径影响不到演练页和代码查看器；能否编译、链接是否有效由构建把关。
const CONTENT_PATHS = [
  /^blog\//,
  /^docs\//,
  /^roadmap\//,
  /^static\/img\//,
  /^tools\/covers\//,
  /^src\/pages\/bloglist\.js$/,
  /^\.claude\//,
  /^[^/]+\.md$/,
];

// GitHub 比较接口最多列 300 个文件，到上限就可能有没列出来的
const MAX_LISTED_FILES = 300;

export function isContentPath(path) {
  return !/walkthrough/i.test(path) && CONTENT_PATHS.some((pattern) => pattern.test(path));
}

export function needsBrowser(comparison) {
  const files = comparison?.files;
  if (comparison?.status !== 'ahead' || !Array.isArray(files)) return true;
  if (files.length === 0 || files.length >= MAX_LISTED_FILES) return true;
  // 改名时两头都要看：把 src/ 下的文件挪进 blog/ 也动了代码
  return !files.every(({ filename, previous_filename: previous }) => (
    isContentPath(filename) && (previous === undefined || isContentPath(previous))
  ));
}

async function getJSON(url, headers = {}) {
  const response = await fetch(url, { headers, signal: AbortSignal.timeout(15000) });
  if (!response.ok) throw new Error(`${url} 返回 ${response.status}`);
  return response.json();
}

async function main() {
  const { GITHUB_REPOSITORY: repo, GITHUB_SHA: sha, GITHUB_TOKEN: token, GITHUB_OUTPUT: output } = process.env;
  let browser = true;
  try {
    const { revision } = await getJSON(`https://huangsitao.fun/walkthrough-revision.json?verify=${Date.now()}`);
    const comparison = await getJSON(`https://api.github.com/repos/${repo}/compare/${revision}...${sha}`, {
      Accept: 'application/vnd.github+json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    });
    browser = needsBrowser(comparison);
    console.log(`线上 ${revision.slice(0, 9)} → 本次 ${sha.slice(0, 9)}：${comparison.files?.length ?? 0} 个文件，browser=${browser}`);
  } catch (error) {
    console.log(`::warning title=改动范围::判断不了，走全量验证：${error.message}`);
  }
  if (output) appendFileSync(output, `browser=${browser}\n`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) await main();
