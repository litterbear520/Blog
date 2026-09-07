# asyncio

## 概念

`asyncio`是python引入的一个新语法，接下来说的都是python3.7以上才支持的新用法，毕竟学新不学旧。它并不是一个新的神奇的机制，本质上还是一段非常正常的python运行的<mark>单进程单线程</mark>的程序。

`asyncio`并不能提升你的运算速度，它比较适合处理那些需要等待的任务，最典型的就是网络通讯。

它的运算核心其实就是一个`event loop`。它就像一个大脑，面对很多可以执行的任务，然后决定执行哪个任务。

在`asyncio`里同时执行的任务只能有一个，和线程不一样的是，它不存在系统级的上下文切换。它需要每一个任务主动告诉`event loop`，我这边结束了，你可以让别的任务开始了。这样有个好处就是，它不存在竞争冒险的问题，你可以明确知道我每一个任务什么时候停止运算了。

## coroutine

协程，在 python 语境中一般指两种东西，coroutine function 和 coroutine object，一般所有`async def`开头的东西都叫 coroutine function，例如：

```python
import asyncio

async def main():
    print("hello")
    awajt asyncio.sleep(1)
    print("world")

coro = main()
asyncio.run(coro)
```

它的本质和生产器函数有些像，在做`main()`的时候并不会执行函数，而是返回一个 coroutine object，它不会运行任何这个 coroutine 里面的代码。

那么如何运行这个代码呢，我们首先要做两件事：

1.先进入 async 模式，也就是进入 event loop 开始控制整个程序状态。

2.把 coroutine 变成一个 task。

正常写代码在 synchronize 模式下切换到 asynchronize 基本上只用一个入口函数`asyncio.run`，它的参数是一个 coroutine。

它会做两件事，第一建立起这个 event loop，第二会把这个 coroutine 变成 event loop 里面的第一个 task，在事件循环建立后它会去找哪个任务可以执行，当然这里只有一个任务，所以就会开始运行 run 给进来的 coroutine。

## task

我们刚刚说过，event loop 的核心是有很多很多个 task，然后他来决定哪个 task 来运行，所以一个很重要的事情是当我们处于 async 模式下的时候，要如何增加 task 呢？

接下来介绍几个可以把 coroutine 变成 task 的方法，让它可以排队执行的方法。

### create_task

我们先看这段代码的执行过程。

```python
import asyncio
import time

async def say_after(delay, what):
    await asyncio.sleep(delay)
    print(what)

async def main():
    print(f"started at {time.strftime('%X')}")

    await say_after(1, 'hello')
    await say_after(2, 'world')

    print(f"finished at {time.strftime('%X')}")

asyncio.run(main())
```

1.首先，这段代码定义了两个函数，此时都没有执行。

2.asyncio.run 一个 coroutine 的时候，创建 event loop，并把 main 作为主 task 开始运行。

3.main 开始执行，打印开始时间。

4.遇到第一个await的时候 main 当前这个 task 直接进入`say_after()`coroutine，并没有创建新的 task。

5.`say_after`执行到`await asyncio.sleep(1)`这时它需要等 1 秒，所以整个 main task 暂停，把控制权还给 event loop。

6.过了 1 秒后，event loop 唤醒这个 task，继续执行，打印 hello 

7.函数结束，第一个`say_after()`返回，回到`main()`，接着和刚在一样走第二个后结束。

整个程序运行总共 3 秒，整个过程只有一个 task 就是`main`，两个`say_after()`都只是这个 task 内部 await 进去的普通 coroutine。

:::warning[注意]
所有的控制权的返回都是显式的，event loop 并没有办法强行从一个 task 里面拿回控制权，必须是这个 task 主动把控制权交回去，交回去的方式有两种，第一个是 await 一个不能立刻完成的 coroutine 会交回，第二个是这个函数运行完毕后会交回。所以说如果一个 task 里面有一个死循环，整个 event loop 就卡死了。
:::

到这里你可能意识到一个问题，为什么他们俩的打印不能一起等呢，这才是协程的意义才对。

这时候就可以用到`create_task`函数，它的参数是一个 coroutine，它会把 coroutine 变成一个 task，并注册到 event loop 里面，告诉循环这个 task 可以开始执行了，但是现在 event loop 并没有办法执行 task ，因为控制权还在 main 手里，main 趁着自己还有控制权此时创建了第二个 task ，在这之后才 await 两个 task 把控制权交还。

