# CPython

之前几篇文章呢，我们聊了很多跟技术有关的事情，有的难一些，有的简单一些。那么这篇文章呢，我们聊一个轻松一点的话题啊：什么是 Python？你乍一听可能会觉得，诶，这是个什么问题，对吧？但是你仔细想一下，好像这是个问题，真的吗？我们不是要故弄玄虚啊，因为我们平时在用到 Python 这个词的时候呢，确实会有不同方向的意思。

## 语言标准与实现

那世界上有一些编程语言呢，是有所谓标准的。最典型的呢，就是 C 或者 C++。他们有专门的一批人去研究这个标准，说 C 应该是什么样的，C++ 应该是什么样的。然后每过几年，它就出来一个新的标准，在原有标准的基础之上，对吧，它增加一些新的东西。所以可能熟悉 C++ 的朋友知道，有什么 C++11、C++14、C++17，对不对？这就是他们每隔几年出来的不同的标准。而 C 也好，C++ 也好，是先有标准，再有实现的。就是你这个标准出来之后，编译器才在跟进。

那 C 跟 C++ 呢，有几个非常大的组织或者是公司都在做它的编译器，而且都做的很大。比如说 GCC 最典型的，对不对？在 Mac 上面，比如说是 Clang，或者是 MSVC，就是微软做的。他们都很大，而且都非常常用。都是在 C 或者 C++ 的标准之上，他们实现这些标准，然后有时候也衍生出来一些自己的新的小标准。比如在 GCC 里面，它就有一套[嵌入 Assembly 的方式](https://gcc.gnu.org/onlinedocs/gcc/Extended-Asm.html)，那这个呢，就不是在这个 C 的标准里的。

所以当我们聊 C 跟 C++ 的时候呢，实际上有两件事啊。第一个是标准，就是它规定了这个语言是什么样的。第二个呢，是实现，就是这个编译器实现出来是什么状态。

## Python 的事实标准

那我们回到 Python，Python 跟 C 跟 C++ 呢，不太一样。因为它的语言的标准和它的核心实现是同一拨人做的。严格来说呢，Python 并没有一个所谓的标准，是它的实现本身成为了事实标准。就是我这个实现长成什么样，Python 就应该怎么写。

那我们平时写的 Python 代码，对吧，保存成 .py 文件，那它本身呢，就是一个 text file。我们需要一个解释器来运行这个 text file。我们会管我们写的代码也叫 Python 代码，管这个解释器也叫 Python 解释器。但是严格来说呢，一段 Python 代码是可以用不同的 Python 解释器来完成的。

而我们最常用的解释器，也是我们经常说的所谓官方解释器，叫做 [CPython](https://github.com/python/cpython)。因为这个解释器的核心是由 C 语言来实现的。那大家呢，在之前我的文章里面可能看到我经常会用 CPython 这个词，说的就是官方解释器。还有人跟我留言说，现在的 Python 解释器已经不是用 C 写的，是用 Python 写的。这个不对啊，现在官方的 Python 解释器还是用 C 来写的。

## CPython 的不足

但是 CPython 本身呢，有一些被人诟病的地方。第一个呢，就是速度。我们之前也聊过几篇相关的话题啊。由于它这个传统的这个[虚拟机的架构](./虚拟机.mdx)，所以它运行每一行代码的速度都会偏慢。那第二个呢，就是所谓 GIL 啊，就是 Global Interpreter Lock。那 GIL 呢，我们以后有机会可以讲它[一个专题](./GIL.md)啊。但是由于它的存在呢，会导致 Python 的[多线程](./多线程.md)呢，是一个残废的多线程。它并没有办法通过多线程来达到更快的运算速度。那针对这个问题，当然还有一些其他的可以改进的地方，市面上还有很多别的 Python 解释器。

## PyPy 的速度与兼容性

我们看这是 Python 官网给出的，叫 [Alternative Python Implementation](https://www.python.org/download/alternatives/)，就是非官方的 Python 实现。这里面名气最大的呢，就是这个 [PyPy](https://pypy.org/) 啊，是用这个 JIT 来完成的一个 Python 的 Implementation。那我们看 PyPy 呢，在[这些 Benchmark](https://speed.pypy.org/) 上的平均速度是比 CPython 快 4.5 倍的。这还是一个很不错的成绩啊。

而 PyPy 一个优势比较大的地方呢，在于如果你写的是纯 Python 代码的话，你可以直接用它运行。它的兼容性问题是非常非常小的。就是你平时是 `python 什么什么东西.py`，现在变成 `pypy 什么什么东西.py`，就可以了。

## CPython 难以撼动的原因

但是你也看到呢，PyPy 它只实现了 Python 2.7 跟 3.7 的功能。那这个就是为什么很多其他的 Python 的实现，有很多不错的 feature，但是完全没有办法撼动这个 CPython 的原因。就是 Python 的这个标准啊，它就完全是按照 CPython 来的。所以你得等 CPython 实现出来了，然后告诉大家我是怎么工作的，然后你才能去完成那个实现。那你肯定就没法跟上人家最新的步伐嘛。这是一场不公平的竞争嘛。它不像 C，对吧，它是 standard 先出来，然后大家一起去实现。

而 Python 本身的强大呢，并不仅仅是在于 Python 语言自己，而是它有非常非常多做的很优秀的库。而这些优秀的库，首先一定是适配 CPython 的。它在适配 CPython 的时候呢，它就可能会做一些只有在 CPython 上能用的功能，比如说 [VizTracer](https://github.com/gaogaotiantian/viztracer) 它就依赖 CPython 的实现。那很多人会说，Python 真正值钱的是 Python 这些库。而对于非 CPython 的实现来说，这些库里面可能有大量的东西都不太能用。这就是为什么除了 CPython 之外的 implementation，经常都只能处于一个比较小众的状态。

## 其他 Python 实现

那除了 PyPy 之外呢，其实还有一些比较有意思的 Python 实现，比如说这个 [Jython](https://www.jython.org/)。Jython 是用 Java 来实现的一个 Python。那它有一个优势呢，就是它让 Python 跟 Java 的交互变得非常的容易。所以也是有一些人在使用。那另外像 [MicroPython](https://micropython.org/)，在这个单片机里也是经常被用到。它做了一个 Python 的 Subset，就只实现了一些核心功能，然后把它做得很小。这个也是蛮常见的一个 Python 的解释器。

包括最近在 Rust 火起来之后，[RustPython](https://github.com/RustPython/RustPython) 现在也有 1 万个 star 了。就是用 Rust 来实现的一个 Python。它也是利用这个 JIT 的后端，然后实现一个更快的，然后多线程可以变成真多线程的 Python。也是一个反响还蛮大的项目。

那甚至有人会教你怎么用 500 行以内的代码，来[用 Python 实现一个 Python 的解释器](https://aosabook.org/en/500L/a-python-interpreter-written-in-python.html)。这也是蛮有趣的一个，很适合想提升自己 Python 水平的人的一个项目。就你可以更熟悉 Python 背后到底是怎么工作的。

好的，那今天聊这些绝对不是因为我偷懒了，不想做技术文章。只是单纯的想和大家介绍一下 Python 语言和 Python 解释器中间微小的差别。
