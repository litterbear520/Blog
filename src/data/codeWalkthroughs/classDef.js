// class 背后的原理示例：在 /home/claude-user/class_example 下实跑录入（Python 3.10.21，Linux）。
// 字节码要用 3.10 录：讲解里的 CALL_FUNCTION 和各条指令的偏移都是 3.10 的，3.11 起 class 的字节码变了。

const DIS = `  1           0 LOAD_BUILD_CLASS
              2 LOAD_CONST               0 (<code object A at 0x73d83039ae40, file "main.py", line 1>)
              4 LOAD_CONST               1 ('A')
              6 MAKE_FUNCTION            0
              8 LOAD_CONST               1 ('A')
             10 CALL_FUNCTION            2
             12 STORE_NAME               0 (A)
             14 LOAD_CONST               2 (None)
             16 RETURN_VALUE

Disassembly of <code object A at 0x73d83039ae40, file "main.py", line 1>:
  1           0 LOAD_NAME                0 (__name__)
              2 STORE_NAME               1 (__module__)
              4 LOAD_CONST               0 ('A')
              6 STORE_NAME               2 (__qualname__)

  2           8 LOAD_CONST               1 ('AAA')
             10 STORE_NAME               3 (name)

  3          12 LOAD_CONST               2 (<code object f at 0x73d83039ad90, file "main.py", line 3>)
             14 LOAD_CONST               3 ('A.f')
             16 MAKE_FUNCTION            0
             18 STORE_NAME               4 (f)
             20 LOAD_CONST               4 (None)
             22 RETURN_VALUE

Disassembly of <code object f at 0x73d83039ad90, file "main.py", line 3>:
  4           0 LOAD_GLOBAL              0 (print)
              2 LOAD_CONST               1 (1)
              4 CALL_FUNCTION            1
              6 POP_TOP
              8 LOAD_CONST               0 (None)
             10 RETURN_VALUE
`;

export const steps = [
  {
    title: '查看 class A 的字节码',
    body: [
      '四行代码定义了一个 class `A`，用 `python -m dis` 把它的字节码打印出来，同时存进 `dis.txt`，接下来一段一段地看。',
    ],
    file: 'main.py',
    files: {
      'main.py': `class A:
    name = "AAA"
    def f(self):
        print(1)
`,
      'dis.txt': DIS,
    },
    runs: [{ cmd: 'python -m dis main.py | tee dis.txt', exit: 0, output: DIS }],
  },
  {
    title: 'f 函数的 code object',
    body: [
      '最后这一段是第 3、4 行定义的 `f` 函数。它和在 class 外面定义的函数没有区别，也是一个 code object。',
    ],
    file: 'dis.txt',
    lines: [[27, 33]],
  },
  {
    title: '__module__ 与 __qualname__',
    body: [
      'code object `A` 的 0、2、4、6 相当于 `__module__ = __name__` 和 `__qualname__ = "A"` 这两句。',
    ],
    file: 'dis.txt',
    lines: [[12, 15]],
  },
  {
    title: 'name = "AAA"',
    body: [
      '8 和 10 对应第 2 行的 `name = "AAA"`。',
    ],
    file: 'dis.txt',
    lines: [[17, 18]],
  },
  {
    title: '做出 A.f 函数',
    body: [
      '12 到 22 用 `f` 的 code object 做了一个名字叫 `A.f` 的函数，保存在 `f` 这个变量里。',
    ],
    file: 'dis.txt',
    lines: [[20, 25]],
  },
  {
    title: 'LOAD_BUILD_CLASS',
    body: [
      '回到最外层，`LOAD_BUILD_CLASS` 把 builtins 里的 `__build_class__` 函数压到栈里。',
    ],
    file: 'dis.txt',
    lines: [[1, 1]],
  },
  {
    title: '用 code object A 做函数',
    body: [
      '2、4、6 用 code object `A` 做了一个名字叫 `A` 的函数，也就是源代码第 2、3、4 行的那个小函数。',
    ],
    file: 'dis.txt',
    lines: [[2, 4]],
  },
  {
    title: '调用 __build_class__',
    body: [
      '`CALL_FUNCTION 2` 调用 `__build_class__`，传进去刚才那个函数和字符串 `\'A\'`，返回值用 `STORE_NAME` 保存到 `A` 这个变量里。',
    ],
    file: 'dis.txt',
    lines: [[5, 7]],
  },
  {
    title: '打印 A 的 type',
    body: [
      '打印的是 class `A` 本身的 type，而不是它产生的 object 的 type，结果是 `type`。',
    ],
    file: 'main.py',
    lines: [[5, 5]],
    files: {
      'main.py': `class A:
    name = "AAA"
    def f(self):
        print(1)
print(type(A))
`,
      'dis.txt': null,
    },
    runs: [{ cmd: 'python main.py', exit: 0, output: `<class 'type'>
` }],
  },
  {
    title: '打印 A.__dict__',
    body: [
      '`A.__dict__` 里有 `__module__`、`name`，还有名字叫 `A.f` 的函数 `f`。',
    ],
    file: 'main.py',
    lines: [[6, 6]],
    files: {
      'main.py': `class A:
    name = "AAA"
    def f(self):
        print(1)

print(A.__dict__)
`,
    },
    runs: [{ cmd: 'python main.py', exit: 0, output: `{'__module__': '__main__', 'name': 'AAA', 'f': <function A.f at 0x79c83438bb50>, '__dict__': <attribute '__dict__' of 'A' objects>, '__weakref__': <attribute '__weakref__' of 'A' objects>, '__doc__': None}
` }],
  },
  {
    title: '用 type 动态建立类',
    body: [
      '类的名字、父类和 dictionary 三样东西交给 `type`，就动态地建立了一个和前面等价的类 `A`，最后还能用它建立 object。',
    ],
    file: 'main.py',
    lines: [[9, 9]],
    files: {
      'main.py': `def f(self):
    print(1)

d = {
    "name": "AAA",
    "f": f
}

A = type('A', (), d)
print(A.__dict__)

a = A()
`,
    },
    runs: [{ cmd: 'python main.py', exit: 0, output: `{'name': 'AAA', 'f': <function f at 0x783adb18ba30>, '__module__': '__main__', '__dict__': <attribute '__dict__' of 'A' objects>, '__weakref__': <attribute '__weakref__' of 'A' objects>, '__doc__': None}
` }],
  },
];

export default { steps };
