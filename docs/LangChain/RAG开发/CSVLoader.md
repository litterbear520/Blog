---
sidebar_position: 21
description: CSV加载器
---

# CSVLoader

## Document loaders文档加载器

### 介绍

文档加载器提供了一套标准接口，用于将不同来源（如 CSV、PDF 或 JSON等）的数据读取为 LangChain的文档格式。这确保了无论数据来源如何，都能对其进行一致性处理。

文档加载器（内置或自行实现）需实现`BaseLoader`接口。

`Class Document`，是LangChain内文档的统一载体，所有文档加载器最终返回此类的实例。

一个基础的Document类实例，基于如下代码创建：

```python
from langchain_core.documents import Document

document = Document(
    page_content="Hello, world!", metadata={"source": "https://example.com"}
)
```

可以看到，Document类其核心记录了：
- `page_content`：文档内容
- `metadata`：文档元数据（字典）

不同的文档加载器可能定义了不同的参数，但是其都实现了统一的接口（方法）。
- `load()`：一次性加载全部文档
- `lazy_load()`：延迟流式传输文档，对大型数据集很有用，避免内存溢出。

一个简单的CSVLoader的使用示例如下：

```python
from langchain_community.document_loaders.csv_loader import CSVLoader

loader = CSVLoader(
    ...  # 初始化参数
)

# 一次性加载全部文档
documents = loader.load()  # [document, document...]

# 对于大数据集，分段返回文档
for document in loader.lazy_load():
    print(document)
```

LangChain内置了许多文档加载器，详细参见官方文档：
[文档](https://docs.langchain.com/oss/python/integrations/document_loaders)

我们简单的学习如下几个常用的文档加载器：
- CSVLoader
- JSONLoader
- PDFLoader

```python
from langchain_community.document_loaders.csv_loader import CSVLoader

loader = CSVLoader(file_path="./xxx.csv")
data = loader.load()
print(data)
```

### 自定义CSV文件的解析和加载

```python
loader = CSVLoader(
    file_path="./xxx.csv",
    csv_args={
        "delimiter": ",",      # 指定分隔符
        "quotechar": '"',      # 指定字符串的引号包裹
        # 字段列表（无表头使用，有表头勿用会读取首行做为数据）
        "fieldnames": ["name", "age", "gender"],
    },
)

data = loader.load()
print(data)
```

## 代码示例

### 准备数据

```csv
name,age,gender,hobby
王梓涵,25,男,"吃饭,rap"
刘若曦,22,女,"睡觉,rap"
陈俊宇,20,男,"吃饭,rap"
赵思瑶,28,女,"睡觉,rap"
黄浩然,15,男,"吃饭,rap"
林雨桐,20,女,"唱跳,rap"
周博文,20,男,"吃饭,rap"
吴诗琪,24,女,"吃饭,rap"
马子轩,22,男,"睡觉,rap"
孙悦然,27,女,"吃饭,rap"
```

### 代码

```python
from langchain_community.document_loaders import CSVLoader

loader = CSVLoader(
    file_path="data/stud.csv",
    csv_args={
        "delimiter":",", # 指定分隔符
        "quotechar":'"', # 指定带有分隔符文本的引号包围是单引号还是双引号
        # 字段列表（无表头使用，有表头勿用，会读取首行做为数据）
        "fieldnames": ['name', 'age', 'gender', '爱好']
    },
    encoding="utf-8"     # 指定编码为utf-8
)

# 批量加载 .load() -> [Document, Document, ...]
# documents = loader.load()

# for document in documents:
#     print(type(document),document)

# 懒加载 .lazy_load() -> 迭代器[Document]
documents = loader.lazy_load()
for i in documents:
    print(i)
```

## 总结

LangChain内置了许多种类的文档加载器
- 文档加载器均继承于`BaseLoader`类
- 返回`Document`类型的对象
- `load`方法一次性批量加载（返回`list`内含`Document`对象），如内容过多可能`list`太大，出现内存溢出问题
- `lazy_load`方法会得到生成器对象，可用`for`循环依次获取单个`Document`对象，适用于大文档避免内存存不下。

`CSVLoader`用于加载CSV文件，加载成功得到的即`Document`对象。