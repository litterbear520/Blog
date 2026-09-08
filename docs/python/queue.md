# queue

## 概念

queue 是一个非常简单的线性有序数据结构，在大多数情况下，当我们聊到 queue 的时候，指的是 FIFO ，也就是 first in first out。最先放进去的数据被最先拿出来，先进先出。

当然有时候也会用到它广义的意思，一个可以逐个往里放数据，然后按照一定的顺序输出的数据结构。比如说 priority queue。

在 Python 中，通常用内置的 heapq 堆队列模块实现。它默认是最小堆：数值越小，越先取出。

## put 和 get

一个基础的 queue 只需要支持两个功能，放和拿。

```python run
import queue

q = queue.Queue()

for i in range(10):
    q.put(i)

while not q.empty():
    data = q.get()
    print(data, end=' ')

print()
```

```output exit=0
0 1 2 3 4 5 6 7 8 9 
```

最终会打印0到9，数据会按照进入 queue 的顺序被拿出来。

queue 最常见的用法就是用来有序的安排任务，我们可以想象一个在生活中的队列，比如说火车站或者迪士尼卖票的地方。

如果没有队列的存在，来一个人就直接冲到售票窗口去买票，可能会造成很多问题，第一个售票窗口可能拥堵，有一堆人吵着要买票，导致售票本身的效率下降，第二个身材弱小的人可能一辈子都买不到票，因为是谁嗓门最大谁最强壮，谁先买票。

于是我们发明了队列，大家按照来的先后顺序排成一队，一个一个的去售票窗口买票，如果发现队列太长了就多开几个售票窗口，如果队列没有人了，就少开几个，同时避免了有人可能来得很早但是始终买不着票的事情发生。

## 有序性：BFS

queue 的有序性经常是保证我们算法正确的基础。举个常见的例子 BFS，广度优先搜索。

```python run
class Node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None

def bfs(root):
    q = queue.Queue()
    q.put(root)
    while not q.empty():
        node = q.get()
        print(node.data)
        if node.left:
            q.put(node.left)
        if node.right:
            q.put(node.right)

root = Node(1)
root.left = Node(2)
root.right = Node(3)
root.left.left = Node(4)
root.right.right = Node(5)
bfs(root)
```

```output exit=0
1
2
3
4
5
```

我们定义了一个简单的二叉树，每个节点的数据只有一个 data，根节点有一个左孩子，一个右孩子，左孩子有一个左孩子，右孩子有一个右孩子。

这时候我们想做宽度优先搜索，最常见的方式就是实现一个 queue，它代表应该开始搜哪个节点了。对于每一个节点，我们都是先搜自己，再搜左节点，再搜右节点，这样就保证了宽度优先搜索。

如果我们这里没有用 queue 来保证任务的有序性，很有可能就会变成一个深度优先搜索，根节点说我完事了，左孩子你先来，结果左孩子说，我还有孩子呢，我孩子也得来，这就变成了深度优先搜索。

先进先出的 queue 是实现这个算法很重要的一个环节，运行这个遍历结果是宽度优先，12345。

有人可能会说，这里我不一定要queue，为什么不能用 list 呢？

逻辑上来说也可以，因为 list 是支持拿出任意一个数据的，用 list 重写一下，可以得到一模一样的结果。

```python run
class Node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None

def bfs(root):
    lst = []
    lst.append(root)
    while lst:
        node = lst.pop(0)
        print(node.data)
        if node.left:
            lst.append(node.left)
        if node.right:
            lst.append(node.right)

root = Node(1)
root.left = Node(2)
root.right = Node(3)
root.left.left = Node(4)
root.right.right = Node(5)
bfs(root)
```

```output exit=0
1
2
3
4
5
```

## 为什么不用 list

然而，相比 queue 来说，list 有两个比较严重的问题：

### 性能

