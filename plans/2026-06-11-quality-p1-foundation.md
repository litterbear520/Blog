# 质量体系 P1（地基）实现计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 为博客接入 ESLint+Prettier（含存量清理）、husky+lint-staged 提交拦截、Claude Code 编辑时自动修复 hook、check-content 内容校验脚本，达成规格 P1 验收标准。

**Architecture:** 三道本地防线依次落地：配置先行（Task 1）→ 存量一次性清理（Task 2）→ 数据提取使内容可校验（Task 3）→ 校验脚本（Task 4）→ 提交拦截（Task 5）→ 编辑时 hook（Task 6）→ 规则写入 CLAUDE.md（Task 7）。每个 Task 独立提交。

**Tech Stack:** ESLint 9（flat config）+ Prettier、husky 9 + lint-staged、Node ESM 脚本 + gray-matter。

**规格文档:** `specs/2026-06-11-ai-workflow-testing-design.md`（本计划只覆盖其 §8 P1 阶段）

---

## 背景知识（给零上下文的工程师）

- 项目是 Docusaurus 3.10.1 博客，纯 JS，**没有任何现存 lint/test 工具**。`package.json` 没有 `"type": "module"`（默认 CJS），所以所有新 ESM 文件必须用 `.mjs` 后缀，ESLint 配置用 `eslint.config.mjs`。
- `plugins/copy-markdown-source/index.js` 是 CommonJS（`require`），ESLint 配置里要给 `plugins/**` 单独设 `sourceType: 'commonjs'`。
- 博文双份元数据是本项目特有风险：文章本体在 `blog/*.md`（frontmatter 含 `slug`，**slug 可能 ≠ 文件名**，如 `littlebear.md` 的 slug 是 `mdx-blog-post`），列表元数据在 `src/pages/bloglist.js` 的 `POSTS` 数组。校验脚本必须读 frontmatter 的 slug，不能用文件名。
- `blog/` 下有 `image/` 子目录，遍历时只取 `.md`/`.mdx` 文件。
- 用户环境：Windows + **Git Bash**（所有命令用 bash 语法）。CI 在 ubuntu。
- 本阶段**没有** Vitest（P2 才接入），check-content 脚本的正确性用"故意破坏→看是否变红→恢复"的演练步骤验证。
- 提交信息惯例：中文一行式。
- 一个有意的规格偏差：规格 §4.8 说 md 文件在根目录与 src/ 范围内交给 prettier，但 **Prettier 会强制对齐 Markdown 表格竖线**，与项目"不对齐竖线"的规范（CLAUDE.md 表格格式节）冲突，因此本计划将 **所有 `.md` 排除出 Prettier**，md 排版完全交给人工/CLAUDE.md 约定。

---

### Task 1: ESLint + Prettier 依赖与配置

**Files:**
- Create: `eslint.config.mjs`
- Create: `.prettierrc.json`
- Create: `.prettierignore`
- Modify: `package.json`（scripts + devDependencies）

- [ ] **Step 1: 安装依赖**

```bash
npm install -D eslint @eslint/js globals eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y eslint-config-prettier prettier
```

- [ ] **Step 2: 创建 `eslint.config.mjs`**

```javascript
// eslint.config.mjs
import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import prettierConfig from 'eslint-config-prettier';

export default [
  {
    ignores: [
      'build/**',
      '.docusaurus/**',
      'node_modules/**',
      'docs/**',
      'blog/**',
      'static/**',
      '.superpowers/**',
      '.playwright-mcp/**',
      '.husky/**',
    ],
  },
  js.configs.recommended,
  react.configs.flat.recommended,
  react.configs.flat['jsx-runtime'],
  jsxA11y.flatConfigs.recommended,
  {
    files: ['**/*.{js,jsx,mjs}'],
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: 'module',
      globals: { ...globals.browser, ...globals.node },
    },
    plugins: { 'react-hooks': reactHooks },
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      // 项目不使用 PropTypes，关闭该校验
      'react/prop-types': 'off',
    },
    settings: { react: { version: 'detect' } },
  },
  {
    // copy-markdown-source 插件是 CommonJS
    files: ['plugins/**/*.js'],
    languageOptions: { sourceType: 'commonjs' },
  },
  prettierConfig,
];
```

