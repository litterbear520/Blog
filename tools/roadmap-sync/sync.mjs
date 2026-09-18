// 把 dev 仓库里各步骤的代码抽成 CodeWalkthrough 的快照数据。
// 用法：npm run roadmap-sync [-- <配方名>]；默认跑 commerce。dev 仓库位置可用 ROADMAP_DEV_DIR 覆盖。
// 生成物提交进仓库：CI 里没有 dev 仓库，页面构建只依赖生成好的 *.files.js。
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(here, '..', '..');
const name = process.argv[2] || 'commerce';
const configPath = resolve(here, `${name}.config.mjs`);
if (!existsSync(configPath)) {
  console.error(`没有找到配方 ${configPath}`);
  process.exit(1);
}
const config = (await import(pathToFileURL(configPath).href)).default;
const devDir = resolve(repoRoot, process.env.ROADMAP_DEV_DIR || config.dev);
if (!existsSync(devDir)) {
  console.error(`dev 仓库不存在：${devDir}（可用 ROADMAP_DEV_DIR 指定）`);
  process.exit(1);
}

// 模板字符串里要转义的三样：反斜杠、反引号、${
const escapeTemplate = (s) => s.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');

const out = [];
out.push(`// 由 npm run roadmap-sync 从 ${config.dev} 生成，不要手改；改代码去 dev 仓库，改完重新生成。`);
out.push(`// 每个快照：{ 展示用路径: 文件内容 }，展示路径与 dev 里的真实路径的对应关系见 tools/roadmap-sync/${name}.config.mjs。`);
out.push('export default {');
for (const snap of config.snapshots) {
  out.push(`  ${JSON.stringify(snap.key)}: {`);
  for (const [shown, source] of Object.entries(snap.files)) {
    const abs = resolve(devDir, source);
    const content = readFileSync(abs, 'utf8');
    out.push(`    ${JSON.stringify(shown)}: \`${escapeTemplate(content)}\`,`);
  }
  out.push('  },');
}
out.push('};');
out.push('');

const outPath = resolve(repoRoot, config.out);
writeFileSync(outPath, out.join('\n'));
console.log(`已生成 ${config.out}：${config.snapshots.length} 个快照`);