第一个问题比较直观，就是这个 lst.pop(0) 它并不是 o(1) 的，对于 queue 来说，put 和 get 操作都是常数时间的，这里说的是一般实现，你当然也可以实现出来一个 queue 它不是常数时间的，因为 queue 本身是一个抽象的数据结构，它可以由很多其他的数据结构来实现，但是 python 或者其他绝大多数语言中的内置库 queue，写入和读出操作都是 o(1) 的。

而 lst.pop(0) 这个操作是 o(N) 的，由于 list 的特殊性，它需要把第一个拿走，把后面所有的东西往前移，这是第一点<mark>性能的问题</mark>。

### 阻塞与线程安全

第二点一般和多线程有关，它主要涉及到阻塞和线程安全的概念。

首先简单说一下所谓的生产者消费者模型。实际生活中，消费者和生产者的比例可能是各种各样的，也许是1:100，或者是100:1，这时队列就起到了它的效果。

作为任务的生产方，你根本不需要在意我需要把任务交给谁去解决，只需要把任务放到 queue 即可，同样的对任务的消费者，也不需要想应该去解决谁的任务，只需要从 queue 里面拿就可以了。

```python run id=producer-consumer
import threading
import queue

def consumer(q):
    while True:
        item = q.get()
        print('Consume:', item)

def producer(q):
    for i in range(10):
        q.put(i)

q = queue.Queue()

t1 = threading.Thread(target=consumer, args=(q,))
t2 = threading.Thread(target=consumer, args=(q,))

t1.start()
t2.start()

producer(q)
```

```output hang
Consume: 0
Consume: 1
Consume: 2
Consume: 3
Consume: 4
Consume: 5
Consume: 6
Consume: 7
Consume: 8
Consume: 9
```

作为生产者，只需要把0-9扔到 queue 中，作为消费者，拿到一个数就把它打印出来。这里做了一个生产者和两个消费者，这里的结果就是0-9都会被打出来，但是并不是按顺序打出来的，因为我们只能保证这个任务被开始执行的顺序，并不能保证任务被完成的顺序。

大家可以想象，在实际的应用中，不同的任务，需要的完成时间可能是不一样的，如果我有十个任务，仅仅是把5个分配给一个消费者，把另外5个分配给另外一个消费者，这就有可能导致任务的不均衡，一个人拿到的5个可能很简单，另外一个人拿到的很复杂，这种利用 queue 来分配任务，完成一个再拿下一个的方式，是一种负载均衡，load balancing。

这里需要注意一下这个 q.get() 它是一个阻塞操作，如果 queue 里面没有东西的话它就会停在这，直到 queue 有东西为止，这是一个非常好的特性对吧，有任务就做，没任务就歇着，这种阻塞能力是 list 没有的。聪明的你可能会说，我这样不就可以做到了吗：

```python
while True:
    if lst:
        item = lst.pop(0)
        print('Consume:', item)
```

但是这里有好多问题，第一如果 list 里面没有东西，你就这样一直循环，实际上是一直在做操作的，也就是在浪费 cpu ，那我加一个 sleep 行不行呢？

```python run
import threading
import time

def consumer(lst):
    while True:
        if lst:
            item = lst.pop(0)
            print('Consume:', item)
        else:
            time.sleep(0.5)

def producer(lst):
    for i in range(10):
        lst.append(i)

lst = []

t1 = threading.Thread(target=consumer, args=(lst,))
t2 = threading.Thread(target=consumer, args=(lst,))

t1.start()
t2.start()

producer(lst)
```

```output hang
Consume: 0
Consume: 2
Consume: 3
Consume: 4
Consume: 5
Consume: 6
Consume: 7
Consume: 8
Consume: 9
Consume: 1
```

会好一些，但是你知道需要 sleep 多久合适吗，短了又要浪费 cpu，长了任务堆积了，你还没来得及做，这里就明显没有阻塞灵活。

当然还有一个更重要的问题，就是线程安全。

我们注意第7和第8行这两行代码，在单线程的时候，没有任何毛病，但是在多线程程序里，你在进行第7行判断后，有可能会把操作移交给另外一个线程，而另外一个线程也刚好完成了这个 if lst 的操作。

