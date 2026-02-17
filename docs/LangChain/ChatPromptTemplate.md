---
sidebar_position: 12
description: 聊天提示词模板
---

# ChatPromptTemplate

## 基本概念

`PromptTemplate`：通用提示词模板，支持动态注入信息。

`FewShotPromptTemplate`：支持基于模板注入任意数量的示例信息。

`ChatPromptTemplate`：支持注入任意数量的历史会话信息。

通过from_messages方法，从列表中获取多轮次会话作为聊天的基础模板

:::info
`PromptTemplate`类的`from_template`只能接入一条消息，而`from_messages`可以接入一个list的消息
:::

```python
from langchain_core.prompts import ChatPromptTemplate

ChatPromptTemplate.from_messages(
    [
        ("system", "......"),
        ("ai", "........."),
        ("human", ".........")
    ]
)
```

![1771311504121](image/chatprompttemplate/1771311504121.png)

## 动态注入

历史会话信息是动态的，需要支持动态注入，使用`MessagesPlaceholder`作为占位，提供`history`作为占位的key

基于`invoke`动态注入历史会话记录

**必须是`invoke`，`format`无法注入**

```python
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.prompts import MessagesPlaceholder

ChatPromptTemplate.from_messages(
    [
        ("system", "......"),
        MessagesPlaceholder("history"),
        ("human", ".........")
    ]
)

prompt.invoke({"history": history_data})
```

## 代码实践

```python
import os
from langchain_core.prompts import ChatPromptTemplate,MessagesPlaceholder, chat
from langchain_community.chat_models import ChatTongyi
from dotenv import load_dotenv
load_dotenv()

DASHSCOPE_API_KEY = os.getenv("LLM_API_KEY")

chat_prompt_template = ChatPromptTemplate.from_messages(
    [
        ("system","你是一个边塞诗人，可以作诗"),
        MessagesPlaceholder("history"),
        ("human","再来一首唐诗"),
    ]
)

history_data = [
    ("human","再来一首唐诗"),
    ("ai","床前明月光，疑是地上霜，举头望明月，低头思故乡"),
    ("human","好诗，再来一首"),
    ("ai","锄禾日当午，汗滴禾下锄，谁之盘中餐，粒粒皆辛苦"),
]

# StringPrompt to_string()
prompt_text = chat_prompt_template.invoke({"history":history_data}).to_string()

model = ChatTongyi(model = "qwen3-max",api_key = DASHSCOPE_API_KEY)

res = model.invoke(prompt_text)

print(res.content,type(res))
```
