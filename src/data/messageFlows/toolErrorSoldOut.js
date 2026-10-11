// 《失败也写成指令》“失败怎样变成一句指令”：加购一款卖完的睡袋，后端报缺货，执行器换成店铺写好的一句指令交回模型。
// 结果原话照原型店铺实跑（后端抛出缺货信号）；工具名、参数字段与代码一致。
export default {
  title: '加购失败时，模型收到的是什么？',
  summary:
    '这张图说明一次失败的加购：模型调用 add_to_cart 加购那款保暖睡袋；后端发现睡袋缺货，拒绝写入；执行器把缺货信号换成店铺写好的一句指令，标为出错交回模型：没加进购物车，告知顾客，推荐有货的替代品，只有顾客选择后才加入。',
  participants: [
    { id: 'model', name: '模型', sub: '决定下一步', role: 'process' },
    { id: 'executor', name: '执行器', sub: '把失败写成指令', role: 'process' },
    { id: 'backend', name: '后端', sub: '商店的购物车系统', role: 'external' },
  ],
  items: [
    {
      from: 'model',
      to: 'executor',
      label: '调用 `add_to_cart`',
      rows: [['assistant', 'tool_use', '`{"product_id": "p-300", "quantity": 1}`']],
    },
    { from: 'executor', to: 'backend', label: '加购一件' },
    { from: 'backend', to: 'executor', label: '缺货，拒绝写入', kind: 'secondary' },
    { note: 'executor', text: '把缺货信号换成店铺写好的一句指令' },
    {
      from: 'executor',
      to: 'model',
      label: '交回结果，标为出错',
      rows: [['user', 'tool_result', '未加入购物车：p-300 缺货。告知顾客，推荐消息中提到的有货替代品，只有顾客选择后才加入。']],
      focal: true,
    },
  ],
};
