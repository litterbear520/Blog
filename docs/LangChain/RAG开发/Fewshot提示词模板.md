---
sidebar_position: 11
description: LangChain Fewshot 提示词模板
---

# Fewshot 提示词模板

## FewShotPromptTemplate

```python
from langchain_core.prompts import FewShotPromptTemplate

FewShotPromptTemplate(
    examples=None,
    example_prompt=None,
    prefix=None,
    suffix=None,
    input_variables=None
)
```

参数说明：

- `examples`：示例数据，list 类型，内部嵌套字典
- `example_prompt`：示例数据的提示词模板
- `prefix`：组装提示词时，放在示例数据前的内容
- `suffix`：组装提示词时，放在示例数据后的内容
- `input_variables`：列表，注入的变量列表

### 组装FewShotPromptTemplate对象并获得最终提示词

```python
import os

from langchain_core.prompts import PromptTemplate,FewShotPromptTemplate
from langchain_community.llms.tongyi import Tongyi
from dotenv import load_dotenv

load_dotenv()
DASHSCOPE_API_KEY = os.getenv("LLM_API_KEY")

# 示例模板
example_temple = PromptTemplate.from_template("单词：{word}，反义词：{antonym}")

# 示例的动态数据注入，要求是list内部套字典
example_data = [
    {"word": "大","antonym": "小"},
    {"word": "长","antonym": "短"}
]

few_shot_with_templates = FewShotPromptTemplate(
    example_prompt=example_temple, # 示例数据的模板
    examples=example_data,         # 示例的数据，用于注入动态数据，list内套字典
    prefix="告诉我单词的反义词，以下是示例：",               # 示例之前的提示词
    suffix="基于前面的示例告诉我：{input_word}的反义词是？", # 示例之后的提示词
    input_variables=['input_word'] # 生命在前缀或后缀中需要注入的变量名
)

prompt_text= few_shot_with_templates.invoke(input={"input_word":"左"}).to_string()
print(prompt_text)

model = Tongyi(model="qwen-max",api_key=DASHSCOPE_API_KEY)
print(model.invoke(input=prompt_text))
```

## 总结

FewShotPromptTemplate类对象构建需要5个核心参数：

- `example_prompt`：示例数据的提示词模板
- `examples`：示例数据，`list` 类型，内部嵌套字典
- `prefix`：组装提示词时，放在示例数据前的内容
- `suffix`：组装提示词时，放在示例数据后的内容
- `input_variables`：列表，注入的变量列表

示例代码:

```python
from langchain_core.prompts import FewShotPromptTemplate

few_shot_template = FewShotPromptTemplate(
    example_prompt=example_template,      # 示例数据的模板
    examples=examples_data,               # 示例的数据（用来注入动态数据的），list内嵌套字典
    prefix="告知我单词的反义词，我提供如下的示例：",  # 示例之前的提示词
    suffix="基于前面的示例告知我，{input_word}的反义词是？",  # 示例之后的提示词
    input_variables=['input_word']         # 声明在前缀或后缀中需要注入的变量名
)

# 注入变量，生成最终提示词
prompt_text = few_shot_template.invoke(input={"input_word": "左"}).to_string()
print(prompt_text)
```