- [ ] **Step 3: 创建 `.prettierrc.json` 和 `.prettierignore`**

`.prettierrc.json`：

```json
{
  "singleQuote": true
}
```

`.prettierignore`：

```
build
.docusaurus
node_modules
docs
blog
static
.superpowers
.playwright-mcp
.husky
package-lock.json
*.md
```

- [ ] **Step 4: 在 `package.json` 的 scripts 中加入（保留现有条目）**

```json
"lint": "eslint src plugins scripts",
"lint:fix": "eslint src plugins scripts --fix",
"format": "prettier --write .",
"format:check": "prettier --check .",
```

注意：`scripts/` 目录此刻还不存在，ESLint 9 对不存在的目录会报错 "No files matching"。先创建占位目录：

```bash
mkdir -p scripts && touch scripts/.gitkeep
```

- [ ] **Step 5: 验证配置可运行（此刻报存量错误是预期，不要修）**

```bash
npm run lint; npm run format:check
```

Expected: 两条命令都能跑起来（exit code 可能非 0——存量问题留给 Task 2，本步只确认"配置没写错"，即报错是 lint 规则violation 而不是配置解析失败）。

- [ ] **Step 6: 提交（只含配置，不含清理）**

```bash
git add eslint.config.mjs .prettierrc.json .prettierignore package.json package-lock.json scripts/.gitkeep
git commit -m "质量体系P1：接入 ESLint + Prettier 配置"
```

---

### Task 2: 存量代码一次性清理

**Files:**
- Modify: `src/**`、`plugins/**` 中被自动修复/格式化触及的所有文件（数量未知，单独一个提交隔离格式噪音）

- [ ] **Step 1: 自动修复 + 全量格式化**

```bash
npm run lint:fix; npm run format
```

- [ ] **Step 2: 处理剩余的 lint 错误**

```bash
npm run lint
```

对每个剩余错误按以下优先级处理：

1. **机械可修**（如 `type="button"` 缺失、未使用变量删除）：直接修。
2. **jsx-a11y 交互可达性**（如可点击元素缺键盘支持）：参照 `src/components/SkillCard/index.js:35-49` 的既有模式修（`role="button"` + `tabIndex={0}` + `onKeyDown` Enter/Space 处理 + `e.target !== e.currentTarget` 守卫）。
3. **确认是误报或修复代价过大**（如 Canvas 动画里的复杂逻辑）：用 `// eslint-disable-next-line <规则名> -- <一句话理由>` 逐行豁免，**禁止**文件级 disable 或改配置关规则。
4. **需要结构性改动才能修**：不要改，记下来在报告中上报（这超出 P1 范围）。

- [ ] **Step 3: 确认 lint 与 format 全绿**

```bash
npm run lint && npm run format:check
```

Expected: 两者 exit 0。

- [ ] **Step 4: 确认格式化没有破坏构建**

```bash
npm run build
```

Expected: `[SUCCESS] Generated static files in "build".`

- [ ] **Step 5: 提交（单独提交，隔离格式噪音）**

```bash
git add -A
git commit -m "质量体系P1：存量代码 lint 修复与全量格式化"
```

---

### Task 3: 提取 POSTS 到独立数据文件

**Files:**
- Create: `src/data/posts.js`
- Modify: `src/pages/bloglist.js`（删除 POSTS 定义，改为 import）

背景：check-content 脚本要在 Node 里 `import` POSTS 数据，但 `bloglist.js` 含 JSX 和 `@theme/*` 别名，纯 Node 无法加载。把 POSTS 提取为纯数据文件（与 `src/data/skills.js` 同模式）。这不是规格 §9 里说的"消灭双份元数据"的大重构——双份依旧存在，只是数据挪个位置使其可校验。

- [ ] **Step 1: 创建 `src/data/posts.js`**

内容 = 现 `src/pages/bloglist.js` 中 `POSTS` 数组原样搬运（以工作区当前实际内容为准，下面是当前快照）：

