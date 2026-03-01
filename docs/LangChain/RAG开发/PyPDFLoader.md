---
sidebar_position: 24
description: PDF加载器
---

# PyPDFLoader

## 简介

LangChain内支持许多PDF的加载器，我们选择其中的`PyPDFLoader`使用。
`PyPDFLoader`加载器，依赖`PyPDF`库，所以，需要安装它：

```bash
pip install pypdf
```

PyPDFLoader使用还是比较简单的，如下代码即可快速加载PDF中的文字内容了：

```python
from langchain_community.document_loaders import PyPDFLoader

loader = PyPDFLoader(
    file_path="",  # 文件路径必填
    mode='page',   # 读取模式，可选page（按页面划分不同Document）和single（单个Document）
    password='password',  # 文件密码
)
```

## 代码实践

这里使用Anthropic发布的报告: 
[2026代理式编码趋势报告](https://resources.anthropic.com/hubfs/2026%20Agentic%20Coding%20Trends%20Report.pdf?hsLang=en)
```python
from langchain_community.document_loaders import PyPDFLoader

loader = PyPDFLoader(
    file_path="data/agentx.pdf",
    mode = "single", # 默认是page模式，每个页面形成一个Document文档对象
                     # single模式不管有多少页，只返回1个Document对象
    password="123456",
)

i = 0
for doc in loader.lazy_load():
    i += 1
    print(doc)
    print('='*20,i)
```
