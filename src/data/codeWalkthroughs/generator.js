// 示例输出用 CPython 3.10.21 实跑录入。

const nodeSteps = [
  {
    title: '用生成器实现 __iter__',
    body: [],
    file: 'main.py',
    files: {
      'main.py': `class Node:
    def __init__(self, name):
        self.name = name
        self.next = None

    def __iter__(self):
        node = self
        while node is not None:
            yield node
            node = node.next


node1 = Node("node1")
node2 = Node("node2")
node3 = Node("node3")
node1.next = node2
node2.next = node3

for node in node1:
    print(node.name)
`,
    },
    runs: [{
      cmd: 'python3.10 main.py',
      exit: 0,
      output: `node1
node2
node3
`,
    }],
  },
];

export const generatorNode = { steps: nodeSteps };

export const steps = [
  {
    title: '用 for 遍历生成器',
    body: [],
    file: 'main.py',
    files: {
      'main.py': `def gen(num):
    while num > 0:
        yield num
        num -= 1
    return

g = gen(5)
for i in g:
    print(i)
`,
    },
    runs: [{
      cmd: 'python3.10 main.py',
      exit: 0,
      output: `5
4
3
2
1
`,
    }],
  },
  {
    title: '先用 next 取出第一个值',
    body: [],
    file: 'main.py',
    files: {
      'main.py': `def gen(num):
    while num > 0:
        yield num
        num -= 1
    return

g = gen(5)
first = next(g)

for i in g:
    print(i)
`,
    },
    runs: [{
      cmd: 'python3.10 main.py',
      exit: 0,
      output: `4
3
2
1
`,
    }],
  },
  {
    title: 'return 一个值',
    body: [],
    file: 'main.py',
    files: {
      'main.py': `def gen(num):
    while num > 0:
        yield num
        num -= 1
    return 100

g = gen(5)
first = next(g)

for i in g:
    print(i)
`,
    },
    runs: [{
      cmd: 'python3.10 main.py',
      exit: 0,
      output: `4
3
2
1
`,
    }],
  },
  {
    title: '用 send 改写 num',
    body: [],
    file: 'main.py',
    files: {
      'main.py': `def gen(num):
    while num > 0:
        tmp = yield num
        if tmp is not None:
            num = tmp
        num -= 1

g = gen(5)
first = next(g) # first = g.send(None)
print(f"first: {first}")

print(f"send: {g.send(10)}")

for i in g:
    print(i)
`,
    },
    runs: [{
      cmd: 'python3.10 main.py',
      exit: 0,
      output: `first: 5
send: 9
8
7
6
5
4
3
2
1
`,
    }],
  },
  {
    title: 'yield 不赋值时的 send',
    body: [],
    file: 'main.py',
    files: {
      'main.py': `def gen(num):
    while num > 0:
        yield num
        num -= 1

g = gen(5)
first = next(g) # first = g.send(None)
print(f"first: {first}")

print(f"send: {g.send(10)}")

for i in g:
    print(i)
`,
    },
    runs: [{
      cmd: 'python3.10 main.py',
      exit: 0,
      output: `first: 5
send: 4
3
2
1
`,
    }],
  },
];

export default { steps };