于是有可能在 list 里面只有一个元素的情况下，你们两个前后脚判断完都开始执行第8行的 lst.pop(0)，这样就会有一个线程在 pop 的时候发现 list 里面没东西从而产生异常。也就是说如果你想让他正确工作的话，还需要额外上一个锁。相比起来，queue 的写法简单又好。

## 退出：task_done 与 join

运行[上面生产者消费者的例子](#producer-consumer)的时候其实会发现，这个程序在打印完并没有停止，需要 ctrl + c 才能让他跳出来，这是因为两个消费者线程被阻塞住了，他们俩都还在等着从 queue 里面拿东西，但这个 queue 里面再也不会生产任何东西了，因为生产者这个函数已经结束了。

默认情况下，python进程会等所有的线程结束后退出，所以就卡在那里了，那是不是只要在建立 thread 的时候，加上 daemon=True 就可以了，这个意思是，只要主线程结束，我就结束，但是你会发现加上这个后，运行程序，什么都不会被打印出来。

```python run
import threading
import queue

def consumer(q):
    while True:
        item = q.get()
        print('Consume:', item)

def producer(q):
    for i in range(10):
        q.put(i)

q = queue.Queue()

t1 = threading.Thread(target=consumer, args=(q,), daemon=True)
t2 = threading.Thread(target=consumer, args=(q,), daemon=True)

t1.start()
t2.start()

producer(q)
```

```output empty
```

这是因为生产者飞快的完成了，消费者还什么都没来急的干，这里主线程就结束了，顺带把两个子线程也干掉了，所以什么都没打印出来。

我这里希望的其实是这里的 queue 里面的全部任务结束后，进程再结束。那在后面加一个判断不就好了吗？

```python
while not q.empty():
    time.sleep(1)
```

结果看起来似乎没问题，但这里吗其实涉及两件事，第一就是前面提到的到底休息多久。

第二就是这里的 queue 里面空了就代表任务完成了吗？作为一个消费者，它在拿完最后一个任务的时候，queue 里面就空了，但是他拿到这个任务，可能还没有做完呢，queue 里面空只代表所有的任务都被认领了，不代表所有任务都被完成了。

那怎么来标记任务完成呢，只有消费者知道任务什么时候完成，所以 python 的 queue 提供了一个特殊的标记方式，就是`q.task_done()`。

```python run
import threading
import queue

def consumer(q):
    while True:
        item = q.get()
        print('Consume:', item)
        q.task_done()

def producer(q):
    for i in range(10):
        q.put(i)

q = queue.Queue()

t1 = threading.Thread(target=consumer, args=(q,), daemon=True)
t2 = threading.Thread(target=consumer, args=(q,), daemon=True)

t1.start()
t2.start()

producer(q)
q.join()
```

```output exit=0
Consume: 0
Consume: 1
Consume: 2
Consume: 3
Consume: 4
Consume: 5
Consume: 6
Consume: 7
Consume: 8
Consume: 9
```

在我们每一次往队列放一个任务的时候，python 会在内部计数器里面 +1 ，而每次运行`task_done`的时候会把计数器 -1，这样消费者在每一次完成任务后只要调用一下这个函数，就可以告诉这个 queue 有多少任务已经完成了。

在最下面这里我们做了一个`q.join()`，它会阻塞在这里，直到这个 queue 的`task_done`和`put`一样多。加了之后一切都正常了，程序也能够完成后退出了。

## 总结

以上就是 python 中 queue 的最核心的几个功能，它是一个非常简单又实用的数据结构。当然还有其他的功能，比如说限制这个 queue 的长度，或者在 get 或 put 的时候不阻塞，遇到问题直接 raise 一个 exception。

除了 FIFO 的 queue 之外，python 还提供了一些其他的 queue，比如 LIFO queue 或者是 priority queue，它们都是来分配任务的，有了今天的基础后，学习这些其他的东西，应该也会很快。
