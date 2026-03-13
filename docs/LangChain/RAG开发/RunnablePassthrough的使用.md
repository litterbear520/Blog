# RunnablePassthrough的使用

## 上节回顾

```python
# 准备一下资料（向向量库的数据）
# add_texts 传入一个 list[str]
vector_store.add_texts(
    ["减肥就是要少吃多练", "在减脂期间吃东西很重要,清淡少油控制卡路里摄入并运动起来",
     "运动要坚持,每周至少三次有氧和力量训练结合"]
)

input_text = "怎么减肥？"

# 检索向量库
result = vector_store.similarity_search(input_text, k=2)
reference_text = "["
for doc in result:
    reference_text += doc.page_content
reference_text += "]"

chain = prompt | print_prompt | model | StrOutputParser()
res = chain.invoke({"input": input_text, "context": reference_text})
print(res)
```

![1772027043066](image/RunnablePassthrough的使用/1772027043066.png)

## 代码实践

```python
"""
提示词: 用户的提问 + 向量库中检索到的参考资料
"""
import os

from langchain_community.chat_models import ChatTongyi
from langchain_core.documents import Document
from langchain_core.runnables import RunnablePassthrough
from langchain_core.vectorstores import InMemoryVectorStore
from langchain_community.embeddings import DashScopeEmbeddings
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser
from dotenv import load_dotenv

load_dotenv()
llm_api_key = os.getenv("LLM_API_KEY")

model = ChatTongyi(model="qwen3-max",api_key=llm_api_key)
prompt = ChatPromptTemplate.from_messages(
    [
        ("system", "以我提供的已知参考资料为主, 简洁和专业的回答用户问题。参考资料:{context}。"),
        ("user", "用户提问: {input}")
    ]
)

# InMemoryVectorStore不是Runnable子类不能入链
vector_store = InMemoryVectorStore(
    embedding=DashScopeEmbeddings(
        model="text-embedding-v4",
        dashscope_api_key=llm_api_key,
        )
    )

# 准备一下资料（向量库的数据）
# add_texts 传入一个 list[str]
vector_store.add_texts(["减肥就是要少吃多练", "在减脂期间吃东西很重要,清淡少油控制卡路里摄入并运动起来", "跑步是很好的运动哦"])

input_text = "怎么减肥？"

# langchain中向量存储对象，有一个方法：as_retriever,可以返回一个Runnable接口的子类实例对象
retriever = vector_store.as_retriever(search_kwargs={"k": 2})

def format_func(docs: list[Document]):
    if not docs:
        return "无相关参考资料"

    formatted_str = "["
    for doc in docs:
        formatted_str += doc.page_content
    formatted_str += "]"

    return formatted_str

def print_prompt(prompt):
    print(prompt.to_string())
    print("=" * 20)
    return prompt
    
# chain
chain = (
    {"input": RunnablePassthrough(), "context": retriever | format_func} | prompt | print_prompt | model | StrOutputParser()
)

res = chain.invoke(input_text)
print(res)
"""
retriever:
  - 输入：用户的提问        str
  - 输出：向量库的检索结果  list[Document]
prompt:
  - 输入：用户的提问 + 向量库的检索结果    dict
  - 输出：完整的提示词                    PromptValue
"""
```
