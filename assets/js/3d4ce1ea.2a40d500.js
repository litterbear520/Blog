"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([["4366"],{1302(e,t,n){n.r(t),n.d(t,{metadata:()=>s,default:()=>f,frontMatter:()=>a,contentTitle:()=>l,toc:()=>d,assets:()=>c});var s=JSON.parse('{"id":"python/\u9000\u51FA\u65B9\u5F0F","title":"\u9000\u51FA\u65B9\u5F0F","description":"\u8FD9\u7BC7\u6587\u7AE0\u6211\u4EEC\u6765\u8BB2\u4E00\u4E0B N \u79CD\u4ECE Python \u9000\u51FA\u7684\u59FF\u52BF\u3002\u90A3\u6211\u76F8\u4FE1\u5927\u5BB6\u4E00\u5B9A\u4F1A\u7ECF\u5E38\u7528\u5230\u9000\u51FA\u8FD9\u4E2A\u529F\u80FD\uFF0C\u5C31\u662F\u7A0B\u5E8F\u8FD0\u884C\u5230\u67D0\u4E2A\u9636\u6BB5\uFF0C\u7136\u540E\u6211\u5C31\u4E0D\u518D\u7EE7\u7EED\u8FD0\u884C\u4E86\uFF0C\u6211\u60F3\u628A\u6574\u4E2A\u8FDB\u7A0B\u9000\u51FA\u6765\u3002\u6211\u76F8\u4FE1\u5927\u90E8\u5206\u4EBA\u7528\u7684\u9000\u51FA\u65B9\u5F0F\u5E94\u8BE5\u5C31\u662F\u5DE6\u8FB9\u8FD9\u56DB\u79CD\uFF0C\u5206\u522B\u662F quit\uFF0Cexit\uFF0Csys.exit\uFF0C\u8DDF os._exit\u3002\u90A3\u4F60\u77E5\u9053\u8FD9\u56DB\u79CD\u65B9\u6CD5\u4E4B\u95F4\u5B83\u4EEC\u6709\u4EC0\u4E48\u4E0D\u540C\u5417\uFF1F","source":"@site/docs/python/\u9000\u51FA\u65B9\u5F0F.mdx","sourceDirName":"python","slug":"/python/\u9000\u51FA\u65B9\u5F0F","permalink":"/docs/python/\u9000\u51FA\u65B9\u5F0F","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"\u8FED\u4EE3\u5668","permalink":"/docs/python/\u8FED\u4EE3\u5668"},"next":{"title":"\u95ED\u5305\u7684\u5B9E\u73B0\u673A\u5236","permalink":"/docs/python/\u95ED\u5305\u7684\u5B9E\u73B0\u673A\u5236"}}'),i=n(74848),r=n(28453),o=n(18915);let a={},l="\u9000\u51FA\u65B9\u5F0F",c={},d=[{value:"quit \u4E0E exit \u7684\u6765\u6E90",id:"quit-\u4E0E-exit-\u7684\u6765\u6E90",level:2},{value:"sys.exit \u4E0E SystemExit",id:"sysexit-\u4E0E-systemexit",level:2},{value:"quit\u3001exit \u4E0E sys.exit \u7684\u533A\u522B",id:"quitexit-\u4E0E-sysexit-\u7684\u533A\u522B",level:2},{value:"\u6355\u83B7 SystemExit \u7684\u95EE\u9898",id:"\u6355\u83B7-systemexit-\u7684\u95EE\u9898",level:2},{value:"\u76F4\u63A5 raise SystemExit",id:"\u76F4\u63A5-raise-systemexit",level:2},{value:"os._exit \u7684\u7CFB\u7EDF\u8C03\u7528",id:"os_exit-\u7684\u7CFB\u7EDF\u8C03\u7528",level:2},{value:"\u8FDB\u7A0B\u7684\u9000\u51FA\u72B6\u6001\u7801",id:"\u8FDB\u7A0B\u7684\u9000\u51FA\u72B6\u6001\u7801",level:2},{value:"interactive shell \u7684 EOF \u9000\u51FA",id:"interactive-shell-\u7684-eof-\u9000\u51FA",level:2}];function p(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components},{Term:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Term",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"\u9000\u51FA\u65B9\u5F0F",children:"\u9000\u51FA\u65B9\u5F0F"})}),"\n",(0,i.jsxs)(t.p,{children:["\u8FD9\u7BC7\u6587\u7AE0\u6211\u4EEC\u6765\u8BB2\u4E00\u4E0B N \u79CD\u4ECE Python \u9000\u51FA\u7684\u59FF\u52BF\u3002\u90A3\u6211\u76F8\u4FE1\u5927\u5BB6\u4E00\u5B9A\u4F1A\u7ECF\u5E38\u7528\u5230\u9000\u51FA\u8FD9\u4E2A\u529F\u80FD\uFF0C\u5C31\u662F\u7A0B\u5E8F\u8FD0\u884C\u5230\u67D0\u4E2A\u9636\u6BB5\uFF0C\u7136\u540E\u6211\u5C31\u4E0D\u518D\u7EE7\u7EED\u8FD0\u884C\u4E86\uFF0C\u6211\u60F3\u628A\u6574\u4E2A\u8FDB\u7A0B\u9000\u51FA\u6765\u3002\u6211\u76F8\u4FE1\u5927\u90E8\u5206\u4EBA\u7528\u7684\u9000\u51FA\u65B9\u5F0F\u5E94\u8BE5\u5C31\u662F\u5DE6\u8FB9\u8FD9\u56DB\u79CD\uFF0C\u5206\u522B\u662F ",(0,i.jsx)(t.code,{children:"quit"}),"\uFF0C",(0,i.jsx)(t.code,{children:"exit"}),"\uFF0C",(0,i.jsx)(t.code,{children:"sys.exit"}),"\uFF0C\u8DDF ",(0,i.jsx)(t.code,{children:"os._exit"}),"\u3002\u90A3\u4F60\u77E5\u9053\u8FD9\u56DB\u79CD\u65B9\u6CD5\u4E4B\u95F4\u5B83\u4EEC\u6709\u4EC0\u4E48\u4E0D\u540C\u5417\uFF1F"]}),"\n",(0,i.jsx)(t.h2,{id:"quit-\u4E0E-exit-\u7684\u6765\u6E90",children:"quit \u4E0E exit \u7684\u6765\u6E90"}),"\n",(0,i.jsxs)(t.p,{children:["\u90A3\u6211\u4EEC\u5148\u6765\u8BF4\u524D\u4E24\u4E2A\uFF0C\u8FD9\u4E2A ",(0,i.jsx)(t.code,{children:"quit"})," \u8DDF ",(0,i.jsx)(t.code,{children:"exit"})," \u51E0\u4E4E\u662F\u4E00\u6A21\u4E00\u6837\u7684\u3002\u5B83\u4EEC\u4E24\u4E2A\u90FD\u5C5E\u4E8E\u4E00\u4E2A\u53EB ",(0,i.jsx)(t.code,{children:"site"})," \u7684 ",(0,i.jsx)(t.a,{href:"https://docs.python.org/3/library/site.html",children:"module"}),"\u3002\u90A3\u4F60\u8BF4\u4E3A\u4EC0\u4E48\u6211\u7528\u7684\u65F6\u5019\u4ECE\u6765\u6CA1\u6709 import \u8FC7\u8FD9\u4E2A ",(0,i.jsx)(t.code,{children:"site"})," module \u5462\uFF1F\u56E0\u4E3A\u5728\u4F60\u6B63\u5E38\u8FD0\u884C Python \u7684\u65F6\u5019\uFF0C\u5B83\u662F\u4F1A\u81EA\u52A8\u5E2E\u4F60\u628A\u8FD9\u4E2A ",(0,i.jsx)(t.code,{children:"site"})," module import \u8FDB\u6765\uFF0C\u5E76\u4E14\u628A ",(0,i.jsx)(t.code,{children:"quit"})," \u8DDF ",(0,i.jsx)(t.code,{children:"exit"})," \u8FD9\u4E24\u4E2A\u4E1C\u897F\u653E\u5230 builtins \u91CC\uFF0C\u8FD9\u6837\u4F60\u5728\u4F60\u7A0B\u5E8F\u7684\u4EFB\u4F55\u4E00\u4E2A\u5730\u65B9\u8FD0\u884C\u8FD9\u4E24\u4E2A\u51FD\u6570\uFF0C\u5B83\u90FD\u80FD\u9000\u51FA\u6765\u3002"]}),"\n",(0,i.jsxs)(t.p,{children:["\u6211\u4EEC\u53EF\u4EE5\u770B\u8FD9\u5C31\u662F\u5B83\u7684",(0,i.jsx)(t.a,{href:"https://github.com/python/cpython/blob/v3.10.0a1/Lib/site.py#L375-L388",children:"\u6E90\u4EE3\u7801"}),"\u3002\u5B83\u5C31\u662F\u628A\u8FD9\u4E2A ",(0,i.jsx)(t.code,{children:"builtins.quit"})," \u8DDF ",(0,i.jsx)(t.code,{children:"exit"})," \u90FD\u8D4B\u503C\u6210\u4E86\u8FD9\u4E2A ",(0,i.jsx)(t.code,{children:"Quitter"}),"\u3002\u5C31\u5B83\u4EEC\u4FE9\u9664\u4E86\u540D\u5B57\u4E4B\u5916\uFF0C\u5269\u4E0B\u51E0\u4E4E\u662F\u4E00\u6A21\u4E00\u6837\u7684\u3002"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",metastring:'title="Lib/site.py" showLineNumbers=375 {387-388}',children:"def setquit():\n    \"\"\"Define new builtins 'quit' and 'exit'.\n\n    These are objects which make the interpreter exit when called.\n    The repr of each object contains a hint at how it works.\n\n    \"\"\"\n    if os.sep == '\\\\':\n        eof = 'Ctrl-Z plus Return'\n    else:\n        eof = 'Ctrl-D (i.e. EOF)'\n\n    builtins.quit = _sitebuiltins.Quitter('quit', eof)\n    builtins.exit = _sitebuiltins.Quitter('exit', eof)\n"})}),"\n",(0,i.jsxs)(t.p,{children:["\u6211\u4EEC\u53EF\u4EE5\u70B9\u8FDB\u8FD9\u4E2A ",(0,i.jsx)(t.code,{children:"Quitter"})," \u770B\u4E00\u4E0B\u3002\u5B83\u672C\u8D28\u5462\u5C31\u662F\u628A stdin close \u4E4B\u540E\uFF0C\u7136\u540E raise \u4E86\u4E00\u4E2A ",(0,i.jsx)(t.code,{children:"SystemExit"}),"\u3002"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",metastring:'title="Lib/_sitebuiltins.py" showLineNumbers=13 {23,26}',children:"class Quitter(object):\n    def __init__(self, name, eof):\n        self.name = name\n        self.eof = eof\n    def __repr__(self):\n        return 'Use %s() or %s to exit' % (self.name, self.eof)\n    def __call__(self, code=None):\n        # Shells like IDLE catch the SystemExit, but listen when their\n        # stdin wrapper is closed.\n        try:\n            sys.stdin.close()\n        except:\n            pass\n        raise SystemExit(code)\n"})}),"\n",(0,i.jsx)(t.h2,{id:"sysexit-\u4E0E-systemexit",children:"sys.exit \u4E0E SystemExit"}),"\n",(0,i.jsxs)(t.p,{children:["\u90A3\u6211\u4EEC\u518D\u8BF4\u8FD9\u4E2A ",(0,i.jsx)(t.code,{children:"sys.exit"})," \u8DDF\u524D\u4E24\u4E2A ",(0,i.jsx)(t.code,{children:"quit"})," \u8DDF ",(0,i.jsx)(t.code,{children:"exit"})," \u539F\u7406\u4E5F\u662F\u4E00\u6837\u7684\uFF0C\u5B83\u540C\u6837\u76F8\u5F53\u4E8E raise \u4E86\u4E00\u4E2A ",(0,i.jsx)(t.code,{children:"SystemExit"}),"\u3002\u6211\u4EEC\u53EF\u4EE5\u770B\u8FD9\u4E2A ",(0,i.jsx)(t.code,{children:"sys.exit"}),"\uFF0C\u6211\u4EEC\u53EF\u4EE5\u770B\u8FD9\u662F ",(0,i.jsx)(t.code,{children:"sysmodule.c"})," \u91CC\u9762 ",(0,i.jsx)(t.code,{children:"sys.exit"})," \u7684 ",(0,i.jsx)(t.a,{href:"https://github.com/python/cpython/blob/v3.10.0a1/Python/sysmodule.c#L814-L822",children:"implementation"}),"\uFF0C\u5728\u7B2C 820 \u884C\u8FD9\u91CC\uFF0C\u5B83\u5C31\u76F8\u5F53\u4E8E\u662F raise \u4E86\u4E00\u4E2A ",(0,i.jsx)(t.code,{children:"SystemExit"}),"\u3002"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",metastring:'title="Python/sysmodule.c" showLineNumbers=814 {820}',children:"static PyObject *\nsys_exit_impl(PyObject *module, PyObject *status)\n/*[clinic end generated code: output=13870986c1ab2ec0 input=b86ca9497baa94f2]*/\n{\n    /* Raise SystemExit so callers may catch it or clean up. */\n    PyThreadState *tstate = _PyThreadState_GET();\n    _PyErr_SetObject(tstate, PyExc_SystemExit, status);\n    return NULL;\n}\n"})}),"\n",(0,i.jsx)(t.h2,{id:"quitexit-\u4E0E-sysexit-\u7684\u533A\u522B",children:"quit\u3001exit \u4E0E sys.exit \u7684\u533A\u522B"}),"\n",(0,i.jsxs)(t.p,{children:["\u597D\uFF0C\u90A3\u524D\u4E09\u79CD\u65B9\u5F0F\uFF0C",(0,i.jsx)(t.code,{children:"quit"}),"\uFF0C",(0,i.jsx)(t.code,{children:"exit"}),"\uFF0C\u5305\u62EC ",(0,i.jsx)(t.code,{children:"sys.exit"}),"\uFF0C\u5B83\u4EEC\u7684\u539F\u7406\u662F\u4E00\u6837\u7684\u3002\u5B83\u4EEC\u6709\u4EC0\u4E48\u4E0D\u540C\u5462\uFF1F\u8FD9\u4E2A ",(0,i.jsx)(t.code,{children:"quit"})," \u8DDF ",(0,i.jsx)(t.code,{children:"exit"})," \u6211\u4EEC\u8BF4\u4E86\u51E0\u4E4E\u662F\u4E00\u6A21\u4E00\u6837\u7684\u3002\u4F46\u662F\u5B83\u4EEC\u4FE9\u6709\u4E00\u4E2A\u95EE\u9898\uFF0C\u6211\u4EEC\u4E4B\u524D\u4E0D\u662F\u8BF4\u4E86\uFF0C\u5B83\u4EEC\u662F\u5C5E\u4E8E ",(0,i.jsx)(t.code,{children:"site"})," module \u7684\uFF0C\u4F46 Python \u5E76\u4E0D\u603B\u662F\u5728\u8FD0\u884C\u7684\u65F6\u5019\u4F1A\u81EA\u52A8 import \u8FD9\u4E2A module\u3002\u6211\u4EEC\u770B\u8FD9\u79CD\u8FD0\u884C\u65B9\u5F0F\uFF0C\u5F53\u6211\u4EEC\u7528 ",(0,i.jsx)(t.code,{children:"python -S"})," \u7684\u65F6\u5019\uFF0C\u5B83\u5C31\u4F1A\u4E0D import \u8FD9\u4E2A ",(0,i.jsx)(t.code,{children:"site"})," module\u3002\u8FD9\u4E2A\u65F6\u5019 ",(0,i.jsx)(t.code,{children:"quit"})," \u8DDF ",(0,i.jsx)(t.code,{children:"exit"})," \u8FD9\u4E24\u4E2A\u540D\u5B57\u5C31\u4E0D\u5B58\u5728\u4E86\u3002\u56E0\u6B64\u8FD9\u4E24\u79CD\u5199\u6CD5\uFF0C\u53EA\u63A8\u8350\u5927\u5BB6\u5728 interactive interpreter \u7684\u65F6\u5019\u7528\u3002\u5C31\u662F\u5F53\u4F60\u6253 Python\uFF0C\u7136\u540E\u4E00\u884C\u4E00\u884C\u90A3\u4E48\u8F93\u547D\u4EE4\u7684\u65F6\u5019\uFF0C\u4F60\u53EF\u4EE5\u7528\u3002\u56E0\u4E3A\u5B83\u4EEC\u4FE9\u6253\u8D77\u6765\u6BD4\u8F83\u5FEB\u3002\u5728\u6240\u6709\u7684\u6BD4\u8F83\u6B63\u5F0F\u7684\u4EE3\u7801\u91CC\uFF0C\u5927\u5BB6\u90FD\u8981\u7528 ",(0,i.jsx)(t.code,{children:"sys.exit"}),"\u3002"]}),"\n",(0,i.jsx)(o.A,{variant:"pythonExit",step:1}),"\n",(0,i.jsx)(t.h2,{id:"\u6355\u83B7-systemexit-\u7684\u95EE\u9898",children:"\u6355\u83B7 SystemExit \u7684\u95EE\u9898"}),"\n",(0,i.jsxs)(t.p,{children:["\u597D\uFF0C\u90A3\u6211\u4EEC\u8BF4\u524D\u4E09\u8005\u7684\u539F\u7406\uFF0C\u90FD\u662F raise \u4E86\u4E00\u4E2A ",(0,i.jsx)(t.code,{children:"SystemExit"})," exception\u3002\u4E5F\u5C31\u662F\u8BF4\u524D\u4E09\u8005\u90FD\u4F1A\u88AB\u8FD9\u4E2A try\uFF0Cexcept \u7ED9 catch \u5230\u3002\u6211\u4EEC\u770B\u5DE6\u8FB9\u7684\u4EE3\u7801\u3002\u6211\u4EEC ",(0,i.jsx)(t.code,{children:"quit"})," \u4E4B\u540E\u5462\uFF0Ccatch \u4E86\u4E00\u4E2A ",(0,i.jsx)(t.code,{children:"SystemExit"}),"\uFF0C\u7136\u540E\u5728\u8FD9\u4E2A exception \u91CC\u5462\uFF0C\u6211\u4EEC\u5C31 print \u4E00\u4E2A\u4E1C\u897F\uFF0C\u6211\u4EEC\u8FD0\u884C\u4E00\u4E0B\u8FD9\u6BB5\u4EE3\u7801\u3002\u5927\u5BB6\u53EF\u4EE5\u770B\u5230 ",(0,i.jsx)(t.code,{children:"quit"})," \u5E76\u6CA1\u6709\u8D77\u5230\u5B83\u672C\u8EAB\u5E94\u8BE5\u8D77\u7684\u4F5C\u7528\uFF0C\u5C31\u662F\u9000\u51FA\u7A0B\u5E8F\u3002\u6211\u4EEC\u7684\u7B2C 12 \u884C\u7684 print\uFF0C\u4F9D\u7136\u6253\u5370\u51FA\u6765\u4E86\u3002"]}),"\n",(0,i.jsx)(o.A,{variant:"pythonExit",step:2}),"\n",(0,i.jsx)(t.p,{children:"\u90A3\u4E48\u8FD9\u79CD\u884C\u4E3A\u672C\u8EAB\u5462\uFF0C\u53EF\u4EE5\u8BF4\u662F\u6709\u597D\u6709\u574F\u3002\u597D\u7684\u5730\u65B9\u5462\uFF0C\u662F Python \u5141\u8BB8\u4F60\u66F4\u7075\u6D3B\u7684\u5904\u7406\u9000\u51FA\u8FD9\u4EF6\u4E8B\u60C5\u3002\u90A3\u574F\u7684\u662F\u5462\uFF0C\u5F53\u4F60\u4EE5\u4E3A\u4F60\u9000\u51FA\u4E86\u7684\u65F6\u5019\uFF0C\u5176\u5B9E\u8FD9\u4E2A\u7A0B\u5E8F\u5B83\u53EF\u80FD\u6CA1\u9000\u51FA\u3002"}),"\n",(0,i.jsxs)(t.p,{children:["\u5C24\u5176\u6709\u4E00\u4E9B\u4EBA\u5462\uFF0C\u8FD8\u559C\u6B22\u8FD9\u4E48\u5199\u7A0B\u5E8F\u3002\u50CF\u8FD9\u6837\uFF0C\u5B83\u5199\u4E00\u4E2A\u7A7A\u7684 except\u3002\u90A3\u5982\u679C\u4F60\u771F\u7684\u5199\u7A0B\u5E8F\u7684\u8BDD\uFF0C\u6211\u4EEC\u8FD0\u884C\u4E00\u4E0B\uFF0C\u4F60\u4F1A\u53D1\u73B0\u5B83\u4F9D\u7136\u6CA1\u6709\u6B63\u5E38\u7684\u9000\u51FA\uFF0C\u5B83\u8FD8\u662F\u628A\u8FD9\u4E2A ",(0,i.jsx)(t.code,{children:"Yeah!"})," \u7ED9\u6253\u5370\u51FA\u6765\u4E86\u3002"]}),"\n",(0,i.jsx)(o.A,{variant:"pythonExit",step:3}),"\n",(0,i.jsxs)(t.p,{children:["\u5F53\u7136\u4E86\uFF0C\u5982\u679C\u4F60\u7528 PyCharm\uFF0C\u6216\u8005\u4F60\u7528\u4E00\u4E9B VS Code \u7684\u63D2\u4EF6\u7684\u8BDD\uFF0C\u5B83\u8FD9\u5757\u4F1A\u63D0\u9192\u4F60\uFF0C\u4E0D\u80FD\u8FD9\u4E48\u5199\u3002\u5B83\u544A\u8BC9\u4F60\u8981\u5199\u6210\u8FD9\u4E2A\u5F62\u5F0F\uFF0C\u4F60\u8981\u505A\u4E00\u4E2A ",(0,i.jsx)(t.code,{children:"except Exception"}),"\u3002\u8FD9\u662F\u6700\u8D77\u7801\u7684\u3002\u90A3\u5982\u679C\u5199\u6210\u8FD9\u4E2A\u5F62\u5F0F\u7684\u8BDD\uFF0C\u6211\u4EEC\u8DD1\u4E00\u4E0B\uFF0C\u53EF\u4EE5\u770B\u5230\u7B2C 12 \u884C\u5C31\u6CA1\u6709\u6253\u5370\u4E86\u3002\u56E0\u4E3A ",(0,i.jsx)(t.code,{children:"SystemExit"})," \u5E76\u4E0D\u662F ",(0,i.jsx)(t.code,{children:"Exception"})," \u7684\u4E00\u4E2A ",(0,i.jsx)(t.a,{href:"https://docs.python.org/3/library/exceptions.html#exception-hierarchy",children:"derived class"}),"\u3002\u6240\u4EE5\u5927\u5BB6\u4E00\u5B9A\u8981\u8BB0\u4F4F\u554A\uFF0C\u6C38\u8FDC\u4E0D\u8981\u5199\u4E00\u4E2A\u7A7A\u7684 ",(0,i.jsx)(t.code,{children:"except:"}),"\uFF0C\u4F1A\u51FA\u5F88\u591A\u5947\u602A\u7684\u95EE\u9898\u3002"]}),"\n",(0,i.jsx)(o.A,{variant:"pythonExit",step:4}),"\n",(0,i.jsx)(t.h2,{id:"\u76F4\u63A5-raise-systemexit",children:"\u76F4\u63A5 raise SystemExit"}),"\n",(0,i.jsxs)(t.p,{children:["\u597D\uFF0C\u90A3\u6211\u4EEC\u5DF2\u7ECF\u77E5\u9053\uFF0C\u524D\u9762\u4E09\u79CD\u65B9\u6CD5\u7684\u672C\u8D28\u90FD\u662F raise \u4E86\u4E00\u4E2A ",(0,i.jsx)(t.code,{children:"SystemExit"}),"\uFF0C\u5BF9\u4E0D\u5BF9\uFF1F\u90A3\u8FD9\u4E2A\u65F6\u5019\u5462\uFF0C\u6211\u4EEC\u5176\u5B9E\u5C31\u80FD\u60F3\u5230\u4E00\u79CD\u5E76\u4E0D\u662F\u90A3\u4E48\u5E38\u7528\u7684\u4F46\u662F\u8DDF\u4ED6\u4EEC\u4E09\u4E2A\u7B49\u4EF7\u7684\u65B9\u6CD5\uFF0C\u5C31\u662F\u76F4\u63A5 raise \u8FD9\u4E2A exception\uFF0C\u5927\u5BB6\u770B\u7B2C\u4E94\u884C\uFF0C\u6211\u53EF\u4EE5\u76F4\u63A5\u628A\u8FD9\u4E2A exception raise \u51FA\u6765\uFF0C\u5B83\u7684\u6548\u679C\u662F\u4E00\u6837\u7684\u3002\u6211\u8FD0\u884C\u4E86\u4E00\u4E0B\uFF0C\u7ED3\u679C\u8DDF\u4E4B\u524D\u4E00\u6837\u3002\u6240\u4EE5\u4F60\u5F53\u7136\u4E5F\u53EF\u4EE5\u5199\u8FD9\u79CD\u7B49\u4EF7\u5F62\u5F0F\u3002\u53EA\u662F\u8BED\u4E49\u4E0A\u8BF4\uFF0C\u5B83\u5E76\u6CA1\u6709\u53E6\u5916\u4E09\u4E2A\u90A3\u4E48\u660E\u786E\u3002"]}),"\n",(0,i.jsx)(o.A,{variant:"pythonExit",step:5}),"\n",(0,i.jsx)(t.h2,{id:"os_exit-\u7684\u7CFB\u7EDF\u8C03\u7528",children:"os._exit \u7684\u7CFB\u7EDF\u8C03\u7528"}),"\n",(0,i.jsxs)(t.p,{children:["\u597D\uFF0C\u90A3\u8BF4\u5230\u8FD9\u513F\uFF0C\u4F60\u80AF\u5B9A\u5DF2\u7ECF\u80FD\u611F\u53D7\u5230\u6700\u540E\u4E00\u4E2A ",(0,i.jsx)(t.code,{children:"os._exit"}),"\uFF0C\u8DDF\u5176\u4ED6\u4E09\u4E2A\u4E0D\u4E00\u6837\u4E86\u3002\u5426\u5219\u6211\u4EEC\u5C31\u653E\u5230\u4E00\u8D77\u8BF4\u4E86\uFF0C\u5BF9\u5427\uFF1F\u90A3\u8FD9\u4E2A ",(0,i.jsx)(t.code,{children:"os._exit"}),"\uFF0C\u5B83\u662F\u76F4\u63A5\u505A\u4E86\u4E00\u4E2A\u5185\u6838\u8C03\u7528\uFF0C\u505A\u4E86\u4E00\u4E2A ",(0,i.jsx)(n,{tip:"\u64CD\u4F5C\u7CFB\u7EDF\u5185\u6838\u63D0\u4F9B\u7ED9\u7A0B\u5E8F\u7684\u63A5\u53E3\uFF0C\u7A0B\u5E8F\u901A\u8FC7\u5B83\u8BF7\u6C42\u5185\u6838\u66FF\u81EA\u5DF1\u505A\u4E8B\uFF0C\u6BD4\u5982\u7ED3\u675F\u8FDB\u7A0B",children:"system call"}),"\u3002\u5B83\u5728\u4E0D\u540C\u7684\u64CD\u4F5C\u7CFB\u7EDF\u4E0B\u80CC\u540E\u539F\u7406\u662F\u4E0D\u540C\u7684\uFF0C\u6BD5\u7ADF system call \u4E0D\u4E00\u6837\u561B\u3002\u4F46\u662F\u5728\u6240\u6709\u7684\u7CFB\u7EDF\u4E0B\uFF0C\u5B83\u90FD\u4F1A\u4E0D\u7BA1\u4E09\u4E03\u4E8C\u5341\u4E00\uFF0C\u76F4\u63A5\u9000\u51FA\u4F60\u7684\u7A0B\u5E8F\u3002"]}),"\n",(0,i.jsxs)(t.p,{children:["\u6211\u4EEC\u53EF\u4EE5\u7B80\u5355\u770B\u4E00\u4E0B\uFF0C\u5C31\u662F\u5728\u8FD9\u4E2A ",(0,i.jsx)(t.code,{children:"os"})," module \u91CC\u9762\uFF0C\u5982\u679C posix \u5728\u7684\u8BDD\uFF0C\u5B83\u4F1A\u76F4\u63A5\u5728 posix \u91CC\u9762\uFF0Cimport \u4E0B\u5212\u7EBF ",(0,i.jsx)(t.code,{children:"_exit"}),"\u3002\u7136\u540E\u8FD9\u4E2A\u4E0B\u5212\u7EBF ",(0,i.jsx)(t.code,{children:"_exit"})," \u5462\uFF0C\u5C31\u662F\u4E00\u4E2A\u505A\u4E86\u4E00\u4E2A system call \u7684\u51FD\u6570\u3002"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",metastring:'title="Lib/os.py" showLineNumbers=52 {57}',children:"if 'posix' in _names:\n    name = 'posix'\n    linesep = '\\n'\n    from posix import *\n    try:\n        from posix import _exit\n        __all__.append('_exit')\n    except ImportError:\n        pass\n    import posixpath as path\n"})}),"\n",(0,i.jsxs)(t.p,{children:["\u597D\uFF0C\u6211\u4EEC\u770B\u5982\u679C\u76F4\u63A5\u8FD0\u884C\u8FD9\u6BB5\u4EE3\u7801\u7684\u8BDD\uFF0C\u4F1A\u53D1\u751F\u4EC0\u4E48\uFF1F\u6211\u4EEC\u770B\u5B83\u62A5\u9519\u4E86\uFF0C\u5BF9\u4E0D\u5BF9\uFF1F\u5B83\u8BF4\u8FD9\u4E2A ",(0,i.jsx)(t.code,{children:"_exit"})," \u9700\u8981\u4E00\u4E2A status argument\u3002\u8FD9\u662F\u4EC0\u4E48\u610F\u601D\u5462\uFF1F\u5C31\u662F\u64CD\u4F5C\u7CFB\u7EDF\u554A\uFF0C\u9700\u8981\u6BCF\u4E00\u4E2A\u8FDB\u7A0B\u5728\u7ED3\u675F\u7684\u65F6\u5019\u5411\u64CD\u4F5C\u7CFB\u7EDF\u62A5\u544A\u4E00\u4E0B\u81EA\u5DF1\u7ED3\u675F\u7684\u60C5\u51B5\uFF0C\u662F\u5426\u662F\u6B63\u5E38\u7684\u7ED3\u675F\u4E86\uFF0C\u8FD9\u4E2A\u5C31\u662F\u9000\u51FA\u65F6\u5019\u8FD9\u4E2A\u72B6\u6001\u7801\u3002\u4E00\u822C\u6765\u8BF4\u5462\uFF0C\u7528 0 \u4EE3\u8868\u4E00\u5207\u6B63\u5E38\uFF0C\u7528\u6240\u6709\u7684\u975E 0 \u6570\u4EE3\u8868\u662F\u5F02\u5E38\u9000\u51FA\uFF0C\u7136\u540E\u7528\u4E0D\u540C\u7684\u503C\u4EE3\u8868\u4E0D\u540C\u7684\u5F02\u5E38\u3002"]}),"\n",(0,i.jsx)(o.A,{variant:"pythonExit",step:6}),"\n",(0,i.jsxs)(t.p,{children:["\u90A3\u6709\u4EBA\u53EF\u80FD\u95EE\uFF0C\u4E3A\u4EC0\u4E48\u4E4B\u524D\u90A3\u4E9B\u51FD\u6570\u6CA1\u6709\u72B6\u6001\u7801\u6CA1\u4E8B\uFF1F\u6211\u4EEC\u8BF4\u8FC7\u90A3\u4E9B\u51FD\u6570\u662F Python \u7684\u4E00\u4E2A\u673A\u5236\uFF0C\u5BF9\u5427\uFF1F\u5F53\u4F60\u4E0D\u7ED9\u5B83\u72B6\u6001\u7801\u7684\u65F6\u5019\uFF0C\u5B83\u5C31\u9ED8\u8BA4\u662F 0\uFF0C\u6B63\u5E38\u9000\u51FA\u3002\u5F53\u7136\u5B9E\u9645\u4E0A\u4F60\u4E5F\u53EF\u4EE5\u7ED9\u90A3\u4E9B\u51FD\u6570\u72B6\u6001\u7801\u3002\u90A3\u5BF9\u4E8E ",(0,i.jsx)(t.code,{children:"os._exit"})," \u6765\u8BF4\uFF0C\u7531\u4E8E\u5B83\u76F4\u63A5\u5C31\u662F\u4E00\u4E2A system call \u7684 interface\uFF0C\u6240\u4EE5\u4F60\u5FC5\u987B\u8981\u7ED9\u5B83\u4E00\u4E2A\u72B6\u6001\u7801\u3002\u90A3\u4E00\u822C\u6765\u8BF4\uFF0C\u5982\u679C\u6211\u4EEC\u8BA4\u4E3A\u8FD9\u662F\u4E00\u4E2A\u6B63\u5E38\u7684\u9000\u51FA\u7684\u8BDD\uFF0C\u6211\u4EEC\u5C31\u7ED9\u4E00\u4E2A 0\u3002\u8FD9\u4E2A\u7A0B\u5E8F\u957F\u6210\u8FD9\u4E2A\u6837\u5B50\u3002\u6211\u4EEC\u518D\u6765\u8FD0\u884C\u4E00\u4E0B\uFF0C\u53EF\u4EE5\u770B\u5230\u5B83\u5C31\u6B63\u5E38\u9000\u51FA\u4E86\u3002"]}),"\n",(0,i.jsxs)(t.p,{children:["\u90A3\u5728\u4E4B\u524D\u6211\u4EEC\u7528\u90A3\u4E09\u4E2A\u51FD\u6570\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u8BF4\u6211\u4EEC\u53EF\u4EE5 try/except\uFF0C\u7136\u540E\u62FF\u5230\u8FD9\u4E2A ",(0,i.jsx)(t.code,{children:"SystemExit"}),"\uFF0C\u901A\u8FC7\u5904\u7406\u8FD9\u4E2A exception \u8BA9\u5B83\u4E0D\u9000\u51FA\u3002\u6211\u4EEC\u8BD5\u4E00\u4E0B\u5728 ",(0,i.jsx)(t.code,{children:"os._exit"})," \u884C\u4E0D\u884C\uFF1F\u6211\u4EEC\u628A\u7A0B\u5E8F\u5199\u6210\u8FD9\u4E2A\u6837\u5B50\uFF0C\u7136\u540E\u518D\u8FD0\u884C\u4E00\u4E0B\uFF0C\u53EF\u4EE5\u770B\u5230\u5B83\u4F9D\u7136\u65E0\u60C5\u7684\u9000\u51FA\u4E86\uFF0C\u7B2C\u516B\u884C\u5E76\u6CA1\u6709\u88AB\u6253\u5370\u51FA\u6765\u3002\u8FD9\u4E2A\u662F ",(0,i.jsx)(t.code,{children:"os._exit"})," \u7684\u7279\u70B9\u3002\u5B83\u9000\u51FA\u7684\u65F6\u5019\u662F\u4E0D\u7BA1\u4EFB\u4F55\u5176\u4ED6\u4E71\u4E03\u516B\u7CDF\u7684\u4E1C\u897F\u7684\uFF0C\u5B83\u5C31\u76F4\u63A5\u9000\u6389\u4E86\u3002"]}),"\n",(0,i.jsx)(o.A,{variant:"pythonExit",step:7}),"\n",(0,i.jsxs)(t.p,{children:["\u90A3\u540C\u6837\u7684\uFF0C\u8DDF raise \u4E00\u4E2A ",(0,i.jsx)(t.code,{children:"SystemExit"})," \u6BD4\uFF0C\u5B83\u4E5F\u662F\u6709\u597D\u6709\u574F\u3002\u597D\u5904\u662F\u4F60\u53EF\u4EE5\u4FDD\u8BC1\u5B83\u5F53\u4E0B\u7ACB\u523B\u9A6C\u4E0A\u9000\u51FA\u3002\u574F\u5904\u5462\u5C31\u662F\u4F60\u53EF\u80FD\u672C\u6765\u5199\u4E86\u4E00\u4E9B\u9000\u51FA\u65F6\u5019\u8FD0\u884C\u7684\u4E00\u4E9B hook\uFF0C\u90A3\u4E9B\u4EE3\u7801\u5C31\u90FD\u8FD0\u884C\u4E0D\u4E86\u4E86\u3002\u90A3\u4E00\u822C\u6765\u8BF4\u5728\u4F60\u7684\u4E3B\u8FDB\u7A0B\u662F\u4E0D\u592A\u63A8\u8350\u4F7F\u7528\u8FD9\u79CD\u9000\u51FA\u65B9\u5F0F\u3002"]}),"\n",(0,i.jsx)(t.h2,{id:"\u8FDB\u7A0B\u7684\u9000\u51FA\u72B6\u6001\u7801",children:"\u8FDB\u7A0B\u7684\u9000\u51FA\u72B6\u6001\u7801"}),"\n",(0,i.jsxs)(t.p,{children:["\u597D\uFF0C\u90A3\u6211\u4EEC\u65E2\u7136\u521A\u624D\u5DF2\u7ECF\u63D0\u5230\u4E86\u8FDB\u7A0B\u7ED3\u675F\u65F6\u5019\u7684\u72B6\u6001\u7801\uFF0C\u6211\u4EEC\u5C31\u770B\u4E00\u4E0B\u8FD9\u4E2A\u72B6\u6001\u7801\u3002\u90A3\u5728 Linux \u5305\u62EC Mac \u91CC\u5462\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 ",(0,i.jsx)(t.code,{children:"echo $?"})," \u6765\u62FF\u5230\u4E0A\u4E00\u4E2A\u8FDB\u7A0B\u7ED3\u675F\u65F6\u5019\u7684\u72B6\u6001\u7801\u3002\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\u5B83\u9000\u51FA\u65F6\u5019\u7684\u72B6\u6001\u7801\u662F 0\u3002\u6211\u4EEC\u628A\u7A0B\u5E8F\u6539\u6210 ",(0,i.jsx)(t.code,{children:"os._exit(1)"}),"\u3002\u7136\u540E\u8FD0\u884C\u4E00\u4E0B\u7A0B\u5E8F\uFF0C\u6211\u4EEC\u518D\u5C1D\u8BD5\u62FF\u4E00\u4E0B\u8FD9\u4E2A\u72B6\u6001\u7801\uFF0C\u53EF\u4EE5\u770B\u5230\u8FD9\u4E2A\u72B6\u6001\u7801\u5C31\u662F 1 \u4E86\u3002"]}),"\n",(0,i.jsx)(o.A,{variant:"pythonExit",step:8}),"\n",(0,i.jsxs)(t.p,{children:["\u90A3\u76F8\u4F3C\u7684\u4E0D\u7BA1\u662F ",(0,i.jsx)(t.code,{children:"quit"}),"\u3001",(0,i.jsx)(t.code,{children:"exit"}),"\uFF0C\u8FD8\u662F\u6211\u66F4\u63A8\u8350\u5927\u5BB6\u4F7F\u7528\u7684 ",(0,i.jsx)(t.code,{children:"sys.exit"}),"\uFF0C\u6211\u4EEC\u90FD\u53EF\u4EE5\u4F20\u8FDB\u53BB\u72B6\u6001\u7801\u3002\u6211\u4EEC\u628A\u8FD9\u4E2A\u7A0B\u5E8F\u8FD0\u884C\u4E00\u4E0B\uFF0C\u7136\u540E\u6211\u4EEC\u62FF\u4E00\u4E0B\u8FD9\u4E2A\u8FDB\u7A0B\u7ED3\u675F\u65F6\u5019\u7684\u72B6\u6001\u7801\uFF0C\u53EF\u4EE5\u770B\u5230\u72B6\u6001\u7801\u662F 0\u3002"]}),"\n",(0,i.jsx)(o.A,{variant:"pythonExit",step:9}),"\n",(0,i.jsxs)(t.p,{children:["\u6211\u4EEC\u628A ",(0,i.jsx)(t.code,{children:"sys.exit"})," \u91CC\u9762\u53D8\u6210 1\uFF0C\u53EF\u4EE5\u770B\u5230\u5B83\u7ED3\u675F\u7684\u72B6\u6001\u7801\u5C31\u662F 1 \u4E86\u3002"]}),"\n",(0,i.jsx)(o.A,{variant:"pythonExit",step:10,nav:!0}),"\n",(0,i.jsxs)(t.p,{children:["\u90A3\u4E48\u8FD9\u4E2A\u72B6\u6001\u7801\u5462\u7ECF\u5E38\u88AB\u62FF\u6765\u5224\u65AD\uFF0C\u6211\u81EA\u5DF1\u65B0\u5EFA\u7684\u8FD9\u4E2A\u8FDB\u7A0B\u6709\u6CA1\u6709\u6B63\u786E\u7684\u8FD0\u884C\u9000\u51FA\u3002\u6240\u4EE5\u5927\u5BB6\u4E0D\u8BBA\u662F\u5728\u7528 ",(0,i.jsx)(t.code,{children:"sys.exit"}),"\uFF0C\u6216\u8005\u662F\u7528 ",(0,i.jsx)(t.code,{children:"os._exit"})," \u7684\u65F6\u5019\uFF0C\u90FD\u5E94\u8BE5\u8003\u8651\u6E05\u695A\uFF0C\u6211\u8FD9\u4E2A\u72B6\u6001\u7801\u5E94\u8BE5\u7ED9\u4EC0\u4E48\u3002\u662F\u6B63\u5E38\u9000\u51FA\u7684\u8BDD\u5C31\u8981\u7ED9 0\uFF0C\u662F\u975E\u6B63\u5E38\u9000\u51FA\u7684\u8BDD\u4E00\u822C\u5C31\u7ED9\u4E00\u4E2A\u975E 0 \u7684\u6570\u3002\u90A3\u4E48\u5F88\u5E38\u89C1\u7684\u662F\u7528 1 \u6765\u8868\u793A\u6709\u9519\u8BEF\u3002"]}),"\n",(0,i.jsx)(t.h2,{id:"interactive-shell-\u7684-eof-\u9000\u51FA",children:"interactive shell \u7684 EOF \u9000\u51FA"}),"\n",(0,i.jsxs)(t.p,{children:["\u5F53\u7136\u9664\u4E86\u6211\u4EEC\u4E0A\u9762\u8BF4\u5230\u7684\u5F88\u591A\u79CD\u9000\u51FA\u65B9\u6CD5\u4E4B\u5916\uFF0C\u5728 interactive shell \u91CC\u9762\u8FD8\u6709\u4E00\u4E9B\u9000\u51FA\u65B9\u5F0F\uFF0C\u6211\u4EEC\u53EF\u4EE5\u628A\u5B83\u4EEC\u7EDF\u79F0\u4E3A EOF\uFF0C\u5C31\u662F end of file \u7684\u9000\u51FA\u65B9\u5F0F\u3002\u90A3\u8FD9\u4E9B\u9000\u51FA\u65B9\u5F0F\u5462\u53EF\u80FD\u6BD4\u4F60\u6253\u4E00\u4E2A ",(0,i.jsx)(t.code,{children:"exit()"})," \u56DE\u8F66\u8FD8\u8981\u66F4\u5FEB\u4E00\u70B9\u3002\u5728 Unix \u4E0B\u5C31\u662F Linux \u548C Mac\uFF0C\u4F60\u90FD\u53EF\u4EE5\u901A\u8FC7\u6309 Ctrl+D \u7684\u65B9\u5F0F\u9000\u51FA\u3002\u90A3 Python \u5B9E\u9645\u4E0A\u662F\u5728 parse stdin \u7684\u65F6\u5019\u53BB\u5224\u65AD\u8FD9\u4E2A EOF\u3002\u90A3\u5982\u679C\u662F\u5728 Windows \u4E0A\u5462\u4F60\u53EF\u4EE5\u5148\u6309 Ctrl+Z\uFF0C\u7136\u540E\u518D\u6309\u56DE\u8F66\u6765\u9000\u51FA Python \u7684 interactive shell\u3002"]}),"\n",(0,i.jsx)(t.p,{children:"\u90A3\u8FD9\u4E24\u8005\u7684\u539F\u7406\u5462\u5B9E\u9645\u4E0A\u90FD\u662F Python\uFF0C\u5728\u4E13\u95E8\u9488\u5BF9 interactive shell \u8FD9\u4E2A\u90E8\u5206\u505A\u7684 parsing \u7684\u4E00\u4E9B\u5224\u65AD\u3002\u5B83\u4EE3\u7801\u5C42\u7EA7\u6BD4\u8F83\u6DF1\u4E5F\u6BD4\u8F83\u590D\u6742\u554A\uFF0C\u6211\u4EEC\u8FD9\u4E00\u6B21\u5462\u5C31\u4E0D\u8BB2\u4E86\u3002"}),"\n",(0,i.jsx)(t.p,{children:"\u597D\uFF0C\u90A3\u4EE5\u4E0A\u5C31\u662F\u6211\u4EEC\u8FD9\u7BC7\u6587\u7AE0\u7684\u5168\u90E8\u5185\u5BB9\u3002\u5173\u4E8E\u9000\u51FA\u7684\u5404\u79CD\u59FF\u52BF\u4F60\u90FD\u5B66\u4F1A\u4E86\u5417\uFF1F"})]})}function f(e={}){let{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},83573(e,t,n){n.d(t,{A:()=>l});var s=n(96540);let i=(...e)=>e.filter((e,t,n)=>!!e&&""!==e.trim()&&n.indexOf(e)===t).join(" ").trim(),r=e=>{let t=e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase());return t.charAt(0).toUpperCase()+t.slice(1)};var o={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let a=(0,s.forwardRef)(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:a="",children:l,iconNode:c,...d},p)=>(0,s.createElement)("svg",{ref:p,...o,width:t,height:t,stroke:e,strokeWidth:r?24*Number(n)/Number(t):n,className:i("lucide",a),...!l&&!(e=>{for(let t in e)if(t.startsWith("aria-")||"role"===t||"title"===t)return!0;return!1})(d)&&{"aria-hidden":"true"},...d},[...c.map(([e,t])=>(0,s.createElement)(e,t)),...Array.isArray(l)?l:[l]])),l=(e,t)=>{let n=(0,s.forwardRef)(({className:n,...o},l)=>(0,s.createElement)(a,{ref:l,iconNode:t,className:i(`lucide-${r(e).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,n),...o}));return n.displayName=r(e),n}},45773(e,t,n){n.d(t,{A:()=>s});let s=(0,n(83573).A)("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]])},35404(e,t,n){n.d(t,{A:()=>s});let s=(0,n(83573).A)("copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]])},85731(e,t,n){n.d(t,{A:()=>s});let s=(0,n(83573).A)("play",[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]])},67810(e,t,n){n.d(t,{A:()=>r});var s=n(83941),i=n(61022);function r(){let{prism:e}=(0,i.p)(),{colorMode:t}=(0,s.G)(),n=e.theme,r=e.darkTheme||n;return"dark"===t?r:n}},18915(e,t,n){n.d(t,{A:()=>C});var s=n(74848),i=n(96540),r=n(34164),o=n(67810);let a=[{title:"\u642D\u597D\u9879\u76EE\u9AA8\u67B6",body:["\u6838\u5FC3\u4EE3\u7801\u653E\u8FDB `vector/` \u5305\uFF0C\u6D4B\u8BD5\u653E\u8FDB `tests/` \u5305\uFF0C\u4E24\u4E2A\u6587\u4EF6\u5939\u90FD\u6709 `__init__.py`\uFF0C\u6839\u76EE\u5F55\u53EA\u7559\u4E00\u4E2A\u5165\u53E3\u6587\u4EF6\u3002","\u5728\u6839\u76EE\u5F55\u8FD0\u884C `python -m unittest`\uFF0Cunittest \u4F1A\u81EA\u52A8\u627E\u5230 `tests/test_vector.py` \u91CC\u7684 `test_init` \u5E76\u8FD0\u884C\u3002\u70B9\u5DE6\u4FA7\u6587\u4EF6\u6811\u53EF\u4EE5\u770B\u6BCF\u4E2A\u6587\u4EF6\u3002"],file:"tests/test_vector.py",files:{"examply.py":"",".gitignore":`# Python-generated files
__pycache__/
*.py[oc]
build/
dist/
wheels/
*.egg-info

