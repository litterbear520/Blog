---
sidebar_position: 19
description: Memory临时会话记忆
---

# Memory临时会话记忆

## 临时记忆

如果想要封装历史记录，除了自行维护历史消息外，也可以借助LangChain内置的历史记录附加功能。

LangChain提供了History功能，帮助模型在有历史记忆的情况下回答。

- 基于RunnableWithMessageHistory在原有链的基础上创建带有历史记录功能的新链（新Runnable实例）
- 基于InMemoryChatMessageHistory为历史记录提供内存存储（临时用）

```python
from langchain_core.runnables.history import RunnableWithMessageHistory

# 通过RunnableWithMessageHistory获取一个新的带有历史记录功能的chain
conversation_chain = RunnableWithMessageHistory(
    some_chain,               # 被附加历史消息的Runnable，通常是chain
    get_history,              # 获取指定会话ID的历史会话的函数
    input_messages_key="input",      # 声明用户输入消息在模板中的占位符
    history_messages_key="chat_history"  # 声明历史消息在模板中的占位符
)

# 获取指定会话ID的历史会话记录函数
chat_history_store = {}  # 存放多个会话ID所对应的历史会话记录
# 函数传入会话ID（字符串类型）
# 函数要求返回BaseChatMessageHistory的子类
# BaseChatMessageHistory类专用于存放某个会话的历史记录
# InMemoryChatMessageHistory是官方自带的基于内存存放历史记录的类
def get_history(session_id):
    if session_id not in chat_history_store:
        chat_history_store[session_id] = InMemoryChatMessageHistory()
    return chat_history_store[session_id]
```

## 代码实现

```python
import os

from langchain_community.chat_models.tongyi import ChatTongyi
from langchain_core.prompts import MessagesPlaceholder, PromptTemplate, ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser
from langchain_core.runnables.history import RunnableWithMessageHistory
from langchain_core.chat_history import InMemoryChatMessageHistory
from dotenv import load_dotenv

load_dotenv()
LLM_API_KEY = os.getenv("LLM_API_KEY")

model = ChatTongyi(model="qwen3-max",api_key=LLM_API_KEY)
# prompt = PromptTemplate.from_template(
#     "你需要根据会话历史回应用户问题。对话历史：{chat_history}，用户提问：{input}，请回答"
# )
prompt = ChatPromptTemplate.from_messages(
    [
        ("system","你需要根据会话历史回应用户问题。对应历史："),
        MessagesPlaceholder("chat_history"),
        ("human","请回答如下问题：{input}")
    ]
)
str_parser = StrOutputParser()

def print_prompt(full_prompt):
    print("="*20, full_prompt.to_string(), "="*20)
    return full_prompt

base_chain = prompt | print_prompt | model | str_parser

store = {} # key就是session，value就是InMemoryChatMessageHistory类对象
# 实现通过会话id获取InMemoryChatMessageHistory类对象
def get_history(session_id):
    if session_id not in store:
        store[session_id] = InMemoryChatMessageHistory()

    return store[session_id]

# 创建一个新的链，对原有链增强功能：自动附加历史消息
conversation_chain = RunnableWithMessageHistory(
    base_chain,                          # 被增强的原有chain
    get_history,                         # 通过会话id获取InMemoryChatMessageHistory类对象
    input_messages_key="input",          # 表示用户输入在模板中的占位符
    history_messages_key="chat_history"  # 表示历史消息在模板中的占位符
)

if __name__ == '__main__':
    # 固定格式，添加LangChain的配置，为当前程序配置所属的session_id
    session_config = {
        "configurable": {
            "session_id": "user_001"
        }
    }

    res = conversation_chain.invoke(input={"input": "小明有2个猫"}, config=session_config)
    print("第1次执行：", res)

    res = conversation_chain.invoke(input={"input": "小刚有1只狗"}, config=session_config)
    print("第2次执行：", res)

    res = conversation_chain.invoke(input={"input": "总共有几个宠物"}, config=session_config)
    print("第3次执行：", res)
```

## 总结

`RunnableWithMessageHistory`是LangChain内`Runnable`接口的实现，主要用于：

- 创建一个带有历史记忆功能的`Runnable`实例（链）

它在创建的时候需要提供一个`BaseChatMessageHistory`的具体实现（用来存储历史消息）

- `InMemoryChatMessageHistory`可以实现在内存中存储历史

额外的，如果想要在`invoke`或`stream`执行链的同时，将提示词`print`出来，可以在链中加入自定义函数实现。

注意：函数的输入应原封不动返回出去，避免破坏原有业务，仅在`return`之前，`print`所需信息即可。
