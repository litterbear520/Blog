// 退出方式示例：每一步都在 /home/claude-user/exit_example 下用 `python3 main.py` 实跑录入（Python 3.12.3，Linux）；
// 第 1 步用 `python3 -S main.py`，查看状态码的几步用 `python3 main.py; echo $?`。

export const steps = [
  {
    title: '用 python -S 运行',
    body: [
      '加上 `-S` 运行时不会 import `site` 这个 module，`quit` 和 `exit` 这两个名字就不存在了，第 4 行直接报 `NameError`。',
    ],
    file: 'main.py',
    lines: [[4, 4]],
    files: {
      'main.py': `import sys
import os

quit()
exit()
sys.exit()
os._exit()
`,
    },
    runs: [{ cmd: 'python -S main.py', exit: 1, output: `Traceback (most recent call last):
  File "/home/claude-user/exit_example/main.py", line 4, in <module>
    quit()
    ^^^^
NameError: name 'quit' is not defined
` }],
  },
  {
    title: 'catch 住 SystemExit',
    body: [
      '`quit()` raise 的 `SystemExit` 被 `except SystemExit` 接住了，程序没有退出，第 12 行的 print 照样打印出来。',
    ],
    file: 'main.py',
    lines: [[12, 12]],
    files: {
      'main.py': `import sys
import os

try:
    quit()
    exit()
    sys.exit()
    os._exit()
except SystemExit:
    print("Ignore Exit!")

print("Yeah!")
`,
    },
    runs: [{ cmd: 'python main.py', exit: 0, output: `Ignore Exit!
Yeah!
` }],
  },
  {
    title: '空的 except',
    body: [
      '空的 `except:` 什么异常都接，`SystemExit` 也一样被吞掉，程序还是没有退出。',
    ],
    file: 'main.py',
    lines: [[9, 9]],
    files: {
      'main.py': `import sys
import os

try:
    quit()
    exit()
    sys.exit()
    os._exit()
except:
    pass

print("Yeah!")
`,
    },
    runs: [{ cmd: 'python main.py', exit: 0, output: `Yeah!
` }],
  },
  {
    title: 'except Exception',
    body: [
      '`SystemExit` 不是 `Exception` 的子类，`except Exception` 接不住它，程序正常退出，第 12 行没有打印。',
    ],
    file: 'main.py',
    lines: [[9, 9]],
    files: {
      'main.py': `import sys
import os

try:
    quit()
    exit()
    sys.exit()
    os._exit()
except Exception:
    pass

print("Yeah!")
`,
    },
    runs: [{ cmd: 'python main.py', exit: 0, output: '' }],
  },
  {
    title: '直接 raise SystemExit',
    body: [
      '第 5 行直接 raise `SystemExit`，效果和前三种写法一样，程序退出，什么都没有打印。',
    ],
    file: 'main.py',
    lines: [[5, 5]],
    files: {
      'main.py': `import sys
import os

try:
    raise SystemExit
    quit()
    exit()
    sys.exit()
    os._exit()
except Exception:
    pass

print("Yeah!")
`,
    },
    runs: [{ cmd: 'python main.py', exit: 0, output: '' }],
  },
  {
    title: 'os._exit 不给状态码',
    body: [
      '`os._exit` 是 system call 的接口，必须给一个 status，不给就报 `TypeError`。',
    ],
    file: 'main.py',
    lines: [[3, 3]],
    files: {
      'main.py': `import os

os._exit()
`,
    },
    runs: [{ cmd: 'python main.py', exit: 1, output: `Traceback (most recent call last):
  File "/home/claude-user/exit_example/main.py", line 3, in <module>
    os._exit()
TypeError: _exit() missing required argument 'status' (pos 1)
` }],
  },
  {
    title: 'try/except 拦不住 os._exit',
    body: [
      '`os._exit(0)` 外面包了 `try/except`，程序依然直接退出，第 8 行没有打印。',
      '运行后用 `echo $?` 拿上一个进程的状态码，这里是 0。',
    ],
    file: 'main.py',
    lines: [[8, 8]],
    files: {
      'main.py': `import os

try:
    os._exit(0)
except:
    pass

print("Yeah!")
`,
    },
    runs: [{ cmd: 'python main.py; echo $?', exit: 0, output: `0
` }],
  },
  {
    title: 'os._exit(1) 的状态码',
    body: [
      '改成 `os._exit(1)`，`echo $?` 拿到的状态码就是 1。',
    ],
    file: 'main.py',
    lines: [[4, 4]],
    files: {
      'main.py': `import os

try:
    os._exit(1)
except:
    pass

print("Yeah!")
`,
    },
    runs: [{ cmd: 'python main.py; echo $?', exit: 0, output: `1
` }],
  },
  {
    title: 'sys.exit(0) 的状态码',
    body: [
      '`sys.exit(0)` 正常退出，`echo $?` 拿到的状态码是 0。',
    ],
    file: 'main.py',
    lines: [[3, 3]],
    files: {
      'main.py': `import sys

sys.exit(0)
`,
    },
    runs: [{ cmd: 'python main.py; echo $?', exit: 0, output: `0
` }],
  },
  {
    title: 'sys.exit(1) 的状态码',
    body: [
      '把 `sys.exit` 里面换成 1，状态码就是 1。',
    ],
    file: 'main.py',
    lines: [[3, 3]],
    files: {
      'main.py': `import sys

sys.exit(1)
`,
    },
    runs: [{ cmd: 'python main.py; echo $?', exit: 0, output: `1
` }],
  },
];

export default { steps };
