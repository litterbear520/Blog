// 由 Claude Academy《Model Context Protocol: Advanced Topics》的演练示例项目整理而来。
// files：示例项目的完整文件内容（路径 → 源码）；steps：每一步的说明与对应高亮的文件/行区间。

export const files = {
  ".env.example": `CLAUDE_MODEL="claude-sonnet-4-5"
ANTHROPIC_API_KEY=""`,
  ".gitignore": `.env
__pycache__
.venv
.DS_Store`,
  "README.md": `# MCP Chat with File System Access

MCP Chat is a command-line interface application that enables interactive chat capabilities with AI models through the Anthropic API. The application supports file system operations with controlled access to specified directories, video conversion capabilities, and extensible tool integrations via the MCP (Model Control Protocol) architecture.

## Prerequisites

- Python 3.10+
- Anthropic API Key
- FFmpeg (for video conversion features)

## Setup

_You must have FFmpeg already installed to convert a video file_. To install FFmpeg on MacOS run:

\`\`\`
brew install ffmpeg
\`\`\`

### Step 1: Configure the environment variables

1. Copy the \`.env.example\` file to create a new \`.env\` file:

\`\`\`bash
cp .env.example .env
\`\`\`

2. Edit the \`.env\` file and set your environment variables:

\`\`\`
CLAUDE_MODEL="claude-sonnet-4-5"  # Or your preferred Claude model
ANTHROPIC_API_KEY=""  # Enter your Anthropic API secret key
\`\`\`

### Step 2: Install dependencies

#### Setup with uv

[uv](https://github.com/astral-sh/uv) is a fast Python package installer and resolver.

1. Install uv, if not already installed:

\`\`\`bash
pip install uv
\`\`\`

2. Install dependencies:

\`\`\`bash
uv sync
\`\`\`

3. Run the project

When running the project, you must specify one or more root directories that the MCP server will have access to. Only files and directories within these roots can be accessed by the server.

\`\`\`bash
uv run main.py <root1> [root2] [root3] ...
\`\`\`

Examples:

\`\`\`bash
# Single directory
uv run main.py /path/to/videos

# Multiple directories
uv run main.py /home/user/videos /mnt/storage/media ~/Documents

# Current directory
uv run main.py .
\`\`\`

## Features

### File System Access

The server can only access files and directories within the specified root paths. This provides security by limiting file system access to approved locations.

### Available Tools

- **list_roots**: List all accessible root directories
- **read_dir**: Read contents of a directory (must be within a root)
- **convert_video**: Convert MP4 videos to other formats (avi, mov, webm, mkv, gif)

### Video Conversion

The video conversion tool uses FFmpeg to convert MP4 files to various formats:

- Standard video formats: AVI, MOV, WebM, MKV
- GIF conversion with optimized settings
- Medium quality preset for balanced file size and quality
`,
  "core/__init__.py": ``,
  "core/chat.py": `from core.claude import Claude
from mcp_client import MCPClient
from core.tools import ToolManager
from anthropic.types import MessageParam


class Chat:
    def __init__(self, claude_service: Claude, clients: dict[str, MCPClient]):
        self.claude_service: Claude = claude_service
        self.clients: dict[str, MCPClient] = clients
        self.messages: list[MessageParam] = []

    async def _process_query(self, query: str):
        self.messages.append({"role": "user", "content": query})

    async def run(
        self,
        query: str,
        stream: bool = False,
        on_event=None,
    ) -> str:
        final_text_response = ""

        await self._process_query(query)

        while True:
            if stream and on_event:
                response = await self.claude_service.chat_stream(
                    messages=self.messages,
                    tools=await ToolManager.get_all_tools(self.clients),
                    on_event=on_event,
                )
            else:
                response = await self.claude_service.chat(
                    messages=self.messages,
                    tools=await ToolManager.get_all_tools(self.clients),
                )

            self.claude_service.add_assistant_message(self.messages, response)

            if response.stop_reason == "tool_use":
                if not stream:
                    print(self.claude_service.text_from_message(response))
                tool_result_parts = await ToolManager.execute_tool_requests(
                    self.clients, response
                )

                self.claude_service.add_user_message(
                    self.messages, tool_result_parts
                )
            else:
                final_text_response = self.claude_service.text_from_message(
                    response
                )
                break

        return final_text_response
`,
  "core/claude.py": `from anthropic import AsyncAnthropic
from anthropic.types import Message


class Claude:
    def __init__(self, model: str):
        self.client = AsyncAnthropic()
        self.model = model

    def add_user_message(self, messages: list, message):
        user_message = {
            "role": "user",
            "content": message.content
            if isinstance(message, Message)
            else message,
        }
        messages.append(user_message)

    def add_assistant_message(self, messages: list, message):
        assistant_message = {
            "role": "assistant",
            "content": message.content
            if isinstance(message, Message)
            else message,
        }
        messages.append(assistant_message)

    def text_from_message(self, message: Message):
        return "
".join(
            [block.text for block in message.content if block.type == "text"]
        )

    async def chat(
        self,
        messages,
        system=None,
        temperature=1.0,
        stop_sequences=[],
        tools=None,
        thinking=False,
        thinking_budget=1024,
    ) -> Message:
        params = {
            "model": self.model,
            "max_tokens": 8000,
            "messages": messages,
            "temperature": temperature,
            "stop_sequences": stop_sequences,
        }

        if thinking:
            params["thinking"] = {
                "type": "enabled",
                "budget_tokens": thinking_budget,
            }

        if tools:
            params["tools"] = tools

        if system:
            params["system"] = system

        message = await self.client.messages.create(**params)
        return message

    async def chat_stream(
        self,
        messages,
        system=None,
        temperature=1.0,
        stop_sequences=[],
        tools=None,
        thinking=False,
        thinking_budget=1024,
        on_event=None,
    ) -> Message:
        params = {
            "model": self.model,
            "max_tokens": 8000,
            "messages": messages,
            "temperature": temperature,
            "stop_sequences": stop_sequences,
        }

        if thinking:
            params["thinking"] = {
                "type": "enabled",
                "budget_tokens": thinking_budget,
            }

        if tools:
            params["tools"] = tools

        if system:
            params["system"] = system

        async with self.client.messages.stream(**params) as stream:
            if on_event:
                async for event in stream:
                    await on_event(event)
            else:
                async for event in stream:
                    pass

        return await stream.get_final_message()
`,
  "core/cli.py": `from prompt_toolkit import PromptSession
from prompt_toolkit.styles import Style
from prompt_toolkit.history import InMemoryHistory
from core.cli_chat import CliChat
import json
from pyboxen import boxen


class CliApp:
    def __init__(self, agent: CliChat):
        self.agent = agent
        self.history = InMemoryHistory()
        self.session = PromptSession(
            history=self.history,
            style=Style.from_dict(
                {
                    "prompt": "#aaaaaa",
                    "completion-menu.completion": "bg:#222222 #ffffff",
                    "completion-menu.completion.current": "bg:#444444 #ffffff",
                }
            ),
            complete_while_typing=True,
            complete_in_thread=True,
        )

    async def initialize(self):
        pass

    async def run(self):
        while True:
            try:
                user_input = await self.session.prompt_async("> ")
                if not user_input.strip():
                    continue

                print()

                tool_calls = {}
                response_text = ""

                async def handle_event(event):
                    nonlocal response_text
                    if hasattr(event, "type"):
                        if event.type == "content_block_delta":
                            if hasattr(event, "delta") and hasattr(
                                event.delta, "type"
                            ):
                                if event.delta.type == "text_delta":
                                    response_text += event.delta.text
                                    print(event.delta.text, end="", flush=True)
                                elif event.delta.type == "input_json_delta":
                                    # Track tool call arguments as they stream
                                    index = event.index
                                    if index not in tool_calls:
                                        tool_calls[index] = {
                                            "name": "",
                                            "args": "",
                                        }
                                    tool_calls[index]["args"] += (
                                        event.delta.partial_json
                                    )
                        elif event.type == "content_block_start":
                            if hasattr(event, "content_block") and hasattr(
                                event.content_block, "type"
                            ):
                                if event.content_block.type == "tool_use":
                                    print()  # New line before tool call
                                    # Store tool name but don't print yet
                                    index = getattr(event, "index", 0)
                                    if index not in tool_calls:
                                        tool_calls[index] = {
                                            "name": "",
                                            "args": "",
                                        }
                                    tool_calls[index]["name"] = (
                                        event.content_block.name
                                    )
                        elif event.type == "content_block_stop":
                            if event.index in tool_calls:
                                tool_name = tool_calls[event.index]["name"]
                                args_json = tool_calls[event.index]["args"]

                                try:
                                    parsed_args = json.loads(args_json)
                                    formatted_args = json.dumps(
                                        parsed_args, indent=2
                                    )
                                    tool_content = f"🔧 {tool_name}

Arguments:
{formatted_args}"
                                except (
                                    json.JSONDecodeError,
                                    TypeError,
                                    ValueError,
                                ):
                                    tool_content = f"🔧 {tool_name}

Arguments: {args_json}"

                                tool_box = boxen(
                                    tool_content,
                                    title="Tool Call",
                                    style="rounded",
                                    color="blue",
                                    padding=0,
                                )
                                print(tool_box)
                                del tool_calls[event.index]

                await self.agent.run(
                    user_input, stream=True, on_event=handle_event
                )

                print()  # Add newline after everything

            except KeyboardInterrupt:
                break
`,
  "core/cli_chat.py": `from typing import List
from mcp.types import Prompt, PromptMessage
from anthropic.types import MessageParam

from core.chat import Chat
from core.claude import Claude
from mcp_client import MCPClient


class CliChat(Chat):
    def __init__(
        self,
        doc_client: MCPClient,
        clients: dict[str, MCPClient],
        claude_service: Claude,
    ):
        super().__init__(clients=clients, claude_service=claude_service)

        self.doc_client: MCPClient = doc_client

    async def list_prompts(self) -> list[Prompt]:
        return await self.doc_client.list_prompts()

    async def get_prompt(
        self, command: str, doc_id: str
    ) -> list[PromptMessage]:
        return await self.doc_client.get_prompt(command, {"doc_id": doc_id})

    async def _process_query(self, query: str):
        self.messages.append({"role": "user", "content": query})


def convert_prompt_message_to_message_param(
    prompt_message: "PromptMessage",
) -> MessageParam:
    role = "user" if prompt_message.role == "user" else "assistant"

    content = prompt_message.content

    # Check if content is a dict-like object with a "type" field
    if isinstance(content, dict) or hasattr(content, "__dict__"):
        content_type = (
            content.get("type", None)
            if isinstance(content, dict)
            else getattr(content, "type", None)
        )
        if content_type == "text":
            content_text = (
                content.get("text", "")
                if isinstance(content, dict)
                else getattr(content, "text", "")
            )
            return {"role": role, "content": content_text}

    if isinstance(content, list):
        text_blocks = []
        for item in content:
            # Check if item is a dict-like object with a "type" field
            if isinstance(item, dict) or hasattr(item, "__dict__"):
                item_type = (
                    item.get("type", None)
                    if isinstance(item, dict)
                    else getattr(item, "type", None)
                )
                if item_type == "text":
                    item_text = (
                        item.get("text", "")
                        if isinstance(item, dict)
                        else getattr(item, "text", "")
                    )
                    text_blocks.append({"type": "text", "text": item_text})

        if text_blocks:
            return {"role": role, "content": text_blocks}

    return {"role": role, "content": ""}


def convert_prompt_messages_to_message_params(
    prompt_messages: List[PromptMessage],
) -> List[MessageParam]:
    return [
        convert_prompt_message_to_message_param(msg) for msg in prompt_messages
    ]
`,
  "core/tools.py": `import json
from typing import Optional, Literal, List
from mcp.types import CallToolResult, Tool, TextContent
from mcp_client import MCPClient
from anthropic.types import Message, ToolResultBlockParam


class ToolManager:
    @classmethod
    async def get_all_tools(cls, clients: dict[str, MCPClient]) -> list[Tool]:
        """Gets all tools from the provided clients."""
        tools = []
        for client in clients.values():
            tool_models = await client.list_tools()
            tools += [
                {
                    "name": t.name,
                    "description": t.description,
                    "input_schema": t.inputSchema,
                }
                for t in tool_models
            ]
        return tools

    @classmethod
    async def _find_client_with_tool(
        cls, clients: list[MCPClient], tool_name: str
    ) -> Optional[MCPClient]:
        """Finds the first client that has the specified tool."""
        for client in clients:
            tools = await client.list_tools()
            tool = next((t for t in tools if t.name == tool_name), None)
            if tool:
                return client
        return None

    @classmethod
    def _build_tool_result_part(
        cls,
        tool_use_id: str,
        text: str,
        status: Literal["success"] | Literal["error"],
    ) -> ToolResultBlockParam:
        """Builds a tool result part dictionary."""
        return {
            "tool_use_id": tool_use_id,
            "type": "tool_result",
            "content": text,
            "is_error": status == "error",
        }

    @classmethod
    async def execute_tool_requests(
        cls, clients: dict[str, MCPClient], message: Message
    ) -> List[ToolResultBlockParam]:
        """Executes a list of tool requests against the provided clients."""
        tool_requests = [
            block for block in message.content if block.type == "tool_use"
        ]
        tool_result_blocks: list[ToolResultBlockParam] = []
        for tool_request in tool_requests:
            tool_use_id = tool_request.id
            tool_name = tool_request.name
            tool_input = tool_request.input

            client = await cls._find_client_with_tool(
                list(clients.values()), tool_name
            )

            if not client:
                tool_result_part = cls._build_tool_result_part(
                    tool_use_id, "Could not find that tool", "error"
                )
                tool_result_blocks.append(tool_result_part)
                continue

            tool_output = None
            try:
                tool_output: CallToolResult | None = await client.call_tool(
                    tool_name, tool_input
                )
                items = []
                if tool_output:
                    items = tool_output.content
                content_list = [
                    item.text for item in items if isinstance(item, TextContent)
                ]
                content_json = json.dumps(content_list)
                tool_result_part = cls._build_tool_result_part(
                    tool_use_id,
                    content_json,
                    "error"
                    if tool_output and tool_output.isError
                    else "success",
                )
            except Exception as e:
                error_message = f"Error executing tool '{tool_name}': {e}"
                print(error_message)
                tool_result_part = cls._build_tool_result_part(
                    tool_use_id,
                    json.dumps({"error": error_message}),
                    "error"
                    if tool_output and tool_output.isError
                    else "success",
                )

            tool_result_blocks.append(tool_result_part)
        return tool_result_blocks
`,
  "core/utils.py": `from pathlib import Path
from urllib.parse import unquote, urlparse


def file_url_to_path(file_url) -> Path:
    """Convert a file:// URL to a Path object."""
    url_str = str(file_url)
    parsed = urlparse(url_str)
    path = unquote(parsed.path)
    if len(path) > 2 and path[0] == "/" and path[2] == ":":
        path = path[1:]

    return Path(path)`,
  "core/video_converter.py": `import os
import asyncio
from pathlib import Path


class VideoConverter:
    """Handles video conversion operations using ffmpeg."""
    
    # Quality presets for video conversion
    QUALITY_PRESETS = {
        "low": {"crf": "28", "preset": "fast"},
        "medium": {"crf": "23", "preset": "medium"},
        "high": {"crf": "18", "preset": "slow"},
    }
    
    SUPPORTED_FORMATS = ["webm", "mkv", "avi", "mov", "gif"]
    
    @classmethod
    def validate_input(cls, input_path: str) -> Path:
        """Validate the input file exists and is an MP4."""
        input_file = Path(input_path)
        
        if not input_file.exists():
            raise ValueError(f"Input file not found: {input_path}")
        
        if not input_path.lower().endswith(".mp4"):
            raise ValueError("Input file must be an MP4 file")
            
        return input_file
    
    @classmethod
    def generate_output_path(cls, input_path: str, format: str) -> str:
        """Generate output path by replacing the file extension."""
        base_path = os.path.splitext(input_path)[0]
        return f"{base_path}.{format.lower()}"
    
    @classmethod
    def build_ffmpeg_command(cls, input_path: str, output_path: str, format: str) -> list:
        """Build the ffmpeg command based on format settings."""
        preset = cls.QUALITY_PRESETS["medium"]
        
        # Base command
        cmd = ["ffmpeg", "-i", input_path, "-y"]
        
        if format.lower() == "gif":
            # Special handling for GIF conversion
            cmd.extend([
                "-vf", "fps=15,scale=480:-1:flags=lanczos",
                "-c:v", "gif",
                output_path
            ])
        elif format.lower() in cls.SUPPORTED_FORMATS:
            # Standard video conversion
            cmd.extend([
                "-c:v", "libx264",
                "-preset", preset["preset"],
                "-crf", preset["crf"],
                "-c:a", "aac",
                "-b:a", "128k",
                output_path
            ])
        else:
            raise ValueError(f"Unsupported output format: {format}")
            
        return cmd
    
    @classmethod
    async def convert(cls, input_path: str, format: str) -> str:
        """
        Convert video file to specified format.
        Returns success message or raises an error.
        """
        # Validate input
        cls.validate_input(input_path)
        
        # Generate output path
        output_path = cls.generate_output_path(input_path, format)
        
        # Build ffmpeg command
        cmd = cls.build_ffmpeg_command(input_path, output_path, format)
        
        try:
            # Run ffmpeg asynchronously
            process = await asyncio.create_subprocess_exec(
                *cmd,
                stdout=asyncio.subprocess.PIPE,
                stderr=asyncio.subprocess.PIPE
            )
            _, stderr = await process.communicate()
            
            if process.returncode != 0:
                raise RuntimeError(f"FFmpeg conversion failed: {stderr.decode()}")
                
            return f"Successfully converted {input_path} to {output_path}"
            
        except FileNotFoundError:
            raise RuntimeError("FFmpeg not found. Please ensure ffmpeg is installed and in PATH")`,
  "main.py": `import asyncio
import sys
import os
from dotenv import load_dotenv
from contextlib import AsyncExitStack

from mcp_client import MCPClient
from core.claude import Claude

from core.cli_chat import CliChat
from core.cli import CliApp

load_dotenv()

# Anthropic Config
claude_model = os.getenv("CLAUDE_MODEL", "claude-sonnet-4-5")
anthropic_api_key = os.getenv("ANTHROPIC_API_KEY", "")


assert claude_model, "Error: CLAUDE_MODEL cannot be empty. Update .env"
assert anthropic_api_key, (
    "Error: ANTHROPIC_API_KEY cannot be empty. Update .env"
)


async def main():
    claude_service = Claude(model=claude_model)

    # Get root directories from command line arguments
    root_paths = sys.argv[1:]
    if not root_paths:
        print("Usage: uv run main.py <root1> [root2] ...")
        print("Example: uv run main.py /path/to/videos /another/path")
        sys.exit(1)

    clients = {}

    async with AsyncExitStack() as stack:
        # Create the MCP client with the provided root directories
        doc_client = await stack.enter_async_context(
            MCPClient(
                command="uv", args=["run", "mcp_server.py"], roots=root_paths
            )
        )
        clients["doc_client"] = doc_client

        chat = CliChat(
            doc_client=doc_client,
            clients=clients,
            claude_service=claude_service,
        )

        cli = CliApp(chat)
        await cli.initialize()
        await cli.run()


if __name__ == "__main__":
    if sys.platform == "win32":
        asyncio.set_event_loop_policy(asyncio.WindowsProactorEventLoopPolicy())
    asyncio.run(main())
`,
  "mcp_client.py": `from typing import Optional, Any
from contextlib import AsyncExitStack
from mcp import ClientSession, StdioServerParameters, types
from mcp.client.stdio import stdio_client
from mcp.types import Root, ListRootsResult, ErrorData
from mcp.shared.context import RequestContext
from pathlib import Path
from pydantic import FileUrl

import json
from pydantic import AnyUrl


class MCPClient:
    def __init__(
        self,
        command: str,
        args: list[str],
        env: Optional[dict] = None,
        roots: Optional[list[str]] = None,
    ):
        self._command = command
        self._args = args
        self._env = env
        self._roots = self._create_roots(roots) if roots else []
        self._session: Optional[ClientSession] = None
        self._exit_stack: AsyncExitStack = AsyncExitStack()

    def _create_roots(self, root_paths: list[str]) -> list[Root]:
        """Convert path strings to Root objects."""
        roots = []
        for path in root_paths:
            p = Path(path).resolve()
            file_url = FileUrl(f"file://{p}")
            roots.append(Root(uri=file_url, name=p.name or "Root"))
        return roots

    async def _handle_list_roots(
        self, context: RequestContext["ClientSession", None]
    ) -> ListRootsResult | ErrorData:
        """Callback for when server requests roots."""
        return ListRootsResult(roots=self._roots)

    async def connect(self):
        server_params = StdioServerParameters(
            command=self._command,
            args=self._args,
            env=self._env,
        )
        stdio_transport = await self._exit_stack.enter_async_context(
            stdio_client(server_params)
        )
        _stdio, _write = stdio_transport
        self._session = await self._exit_stack.enter_async_context(
            ClientSession(
                _stdio,
                _write,
                list_roots_callback=self._handle_list_roots
                if self._roots
                else None,
            )
        )
        await self._session.initialize()

    def session(self) -> ClientSession:
        if self._session is None:
            raise ConnectionError(
                "Client session not initialized or cache not populated. Call connect_to_server first."
            )
        return self._session

    async def list_tools(self) -> list[types.Tool]:
        result = await self.session().list_tools()
        return result.tools

    async def call_tool(
        self, tool_name: str, tool_input
    ) -> types.CallToolResult | None:
        return await self.session().call_tool(tool_name, tool_input)

    async def list_prompts(self) -> list[types.Prompt]:
        result = await self.session().list_prompts()
        return result.prompts

    async def get_prompt(self, prompt_name, args: dict[str, str]):
        result = await self.session().get_prompt(prompt_name, args)
        return result.messages

    async def read_resource(self, uri: str) -> Any:
        result = await self.session().read_resource(AnyUrl(uri))
        resource = result.contents[0]

        if isinstance(resource, types.TextResourceContents):
            if resource.mimeType == "application/json":
                return json.loads(resource.text)

            return resource.text

    async def cleanup(self):
        await self._exit_stack.aclose()
        self._session = None

    async def __aenter__(self):
        await self.connect()
        return self

    async def __aexit__(self, exc_type, exc_val, exc_tb):
        await self.cleanup()
`,
  "mcp_server.py": `from pathlib import Path
from mcp.server.fastmcp import FastMCP
from pydantic import Field
from mcp.server.fastmcp import Context
from core.video_converter import VideoConverter
from core.utils import file_url_to_path

mcp = FastMCP("VidsMCP", log_level="ERROR")


async def is_path_allowed(requested_path: Path, ctx: Context) -> bool:
    roots_result = await ctx.session.list_roots()
    client_roots = roots_result.roots

    if not requested_path.exists():
        return False

    if requested_path.is_file():
        requested_path = requested_path.parent

    for root in client_roots:
        root_path = file_url_to_path(root.uri)
        try:
            requested_path.relative_to(root_path)
            return True
        except ValueError:
            continue

    return False


@mcp.tool()
async def convert_video(
    input_path: str = Field(description="Path to the input MP4 file"),
    format: str = Field(description="Output format (e.g. 'mov')"),
    *,
    ctx: Context,
):
    """Convert an MP4 video file to another format using ffmpeg"""
    input_file = VideoConverter.validate_input(input_path)

    # Ensure the input file is contained in a root
    if not await is_path_allowed(input_file, ctx):
        raise ValueError(f"Access to path is not allowed: {input_path}")

    return await VideoConverter.convert(input_path, format)


@mcp.tool()
async def list_roots(ctx: Context):
    """
    List all directories that are accessible to this server.
    These are the root directories where files can be read from or written to.
    """
    roots_result = await ctx.session.list_roots()
    client_roots = roots_result.roots

    return [file_url_to_path(root.uri) for root in client_roots]


@mcp.tool()
async def read_dir(
    path: str = Field(description="Path to a directory to read"),
    *,
    ctx: Context,
):
    """Read directory contents. Path must be within one of the client's roots."""
    requested_path = Path(path).resolve()

    if not await is_path_allowed(requested_path, ctx):
        raise ValueError("Error: can only read directories within a root")

    return [entry.name for entry in requested_path.iterdir()]


if __name__ == "__main__":
    mcp.run(transport="stdio")
`,
  "pyproject.toml": `[project]
name = "app"
version = "0.1.0"
description = "Add your description here"
readme = "README.md"
requires-python = ">=3.10"
dependencies = [
    "anthropic>=0.51.0",
    "mcp[cli]>=1.8.0",
    "prompt-toolkit>=3.0.51",
    "pyboxen>=1.3.0",
    "python-dotenv>=1.1.0",
]
`,
};

