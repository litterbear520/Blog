---
sidebar_position: 15
description: 简单理解Runnable接口
---

# Runnable接口

LangChain中的绝大多数核心组件都继承了`Runnable`抽象基类（位于`langchain_core.runnables.base`）。

代码：

```python
chain = prompt | model
```

`chain`变量是`RunnableSequence`（`RunnableSerializable`子类）类型

而得到这个类型的原因就是`Runnable`基类内部对`__or__`魔术方法的改写。

同时，在后面继续使用` | `添加新的组件，依旧会得到`RunnableSequence`，这就是链的基础架构。

部分源码：

```python
def __or__(
    self,
    other: Runnable[Any, Other]
    | Callable[[Iterator[Any]], Iterator[Other]]
    | Callable[[AsyncIterator[Any]], AsyncIterator[Other]]
    | Callable[[Any], Other]
    | Mapping[str, Runnable[Any, Other]]
    | Any,
) -> RunnableSerializable[Input, Other]:
    """Runnable "or" operator.

    Compose this `Runnable` with another object to create a `RunnableSequence`.

    Args:
        other: Another `Runnable` or a `Runnable`-like object.

    Returns:
        A new `Runnable`.
    """
    return RunnableSequence(steps=[self, coerce_to_runnable(other)])
```

## 查看源码

```python
import os
from langchain_core.prompts import PromptTemplate
from langchain_community.llms.tongyi import Tongyi
from dotenv import load_dotenv

load_dotenv()

LLM_API_KEY = os.getenv("LLM_API_KEY")

prompt = PromptTemplate.from_template("你是一个AI助手")
model = Tongyi(model="qwen3-max",api_key=LLM_API_KEY)

chain = prompt | model

print(type(chain))
```
