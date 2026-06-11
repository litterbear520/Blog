# AI 工作流与测试体系设计文档

日期：2026-06-11
状态：已与用户四轮访谈确认
参考：Docusaurus 官方实践（PR 构建测试、@ts-check 配置检查、onBrokenLinks 门禁）、deer-flow 测试体系（多 workflow + 路径过滤 + pre-commit 增量拦截 + Vitest/Playwright）

## 1. 背景与目标

本博客此前没有任何自动化质量保障：无 lint、无测试、无类型检查，push main 即部署。随着 AI（Claude Code）承担大部分代码改动，需要一套**让 AI 的改动可以被机器验证**的体系。

**守护的三项核心资产**（按访谈确认）：

1. **main 永远可上线** —— 任何提交都不会把坏构建部署到 huangsitao.fun
2. **内容完整性** —— 博文元数据与文件同步、图片存在、技能数据合法，杜绝"页面静默出错"
3. **交互组件不回归** —— SkillCard、筛选、密码保护等手写交互逻辑在 AI 改动后行为不变

明确**不**守护（非目标见 §7）：视觉像素级一致性、性能分数。

## 2. 已确认决策总表

| 决策点 | 结论 |
| ---- | ---- |
| 部署门禁 | 保持直推 main 习惯，CI 串联门禁：任一检查失败则不部署 |
| 单测运行器 | Vitest + React Testing Library（jsdom 环境） |
| E2E | Playwright（仅 Chromium），关键旅程深度，`retries: 1` 重试仍败才阻断 |
| 类型检查 | 渐进式 `checkJs`（jsconfig + tsc --noEmit + JSDoc），不迁移 TS |
| Lint | ESLint flat config：js/react/react-hooks recommended + **jsx-a11y** |
| Format | Prettier（singleQuote，匹配现有代码风格） |
| 内容校验 | 自定义 `check-content` 脚本（不引入 markdownlint） |
| 拦截层级 | Claude Code hook（编辑时自动修）+ husky pre-commit（提交时增量拦）+ CI（兵线） |
| CI 编排 | 单 workflow 多 jobs + 路径过滤分流：内容改动走快速通道（~2 分钟上线） |
| AI 流程强制度 | 三级制（见 §5），写入 CLAUDE.md |
| 首批测试范围 | SkillCard 组件 + skills 页 |
| 覆盖扩展 | "改到哪补到哪"：AI 触碰无测试模块时必须顺带补测试 |
| 外链检查 | 每周 lychee cron 扫描，坏链自动开 GitHub Issue，不占部署门禁 |
| 性能监控 | 暂不纳入；仅 check-content 中加"单图 >500KB 报警" |

## 3. 体系总览（四道防线）

```
编辑时    Claude Code PostToolUse hook：eslint --fix + prettier --write（秒级，静默自动修）
   ↓
提交时    husky pre-commit + lint-staged：对暂存文件 lint/format（拦截所有提交人，含手改）
   ↓
CI 门禁   GitHub Actions：lint → typecheck → unit → content-check → build → e2e → deploy
          （路径过滤：纯内容改动跳过 lint/typecheck/unit/e2e）
   ↓
周期巡检  每周 lychee 外链扫描（独立 workflow，开 Issue 不阻断）
```

## 4. 各层详细设计

### 4.1 Lint / Format

- **ESLint**（flat config `eslint.config.js`）：
  - `@eslint/js` recommended + `eslint-plugin-react` recommended + `eslint-plugin-react-hooks` recommended + `eslint-plugin-jsx-a11y` recommended
  - 选 jsx-a11y 的依据：本次 SkillCard 审查发现的"可点击元素缺键盘支持"问题，jsx-a11y 能在编辑时直接抓住，无需等审查环节
  - 范围：`src/**`、`plugins/**`、`scripts/**`；忽略 `build/`、`.docusaurus/`、`docs/`、`blog/`
- **Prettier**：`singleQuote: true`（匹配现有代码），其余默认；`.prettierignore` 排除 `build/`、`.docusaurus/`、`docs/`、`blog/`（Markdown 内容不强制格式化，避免破坏手写排版）
- **存量处理**：首次接入时一次性 `npm run lint:fix && npm run format` 全量清理，单独一个提交，避免后续 diff 混入格式噪音

### 4.2 类型检查（渐进式）

- 新增 `jsconfig.json`：`checkJs: true`，`include` 限定 `src/data`、`src/components`、`src/pages`、`plugins`、`scripts`
- 核心数据结构补 JSDoc typedef：`SKILLS`（id/name/author/source/description/install[]/repo）、`POSTS`（title/date/slug/description/category/accent/cover）
- 检查命令：`tsc --noEmit`（devDependency 引入 typescript，仅作检查器）
- 存量报错处理：首次接入逐个修复或 `// @ts-ignore` 带注释豁免，豁免数量记录在案不允许增长

