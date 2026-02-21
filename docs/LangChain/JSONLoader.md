---
sidebar_position: 22
description: JSON加载器
---

# JSONLoader

## 介绍

JSONLoader用于将JSON数据加载为Document类型对象。
使用JSONLoader需要额外安装：`pip install jq`

jq是一个跨平台的json解析工具，LangChain底层对JSON的解析就是基于jq工具实现的。
将JSON数据的信息抽取出来，封装为`Document`对象，抽取的时候依赖jq_schema语法。

```json
{
  "name": "周杰伦",
  "age": 11,
  "hobby": ["唱", "跳", "RAP"],
  "other": {
    "addr": "深圳",
    "tel": "12332112321"
  }
}
```
- `.` 表示整个JSON对象（根）
- `.[ ]` 表示数组
- `.name` 表示抽取周杰伦
- `.hobby` 表示抽取爱好数组
- `.hobby[1]` 或 `.hobby .[1]` 表示抽取跳
- `.other.addr` 表示抽取地址深圳

```json
[
  {"name": "周杰伦", "age": 11, "gender": "男"},
  {"name": "蔡依临", "age": 12, "gender": "女"},
  {"name": "王力宏", "age": 11, "gender": "男"}
]
```
- `.[ ]` 得到3个字典
- `.[].name` 表示抽取全部的name，即得到3个name信息

了解jq的基本抽取规则后，即可使用JSONLoader加载JSON文件了。

```python
from langchain_community.document_loaders import JSONLoader

loader = JSONLoader(
    file_path="xxx.json",    # 文件路径
    jq_schema=".",           # jq schema语法
    text_content=False,      # 抽取的是否是字符串，默认True
    json_lines=True,         # 是否是JsonLines文件（每一行都是JSON的文件）
)
```

如下是一个典型的JsonLines文件
```json
{"name": "周杰伦", "age": 11, "gender": "男"}
{"name": "蔡依临", "age": 12, "gender": "女"}
{"name": "王力鸿", "age": 11, "gender": "男"}
```

## 代码实践

新建三个json文件


```json
{
    "name": "周杰伦",
    "age": 11,
    "hobby": ["唱", "跳", "RAP"],
    "other": {
      "addr": "深圳",
      "tel": "12332112321"
    }
  }
```

```json
[
    {"name": "周杰伦", "age": 11, "gender": "男"},
    {"name": "蔡依临", "age": 12, "gender": "女"},
    {"name": "王力鸿", "age": 11, "gender": "男"}
]
```

```json
{"name": "周杰伦", "age": 11, "gender": "男"}
{"name": "蔡依临", "age": 12, "gender": "女"}
{"name": "王力鸿", "age": 11, "gender": "男"}
```

```python
from langchain_community.document_loaders import JSONLoader

loader = JSONLoader(
    file_path="data/jsonline.json",
    jq_schema=".name",
    text_content=False, # 告知JSONLoader抽取的内容不是字符串
    json_lines=True,    # 告知JSONLoader这是一个JSONLines文件（每一行都是一个独立标准的JSON）
)

document = loader.load()
print(document)
```

## 总结

JSONLoader依赖jq库，通过`pip install jq`安装。

- JSONLoader使用jq的解析语法，常见如：
  - `.` 表示根、`[]` 表示数组
  - `.name` 表示从根取name的值
  - `.hobby[1]` 表示取hobby对应数组的第二个元素
  - `.[]` 表示将数组内的每个字典（JSON对象）都取到
  - `.[].name` 表示取数组内每个字典（JSON）对象的name对应的值

JSONLoader初始化有4个主要参数：
- `file_path`：文件路径，必填
- `jq_schema`：jq解析语法，必填
- `text_content`：抽取到的是否是字符串，默认`True`，非必填
- `json_lines`：是否是JsonLines文件，默认`False`，非必填
  - JsonLines文件：每一行都是一个独立的字典（Json对象）