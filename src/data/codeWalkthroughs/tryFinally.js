// try-finally 示例：每一步都在 /home/claude-user/tryfinally_example 下用 `python3 main.py` 实跑录入（Python 3.12.3，Linux）。
// 第 7～10 步在伪终端里跑（和读者在终端里看到的一样）：第 7 步向终端发 Ctrl+C，第 8、9 步运行 1 秒后分别发 SIGINT、SIGTERM；
// 被信号结束的进程按 shell 的惯例记成 128 + 信号编号。第 8、9 步输出里的 `$ kill ...` 一行是另一个终端里发信号的命令，按发生的时间插在中间。

const RESOURCE_LOOP = `import time
try:
    print("Resource acquire")
    while True:
        time.sleep(1)
finally:
    print("Resource release")
`;

export default { steps: [
  {
    title: '用 try-except 处理除以零',
    body: [
      '`1 / 0` 抛出 `ZeroDivisionError`，被 `except` 接住，只打印一行 `Divided by zero`，程序不会退出。',
    ],
    file: 'main.py',
    lines: [[3, 4]],
    files: {
      'main.py': `try:
    a = 1 / 0
except ZeroDivisionError:
    print("Divided by zero")
`,
    },
    runs: [{ cmd: 'python main.py', exit: 0, output: `Divided by zero
` }],
  },
  {
    title: '代码报错，资源没有释放',
    body: [
      '两个 `print` 分别代表资源的获取和释放。第 2 行报错之后，程序直接结束，第 3 行释放资源的代码没有运行。',
    ],
    file: 'main.py',
    lines: [[3, 3]],
    files: {
      'main.py': `print("Resource acquire")
a = 1 / 0
print("Resource release")
`,
    },
    runs: [{ cmd: 'python main.py', exit: 1, output: `Resource acquire
Traceback (most recent call last):
  File "/home/claude-user/tryfinally_example/main.py", line 2, in <module>
    a = 1 / 0
        ~~^~~
ZeroDivisionError: division by zero
` }],
  },
  {
    title: '把释放放进 finally',
    body: [
      '获取资源和运行的代码放进 `try`，释放资源放进 `finally`。异常没有被捕获，程序还是以异常结束，但 `Resource release` 在 traceback 之前打印了出来。',
    ],
    file: 'main.py',
    lines: [[4, 5]],
    files: {
      'main.py': `try:
    print("Resource acquire")
    a = 1 / 0
finally:
    print("Resource release")
`,
    },
    runs: [{ cmd: 'python main.py', exit: 1, output: `Resource acquire
Resource release
Traceback (most recent call last):
  File "/home/claude-user/tryfinally_example/main.py", line 3, in <module>
    a = 1 / 0
        ~~^~~
ZeroDivisionError: division by zero
` }],
  },
  {
    title: 'except 和 finally 一起用',
    body: [
      '异常先被 `except` 接住，打印 `Divided by zero`，之后 `finally` 依然运行，`Resource release` 照样打印出来。',
    ],
    file: 'main.py',
    lines: [[6, 7]],
    files: {
      'main.py': `try:
    print("Resource acquire")
    a = 1 / 0
except ZeroDivisionError:
    print("Divided by zero")
finally:
    print("Resource release")
`,
    },
    runs: [{ cmd: 'python main.py', exit: 0, output: `Resource acquire
Divided by zero
Resource release
` }],
  },
  {
    title: 'atexit 与 try-finally',
    body: [
      '`atexit.register` 登记的 `release_resource` 要等到整个程序结束时才运行；`try-finally` 在这一段代码运行完就释放资源，放在任意 scope 里都可以。',
    ],
    file: 'main.py',
    lines: [[6, 6], [8, 12]],
    files: {
      'main.py': `import atexit

def release_resource():
    pass

atexit.register(release_resource)

try:
    print("Resource acquire")
    # All kinds of crap
finally:
    print("Resource release")
`,
    },
    runs: [{ cmd: 'python main.py', exit: 0, output: `Resource acquire
Resource release
` }],
  },
  {
    title: 'sys.exit 时 finally 照常运行',
    body: [
      '`sys.exit(0)` 本质上是 raise 了一个 `SystemExit`，`finally` 可以处理，`Resource release` 被打印出来。',
    ],
    file: 'main.py',
    lines: [[4, 4]],
    files: {
      'main.py': `import sys
try:
    print("Resource acquire")
    sys.exit(0)
finally:
    print("Resource release")
`,
    },
    runs: [{ cmd: 'python main.py', exit: 0, output: `Resource acquire
Resource release
` }],
  },
  {
    title: '用 Ctrl+C 退出',
    body: [
      '程序在 `while` 循环里一直等着。运行后按 Ctrl+C，Python raise 一个 `KeyboardInterrupt`，`finally` 先打印 `Resource release`，然后才是 traceback。',
    ],
    file: 'main.py',
    lines: [[4, 5]],
    files: {
      'main.py': RESOURCE_LOOP,
    },
    runs: [{ cmd: 'python main.py', exit: 130, output: `Resource acquire
^CResource release
Traceback (most recent call last):
  File "/home/claude-user/tryfinally_example/main.py", line 5, in <module>
    time.sleep(1)
KeyboardInterrupt
` }],
  },
  {
    title: '用 SIGINT 停止进程',
    body: [
      '代码不变，程序运行后在另一个终端用 `kill -2 <pid>` 给它发 `SIGINT`。结果和按 Ctrl+C 一样，`Resource release` 被打印出来。',
    ],
    file: 'main.py',
    runs: [{ cmd: 'python main.py', exit: 130, output: `Resource acquire
$ kill -2 <pid>
Resource release
Traceback (most recent call last):
  File "/home/claude-user/tryfinally_example/main.py", line 5, in <module>
    time.sleep(1)
KeyboardInterrupt
` }],
  },
  {
    title: '用 SIGTERM 停止进程',
    body: [
      '换成 `kill -15 <pid>` 发 `SIGTERM`，进程被直接 terminate，只打印了 `Resource acquire`，`finally` 里的代码没有运行。',
    ],
    file: 'main.py',
    lines: [[6, 7]],
    runs: [{ cmd: 'python main.py', exit: 143, output: `Resource acquire
$ kill -15 <pid>
` }],
  },
  {
    title: 'os._exit 跳过 finally',
    body: [
      '`os._exit(0)` 直接做 system call 退出进程，`finally` 这个代码块不会运行，只有 `Resource acquire` 被打印出来。',
    ],
    file: 'main.py',
    lines: [[4, 4]],
    files: {
      'main.py': `import os
try:
    print("Resource acquire")
    os._exit(0)
finally:
    print("Resource release")
`,
    },
    runs: [{ cmd: 'python main.py', exit: 0, output: `Resource acquire
` }],
  },
] };
