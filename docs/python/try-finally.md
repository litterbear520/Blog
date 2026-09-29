# try-finally

这篇文章我们来讲一下 Python 这个 try-finally 语法的应用。那我相信大家可能都使用过 `try` 这个语法，更多的时候我们是用它来处理一些可能出现的异常。比如说我们做了一个 1 除以 0，Python 会给你报错。那这个时候我们可以用 try-except 来规定 Python，当遇到这种异常的时候，你应该干什么。那我现在的代码就是说，在这种异常的时候，你只需要打印一下就可以了，不要给我退出整个程序。那这个比较常见的 try-except 的用法，并不是我们今天的主角。

<CodeWalkthrough variant="tryFinally" step={1} />

## finally 的执行规则

在 Python 的 `try` 有关的[语法](https://docs.python.org/3/reference/compound_stmts.html#the-try-statement)里，除了 `except` 之外，我们还可以用 `else` 跟 `finally`。`else` 就是没有出现异常的时候应该怎么办，也不是我们今天的重点。我们今天主要来讲 `finally`。`finally` 的意思就是 `try` 里面的这个代码块运行之后，无论里面是否抛出异常，Python 都会运行 `finally` 里面的这个代码块。你可以理解成，无论 `try` 里面发生了什么，`finally` 里面的代码都会运行。而 `finally` 的这个无论如何都要运行的特性，就经常被用在资源的释放上。

## 用 finally 释放资源

我们知道，在我们写程序的时候，经常会拿到一些必须释放的资源。比如说，它可能是一个网络库的连接，比如说，它可能是一个网络的连接，比如说，它可能是一个打开的文件，还比如说，它可能是一个我需要关闭的子进程。那有的时候，在我们申请了这些资源之后，由于我的代码报错，所以我用来释放这些资源的代码没能运行，导致这些资源没能被正确地释放。

我们这里用两个简单的 `print` 来表示抽象的资源的获取和释放。当我们一段程序正常地运行的时候，我们可能是获取资源，然后运行这个代码，然后释放资源。但假如说我们的代码中间有错误的话，可以看到，我们在获取了这个资源之后，由于代码报错了，所以我们释放资源的这一行命令没有被执行。

<CodeWalkthrough variant="tryFinally" step={2} />

那如果我们把资源的获取和运行的代码放到 `try` 里面，然后把资源的释放放到 `finally` 里，我们可以看到，尽管最终 Python 的程序还是以异常结束了，我们并没有捕获这个异常，但是我们的资源释放的部分还是被运行了。这个 resource acquire 和 release 都被打印出来了。

<CodeWalkthrough variant="tryFinally" step={3} />

同时，即便我们尝试捕获了这个异常，就像刚才一样，打印一行说你除以零了，这个 `finally` 的代码块依然会被运行。我们看到 `Resource release` 依然被打印出来了。

<CodeWalkthrough variant="tryFinally" step={4} />

因此我们可以试想，当我们获取了一个必须要释放的资源，而在获取这个资源之后，又要运行一大段有可能会报错的代码的时候，这个 try-finally 会让我们的资源释放变得更加地稳定。

## try-finally 与 atexit 的取舍

好，那有人可能会问了，说你在之前的文章里面提到过一个 [module](https://docs.python.org/3/library/atexit.html)，叫做 `atexit`。`atexit` 这个 module 也经常被用来释放资源，那么 try-finally 跟 `atexit` 相比，在释放资源这个领域，孰优孰劣呢？那这种问题的答案必然是，它们各有优劣，对吧？`atexit` module，顾名思义，它的释放资源只能在程序结束的时候运行，而 try-finally 可以在任意的 scope 下运行。比如说，我每接到一个请求需要做一件事情，而这个事情会新建一个子进程，我需要确认这个子进程在完成这个请求之后被 kill 掉了，无论在完成请求的过程中出现了什么幺蛾子。这个时候明显用 try-finally 就会更好，它可以保证在一段代码运行之后，你的这个资源释放函数就一定会被运行，这个事情 `atexit` 就做不到。

<CodeWalkthrough variant="tryFinally" step={5} />

那从另外一个角度讲，try-finally 必须要在你的代码运行流程上显式地加入代码。我们比如说，我写了一个 module，这个 module 在开始的时候会新建一个子进程，然后这个子进程跟你的主进程之间可能有一些通讯的工作，你只需要保证在我这个主进程结束的时候，记得把子进程关掉就可以了。那这种情况下，如果你用 try-finally 来做的话，你就必须要保证这个用户要在他自己的代码最外层写上这个 try-finally，因为你资源的释放需要等到这个用户不再使用你这个 module 之后再释放，这就给用户带来了很多麻烦。然而如果用 `atexit` 这个 module，你可以在你的库函数里面申请这个资源的同时，注册一下这个资源的释放函数。这样用户在使用你这个库的时候，他完全不用担心资源释放的问题，他不需要去理解你的库，也不需要显式地在自己的代码里面增加一些释放资源的代码。

## finally 能覆盖的范围

好，那接下来有一个非常严肃的问题。你刚才说 `finally` 里面的代码，无论如何都会被执行，真的是这样吗？它真的可以在任何情况下都优雅地释放资源吗？那答案显然是不是，对吧？我们都知道，如果你把电脑电源拔了，这个 `finally` 是一定不会运行的，所以它能覆盖的肯定是某一个范围。那么这个范围能覆盖到哪儿，或者说什么样的问题有可能会导致这个 `finally` 无法执行？

所以它肯定只能解决 Python 层面出现的问题。比如说，当我们使用[之前介绍过](./退出方式.mdx#sysexit-与-systemexit)的 `sys.exit(0)` 的时候，你可以看到，这个 `finally` 是被运行了的。我们之前也有提到过，`sys.exit(0)` 的时候，本质上是 raise 了一个 exception，这种情况 `finally` 是完全可以处理的。

<CodeWalkthrough variant="tryFinally" step={6} />

同样的，当我们用 Ctrl+C 退出 Python 程序的时候，`finally` 也可以处理，因为当我们输入 Ctrl+C 的时候，它本质上是 raise 了一个 `KeyboardInterrupt`，也是一个 exception。我们可以看到，在这里，`Resource release` 也被打印出来了。

<CodeWalkthrough variant="tryFinally" step={7} />

那我们知道，在 Python 里面，Ctrl+C 跟 `SIGINT` 是等价的，所以当我们用 `SIGINT` 来停止这个进程的时候，可以看到，这个 `Resource release` 也被打印出来了。

<CodeWalkthrough variant="tryFinally" step={8} />

## finally 无法运行的情况

然而如果我们使用的不是 `SIGINT`，而是 `SIGTERM` 的话，可以看到 `finally` 里面的代码就没有被运行，这个进程被直接地 terminate 掉了。

<CodeWalkthrough variant="tryFinally" step={9} />

当然，在 Python 里面有[专门的代码](https://docs.python.org/3/library/signal.html)可以去处理这个 `SIGTERM`。在这里只是告诉大家，如果你单纯地使用 try-finally 的话，面对 `SIGTERM`，你是无能为力的。当然 `SIGKILL` 就更不行了。

在我们[之前的文章](./退出方式.mdx#os_exit-的系统调用)里面，我们还提到过 `os._exit` 这个函数。在当时我们就告诉大家，这个函数的机制非常底层，它会直接调用一个 system call。所以在 Python 里面，大家应该尽量避免使用这个函数。那在这里大家可以看到，如果我使用的是 `os._exit(0)`，`finally` 这个代码块也不会被运行。

<CodeWalkthrough variant="tryFinally" step={10} nav />

当然在我们的实际工作中，还有可能会遇到其他的可能性，比如说 <Term tip="段错误：程序访问了不允许访问的内存，被操作系统直接结束进程">segfault</Term>。如果你的代码 segfault 了，那当然 `finally` 是不会运行的。

总结一下，从 Python 的层面看，try-finally 依然是一个非常优秀的保证释放资源的手段。它的形式简单，易懂，好写，同时覆盖了大部分我们会遇到的可能性。当然没有一个方法是完美的，try-finally 也有它触及不到的情况。对于这些情况，如果我们心里有个数，也会对我们的编程有所帮助。