### 4.3 单元/组件测试（Vitest + RTL）

- 依赖：`vitest`、`@testing-library/react`、`@testing-library/user-event`、`jsdom`
- 约定：测试文件与被测文件同目录，命名 `*.test.jsx` / `*.test.js`
- **首批用例清单**：
  - `SkillCard`：收起态渲染（名称/描述截断/徽章）；点击展开（aria-expanded、详情可见）；accordion 由父级控制的 expanded 切换；复制按钮状态机（idle→copied→2s 回 idle；clipboard 失败→failed；mock `navigator.clipboard`）；复制/链接点击不冒泡触发 onToggle；键盘 Enter/Space 展开、收起态内部控件 tabIndex=-1
  - `skills 页`：SOURCES 动态生成（加入 source:'自建' 的数据后标签自动出现）；筛选过滤正确；切换筛选重置 expandedId
- 不设覆盖率阈值（个人项目，阈值带来的是凑数测试不是质量）

### 4.4 内容校验脚本（`scripts/check-content.mjs`）

纯 Node 脚本，零依赖或仅用 `gray-matter` 解析 frontmatter，断言项目特有不变量：

| 检查项 | 失败示例 |
| ---- | ---- |
| `POSTS` 中每个 slug 在 `blog/` 有对应文章 | bloglist 卡片点进去 404 |
| `blog/` 每篇文章在 `POSTS` 有元数据 | 文章发了但列表页不显示 |
| `POSTS.date` 为 YYYY-MM-DD、`category` ∈ {教程, AI, 比赛} | 筛选静默失效 |
| `cover` 指向的图片文件存在于 `static/` | 卡片封面空白 |
| `SKILLS` 必填字段齐全、`id` 唯一、`install` 非空数组、`repo` 为 URL | 技能卡渲染残缺 |
| `static/img/` 单图 >500KB 报警（warning 不阻断） | 页面加载变慢 |

实现注意：`POSTS`/`SKILLS` 从源文件 `import` 读取（ESM），不要用正则解析源码。

### 4.5 E2E（Playwright，关键旅程）

- 仅 Chromium（deer-flow 同款取舍）；CI 中 `npx playwright install chromium --with-deps`
- **密码保护处理**：`PASSWORD_CONFIG.enabled === true` 是现状。一条专门用例走完整登录旅程（输错→错误提示→输对→进站）；其余所有用例通过 `addInitScript` 预置 `localStorage['blog_auth_token']` 跳过登录
- **用例清单**：
  1. 登录旅程（如上）
  2. smoke：首页、/bloglist、/skills、任一篇博文 —— 渲染成功且无 console error
  3. bloglist 筛选旅程：点分类→卡片集合变化→点卡片进入文章
  4. SkillCard 旅程：展开→复制（断言剪贴板内容）→GitHub 链接属性→accordion 互斥
  5. 暗/亮模式切换后页面仍可读（断言关键元素可见性，不做像素对比）
- 配置：`retries: 1`（重试仍失败才算失败、才阻断部署）；`webServer` 指向 `npm run serve -- --port 3001`（复用 CI 已产出的 build）
- 本地运行：`npm run test:e2e`（自动起 serve）

### 4.6 CI 编排（重构 `.github/workflows/update.yaml`）

单 workflow（`ci.yml`），jobs 结构：

```
changes（dorny/paths-filter）
  code:    src/** plugins/** scripts/** *.config.js package*.json jsconfig.json
  content: blog/** docs/** static/**

quality   [if code]      lint → typecheck → vitest（一个 job 串行跑，省启动开销）
content   [always]       node scripts/check-content.mjs
build     [needs: quality(可跳过), content]   npm run build，上传 build/ artifact
e2e       [if code, needs: build]             下载 artifact → serve → playwright
deploy    [if main push, needs: build, e2e(可跳过), quality(可跳过), content]
          条件写法：if: github.ref == 'refs/heads/main' && !failure() && !cancelled()
```

关键细节：

- **skipped ≠ failed**：GitHub Actions 中上游 job 被 skip 会导致下游默认也 skip，deploy 必须用 `!failure() && !cancelled()` 而非默认 `success()`，否则纯内容提交（quality/e2e 都 skip）永远无法部署
- `concurrency: group: ci-${{ github.ref }}, cancel-in-progress: true`（连续 push 只跑最新）
- 每个 job `timeout-minutes: 15`
- Node 固定 20，`cache: npm`，`npm ci`
- 效果：写文章的提交只跑 content+build+deploy（~2 分钟）；改代码的提交全量（~6-8 分钟）

### 4.7 Claude Code hooks（`.claude/settings.json`）

