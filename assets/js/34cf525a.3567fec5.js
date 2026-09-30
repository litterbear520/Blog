"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([["6751"],{16703(e,t,i){i.r(t),i.d(t,{metadata:()=>n,default:()=>p,frontMatter:()=>a,contentTitle:()=>l,toc:()=>d,assets:()=>c});var n=JSON.parse('{"id":"python/try-finally","title":"try-finally","description":"\u8FD9\u7BC7\u6587\u7AE0\u6211\u4EEC\u6765\u8BB2\u4E00\u4E0B Python \u8FD9\u4E2A try-finally \u8BED\u6CD5\u7684\u5E94\u7528\u3002\u90A3\u6211\u76F8\u4FE1\u5927\u5BB6\u53EF\u80FD\u90FD\u4F7F\u7528\u8FC7 try \u8FD9\u4E2A\u8BED\u6CD5\uFF0C\u66F4\u591A\u7684\u65F6\u5019\u6211\u4EEC\u662F\u7528\u5B83\u6765\u5904\u7406\u4E00\u4E9B\u53EF\u80FD\u51FA\u73B0\u7684\u5F02\u5E38\u3002\u6BD4\u5982\u8BF4\u6211\u4EEC\u505A\u4E86\u4E00\u4E2A 1 \u9664\u4EE5 0\uFF0CPython \u4F1A\u7ED9\u4F60\u62A5\u9519\u3002\u90A3\u8FD9\u4E2A\u65F6\u5019\u6211\u4EEC\u53EF\u4EE5\u7528 try-except \u6765\u89C4\u5B9A Python\uFF0C\u5F53\u9047\u5230\u8FD9\u79CD\u5F02\u5E38\u7684\u65F6\u5019\uFF0C\u4F60\u5E94\u8BE5\u5E72\u4EC0\u4E48\u3002\u90A3\u6211\u73B0\u5728\u7684\u4EE3\u7801\u5C31\u662F\u8BF4\uFF0C\u5728\u8FD9\u79CD\u5F02\u5E38\u7684\u65F6\u5019\uFF0C\u4F60\u53EA\u9700\u8981\u6253\u5370\u4E00\u4E0B\u5C31\u53EF\u4EE5\u4E86\uFF0C\u4E0D\u8981\u7ED9\u6211\u9000\u51FA\u6574\u4E2A\u7A0B\u5E8F\u3002\u90A3\u8FD9\u4E2A\u6BD4\u8F83\u5E38\u89C1\u7684 try-except \u7684\u7528\u6CD5\uFF0C\u5E76\u4E0D\u662F\u6211\u4EEC\u4ECA\u5929\u7684\u4E3B\u89D2\u3002","source":"@site/docs/python/try-finally.mdx","sourceDirName":"python","slug":"/python/try-finally","permalink":"/docs/python/try-finally","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"queue","permalink":"/docs/python/queue"},"next":{"title":"unittest","permalink":"/docs/python/unittest"}}'),r=i(74848),s=i(28453),o=i(74794);let a={},l="try-finally",c={},d=[{value:"finally \u7684\u6267\u884C\u89C4\u5219",id:"finally-\u7684\u6267\u884C\u89C4\u5219",level:2},{value:"\u7528 finally \u91CA\u653E\u8D44\u6E90",id:"\u7528-finally-\u91CA\u653E\u8D44\u6E90",level:2},{value:"try-finally \u4E0E atexit \u7684\u53D6\u820D",id:"try-finally-\u4E0E-atexit-\u7684\u53D6\u820D",level:2},{value:"finally \u80FD\u8986\u76D6\u7684\u8303\u56F4",id:"finally-\u80FD\u8986\u76D6\u7684\u8303\u56F4",level:2},{value:"finally \u65E0\u6CD5\u8FD0\u884C\u7684\u60C5\u51B5",id:"finally-\u65E0\u6CD5\u8FD0\u884C\u7684\u60C5\u51B5",level:2}];function f(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",...(0,s.R)(),...e.components},{Term:i}=t;return i||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Term",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"try-finally",children:"try-finally"})}),"\n",(0,r.jsxs)(t.p,{children:["\u8FD9\u7BC7\u6587\u7AE0\u6211\u4EEC\u6765\u8BB2\u4E00\u4E0B Python \u8FD9\u4E2A try-finally \u8BED\u6CD5\u7684\u5E94\u7528\u3002\u90A3\u6211\u76F8\u4FE1\u5927\u5BB6\u53EF\u80FD\u90FD\u4F7F\u7528\u8FC7 ",(0,r.jsx)(t.code,{children:"try"})," \u8FD9\u4E2A\u8BED\u6CD5\uFF0C\u66F4\u591A\u7684\u65F6\u5019\u6211\u4EEC\u662F\u7528\u5B83\u6765\u5904\u7406\u4E00\u4E9B\u53EF\u80FD\u51FA\u73B0\u7684\u5F02\u5E38\u3002\u6BD4\u5982\u8BF4\u6211\u4EEC\u505A\u4E86\u4E00\u4E2A 1 \u9664\u4EE5 0\uFF0CPython \u4F1A\u7ED9\u4F60\u62A5\u9519\u3002\u90A3\u8FD9\u4E2A\u65F6\u5019\u6211\u4EEC\u53EF\u4EE5\u7528 try-except \u6765\u89C4\u5B9A Python\uFF0C\u5F53\u9047\u5230\u8FD9\u79CD\u5F02\u5E38\u7684\u65F6\u5019\uFF0C\u4F60\u5E94\u8BE5\u5E72\u4EC0\u4E48\u3002\u90A3\u6211\u73B0\u5728\u7684\u4EE3\u7801\u5C31\u662F\u8BF4\uFF0C\u5728\u8FD9\u79CD\u5F02\u5E38\u7684\u65F6\u5019\uFF0C\u4F60\u53EA\u9700\u8981\u6253\u5370\u4E00\u4E0B\u5C31\u53EF\u4EE5\u4E86\uFF0C\u4E0D\u8981\u7ED9\u6211\u9000\u51FA\u6574\u4E2A\u7A0B\u5E8F\u3002\u90A3\u8FD9\u4E2A\u6BD4\u8F83\u5E38\u89C1\u7684 try-except \u7684\u7528\u6CD5\uFF0C\u5E76\u4E0D\u662F\u6211\u4EEC\u4ECA\u5929\u7684\u4E3B\u89D2\u3002"]}),"\n",(0,r.jsx)(o.A,{variant:"tryFinally",step:1}),"\n",(0,r.jsx)(t.h2,{id:"finally-\u7684\u6267\u884C\u89C4\u5219",children:"finally \u7684\u6267\u884C\u89C4\u5219"}),"\n",(0,r.jsxs)(t.p,{children:["\u5728 Python \u7684 ",(0,r.jsx)(t.code,{children:"try"})," \u6709\u5173\u7684",(0,r.jsx)(t.a,{href:"https://docs.python.org/3/reference/compound_stmts.html#the-try-statement",children:"\u8BED\u6CD5"}),"\u91CC\uFF0C\u9664\u4E86 ",(0,r.jsx)(t.code,{children:"except"})," \u4E4B\u5916\uFF0C\u6211\u4EEC\u8FD8\u53EF\u4EE5\u7528 ",(0,r.jsx)(t.code,{children:"else"})," \u8DDF ",(0,r.jsx)(t.code,{children:"finally"}),"\u3002",(0,r.jsx)(t.code,{children:"else"})," \u5C31\u662F\u6CA1\u6709\u51FA\u73B0\u5F02\u5E38\u7684\u65F6\u5019\u5E94\u8BE5\u600E\u4E48\u529E\uFF0C\u4E5F\u4E0D\u662F\u6211\u4EEC\u4ECA\u5929\u7684\u91CD\u70B9\u3002\u6211\u4EEC\u4ECA\u5929\u4E3B\u8981\u6765\u8BB2 ",(0,r.jsx)(t.code,{children:"finally"}),"\u3002",(0,r.jsx)(t.code,{children:"finally"})," \u7684\u610F\u601D\u5C31\u662F ",(0,r.jsx)(t.code,{children:"try"})," \u91CC\u9762\u7684\u8FD9\u4E2A\u4EE3\u7801\u5757\u8FD0\u884C\u4E4B\u540E\uFF0C\u65E0\u8BBA\u91CC\u9762\u662F\u5426\u629B\u51FA\u5F02\u5E38\uFF0CPython \u90FD\u4F1A\u8FD0\u884C ",(0,r.jsx)(t.code,{children:"finally"})," \u91CC\u9762\u7684\u8FD9\u4E2A\u4EE3\u7801\u5757\u3002\u4F60\u53EF\u4EE5\u7406\u89E3\u6210\uFF0C\u65E0\u8BBA ",(0,r.jsx)(t.code,{children:"try"})," \u91CC\u9762\u53D1\u751F\u4E86\u4EC0\u4E48\uFF0C",(0,r.jsx)(t.code,{children:"finally"})," \u91CC\u9762\u7684\u4EE3\u7801\u90FD\u4F1A\u8FD0\u884C\u3002\u800C ",(0,r.jsx)(t.code,{children:"finally"})," \u7684\u8FD9\u4E2A\u65E0\u8BBA\u5982\u4F55\u90FD\u8981\u8FD0\u884C\u7684\u7279\u6027\uFF0C\u5C31\u7ECF\u5E38\u88AB\u7528\u5728\u8D44\u6E90\u7684\u91CA\u653E\u4E0A\u3002"]}),"\n",(0,r.jsx)(t.h2,{id:"\u7528-finally-\u91CA\u653E\u8D44\u6E90",children:"\u7528 finally \u91CA\u653E\u8D44\u6E90"}),"\n",(0,r.jsx)(t.p,{children:"\u6211\u4EEC\u77E5\u9053\uFF0C\u5728\u6211\u4EEC\u5199\u7A0B\u5E8F\u7684\u65F6\u5019\uFF0C\u7ECF\u5E38\u4F1A\u62FF\u5230\u4E00\u4E9B\u5FC5\u987B\u91CA\u653E\u7684\u8D44\u6E90\u3002\u6BD4\u5982\u8BF4\uFF0C\u5B83\u53EF\u80FD\u662F\u4E00\u4E2A\u6570\u636E\u5E93\u7684\u8FDE\u63A5\uFF0C\u6BD4\u5982\u8BF4\uFF0C\u5B83\u53EF\u80FD\u662F\u4E00\u4E2A\u7F51\u7EDC\u7684\u8FDE\u63A5\uFF0C\u6BD4\u5982\u8BF4\uFF0C\u5B83\u53EF\u80FD\u662F\u4E00\u4E2A\u6253\u5F00\u7684\u6587\u4EF6\uFF0C\u8FD8\u6BD4\u5982\u8BF4\uFF0C\u5B83\u53EF\u80FD\u662F\u4E00\u4E2A\u6211\u9700\u8981\u5173\u95ED\u7684\u5B50\u8FDB\u7A0B\u3002\u90A3\u6709\u7684\u65F6\u5019\uFF0C\u5728\u6211\u4EEC\u7533\u8BF7\u4E86\u8FD9\u4E9B\u8D44\u6E90\u4E4B\u540E\uFF0C\u7531\u4E8E\u6211\u7684\u4EE3\u7801\u62A5\u9519\uFF0C\u6240\u4EE5\u6211\u7528\u6765\u91CA\u653E\u8FD9\u4E9B\u8D44\u6E90\u7684\u4EE3\u7801\u6CA1\u80FD\u8FD0\u884C\uFF0C\u5BFC\u81F4\u8FD9\u4E9B\u8D44\u6E90\u6CA1\u80FD\u88AB\u6B63\u786E\u5730\u91CA\u653E\u3002"}),"\n",(0,r.jsxs)(t.p,{children:["\u6211\u4EEC\u8FD9\u91CC\u7528\u4E24\u4E2A\u7B80\u5355\u7684 ",(0,r.jsx)(t.code,{children:"print"})," \u6765\u8868\u793A\u62BD\u8C61\u7684\u8D44\u6E90\u7684\u83B7\u53D6\u548C\u91CA\u653E\u3002\u5F53\u6211\u4EEC\u4E00\u6BB5\u7A0B\u5E8F\u6B63\u5E38\u5730\u8FD0\u884C\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u53EF\u80FD\u662F\u83B7\u53D6\u8D44\u6E90\uFF0C\u7136\u540E\u8FD0\u884C\u8FD9\u4E2A\u4EE3\u7801\uFF0C\u7136\u540E\u91CA\u653E\u8D44\u6E90\u3002\u4F46\u5047\u5982\u8BF4\u6211\u4EEC\u7684\u4EE3\u7801\u4E2D\u95F4\u6709\u9519\u8BEF\u7684\u8BDD\uFF0C\u53EF\u4EE5\u770B\u5230\uFF0C\u6211\u4EEC\u5728\u83B7\u53D6\u4E86\u8FD9\u4E2A\u8D44\u6E90\u4E4B\u540E\uFF0C\u7531\u4E8E\u4EE3\u7801\u62A5\u9519\u4E86\uFF0C\u6240\u4EE5\u6211\u4EEC\u91CA\u653E\u8D44\u6E90\u7684\u8FD9\u4E00\u884C\u547D\u4EE4\u6CA1\u6709\u88AB\u6267\u884C\u3002"]}),"\n",(0,r.jsx)(o.A,{variant:"tryFinally",step:2}),"\n",(0,r.jsxs)(t.p,{children:["\u90A3\u5982\u679C\u6211\u4EEC\u628A\u8D44\u6E90\u7684\u83B7\u53D6\u548C\u8FD0\u884C\u7684\u4EE3\u7801\u653E\u5230 ",(0,r.jsx)(t.code,{children:"try"})," \u91CC\u9762\uFF0C\u7136\u540E\u628A\u8D44\u6E90\u7684\u91CA\u653E\u653E\u5230 ",(0,r.jsx)(t.code,{children:"finally"})," \u91CC\uFF0C\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\uFF0C\u5C3D\u7BA1\u6700\u7EC8 Python \u7684\u7A0B\u5E8F\u8FD8\u662F\u4EE5\u5F02\u5E38\u7ED3\u675F\u4E86\uFF0C\u6211\u4EEC\u5E76\u6CA1\u6709\u6355\u83B7\u8FD9\u4E2A\u5F02\u5E38\uFF0C\u4F46\u662F\u6211\u4EEC\u7684\u8D44\u6E90\u91CA\u653E\u7684\u90E8\u5206\u8FD8\u662F\u88AB\u8FD0\u884C\u4E86\u3002\u8FD9\u4E2A resource acquire \u548C release \u90FD\u88AB\u6253\u5370\u51FA\u6765\u4E86\u3002"]}),"\n",(0,r.jsx)(o.A,{variant:"tryFinally",step:3}),"\n",(0,r.jsxs)(t.p,{children:["\u540C\u65F6\uFF0C\u5373\u4FBF\u6211\u4EEC\u5C1D\u8BD5\u6355\u83B7\u4E86\u8FD9\u4E2A\u5F02\u5E38\uFF0C\u5C31\u50CF\u521A\u624D\u4E00\u6837\uFF0C\u6253\u5370\u4E00\u884C\u8BF4\u4F60\u9664\u4EE5\u96F6\u4E86\uFF0C\u8FD9\u4E2A ",(0,r.jsx)(t.code,{children:"finally"})," \u7684\u4EE3\u7801\u5757\u4F9D\u7136\u4F1A\u88AB\u8FD0\u884C\u3002\u6211\u4EEC\u770B\u5230 ",(0,r.jsx)(t.code,{children:"Resource release"})," \u4F9D\u7136\u88AB\u6253\u5370\u51FA\u6765\u4E86\u3002"]}),"\n",(0,r.jsx)(o.A,{variant:"tryFinally",step:4}),"\n",(0,r.jsx)(t.p,{children:"\u56E0\u6B64\u6211\u4EEC\u53EF\u4EE5\u8BD5\u60F3\uFF0C\u5F53\u6211\u4EEC\u83B7\u53D6\u4E86\u4E00\u4E2A\u5FC5\u987B\u8981\u91CA\u653E\u7684\u8D44\u6E90\uFF0C\u800C\u5728\u83B7\u53D6\u8FD9\u4E2A\u8D44\u6E90\u4E4B\u540E\uFF0C\u53C8\u8981\u8FD0\u884C\u4E00\u5927\u6BB5\u6709\u53EF\u80FD\u4F1A\u62A5\u9519\u7684\u4EE3\u7801\u7684\u65F6\u5019\uFF0C\u8FD9\u4E2A try-finally \u4F1A\u8BA9\u6211\u4EEC\u7684\u8D44\u6E90\u91CA\u653E\u53D8\u5F97\u66F4\u52A0\u5730\u7A33\u5B9A\u3002"}),"\n",(0,r.jsx)(t.h2,{id:"try-finally-\u4E0E-atexit-\u7684\u53D6\u820D",children:"try-finally \u4E0E atexit \u7684\u53D6\u820D"}),"\n",(0,r.jsxs)(t.p,{children:["\u597D\uFF0C\u90A3\u6709\u4EBA\u53EF\u80FD\u4F1A\u95EE\u4E86\uFF0C\u8BF4\u4F60\u5728\u4E4B\u524D\u7684\u6587\u7AE0\u91CC\u9762\u63D0\u5230\u8FC7\u4E00\u4E2A ",(0,r.jsx)(t.a,{href:"/docs/python/atexit",children:"module"}),"\uFF0C\u53EB\u505A ",(0,r.jsx)(t.code,{children:"atexit"}),"\u3002",(0,r.jsx)(t.code,{children:"atexit"})," \u8FD9\u4E2A module \u4E5F\u7ECF\u5E38\u88AB\u7528\u6765\u91CA\u653E\u8D44\u6E90\uFF0C\u90A3\u4E48 try-finally \u8DDF ",(0,r.jsx)(t.code,{children:"atexit"})," \u76F8\u6BD4\uFF0C\u5728\u91CA\u653E\u8D44\u6E90\u8FD9\u4E2A\u9886\u57DF\uFF0C\u5B70\u4F18\u5B70\u52A3\u5462\uFF1F\u90A3\u8FD9\u79CD\u95EE\u9898\u7684\u7B54\u6848\u5FC5\u7136\u662F\uFF0C\u5B83\u4EEC\u5404\u6709\u4F18\u52A3\uFF0C\u5BF9\u5427\uFF1F",(0,r.jsx)(t.code,{children:"atexit"})," module\uFF0C\u987E\u540D\u601D\u4E49\uFF0C\u5B83\u7684\u91CA\u653E\u8D44\u6E90\u53EA\u80FD\u5728\u7A0B\u5E8F\u7ED3\u675F\u7684\u65F6\u5019\u8FD0\u884C\uFF0C\u800C try-finally \u53EF\u4EE5\u5728\u4EFB\u610F\u7684 scope \u4E0B\u8FD0\u884C\u3002\u6BD4\u5982\u8BF4\uFF0C\u6211\u6BCF\u63A5\u5230\u4E00\u4E2A\u8BF7\u6C42\u9700\u8981\u505A\u4E00\u4EF6\u4E8B\u60C5\uFF0C\u800C\u8FD9\u4E2A\u4E8B\u60C5\u4F1A\u65B0\u5EFA\u4E00\u4E2A\u5B50\u8FDB\u7A0B\uFF0C\u6211\u9700\u8981\u786E\u8BA4\u8FD9\u4E2A\u5B50\u8FDB\u7A0B\u5728\u5B8C\u6210\u8FD9\u4E2A\u8BF7\u6C42\u4E4B\u540E\u88AB kill \u6389\u4E86\uFF0C\u65E0\u8BBA\u5728\u5B8C\u6210\u8BF7\u6C42\u7684\u8FC7\u7A0B\u4E2D\u51FA\u73B0\u4E86\u4EC0\u4E48\u5E7A\u86FE\u5B50\u3002\u8FD9\u4E2A\u65F6\u5019\u660E\u663E\u7528 try-finally \u5C31\u4F1A\u66F4\u597D\uFF0C\u5B83\u53EF\u4EE5\u4FDD\u8BC1\u5728\u4E00\u6BB5\u4EE3\u7801\u8FD0\u884C\u4E4B\u540E\uFF0C\u4F60\u7684\u8FD9\u4E2A\u8D44\u6E90\u91CA\u653E\u51FD\u6570\u5C31\u4E00\u5B9A\u4F1A\u88AB\u8FD0\u884C\uFF0C\u8FD9\u4E2A\u4E8B\u60C5 ",(0,r.jsx)(t.code,{children:"atexit"})," \u5C31\u505A\u4E0D\u5230\u3002"]}),"\n",(0,r.jsx)(o.A,{variant:"tryFinally",step:5}),"\n",(0,r.jsxs)(t.p,{children:["\u90A3\u4ECE\u53E6\u5916\u4E00\u4E2A\u89D2\u5EA6\u8BB2\uFF0Ctry-finally \u5FC5\u987B\u8981\u5728\u4F60\u7684\u4EE3\u7801\u8FD0\u884C\u6D41\u7A0B\u4E0A\u663E\u5F0F\u5730\u52A0\u5165\u4EE3\u7801\u3002\u6211\u4EEC\u6BD4\u5982\u8BF4\uFF0C\u6211\u5199\u4E86\u4E00\u4E2A module\uFF0C\u8FD9\u4E2A module \u5728\u5F00\u59CB\u7684\u65F6\u5019\u4F1A\u65B0\u5EFA\u4E00\u4E2A\u5B50\u8FDB\u7A0B\uFF0C\u7136\u540E\u8FD9\u4E2A\u5B50\u8FDB\u7A0B\u8DDF\u4F60\u7684\u4E3B\u8FDB\u7A0B\u4E4B\u95F4\u53EF\u80FD\u6709\u4E00\u4E9B\u901A\u8BAF\u7684\u5DE5\u4F5C\uFF0C\u4F60\u53EA\u9700\u8981\u4FDD\u8BC1\u5728\u6211\u8FD9\u4E2A\u4E3B\u8FDB\u7A0B\u7ED3\u675F\u7684\u65F6\u5019\uFF0C\u8BB0\u5F97\u628A\u5B50\u8FDB\u7A0B\u5173\u6389\u5C31\u53EF\u4EE5\u4E86\u3002\u90A3\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u5982\u679C\u4F60\u7528 try-finally \u6765\u505A\u7684\u8BDD\uFF0C\u4F60\u5C31\u5FC5\u987B\u8981\u4FDD\u8BC1\u8FD9\u4E2A\u7528\u6237\u8981\u5728\u4ED6\u81EA\u5DF1\u7684\u4EE3\u7801\u6700\u5916\u5C42\u5199\u4E0A\u8FD9\u4E2A try-finally\uFF0C\u56E0\u4E3A\u4F60\u8D44\u6E90\u7684\u91CA\u653E\u9700\u8981\u7B49\u5230\u8FD9\u4E2A\u7528\u6237\u4E0D\u518D\u4F7F\u7528\u4F60\u8FD9\u4E2A module \u4E4B\u540E\u518D\u91CA\u653E\uFF0C\u8FD9\u5C31\u7ED9\u7528\u6237\u5E26\u6765\u4E86\u5F88\u591A\u9EBB\u70E6\u3002\u7136\u800C\u5982\u679C\u7528 ",(0,r.jsx)(t.code,{children:"atexit"})," \u8FD9\u4E2A module\uFF0C\u4F60\u53EF\u4EE5\u5728\u4F60\u7684\u5E93\u51FD\u6570\u91CC\u9762\u7533\u8BF7\u8FD9\u4E2A\u8D44\u6E90\u7684\u540C\u65F6\uFF0C\u6CE8\u518C\u4E00\u4E0B\u8FD9\u4E2A\u8D44\u6E90\u7684\u91CA\u653E\u51FD\u6570\u3002\u8FD9\u6837\u7528\u6237\u5728\u4F7F\u7528\u4F60\u8FD9\u4E2A\u5E93\u7684\u65F6\u5019\uFF0C\u4ED6\u5B8C\u5168\u4E0D\u7528\u62C5\u5FC3\u8D44\u6E90\u91CA\u653E\u7684\u95EE\u9898\uFF0C\u4ED6\u4E0D\u9700\u8981\u53BB\u7406\u89E3\u4F60\u7684\u5E93\uFF0C\u4E5F\u4E0D\u9700\u8981\u663E\u5F0F\u5730\u5728\u81EA\u5DF1\u7684\u4EE3\u7801\u91CC\u9762\u589E\u52A0\u4E00\u4E9B\u91CA\u653E\u8D44\u6E90\u7684\u4EE3\u7801\u3002"]}),"\n",(0,r.jsx)(t.h2,{id:"finally-\u80FD\u8986\u76D6\u7684\u8303\u56F4",children:"finally \u80FD\u8986\u76D6\u7684\u8303\u56F4"}),"\n",(0,r.jsxs)(t.p,{children:["\u597D\uFF0C\u90A3\u63A5\u4E0B\u6765\u6709\u4E00\u4E2A\u975E\u5E38\u4E25\u8083\u7684\u95EE\u9898\u3002\u4F60\u521A\u624D\u8BF4 ",(0,r.jsx)(t.code,{children:"finally"})," \u91CC\u9762\u7684\u4EE3\u7801\uFF0C\u65E0\u8BBA\u5982\u4F55\u90FD\u4F1A\u88AB\u6267\u884C\uFF0C\u771F\u7684\u662F\u8FD9\u6837\u5417\uFF1F\u5B83\u771F\u7684\u53EF\u4EE5\u5728\u4EFB\u4F55\u60C5\u51B5\u4E0B\u90FD\u4F18\u96C5\u5730\u91CA\u653E\u8D44\u6E90\u5417\uFF1F\u90A3\u7B54\u6848\u663E\u7136\u662F\u4E0D\u662F\uFF0C\u5BF9\u5427\uFF1F\u6211\u4EEC\u90FD\u77E5\u9053\uFF0C\u5982\u679C\u4F60\u628A\u7535\u8111\u7535\u6E90\u62D4\u4E86\uFF0C\u8FD9\u4E2A ",(0,r.jsx)(t.code,{children:"finally"})," \u662F\u4E00\u5B9A\u4E0D\u4F1A\u8FD0\u884C\u7684\uFF0C\u6240\u4EE5\u5B83\u80FD\u8986\u76D6\u7684\u80AF\u5B9A\u662F\u67D0\u4E00\u4E2A\u8303\u56F4\u3002\u90A3\u4E48\u8FD9\u4E2A\u8303\u56F4\u80FD\u8986\u76D6\u5230\u54EA\u513F\uFF0C\u6216\u8005\u8BF4\u4EC0\u4E48\u6837\u7684\u95EE\u9898\u6709\u53EF\u80FD\u4F1A\u5BFC\u81F4\u8FD9\u4E2A ",(0,r.jsx)(t.code,{children:"finally"})," \u65E0\u6CD5\u6267\u884C\uFF1F"]}),"\n",(0,r.jsxs)(t.p,{children:["\u6240\u4EE5\u5B83\u80AF\u5B9A\u53EA\u80FD\u89E3\u51B3 Python \u5C42\u9762\u51FA\u73B0\u7684\u95EE\u9898\u3002\u6BD4\u5982\u8BF4\uFF0C\u5F53\u6211\u4EEC\u4F7F\u7528",(0,r.jsx)(t.a,{href:"/docs/python/%E9%80%80%E5%87%BA%E6%96%B9%E5%BC%8F#sysexit-%E4%B8%8E-systemexit",children:"\u4E4B\u524D\u4ECB\u7ECD\u8FC7"}),"\u7684 ",(0,r.jsx)(t.code,{children:"sys.exit(0)"})," \u7684\u65F6\u5019\uFF0C\u4F60\u53EF\u4EE5\u770B\u5230\uFF0C\u8FD9\u4E2A ",(0,r.jsx)(t.code,{children:"finally"})," \u662F\u88AB\u8FD0\u884C\u4E86\u7684\u3002\u6211\u4EEC\u4E4B\u524D\u4E5F\u6709\u63D0\u5230\u8FC7\uFF0C",(0,r.jsx)(t.code,{children:"sys.exit(0)"})," \u7684\u65F6\u5019\uFF0C\u672C\u8D28\u4E0A\u662F raise \u4E86\u4E00\u4E2A exception\uFF0C\u8FD9\u79CD\u60C5\u51B5 ",(0,r.jsx)(t.code,{children:"finally"})," \u662F\u5B8C\u5168\u53EF\u4EE5\u5904\u7406\u7684\u3002"]}),"\n",(0,r.jsx)(o.A,{variant:"tryFinally",step:6}),"\n",(0,r.jsxs)(t.p,{children:["\u540C\u6837\u7684\uFF0C\u5F53\u6211\u4EEC\u7528 Ctrl+C \u9000\u51FA Python \u7A0B\u5E8F\u7684\u65F6\u5019\uFF0C",(0,r.jsx)(t.code,{children:"finally"})," \u4E5F\u53EF\u4EE5\u5904\u7406\uFF0C\u56E0\u4E3A\u5F53\u6211\u4EEC\u8F93\u5165 Ctrl+C \u7684\u65F6\u5019\uFF0C\u5B83\u672C\u8D28\u4E0A\u662F raise \u4E86\u4E00\u4E2A ",(0,r.jsx)(t.code,{children:"KeyboardInterrupt"}),"\uFF0C\u4E5F\u662F\u4E00\u4E2A exception\u3002\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\uFF0C\u5728\u8FD9\u91CC\uFF0C",(0,r.jsx)(t.code,{children:"Resource release"})," \u4E5F\u88AB\u6253\u5370\u51FA\u6765\u4E86\u3002"]}),"\n",(0,r.jsx)(o.A,{variant:"tryFinally",step:7}),"\n",(0,r.jsxs)(t.p,{children:["\u90A3\u6211\u4EEC\u77E5\u9053\uFF0C\u5728 Python \u91CC\u9762\uFF0CCtrl+C \u8DDF ",(0,r.jsx)(t.code,{children:"SIGINT"})," \u662F\u7B49\u4EF7\u7684\uFF0C\u6240\u4EE5\u5F53\u6211\u4EEC\u7528 ",(0,r.jsx)(t.code,{children:"SIGINT"})," \u6765\u505C\u6B62\u8FD9\u4E2A\u8FDB\u7A0B\u7684\u65F6\u5019\uFF0C\u53EF\u4EE5\u770B\u5230\uFF0C\u8FD9\u4E2A ",(0,r.jsx)(t.code,{children:"Resource release"})," \u4E5F\u88AB\u6253\u5370\u51FA\u6765\u4E86\u3002"]}),"\n",(0,r.jsx)(o.A,{variant:"tryFinally",step:8}),"\n",(0,r.jsx)(t.h2,{id:"finally-\u65E0\u6CD5\u8FD0\u884C\u7684\u60C5\u51B5",children:"finally \u65E0\u6CD5\u8FD0\u884C\u7684\u60C5\u51B5"}),"\n",(0,r.jsxs)(t.p,{children:["\u7136\u800C\u5982\u679C\u6211\u4EEC\u4F7F\u7528\u7684\u4E0D\u662F ",(0,r.jsx)(t.code,{children:"SIGINT"}),"\uFF0C\u800C\u662F ",(0,r.jsx)(t.code,{children:"SIGTERM"})," \u7684\u8BDD\uFF0C\u53EF\u4EE5\u770B\u5230 ",(0,r.jsx)(t.code,{children:"finally"})," \u91CC\u9762\u7684\u4EE3\u7801\u5C31\u6CA1\u6709\u88AB\u8FD0\u884C\uFF0C\u8FD9\u4E2A\u8FDB\u7A0B\u88AB\u76F4\u63A5\u5730 terminate \u6389\u4E86\u3002"]}),"\n",(0,r.jsx)(o.A,{variant:"tryFinally",step:9}),"\n",(0,r.jsxs)(t.p,{children:["\u5F53\u7136\uFF0C\u5728 Python \u91CC\u9762\u6709",(0,r.jsx)(t.a,{href:"https://docs.python.org/3/library/signal.html",children:"\u4E13\u95E8\u7684\u4EE3\u7801"}),"\u53EF\u4EE5\u53BB\u5904\u7406\u8FD9\u4E2A ",(0,r.jsx)(t.code,{children:"SIGTERM"}),"\u3002\u5728\u8FD9\u91CC\u53EA\u662F\u544A\u8BC9\u5927\u5BB6\uFF0C\u5982\u679C\u4F60\u5355\u7EAF\u5730\u4F7F\u7528 try-finally \u7684\u8BDD\uFF0C\u9762\u5BF9 ",(0,r.jsx)(t.code,{children:"SIGTERM"}),"\uFF0C\u4F60\u662F\u65E0\u80FD\u4E3A\u529B\u7684\u3002\u5F53\u7136 ",(0,r.jsx)(t.code,{children:"SIGKILL"})," \u5C31\u66F4\u4E0D\u884C\u4E86\u3002"]}),"\n",(0,r.jsxs)(t.p,{children:["\u5728\u6211\u4EEC",(0,r.jsx)(t.a,{href:"/docs/python/%E9%80%80%E5%87%BA%E6%96%B9%E5%BC%8F#os_exit-%E7%9A%84%E7%B3%BB%E7%BB%9F%E8%B0%83%E7%94%A8",children:"\u4E4B\u524D\u7684\u6587\u7AE0"}),"\u91CC\u9762\uFF0C\u6211\u4EEC\u8FD8\u63D0\u5230\u8FC7 ",(0,r.jsx)(t.code,{children:"os._exit"})," \u8FD9\u4E2A\u51FD\u6570\u3002\u5728\u5F53\u65F6\u6211\u4EEC\u5C31\u544A\u8BC9\u5927\u5BB6\uFF0C\u8FD9\u4E2A\u51FD\u6570\u7684\u673A\u5236\u975E\u5E38\u5E95\u5C42\uFF0C\u5B83\u4F1A\u76F4\u63A5\u8C03\u7528\u4E00\u4E2A system call\u3002\u6240\u4EE5\u5728 Python \u91CC\u9762\uFF0C\u5927\u5BB6\u5E94\u8BE5\u5C3D\u91CF\u907F\u514D\u4F7F\u7528\u8FD9\u4E2A\u51FD\u6570\u3002\u90A3\u5728\u8FD9\u91CC\u5927\u5BB6\u53EF\u4EE5\u770B\u5230\uFF0C\u5982\u679C\u6211\u4F7F\u7528\u7684\u662F ",(0,r.jsx)(t.code,{children:"os._exit(0)"}),"\uFF0C",(0,r.jsx)(t.code,{children:"finally"})," \u8FD9\u4E2A\u4EE3\u7801\u5757\u4E5F\u4E0D\u4F1A\u88AB\u8FD0\u884C\u3002"]}),"\n",(0,r.jsx)(o.A,{variant:"tryFinally",step:10,nav:!0}),"\n",(0,r.jsxs)(t.p,{children:["\u5F53\u7136\u5728\u6211\u4EEC\u7684\u5B9E\u9645\u5DE5\u4F5C\u4E2D\uFF0C\u8FD8\u6709\u53EF\u80FD\u4F1A\u9047\u5230\u5176\u4ED6\u7684\u53EF\u80FD\u6027\uFF0C\u6BD4\u5982\u8BF4 ",(0,r.jsx)(i,{tip:"\u6BB5\u9519\u8BEF\uFF1A\u7A0B\u5E8F\u8BBF\u95EE\u4E86\u4E0D\u5141\u8BB8\u8BBF\u95EE\u7684\u5185\u5B58\uFF0C\u88AB\u64CD\u4F5C\u7CFB\u7EDF\u76F4\u63A5\u7ED3\u675F\u8FDB\u7A0B",children:"segfault"}),"\u3002\u5982\u679C\u4F60\u7684\u4EE3\u7801 segfault \u4E86\uFF0C\u90A3\u5F53\u7136 ",(0,r.jsx)(t.code,{children:"finally"})," \u662F\u4E0D\u4F1A\u8FD0\u884C\u7684\u3002"]}),"\n",(0,r.jsx)(t.p,{children:"\u603B\u7ED3\u4E00\u4E0B\uFF0C\u4ECE Python \u7684\u5C42\u9762\u770B\uFF0Ctry-finally \u4F9D\u7136\u662F\u4E00\u4E2A\u975E\u5E38\u4F18\u79C0\u7684\u4FDD\u8BC1\u91CA\u653E\u8D44\u6E90\u7684\u624B\u6BB5\u3002\u5B83\u7684\u5F62\u5F0F\u7B80\u5355\uFF0C\u6613\u61C2\uFF0C\u597D\u5199\uFF0C\u540C\u65F6\u8986\u76D6\u4E86\u5927\u90E8\u5206\u6211\u4EEC\u4F1A\u9047\u5230\u7684\u53EF\u80FD\u6027\u3002\u5F53\u7136\u6CA1\u6709\u4E00\u4E2A\u65B9\u6CD5\u662F\u5B8C\u7F8E\u7684\uFF0Ctry-finally \u4E5F\u6709\u5B83\u89E6\u53CA\u4E0D\u5230\u7684\u60C5\u51B5\u3002\u5BF9\u4E8E\u8FD9\u4E9B\u60C5\u51B5\uFF0C\u5982\u679C\u6211\u4EEC\u5FC3\u91CC\u6709\u4E2A\u6570\uFF0C\u4E5F\u4F1A\u5BF9\u6211\u4EEC\u7684\u7F16\u7A0B\u6709\u6240\u5E2E\u52A9\u3002"})]})}function p(e={}){let{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},83573(e,t,i){i.d(t,{A:()=>l});var n=i(96540);let r=(...e)=>e.filter((e,t,i)=>!!e&&""!==e.trim()&&i.indexOf(e)===t).join(" ").trim(),s=e=>{let t=e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,i)=>i?i.toUpperCase():t.toLowerCase());return t.charAt(0).toUpperCase()+t.slice(1)};var o={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let a=(0,n.forwardRef)(({color:e="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:a="",children:l,iconNode:c,...d},f)=>(0,n.createElement)("svg",{ref:f,...o,width:t,height:t,stroke:e,strokeWidth:s?24*Number(i)/Number(t):i,className:r("lucide",a),...!l&&!(e=>{for(let t in e)if(t.startsWith("aria-")||"role"===t||"title"===t)return!0;return!1})(d)&&{"aria-hidden":"true"},...d},[...c.map(([e,t])=>(0,n.createElement)(e,t)),...Array.isArray(l)?l:[l]])),l=(e,t)=>{let i=(0,n.forwardRef)(({className:i,...o},l)=>(0,n.createElement)(a,{ref:l,iconNode:t,className:r(`lucide-${s(e).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,i),...o}));return i.displayName=s(e),i}},45773(e,t,i){i.d(t,{A:()=>n});let n=(0,i(83573).A)("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]])},35404(e,t,i){i.d(t,{A:()=>n});let n=(0,i(83573).A)("copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]])},85731(e,t,i){i.d(t,{A:()=>n});let n=(0,i(83573).A)("play",[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]])},67810(e,t,i){i.d(t,{A:()=>s});var n=i(83941),r=i(61022);function s(){let{prism:e}=(0,r.p)(),{colorMode:t}=(0,n.G)(),i=e.theme,s=e.darkTheme||i;return"dark"===t?s:i}},74794(e,t,i){i.d(t,{A:()=>C});var n=i(74848),r=i(96540),s=i(34164),o=i(67810);let a=[{title:"\u642D\u597D\u9879\u76EE\u9AA8\u67B6",body:["\u6838\u5FC3\u4EE3\u7801\u653E\u8FDB `vector/` \u5305\uFF0C\u6D4B\u8BD5\u653E\u8FDB `tests/` \u5305\uFF0C\u4E24\u4E2A\u6587\u4EF6\u5939\u90FD\u6709 `__init__.py`\uFF0C\u6839\u76EE\u5F55\u53EA\u7559\u4E00\u4E2A\u5165\u53E3\u6587\u4EF6\u3002","\u5728\u6839\u76EE\u5F55\u8FD0\u884C `python -m unittest`\uFF0Cunittest \u4F1A\u81EA\u52A8\u627E\u5230 `tests/test_vector.py` \u91CC\u7684 `test_init` \u5E76\u8FD0\u884C\u3002\u70B9\u5DE6\u4FA7\u6587\u4EF6\u6811\u53EF\u4EE5\u770B\u6BCF\u4E2A\u6587\u4EF6\u3002"],file:"tests/test_vector.py",files:{"examply.py":"",".gitignore":`# Python-generated files
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
`},runs:[{cmd:"python main.py",exit:0,output:"/private/tmp/blog-frame-demo/main.py\n11\n"}]}];var d=i(17181);let f=[{title:"\u7B2C\u4E00\u6B21 API \u8C03\u7528",body:["\u6211\u4EEC\u5148\u5199\u4E00\u4E2A\u6700\u7B80\u5355\u7684\u811A\u672C\uFF1A\u7528 `Anthropic()` \u521B\u5EFA\u5BA2\u6237\u7AEF\uFF0C\u8C03\u7528 `messages.create()` \u53D1\u9001\u4E00\u53E5\u7CFB\u7EDF\u63D0\u793A\u8BCD\u548C\u4E00\u6761\u7528\u6237\u6D88\u606F\uFF0C\u7136\u540E\u628A\u56DE\u590D\u91CC\u7684 text \u5757\u6253\u5370\u51FA\u6765\u3002\u8FD9\u91CC\u6CA1\u6709\u5DE5\u5177\uFF0C\u4E5F\u6CA1\u6709\u5FAA\u73AF\uFF0C\u6A21\u578B\u53EA\u80FD\u804A\u5929\u3002","\u8FD9\u4E2A\u811A\u672C\u8D70\u7684\u662F DeepSeek \u7684 Anthropic \u517C\u5BB9\u63A5\u53E3\uFF0C\u6240\u4EE5 `base_url` \u548C `model` \u586B\u7684\u662F DeepSeek \u7684\u503C\u3002\u5982\u679C\u6362\u56DE\u5B98\u65B9\u63A5\u53E3\uFF0C\u53EA\u9700\u8981\u5220\u6389 `base_url` \u5E76\u6539\u6A21\u578B\u540D\u3002"],file:"agent.py",files:{"agent.py":d.A.s00["agent.py"]}},{title:"\u52A0\u5165 search_products \u5DE5\u5177",body:["\u8FD9\u4E00\u6B65\u4E00\u6B21\u52A0\u5165\u4E86\u56DB\u6837\u4E1C\u897F\uFF1A\u5047\u5546\u54C1\u5217\u8868\u3001\u5DE5\u5177 schema\u3001\u641C\u7D22\u51FD\u6570\u548C\u5BF9\u8BDD\u5FAA\u73AF\u3002\u7EFF\u5E95\u7684\u884C\u662F\u76F8\u5BF9\u4E0A\u4E00\u6B65\u65B0\u589E\u7684\u5185\u5BB9\uFF0C\u53F3\u4E0A\u89D2\u53EF\u4EE5\u5207\u6362\u5230\u201C\u53EA\u770B\u5F53\u524D\u201D\u67E5\u770B\u5B8C\u6574\u6587\u4EF6\u3002","\u63A5\u4E0B\u6765\u7684\u4E09\u6B65\uFF0C\u6211\u4EEC\u628A\u8FD9\u56DB\u6837\u4E1C\u897F\u62C6\u5F00\u9010\u6BB5\u6765\u770B\u3002"],file:"agent.py",files:{"agent.py":d.A.s01["agent.py"]}},{title:"\u5DE5\u5177 schema \u5C31\u662F\u7ED9\u6A21\u578B\u7684\u8BF4\u660E\u4E66",body:["`description` \u4E0D\u662F\u6CE8\u91CA\uFF0C\u800C\u662F\u7ED9\u6A21\u578B\u7684\u4F7F\u7528\u8BF4\u660E\uFF1A\u4EC0\u4E48\u65F6\u5019\u8BE5\u641C\u3001\u600E\u4E48\u641C\u3001\u987E\u5BA2\u63D0\u5230\u591A\u4E2A\u5546\u54C1\u65F6\u8981\u5206\u5F00\u641C\u3002`input_schema` \u91CC\u6BCF\u4E2A\u5B57\u6BB5\u7684 description \u4E5F\u662F\u540C\u6837\u7684\u9053\u7406\u3002","\u6A21\u578B\u53EA\u80FD\u770B\u5230\u8FD9\u6BB5\u6587\u5B57\uFF0C\u770B\u4E0D\u5230\u51FD\u6570\u4F53\u3002\u56E0\u6B64\u51FD\u6570\u5199\u5F97\u518D\u597D\uFF0C\u5982\u679C description \u6CA1\u6709\u8BF4\u6E05\u695A\uFF0C\u6A21\u578B\u7167\u6837\u4E0D\u4F1A\u7528\uFF0C\u6216\u8005\u7528\u9519\u3002"],file:"agent.py",lines:[[49,72]]},{title:"\u641C\u7D22\u51FD\u6570\u4E0E\u5206\u53D1\u8868",body:["\u641C\u7D22\u51FD\u6570\u53EA\u505A\u5173\u952E\u8BCD\u5339\u914D\uFF0C\u5E76\u8FD4\u56DE JSON \u5B57\u7B26\u4E32\u3002\u8FD9\u662F\u56E0\u4E3A\u5DE5\u5177\u7ED3\u679C\u6700\u7EC8\u8981\u4F5C\u4E3A\u6587\u672C\u653E\u8FDB messages\uFF0C\u6240\u4EE5\u6211\u4EEC\u5728\u8FD9\u91CC\u76F4\u63A5\u5E8F\u5217\u5316\u3002","`TOOL_MAP` \u628A\u5DE5\u5177\u540D\u6620\u5C04\u5230\u5BF9\u5E94\u7684\u51FD\u6570\u3002\u4EE5\u540E\u52A0\u65B0\u5DE5\u5177\u65F6\uFF0C\u53EA\u9700\u8981\u5F80\u8FD9\u5F20\u8868\u91CC\u6DFB\u4E00\u884C\uFF0C\u5FAA\u73AF\u672C\u8EAB\u4E0D\u7528\u6539\u52A8\u3002"],file:"agent.py",lines:[[75,87]]},{title:"\u4E24\u5C42 while",body:["\u5916\u5C42 `while` \u8D1F\u8D23\u7B49\u5F85\u7528\u6237\u8F93\u5165\uFF0C\u9047\u5230\u7A7A\u8F93\u5165\u5C31\u9000\u51FA\u3002\u5185\u5C42 `while` \u624D\u662F agent \u5FAA\u73AF\u7684\u672C\u4F53\uFF1A\u8C03\u7528\u6A21\u578B\uFF0C\u628A assistant \u7684\u56DE\u590D\u6574\u4E2A\u8FFD\u52A0\u8FDB messages\uFF1B\u5982\u679C `stop_reason` \u4E0D\u662F `tool_use` \u5C31\u8DF3\u51FA\uFF1B\u5426\u5219\u6267\u884C\u6BCF\u4E00\u4E2A tool_use \u5757\uFF0C\u628A `tool_result` \u6253\u5305\u6210\u4E00\u6761 user \u6D88\u606F\u8FFD\u52A0\u8FDB\u53BB\uFF0C\u7136\u540E\u518D\u5FAA\u73AF\u4E00\u6B21\u3002","\u6709\u4E00\u4E2A\u7EC6\u8282\u9700\u8981\u6CE8\u610F\uFF1Aassistant \u7684 `response.content` \u8981\u539F\u6837\u8FFD\u52A0\uFF0C\u5305\u62EC\u5176\u4E2D\u7684 tool_use \u5757\uFF1B\u4E0B\u4E00\u6761 user \u6D88\u606F\u91CC\u7684 `tool_use_id` \u5FC5\u987B\u4E0E\u4E4B\u5BF9\u5E94\uFF0C\u6A21\u578B\u624D\u77E5\u9053\u54EA\u4E2A\u7ED3\u679C\u5C5E\u4E8E\u54EA\u6B21\u8C03\u7528\u3002"],file:"agent.py",lines:[[102,139]]}],p=`import atexit

