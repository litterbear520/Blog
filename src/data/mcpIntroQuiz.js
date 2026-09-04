// 《Model Context Protocol 简介》最终评估的题目（取自官方中文版）。
// 原站在服务端判分，不公开答案；这里的 answer（正确选项下标）由笔记作者依据课文标注。

export const PASSING_PERCENTAGE = 70;

const QUESTIONS = [
  {
    text: '您正在构建一个 MCP 客户端，以将您的应用程序连接到 MCP 服务器。您需要哪两个主要组件？',
    options: ['一个 MCP Client 类和一个 Client Session', '一个数据库和一个网络服务器', '一个 REST API 和一个 GraphQL 端点', '一个前端和一个后端'],
    answer: 0,
  },
  {
    text: '您的 MCP 客户端需要查明 MCP 服务器提供了哪些工具。它应该发送什么类型的消息？',
    options: ['ToolDiscoveryRequest', 'GetToolsMessage', 'CallToolRequest', 'ListToolsRequest'],
    answer: 3,
  },
  {
    text: '您已经构建了一个 MCP 服务器，并希望在连接到完整应用程序之前测试您的工具是否正常工作。最简单的方法是什么？',
    options: ['首先直接连接到 Claude', '在终端中手动测试所有内容', '使用内置的 MCP Inspector，运行 `mcp dev mcp_server.py`', '为每个工具编写单独的测试脚本'],
    answer: 2,
  },
  {
    text: '您正在构建一个聊天应用程序，用户可以向 Claude 询问他们的 GitHub 数据。如果没有 MCP，您将面临的主要问题是什么？',
    options: ['用户无法询问有关仓库的问题', 'GitHub 不允许 API 访问', '您必须自己编写和维护所有 GitHub 工具代码', 'Claude 无法理解 GitHub 数据'],
    answer: 2,
  },
  {
    text: '您正在使用 Python MCP SDK 创建一个读取文件的工具。定义此工具的最简单方法是什么？',
    options: ['手动编写 JSON schema', '创建一个单独的配置文件', '在 Python 函数上使用 @mcp.tool() 装饰器', '发送 HTTP 请求来注册该工具'],
    answer: 2,
  },
  {
    text: '您想创建一个根据 ID 获取不同文档的资源，例如 docs://documents/report.pdf。您应该使用哪种类型的资源？',
    options: ['使用工具而不是资源', '一个数据库查询资源', '一个在 URI 中带有参数的模板化资源', '一个具有静态 URI 的直接资源'],
    answer: 2,
  },
];

export default QUESTIONS;