# Virtual environments
.venv
`,"pyproject.toml":`[project]
name = "unittest-example"
version = "0.1.0"
description = "Add your description here"
readme = "README.md"
requires-python = ">=3.12"
dependencies = []
`,"vector/__init__.py":"from .vector import Vector","vector/vector.py":`class Vector:
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
`,"tests/__init__.py":"","tests/test_vector.py":`import unittest
from vector import Vector


class TestVector(unittest.TestCase):
    def test_init(self):
        v = Vector(1, 2)
        self.assertEqual(v.x, 1)
        self.assertEqual(v.y, 2)
`},runs:[{cmd:"python -m unittest",exit:0,output:`.
----------------------------------------------------------------------
Ran 1 test in 0.000s

OK
`}]},{title:"\u628A assertEqual \u7684\u671F\u671B\u503C\u6539\u6210 0",body:["`v.x` \u5176\u5B9E\u662F 1\uFF0C\u8FD9\u4E00\u884C\u5FC5\u7136\u5931\u8D25\u3002`assertEqual` \u5931\u8D25\u65F6\u628A\u4E24\u8FB9\u7684\u503C\u90FD\u544A\u8BC9\u4F60\uFF1A`1 != 0`\u3002"],files:{"tests/test_vector.py":`import unittest
from vector import Vector