```javascript
// src/data/posts.js
// 博文列表页元数据。新增博文 = blog/ 下写文章 + 在此登记
//（两边以 slug 关联，npm run check:content 会校验双向同步）。
export const POSTS = [
  {
    title: '如何自己订阅Claude',
    date: '2026-05-08',
    slug: 'how-to-subscribe-claude',
    description:
      '使用国内银行卡通过 Google Play 订阅 Claude Pro / ChatGPT Plus，两种方案分别适合不同用户。',
    category: '教程',
    accent: 'amber',
    cover: '/img/blog/cover-subscribe-claude.png',
  },
  {
    title: '善用工具弥补技术深度',
    date: '2026-03-13',
    slug: 'ai-collaboration-and-technical-depth',
    description:
      '探讨在没有技术深度但善于使用AI工具的情况下，能否弥补技术深度鸿沟。',
    category: 'AI',
    accent: 'sage',
    cover: '/img/blog/cover-ai-tools.png',
  },
  {
    title: '阿里天池二手车价格预测Top2分享',
    date: '2025-07-04',
    slug: 'mdx-blog-post',
    description: '从迷茫到第二名，分享比赛中一步步提升分数的方案与心得。',
    category: '比赛',
    accent: 'terra',
    cover: '/img/blog/cover-tianchi.png',
  },
];
```

- [ ] **Step 2: 修改 `src/pages/bloglist.js`**

删除文件顶部的 `const POSTS = [ ... ];` 整个数组定义，在 import 区追加：

```javascript
import { POSTS } from '@site/src/data/posts';
```

其余代码（`CATEGORIES`、组件逻辑）一律不动。

- [ ] **Step 3: 验证**

```bash
npm run lint && npm run build
```

Expected: 都通过；`build/bloglist/index.html` 正常生成。

- [ ] **Step 4: 提交**

```bash
git add src/data/posts.js src/pages/bloglist.js
git commit -m "质量体系P1：POSTS 元数据提取到 src/data/posts.js"
```

---

### Task 4: check-content 内容校验脚本

**Files:**
- Create: `scripts/check-content.mjs`
- Modify: `package.json`（scripts + devDependencies）
- Delete: `scripts/.gitkeep`（目录有真实文件后不再需要）

- [ ] **Step 1: 安装 gray-matter**

```bash
npm install -D gray-matter
```

- [ ] **Step 2: 创建 `scripts/check-content.mjs`**

