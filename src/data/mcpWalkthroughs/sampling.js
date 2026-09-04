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
  "client.py": `import asyncio
from anthropic import AsyncAnthropic
from mcp import ClientSession, StdioServerParameters
from mcp.client.stdio import stdio_client
from mcp.client.session import RequestContext
from mcp.types import (
    CreateMessageRequestParams,
    CreateMessageResult,
    TextContent,
    SamplingMessage,
)

anthropic_client = AsyncAnthropic()
model = "claude-sonnet-4-5"

server_params = StdioServerParameters(
    command="uv",
    args=["run", "server.py"],
)


async def chat(input_messages: list[SamplingMessage], max_tokens=4000):
    messages = []
    for msg in input_messages:
        if msg.role == "user" and msg.content.type == "text":
            content = (
                msg.content.text
                if hasattr(msg.content, "text")
                else str(msg.content)
            )
            messages.append({"role": "user", "content": content})
        elif msg.role == "assistant" and msg.content.type == "text":
            content = (
                msg.content.text
                if hasattr(msg.content, "text")
                else str(msg.content)
            )
            messages.append({"role": "assistant", "content": content})

    response = await anthropic_client.messages.create(
        model=model,
        messages=messages,
        max_tokens=max_tokens,
    )

    text = "".join([p.text for p in response.content if p.type == "text"])
    return text


async def sampling_callback(
    context: RequestContext, params: CreateMessageRequestParams
):
    # Call Claude using the Anthropic SDK
    text = await chat(params.messages)

    return CreateMessageResult(
        role="assistant",
        model=model,
        content=TextContent(type="text", text=text),
    )


async def run():
    async with stdio_client(server_params) as (read, write):
        async with ClientSession(
            read, write, sampling_callback=sampling_callback
        ) as session:
            await session.initialize()

            result = await session.call_tool(
                name="summarize",
                arguments={"text_to_summarize": "lots of text"},
            )
            print(result.content)


if __name__ == "__main__":
    import asyncio

    asyncio.run(run())
`,
  "pyproject.toml": `[project]
name = "sampling"
version = "0.1.0"
description = "Demonstration of sampling with MCP"
readme = "README.md"
requires-python = ">=3.10"
dependencies = [
    "aioconsole>=0.8.1",
    "anthropic>=0.53.0",
    "mcp[cli]>=1.9.3",
]

[tool.setuptools]
py-modules = ["client", "server"]

[build-system]
requires = ["setuptools>=61.0"]
build-backend = "setuptools.build_meta"
`,
  "server.py": `from mcp.server.fastmcp import FastMCP, Context
from mcp.types import SamplingMessage, TextContent

mcp = FastMCP(name="Demo Server")


@mcp.tool()
async def summarize(text_to_summarize: str, ctx: Context):
    prompt = f"""
        Please summarize the following text:
        {text_to_summarize}
    """

    result = await ctx.session.create_message(
        messages=[
            SamplingMessage(
                role="user", content=TextContent(type="text", text=prompt)
            )
        ],
        max_tokens=4000,
        system_prompt="You are a helpful research assistant.",
    )

    if result.content.type == "text":
        return result.content.text
    else:
        raise ValueError("Sampling failed")


if __name__ == "__main__":
    mcp.run(transport="stdio")
`,
};

export const steps = [
  {
    "title": "启动采样",
    "body": [
      {
        "type": "p",
        "text": "在服务器端，在工具调用期间，运行 `create_message()` 方法，传入一些您希望发送给语言模型的消息。"
      }
    ],
    "file": "server.py",
    "line": 14,
    "endLine": 22
  },
  {
    "title": "采样回调",
    "body": [
      {
        "type": "p",
        "text": "在客户端，您必须实现一个采样回调。它将接收服务器提供的消息列表。"
      }
    ],
    "file": "client.py",
    "line": 50,
    "endLine": 52
  },
  {
    "title": "消息格式",
    "body": [
      {
        "type": "p",
        "text": "服务器提供的消息列表是为 MCP 中的通信而格式化的。这些单独的消息不保证与您使用的任何 LLM SDK 兼容。"
      },
      {
        "type": "p",
        "text": "例如，如果您使用的是 Anthropic SDK，您需要编写一些转换逻辑，将 MCP 消息转换为与 Anthropic SDK 兼容的格式。"
      }
    ],
    "file": "client.py",
    "line": 24,
    "endLine": 38
  },
  {
    "title": "返回生成的文本",
    "body": [
      {
        "type": "p",
        "text": "使用 LLM 生成文本后，您将返回一个 `CreateMessageResult`，其中包含生成的文本。"
      }
    ],
    "file": "client.py",
    "line": 53,
    "endLine": 60
  },
  {
    "title": "连接回调",
    "body": [
      {
        "type": "p",
        "text": "别忘了：客户端上的回调需要传入 `ClientSession` 调用中。"
      }
    ],
    "file": "client.py",
    "line": 66,
    "endLine": 66
  },
  {
    "title": "获取结果",
    "body": [
      {
        "type": "p",
        "text": "客户端生成并返回一些文本后，它将被发送到服务器。您可以对这段文本做任何事情："
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "将其用作工具中工作流程的一部分",
          "决定进行另一次采样调用",
          "返回生成的文本"
        ]
      }
    ],
    "file": "server.py",
    "line": 24,
    "endLine": 27
  }
];

export default { files, steps };
