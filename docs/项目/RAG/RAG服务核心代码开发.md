---
sidebar_position: 7
---

# RAG服务核心代码开发

## 代码实践

创建`rag.py`，实现获取执行链的方法：

```python
from langchain_core.documents import Document
from langchain_core.runnables import RunnablePassthrough
from vector_stores import VectorStoresService
from langchain_community.embeddings import DashScopeEmbeddings
import os
from dotenv import load_dotenv
import config_data as config
from langchain_core.prompts import ChatPromptTemplate
from langchain_community.chat_models import ChatTongyi
from langchain_core.output_parsers import StrOutputParser

load_dotenv()


def print_prompt(prompt):
    print("="*20)
    print(prompt.to_string())
    print('='*20)
    return prompt

class RagService(object):

    def __init__(self):

        self.vector_service = VectorStoresService(
            embedding=DashScopeEmbeddings(model=config.embedding_model_name,dashscope_api_key=os.getenv("LLM_API_KEY"))
        )

        self.prompt_template = ChatPromptTemplate.from_messages(
            [
                ("system", "以我提供的已知参考资料为主, 简洁和专业的回答用户问题。参考资料:{context}。"),
                ("user", "用户提问: {input}")
            ]
        )

        self.chat_model = ChatTongyi(model=config.chat_model_name,api_key=os.getenv("LLM_API_KEY"))

        self.chain = self.__get_chain()


    def __get_chain(self):
        """获取最终的执行链"""
        retriever = self.vector_service.get_retriever()

        def format_document(docs: list[Document]):
            if not docs:
                return "无相关参考资料"
            
            formatted_str = ""
            for doc in docs:
                formatted_str += f"文档片段：{doc.page_content}\n文档元数据：{doc.metadata}"

            return formatted_str

        chain = (
            {
                "input": RunnablePassthrough(),
                "context": retriever | format_document
            } | self.prompt_template | print_prompt | self.chat_model | StrOutputParser()
        )

        return chain

if __name__ == "__main__":
    res = RagService().chain.invoke("我的体重120斤，身高172，尺码推荐")
    print(res)
```

在`config_data.py`新增配置项：

```python
md5_path = "./md5.txt"


# Chroma
collection_name = "rag"
persist_directory = "./chroma_db"


# spliter
chunk_size = 1000
chunk_overlap = 100
separators = ["\n\n", "\n", ".", "!", "?", "。", "！", "？", " ", ""]
max_split_char_number = 1000    # 文本分割的阈值

# retriever
similarity_search_k = 1         # 检索返回匹配的文档数量

# highlight-start
# model
embedding_model_name = "text-embedding-v4"
chat_model_name = "qwen3-max"
# highlight-end
```
