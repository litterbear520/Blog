"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([["9458"],{116(e,t,n){n.r(t),n.d(t,{metadata:()=>r,default:()=>p,frontMatter:()=>i,contentTitle:()=>l,toc:()=>d,assets:()=>c});var r=JSON.parse('{"id":"python/frame","title":"frame","description":"\u8FD9\u7BC7\u6587\u7AE0\u6211\u4EEC\u6765\u4ECB\u7ECD\u4E00\u4E2A\u5728 Python \u8FD0\u884C\u7684\u65F6\u5019\u975E\u5E38\u91CD\u8981\uFF0C\u975E\u5E38\u57FA\u7840\uFF0C\u4F46\u662F\u6211\u4EEC\u5176\u5B9E\u4E0D\u592A\u4F1A\u63A5\u89E6\u5230\u7684\u4E1C\u897F\uFF0C\u5C31\u662F frame\u3002\u90A3 frame \u8FD9\u4E2A\u4E1C\u897F\u4E2D\u6587\u88AB\u7FFB\u6210\u5E27\uFF0C\u6211\u4E0D\u662F\u7279\u522B\u559C\u6B22\u8FD9\u4E2A\u7FFB\u8BD1\uFF0C\u6240\u4EE5\u6211\u4EEC\u5C31\u7BA1\u5B83\u53EB frame\u3002","source":"@site/docs/python/frame.mdx","sourceDirName":"python","slug":"/python/frame","permalink":"/docs/python/frame","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"asyncio","permalink":"/docs/python/asyncio"},"next":{"title":"queue","permalink":"/docs/python/queue"}}'),s=n(74848),o=n(28453),a=n(17191);let i={},l="frame",c={},d=[{value:"frame \u4E0E code object",id:"frame-\u4E0E-code-object",level:2},{value:"\u51FD\u6570\u8C03\u7528\u4E0E\u8FD4\u56DE",id:"\u51FD\u6570\u8C03\u7528\u4E0E\u8FD4\u56DE",level:2},{value:"\u83B7\u53D6\u5F53\u524D frame",id:"\u83B7\u53D6\u5F53\u524D-frame",level:2},{value:"frame \u7684\u5C5E\u6027",id:"frame-\u7684\u5C5E\u6027",level:2},{value:"\u8C03\u7528\u5173\u7CFB\u4E0E\u547D\u540D\u7A7A\u95F4",id:"\u8C03\u7528\u5173\u7CFB\u4E0E\u547D\u540D\u7A7A\u95F4",level:3},{value:"\u5F53\u524D\u6267\u884C\u4F4D\u7F6E",id:"\u5F53\u524D\u6267\u884C\u4F4D\u7F6E",level:3},{value:"trace \u56DE\u8C03",id:"trace-\u56DE\u8C03",level:3},{value:"\u67E5\u770B\u8C03\u7528\u8005",id:"\u67E5\u770B\u8C03\u7528\u8005",level:2},{value:"\u8C03\u7528\u8005\u7684\u51FD\u6570\u540D",id:"\u8C03\u7528\u8005\u7684\u51FD\u6570\u540D",level:3},{value:"\u8C03\u7528\u8005\u7684\u5C40\u90E8\u53D8\u91CF",id:"\u8C03\u7528\u8005\u7684\u5C40\u90E8\u53D8\u91CF",level:3},{value:"\u8C03\u7528\u53D1\u751F\u7684\u4F4D\u7F6E",id:"\u8C03\u7528\u53D1\u751F\u7684\u4F4D\u7F6E",level:3},{value:"frame \u7684\u7528\u9014\u4E0E\u5F00\u9500",id:"frame-\u7684\u7528\u9014\u4E0E\u5F00\u9500",level:2}];function f(e){let t={a:"a",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"frame",children:"frame"})}),"\n",(0,s.jsxs)(t.p,{children:["\u8FD9\u7BC7\u6587\u7AE0\u6211\u4EEC\u6765\u4ECB\u7ECD\u4E00\u4E2A\u5728 Python \u8FD0\u884C\u7684\u65F6\u5019\u975E\u5E38\u91CD\u8981\uFF0C\u975E\u5E38\u57FA\u7840\uFF0C\u4F46\u662F\u6211\u4EEC\u5176\u5B9E\u4E0D\u592A\u4F1A\u63A5\u89E6\u5230\u7684\u4E1C\u897F\uFF0C\u5C31\u662F ",(0,s.jsx)(t.a,{href:"https://docs.python.org/3/reference/datamodel.html#frame-objects",children:"frame"}),"\u3002\u90A3 frame \u8FD9\u4E2A\u4E1C\u897F\u4E2D\u6587\u88AB\u7FFB\u6210\u5E27\uFF0C\u6211\u4E0D\u662F\u7279\u522B\u559C\u6B22\u8FD9\u4E2A\u7FFB\u8BD1\uFF0C\u6240\u4EE5\u6211\u4EEC\u5C31\u7BA1\u5B83\u53EB frame\u3002"]}),"\n",(0,s.jsx)(t.h2,{id:"frame-\u4E0E-code-object",children:"frame \u4E0E code object"}),"\n",(0,s.jsxs)(t.p,{children:["\u53EF\u80FD\u6709\u4EBA\u8FD8\u8BB0\u5F97\u6211\u5728\u86EE\u4E45\u4E4B\u524D\u5199\u8FC7\u4E00\u7BC7\u6709\u5173 ",(0,s.jsx)(t.a,{href:"/docs/python/CodeObject",children:"code object"})," \u7684\u6587\u7AE0\u3002\u5728\u90A3\u7BC7\u6587\u7AE0\u91CC\u6211\u544A\u8BC9\u5927\u5BB6\uFF0C\u6240\u6709\u4F60\u5199\u7684 Python \u4EE3\u7801\u90FD\u4F1A\u5728\u7F16\u8BD1\u671F\u5148\u88AB\u7F16\u8BD1\u6210 code object\u3002\u4F46\u662F code object \u8FD9\u4E2A\u4E1C\u897F\u5B83\u662F\u4E00\u4E2A immutable\uFF0C\u5B83\u7F16\u8BD1\u4E00\u6B21\u5C31\u5B8C\u6210\u4E86\u3002\u6240\u4EE5\u5728\u8FD0\u884C Python \u4EE3\u7801\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u4F1A\u4F7F\u7528\u5230\u5B83\uFF0C\u4F46\u662F\u4E0D\u80FD\u5355\u7EAF\u7684\u4F9D\u8D56\u5B83\uFF0C\u56E0\u4E3A\u6211\u4EEC\u6709\u975E\u5E38\u591A\u7684\u8FD0\u884C\u65F6\u7684\u72B6\u6001\u9700\u8981\u4FDD\u5B58\u3002"]}),"\n",(0,s.jsx)(t.p,{children:"\u6BD4\u5982\u8BF4\u5728 code object \u91CC\u9762\uFF0C\u6211\u4EEC\u8BB0\u5F55\u4E86\u67D0\u4E00\u4E2A\u51FD\u6570\u9700\u8981\u7528\u5230\u4EC0\u4E48 local variable\u3002\u6BD4\u5982\u8FD9\u4E2A\u51FD\u6570\u9700\u8981\u7528\u5230 A\u3001B\u3001C \u8FD9\u4E09\u4E2A local variable\u3002\u4F46\u662F code object \u91CC\u9762\u6CA1\u6709\u5730\u65B9\u8BB0\u5F55\u73B0\u5728 A\u3001B\u3001C \u5206\u522B\u662F\u591A\u5C11\u3002\u800C\u8BB0\u5F55\u5F53\u524D\u8FD0\u884C\u65F6\u72B6\u6001\u7684\u8D23\u4EFB\u5C31\u843D\u5728\u4E86 frame \u8EAB\u4E0A\u3002"}),"\n",(0,s.jsx)(t.p,{children:"\u90A3 frame \u548C code object \u533A\u522B\u5728\u4E8E\uFF0C\u6BCF\u4E00\u4E2A\u51FD\u6570\u53EA\u4F1A\u7F16\u8BD1\u51FA\u6765\u4E00\u4E2A code object\uFF0C\u5B83\u5927\u90E8\u5206\u7684\u4FE1\u606F\u662F\u4FDD\u5B58\u5728 code object \u91CC\u9762\u7684\u3002\u7136\u800C\u4F60\u5728\u8FD0\u884C\u7684\u65F6\u5019\uFF0C\u4E00\u4E2A\u51FD\u6570\u53EF\u80FD\u4F1A\u88AB\u91CD\u590D\u8C03\u7528\uFF0C\u5B83\u53EF\u80FD\u6709\u9012\u5F52\uFF0C\u53EF\u80FD\u6709\u5404\u79CD\u5404\u6837\u7684\u60C5\u51B5\u3002\u6BCF\u4E00\u6B21\u8C03\u7528\u4F1A\u51FA\u73B0\u4E00\u4E2A frame\u3002\u8FD9\u4E2A frame \u91CC\u9762\u53EA\u4FDD\u5B58\u6BCF\u4E00\u6B21\u8C03\u7528\u7684\u65F6\u5019\u8FD9\u4E2A\u51FD\u6570\u4E0D\u540C\u7684\u4E1C\u897F\uFF0C\u6BD4\u5982\u8BF4\u5F53\u524D local variable \u7684\u503C\u662F\u4EC0\u4E48\u3002"}),"\n",(0,s.jsx)(t.h2,{id:"\u51FD\u6570\u8C03\u7528\u4E0E\u8FD4\u56DE",children:"\u51FD\u6570\u8C03\u7528\u4E0E\u8FD4\u56DE"}),"\n",(0,s.jsx)(t.p,{children:"\u4F60\u53EF\u4EE5\u628A Python \u7684\u8FD0\u884C\u65F6\u60F3\u8C61\u6210\u4E00\u5EA7\u5927\u697C\u3002\u5728\u8FDB\u5165\u7A0B\u5E8F\u7684\u65F6\u5019\u5462\uFF0C\u4ECE\u4E00\u5C42\u5F00\u59CB\uFF0C\u7136\u540E\u6BCF\u6709\u4E00\u6BB5\u65B0\u7684 code block \u5C31\u518D\u5F80\u4E0A\u8D70\u4E00\u5C42\uFF0C\u6BCF\u4E00\u5C42\u90FD\u8BB0\u5F55\u7740\u5F53\u524D\u8FD9\u4E00\u5C42\u7684\u72B6\u6001\u3002\u90A3\u4E48\u6211\u4EEC\u6700\u5E38\u89C1\u7684\u6362\u5C42\u6570\uFF0C\u6216\u8005\u8BF4\u6362 frame \u7684\u72B6\u51B5\uFF0C\u5C31\u662F\u51FD\u6570\u7684\u8C03\u7528\u4E0E\u8FD4\u56DE\u3002"}),"\n",(0,s.jsx)(t.p,{children:"\u5728\u521A\u5F00\u59CB\uFF0C\u4E3A\u4E86\u7B80\u5355\u8D77\u89C1\uFF0C\u4F60\u53EF\u4EE5\u8BA4\u4E3A\u6BCF\u4E00\u4E2A\u51FD\u6570\u8C03\u7528\u5C31\u4F1A\u65B0\u5EFA\u4E00\u4E2A frame\uFF0C\u7136\u540E\u8FD9\u4E2A\u51FD\u6570\u7684\u4EE3\u7801\u5C31\u90FD\u5728\u8FD9\u4E2A frame \u91CC\u9762\u8FD0\u884C\uFF0C\u76F4\u5230\u8FD9\u4E2A\u51FD\u6570\u8C03\u7528\u4E86\u53E6\u4E00\u4E2A\u51FD\u6570\uFF0C\u5B83\u5C31\u8981\u53BB\u4E0B\u4E00\u4E2A frame\uFF0C\u6216\u8005\u8FD9\u4E2A\u51FD\u6570\u8FD4\u56DE\uFF0C\u5B83\u5C31\u8FD4\u56DE\u4E0A\u4E00\u4E2A frame\u3002\u5B83\u662F\u4E00\u4E2A stack\uFF0C\u4E5F\u5C31\u662F\u6808\u7684\u7ED3\u6784\u3002"}),"\n",(0,s.jsx)(t.h2,{id:"\u83B7\u53D6\u5F53\u524D-frame",children:"\u83B7\u53D6\u5F53\u524D frame"}),"\n",(0,s.jsxs)(t.p,{children:["\u90A3\u5728 Python \u4EE3\u7801\u91CC\u9762\uFF0C\u6211\u4EEC\u662F\u53EF\u4EE5\u76F4\u63A5\u62FF\u5230\u5F53\u524D\u7684 frame \u8FD9\u4E2A object\u3002\u4E00\u822C\u6765\u8BF4\uFF0C\u6211\u4EEC\u662F\u4F7F\u7528 ",(0,s.jsx)(t.a,{href:"https://docs.python.org/3/library/inspect.html#inspect.currentframe",children:"inspect.currentframe()"}),"\u3002\u5F53\u7136\uFF0C\u6211\u4EEC\u4E5F\u53EF\u4EE5\u7528 ",(0,s.jsx)(t.a,{href:"https://docs.python.org/3/library/sys.html#sys._getframe",children:"sys._getframe()"}),"\u3002\u4E8B\u5B9E\u4E0A\uFF0C\u8FD9\u4E2A currentframe() \u5728\u6210\u529F\u7684\u65F6\u5019\u8C03\u7528\u7684\u5C31\u662F _getframe()\uFF0C\u53EA\u662F\u5B83\u4EEC\u4E24\u4E2A\u5728\u5931\u8D25\u65F6\u5019\u7684 behavior \u4E0D\u4E00\u6837\u3002\u90A3\u6211\u4EEC\u77E5\u9053\uFF0C\u524D\u9762\u52A0\u4E0B\u5212\u7EBF\u7684\u51FD\u6570\u4E00\u822C\u662F internal usage\uFF0C\u6240\u4EE5\u5C3D\u7BA1\u8FD9\u4E2A\u4E0B\u5212\u7EBF _getframe() \u662F\u53EF\u4EE5\u7528\u7684\uFF0C\u6211\u8FD8\u662F\u66F4\u63A8\u8350\u5927\u5BB6\u4F7F\u7528\u8FD9\u4E2A inspect \u91CC\u9762\u7684\u51FD\u6570\u3002"]}),"\n",(0,s.jsx)(t.p,{children:"\u90A3\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 objprint.op \u628A\u8FD9\u4E2A frame \u7ED9\u6253\u51FA\u6765\u3002"}),"\n",(0,s.jsx)(a.A,{variant:"frame",step:1}),"\n",(0,s.jsx)(t.p,{children:"\u53EF\u4EE5\u770B\u5230\u8FD9\u4E2A frame \u7684 attributes \u91CC\u9762\u90FD\u662F f_ \u5F00\u5934\u7684\u3002\u5982\u679C\u4F60\u8FD8\u8BB0\u5F97\u7684\u8BDD\uFF0C\u5728 code object \u91CC\u9762\uFF0C\u6240\u6709\u7684 attributes \u90FD\u662F co_ \u5F00\u5934\u7684\u3002\u90A3\u6211\u4EEC\u6765\u628A\u8FD9\u4E9B\u5C5E\u6027\u9010\u4E00\u7684\u8DDF\u5927\u5BB6\u4ECB\u7ECD\u4E00\u4E0B\u3002"}),"\n",(0,s.jsx)(t.h2,{id:"frame-\u7684\u5C5E\u6027",children:"frame \u7684\u5C5E\u6027"}),"\n",(0,s.jsx)(t.h3,{id:"\u8C03\u7528\u5173\u7CFB\u4E0E\u547D\u540D\u7A7A\u95F4",children:"\u8C03\u7528\u5173\u7CFB\u4E0E\u547D\u540D\u7A7A\u95F4"}),"\n",(0,s.jsx)(t.p,{children:"\u9996\u5148\uFF0C\u8FD9\u4E2A f_back \u662F\u5B83\u4E0A\u4E00\u4E2A frame\uFF0C\u4E5F\u5C31\u662F\u8C03\u7528\u8FD9\u4E2A\u51FD\u6570\u7684\u90A3\u4E2A\u51FD\u6570\uFF0C\u5B83\u6240\u5BF9\u5E94\u7684 frame\u3002\u90A3\u521A\u624D\u6211\u8BF4\u8FD9\u4E2A frame \u672C\u8D28\u662F\u4E00\u4E2A\u6808\u7ED3\u6784\uFF0C\u5B83\u7684\u5B9E\u73B0\u662F\u7528\u94FE\u8868\u6765\u5B8C\u6210\u7684\u3002\u6BCF\u4E00\u4E2A frame \u77E5\u9053\u8C03\u7528\u5B83\u7684\u90A3\u4E2A frame \u662F\u4EC0\u4E48\uFF0C\u7136\u540E\u901A\u8FC7 f_back \u8FDE\u63A5\u8D77\u6765\u3002"}),"\n",(0,s.jsx)(t.p,{children:"f_builtins \u662F\u8FD9\u4E2A frame \u4E0B\u5BF9\u5E94\u7684 builtins \u51FD\u6570\uFF0C\u4E5F\u5C31\u662F\u6240\u8C13\u7684\u5185\u7F6E\u51FD\u6570\u3002"}),"\n",(0,s.jsx)(t.p,{children:"f_code \u5C31\u662F\u6211\u4EEC\u4E4B\u524D\u8BB2\u5230\u8FC7\u7684\u90A3\u4E2A code object \u4E86\u3002\u8FD8\u8BB0\u4E0D\u8BB0\u5F97\u6211\u4EEC\u9700\u8981\u7528\u5230\u5F88\u591A\u8FD9\u4E2A code object \u91CC\u9762\u7684\u5185\u5BB9\uFF0C\u624D\u77E5\u9053\u7A0B\u5E8F\u5E94\u8BE5\u600E\u4E48\u8FD0\u884C\u3002\u8FD9\u4E2A code object \u91CC\u9762\u6709\u7F16\u8BD1\u671F\u6211\u4EEC\u62FF\u5230\u7684\u8DDF\u8FD9\u4E2A\u51FD\u6570\u6709\u5173\u7684\u4E8B\u513F\u3002\u90A3\u6700\u91CD\u8981\u7684\u6BD4\u5982\u5B83\u7684\u5B57\u8282\u7801\uFF0C\u5B83\u8FD9\u4E2A\u53D8\u91CF\u7684\u540D\u5B57\u4EEC\uFF0C\u8FD9\u4E9B\u4E1C\u897F\u3002"}),"\n",(0,s.jsx)(t.p,{children:"\u90A3 f_globals \u548C\u4E0B\u9762\u7684 f_locals \u5176\u5B9E\u90FD\u6BD4\u8F83\u597D\u7406\u89E3\uFF0C\u5C31\u662F\u8FD9\u4E2A\u51FD\u6570\u773C\u91CC\u7684\u5168\u5C40\u53D8\u91CF\u548C\u5C40\u90E8\u53D8\u91CF\u3002"}),"\n",(0,s.jsx)(t.p,{children:"\u8FD9\u4E2A f_locals \u91CC\u9762\u8BB0\u5F55\u4E86\u6211\u5F53\u524D\u8FD9\u4E2A frame \u91CC\u9762\u6240\u6709\u7684\u5C40\u90E8\u53D8\u91CF\u7684\u503C\u3002\u6211\u5728\u4E00\u4E2A\u51FD\u6570\u91CC\u9762\u5199\u5B8C a = 1\uFF0C\u5B83\u600E\u4E48\u77E5\u9053 a \u53D8\u6210 1 \u4E86\u5462\uFF1F\u5C31\u662F\u56E0\u4E3A\u901A\u8FC7\u8FD9\u4E2A f_locals\uFF0C\u8FD9\u4E2A frame \u8BB0\u4F4F\u4E86 a \u53D8\u6210 1 \u4E86\u3002\u5F53\u7136\u5728\u4E4B\u524D\u7684\u4E00\u7BC7\u6587\u7AE0\u91CC\u6211\u4EEC\u4E5F\u63D0\u5230\u4E86\u5BF9\u5427\uFF1F\u8FD9\u4E2A f_locals \u5176\u5B9E\u662F\u4E00\u4E2A\u8BFB\u51FA\u6765\u7684\u503C\uFF0C\u90A3\u5B83\u91CC\u9762\u771F\u6B63\u7684\u673A\u5236\u662F\u7528\u4E86\u4E00\u4E2A\u7C7B\u4F3C\u6570\u7EC4\u7684\u65B9\u5F0F\u53BB\u4FDD\u5B58\u7684\u8FD9\u4E9B local variable\u3002\u53EA\u662F\u673A\u5236\u4E0A\u4F60\u5B8C\u5168\u53EF\u4EE5\u8FD9\u4E48\u7406\u89E3\u3002"}),"\n",(0,s.jsx)(t.h3,{id:"\u5F53\u524D\u6267\u884C\u4F4D\u7F6E",children:"\u5F53\u524D\u6267\u884C\u4F4D\u7F6E"}),"\n",(0,s.jsx)(t.p,{children:"f_lasti \u5C31\u662F last instruction\u3002\u4F60\u53EF\u4EE5\u628A\u5B83\u7406\u89E3\u4E3A program counter\u3002\u5982\u679C\u4F60\u5B66\u8FC7\u6C47\u7F16\u7684\u8BDD\uFF0C\u5B83\u7684\u610F\u601D\u5C31\u662F\u6211\u73B0\u5728\u8FD0\u884C\u5230\u54EA\u4E00\u4E2A\u5B57\u8282\u7801\u4E86\u3002\u4E00\u4E2A\u51FD\u6570\u600E\u4E48\u77E5\u9053\u81EA\u5DF1\u8FD0\u884C\u5230\u54EA\u513F\uFF0C\u4E0B\u4E00\u4E2A\u5E94\u8BE5\u8FD0\u884C\u4EC0\u4E48\u4E86\u5462\uFF1F\u5C31\u662F\u901A\u8FC7\u8FD9\u4E2A last instruction\u3002\u90A3\u6BD4\u5982\u6211\u4E00\u4E2A\u51FD\u6570 a \u8C03\u7528\u51FD\u6570 b\uFF0C\u51FD\u6570 b \u8FD4\u56DE\u7684\u65F6\u5019\uFF0Ca \u600E\u4E48\u77E5\u9053\u5B83\u539F\u6765\u8FD0\u884C\u5230\u54EA\u513F\u4E86\u5462\uFF1F\u5C31\u662F\u901A\u8FC7\u8FD9\u4E2A last instruction\u3002\u5728 a \u7684 frame \u91CC\u9762\uFF0C\u5B83\u8BB0\u5F55\u4E86\u8FD9\u4E2A last instruction \u662F\u591A\u5C11\u3002\u6240\u4EE5\u5728 b \u51FD\u6570\u8FD4\u56DE\u7684\u65F6\u5019\uFF0C\u5B83\u53EF\u4EE5\u7EE7\u7EED\u8FD0\u884C\u3002"}),"\n",(0,s.jsx)(t.p,{children:"f_lineno\u3002\u5176\u5B9E\u8FD9\u4E2A\u66F4\u591A\u7684\u662F\u7ED9\u4EBA\u7C7B\u770B\u7684\uFF0C\u5C31\u662F\u6211\u73B0\u5728\u8FD0\u884C\u5230\u7B2C\u51E0\u884C\u4E86\u3002\u6211\u4EEC\u770B\u521A\u624D\u6253\u5370\u7684\u8FD9\u4E00\u884C\u4EE3\u7801\u662F\u5728\u7B2C 6 \u884C\u3002\u6240\u4EE5\u73B0\u5728 f_lineno \u662F 6\u3002"}),"\n",(0,s.jsx)(t.h3,{id:"trace-\u56DE\u8C03",children:"trace \u56DE\u8C03"}),"\n",(0,s.jsx)(t.p,{children:"\u4E0B\u9762\u8FD9\u4E09\u4EF6\u4E8B\u5462\uFF0C\u7406\u89E3\u96BE\u5EA6\u5C31\u4F1A\u7A0D\u5FAE\u5927\u4E00\u4E9B\uFF0C\u56E0\u4E3A\u5B83\u4EEC\u662F\u8DDF trace \u6709\u5173\u7684\u3002"}),"\n",(0,s.jsxs)(t.p,{children:["Python \u5141\u8BB8\u4F60\u5728\u6BCF\u8FD0\u884C\u4E00\u884C\u4EE3\u7801\u6216\u8005\u662F\u4E00\u4E2A\u5B57\u8282\u7801\u4E4B\u540E\u53BB trigger \u4E00\u4E2A callback function\u3002\u5C31\u6BCF\u8FD0\u884C\u4E00\u884C\u7A0B\u5E8F\u5C31\u8C03\u7528\u4E00\u4E0B\u4F60\u5199\u7684\u8FD9\u4E2A\u51FD\u6570\u3002\u90A3 Python \u91CC\u7684 debugger \u5C31\u662F\u901A\u8FC7\u8FD9\u4E2A\u673A\u5236\u6765\u5B8C\u6210\u7684\u3002\u6211\u4EEC\u6BD4\u8F83\u719F\u77E5\u7684 pdb \u5C31\u662F\u901A\u8FC7\u5B83\u6765\u5B8C\u6210\u7684\u3002\u5305\u62EC Python \u7684\u4E00\u4E9B\u5DE5\u5177\uFF0C\u6BD4\u5982\u8BF4 coverage \u6211\u4EEC\u975E\u5E38\u5E38\u7528\uFF0C\u4E5F\u662F\u901A\u8FC7\u8FD9\u4E2A\u673A\u5236\u6765\u5B8C\u6210\u7684\u3002\u90A3\u5F53 f_trace \u662F None \u7684\u65F6\u5019\uFF0C\u5B83\u5C31\u4E0D\u4F1A\u8C03\u7528\u4EFB\u4F55\u51FD\u6570\u3002\u800C\u5F53\u4F60\u901A\u8FC7 ",(0,s.jsx)(t.a,{href:"https://docs.python.org/3/library/sys.html#sys.settrace",children:"sys.settrace()"})," \u8BBE\u7F6E\u4E86\u4E00\u4E2A trace \u51FD\u6570\u7684\u65F6\u5019\uFF0C\u8FD9\u4E2A f_trace \u5C31\u4E0D\u662F None \u4E86\u3002\u90A3\u4E0B\u9762\u4E24\u4E2A\u5E03\u5C14\u503C\uFF0Cf_trace_lines \u8DDF f_trace_opcodes\uFF0C\u5C31\u662F\u8BF4\u4F60\u662F\u6BCF\u4E00\u884C trigger \u4E00\u4E0B\u8FD9\u4E2A\u51FD\u6570\uFF0C\u8FD8\u662F\u6BCF\u4E00\u4E2A\u5B57\u8282\u7801 trigger \u4E00\u4E0B\u8FD9\u4E2A\u51FD\u6570\u3002"]}),"\n",(0,s.jsx)(t.h2,{id:"\u67E5\u770B\u8C03\u7528\u8005",children:"\u67E5\u770B\u8C03\u7528\u8005"}),"\n",(0,s.jsx)(t.p,{children:"\u90A3 frame \u7684\u5B58\u5728\u5C31\u76F8\u5F53\u4E8E\u6211\u4EEC\u53EF\u4EE5\u5728 Python \u7684\u4EFB\u4F55\u4E00\u4E2A\u4F4D\u7F6E\u83B7\u53D6\u5230\u6574\u4E2A\u7684\u8C03\u7528\u6808\uFF0C\u4EE5\u53CA\u8FD9\u4E2A\u8C03\u7528\u6808\u91CC\u9762\u6BCF\u4E00\u5E27\u7684\u5168\u90E8\u60C5\u51B5\u3002\u8FD9\u5C31\u8BA9\u5F88\u591A\u9ED1\u9B54\u6CD5\u6210\u4E3A\u4E86\u53EF\u80FD\u3002"}),"\n",(0,s.jsx)(t.h3,{id:"\u8C03\u7528\u8005\u7684\u51FD\u6570\u540D",children:"\u8C03\u7528\u8005\u7684\u51FD\u6570\u540D"}),"\n",(0,s.jsx)(t.p,{children:"\u4E3E\u4E2A\u4F8B\u5B50\uFF0C\u6211\u60F3\u77E5\u9053\u8C03\u7528\u6211\u7684\u8FD9\u4E2A\u51FD\u6570\u5B83\u53EB\u4EC0\u4E48\u540D\u5B57\uFF1F\u6211\u4EEC\u770B\u6211\u4EEC\u5C31\u53EF\u4EE5\u5728\u62FF\u5230\u4E86\u5F53\u524D\u8FD9\u4E2A frame \u4E4B\u540E\uFF0C\u627E\u5230\u8FD9\u4E2A frame \u7684 f_back\uFF0C\u7136\u540E\u62FF\u5230\u5B83\u7684 f_code\uFF0C\u6253\u5370\u5B83\u8FD9\u4E2A f_code \u91CC\u9762\u7684 co_name\u3002"}),"\n",(0,s.jsx)(a.A,{variant:"frame",step:2}),"\n",(0,s.jsx)(t.p,{children:"\u5F53\u8FD9\u4E2A f \u51FD\u6570\u662F\u88AB g \u51FD\u6570\u8C03\u7528\u7684\u65F6\u5019\uFF0C\u53EF\u4EE5\u770B\u5230\u5B83\u6253\u5370\u51FA\u6765\u4E00\u4E2A g\u3002"}),"\n",(0,s.jsx)(t.h3,{id:"\u8C03\u7528\u8005\u7684\u5C40\u90E8\u53D8\u91CF",children:"\u8C03\u7528\u8005\u7684\u5C40\u90E8\u53D8\u91CF"}),"\n",(0,s.jsx)(t.p,{children:"\u8FD8\u6BD4\u5982\u8BF4\u6211\u60F3\u77E5\u9053\u8C03\u7528\u6211\u7684\u8FD9\u4E2A\u51FD\u6570\u5B83\u7684\u5C40\u90E8\u53D8\u91CF\u662F\u4EC0\u4E48\u6837\u7684\uFF1F\u6211\u5C31\u53EF\u4EE5\u7528 frame.f_back\uFF0C\u7136\u540E .f_locals\u3002\u6211\u4EEC\u770B\u5728 g \u91CC\u9762\u8FD0\u884C f \u4E4B\u524D\uFF0C\u6211\u5148\u505A\u4E86\u4E00\u4E2A a \u7B49\u4E8E 3\uFF0C\u53C8\u505A\u4E86\u4E00\u4E2A b \u7B49\u4E8E 4\u3002"}),"\n",(0,s.jsx)(a.A,{variant:"frame",step:3}),"\n",(0,s.jsx)(t.p,{children:"\u5728\u8FD0\u884C\u8FD9\u4E2A\u7A0B\u5E8F\u7684\u65F6\u5019\uFF0C\u8FD9\u4E2A f \u5C31\u77E5\u9053\u8C03\u7528\u6211\u7684\u90A3\u4E2A\u51FD\u6570\uFF0C\u5F53\u524D\u7684 frame \u91CC\u9762\uFF0Ca \u662F 3\uFF0Cb \u662F 4\u3002"}),"\n",(0,s.jsx)(t.h3,{id:"\u8C03\u7528\u53D1\u751F\u7684\u4F4D\u7F6E",children:"\u8C03\u7528\u53D1\u751F\u7684\u4F4D\u7F6E"}),"\n",(0,s.jsx)(t.p,{children:"\u53C8\u6BD4\u5982\u8BF4\u6211\u60F3\u77E5\u9053\u8C03\u7528\u6211\u7684\u8FD9\u4E2A\u51FD\u6570\u662F\u5728\u4EC0\u4E48\u5730\u65B9\u8C03\u7528\u7684\u6211\uFF1F\u6709\u7684\u65F6\u5019\u4F60\u53EF\u80FD\u6709\u4E00\u4E2A utility function\uFF0C\u8FD9\u4E2A function \u5728\u5F88\u591A\u5730\u65B9\u88AB\u8C03\u7528\u8FC7\u3002\u90A3\u4F60\u60F3\u77E5\u9053\u67D0\u4E00\u4E2A\u72B6\u6001\u4E0B\u662F\u8C01\u8C03\u7528\u7684\u5B83\uFF1F\u6211\u4EEC\u4E5F\u53EF\u4EE5\u7528 frame \u6765\u5B8C\u6210\u8FD9\u4E2A\u4E8B\u513F\u3002\u6211\u4EEC\u53EF\u4EE5\u7528\u8FD9\u4E2A f_code.co_filename \u6765\u62FF\u5230\u8C03\u7528\u5B83\u7684\u8FD9\u4E2A\u51FD\u6570\u6240\u5728\u7684\u6587\u4EF6\u3002\u7136\u540E\u7528 f_back.f_lineno \u6765\u62FF\u5230\u5F53\u524D\u60C5\u51B5\u4E0B\u5B83\u5728\u54EA\u4E00\u884C\u3002"}),"\n",(0,s.jsx)(a.A,{variant:"frame",step:4,nav:!0}),"\n",(0,s.jsx)(t.p,{children:"\u53EF\u4EE5\u770B\u5230\u8FD0\u884C\u7684\u65F6\u5019\uFF0C\u5B83\u4F1A\u544A\u8BC9\u4F60\uFF0C\u662F\u5728\u8FD9\u4E2A\u6587\u4EF6\u4E0B\u5F53\u524D\u662F\u5728\u7B2C 11 \u884C\u3002\u6211\u4EEC\u770B\u4E0A\u9762\u7684\u7A0B\u5E8F\uFF0C\u786E\u5B9E\u662F\u5728\u7B2C 11 \u884C\u8C03\u7528\u7684 f \u51FD\u6570\u3002"}),"\n",(0,s.jsx)(t.h2,{id:"frame-\u7684\u7528\u9014\u4E0E\u5F00\u9500",children:"frame \u7684\u7528\u9014\u4E0E\u5F00\u9500"}),"\n",(0,s.jsx)(t.p,{children:"\u90A3 Python \u8FD9\u4E2A frame \u7684\u673A\u5236\u5B9E\u9645\u4E0A\u662F\u8BA9 Python \u7684\u8C03\u7528\u7ED3\u6784\u53D8\u5F97\u975E\u5E38\u975E\u5E38\u6E05\u6670\u7684\u3002\u800C\u4E14\u4F60\u53EF\u4EE5\u5728\u7A0B\u5E8F\u4E2D\u4EFB\u4F55\u4E00\u4E2A\u5730\u65B9\uFF0C\u62FF\u5230\u5168\u90E8\u7684\u8C03\u7528\u6808\uFF0C\u4EE5\u53CA\u6BCF\u4E00\u4E2A frame \u7684\u6240\u6709\u72B6\u6001\uFF0C\u4E5F\u5C31\u662F\u8BF4\u4F60\u51E0\u4E4E\u53EF\u4EE5\u968F\u65F6\u968F\u523B\u7684\u638C\u63E1\u6574\u4E2A Python \u8FD0\u884C\u7684\u72B6\u6001\u3002\u5BF9\u4E8E debug \u6765\u8BF4\uFF0C\u6216\u8005\u5BF9\u4E8E\u67D0\u4E00\u4E9B\u559C\u6B22\u9ED1\u9B54\u6CD5\u7684\u4EBA\u6765\u8BF4\uFF0C\u8FD9\u7EDD\u5BF9\u662F\u4E00\u4E2A\u597D\u4E8B\u513F\u3002"}),"\n",(0,s.jsx)(t.p,{children:"\u5F53\u7136\u4ECE\u53E6\u4E00\u4E2A\u89D2\u5EA6\u8BB2\uFF0C\u8FD9\u4E2A frame \u7684\u673A\u5236\u4E5F\u589E\u52A0\u4E86\u4E00\u5B9A\u7684 Python \u51FD\u6570\u8C03\u7528\u7684 overhead\u3002\u5C3D\u7BA1\u5BF9\u4E8E frame \u8FD9\u4E2A\u5730\u65B9\uFF0CCPython \u662F\u6709\u505A\u7279\u522B\u7684\u4F18\u5316\u7684\uFF0C\u5E76\u4E0D\u7528\u6BCF\u4E00\u6B21\u51FD\u6570\u8C03\u7528\u771F\u7684\u9700\u8981\u53BB new \u4E00\u4E2A\u65B0\u7684 frame object\uFF0C\u5B83\u4F1A\u91CD\u590D\u5229\u7528\u4E4B\u524D\u7684 frame\u3002\u4F46\u662F\u8FD9\u4E2A\u673A\u5236\u4F9D\u7136\u6709\u7740\u6BD4\u8F83\u660E\u663E\u7684 overhead\u3002\u6240\u4EE5\u7ECF\u5E38\u6709\u7684\u65F6\u5019\u4F60\u4F1A\u53D1\u73B0\uFF0C\u5F53\u4F60\u5199\u4E00\u4E9B\u6BD4\u8F83\u5C0F\u6BD4\u8F83\u77ED\u7684\u51FD\u6570\u7684\u65F6\u5019\uFF0C\u51FD\u6570\u8C03\u7528\u53CD\u800C\u6210\u4E86\u6574\u4E2A\u7A0B\u5E8F\u91CC\u9762\u6700\u8017\u65F6\u7684\u5730\u65B9\u3002"}),"\n",(0,s.jsx)(t.p,{children:"\u597D\u90A3\u4ECA\u5929\u5BF9 frame \u7684\u4ECB\u7ECD\u5C31\u5230\u8FD9\u91CC\u3002\u5E0C\u671B\u5BF9\u5927\u5BB6\u6709\u6240\u5E2E\u52A9\u3002"})]})}function p(e={}){let{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(f,{...e})}):f(e)}},83573(e,t,n){n.d(t,{A:()=>l});var r=n(96540);let s=(...e)=>e.filter((e,t,n)=>!!e&&""!==e.trim()&&n.indexOf(e)===t).join(" ").trim(),o=e=>{let t=e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase());return t.charAt(0).toUpperCase()+t.slice(1)};var a={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let i=(0,r.forwardRef)(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:o,className:i="",children:l,iconNode:c,...d},f)=>(0,r.createElement)("svg",{ref:f,...a,width:t,height:t,stroke:e,strokeWidth:o?24*Number(n)/Number(t):n,className:s("lucide",i),...!l&&!(e=>{for(let t in e)if(t.startsWith("aria-")||"role"===t||"title"===t)return!0;return!1})(d)&&{"aria-hidden":"true"},...d},[...c.map(([e,t])=>(0,r.createElement)(e,t)),...Array.isArray(l)?l:[l]])),l=(e,t)=>{let n=(0,r.forwardRef)(({className:n,...a},l)=>(0,r.createElement)(i,{ref:l,iconNode:t,className:s(`lucide-${o(e).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,n),...a}));return n.displayName=o(e),n}},45773(e,t,n){n.d(t,{A:()=>r});let r=(0,n(83573).A)("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]])},35404(e,t,n){n.d(t,{A:()=>r});let r=(0,n(83573).A)("copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]])},67810(e,t,n){n.d(t,{A:()=>o});var r=n(83941),s=n(61022);function o(){let{prism:e}=(0,s.p)(),{colorMode:t}=(0,r.G)(),n=e.theme,o=e.darkTheme||n;return"dark"===t?o:n}},17191(e,t,n){n.d(t,{A:()=>R});var r=n(74848),s=n(96540),o=n(34164),a=n(67810);let i=[{title:"\u642D\u597D\u9879\u76EE\u9AA8\u67B6",body:["\u6838\u5FC3\u4EE3\u7801\u653E\u8FDB `vector/` \u5305\uFF0C\u6D4B\u8BD5\u653E\u8FDB `tests/` \u5305\uFF0C\u4E24\u4E2A\u6587\u4EF6\u5939\u90FD\u6709 `__init__.py`\uFF0C\u6839\u76EE\u5F55\u53EA\u7559\u4E00\u4E2A\u5165\u53E3\u6587\u4EF6\u3002","\u5728\u6839\u76EE\u5F55\u8FD0\u884C `python -m unittest`\uFF0Cunittest \u4F1A\u81EA\u52A8\u627E\u5230 `tests/test_vector.py` \u91CC\u7684 `test_init` \u5E76\u8FD0\u884C\u3002\u70B9\u5DE6\u4FA7\u6587\u4EF6\u6811\u53EF\u4EE5\u770B\u6BCF\u4E2A\u6587\u4EF6\u3002"],file:"tests/test_vector.py",files:{"examply.py":"",".gitignore":`# Python-generated files
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
`}},{title:"\u8BFB\u53D6\u8C03\u7528\u8005\u7684\u51FD\u6570\u540D",body:[],file:"main.py",files:{"main.py":`import inspect

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
`},runs:[{cmd:"python main.py",exit:0,output:"/private/tmp/blog-frame-demo/main.py\n11\n"}]}];var d=n(17181);let f=[{title:"\u7B2C\u4E00\u6B21 API \u8C03\u7528",body:["\u6211\u4EEC\u5148\u5199\u4E00\u4E2A\u6700\u7B80\u5355\u7684\u811A\u672C\uFF1A\u7528 `Anthropic()` \u521B\u5EFA\u5BA2\u6237\u7AEF\uFF0C\u8C03\u7528 `messages.create()` \u53D1\u9001\u4E00\u53E5\u7CFB\u7EDF\u63D0\u793A\u8BCD\u548C\u4E00\u6761\u7528\u6237\u6D88\u606F\uFF0C\u7136\u540E\u628A\u56DE\u590D\u91CC\u7684 text \u5757\u6253\u5370\u51FA\u6765\u3002\u8FD9\u91CC\u6CA1\u6709\u5DE5\u5177\uFF0C\u4E5F\u6CA1\u6709\u5FAA\u73AF\uFF0C\u6A21\u578B\u53EA\u80FD\u804A\u5929\u3002","\u8FD9\u4E2A\u811A\u672C\u8D70\u7684\u662F DeepSeek \u7684 Anthropic \u517C\u5BB9\u63A5\u53E3\uFF0C\u6240\u4EE5 `base_url` \u548C `model` \u586B\u7684\u662F DeepSeek \u7684\u503C\u3002\u5982\u679C\u6362\u56DE\u5B98\u65B9\u63A5\u53E3\uFF0C\u53EA\u9700\u8981\u5220\u6389 `base_url` \u5E76\u6539\u6A21\u578B\u540D\u3002"],file:"agent.py",files:{"agent.py":d.A.s00["agent.py"]}},{title:"\u52A0\u5165 search_products \u5DE5\u5177",body:["\u8FD9\u4E00\u6B65\u4E00\u6B21\u52A0\u5165\u4E86\u56DB\u6837\u4E1C\u897F\uFF1A\u5047\u5546\u54C1\u5217\u8868\u3001\u5DE5\u5177 schema\u3001\u641C\u7D22\u51FD\u6570\u548C\u5BF9\u8BDD\u5FAA\u73AF\u3002\u7EFF\u5E95\u7684\u884C\u662F\u76F8\u5BF9\u4E0A\u4E00\u6B65\u65B0\u589E\u7684\u5185\u5BB9\uFF0C\u53F3\u4E0A\u89D2\u53EF\u4EE5\u5207\u6362\u5230\u201C\u53EA\u770B\u5F53\u524D\u201D\u67E5\u770B\u5B8C\u6574\u6587\u4EF6\u3002","\u63A5\u4E0B\u6765\u7684\u4E09\u6B65\uFF0C\u6211\u4EEC\u628A\u8FD9\u56DB\u6837\u4E1C\u897F\u62C6\u5F00\u9010\u6BB5\u6765\u770B\u3002"],file:"agent.py",files:{"agent.py":d.A.s01["agent.py"]}},{title:"\u5DE5\u5177 schema \u5C31\u662F\u7ED9\u6A21\u578B\u7684\u8BF4\u660E\u4E66",body:["`description` \u4E0D\u662F\u6CE8\u91CA\uFF0C\u800C\u662F\u7ED9\u6A21\u578B\u7684\u4F7F\u7528\u8BF4\u660E\uFF1A\u4EC0\u4E48\u65F6\u5019\u8BE5\u641C\u3001\u600E\u4E48\u641C\u3001\u987E\u5BA2\u63D0\u5230\u591A\u4E2A\u5546\u54C1\u65F6\u8981\u5206\u5F00\u641C\u3002`input_schema` \u91CC\u6BCF\u4E2A\u5B57\u6BB5\u7684 description \u4E5F\u662F\u540C\u6837\u7684\u9053\u7406\u3002","\u6A21\u578B\u53EA\u80FD\u770B\u5230\u8FD9\u6BB5\u6587\u5B57\uFF0C\u770B\u4E0D\u5230\u51FD\u6570\u4F53\u3002\u56E0\u6B64\u51FD\u6570\u5199\u5F97\u518D\u597D\uFF0C\u5982\u679C description \u6CA1\u6709\u8BF4\u6E05\u695A\uFF0C\u6A21\u578B\u7167\u6837\u4E0D\u4F1A\u7528\uFF0C\u6216\u8005\u7528\u9519\u3002"],file:"agent.py",lines:[[49,72]]},{title:"\u641C\u7D22\u51FD\u6570\u4E0E\u5206\u53D1\u8868",body:["\u641C\u7D22\u51FD\u6570\u53EA\u505A\u5173\u952E\u8BCD\u5339\u914D\uFF0C\u5E76\u8FD4\u56DE JSON \u5B57\u7B26\u4E32\u3002\u8FD9\u662F\u56E0\u4E3A\u5DE5\u5177\u7ED3\u679C\u6700\u7EC8\u8981\u4F5C\u4E3A\u6587\u672C\u653E\u8FDB messages\uFF0C\u6240\u4EE5\u6211\u4EEC\u5728\u8FD9\u91CC\u76F4\u63A5\u5E8F\u5217\u5316\u3002","`TOOL_MAP` \u628A\u5DE5\u5177\u540D\u6620\u5C04\u5230\u5BF9\u5E94\u7684\u51FD\u6570\u3002\u4EE5\u540E\u52A0\u65B0\u5DE5\u5177\u65F6\uFF0C\u53EA\u9700\u8981\u5F80\u8FD9\u5F20\u8868\u91CC\u6DFB\u4E00\u884C\uFF0C\u5FAA\u73AF\u672C\u8EAB\u4E0D\u7528\u6539\u52A8\u3002"],file:"agent.py",lines:[[75,87]]},{title:"\u4E24\u5C42 while",body:["\u5916\u5C42 `while` \u8D1F\u8D23\u7B49\u5F85\u7528\u6237\u8F93\u5165\uFF0C\u9047\u5230\u7A7A\u8F93\u5165\u5C31\u9000\u51FA\u3002\u5185\u5C42 `while` \u624D\u662F agent \u5FAA\u73AF\u7684\u672C\u4F53\uFF1A\u8C03\u7528\u6A21\u578B\uFF0C\u628A assistant \u7684\u56DE\u590D\u6574\u4E2A\u8FFD\u52A0\u8FDB messages\uFF1B\u5982\u679C `stop_reason` \u4E0D\u662F `tool_use` \u5C31\u8DF3\u51FA\uFF1B\u5426\u5219\u6267\u884C\u6BCF\u4E00\u4E2A tool_use \u5757\uFF0C\u628A `tool_result` \u6253\u5305\u6210\u4E00\u6761 user \u6D88\u606F\u8FFD\u52A0\u8FDB\u53BB\uFF0C\u7136\u540E\u518D\u5FAA\u73AF\u4E00\u6B21\u3002","\u6709\u4E00\u4E2A\u7EC6\u8282\u9700\u8981\u6CE8\u610F\uFF1Aassistant \u7684 `response.content` \u8981\u539F\u6837\u8FFD\u52A0\uFF0C\u5305\u62EC\u5176\u4E2D\u7684 tool_use \u5757\uFF1B\u4E0B\u4E00\u6761 user \u6D88\u606F\u91CC\u7684 `tool_use_id` \u5FC5\u987B\u4E0E\u4E4B\u5BF9\u5E94\uFF0C\u6A21\u578B\u624D\u77E5\u9053\u54EA\u4E2A\u7ED3\u679C\u5C5E\u4E8E\u54EA\u6B21\u8C03\u7528\u3002"],file:"agent.py",lines:[[102,139]]}],p="\u8FD0\u884C",m="\u81EA\u52A8\u6362\u884C",u="\u53D6\u6D88\u81EA\u52A8\u6362\u884C",_="\u6536\u8D77",h={unittest:{steps:i},codeObject:{steps:l},frame:{steps:c},commerce:{steps:f},iterator:{steps:[{title:"\u904D\u5386\u94FE\u8868",body:[],file:"main.py",files:{"main.py":`class NodeIter:
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
`}]}]}};var y=n(51507),v=n(67564);let b="btn_JmFc",g="btnPrimary_x2Yk",x="termBtn_CC8E",j="termBtnOpen_rzSH",w="termIcon_Zbcm";function A(e,t){return e.replace(/\{(\w+)\}/g,(e,n)=>void 0!==t[n]?String(t[n]):`{${n}}`)}function E({text:e}){return e.split(/(`[^`]+`)/g).map((e,t)=>e.startsWith("`")&&e.endsWith("`")&&e.length>=2?(0,r.jsx)("code",{className:"inlineCode_AI70",children:e.slice(1,-1)},t):(0,r.jsx)(s.Fragment,{children:e},t))}function k(e){return(0,r.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",...e,children:(0,r.jsx)("polygon",{points:"6 3 20 12 6 21 6 3"})})}function N(e){return(0,r.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",...e,children:[(0,r.jsx)("rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}),(0,r.jsx)("path",{d:"m7 11 2-2-2-2"}),(0,r.jsx)("path",{d:"M11 13h4"})]})}function T(e){return(0,r.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",...e,children:[(0,r.jsx)("path",{d:"M3 6h18"}),(0,r.jsx)("path",{d:"M3 12h15a3 3 0 1 1 0 6h-4"}),(0,r.jsx)("path",{d:"m16 16-2 2 2 2"}),(0,r.jsx)("path",{d:"M3 18h7"})]})}function O(e){return(0,r.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",...e,children:(0,r.jsx)("rect",{x:"4",y:"4",width:"16",height:"16",rx:"2"})})}function S({run:e,wrap:t}){let n=(0,s.useMemo)(()=>e.output.replace(/\n$/,"").split("\n"),[e.output]),{shown:a,started:i,done:l}=(0,y.A)(n,!0);return(0,r.jsxs)("div",{className:(0,o.A)("termOutput_aJer",t&&"termOutputWrap_ZhlF"),"aria-live":"polite",children:[(0,r.jsxs)("div",{className:"termOutputRow_eFC7",children:[(0,r.jsx)("span",{className:"termMark_yyoX",title:"\u9884\u5148\u5F55\u5236\u7684\u8FD0\u884C\u7ED3\u679C\uFF0C\u4E0D\u662F\u6D4F\u89C8\u5668\u5B9E\u65F6\u6267\u884C",children:(0,r.jsx)(N,{className:"termMarkIcon_o1H5","aria-label":"\u7EC8\u7AEF",role:"img"})}),(0,r.jsxs)("div",{className:"termOutputBody_dl5T",children:[!i&&(0,r.jsx)("div",{className:"termRunning_L5SW",children:"\u8FD0\u884C\u4E2D\u2026"}),n.slice(0,a).map((e,t)=>(0,r.jsx)("div",{className:(0,o.A)("run-output__line","termLine_seW0"),children:""===e?" ":e},t)),i&&!l&&(0,r.jsx)("span",{className:"run-output__cursor"})]})]}),l&&(0,r.jsx)("div",{className:(0,o.A)("termFoot_BTl4",0!==e.exit&&"termFootFail_H1CC"),children:A("\u8FDB\u7A0B\u9000\u51FA\uFF0C\u9000\u51FA\u7801 {code}",{code:e.exit})})]})}function R({variant:e,step:t=1,nav:n=!1}){let s=h[e];if(!s)throw Error(`CodeWalkthrough: unknown variant "${e}"`);return(0,r.jsx)(L,{data:s,initialStep:t,nav:n},e)}function L({data:e,initialStep:t,nav:n}){let i,{steps:l}=e,c=(0,a.A)(),d=(0,s.useMemo)(()=>(function(e){let t=[],n={};for(let r of e){for(let[e,t]of(n={...n},Object.entries(r.files||{})))null===t?delete n[e]:n[e]=t;t.push(n)}return t})(l),[l]),f=(0,s.useMemo)(()=>1===new Set(d.flatMap(Object.keys)).size,[d]),[h,y]=(0,s.useState)(()=>Math.min(Math.max(t-1,0),l.length-1)),[N,R]=(0,s.useState)(null),[C,V]=(0,s.useState)(!1),F=l[h],M=d[h],D=h>0?d[h-1]:null,U=c.plain.backgroundColor,P=F.runs||[],I=e=>{l[e]&&(y(e),R(null))};return(0,r.jsxs)("div",{className:"root_lC3A",children:[(0,r.jsxs)("div",{className:"stepsPanel_A8J6",children:[(0,r.jsxs)("div",{className:"stepHead_rWEC",children:[(0,r.jsx)("span",{className:"stepTitle_eRCc",children:A("\u7B2C {n} \u6B65 \xb7 {title}",{n:h+1,title:F.title})}),(0,r.jsx)("span",{className:"stepCounter_d1xs",children:A("{n} / {total}",{n:h+1,total:l.length})})]}),(0,r.jsx)("div",{className:"stepBody_xfZr",children:F.body.map((e,t)=>(0,r.jsx)("p",{children:(0,r.jsx)(E,{text:e})},t))}),n&&(0,r.jsxs)("div",{className:"navButtons_ENqt",children:[(0,r.jsx)("button",{type:"button",disabled:0===h,onClick:()=>I(h-1),className:(0,o.A)(b,g),children:"\u4E0A\u4E00\u6B65"}),(0,r.jsx)("button",{type:"button",disabled:h===l.length-1,onClick:()=>I(h+1),className:(0,o.A)(b,g),children:"\u4E0B\u4E00\u6B65"})]})]}),(0,r.jsx)(v.A,{files:M,previousFiles:D,stepKey:h,preferredFiles:(i=Object.keys(F.files||{}).filter(e=>Object.hasOwn(M,e)),(F.file?[F.file,...i.filter(e=>e!==F.file)]:i).filter(e=>Object.hasOwn(M,e))),focusFile:F.file,focusRanges:F.lines,single:f}),P.length>0&&(0,r.jsx)("div",{className:"terminal_x6YH",style:{backgroundColor:U,color:c.plain.color},children:P.map((e,t)=>{let n=N===t;return(0,r.jsxs)("div",{className:"termRun_pPQl",children:[(0,r.jsxs)("div",{className:"termPrompt__Qbi",children:[(0,r.jsx)("span",{className:"termDollar_FMaj","aria-hidden":"true",children:"$"}),(0,r.jsx)("code",{className:"termCmd_KH0y",children:e.cmd}),n&&(0,r.jsx)("button",{type:"button","aria-pressed":C,"aria-label":C?u:m,title:C?u:m,onClick:()=>V(!C),className:(0,o.A)(x,C&&j),children:(0,r.jsx)(T,{className:w})}),(0,r.jsx)("button",{type:"button","aria-expanded":n,"aria-label":n?_:p,title:n?_:p,onClick:()=>R(n?null:t),className:(0,o.A)(x,n&&j),children:n?(0,r.jsx)(O,{className:w}):(0,r.jsx)(k,{className:w})})]}),n&&(0,r.jsx)(S,{run:e,wrap:C})]},`${h}-${t}`)})})]})}},67564(e,t,n){n.d(t,{A:()=>X});var r,s,o,a,i,l,c,d,f,p,m,u,_,h,y=n(74848),v=n(96540),b=n(34164),g=n(83573);let x=(0,g.A)("file-diff",[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M9 10h6",key:"9gxzsh"}],["path",{d:"M12 13V7",key:"h0r20n"}],["path",{d:"M9 17h6",key:"r8uit2"}]]),j=(0,g.A)("file-code-corner",[["path",{d:"M4 12.15V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3.35",key:"1wthlu"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"m5 16-3 3 3 3",key:"331omg"}],["path",{d:"m9 22 3-3-3-3",key:"lsp7cz"}]]);var w=n(71765),A=n(67810);let E={"files.heading":"\u6587\u4EF6","copy.idle":"\u590D\u5236\u4EE3\u7801","copy.copying":"\u590D\u5236\u4E2D\u2026","copy.copied":"\u5DF2\u590D\u5236","copy.error":"\u590D\u5236\u5931\u8D25","copy.hint":"\u590D\u5236\u5F53\u524D\u6B65\u9AA4\u4E2D {path} \u7684\u5B8C\u6574\u4EE3\u7801","copy.empty":"\u8BF7\u5148\u9009\u62E9\u4E00\u4E2A\u6587\u4EF6","copy.errorHint":"\u590D\u5236\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\u6216\u624B\u52A8\u9009\u62E9\u4EE3\u7801\u590D\u5236","diff.show":"\u663E\u793A\u6539\u52A8","diff.hide":"\u53EA\u770B\u5F53\u524D","badge.new":"\u65B0\u6587\u4EF6","badge.changed":"\u5DF2\u4FEE\u6539","aria.codeActions":"\u4EE3\u7801\u64CD\u4F5C","aria.openFiles":"\u5DF2\u6253\u5F00\u7684\u6587\u4EF6","aria.closeTab":"\u5173\u95ED {path}","empty.title":"\u6CA1\u6709\u6253\u5F00\u7684\u6587\u4EF6","empty.body":"\u4ECE\u6587\u4EF6\u5217\u8868\u6253\u5F00\u4E00\u4E2A\u6587\u4EF6\uFF0C\u6216\u901A\u8FC7\u6F14\u7EC3\u6B65\u9AA4\u8FDB\u884C\u5BFC\u822A"},k=(e,t)=>null!=t&&Object.hasOwn(e,t);function N(e,t,n,r){let s=!e||!Object.is(e.stepKey,r),o=[...new Set(n)].filter(e=>k(t,e)),a=(e?.tabs||[]).filter(e=>k(t,e)),i=s?[...o,...a.filter(e=>!o.includes(e))]:a,l=s&&o[0]||(i.includes(e?.activeFile)?e.activeFile:i[0])||null;return{files:t,stepKey:r,tabs:i,activeFile:l}}var T=n(45773);let O=(0,g.A)("circle-alert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);var S=n(35404);let R="treeItem_xqPD",L="treeName_oNgA",C="codeActionButton_f4xz",V="codeActionIcon_Y_2N";function F({text:e,path:t}){let[n,r]=(0,v.useState)("idle"),s=(0,v.useRef)(null),o=(0,v.useRef)(0),a=(0,v.useRef)(!1),i="string"==typeof e;(0,v.useEffect)(()=>()=>{clearTimeout(s.current),o.current+=1},[]);let l=async()=>{if(!i||a.current)return;let t=++o.current;a.current=!0,clearTimeout(s.current),r("copying");try{if(await navigator.clipboard.writeText(e),t!==o.current)return;r("copied"),s.current=setTimeout(()=>r("idle"),2e3)}catch{if(t!==o.current)return;r("error")}finally{t===o.current&&(a.current=!1)}},c=E[`copy.${n}`],d=i?"error"===n?E["copy.errorHint"]:"idle"===n?E["copy.hint"].replace("{path}",t):c:E["copy.empty"],f="copied"===n?T.A:"error"===n?O:S.A;return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("button",{type:"button",className:(0,b.A)(C,"copied"===n&&"codeActionCopied_IhRM","error"===n&&"codeActionError_O3I0"),disabled:!i||"copying"===n,onClick:l,title:d,"aria-label":d,"aria-busy":"copying"===n,children:(0,y.jsx)(f,{className:V,"aria-hidden":"true",focusable:"false"})}),(0,y.jsx)("span",{className:"copyStatus_X_3r",role:"status","aria-live":"polite","aria-atomic":"true",children:"copied"===n?E["copy.copied"]:"error"===n?E["copy.errorHint"]:""})]})}function M(){return(M=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}function D(){return(D=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}function U(){return(U=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}function P(){return(P=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}function I(){return(I=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}function q(){return(q=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}function B(){return(B=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}function H(){return(H=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}function W(){return(W=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}let z=new Map([[".gitignore","git"],[".gitignore-global","git"],[".gitignore_global","git"],[".git-blame-ignore","git"],[".gitconfig","git"],[".gitattributes","git"],[".gitmodules","git"],[".gitkeep","git"],[".gitinclude","git"],["requirements.txt","python"],["pipfile","python"],[".python-version","python"],["manifest.in","python"],["pylintrc","python"],[".pylintrc","python"],["setup.cfg","python"],["pyproject.toml","gear"],[".env","gear"]]),K=new Map([["py","python"],["python","python"],["pyi","python"],["pyw","python"],["toml","gear"],["env","gear"],["json","brackets-yellow"],["jsonc","brackets-yellow"],["json5","brackets-yellow"],["md","markdown"],["markdown","markdown"],["txt","text"]]),$=new Set(["test","tests","spec","specs"]),J="chevron_lDAJ",Q={python:({title:e,titleId:t,...n})=>v.createElement("svg",M({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24","aria-labelledby":t},n),e?v.createElement("title",{id:t},e):null,r||(r=v.createElement("path",{fill:"#14B8A6",fillRule:"evenodd",d:"M14.622 21.322c-.6.11-1.284.174-1.999.178a12.5 12.5 0 0 1-2.179-.178c-1.136-.198-2.092-1.086-2.092-2.269v-4.156c0-1.217.93-2.217 2.092-2.217h4.178c1.418 0 2.613-1.271 2.613-2.712V7.974h1.438c1.216 0 1.926.92 2.223 2.213.401 1.735.384 2.773 0 4.435-.332 1.45-1.398 2.212-2.613 2.212h-5.752v.555h4.183v1.664c0 1.26-.322 1.942-2.092 2.269m-.176-2.837c-.532 0-.963.45-.963 1.005s.43 1.005.963 1.005.963-.45.963-1.005-.43-1.005-.963-1.005",clipRule:"evenodd"})),s||(s=v.createElement("path",{fill:"#14B8A6",fillRule:"evenodd",d:"M9.378 2.678c.6-.11 1.284-.174 1.999-.178.715-.003 1.46.053 2.179.178 1.136.198 2.092 1.086 2.092 2.269v4.156c0 1.217-.93 2.217-2.092 2.217H9.378c-1.418 0-2.613 1.271-2.613 2.712v1.994H5.327c-1.216 0-1.926-.92-2.223-2.213-.401-1.735-.384-2.773 0-4.435.332-1.45 1.397-2.213 2.613-2.213h5.752v-.554H7.286V4.947c0-1.26.322-1.942 2.092-2.269m.176 2.838c.532 0 .963-.45.963-1.005s-.43-1.006-.963-1.006-.964.45-.964 1.006c0 .555.432 1.005.964 1.005",clipRule:"evenodd"}))),git:({title:e,titleId:t,...n})=>v.createElement("svg",D({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24","aria-labelledby":t},n),e?v.createElement("title",{id:t},e):null,o||(o=v.createElement("path",{fill:"#F87171",d:"m20.661 11.198-7.86-7.859a1.16 1.16 0 0 0-1.639 0L9.53 4.972l2.07 2.07a1.376 1.376 0 0 1 1.744 1.755l1.995 1.995a1.377 1.377 0 0 1 1.425 2.278 1.38 1.38 0 0 1-2.251-1.5l-1.86-1.861-.001 4.897q.198.097.365.26a1.38 1.38 0 1 1-1.5-.3V9.623a1.379 1.379 0 0 1-.749-1.809l-2.04-2.04-5.388 5.388a1.16 1.16 0 0 0 0 1.64l7.859 7.858a1.16 1.16 0 0 0 1.64 0l7.822-7.821a1.16 1.16 0 0 0 0-1.64"}))),gear:({title:e,titleId:t,...n})=>v.createElement("svg",U({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24","aria-labelledby":t},n),e?v.createElement("title",{id:t},e):null,a||(a=v.createElement("path",{fill:"#64748B",d:"M5.939 5.37a3.763 3.763 0 0 1-2.712 4.696l-1.099.272a10.8 10.8 0 0 0 .012 3.4l1.015.244a3.763 3.763 0 0 1 2.728 4.723l-.35 1.187a10 10 0 0 0 2.792 1.734l.928-.976a3.763 3.763 0 0 1 5.454.001l.938.987a10 10 0 0 0 2.79-1.717l-.373-1.29a3.763 3.763 0 0 1 2.712-4.697l1.098-.271a10.8 10.8 0 0 0-.012-3.4l-1.014-.245a3.763 3.763 0 0 1-2.728-4.723l.35-1.186a10 10 0 0 0-2.792-1.735l-.928.976a3.76 3.76 0 0 1-5.454-.001l-.938-.987a10 10 0 0 0-2.79 1.717zM12 14.822c-1.506 0-2.727-1.263-2.727-2.822 0-1.558 1.22-2.822 2.727-2.822s2.727 1.264 2.727 2.822-1.22 2.822-2.727 2.822"}))),document:({title:e,titleId:t,...n})=>v.createElement("svg",P({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24","aria-labelledby":t},n),e?v.createElement("title",{id:t},e):null,i||(i=v.createElement("path",{stroke:"#64748B",strokeLinejoin:"round",strokeWidth:2,d:"M6 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8a1 1 0 0 0-.375-.78l-5-4A1 1 0 0 0 13 3z"})),l||(l=v.createElement("path",{stroke:"#64748B",strokeLinejoin:"round",strokeWidth:2,d:"M12 4v5h6"}))),text:({title:e,titleId:t,...n})=>v.createElement("svg",I({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24","aria-labelledby":t},n),e?v.createElement("title",{id:t},e):null,c||(c=v.createElement("rect",{width:16,height:2,x:4,y:6,fill:"#64748B",rx:1})),d||(d=v.createElement("rect",{width:12,height:2,x:4,y:11,fill:"#64748B",rx:1})),f||(f=v.createElement("rect",{width:16,height:2,x:4,y:16,fill:"#64748B",rx:1}))),markdown:({title:e,titleId:t,...n})=>v.createElement("svg",q({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24","aria-labelledby":t},n),e?v.createElement("title",{id:t},e):null,p||(p=v.createElement("path",{fill:"#60A5FA",d:"M3 15.714V8h2.323l2.322 2.836L9.968 8h2.322v7.714H9.968V11.29l-2.323 2.836-2.322-2.836v4.424zm14.516 0-3.484-3.743h2.323V8h2.322v3.97H21z"}))),"brackets-yellow":({title:e,titleId:t,...n})=>v.createElement("svg",B({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24","aria-labelledby":t},n),e?v.createElement("title",{id:t},e):null,m||(m=v.createElement("path",{fill:"#F59E0B",d:"M4.778 6.667A2.667 2.667 0 0 1 7.444 4a.889.889 0 0 1 0 1.778.89.89 0 0 0-.888.889v3.5c0 .701-.273 1.35-.73 1.833.457.483.73 1.132.73 1.832v3.501c0 .491.398.89.888.89a.889.889 0 0 1 0 1.777 2.667 2.667 0 0 1-2.666-2.667v-3.5a.89.89 0 0 0-.674-.863l-.43-.108a.889.889 0 0 1 0-1.724l.43-.108a.89.89 0 0 0 .674-.862zm14.222 0A2.667 2.667 0 0 0 16.333 4a.889.889 0 0 0 0 1.778c.491 0 .89.398.89.889v3.5c0 .701.272 1.35.729 1.833a2.66 2.66 0 0 0-.73 1.832v3.501a.89.89 0 0 1-.889.89.889.889 0 0 0 0 1.777A2.667 2.667 0 0 0 19 17.333v-3.5c0-.408.278-.764.673-.863l.431-.108a.889.889 0 0 0 0-1.724l-.43-.108a.89.89 0 0 1-.674-.862z"}))),folder:({title:e,titleId:t,...n})=>v.createElement("svg",H({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24","aria-labelledby":t},n),e?v.createElement("title",{id:t},e):null,u||(u=v.createElement("path",{stroke:"#64748B",strokeWidth:2,d:"M7.784 5H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9.875a2 2 0 0 0-2-2h-6.284a2 2 0 0 1-1.27-.455L9.054 5.455A2 2 0 0 0 7.783 5Z"}))),"folder-red-code":({title:e,titleId:t,...n})=>v.createElement("svg",W({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24","aria-labelledby":t},n),e?v.createElement("title",{id:t},e):null,_||(_=v.createElement("path",{fill:"#64748B",fillRule:"evenodd",d:"M5 4a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h5v-2H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h2.784a1 1 0 0 1 .635.227l2.393 1.966a3 3 0 0 0 1.904.682H19a1 1 0 0 1 1 1V10h2v-.125a3 3 0 0 0-3-3h-6.284a1 1 0 0 1-.635-.227L9.688 4.682A3 3 0 0 0 7.784 4z",clipRule:"evenodd"})),h||(h=v.createElement("path",{stroke:"#F87171",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M15.146 13.797 13 15.943l2.146 2.146M21.077 13.797l2.145 2.146-2.145 2.146M16.561 19.52l3.1-7.153"})))};function Z({path:e,folder:t=!1,tree:n=!1,expanded:r=!1}){let s=function(e,{folder:t=!1}={}){let n="string"==typeof e?e.replace(/\\/g,"/").replace(/\/+$/,"").split("/").pop().toLowerCase():"";if(t)return $.has(n)?"folder-red-code":"folder";if(z.has(n))return z.get(n);if(n.startsWith(".env.")||n.endsWith(".env.example"))return"gear";let r=n.lastIndexOf("."),s=r>=0?n.slice(r+1):"";return K.get(s)||"document"}(e,{folder:t}),o=Q[s],a=(0,y.jsx)(o,{className:"icon_KnjF",width:16,height:16,"aria-hidden":"true",focusable:"false","data-symbols-icon":s});return n?(0,y.jsxs)("span",{className:"treeIcon_sP4w","aria-hidden":"true",children:[t?(0,y.jsx)("svg",{className:(0,b.A)(J,r&&"expanded_mogG"),width:10,height:10,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",focusable:"false",children:(0,y.jsx)("path",{d:"m9 5 7 7-7 7"})}):(0,y.jsx)("span",{className:J}),a]}):a}let Y=[],G=[];function X({files:e,previousFiles:t=null,preferredFiles:n=Y,stepKey:r=0,focusFile:s,focusRanges:o=G,onFileSelect:a,className:i,single:l=!1}){let c=(0,A.A)(),[d,f]=(0,v.useState)(()=>N(null,e,n,r)),[p,m]=(0,v.useState)(()=>new Set),[u,_]=(0,v.useState)(!0),h=(0,v.useRef)(null);d.files===e&&Object.is(d.stepKey,r)||f(N(d,e,n,r));let{activeFile:g,tabs:T}=d,O=(0,v.useMemo)(()=>(function(e){let t={children:[]};for(let n of e){let e=t,r=n.split("/");r.forEach((t,s)=>{let o=r.slice(0,s+1).join("/");if(s===r.length-1)e.children.push({type:"file",name:t,path:n});else{let n=e.children.find(e=>"folder"===e.type&&e.path===o);n||(n={type:"folder",name:t,path:o,children:[]},e.children.push(n)),e=n}})}let n=e=>[...e].sort((e,t)=>e.type===t.type?e.name.localeCompare(t.name):"folder"===e.type?-1:1).map(e=>"folder"===e.type?{...e,children:n(e.children)}:e);return n(t.children)})(Object.keys(e)),[e]),S=n=>t&&k(e,n)?k(t,n)?t[n]===e[n]?"same":"changed":"new":"same",M=S(g),D=k(e,g)?e[g]:void 0,U=(0,v.useMemo)(()=>void 0===D?[]:u&&"changed"===M?function(e,t){let n=e.replace(/\n$/,"").split("\n"),r=t.replace(/\n$/,"").split("\n"),s=n.length,o=r.length,a=Array.from({length:s+1},()=>new Uint32Array(o+1));for(let e=s-1;e>=0;e-=1)for(let t=o-1;t>=0;t-=1)a[e][t]=n[e]===r[t]?a[e+1][t+1]+1:Math.max(a[e+1][t],a[e][t+1]);let i=[],l=0,c=0,d=0;for(;l<s||c<o;)l<s&&c<o&&n[l]===r[c]?(d+=1,i.push({type:"same",text:r[c],newNo:d}),l+=1,c+=1):c<o&&(l>=s||a[l][c+1]>=a[l+1][c])?(d+=1,i.push({type:"add",text:r[c],newNo:d}),c+=1):(i.push({type:"del",text:n[l],newNo:null}),l+=1);return i}(t[g],D):D.replace(/\n$/,"").split("\n").map((e,t)=>({type:"same",text:e,newNo:t+1})),[D,t,g,M,u]),P=null==s||s===g?o:G,I=c.plain.backgroundColor;(0,v.useEffect)(()=>{let e=h.current;if(!e)return;let t=e.querySelector("[data-change]")||e.querySelector("[data-focus]"),n=t?Math.max(0,t.offsetTop-e.clientHeight/2+t.offsetHeight/2):0,r=window.matchMedia("(prefers-reduced-motion: reduce)").matches;e.scrollTo({top:n,behavior:t&&!r?"smooth":"auto"})},[r,g,u,D,s,o]);let q=e=>{f(t=>k(t.files,e)?{...t,activeFile:e,tabs:t.tabs.includes(e)?t.tabs:[...t.tabs,e]}:t),a?.(e)},B=(e,t)=>e.map(e=>{let n={paddingLeft:`${8+14*t}px`};if("file"===e.type){let t=S(e.path);return(0,y.jsxs)("button",{type:"button",onClick:()=>q(e.path),"aria-pressed":e.path===g,style:n,title:e.path,className:(0,b.A)(R,e.path===g&&"treeItemActive_NYmV"),children:[(0,y.jsx)(Z,{path:e.path,tree:!0}),(0,y.jsx)("span",{className:L,children:e.name}),"same"!==t&&(0,y.jsx)("span",{className:(0,b.A)("treeDot_jdw0","new"===t&&"treeDotNew_M1tN"),title:E[`badge.${t}`]})]},e.path)}let r=p.has(e.path);return(0,y.jsxs)("div",{children:[(0,y.jsxs)("button",{type:"button","aria-expanded":!r,onClick:()=>{let t;return t=e.path,m(e=>{let n=new Set(e);return n.has(t)?n.delete(t):n.add(t),n})},style:n,className:R,title:e.path,children:[(0,y.jsx)(Z,{path:e.path,folder:!0,tree:!0,expanded:!r}),(0,y.jsx)("span",{className:L,children:e.name})]}),!r&&B(e.children,t+1)]},e.path)});return(0,y.jsxs)("div",{className:(0,b.A)("editor_dHJE",l&&"single_ZkL0",i),"data-project-code-viewer":"",children:[!l&&(0,y.jsxs)("aside",{className:"fileTree_hRoX","aria-label":E["files.heading"],children:[(0,y.jsx)("h4",{className:"fileTreeHeading_mHQH",children:E["files.heading"]}),(0,y.jsx)("div",{className:"treeScroll_sHHt",children:B(O,0)})]}),(0,y.jsxs)("div",{className:"editorMain_jUUV",children:[!l&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)("label",{className:"mobilePicker_UzrQ",children:[(0,y.jsx)("span",{children:E["files.heading"]}),(0,y.jsxs)("select",{"aria-label":E["files.heading"],value:g??"",onChange:e=>q(e.target.value),children:[(0,y.jsx)("option",{value:"",disabled:!0,children:E["copy.empty"]}),Object.keys(e).map(e=>(0,y.jsx)("option",{value:e,children:e},e))]})]}),(0,y.jsx)("div",{className:"editorToolbar_UlPB",children:(0,y.jsx)("div",{className:"tabs_VF_n","aria-label":E["aria.openFiles"],children:T.map(e=>{let t=e===g,n=S(e);return(0,y.jsxs)("div",{className:(0,b.A)("tab_qFmb",t&&"tabActive_DCji"),style:t?{backgroundColor:I}:void 0,children:[(0,y.jsxs)("button",{type:"button","aria-pressed":t,onClick:()=>q(e),className:"tabBtn_ulEc",title:e,children:[(0,y.jsx)(Z,{path:e}),e.split("/").pop(),"same"!==n&&(0,y.jsx)("span",{className:(0,b.A)("badge_Q6dE","new"===n&&"badgeNew_H9yP"),children:E[`badge.${n}`]})]}),(0,y.jsx)("button",{type:"button","aria-label":E["aria.closeTab"].replace("{path}",e),onClick:()=>f(t=>{let n;return n=t.tabs.filter(t=>t!==e),{...t,tabs:n,activeFile:t.activeFile===e?n.at(-1)??null:t.activeFile}}),className:"tabClose_i338",children:"\xd7"})]},e)})})})]}),(0,y.jsxs)("div",{className:"codeShell_uOkt",style:{backgroundColor:I,"--cw-editor-bg":I},children:[void 0!==D&&(0,y.jsxs)("div",{className:"codeActions_eYDy",role:"group","aria-label":E["aria.codeActions"],children:["changed"===M&&(0,y.jsx)("button",{type:"button",className:C,"aria-label":E["diff.show"],"aria-pressed":u,title:u?E["diff.hide"]:E["diff.show"],onClick:()=>_(e=>!e),children:u?(0,y.jsx)(x,{className:V,"aria-hidden":"true",focusable:"false"}):(0,y.jsx)(j,{className:V,"aria-hidden":"true",focusable:"false"})}),(0,y.jsx)(F,{text:D,path:g},JSON.stringify([r,g,D]))]}),void 0!==D?(0,y.jsx)("div",{ref:h,className:"codeScroll_KvdC",style:{backgroundColor:I},children:(0,y.jsx)(w.f4,{theme:c,code:U.map(e=>e.text).join("\n"),language:{py:"python",md:"markdown",json:"json",toml:"toml",txt:"text"}[g.split(".").pop()?.toLowerCase()]||"text",children:({tokens:e,getLineProps:t,getTokenProps:n})=>(0,y.jsx)("pre",{className:"pre_WKm3",style:{color:c.plain.color},children:e.map((e,r)=>{var s;let o=U[r]||{type:"same",newNo:r+1},a=t({line:e}),i="same"!==o.type,l=!i&&(s=o.newNo,null!=s&&P.some(([e,t=e])=>s>=e&&s<=t));return(0,y.jsxs)("div",{...a,"data-line":o.newNo??void 0,"data-change":i?o.type:void 0,"data-focus":l?"":void 0,className:(0,b.A)(a.className,"line_aw8y","add"===o.type&&"lineAdd_mE7J","del"===o.type&&"lineDel_abp0",l&&"lineFocus_Glcn"),children:[(0,y.jsx)("span",{"aria-hidden":"true",className:"lineNo_EtU5",children:o.newNo??""}),(0,y.jsx)("span",{"aria-hidden":"true",className:"lineSign_UgAc",children:"add"===o.type?"+":"del"===o.type?"\u2212":""}),(0,y.jsx)("span",{className:"lineContent_fkoz",children:e.map((e,t)=>(0,y.jsx)("span",{...n({token:e})},t))})]},r)})})})}):(0,y.jsx)("div",{className:"empty_oOnL",style:{backgroundColor:I},children:(0,y.jsxs)("div",{children:[(0,y.jsx)("p",{children:E["empty.title"]}),(0,y.jsx)("p",{className:"emptySub_bQnk",children:E["empty.body"]})]})})]})]})]})}},17181(e,t,n){n.d(t,{A:()=>r});let r={s00:{"agent.py":`if __name__ == "__main__":
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
`}}},51507(e,t,n){n.d(t,{A:()=>s});var r=n(96540);function s(e,t){let n=e.length,[s,o]=(0,r.useState)(0),[a,i]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{if(!t){o(0),i(!1);return}if("u">typeof window&&window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches){i(!0),o(n);return}let e=window.setTimeout(()=>{i(!0),e=window.setInterval(()=>{o(t=>t+1>=n?(window.clearInterval(e),n):t+1)},80)},350);return()=>{window.clearTimeout(e),window.clearInterval(e)}},[t,n]),{shown:s,started:a,done:a&&s>=n}}},28453(e,t,n){n.d(t,{R:()=>a,x:()=>i});var r=n(96540);let s={},o=r.createContext(s);function a(e){let t=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);