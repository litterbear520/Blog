// 少写 for 循环示例：每一步在 /home/claude-user/lessfor_example 下用 `uv run --no-project --python 3.10 main.py` 实跑录入（Python 3.10.21，Linux）。
// 用 3.10 录：讲解里 list comprehension 快将近一倍、built-in max 快一倍这些速度结论是 3.10 的行为。

export default { steps: [
  {
    title: '用 list comprehension 建立 list',
    body: [
      '`with_for` 先建一个空 list，再在 for 循环里逐个 `append`；第 10 行的 list comprehension 一行就做完同样的事。',
    ],
    file: 'main.py',
    lines: [[10, 10]],
    files: {
      'main.py': `from timeit import timeit

def with_for():
    lst = []
    for i in range(100):
        lst.append(i)
    return lst

def without_for():
    return [i for i in range(100)]

print(f"with:    {timeit(with_for, number=10000)}")
print(f"without: {timeit(without_for, number=10000)}")
`,
    },
    runs: [{ cmd: 'python main.py', exit: 0, output: `with:    0.18118777603376657
without: 0.06950784893706441
` }],
  },
  {
    title: '往 list 里放 2 * i',
    body: [
      '两边都改成放 `2 * i`，两段代码还是等价的：list comprehension 前面的 `2 * i` 是要放进 list 的元素，`for i in range(100)` 里的 `i` 是循环变量。',
    ],
    file: 'main.py',
    lines: [[6, 6], [10, 10]],
    files: {
      'main.py': `from timeit import timeit

def with_for():
    lst = []
    for i in range(100):
        lst.append(2 * i)
    return lst

def without_for():
    return [2 * i for i in range(100)]

print(f"with:    {timeit(with_for, number=10000)}")
print(f"without: {timeit(without_for, number=10000)}")
`,
    },
    runs: [{ cmd: 'python main.py', exit: 0, output: `with:    0.27866190497297794
without: 0.12156036705709994
` }],
  },
  {
    title: '去掉乘法',
    body: [
      '把乘法拿掉，再用 `timeit` 各跑一万次，list comprehension 快了将近一倍。',
    ],
    file: 'main.py',
    lines: [[10, 10]],
    files: {
      'main.py': `from timeit import timeit

def with_for():
    lst = []
    for i in range(100):
        lst.append(i)
    return lst

def without_for():
    return [i for i in range(100)]

print(f"with:    {timeit(with_for, number=10000)}")
print(f"without: {timeit(without_for, number=10000)}")
`,
    },
    runs: [{ cmd: 'python main.py', exit: 0, output: `with:    0.14538276207167655
without: 0.07435397000517696
` }],
  },
  {
    title: '把方括号换成圆括号',
    body: [
      '圆括号得到的是一个 generator，并没有真的建立 list，所以比 list comprehension 还要快一个数量级。',
    ],
    file: 'main.py',
    lines: [[10, 10]],
    files: {
      'main.py': `from timeit import timeit

def with_for():
    lst = []
    for i in range(100):
        lst.append(i)
    return lst

def without_for():
    return (i for i in range(100))

print(f"with:    {timeit(with_for, number=10000)}")
print(f"without: {timeit(without_for, number=10000)}")
`,
    },
    runs: [{ cmd: 'python main.py', exit: 0, output: `with:    0.13225205603521317
without: 0.01176562299951911
` }],
  },
  {
    title: '自己写 max 与 built-in 的 max',
    body: [
      '两种写法都是一个一个拿出来比大小，built-in 的 `max` 在 C 层面循环和判断，快了一倍。',
    ],
    file: 'main.py',
    lines: [[13, 13]],
    files: {
      'main.py': `from timeit import timeit

lst = [i for i in range(100)]

def with_for():
    max_num = 0
    for num in lst:
        if num > max_num:
            max_num = num
    return max_num

def without_for():
    return max(lst)

print(f"with:    {timeit(with_for, number=10000)}")
print(f"without: {timeit(without_for, number=10000)}")
`,
    },
    runs: [{ cmd: 'python main.py', exit: 0, output: `with:    0.07207407196983695
without: 0.031190164969302714
` }],
  },
  {
    title: '用 any 找大于 50 的数',
    body: [
      '`any` 里面传的是一个 generator，它还是运行在 Python 层面，再加上建立和调用 generator 的代价，反而比直接写 for 循环慢一些。',
    ],
    file: 'main.py',
    lines: [[12, 12]],
    files: {
      'main.py': `from timeit import timeit

lst = [i for i in range(100)]

def with_for():
    for num in lst:
        if num > 50:
            return True
    return False

def without_for():
    return any(num > 50 for num in lst)

print(f"with:    {timeit(with_for, number=10000)}")
print(f"without: {timeit(without_for, number=10000)}")
`,
    },
    runs: [{ cmd: 'python main.py', exit: 0, output: `with:    0.033663389971479774
without: 0.05839480098802596
` }],
  },
  {
    title: '直接在 list 里找 True',
    body: [
      '没有 generator，`any` 直接在 list 里找 `True`，这时它比 Python 的写法要快。',
    ],
    file: 'main.py',
    lines: [[3, 3], [12, 12]],
    files: {
      'main.py': `from timeit import timeit

lst = [False] * 100

def with_for():
    for b in lst:
        if b:
            return True
    return False

def without_for():
    return any(lst)

print(f"with:    {timeit(with_for, number=10000)}")
print(f"without: {timeit(without_for, number=10000)}")
`,
    },
    runs: [{ cmd: 'python main.py', exit: 0, output: `with:    0.030014808988198638
without: 0.01334321906324476
` }],
  },
  {
    title: '用 all 判断全部满足',
    body: [
      '`all` 对应的 Python 写法和 `any` 非常相似，只是找到一个不满足的就返回 `False`。',
    ],
    file: 'main.py',
    lines: [[12, 12]],
    files: {
      'main.py': `from timeit import timeit

lst = [i for i in range(100)]

def with_for():
    for num in lst:
        if num > 100:
            return False
    return True

def without_for():
    return all(num <= 100 for num in lst)

print(f"with:    {timeit(with_for, number=10000)}")
print(f"without: {timeit(without_for, number=10000)}")
`,
    },
    runs: [{ cmd: 'python main.py', exit: 0, output: `with:    0.08496602508239448
without: 0.12303665594663471
` }],
  },
  {
    title: '给 any 传 list comprehension',
    body: [
      '传进 `any` 的是 list comprehension，要先把整个 list 过一遍再交给 `any`，比传 generator 明显更慢。',
    ],
    file: 'main.py',
    lines: [[12, 12]],
    files: {
      'main.py': `from timeit import timeit

lst = [i for i in range(100)]

def with_for():
    for num in lst:
        if num > 50:
            return True
    return False

def without_for():
    return any([num > 50 for num in lst])

print(f"with:    {timeit(with_for, number=10000)}")
print(f"without: {timeit(without_for, number=10000)}")
`,
    },
    runs: [{ cmd: 'python main.py', exit: 0, output: `with:    0.029346888069994748
without: 0.08317410794552416
` }],
  },
  {
    title: '带条件的 list comprehension',
    body: [
      '在 list comprehension 后面加一个 `if`，只有 `good(num)` 成立时才把 `num` 放进 list。',
    ],
    file: 'main.py',
    lines: [[16, 16]],
    files: {
      'main.py': `from timeit import timeit

lst = [i for i in range(100)]

def good(num):
    return num >= 60

def with_for():
    ret = []
    for num in lst:
        if good(num):
            ret.append(num)
    return ret

def without_for():
    return [num for num in lst if good(num)]

print(f"with:    {timeit(with_for, number=10000)}")
print(f"without: {timeit(without_for, number=10000)}")
`,
    },
    runs: [{ cmd: 'python main.py', exit: 0, output: `with:    0.221246542991139
without: 0.18048328801523894
` }],
  },
  {
    title: '用 filter 筛选',
    body: [
      '`filter` 的第一个 argument 是判断函数，第二个是 iterable，它返回的不是 list。',
    ],
    file: 'main.py',
    lines: [[16, 16]],
    files: {
      'main.py': `from timeit import timeit

lst = [i for i in range(100)]

def good(num):
    return num >= 60

def with_for():
    ret = []
    for num in lst:
        if good(num):
            ret.append(num)
    return ret

def without_for():
    return filter(good, lst)

print(f"with:    {timeit(with_for, number=10000)}")
print(f"without: {timeit(without_for, number=10000)}")
`,
    },
    runs: [{ cmd: 'python main.py', exit: 0, output: `with:    0.24698416597675532
without: 0.011553463991731405
` }],
  },
  {
    title: '用 map 映射',
    body: [
      '`map` 把 `change` 作用在 `lst` 的每一个值上，同样返回的不是 list。',
    ],
    file: 'main.py',
    lines: [[15, 15]],
    files: {
      'main.py': `from timeit import timeit

lst = [i for i in range(100)]

def change(num):
    return num * 2

def with_for():
    ret = []
    for num in lst:
        ret.append(change(num))
    return ret

def without_for():
    return map(change, lst)

print(f"with:    {timeit(with_for, number=10000)}")
print(f"without: {timeit(without_for, number=10000)}")
`,
    },
    runs: [{ cmd: 'python main.py', exit: 0, output: `with:    0.3439125649165362
without: 0.006233505089767277
` }],
  },
  {
    title: '等价的 generator',
    body: [
      '注释掉的这一行就是和 `map` 等价的 generator 写法。',
    ],
    file: 'main.py',
    lines: [[15, 15]],
    files: {
      'main.py': `from timeit import timeit

lst = [i for i in range(100)]

def change(num):
    return num * 2

def with_for():
    ret = []
    for num in lst:
        ret.append(change(num))
    return ret

def without_for():
    # return(change(num) for num in lst)
    return map(change, lst)

print(f"with:    {timeit(with_for, number=10000)}")
print(f"without: {timeit(without_for, number=10000)}")
`,
    },
    runs: [{ cmd: 'python main.py', exit: 0, output: `with:    0.2475171050755307
without: 0.0026136089581996202
` }],
  },
  {
    title: 'map 接受多个 iterable',
    body: [
      '`change` 需要两个 input 时，`map` 从 `lst` 和 `lst2` 里各取一个值传进去；注释里的 generator 写法就显得冗长了。',
    ],
    file: 'main.py',
    lines: [[16, 18]],
    files: {
      'main.py': `from timeit import timeit

lst = [i for i in range(100)]
lst2 = [i for i in range(100)]

def change(num, num2):
    return num + num2

def with_for():
    ret = []
    for idx in range(len(lst)):
        ret.append(change(lst[idx], lst2[idx]))
    return ret

def without_for():
    # return (change(lst[i], lst2[i])
    #         for i in range(len(lst)))
    return map(change, lst, lst2)

print(f"with:    {timeit(with_for, number=10000)}")
print(f"without: {timeit(without_for, number=10000)}")
`,
    },
    runs: [{ cmd: 'python main.py', exit: 0, output: `with:    0.3044405709952116
without: 0.0034239100059494376
` }],
  },
  {
    title: '用 zip 合并两个 list',
    body: [
      '`zip` 把两个 list 里 index 相同的值组成 tuple，同样返回的不是 list。',
    ],
    file: 'main.py',
    lines: [[13, 13]],
    files: {
      'main.py': `from timeit import timeit

lst = [i for i in range(100)]
lst2 = [i for i in range(100)]

def with_for():
    ret = []
    for i in range(len(lst)):
        ret.append((lst[i], lst2[i]))
    return ret

def without_for():
    return zip(lst, lst2)

print(f"with:    {timeit(with_for, number=10000)}")
print(f"without: {timeit(without_for, number=10000)}")
`,
    },
    runs: [{ cmd: 'python main.py', exit: 0, output: `with:    0.21944441099185497
without: 0.0037513560382649302
` }],
  },
  {
    title: '用 zip 同时拿到一个人的数据',
    body: [
      '`zip` 每次产生一个 tuple，直接 unpack 到 `name`、`age` 和 `score` 里，和按 index 取值的写法功能等价。',
    ],
    file: 'main.py',
    lines: [[15, 15]],
    files: {
      'main.py': `from timeit import timeit

names = ["Alice", "Bob", "Charlie"]
ages = [18, 16, 19]
scores = [3, 4, 5]

def with_for():
    for i in range(len(names)):
        name = names[i]
        age = ages[i]
        score = scores[i]
        print(name, age, score)

def without_for():
    for name, age, score in zip(names, ages, scores):
        print(name, age, score)

print(f"with:    {timeit(with_for, number=1)}")
print(f"without: {timeit(without_for, number=1)}")
`,
    },
    runs: [{ cmd: 'python main.py', exit: 0, output: `Alice 18 3
Bob 16 4
Charlie 19 5
with:    3.3535994589328766e-05
Alice 18 3
Bob 16 4
Charlie 19 5
without: 1.0241055861115456e-05
` }],
  },
] };