class MyFunc:
    def __call__(self):
        print("exiting")

    def __eq__(self, other):
        if isinstance(other, MyFunc):
            return True
        return False

f0 = MyFunc()
atexit.register(f0)
`,u="\u8FD0\u884C",m="\u81EA\u52A8\u6362\u884C",_="\u53D6\u6D88\u81EA\u52A8\u6362\u884C",y="\u6536\u8D77",h={unittest:{steps:a},codeObject:{steps:l},frame:{steps:c},commerce:{steps:f},iterator:{steps:[{title:"\u904D\u5386\u94FE\u8868",body:[],file:"main.py",files:{"main.py":`class NodeIter:
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
`}]}]},classDef:{steps:[{title:"\u6253\u5370 A \u7684 type",body:["\u6253\u5370\u7684\u662F class `A` \u672C\u8EAB\u7684 type\uFF0C\u800C\u4E0D\u662F\u5B83\u4EA7\u751F\u7684 object \u7684 type\uFF0C\u7ED3\u679C\u662F `type`\u3002"],file:"main.py",lines:[[5,5]],files:{"main.py":`class A:
    name = "AAA"
    def f(self):
        print(1)
print(type(A))
`},runs:[{cmd:"python main.py",exit:0,output:`<class 'type'>
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
`}]}]},classDis:{steps:[{title:"\u67E5\u770B class A \u7684\u5B57\u8282\u7801",body:["\u4E0A\u9762\u56DB\u884C\u4EE3\u7801\u7528 `python -m dis main.py` \u6253\u5370\u51FA\u6765\u7684\u5B57\u8282\u7801\u5C31\u662F\u8FD9\u4E9B\uFF0C\u63A5\u4E0B\u6765\u4E00\u6BB5\u4E00\u6BB5\u5730\u770B\u3002"],file:"dis.txt",files:{"dis.txt":`  1           0 LOAD_BUILD_CLASS
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
`}},{title:"f \u51FD\u6570\u7684 code object",body:["\u6700\u540E\u8FD9\u4E00\u6BB5\u662F\u7B2C 3\u30014 \u884C\u5B9A\u4E49\u7684 `f` \u51FD\u6570\u3002\u5B83\u548C\u5728 class \u5916\u9762\u5B9A\u4E49\u7684\u51FD\u6570\u6CA1\u6709\u533A\u522B\uFF0C\u4E5F\u662F\u4E00\u4E2A code object\u3002"],file:"dis.txt",lines:[[27,33]]},{title:"__module__ \u4E0E __qualname__",body:['code object `A` \u7684 0\u30012\u30014\u30016 \u76F8\u5F53\u4E8E `__module__ = __name__` \u548C `__qualname__ = "A"` \u8FD9\u4E24\u53E5\u3002'],file:"dis.txt",lines:[[12,15]]},{title:'name = "AAA"',body:['8 \u548C 10 \u5BF9\u5E94\u7B2C 2 \u884C\u7684 `name = "AAA"`\u3002'],file:"dis.txt",lines:[[17,18]]},{title:"\u505A\u51FA A.f \u51FD\u6570",body:["12 \u5230 22 \u7528 `f` \u7684 code object \u505A\u4E86\u4E00\u4E2A\u540D\u5B57\u53EB `A.f` \u7684\u51FD\u6570\uFF0C\u4FDD\u5B58\u5728 `f` \u8FD9\u4E2A\u53D8\u91CF\u91CC\u3002"],file:"dis.txt",lines:[[20,25]]},{title:"LOAD_BUILD_CLASS",body:["\u56DE\u5230\u6700\u5916\u5C42\uFF0C`LOAD_BUILD_CLASS` \u628A builtins \u91CC\u7684 `__build_class__` \u51FD\u6570\u538B\u5230\u6808\u91CC\u3002"],file:"dis.txt",lines:[[1,1]]},{title:"\u7528 code object A \u505A\u51FD\u6570",body:["2\u30014\u30016 \u7528 code object `A` \u505A\u4E86\u4E00\u4E2A\u540D\u5B57\u53EB `A` \u7684\u51FD\u6570\uFF0C\u4E5F\u5C31\u662F\u6E90\u4EE3\u7801\u7B2C 2\u30013\u30014 \u884C\u7684\u90A3\u4E2A\u5C0F\u51FD\u6570\u3002"],file:"dis.txt",lines:[[2,4]]},{title:"\u8C03\u7528 __build_class__",body:["`CALL_FUNCTION 2` \u8C03\u7528 `__build_class__`\uFF0C\u4F20\u8FDB\u53BB\u521A\u624D\u90A3\u4E2A\u51FD\u6570\u548C\u5B57\u7B26\u4E32 `'A'`\uFF0C\u8FD4\u56DE\u503C\u7528 `STORE_NAME` \u4FDD\u5B58\u5230 `A` \u8FD9\u4E2A\u53D8\u91CF\u91CC\u3002"],file:"dis.txt",lines:[[5,7]]}]},lessFor:{steps:[{title:"\u7528 list comprehension \u5EFA\u7ACB list",body:["`with_for` \u5148\u5EFA\u4E00\u4E2A\u7A7A list\uFF0C\u518D\u5728 for \u5FAA\u73AF\u91CC\u9010\u4E2A `append`\uFF1B\u7B2C 10 \u884C\u7684 list comprehension \u4E00\u884C\u5C31\u505A\u5B8C\u540C\u6837\u7684\u4E8B\u3002"],file:"main.py",lines:[[10,10]],files:{"main.py":`from timeit import timeit