class TestVector(unittest.TestCase):
    def test_init(self):
        v = Vector(1, 2)
        self.assertEqual(v.x, 0)
        self.assertEqual(v.y, 2)
`},runs:[{cmd:"python -m unittest",exit:1,output:`F
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
`}]},{title:"\u6362\u6210 assertTrue \u518D\u8BD5\u4E00\u6B21",body:["\u540C\u4E00\u4E2A\u5224\u65AD\u6362\u6210 `assertTrue(v.x == 0)`\uFF0C\u5931\u8D25\u4FE1\u606F\u53EA\u5269 `False is not true`\uFF0C\u770B\u4E0D\u51FA `v.x` \u5230\u5E95\u662F\u51E0\u3002"],files:{"tests/test_vector.py":`import unittest
from vector import Vector


class TestVector(unittest.TestCase):
    def test_init(self):
        v = Vector(1, 2)
        self.assertTrue(v.x == 0)
        self.assertEqual(v.y, 2)
`},runs:[{cmd:"python -m unittest",exit:1,output:`F
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
`}]},{title:"\u7528 assertRaises \u6D4B\u5F02\u5E38",body:["`__init__` \u52A0\u4E0A\u7C7B\u578B\u68C0\u67E5\uFF0C\u4E0D\u662F\u6570\u5C31\u629B `ValueError`\u3002\u6D4B\u8BD5\u91CC\u628A\u4F1A\u629B\u5F02\u5E38\u7684\u8C03\u7528\u653E\u8FDB `with self.assertRaises(ValueError)` \u5757\uFF0C\u671F\u671B\u503C\u4E5F\u6539\u56DE 1\u3002"],file:"vector/vector.py",files:{"vector/vector.py":`class Vector:
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
`,"tests/test_vector.py":`import unittest
from vector import Vector


class TestVector(unittest.TestCase):
    def test_init(self):
        v = Vector(1, 2)
        self.assertEqual(v.x, 1)
        self.assertEqual(v.y, 2)

        with self.assertRaises(ValueError):
            v = Vector("1", "2")
`},runs:[{cmd:"python -m unittest",exit:0,output:`.
----------------------------------------------------------------------
Ran 1 test in 0.000s

OK
`}]},{title:"\u4F20\u5408\u6CD5\u503C\u4F1A\u600E\u6837",body:["\u628A with \u5757\u91CC\u7684\u8C03\u7528\u6362\u6210 `Vector(1.5, 2)`\uFF0C\u4E24\u4E2A\u90FD\u662F\u6570\uFF0C\u5F02\u5E38\u4E0D\u4F1A\u629B\u51FA\uFF0C\u6D4B\u8BD5\u5931\u8D25\uFF1A`ValueError not raised`\u3002"],files:{"tests/test_vector.py":`import unittest
from vector import Vector


class TestVector(unittest.TestCase):
    def test_init(self):
        v = Vector(1, 2)
        self.assertEqual(v.x, 1)
        self.assertEqual(v.y, 2)

        with self.assertRaises(ValueError):
            v = Vector(1.5, 2)
`},runs:[{cmd:"python -m unittest",exit:1,output:`F
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
`}]},{title:"setUp \u4E0E tearDown",body:["\u628A\u4E0A\u4E00\u6B65\u7684\u8C03\u7528\u6539\u56DE\u53BB\uFF0C\u518D\u52A0\u4E0A `setUp` \u548C `tearDown`\u3002\u5B83\u4EEC\u5728\u6BCF\u4E2A\u6D4B\u8BD5\u65B9\u6CD5\u8FD0\u884C\u524D\u540E\u5404\u8C03\u7528\u4E00\u6B21\uFF0C\u8F93\u51FA\u91CC\u51FA\u73B0\u4E00\u5BF9 start / end\u3002"],files:{"tests/test_vector.py":`import unittest
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
`},runs:[{cmd:"python -m unittest",exit:0,output:`start
end
.
----------------------------------------------------------------------
Ran 1 test in 0.001s

OK
`}]},{title:"\u518D\u52A0\u4E00\u4E2A\u6D4B\u8BD5\u65B9\u6CD5",body:["\u591A\u4E86 `test_add` \u4E4B\u540E\uFF0Cstart / end \u5404\u6253\u5370\u4E24\u6B21\u3002\u7B2C\u4E8C\u4E2A start \u7D27\u8DDF\u5728\u4E0A\u4E00\u4E2A\u6D4B\u8BD5\u7684\u70B9\u53F7\u540E\u9762\uFF0C\u662F\u56E0\u4E3A unittest \u628A\u70B9\u53F7\u5199\u5230 stderr \u4E14\u4E0D\u6362\u884C\u3002"],files:{"tests/test_vector.py":`import unittest
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
`},runs:[{cmd:"python -m unittest",exit:0,output:`start
end
.start
end
.
----------------------------------------------------------------------
Ran 2 tests in 0.000s

OK
`}]},{title:"setUpClass \u4E0E tearDownClass",body:["\u628A `setUp` / `tearDown` \u6362\u6210 `setUpClass` / `tearDownClass`\uFF0C\u6253\u5370\u7684\u8FD8\u662F start / end\u3002\u5B83\u4EEC\u5728\u6574\u4E2A\u6D4B\u8BD5\u7C7B\u8FD0\u884C\u524D\u540E\u53EA\u8C03\u7528\u4E00\u6B21\uFF0C\u6240\u4EE5\u4E24\u4E2A\u6D4B\u8BD5\u53EA\u6709\u4E00\u5BF9 start / end\u3002\u5FC5\u987B\u7528 `@classmethod` \u88C5\u9970\uFF0C\u53C2\u6570\u662F `cls`\u3002"],files:{"tests/test_vector.py":`import unittest
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
`},runs:[{cmd:"python -m unittest",exit:0,output:`start
..end

----------------------------------------------------------------------
Ran 2 tests in 0.001s

OK
`}]},{title:"\u7528 skipIf \u8DF3\u8FC7\u6D4B\u8BD5",body:["\u5148\u628A `setUp` / `tearDown` \u6362\u56DE\u6765\uFF0C\u518D\u7ED9 `test_add` \u52A0\u4E24\u4E2A `skipIf`\u3002\u7B2C\u4E00\u4E2A\u53C2\u6570\u4E3A\u771F\u65F6\u8DF3\u8FC7\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u8DF3\u8FC7\u539F\u56E0\u3002\u8FD9\u4E24\u4E2A\u6761\u4EF6\u5728 Linux \u52A0 Python 3.12 \u4E0A\u90FD\u4E0D\u6210\u7ACB\uFF0C\u6240\u4EE5\u4E24\u4E2A\u6D4B\u8BD5\u7167\u5E38\u8FD0\u884C\uFF1B\u6362\u5230 Windows \u4E0A `test_add` \u4F1A\u663E\u793A\u6210 s\uFF08skipped\uFF09\u3002"],files:{"tests/test_vector.py":`import sys
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
`},runs:[{cmd:"python -m unittest",exit:0,output:`start
end
.start
end
.
----------------------------------------------------------------------
Ran 2 tests in 0.000s

OK
`}]},{title:"\u53EA\u8FD0\u884C\u6307\u5B9A\u7684\u6D4B\u8BD5",body:["\u6587\u4EF6\u4E0D\u53D8\u3002\u7528\u70B9\u53F7\u8DEF\u5F84\u9010\u7EA7\u7F29\u5C0F\u8303\u56F4\uFF1A\u6A21\u5757 `tests.test_vector` \u2192 \u7C7B `TestVector` \u2192 \u65B9\u6CD5 `test_add`\u3002\u4E24\u6761\u547D\u4EE4\u5404\u8DD1\u4E00\u6B21\uFF0C\u770B Ran \u540E\u9762\u7684\u6570\u91CF\u3002"],file:"tests/test_vector.py",files:{},runs:[{cmd:"python -m unittest tests.test_vector.TestVector.test_add",exit:0,output:`start
end
.
----------------------------------------------------------------------
Ran 1 test in 0.000s

OK
`},{cmd:"python -m unittest tests.test_vector",exit:0,output:`start
end
.start
end
.
----------------------------------------------------------------------
Ran 2 tests in 0.000s

OK
`}]}],l=[{title:"\u6253\u5370 f.__code__",body:["\u5B9A\u4E49\u4E00\u4E2A\u7A7A\u51FD\u6570 `f`\uFF0C\u6253\u5370 `f.__code__`\uFF0C\u62FF\u5230\u7684\u5C31\u662F\u4E00\u4E2A code object\u3002"],file:"main.py",files:{"main.py":`def f():
    pass

print(f.__code__)
`},runs:[{cmd:"python main.py",exit:0,output:`<code object f at 0x728ce6074ab0, file "/home/claude-user/codeobject_example/main.py", line 1>
`}]},{title:"dir \u4E00\u4E0B\u8FD9\u4E2A object",body:["`dir` \u4E00\u4E0B\u8FD9\u4E2A code object\uFF0C\u53EF\u4EE5\u770B\u5230\u5B83\u8EAB\u4E0A\u6240\u6709\u7684 attribute\uFF0C\u548C\u5B98\u65B9\u6587\u6863\u91CC\u5217\u51FA\u6765\u7684\u662F\u4E00\u81F4\u7684\u3002"],file:"main.py",files:{"main.py":`def f():
    pass

print(f.__code__)

d = dir(f.__code__)
print(d)
`},runs:[{cmd:"python main.py",exit:0,output:`<code object f at 0x74d62d2acab0, file "/home/claude-user/codeobject_example/main.py", line 1>
['__class__', '__delattr__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__getstate__', '__gt__', '__hash__', '__init__', '__init_subclass__', '__le__', '__lt__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', '_co_code_adaptive', '_varname_from_oparg', 'co_argcount', 'co_cellvars', 'co_code', 'co_consts', 'co_exceptiontable', 'co_filename', 'co_firstlineno', 'co_flags', 'co_freevars', 'co_kwonlyargcount', 'co_lines', 'co_linetable', 'co_lnotab', 'co_name', 'co_names', 'co_nlocals', 'co_positions', 'co_posonlyargcount', 'co_qualname', 'co_stacksize', 'co_varnames', 'replace']
`}]},{title:"co_code \u4E0E dis",body:["`co_code` \u91CC\u4FDD\u5B58\u7684\u662F\u8FD9\u6BB5\u4EE3\u7801\u771F\u6B63\u7684 bytecode\uFF0C\u6253\u5370\u51FA\u6765\u662F\u4E00\u4E32\u4E8C\u8FDB\u5236\uFF0C\u6211\u4EEC\u4E00\u822C\u4E0D\u76F4\u63A5\u53BB\u8BFB\u5B83\u3002","\u8981\u770B\u6C47\u7F16\u5C31\u7528 `dis` \u8FD9\u4E2A module\uFF0C`dis.dis(f)` \u7ED9\u51FA\u7684\u662F\u4EBA\u7C7B\u53EF\u8BFB\u7684\u7248\u672C\u3002\u672C\u7BC7\u7684\u5B57\u8282\u7801\u90FD\u662F\u5728 Python 3.11 \u4E0B\u5F55\u7684\uFF0C\u4E0D\u540C\u7248\u672C\u4E4B\u95F4\u4F1A\u6709\u5DEE\u522B\u3002"],file:"main.py",files:{"main.py":`import dis

def f():
    pass

code = f.__code__
print(code.co_code)

dis.dis(f)
`},runs:[{cmd:"python main.py",exit:0,output:`b'\\x97\\x00d\\x00S\\x00'
  3           0 RESUME                   0

  4           2 LOAD_CONST               0 (None)
              4 RETURN_VALUE
`}]},{title:"\u540D\u5B57\u3001\u6587\u4EF6\u4E0E\u884C\u53F7\u6620\u5C04",body:["`co_name` \u662F\u8FD9\u6BB5 code \u7684\u540D\u5B57\uFF0C\u4E00\u822C\u5C31\u662F\u51FD\u6570\u540D\uFF1B`co_filename` \u662F\u5B83\u5728\u54EA\u4E2A\u6587\u4EF6\u91CC\u88AB\u5B9A\u4E49\u3002","`co_linetable` \u4FDD\u5B58\u7684\u662F\u6BCF\u4E00\u6761\u5B57\u8282\u7801\u5230\u6E90\u4EE3\u7801\u884C\u53F7\u7684\u5BF9\u5E94\u5173\u7CFB\uFF0C\u538B\u7F29\u6210\u4E86\u4E8C\u8FDB\u5236\uFF0C\u8089\u773C\u8BFB\u4E0D\u51FA\u6765\u3002"],file:"main.py",files:{"main.py":`def f():
    pass

code = f.__code__

print(code.co_name)
print(code.co_filename)
print(code.co_linetable)
`},runs:[{cmd:"python main.py",exit:0,output:`f
/home/claude-user/codeobject_example/main.py
b'\\x80\\x00\\xd8\\x04\\x08\\x80D'
`}]},{title:"co_flags \u4E0E co_stacksize",body:["\u8FD9\u4E24\u4E2A\u90FD\u662F\u865A\u62DF\u673A\u5728\u8FD0\u884C\u65F6\u8981\u7528\u7684\u6570\u636E\u3002`co_stacksize` \u662F\u8FD9\u6BB5\u4EE3\u7801\u9700\u8981\u7684\u6808\u7A7A\u95F4\u6709\u591A\u5927\u3002","`co_flags` \u662F\u4E00\u4E2A bitmap\uFF0C\u7F16\u8BD1\u7684\u65F6\u5019\u6807\u8BB0\u8FD9\u6BB5 code \u6709\u6CA1\u6709 `*args`\u3001`**kwargs`\uFF0C\u662F\u4E0D\u662F\u751F\u6210\u5668\u3001\u662F\u4E0D\u662F\u534F\u7A0B\u3002"],file:"main.py",files:{"main.py":`def f():
    pass

code = f.__code__


print(code.co_flags)
print(code.co_stacksize)
`},runs:[{cmd:"python main.py",exit:0,output:`3
1
`}]},{title:"\u4E09\u4E2A\u53C2\u6570\u8BA1\u6570",body:["\u51FD\u6570\u5199\u6210 `f(a, b=3, *args, **kwargs)`\uFF0C\u8FD9\u662F\u6211\u4EEC\u5E73\u65F6\u6700\u5E38\u7528\u7684\u56DB\u79CD\u53C2\u6570\u5F62\u5F0F\u3002","`co_argcount` \u662F 2\uFF0C\u4E5F\u5C31\u662F `a` \u548C `b`\uFF1B`co_posonlyargcount` \u548C `co_kwonlyargcount` \u90FD\u662F 0\u3002"],file:"main.py",files:{"main.py":`def f(a, b=3, *args, **kwargs):
    pass

code = f.__code__


# number of arguments (not including keyword only arguments, * or ** args)
print(code.co_argcount)

# number of positional only arguments
print(code.co_posonlyargcount)

# number of keyword only arguments
# (not including ** arg)
print(code.co_kwonlyargcount)
`},runs:[{cmd:"python main.py",exit:0,output:`2
0
0
`}]},{title:"\u52A0\u4E0A\u659C\u6760",body:["\u5728\u53C2\u6570\u5217\u8868\u91CC\u52A0\u4E00\u4E2A `/`\uFF0C\u659C\u6760\u4E4B\u524D\u7684\u53C2\u6570\u5FC5\u987B\u7528\u4F4D\u7F6E\u4F20\u8FDB\u6765\uFF0C`co_posonlyargcount` \u53D8\u6210\u4E86 2\u3002","`f(1)` \u548C `f(1, 1)` \u90FD\u5408\u6CD5\uFF0C`f(a = 1)` \u62A5\u9519\uFF1A`a` \u4E0D\u63A5\u53D7\u5173\u952E\u5B57\u4F20\u53C2\u3002"],file:"main.py",files:{"main.py":`def f(a, b=3, /, *args, **kwargs):
    print(a + b)

code = f.__code__


# number of arguments (not including keyword only arguments, * or ** args)
print(code.co_argcount)

# number of positional only arguments
print(code.co_posonlyargcount)

# number of keyword only arguments
# (not including ** arg)
print(code.co_kwonlyargcount)


