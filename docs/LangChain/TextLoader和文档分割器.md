---
sidebar_position: 23
description: TextLoader和文档分割器
---

# TextLoader和文档分割器

## TextLoader

除了前文学习的三个Loader以外，还有一个基本的加载器：`TextLoader`
作用：读取文本文件（如.txt），将全部内容放入一个`Document`对象中。

```python
from langchain_community.document_loaders import TextLoader

loader = TextLoader(
    "xxx.txt",
    encoding="utf-8",
)

docs = loader.load()
print(docs)       # [Document(...)]
print(len(docs))  # 结果为1
```

![TextLoader示例](image/TextLoader和文档分割器/1771311504122.png)

## RecursiveCharacterTextSplitter

RecursiveCharacterTextSplitter，递归字符文本分割器，主要用于按自然段落分割大文档。
是LangChain官方推荐的默认字符分割器。
它在保持上下文完整性和控制片段大小之间实现了良好平衡，开箱即用效果佳。

```python
from langchain_community.document_loaders import TextLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter

loader = TextLoader(
    "../P3_LangChainRAG开发/data/Python基础语法.txt",
    encoding="utf-8",
)

docs = loader.load()

splitter = RecursiveCharacterTextSplitter(
    chunk_size=500,        # 分段的最大字符数
    chunk_overlap=50,      # 分段之间允许重叠的字符数
    # 文本分段依据
    separators=["\n\n", "\n", "。", "！", "？", ".", "!", "?", " ", ""],
    # 字符统计依据（函数）
    length_function=len,
)

split_docs = splitter.split_documents(docs)
```

## 代码实践

### 使用文本分隔器

```python
from langchain_community.document_loaders import TextLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter

# pip install langchain_text_splitters
loader = TextLoader(
    file_path="data/python基础语法.txt",
    encoding="utf-8"
)

docs = loader.load() # [Document]

splitter = RecursiveCharacterTextSplitter(
    chunk_size=500,      # 分段的最大字符数
    chunk_overlap=50,    # 分段之间允许重叠字符数
    # 文本自然段落分割的依据符号
    separators=["\n\n", "\n", "。", "！", "？", ".", "!", "?", " ", ""],
    length_function=len, # 统计字符的依据函数
)

split_docs = splitter.split_documents(docs)
print(len(split_docs))
for i in split_docs:
    print("=="*20)
    print(i)
    print("=="*20)
```

### txt示例文件