def with_for():
    lst = []
    for i in range(100):
        lst.append(i)
    return lst

def without_for():
    return [i for i in range(100)]

print(f"with:    {timeit(with_for, number=10000)}")
print(f"without: {timeit(without_for, number=10000)}")
`},runs:[{cmd:"python main.py",exit:0,output:`with:    0.18118777603376657
without: 0.06950784893706441
`}]},{title:"\u5F80 list \u91CC\u653E 2 * i",body:["\u4E24\u8FB9\u90FD\u6539\u6210\u653E `2 * i`\uFF0C\u4E24\u6BB5\u4EE3\u7801\u8FD8\u662F\u7B49\u4EF7\u7684\uFF1Alist comprehension \u524D\u9762\u7684 `2 * i` \u662F\u8981\u653E\u8FDB list \u7684\u5143\u7D20\uFF0C`for i in range(100)` \u91CC\u7684 `i` \u662F\u5FAA\u73AF\u53D8\u91CF\u3002"],file:"main.py",lines:[[6,6],[10,10]],files:{"main.py":`from timeit import timeit

def with_for():
    lst = []
    for i in range(100):
        lst.append(2 * i)
    return lst

def without_for():
    return [2 * i for i in range(100)]

print(f"with:    {timeit(with_for, number=10000)}")
print(f"without: {timeit(without_for, number=10000)}")
`},runs:[{cmd:"python main.py",exit:0,output:`with:    0.27866190497297794
without: 0.12156036705709994
`}]},{title:"\u53BB\u6389\u4E58\u6CD5",body:["\u628A\u4E58\u6CD5\u62FF\u6389\uFF0C\u518D\u7528 `timeit` \u5404\u8DD1\u4E00\u4E07\u6B21\uFF0Clist comprehension \u5FEB\u4E86\u5C06\u8FD1\u4E00\u500D\u3002"],file:"main.py",lines:[[10,10]],files:{"main.py":`from timeit import timeit

