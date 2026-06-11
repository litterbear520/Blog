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
      '创建有独特风格、生产级质量的前端界面，避免千篇一律的 AI 审美。',
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