f(1)
f(1, 1)
f(a = 1)
`},runs:[{cmd:"python main.py",exit:1,output:`2
2
0
4
2
Traceback (most recent call last):
  File "/home/claude-user/codeobject_example/main.py", line 20, in <module>
    f(a = 1)
TypeError: f() missing 1 required positional argument: 'a'
`}]},{title:"\u53BB\u6389\u659C\u6760",body:["\u628A `/` \u62FF\u6389\uFF0C`co_posonlyargcount` \u56DE\u5230 0\uFF0C\u4E09\u4E2A\u8C03\u7528\u5C31\u90FD\u80FD\u8DD1\u901A\u4E86\u3002"],file:"main.py",files:{"main.py":`def f(a, b=3, *args, **kwargs):
    print(a + b)

code = f.__code__


# number of arguments (not including keyword only arguments, * or ** args)
print(code.co_argcount)

# number of positional only arguments
print(code.co_posonlyargcount)

# number of keyword only arguments
# (not including ** arg)
print(code.co_kwonlyargcount)


f(1)
f(1, 1)
f(a = 1)
`},runs:[{cmd:"python main.py",exit:0,output:`2
0
0
4
2
4
`}]},{title:"\u52A0\u4E0A\u661F\u53F7",body:["\u628A\u53C2\u6570\u5217\u8868\u6539\u6210 `a, *, b=3, **kwargs`\uFF0C\u661F\u53F7\u4E4B\u540E\u7684\u53C2\u6570\u53EA\u80FD\u7528\u5173\u952E\u5B57\u4F20\uFF0C`co_kwonlyargcount` \u53D8\u6210\u4E86 1\u3002","`f(1)` \u6B63\u5E38\uFF0C`f(1, 1)` \u62A5\u9519\uFF1A\u8FD9\u4E2A\u51FD\u6570\u53EA\u63A5\u53D7\u4E00\u4E2A\u4F4D\u7F6E\u53C2\u6570\u3002"],file:"main.py",files:{"main.py":`def f(a, *, b=3, **kwargs):
    print(a + b)

code = f.__code__


# number of arguments (not including keyword only arguments, * or ** args)
print(code.co_argcount)

# number of positional only arguments
print(code.co_posonlyargcount)

# number of keyword only arguments
# (not including ** arg)
print(code.co_kwonlyargcount)


f(1)
f(1, 1)
f(a = 1)
`},runs:[{cmd:"python main.py",exit:1,output:`1
0
1
4
Traceback (most recent call last):
  File "/home/claude-user/codeobject_example/main.py", line 19, in <module>
    f(1, 1)
TypeError: f() takes 1 positional argument but 2 were given
`}]},{title:"\u6539\u6210\u5173\u952E\u5B57\u4F20\u53C2",body:["\u628A `f(1, 1)` \u6539\u6210 `f(1, b=1)`\uFF0C`b` \u7528\u5173\u952E\u5B57\u4F20\u8FDB\u53BB\uFF0C\u7A0B\u5E8F\u5C31\u6B63\u5E38\u4E86\u3002"],file:"main.py",files:{"main.py":`def f(a, *, b=3, **kwargs):
    print(a + b)

code = f.__code__


# number of arguments (not including keyword only arguments, * or ** args)
print(code.co_argcount)

# number of positional only arguments
print(code.co_posonlyargcount)

# number of keyword only arguments
# (not including ** arg)
print(code.co_kwonlyargcount)


f(1)
f(1, b=1)
f(a = 1)
`},runs:[{cmd:"python main.py",exit:0,output:`1
0
1
4
2
4
`}]},{title:"\u4E24\u4E2A\u5C40\u90E8\u53D8\u91CF",body:["\u53C2\u6570 `a` \u548C\u53EA\u5728\u51FD\u6570\u91CC\u7528\u5230\u7684 `b` \u90FD\u662F\u5C40\u90E8\u53D8\u91CF\uFF0C`co_nlocals` \u662F 2\uFF0C`co_varnames` \u91CC\u6309\u987A\u5E8F\u653E\u7740\u5B83\u4EEC\u7684\u540D\u5B57\u3002","`co_names`\u3001`co_cellvars`\u3001`co_freevars` \u73B0\u5728\u90FD\u662F\u7A7A\u7684\u3002"],file:"main.py",files:{"main.py":`def f(a):
    b = a
    return b


code = f.__code__

print(f"nlocals: {code.co_nlocals}")

print(f"varnames: {code.co_varnames}")
print(f"names: {code.co_names}")
print(f"cellvars: {code.co_cellvars}")
print(f"freevars: {code.co_freevars}")

print(f"consts: {code.co_consts}")
`},runs:[{cmd:"python main.py",exit:0,output:`nlocals: 2
varnames: ('a', 'b')
names: ()
cellvars: ()
freevars: ()
consts: (None,)
`}]},{title:"\u5B57\u8282\u7801\u91CC\u53EA\u6709\u89D2\u6807",body:["\u628A `dis` \u52A0\u8FDB\u6765\uFF1A\u5B57\u8282\u7801\u662F `LOAD_FAST 0` \u548C `STORE_FAST 1`\uFF0C\u62EC\u53F7\u91CC\u7684\u540D\u5B57\u662F `dis` \u5E2E\u6211\u4EEC\u8865\u4E0A\u53BB\u7684\u3002","0 \u5BF9\u5E94\u7684\u662F `co_varnames` \u7684\u7B2C 0 \u4E2A\u5143\u7D20\uFF0C\u4E5F\u5C31\u662F `a`\u3002"],file:"main.py",files:{"main.py":`import dis

def f(a):
    b = a
    return b


code = f.__code__
dis.dis(f)

print(f"nlocals: {code.co_nlocals}")

print(f"varnames: {code.co_varnames}")
print(f"names: {code.co_names}")
print(f"cellvars: {code.co_cellvars}")
print(f"freevars: {code.co_freevars}")

print(f"consts: {code.co_consts}")
`},runs:[{cmd:"python main.py",exit:0,output:`  3           0 RESUME                   0

  4           2 LOAD_FAST                0 (a)
              4 STORE_FAST               1 (b)

  5           6 LOAD_FAST                1 (b)
              8 RETURN_VALUE
nlocals: 2
varnames: ('a', 'b')
names: ()
cellvars: ()
freevars: ()
consts: (None,)
`}]},{title:"\u5C5E\u6027\u540D\u8FDB\u4E86 co_names",body:["\u628A `b = a` \u6539\u6210 `b = a.attr`\u3002`attr` \u4E0D\u662F\u53D8\u91CF\uFF0C\u5B83\u662F\u4E00\u4E2A\u5C5E\u6027\u540D\uFF0C\u88AB\u653E\u8FDB\u4E86 `co_names`\u3002","\u5BF9\u5E94\u7684\u5B57\u8282\u7801\u662F `LOAD_ATTR 0`\u3002"],file:"main.py",files:{"main.py":`import dis

def f(a):
    b = a.attr
    return b


code = f.__code__
dis.dis(f)

print(f"nlocals: {code.co_nlocals}")

print(f"varnames: {code.co_varnames}")
print(f"names: {code.co_names}")
print(f"cellvars: {code.co_cellvars}")
print(f"freevars: {code.co_freevars}")

print(f"consts: {code.co_consts}")
`},runs:[{cmd:"python main.py",exit:0,output:`  3           0 RESUME                   0

  4           2 LOAD_FAST                0 (a)
              4 LOAD_ATTR                0 (attr)
             14 STORE_FAST               1 (b)

  5          16 LOAD_FAST                1 (b)
             18 RETURN_VALUE
nlocals: 2
varnames: ('a', 'b')
names: ('attr',)
cellvars: ()
freevars: ()
consts: (None,)
`}]},{title:"\u65B9\u6CD5\u540D\u4E5F\u5728 co_names",body:["\u518D\u52A0\u4E00\u884C `b = a.method()`\uFF0C`co_names` \u53D8\u6210\u4E86 `('attr', 'method')`\uFF0C\u5B57\u8282\u7801\u91CC\u662F `LOAD_METHOD 1`\u3002"],file:"main.py",files:{"main.py":`import dis

def f(a):
    b = a.attr
    b = a.method()
    return b


code = f.__code__
dis.dis(f)

print(f"nlocals: {code.co_nlocals}")

print(f"varnames: {code.co_varnames}")
print(f"names: {code.co_names}")
print(f"cellvars: {code.co_cellvars}")
print(f"freevars: {code.co_freevars}")

print(f"consts: {code.co_consts}")
`},runs:[{cmd:"python main.py",exit:0,output:`  3           0 RESUME                   0

  4           2 LOAD_FAST                0 (a)
              4 LOAD_ATTR                0 (attr)
             14 STORE_FAST               1 (b)

  5          16 LOAD_FAST                0 (a)
             18 LOAD_METHOD              1 (method)
             40 PRECALL                  0
             44 CALL                     0
             54 STORE_FAST               1 (b)

  6          56 LOAD_FAST                1 (b)
             58 RETURN_VALUE
nlocals: 2
varnames: ('a', 'b')
names: ('attr', 'method')
cellvars: ()
freevars: ()
consts: (None,)
`}]},{title:"import \u8FDB\u6765\u7684\u540D\u5B57",body:["\u52A0\u4E00\u884C `import math`\uFF0C`math` \u540C\u65F6\u51FA\u73B0\u5728 `co_names` \u548C `co_varnames` \u91CC\u3002","`co_names` \u91CC\u7684\u662F import \u8981\u7528\u5230\u7684\u90A3\u4E2A string\uFF0C`co_varnames` \u91CC\u7684\u662F import \u5B8C\u4E4B\u540E\u88AB\u8D4B\u503C\u7684\u90A3\u4E2A\u53D8\u91CF\u3002"],file:"main.py",files:{"main.py":`import dis

def f(a):
    import math
    b = a.attr
    b = a.method()
    return b


code = f.__code__
dis.dis(f)

print(f"nlocals: {code.co_nlocals}")

print(f"varnames: {code.co_varnames}")
print(f"names: {code.co_names}")
print(f"cellvars: {code.co_cellvars}")
print(f"freevars: {code.co_freevars}")

print(f"consts: {code.co_consts}")
`},runs:[{cmd:"python main.py",exit:0,output:`  3           0 RESUME                   0

  4           2 LOAD_CONST               1 (0)
              4 LOAD_CONST               0 (None)
              6 IMPORT_NAME              0 (math)
              8 STORE_FAST               1 (math)

  5          10 LOAD_FAST                0 (a)
             12 LOAD_ATTR                1 (attr)
             22 STORE_FAST               2 (b)

  6          24 LOAD_FAST                0 (a)
             26 LOAD_METHOD              2 (method)
             48 PRECALL                  0
             52 CALL                     0
             62 STORE_FAST               2 (b)

  7          64 LOAD_FAST                2 (b)
             66 RETURN_VALUE
nlocals: 3
varnames: ('a', 'math', 'b')
names: ('math', 'attr', 'method')
cellvars: ()
freevars: ()
consts: (None, 0)
`}]},{title:"import ... as \u62C6\u5F00\u4E24\u4E2A\u540D\u5B57",body:["\u6539\u6210 `import math as m`\uFF1A`co_names` \u91CC\u8FD8\u662F `math`\uFF0C`co_varnames` \u91CC\u6362\u6210\u4E86 `m`\u3002"],file:"main.py",files:{"main.py":`import dis

def f(a):
    import math as m
    b = a.attr
    b = a.method()
    return b


code = f.__code__
dis.dis(f)

print(f"nlocals: {code.co_nlocals}")

print(f"varnames: {code.co_varnames}")
print(f"names: {code.co_names}")
print(f"cellvars: {code.co_cellvars}")
print(f"freevars: {code.co_freevars}")

print(f"consts: {code.co_consts}")
`},runs:[{cmd:"python main.py",exit:0,output:`  3           0 RESUME                   0

  4           2 LOAD_CONST               1 (0)
              4 LOAD_CONST               0 (None)
              6 IMPORT_NAME              0 (math)
              8 STORE_FAST               1 (m)

  5          10 LOAD_FAST                0 (a)
             12 LOAD_ATTR                1 (attr)
             22 STORE_FAST               2 (b)

  6          24 LOAD_FAST                0 (a)
             26 LOAD_METHOD              2 (method)
             48 PRECALL                  0
             52 CALL                     0
             62 STORE_FAST               2 (b)

  7          64 LOAD_FAST                2 (b)
             66 RETURN_VALUE
nlocals: 3
varnames: ('a', 'm', 'b')
names: ('math', 'attr', 'method')
cellvars: ()
freevars: ()
consts: (None, 0)
`}]},{title:"\u88AB\u5185\u5C42\u51FD\u6570\u7528\u5230\u7684 d",body:["\u6362\u4E00\u4E2A\u4F8B\u5B50\uFF1A`g` \u91CC\u5B9A\u4E49\u4E86\u4E00\u4E2A dictionary `d`\uFF0C`g` \u91CC\u7684\u5C40\u90E8\u51FD\u6570 `f` \u6539\u4E86\u8FD9\u4E2A `d`\uFF0C\u7136\u540E\u628A `f` \u8FD4\u56DE\u3002","\u770B `g` \u7684 code object\uFF0C`d` \u4E0D\u5728 `co_varnames` \u91CC\uFF0C\u800C\u662F\u51FA\u73B0\u5728 `co_cellvars` \u91CC\u3002"],file:"main.py",files:{"main.py":`def g():
    d = {}

    def f():
        d["a"] = 1
    return f


code = g.__code__

print(f"nlocals: {code.co_nlocals}")

print(f"varnames: {code.co_varnames}")
print(f"names: {code.co_names}")
print(f"cellvars: {code.co_cellvars}")
print(f"freevars: {code.co_freevars}")

print(f"consts: {code.co_consts}")
`},runs:[{cmd:"python main.py",exit:0,output:`nlocals: 1
varnames: ('f',)
names: ()
cellvars: ('d',)
freevars: ()
consts: (None, <code object f at 0x7d8a959f81d0, file "/home/claude-user/codeobject_example/main.py", line 4>)
`}]},{title:"\u5185\u5C42\u4E0D\u7528 d \u4F1A\u600E\u6837",body:["\u628A `f` \u91CC\u90A3\u4E00\u884C\u6CE8\u91CA\u6389\uFF0C`d` \u5C31\u9000\u56DE\u6210 `g` \u7684\u666E\u901A\u5C40\u90E8\u53D8\u91CF\uFF1A`co_cellvars` \u7A7A\u4E86\uFF0C`co_varnames` \u91CC\u591A\u4E86 `d`\u3002"],file:"main.py",files:{"main.py":`def g():
    d = {}

    def f():
        # d["a"] = 1
        pass
    return f


code = g.__code__

print(f"nlocals: {code.co_nlocals}")

print(f"varnames: {code.co_varnames}")
print(f"names: {code.co_names}")
print(f"cellvars: {code.co_cellvars}")
print(f"freevars: {code.co_freevars}")

print(f"consts: {code.co_consts}")
`},runs:[{cmd:"python main.py",exit:0,output:`nlocals: 2
varnames: ('d', 'f')
names: ()
cellvars: ()
freevars: ()
consts: (None, <code object f at 0x75070ef34ab0, file "/home/claude-user/codeobject_example/main.py", line 4>)
`}]},{title:"\u6362\u5230 f \u7684\u89D2\u5EA6\u770B",body:["\u628A\u90A3\u4E00\u884C\u653E\u56DE\u6765\uFF0C\u540C\u65F6\u628A `g.__code__` \u6539\u6210 `g().__code__`\u2014\u2014`g` \u8FD4\u56DE\u7684\u5C31\u662F `f`\uFF0C\u6240\u4EE5\u62FF\u5230\u7684\u662F `f` \u7684 code object\u3002","\u540C\u4E00\u4E2A `d`\uFF0C\u5728 `f` \u8FD9\u8FB9\u662F `co_freevars`\u3002"],file:"main.py",files:{"main.py":`def g():
    d = {}

    def f():
        d["a"] = 1
    return f


code = g().__code__

print(f"nlocals: {code.co_nlocals}")

print(f"varnames: {code.co_varnames}")
print(f"names: {code.co_names}")
print(f"cellvars: {code.co_cellvars}")
print(f"freevars: {code.co_freevars}")

print(f"consts: {code.co_consts}")
`},runs:[{cmd:"python main.py",exit:0,output:`nlocals: 0
varnames: ()
names: ()
cellvars: ()
freevars: ('d',)
consts: (None, 1, 'a')
`}]},{title:"\u4E0D\u6D89\u53CA\u95ED\u5305\u65F6\u7528 STORE_FAST",body:["`dis` \u4E00\u4E0B `g`\u3002`f` \u91CC\u6CA1\u7528\u5230 `d` \u7684\u65F6\u5019\uFF0C`d = {}` \u7F16\u8BD1\u51FA\u6765\u662F `STORE_FAST`\uFF0C\u4E5F\u5C31\u662F\u666E\u901A\u5C40\u90E8\u53D8\u91CF\u7684\u5B58\u6CD5\u3002"],file:"main.py",files:{"main.py":`import dis

def g():
    d = {}

    def f():
        # d["a"] = 1
        pass
    return f


code = g().__code__
dis.dis(g)

print(f"nlocals: {code.co_nlocals}")

print(f"varnames: {code.co_varnames}")
print(f"names: {code.co_names}")
print(f"cellvars: {code.co_cellvars}")
print(f"freevars: {code.co_freevars}")

print(f"consts: {code.co_consts}")
`},runs:[{cmd:"python main.py",exit:0,output:`  3           0 RESUME                   0

  4           2 BUILD_MAP                0
              4 STORE_FAST               0 (d)

  6           6 LOAD_CONST               1 (<code object f at 0x741d08534ab0, file "/home/claude-user/codeobject_example/main.py", line 6>)
              8 MAKE_FUNCTION            0
             10 STORE_FAST               1 (f)

  9          12 LOAD_FAST                1 (f)
             14 RETURN_VALUE

Disassembly of <code object f at 0x741d08534ab0, file "/home/claude-user/codeobject_example/main.py", line 6>:
  6           0 RESUME                   0

  8           2 LOAD_CONST               0 (None)
              4 RETURN_VALUE
nlocals: 0
varnames: ()
names: ()
cellvars: ()
freevars: ()
consts: (None,)
`}]},{title:"\u6D89\u53CA\u95ED\u5305\u65F6\u6362\u6210 STORE_DEREF",body:["\u628A `f` \u91CC\u90A3\u4E00\u884C\u653E\u56DE\u6765\uFF0C\u540C\u6837\u4E00\u53E5 `d = {}`\uFF0C\u7F16\u8BD1\u51FA\u6765\u53D8\u6210\u4E86 `STORE_DEREF`\uFF0C\u540E\u9762\u8FD8\u591A\u4E86 `LOAD_CLOSURE`\uFF0C`f` \u5185\u90E8\u8BFB `d` \u7528\u7684\u662F `LOAD_DEREF`\u3002","\u5728\u6211\u4EEC\u770B\u6765\u957F\u5F97\u4E00\u6837\u7684\u51FD\u6570\uFF0C\u7F16\u8BD1\u5668\u8BA4\u51FA\u4E86\u95ED\u5305\uFF0C\u751F\u6210\u7684\u5B57\u8282\u7801\u5C31\u4E0D\u4E00\u6837\u3002"],file:"main.py",files:{"main.py":`import dis

def g():
    d = {}

    def f():
        d["a"] = 1
        pass
    return f


code = g().__code__
dis.dis(g)

print(f"nlocals: {code.co_nlocals}")

print(f"varnames: {code.co_varnames}")
print(f"names: {code.co_names}")
print(f"cellvars: {code.co_cellvars}")
print(f"freevars: {code.co_freevars}")

print(f"consts: {code.co_consts}")
`},runs:[{cmd:"python main.py",exit:0,output:`              0 MAKE_CELL                1 (d)

  3           2 RESUME                   0

  4           4 BUILD_MAP                0
              6 STORE_DEREF              1 (d)

  6           8 LOAD_CLOSURE             1 (d)
             10 BUILD_TUPLE              1
             12 LOAD_CONST               1 (<code object f at 0x7cfb641381d0, file "/home/claude-user/codeobject_example/main.py", line 6>)
             14 MAKE_FUNCTION            8 (closure)
             16 STORE_FAST               0 (f)

  9          18 LOAD_FAST                0 (f)
             20 RETURN_VALUE

Disassembly of <code object f at 0x7cfb641381d0, file "/home/claude-user/codeobject_example/main.py", line 6>:
              0 COPY_FREE_VARS           1

  6           2 RESUME                   0

  7           4 LOAD_CONST               1 (1)
              6 LOAD_DEREF               0 (d)
              8 LOAD_CONST               2 ('a')
             10 STORE_SUBSCR

  8          14 LOAD_CONST               0 (None)
             16 RETURN_VALUE
nlocals: 0
varnames: ()
names: ()
cellvars: ()
freevars: ('d',)
consts: (None, 1, 'a')
`}]},{title:"1 \u548C abcabc \u90FD\u5728 const \u91CC",body:['\u51FD\u6570\u91CC\u5199\u4E86 `a = 1` \u548C `b = "abcabc"`\uFF0C\u8FD9\u4E24\u4E2A\u5E38\u91CF\u503C\u90FD\u88AB\u653E\u8FDB\u4E86 `co_consts`\u3002',"`None` \u662F\u5E38\u9A7B\u5609\u5BBE\uFF0C\u6C38\u8FDC\u90FD\u5728 `co_consts` \u91CC\u3002"],file:"main.py",files:{"main.py":`def f():
    a = 1
    b = "abcabc"
    return b * a


code = f.__code__


print(f"nlocals: {code.co_nlocals}")

print(f"varnames: {code.co_varnames}")
print(f"names: {code.co_names}")
print(f"cellvars: {code.co_cellvars}")
print(f"freevars: {code.co_freevars}")

