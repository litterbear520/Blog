// 《工具边界》：一次商品搜索穿过工具边界的往返，对应课文“工具边界的工作原理”的五步。
// 调用参数是示意，工具名、参数字段和结果的形状与代码一致。
export default {
  title: '一次搜索怎样穿过工具边界？',
  summary:
    '这张图说明一次商品搜索的往返：模型调用 search_products，带上关键词和价格上限；执行器整理参数后交给后端；后端交回按相关度排好序的商品；执行器记下这次会话见过的商品，再把结果连同一行说明交回模型。',
  participants: [
    { id: 'model', name: '模型', sub: '决定搜什么', role: 'process' },
    { id: 'executor', name: '执行器', sub: '检查、整理、记录', role: 'process' },
    { id: 'backend', name: '后端', sub: '商店的搜索系统', role: 'external' },
  ],
  items: [
    {
      from: 'model',
      to: 'executor',
      label: '调用 `search_products`',
      rows: [['assistant', 'tool_use', '`{"query": "帐篷", "filters": {"max_price": 200}}`']],
    },
    { note: 'executor', text: '清洗关键词，校验筛选条件，限制条数' },
    { from: 'executor', to: 'backend', label: '按整理好的参数搜索' },
    { from: 'backend', to: 'executor', label: '按相关度排好序的商品', focal: true },
    { note: 'executor', text: '记下这次会话见过的商品' },
    {
      from: 'executor',
      to: 'model',
      label: '交回结果',
      rows: [['user', 'tool_result', '一行说明，加上那顶帐篷的记录']],
    },
  ],
};
