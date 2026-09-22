// CodeObject 示例的演进快照：每一步只写本步改动的文件，其余文件从上一步继承。
// runs 里的输出是在 /home/claude-user/codeobject_example 下用 `python main.py` 实跑录下来的（Python 3.11.16，Linux）。

export const steps = [
  {
    title: "打印 f.__code__",
    body: [
      "定义一个空函数 `f`，打印 `f.__code__`，拿到的就是一个 code object。",
    ],
    file: "main.py",
    files: {
      "main.py": `def f():
    pass

print(f.__code__)
`,
    },
    runs: [
      {
        cmd: "python main.py",
        exit: 0,
        output: `<code object f at 0x728ce6074ab0, file "/home/claude-user/codeobject_example/main.py", line 1>
`,
      },
    ],
  },
  {
    title: "dir 一下这个 object",
    body: [
      "`dir` 一下这个 code object，可以看到它身上所有的 attribute，和官方文档里列出来的是一致的。",
    ],
    file: "main.py",
    files: {
      "main.py": `def f():
    pass

print(f.__code__)

d = dir(f.__code__)
print(d)
`,
    },
    runs: [
      {
        cmd: "python main.py",
        exit: 0,
        output: `<code object f at 0x74d62d2acab0, file "/home/claude-user/codeobject_example/main.py", line 1>
['__class__', '__delattr__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__getstate__', '__gt__', '__hash__', '__init__', '__init_subclass__', '__le__', '__lt__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', '_co_code_adaptive', '_varname_from_oparg', 'co_argcount', 'co_cellvars', 'co_code', 'co_consts', 'co_exceptiontable', 'co_filename', 'co_firstlineno', 'co_flags', 'co_freevars', 'co_kwonlyargcount', 'co_lines', 'co_linetable', 'co_lnotab', 'co_name', 'co_names', 'co_nlocals', 'co_positions', 'co_posonlyargcount', 'co_qualname', 'co_stacksize', 'co_varnames', 'replace']
`,
      },
    ],
  },
  {
    title: "co_code 与 dis",
    body: [
      "`co_code` 里保存的是这段代码真正的 bytecode，打印出来是一串二进制，我们一般不直接去读它。",
      "要看汇编就用 `dis` 这个 module，`dis.dis(f)` 给出的是人类可读的版本。本篇的字节码都是在 Python 3.11 下录的，不同版本之间会有差别。",
    ],
    file: "main.py",
    files: {
      "main.py": `import dis

def f():
    pass

code = f.__code__
print(code.co_code)

dis.dis(f)
`,
    },
    runs: [
      {
        cmd: "python main.py",
        exit: 0,
        output: `b'\\x97\\x00d\\x00S\\x00'
  3           0 RESUME                   0

  4           2 LOAD_CONST               0 (None)
              4 RETURN_VALUE
`,
      },
    ],
  },
  {
    title: "名字、文件与行号映射",
    body: [
      "`co_name` 是这段 code 的名字，一般就是函数名；`co_filename` 是它在哪个文件里被定义。",
      "`co_linetable` 保存的是每一条字节码到源代码行号的对应关系，压缩成了二进制，肉眼读不出来。",
    ],
    file: "main.py",
    files: {
      "main.py": `def f():
    pass

code = f.__code__

print(code.co_name)
print(code.co_filename)
print(code.co_linetable)
`,
    },
    runs: [
      {
        cmd: "python main.py",
        exit: 0,
        output: `f
/home/claude-user/codeobject_example/main.py
b'\\x80\\x00\\xd8\\x04\\x08\\x80D'
`,
      },
    ],
  },
  {
    title: "co_flags 与 co_stacksize",
    body: [
      "这两个都是虚拟机在运行时要用的数据。`co_stacksize` 是这段代码需要的栈空间有多大。",
      "`co_flags` 是一个 bitmap，编译的时候标记这段 code 有没有 `*args`、`**kwargs`，是不是生成器、是不是协程。",
    ],
    file: "main.py",
    files: {
      "main.py": `def f():
    pass

code = f.__code__


print(code.co_flags)
print(code.co_stacksize)
`,
    },
    runs: [
      {
        cmd: "python main.py",
        exit: 0,
        output: `3
1
`,
      },
    ],
  },
  {
    title: "三个参数计数",
    body: [
      "函数写成 `f(a, b=3, *args, **kwargs)`，这是我们平时最常用的四种参数形式。",
      "`co_argcount` 是 2，也就是 `a` 和 `b`；`co_posonlyargcount` 和 `co_kwonlyargcount` 都是 0。",
    ],
    file: "main.py",
    files: {
      "main.py": `def f(a, b=3, *args, **kwargs):
    pass

code = f.__code__


# number of arguments (not including keyword only arguments, * or ** args)
print(code.co_argcount)

# number of positional only arguments
print(code.co_posonlyargcount)

# number of keyword only arguments
# (not including ** arg)
print(code.co_kwonlyargcount)
`,
    },
    runs: [
      {
        cmd: "python main.py",
        exit: 0,
        output: `2
0
0
`,
      },
    ],
  },
  {
    title: "加上斜杠",
    body: [
      "在参数列表里加一个 `/`，斜杠之前的参数必须用位置传进来，`co_posonlyargcount` 变成了 2。",
      "`f(1)` 和 `f(1, 1)` 都合法，`f(a = 1)` 报错：`a` 不接受关键字传参。",
    ],
    file: "main.py",
    files: {
      "main.py": `def f(a, b=3, /, *args, **kwargs):
    print(a + b)

code = f.__code__


# number of arguments (not including keyword only arguments, * or ** args)
print(code.co_argcount)

# number of positional only arguments
print(code.co_posonlyargcount)

# number of keyword only arguments
# (not including ** arg)
print(code.co_kwonlyargcount)


f(1)
f(1, 1)
f(a = 1)
`,
    },
    runs: [
      {
        cmd: "python main.py",
        exit: 1,
        output: `2
2
0
4
2
Traceback (most recent call last):
  File "/home/claude-user/codeobject_example/main.py", line 20, in <module>
    f(a = 1)
TypeError: f() missing 1 required positional argument: 'a'
`,
      },
    ],
  },
  {
    title: "去掉斜杠",
    body: [
      "把 `/` 拿掉，`co_posonlyargcount` 回到 0，三个调用就都能跑通了。",
    ],
    file: "main.py",
    files: {
      "main.py": `def f(a, b=3, *args, **kwargs):
    print(a + b)

code = f.__code__


# number of arguments (not including keyword only arguments, * or ** args)
print(code.co_argcount)

# number of positional only arguments
print(code.co_posonlyargcount)

# number of keyword only arguments
# (not including ** arg)
print(code.co_kwonlyargcount)


f(1)
f(1, 1)
f(a = 1)
`,
    },
    runs: [
      {
        cmd: "python main.py",
        exit: 0,
        output: `2
0
0
4
2
4
`,
      },
    ],
  },
  {
    title: "加上星号",
    body: [
      "把参数列表改成 `a, *, b=3, **kwargs`，星号之后的参数只能用关键字传，`co_kwonlyargcount` 变成了 1。",
      "`f(1)` 正常，`f(1, 1)` 报错：这个函数只接受一个位置参数。",
    ],
    file: "main.py",
    files: {
      "main.py": `def f(a, *, b=3, **kwargs):
    print(a + b)

code = f.__code__


# number of arguments (not including keyword only arguments, * or ** args)
print(code.co_argcount)

# number of positional only arguments
print(code.co_posonlyargcount)

# number of keyword only arguments
# (not including ** arg)
print(code.co_kwonlyargcount)


f(1)
f(1, 1)
f(a = 1)
`,
    },
    runs: [
      {
        cmd: "python main.py",
        exit: 1,
        output: `1
0
1
4
Traceback (most recent call last):
  File "/home/claude-user/codeobject_example/main.py", line 19, in <module>
    f(1, 1)
TypeError: f() takes 1 positional argument but 2 were given
`,
      },
    ],
  },
  {
    title: "改成关键字传参",
    body: [
      "把 `f(1, 1)` 改成 `f(1, b=1)`，`b` 用关键字传进去，程序就正常了。",
    ],
    file: "main.py",
    files: {
      "main.py": `def f(a, *, b=3, **kwargs):
    print(a + b)

code = f.__code__


# number of arguments (not including keyword only arguments, * or ** args)
print(code.co_argcount)

# number of positional only arguments
print(code.co_posonlyargcount)

# number of keyword only arguments
# (not including ** arg)
print(code.co_kwonlyargcount)


f(1)
f(1, b=1)
f(a = 1)
`,
    },
    runs: [
      {
        cmd: "python main.py",
        exit: 0,
        output: `1
0
1
4
2
4
`,
      },
    ],
  },
  {
    title: "两个局部变量",
    body: [
      "参数 `a` 和只在函数里用到的 `b` 都是局部变量，`co_nlocals` 是 2，`co_varnames` 里按顺序放着它们的名字。",
      "`co_names`、`co_cellvars`、`co_freevars` 现在都是空的。",
    ],
    file: "main.py",
    files: {
      "main.py": `def f(a):
    b = a
    return b


code = f.__code__

print(f"nlocals: {code.co_nlocals}")

print(f"varnames: {code.co_varnames}")
print(f"names: {code.co_names}")
print(f"cellvars: {code.co_cellvars}")
print(f"freevars: {code.co_freevars}")

print(f"consts: {code.co_consts}")
`,
    },
    runs: [
      {
        cmd: "python main.py",
        exit: 0,
        output: `nlocals: 2
varnames: ('a', 'b')
names: ()
cellvars: ()
freevars: ()
consts: (None,)
`,
      },
    ],
  },
  {
    title: "字节码里只有角标",
    body: [
      "把 `dis` 加进来：字节码是 `LOAD_FAST 0` 和 `STORE_FAST 1`，括号里的名字是 `dis` 帮我们补上去的。",
      "0 对应的是 `co_varnames` 的第 0 个元素，也就是 `a`。",
    ],
    file: "main.py",
    files: {
      "main.py": `import dis

def f(a):
    b = a
    return b


code = f.__code__
dis.dis(f)

print(f"nlocals: {code.co_nlocals}")

print(f"varnames: {code.co_varnames}")
print(f"names: {code.co_names}")
print(f"cellvars: {code.co_cellvars}")
print(f"freevars: {code.co_freevars}")

print(f"consts: {code.co_consts}")
`,
    },
    runs: [
      {
        cmd: "python main.py",
        exit: 0,
        output: `  3           0 RESUME                   0

  4           2 LOAD_FAST                0 (a)
              4 STORE_FAST               1 (b)

  5           6 LOAD_FAST                1 (b)
              8 RETURN_VALUE
nlocals: 2
varnames: ('a', 'b')
names: ()
cellvars: ()
freevars: ()
consts: (None,)
`,
      },
    ],
  },
  {
    title: "属性名进了 co_names",
    body: [
      "把 `b = a` 改成 `b = a.attr`。`attr` 不是变量，它是一个属性名，被放进了 `co_names`。",
      "对应的字节码是 `LOAD_ATTR 0`。",
    ],
    file: "main.py",
    files: {
      "main.py": `import dis

def f(a):
    b = a.attr
    return b


code = f.__code__
dis.dis(f)

print(f"nlocals: {code.co_nlocals}")

print(f"varnames: {code.co_varnames}")
print(f"names: {code.co_names}")
print(f"cellvars: {code.co_cellvars}")
print(f"freevars: {code.co_freevars}")

print(f"consts: {code.co_consts}")
`,
    },
    runs: [
      {
        cmd: "python main.py",
        exit: 0,
        output: `  3           0 RESUME                   0

  4           2 LOAD_FAST                0 (a)
              4 LOAD_ATTR                0 (attr)
             14 STORE_FAST               1 (b)

  5          16 LOAD_FAST                1 (b)
             18 RETURN_VALUE
nlocals: 2
varnames: ('a', 'b')
names: ('attr',)
cellvars: ()
freevars: ()
consts: (None,)
`,
      },
    ],
  },
  {
    title: "方法名也在 co_names",
    body: [
      "再加一行 `b = a.method()`，`co_names` 变成了 `('attr', 'method')`，字节码里是 `LOAD_METHOD 1`。",
    ],
    file: "main.py",
    files: {
      "main.py": `import dis

def f(a):
    b = a.attr
    b = a.method()
    return b


code = f.__code__
dis.dis(f)

print(f"nlocals: {code.co_nlocals}")

print(f"varnames: {code.co_varnames}")
print(f"names: {code.co_names}")
print(f"cellvars: {code.co_cellvars}")
print(f"freevars: {code.co_freevars}")

print(f"consts: {code.co_consts}")
`,
    },
    runs: [
      {
        cmd: "python main.py",
        exit: 0,
        output: `  3           0 RESUME                   0

  4           2 LOAD_FAST                0 (a)
              4 LOAD_ATTR                0 (attr)
             14 STORE_FAST               1 (b)

  5          16 LOAD_FAST                0 (a)
             18 LOAD_METHOD              1 (method)
             40 PRECALL                  0
             44 CALL                     0
             54 STORE_FAST               1 (b)

  6          56 LOAD_FAST                1 (b)
             58 RETURN_VALUE
nlocals: 2
varnames: ('a', 'b')
names: ('attr', 'method')
cellvars: ()
freevars: ()
consts: (None,)
`,
      },
    ],
  },
  {
    title: "import 进来的名字",
    body: [
      "加一行 `import math`，`math` 同时出现在 `co_names` 和 `co_varnames` 里。",
      "`co_names` 里的是 import 要用到的那个 string，`co_varnames` 里的是 import 完之后被赋值的那个变量。",
    ],
    file: "main.py",
    files: {
      "main.py": `import dis

def f(a):
    import math
    b = a.attr
    b = a.method()
    return b


code = f.__code__
dis.dis(f)

print(f"nlocals: {code.co_nlocals}")

print(f"varnames: {code.co_varnames}")
print(f"names: {code.co_names}")
print(f"cellvars: {code.co_cellvars}")
print(f"freevars: {code.co_freevars}")

print(f"consts: {code.co_consts}")
`,
    },
    runs: [
      {
        cmd: "python main.py",
        exit: 0,
        output: `  3           0 RESUME                   0

  4           2 LOAD_CONST               1 (0)
              4 LOAD_CONST               0 (None)
              6 IMPORT_NAME              0 (math)
              8 STORE_FAST               1 (math)

  5          10 LOAD_FAST                0 (a)
             12 LOAD_ATTR                1 (attr)
             22 STORE_FAST               2 (b)

  6          24 LOAD_FAST                0 (a)
             26 LOAD_METHOD              2 (method)
             48 PRECALL                  0
             52 CALL                     0
             62 STORE_FAST               2 (b)

  7          64 LOAD_FAST                2 (b)
             66 RETURN_VALUE
nlocals: 3
varnames: ('a', 'math', 'b')
names: ('math', 'attr', 'method')
cellvars: ()
freevars: ()
consts: (None, 0)
`,
      },
    ],
  },
  {
    title: "import ... as 拆开两个名字",
    body: [
      "改成 `import math as m`：`co_names` 里还是 `math`，`co_varnames` 里换成了 `m`。",
    ],
    file: "main.py",
    files: {
      "main.py": `import dis

def f(a):
    import math as m
    b = a.attr
    b = a.method()
    return b


code = f.__code__
dis.dis(f)

print(f"nlocals: {code.co_nlocals}")

print(f"varnames: {code.co_varnames}")
print(f"names: {code.co_names}")
print(f"cellvars: {code.co_cellvars}")
print(f"freevars: {code.co_freevars}")

print(f"consts: {code.co_consts}")
`,
    },
    runs: [
      {
        cmd: "python main.py",
        exit: 0,
        output: `  3           0 RESUME                   0

  4           2 LOAD_CONST               1 (0)
              4 LOAD_CONST               0 (None)
              6 IMPORT_NAME              0 (math)
              8 STORE_FAST               1 (m)

  5          10 LOAD_FAST                0 (a)
             12 LOAD_ATTR                1 (attr)
             22 STORE_FAST               2 (b)

  6          24 LOAD_FAST                0 (a)
             26 LOAD_METHOD              2 (method)
             48 PRECALL                  0
             52 CALL                     0
             62 STORE_FAST               2 (b)

  7          64 LOAD_FAST                2 (b)
             66 RETURN_VALUE
nlocals: 3
varnames: ('a', 'm', 'b')
names: ('math', 'attr', 'method')
cellvars: ()
freevars: ()
consts: (None, 0)
`,
      },
    ],
  },
  {
    title: "被内层函数用到的 d",
    body: [
      "换一个例子：`g` 里定义了一个 dictionary `d`，`g` 里的局部函数 `f` 改了这个 `d`，然后把 `f` 返回。",
      "看 `g` 的 code object，`d` 不在 `co_varnames` 里，而是出现在 `co_cellvars` 里。",
    ],
    file: "main.py",
    files: {
      "main.py": `def g():
    d = {}

    def f():
        d["a"] = 1
    return f


code = g.__code__

print(f"nlocals: {code.co_nlocals}")

print(f"varnames: {code.co_varnames}")
print(f"names: {code.co_names}")
print(f"cellvars: {code.co_cellvars}")
print(f"freevars: {code.co_freevars}")

print(f"consts: {code.co_consts}")
`,
    },
    runs: [
      {
        cmd: "python main.py",
        exit: 0,
        output: `nlocals: 1
varnames: ('f',)
names: ()
cellvars: ('d',)
freevars: ()
consts: (None, <code object f at 0x7d8a959f81d0, file "/home/claude-user/codeobject_example/main.py", line 4>)
`,
      },
    ],
  },
  {
    title: "内层不用 d 会怎样",
    body: [
      "把 `f` 里那一行注释掉，`d` 就退回成 `g` 的普通局部变量：`co_cellvars` 空了，`co_varnames` 里多了 `d`。",
    ],
    file: "main.py",
    files: {
      "main.py": `def g():
    d = {}

    def f():
        # d["a"] = 1
        pass
    return f


code = g.__code__

print(f"nlocals: {code.co_nlocals}")

print(f"varnames: {code.co_varnames}")
print(f"names: {code.co_names}")
print(f"cellvars: {code.co_cellvars}")
print(f"freevars: {code.co_freevars}")

print(f"consts: {code.co_consts}")
`,
    },
    runs: [
      {
        cmd: "python main.py",
        exit: 0,
        output: `nlocals: 2
varnames: ('d', 'f')
names: ()
cellvars: ()
freevars: ()
consts: (None, <code object f at 0x75070ef34ab0, file "/home/claude-user/codeobject_example/main.py", line 4>)
`,
      },
    ],
  },
  {
    title: "换到 f 的角度看",
    body: [
      "把那一行放回来，同时把 `g.__code__` 改成 `g().__code__`——`g` 返回的就是 `f`，所以拿到的是 `f` 的 code object。",
      "同一个 `d`，在 `f` 这边是 `co_freevars`。",
    ],
    file: "main.py",
    files: {
      "main.py": `def g():
    d = {}

    def f():
        d["a"] = 1
    return f


code = g().__code__

print(f"nlocals: {code.co_nlocals}")

print(f"varnames: {code.co_varnames}")
print(f"names: {code.co_names}")
print(f"cellvars: {code.co_cellvars}")
print(f"freevars: {code.co_freevars}")

print(f"consts: {code.co_consts}")
`,
    },
    runs: [
      {
        cmd: "python main.py",
        exit: 0,
        output: `nlocals: 0
varnames: ()
names: ()
cellvars: ()
freevars: ('d',)
consts: (None, 1, 'a')
`,
      },
    ],
  },
  {
    title: "不涉及闭包时用 STORE_FAST",
    body: [
      "`dis` 一下 `g`。`f` 里没用到 `d` 的时候，`d = {}` 编译出来是 `STORE_FAST`，也就是普通局部变量的存法。",
    ],
    file: "main.py",
    files: {
      "main.py": `import dis

def g():
    d = {}

    def f():
        # d["a"] = 1
        pass
    return f


code = g().__code__
dis.dis(g)

print(f"nlocals: {code.co_nlocals}")

print(f"varnames: {code.co_varnames}")
print(f"names: {code.co_names}")
print(f"cellvars: {code.co_cellvars}")
print(f"freevars: {code.co_freevars}")

print(f"consts: {code.co_consts}")
`,
    },
    runs: [
      {
        cmd: "python main.py",
        exit: 0,
        output: `  3           0 RESUME                   0

  4           2 BUILD_MAP                0
              4 STORE_FAST               0 (d)

  6           6 LOAD_CONST               1 (<code object f at 0x741d08534ab0, file "/home/claude-user/codeobject_example/main.py", line 6>)
              8 MAKE_FUNCTION            0
             10 STORE_FAST               1 (f)

  9          12 LOAD_FAST                1 (f)
             14 RETURN_VALUE

Disassembly of <code object f at 0x741d08534ab0, file "/home/claude-user/codeobject_example/main.py", line 6>:
  6           0 RESUME                   0

  8           2 LOAD_CONST               0 (None)
              4 RETURN_VALUE
nlocals: 0
varnames: ()
names: ()
cellvars: ()
freevars: ()
consts: (None,)
`,
      },
    ],
  },
  {
    title: "涉及闭包时换成 STORE_DEREF",
    body: [
      "把 `f` 里那一行放回来，同样一句 `d = {}`，编译出来变成了 `STORE_DEREF`，后面还多了 `LOAD_CLOSURE`，`f` 内部读 `d` 用的是 `LOAD_DEREF`。",
      "在我们看来长得一样的函数，编译器认出了闭包，生成的字节码就不一样。",
    ],
    file: "main.py",
    files: {
      "main.py": `import dis

def g():
    d = {}

    def f():
        d["a"] = 1
        pass
    return f


code = g().__code__
dis.dis(g)

print(f"nlocals: {code.co_nlocals}")

print(f"varnames: {code.co_varnames}")
print(f"names: {code.co_names}")
print(f"cellvars: {code.co_cellvars}")
print(f"freevars: {code.co_freevars}")

print(f"consts: {code.co_consts}")
`,
    },
    runs: [
      {
        cmd: "python main.py",
        exit: 0,
        output: `              0 MAKE_CELL                1 (d)

  3           2 RESUME                   0

  4           4 BUILD_MAP                0
              6 STORE_DEREF              1 (d)

  6           8 LOAD_CLOSURE             1 (d)
             10 BUILD_TUPLE              1
             12 LOAD_CONST               1 (<code object f at 0x7cfb641381d0, file "/home/claude-user/codeobject_example/main.py", line 6>)
             14 MAKE_FUNCTION            8 (closure)
             16 STORE_FAST               0 (f)

  9          18 LOAD_FAST                0 (f)
             20 RETURN_VALUE

Disassembly of <code object f at 0x7cfb641381d0, file "/home/claude-user/codeobject_example/main.py", line 6>:
              0 COPY_FREE_VARS           1

  6           2 RESUME                   0

  7           4 LOAD_CONST               1 (1)
              6 LOAD_DEREF               0 (d)
              8 LOAD_CONST               2 ('a')
             10 STORE_SUBSCR

  8          14 LOAD_CONST               0 (None)
             16 RETURN_VALUE
nlocals: 0
varnames: ()
names: ()
cellvars: ()
freevars: ('d',)
consts: (None, 1, 'a')
`,
      },
    ],
  },
  {
    title: "1 和 abcabc 都在 const 里",
    body: [
      "函数里写了 `a = 1` 和 `b = \"abcabc\"`，这两个常量值都被放进了 `co_consts`。",
      "`None` 是常驻嘉宾，永远都在 `co_consts` 里。",
    ],
    file: "main.py",
    files: {
      "main.py": `def f():
    a = 1
    b = "abcabc"
    return b * a


code = f.__code__


print(f"nlocals: {code.co_nlocals}")

print(f"varnames: {code.co_varnames}")
print(f"names: {code.co_names}")
print(f"cellvars: {code.co_cellvars}")
print(f"freevars: {code.co_freevars}")

print(f"consts: {code.co_consts}")
`,
    },
    runs: [
      {
        cmd: "python main.py",
        exit: 0,
        output: `nlocals: 2
varnames: ('a', 'b')
names: ()
cellvars: ()
freevars: ()
consts: (None, 1, 'abcabc')
`,
      },
    ],
  },
];

export default { steps };