print(f"consts: {code.co_consts}")
`},runs:[{cmd:"python main.py",exit:0,output:`nlocals: 2
varnames: ('a', 'b')
names: ()
cellvars: ()
freevars: ()
consts: (None, 1, 'abcabc')
`}]}],c=[{title:"\u67E5\u770B\u5F53\u524D frame",body:[],file:"main.py",files:{"main.py":`import inspect
from objprint import op

def f():
    frame = inspect.currentframe()
    op(frame, honor_existing=False, depth=1)

f()
`},runs:[{cmd:"python main.py",exit:0,output:`<frame 0x7b49adbea8e0
  .f_back = <frame 0x7b49ad516140 ... >,
  .f_builtins = { ... },
  .f_code = <code 0x7b49ad760580 ... >,
  .f_globals = { ... },
  .f_lasti = 62,
  .f_lineno = 6,
  .f_locals = <FrameLocalsProxy 0x7b49adbde7a0 ... >,
  .f_trace = None,
  .f_trace_lines = True,
  .f_trace_opcodes = False
>
`}]},{title:"\u8BFB\u53D6\u8C03\u7528\u8005\u7684\u51FD\u6570\u540D",body:[],file:"main.py",files:{"main.py":`import inspect

def f():
    frame = inspect.currentframe()
    print(frame.f_back.f_code.co_name)

def g():
    f()

g()
`},runs:[{cmd:"python main.py",exit:0,output:"g\n"}]},{title:"\u8BFB\u53D6\u8C03\u7528\u8005\u7684\u5C40\u90E8\u53D8\u91CF",body:[],file:"main.py",files:{"main.py":`import inspect

def f():
    frame = inspect.currentframe()
    print(frame.f_back.f_locals)

def g():
    a = 3
    b = 4
    f()

g()
`},runs:[{cmd:"python main.py",exit:0,output:"{'a': 3, 'b': 4}\n"}]},{title:"\u8BFB\u53D6\u8C03\u7528\u6587\u4EF6\u4E0E\u884C\u53F7",body:[],file:"main.py",files:{"main.py":`import inspect

def f():
    frame = inspect.currentframe()
    print(frame.f_back.f_code.co_filename)
    print(frame.f_back.f_lineno)


def g():
    # Which line?
    f()

g()
`},runs:[{cmd:"python main.py",exit:0,output:"/private/tmp/blog-frame-demo/main.py\n11\n"}]}];var d=n(17181);let p=[{title:"\u7B2C\u4E00\u6B21 API \u8C03\u7528",body:["\u6211\u4EEC\u5148\u5199\u4E00\u4E2A\u6700\u7B80\u5355\u7684\u811A\u672C\uFF1A\u7528 `Anthropic()` \u521B\u5EFA\u5BA2\u6237\u7AEF\uFF0C\u8C03\u7528 `messages.create()` \u53D1\u9001\u4E00\u53E5\u7CFB\u7EDF\u63D0\u793A\u8BCD\u548C\u4E00\u6761\u7528\u6237\u6D88\u606F\uFF0C\u7136\u540E\u628A\u56DE\u590D\u91CC\u7684 text \u5757\u6253\u5370\u51FA\u6765\u3002\u8FD9\u91CC\u6CA1\u6709\u5DE5\u5177\uFF0C\u4E5F\u6CA1\u6709\u5FAA\u73AF\uFF0C\u6A21\u578B\u53EA\u80FD\u804A\u5929\u3002","\u8FD9\u4E2A\u811A\u672C\u8D70\u7684\u662F DeepSeek \u7684 Anthropic \u517C\u5BB9\u63A5\u53E3\uFF0C\u6240\u4EE5 `base_url` \u548C `model` \u586B\u7684\u662F DeepSeek \u7684\u503C\u3002\u5982\u679C\u6362\u56DE\u5B98\u65B9\u63A5\u53E3\uFF0C\u53EA\u9700\u8981\u5220\u6389 `base_url` \u5E76\u6539\u6A21\u578B\u540D\u3002"],file:"agent.py",files:{"agent.py":d.A.s00["agent.py"]}},{title:"\u52A0\u5165 search_products \u5DE5\u5177",body:["\u8FD9\u4E00\u6B65\u4E00\u6B21\u52A0\u5165\u4E86\u56DB\u6837\u4E1C\u897F\uFF1A\u5047\u5546\u54C1\u5217\u8868\u3001\u5DE5\u5177 schema\u3001\u641C\u7D22\u51FD\u6570\u548C\u5BF9\u8BDD\u5FAA\u73AF\u3002\u7EFF\u5E95\u7684\u884C\u662F\u76F8\u5BF9\u4E0A\u4E00\u6B65\u65B0\u589E\u7684\u5185\u5BB9\uFF0C\u53F3\u4E0A\u89D2\u53EF\u4EE5\u5207\u6362\u5230\u201C\u53EA\u770B\u5F53\u524D\u201D\u67E5\u770B\u5B8C\u6574\u6587\u4EF6\u3002","\u63A5\u4E0B\u6765\u7684\u4E09\u6B65\uFF0C\u6211\u4EEC\u628A\u8FD9\u56DB\u6837\u4E1C\u897F\u62C6\u5F00\u9010\u6BB5\u6765\u770B\u3002"],file:"agent.py",files:{"agent.py":d.A.s01["agent.py"]}},{title:"\u5DE5\u5177 schema \u5C31\u662F\u7ED9\u6A21\u578B\u7684\u8BF4\u660E\u4E66",body:["`description` \u4E0D\u662F\u6CE8\u91CA\uFF0C\u800C\u662F\u7ED9\u6A21\u578B\u7684\u4F7F\u7528\u8BF4\u660E\uFF1A\u4EC0\u4E48\u65F6\u5019\u8BE5\u641C\u3001\u600E\u4E48\u641C\u3001\u987E\u5BA2\u63D0\u5230\u591A\u4E2A\u5546\u54C1\u65F6\u8981\u5206\u5F00\u641C\u3002`input_schema` \u91CC\u6BCF\u4E2A\u5B57\u6BB5\u7684 description \u4E5F\u662F\u540C\u6837\u7684\u9053\u7406\u3002","\u6A21\u578B\u53EA\u80FD\u770B\u5230\u8FD9\u6BB5\u6587\u5B57\uFF0C\u770B\u4E0D\u5230\u51FD\u6570\u4F53\u3002\u56E0\u6B64\u51FD\u6570\u5199\u5F97\u518D\u597D\uFF0C\u5982\u679C description \u6CA1\u6709\u8BF4\u6E05\u695A\uFF0C\u6A21\u578B\u7167\u6837\u4E0D\u4F1A\u7528\uFF0C\u6216\u8005\u7528\u9519\u3002"],file:"agent.py",lines:[[49,72]]},{title:"\u641C\u7D22\u51FD\u6570\u4E0E\u5206\u53D1\u8868",body:["\u641C\u7D22\u51FD\u6570\u53EA\u505A\u5173\u952E\u8BCD\u5339\u914D\uFF0C\u5E76\u8FD4\u56DE JSON \u5B57\u7B26\u4E32\u3002\u8FD9\u662F\u56E0\u4E3A\u5DE5\u5177\u7ED3\u679C\u6700\u7EC8\u8981\u4F5C\u4E3A\u6587\u672C\u653E\u8FDB messages\uFF0C\u6240\u4EE5\u6211\u4EEC\u5728\u8FD9\u91CC\u76F4\u63A5\u5E8F\u5217\u5316\u3002","`TOOL_MAP` \u628A\u5DE5\u5177\u540D\u6620\u5C04\u5230\u5BF9\u5E94\u7684\u51FD\u6570\u3002\u4EE5\u540E\u52A0\u65B0\u5DE5\u5177\u65F6\uFF0C\u53EA\u9700\u8981\u5F80\u8FD9\u5F20\u8868\u91CC\u6DFB\u4E00\u884C\uFF0C\u5FAA\u73AF\u672C\u8EAB\u4E0D\u7528\u6539\u52A8\u3002"],file:"agent.py",lines:[[75,87]]},{title:"\u4E24\u5C42 while",body:["\u5916\u5C42 `while` \u8D1F\u8D23\u7B49\u5F85\u7528\u6237\u8F93\u5165\uFF0C\u9047\u5230\u7A7A\u8F93\u5165\u5C31\u9000\u51FA\u3002\u5185\u5C42 `while` \u624D\u662F agent \u5FAA\u73AF\u7684\u672C\u4F53\uFF1A\u8C03\u7528\u6A21\u578B\uFF0C\u628A assistant \u7684\u56DE\u590D\u6574\u4E2A\u8FFD\u52A0\u8FDB messages\uFF1B\u5982\u679C `stop_reason` \u4E0D\u662F `tool_use` \u5C31\u8DF3\u51FA\uFF1B\u5426\u5219\u6267\u884C\u6BCF\u4E00\u4E2A tool_use \u5757\uFF0C\u628A `tool_result` \u6253\u5305\u6210\u4E00\u6761 user \u6D88\u606F\u8FFD\u52A0\u8FDB\u53BB\uFF0C\u7136\u540E\u518D\u5FAA\u73AF\u4E00\u6B21\u3002","\u6709\u4E00\u4E2A\u7EC6\u8282\u9700\u8981\u6CE8\u610F\uFF1Aassistant \u7684 `response.content` \u8981\u539F\u6837\u8FFD\u52A0\uFF0C\u5305\u62EC\u5176\u4E2D\u7684 tool_use \u5757\uFF1B\u4E0B\u4E00\u6761 user \u6D88\u606F\u91CC\u7684 `tool_use_id` \u5FC5\u987B\u4E0E\u4E4B\u5BF9\u5E94\uFF0C\u6A21\u578B\u624D\u77E5\u9053\u54EA\u4E2A\u7ED3\u679C\u5C5E\u4E8E\u54EA\u6B21\u8C03\u7528\u3002"],file:"agent.py",lines:[[102,139]]}],f=`  1           0 LOAD_BUILD_CLASS
              2 LOAD_CONST               0 (<code object A at 0x73d83039ae40, file "main.py", line 1>)
              4 LOAD_CONST               1 ('A')
              6 MAKE_FUNCTION            0
              8 LOAD_CONST               1 ('A')
             10 CALL_FUNCTION            2
             12 STORE_NAME               0 (A)
             14 LOAD_CONST               2 (None)
             16 RETURN_VALUE

Disassembly of <code object A at 0x73d83039ae40, file "main.py", line 1>:
  1           0 LOAD_NAME                0 (__name__)
              2 STORE_NAME               1 (__module__)
              4 LOAD_CONST               0 ('A')
              6 STORE_NAME               2 (__qualname__)

  2           8 LOAD_CONST               1 ('AAA')
             10 STORE_NAME               3 (name)

  3          12 LOAD_CONST               2 (<code object f at 0x73d83039ad90, file "main.py", line 3>)
             14 LOAD_CONST               3 ('A.f')
             16 MAKE_FUNCTION            0
             18 STORE_NAME               4 (f)
             20 LOAD_CONST               4 (None)
             22 RETURN_VALUE

Disassembly of <code object f at 0x73d83039ad90, file "main.py", line 3>:
  4           0 LOAD_GLOBAL              0 (print)
              2 LOAD_CONST               1 (1)
              4 CALL_FUNCTION            1
              6 POP_TOP
              8 LOAD_CONST               0 (None)
             10 RETURN_VALUE
`,u="\u8FD0\u884C",m="\u81EA\u52A8\u6362\u884C",_="\u53D6\u6D88\u81EA\u52A8\u6362\u884C",y="\u6536\u8D77",h={unittest:{steps:a},codeObject:{steps:l},frame:{steps:c},commerce:{steps:p},iterator:{steps:[{title:"\u904D\u5386\u94FE\u8868",body:[],file:"main.py",files:{"main.py":`class NodeIter:
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
`},runs:[{cmd:"python3.10 main.py",exit:0,output:`node1
node2
node3
`}]},{title:"\u663E\u5F0F\u83B7\u53D6\u94FE\u8868\u7684 iterator",body:[],file:"main.py",files:{"main.py":`class NodeIter:
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
`},runs:[{cmd:"python3.10 main.py",exit:1,output:`Traceback (most recent call last):
  File "/private/tmp/blog-iterator-recording/main.py", line 27, in <module>
    for node in iter(node1):
TypeError: 'NodeIter' object is not iterable
`}]},{title:"\u8DF3\u8FC7\u7B2C\u4E00\u4E2A\u8282\u70B9",body:[],file:"main.py",files:{"main.py":`class NodeIter:
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
`},runs:[{cmd:"python3.10 main.py",exit:1,output:`Traceback (most recent call last):
  File "/private/tmp/blog-iterator-recording/main.py", line 30, in <module>
    for node in it:
TypeError: 'NodeIter' object is not iterable
`}]},{title:"\u4E3A NodeIter \u8865\u4E0A __iter__",body:[],file:"main.py",files:{"main.py":`class NodeIter:
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
`},runs:[{cmd:"python3.10 main.py",exit:0,output:`node2
node3
`}]}]},iteratorLoop:{steps:[{title:"\u904D\u5386\u5217\u8868",body:[],file:"main.py",files:{"main.py":`lst = [1, 3, 5]
for i in lst:
    print(i)
`},runs:[{cmd:"python3.10 main.py",exit:0,output:`1
3
5
`}]},{title:"\u663E\u5F0F\u83B7\u53D6\u5217\u8868\u7684 iterator",body:[],file:"main.py",files:{"main.py":`lst = [1, 3, 5]
it = iter(lst)
for i in it:
    print(i)
`},runs:[{cmd:"python3.10 main.py",exit:0,output:`1
3
5
`}]}]},generator:{steps:[{title:"\u7528 for \u904D\u5386\u751F\u6210\u5668",body:[],file:"main.py",files:{"main.py":`def gen(num):
    while num > 0:
        yield num
        num -= 1
    return

g = gen(5)
for i in g:
    print(i)
`},runs:[{cmd:"python3.10 main.py",exit:0,output:`5
4
3
2
1
`}]},{title:"\u5148\u7528 next \u53D6\u51FA\u7B2C\u4E00\u4E2A\u503C",body:[],file:"main.py",files:{"main.py":`def gen(num):
    while num > 0:
        yield num
        num -= 1
    return

g = gen(5)
first = next(g)

for i in g:
    print(i)
`},runs:[{cmd:"python3.10 main.py",exit:0,output:`4
3
2
1
`}]},{title:"return \u4E00\u4E2A\u503C",body:[],file:"main.py",files:{"main.py":`def gen(num):
    while num > 0:
        yield num
        num -= 1
    return 100

g = gen(5)
first = next(g)

for i in g:
    print(i)
`},runs:[{cmd:"python3.10 main.py",exit:0,output:`4
3
2
1
`}]},{title:"\u7528 send \u6539\u5199 num",body:[],file:"main.py",files:{"main.py":`def gen(num):
    while num > 0:
        tmp = yield num
        if tmp is not None:
            num = tmp
        num -= 1

g = gen(5)
first = next(g) # first = g.send(None)
print(f"first: {first}")

print(f"send: {g.send(10)}")

for i in g:
    print(i)
`},runs:[{cmd:"python3.10 main.py",exit:0,output:`first: 5
send: 9
8
7
6
5
4
3
2
1
`}]},{title:"yield \u4E0D\u8D4B\u503C\u65F6\u7684 send",body:[],file:"main.py",files:{"main.py":`def gen(num):
    while num > 0:
        yield num
        num -= 1

g = gen(5)
first = next(g) # first = g.send(None)
print(f"first: {first}")

print(f"send: {g.send(10)}")

for i in g:
    print(i)
`},runs:[{cmd:"python3.10 main.py",exit:0,output:`first: 5
send: 4
3
2
1
`}]}]},generatorNode:{steps:[{title:"\u7528\u751F\u6210\u5668\u5B9E\u73B0 __iter__",body:[],file:"main.py",files:{"main.py":`class Node:
    def __init__(self, name):
        self.name = name
        self.next = None

    def __iter__(self):
        node = self
        while node is not None:
            yield node
            node = node.next


node1 = Node("node1")
node2 = Node("node2")
node3 = Node("node3")
node1.next = node2
node2.next = node3

for node in node1:
    print(node.name)
`},runs:[{cmd:"python3.10 main.py",exit:0,output:`node1
node2
node3
`}]}]},timerClass:{steps:[{title:"\u7528 Timer \u7C7B\u88C5\u9970\u51FD\u6570",body:[],file:"main.py",files:{"main.py":`import time

class Timer:
    def __init__(self, func):
        self.func = func

    def __call__(self, *args, **kwargs):
        start = time.time()
        ret = self.func(*args, **kwargs)
        print(f"Time: {time.time() - start}")
        return ret

@Timer
def add(a, b):
    return a + b

print(add(2, 3))
`},runs:[{cmd:"python main.py",exit:0,output:`Time: 3.5762786865234375e-06
5
`}]},{title:"\u5199\u51FA\u7B49\u4EF7\u5F62\u5F0F",body:[],file:"main.py",files:{"main.py":`import time

class Timer:
    def __init__(self, func):
        self.func = func

    def __call__(self, *args, **kwargs):
        start = time.time()
        ret = self.func(*args, **kwargs)
        print(f"Time: {time.time() - start}")
        return ret

@Timer
def add(a, b):
    return a + b

# \u{7B49}\u{4EF7}\u{4E8E}
add = Timer(add)

print(add(2, 3))
`}},{title:"\u6253\u5370 add \u7684\u7C7B\u578B",body:[],file:"main.py",files:{"main.py":`import time

class Timer:
    def __init__(self, func):
        self.func = func

    def __call__(self, *args, **kwargs):
        start = time.time()
        ret = self.func(*args, **kwargs)
        print(f"Time: {time.time() - start}")
        return ret

@Timer
def add(a, b):
    return a + b

# \u{7B49}\u{4EF7}\u{4E8E}
# add = Timer(add)

print(type(add))
print(add(2, 3))
`},runs:[{cmd:"python main.py",exit:0,output:`<class '__main__.Timer'>
Time: 2.1457672119140625e-06
5
`}]},{title:"\u7ED9\u88C5\u9970\u5668\u52A0\u4E0A prefix",body:[],file:"main.py",files:{"main.py":`import time

class Timer:
    def __init__(self, func):
        self.func = func

    def __call__(self, *args, **kwargs):
        start = time.time()
        ret = self.func(*args, **kwargs)
        print(f"Time: {time.time() - start}")
        return ret

@Timer(prefix="curr_time: ")
def add(a, b):
    return a + b

# \u{7B49}\u{4EF7}\u{4E8E}
add = Timer(prefix="curr_time: ")(add)

print(add(2, 3))
`}},{title:"\u6539\u5199 Timer \u7684\u7ED3\u6784",body:[],file:"main.py",files:{"main.py":`import time

class Timer:
    def __init__(self, prefix):
        self.prefix = prefix

    def __call__(self, func):
        def wrapper(*args, **kwargs):
            start = time.time()
            ret = self.func(*args, **kwargs)
            print(f"Time: {time.time() - start}")
            return ret
        return wrapper

@Timer(prefix="curr_time: ")
def add(a, b):
    return a + b

# \u{7B49}\u{4EF7}\u{4E8E}
add = Timer(prefix="curr_time: ")(add)

print(add(2, 3))
`}},{title:"\u7528\u4E0A self.prefix",body:[],file:"main.py",files:{"main.py":`import time

class Timer:
    def __init__(self, prefix):
        self.prefix = prefix

    def __call__(self, func):
        def wrapper(*args, **kwargs):
            start = time.time()
            ret = func(*args, **kwargs)
            print(f"{self.prefix}: {time.time() - start}")
            return ret
        return wrapper

@Timer(prefix="curr_time: ")
def add(a, b):
    return a + b

# \u{7B49}\u{4EF7}\u{4E8E}
# add = Timer(prefix="curr_time: ")(add)

print(add(2, 3))
`},runs:[{cmd:"python main.py",exit:0,output:`curr_time: : 2.1457672119140625e-06
5
`}]}]},addStr:{steps:[{title:"\u7ED9\u7C7B\u52A0\u4E0A __str__",body:[],file:"main.py",files:{"main.py":`def add_str(cls):
    def __str__(self):
        return str(self.__dict__)
    cls.__str__ = __str__
    return cls

@add_str
class MyObject:
    def __init__(self, a, b):
        self.a = a
        self.b = b

o = MyObject(1, 2)
print(o)
`},runs:[{cmd:"python main.py",exit:0,output:`{'a': 1, 'b': 2}
`}]},{title:"\u5199\u51FA\u7B49\u4EF7\u5F62\u5F0F",body:[],file:"main.py",files:{"main.py":`def add_str(cls):
    def __str__(self):
        return str(self.__dict__)
    cls.__str__ = __str__
    return cls

@add_str
class MyObject:
    def __init__(self, a, b):
        self.a = a
        self.b = b

# \u{7B49}\u{4EF7}\u{4E8E}
MyObject = add_str(MyObject)

o = MyObject(1, 2)
print(o)
`}},{title:"\u6362\u6210 objprint \u7684 add_objprint",body:[],file:"main.py",files:{"main.py":`from objprint import add_objprint

@add_objprint
class MyObject:
    def __init__(self, a, b):
        self.a = a
        self.b = b

o = MyObject(1, 2)
print(o)
`},runs:[{cmd:"python main.py",exit:0,output:`<MyObject 0x752b2419d400
  .a = 1,
  .b = 2
>
`}]}]},decoratorInClass:{steps:[{title:"\u7528 log_function \u88C5\u9970 fib",body:[],file:"main.py",files:{"main.py":`def log_function(func):
    def wrapper(*args, **kwargs):
        print(f"function start!")
        print(f"args: {args}")
        ret = func(*args, **kwargs)
        print(f"function end!")
        return ret
    return wrapper

@log_function
def fib(n):
    if n <= 1:
        return 0
    return fib(n - 1) + fib(n - 2)

fib(3)
`},runs:[{cmd:"python main.py",exit:0,output:`function start!
args: (3,)
function start!
args: (2,)
function start!
args: (1,)
function end!
function start!
args: (0,)
function end!
function end!
function start!
args: (1,)
function end!
function end!
`}]},{title:"\u628A\u88C5\u9970\u5668\u653E\u8FDB\u7C7B\u91CC",body:[],file:"main.py",lines:[[11,11]],files:{"main.py":`class Decorators:
    def log_function(self, func):
        def wrapper(*args, **kwargs):
            print(f"function start!")
            print(f"args: {args}")
            ret = func(*args, **kwargs)
            print(f"function end!")
            return ret
        return wrapper

