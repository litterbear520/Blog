// 《写给模型的工具结果》“工具结果里的一句说明”：搜索零条时，结果开头那一行说明让模型先换个关键词再搜。
// 调用参数是示意；工具名、参数字段和结果开头那行说明与代码一致（serialization.py 的搜索结果头部）。
export default {
  title: '零条结果时，模型怎么知道下一步？',
  summary:
    '这张图说明一次零条结果的搜索：模型用“双人帐篷”调用 search_products，执行器交回零条结果，开头附一行说明，要模型告诉顾客没有之前先用更宽泛的关键词再搜一次；模型于是改搜“帐篷”，这次交回了那顶双人徒步帐篷。',
  participants: [
    { id: 'model', name: '模型', sub: '决定搜什么', role: 'process' },
    { id: 'executor', name: '执行器', sub: '执行搜索，写成结果', role: 'process' },
  ],
  items: [
    {
      from: 'model',
      to: 'executor',
      label: '调用 `search_products`',
      rows: [['assistant', 'tool_use', '`{"query": "双人帐篷", "filters": {"max_price": 200}}`']],
    },
    {
      from: 'executor',
      to: 'model',
      label: '零条结果，开头附一行说明',
      rows: [['user', 'tool_result', '搜索返回 0 条结果……在告知顾客没有该商品之前，先用更宽泛的关键词重试一次，不要把其他商品当作顾客要找的那个。']],
      focal: true,
    },
    { note: 'model', text: '先不告诉顾客没有，换一个更宽泛的关键词' },
    {
      from: 'model',
      to: 'executor',
      label: '再调用一次',
      rows: [['assistant', 'tool_use', '`{"query": "帐篷", "filters": {"max_price": 200}}`']],
    },
    {
      from: 'executor',
      to: 'model',
      label: '一条结果',
      rows: [['user', 'tool_result', '搜索返回 1 条结果……，后面是那顶双人徒步帐篷的记录']],
    },
  ],
};
