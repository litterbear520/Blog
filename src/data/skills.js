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
];
