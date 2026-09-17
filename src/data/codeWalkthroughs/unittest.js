// unittest 示例项目的演进快照：每一步只写本步改动的文件（内容为 null 表示删除），其余文件从上一步继承。
// runs 里的输出是在项目根目录用伪终端实跑 `python -m unittest` 录下来的（Python 3.12，Linux）。

export const steps = [
  {
    title: "搭好项目骨架",
    body: [
      "核心代码放进 `vector/` 包，测试放进 `tests/` 包，两个文件夹都有 `__init__.py`，根目录只留一个入口文件。",
      "在根目录运行 `python -m unittest`，unittest 会自动找到 `tests/test_vector.py` 里的 `test_init` 并运行。点左侧文件树可以看每个文件。",
    ],
    file: "tests/test_vector.py",
    files: {
      "examply.py": ``,
      ".gitignore": `# Python-generated files
__pycache__/
*.py[oc]
build/
dist/
wheels/
*.egg-info

# Virtual environments
.venv
`,
      "pyproject.toml": `[project]
name = "unittest-example"
version = "0.1.0"
description = "Add your description here"
readme = "README.md"
requires-python = ">=3.12"
dependencies = []
`,
      "vector/__init__.py": `from .vector import Vector`,
      "vector/vector.py": `class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def add(self, other):
        return Vector(self.x + other.x,
                      self.y + other.y)

    def mul(self, factor):
        return Vector(self.x * factor,
                      self.y * factor)

    def dot(self, other):
        return self.x * other.x + \\
               self.y * other.y

    def norm(self):
        return (self.x * self.x +
                self.y * self.y) ** 0.5
`,
      "tests/__init__.py": ``,
      "tests/test_vector.py": `import unittest
from vector import Vector


class TestVector(unittest.TestCase):
    def test_init(self):
        v = Vector(1, 2)
        self.assertEqual(v.x, 1)
        self.assertEqual(v.y, 2)
`,
    },
    runs: [
      {
        cmd: "python -m unittest",
        exit: 0,
        output: `.
----------------------------------------------------------------------
Ran 1 test in 0.000s

OK
`,
      },
    ],
  },
  {
    title: "把 assertEqual 的期望值改成 0",
    body: [
      "`v.x` 其实是 1，这一行必然失败。`assertEqual` 失败时把两边的值都告诉你：`1 != 0`。",
    ],
    files: {
      "tests/test_vector.py": `import unittest
from vector import Vector


class TestVector(unittest.TestCase):
    def test_init(self):
        v = Vector(1, 2)
        self.assertEqual(v.x, 0)
        self.assertEqual(v.y, 2)
`,
    },
    runs: [
      {
        cmd: "python -m unittest",
        exit: 1,
        output: `F
======================================================================
FAIL: test_init (tests.test_vector.TestVector.test_init)
----------------------------------------------------------------------
Traceback (most recent call last):
  File "/home/user/unittest_example/tests/test_vector.py", line 8, in test_init
    self.assertEqual(v.x, 0)
AssertionError: 1 != 0

----------------------------------------------------------------------
Ran 1 test in 0.001s

FAILED (failures=1)
`,
      },
    ],
  },
  {
    title: "换成 assertTrue 再试一次",
    body: [
      "同一个判断换成 `assertTrue(v.x == 0)`，失败信息只剩 `False is not true`，看不出 `v.x` 到底是几。",
    ],
    files: {
      "tests/test_vector.py": `import unittest
from vector import Vector


class TestVector(unittest.TestCase):
    def test_init(self):
        v = Vector(1, 2)
        self.assertTrue(v.x == 0)
        self.assertEqual(v.y, 2)
`,
    },
    runs: [
      {
        cmd: "python -m unittest",
        exit: 1,
        output: `F
======================================================================
FAIL: test_init (tests.test_vector.TestVector.test_init)
----------------------------------------------------------------------
Traceback (most recent call last):
  File "/home/user/unittest_example/tests/test_vector.py", line 8, in test_init
    self.assertTrue(v.x == 0)
AssertionError: False is not true

----------------------------------------------------------------------
Ran 1 test in 0.001s

FAILED (failures=1)
`,
      },
    ],
  },
  {
    title: "用 assertRaises 测异常",
    body: [
      "`__init__` 加上类型检查，不是数就抛 `ValueError`。测试里把会抛异常的调用放进 `with self.assertRaises(ValueError)` 块，期望值也改回 1。",
    ],
    file: "vector/vector.py",
    files: {
      "vector/vector.py": `class Vector:
    def __init__(self, x, y):
        if isinstance(x, (int, float)) and isinstance(y, (int, float)):
            self.x = x
            self.y = y
        else:
            raise ValueError("not a number")

    def add(self, other):
        return Vector(self.x + other.x,
                      self.y + other.y)

    def mul(self, factor):
        return Vector(self.x * factor,
                      self.y * factor)

    def dot(self, other):
        return self.x * other.x + \\
               self.y * other.y

    def norm(self):
        return (self.x * self.x +
                self.y * self.y) ** 0.5
`,
      "tests/test_vector.py": `import unittest
from vector import Vector


class TestVector(unittest.TestCase):
    def test_init(self):
        v = Vector(1, 2)
        self.assertEqual(v.x, 1)
        self.assertEqual(v.y, 2)

        with self.assertRaises(ValueError):
            v = Vector("1", "2")
`,
    },
    runs: [
      {
        cmd: "python -m unittest",
        exit: 0,
        output: `.
----------------------------------------------------------------------
Ran 1 test in 0.000s

OK
`,
      },
    ],
  },
  {
    title: "传合法值会怎样",
    body: [
      "把 with 块里的调用换成 `Vector(1.5, 2)`，两个都是数，异常不会抛出，测试失败：`ValueError not raised`。",
    ],
    files: {
      "tests/test_vector.py": `import unittest
from vector import Vector


class TestVector(unittest.TestCase):
    def test_init(self):
        v = Vector(1, 2)
        self.assertEqual(v.x, 1)
        self.assertEqual(v.y, 2)

        with self.assertRaises(ValueError):
            v = Vector(1.5, 2)
`,
    },
    runs: [
      {
        cmd: "python -m unittest",
        exit: 1,
        output: `F
======================================================================
FAIL: test_init (tests.test_vector.TestVector.test_init)
----------------------------------------------------------------------
Traceback (most recent call last):
  File "/home/user/unittest_example/tests/test_vector.py", line 11, in test_init
    with self.assertRaises(ValueError):
AssertionError: ValueError not raised

----------------------------------------------------------------------
Ran 1 test in 0.001s

FAILED (failures=1)
`,
      },
    ],
  },
  {
    title: "setUp 与 tearDown",
    body: [
      "把上一步的调用改回去，再加上 `setUp` 和 `tearDown`。它们在每个测试方法运行前后各调用一次，输出里出现一对 start / end。",
    ],
    files: {
      "tests/test_vector.py": `import unittest
from vector import Vector


class TestVector(unittest.TestCase):
    def setUp(self):
        print("start")

    def tearDown(self):
        print("end")

    def test_init(self):
        v = Vector(1, 2)
        self.assertEqual(v.x, 1)
        self.assertEqual(v.y, 2)

        with self.assertRaises(ValueError):
            v = Vector("1", "2")
`,
    },
    runs: [
      {
        cmd: "python -m unittest",
        exit: 0,
        output: `start
end
.
----------------------------------------------------------------------
Ran 1 test in 0.001s

OK
`,
      },
    ],
  },
  {
    title: "再加一个测试方法",
    body: [
      "多了 `test_add` 之后，start / end 各打印两次。第二个 start 紧跟在上一个测试的点号后面，是因为 unittest 把点号写到 stderr 且不换行。",
    ],
    files: {
      "tests/test_vector.py": `import unittest
from vector import Vector


class TestVector(unittest.TestCase):
    def setUp(self):
        print("start")

    def tearDown(self):
        print("end")

    def test_init(self):
        v = Vector(1, 2)
        self.assertEqual(v.x, 1)
        self.assertEqual(v.y, 2)

        with self.assertRaises(ValueError):
            v = Vector("1", "2")

    def test_add(self):
        v1 = Vector(1, 2)
        v2 = Vector(2, 3)
        v3 = v1.add(v2)
        self.assertEqual(v3.x, 3)
`,
    },
    runs: [
      {
        cmd: "python -m unittest",
        exit: 0,
        output: `start
end
.start
end
.
----------------------------------------------------------------------
Ran 2 tests in 0.000s

OK
`,
      },
    ],
  },
  {
    title: "setUpClass 与 tearDownClass",
    body: [
      "把 `setUp` / `tearDown` 换成 `setUpClass` / `tearDownClass`，打印的还是 start / end。它们在整个测试类运行前后只调用一次，所以两个测试只有一对 start / end。必须用 `@classmethod` 装饰，参数是 `cls`。",
    ],
    files: {
      "tests/test_vector.py": `import unittest
from vector import Vector


class TestVector(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        print("start")

    @classmethod
    def tearDownClass(cls):
        print("end")

    def test_init(self):
        v = Vector(1, 2)
        self.assertEqual(v.x, 1)
        self.assertEqual(v.y, 2)

        with self.assertRaises(ValueError):
            v = Vector("1", "2")

    def test_add(self):
        v1 = Vector(1, 2)
        v2 = Vector(2, 3)
        v3 = v1.add(v2)
        self.assertEqual(v3.x, 3)
`,
    },
    runs: [
      {
        cmd: "python -m unittest",
        exit: 0,
        output: `start
..end

----------------------------------------------------------------------
Ran 2 tests in 0.001s

OK
`,
      },
    ],
  },
  {
    title: "用 skipIf 跳过测试",
    body: [
      "先把 `setUp` / `tearDown` 换回来，再给 `test_add` 加两个 `skipIf`。第一个参数为真时跳过，第二个参数是跳过原因。这两个条件在 Linux 加 Python 3.12 上都不成立，所以两个测试照常运行；换到 Windows 上 `test_add` 会显示成 s（skipped）。",
    ],
    files: {
      "tests/test_vector.py": `import sys
import unittest
from vector import Vector


class TestVector(unittest.TestCase):
    def setUp(self):
        print("start")

    def tearDown(self):
        print("end")

    def test_init(self):
        v = Vector(1, 2)
        self.assertEqual(v.x, 1)
        self.assertEqual(v.y, 2)

        with self.assertRaises(ValueError):
            v = Vector("1", "2")

    @unittest.skipIf(sys.platform == "win32", "Do not support Windows")
    @unittest.skipIf(sys.version_info < (3, 7), "Only support 3.7+")
    def test_add(self):
        v1 = Vector(1, 2)
        v2 = Vector(2, 3)
        v3 = v1.add(v2)
        self.assertEqual(v3.x, 3)
`,
    },
    runs: [
      {
        cmd: "python -m unittest",
        exit: 0,
        output: `start
end
.start
end
.
----------------------------------------------------------------------
Ran 2 tests in 0.000s

OK
`,
      },
    ],
  },
  {
    title: "只运行指定的测试",
    body: [
      "文件不变。用点号路径逐级缩小范围：模块 `tests.test_vector` → 类 `TestVector` → 方法 `test_add`。两条命令各跑一次，看 Ran 后面的数量。",
    ],
    file: "tests/test_vector.py",
    files: {
    },
    runs: [
      {
        cmd: "python -m unittest tests.test_vector.TestVector.test_add",
        exit: 0,
        output: `start
end
.
----------------------------------------------------------------------
Ran 1 test in 0.000s

OK
`,
      },
      {
        cmd: "python -m unittest tests.test_vector",
        exit: 0,
        output: `start
end
.start
end
.
----------------------------------------------------------------------
Ran 2 tests in 0.000s

OK
`,
      },
    ],
  },
];

export default { steps };