d = Decorators()

@d.log_function
def fib(n):
    if n <= 1:
        return 0
    return fib(n - 1) + fib(n - 2)

fib(3)
`},runs:[{cmd:"python main.py",exit:0,output:`function start!
args: (3,)
function start!
args: (2,)
function start!
args: (1,)
function end!
function start!
args: (0,)
function end!
function end!
function start!
args: (1,)
function end!
function end!
`}]},{title:"\u6539\u6210\u7C7B\u65B9\u6CD5",body:[],file:"main.py",lines:[[12,12]],files:{"main.py":`class Decorators:
    @classmethod
    def log_function(cls, func):
        def wrapper(*args, **kwargs):
            print(f"function start!")
            print(f"args: {args}")
            ret = func(*args, **kwargs)
            print(f"function end!")
            return ret
        return wrapper

@Decorators.log_function
def fib(n):
    if n <= 1:
        return 0
    return fib(n - 1) + fib(n - 2)

fib(3)
`},runs:[{cmd:"python main.py",exit:0,output:`function start!
args: (3,)
function start!
args: (2,)
function start!
args: (1,)
function end!
function start!
args: (0,)
function end!
function end!
function start!
args: (1,)
function end!
function end!
`}]},{title:"\u6539\u6210\u9759\u6001\u65B9\u6CD5",body:[],file:"main.py",files:{"main.py":`class Decorators:
    @staticmethod
    def log_function(func):
        def wrapper(*args, **kwargs):
            print(f"function start!")
            print(f"args: {args}")
            ret = func(*args, **kwargs)
            print(f"function end!")
            return ret
        return wrapper

@Decorators.log_function
def fib(n):
    if n <= 1:
        return 0
    return fib(n - 1) + fib(n - 2)

fib(3)
`},runs:[{cmd:"python main.py",exit:0,output:`function start!
args: (3,)
function start!
args: (2,)
function start!
args: (1,)
function end!
function start!
args: (0,)
function end!
function end!
function start!
args: (1,)
function end!
function end!
`}]},{title:"\u5728\u7C7B\u91CC\u7528\u9759\u6001\u65B9\u6CD5\u88C5\u9970 fib",body:[],file:"main.py",files:{"main.py":`class Decorators:
    @staticmethod
    def log_function(func):
        def wrapper(*args, **kwargs):
            print(f"function start!")
            print(f"args: {args}")
            ret = func(*args, **kwargs)
            print(f"function end!")
            return ret
        return wrapper

    @log_function
    def fib(self, n):
        if n <= 1:
            return 0
        return self.fib(n - 1) + self.fib(n - 2)

d = Decorators()
d.fib(3)
`},runs:[{cmd:"python3.9 main.py",exit:1,output:`Traceback (most recent call last):
  File "/home/claude-user/decorator_in_class/main.py", line 1, in <module>
    class Decorators:
  File "/home/claude-user/decorator_in_class/main.py", line 13, in Decorators
    def fib(self, n):
TypeError: 'staticmethod' object is not callable
`}]},{title:"\u5728\u7C7B\u91CC\u7528\u5BF9\u8C61\u65B9\u6CD5\u88C5\u9970 fib",body:[],file:"main.py",files:{"main.py":`class Decorators:
    def log_function(self, func):
        def wrapper(*args, **kwargs):
            print(f"function start!")
            print(f"args: {args}")
            ret = func(*args, **kwargs)
            print(f"function end!")
            return ret
        return wrapper

    @log_function
    def fib(self, n):
        if n <= 1:
            return 0
        return self.fib(n - 1) + self.fib(n - 2)

d = Decorators()
d.fib(3)
`},runs:[{cmd:"python main.py",exit:1,output:`Traceback (most recent call last):
  File "/home/claude-user/decorator_in_class/main.py", line 1, in <module>
    class Decorators:
  File "/home/claude-user/decorator_in_class/main.py", line 11, in Decorators
    @log_function
     ^^^^^^^^^^^^
TypeError: Decorators.log_function() missing 1 required positional argument: 'func'
`}]},{title:"\u4E0D\u52A0\u4EFB\u4F55\u88C5\u9970\u5668",body:[],file:"main.py",files:{"main.py":`class Decorators:
    def log_function(func):
        def wrapper(*args, **kwargs):
            print(f"function start!")
            print(f"args: {args}")
            ret = func(*args, **kwargs)
            print(f"function end!")
            return ret
        return wrapper

    @log_function
    def fib(self, n):
        if n <= 1:
            return 0
        return self.fib(n - 1) + self.fib(n - 2)

d = Decorators()
d.fib(3)
`},runs:[{cmd:"python main.py",exit:0,output:`function start!
args: (<__main__.Decorators object at 0x7fee70b929c0>, 3)
function start!
args: (<__main__.Decorators object at 0x7fee70b929c0>, 2)
function start!
args: (<__main__.Decorators object at 0x7fee70b929c0>, 1)
function end!
function start!
args: (<__main__.Decorators object at 0x7fee70b929c0>, 0)
function end!
function end!
function start!
args: (<__main__.Decorators object at 0x7fee70b929c0>, 1)
function end!
function end!
`}]},{title:"\u5728\u7C7B\u5916\u901A\u8FC7\u5BF9\u8C61\u4F7F\u7528",body:[],file:"main.py",files:{"main.py":`class Decorators:
    def log_function(func):
        def wrapper(*args, **kwargs):
            print(f"function start!")
            print(f"args: {args}")
            ret = func(*args, **kwargs)
            print(f"function end!")
            return ret
        return wrapper

    @log_function
    def fib(self, n):
        if n <= 1:
            return 0
        return self.fib(n - 1) + self.fib(n - 2)

d = Decorators()
# d.fib(3)

@d.log_function
def f():
    pass

f()
`},runs:[{cmd:"python main.py",exit:1,output:`Traceback (most recent call last):
  File "/home/claude-user/decorator_in_class/main.py", line 20, in <module>
    @d.log_function
     ^^^^^^^^^^^^^^
TypeError: Decorators.log_function() takes 1 positional argument but 2 were given
`}]},{title:"\u5728\u7C7B\u5916\u901A\u8FC7\u7C7B\u4F7F\u7528",body:[],file:"main.py",files:{"main.py":`class Decorators:
    def log_function(func):
        def wrapper(*args, **kwargs):
            print(f"function start!")
            print(f"args: {args}")
            ret = func(*args, **kwargs)
            print(f"function end!")
            return ret
        return wrapper

    @log_function
    def fib(self, n):
        if n <= 1:
            return 0
        return self.fib(n - 1) + self.fib(n - 2)

d = Decorators()
# d.fib(3)

@Decorators.log_function
def f():
    pass

f()
`},runs:[{cmd:"python main.py",exit:0,output:`function start!
args: ()
function end!
`}]},{title:"\u5728\u7C7B\u5B9A\u4E49\u6700\u540E\u8F6C\u6210\u9759\u6001\u65B9\u6CD5",body:[],file:"main.py",files:{"main.py":`class Decorators:
    def log_function(func):
        def wrapper(*args, **kwargs):
            print(f"function start!")
            print(f"args: {args}")
            ret = func(*args, **kwargs)
            print(f"function end!")
            return ret
        return wrapper

    @log_function
    def fib(self, n):
        if n <= 1:
            return 0
        return self.fib(n - 1) + self.fib(n - 2)

    log_function = staticmethod(log_function)

d = Decorators()
# d.fib(3)

@Decorators.log_function
def f():
    pass

@d.log_function
def g():
    pass
f()
g()
`},runs:[{cmd:"python main.py",exit:0,output:`function start!
args: ()
function end!
function start!
args: ()
function end!
`}]}]},pythonExit:{steps:[{title:"\u7528 python -S \u8FD0\u884C",body:["\u52A0\u4E0A `-S` \u8FD0\u884C\u65F6\u4E0D\u4F1A import `site` \u8FD9\u4E2A module\uFF0C`quit` \u548C `exit` \u8FD9\u4E24\u4E2A\u540D\u5B57\u5C31\u4E0D\u5B58\u5728\u4E86\uFF0C\u7B2C 4 \u884C\u76F4\u63A5\u62A5 `NameError`\u3002"],file:"main.py",lines:[[4,4]],files:{"main.py":`import sys
import os

quit()
exit()
sys.exit()
os._exit()
`},runs:[{cmd:"python -S main.py",exit:1,output:`Traceback (most recent call last):
  File "/home/claude-user/exit_example/main.py", line 4, in <module>
    quit()
    ^^^^
NameError: name 'quit' is not defined
`}]},{title:"catch \u4F4F SystemExit",body:["`quit()` raise \u7684 `SystemExit` \u88AB `except SystemExit` \u63A5\u4F4F\u4E86\uFF0C\u7A0B\u5E8F\u6CA1\u6709\u9000\u51FA\uFF0C\u7B2C 12 \u884C\u7684 print \u7167\u6837\u6253\u5370\u51FA\u6765\u3002"],file:"main.py",lines:[[12,12]],files:{"main.py":`import sys
import os

try:
    quit()
    exit()
    sys.exit()
    os._exit()
except SystemExit:
    print("Ignore Exit!")

print("Yeah!")
`},runs:[{cmd:"python main.py",exit:0,output:`Ignore Exit!
Yeah!
`}]},{title:"\u7A7A\u7684 except",body:["\u7A7A\u7684 `except:` \u4EC0\u4E48\u5F02\u5E38\u90FD\u63A5\uFF0C`SystemExit` \u4E5F\u4E00\u6837\u88AB\u541E\u6389\uFF0C\u7A0B\u5E8F\u8FD8\u662F\u6CA1\u6709\u9000\u51FA\u3002"],file:"main.py",lines:[[9,9]],files:{"main.py":`import sys
import os

try:
    quit()
    exit()
    sys.exit()
    os._exit()
except:
    pass

print("Yeah!")
`},runs:[{cmd:"python main.py",exit:0,output:`Yeah!
`}]},{title:"except Exception",body:["`SystemExit` \u4E0D\u662F `Exception` \u7684\u5B50\u7C7B\uFF0C`except Exception` \u63A5\u4E0D\u4F4F\u5B83\uFF0C\u7A0B\u5E8F\u6B63\u5E38\u9000\u51FA\uFF0C\u7B2C 12 \u884C\u6CA1\u6709\u6253\u5370\u3002"],file:"main.py",lines:[[9,9]],files:{"main.py":`import sys
import os

try:
    quit()
    exit()
    sys.exit()
    os._exit()
except Exception:
    pass

print("Yeah!")
`},runs:[{cmd:"python main.py",exit:0,output:""}]},{title:"\u76F4\u63A5 raise SystemExit",body:["\u7B2C 5 \u884C\u76F4\u63A5 raise `SystemExit`\uFF0C\u6548\u679C\u548C\u524D\u4E09\u79CD\u5199\u6CD5\u4E00\u6837\uFF0C\u7A0B\u5E8F\u9000\u51FA\uFF0C\u4EC0\u4E48\u90FD\u6CA1\u6709\u6253\u5370\u3002"],file:"main.py",lines:[[5,5]],files:{"main.py":`import sys
import os

try:
    raise SystemExit
    quit()
    exit()
    sys.exit()
    os._exit()
except Exception:
    pass

print("Yeah!")
`},runs:[{cmd:"python main.py",exit:0,output:""}]},{title:"os._exit \u4E0D\u7ED9\u72B6\u6001\u7801",body:["`os._exit` \u662F system call \u7684\u63A5\u53E3\uFF0C\u5FC5\u987B\u7ED9\u4E00\u4E2A status\uFF0C\u4E0D\u7ED9\u5C31\u62A5 `TypeError`\u3002"],file:"main.py",lines:[[3,3]],files:{"main.py":`import os

os._exit()
`},runs:[{cmd:"python main.py",exit:1,output:`Traceback (most recent call last):
  File "/home/claude-user/exit_example/main.py", line 3, in <module>
    os._exit()
TypeError: _exit() missing required argument 'status' (pos 1)
`}]},{title:"try/except \u62E6\u4E0D\u4F4F os._exit",body:["`os._exit(0)` \u5916\u9762\u5305\u4E86 `try/except`\uFF0C\u7A0B\u5E8F\u4F9D\u7136\u76F4\u63A5\u9000\u51FA\uFF0C\u7B2C 8 \u884C\u6CA1\u6709\u6253\u5370\u3002","\u8FD0\u884C\u540E\u7528 `echo $?` \u62FF\u4E0A\u4E00\u4E2A\u8FDB\u7A0B\u7684\u72B6\u6001\u7801\uFF0C\u8FD9\u91CC\u662F 0\u3002"],file:"main.py",lines:[[8,8]],files:{"main.py":`import os

try:
    os._exit(0)
except:
    pass

print("Yeah!")
`},runs:[{cmd:"python main.py; echo $?",exit:0,output:`0
`}]},{title:"os._exit(1) \u7684\u72B6\u6001\u7801",body:["\u6539\u6210 `os._exit(1)`\uFF0C`echo $?` \u62FF\u5230\u7684\u72B6\u6001\u7801\u5C31\u662F 1\u3002"],file:"main.py",lines:[[4,4]],files:{"main.py":`import os

try:
    os._exit(1)
except:
    pass

print("Yeah!")
`},runs:[{cmd:"python main.py; echo $?",exit:0,output:`1
`}]},{title:"sys.exit(0) \u7684\u72B6\u6001\u7801",body:["`sys.exit(0)` \u6B63\u5E38\u9000\u51FA\uFF0C`echo $?` \u62FF\u5230\u7684\u72B6\u6001\u7801\u662F 0\u3002"],file:"main.py",lines:[[3,3]],files:{"main.py":`import sys

sys.exit(0)
`},runs:[{cmd:"python main.py; echo $?",exit:0,output:`0
`}]},{title:"sys.exit(1) \u7684\u72B6\u6001\u7801",body:["\u628A `sys.exit` \u91CC\u9762\u6362\u6210 1\uFF0C\u72B6\u6001\u7801\u5C31\u662F 1\u3002"],file:"main.py",lines:[[3,3]],files:{"main.py":`import sys

sys.exit(1)
`},runs:[{cmd:"python main.py; echo $?",exit:0,output:`1
`}]}]},classDef:{steps:[{title:"\u67E5\u770B class A \u7684\u5B57\u8282\u7801",body:["\u56DB\u884C\u4EE3\u7801\u5B9A\u4E49\u4E86\u4E00\u4E2A class `A`\uFF0C\u7528 `python -m dis` \u628A\u5B83\u7684\u5B57\u8282\u7801\u6253\u5370\u51FA\u6765\uFF0C\u540C\u65F6\u5B58\u8FDB `dis.txt`\uFF0C\u63A5\u4E0B\u6765\u4E00\u6BB5\u4E00\u6BB5\u5730\u770B\u3002"],file:"main.py",files:{"main.py":`class A:
    name = "AAA"
    def f(self):
        print(1)
`,"dis.txt":f},runs:[{cmd:"python -m dis main.py | tee dis.txt",exit:0,output:f}]},{title:"f \u51FD\u6570\u7684 code object",body:["\u6700\u540E\u8FD9\u4E00\u6BB5\u662F\u7B2C 3\u30014 \u884C\u5B9A\u4E49\u7684 `f` \u51FD\u6570\u3002\u5B83\u548C\u5728 class \u5916\u9762\u5B9A\u4E49\u7684\u51FD\u6570\u6CA1\u6709\u533A\u522B\uFF0C\u4E5F\u662F\u4E00\u4E2A code object\u3002"],file:"dis.txt",lines:[[27,33]]},{title:"__module__ \u4E0E __qualname__",body:['code object `A` \u7684 0\u30012\u30014\u30016 \u76F8\u5F53\u4E8E `__module__ = __name__` \u548C `__qualname__ = "A"` \u8FD9\u4E24\u53E5\u3002'],file:"dis.txt",lines:[[12,15]]},{title:'name = "AAA"',body:['8 \u548C 10 \u5BF9\u5E94\u7B2C 2 \u884C\u7684 `name = "AAA"`\u3002'],file:"dis.txt",lines:[[17,18]]},{title:"\u505A\u51FA A.f \u51FD\u6570",body:["12 \u5230 22 \u7528 `f` \u7684 code object \u505A\u4E86\u4E00\u4E2A\u540D\u5B57\u53EB `A.f` \u7684\u51FD\u6570\uFF0C\u4FDD\u5B58\u5728 `f` \u8FD9\u4E2A\u53D8\u91CF\u91CC\u3002"],file:"dis.txt",lines:[[20,25]]},{title:"LOAD_BUILD_CLASS",body:["\u56DE\u5230\u6700\u5916\u5C42\uFF0C`LOAD_BUILD_CLASS` \u628A builtins \u91CC\u7684 `__build_class__` \u51FD\u6570\u538B\u5230\u6808\u91CC\u3002"],file:"dis.txt",lines:[[1,1]]},{title:"\u7528 code object A \u505A\u51FD\u6570",body:["2\u30014\u30016 \u7528 code object `A` \u505A\u4E86\u4E00\u4E2A\u540D\u5B57\u53EB `A` \u7684\u51FD\u6570\uFF0C\u4E5F\u5C31\u662F\u6E90\u4EE3\u7801\u7B2C 2\u30013\u30014 \u884C\u7684\u90A3\u4E2A\u5C0F\u51FD\u6570\u3002"],file:"dis.txt",lines:[[2,4]]},{title:"\u8C03\u7528 __build_class__",body:["`CALL_FUNCTION 2` \u8C03\u7528 `__build_class__`\uFF0C\u4F20\u8FDB\u53BB\u521A\u624D\u90A3\u4E2A\u51FD\u6570\u548C\u5B57\u7B26\u4E32 `'A'`\uFF0C\u8FD4\u56DE\u503C\u7528 `STORE_NAME` \u4FDD\u5B58\u5230 `A` \u8FD9\u4E2A\u53D8\u91CF\u91CC\u3002"],file:"dis.txt",lines:[[5,7]]},{title:"\u6253\u5370 A \u7684 type",body:["\u6253\u5370\u7684\u662F class `A` \u672C\u8EAB\u7684 type\uFF0C\u800C\u4E0D\u662F\u5B83\u4EA7\u751F\u7684 object \u7684 type\uFF0C\u7ED3\u679C\u662F `type`\u3002"],file:"main.py",lines:[[5,5]],files:{"main.py":`class A:
    name = "AAA"
    def f(self):
        print(1)
print(type(A))
`,"dis.txt":null},runs:[{cmd:"python main.py",exit:0,output:`<class 'type'>
`}]},{title:"\u6253\u5370 A.__dict__",body:["`A.__dict__` \u91CC\u6709 `__module__`\u3001`name`\uFF0C\u8FD8\u6709\u540D\u5B57\u53EB `A.f` \u7684\u51FD\u6570 `f`\u3002"],file:"main.py",lines:[[6,6]],files:{"main.py":`class A:
    name = "AAA"
    def f(self):
        print(1)

print(A.__dict__)
`},runs:[{cmd:"python main.py",exit:0,output:`{'__module__': '__main__', 'name': 'AAA', 'f': <function A.f at 0x79c83438bb50>, '__dict__': <attribute '__dict__' of 'A' objects>, '__weakref__': <attribute '__weakref__' of 'A' objects>, '__doc__': None}
`}]},{title:"\u7528 type \u52A8\u6001\u5EFA\u7ACB\u7C7B",body:["\u7C7B\u7684\u540D\u5B57\u3001\u7236\u7C7B\u548C dictionary \u4E09\u6837\u4E1C\u897F\u4EA4\u7ED9 `type`\uFF0C\u5C31\u52A8\u6001\u5730\u5EFA\u7ACB\u4E86\u4E00\u4E2A\u548C\u524D\u9762\u7B49\u4EF7\u7684\u7C7B `A`\uFF0C\u6700\u540E\u8FD8\u80FD\u7528\u5B83\u5EFA\u7ACB object\u3002"],file:"main.py",lines:[[9,9]],files:{"main.py":`def f(self):
    print(1)

d = {
    "name": "AAA",
    "f": f
}

A = type('A', (), d)
print(A.__dict__)

