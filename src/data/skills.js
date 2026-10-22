// src/data/skills.js
// SkillHub 技能数据。新增技能 = 追加一个对象，无需改组件/页面。
// category 必须是 CATEGORIES 之一，筛选栏按 CATEGORIES 的顺序生成；数组也按这个顺序排。
// source 取值：'官方' | '社区' | '自建'，显示为卡片徽标。
export const CATEGORIES = ['设计', '工程', '联网', '分析'];

export const SKILLS = [
  {
    id: 'frontend-design',
    name: 'frontend-design',
    author: 'anthropics',
    category: '设计',
    source: '官方',
    description:
      '为新页面或改版定下鲜明的审美方向，在字体、配色和布局上做出明确取舍，避开模板化的默认样式。',
    install: [
      {
        label: 'npx',
        command:
          'npx skills add https://github.com/anthropics/skills --skill frontend-design',
      },
    ],
    repo: 'https://github.com/anthropics/skills',
  },
  {
    id: 'design-taste-frontend',
    name: 'design-taste-frontend',
    author: 'Leonxlnx',
    category: '设计',
    source: '社区',
    description:
      '专治“AI 味”网页：从 247 个精选站点提炼设计方向，再用真实浏览器截图边看边改。适合落地页、作品集等对外页面，不用于仪表盘和应用界面。',
    install: [
      {
        label: 'npx',
        command:
          'npx skills add https://github.com/Leonxlnx/taste-skill --skill design-taste-frontend',
      },
    ],
    repo: 'https://github.com/Leonxlnx/taste-skill',
  },
  {
    id: 'ui-ux-pro-max',
    name: 'ui-ux-pro-max',
    author: 'nextlevelbuilder',
    category: '设计',
    source: '社区',
    description:
      '可检索的 UI/UX 设计知识库：内置风格、配色、字体搭配和 UX 准则，按产品类型推理出整套设计系统，覆盖 Web、移动端和桌面端的常用技术栈。',
    install: [
      {
        label: 'npx',
        command:
          'npx skills add nextlevelbuilder/ui-ux-pro-max-skill --skill ui-ux-pro-max',
      },
    ],
    repo: 'https://github.com/nextlevelbuilder/ui-ux-pro-max-skill',
  },
  {
    id: 'web-design-guidelines',
    name: 'web-design-guidelines',
    author: 'vercel-labs',
    category: '设计',
    source: '社区',
    description:
      '按 Vercel 的 Web Interface Guidelines 审查界面代码：每次先拉取最新规则，再以“文件:行号”逐条列出可访问性、交互和细节问题。',
    install: [
      {
        label: 'npx',
        command:
          'npx skills add vercel-labs/agent-skills --skill web-design-guidelines',
      },
    ],
    repo: 'https://github.com/vercel-labs/agent-skills',
  },
  {
    id: 'diagram-design',
    name: 'diagram-design',
    author: 'cathrynlavery',
    category: '设计',
    source: '社区',
    description:
      '画编辑排版风的技术图表：架构图、流程图、时序图、甘特图等 40 多种类型，产出自包含的 HTML + SVG，可套用品牌配色，也能把 Mermaid、draw.io 重画成同一风格。',
    install: [
      {
        label: 'npx',
        command: 'npx skills add cathrynlavery/diagram-design',
      },
    ],
    repo: 'https://github.com/cathrynlavery/diagram-design',
  },
  {
    id: 'superpowers',
    name: 'superpowers',
    author: 'obra',
    category: '工程',
    source: '社区',
    description:
      '一套完整的编程智能体开发方法论：需求梳理、实施计划、TDD、系统化调试、子代理驱动开发等技能组合使用，串起从想法到交付的整个流程。',
    install: [
      {
        label: 'Claude Code 插件',
        command: '/plugin install superpowers@claude-plugins-official',
      },
    ],
    repo: 'https://github.com/obra/superpowers',
  },
  {
    id: 'matt-pocock-skills',
    name: 'matt-pocock-skills',
    author: 'mattpocock',
    category: '工程',
    source: '社区',
    description:
      '面向真实工程的技能合集：需求追问、领域建模、TDD、疑难 bug 诊断、代码审查等，每个技能小而独立，可以按需挑选、改成自己的流程。',
    install: [
      {
        label: 'npx',
        command: 'npx skills@latest add mattpocock/skills',
      },
    ],
    repo: 'https://github.com/mattpocock/skills',
  },
  {
    id: 'agent-browser',
    name: 'agent-browser',
    author: 'vercel-labs',
    category: '联网',
    source: '社区',
    description:
      '给智能体用的浏览器自动化命令行：基于无障碍树快照和元素引用操作 Chrome，打开网页、填表、点击、截图、抓数据都是一条命令，也能驱动 Electron 桌面应用。',
    install: [
      {
        label: 'npm（命令行本体）',
        command: 'npm i -g agent-browser && agent-browser install',
      },
      {
        label: 'npx（技能）',
        command: 'npx skills add vercel-labs/agent-browser',
      },
    ],
    repo: 'https://github.com/vercel-labs/agent-browser',
  },
  {
    id: 'web-access',
    name: 'web-access',
    author: 'eze-is',
    category: '联网',
    source: '社区',
    description:
      '给智能体补齐联网能力：一套搜索、抓取和浏览器操作的调度策略，用 CDP 直连日常使用的浏览器（沿用已有登录态），并按站点积累访问经验。',
    install: [
      {
        label: 'npx',
        command: 'npx skills add eze-is/web-access',
      },
    ],
    repo: 'https://github.com/eze-is/web-access',
  },
  {
    id: 'context7',
    name: 'context7',
    author: 'upstash',
    category: '联网',
    source: '社区',
    description:
      '把最新、与版本对应的库文档和代码示例注入上下文，减少过时示例和编造的 API，支持 CLI + 技能与 MCP 两种接入方式。',
    install: [
      {
        label: 'npx',
        command: 'npx ctx7 setup',
      },
    ],
    repo: 'https://github.com/upstash/context7',
  },
  {
    id: 'rea',
    name: 'rea',
    author: 'morluto',
    category: '分析',
    source: '社区',
    description:
      'REA（Reverse Engineer Anything）：没有源码也能弄清一个功能怎么实现，可分析原生二进制、Electron/JS 应用、.NET 程序集和网站，每条结论都附带证据。',
    install: [
      {
        label: 'npx（MCP + 技能）',
        command: 'npx rea-agents setup',
      },
    ],
    repo: 'https://github.com/morluto/rea',
  },
  {
    id: 'boss-job-analyzer',
    name: 'boss-job-analyzer',
    author: 'litterbear520',
    category: '分析',
    source: '自建',
    description:
      '抓取 BOSS 直聘某类岗位的真实 JD：模型逐条标注技术栈，脚本做确定性统计，产出含技术栈、学历与薪资分布、可点开原文的岗位卡片墙的单文件 HTML 报告。',
    install: [
      {
        label: 'npx',
        command:
          'npx skills add litterbear520/littlebear-skills --skill boss-job-analyzer',
      },
    ],
    repo: 'https://github.com/litterbear520/littlebear-skills/tree/main/boss-job-analyzer',
  },
];
