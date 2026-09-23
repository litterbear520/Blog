# frame

这篇文章我们来介绍一个在 Python 运行的时候非常重要，非常基础，但是我们其实不太会接触到的东西，就是 [frame](https://docs.python.org/3/reference/datamodel.html#frame-objects)。那 frame 这个东西中文被翻成帧，我不是特别喜欢这个翻译，所以我们就管它叫 frame。

## frame 与 code object

可能有人还记得我在蛮久之前写过一篇有关 [code object](./CodeObject.mdx) 的文章。在那篇文章里我告诉大家，所有你写的 Python 代码都会在编译期先被编译成 code object。但是 code object 这个东西它是一个 immutable，它编译一次就完成了。所以在运行 Python 代码的时候，我们会使用到它，但是不能单纯的依赖它，因为我们有非常多的运行时的状态需要保存。

比如说在 code object 里面，我们记录了某一个函数需要用到什么 local variable。比如这个函数需要用到 A、B、C 这三个 local variable。但是 code object 里面没有地方记录现在 A、B、C 分别是多少。而记录当前运行时状态的责任就落在了 frame 身上。

那 frame 和 code object 区别在于，每一个函数只会编译出来一个 code object，它大部分的信息是保存在 code object 里面的。然而你在运行的时候，一个函数可能会被重复调用，它可能有递归，可能有各种各样的情况。每一次调用会出现一个 frame。这个 frame 里面只保存每一次调用的时候这个函数不同的东西，比如说当前 local variable 的值是什么。

## 函数调用与返回

你可以把 Python 的运行时想象成一座大楼。在进入程序的时候呢，从一层开始，然后每有一段新的 code block 就再往上走一层，每一层都记录着当前这一层的状态。那么我们最常见的换层数，或者说换 frame 的状况，就是函数的调用与返回。

在刚开始，为了简单起见，你可以认为每一个函数调用就会新建一个 frame，然后这个函数的代码就都在这个 frame 里面运行，直到这个函数调用了另一个函数，它就要去下一个 frame，或者这个函数返回，它就返回上一个 frame。它是一个 stack，也就是栈的结构。

## 获取当前 frame

那在 Python 代码里面，我们是可以直接拿到当前的 frame 这个 object。一般来说，我们是使用 [inspect.currentframe()](https://docs.python.org/3/library/inspect.html#inspect.currentframe)。当然，我们也可以用 [sys._getframe()](https://docs.python.org/3/library/sys.html#sys._getframe)。事实上，这个 currentframe() 在成功的时候调用的就是 _getframe()，只是它们两个在失败时候的 behavior 不一样。那我们知道，前面加下划线的函数一般是 internal usage，所以尽管这个下划线 _getframe() 是可以用的，我还是更推荐大家使用这个 inspect 里面的函数。

那我们可以通过 objprint.op 把这个 frame 给打出来。

<CodeWalkthrough variant="frame" step={1} />

可以看到这个 frame 的 attributes 里面都是 f_ 开头的。如果你还记得的话，在 code object 里面，所有的 attributes 都是 co_ 开头的。那我们来把这些属性逐一的跟大家介绍一下。

## frame 的属性

### 调用关系与命名空间

首先，这个 f_back 是它上一个 frame，也就是调用这个函数的那个函数，它所对应的 frame。那刚才我说这个 frame 本质是一个栈结构，它的实现是用链表来完成的。每一个 frame 知道调用它的那个 frame 是什么，然后通过 f_back 连接起来。

f_builtins 是这个 frame 下对应的 builtins 函数，也就是所谓的内置函数。

f_code 就是我们之前讲到过的那个 code object 了。还记不记得我们需要用到很多这个 code object 里面的内容，才知道程序应该怎么运行。这个 code object 里面有编译期我们拿到的跟这个函数有关的事儿。那最重要的比如它的字节码，它这个变量的名字们，这些东西。

那 f_globals 和下面的 f_locals 其实都比较好理解，就是这个函数眼里的全局变量和局部变量。

这个 f_locals 里面记录了我当前这个 frame 里面所有的局部变量的值。我在一个函数里面写完 a = 1，它怎么知道 a 变成 1 了呢？就是因为通过这个 f_locals，这个 frame 记住了 a 变成 1 了。当然在之前的一篇文章里我们也提到了对吧？这个 f_locals 其实是一个读出来的值，那它里面真正的机制是用了一个类似数组的方式去保存的这些 local variable。只是机制上你完全可以这么理解。

### 当前执行位置

f_lasti 就是 last instruction。你可以把它理解为 program counter。如果你学过汇编的话，它的意思就是我现在运行到哪一个字节码了。一个函数怎么知道自己运行到哪儿，下一个应该运行什么了呢？就是通过这个 last instruction。那比如我一个函数 a 调用函数 b，函数 b 返回的时候，a 怎么知道它原来运行到哪儿了呢？就是通过这个 last instruction。在 a 的 frame 里面，它记录了这个 last instruction 是多少。所以在 b 函数返回的时候，它可以继续运行。

f_lineno。其实这个更多的是给人类看的，就是我现在运行到第几行了。我们看刚才打印的这一行代码是在第 6 行。所以现在 f_lineno 是 6。

### trace 回调

下面这三件事呢，理解难度就会稍微大一些，因为它们是跟 trace 有关的。

Python 允许你在每运行一行代码或者是一个字节码之后去 trigger 一个 callback function。就每运行一行程序就调用一下你写的这个函数。那 Python 里的 debugger 就是通过这个机制来完成的。我们比较熟知的 pdb 就是通过它来完成的。包括 Python 的一些工具，比如说 coverage 我们非常常用，也是通过这个机制来完成的。那当 f_trace 是 None 的时候，它就不会调用任何函数。而当你通过 [sys.settrace()](https://docs.python.org/3/library/sys.html#sys.settrace) 设置了一个 trace 函数的时候，这个 f_trace 就不是 None 了。那下面两个布尔值，f_trace_lines 跟 f_trace_opcodes，就是说你是每一行 trigger 一下这个函数，还是每一个字节码 trigger 一下这个函数。

## 查看调用者

那 frame 的存在就相当于我们可以在 Python 的任何一个位置获取到整个的调用栈，以及这个调用栈里面每一帧的全部情况。这就让很多黑魔法成为了可能。

### 调用者的函数名

举个例子，我想知道调用我的这个函数它叫什么名字？我们看我们就可以在拿到了当前这个 frame 之后，找到这个 frame 的 f_back，然后拿到它的 f_code，打印它这个 f_code 里面的 co_name。

<CodeWalkthrough variant="frame" step={2} />

当这个 f 函数是被 g 函数调用的时候，可以看到它打印出来一个 g。

### 调用者的局部变量

还比如说我想知道调用我的这个函数它的局部变量是什么样的？我就可以用 frame.f_back，然后 .f_locals。我们看在 g 里面运行 f 之前，我先做了一个 a 等于 3，又做了一个 b 等于 4。

<CodeWalkthrough variant="frame" step={3} />

在运行这个程序的时候，这个 f 就知道调用我的那个函数，当前的 frame 里面，a 是 3，b 是 4。

### 调用发生的位置

又比如说我想知道调用我的这个函数是在什么地方调用的我？有的时候你可能有一个 utility function，这个 function 在很多地方被调用过。那你想知道某一个状态下是谁调用的它？我们也可以用 frame 来完成这个事儿。我们可以用这个 f_code.co_filename 来拿到调用它的这个函数所在的文件。然后用 f_back.f_lineno 来拿到当前情况下它在哪一行。

<CodeWalkthrough variant="frame" step={4} nav />

可以看到运行的时候，它会告诉你，是在这个文件下当前是在第 11 行。我们看上面的程序，确实是在第 11 行调用的 f 函数。

## frame 的用途与开销

那 Python 这个 frame 的机制实际上是让 Python 的调用结构变得非常非常清晰的。而且你可以在程序中任何一个地方，拿到全部的调用栈，以及每一个 frame 的所有状态，也就是说你几乎可以随时随刻的掌握整个 Python 运行的状态。对于 debug 来说，或者对于某一些喜欢黑魔法的人来说，这绝对是一个好事儿。

当然从另一个角度讲，这个 frame 的机制也增加了一定的 Python 函数调用的 overhead。尽管对于 frame 这个地方，CPython 是有做特别的优化的，并不用每一次函数调用真的需要去 new 一个新的 frame object，它会重复利用之前的 frame。但是这个机制依然有着比较明显的 overhead。所以经常有的时候你会发现，当你写一些比较小比较短的函数的时候，函数调用反而成了整个程序里面最耗时的地方。

好那今天对 frame 的介绍就到这里。希望对大家有所帮助。