```javascript
// scripts/check-content.mjs
// 内容完整性校验：POSTS ↔ blog/ 双向同步、封面图存在、SKILLS 合法、大图报警。
// 用法：node scripts/check-content.mjs
// 退出码：有 error 则 1；仅 warning 则 0。
import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';
import { POSTS } from '../src/data/posts.js';
import { SKILLS } from '../src/data/skills.js';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const errors = [];
const warnings = [];

// ── 1. 读取 blog/ 文章清单（以 frontmatter 的 slug 为准，跳过子目录）──
const blogDir = join(ROOT, 'blog');
const blogSlugs = new Map(); // slug -> 文件名
for (const name of readdirSync(blogDir)) {
  if (!name.endsWith('.md') && !name.endsWith('.mdx')) continue;
  const fm = matter(readFileSync(join(blogDir, name), 'utf8')).data;
  if (!fm.slug) {
    errors.push(`blog/${name}：frontmatter 缺少 slug`);
    continue;
  }
  if (blogSlugs.has(fm.slug)) {
    errors.push(`blog/${name}：slug "${fm.slug}" 与 blog/${blogSlugs.get(fm.slug)} 重复`);
  }
  blogSlugs.set(fm.slug, name);
}

// ── 2. POSTS ↔ blog/ 双向同步及字段合法性 ──
const VALID_CATEGORIES = new Set(['教程', 'AI', '比赛']);
const postSlugs = new Set();
for (const post of POSTS) {
  const where = `posts.js [${post.slug ?? '?'}]`;
  postSlugs.add(post.slug);
  if (!blogSlugs.has(post.slug)) {
    errors.push(`${where}：blog/ 中没有 slug 为 "${post.slug}" 的文章，卡片点击会 404`);
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(post.date ?? '')) {
    errors.push(`${where}：date "${post.date}" 不是 YYYY-MM-DD 格式`);
  }
  if (!VALID_CATEGORIES.has(post.category)) {
    errors.push(`${where}：category "${post.category}" 不在 ${[...VALID_CATEGORIES].join('/')} 中`);
  }
  for (const field of ['title', 'description', 'accent', 'cover']) {
    if (!post[field]) errors.push(`${where}：缺少字段 ${field}`);
  }
  if (post.cover && !existsSync(join(ROOT, 'static', post.cover))) {
    errors.push(`${where}：封面 static${post.cover} 文件不存在`);
  }
}
for (const [slug, file] of blogSlugs) {
  if (!postSlugs.has(slug)) {
    errors.push(`blog/${file}：slug "${slug}" 未在 src/data/posts.js 登记，bloglist 页不会显示这篇文章`);
  }
}

// ── 3. SKILLS 合法性 ──
const skillIds = new Set();
for (const skill of SKILLS) {
  const where = `skills.js [${skill.id ?? '?'}]`;
  for (const field of ['id', 'name', 'author', 'source', 'description', 'repo']) {
    if (!skill[field]) errors.push(`${where}：缺少字段 ${field}`);
  }
  if (skill.id) {
    if (skillIds.has(skill.id)) errors.push(`${where}：id 重复`);
    skillIds.add(skill.id);
  }
  if (!Array.isArray(skill.install) || skill.install.length === 0) {
    errors.push(`${where}：install 必须是非空数组`);
  } else {
    for (const item of skill.install) {
      if (!item.label || !item.command) {
        errors.push(`${where}：install 项缺少 label 或 command`);
      }
    }
  }
  if (skill.repo && !/^https:\/\//.test(skill.repo)) {
    errors.push(`${where}：repo "${skill.repo}" 不是 https URL`);
  }
}

// ── 4. 大图报警（warning，不影响退出码）──
const IMG_LIMIT_KB = 500;
function walkImages(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) {
      walkImages(p);
    } else if (/\.(png|jpe?g|gif|webp)$/i.test(name) && st.size > IMG_LIMIT_KB * 1024) {
      const rel = p.slice(ROOT.length + 1).replaceAll('\\', '/');
      warnings.push(`${rel}：${Math.round(st.size / 1024)}KB 超过 ${IMG_LIMIT_KB}KB，建议压缩`);
    }
  }
}
walkImages(join(ROOT, 'static', 'img'));

// ── 输出 ──
for (const w of warnings) console.warn(`⚠ ${w}`);
if (errors.length > 0) {
  for (const e of errors) console.error(`✗ ${e}`);
  console.error(`\n内容校验失败：${errors.length} 个错误`);
  process.exit(1);
}
console.log(
  `✓ 内容校验通过（${POSTS.length} 篇博文，${SKILLS.length} 个技能` +
    (warnings.length ? `，${warnings.length} 条大图警告` : '') +
    '）'
);
```

- [ ] **Step 3: 加 npm scripts 并删除占位文件**

`package.json` scripts 追加：

```json
"check:content": "node scripts/check-content.mjs",
"check": "npm run lint && npm run check:content",
```

（`check` 目前 = lint + content；P2 接入 Vitest/typecheck 后扩展为四合一，规格 §6 已注明。）

```bash
rm scripts/.gitkeep
```

- [ ] **Step 4: 运行，确认当前内容全绿**

```bash
npm run check:content
```

Expected: `✓ 内容校验通过（3 篇博文，2 个技能…）`，exit 0。若有大图警告属正常（warning 不挡）。

- [ ] **Step 5: 破坏性演练 1——元数据失联**

把 `src/data/posts.js` 中任一 `slug` 临时改成 `'broken-slug-test'`，运行：

```bash
npm run check:content
```

Expected: exit 1，输出同时包含两条方向相反的错误（POSTS 指向不存在的文章 + blog 文章未登记）。**演练后立即还原**。

- [ ] **Step 6: 破坏性演练 2——封面丢失与字段非法**

临时把任一 `cover` 改成 `'/img/blog/not-exist.png'`、任一 `category` 改成 `'随笔'`，运行：

```bash
npm run check:content
```

Expected: exit 1，两条错误都被一次性列出（脚本收集全部错误，不是遇错即停）。**演练后立即还原**，再跑一次确认回绿。

- [ ] **Step 7: 提交**

```bash
git add -A scripts/ package.json package-lock.json
git commit -m "质量体系P1：新增 check-content 内容校验脚本"
```

（`-A` 会同时记录 `.gitkeep` 的删除。）