```python
import asyncio
import time

async def say_after(delay, what):
    await asyncio.sleep(delay)
    print(what)

async def main():
    print(f"started at {time.strftime('%X')}")

    task1 = asyncio.create_task(say_after(1, 'hello'))
    task2 = asyncio.create_task(say_after(2, 'word'))

    await task1
    await task2

    print(f"finished at {time.strftime('%X')}")

asyncio.run(main())
```

这里的 await 告诉 event loop 我需要这个 task 完成，把控制权交还，并且在控制权回来的时候，从这 task 里面提取所需要的返回值。

这次程序只需要两秒就能完成，因为当 await task1 的时候，event loop 里面实际上已经有了三个 task，分别是 main、task1 和 task2。当task1 和 event loop 说我需要一秒才能完成后，event loop 闲来无事就能发现还有 task2 可以执行，于是就执行了 task2，然后 task2 说需要两秒结束，这样两个 task 就能够同时进行等待了。

这就是为什么 async 很适合解决一些网络通讯的问题，因为通讯很多时间都是在等待上的，就是所谓的 IO 密集型任务，真正的运算挺少的，主要是等待回复，等待期间可以让其他任务去干活。

await 有一个功能是将 task 或者 coroutine 的返回值拿出来，如果不用 await 是拿不到这个值的。

```python
import asyncio
import time

async def say_after(delay, what):
    await asyncio.sleep(delay)
    return f"{what} - {delay}"

async def main():
    print(f"started at {time.strftime('%X')}")

    task1 = asyncio.create_task(say_after(1, 'hello'))
    task2 = asyncio.create_task(say_after(2, 'word'))

    result1 = await task1
    result2 = await task2

    print(result1)
    print(result2)

    print(f"finished at {time.strftime('%X')}")

asyncio.run(main())
```

### gather

这时候就有个问题，如果我有很多个 task，是不是就需要写 10 个 await，这是不是太蠢了，事实确实是这样的。

所以 asyncio 给我们提供了一个函数叫做 gather。它不是一个 coroutine，它会返回一个叫做 future 的东西，这个 future 也是可以用 await 的，它的参数是若干个 coroutine 或 task，甚至可以是 future，也就是 gather 的 return 值也可以接着 gather。

如果参数是 coroutine 的话它会包装成 task，并且注册到 event loop 中，并返回一个 future 值，当你 await 这个 future 的时候，相当于告诉 event loop 我要等待里面的每一个 task 都完成，我才可以继续，同时会把这些 task 的返回值放到一个 list 里返回。

```python
import asyncio
import time

async def say_after(delay, what):
    await asyncio.sleep(delay)
    return f"{what} - {delay}"

async def main():
    print(f"started at {time.strftime('%X')}")

    task1 = asyncio.create_task(say_after(1, 'hello'))
    task2 = asyncio.create_task(say_after(2, 'word'))

    ret = await asyncio.gather(task1, task2)

    print(ret)

    print(f"finished at {time.strftime('%X')}")

asyncio.run(main())
```

这个程序的结果的 list 里面的顺序和 task 的顺序是一致的，这样就不需要一个个 await 了。并且还有一个好处是，它会自动把 coroutine 包装成 task，不需要手动 create_task 了。

```python
import asyncio
import time

async def say_after(delay, what):
    await asyncio.sleep(delay)
    return f"{what} - {delay}"

async def main():
    print(f"started at {time.strftime('%X')}")

    ret = await asyncio.gather(
        say_after(1, 'hello'),
        say_after(2, 'word')
    )

    print(ret)

    print(f"finished at {time.strftime('%X')}")

asyncio.run(main())
```

这种方式在在拿到正确的返回值的同时，也只用了 2 秒。

尽管 asyncio 里还有不少的功能，但是掌握了这几个，基本就理解了 asyncio 的核心理念了。

## 总结

首先脑海里要建立一个 event loop 的概念，上面有一个 event loop 作为大脑，下面是若干个可执行的 task，并且 task 是没有办法控制 event loop 去执行某一个 task 的，它只能告诉 event loop 说我在等这个 task，最终由 event loop 决定下面要运行哪个 task。

而 event loop 一旦开始运行 task，就必须要 task 显式的把控制权交还给 event loop，交还控制权的方式有 await 一个需要等待的 coroutine 和函数运行完毕。

尽管我们会说这种协程的方式是并发的，但是同时刻实际上只有一段代码在跑，它只是想办法再利用这些代码中间的等待时间，所以你的代码中并没有等待这件事，协程是没有意义的。

务必分清什么是 coroutine，什么是 task，要知道什么时候隐式的变成了 task，在你放到 gather 里的时候，放进去的时候都是 coroutine，但它会被变成 task 执行，最后拿到一个 coroutine 的返回值是需要用一个变量去等于 await 一个 coroutine 才能拿到。
