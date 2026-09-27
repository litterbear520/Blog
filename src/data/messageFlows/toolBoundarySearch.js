// 《工具的定义与边界》：一次商品搜索穿过工具边界的往返。
// 调用参数是示意，工具名、字段和结果格式与代码一致。
export default {
  title: '一次搜索怎样穿过工具边界？',
  summary:
    '这张图说明一次商品搜索的往返：模型发出 search_products 调用；执行器清洗和校验参数后交给后端；后端返回按相关度排好序的商品；执行器把这些商品记进 seen_products，再把一行说明和围栏数据作为 tool_result 交回模型。',
  participants: [
    { id: 'model', name: '模型', sub: '读定义、决定搜什么', role: 'process' },
    { id: 'executor', name: '执行器', sub: 'ShoppingToolExecutor', role: 'process' },
    { id: 'backend', name: '后端', sub: 'StorefrontBackend', role: 'external' },
  ],
  items: [
    {
      from: 'model',
      to: 'executor',
      label: '调用 `search_products`',
      rows: [['assistant', 'tool_use', '`{"query": "帐篷", "filters": {"max_price": 200}}`']],
    },
    { note: 'executor', text: '清洗 `query`，校验 `filters`，`limit` 截到 1–8' },
    { from: 'executor', to: 'backend', label: '`search_products(query, filters, limit)`' },
    { from: 'backend', to: 'executor', label: '按相关度排好序的商品：`p-100`', focal: true },
    { note: 'executor', text: '把返回的商品记进 `seen_products`' },
    {
      from: 'executor',
      to: 'model',
      label: '交回结果',
      rows: [['user', 'tool_result', '一行说明，加上 `<storefront_data>` 围栏里的 `p-100` 记录']],
    },
  ],
};
