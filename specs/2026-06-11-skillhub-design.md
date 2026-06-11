# SkillHub（Skills 页面）设计文档

日期：2026-06-11
状态：已与用户确认

## 背景与目标

为博客新增一个「Skills」页面，集中展示自己创建的技能和常用的社区技能（Claude Code skills / plugins）。参考 Hermes Agent 的 Skills Hub（卡片网格 + 点击展开）与 skills.sh 的极简风格。

经分析，Hermes 的实现是：Docusaurus 自定义页面 + 运行时从远程注册中心（agentskills.io）拉取数据。本项目采用其合理缩小版：**自定义页面 + 本地数据文件**。

## 已确认的决策

| 决策点 | 结论 |
| ---- | ---- |
| 整体风格 | Hermes 式卡片网格，点击原位展开 |
| 导航入口 | navbar「博文」之后新增「Skills」，路由 `/skills` |
| 筛选 | 按来源：全部 / 官方 / 社区 / 自建（标签从数据动态生成，无数据的来源不显示） |
| 卡片样式 | 极简文字卡：等宽字体技能名 + 描述 + meta 行（作者 · 来源徽章 + ▾ 指示） |
| 实现方案 | 方案 2：数据与组件分离 |
| 展开行为 | 同一时间只展开一张（accordion），点击新卡片旧卡片自动收起 |

## 架构

| 文件 | 职责 |
| ---- | ---- |
| `src/data/skills.js` | 技能数据，导出 `SKILLS` 数组；后续新增技能只改这个文件 |
| `src/components/SkillCard/index.js` | 卡片组件：收起/展开状态、安装命令复制、GitHub 跳转 |
| `src/components/SkillCard/styles.module.css` | 卡片样式 |
| `src/pages/skills.js` | 页面：hero + 来源筛选 + 卡片网格组装 |
| `src/pages/skills.module.css` | 页面样式 |
| `docusaurus.config.js` | navbar items 中「博文」后新增 `{ to: '/skills', label: 'Skills', position: 'left' }` |

## 数据结构

```javascript
// src/data/skills.js
export const SKILLS = [
  {
    id: 'frontend-design',            // 唯一标识，用作 React key 与展开状态
    name: 'frontend-design',          // 显示名（等宽字体）
    author: 'anthropics',
    source: '官方',                   // '官方' | '社区' | '自建'，筛选维度
    description:
      '创建有独特风格、生产级质量的前端界面，避免千篇一律的 AI 审美。',
    install: [                        // 数组：一个技能可有多种安装方式
      {
        label: 'npx',
        command:
          'npx skills add https://github.com/anthropics/skills --skill frontend-design',
      },
    ],
    repo: 'https://github.com/anthropics/skills',
  },
  {
    id: 'superpowers',
    name: 'superpowers',
    author: 'obra',
    source: '社区',
    description:
      '为 Claude Code 提供结构化开发工作流的技能合集：头脑风暴、写计划、TDD、调试等。',
    install: [
      {
        label: 'Claude Code 插件',
        command: '/plugin install superpowers@claude-plugins-official',
      },
    ],
    repo: 'https://github.com/obra/superpowers',
  },
];
```

字段均为必填。`install[].label` 用于在展开区为每条命令标注安装方式（如 npx / Claude Code 插件）。

## 交互行为

- **网格**：CSS Grid，桌面 3 列 / 平板 2 列 / 手机 1 列（断点与 `bloglist` 一致）。
- **展开/收起**：点击卡片切换；展开状态由页面级 state 记录当前展开的 `id`（accordion，单张展开）。再次点击已展开卡片则收起。
- **展开区内容**：完整描述 + 每条安装命令一个代码块（等宽字体，右侧复制按钮）+ 「GitHub 仓库 ↗」按钮。
- **复制按钮**：`navigator.clipboard.writeText`，成功后按钮短暂显示「已复制」（约 2 秒）；失败时 try/catch 捕获并提示手动复制。点击复制不触发卡片收起（stopPropagation）。
- **GitHub 按钮**：`target="_blank" rel="noopener noreferrer"`，点击不触发卡片收起（stopPropagation）。
- **筛选**：`['全部', ...new Set(SKILLS.map(s => s.source))]` 动态生成标签；点击筛选后网格只显示对应来源。当前数据只会出现「全部 / 官方 / 社区」，加入第一个自建技能后「自建」自动出现。

## 视觉

- **Hero**：沿用 `bloglist.js` 的模式——小标签「Skill Hub」+ 大标题「Skills」+ 副标题 + 分隔线，保持站点家族感。
- **卡片（收起态）**：等宽字体技能名、描述（最多两行，超出截断省略）、底部 meta 行（`author · 来源徽章`，右侧 ▾）。
- **卡片（展开态）**：边框高亮，▾ 翻转为 ▴，下方展开详情区。
- **主题**：暗色优先（站点默认暗色），颜色通过 Docusaurus CSS 变量（`--ifm-*`）适配亮色模式。
- **动效**：展开/收起带过渡动画；卡片入场复用 bloglist 的延迟淡入效果。

## 边界与错误处理

- 无顶层 `window` / `document` 依赖（clipboard 仅在点击事件内调用），SSR 构建安全。
- 某来源筛选下无技能时不会发生（标签由数据生成），无需空状态设计。
- clipboard API 在非 HTTPS/不支持环境失败时，按钮提示「复制失败，请手动复制」。

## 非目标（本期不做）

- 自建技能内容（用户后续自行添加数据）
- 搜索框、安装量统计、远程数据源
- 技能详情独立子页面（详情即展开区，外链到 GitHub）

## 验收标准

1. `npm run build` 零报错。
2. `npm run serve` 手动核对：
   - navbar 出现「Skills」，点击进入 `/skills`；
   - 显示 2 张卡片，筛选标签为「全部 / 官方 / 社区」，筛选行为正确；
   - 点击卡片展开，再点收起；点另一张时前一张自动收起；
   - 复制按钮复制正确命令并显示「已复制」；
   - GitHub 按钮新标签页打开对应仓库，且不影响卡片展开状态；
   - 桌面 / 平板 / 手机三档布局正常；亮、暗两种模式下可读性正常。

## 后续扩展指南

新增技能 = 在 `src/data/skills.js` 的 `SKILLS` 数组追加一个对象（含 `source: '自建'` 时筛选标签自动出现），无需改动组件或页面。
