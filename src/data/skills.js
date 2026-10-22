// src/data/skills.js
// SkillHub 技能数据。新增技能 = 追加一个对象，无需改组件/页面。
// category 必须是 CATEGORIES 之一，筛选栏按 CATEGORIES 的顺序生成；数组也按这个顺序排。
// source 取值：'官方' | '社区' | '自建'，显示为卡片徽标；'自建' 的技能另外收进筛选栏的「个人」。
export const CATEGORIES = ['设计', '工程', '联网', '分析'];

export const SKILLS = [
  {
    id: 'frontend-design',
    name: 'frontend-design',
    author: 'anthropics',
    category: '设计',
    source: '官方',
    description:
      '新建或改版界面时，指导你做出有辨识度、经过考量的视觉设计：确定审美方向、处理字体排印，让每个选择都不像模板默认值。',
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
      '让编程智能体拥有审美的技能：用艺术指导、参考图和浏览器检查，取代千篇一律的 AI 页面。',
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
      '为 AI 提供设计智能的技能，帮助在多个平台上构建专业的 UI/UX。',
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
      '审查界面代码是否符合 Web Interface Guidelines。',
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
      '编辑排版风的图表设计，可用于 Claude Code、Codex、GitHub Copilot、Cursor 等编程智能体。45 种图表类型，输出自包含的 HTML + SVG，不加阴影，也告别粗糙的 Mermaid 图。',
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
      '一套真正管用的智能体技能框架和软件开发方法论。',
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
      '写给真正工程师的技能，直接取自作者本人的 .agents 目录。',
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
      '给 AI 智能体用的浏览器自动化命令行工具。',
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
      '给你的本机 Agent（如 Claude Code、Grok Bot 等）装上完整联网能力的 Skill：三层通道调度 + 浏览器 CDP + 并行分治，自动积累站点经验，不断优化联网效率。',
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
      'Context7 平台：为 AI 智能体提供最新的文档。',
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
      '借助智能体逆向分析任何东西，从应用行为一直深入到原生二进制。',
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
      '抓取 BOSS直聘(zhipin.com)某类岗位的招聘信息，生成 HTML 分析报告（技术栈/语言/学历薪资/加分项 + 可点击原文的岗位卡片墙）。',
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
