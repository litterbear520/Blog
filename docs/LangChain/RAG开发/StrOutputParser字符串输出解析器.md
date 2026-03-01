---
sidebar_position: 16
description: 字符串输出解析器
---

# StrOutputParser字符串输出解析器

## 案例

有如下代码，想要以第一次模型的输出结果，第二次去询问模型：

```python
from langchain_core.prompts import PromptTemplate
from langchain_community.chat_models.tongyi import ChatTongyi

model = ChatTongyi(model="qwen3-max")

prompt = PromptTemplate.from_template(
    "我邻居姓：{lastname}，刚生了{gender}，请起名，仅告知名字无需其它内容"
)

chain = prompt | model | model
res = chain.invoke({"lastname": "张", "gender": "女儿"})
print(res.content)
```

- 链的构建完全符合要求（参与的组件）
- 但是运行报错（<span style={{color: 'red'}}>ValueError: Invalid input type &lt;class 'langchain_core.messages.ai.AIMessage'&gt;. Must be a PromptValue, str, or list of BaseMessages.</span>）

```python
chain = prompt | model | model
```

错误的主要原因是：

- prompt的结果是`PromptValue`类型，输入给了model
- model的输出结果是：<mark style={{backgroundColor: '#ff9900', padding: '0 4px', borderRadius: '3px'}}>AIMessage</mark>

模型（ChatTongyi）源码中关于`invoke`方法明确指定了input的类型：

```python
@override
def invoke(
    self,
    input: LanguageModelInput,
    config: RunnableConfig | None = None,
    *,
    stop: list[str] | None = None,
    **kwargs: Any,
) -> AIMessage:
```

```python
LanguageModelInput = PromptValue | str | Sequence[MessageLikeRepresentation]
"""Input to a language model."""
```

**需要做类型转换**：

- 可以借助LangChain内置的解析器
- `StrOutputParser`字符串输出解析器

## 简介

`StrOutputParser`是LangChain内置的简单字符串解析器

- 可以将`AIMessage`解析为简单的字符串，符合了模型`invoke`方法要求（可传入字符串，不接收`AIMessage`类型）
- 是`Runnable`接口的子类（可以加入链）

```python
parser = StrOutputParser()
chain = prompt | model | parser | model
```

## 代码

```python
import os

from langchain_core.output_parsers import StrOutputParser
from langchain_core.prompts import PromptTemplate
from langchain_community.chat_models.tongyi import ChatTongyi
from dotenv import load_dotenv

load_dotenv()
LLM_API_KEY = os.getenv("LLM_API_KEY")

parser = StrOutputParser()
model = ChatTongyi(model="qwen3-max",api_key=LLM_API_KEY)
prompt = PromptTemplate.from_template(
    "我姓：{lastname}，刚生了{gender}，请给我起名字，不要有其他废话"
)   

chain = prompt | model | parser | model | parser

res:str = chain.invoke({"lastname":"黄","gender":"女儿"})

print(res)
print(type(res))
```

## 总结

`StrOutputParser`是LangChain内置的简单字符串解析器。

- 可以将`AIMessage`类型转换为基础字符串
- 可以加入`chain`作为组件存在（`Runnable`接口子类）
