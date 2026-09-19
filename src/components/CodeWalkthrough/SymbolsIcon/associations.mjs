// Symbols 主题中当前演练所需的关联；未知类型使用同主题的默认图标。
// 上游定义及 SVG 来源见 README.md，不改变 Prism 的语法高亮语言。
const FILE_NAMES = new Map([
  ['.gitignore', 'git'],
  ['.gitignore-global', 'git'],
  ['.gitignore_global', 'git'],
  ['.git-blame-ignore', 'git'],
  ['.gitconfig', 'git'],
  ['.gitattributes', 'git'],
  ['.gitmodules', 'git'],
  ['.gitkeep', 'git'],
  ['.gitinclude', 'git'],
  ['requirements.txt', 'python'],
  ['pipfile', 'python'],
  ['.python-version', 'python'],
  ['manifest.in', 'python'],
  ['pylintrc', 'python'],
  ['.pylintrc', 'python'],
  ['setup.cfg', 'python'],
  ['pyproject.toml', 'gear'],
  ['.env', 'gear'],
]);

const EXTENSIONS = new Map([
  ['py', 'python'],
  ['python', 'python'],
  ['pyi', 'python'],
  ['pyw', 'python'],
  ['toml', 'gear'],
  ['env', 'gear'],
  ['json', 'brackets-yellow'],
  ['jsonc', 'brackets-yellow'],
  ['json5', 'brackets-yellow'],
  ['md', 'markdown'],
  ['markdown', 'markdown'],
  ['txt', 'text'],
]);

const TEST_FOLDERS = new Set(['test', 'tests', 'spec', 'specs']);

export function getSymbolIconName(path, { folder = false } = {}) {
  const name = typeof path === 'string'
    ? path.replace(/\\/g, '/').replace(/\/+$/, '').split('/').pop().toLowerCase()
    : '';

  if (folder) return TEST_FOLDERS.has(name) ? 'folder-red-code' : 'folder';
  // 文件名优先于扩展名，例如 requirements.txt 仍然使用 Python 图标。
  if (FILE_NAMES.has(name)) return FILE_NAMES.get(name);
  if (name.startsWith('.env.') || name.endsWith('.env.example')) return 'gear';

  const dot = name.lastIndexOf('.');
  const extension = dot >= 0 ? name.slice(dot + 1) : '';
  return EXTENSIONS.get(extension) || 'document';
}
