// MessageFlow 的数据注册表：variant 名 → 一张消息流（泳道）图。每张图一个文件，写完在这里登记。
// 数据形状（校验规则见 src/components/MessageFlow/model.mjs）：
//   summary       必填。读屏软件读的一段话：这张图说明了什么
//   title         可选。写成这张图要回答的问题，显示在图的左上角
//   participants  [{ id, name, sub?, role? }]，从左到右排列；role 取 neutral / process / done / external
//   items         从上到下，两种：
//     消息 { from, to, label?, rows?, kind?, collapsed?, focal? }
//          label 支持 `行内代码`；rows 是 [角色, 块类型, 内容] 组成的小表，角色格按 user / assistant 自动上色；
//          kind 为 secondary 时画成细线（次要消息）；collapsed 表示讲过的消息，折叠成斜体占位
//     注释 { note: 参与者 id 或 [两个 id], text, focal? }，画在生命线上，用来写门控、判断这类发生在一方内部的事
//   focal         整张图最多一项，画成陶土色结论框
// 页面里写 <MessageFlow variant="名字" />，加 upTo={n} 只画前 n 项，同一张图可以在几处逐步展开。

import toolBoundarySearch from './toolBoundarySearch';

export default { toolBoundarySearch };
