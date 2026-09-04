// 《Model Context Protocol：高级主题》概念评估的题目（取自官方中文版）。
// 原站在服务端判分，不公开答案；这里的 answer（正确选项下标）由笔记作者依据课文标注。

export const PASSING_PERCENTAGE = 70;

const QUESTIONS = [
  {
    text: '您的 MCP 服务器需要使用 Claude 来总结数据，但您不希望服务器处理 API 费用。您应该使用哪项功能？',
    options: ['进度通知', '根目录（Roots）', '日志记录', '采样（Sampling）'],
    answer: 3,
  },
  {
    text: '您的 MCP 工具发送一个"Call Tool Request"（调用工具请求）并期望获得返回结果。这是什么类型的消息模式？',
    options: ['请求-结果消息', '日志消息', '进度消息', '通知消息'],
    answer: 0,
  },
  {
    text: '您的 StreamableHTTP 服务器需要向客户端发送进度更新，但 HTTP 通常不允许服务器发起的请求。StreamableHTTP 如何解决这个问题？',
    options: [
      '它创建服务器发送事件（Server-Sent Events，SSE）连接',
      '它将消息存储在数据库中',
      '它改用 WebSocket',
      '它切换到 stdio 传输',
    ],
    answer: 0,
  },
  {
    text: '用户要求 Claude"转换 video.mp4"，但 Claude 不知道该文件位于何处。哪项 MCP 功能有助于解决这个问题？',
    options: ['JSON 消息', '采样（Sampling）', '根目录（Roots）', '进度通知'],
    answer: 2,
  },
  {
    text: '您希望获得更简单的 HTTP 响应，不使用流式传输，只需以纯 JSON 形式获取最终结果。您应该启用哪个标志？',
    options: ['json_response=True', 'stateless_http=True', 'simple_mode=True', 'streaming=False'],
    answer: 0,
  },
  {
    text: '您正在本地开发一个 MCP 服务器，并希望用最简单的方式在同一台机器上测试客户端和服务器之间的通信。您应该使用哪种传输方式？',
    options: ['Stdio 传输', 'WebSocket 传输', 'HTTP 传输', 'StreamableHTTP 传输'],
    answer: 0,
  },
  {
    text: '哪种传输方法要求客户端和服务器都在同一台机器上运行？',
    options: ['HTTP 传输', 'WebSocket 传输', 'TCP 传输', 'Stdio 传输'],
    answer: 3,
  },
  {
    text: '在 MCP 中，roots（根目录）是什么？',
    options: [
      '拥有完整系统访问权限的管理用户',
      '客户端和服务器之间的主要通信端点',
      'MCP 服务器的主要配置文件',
      '一种告知 MCP 服务器可以访问哪些文件/文件夹的系统',
    ],
    answer: 3,
  },
  {
    text: 'MCP 连接初始化的正确顺序是什么？',
    options: [
      'Initialize Result → Initialize Request → Initialized Notification',
      'Initialize Request → Initialize Result → Initialized Notification',
      'Initialized Notification → Initialize Request → Initialize Result',
      'Initialize Request → Initialized Notification → Initialize Result',
    ],
    answer: 1,
  },
  {
    text: '在 MCP 中，sampling（采样）是什么？',
    options: [
      '一种从多个来源收集数据的方法',
      '一种优化服务器性能的技术',
      '一种让服务器通过已连接的 MCP 客户端访问语言模型的方式',
      '一种验证客户端凭据的过程',
    ],
    answer: 2,
  },
];

export default QUESTIONS;
