// 由 Claude Academy《Model Context Protocol: Advanced Topics》的演练示例项目整理而来。
// files：示例项目的完整文件内容（路径 → 源码）；steps：每一步的说明与对应高亮的文件/行区间。

export const files = {
  ".gitignore": `# Python-generated files
__pycache__/
*.py[oc]
build/
dist/
wheels/
*.egg-info

# Virtual environments
.venv
.python-version
`,
  "README.md": `# MCP Logging and Progress Demo

A demonstration of the Model Context Protocol using a STDIO transport.

## Setup

Install dependencies using uv:

\`\`\`bash
uv sync
\`\`\`

## Running the Project

Run the MCP client:

\`\`\`bash
uv run client.py
\`\`\`
`,
  "client.py": `from mcp import ClientSession, StdioServerParameters
from mcp.client.stdio import stdio_client
from mcp.types import LoggingMessageNotificationParams

server_params = StdioServerParameters(
    command="uv",
    args=["run", "server.py"],
)


async def logging_callback(params: LoggingMessageNotificationParams):
    print(params.data)


async def print_progress_callback(
    progress: float, total: float | None, message: str | None
):
    if total is not None:
        percentage = (progress / total) * 100
        print(f"Progress: {progress}/{total} ({percentage:.1f}%)")
    else:
        print(f"Progress: {progress}")


async def run():
    async with stdio_client(server_params) as (read, write):
        async with ClientSession(
            read, write, logging_callback=logging_callback
        ) as session:
            await session.initialize()

            await session.call_tool(
                name="add",
                arguments={"a": 1, "b": 3},
                progress_callback=print_progress_callback,
            )


if __name__ == "__main__":
    import asyncio

    asyncio.run(run())
`,
  "pyproject.toml": `[project]
name = "notifications"
version = "0.1.0"
description = "Demonstration of notifications with MCP"
readme = "README.md"
requires-python = ">=3.10"
dependencies = [
    "aioconsole>=0.8.1",
    "mcp[cli]>=1.9.3",
]

[tool.setuptools]
py-modules = ["client", "server"]

[build-system]
requires = ["setuptools>=61.0"]
build-backend = "setuptools.build_meta"
`,
  "server.py": `from mcp.server.fastmcp import FastMCP, Context
import asyncio

mcp = FastMCP(name="Demo Server")


@mcp.tool()
async def add(a: int, b: int, ctx: Context) -> int:
    await ctx.info("Preparing to add...")
    await ctx.report_progress(20, 100)

    await asyncio.sleep(2)

    await ctx.info("OK, adding...")
    await ctx.report_progress(80, 100)

    return a + b


if __name__ == "__main__":
    mcp.run(transport="stdio")
`,
};

export const steps = [
  {
    "title": "工具函数接收 Context 参数",
    "body": [
      {
        "type": "p",
        "text": "工具函数会自动接收 'Context' 作为其最后一个参数。这个对象具有用于向客户端记录日志和报告进度的方法。"
      }
    ],
    "file": "server.py",
    "line": 8,
    "endLine": 8
  },
  {
    "title": "使用 context 创建日志和进度",
    "body": [
      {
        "type": "p",
        "text": "在您的工具函数中，调用 `info()`、`warning()`、`debug()` 或 `error()` 方法来为客户端记录不同类型的消息。还要调用 `report_progress()` 方法来估计工具调用剩余工作量。"
      }
    ],
    "file": "server.py",
    "line": 9,
    "endLine": 15
  },
  {
    "title": "在客户端定义回调",
    "body": [
      {
        "type": "p",
        "text": "客户端需要定义日志记录和进度回调，这些回调将在服务器发出日志或进度消息时自动被调用。这些回调应尝试向用户显示提供的日志记录和进度数据。"
      }
    ],
    "file": "client.py",
    "line": 11,
    "endLine": 22
  },
  {
    "title": "将回调传递给相应的函数",
    "body": [
      {
        "type": "p",
        "text": "确保您将日志记录回调提供给 `ClientSession`，并将进度回调提供给 `call_tool()` 函数。"
      }
    ],
    "file": "client.py",
    "line": 27,
    "endLine": 36
  }
];

export default { files, steps };
