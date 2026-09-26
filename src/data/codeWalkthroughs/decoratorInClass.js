// 类里的装饰器示例：每一步都实跑录入，第 5 步用 Python 3.9（3.10 起 staticmethod 对象可直接调用，不再报错），其余用 Python 3.12。

export const steps = [
  {
    title: '用 log_function 装饰 fib',
    body: [],
    file: 'main.py',
    files: {
      'main.py': `def log_function(func):
    def wrapper(*args, **kwargs):
        print(f"function start!")
        print(f"args: {args}")
        ret = func(*args, **kwargs)
        print(f"function end!")
        return ret
    return wrapper

@log_function
def fib(n):
    if n <= 1:
        return 0
    return fib(n - 1) + fib(n - 2)

fib(3)
`,
    },
    runs: [{ cmd: 'python main.py', exit: 0, output: `function start!
args: (3,)
function start!
args: (2,)
function start!
args: (1,)
function end!
function start!
args: (0,)
function end!
function end!
function start!
args: (1,)
function end!
function end!
` }],
  },
  {
    title: '把装饰器放进类里',
    body: [],
    file: 'main.py',
    lines: [[11, 11]],
    files: {
      'main.py': `class Decorators:
    def log_function(self, func):
        def wrapper(*args, **kwargs):
            print(f"function start!")
            print(f"args: {args}")
            ret = func(*args, **kwargs)
            print(f"function end!")
            return ret
        return wrapper

d = Decorators()

@d.log_function
def fib(n):
    if n <= 1:
        return 0
    return fib(n - 1) + fib(n - 2)

fib(3)
`,
    },
    runs: [{ cmd: 'python main.py', exit: 0, output: `function start!
args: (3,)
function start!
args: (2,)
function start!
args: (1,)
function end!
function start!
args: (0,)
function end!
function end!
function start!
args: (1,)
function end!
function end!
` }],
  },
  {
    title: '改成类方法',
    body: [],
    file: 'main.py',
    lines: [[12, 12]],
    files: {
      'main.py': `class Decorators:
    @classmethod
    def log_function(cls, func):
        def wrapper(*args, **kwargs):
            print(f"function start!")
            print(f"args: {args}")
            ret = func(*args, **kwargs)
            print(f"function end!")
            return ret
        return wrapper

@Decorators.log_function
def fib(n):
    if n <= 1:
        return 0
    return fib(n - 1) + fib(n - 2)

fib(3)
`,
    },
    runs: [{ cmd: 'python main.py', exit: 0, output: `function start!
args: (3,)
function start!
args: (2,)
function start!
args: (1,)
function end!
function start!
args: (0,)
function end!
function end!
function start!
args: (1,)
function end!
function end!
` }],
  },
  {
    title: '改成静态方法',
    body: [],
    file: 'main.py',
    files: {
      'main.py': `class Decorators:
    @staticmethod
    def log_function(func):
        def wrapper(*args, **kwargs):
            print(f"function start!")
            print(f"args: {args}")
            ret = func(*args, **kwargs)
            print(f"function end!")
            return ret
        return wrapper

@Decorators.log_function
def fib(n):
    if n <= 1:
        return 0
    return fib(n - 1) + fib(n - 2)

fib(3)
`,
    },
    runs: [{ cmd: 'python main.py', exit: 0, output: `function start!
args: (3,)
function start!
args: (2,)
function start!
args: (1,)
function end!
function start!
args: (0,)
function end!
function end!
function start!
args: (1,)
function end!
function end!
` }],
  },
  {
    title: '在类里用静态方法装饰 fib',
    body: [],
    file: 'main.py',
    files: {
      'main.py': `class Decorators:
    @staticmethod
    def log_function(func):
        def wrapper(*args, **kwargs):
            print(f"function start!")
            print(f"args: {args}")
            ret = func(*args, **kwargs)
            print(f"function end!")
            return ret
        return wrapper

    @log_function
    def fib(self, n):
        if n <= 1:
            return 0
        return self.fib(n - 1) + self.fib(n - 2)

d = Decorators()
d.fib(3)
`,
    },
    runs: [{ cmd: 'python3.9 main.py', exit: 1, output: `Traceback (most recent call last):
  File "/home/claude-user/decorator_in_class/main.py", line 1, in <module>
    class Decorators:
  File "/home/claude-user/decorator_in_class/main.py", line 13, in Decorators
    def fib(self, n):
TypeError: 'staticmethod' object is not callable
` }],
  },
  {
    title: '在类里用对象方法装饰 fib',
    body: [],
    file: 'main.py',
    files: {
      'main.py': `class Decorators:
    def log_function(self, func):
        def wrapper(*args, **kwargs):
            print(f"function start!")
            print(f"args: {args}")
            ret = func(*args, **kwargs)
            print(f"function end!")
            return ret
        return wrapper

    @log_function
    def fib(self, n):
        if n <= 1:
            return 0
        return self.fib(n - 1) + self.fib(n - 2)

d = Decorators()
d.fib(3)
`,
    },
    runs: [{ cmd: 'python main.py', exit: 1, output: `Traceback (most recent call last):
  File "/home/claude-user/decorator_in_class/main.py", line 1, in <module>
    class Decorators:
  File "/home/claude-user/decorator_in_class/main.py", line 11, in Decorators
    @log_function
     ^^^^^^^^^^^^
TypeError: Decorators.log_function() missing 1 required positional argument: 'func'
` }],
  },
  {
    title: '不加任何装饰器',
    body: [],
    file: 'main.py',
    files: {
      'main.py': `class Decorators:
    def log_function(func):
        def wrapper(*args, **kwargs):
            print(f"function start!")
            print(f"args: {args}")
            ret = func(*args, **kwargs)
            print(f"function end!")
            return ret
        return wrapper

    @log_function
    def fib(self, n):
        if n <= 1:
            return 0
        return self.fib(n - 1) + self.fib(n - 2)

d = Decorators()
d.fib(3)
`,
    },
    runs: [{ cmd: 'python main.py', exit: 0, output: `function start!
args: (<__main__.Decorators object at 0x7fee70b929c0>, 3)
function start!
args: (<__main__.Decorators object at 0x7fee70b929c0>, 2)
function start!
args: (<__main__.Decorators object at 0x7fee70b929c0>, 1)
function end!
function start!
args: (<__main__.Decorators object at 0x7fee70b929c0>, 0)
function end!
function end!
function start!
args: (<__main__.Decorators object at 0x7fee70b929c0>, 1)
function end!
function end!
` }],
  },
  {
    title: '在类外通过对象使用',
    body: [],
    file: 'main.py',
    files: {
      'main.py': `class Decorators:
    def log_function(func):
        def wrapper(*args, **kwargs):
            print(f"function start!")
            print(f"args: {args}")
            ret = func(*args, **kwargs)
            print(f"function end!")
            return ret
        return wrapper

    @log_function
    def fib(self, n):
        if n <= 1:
            return 0
        return self.fib(n - 1) + self.fib(n - 2)

d = Decorators()
# d.fib(3)

@d.log_function
def f():
    pass

f()
`,
    },
    runs: [{ cmd: 'python main.py', exit: 1, output: `Traceback (most recent call last):
  File "/home/claude-user/decorator_in_class/main.py", line 20, in <module>
    @d.log_function
     ^^^^^^^^^^^^^^
TypeError: Decorators.log_function() takes 1 positional argument but 2 were given
` }],
  },
  {
    title: '在类外通过类使用',
    body: [],
    file: 'main.py',
    files: {
      'main.py': `class Decorators:
    def log_function(func):
        def wrapper(*args, **kwargs):
            print(f"function start!")
            print(f"args: {args}")
            ret = func(*args, **kwargs)
            print(f"function end!")
            return ret
        return wrapper

    @log_function
    def fib(self, n):
        if n <= 1:
            return 0
        return self.fib(n - 1) + self.fib(n - 2)

d = Decorators()
# d.fib(3)

@Decorators.log_function
def f():
    pass

f()
`,
    },
    runs: [{ cmd: 'python main.py', exit: 0, output: `function start!
args: ()
function end!
` }],
  },
  {
    title: '在类定义最后转成静态方法',
    body: [],
    file: 'main.py',
    files: {
      'main.py': `class Decorators:
    def log_function(func):
        def wrapper(*args, **kwargs):
            print(f"function start!")
            print(f"args: {args}")
            ret = func(*args, **kwargs)
            print(f"function end!")
            return ret
        return wrapper

    @log_function
    def fib(self, n):
        if n <= 1:
            return 0
        return self.fib(n - 1) + self.fib(n - 2)

    log_function = staticmethod(log_function)

d = Decorators()
# d.fib(3)

@Decorators.log_function
def f():
    pass

@d.log_function
def g():
    pass
f()
g()
`,
    },
    runs: [{ cmd: 'python main.py', exit: 0, output: `function start!
args: ()
function end!
function start!
args: ()
function end!
` }],
  },
];

export default { steps };