def with_for():
    lst = []
    for i in range(100):
        lst.append(i)
    return lst

def without_for():
    return [i for i in range(100)]

print(f"with:    {timeit(with_for, number=10000)}")
print(f"without: {timeit(without_for, number=10000)}")
`},runs:[{cmd:"python main.py",exit:0,output:`with:    0.14538276207167655
without: 0.07435397000517696
`}]},{title:"\u628A\u65B9\u62EC\u53F7\u6362\u6210\u5706\u62EC\u53F7",body:["\u5706\u62EC\u53F7\u5F97\u5230\u7684\u662F\u4E00\u4E2A generator\uFF0C\u5E76\u6CA1\u6709\u771F\u7684\u5EFA\u7ACB list\uFF0C\u6240\u4EE5\u6BD4 list comprehension \u8FD8\u8981\u5FEB\u4E00\u4E2A\u6570\u91CF\u7EA7\u3002"],file:"main.py",lines:[[10,10]],files:{"main.py":`from timeit import timeit

def with_for():
    lst = []
    for i in range(100):
        lst.append(i)
    return lst

def without_for():
    return (i for i in range(100))

print(f"with:    {timeit(with_for, number=10000)}")
print(f"without: {timeit(without_for, number=10000)}")
`},runs:[{cmd:"python main.py",exit:0,output:`with:    0.13225205603521317
without: 0.01176562299951911
`}]},{title:"\u81EA\u5DF1\u5199 max \u4E0E built-in \u7684 max",body:["\u4E24\u79CD\u5199\u6CD5\u90FD\u662F\u4E00\u4E2A\u4E00\u4E2A\u62FF\u51FA\u6765\u6BD4\u5927\u5C0F\uFF0Cbuilt-in \u7684 `max` \u5728 C \u5C42\u9762\u5FAA\u73AF\u548C\u5224\u65AD\uFF0C\u5FEB\u4E86\u4E00\u500D\u3002"],file:"main.py",lines:[[13,13]],files:{"main.py":`from timeit import timeit

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
`},runs:[{cmd:"python main.py",exit:0,output:`with:    0.07207407196983695
without: 0.031190164969302714
`}]},{title:"\u7528 any \u627E\u5927\u4E8E 50 \u7684\u6570",body:["`any` \u91CC\u9762\u4F20\u7684\u662F\u4E00\u4E2A generator\uFF0C\u5B83\u8FD8\u662F\u8FD0\u884C\u5728 Python \u5C42\u9762\uFF0C\u518D\u52A0\u4E0A\u5EFA\u7ACB\u548C\u8C03\u7528 generator \u7684\u4EE3\u4EF7\uFF0C\u53CD\u800C\u6BD4\u76F4\u63A5\u5199 for \u5FAA\u73AF\u6162\u4E00\u4E9B\u3002"],file:"main.py",lines:[[12,12]],files:{"main.py":`from timeit import timeit

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
`},runs:[{cmd:"python main.py",exit:0,output:`with:    0.033663389971479774
without: 0.05839480098802596
`}]},{title:"\u76F4\u63A5\u5728 list \u91CC\u627E True",body:["\u6CA1\u6709 generator\uFF0C`any` \u76F4\u63A5\u5728 list \u91CC\u627E `True`\uFF0C\u8FD9\u65F6\u5B83\u6BD4 Python \u7684\u5199\u6CD5\u8981\u5FEB\u3002"],file:"main.py",lines:[[3,3],[12,12]],files:{"main.py":`from timeit import timeit

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
`},runs:[{cmd:"python main.py",exit:0,output:`with:    0.030014808988198638
without: 0.01334321906324476
`}]},{title:"\u7528 all \u5224\u65AD\u5168\u90E8\u6EE1\u8DB3",body:["`all` \u5BF9\u5E94\u7684 Python \u5199\u6CD5\u548C `any` \u975E\u5E38\u76F8\u4F3C\uFF0C\u53EA\u662F\u627E\u5230\u4E00\u4E2A\u4E0D\u6EE1\u8DB3\u7684\u5C31\u8FD4\u56DE `False`\u3002"],file:"main.py",lines:[[12,12]],files:{"main.py":`from timeit import timeit

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
`},runs:[{cmd:"python main.py",exit:0,output:`with:    0.08496602508239448
without: 0.12303665594663471
`}]},{title:"\u7ED9 any \u4F20 list comprehension",body:["\u4F20\u8FDB `any` \u7684\u662F list comprehension\uFF0C\u8981\u5148\u628A\u6574\u4E2A list \u8FC7\u4E00\u904D\u518D\u4EA4\u7ED9 `any`\uFF0C\u6BD4\u4F20 generator \u660E\u663E\u66F4\u6162\u3002"],file:"main.py",lines:[[12,12]],files:{"main.py":`from timeit import timeit

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
`},runs:[{cmd:"python main.py",exit:0,output:`with:    0.029346888069994748
without: 0.08317410794552416
`}]},{title:"\u5E26\u6761\u4EF6\u7684 list comprehension",body:["\u5728 list comprehension \u540E\u9762\u52A0\u4E00\u4E2A `if`\uFF0C\u53EA\u6709 `good(num)` \u6210\u7ACB\u65F6\u624D\u628A `num` \u653E\u8FDB list\u3002"],file:"main.py",lines:[[16,16]],files:{"main.py":`from timeit import timeit

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
`},runs:[{cmd:"python main.py",exit:0,output:`with:    0.221246542991139
without: 0.18048328801523894
`}]},{title:"\u7528 filter \u7B5B\u9009",body:["`filter` \u7684\u7B2C\u4E00\u4E2A argument \u662F\u5224\u65AD\u51FD\u6570\uFF0C\u7B2C\u4E8C\u4E2A\u662F iterable\uFF0C\u5B83\u8FD4\u56DE\u7684\u4E0D\u662F list\u3002"],file:"main.py",lines:[[16,16]],files:{"main.py":`from timeit import timeit

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
`},runs:[{cmd:"python main.py",exit:0,output:`with:    0.24698416597675532
without: 0.011553463991731405
`}]},{title:"\u7528 map \u6620\u5C04",body:["`map` \u628A `change` \u4F5C\u7528\u5728 `lst` \u7684\u6BCF\u4E00\u4E2A\u503C\u4E0A\uFF0C\u540C\u6837\u8FD4\u56DE\u7684\u4E0D\u662F list\u3002"],file:"main.py",lines:[[15,15]],files:{"main.py":`from timeit import timeit

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
`},runs:[{cmd:"python main.py",exit:0,output:`with:    0.3439125649165362
without: 0.006233505089767277
`}]},{title:"\u7B49\u4EF7\u7684 generator",body:["\u6CE8\u91CA\u6389\u7684\u8FD9\u4E00\u884C\u5C31\u662F\u548C `map` \u7B49\u4EF7\u7684 generator \u5199\u6CD5\u3002"],file:"main.py",lines:[[15,15]],files:{"main.py":`from timeit import timeit

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
`},runs:[{cmd:"python main.py",exit:0,output:`with:    0.2475171050755307
without: 0.0026136089581996202
`}]},{title:"map \u63A5\u53D7\u591A\u4E2A iterable",body:["`change` \u9700\u8981\u4E24\u4E2A input \u65F6\uFF0C`map` \u4ECE `lst` \u548C `lst2` \u91CC\u5404\u53D6\u4E00\u4E2A\u503C\u4F20\u8FDB\u53BB\uFF1B\u6CE8\u91CA\u91CC\u7684 generator \u5199\u6CD5\u5C31\u663E\u5F97\u5197\u957F\u4E86\u3002"],file:"main.py",lines:[[16,18]],files:{"main.py":`from timeit import timeit

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
`},runs:[{cmd:"python main.py",exit:0,output:`with:    0.3044405709952116
without: 0.0034239100059494376
`}]},{title:"\u7528 zip \u5408\u5E76\u4E24\u4E2A list",body:["`zip` \u628A\u4E24\u4E2A list \u91CC index \u76F8\u540C\u7684\u503C\u7EC4\u6210 tuple\uFF0C\u540C\u6837\u8FD4\u56DE\u7684\u4E0D\u662F list\u3002"],file:"main.py",lines:[[13,13]],files:{"main.py":`from timeit import timeit

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
`},runs:[{cmd:"python main.py",exit:0,output:`with:    0.21944441099185497
without: 0.0037513560382649302
`}]},{title:"\u7528 zip \u540C\u65F6\u62FF\u5230\u4E00\u4E2A\u4EBA\u7684\u6570\u636E",body:["`zip` \u6BCF\u6B21\u4EA7\u751F\u4E00\u4E2A tuple\uFF0C\u76F4\u63A5 unpack \u5230 `name`\u3001`age` \u548C `score` \u91CC\uFF0C\u548C\u6309 index \u53D6\u503C\u7684\u5199\u6CD5\u529F\u80FD\u7B49\u4EF7\u3002"],file:"main.py",lines:[[15,15]],files:{"main.py":`from timeit import timeit

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
`},runs:[{cmd:"python main.py",exit:0,output:`Alice 18 3
Bob 16 4
Charlie 19 5
with:    3.3535994589328766e-05
Alice 18 3
Bob 16 4
Charlie 19 5
without: 1.0241055861115456e-05
`}]}]},tryFinally:{steps:[{title:"\u7528 try-except \u5904\u7406\u9664\u4EE5\u96F6",body:["`1 / 0` \u629B\u51FA `ZeroDivisionError`\uFF0C\u88AB `except` \u63A5\u4F4F\uFF0C\u53EA\u6253\u5370\u4E00\u884C `Divided by zero`\uFF0C\u7A0B\u5E8F\u4E0D\u4F1A\u9000\u51FA\u3002"],file:"main.py",lines:[[3,4]],files:{"main.py":`try:
    a = 1 / 0
