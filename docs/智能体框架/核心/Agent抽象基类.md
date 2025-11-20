# Agent抽象基类

Agent 类是整个框架的顶层抽象。它定义了一个智能体应该具备的通用行为和属性，但并不关心具体的实现方式。我们通过 Python 的 abc (Abstract Base Classes) 模块来实现它，这强制所有具体的智能体实现（SimpleAgent, ReActAgent 等）都必须遵循同一个"接口"。

```python
"""Agent基类"""

from abc import ABC, abstractmethod
from typing import Optional
from .message import Message
from .llm import HelloAgentsLLM
from .config import Config

class Agent(ABC):
    """Agent基类"""
    
    def __init__(
        self,
        name: str,
        llm: HelloAgentsLLM,
        system_prompt: Optional[str] = None,
        config: Optional[Config] = None
    ):
        self.name = name
        self.llm = llm
        self.system_prompt = system_prompt
        self.config = config or Config()
        self._history: list[Message] = []
    
    @abstractmethod
    def run(self, input_text: str, **kwargs) -> str:
        """运行Agent"""
        pass
    
    def add_message(self, message: Message):
        """添加消息到历史记录"""
        self._history.append(message)
    
    def clear_history(self):
        """清空历史记录"""
        self._history.clear()
    
    def get_history(self) -> list[Message]:
        """获取历史记录"""
        return self._history.copy()
    
    def __str__(self) -> str:
        return f"Agent(name={self.name}, provider={self.llm.provider})"
    
    def __repr__(self) -> str:
        return self.__str__()
```

## 1.导入部分

```python
from abc import ABC, abstractmethod
from typing import Optional
from .message import Message
from .llm import HelloAgentsLLM
from .config import Config
```

| 导入项            | 说明                        |
|----------------|---------------------------|
| ABC            | 抽象基类（Abstract Base Class） |
| abstractmethod | 装饰器，用于定义抽象方法              |
| Message        | 消息类                       |
| HelloAgentsLLM | LLM（大语言模型）接口              |
| Config         | 配置类                       |

## 2.类定义

```python
class Agent(ABC):
    """Agent基类"""
```

- Agent 是一个抽象基类（继承 ABC）
- 抽象基类是不能直接实例化的，必须被继承才能使用
- 这样做的好处是保证所有Agent子类都遵循同样的结构

## 3.初始化方法init

```python
def __init__(
    self,
    name: str,
    llm: HelloAgentsLLM,
    system_prompt: Optional[str] = None,
    config: Optional[Config] = None
):
    self.name = name
    self.llm = llm
    self.system_prompt = system_prompt
    self.config = config or Config()
    self._history: list[Message] = []
```

**参数说明：**

| 参数            | 类型               | 说明        |
|---------------|------------------|-----------|
| name          | str              | Agent的名字  |
| llm           | HelloAgentsLLM   | 使用的LLM模型  |
| system_prompt | Optional[str]    | 系统提示词（可选） |
| config        | Optional[Config] | 配置对象（可选）  |

**属性说明：**

| 属性                 | 说明                    |
|--------------------|-----------------------|
| self.name          | Agent名字               |
| self.llm           | LLM对象，用于生成回复          |
| self.system_prompt | 系统提示词（定义Agent的角色/行为）  |
| self.config        | 配置对象（如果没传入就用默认Config） |
| self._history      | 对话历史记录列表（下划线表示私有属性）   |

**特殊语法：**

```python
self.config = config or Config()
```

- 如果 config 为 None，就使用 Config()
- 这保证了 self.config 永远不会是 None

## 4.抽象方法 run

```python
@abstractmethod
def run(self, input_text: str, **kwargs) -> str:
    """运行Agent"""
    pass
```

- `@abstractmethod`：装饰器，表示这是抽象方法
- 抽象方法必须在子类中实现
- 子类不实现 run 方法就无法创建实例

**示例（子类必须这样实现）：**

```python
class MyAgent(Agent):
    def run(self, input_text: str, **kwargs) -> str:
        # 调用LLM处理输入
        result = self.llm.generate(input_text)
        return result
```

---

## 5.消息历史管理方法

**1. add_message - 添加消息**

```python
def add_message(self, message: Message):
    """添加消息到历史记录"""
    self._history.append(message)
```

把消息追加到历史列表末尾

**2. clear_history - 清空历史**

```python
def clear_history(self):
    """清空历史记录"""
    self._history.clear()
```

删除所有历史消息

**3. get_history - 获取历史**

```python
def get_history(self) -> list[Message]:
    """获取历史记录"""
    return self._history.copy()
```

- 返回历史列表的副本（不是原列表）
- 这样用户修改副本不会影响原始历史

## 6.字符串表示方法

```python
def __str__(self) -> str:
    return f"Agent(name={self.name}, provider={self.llm.provider})"

def __repr__(self) -> str:
    return self.__str__()
```

这两个方法定义了Agent对象如何显示为字符串：

```python
agent = MyAgent(name="助手", llm=some_llm)
print(agent)  # 输出：Agent(name=助手, provider=openai)
```
