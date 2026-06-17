// src/data/skills.js
// SkillHub 技能数据。新增技能 = 追加一个对象，无需改组件/页面。
// source 取值：'官方' | '社区' | '自建'，筛选标签按此字段动态生成。
export const SKILLS = [
  {
    id: 'frontend-design',
    name: 'frontend-design',
    author: 'anthropics',
    source: '官方',
    description:
      '为新建或改版 UI 提供有主见的视觉设计指引：审美方向、字体排印与配色决策，避免模板化的默认审美。',
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
    id: 'superpowers',
    name: 'superpowers',
    author: 'obra',
    source: '社区',
    description:
      '面向编程智能体的完整软件开发方法论：可组合的技能合集，覆盖需求梳理、实施计划、TDD、调试与子代理驱动开发。',
    install: [
      {
        label: 'Claude Code 插件',
        command: '/plugin install superpowers@claude-plugins-official',
      },
    ],
    repo: 'https://github.com/obra/superpowers',
  },
  {
    id: 'web-access',
    name: 'web-access',
    author: 'eze-is',
    source: '社区',
    description:
      '给 AI Agent 装上完整联网能力：联网工具调度策略、CDP 直连日常浏览器（自带登录态）与站点经验积累。',
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
    source: '社区',
    description:
      '把最新、版本对应的库文档与代码示例直接注入 LLM 上下文，告别过时示例与幻觉 API，支持 CLI + Skills 与 MCP 两种模式。',
    install: [
      {
        label: 'npx',
        command: 'npx ctx7 setup',
      },
    ],
    repo: 'https://github.com/upstash/context7',
  },
  {
    id: 'boss-job-analyzer',
    name: 'boss-job-analyzer',
    author: 'litterbear520',
    source: '自建',
    description:
      '抓取 BOSS直聘某类岗位的真实 JD：模型读岗位标技术栈、脚本做确定性统计，产出含技术栈/语言、学历薪资分布与可点开原文的岗位卡片墙的单文件 HTML 报告。',
    install: [
      {
        label: 'npx',
        command:
          'npx skills add litterbear520/littlebear-skills --skill boss-job-analyzer',
      },
    ],
    repo: 'https://github.com/litterbear520/littlebear-skills/tree/main/boss-job-analyzer',
  },
  {
    id: 'worldcup-bet-advisor',
    name: 'worldcup-bet-advisor',
    author: 'litterbear520',
    source: '自建',
    description:
      '综合多个 AI 模型对世界杯比赛的预测与讨论，叠加实时倍率去水找价值，给出稳健/平衡/激进三档玩法方案，并产出可复盘进化的单文件 HTML 报告。',
    install: [
      {
        label: 'npx',
        command:
          'npx skills add litterbear520/littlebear-skills --skill worldcup-bet-advisor',
      },
    ],
    repo: 'https://github.com/litterbear520/littlebear-skills/tree/main/worldcup-bet-advisor',
  },
];