except ZeroDivisionError:
    print("Divided by zero")
`},runs:[{cmd:"python main.py",exit:0,output:`Divided by zero
`}]},{title:"\u4EE3\u7801\u62A5\u9519\uFF0C\u8D44\u6E90\u6CA1\u6709\u91CA\u653E",body:["\u4E24\u4E2A `print` \u5206\u522B\u4EE3\u8868\u8D44\u6E90\u7684\u83B7\u53D6\u548C\u91CA\u653E\u3002\u7B2C 2 \u884C\u62A5\u9519\u4E4B\u540E\uFF0C\u7A0B\u5E8F\u76F4\u63A5\u7ED3\u675F\uFF0C\u7B2C 3 \u884C\u91CA\u653E\u8D44\u6E90\u7684\u4EE3\u7801\u6CA1\u6709\u8FD0\u884C\u3002"],file:"main.py",lines:[[3,3]],files:{"main.py":`print("Resource acquire")
a = 1 / 0
print("Resource release")
`},runs:[{cmd:"python main.py",exit:1,output:`Resource acquire
Traceback (most recent call last):
  File "/home/claude-user/tryfinally_example/main.py", line 2, in <module>
    a = 1 / 0
        ~~^~~
ZeroDivisionError: division by zero
`}]},{title:"\u628A\u91CA\u653E\u653E\u8FDB finally",body:["\u83B7\u53D6\u8D44\u6E90\u548C\u8FD0\u884C\u7684\u4EE3\u7801\u653E\u8FDB `try`\uFF0C\u91CA\u653E\u8D44\u6E90\u653E\u8FDB `finally`\u3002\u5F02\u5E38\u6CA1\u6709\u88AB\u6355\u83B7\uFF0C\u7A0B\u5E8F\u8FD8\u662F\u4EE5\u5F02\u5E38\u7ED3\u675F\uFF0C\u4F46 `Resource release` \u5728 traceback \u4E4B\u524D\u6253\u5370\u4E86\u51FA\u6765\u3002"],file:"main.py",lines:[[4,5]],files:{"main.py":`try:
    print("Resource acquire")
    a = 1 / 0
finally:
    print("Resource release")
`},runs:[{cmd:"python main.py",exit:1,output:`Resource acquire
Resource release
Traceback (most recent call last):
  File "/home/claude-user/tryfinally_example/main.py", line 3, in <module>
    a = 1 / 0
        ~~^~~
ZeroDivisionError: division by zero
`}]},{title:"except \u548C finally \u4E00\u8D77\u7528",body:["\u5F02\u5E38\u5148\u88AB `except` \u63A5\u4F4F\uFF0C\u6253\u5370 `Divided by zero`\uFF0C\u4E4B\u540E `finally` \u4F9D\u7136\u8FD0\u884C\uFF0C`Resource release` \u7167\u6837\u6253\u5370\u51FA\u6765\u3002"],file:"main.py",lines:[[6,7]],files:{"main.py":`try:
    print("Resource acquire")
    a = 1 / 0
except ZeroDivisionError:
    print("Divided by zero")
finally:
    print("Resource release")
`},runs:[{cmd:"python main.py",exit:0,output:`Resource acquire
Divided by zero
Resource release
`}]},{title:"atexit \u4E0E try-finally",body:["`atexit.register` \u767B\u8BB0\u7684 `release_resource` \u8981\u7B49\u5230\u6574\u4E2A\u7A0B\u5E8F\u7ED3\u675F\u65F6\u624D\u8FD0\u884C\uFF1B`try-finally` \u5728\u8FD9\u4E00\u6BB5\u4EE3\u7801\u8FD0\u884C\u5B8C\u5C31\u91CA\u653E\u8D44\u6E90\uFF0C\u653E\u5728\u4EFB\u610F scope \u91CC\u90FD\u53EF\u4EE5\u3002"],file:"main.py",lines:[[6,6],[8,12]],files:{"main.py":`import atexit

def release_resource():
    pass

atexit.register(release_resource)

try:
    print("Resource acquire")
    # All kinds of crap
finally:
    print("Resource release")
`},runs:[{cmd:"python main.py",exit:0,output:`Resource acquire
Resource release
`}]},{title:"sys.exit \u65F6 finally \u7167\u5E38\u8FD0\u884C",body:["`sys.exit(0)` \u672C\u8D28\u4E0A\u662F raise \u4E86\u4E00\u4E2A `SystemExit`\uFF0C`finally` \u53EF\u4EE5\u5904\u7406\uFF0C`Resource release` \u88AB\u6253\u5370\u51FA\u6765\u3002"],file:"main.py",lines:[[4,4]],files:{"main.py":`import sys
try:
    print("Resource acquire")
    sys.exit(0)
finally:
    print("Resource release")
`},runs:[{cmd:"python main.py",exit:0,output:`Resource acquire
Resource release
`}]},{title:"\u7528 Ctrl+C \u9000\u51FA",body:["\u7A0B\u5E8F\u5728 `while` \u5FAA\u73AF\u91CC\u4E00\u76F4\u7B49\u7740\u3002\u8FD0\u884C\u540E\u6309 Ctrl+C\uFF0CPython raise \u4E00\u4E2A `KeyboardInterrupt`\uFF0C`finally` \u5148\u6253\u5370 `Resource release`\uFF0C\u7136\u540E\u624D\u662F traceback\u3002"],file:"main.py",lines:[[4,5]],files:{"main.py":`import time
try:
    print("Resource acquire")
    while True:
        time.sleep(1)
finally:
    print("Resource release")
`},runs:[{cmd:"python main.py",exit:130,output:`Resource acquire
^CResource release
Traceback (most recent call last):
  File "/home/claude-user/tryfinally_example/main.py", line 5, in <module>
    time.sleep(1)
KeyboardInterrupt
`}]},{title:"\u7528 SIGINT \u505C\u6B62\u8FDB\u7A0B",body:["\u4EE3\u7801\u4E0D\u53D8\uFF0C\u7A0B\u5E8F\u8FD0\u884C\u540E\u5728\u53E6\u4E00\u4E2A\u7EC8\u7AEF\u7528 `kill -2 <pid>` \u7ED9\u5B83\u53D1 `SIGINT`\u3002\u7ED3\u679C\u548C\u6309 Ctrl+C \u4E00\u6837\uFF0C`Resource release` \u88AB\u6253\u5370\u51FA\u6765\u3002"],file:"main.py",runs:[{cmd:"python main.py",exit:130,output:`Resource acquire
$ kill -2 <pid>
Resource release
Traceback (most recent call last):
  File "/home/claude-user/tryfinally_example/main.py", line 5, in <module>
    time.sleep(1)
KeyboardInterrupt
`}]},{title:"\u7528 SIGTERM \u505C\u6B62\u8FDB\u7A0B",body:["\u6362\u6210 `kill -15 <pid>` \u53D1 `SIGTERM`\uFF0C\u8FDB\u7A0B\u88AB\u76F4\u63A5 terminate\uFF0C\u53EA\u6253\u5370\u4E86 `Resource acquire`\uFF0C`finally` \u91CC\u7684\u4EE3\u7801\u6CA1\u6709\u8FD0\u884C\u3002"],file:"main.py",lines:[[6,7]],runs:[{cmd:"python main.py",exit:143,output:`Resource acquire
$ kill -15 <pid>
`}]},{title:"os._exit \u8DF3\u8FC7 finally",body:["`os._exit(0)` \u76F4\u63A5\u505A system call \u9000\u51FA\u8FDB\u7A0B\uFF0C`finally` \u8FD9\u4E2A\u4EE3\u7801\u5757\u4E0D\u4F1A\u8FD0\u884C\uFF0C\u53EA\u6709 `Resource acquire` \u88AB\u6253\u5370\u51FA\u6765\u3002"],file:"main.py",lines:[[4,4]],files:{"main.py":`import os
try:
    print("Resource acquire")
    os._exit(0)
finally:
    print("Resource release")
`},runs:[{cmd:"python main.py",exit:0,output:`Resource acquire
`}]}]},atexitModule:{steps:[{title:"\u7528 register \u6CE8\u518C\u9000\u51FA\u51FD\u6570",body:["`atexit.register(f)` \u628A `f` \u6CE8\u518C\u8FDB\u53BB\uFF0C\u7A0B\u5E8F\u7ED3\u675F\u3001\u8FDB\u7A0B\u9000\u51FA\u7684\u65F6\u5019\u8FD0\u884C\u5B83\uFF0C\u6253\u5370\u51FA `exiting`\u3002"],file:"main.py",lines:[[6,6]],files:{"main.py":`import atexit

def f():
    print("exiting")

atexit.register(f)
`},runs:[{cmd:"python main.py",exit:0,output:`exiting
`}]},{title:"\u7ED9\u9000\u51FA\u51FD\u6570\u4F20\u53C2\u6570",body:['`f` \u73B0\u5728\u9700\u8981\u4E00\u4E2A\u53C2\u6570 `s`\uFF0C\u53C2\u6570\u8DDF\u5728\u51FD\u6570\u540E\u9762\u4E00\u8D77\u4F20\u7ED9 `register`\uFF0C\u9000\u51FA\u65F6 `f("exiting")` \u88AB\u8C03\u7528\uFF0C\u7ED3\u679C\u548C\u4E4B\u524D\u4E00\u6837\u3002'],file:"main.py",lines:[[6,6]],files:{"main.py":`import atexit

def f(s):
    print(s)

atexit.register(f, "exiting")
`},runs:[{cmd:"python main.py",exit:0,output:`exiting
`}]},{title:"\u628A register \u5F53 decorator \u7528",body:["`@atexit.register` \u653E\u5728 `f` \u7684\u5B9A\u4E49\u524D\u9762\uFF0C\u6548\u679C\u4E00\u6837\uFF0C\u9000\u51FA\u65F6\u6253\u5370 `exiting`\u3002"],file:"main.py",lines:[[3,3]],files:{"main.py":`import atexit

@atexit.register
def f():
    print("exiting")
`},runs:[{cmd:"python main.py",exit:0,output:`exiting
`}]},{title:"decorator \u7684\u7B49\u4EF7\u5199\u6CD5",body:["\u7B2C 3 \u884C\u7684 decorator \u76F8\u5F53\u4E8E\u7B2C 8 \u884C\u8FD9\u53E5\u8D4B\u503C\uFF1A`atexit.register` \u6CE8\u518C\u4E4B\u540E\uFF0C\u628A\u62FF\u5230\u7684\u51FD\u6570\u539F\u6837\u8FD4\u56DE\uFF0C\u6240\u4EE5 `f` \u8FD8\u662F\u539F\u6765\u90A3\u4E2A\u51FD\u6570\u3002"],file:"main.py",lines:[[3,3],[8,8]],files:{"main.py":`import atexit

@atexit.register
def f():
    print("exiting")

# \u{7B49}\u{4EF7}\u{4E8E}
f = atexit.register(f)
`}},{title:"\u7528 unregister \u53D6\u6D88\u6CE8\u518C",body:["\u7B2C 7 \u884C\u628A `f` unregister \u6389\uFF0C\u7A0B\u5E8F\u9000\u51FA\u65F6\u5C31\u4E0D\u518D\u8FD0\u884C\u5B83\uFF0C\u4EC0\u4E48\u90FD\u6CA1\u6709\u6253\u5370\u3002"],file:"main.py",lines:[[7,7]],files:{"main.py":`import atexit

@atexit.register
def f():
    print("exiting")

atexit.unregister(f)
`},runs:[{cmd:"python main.py",exit:0,output:""}]},{title:"\u6CE8\u518C\u4E09\u6B21\uFF0Cunregister \u4E00\u6B21",body:["`f` \u6CE8\u518C\u4E86\u4E09\u6B21\uFF0C\u53EA unregister \u4E86\u4E00\u6B21\uFF0C\u4E09\u6B21\u6CE8\u518C\u5168\u90E8\u88AB\u79FB\u9664\uFF0C\u4EC0\u4E48\u90FD\u6CA1\u6709\u6253\u5370\u3002"],file:"main.py",lines:[[6,9]],files:{"main.py":`import atexit

