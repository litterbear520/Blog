// atexit 示例：每一步都在 /home/claude-user/atexit_example 下用 `python3 main.py` 实跑录入（Python 3.12.3，Linux）。
// 第 4 步只是对照等价写法，讲稿里没有运行（真跑会注册两次、打印两次 exiting），所以不录输出。
// 第 13、14 步的 multiprocessing 在 Linux 上默认用 fork 启动子进程；第 14 步显式指定 spawn。

const MY_FUNC = `import atexit

class MyFunc:
    def __call__(self):
        print("exiting")

    def __eq__(self, other):
        if isinstance(other, MyFunc):
            return True
        return False

f0 = MyFunc()
atexit.register(f0)
`;

export default { steps: [
  {
    title: '用 register 注册退出函数',
    body: [
      '`atexit.register(f)` 把 `f` 注册进去，程序结束、进程退出的时候运行它，打印出 `exiting`。',
    ],
    file: 'main.py',
    lines: [[6, 6]],
    files: {
      'main.py': `import atexit

def f():
    print("exiting")

atexit.register(f)
`,
    },
    runs: [{ cmd: 'python main.py', exit: 0, output: `exiting
` }],
  },
  {
    title: '给退出函数传参数',
    body: [
      '`f` 现在需要一个参数 `s`，参数跟在函数后面一起传给 `register`，退出时 `f("exiting")` 被调用，结果和之前一样。',
    ],
    file: 'main.py',
    lines: [[6, 6]],
    files: {
      'main.py': `import atexit

def f(s):
    print(s)

atexit.register(f, "exiting")
`,
    },
    runs: [{ cmd: 'python main.py', exit: 0, output: `exiting
` }],
  },
  {
    title: '把 register 当 decorator 用',
    body: [
      '`@atexit.register` 放在 `f` 的定义前面，效果一样，退出时打印 `exiting`。',
    ],
    file: 'main.py',
    lines: [[3, 3]],
    files: {
      'main.py': `import atexit

@atexit.register
def f():
    print("exiting")
`,
    },
    runs: [{ cmd: 'python main.py', exit: 0, output: `exiting
` }],
  },
  {
    title: 'decorator 的等价写法',
    body: [
      '第 3 行的 decorator 相当于第 8 行这句赋值：`atexit.register` 注册之后，把拿到的函数原样返回，所以 `f` 还是原来那个函数。',
    ],
    file: 'main.py',
    lines: [[3, 3], [8, 8]],
    files: {
      'main.py': `import atexit

@atexit.register
def f():
    print("exiting")

# 等价于
f = atexit.register(f)
`,
    },
  },
  {
    title: '用 unregister 取消注册',
    body: [
      '第 7 行把 `f` unregister 掉，程序退出时就不再运行它，什么都没有打印。',
    ],
    file: 'main.py',
    lines: [[7, 7]],
    files: {
      'main.py': `import atexit

@atexit.register
def f():
    print("exiting")

atexit.unregister(f)
`,
    },
    runs: [{ cmd: 'python main.py', exit: 0, output: '' }],
  },
  {
    title: '注册三次，unregister 一次',
    body: [
      '`f` 注册了三次，只 unregister 了一次，三次注册全部被移除，什么都没有打印。',
    ],
    file: 'main.py',
    lines: [[6, 9]],
    files: {
      'main.py': `import atexit

def f():
    print("exiting")

atexit.register(f)
atexit.register(f)
atexit.register(f)
atexit.unregister(f)
`,
    },
    runs: [{ cmd: 'python main.py', exit: 0, output: '' }],
  },
  {
    title: '注册一个 callable object',
    body: [
      '`MyFunc` 定义了 `__call__`，所以它的 instance 是 callable；`__eq__` 让任意两个 `MyFunc` instance 都相等。注册 `f0` 之后，退出时打印 `exiting`。',
    ],
    file: 'main.py',
    lines: [[12, 13]],
    files: {
      'main.py': MY_FUNC,
    },
    runs: [{ cmd: 'python main.py', exit: 0, output: `exiting
` }],
  },
  {
    title: '用相等的对象 unregister',
    body: [
      '`f1` 和 `f0` 是两个 object，但 `f1 == f0`。unregister `f1` 之后，注册过的 `f0` 也被移除了，什么都没有打印。',
    ],
    file: 'main.py',
    lines: [[14, 15]],
    files: {
      'main.py': `${MY_FUNC}f1 = MyFunc()
atexit.unregister(f1)
`,
    },
    runs: [{ cmd: 'python main.py', exit: 0, output: '' }],
  },
  {
    title: '列出 atexit 的全部名字',
    body: [
      '除了 `register` 和 `unregister`，还有 `_clear`、`_ncallbacks`、`_run_exitfuncs` 三个没有写进文档的函数。',
    ],
    file: 'main.py',
    lines: [[3, 3]],
    files: {
      'main.py': `import atexit

print(dir(atexit))
`,
    },
    runs: [{ cmd: 'python main.py', exit: 0, output: `['__doc__', '__loader__', '__name__', '__package__', '__spec__', '_clear', '_ncallbacks', '_run_exitfuncs', 'register', 'unregister']
` }],
  },
  {
    title: '_ncallbacks 与 _clear',
    body: [
      '第 14 行打印出已注册的函数个数 `1`；第 15 行 `_clear()` 把它们清空，退出时就没有再打印 `exiting`。',
    ],
    file: 'main.py',
    lines: [[14, 15]],
    files: {
      'main.py': `${MY_FUNC}print(atexit._ncallbacks())
atexit._clear()
`,
    },
    runs: [{ cmd: 'python main.py', exit: 0, output: `1
` }],
  },
  {
    title: '用 _run_exitfuncs 提前运行',
    body: [
      '第 15 行 `_run_exitfuncs()` 立刻把注册的函数运行一遍并清空，所以 `exiting` 出现在第 16 行的 `Before exit` 前面，程序退出时也没有再打印一次。',
    ],
    file: 'main.py',
    lines: [[15, 16]],
    files: {
      'main.py': `${MY_FUNC}print(atexit._ncallbacks())
atexit._run_exitfuncs()
print("Before exit")
`,
    },
    runs: [{ cmd: 'python main.py', exit: 0, output: `1
exiting
Before exit
` }],
  },
  {
    title: 'os._exit 跳过注册的函数',
    body: [
      '注册了 `f0` 之后调用 `os._exit(0)`，进程直接通过 system call 退出，`exiting` 没有打印出来。',
    ],
    file: 'main.py',
    lines: [[15, 15]],
    files: {
      'main.py': `import atexit
import os

class MyFunc:
    def __call__(self):
        print("exiting")

    def __eq__(self, other):
        if isinstance(other, MyFunc):
            return True
        return False

f0 = MyFunc()
atexit.register(f0)
os._exit(0)
`,
    },
    runs: [{ cmd: 'python main.py', exit: 0, output: '' }],
  },
  {
    title: '在 multiprocessing 子进程里注册',
    body: [
      '`t` 在子进程里注册了一个打印 `exiting` 的函数。在 Linux 上运行，什么都没有打印：子进程跑完 `t` 之后是用 `os._exit` 退出的。',
    ],
    file: 'main.py',
    lines: [[4, 7]],
    files: {
      'main.py': `import atexit
import multiprocessing

def t():
    def f():
        print("exiting")
    atexit.register(f)

p = multiprocessing.Process(target=t)
p.start()
p.join()
`,
    },
    runs: [{ cmd: 'python main.py', exit: 0, output: '' }],
  },
  {
    title: '换成 spawn 启动子进程',
    body: [
      '用 spawn 启动的子进程是一个全新的 Python 解释器，跑完 `t` 之后用 `sys.exit` 正常退出，所以注册的函数会运行，打印出 `exiting`。spawn 会在子进程里重新 import 主模块，启动子进程的代码必须放进 `if __name__ == "__main__":`。',
    ],
    file: 'main.py',
    lines: [[9, 13]],
    files: {
      'main.py': `import atexit
import multiprocessing

def t():
    def f():
        print("exiting")
    atexit.register(f)

if __name__ == "__main__":
    multiprocessing.set_start_method("spawn")
    p = multiprocessing.Process(target=t)
    p.start()
    p.join()
`,
    },
    runs: [{ cmd: 'python main.py', exit: 0, output: `exiting
` }],
  },
] };
