# 日志和进度通知

日志和进度通知实现起来很简单，但在使用 MCP 服务器时却能极大地改善用户体验。它们帮助用户了解长时间运行的操作期间正在发生什么，而不是让用户怀疑是否出了问题。

当 Claude 调用一个需要时间才能完成的工具时——比如研究某个主题或处理数据——用户通常在操作完成之前什么都看不到。这可能会令人感到沮丧，因为他们不知道工具是在正常工作还是已经卡住了。

启用日志和进度通知后，用户可以获得实时反馈，准确显示幕后正在发生的事情。他们可以在操作运行时看到进度条、状态消息和详细日志。

## 工作原理

在 Python MCP SDK 中，日志和进度通知通过自动提供给您的工具函数的 Context 参数来实现。这个上下文对象为您提供了在执行期间与客户端进行通信的方法。

```python
@mcp.tool(
    name="research",
    description="Research a given topic"
)
async def research(
    topic: str = Field(description="Topic to research"),
    *,
    context: Context
):
    await context.info("About to do research...")
    await context.report_progress(20, 100)
    sources = await do_research(topic)

    await context.info("Writing report...")
    await context.report_progress(70, 100)
    results = await generate_report(sources)

    return results
```

您将使用的关键方法是：

- `context.info()` - 向客户端发送日志消息
- `context.report_progress()` - 使用当前值和总值更新进度

## 客户端实现

在客户端，您需要设置回调函数来处理这些通知。服务器会发出这些消息，但由您的客户端应用程序决定如何向用户呈现它们。

```python
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
            read,
            write,
            logging_callback=logging_callback
        ) as session:
            await session.initialize()

            await session.call_tool(
                name="add",
                arguments={"a": 1, "b": 3},
                progress_callback=print_progress_callback,
            )
```

您在创建客户端会话时提供日志回调，在进行单个工具调用时提供进度回调。这使您能够灵活地适当处理不同类型的通知。

## 呈现方式选项

如何呈现这些通知取决于您的应用程序类型：

- **CLI 应用程序** - 只需将消息和进度打印到终端
- **Web 应用程序** - 使用 WebSocket、服务器发送事件或轮询将更新推送到浏览器
- **桌面应用程序** - 在您的 UI 中更新进度条和状态显示

请记住，实现这些通知完全是可选的。您可以选择完全忽略它们，只显示某些类型，或以任何对您的应用程序有意义的方式呈现它们。它们纯粹是用户体验增强功能，帮助用户了解长时间运行的操作期间正在发生什么。