def f():
    print("exiting")

atexit.register(f)
atexit.register(f)
atexit.register(f)
atexit.unregister(f)
`},runs:[{cmd:"python main.py",exit:0,output:""}]},{title:"\u6CE8\u518C\u4E00\u4E2A callable object",body:["`MyFunc` \u5B9A\u4E49\u4E86 `__call__`\uFF0C\u6240\u4EE5\u5B83\u7684 instance \u662F callable\uFF1B`__eq__` \u8BA9\u4EFB\u610F\u4E24\u4E2A `MyFunc` instance \u90FD\u76F8\u7B49\u3002\u6CE8\u518C `f0` \u4E4B\u540E\uFF0C\u9000\u51FA\u65F6\u6253\u5370 `exiting`\u3002"],file:"main.py",lines:[[12,13]],files:{"main.py":p},runs:[{cmd:"python main.py",exit:0,output:`exiting
`}]},{title:"\u7528\u76F8\u7B49\u7684\u5BF9\u8C61 unregister",body:["`f1` \u548C `f0` \u662F\u4E24\u4E2A object\uFF0C\u4F46 `f1 == f0`\u3002unregister `f1` \u4E4B\u540E\uFF0C\u6CE8\u518C\u8FC7\u7684 `f0` \u4E5F\u88AB\u79FB\u9664\u4E86\uFF0C\u4EC0\u4E48\u90FD\u6CA1\u6709\u6253\u5370\u3002"],file:"main.py",lines:[[14,15]],files:{"main.py":`${p}f1 = MyFunc()
atexit.unregister(f1)
`},runs:[{cmd:"python main.py",exit:0,output:""}]},{title:"\u5217\u51FA atexit \u7684\u5168\u90E8\u540D\u5B57",body:["\u9664\u4E86 `register` \u548C `unregister`\uFF0C\u8FD8\u6709 `_clear`\u3001`_ncallbacks`\u3001`_run_exitfuncs` \u4E09\u4E2A\u6CA1\u6709\u5199\u8FDB\u6587\u6863\u7684\u51FD\u6570\u3002"],file:"main.py",lines:[[3,3]],files:{"main.py":`import atexit

print(dir(atexit))
`},runs:[{cmd:"python main.py",exit:0,output:`['__doc__', '__loader__', '__name__', '__package__', '__spec__', '_clear', '_ncallbacks', '_run_exitfuncs', 'register', 'unregister']
`}]},{title:"_ncallbacks \u4E0E _clear",body:["\u7B2C 14 \u884C\u6253\u5370\u51FA\u5DF2\u6CE8\u518C\u7684\u51FD\u6570\u4E2A\u6570 `1`\uFF1B\u7B2C 15 \u884C `_clear()` \u628A\u5B83\u4EEC\u6E05\u7A7A\uFF0C\u9000\u51FA\u65F6\u5C31\u6CA1\u6709\u518D\u6253\u5370 `exiting`\u3002"],file:"main.py",lines:[[14,15]],files:{"main.py":`${p}print(atexit._ncallbacks())
atexit._clear()
`},runs:[{cmd:"python main.py",exit:0,output:`1
`}]},{title:"\u7528 _run_exitfuncs \u63D0\u524D\u8FD0\u884C",body:["\u7B2C 15 \u884C `_run_exitfuncs()` \u7ACB\u523B\u628A\u6CE8\u518C\u7684\u51FD\u6570\u8FD0\u884C\u4E00\u904D\u5E76\u6E05\u7A7A\uFF0C\u6240\u4EE5 `exiting` \u51FA\u73B0\u5728\u7B2C 16 \u884C\u7684 `Before exit` \u524D\u9762\uFF0C\u7A0B\u5E8F\u9000\u51FA\u65F6\u4E5F\u6CA1\u6709\u518D\u6253\u5370\u4E00\u6B21\u3002"],file:"main.py",lines:[[15,16]],files:{"main.py":`${p}print(atexit._ncallbacks())
atexit._run_exitfuncs()
print("Before exit")
`},runs:[{cmd:"python main.py",exit:0,output:`1
exiting
Before exit
`}]},{title:"os._exit \u8DF3\u8FC7\u6CE8\u518C\u7684\u51FD\u6570",body:["\u6CE8\u518C\u4E86 `f0` \u4E4B\u540E\u8C03\u7528 `os._exit(0)`\uFF0C\u8FDB\u7A0B\u76F4\u63A5\u901A\u8FC7 system call \u9000\u51FA\uFF0C`exiting` \u6CA1\u6709\u6253\u5370\u51FA\u6765\u3002"],file:"main.py",lines:[[15,15]],files:{"main.py":`import atexit
import os

class MyFunc:
    def __call__(self):
        print("exiting")

    def __eq__(self, other):
        if isinstance(other, MyFunc):
            return True
        return False

f0 = MyFunc()
atexit.register(f0)
os._exit(0)
`},runs:[{cmd:"python main.py",exit:0,output:""}]},{title:"\u5728 multiprocessing \u5B50\u8FDB\u7A0B\u91CC\u6CE8\u518C",body:["`t` \u5728\u5B50\u8FDB\u7A0B\u91CC\u6CE8\u518C\u4E86\u4E00\u4E2A\u6253\u5370 `exiting` \u7684\u51FD\u6570\u3002\u5728 Linux \u4E0A\u8FD0\u884C\uFF0C\u4EC0\u4E48\u90FD\u6CA1\u6709\u6253\u5370\uFF1A\u5B50\u8FDB\u7A0B\u8DD1\u5B8C `t` \u4E4B\u540E\u662F\u7528 `os._exit` \u9000\u51FA\u7684\u3002"],file:"main.py",lines:[[4,7]],files:{"main.py":`import atexit
import multiprocessing

def t():
    def f():
        print("exiting")
    atexit.register(f)

p = multiprocessing.Process(target=t)
p.start()
p.join()
`},runs:[{cmd:"python main.py",exit:0,output:""}]},{title:"\u6362\u6210 spawn \u542F\u52A8\u5B50\u8FDB\u7A0B",body:['\u7528 spawn \u542F\u52A8\u7684\u5B50\u8FDB\u7A0B\u662F\u4E00\u4E2A\u5168\u65B0\u7684 Python \u89E3\u91CA\u5668\uFF0C\u8DD1\u5B8C `t` \u4E4B\u540E\u7528 `sys.exit` \u6B63\u5E38\u9000\u51FA\uFF0C\u6240\u4EE5\u6CE8\u518C\u7684\u51FD\u6570\u4F1A\u8FD0\u884C\uFF0C\u6253\u5370\u51FA `exiting`\u3002spawn \u4F1A\u5728\u5B50\u8FDB\u7A0B\u91CC\u91CD\u65B0 import \u4E3B\u6A21\u5757\uFF0C\u542F\u52A8\u5B50\u8FDB\u7A0B\u7684\u4EE3\u7801\u5FC5\u987B\u653E\u8FDB `if __name__ == "__main__":`\u3002'],file:"main.py",lines:[[9,13]],files:{"main.py":`import atexit
import multiprocessing

def t():
    def f():
        print("exiting")
    atexit.register(f)

if __name__ == "__main__":
    multiprocessing.set_start_method("spawn")
    p = multiprocessing.Process(target=t)
    p.start()
    p.join()
