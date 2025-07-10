# FastAPI

最好的入门学习方式，就是通过查看官方文档，以下是官方学习文档：

[中文文档](https://fastapi.tiangolo.com/zh/#api_2)
[英文文档](https://fastapi.tiangolo.com/markdow格式)

## typing标准库

typing是Python的标准库（自Python3.5起引入），用于支持类型注解（Type Hints）。它的主要目的是为Python代码提供静态类型检查支持，增强代码的可读性和可维护性，尤其是在大型项目中。

typing提供了工具来定义变量、函数参数和返回值的类型，方便静态类型检查工具（如mypy）验证代码的类型安全性。

### 主要功能

1.类型注解：为变量、函数参数和返回值指定类型。

```python
from typing import List, Dict, Optional

def greet(name: str) -> str:
    return f"Hello, {name}"

names: List[str] = ["Alice", "Bob"]
scores: Dict[str, int] = {"Alice": 90, "Bob": 85}
optional_value: Optional[int] = None
```

2.静态类型检查

通过工具如 mypy、PyCharm 或VS Code的类型检查器，检测代码中的类型错误。**运行时不会影响代码执行**

## Pydantic库

Pydantic是一个第三方库，用于数据验证和序列化。它基于 Python 的类型注解（依赖 typing），通过定义数据模型（Data Model）来验证输入数据的正确性，并支持数据解析、转换和序列化。Pydantic 特别适合处理外部输入数据（如 API 请求、配置文件等）。

### 功能

1.数据模型定义

使用 **BaseModel** 类定义数据模型，结合类型注解指定字段类型。

```python
from pydantic import BaseModel
from typing import Optional

class User(BaseModel):
    name: str
    age: int
    email: Optional[str] = None
```

2.运行时数据验证

**Pydantic** 会在运行时验证输入数据是否符合模型定义的类型和约束，抛出 **ValidationError** 如果数据不合法。

```python
from pydantic import BaseModel
from typing import Optional

class User(BaseModel):
    name: str
    age: int
    email: Optional[str] = None

user = User(name="Alice", age=25, email="alice@example.com")  # 合法
user_invalid = User(name="Bob", age="thirty")  # 抛出 ValidationError
```

3.数据转换

**Pydantic** 自动将输入数据转换为目标类型（例如，将字符串 "123" 转换为整数 123）。

```python
from pydantic import BaseModel
from typing import Optional

class User(BaseModel):
    name: str
    age: int
    email: Optional[str] = None

user = User(name="Alice", age="25")  # 自动将 "25" 转换为 int
```

4.内置验证器

支持复杂的验证规则，如正则表达式、范围检查、枚举等。

```python
from pydantic import BaseModel, EmailStr, conint
from typing import Optional

class User(BaseModel):
    name: str
    age: conint(ge=18, le=100)  # 限制年龄在 18-100 之间
    email: EmailStr
```

5.序列化和反序列化

支持将模型转换为 JSON 或字典，以及从 JSON/字典解析为模型。

```python
from pydantic import BaseModel
from typing import Optional

class User(BaseModel):
    name: str
    age: int
    email: Optional[str] = None

user = User(name="Alice", age=25)
print(user.dict())  # {'name': 'Alice', 'age': 25, 'email': None}
print(user.json())  # {"name": "Alice", "age": 25, "email": null}
```

6.集成支持

与 **FastAPI**框架无缝集成，特别适合构建 Web API。