a = A()
`},runs:[{cmd:"python main.py",exit:0,output:`{'name': 'AAA', 'f': <function f at 0x783adb18ba30>, '__module__': '__main__', '__dict__': <attribute '__dict__' of 'A' objects>, '__weakref__': <attribute '__weakref__' of 'A' objects>, '__doc__': None}
`}]}]}};var x=n(51507),b=n(82387);let g="btn_JmFc",v="btnPrimary_x2Yk",j="termBtn_CC8E",A="termBtnOpen_rzSH",w="termIcon_Zbcm";function E(e,t){return e.replace(/\{(\w+)\}/g,(e,n)=>void 0!==t[n]?String(t[n]):`{${n}}`)}function N({text:e}){return e.split(/(`[^`]+`)/g).map((e,t)=>e.startsWith("`")&&e.endsWith("`")&&e.length>=2?(0,s.jsx)("code",{className:"inlineCode_AI70",children:e.slice(1,-1)},t):(0,s.jsx)(i.Fragment,{children:e},t))}function k(e){return(0,s.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",...e,children:(0,s.jsx)("polygon",{points:"6 3 20 12 6 21 6 3"})})}function T(e){return(0,s.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",...e,children:[(0,s.jsx)("rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}),(0,s.jsx)("path",{d:"m7 11 2-2-2-2"}),(0,s.jsx)("path",{d:"M11 13h4"})]})}function O(e){return(0,s.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",...e,children:[(0,s.jsx)("path",{d:"M3 6h18"}),(0,s.jsx)("path",{d:"M3 12h15a3 3 0 1 1 0 6h-4"}),(0,s.jsx)("path",{d:"m16 16-2 2 2 2"}),(0,s.jsx)("path",{d:"M3 18h7"})]})}function S(e){return(0,s.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",...e,children:(0,s.jsx)("rect",{x:"4",y:"4",width:"16",height:"16",rx:"2"})})}function L({run:e,wrap:t}){let n=(0,i.useMemo)(()=>e.output.replace(/\n$/,"").split("\n"),[e.output]),{shown:o,started:a,done:l}=(0,x.A)(n,!0);return(0,s.jsxs)("div",{className:(0,r.A)("termOutput_aJer",t&&"termOutputWrap_ZhlF"),"aria-live":"polite",children:[(0,s.jsxs)("div",{className:"termOutputRow_eFC7",children:[(0,s.jsx)("span",{className:"termMark_yyoX",title:"\u9884\u5148\u5F55\u5236\u7684\u8FD0\u884C\u7ED3\u679C\uFF0C\u4E0D\u662F\u6D4F\u89C8\u5668\u5B9E\u65F6\u6267\u884C",children:(0,s.jsx)(T,{className:"termMarkIcon_o1H5","aria-label":"\u7EC8\u7AEF",role:"img"})}),(0,s.jsxs)("div",{className:"termOutputBody_dl5T",children:[!a&&(0,s.jsx)("div",{className:"termRunning_L5SW",children:"\u8FD0\u884C\u4E2D\u2026"}),n.slice(0,o).map((e,t)=>(0,s.jsx)("div",{className:(0,r.A)("run-output__line","termLine_seW0"),children:""===e?" ":e},t)),a&&!l&&(0,s.jsx)("span",{className:"run-output__cursor"})]})]}),l&&(0,s.jsx)("div",{className:(0,r.A)("termFoot_BTl4",0!==e.exit&&"termFootFail_H1CC"),children:E("\u8FDB\u7A0B\u9000\u51FA\uFF0C\u9000\u51FA\u7801 {code}",{code:e.exit})})]})}function C({variant:e,step:t=1,nav:n=!1}){let i=h[e];if(!i)throw Error(`CodeWalkthrough: unknown variant "${e}"`);return(0,s.jsx)(D,{data:i,initialStep:t,nav:n},e)}function D({data:e,initialStep:t,nav:n}){let a,{steps:l}=e,c=(0,o.A)(),d=(0,i.useMemo)(()=>(function(e){let t=[],n={};for(let s of e){for(let[e,t]of(n={...n},Object.entries(s.files||{})))null===t?delete n[e]:n[e]=t;t.push(n)}return t})(l),[l]),p=(0,i.useMemo)(()=>1===new Set(d.flatMap(Object.keys)).size,[d]),[f,h]=(0,i.useState)(()=>Math.min(Math.max(t-1,0),l.length-1)),[x,T]=(0,i.useState)(null),[C,R]=(0,i.useState)(!1),M=l[f],F=d[f],V=f>0?d[f-1]:null,q=c.plain.backgroundColor,U=M.runs||[],P=p&&1===U.length?{output:U[0].output,status:""===U[0].output&&0===U[0].exit?"empty":`exit:${U[0].exit}`}:null,I=e=>{l[e]&&(h(e),T(null))};return(0,s.jsxs)("div",{className:"root_lC3A",children:[(0,s.jsxs)("div",{className:"stepsPanel_A8J6",children:[(0,s.jsxs)("div",{className:"stepHead_rWEC",children:[(0,s.jsx)("span",{className:"stepTitle_eRCc",children:E("\u7B2C {n} \u6B65 \xb7 {title}",{n:f+1,title:M.title})}),(0,s.jsx)("span",{className:"stepCounter_d1xs",children:E("{n} / {total}",{n:f+1,total:l.length})})]}),(0,s.jsx)("div",{className:"stepBody_xfZr",children:M.body.map((e,t)=>(0,s.jsx)("p",{children:(0,s.jsx)(N,{text:e})},t))}),n&&(0,s.jsxs)("div",{className:"navButtons_ENqt",children:[(0,s.jsx)("button",{type:"button",disabled:0===f,onClick:()=>I(f-1),className:(0,r.A)(g,v),children:"\u4E0A\u4E00\u6B65"}),(0,s.jsx)("button",{type:"button",disabled:f===l.length-1,onClick:()=>I(f+1),className:(0,r.A)(g,v),children:"\u4E0B\u4E00\u6B65"})]})]}),(0,s.jsx)(b.A,{files:F,previousFiles:V,stepKey:f,preferredFiles:(a=Object.keys(M.files||{}).filter(e=>Object.hasOwn(F,e)),(M.file?[M.file,...a.filter(e=>e!==M.file)]:a).filter(e=>Object.hasOwn(F,e))),focusFile:M.file,focusRanges:M.lines,single:p,run:P}),U.length>0&&!P&&(0,s.jsx)("div",{className:"terminal_x6YH",style:{backgroundColor:q,color:c.plain.color},children:U.map((e,t)=>{let n=x===t;return(0,s.jsxs)("div",{className:"termRun_pPQl",children:[(0,s.jsxs)("div",{className:"termPrompt__Qbi",children:[(0,s.jsx)("span",{className:"termDollar_FMaj","aria-hidden":"true",children:"$"}),(0,s.jsx)("code",{className:"termCmd_KH0y",children:e.cmd}),n&&(0,s.jsx)("button",{type:"button","aria-pressed":C,"aria-label":C?_:m,title:C?_:m,onClick:()=>R(!C),className:(0,r.A)(j,C&&A),children:(0,s.jsx)(O,{className:w})}),(0,s.jsx)("button",{type:"button","aria-expanded":n,"aria-label":n?y:u,title:n?y:u,onClick:()=>T(n?null:t),className:(0,r.A)(j,n&&A),children:n?(0,s.jsx)(S,{className:w}):(0,s.jsx)(k,{className:w})})]}),n&&(0,s.jsx)(L,{run:e,wrap:C})]},`${f}-${t}`)})})]})}},82387(e,t,n){n.d(t,{A:()=>es});var s,i,r,o,a,l,c,d,p,f,u,m,_,y,h=n(74848),x=n(96540),b=n(34164),g=n(83573);let v=(0,g.A)("square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);var j=n(85731);let A=(0,g.A)("file-diff",[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M9 10h6",key:"9gxzsh"}],["path",{d:"M12 13V7",key:"h0r20n"}],["path",{d:"M9 17h6",key:"r8uit2"}]]),w=(0,g.A)("file-code-corner",[["path",{d:"M4 12.15V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3.35",key:"1wthlu"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"m5 16-3 3 3 3",key:"331omg"}],["path",{d:"m9 22 3-3-3-3",key:"lsp7cz"}]]);var E=n(71765),N=n(67810);let k={"files.heading":"\u6587\u4EF6","copy.idle":"\u590D\u5236\u4EE3\u7801","copy.copying":"\u590D\u5236\u4E2D\u2026","copy.copied":"\u5DF2\u590D\u5236","copy.error":"\u590D\u5236\u5931\u8D25","copy.hint":"\u590D\u5236\u5F53\u524D\u6B65\u9AA4\u4E2D {path} \u7684\u5B8C\u6574\u4EE3\u7801","copy.empty":"\u8BF7\u5148\u9009\u62E9\u4E00\u4E2A\u6587\u4EF6","copy.errorHint":"\u590D\u5236\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\u6216\u624B\u52A8\u9009\u62E9\u4EE3\u7801\u590D\u5236","run.show":"\u8FD0\u884C\uFF08\u663E\u793A\u9884\u5F55\u8F93\u51FA\uFF09","run.hide":"\u6536\u8D77\u8F93\u51FA","diff.show":"\u663E\u793A\u6539\u52A8","diff.hide":"\u53EA\u770B\u5F53\u524D","badge.new":"\u65B0\u6587\u4EF6","badge.changed":"\u5DF2\u4FEE\u6539","aria.codeActions":"\u4EE3\u7801\u64CD\u4F5C","aria.openFiles":"\u5DF2\u6253\u5F00\u7684\u6587\u4EF6","aria.closeTab":"\u5173\u95ED {path}","empty.title":"\u6CA1\u6709\u6253\u5F00\u7684\u6587\u4EF6","empty.body":"\u4ECE\u6587\u4EF6\u5217\u8868\u6253\u5F00\u4E00\u4E2A\u6587\u4EF6\uFF0C\u6216\u901A\u8FC7\u6F14\u7EC3\u6B65\u9AA4\u8FDB\u884C\u5BFC\u822A"};var T=n(99920),O=n(14529);let S=(e,t)=>null!=t&&Object.hasOwn(e,t);function L(e,t,n,s){let i=!e||!Object.is(e.stepKey,s),r=[...new Set(n)].filter(e=>S(t,e)),o=(e?.tabs||[]).filter(e=>S(t,e)),a=i?[...r,...o.filter(e=>!r.includes(e))]:o,l=i&&r[0]||(a.includes(e?.activeFile)?e.activeFile:a[0])||null;return{files:t,stepKey:s,tabs:a,activeFile:l}}var C=n(45773);let D=(0,g.A)("circle-alert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);var R=n(35404);let M="treeItem_xqPD",F="treeName_oNgA",V="codeActionButton_f4xz",q="codeActionIcon_Y_2N";function U({text:e,path:t}){let[n,s]=(0,x.useState)("idle"),i=(0,x.useRef)(null),r=(0,x.useRef)(0),o=(0,x.useRef)(!1),a="string"==typeof e;(0,x.useEffect)(()=>()=>{clearTimeout(i.current),r.current+=1},[]);let l=async()=>{if(!a||o.current)return;let t=++r.current;o.current=!0,clearTimeout(i.current),s("copying");try{if(await navigator.clipboard.writeText(e),t!==r.current)return;s("copied"),i.current=setTimeout(()=>s("idle"),2e3)}catch{if(t!==r.current)return;s("error")}finally{t===r.current&&(o.current=!1)}},c=k[`copy.${n}`],d=a?"error"===n?k["copy.errorHint"]:"idle"===n?k["copy.hint"].replace("{path}",t):c:k["copy.empty"],p="copied"===n?C.A:"error"===n?D:R.A;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("button",{type:"button",className:(0,b.A)(V,"copied"===n&&"codeActionCopied_IhRM","error"===n&&"codeActionError_O3I0"),disabled:!a||"copying"===n,onClick:l,title:d,"aria-label":d,"aria-busy":"copying"===n,children:(0,h.jsx)(p,{className:q,"aria-hidden":"true",focusable:"false"})}),(0,h.jsx)("span",{className:"copyStatus_X_3r",role:"status","aria-live":"polite","aria-atomic":"true",children:"copied"===n?k["copy.copied"]:"error"===n?k["copy.errorHint"]:""})]})}function P(){return(P=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)({}).hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e}).apply(null,arguments)}function I(){return(I=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)({}).hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e}).apply(null,arguments)}function B(){return(B=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)({}).hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e}).apply(null,arguments)}function H(){return(H=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)({}).hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e}).apply(null,arguments)}function $(){return($=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)({}).hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e}).apply(null,arguments)}function W(){return(W=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)({}).hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e}).apply(null,arguments)}function z(){return(z=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)({}).hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e}).apply(null,arguments)}function K(){return(K=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)({}).hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e}).apply(null,arguments)}function Y(){return(Y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)({}).hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e}).apply(null,arguments)}let Q=new Map([[".gitignore","git"],[".gitignore-global","git"],[".gitignore_global","git"],[".git-blame-ignore","git"],[".gitconfig","git"],[".gitattributes","git"],[".gitmodules","git"],[".gitkeep","git"],[".gitinclude","git"],["requirements.txt","python"],["pipfile","python"],[".python-version","python"],["manifest.in","python"],["pylintrc","python"],[".pylintrc","python"],["setup.cfg","python"],["pyproject.toml","gear"],[".env","gear"]]),J=new Map([["py","python"],["python","python"],["pyi","python"],["pyw","python"],["toml","gear"],["env","gear"],["json","brackets-yellow"],["jsonc","brackets-yellow"],["json5","brackets-yellow"],["md","markdown"],["markdown","markdown"],["txt","text"]]),Z=new Set(["test","tests","spec","specs"]),G="chevron_lDAJ",X={python:({title:e,titleId:t,...n})=>x.createElement("svg",P({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24","aria-labelledby":t},n),e?x.createElement("title",{id:t},e):null,s||(s=x.createElement("path",{fill:"#14B8A6",fillRule:"evenodd",d:"M14.622 21.322c-.6.11-1.284.174-1.999.178a12.5 12.5 0 0 1-2.179-.178c-1.136-.198-2.092-1.086-2.092-2.269v-4.156c0-1.217.93-2.217 2.092-2.217h4.178c1.418 0 2.613-1.271 2.613-2.712V7.974h1.438c1.216 0 1.926.92 2.223 2.213.401 1.735.384 2.773 0 4.435-.332 1.45-1.398 2.212-2.613 2.212h-5.752v.555h4.183v1.664c0 1.26-.322 1.942-2.092 2.269m-.176-2.837c-.532 0-.963.45-.963 1.005s.43 1.005.963 1.005.963-.45.963-1.005-.43-1.005-.963-1.005",clipRule:"evenodd"})),i||(i=x.createElement("path",{fill:"#14B8A6",fillRule:"evenodd",d:"M9.378 2.678c.6-.11 1.284-.174 1.999-.178.715-.003 1.46.053 2.179.178 1.136.198 2.092 1.086 2.092 2.269v4.156c0 1.217-.93 2.217-2.092 2.217H9.378c-1.418 0-2.613 1.271-2.613 2.712v1.994H5.327c-1.216 0-1.926-.92-2.223-2.213-.401-1.735-.384-2.773 0-4.435.332-1.45 1.397-2.213 2.613-2.213h5.752v-.554H7.286V4.947c0-1.26.322-1.942 2.092-2.269m.176 2.838c.532 0 .963-.45.963-1.005s-.43-1.006-.963-1.006-.964.45-.964 1.006c0 .555.432 1.005.964 1.005",clipRule:"evenodd"}))),git:({title:e,titleId:t,...n})=>x.createElement("svg",I({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24","aria-labelledby":t},n),e?x.createElement("title",{id:t},e):null,r||(r=x.createElement("path",{fill:"#F87171",d:"m20.661 11.198-7.86-7.859a1.16 1.16 0 0 0-1.639 0L9.53 4.972l2.07 2.07a1.376 1.376 0 0 1 1.744 1.755l1.995 1.995a1.377 1.377 0 0 1 1.425 2.278 1.38 1.38 0 0 1-2.251-1.5l-1.86-1.861-.001 4.897q.198.097.365.26a1.38 1.38 0 1 1-1.5-.3V9.623a1.379 1.379 0 0 1-.749-1.809l-2.04-2.04-5.388 5.388a1.16 1.16 0 0 0 0 1.64l7.859 7.858a1.16 1.16 0 0 0 1.64 0l7.822-7.821a1.16 1.16 0 0 0 0-1.64"}))),gear:({title:e,titleId:t,...n})=>x.createElement("svg",B({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24","aria-labelledby":t},n),e?x.createElement("title",{id:t},e):null,o||(o=x.createElement("path",{fill:"#64748B",d:"M5.939 5.37a3.763 3.763 0 0 1-2.712 4.696l-1.099.272a10.8 10.8 0 0 0 .012 3.4l1.015.244a3.763 3.763 0 0 1 2.728 4.723l-.35 1.187a10 10 0 0 0 2.792 1.734l.928-.976a3.763 3.763 0 0 1 5.454.001l.938.987a10 10 0 0 0 2.79-1.717l-.373-1.29a3.763 3.763 0 0 1 2.712-4.697l1.098-.271a10.8 10.8 0 0 0-.012-3.4l-1.014-.245a3.763 3.763 0 0 1-2.728-4.723l.35-1.186a10 10 0 0 0-2.792-1.735l-.928.976a3.76 3.76 0 0 1-5.454-.001l-.938-.987a10 10 0 0 0-2.79 1.717zM12 14.822c-1.506 0-2.727-1.263-2.727-2.822 0-1.558 1.22-2.822 2.727-2.822s2.727 1.264 2.727 2.822-1.22 2.822-2.727 2.822"}))),document:({title:e,titleId:t,...n})=>x.createElement("svg",H({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24","aria-labelledby":t},n),e?x.createElement("title",{id:t},e):null,a||(a=x.createElement("path",{stroke:"#64748B",strokeLinejoin:"round",strokeWidth:2,d:"M6 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8a1 1 0 0 0-.375-.78l-5-4A1 1 0 0 0 13 3z"})),l||(l=x.createElement("path",{stroke:"#64748B",strokeLinejoin:"round",strokeWidth:2,d:"M12 4v5h6"}))),text:({title:e,titleId:t,...n})=>x.createElement("svg",$({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24","aria-labelledby":t},n),e?x.createElement("title",{id:t},e):null,c||(c=x.createElement("rect",{width:16,height:2,x:4,y:6,fill:"#64748B",rx:1})),d||(d=x.createElement("rect",{width:12,height:2,x:4,y:11,fill:"#64748B",rx:1})),p||(p=x.createElement("rect",{width:16,height:2,x:4,y:16,fill:"#64748B",rx:1}))),markdown:({title:e,titleId:t,...n})=>x.createElement("svg",W({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24","aria-labelledby":t},n),e?x.createElement("title",{id:t},e):null,f||(f=x.createElement("path",{fill:"#60A5FA",d:"M3 15.714V8h2.323l2.322 2.836L9.968 8h2.322v7.714H9.968V11.29l-2.323 2.836-2.322-2.836v4.424zm14.516 0-3.484-3.743h2.323V8h2.322v3.97H21z"}))),"brackets-yellow":({title:e,titleId:t,...n})=>x.createElement("svg",z({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24","aria-labelledby":t},n),e?x.createElement("title",{id:t},e):null,u||(u=x.createElement("path",{fill:"#F59E0B",d:"M4.778 6.667A2.667 2.667 0 0 1 7.444 4a.889.889 0 0 1 0 1.778.89.89 0 0 0-.888.889v3.5c0 .701-.273 1.35-.73 1.833.457.483.73 1.132.73 1.832v3.501c0 .491.398.89.888.89a.889.889 0 0 1 0 1.777 2.667 2.667 0 0 1-2.666-2.667v-3.5a.89.89 0 0 0-.674-.863l-.43-.108a.889.889 0 0 1 0-1.724l.43-.108a.89.89 0 0 0 .674-.862zm14.222 0A2.667 2.667 0 0 0 16.333 4a.889.889 0 0 0 0 1.778c.491 0 .89.398.89.889v3.5c0 .701.272 1.35.729 1.833a2.66 2.66 0 0 0-.73 1.832v3.501a.89.89 0 0 1-.889.89.889.889 0 0 0 0 1.777A2.667 2.667 0 0 0 19 17.333v-3.5c0-.408.278-.764.673-.863l.431-.108a.889.889 0 0 0 0-1.724l-.43-.108a.89.89 0 0 1-.674-.862z"}))),folder:({title:e,titleId:t,...n})=>x.createElement("svg",K({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24","aria-labelledby":t},n),e?x.createElement("title",{id:t},e):null,m||(m=x.createElement("path",{stroke:"#64748B",strokeWidth:2,d:"M7.784 5H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9.875a2 2 0 0 0-2-2h-6.284a2 2 0 0 1-1.27-.455L9.054 5.455A2 2 0 0 0 7.783 5Z"}))),"folder-red-code":({title:e,titleId:t,...n})=>x.createElement("svg",Y({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24","aria-labelledby":t},n),e?x.createElement("title",{id:t},e):null,_||(_=x.createElement("path",{fill:"#64748B",fillRule:"evenodd",d:"M5 4a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h5v-2H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h2.784a1 1 0 0 1 .635.227l2.393 1.966a3 3 0 0 0 1.904.682H19a1 1 0 0 1 1 1V10h2v-.125a3 3 0 0 0-3-3h-6.284a1 1 0 0 1-.635-.227L9.688 4.682A3 3 0 0 0 7.784 4z",clipRule:"evenodd"})),y||(y=x.createElement("path",{stroke:"#F87171",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M15.146 13.797 13 15.943l2.146 2.146M21.077 13.797l2.145 2.146-2.145 2.146M16.561 19.52l3.1-7.153"})))};function ee({path:e,folder:t=!1,tree:n=!1,expanded:s=!1}){let i=function(e,{folder:t=!1}={}){let n="string"==typeof e?e.replace(/\\/g,"/").replace(/\/+$/,"").split("/").pop().toLowerCase():"";if(t)return Z.has(n)?"folder-red-code":"folder";if(Q.has(n))return Q.get(n);if(n.startsWith(".env.")||n.endsWith(".env.example"))return"gear";let s=n.lastIndexOf("."),i=s>=0?n.slice(s+1):"";return J.get(i)||"document"}(e,{folder:t}),r=X[i],o=(0,h.jsx)(r,{className:"icon_KnjF",width:16,height:16,"aria-hidden":"true",focusable:"false","data-symbols-icon":i});return n?(0,h.jsxs)("span",{className:"treeIcon_sP4w","aria-hidden":"true",children:[t?(0,h.jsx)("svg",{className:(0,b.A)(G,s&&"expanded_mogG"),width:10,height:10,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",focusable:"false",children:(0,h.jsx)("path",{d:"m9 5 7 7-7 7"})}):(0,h.jsx)("span",{className:G}),o]}):o}let et=[],en=[];function es({files:e,previousFiles:t=null,preferredFiles:n=et,stepKey:s=0,focusFile:i,focusRanges:r=en,onFileSelect:o,className:a,single:l=!1,run:c=null}){let d=(0,N.A)(),[p,f]=(0,x.useState)(()=>L(null,e,n,s)),[u,m]=(0,x.useState)(()=>new Set),[_,y]=(0,x.useState)(!0),g=(0,x.useRef)(null),[C,D]=(0,x.useState)(null),R=null!=c&&null!==C&&Object.is(C.stepKey,s),P=()=>D(R?null:{stepKey:s});p.files===e&&Object.is(p.stepKey,s)||f(L(p,e,n,s));let{activeFile:I,tabs:B}=p,H=(0,x.useMemo)(()=>(function(e){let t={children:[]};for(let n of e){let e=t,s=n.split("/");s.forEach((t,i)=>{let r=s.slice(0,i+1).join("/");if(i===s.length-1)e.children.push({type:"file",name:t,path:n});else{let n=e.children.find(e=>"folder"===e.type&&e.path===r);n||(n={type:"folder",name:t,path:r,children:[]},e.children.push(n)),e=n}})}let n=e=>[...e].sort((e,t)=>e.type===t.type?e.name.localeCompare(t.name):"folder"===e.type?-1:1).map(e=>"folder"===e.type?{...e,children:n(e.children)}:e);return n(t.children)})(Object.keys(e)),[e]),$=n=>t&&S(e,n)?S(t,n)?t[n]===e[n]?"same":"changed":"new":"same",W=$(I),z=S(e,I)?e[I]:void 0,K=(0,x.useMemo)(()=>void 0===z?[]:_&&"changed"===W?function(e,t){let n=e.replace(/\n$/,"").split("\n"),s=t.replace(/\n$/,"").split("\n"),i=n.length,r=s.length,o=Array.from({length:i+1},()=>new Uint32Array(r+1));for(let e=i-1;e>=0;e-=1)for(let t=r-1;t>=0;t-=1)o[e][t]=n[e]===s[t]?o[e+1][t+1]+1:Math.max(o[e+1][t],o[e][t+1]);let a=[],l=0,c=0,d=0;for(;l<i||c<r;)l<i&&c<r&&n[l]===s[c]?(d+=1,a.push({type:"same",text:s[c],newNo:d}),l+=1,c+=1):c<r&&(l>=i||o[l][c+1]>=o[l+1][c])?(d+=1,a.push({type:"add",text:s[c],newNo:d}),c+=1):(a.push({type:"del",text:n[l],newNo:null}),l+=1);return a}(t[I],z):z.replace(/\n$/,"").split("\n").map((e,t)=>({type:"same",text:e,newNo:t+1})),[z,t,I,W,_]),Y=null==i||i===I?r:en,Q=d.plain.backgroundColor;(0,x.useEffect)(()=>{let e=g.current;if(!e)return;let t=()=>{let t=e.querySelector("[data-change]")||e.querySelector("[data-focus]");return{target:t,top:t?Math.max(0,t.offsetTop-e.clientHeight/2+t.offsetHeight/2):0}},{target:n,top:s}=t(),i=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(e.scrollTo({top:s,behavior:n&&!i?"smooth":"auto"}),!n||"u"<typeof ResizeObserver)return;let r=s,o=!1,a=()=>{o=!0},l=["wheel","touchstart","pointerdown","keydown"];l.forEach(t=>e.addEventListener(t,a,{passive:!0}));let c=new ResizeObserver(()=>{if(o)return;let n=t().top;2>Math.abs(n-r)||(r=n,e.scrollTo({top:n,behavior:"auto"}))});return c.observe(e),e.firstElementChild&&c.observe(e.firstElementChild),()=>{c.disconnect(),l.forEach(t=>e.removeEventListener(t,a))}},[s,I,_,z,i,r]);let J=e=>{f(t=>S(t.files,e)?{...t,activeFile:e,tabs:t.tabs.includes(e)?t.tabs:[...t.tabs,e]}:t),o?.(e)},Z=(e,t)=>e.map(e=>{let n={paddingLeft:`${8+14*t}px`};if("file"===e.type){let t=$(e.path);return(0,h.jsxs)("button",{type:"button",onClick:()=>J(e.path),"aria-pressed":e.path===I,style:n,title:e.path,className:(0,b.A)(M,e.path===I&&"treeItemActive_NYmV"),children:[(0,h.jsx)(ee,{path:e.path,tree:!0}),(0,h.jsx)("span",{className:F,children:e.name}),"same"!==t&&(0,h.jsx)("span",{className:(0,b.A)("treeDot_jdw0","new"===t&&"treeDotNew_M1tN"),title:k[`badge.${t}`]})]},e.path)}let s=u.has(e.path);return(0,h.jsxs)("div",{children:[(0,h.jsxs)("button",{type:"button","aria-expanded":!s,onClick:()=>{let t;return t=e.path,m(e=>{let n=new Set(e);return n.has(t)?n.delete(t):n.add(t),n})},style:n,className:M,title:e.path,children:[(0,h.jsx)(ee,{path:e.path,folder:!0,tree:!0,expanded:!s}),(0,h.jsx)("span",{className:F,children:e.name})]}),!s&&Z(e.children,t+1)]},e.path)});return(0,h.jsx)(T._,{output:c?.output,status:c?.status,open:R,onToggle:P,children:(0,h.jsxs)("div",{className:(0,b.A)("editor_dHJE",l&&"single_ZkL0",a),"data-project-code-viewer":"",children:[!l&&(0,h.jsxs)("aside",{className:"fileTree_hRoX","aria-label":k["files.heading"],children:[(0,h.jsx)("h4",{className:"fileTreeHeading_mHQH",children:k["files.heading"]}),(0,h.jsx)("div",{className:"treeScroll_sHHt",children:Z(H,0)})]}),(0,h.jsxs)("div",{className:"editorMain_jUUV",children:[!l&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("label",{className:"mobilePicker_UzrQ",children:[(0,h.jsx)("span",{children:k["files.heading"]}),(0,h.jsxs)("select",{"aria-label":k["files.heading"],value:I??"",onChange:e=>J(e.target.value),children:[(0,h.jsx)("option",{value:"",disabled:!0,children:k["copy.empty"]}),Object.keys(e).map(e=>(0,h.jsx)("option",{value:e,children:e},e))]})]}),(0,h.jsx)("div",{className:"editorToolbar_UlPB",children:(0,h.jsx)("div",{className:"tabs_VF_n","aria-label":k["aria.openFiles"],children:B.map(e=>{let t=e===I,n=$(e);return(0,h.jsxs)("div",{className:(0,b.A)("tab_qFmb",t&&"tabActive_DCji"),style:t?{backgroundColor:Q}:void 0,children:[(0,h.jsxs)("button",{type:"button","aria-pressed":t,onClick:()=>J(e),className:"tabBtn_ulEc",title:e,children:[(0,h.jsx)(ee,{path:e}),e.split("/").pop(),"same"!==n&&(0,h.jsx)("span",{className:(0,b.A)("badge_Q6dE","new"===n&&"badgeNew_H9yP"),children:k[`badge.${n}`]})]}),(0,h.jsx)("button",{type:"button","aria-label":k["aria.closeTab"].replace("{path}",e),onClick:()=>f(t=>{let n;return n=t.tabs.filter(t=>t!==e),{...t,tabs:n,activeFile:t.activeFile===e?n.at(-1)??null:t.activeFile}}),className:"tabClose_i338",children:"\xd7"})]},e)})})})]}),l&&I&&(0,h.jsxs)("div",{className:"fileHeader_vfdp",title:I,children:[(0,h.jsx)(ee,{path:I}),(0,h.jsx)("span",{className:"fileHeaderName_Hj_1",children:I})]}),(0,h.jsxs)("div",{className:"codeShell_uOkt",style:{backgroundColor:Q,"--cw-editor-bg":Q},children:[void 0!==z&&(0,h.jsxs)("div",{className:"codeActions_eYDy",role:"group","aria-label":k["aria.codeActions"],children:[c&&(0,h.jsx)("button",{type:"button",className:(0,b.A)(V,R&&"codeActionOn_PMcY"),"aria-expanded":R,"aria-label":R?k["run.hide"]:k["run.show"],title:R?k["run.hide"]:k["run.show"],onClick:P,children:R?(0,h.jsx)(v,{className:q,"aria-hidden":"true",focusable:"false"}):(0,h.jsx)(j.A,{className:q,"aria-hidden":"true",focusable:"false"})}),"changed"===W&&(0,h.jsx)("button",{type:"button",className:V,"aria-label":k["diff.show"],"aria-pressed":_,title:_?k["diff.hide"]:k["diff.show"],onClick:()=>y(e=>!e),children:_?(0,h.jsx)(A,{className:q,"aria-hidden":"true",focusable:"false"}):(0,h.jsx)(w,{className:q,"aria-hidden":"true",focusable:"false"})}),(0,h.jsx)(U,{text:z,path:I},JSON.stringify([s,I,z]))]}),void 0!==z?(0,h.jsx)("div",{ref:g,className:"codeScroll_KvdC",style:{backgroundColor:Q},children:(0,h.jsx)(E.f4,{theme:d,code:K.map(e=>e.text).join("\n"),language:{py:"python",md:"markdown",json:"json",toml:"toml",txt:"text"}[I.split(".").pop()?.toLowerCase()]||"text",children:({tokens:e,getLineProps:t,getTokenProps:n})=>(0,h.jsx)("pre",{className:"pre_WKm3",style:{color:d.plain.color},children:e.map((e,s)=>{var i;let r=K[s]||{type:"same",newNo:s+1},o=t({line:e}),a="same"!==r.type,l=!a&&(i=r.newNo,null!=i&&Y.some(([e,t=e])=>i>=e&&i<=t));return(0,h.jsxs)("div",{...o,"data-line":r.newNo??void 0,"data-change":a?r.type:void 0,"data-focus":l?"":void 0,className:(0,b.A)(o.className,"line_aw8y","add"===r.type&&"lineAdd_mE7J","del"===r.type&&"lineDel_abp0",l&&"lineFocus_Glcn"),children:[(0,h.jsx)("span",{"aria-hidden":"true",className:"lineNo_EtU5",children:r.newNo??""}),(0,h.jsx)("span",{"aria-hidden":"true",className:"lineSign_UgAc",children:"add"===r.type?"+":"del"===r.type?"\u2212":""}),(0,h.jsx)("span",{className:"lineContent_fkoz",children:e.map((e,t)=>(0,h.jsx)("span",{...n({token:e})},t))})]},s)})})})}):(0,h.jsx)("div",{className:"empty_oOnL",style:{backgroundColor:Q},children:(0,h.jsxs)("div",{children:[(0,h.jsx)("p",{children:k["empty.title"]}),(0,h.jsx)("p",{className:"emptySub_bQnk",children:k["empty.body"]})]})})]}),c&&(0,h.jsx)(O.A,{})]})]})})}},17181(e,t,n){n.d(t,{A:()=>s});let s={s00:{"agent.py":`if __name__ == "__main__":
    from dotenv import load_dotenv

    load_dotenv()
    from anthropic import Anthropic

    client = Anthropic(base_url="https://api.deepseek.com/anthropic")
    model = "deepseek-v4-flash"
    system = "\u{4F60}\u{662F}\u{4E00}\u{4E2A} ACME \u{8D2D}\u{7269}\u{52A9}\u{624B}\u{3002}"
    messages: list = [{"role": "user", "content": "\u{4F60}\u{597D}"}]

    response = client.messages.create(
        model=model, system=system, max_tokens=1000, messages=messages
    )

    for block in response.content:
        # print(block)
        if block.type == "text":
            print(block.text)
`},s01:{"agent.py":`import json

# \u{2500}\u{2500} \u{5047}\u{5546}\u{54C1}\u{5217}\u{8868}\u{FF08}\u{6765}\u{81EA} EVALS.md \u{7684} 6 \u{4E2A}\u{5546}\u{54C1}\u{FF09}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}
PRODUCTS = [
    {
        "id": "AR-1104",
        "title": "ACME Select \u{77EE}\u{8F74}\u{673A}\u{68B0}\u{952E}\u{76D8}",
        "price": 99.0,
        "rating": 4.6,
        "in_stock": True,
    },
    {
        "id": "AR-1105",
        "title": "ACME Select \u{4E3B}\u{52A8}\u{964D}\u{566A}\u{8033}\u{673A}",
        "price": 249.0,
        "rating": 4.8,
        "in_stock": True,
    },
    {
        "id": "AR-1106",
        "title": "ACME Select 1080p \u{81EA}\u{52A8}\u{53D6}\u{666F}\u{6444}\u{50CF}\u{5934}",
        "price": 69.0,
        "rating": 4.3,
        "in_stock": True,
    },
    {
        "id": "AR-1107",
        "title": "ACME Studio \u{53EF}\u{8C03}\u{8282}\u{94DD}\u{5408}\u{91D1}\u{7B14}\u{8BB0}\u{672C}\u{652F}\u{67B6}",
        "price": 39.0,
        "rating": 4.5,
        "in_stock": True,
    },
    {
        "id": "AR-1002",
        "title": "ACME Signature 15Bar \u{610F}\u{5F0F}\u{5496}\u{5561}\u{673A}\u{FF08}\u{5E26}\u{84B8}\u{6C7D}\u{68D2}\u{FF09}",
        "price": 329.0,
        "rating": 4.7,
        "in_stock": False,
    },
    {
        "id": "AR-1008",
        "title": "ACME Rest \u{52A0}\u{91CD}\u{6BEF} Queen \u{5C3A}\u{5BF8}",
        "price": 49.0,
        "rating": 4.4,
        "in_stock": True,
    },
]

# \u{2500}\u{2500} \u{5DE5}\u{5177} Schema \u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}
search_products_schema = {
    "name": "search_products",
    "description": (
        "\u{641C}\u{7D22}\u{5546}\u{54C1}\u{76EE}\u{5F55}\u{FF0C}\u{8FD4}\u{56DE}\u{5546}\u{54C1}\u{7684} id\u{3001}\u{6807}\u{9898}\u{3001}\u{4EF7}\u{683C}\u{3001}\u{8BC4}\u{5206}\u{548C}\u{5E93}\u{5B58}\u{72B6}\u{6001}\u{3002}"
        "\u{7528}\u{5177}\u{4F53}\u{7684}\u{5173}\u{952E}\u{8BCD}\u{641C}\u{7D22}\u{3002}"
        "\u{987E}\u{5BA2}\u{63D0}\u{5230}\u{591A}\u{4E2A}\u{4E0D}\u{540C}\u{5546}\u{54C1}\u{65F6}\u{FF0C}\u{6BCF}\u{4E2A}\u{5546}\u{54C1}\u{5355}\u{72EC}\u{641C}\u{4E00}\u{6B21}\u{3002}"
    ),
    "input_schema": {
        "type": "object",
        "properties": {
            "query": {
                "type": "string",
                "description": "\u{8981}\u{641C}\u{7D22}\u{7684}\u{5173}\u{952E}\u{8BCD}\u{3002}",
            },
            "limit": {
                "type": "integer",
                "description": "\u{6700}\u{591A}\u{8FD4}\u{56DE}\u{51E0}\u{6761}\u{7ED3}\u{679C}\u{3002}",
            },
        },
        "required": ["query"],
        "additionalProperties": False,
    },
}


# \u{2500}\u{2500} \u{641C}\u{7D22}\u{51FD}\u{6570} \u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}
def search_products(query: str, limit: int = 5) -> str:
    """\u{5728}\u{5047}\u{5546}\u{54C1}\u{5217}\u{8868}\u{91CC}\u{505A}\u{7B80}\u{5355}\u{7684}\u{5173}\u{952E}\u{8BCD}\u{5339}\u{914D}\u{FF0C}\u{8FD4}\u{56DE} JSON \u{5B57}\u{7B26}\u{4E32}\u{3002}"""
    query_lower = query.lower()
    results = [p for p in PRODUCTS if query_lower in p["title"].lower()]
    results = results[:limit]
    return json.dumps(results, ensure_ascii=False)


# \u{2500}\u{2500} \u{5DE5}\u{5177}\u{8C03}\u{7528}\u{5206}\u{53D1} \u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}
TOOL_MAP = {
    "search_products": search_products,
}


# \u{2500}\u{2500} \u{5BF9}\u{8BDD}\u{5FAA}\u{73AF} \u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}
if __name__ == "__main__":
    from dotenv import load_dotenv

    load_dotenv()
    from anthropic import Anthropic

    client = Anthropic(base_url="https://api.deepseek.com/anthropic")
    model = "deepseek-v4-flash"
    system = "\u{4F60}\u{662F}\u{4E00}\u{4E2A} ACME \u{8D2D}\u{7269}\u{52A9}\u{624B}\u{3002}"
    messages: list = []

    while True:
        user_input = input(">>")
        if not user_input:
            break
        messages.append({"role": "user", "content": user_input})

        while True:
            response = client.messages.create(
                model=model,
                system=system,
                max_tokens=1000,
                tools=[search_products_schema],  # type: ignore[list-item]
                messages=messages,
            )
            messages.append({"role": "assistant", "content": response.content})

            for block in response.content:
                if block.type == "text":
                    print(f"AI: {block.text}")

            if response.stop_reason != "tool_use":
                break

            tool_results = []
            for block in response.content:
                if block.type == "tool_use":
                    print(f"[\u{8C03}\u{7528}\u{5DE5}\u{5177}] {block.name}({block.input})")
                    run = TOOL_MAP[block.name]
                    output = run(**block.input)  # type: ignore[arg-type]
                    print(f"[\u{5DE5}\u{5177}\u{7ED3}\u{679C}] {output}")
                    tool_results.append(
                        {
                            "type": "tool_result",
                            "tool_use_id": block.id,
                            "content": output,
                        }
                    )
            messages.append({"role": "user", "content": tool_results})
`}}},14529(e,t,n){n.d(t,{A:()=>d});var s=n(74848),i=n(96540),r=n(34164),o=n(99920),a=n(51507);function l(e){return(0,s.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",...e,children:[(0,s.jsx)("rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}),(0,s.jsx)("path",{d:"m7 11 2-2-2-2"}),(0,s.jsx)("path",{d:"M11 13h4"})]})}function c(e){return(0,s.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",...e,children:[(0,s.jsx)("path",{d:"M3 6h18"}),(0,s.jsx)("path",{d:"M3 12h15a3 3 0 1 1 0 6h-4"}),(0,s.jsx)("path",{d:"m16 16-2 2 2 2"}),(0,s.jsx)("path",{d:"M3 18h7"})]})}function d(){let e=(0,o.H)(),[t,n]=(0,i.useState)(!1),d=!!(e&&e.open&&null!==e.output),p=d&&"empty"!==e.status?e.output.replace(/\n$/,"").split("\n"):[],{shown:f,started:u,done:m}=(0,a.A)(p,d);return d?(0,s.jsxs)("div",{className:"run-output",role:"region","aria-label":"\u8FD0\u884C\u8F93\u51FA",children:[(0,s.jsxs)("div",{className:"run-output__row",children:[(0,s.jsx)("span",{className:"run-output__mark",title:"\u9884\u5148\u5F55\u5236\u7684\u8FD0\u884C\u7ED3\u679C\uFF0C\u4E0D\u662F\u6D4F\u89C8\u5668\u5B9E\u65F6\u6267\u884C",children:(0,s.jsx)(l,{"aria-label":"\u8F93\u51FA",role:"img"})}),(0,s.jsxs)("pre",{className:(0,r.A)("run-output__body",t&&"run-output__body--wrap"),"aria-live":"polite",children:[!u&&(0,s.jsx)("span",{className:"run-output__running",children:"\u8FD0\u884C\u4E2D\u2026"}),p.slice(0,f).map((t,n)=>(0,s.jsx)("div",{className:(0,r.A)("run-output__line",e.highlight.has(n+1)&&"run-output__line--highlight"),children:""===t?" ":t},n)),u&&!m&&(0,s.jsx)("span",{className:"run-output__cursor"})]})]}),m&&(0,s.jsxs)("div",{className:(0,r.A)("run-output__foot",`run-output__foot--${e.status.split(":")[0]}`),children:[(0,s.jsxs)("span",{children:["hang"===e.status&&(0,s.jsx)("span",{className:"run-output__cursor"}),function(e){if("hang"===e)return"\u8FDB\u7A0B\u672A\u9000\u51FA\uFF0C\u9700\u8981 Ctrl + C \u7EC8\u6B62";if("empty"===e)return"\u6CA1\u6709\u4EFB\u4F55\u8F93\u51FA\uFF0C\u8FDB\u7A0B\u9000\u51FA";let t=e.startsWith("exit:")?e.slice(5):"0";return`\u{8FDB}\u{7A0B}\u{9000}\u{51FA}\u{FF0C}\u{9000}\u{51FA}\u{7801} ${t}`}(e.status)]}),(0,s.jsx)("button",{type:"button",className:"run-output__wrap","aria-pressed":t,"aria-label":t?"\u53D6\u6D88\u81EA\u52A8\u6362\u884C":"\u81EA\u52A8\u6362\u884C",title:t?"\u53D6\u6D88\u81EA\u52A8\u6362\u884C":"\u81EA\u52A8\u6362\u884C",onClick:()=>n(!t),children:(0,s.jsx)(c,{"aria-hidden":"true"})})]})]}):null}},99920(e,t,n){n.d(t,{H:()=>a,_:()=>o});var s=n(74848),i=n(96540);let r=(0,i.createContext)(null);function o({output:e,status:t,highlight:n,blockId:a,open:l,onToggle:c,children:d}){let[p,f]=(0,i.useState)(!1),u=l??p,m=(0,i.useMemo)(()=>({output:"string"==typeof e?e:t?"":null,status:t||"exit:0",highlight:new Set((n||"").split(",").map(e=>Number(e)).filter(e=>e>0)),blockId:a||null,open:u,toggle:c??(()=>f(e=>!e))}),[e,t,n,a,u,c]);return(0,s.jsx)(r.Provider,{value:m,children:d})}function a(){return(0,i.useContext)(r)}},51507(e,t,n){n.d(t,{A:()=>i});var s=n(96540);function i(e,t){let n=e.length,[i,r]=(0,s.useState)(0),[o,a]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{if(!t){r(0),a(!1);return}if("u">typeof window&&window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches){a(!0),r(n);return}let e=window.setTimeout(()=>{a(!0),e=window.setInterval(()=>{r(t=>t+1>=n?(window.clearInterval(e),n):t+1)},80)},350);return()=>{window.clearTimeout(e),window.clearInterval(e)}},[t,n]),{shown:i,started:o,done:o&&i>=n}}},28453(e,t,n){n.d(t,{R:()=>o,x:()=>a});var s=n(96540);let i={},r=s.createContext(i);function o(e){let t=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);