`},runs:[{cmd:"python main.py",exit:0,output:`exiting
`}]}]}};var x=i(51507),g=i(82387);let b="btn_JmFc",v="btnPrimary_x2Yk",w="termBtn_CC8E",j="termBtnOpen_rzSH",A="termIcon_Zbcm";function E(e,t){return e.replace(/\{(\w+)\}/g,(e,i)=>void 0!==t[i]?String(t[i]):`{${i}}`)}function k({text:e}){return e.split(/(`[^`]+`)/g).map((e,t)=>e.startsWith("`")&&e.endsWith("`")&&e.length>=2?(0,n.jsx)("code",{className:"inlineCode_AI70",children:e.slice(1,-1)},t):(0,n.jsx)(r.Fragment,{children:e},t))}function T(e){return(0,n.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",...e,children:(0,n.jsx)("polygon",{points:"6 3 20 12 6 21 6 3"})})}function N(e){return(0,n.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",...e,children:[(0,n.jsx)("rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}),(0,n.jsx)("path",{d:"m7 11 2-2-2-2"}),(0,n.jsx)("path",{d:"M11 13h4"})]})}function O(e){return(0,n.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",...e,children:[(0,n.jsx)("path",{d:"M3 6h18"}),(0,n.jsx)("path",{d:"M3 12h15a3 3 0 1 1 0 6h-4"}),(0,n.jsx)("path",{d:"m16 16-2 2 2 2"}),(0,n.jsx)("path",{d:"M3 18h7"})]})}function R(e){return(0,n.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",...e,children:(0,n.jsx)("rect",{x:"4",y:"4",width:"16",height:"16",rx:"2"})})}function S({run:e,wrap:t}){let i=(0,r.useMemo)(()=>e.output.replace(/\n$/,"").split("\n"),[e.output]),{shown:o,started:a,done:l}=(0,x.A)(i,!0);return(0,n.jsxs)("div",{className:(0,s.A)("termOutput_aJer",t&&"termOutputWrap_ZhlF"),"aria-live":"polite",children:[(0,n.jsxs)("div",{className:"termOutputRow_eFC7",children:[(0,n.jsx)("span",{className:"termMark_yyoX",title:"\u9884\u5148\u5F55\u5236\u7684\u8FD0\u884C\u7ED3\u679C\uFF0C\u4E0D\u662F\u6D4F\u89C8\u5668\u5B9E\u65F6\u6267\u884C",children:(0,n.jsx)(N,{className:"termMarkIcon_o1H5","aria-label":"\u7EC8\u7AEF",role:"img"})}),(0,n.jsxs)("div",{className:"termOutputBody_dl5T",children:[!a&&(0,n.jsx)("div",{className:"termRunning_L5SW",children:"\u8FD0\u884C\u4E2D\u2026"}),i.slice(0,o).map((e,t)=>(0,n.jsx)("div",{className:(0,s.A)("run-output__line","termLine_seW0"),children:""===e?" ":e},t)),a&&!l&&(0,n.jsx)("span",{className:"run-output__cursor"})]})]}),l&&(0,n.jsx)("div",{className:(0,s.A)("termFoot_BTl4",0!==e.exit&&"termFootFail_H1CC"),children:E("\u8FDB\u7A0B\u9000\u51FA\uFF0C\u9000\u51FA\u7801 {code}",{code:e.exit})})]})}function C({variant:e,step:t=1,nav:i=!1}){let r=h[e];if(!r)throw Error(`CodeWalkthrough: unknown variant "${e}"`);return(0,n.jsx)(L,{data:r,initialStep:t,nav:i},e)}function L({data:e,initialStep:t,nav:i}){let a,{steps:l}=e,c=(0,o.A)(),d=(0,r.useMemo)(()=>(function(e){let t=[],i={};for(let n of e){for(let[e,t]of(i={...i},Object.entries(n.files||{})))null===t?delete i[e]:i[e]=t;t.push(i)}return t})(l),[l]),f=(0,r.useMemo)(()=>1===new Set(d.flatMap(Object.keys)).size,[d]),[p,h]=(0,r.useState)(()=>Math.min(Math.max(t-1,0),l.length-1)),[x,N]=(0,r.useState)(null),[C,D]=(0,r.useState)(!1),F=l[p],M=d[p],V=p>0?d[p-1]:null,q=c.plain.backgroundColor,I=F.runs||[],U=f&&1===I.length?{output:I[0].output,status:""===I[0].output&&0===I[0].exit?"empty":`exit:${I[0].exit}`}:null,P=e=>{l[e]&&(h(e),N(null))};return(0,n.jsxs)("div",{className:"root_lC3A",children:[(0,n.jsxs)("div",{className:"stepsPanel_A8J6",children:[(0,n.jsxs)("div",{className:"stepHead_rWEC",children:[(0,n.jsx)("span",{className:"stepTitle_eRCc",children:E("\u7B2C {n} \u6B65 \xb7 {title}",{n:p+1,title:F.title})}),(0,n.jsx)("span",{className:"stepCounter_d1xs",children:E("{n} / {total}",{n:p+1,total:l.length})})]}),(0,n.jsx)("div",{className:"stepBody_xfZr",children:F.body.map((e,t)=>(0,n.jsx)("p",{children:(0,n.jsx)(k,{text:e})},t))}),i&&(0,n.jsxs)("div",{className:"navButtons_ENqt",children:[(0,n.jsx)("button",{type:"button",disabled:0===p,onClick:()=>P(p-1),className:(0,s.A)(b,v),children:"\u4E0A\u4E00\u6B65"}),(0,n.jsx)("button",{type:"button",disabled:p===l.length-1,onClick:()=>P(p+1),className:(0,s.A)(b,v),children:"\u4E0B\u4E00\u6B65"})]})]}),(0,n.jsx)(g.A,{files:M,previousFiles:V,stepKey:p,preferredFiles:(a=Object.keys(F.files||{}).filter(e=>Object.hasOwn(M,e)),(F.file?[F.file,...a.filter(e=>e!==F.file)]:a).filter(e=>Object.hasOwn(M,e))),focusFile:F.file,focusRanges:F.lines,single:f,run:U}),I.length>0&&!U&&(0,n.jsx)("div",{className:"terminal_x6YH",style:{backgroundColor:q,color:c.plain.color},children:I.map((e,t)=>{let i=x===t;return(0,n.jsxs)("div",{className:"termRun_pPQl",children:[(0,n.jsxs)("div",{className:"termPrompt__Qbi",children:[(0,n.jsx)("span",{className:"termDollar_FMaj","aria-hidden":"true",children:"$"}),(0,n.jsx)("code",{className:"termCmd_KH0y",children:e.cmd}),i&&(0,n.jsx)("button",{type:"button","aria-pressed":C,"aria-label":C?_:m,title:C?_:m,onClick:()=>D(!C),className:(0,s.A)(w,C&&j),children:(0,n.jsx)(O,{className:A})}),(0,n.jsx)("button",{type:"button","aria-expanded":i,"aria-label":i?y:u,title:i?y:u,onClick:()=>N(i?null:t),className:(0,s.A)(w,i&&j),children:i?(0,n.jsx)(R,{className:A}):(0,n.jsx)(T,{className:A})})]}),i&&(0,n.jsx)(S,{run:e,wrap:C})]},`${p}-${t}`)})})]})}},82387(e,t,i){i.d(t,{A:()=>en});var n,r,s,o,a,l,c,d,f,p,u,m,_,y,h=i(74848),x=i(96540),g=i(34164),b=i(83573);let v=(0,b.A)("square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);var w=i(85731);let j=(0,b.A)("file-diff",[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M9 10h6",key:"9gxzsh"}],["path",{d:"M12 13V7",key:"h0r20n"}],["path",{d:"M9 17h6",key:"r8uit2"}]]),A=(0,b.A)("file-code-corner",[["path",{d:"M4 12.15V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3.35",key:"1wthlu"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"m5 16-3 3 3 3",key:"331omg"}],["path",{d:"m9 22 3-3-3-3",key:"lsp7cz"}]]);var E=i(71765),k=i(67810);let T={"files.heading":"\u6587\u4EF6","copy.idle":"\u590D\u5236\u4EE3\u7801","copy.copying":"\u590D\u5236\u4E2D\u2026","copy.copied":"\u5DF2\u590D\u5236","copy.error":"\u590D\u5236\u5931\u8D25","copy.hint":"\u590D\u5236\u5F53\u524D\u6B65\u9AA4\u4E2D {path} \u7684\u5B8C\u6574\u4EE3\u7801","copy.empty":"\u8BF7\u5148\u9009\u62E9\u4E00\u4E2A\u6587\u4EF6","copy.errorHint":"\u590D\u5236\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\u6216\u624B\u52A8\u9009\u62E9\u4EE3\u7801\u590D\u5236","run.show":"\u8FD0\u884C\uFF08\u663E\u793A\u9884\u5F55\u8F93\u51FA\uFF09","run.hide":"\u6536\u8D77\u8F93\u51FA","diff.show":"\u663E\u793A\u6539\u52A8","diff.hide":"\u53EA\u770B\u5F53\u524D","badge.new":"\u65B0\u6587\u4EF6","badge.changed":"\u5DF2\u4FEE\u6539","aria.codeActions":"\u4EE3\u7801\u64CD\u4F5C","aria.openFiles":"\u5DF2\u6253\u5F00\u7684\u6587\u4EF6","aria.closeTab":"\u5173\u95ED {path}","empty.title":"\u6CA1\u6709\u6253\u5F00\u7684\u6587\u4EF6","empty.body":"\u4ECE\u6587\u4EF6\u5217\u8868\u6253\u5F00\u4E00\u4E2A\u6587\u4EF6\uFF0C\u6216\u901A\u8FC7\u6F14\u7EC3\u6B65\u9AA4\u8FDB\u884C\u5BFC\u822A"};var N=i(99920),O=i(14529);let R=(e,t)=>null!=t&&Object.hasOwn(e,t);function S(e,t,i,n){let r=!e||!Object.is(e.stepKey,n),s=[...new Set(i)].filter(e=>R(t,e)),o=(e?.tabs||[]).filter(e=>R(t,e)),a=r?[...s,...o.filter(e=>!s.includes(e))]:o,l=r&&s[0]||(a.includes(e?.activeFile)?e.activeFile:a[0])||null;return{files:t,stepKey:n,tabs:a,activeFile:l}}var C=i(45773);let L=(0,b.A)("circle-alert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);var D=i(35404);let F="treeItem_xqPD",M="treeName_oNgA",V="codeActionButton_f4xz",q="codeActionIcon_Y_2N";function I({text:e,path:t}){let[i,n]=(0,x.useState)("idle"),r=(0,x.useRef)(null),s=(0,x.useRef)(0),o=(0,x.useRef)(!1),a="string"==typeof e;(0,x.useEffect)(()=>()=>{clearTimeout(r.current),s.current+=1},[]);let l=async()=>{if(!a||o.current)return;let t=++s.current;o.current=!0,clearTimeout(r.current),n("copying");try{if(await navigator.clipboard.writeText(e),t!==s.current)return;n("copied"),r.current=setTimeout(()=>n("idle"),2e3)}catch{if(t!==s.current)return;n("error")}finally{t===s.current&&(o.current=!1)}},c=T[`copy.${i}`],d=a?"error"===i?T["copy.errorHint"]:"idle"===i?T["copy.hint"].replace("{path}",t):c:T["copy.empty"],f="copied"===i?C.A:"error"===i?L:D.A;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("button",{type:"button",className:(0,g.A)(V,"copied"===i&&"codeActionCopied_IhRM","error"===i&&"codeActionError_O3I0"),disabled:!a||"copying"===i,onClick:l,title:d,"aria-label":d,"aria-busy":"copying"===i,children:(0,h.jsx)(f,{className:q,"aria-hidden":"true",focusable:"false"})}),(0,h.jsx)("span",{className:"copyStatus_X_3r",role:"status","aria-live":"polite","aria-atomic":"true",children:"copied"===i?T["copy.copied"]:"error"===i?T["copy.errorHint"]:""})]})}function U(){return(U=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)({}).hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(null,arguments)}function P(){return(P=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)({}).hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(null,arguments)}function B(){return(B=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)({}).hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(null,arguments)}function z(){return(z=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)({}).hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(null,arguments)}function H(){return(H=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)({}).hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(null,arguments)}function $(){return($=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)({}).hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(null,arguments)}function W(){return(W=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)({}).hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(null,arguments)}function K(){return(K=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)({}).hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(null,arguments)}function G(){return(G=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)({}).hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(null,arguments)}let Y=new Map([[".gitignore","git"],[".gitignore-global","git"],[".gitignore_global","git"],[".git-blame-ignore","git"],[".gitconfig","git"],[".gitattributes","git"],[".gitmodules","git"],[".gitkeep","git"],[".gitinclude","git"],["requirements.txt","python"],["pipfile","python"],[".python-version","python"],["manifest.in","python"],["pylintrc","python"],[".pylintrc","python"],["setup.cfg","python"],["pyproject.toml","gear"],[".env","gear"]]),Z=new Map([["py","python"],["python","python"],["pyi","python"],["pyw","python"],["toml","gear"],["env","gear"],["json","brackets-yellow"],["jsonc","brackets-yellow"],["json5","brackets-yellow"],["md","markdown"],["markdown","markdown"],["txt","text"]]),J=new Set(["test","tests","spec","specs"]),Q="chevron_lDAJ",X={python:({title:e,titleId:t,...i})=>x.createElement("svg",U({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24","aria-labelledby":t},i),e?x.createElement("title",{id:t},e):null,n||(n=x.createElement("path",{fill:"#14B8A6",fillRule:"evenodd",d:"M14.622 21.322c-.6.11-1.284.174-1.999.178a12.5 12.5 0 0 1-2.179-.178c-1.136-.198-2.092-1.086-2.092-2.269v-4.156c0-1.217.93-2.217 2.092-2.217h4.178c1.418 0 2.613-1.271 2.613-2.712V7.974h1.438c1.216 0 1.926.92 2.223 2.213.401 1.735.384 2.773 0 4.435-.332 1.45-1.398 2.212-2.613 2.212h-5.752v.555h4.183v1.664c0 1.26-.322 1.942-2.092 2.269m-.176-2.837c-.532 0-.963.45-.963 1.005s.43 1.005.963 1.005.963-.45.963-1.005-.43-1.005-.963-1.005",clipRule:"evenodd"})),r||(r=x.createElement("path",{fill:"#14B8A6",fillRule:"evenodd",d:"M9.378 2.678c.6-.11 1.284-.174 1.999-.178.715-.003 1.46.053 2.179.178 1.136.198 2.092 1.086 2.092 2.269v4.156c0 1.217-.93 2.217-2.092 2.217H9.378c-1.418 0-2.613 1.271-2.613 2.712v1.994H5.327c-1.216 0-1.926-.92-2.223-2.213-.401-1.735-.384-2.773 0-4.435.332-1.45 1.397-2.213 2.613-2.213h5.752v-.554H7.286V4.947c0-1.26.322-1.942 2.092-2.269m.176 2.838c.532 0 .963-.45.963-1.005s-.43-1.006-.963-1.006-.964.45-.964 1.006c0 .555.432 1.005.964 1.005",clipRule:"evenodd"}))),git:({title:e,titleId:t,...i})=>x.createElement("svg",P({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24","aria-labelledby":t},i),e?x.createElement("title",{id:t},e):null,s||(s=x.createElement("path",{fill:"#F87171",d:"m20.661 11.198-7.86-7.859a1.16 1.16 0 0 0-1.639 0L9.53 4.972l2.07 2.07a1.376 1.376 0 0 1 1.744 1.755l1.995 1.995a1.377 1.377 0 0 1 1.425 2.278 1.38 1.38 0 0 1-2.251-1.5l-1.86-1.861-.001 4.897q.198.097.365.26a1.38 1.38 0 1 1-1.5-.3V9.623a1.379 1.379 0 0 1-.749-1.809l-2.04-2.04-5.388 5.388a1.16 1.16 0 0 0 0 1.64l7.859 7.858a1.16 1.16 0 0 0 1.64 0l7.822-7.821a1.16 1.16 0 0 0 0-1.64"}))),gear:({title:e,titleId:t,...i})=>x.createElement("svg",B({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24","aria-labelledby":t},i),e?x.createElement("title",{id:t},e):null,o||(o=x.createElement("path",{fill:"#64748B",d:"M5.939 5.37a3.763 3.763 0 0 1-2.712 4.696l-1.099.272a10.8 10.8 0 0 0 .012 3.4l1.015.244a3.763 3.763 0 0 1 2.728 4.723l-.35 1.187a10 10 0 0 0 2.792 1.734l.928-.976a3.763 3.763 0 0 1 5.454.001l.938.987a10 10 0 0 0 2.79-1.717l-.373-1.29a3.763 3.763 0 0 1 2.712-4.697l1.098-.271a10.8 10.8 0 0 0-.012-3.4l-1.014-.245a3.763 3.763 0 0 1-2.728-4.723l.35-1.186a10 10 0 0 0-2.792-1.735l-.928.976a3.76 3.76 0 0 1-5.454-.001l-.938-.987a10 10 0 0 0-2.79 1.717zM12 14.822c-1.506 0-2.727-1.263-2.727-2.822 0-1.558 1.22-2.822 2.727-2.822s2.727 1.264 2.727 2.822-1.22 2.822-2.727 2.822"}))),document:({title:e,titleId:t,...i})=>x.createElement("svg",z({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24","aria-labelledby":t},i),e?x.createElement("title",{id:t},e):null,a||(a=x.createElement("path",{stroke:"#64748B",strokeLinejoin:"round",strokeWidth:2,d:"M6 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8a1 1 0 0 0-.375-.78l-5-4A1 1 0 0 0 13 3z"})),l||(l=x.createElement("path",{stroke:"#64748B",strokeLinejoin:"round",strokeWidth:2,d:"M12 4v5h6"}))),text:({title:e,titleId:t,...i})=>x.createElement("svg",H({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24","aria-labelledby":t},i),e?x.createElement("title",{id:t},e):null,c||(c=x.createElement("rect",{width:16,height:2,x:4,y:6,fill:"#64748B",rx:1})),d||(d=x.createElement("rect",{width:12,height:2,x:4,y:11,fill:"#64748B",rx:1})),f||(f=x.createElement("rect",{width:16,height:2,x:4,y:16,fill:"#64748B",rx:1}))),markdown:({title:e,titleId:t,...i})=>x.createElement("svg",$({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24","aria-labelledby":t},i),e?x.createElement("title",{id:t},e):null,p||(p=x.createElement("path",{fill:"#60A5FA",d:"M3 15.714V8h2.323l2.322 2.836L9.968 8h2.322v7.714H9.968V11.29l-2.323 2.836-2.322-2.836v4.424zm14.516 0-3.484-3.743h2.323V8h2.322v3.97H21z"}))),"brackets-yellow":({title:e,titleId:t,...i})=>x.createElement("svg",W({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24","aria-labelledby":t},i),e?x.createElement("title",{id:t},e):null,u||(u=x.createElement("path",{fill:"#F59E0B",d:"M4.778 6.667A2.667 2.667 0 0 1 7.444 4a.889.889 0 0 1 0 1.778.89.89 0 0 0-.888.889v3.5c0 .701-.273 1.35-.73 1.833.457.483.73 1.132.73 1.832v3.501c0 .491.398.89.888.89a.889.889 0 0 1 0 1.777 2.667 2.667 0 0 1-2.666-2.667v-3.5a.89.89 0 0 0-.674-.863l-.43-.108a.889.889 0 0 1 0-1.724l.43-.108a.89.89 0 0 0 .674-.862zm14.222 0A2.667 2.667 0 0 0 16.333 4a.889.889 0 0 0 0 1.778c.491 0 .89.398.89.889v3.5c0 .701.272 1.35.729 1.833a2.66 2.66 0 0 0-.73 1.832v3.501a.89.89 0 0 1-.889.89.889.889 0 0 0 0 1.777A2.667 2.667 0 0 0 19 17.333v-3.5c0-.408.278-.764.673-.863l.431-.108a.889.889 0 0 0 0-1.724l-.43-.108a.89.89 0 0 1-.674-.862z"}))),folder:({title:e,titleId:t,...i})=>x.createElement("svg",K({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24","aria-labelledby":t},i),e?x.createElement("title",{id:t},e):null,m||(m=x.createElement("path",{stroke:"#64748B",strokeWidth:2,d:"M7.784 5H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9.875a2 2 0 0 0-2-2h-6.284a2 2 0 0 1-1.27-.455L9.054 5.455A2 2 0 0 0 7.783 5Z"}))),"folder-red-code":({title:e,titleId:t,...i})=>x.createElement("svg",G({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24","aria-labelledby":t},i),e?x.createElement("title",{id:t},e):null,_||(_=x.createElement("path",{fill:"#64748B",fillRule:"evenodd",d:"M5 4a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h5v-2H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h2.784a1 1 0 0 1 .635.227l2.393 1.966a3 3 0 0 0 1.904.682H19a1 1 0 0 1 1 1V10h2v-.125a3 3 0 0 0-3-3h-6.284a1 1 0 0 1-.635-.227L9.688 4.682A3 3 0 0 0 7.784 4z",clipRule:"evenodd"})),y||(y=x.createElement("path",{stroke:"#F87171",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M15.146 13.797 13 15.943l2.146 2.146M21.077 13.797l2.145 2.146-2.145 2.146M16.561 19.52l3.1-7.153"})))};function ee({path:e,folder:t=!1,tree:i=!1,expanded:n=!1}){let r=function(e,{folder:t=!1}={}){let i="string"==typeof e?e.replace(/\\/g,"/").replace(/\/+$/,"").split("/").pop().toLowerCase():"";if(t)return J.has(i)?"folder-red-code":"folder";if(Y.has(i))return Y.get(i);if(i.startsWith(".env.")||i.endsWith(".env.example"))return"gear";let n=i.lastIndexOf("."),r=n>=0?i.slice(n+1):"";return Z.get(r)||"document"}(e,{folder:t}),s=X[r],o=(0,h.jsx)(s,{className:"icon_KnjF",width:16,height:16,"aria-hidden":"true",focusable:"false","data-symbols-icon":r});return i?(0,h.jsxs)("span",{className:"treeIcon_sP4w","aria-hidden":"true",children:[t?(0,h.jsx)("svg",{className:(0,g.A)(Q,n&&"expanded_mogG"),width:10,height:10,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",focusable:"false",children:(0,h.jsx)("path",{d:"m9 5 7 7-7 7"})}):(0,h.jsx)("span",{className:Q}),o]}):o}let et=[],ei=[];function en({files:e,previousFiles:t=null,preferredFiles:i=et,stepKey:n=0,focusFile:r,focusRanges:s=ei,onFileSelect:o,className:a,single:l=!1,run:c=null}){let d=(0,k.A)(),[f,p]=(0,x.useState)(()=>S(null,e,i,n)),[u,m]=(0,x.useState)(()=>new Set),[_,y]=(0,x.useState)(!0),b=(0,x.useRef)(null),[C,L]=(0,x.useState)(null),D=null!=c&&null!==C&&Object.is(C.stepKey,n),U=()=>L(D?null:{stepKey:n});f.files===e&&Object.is(f.stepKey,n)||p(S(f,e,i,n));let{activeFile:P,tabs:B}=f,z=(0,x.useMemo)(()=>(function(e){let t={children:[]};for(let i of e){let e=t,n=i.split("/");n.forEach((t,r)=>{let s=n.slice(0,r+1).join("/");if(r===n.length-1)e.children.push({type:"file",name:t,path:i});else{let i=e.children.find(e=>"folder"===e.type&&e.path===s);i||(i={type:"folder",name:t,path:s,children:[]},e.children.push(i)),e=i}})}let i=e=>[...e].sort((e,t)=>e.type===t.type?e.name.localeCompare(t.name):"folder"===e.type?-1:1).map(e=>"folder"===e.type?{...e,children:i(e.children)}:e);return i(t.children)})(Object.keys(e)),[e]),H=i=>t&&R(e,i)?R(t,i)?t[i]===e[i]?"same":"changed":"new":"same",$=H(P),W=R(e,P)?e[P]:void 0,K=(0,x.useMemo)(()=>void 0===W?[]:_&&"changed"===$?function(e,t){let i=e.replace(/\n$/,"").split("\n"),n=t.replace(/\n$/,"").split("\n"),r=i.length,s=n.length,o=Array.from({length:r+1},()=>new Uint32Array(s+1));for(let e=r-1;e>=0;e-=1)for(let t=s-1;t>=0;t-=1)o[e][t]=i[e]===n[t]?o[e+1][t+1]+1:Math.max(o[e+1][t],o[e][t+1]);let a=[],l=0,c=0,d=0;for(;l<r||c<s;)l<r&&c<s&&i[l]===n[c]?(d+=1,a.push({type:"same",text:n[c],newNo:d}),l+=1,c+=1):c<s&&(l>=r||o[l][c+1]>=o[l+1][c])?(d+=1,a.push({type:"add",text:n[c],newNo:d}),c+=1):(a.push({type:"del",text:i[l],newNo:null}),l+=1);return a}(t[P],W):W.replace(/\n$/,"").split("\n").map((e,t)=>({type:"same",text:e,newNo:t+1})),[W,t,P,$,_]),G=null==r||r===P?s:ei,Y=d.plain.backgroundColor;(0,x.useEffect)(()=>{let e=b.current;if(!e)return;let t=()=>{let t=e.querySelector("[data-change]")||e.querySelector("[data-focus]");return{target:t,top:t?Math.max(0,t.offsetTop-e.clientHeight/2+t.offsetHeight/2):0}},{target:i,top:n}=t(),r=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(e.scrollTo({top:n,behavior:i&&!r?"smooth":"auto"}),!i||"u"<typeof ResizeObserver)return;let s=n,o=!1,a=()=>{o=!0},l=["wheel","touchstart","pointerdown","keydown"];l.forEach(t=>e.addEventListener(t,a,{passive:!0}));let c=new ResizeObserver(()=>{if(o)return;let i=t().top;2>Math.abs(i-s)||(s=i,e.scrollTo({top:i,behavior:"auto"}))});return c.observe(e),e.firstElementChild&&c.observe(e.firstElementChild),()=>{c.disconnect(),l.forEach(t=>e.removeEventListener(t,a))}},[n,P,_,W,r,s]);let Z=e=>{p(t=>R(t.files,e)?{...t,activeFile:e,tabs:t.tabs.includes(e)?t.tabs:[...t.tabs,e]}:t),o?.(e)},J=(e,t)=>e.map(e=>{let i={paddingLeft:`${8+14*t}px`};if("file"===e.type){let t=H(e.path);return(0,h.jsxs)("button",{type:"button",onClick:()=>Z(e.path),"aria-pressed":e.path===P,style:i,title:e.path,className:(0,g.A)(F,e.path===P&&"treeItemActive_NYmV"),children:[(0,h.jsx)(ee,{path:e.path,tree:!0}),(0,h.jsx)("span",{className:M,children:e.name}),"same"!==t&&(0,h.jsx)("span",{className:(0,g.A)("treeDot_jdw0","new"===t&&"treeDotNew_M1tN"),title:T[`badge.${t}`]})]},e.path)}let n=u.has(e.path);return(0,h.jsxs)("div",{children:[(0,h.jsxs)("button",{type:"button","aria-expanded":!n,onClick:()=>{let t;return t=e.path,m(e=>{let i=new Set(e);return i.has(t)?i.delete(t):i.add(t),i})},style:i,className:F,title:e.path,children:[(0,h.jsx)(ee,{path:e.path,folder:!0,tree:!0,expanded:!n}),(0,h.jsx)("span",{className:M,children:e.name})]}),!n&&J(e.children,t+1)]},e.path)});return(0,h.jsx)(N._,{output:c?.output,status:c?.status,open:D,onToggle:U,children:(0,h.jsxs)("div",{className:(0,g.A)("editor_dHJE",l&&"single_ZkL0",a),"data-project-code-viewer":"",children:[!l&&(0,h.jsxs)("aside",{className:"fileTree_hRoX","aria-label":T["files.heading"],children:[(0,h.jsx)("h4",{className:"fileTreeHeading_mHQH",children:T["files.heading"]}),(0,h.jsx)("div",{className:"treeScroll_sHHt",children:J(z,0)})]}),(0,h.jsxs)("div",{className:"editorMain_jUUV",children:[!l&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("label",{className:"mobilePicker_UzrQ",children:[(0,h.jsx)("span",{children:T["files.heading"]}),(0,h.jsxs)("select",{"aria-label":T["files.heading"],value:P??"",onChange:e=>Z(e.target.value),children:[(0,h.jsx)("option",{value:"",disabled:!0,children:T["copy.empty"]}),Object.keys(e).map(e=>(0,h.jsx)("option",{value:e,children:e},e))]})]}),(0,h.jsx)("div",{className:"editorToolbar_UlPB",children:(0,h.jsx)("div",{className:"tabs_VF_n","aria-label":T["aria.openFiles"],children:B.map(e=>{let t=e===P,i=H(e);return(0,h.jsxs)("div",{className:(0,g.A)("tab_qFmb",t&&"tabActive_DCji"),style:t?{backgroundColor:Y}:void 0,children:[(0,h.jsxs)("button",{type:"button","aria-pressed":t,onClick:()=>Z(e),className:"tabBtn_ulEc",title:e,children:[(0,h.jsx)(ee,{path:e}),e.split("/").pop(),"same"!==i&&(0,h.jsx)("span",{className:(0,g.A)("badge_Q6dE","new"===i&&"badgeNew_H9yP"),children:T[`badge.${i}`]})]}),(0,h.jsx)("button",{type:"button","aria-label":T["aria.closeTab"].replace("{path}",e),onClick:()=>p(t=>{let i;return i=t.tabs.filter(t=>t!==e),{...t,tabs:i,activeFile:t.activeFile===e?i.at(-1)??null:t.activeFile}}),className:"tabClose_i338",children:"\xd7"})]},e)})})})]}),l&&P&&(0,h.jsxs)("div",{className:"fileHeader_vfdp",title:P,children:[(0,h.jsx)(ee,{path:P}),(0,h.jsx)("span",{className:"fileHeaderName_Hj_1",children:P})]}),(0,h.jsxs)("div",{className:"codeShell_uOkt",style:{backgroundColor:Y,"--cw-editor-bg":Y},children:[void 0!==W&&(0,h.jsxs)("div",{className:"codeActions_eYDy",role:"group","aria-label":T["aria.codeActions"],children:[c&&(0,h.jsx)("button",{type:"button",className:(0,g.A)(V,D&&"codeActionOn_PMcY"),"aria-expanded":D,"aria-label":D?T["run.hide"]:T["run.show"],title:D?T["run.hide"]:T["run.show"],onClick:U,children:D?(0,h.jsx)(v,{className:q,"aria-hidden":"true",focusable:"false"}):(0,h.jsx)(w.A,{className:q,"aria-hidden":"true",focusable:"false"})}),"changed"===$&&(0,h.jsx)("button",{type:"button",className:V,"aria-label":T["diff.show"],"aria-pressed":_,title:_?T["diff.hide"]:T["diff.show"],onClick:()=>y(e=>!e),children:_?(0,h.jsx)(j,{className:q,"aria-hidden":"true",focusable:"false"}):(0,h.jsx)(A,{className:q,"aria-hidden":"true",focusable:"false"})}),(0,h.jsx)(I,{text:W,path:P},JSON.stringify([n,P,W]))]}),void 0!==W?(0,h.jsx)("div",{ref:b,className:"codeScroll_KvdC",style:{backgroundColor:Y},children:(0,h.jsx)(E.f4,{theme:d,code:K.map(e=>e.text).join("\n"),language:{py:"python",md:"markdown",json:"json",toml:"toml",txt:"text"}[P.split(".").pop()?.toLowerCase()]||"text",children:({tokens:e,getLineProps:t,getTokenProps:i})=>(0,h.jsx)("pre",{className:"pre_WKm3",style:{color:d.plain.color},children:e.map((e,n)=>{var r;let s=K[n]||{type:"same",newNo:n+1},o=t({line:e}),a="same"!==s.type,l=!a&&(r=s.newNo,null!=r&&G.some(([e,t=e])=>r>=e&&r<=t));return(0,h.jsxs)("div",{...o,"data-line":s.newNo??void 0,"data-change":a?s.type:void 0,"data-focus":l?"":void 0,className:(0,g.A)(o.className,"line_aw8y","add"===s.type&&"lineAdd_mE7J","del"===s.type&&"lineDel_abp0",l&&"lineFocus_Glcn"),children:[(0,h.jsx)("span",{"aria-hidden":"true",className:"lineNo_EtU5",children:s.newNo??""}),(0,h.jsx)("span",{"aria-hidden":"true",className:"lineSign_UgAc",children:"add"===s.type?"+":"del"===s.type?"\u2212":""}),(0,h.jsx)("span",{className:"lineContent_fkoz",children:e.map((e,t)=>(0,h.jsx)("span",{...i({token:e})},t))})]},n)})})})}):(0,h.jsx)("div",{className:"empty_oOnL",style:{backgroundColor:Y},children:(0,h.jsxs)("div",{children:[(0,h.jsx)("p",{children:T["empty.title"]}),(0,h.jsx)("p",{className:"emptySub_bQnk",children:T["empty.body"]})]})})]}),c&&(0,h.jsx)(O.A,{})]})]})})}},17181(e,t,i){i.d(t,{A:()=>n});let n={s00:{"agent.py":`if __name__ == "__main__":
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
`}}},14529(e,t,i){i.d(t,{A:()=>d});var n=i(74848),r=i(96540),s=i(34164),o=i(99920),a=i(51507);function l(e){return(0,n.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",...e,children:[(0,n.jsx)("rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}),(0,n.jsx)("path",{d:"m7 11 2-2-2-2"}),(0,n.jsx)("path",{d:"M11 13h4"})]})}function c(e){return(0,n.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",...e,children:[(0,n.jsx)("path",{d:"M3 6h18"}),(0,n.jsx)("path",{d:"M3 12h15a3 3 0 1 1 0 6h-4"}),(0,n.jsx)("path",{d:"m16 16-2 2 2 2"}),(0,n.jsx)("path",{d:"M3 18h7"})]})}function d(){let e=(0,o.H)(),[t,i]=(0,r.useState)(!1),d=!!(e&&e.open&&null!==e.output),f=d&&"empty"!==e.status?e.output.replace(/\n$/,"").split("\n"):[],{shown:p,started:u,done:m}=(0,a.A)(f,d);return d?(0,n.jsxs)("div",{className:"run-output",role:"region","aria-label":"\u8FD0\u884C\u8F93\u51FA",children:[(0,n.jsxs)("div",{className:"run-output__row",children:[(0,n.jsx)("span",{className:"run-output__mark",title:"\u9884\u5148\u5F55\u5236\u7684\u8FD0\u884C\u7ED3\u679C\uFF0C\u4E0D\u662F\u6D4F\u89C8\u5668\u5B9E\u65F6\u6267\u884C",children:(0,n.jsx)(l,{"aria-label":"\u8F93\u51FA",role:"img"})}),(0,n.jsxs)("pre",{className:(0,s.A)("run-output__body",t&&"run-output__body--wrap"),"aria-live":"polite",children:[!u&&(0,n.jsx)("span",{className:"run-output__running",children:"\u8FD0\u884C\u4E2D\u2026"}),f.slice(0,p).map((t,i)=>(0,n.jsx)("div",{className:(0,s.A)("run-output__line",e.highlight.has(i+1)&&"run-output__line--highlight"),children:""===t?" ":t},i)),u&&!m&&(0,n.jsx)("span",{className:"run-output__cursor"})]})]}),m&&(0,n.jsxs)("div",{className:(0,s.A)("run-output__foot",`run-output__foot--${e.status.split(":")[0]}`),children:[(0,n.jsxs)("span",{children:["hang"===e.status&&(0,n.jsx)("span",{className:"run-output__cursor"}),function(e){if("hang"===e)return"\u8FDB\u7A0B\u672A\u9000\u51FA\uFF0C\u9700\u8981 Ctrl + C \u7EC8\u6B62";if("empty"===e)return"\u6CA1\u6709\u4EFB\u4F55\u8F93\u51FA\uFF0C\u8FDB\u7A0B\u9000\u51FA";let t=e.startsWith("exit:")?e.slice(5):"0";return`\u{8FDB}\u{7A0B}\u{9000}\u{51FA}\u{FF0C}\u{9000}\u{51FA}\u{7801} ${t}`}(e.status)]}),(0,n.jsx)("button",{type:"button",className:"run-output__wrap","aria-pressed":t,"aria-label":t?"\u53D6\u6D88\u81EA\u52A8\u6362\u884C":"\u81EA\u52A8\u6362\u884C",title:t?"\u53D6\u6D88\u81EA\u52A8\u6362\u884C":"\u81EA\u52A8\u6362\u884C",onClick:()=>i(!t),children:(0,n.jsx)(c,{"aria-hidden":"true"})})]})]}):null}},99920(e,t,i){i.d(t,{H:()=>a,_:()=>o});var n=i(74848),r=i(96540);let s=(0,r.createContext)(null);function o({output:e,status:t,highlight:i,blockId:a,open:l,onToggle:c,children:d}){let[f,p]=(0,r.useState)(!1),u=l??f,m=(0,r.useMemo)(()=>({output:"string"==typeof e?e:t?"":null,status:t||"exit:0",highlight:new Set((i||"").split(",").map(e=>Number(e)).filter(e=>e>0)),blockId:a||null,open:u,toggle:c??(()=>p(e=>!e))}),[e,t,i,a,u,c]);return(0,n.jsx)(s.Provider,{value:m,children:d})}function a(){return(0,r.useContext)(s)}},51507(e,t,i){i.d(t,{A:()=>r});var n=i(96540);function r(e,t){let i=e.length,[r,s]=(0,n.useState)(0),[o,a]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{if(!t){s(0),a(!1);return}if("u">typeof window&&window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches){a(!0),s(i);return}let e=window.setTimeout(()=>{a(!0),e=window.setInterval(()=>{s(t=>t+1>=i?(window.clearInterval(e),i):t+1)},80)},350);return()=>{window.clearTimeout(e),window.clearInterval(e)}},[t,i]),{shown:r,started:o,done:o&&r>=i}}},28453(e,t,i){i.d(t,{R:()=>o,x:()=>a});var n=i(96540);let r={},s=n.createContext(r);function o(e){let t=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);