```text
# Python 基础语法大全

一、变量与数据类型

# 1. 变量定义（变量名规则：字母/数字/下划线，不能以数字开头，区分大小写）
name = "Python学习者"  # 字符串变量
age = 25               # 整数变量
height = 1.75          # 浮点数变量
is_student = True      # 布尔变量
empty_var = None       # 空值

# 2. 变量赋值方式
a = b = c = 10         # 多变量赋值同一值
x, y, z = 1, 2, 3      # 解包赋值
x, y = y, x            # 交换变量值

# 3. 基本数据类型
## 3.1 字符串（str）
str1 = '单引号字符串'
str2 = "双引号字符串"
str3 = """多行字符串
可以换行
适合长文本"""
str4 = r"原始字符串\n不转义换行符"  # 原始字符串
str5 = u"Unicode字符串"             # Unicode字符串

# 字符串操作
str_len = len(str1)                # 获取长度
str_concat = str1 + " + " + str2   # 拼接
str_repeat = str1 * 3              # 重复
str_slice = str3[0:5]              # 切片（左闭右开）
str_upper = str1.upper()           # 转大写
str_lower = str2.lower()           # 转小写
str_strip = "  带空格的字符串  ".strip()  # 去除首尾空格
str_replace = str1.replace("单引号", "修改后")  # 替换
str_split = "a,b,c".split(",")     # 分割为列表
str_join = "-".join(["1", "2", "3"])  # 拼接列表为字符串
str_format1 = "姓名：%s，年龄：%d" % (name, age)  # 格式化方式1
str_format2 = "姓名：{}，身高：{:.2f}".format(name, height)  # 格式化方式2
str_format3 = f"姓名：{name}，是否学生：{is_student}"  # f-string（推荐）

## 3.2 数字（int/float/complex）
num1 = 10          # 整数
num2 = 3.1415926   # 浮点数
num3 = 2 + 3j      # 复数

# 数字运算
add = num1 + num2  # 加法
sub = num1 - num2  # 减法
mul = num1 * num2  # 乘法
div = num1 / num2  # 除法（返回浮点数）
floor_div = num1 // num2  # 整除（向下取整）
mod = num1 % 3     # 取模（余数）
pow_num = num1 ** 2  # 幂运算

# 数字类型转换
int_num = int("100")    # 字符串转整数
float_num = float(20)   # 整数转浮点数

## 3.3 布尔值（bool）
bool1 = True
bool2 = False

# 布尔运算
bool_and = bool1 and bool2  # 与
bool_or = bool1 or bool2    # 或
bool_not = not bool1        # 非

## 3.4 列表（list）- 有序、可变、可重复
list1 = [1, 2, 3, 4, 5]
list2 = ["a", "b", 100, True]
list3 = list(range(10))    # 从range创建
list4 = [x for x in range(10) if x % 2 == 0]  # 列表推导式

# 列表操作
list_len = len(list1)       # 长度
list_index = list1[2]       # 索引访问（从0开始）
list_slice = list1[1:4]     # 切片
list1.append(6)             # 末尾添加元素
list1.insert(2, 10)         # 指定位置插入
list1.remove(3)             # 删除指定元素
list1.pop()                 # 删除末尾元素
list1.pop(1)                # 删除指定索引元素
list1.reverse()             # 反转列表
list1.sort()                # 排序（升序）
list1.sort(reverse=True)    # 降序排序
list_count = list1.count(2) # 统计元素出现次数
list_extend = list1.extend(list2)  # 扩展列表
list_copy = list1.copy()    # 浅拷贝
list_clear = list1.clear()  # 清空列表

## 3.5 元组（tuple）- 有序、不可变、可重复
tuple1 = (1, 2, 3)
tuple2 = "a", "b", "c"      # 省略括号
tuple3 = (5,)               # 单个元素元组必须加逗号
tuple4 = tuple([1,2,3])     # 从列表创建

# 元组操作（仅查，不可改）
tuple_index = tuple1[1]
tuple_slice = tuple1[0:2]
tuple_len = len(tuple1)
tuple_count = tuple1.count(2)

## 3.6 集合（set）- 无序、不可重复、无索引
set1 = {1, 2, 3, 3, 4}     # 自动去重
set2 = set([2, 3, 5])       # 从列表创建
empty_set = set()           # 空集合（不能用{}）

# 集合操作
set1.add(5)                 # 添加元素
set1.update([6,7])          # 添加多个元素
set1.remove(3)              # 删除元素（不存在报错）
set1.discard(10)            # 删除元素（不存在不报错）
set1.pop()                  # 随机删除元素
set_inter = set1 & set2     # 交集
set_union = set1 | set2     # 并集
set_diff = set1 - set2      # 差集
set_sym_diff = set1 ^ set2  # 对称差集
set_issubset = set2.issubset(set1)  # 是否子集
set_issuperset = set1.issuperset(set2)  # 是否超集

## 3.7 字典（dict）- 键值对、无序（3.7+有序）、键唯一
dict1 = {"name": "张三", "age": 20, "gender": "男"}
dict2 = dict(name="李四", age=22)  # 另一种创建方式
dict3 = {x: x*2 for x in range(5)} # 字典推导式

# 字典操作
dict_keys = dict1.keys()    # 获取所有键
dict_values = dict1.values()# 获取所有值
dict_items = dict1.items()  # 获取所有键值对
dict_get = dict1.get("name")# 获取值（键不存在返回None）
dict_get2 = dict1.get("score", 0) # 键不存在返回默认值
dict1["score"] = 90         # 添加/修改键值对
dict1.pop("age")            # 删除指定键
dict1.popitem()             # 删除最后一个键值对
dict1.update({"gender": "女", "addr": "北京"}) # 更新字典
dict1.clear()               # 清空字典


二、运算符

# 1. 算术运算符
a = 10
b = 3
print(a + b)  # 13 - 加
print(a - b)  # 7 - 减
print(a * b)  # 30 - 乘
print(a / b)  # 3.3333333333333335 - 除
print(a // b) # 3 - 整除
print(a % b)  # 1 - 取模
print(a ** b) # 1000 - 幂

# 2. 赋值运算符
x = 5
x += 3  # 等价于 x = x + 3 → 8
x -= 2  # 等价于 x = x - 2 → 6
x *= 4  # 等价于 x = x * 4 → 24
x /= 3  # 等价于 x = x / 3 → 8.0
x //= 2 # 等价于 x = x // 2 → 4.0
x %= 3  # 等价于 x = x % 3 → 1.0
x **= 2 # 等价于 x = x ** 2 → 1.0

# 3. 比较运算符
c = 8
d = 5
print(c == d)  # False - 等于
print(c != d)  # True - 不等于
print(c > d)   # True - 大于
print(c < d)   # False - 小于
print(c >= d)  # True - 大于等于
print(c <= d)  # False - 小于等于

# 4. 逻辑运算符
e = True
f = False
print(e and f) # False - 逻辑与
print(e or f)  # True - 逻辑或
print(not e)   # False - 逻辑非

# 5. 成员运算符
g = [1,2,3,4]
print(3 in g)      # True - 存在
print(5 not in g)  # True - 不存在

# 6. 身份运算符
h = [1,2,3]
i = h
j = [1,2,3]
print(h is i)    # True - 同一对象
print(h is j)    # False - 不同对象
print(h == j)    # True - 值相等
print(h is not j)# True - 不同对象

# 7. 位运算符（二进制操作）
k = 6  # 0110
l = 3  # 0011
print(k & l)  # 2 - 按位与
print(k | l)  # 7 - 按位或
print(k ^ l)  # 5 - 按位异或
print(~k)     # -7 - 按位取反
print(k << 1) # 12 - 左移
print(k >> 1) # 3 - 右移


三、流程控制

# 1. 条件语句（if-elif-else）
score = 85
if score >= 90:
    print("优秀")
elif score >= 80:
    print("良好")
elif score >= 70:
    print("中等")
elif score >= 60:
    print("及格")
else:
    print("不及格")

# 嵌套if
num = 15
if num > 10:
    if num % 2 == 0:
        print("大于10的偶数")
    else:
        print("大于10的奇数")
else:
    print("小于等于10")

# 2. 循环语句
## 2.1 for循环
# 遍历序列
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(f"水果：{fruit}")

# 遍历数字范围
for i in range(5):          # 0-4
    print(i)
for i in range(1, 6):       # 1-5
    print(i)
for i in range(0, 10, 2):   # 0,2,4,6,8
    print(i)

# 遍历字典
student = {"name": "张三", "age": 20}
for key in student:
    print(f"键：{key}，值：{student[key]}")
for key, value in student.items():
    print(f"键：{key}，值：{value}")

# 嵌套for循环
for i in range(1, 4):
    for j in range(1, 4):
        print(f"{i} * {j} = {i*j}")

## 2.2 while循环
count = 0
while count < 5:
    print(f"计数：{count}")
    count += 1

# while-else
num = 0
while num < 3:
    print(num)
    num += 1
else:
    print("循环正常结束")

## 2.3 循环控制关键字
# break - 终止循环
for i in range(10):
    if i == 5:
        break
    print(i)

# continue - 跳过当前迭代
for i in range(10):
    if i % 2 == 0:
        continue
    print(i)

# pass - 空语句（占位）
for i in range(5):
    if i == 3:
        pass  # 暂时不处理，后续补充逻辑
    print(i)


四、函数

# 1. 函数定义与调用
def greet():
    """无参数无返回值函数（文档字符串）"""
    print("Hello, Python!")

greet()  # 调用函数

# 带参数函数
def add(a, b):
    """带参数有返回值函数"""
    return a + b

result = add(3, 5)
print(f"3+5={result}")

# 2. 参数类型
## 2.1 位置参数
def print_info(name, age):
    print(f"姓名：{name}，年龄：{age}")

print_info("李四", 22)  # 按位置传参

## 2.2 关键字参数
print_info(age=25, name="王五")  # 按关键字传参

## 2.3 默认参数
def print_info2(name, age=18):
    print(f"姓名：{name}，年龄：{age}")

print_info2("赵六")        # 使用默认年龄
print_info2("孙七", 30)    # 覆盖默认值

## 2.4 可变长度参数
# *args - 可变位置参数（元组）
def sum_num(*args):
    total = 0
    for num in args:
        total += num
    return total

print(sum_num(1,2,3))      # 6
print(sum_num(1,2,3,4,5))  # 15

# **kwargs - 可变关键字参数（字典）
def print_kwargs(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}：{value}")

print_kwargs(name="周八", age=28, gender="男")

## 2.5 解包参数
nums = [10, 20]
print(add(*nums))  # 解包列表为位置参数

info = {"name": "吴九", "age": 30}
print_info(**info) # 解包字典为关键字参数

# 3. 返回值
# 单个返回值
def square(x):
    return x * x

# 多个返回值（实际返回元组）
def calc(a, b):
    return a + b, a - b, a * b, a / b

add_res, sub_res, mul_res, div_res = calc(10, 2)

# 4. 函数作用域
## 4.1 局部变量
def test_local():
    local_var = "局部变量"
    print(local_var)

## 4.2 全局变量
global_var = "全局变量"
def test_global():
    print(global_var)  # 访问全局变量

def modify_global():
    global global_var  # 声明使用全局变量
    global_var = "修改后的全局变量"

## 4.3 nonlocal关键字（嵌套函数）
def outer():
    x = 10
    def inner():
        nonlocal x     # 声明使用外层函数变量
        x = 20
    inner()
    print(x)  # 20

outer()

# 5. 匿名函数（lambda）
lambda_add = lambda a, b: a + b
print(lambda_add(4, 6))  # 10

# lambda结合内置函数
nums = [1, 3, 2, 5, 4]
sorted_nums = sorted(nums, key=lambda x: -x)  # 降序排序
print(sorted_nums)

# 6. 递归函数
def factorial(n):
    """阶乘递归函数"""
    if n == 1:
        return 1
    else:
        return n * factorial(n-1)

print(factorial(5))  # 120

# 7. 高阶函数
## 7.1 map - 映射
nums = [1,2,3,4]
result = map(lambda x: x*2, nums)
print(list(result))  # [2,4,6,8]

## 7.2 filter - 过滤
result = filter(lambda x: x%2==0, nums)
print(list(result))  # [2,4]

## 7.3 reduce - 归约（需导入）
from functools import reduce
result = reduce(lambda x,y: x+y, nums)
print(result)  # 10


五、面向对象

# 1. 类的定义与实例化
class Person:
    """人类（类文档字符串）"""
    
    # 类属性
    species = "人类"
    
    # 初始化方法
    def __init__(self, name, age):
        # 实例属性
        self.name = name
        self.age = age
    
    # 实例方法
    def introduce(self):
        return f"我叫{self.name}，今年{self.age}岁"
    
    # 类方法
    @classmethod
    def get_species(cls):
        return cls.species
    
    # 静态方法
    @staticmethod
    def is_adult(age):
        return age >= 18

# 创建实例
person1 = Person("张三", 25)
person2 = Person("李四", 17)

# 访问属性和方法
print(person1.name)
print(person1.introduce())
print(Person.get_species())
print(Person.is_adult(person2.age))

# 2. 属性访问控制
class Student:
    def __init__(self, name, score):
        self.name = name
        self.__score = score  # 私有属性（单下划线约定，双下划线强制）
    
    # 获取私有属性
    def get_score(self):
        return self.__score
    
    # 修改私有属性
    def set_score(self, score):
        if 0 <= score <= 100:
            self.__score = score
        else:
            raise ValueError("分数必须在0-100之间")

stu = Student("王五", 90)
print(stu.get_score())
stu.set_score(85)
# print(stu.__score)  # 报错，无法直接访问

# 3. 继承
class Teacher(Person):
    """教师类（继承Person类）"""
    
    def __init__(self, name, age, subject):
        # 调用父类初始化方法
        super().__init__(name, age)
        self.subject = subject
    
    # 重写父类方法
    def introduce(self):
        return f"我是{self.name}老师，教{self.subject}，今年{self.age}岁"

teacher = Teacher("赵六", 35, "数学")
print(teacher.introduce())

# 4. 多态
def print_introduce(obj):
    print(obj.introduce())

print_introduce(person1)  # 调用Person的introduce
print_introduce(teacher)  # 调用Teacher的introduce

# 5. 魔术方法（特殊方法）
class Book:
    def __init__(self, title, price):
        self.title = title
        self.price = price
    
    # 字符串表示
    def __str__(self):
        return f"《{self.title}》，价格：{self.price}元"
    
    # 自定义加法
    def __add__(self, other):
        return self.price + other.price
    
    # 长度（自定义）
    def __len__(self):
        return len(self.title)

book1 = Book("Python基础", 59)
book2 = Book("Python进阶", 79)
print(book1)          # 调用__str__
print(book1 + book2)  # 调用__add__
print(len(book1))     # 调用__len__


六、模块与包

# 1. 导入模块
import math  # 导入标准库模块
print(math.pi)          # 圆周率
print(math.sqrt(16))    # 平方根

import random  # 随机数模块
print(random.randint(1, 10))  # 1-10随机整数
print(random.choice(["a", "b", "c"]))  # 随机选择

# 2. 导入模块的指定部分
from math import pi, pow
print(pow(2, 3))  # 2^3=8

# 3. 导入并重命名
import numpy as np  # 第三方库，需先pip install numpy
arr = np.array([1,2,3])
print(arr)

from datetime import datetime as dt
print(dt.now())  # 当前时间

# 4. 导入所有内容（不推荐）
# from module import *

# 5. 创建自定义模块
# 新建文件：mymodule.py
"""
def say_hello():
    return "Hello from mymodule!"

version = "1.0"
"""

# 导入自定义模块
# import mymodule
# print(mymodule.say_hello())
# print(mymodule.version)

# 6. 创建包
# 目录结构：
# mypackage/
#     __init__.py
#     module1.py
#     module2.py

# __init__.py 内容：
# __all__ = ["module1", "module2"]  # 控制from ... import *

# 导入包中的模块
# from mypackage import module1
# from mypackage.module2 import func


七、文件操作

# 1. 文件打开与关闭
## 1.1 基本方式
f = open("test.txt", "w", encoding="utf-8")  # 打开文件（写模式）
f.write("Hello, 文件操作！\n")               # 写入内容
f.write("第二行内容\n")
f.close()                                   # 关闭文件

## 1.2 with语句（自动关闭文件，推荐）
with open("test.txt", "r", encoding="utf-8") as f:
    content = f.read()  # 读取全部内容
    print(content)

# 2. 文件打开模式
# r - 只读（默认）
# w - 写入（覆盖原有内容，文件不存在则创建）
# a - 追加（在末尾添加，文件不存在则创建）
# x - 独占创建（文件存在则报错）
# b - 二进制模式（rb, wb, ab）
# + - 读写模式（r+, w+, a+）

# 3. 读取文件
## 读取全部内容
with open("test.txt", "r", encoding="utf-8") as f:
    all_content = f.read()
    print(all_content)

## 按行读取
with open("test.txt", "r", encoding="utf-8") as f:
    line1 = f.readline()  # 读取第一行
    print(line1)
    lines = f.readlines() # 读取剩余所有行（列表）
    print(lines)

## 遍历文件行
with open("test.txt", "r", encoding="utf-8") as f:
    for line in f:
        print(line.strip())  # 去除换行符

# 4. 写入文件
## 写入字符串
with open("test.txt", "a", encoding="utf-8") as f:
    f.write("追加的内容\n")

## 写入列表
lines = ["第一行\n", "第二行\n", "第三行\n"]
with open("test.txt", "w", encoding="utf-8") as f:
    f.writelines(lines)

# 5. 二进制文件操作
# 写入二进制
with open("binary.bin", "wb") as f:
    f.write(b"Python binary data")

# 读取二进制
with open("binary.bin", "rb") as f:
    data = f.read()
    print(data)

# 6. 文件路径操作（os模块）
import os

# 获取当前目录
current_dir = os.getcwd()
print(current_dir)

# 创建目录
if not os.path.exists("test_dir"):
    os.mkdir("test_dir")

# 列出目录内容
files = os.listdir(current_dir)
print(files)

# 判断是否为文件/目录
print(os.path.isfile("test.txt"))
print(os.path.isdir("test_dir"))

# 获取文件大小
if os.path.exists("test.txt"):
    size = os.path.getsize("test.txt")
    print(f"文件大小：{size} 字节")

# 拼接路径
path = os.path.join(current_dir, "test.txt")
print(path)

# 7. pathlib模块（更现代的路径操作）
from pathlib import Path

# 创建路径对象
file_path = Path("test.txt")

# 检查是否存在
if file_path.exists():
    print(f"文件存在，大小：{file_path.stat().st_size} 字节")

# 读取文件
content = file_path.read_text(encoding="utf-8")
print(content)

# 写入文件
file_path.write_text("使用pathlib写入内容", encoding="utf-8")


八、异常处理

# 1. try-except基本用法
try:
    num = int(input("请输入一个整数："))
    result = 10 / num
    print(f"10 / {num} = {result}")
except ValueError:
    print("输入错误，请输入有效的整数！")
except ZeroDivisionError:
    print("错误：除数不能为0！")

# 2. 捕获多个异常
try:
    lst = [1,2,3]
    print(lst[5])
    print(10 / 0)
except (IndexError, ZeroDivisionError) as e:
    print(f"发生错误：{e}")
    print(f"错误类型：{type(e)}")

# 3. 捕获所有异常（不推荐）
try:
    # 可能出错的代码
    pass
except Exception as e:
    print(f"未知错误：{e}")

# 4. else子句（无异常时执行）
try:
    num = 5
    result = 10 / num
except ZeroDivisionError:
    print("除数不能为0")
else:
    print(f"计算成功：{result}")

# 5. finally子句（无论是否异常都执行）
try:
    f = open("test.txt", "r", encoding="utf-8")
    content = f.read()
    print(content)
except FileNotFoundError:
    print("文件不存在")
finally:
    # 确保文件关闭
    if 'f' in locals() and not f.closed:
        f.close()
    print("finally子句执行")

# 6. 自定义异常
class MyError(Exception):
    """自定义异常类"""
    def __init__(self, message):
        self.message = message
    
    def __str__(self):
        return f"自定义错误：{self.message}"

try:
    age = int(input("请输入年龄："))
    if age < 0 or age > 150:
        raise MyError("年龄必须在0-150之间")
except MyError as e:
    print(e)

# 7. 异常链
try:
    num = int("abc")
except ValueError as e:
    raise RuntimeError("处理数字时出错") from e


九、常用内置函数

# 1. 类型转换
print(int("100"))       # 字符串转整数
print(float(20))        # 整数转浮点数
print(str(3.14))        # 数字转字符串
print(list("hello"))    # 字符串转列表
print(tuple([1,2,3]))   # 列表转元组
print(set([1,2,2,3]))   # 列表转集合
print(dict(a=1, b=2))   # 创建字典

# 2. 数学相关
print(abs(-10))         # 绝对值
print(round(3.1415, 2)) # 四舍五入
print(max(1,5,3))       # 最大值
print(min(1,5,3))       # 最小值
print(sum([1,2,3,4]))   # 求和
print(pow(2,3))         # 幂运算

# 3. 序列相关
print(len("Python"))    # 长度
print(range(5))         # 范围对象
print(sorted([3,1,2]))  # 排序
print(reversed([1,2,3]))# 反转
print(enumerate(["a","b"])) # 枚举

# 4. 其他
print(type(10))         # 类型判断
print(id(10))           # 内存地址
print(input("输入："))   # 输入
print(print("输出"))     # 输出
print(isinstance(10, int)) # 判断类型


十、进阶基础

# 1. 列表推导式
# 基本形式
nums = [x for x in range(10)]
print(nums)

# 带条件
even_nums = [x for x in range(10) if x % 2 == 0]
print(even_nums)

# 嵌套
matrix = [[1,2,3], [4,5,6], [7,8,9]]
flatten = [num for row in matrix for num in row]
print(flatten)

# 2. 字典推导式
square_dict = {x: x*x for x in range(5)}
print(square_dict)

# 3. 集合推导式
even_set = {x for x in range(10) if x % 2 == 0}
print(even_set)

# 4. 生成器表达式（节省内存）
gen = (x for x in range(10))
for num in gen:
    print(num)

# 5. 装饰器（基础）
def decorator(func):
    def wrapper():
        print("函数执行前")
        func()
        print("函数执行后")
    return wrapper

@decorator
def say_hello():
    print("Hello!")

say_hello()

# 6. 迭代器与可迭代对象
# 可迭代对象：列表、元组、字符串、字典等
lst = [1,2,3]
it = iter(lst)  # 创建迭代器
print(next(it)) # 1
print(next(it)) # 2
print(next(it)) # 3
# print(next(it)) # StopIteration

# 7. 上下文管理器
class MyContext:
    def __enter__(self):
        print("进入上下文")
        return self
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        print("退出上下文")
        # 返回True表示处理异常
        return False

with MyContext() as mc:
    print("在上下文中执行")

# 8. 日期时间处理
import datetime

# 当前时间
now = datetime.datetime.now()
print(now)

# 日期格式化
print(now.strftime("%Y-%m-%d %H:%M:%S"))

# 时间差
delta = datetime.timedelta(days=1)
tomorrow = now + delta
print(tomorrow)

# 9. 正则表达式
import re

# 匹配
pattern = r"\d+"
result = re.findall(pattern, "年龄：25，身高：175")
print(result)

# 替换
result = re.sub(r"\d+", "XX", "年龄：25，身高：175")
print(result)

# 10. 多线程（基础）
import threading
import time

def print_numbers():
    for i in range(5):
        print(f"数字：{i}")
        time.sleep(1)

def print_letters():
    for c in ["a","b","c","d","e"]:
        print(f"字母：{c}")
        time.sleep(1)

# 创建线程
t1 = threading.Thread(target=print_numbers)
t2 = threading.Thread(target=print_letters)

# 启动线程
t1.start()
t2.start()

# 等待线程结束
t1.join()
t2.join()

print("所有线程执行完毕")


# 结束 - Python基础语法全覆盖
```