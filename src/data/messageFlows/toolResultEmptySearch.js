// 《写给模型的工具结果》“工具结果里的一句说明”：搜索零条时，结果开头那一行说明让模型先换个关键词再搜。
// 和《工具边界》的 toolBoundarySearch 用同样的三条泳道。调用参数只写关键词（价格上限和这里讲的事无关）；
// 工具名、参数字段和结果开头那行说明与代码一致（serialization.py 的搜索结果头部）。
export default {
  title: '零条结果时，模型怎么知道下一步？',
  summary:
    '这张图说明一次零条结果的搜索：模型用“双人帐篷”调用 search_products，后端没有匹配的商品；执行器交回零条结果，开头附一行说明，要模型告诉顾客没有之前先用更宽泛的关键词再搜一次；模型于是改搜“帐篷”，这次交回了那顶双人徒步帐篷。',
  participants: [
    { id: 'model', name: '模型', sub: '决定搜什么', role: 'process' },
    { id: 'executor', name: '执行器', sub: '把结果写给模型', role: 'process' },
    { id: 'backend', name: '后端', sub: '商店的搜索系统', role: 'external' },
  ],
  items: [
    {
      from: 'model',
      to: 'executor',
      label: '调用 `search_products`',
      rows: [['assistant', 'tool_use', '`{"query": "双人帐篷"}`']],
    },
    { from: 'executor', to: 'backend', label: '按关键词搜索' },
    { from: 'backend', to: 'executor', label: '没有匹配的商品', kind: 'secondary' },
    {
      from: 'executor',
      to: 'model',
      label: '零条结果，开头附一行说明',
      rows: [['user', 'tool_result', '搜索返回 0 条结果……在告知顾客没有该商品之前，先用更宽泛的关键词重试一次……']],
      focal: true,
    },
    { note: 'model', text: '先不说没有，换个更宽泛的词' },
    {
      from: 'model',
      to: 'executor',
      label: '再调用一次',
      rows: [['assistant', 'tool_use', '`{"query": "帐篷"}`']],
    },
    { note: ['executor', 'backend'], text: '再搜一次，找到那顶双人徒步帐篷' },
    {
      from: 'executor',
      to: 'model',
      label: '一条结果',
      rows: [['user', 'tool_result', '搜索返回 1 条结果……，后面是那顶帐篷的记录']],
    },
  ],
};
