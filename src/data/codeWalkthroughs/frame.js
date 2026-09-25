// frame 示例按文中的顺序展示；输出用 Python 3.13 实跑录入（第 1 步装了 objprint，已去掉终端颜色）。

export const steps = [
  {
    title: '查看当前 frame',
    body: [],
    file: 'main.py',
    files: {
      'main.py': `import inspect
from objprint import op

def f():
    frame = inspect.currentframe()
    op(frame, honor_existing=False, depth=1)

f()
`,
    },
    runs: [{ cmd: 'python main.py', exit: 0, output: `<frame 0x7b49adbea8e0
  .f_back = <frame 0x7b49ad516140 ... >,
  .f_builtins = { ... },
  .f_code = <code 0x7b49ad760580 ... >,
  .f_globals = { ... },
  .f_lasti = 62,
  .f_lineno = 6,
  .f_locals = <FrameLocalsProxy 0x7b49adbde7a0 ... >,
  .f_trace = None,
  .f_trace_lines = True,
  .f_trace_opcodes = False
>
` }],
  },
  {
    title: '读取调用者的函数名',
    body: [],
    file: 'main.py',
    files: {
      'main.py': `import inspect

def f():
    frame = inspect.currentframe()
    print(frame.f_back.f_code.co_name)

def g():
    f()

g()
`,
    },
    runs: [{ cmd: 'python main.py', exit: 0, output: 'g\n' }],
  },
  {
    title: '读取调用者的局部变量',
    body: [],
    file: 'main.py',
    files: {
      'main.py': `import inspect

def f():
    frame = inspect.currentframe()
    print(frame.f_back.f_locals)

def g():
    a = 3
    b = 4
    f()

g()
`,
    },
    runs: [{ cmd: 'python main.py', exit: 0, output: "{'a': 3, 'b': 4}\n" }],
  },
  {
    title: '读取调用文件与行号',
    body: [],
    file: 'main.py',
    files: {
      'main.py': `import inspect

def f():
    frame = inspect.currentframe()
    print(frame.f_back.f_code.co_filename)
    print(frame.f_back.f_lineno)


def g():
    # Which line?
    f()

g()
`,
    },
    runs: [{ cmd: 'python main.py', exit: 0, output: '/private/tmp/blog-frame-demo/main.py\n11\n' }],
  },
];

export default { steps };
