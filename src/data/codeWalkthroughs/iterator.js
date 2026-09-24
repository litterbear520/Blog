// 示例输出在 /private/tmp/blog-iterator-recording 下用 CPython 3.10.19 实跑录入。

const loopSteps = [
  {
    title: '遍历列表',
    body: [],
    file: 'main.py',
    files: {
      'main.py': `lst = [1, 3, 5]
for i in lst:
    print(i)
`,
    },
    runs: [{
      cmd: 'python3.10 main.py',
      exit: 0,
      output: `1
3
5
`,
    }],
  },
  {
    title: '显式获取列表的 iterator',
    body: [],
    file: 'main.py',
    files: {
      'main.py': `lst = [1, 3, 5]
it = iter(lst)
for i in it:
    print(i)
`,
    },
    runs: [{
      cmd: 'python3.10 main.py',
      exit: 0,
      output: `1
3
5
`,
    }],
  },
];

export const iteratorLoop = { steps: loopSteps };

export const steps = [
  {
    title: '遍历链表',
    body: [],
    file: 'main.py',
    files: {
      'main.py': `class NodeIter:
    def __init__(self, node):
        self.curr_node = node

    def __next__(self):
        if self.curr_node is None:
            raise StopIteration
        node, self.curr_node = self.curr_node, self.curr_node.next
        return node


class Node:
    def __init__(self, name):
        self.name = name
        self.next = None

    def __iter__(self):
        return NodeIter(self)


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
  {
    title: '显式获取链表的 iterator',
    body: [],
    file: 'main.py',
    files: {
      'main.py': `class NodeIter:
    def __init__(self, node):
        self.curr_node = node

    def __next__(self):
        if self.curr_node is None:
            raise StopIteration
        node, self.curr_node = self.curr_node, self.curr_node.next
        return node


class Node:
    def __init__(self, name):
        self.name = name
        self.next = None

    def __iter__(self):
        return NodeIter(self)


node1 = Node("node1")
node2 = Node("node2")
node3 = Node("node3")
node1.next = node2
node2.next = node3

for node in iter(node1):
    print(node.name)
`,
    },
    runs: [{
      cmd: 'python3.10 main.py',
      exit: 1,
      output: `Traceback (most recent call last):
  File "/private/tmp/blog-iterator-recording/main.py", line 27, in <module>
    for node in iter(node1):
TypeError: 'NodeIter' object is not iterable
`,
    }],
  },
  {
    title: '跳过第一个节点',
    body: [],
    file: 'main.py',
    files: {
      'main.py': `class NodeIter:
    def __init__(self, node):
        self.curr_node = node

    def __next__(self):
        if self.curr_node is None:
            raise StopIteration
        node, self.curr_node = self.curr_node, self.curr_node.next
        return node


class Node:
    def __init__(self, name):
        self.name = name
        self.next = None

    def __iter__(self):
        return NodeIter(self)


node1 = Node("node1")
node2 = Node("node2")
node3 = Node("node3")
node1.next = node2
node2.next = node3

it = iter(node1)
first = next(it)

for node in it:
    print(node.name)
`,
    },
    runs: [{
      cmd: 'python3.10 main.py',
      exit: 1,
      output: `Traceback (most recent call last):
  File "/private/tmp/blog-iterator-recording/main.py", line 30, in <module>
    for node in it:
TypeError: 'NodeIter' object is not iterable
`,
    }],
  },
  {
    title: '为 NodeIter 补上 __iter__',
    body: [],
    file: 'main.py',
    files: {
      'main.py': `class NodeIter:
    def __init__(self, node):
        self.curr_node = node

    def __next__(self):
        if self.curr_node is None:
            raise StopIteration
        node, self.curr_node = self.curr_node, self.curr_node.next
        return node

    def __iter__(self):
        return self


class Node:
    def __init__(self, name):
        self.name = name
        self.next = None

    def __iter__(self):
        return NodeIter(self)


node1 = Node("node1")
node2 = Node("node2")
node3 = Node("node3")
node1.next = node2
node2.next = node3

it = iter(node1)
first = next(it)

for node in it:
    print(node.name)
`,
    },
    runs: [{
      cmd: 'python3.10 main.py',
      exit: 0,
      output: `node2
node3
`,
    }],
  },
];

export default { steps };
