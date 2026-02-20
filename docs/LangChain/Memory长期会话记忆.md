---
sidebar_position: 20
description: Memory长期会话记忆
---

# Memory长期会话记忆

## 实现思路

使用`InMemoryChatMessageHistory`仅可以在内存中临时存储会话记忆，一旦程序退出，则记忆丢失。
`InMemoryChatMessageHistory`类继承自`BaseChatMessageHistory`

在官方注释中给出了相关实现的指南，并给出了基于文件的历史消息存储示例代码。

我们可以自行实现一个基于Json格式和本地文件的会话数据保存。

`FileChatMessageHistory`类实现，核心思路：

- 基于文件存储会话记录，以`session_id`为文件名，不同`session_id`有不同文件存储消息

继承`BaseChatMessageHistory`实现如下3个方法：

- `add_messages`：同步模式，添加消息
- `messages`：同步模式，获取消息
- `clear`：同步模式，清除消息

如下代码，官方在`BaseChatMessageHistory`类的注释中提供了一个基于文件存储的示例代码。

```python
import json
import os
from typing import Sequence
from langchain_core.chat_history import BaseChatMessageHistory
from langchain_core.messages import BaseMessage, messages_from_dict, message_to_dict


class FileChatMessageHistory(BaseChatMessageHistory):
    storage_path: str
    session_id: str

    def __init__(self, storage_path: str, session_id: str):
        self.storage_path = storage_path
        self.session_id = session_id

    @property
    def messages(self) -> list[BaseMessage]:
        try:
            with open(
                os.path.join(self.storage_path, self.session_id),
                "r",
                encoding="utf-8",
            ) as f:
                messages_data = json.load(f)
                return messages_from_dict(messages_data)
        except FileNotFoundError:
            return []

    def add_messages(self, messages: Sequence[BaseMessage]) -> None:
        all_messages = list(self.messages)  # Existing messages
        all_messages.extend(messages)  # Add new messages

        serialized = [message_to_dict(message) for message in all_messages]
        file_path = os.path.join(self.storage_path, self.session_id)
        os.makedirs(os.path.dirname(file_path), exist_ok=True)
        with open(file_path, "w", encoding="utf-8") as f:
            json.dump(serialized, f)

    def clear(self) -> None:
        file_path = os.path.join(self.storage_path, self.session_id)
        os.makedirs(os.path.dirname(file_path), exist_ok=True)
        with open(file_path, "w", encoding="utf-8") as f:
            json.dump([], f)
```

## 代码实践

```python
import os
import json

from typing import Sequence
from langchain_community.chat_models.tongyi import ChatTongyi
from langchain_core.runnables.history import RunnableWithMessageHistory
from langchain_core.prompts import MessagesPlaceholder, ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser
from langchain_core.messages import message_to_dict, messages_from_dict,BaseMessage
from langchain_core.chat_history import BaseChatMessageHistory
# message_to_dict: 单个消息对象 (BaseMessage类实例) -> 字典
# messages_from_dict: [字典, 字典...] -> [消息, 消息...]
# AIMessage、HumanMessage、SystemMessage 都是BaseMessage的子类
from dotenv import load_dotenv

load_dotenv()
LLM_API_KEY = os.getenv("LLM_API_KEY")


class FileChatMessageHistory(BaseChatMessageHistory):
    def __init__(self, session_id, storage_path):
        self.session_id = session_id              # 会话id
        self.storage_path = storage_path          # 不同会话id的存储文件，所在的文件夹路径
        # 完整的文件路径
        self.file_path = os.path.join(self.storage_path, self.session_id)

        # 确保文件夹是存在的
        os.makedirs(os.path.dirname(self.file_path), exist_ok=True)

    def add_messages(self, messages: Sequence[BaseMessage]) -> None:
        # Sequence序列 类似list、tuple
        all_messages = list(self.messages)        # 已有的消息列表
        all_messages.extend(messages)             # 新的和已有的融合成一个list

        # 将数据同步写入到本地文件中
        # 类对象写入文件 -> 一堆二进制
        # 为了方便，可以将BaseMessage消息转为字典（借助json模块以json字符串写入文件）
        # 官方message_to_dict：单个消息对象（BaseMessage类实例） -> 字典
        # new_messages = []
        # for message in all_messages:
        #     d = message_to_dict(message)
        #     new_messages.append(d)

        new_messages = [message_to_dict(message) for message in all_messages]
        # 将数据写入文件
        with open(self.file_path, "w", encoding="utf-8") as f:
            json.dump(new_messages, f, ensure_ascii=False,indent=4)

    @property
    # @property装饰器将messages方法变成成员属性用
    def messages(self) -> list[BaseMessage]:
        # 当前文件内: list[字典]
        try:
            with open(self.file_path, "r", encoding="utf-8") as f:
                messages_data = json.load(f)  # 返回值就是: list[字典]
                return messages_from_dict(messages_data)
        except FileNotFoundError:
            return []

    def clear(self) -> None:
        with open(self.file_path, "w", encoding="utf-8") as f:
            json.dump([], f)

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
    return FileChatMessageHistory(session_id, "./chat_history")

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

    # res = conversation_chain.invoke(input={"input": "总共有几个宠物"}, config=session_config)
    # print("第3次执行：", res)
```