export const steps = [
  {
    "title": "定义根目录",
    "body": [
      {
        "type": "p",
        "text": "理想情况下，用户将指定 MCP 服务器可以访问哪些文件/文件夹。"
      },
      {
        "type": "p",
        "text": "该程序设置为接受一个 CLI 参数列表，这些参数被解释为用户希望允许访问的路径。"
      },
      {
        "type": "p",
        "text": "该路径列表在第 42 行提供给 `MCPClient`。"
      }
    ],
    "file": "main.py",
    "line": 30,
    "endLine": 30
  },
  {
    "title": "创建根对象",
    "body": [
      {
        "type": "p",
        "text": "根据 MCP 规范，所有根目录都应具有以 `file://` 开头的 URI。"
      },
      {
        "type": "p",
        "text": "此函数获取用户提供的路径列表，并将它们转换为 `Root` 对象。"
      }
    ],
    "file": "mcp_client.py",
    "line": 29,
    "endLine": 36
  },
  {
    "title": "根目录回调",
    "body": [
      {
        "type": "p",
        "text": "客户端不会立即将根目录列表提供给服务器。相反，服务器可以在未来某个时间点向客户端发出请求。我们创建一个回调，当服务器请求根目录时将执行该回调。该回调需要在 `ListRootsResult` 对象中返回根目录列表。"
      },
      {
        "type": "p",
        "text": "此回调在第 58 行传入 ClientSession。"
      }
    ],
    "file": "mcp_client.py",
    "line": 38,
    "endLine": 42
  },
  {
    "title": "使用根目录",
    "body": [
      {
        "type": "p",
        "text": "接下来是服务器端。服务器将在两种场景中使用根目录："
      },
      {
        "type": "list",
        "ordered": true,
        "items": [
          "每当工具尝试访问文件或文件夹时",
          "当 LLM（如 Claude）需要将文件或文件夹解析为完整路径时。想象一下当用户说\"读取 todos.txt 文件\"时——Claude 需要弄清楚该文本文件在哪里，它可能通过查看根目录列表来实现这一点"
        ]
      },
      {
        "type": "p",
        "text": "为了处理第二种情况，我们可以定义一个列出根目录的工具，或者直接将它们注入到提示中。"
      }
    ],
    "file": "mcp_server.py",
    "line": 49,
    "endLine": 58
  },
  {
    "title": "访问根目录",
    "body": [
      {
        "type": "p",
        "text": "通过调用 `ctx.session.list_roots()` 来访问根目录。"
      },
      {
        "type": "p",
        "text": "这会向客户端发送一条消息，从而使其运行根目录列表回调。"
      }
    ],
    "file": "mcp_server.py",
    "line": 55,
    "endLine": 55
  },
  {
    "title": "授权访问",
    "body": [
      {
        "type": "p",
        "text": "请记住：MCP SDK 不会尝试限制您的工具可以读取哪些文件或文件夹！您必须自己实现该检查。"
      },
      {
        "type": "p",
        "text": "考虑实现一个类似 `is_path_allowed` 的函数，它将通过将路径与根目录列表进行比较来决定该路径是否可访问。"
      }
    ],
    "file": "mcp_server.py",
    "line": 11,
    "endLine": 29
  },
  {
    "title": "授权访问",
    "body": [
      {
        "type": "p",
        "text": "一旦您构建好了一个授权函数——比如 `is_path_allowed`——请在您的工具中使用它，以确保请求的路径是可访问的。"
      }
    ],
    "file": "mcp_server.py",
    "line": 43,
    "endLine": 44
  }
];

export default { files, steps };
