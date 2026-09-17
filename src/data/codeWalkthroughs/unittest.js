// unittest 示例项目的演进快照：每一步只写本步改动的文件（内容为 null 表示删除），其余文件从上一步继承。
// runs 里的输出是在项目根目录用伪终端实跑 `python -m unittest` 录下来的（Python 3.12，Linux）。

export const steps = [
  {
    title: "搭好项目骨架",
    body: [
      "核心代码放进 `vector/` 包，测试放进 `tests/` 包，两个文件夹都有 `__init__.py`，根目录只留一个入口 `main.py`。",
      "在根目录运行 `python -m unittest`，unittest 会自动找到 `tests/test_vector.py` 里的 `test_init` 并运行。点左侧文件树可以看每个文件。",
    ],
    file: "tests/test_vector.py",
    files: {
      "main.py": `from vector import Vector

v = Vector(1, 2)
w = Vector(3, 4)
print(v + w)
`,
      "vector/__init__.py": `from .vector import Vector
`,
      "vector/vector.py": `import math


class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __add__(self, other):
        return Vector(self.x + other.x, self.y + other.y)

    def __mul__(self, k):
        return Vector(self.x * k, self.y * k)

    def dot(self, other):
        return self.x * other.x + self.y * other.y

    def __abs__(self):
        return math.hypot(self.x, self.y)

    def __repr__(self):
        return f"Vector({self.x}, {self.y})"
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
Ran 1 test in 0.002s

OK
`,
      },
    ],
  },
  {
    title: "故意写错，看两种失败信息",
    body: [
      "临时加两个必然失败的方法：`assertEqual(v.x, 0)` 失败时告诉你 `1 != 0`，`assertTrue(v.x == 0)` 只说 `False is not true`。",
    ],
    files: {
      "tests/test_vector.py": `import unittest

from vector import Vector


class TestVector(unittest.TestCase):
    def test_init(self):
        v = Vector(1, 2)
        self.assertEqual(v.x, 1)
        self.assertEqual(v.y, 2)

    def test_equal(self):
        v = Vector(1, 2)
        self.assertEqual(v.x, 0)

    def test_true(self):
        v = Vector(1, 2)
        self.assertTrue(v.x == 0)
`,
    },
    runs: [
      {
        cmd: "python -m unittest",
        exit: 1,
        output: `F.F
======================================================================
FAIL: test_equal (tests.test_vector.TestVector.test_equal)
----------------------------------------------------------------------
Traceback (most recent call last):
  File "/home/user/unittest_example/tests/test_vector.py", line 14, in test_equal
    self.assertEqual(v.x, 0)
AssertionError: 1 != 0

======================================================================
FAIL: test_true (tests.test_vector.TestVector.test_true)
----------------------------------------------------------------------
Traceback (most recent call last):
  File "/home/user/unittest_example/tests/test_vector.py", line 18, in test_true
    self.assertTrue(v.x == 0)
AssertionError: False is not true

----------------------------------------------------------------------
Ran 3 tests in 0.002s

FAILED (failures=2)
`,
      },
    ],
  },
  {
    title: "用 assertRaises 测异常",
    body: [
      "`__init__` 加上类型检查，不是数就抛 `ValueError`。测试里把会抛异常的调用放进 `with self.assertRaises(ValueError)` 块。上一步故意写错的两个方法顺手删掉。",
    ],
    file: "vector/vector.py",
    files: {
      "vector/vector.py": `import math


class Vector:
    def __init__(self, x, y):
        if not isinstance(x, (int, float)) or not isinstance(y, (int, float)):
            raise ValueError("x and y must be numbers")
        self.x = x
        self.y = y

    def __add__(self, other):
        return Vector(self.x + other.x, self.y + other.y)

    def __mul__(self, k):
        return Vector(self.x * k, self.y * k)

    def dot(self, other):
        return self.x * other.x + self.y * other.y

    def __abs__(self):
        return math.hypot(self.x, self.y)

    def __repr__(self):
        return f"Vector({self.x}, {self.y})"
`,
      "tests/test_vector.py": `import unittest

from vector import Vector


class TestVector(unittest.TestCase):
    def test_init(self):
        v = Vector(1, 2)
        self.assertEqual(v.x, 1)
        self.assertEqual(v.y, 2)
        with self.assertRaises(ValueError):
            Vector("a", "b")
`,
    },
    runs: [
      {
        cmd: "python -m unittest",
        exit: 0,
        output: `.
----------------------------------------------------------------------
Ran 1 test in 0.001s

OK
`,
      },
    ],
  },
  {
    title: "setUp 与 tearDown",
    body: [
      "这两个方法在每个测试方法运行前后各调用一次，所以输出里出现一对 start / end。",
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
            Vector("a", "b")
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
      "多了 `test_add` 之后，start / end 各打印两次。注意第二个 start 紧跟在上一个测试的点号后面，这是 unittest 把点号写到 stderr 且不换行的缘故。",
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
            Vector("a", "b")

    def test_add(self):
        v = Vector(1, 2) + Vector(3, 4)
        self.assertEqual(v.x, 4)
        self.assertEqual(v.y, 6)
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
Ran 2 tests in 0.001s

OK
`,
      },
    ],
  },
  {
    title: "setUpClass 与 tearDownClass",
    body: [
      "整个测试类运行前后只调用一次，必须用 `@classmethod` 装饰，参数是 `cls`。",
    ],
    files: {
      "tests/test_vector.py": `import unittest

from vector import Vector


class TestVector(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        print("class start")

    @classmethod
    def tearDownClass(cls):
        print("class end")

    def setUp(self):
        print("start")

    def tearDown(self):
        print("end")

    def test_init(self):
        v = Vector(1, 2)
        self.assertEqual(v.x, 1)
        self.assertEqual(v.y, 2)
        with self.assertRaises(ValueError):
            Vector("a", "b")

    def test_add(self):
        v = Vector(1, 2) + Vector(3, 4)
        self.assertEqual(v.x, 4)
        self.assertEqual(v.y, 6)
`,
    },
    runs: [
      {
        cmd: "python -m unittest",
        exit: 0,
        output: `class start
start
end
.start
end
.class end

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
      "第一个参数为真时跳过，第二个参数是跳过原因。这里两个条件在 Linux 加 Python 3.12 上都不成立，所以两个测试照常运行；换到 Windows 上 `test_add` 会显示成 s（skipped）。",
    ],
    files: {
      "tests/test_vector.py": `import sys
import unittest

from vector import Vector


class TestVector(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        print("class start")

    @classmethod
    def tearDownClass(cls):
        print("class end")

    def setUp(self):
        print("start")

    def tearDown(self):
        print("end")

    @unittest.skipIf(sys.version_info < (3, 7), "requires Python 3.7+")
    def test_init(self):
        v = Vector(1, 2)
        self.assertEqual(v.x, 1)
        self.assertEqual(v.y, 2)
        with self.assertRaises(ValueError):
            Vector("a", "b")

    @unittest.skipIf(sys.platform == "win32", "not supported on Windows")
    def test_add(self):
        v = Vector(1, 2) + Vector(3, 4)
        self.assertEqual(v.x, 4)
        self.assertEqual(v.y, 6)
`,
    },
    runs: [
      {
        cmd: "python -m unittest",
        exit: 0,
        output: `class start
start
end
.start
end
.class end

----------------------------------------------------------------------
Ran 2 tests in 0.001s

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
        output: `class start
start
end
.class end

----------------------------------------------------------------------
Ran 1 test in 0.001s

OK
`,
      },
      {
        cmd: "python -m unittest tests.test_vector",
        exit: 0,
        output: `class start
start
end
.start
end
.class end

----------------------------------------------------------------------
Ran 2 tests in 0.002s

OK
`,
      },
    ],
  },
];

export default { steps };
