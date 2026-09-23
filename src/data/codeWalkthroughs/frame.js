// frame 示例按文中的顺序展示；后 3 步的输出用 Python 3.13 实跑录入。

export const steps = [
  {
    title: '查看当前 frame',
    body: [
      '用 `inspect.currentframe()` 拿到当前 frame，再用 `objprint.op` 展开它的属性。这个库需要另行安装，属性值也随运行环境变化。',
    ],
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
  },
  {
    title: '读取调用者的函数名',
    body: [
      '`f_back` 指向调用者的 frame，`f_code.co_name` 是调用者代码对象的名字。',
    ],
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
    body: [
      '`f_back.f_locals` 显示 `g` 在调用 `f` 时的局部变量。',
    ],
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
    body: [
      '`co_filename` 给出调用者代码所在的文件，`f_lineno` 给出调用所在的源代码行。',
    ],
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
    runs: [{ cmd: 'python main.py', exit: 0, output: '/private/tmp/blog-frame-demo/main.py\n10\n' }],
  },
];

export default { steps };