---

### Task 5: husky + lint-staged 提交拦截

**Files:**
- Create: `.husky/pre-commit`
- Modify: `package.json`（prepare script + lint-staged 配置 + devDependencies）

- [ ] **Step 1: 安装并初始化**

```bash
npm install -D husky lint-staged
npx husky init
```

`husky init` 会自动加 `"prepare": "husky"` 到 scripts 并创建 `.husky/pre-commit`（默认内容是 `npm test`）。

- [ ] **Step 2: 改写 `.husky/pre-commit`**

```
npx lint-staged
```

（整个文件就这一行。）

- [ ] **Step 3: 在 `package.json` 顶层加 lint-staged 配置**

```json
"lint-staged": {
  "*.{js,jsx,mjs}": ["eslint --fix --no-warn-ignored", "prettier --write"],
  "*.{css,json}": ["prettier --write"]
}
```

说明：`--no-warn-ignored` 让位于 ignore 目录的暂存文件被静默跳过而不是报警；md 不在此处（已全局排除出 Prettier，见背景知识）。

- [ ] **Step 4: 提交配置本身（这次提交顺便首测钩子正向通过）**

```bash
git add .husky/pre-commit package.json package-lock.json
git commit -m "质量体系P1：husky + lint-staged 提交拦截"
```

Expected: 提交前可见 lint-staged 运行输出，提交成功。

- [ ] **Step 5: 金丝雀演练——坏代码必须被拦**

```bash
cat > src/__lint_canary.js <<'EOF'
export function canary() {
  const used = 1;
  return undefinedVariable + used;
}
EOF
git add src/__lint_canary.js
git commit -m "canary：这条提交不应该成功"
```

Expected: 提交**失败**，输出包含 `no-undef`（`undefinedVariable` 未定义不可自动修复）。

- [ ] **Step 6: 清理金丝雀**

```bash
git reset
rm src/__lint_canary.js
git status --short
```

Expected: 工作区干净，没有 canary 提交进入历史（`git log --oneline -2` 确认）。

---

### Task 6: Claude Code PostToolUse hook（编辑时自动修）

**Files:**
- Create: `scripts/hooks/post-edit-lint.mjs`
- Create: `.claude/settings.json`（该目录已存在，仅有 launch.json，settings.json 是新文件）

- [ ] **Step 1: 创建 `scripts/hooks/post-edit-lint.mjs`**

```javascript
// scripts/hooks/post-edit-lint.mjs
// Claude Code PostToolUse hook（matcher: Edit|Write）：
// 对刚改过的文件自动 prettier --write + eslint --fix；
// 修不掉的 lint 错误经 stderr + exit 2 反馈给 Claude 当场修复。
import { readFileSync } from 'node:fs';
import { execSync } from 'node:child_process';

let input;
try {
  input = JSON.parse(readFileSync(0, 'utf8'));
} catch {
  process.exit(0); // 拿不到输入就放行，hook 不应阻塞正常编辑
}

const filePath = input?.tool_input?.file_path;
if (!filePath) process.exit(0);

const norm = filePath.replaceAll('\\', '/');
// 只处理 src/、plugins/、scripts/ 下的文件
if (!/\/(src|plugins|scripts)\//.test(`/${norm}`)) process.exit(0);

const isJs = /\.(js|jsx|mjs)$/.test(norm);
const isStyle = /\.(css|json)$/.test(norm);
if (!isJs && !isStyle) process.exit(0);

function run(cmd) {
  try {
    execSync(cmd, { stdio: ['ignore', 'pipe', 'pipe'] });
    return { ok: true, out: '' };
  } catch (e) {
    return { ok: false, out: `${e.stdout ?? ''}${e.stderr ?? ''}` };
  }
}

run(`npx prettier --write "${filePath}"`);
if (isJs) {
  run(`npx eslint --fix --no-warn-ignored "${filePath}"`);
  const res = run(`npx eslint --no-warn-ignored "${filePath}"`);
  if (!res.ok) {
    console.error(`[hook] eslint 自动修复后仍有问题，请修复：\n${res.out}`);
    process.exit(2); // exit 2 = 把 stderr 反馈给 Claude
  }
}
process.exit(0);
```

- [ ] **Step 2: 创建 `.claude/settings.json`**

