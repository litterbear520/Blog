// 描述器示例：每一步都用 `python3 main.py` 实跑录入（Python 3.12.3，Linux）；3.9～3.14 跑出来的结果相同，第 3 步 object 的地址每次运行都不一样。
// 第 1 步是第 2 步里那行 `# print(o.name)` 还没注释、也还没加 `print(A.name)` 时的写法；第 2～7 步和讲稿给的代码一致。

export default { steps: [
  {
    title: '打印 o.name',
    body: [
      '`Name` 定义了 `__get__`，class `A` 的 `name` 是一个 `Name` object。打印 `o.name`，调用的是 `Name` 的 `__get__`，打印出 `Peter`。',
    ],
    file: 'main.py',
    lines: [[9, 9]],
    files: {
      'main.py': `class Name:
    def __get__(self, obj, objtype):
        return "Peter"

class A:
    name = Name()

o = A()
print(o.name)
`,
    },
    runs: [{ cmd: 'python main.py', exit: 0, output: `Peter
` }],
  },
  {
    title: '打印 A.name',
    body: [
      '换成打印 class `A` 的 `name`，返回的依然是 `Peter`。',
    ],
    file: 'main.py',
    lines: [[10, 10]],
    files: {
      'main.py': `class Name:
    def __get__(self, obj, objtype):
        return "Peter"

class A:
    name = Name()

o = A()
# print(o.name)
print(A.name)
`,
    },
    runs: [{ cmd: 'python main.py', exit: 0, output: `Peter
` }],
  },
  {
    title: '在 __init__ 里赋值',
    body: [
      '`A` 改成在 `__init__` 里把一个 `Name` object 赋值给 `self.name`，这次打印 `o.name` 得到的是这个 `Name` object 本身。',
    ],
    file: 'main.py',
    lines: [[6, 7]],
    files: {
      'main.py': `class Name:
    def __get__(self, obj, objtype):
        return "Peter"

class A:
    def __init__(self):
        self.name = Name()

o = A()
print(o.name)
`,
    },
    runs: [{ cmd: 'python main.py', exit: 0, output: `<__main__.Name object at 0x74e531d340e0>
` }],
  },
  {
    title: '给 o.name 赋值',
    body: [
      '`name` 回到 class `A` 里，建立 `o` 之后把 `o.name` 赋值成 `Bob`，再打印 `o.name`，得到的是新赋值的 `Bob`。',
    ],
    file: 'main.py',
    lines: [[9, 9]],
    files: {
      'main.py': `class Name:
    def __get__(self, obj, objtype):
        return "Peter"

class A:
    name = Name()

o = A()
o.name = "Bob"
print(o.name)
`,
    },
    runs: [{ cmd: 'python main.py', exit: 0, output: `Bob
` }],
  },
  {
    title: '给 Name 加上 __set__',
    body: [
      '第 9 行把 `o.name` 赋值成 `Bob` 之后，第 10 行动态地给 `Name` 加上一个没有意义的 `__set__`，第 11 行再打印 `o.name`，结果变回了 `Peter`。',
    ],
    file: 'main.py',
    lines: [[9, 9], [11, 11]],
    files: {
      'main.py': `class Name:
    def __get__(self, obj, objtype):
        return "Peter"

class A:
    name = Name()

o = A()
o.name = "Bob"
Name.__set__ = lambda x, y, z: None
print(o.name)
`,
    },
    runs: [{ cmd: 'python main.py', exit: 0, output: `Peter
` }],
  },
  {
    title: '打印 o.__dict__',
    body: [
      '第 10 行打印出 `o.__dict__`，`name` 对应的值是 `Bob`；第 11 行打印出 `Bob`；第 13 行给 `Name` 加上 `__set__` 之后，第 14 行打印出 `Peter`。',
    ],
    file: 'main.py',
    lines: [[11, 11], [13, 13]],
    files: {
      'main.py': `class Name:
    def __get__(self, obj, objtype):
        return "Peter"

class A:
    name = Name()

o = A()
o.name = "Bob"
print(o.__dict__)
print(o.name)

Name.__set__ = lambda x, y, z: None
print(o.name)
`,
    },
    runs: [{ cmd: 'python main.py', exit: 0, output: `{'name': 'Bob'}
Bob
Peter
` }],
  },
  {
    title: '普通的类属性',
    body: [
      'class `A` 的 `name` 是一个普通的 string `Alice`。`o.__dict__` 是空的，打印 `o.name` 得到的是 `A` 上的 `Alice`。',
    ],
    file: 'main.py',
    lines: [[2, 2]],
    files: {
      'main.py': `class A:
    name = "Alice"

o = A()
print(o.__dict__)
print(o.name)
`,
    },
    runs: [{ cmd: 'python main.py', exit: 0, output: `{}
Alice
` }],
  },
] };
