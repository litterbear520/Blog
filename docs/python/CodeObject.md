# CodeObject

提到 CodeObject，可能很多用了 Python 很多年的人都没有听过这个词。但是实际上，只要你在用 Python，就在跟它打交道。我们所有写的 Python 代码在运行的时候都被编译成了 CodeObject。

我们看左边这个例子，我们就 define 了一个空的函数，然后只要打印这个函数的 `__code__`，就可以看到它是一个 CodeObject。那我们前面其实提到过，`f` 本身是一个 FunctionObject，每一个 FunctionObject 都会有它对应的一个 CodeObject。

<CodeWalkthrough variant="codeObject" step={1} />

## CodeObject 里保存了什么

好，这个 CodeObject 里保存了什么呢？我们看一下[官方文档](https://docs.python.org/3/library/inspect.html)。这里是官方文档的 `inspect` 里面来介绍的 CodeObject 里面有的 attribute。那除了文档之外呢，你也可以在程序里 `dir` 一下这个 object，可以看到 attribute 的部分是一样的啊。那我们把这些 attribute 来分分类，分别讨论一下它们都是干嘛的。

<CodeWalkthrough variant="codeObject" step={2} />

## 字节码的保存形式

那首先呢，是这个 CodeObject 的 `co_code` 这个 attribute。它里面保存的呢，是这一段代码真正的 bytecode，是用二进制，也就是 binary 来表示的 bytecode。通俗一点理解呢，你可以认为这块是它的汇编。

那这个 attribute 呢，我们一般不直接去接触。如果我们要看它的汇编的话呢，更多的时候我们是用 `dis` 这个 module。我们之前也演示过很多次了，对吧？`dis.dis(f)`，它会给你显示出一个人类可读的它的字节码。那当然，在保存在机器上和机器去使用的时候呢，它是一个二进制的数据啊。

<CodeWalkthrough variant="codeObject" step={3} />

## 名字、文件与行号映射

接下来这三个属性呢，我管它叫做 metadata，就是它们和真正的代码运行关系并不大，它们是作为辅助数据出现的。分别是这段 code 的名字，名字一般就是你定义的函数的名字，然后它是在哪一个文件里被定义的。

那第三个呢，相对来说难理解一点啊。第三个它保存的是一个 mapping，是一个一一对应。它把每一个字节码，也就是 bytecode，对应的源代码的行数，以二进制的形式保存在这里。那，当然了，它保存的形式有一定的优化和压缩啊，人类呢，是没有办法直接看懂的。

那如果你感兴趣的话，在 CPython 的源码里面有整整一个 text file，来给你讲述这个东西是怎么来压缩的。这个不是我们今天的重点啊，我们就跳过。

<CodeWalkthrough variant="codeObject" step={4} />

## 虚拟机需要的数据

接下来，`co_flags` 跟 `co_stacksize`，这两个东西呢，都是在 Python 的 runtime 里面，virtual machine 需要的一些数据。stack size 比较好理解，对不对？就是它需要的栈的空间有多大。

那 flags 呢，实际上是一个 bitmap 啊。我们看一下它的定义。那 flags 在这里啊，基本上就是它在编译的时候，会去判断一下这个 code 有没有什么特别的属性，比如说有没有 `*args` 啊，有没有 `**kwargs` 啊，或者说它是不是一个 generator 啊，是不是一个 coroutine 呢。

那通过这些 flags 呢，Python 在运行这段代码的时候呢，有可能会有不同的 behavior。比如它在运行一个 generator，也就是一个生成器函数的时候，和它运行一个普通函数的时候，那它肯定就是不一样的。

那这个部分呢，以后我们再介绍一些更硬核的东西的时候呢，可能会接触到啊。

<CodeWalkthrough variant="codeObject" step={5} />

## 参数数量的三个计数

好，那接下来这个部分就比较重要了啊，是关于输入参数的数量的。那这些属性呢，决定了这个 Python 在往里面传参数的时候，怎么处理这些参数。它们呢，也是 Python 进行函数重载的一个基础。大家知道，Python 的重载机制其实是非常非常灵活的。

我们在未来呢，有机会的话，会单独出一篇文章，来说这个函数调用的时候，这个参数到底是怎么传的。但是今天呢，我们只把这三个 count 搞明白。

好，那我把官方文档上面对这三个 count 的介绍给粘到这个 comment 里了啊。大家看一下呢，应该就能感受到，如果我们想理解这三个东西的话，首先要知道什么叫 positional-only arguments，什么叫 keyword-only arguments。

那我们大部分人在写 Python 的时候呢，argument 无非就是用这么几种。第一个是必须要输入的，就像 `a`，对不对？第二个是有一个 default value 的，比如说 `b`。那么第三个呢，就是 `*args`，然后或者是 `**kwargs`。后面两个 `*args` 跟 `**kwargs` 呢，我们一般管它叫做变长参数，就是你传进来多少我都接着。

但是这四种形式在 `f` 里面，它们都既不是 positional-only，也不是 keyword-only。不信的话，我们可以跑一下这个程序。

大家可以看到，arguments 数量是两个，因为它这里面说了，我要排除掉星和星星的 args。positional-only 跟 keyword-only 都是零的。

<CodeWalkthrough variant="codeObject" step={6} />

### 什么是 positional-only 参数

好，那问题来了，什么叫做 positional-only arguments？好，我们来看这段代码啊。这个斜杠可能很多人比较陌生啊，这个就是 Python 里面 positional-only argument 的一个语法。

那在函数调用里，positional arguments 呢，就是你直接给的一个数，比如说这 `f(1)`，这个 1 是 positional 的。`f(1, 1)`，这两个 1 都是 positional 的。那 keyword arguments，就是你给进来的是一个 keyword 和一个 value。`a` 等于 1，这里面 keyword 是 `a`，value 是 1，这个叫 keyword arguments。

在 Python 中进行函数调用的时候，你要么是 positional 的，要么就是 keyword 的。那 positional-only，顾名思义，就是这两个变量必须得是 positional 的。在 `f` 的 definition 里面，这个斜杠表示，斜杠之前的所有变量必须要是 positional 传进来的。

我们看下面的三个例子。`f(1)`，这个 1 是 positional 的，传给 `a`，对吧？然后 `b` 有一个默认值是 3，所以这个调用是合法的。`f(1, 1)`，那么第一个 1 传给了 `a`，第二个 1 传给了 `b`，也是合法的。

但是我们看这个 `f(a=1)`，由于这个 `f` 的定义里面，`a` 和 `b` 都是 positional-only 的，所以这个 `a` 等于 1，并没有办法把 1 赋值给 `a`，所以这个调用是非法的。我们运行一下。大家可以看到，这个 `f(a=1)` 报错了，说是少了一个 required 的 positional argument。

<CodeWalkthrough variant="codeObject" step={7} />

同时我们看，向上面看，向这个，这个值是我们打印的 positional-only argument count，现在是两个。也就是在这个函数里面有两个 positional-only argument，分别是 `a` 和 `b`。那如果我们把函数定义里面这个斜杠拿掉，我们可以看到就一切正常了，同时 positional-only argument count 变成 0 了。

<CodeWalkthrough variant="codeObject" step={8} />

### 什么是 keyword-only 参数

知道了什么叫 positional-only 之后呢，什么叫 keyword-only argument？我们看，我们又改了一下函数的 definition。现在 `a` 逗号后面有一个什么都没有的星号了，那这个星号就表示，这个星号之后所有的参数都是 keyword-only argument。

依然是下面的三个调用。`f(1)` 没有问题吧？1 赋值给 `a`。但是 `f(1, 1)`，之前的话是一个给 `a`，一个给 `b`，现在不行了，因为 `b` 必须要拿到一个 keyword argument。我们运行一下，试一下。

大家可以看到，第三个打印出来的东西，也就是 keyword-only argument count 是一个。同时 `f(1, 1)` fail 了，因为它只能接受一个 positional argument。

<CodeWalkthrough variant="codeObject" step={9} />

那我们怎么修复这个程序呢？把这个 `f(1, 1)` 变成 `f(1, b=1)`，然后我们再运行，它就正常了。

<CodeWalkthrough variant="codeObject" step={10} />

好了，在了解了什么叫 positional-only argument，什么叫 keyword-only argument 之后，我们再回头看这三个东西就比较好理解了。后面两个分别就是 positional-only argument 和 keyword-only argument 的数量。第一个 `co_argcount`，就是除了星和星星，还有 keyword-only argument 之外的所有的参数的数量。那这个知识点呢，我们以后讲到这个函数重载的时候可能会用得到。

## 字节码为什么不直接存变量名

好，那接下来就到了最复杂、最容易混淆、这个世界上都没有几个人搞得明白的这一大串 names 里面了。

在讲这些属性分别是什么意思之前，我们要先思考一个问题，就是 bytecode 这个东西应该怎么设计。

举个简单的例子，我们一个函数 argument 是 `a`，然后你里面写了一行代码 `b = a`，这个时候你应该运行一个什么样的字节码呢？你的字节码里面应该包含 `a` 吗？如果你觉得你的字节码里面应该包含变量名的话，那如果这个变量名非常非常非常长，然后用了非常多次，你的字节码岂不是会非常长？更重要的是，`a` 也好，`b` 也好，它们在 runtime 的时候表示的是一个 Python object，对不对？

那如果你的字节码里面保存的是 `a` 或者 `b` 的话，你怎么从这个 `a` 或者 `b` 再转到这个 Python object 呢？你肯定还要用一个 mapping，对不对？就是你可能自己再建一个 dictionary，或者建一个什么样的 hashmap。那这么一想，你的效率是不是变得很低了？无论在时间上还是空间上，这都是一个非常不好的设计。

那 Python 的设计是什么样的呢？它首先认定了一个事情，就是在我编译代码的时候，这个代码里面出现的变量名也好，或者是任何的名也好，它是有数的。也就是说，它完全可以做到一个 O(1) 的一一对应。那简单来说呢，就是我维护一个数组，我每见到一个名字，我就给它指定一个角标。比如说我见到 `a` 了，我说好，`a` 你就是 0，对吧？我见到 `b`，说 `b` 你是 1。以此类推就可以了啊。

那通过这种方式呢，我的 bytecode 里面就可以写，对吧，读取第 0 个位置的数据，保存到第 1 个位置里。这样无论从时间上还是从空间上，都会有非常大的提升。

那当然，有的时候我们确实需要这个位置和变量名之间的对应关系，怎么办呢？我们就同样地维护名字的一个数组，就是把我们见到的名字们，`a` 啊、`b` 啊，也维护到一个数组里面，保证顺序不变。这样我们就可以通过 index，而不是一些复杂的 mapping，找到它们之间的关系。好，那讲了这么多理论啊，下面我们来说一下这几个东西分别是什么意思。

## 局部变量与 co_varnames

第一个概念呢，叫做 local variable，就是局部变量。local variable 包括了函数进来的所有的参数，也就是 argument，以及只在这个函数 scope 里面用到的变量。那在我们现在的这个例子里呢，显然 `b` 和 `a` 都是局部变量。所有的 local variable 的名字，包括 argument 的名字，都被保存到 `co_varnames` 里。

而 `co_nlocals` 是局部变量的数量，在绝大多数情况下，它就是 `co_varnames` 的 size。那么 Python 的源代码呢，是对它们两个的 size 进行过检查，但是我现在也没搞明白什么情况下它俩会不一样。好，我们运行一下这个代码。

<CodeWalkthrough variant="codeObject" step={11} />

可以看到 nlocals 是 2，对不对？有两个 local variable，然后它们的名字分别是 `a` 和 `b`。那为了更好地讲解我刚才说的那些跟字节码有关的东西呢，我们再尝试把它的字节码调出来。好，我们看，我们用 `dis` 这个 module 啊，对 `f` 做了一个 dis。

<CodeWalkthrough variant="codeObject" step={12} />

我们运行一下，看一下这里的，实际上字节码是 <Term tip="按角标读取局部变量，把它压入运行栈。">LOAD_FAST</Term> 0，然后 <Term tip="把栈顶的值写入指定角标的局部变量。">STORE_FAST</Term> 1。后面那个括号的部分呢，是 `dis` 这个 module 帮我们写上去的。在实际的字节码里，只有 `LOAD_FAST 0`。那 0 这个位置对应的是什么呢？是 varnames 里面第 0 个 index，这里的名字，也就是 `a`。

## co_names 保存了什么

那 varnames 是一个相对来说比较容易理解的概念，就是 local variable，对不对？这个 names 是什么？如果大家还有印象的话，我们刚才讲过一个 `co_name`，那个 `co_name` 是这个函数的名字。`co_names` 和 `co_name` 没有一毛钱的关系，这里这个名字的设计稍微有点愚蠢，它俩没有任何关系啊。这个 names 里面保存的就是除了 varnames，除了 cellvars 和 freevars，剩下的所有需要保存的 name 都扔到这个 `co_names` 里。比如说，当我们尝试 access 一个 attribute，对吧，`b = a.attr`，我们想一下，这个 `attr` 存在哪了呢？就存在这个 `co_names` 里。我们来看一下。

<CodeWalkthrough variant="codeObject" step={13} />

大家可以看到，这个 names 里有一个 `attr`，对不对？然后这里有一个 <Term tip="按 co_names 里的角标取出属性名，读取栈顶对象的这个属性。">LOAD_ATTR</Term> 0，那实际上呢，它是把 `attr` 这个 string 给 load 进了 stack。Exactly。那包括比如说 method，对不对？你一个 class 的 method 名字也是放在这里的，我们可以看一下。可以看，这个 name 现在是 `attr` 和 `method`，然后这个 <Term tip="按 co_names 里的角标取出方法名，为紧接着的调用准备好方法和它的 self。">LOAD_METHOD</Term> 是 1，对不对？1 这个 index 代表的是 `method` 这个 string。

<CodeWalkthrough variant="codeObject" step={14} />

你可能比较容易想到，这个 variable 的名字本身被存在一个地方，但实际上，在 Python 程序里面出现的所有不是 reserved word 的这些 string，都会被存进这些，存进存名字的地方。甚至比如说你做一个 import，我们看，我们 import 这个 `math`，对不对？然后 `math` 就出现在了 varnames 里和 names 里。

<CodeWalkthrough variant="codeObject" step={15} />

它出现在这两个位置的意义是不一样的。在 names 里呢，是因为它 `import math`，然后 `math` 这个 string，它需要保存起来。而在 varnames 里呢，是因为它这个地方隐含着一个 `import math` 之后，把 import 进来这个东西，这个库，又保存给了 `math` 这个 variable。我们看，如果把这行代码改成 `import math as m`，那么 `math` 就只出现在 names 里，而 `m` 出现在 varnames 里。

<CodeWalkthrough variant="codeObject" step={16} />

## cellvars 与 freevars 的分工

好，接下来我们讲 cellvars 跟 freevars 啊。这两个概念呢，有点像硬币的两面啊，它们经常成对出现，一般来说呢，都是辅助完成闭包的。

cellvars 的意思呢，是我这个地方的 variable 还会在其他的 scope 用到，这叫 cellvars。而 freevars 呢，是这个 variable 是从其他的 scope 来的。那在 Python 中实现闭包的时候呢，实际上它是把这个 object 变成了一个叫做 CellObject，你可以把它理解为一个指针或者一个引用。把它封装起来，然后不同的 scope 可以同时 access 它，这就是这个 cellvars 的 cell 的由来。那闭包的部分呢，今天我们也没有时间讲啊，所以只能未来再说。

我们看一下这个非常非常简单的函数啊，`g` 里面定义了一个 `d`，一个 dictionary，对不对？然后 `g` 里面的 local 函数 `f` 改变了这个 `d`，然后我们把这个 `f` return 回来。我们先看 `g` 的 CodeObject。可以看到，`g` 的 cellvars 里面有一个 `d`，对不对？就说明这个 `d` 不光被 `g` 本身 locally 使用，它还在其他的 scope 使用了，也就是 `f` 里面使用了。如果 `f` 里面没使用的话，它就会是一个 varname，而不是一个 cellvars。

<CodeWalkthrough variant="codeObject" step={17} />

我们可以试一下。我们看，如果 `f` 里面没有使用 `d` 的话，那 `d` 就是一个 `g` 的 local variable。

<CodeWalkthrough variant="codeObject" step={18} />

好，那我们接下来看一下 `f` 的 CodeObject。因为我们 `g` 函数 return 了 `f`，所以我们只要调用 `g`，得到就是一个 `f`。可以看到，`f` 里面有一个 freevars 是 `d`，因为 `d` 这个 variable 是别的 scope 它使用的，所以是一个 freevars。

<CodeWalkthrough variant="codeObject" step={19} />

那 cellvars 跟 freevars 存在的意义，都是告诉这个函数，你在给这个值进行赋值或者读取的时候，你要进行一些特殊的操作。我们看，我们还是 `dis.dis` 一下 `g` 啊，如果这个 `f` 里面没有用到 `d` 的话，那么这里它用的是 `STORE_FAST`，`STORE_FAST` 也就是对 varnames 的操作。

<CodeWalkthrough variant="codeObject" step={20} />

好，那如果 `f` 用了 `d` 呢？我们看，如果 `f` 用了 `d` 的话，在 `g` 里面它用的就是 <Term tip="把一个值写入指定 cell，更新这个 cell 保存的变量绑定。">STORE_DEREF</Term> 了，这是一个专门针对闭包的 bytecode。下面还有 <Term tip="把指定的 cell 本身压入运行栈，用来组装新函数的闭包。">LOAD_CLOSURE</Term>，那从名字里面也能看出来，它是跟闭包有关的一个操作。下面在 `f` 里面使用 `d` 的时候，这里面也用的是 <Term tip="读取指定 cell 中保存的值，供当前函数使用。">LOAD_DEREF</Term>。所以我们就可以知道，在我们看来长得一样的函数，在 Python compile 的时候，它自己会去分辨这个函数里面是不是涉及了闭包，这个 variable 是从哪来的，从而去调整它的 bytecode。那有关闭包真正的实现方式呢，我们未来有机会再单独写一篇文章。

<CodeWalkthrough variant="codeObject" step={21} />

## co_consts 保存的常量

好，那最后一个是 const 啊。const 跟上面我们介绍的这四个保存 string，也就是保存名字的属性都不一样。const 保存的是 Python object。你在这个函数里面所有出现的常量值，都会保存在 `co_consts` 里。比如说，我们现在 `f` 定义，`a` 等于 1，`b` 等于 abcabc，对不对？那么这个 1 跟 abcabc 都会保存在这个 const 里。我们看一下，这个 const 里面呢，有 `None`、1 跟 abcabc。`None` 这个东西呢，是常驻嘉宾啊，它永远会在 const 里。然后我们注意，这里的 1 是一个 integer，对不对？abcabc 是一个 string。

<CodeWalkthrough variant="codeObject" step={22} nav />

那这些内容会保存在 const 里面，然后 Python 虚拟机在运行这些字节码的时候，会从 const 里面调用这些数据。好，那我们就把 CodeObject 每一个属性都讲完了啊。

这篇文章呢，可能确实难度偏大，需要你理解很多底层的一些概念。但是如果你真的想弄懂 Python 底层的很多运行机制的话呢，你躲不开这个 CodeObject。所以呢，还是希望这个介绍 CodeObject 的文章能对你有所帮助。