```json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Edit|Write",
        "hooks": [
          {
            "type": "command",
            "command": "node \"$CLAUDE_PROJECT_DIR/scripts/hooks/post-edit-lint.mjs\""
          }
        ]
      }
    ]
  }
}
```

注意：不要动同目录已存在的 `launch.json`。

- [ ] **Step 3: 手动验证 hook 脚本——干净文件放行**

```bash
echo '{"tool_input":{"file_path":"'$(pwd)'/src/data/skills.js"}}' | node scripts/hooks/post-edit-lint.mjs; echo "exit=$?"
```

Expected: `exit=0`，无输出。

- [ ] **Step 4: 手动验证 hook 脚本——坏文件报错**

```bash
cat > src/__hook_canary.js <<'EOF'
export const canary = () => undefinedVariable;
EOF
echo '{"tool_input":{"file_path":"'$(pwd)'/src/__hook_canary.js"}}' | node scripts/hooks/post-edit-lint.mjs; echo "exit=$?"
rm src/__hook_canary.js
```

Expected: stderr 含 `no-undef` 错误详情，`exit=2`；canary 文件已删除。

- [ ] **Step 5: 提交**

```bash
git add scripts/hooks/post-edit-lint.mjs .claude/settings.json
git commit -m "质量体系P1：Claude Code 编辑时自动 lint/format hook"
```

并在报告中提醒：hook 对**当前会话**不生效，需重启 Claude Code 会话或重载 hooks 后生效。

---

### Task 7: CLAUDE.md 写入质量规则与三级制

**Files:**
- Modify: `CLAUDE.md`（「常用命令」节追加 + 新增「质量检查与 AI 工作流分级」节）

- [ ] **Step 1: 在「常用命令」代码块内追加**

```bash
npm run check                # 提交前必跑：lint + 内容校验（P2 起含测试与类型检查）
npm run lint:fix             # 自动修复 lint 问题
npm run format               # 全量格式化
npm run check:content        # 校验博文元数据/封面/技能数据完整性
```

- [ ] **Step 2: 在「内容编写规范」节之前插入新章节**

```markdown
## 质量检查与 AI 工作流分级

四道防线：编辑时 hook 自动 lint/format（已配置 .claude/settings.json）→ husky pre-commit 增量拦截 → CI 门禁（P3 落地）→ 每周外链巡检（P4 落地）。完整设计见 `specs/2026-06-11-ai-workflow-testing-design.md`。

### 改动分级（强制）

| 级别 | 范围 | 流程 |
| ---- | ---- | ---- |
| L1 内容 | blog/ docs/ static/ 增改 | 直接改；提交前跑 `npm run check:content` |
| L2 小修 | 单文件 bug 修复、样式微调、文案 | 直接改；提交前跑 `npm run check` |
| L3 功能 | 新功能、跨文件改动、重构、依赖变更 | 完整流程：brainstorm → spec → plan → 子代理实施 + 双重审查 |

### 测试约定

- **改到哪补到哪**：触碰 `src/`、`plugins/` 中无测试覆盖的逻辑时，为改动部分补测试是任务的一部分（Vitest 自 P2 起可用）
- 新增博文必须同时更新 `blog/` 与 `src/data/posts.js`，靠 `npm run check:content` 校验同步
- 表格不对齐竖线的规范同样适用于代码仓库内所有 md（Prettier 已对 md 全局豁免）
```

- [ ] **Step 3: 提交**

```bash
git add CLAUDE.md
git commit -m "质量体系P1：CLAUDE.md 写入质量命令与工作流三级制"
```

---

### Task 8: P1 整体验收

**Files:** 无新文件。

- [ ] **Step 1: 对照规格 §8 P1 验收行逐项确认**

```bash
npm run lint && npm run format:check && npm run check:content && npm run check
```

Expected: 全部 exit 0。

- [ ] **Step 2: 确认提交拦截在位**

```bash
git config core.hooksPath
```

Expected: 输出 `.husky/_`（husky 已接管 hooks）。（金丝雀演练已在 Task 5 完成，不重复。）

- [ ] **Step 3: 确认构建未受全套改动影响**

```bash
npm run build
```

Expected: `[SUCCESS] Generated static files in "build".`
