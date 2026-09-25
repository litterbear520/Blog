// 类装饰器示例：只有讲稿里实际运行过的步骤带 runs，输出用 Python 3.13 实跑录入
// （add_objprint 那步装了 objprint，已去掉终端颜色）。其余步骤是讲解用的中间形态，有的直接运行会报错。

export const steps = [
  {
    title: '用 Timer 类装饰函数',
    body: [],
    file: 'main.py',
    files: {
      'main.py': `import time

class Timer:
    def __init__(self, func):
        self.func = func

    def __call__(self, *args, **kwargs):
        start = time.time()
        ret = self.func(*args, **kwargs)
        print(f"Time: {time.time() - start}")
        return ret

@Timer
def add(a, b):
    return a + b

print(add(2, 3))
`,
    },
    runs: [{ cmd: 'python main.py', exit: 0, output: `Time: 3.5762786865234375e-06
5
` }],
  },
  {
    title: '写出等价形式',
    body: [],
    file: 'main.py',
    files: {
      'main.py': `import time

class Timer:
    def __init__(self, func):
        self.func = func

    def __call__(self, *args, **kwargs):
        start = time.time()
        ret = self.func(*args, **kwargs)
        print(f"Time: {time.time() - start}")
        return ret

@Timer
def add(a, b):
    return a + b

# 等价于
add = Timer(add)

print(add(2, 3))
`,
    },
  },
  {
    title: '打印 add 的类型',
    body: [],
    file: 'main.py',
    files: {
      'main.py': `import time

class Timer:
    def __init__(self, func):
        self.func = func

    def __call__(self, *args, **kwargs):
        start = time.time()
        ret = self.func(*args, **kwargs)
        print(f"Time: {time.time() - start}")
        return ret

@Timer
def add(a, b):
    return a + b

# 等价于
# add = Timer(add)

print(type(add))
print(add(2, 3))
`,
    },
    runs: [{ cmd: 'python main.py', exit: 0, output: `<class '__main__.Timer'>
Time: 2.1457672119140625e-06
5
` }],
  },
  {
    title: '给装饰器加上 prefix',
    body: [],
    file: 'main.py',
    files: {
      'main.py': `import time

class Timer:
    def __init__(self, func):
        self.func = func

    def __call__(self, *args, **kwargs):
        start = time.time()
        ret = self.func(*args, **kwargs)
        print(f"Time: {time.time() - start}")
        return ret

@Timer(prefix="curr_time: ")
def add(a, b):
    return a + b

# 等价于
add = Timer(prefix="curr_time: ")(add)

print(add(2, 3))
`,
    },
  },
  {
    title: '改写 Timer 的结构',
    body: [],
    file: 'main.py',
    files: {
      'main.py': `import time

class Timer:
    def __init__(self, prefix):
        self.prefix = prefix

    def __call__(self, func):
        def wrapper(*args, **kwargs):
            start = time.time()
            ret = self.func(*args, **kwargs)
            print(f"Time: {time.time() - start}")
            return ret
        return wrapper

@Timer(prefix="curr_time: ")
def add(a, b):
    return a + b

# 等价于
add = Timer(prefix="curr_time: ")(add)

print(add(2, 3))
`,
    },
  },
  {
    title: '用上 self.prefix',
    body: [],
    file: 'main.py',
    files: {
      'main.py': `import time

class Timer:
    def __init__(self, prefix):
        self.prefix = prefix

    def __call__(self, func):
        def wrapper(*args, **kwargs):
            start = time.time()
            ret = func(*args, **kwargs)
            print(f"{self.prefix}: {time.time() - start}")
            return ret
        return wrapper

@Timer(prefix="curr_time: ")
def add(a, b):
    return a + b

# 等价于
# add = Timer(prefix="curr_time: ")(add)

print(add(2, 3))
`,
    },
    runs: [{ cmd: 'python main.py', exit: 0, output: `curr_time: : 2.1457672119140625e-06
5
` }],
  },
];

const addStrSteps = [
  {
    title: '给类加上 __str__',
    body: [],
    file: 'main.py',
    files: {
      'main.py': `def add_str(cls):
    def __str__(self):
        return str(self.__dict__)
    cls.__str__ = __str__
    return cls

@add_str
class MyObject:
    def __init__(self, a, b):
        self.a = a
        self.b = b

o = MyObject(1, 2)
print(o)
`,
    },
    runs: [{ cmd: 'python main.py', exit: 0, output: `{'a': 1, 'b': 2}
` }],
  },
  {
    title: '写出等价形式',
    body: [],
    file: 'main.py',
    files: {
      'main.py': `def add_str(cls):
    def __str__(self):
        return str(self.__dict__)
    cls.__str__ = __str__
    return cls

@add_str
class MyObject:
    def __init__(self, a, b):
        self.a = a
        self.b = b

# 等价于
MyObject = add_str(MyObject)

o = MyObject(1, 2)
print(o)
`,
    },
  },
  {
    title: '换成 objprint 的 add_objprint',
    body: [],
    file: 'main.py',
    files: {
      'main.py': `from objprint import add_objprint

@add_objprint
class MyObject:
    def __init__(self, a, b):
        self.a = a
        self.b = b

o = MyObject(1, 2)
print(o)
`,
    },
    runs: [{ cmd: 'python main.py', exit: 0, output: `<MyObject 0x752b2419d400
  .a = 1,
  .b = 2
>
` }],
  },
];

export const addStr = { steps: addStrSteps };

export default { steps };