- **PostToolUse**（matcher: `Edit|Write`）：对改动的 `.js/.jsx` 文件跑 `eslint --fix`，对 `.js/.jsx/.css/.json` 跑 `prettier --write`；自动修复静默完成，修不掉的错误以 hook 输出回馈给 AI 当场修
- **不配** Stop hook 跑构建/测试（build 1-2 分钟太重，会把每轮对话拖死）——完整验证交给三级制约定 + CI
- hook 脚本须兼容 Git Bash（用户环境为 Windows + Git Bash）

### 4.8 pre-commit（husky + lint-staged）

- `package.json` 中 lint-staged 配置：`*.{js,jsx}` → `eslint --fix` + `prettier --write`；`*.{css,json,md}` → `prettier --write`（md 仅限仓库根目录与 src/，不碰 docs/ blog/ 内容）
- 作用：拦截**所有**提交人——AI 逃不过，用户手改也逃不过；与 hook 重复是有意的纵深防御
- 不在 pre-commit 跑测试（太慢会逼人 `--no-verify`）

### 4.9 外链巡检（独立 `link-check.yml`）

- `lycheeverse/lychee-action`，cron 每周一上午；扫描 `docs/**` `blog/**` 的外部 URL
- 失败时自动创建/更新一个固定标题的 GitHub Issue（避免重复开单）
- 排除：localhost、需登录的站点（按误报情况维护 exclude 列表）

## 5. AI 工作流三级制（写入 CLAUDE.md）

| 级别 | 范围 | 流程 |
| ---- | ---- | ---- |
| L1 内容 | blog/ docs/ static/ 的增改 | 直接改；提交前跑 `npm run check:content`；CI 快速通道把关 |
| L2 小修 | 单文件 bug 修复、样式微调、文案 | 直接改；提交前跑 `npm run check`（聚合命令）；触碰无测试模块时顺带补该改动的测试 |
| L3 功能 | 新功能、跨文件改动、重构、依赖变更 | 完整流程：brainstorm → spec → plan → 子代理实施 + 双重审查 → 验收（即 SkillHub 模式） |

配套约定（同步写入 CLAUDE.md）：

- **改到哪补到哪**：任何级别触碰 `src/`、`plugins/` 中无测试覆盖的逻辑时，为改动部分补测试是任务的一部分，不是可选项
- 提交信息延续现有惯例：中文一行式，必要时加 body
- `npm run check` = `lint + typecheck + test + check:content`（不含 build/e2e，本地秒级~分钟级反馈）

## 6. npm scripts 汇总

```
lint            eslint src plugins scripts
lint:fix        eslint --fix ...
format          prettier --write .
format:check    prettier --check .
typecheck       tsc --noEmit
test            vitest run
test:watch      vitest
test:e2e        playwright test
check:content   node scripts/check-content.mjs
check           npm-run-all lint typecheck test check:content（或 && 串联）
```

## 7. 非目标（本期明确不做）

- 视觉回归（截图对比/Argos）—— 访谈确认不守护像素一致性
- markdownlint —— 内容规范靠 CLAUDE.md 约定 + check-content 查数据问题
- Lighthouse / 性能预算 —— 仅保留图片体积报警
- 覆盖率阈值、PR 工作流、多浏览器 E2E、Node 版本矩阵

## 8. 落地路线（四阶段，每阶段独立可验收）

| 阶段 | 内容 | 验收 |
| ---- | ---- | ---- |
| P1 地基 | ESLint+Prettier 接入与存量清理、husky+lint-staged、Claude Code hooks、check-content 脚本 | `npm run lint`/`check:content` 全绿；故意写坏代码提交被 pre-commit 拦下 |
| P2 测试 | Vitest+RTL 接入、SkillCard+skills 页首批用例、jsconfig+typecheck | `npm run check` 全绿；删掉 accordion 逻辑跑测试必须红 |
| P3 门禁 | 重构 CI 为路径分流编排、E2E 接入（5 条旅程） | 纯内容提交 ~2 分钟部署；代码提交全量门禁；e2e 故意破坏可阻断 deploy |
| P4 巡检 | lychee 周扫 workflow | 手动触发一次，确认能产出 Issue |

每阶段走 L3 流程（plan → 实施 → 审查）。

## 9. 风险与权衡

- **GitHub Actions 用量**：公共仓库免费无限分钟；若转私有需重估（全量 ~8 分钟/次）
- **e2e flaky**：retries:1 + 仅 Chromium + 本地构建产物（无外网依赖）已最大化稳定性；若仍频繁误伤，降级该用例为告警并记录
- **husky 在 Windows**：Git Bash 环境下 husky/lint-staged 正常工作；hook 脚本统一用 bash 语法
- **双份元数据的根治**：POSTS↔blog/ 同步靠脚本"查"而非"消灭"（重构为单一数据源属 L3 改动，本期不做，脚本兜底已足够）
- **密码保护**：纯前端校验，密码明文在公开仓库与 JS 产物中可见——E2E 方案不受影响，但安全性预期应清醒（与本体系无关，顺带记录）
