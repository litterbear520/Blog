// AgentLoopViz 的数据注册表：variant 名 → 一次运行的分镜。
// 数据形状（见 claudeCode.js 的注释）：nodes（节点坐标与形状）、edges（连线，可带标签和折线路径）、
// frames（逐帧：高亮哪些节点/连线、冒出哪些消息、这一帧的标题与说明）。
import claudeCode from './claudeCode';
import commerceLoop from './commerceLoop';

export default { claudeCode, commerceLoop };
