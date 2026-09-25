"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([["7401"],{9884(e,t,r){r.r(t),r.d(t,{metadata:()=>n,default:()=>f,frontMatter:()=>a,contentTitle:()=>l,toc:()=>d,assets:()=>c});var n=JSON.parse('{"id":"python/\u8FED\u4EE3\u5668","title":"\u8FED\u4EE3\u5668","description":"\u8FD9\u7BC7\u6587\u7AE0\u6211\u4EEC\u8BB2\u4E00\u4E9B for loop \u548C\u8FED\u4EE3\u5668\u3002\u5728\u4E4B\u524D\u7684\u6587\u7AE0\u91CC\uFF0C\u6211\u4EEC\u5176\u5B9E\u4E0D\u592A\u5E38\u628A\u4E24\u4E2A\u6982\u5FF5\u4E00\u8D77\u6765\u804A\uFF0C\u4F46\u662F\u5728 Python \u4E2D\uFF0C\u8FD9\u4E24\u4E2A\u6982\u5FF5\u786E\u5B9E\u5173\u7CFB\u975E\u5E38\u7D27\u5BC6\uFF0C\u6240\u4EE5\u54B1\u4EEC\u4ECA\u5929\u5C31\u4E00\u5757\u8BF4\u4E86\u3002","source":"@site/docs/python/\u8FED\u4EE3\u5668.mdx","sourceDirName":"python","slug":"/python/\u8FED\u4EE3\u5668","permalink":"/docs/python/\u8FED\u4EE3\u5668","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"\u7C7B\u88C5\u9970\u5668","permalink":"/docs/python/\u88C5\u9970\u5668/\u7C7B\u88C5\u9970\u5668"},"next":{"title":"\u95ED\u5305\u7684\u5B9E\u73B0\u673A\u5236","permalink":"/docs/python/\u95ED\u5305\u7684\u5B9E\u73B0\u673A\u5236"}}'),s=r(74848),o=r(28453),i=r(85421);let a={},l="\u8FED\u4EE3\u5668",c={},d=[{value:"for loop \u4E0E\u53EF\u8FED\u4EE3\u5BF9\u8C61",id:"for-loop-\u4E0E\u53EF\u8FED\u4EE3\u5BF9\u8C61",level:2},{value:"iterable \u4E0E iterator",id:"iterable-\u4E0E-iterator",level:2},{value:"\u6570\u636E\u4E0E\u72B6\u6001",id:"\u6570\u636E\u4E0E\u72B6\u6001",level:3},{value:"<code>__iter__()</code> \u4E0E <code>__next__()</code>",id:"__iter__-\u4E0E-__next__",level:3},{value:"GET_ITER \u4E0E for loop",id:"get_iter-\u4E0E-for-loop",level:2},{value:"\u94FE\u8868\u7684\u8FED\u4EE3\u5668",id:"\u94FE\u8868\u7684\u8FED\u4EE3\u5668",level:2},{value:"Node \u4E0E NodeIter",id:"node-\u4E0E-nodeiter",level:3},{value:"\u8BA9 iterator \u4E5F\u662F iterable",id:"\u8BA9-iterator-\u4E5F\u662F-iterable",level:2},{value:"\u663E\u5F0F\u83B7\u53D6 iterator",id:"\u663E\u5F0F\u83B7\u53D6-iterator",level:3},{value:"\u4ECE\u7B2C\u4E8C\u4E2A\u8282\u70B9\u5F00\u59CB",id:"\u4ECE\u7B2C\u4E8C\u4E2A\u8282\u70B9\u5F00\u59CB",level:3},{value:"\u8FD4\u56DE self",id:"\u8FD4\u56DE-self",level:3},{value:"CPython \u7684\u5B9E\u73B0\u7EC6\u8282",id:"cpython-\u7684\u5B9E\u73B0\u7EC6\u8282",level:3}];function p(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"\u8FED\u4EE3\u5668",children:"\u8FED\u4EE3\u5668"})}),"\n",(0,s.jsx)(t.p,{children:"\u8FD9\u7BC7\u6587\u7AE0\u6211\u4EEC\u8BB2\u4E00\u4E9B for loop \u548C\u8FED\u4EE3\u5668\u3002\u5728\u4E4B\u524D\u7684\u6587\u7AE0\u91CC\uFF0C\u6211\u4EEC\u5176\u5B9E\u4E0D\u592A\u5E38\u628A\u4E24\u4E2A\u6982\u5FF5\u4E00\u8D77\u6765\u804A\uFF0C\u4F46\u662F\u5728 Python \u4E2D\uFF0C\u8FD9\u4E24\u4E2A\u6982\u5FF5\u786E\u5B9E\u5173\u7CFB\u975E\u5E38\u7D27\u5BC6\uFF0C\u6240\u4EE5\u54B1\u4EEC\u4ECA\u5929\u5C31\u4E00\u5757\u8BF4\u4E86\u3002"}),"\n",(0,s.jsx)(t.h2,{id:"for-loop-\u4E0E\u53EF\u8FED\u4EE3\u5BF9\u8C61",children:"for loop \u4E0E\u53EF\u8FED\u4EE3\u5BF9\u8C61"}),"\n",(0,s.jsx)(t.p,{children:"\u5927\u5BB6\u770B\u4E0B\u9762\u5199\u4E86\u4E00\u4E2A\u975E\u5E38\u7B80\u5355\u7684 for loop\u3002\u53EA\u8981\u4F60\u4F1A\u4E00\u70B9\u70B9 Python\uFF0C\u4F60\u5C31\u80FD\u77E5\u9053\u8FD9\u4E2A\u7A0B\u5E8F\u5728\u5E72\u561B\u3002"}),"\n",(0,s.jsx)(i.A,{variant:"iteratorLoop",step:1}),"\n",(0,s.jsx)(t.p,{children:"\u6709\u7684\u4EBA\u53EF\u80FD\u89C9\u5F97\u8FD9\u4EF6\u4E8B\u5F88\u7B26\u5408\u76F4\u89C9\uFF0C\u4F46\u662F\u6709\u7684\u4EBA\uFF0C\u6BD4\u5982\u8BF4\u4F60\u53EF\u80FD\u4E4B\u524D\u5B66\u8FC7\u5176\u4ED6\u7684\u8BED\u8A00\uFF0C\u6216\u8005\u662F\u4F60\u6DF1\u5165\u5730\u8003\u8651\u8FC7\u5B83\u662F\u600E\u4E48\u5B9E\u73B0\u7684\uFF0C\u4F60\u5C31\u4F1A\u53D1\u73B0\u8FD9\u4E2A\u4E8B\u513F\u5B83\u5E76\u4E0D\u7B80\u5355\uFF0C\u5BF9\u5427\uFF1Flist \u5B83\u672C\u8EAB\u662F\u4E00\u4E2A\u6709\u5E8F\u7684\u7ED3\u6784\uFF0C\u90A3\u4F60\u4E00\u4E2A\u4E00\u4E2A\u62FF\u7684\u8BDD\uFF0C\u53EF\u4EE5\u662F\u7B2C 0 \u4E2A\u3001\u7B2C 1 \u4E2A\u3001\u7B2C 2 \u4E2A\uFF0C\u8FD9\u4E2A\u4E8B\u513F\u6BD4\u8F83\u7B26\u5408\u76F4\u89C9\u3002"}),"\n",(0,s.jsxs)(t.p,{children:["\u4F46\u662F\u6211\u4EEC\u77E5\u9053 dictionary \u4E5F\u53EF\u4EE5\u8FD9\u4E48\u7528\uFF0C\u90A3 dictionary \u53EF\u4E0D\u662F\u6309\u987A\u5E8F\u7684\u7B2C 0 \u4E2A\u7ED9\u4F60\u6446\u5728\u8FD9\u513F\u3001\u7B2C 1 \u4E2A\u7ED9\u4F60\u6446\u5728\u8FD9\u513F\u7684\uFF0C\u5BF9\u4E0D\u5BF9\uFF1F\u5B83\u600E\u4E48\u4E5F\u53EF\u4EE5\u7528\u8FD9\u4E2A ",(0,s.jsx)(t.code,{children:"for in"})," \u7684\u7ED3\u6784\u5462\uFF1F\u751A\u81F3\u5305\u62EC\u5728 Python \u4E2D\u6253\u5F00\u7684\u6587\u4EF6\uFF0C\u90FD\u53EF\u4EE5\u7528 ",(0,s.jsx)(t.code,{children:"for in"})," \u7684\u7ED3\u6784\u3002\u90A3\u6211\u4EEC\u77E5\u9053\u6587\u4EF6\u80AF\u5B9A\u662F\u4E00\u4E2A\u76F8\u5BF9\u6765\u8BF4\u6BD4\u8F83\u590D\u6742\u7684\u6570\u636E\u7ED3\u6784\u4E86\uFF0C\u5BF9\u5427\uFF1F\u5B83\u80AF\u5B9A\u4E5F\u4E0D\u662F\u7ED9\u4F60\u6807\u597D\u7684\u7B2C 0 \u4E2A\u3001\u7B2C 1 \u4E2A\u3001\u7B2C 2 \u4E2A\uFF0C\u5B83\u600E\u4E48\u4E5F\u80FD\u8FD9\u4E48\u7528\u5462\uFF1F\u90A3\u6211\u4EEC\u4ECA\u5929\u5C31\u6765\u63ED\u793A\u8FD9\u4EF6\u4E8B\u513F\u80CC\u540E\u7684\u79D8\u5BC6\u3002"]}),"\n",(0,s.jsx)(t.h2,{id:"iterable-\u4E0E-iterator",children:"iterable \u4E0E iterator"}),"\n",(0,s.jsx)(t.p,{children:"\u5728 for loop \u7684\u5B9E\u73B0\u80CC\u540E\u5462\uFF0C\u6709\u4E24\u4E2A\u6838\u5FC3\u6982\u5FF5\uFF1A\u4E00\u4E2A\u53EB\u53EF\u8FED\u4EE3\u5BF9\u8C61\uFF0C\u4E00\u4E2A\u53EB\u8FED\u4EE3\u5668\u3002\u90A3\u4E48\u82F1\u6587\u5206\u522B\u662F iterable \u8DDF iterator\u3002\u6211\u4EEC\u5148\u6765\u770B\u4E00\u4E0B Python \u5B98\u7F51\u4E0A\u7ED9\u8FD9\u4E24\u4E2A\u8BCD\u4E0B\u7684\u5B9A\u4E49\u3002"}),"\n",(0,s.jsxs)(t.p,{children:["\u90A3 ",(0,s.jsx)(t.a,{href:"https://docs.python.org/3.10/glossary.html#term-iterable",children:"iterable"}),"\uFF0C\u4E5F\u5C31\u662F\u53EF\u8FED\u4EE3\u5BF9\u8C61\uFF0C\u5B83\u8BF4\u7684\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u7136\u540E\u53EF\u4EE5\u4E00\u4E2A\u4E00\u4E2A\u5730\u8FD4\u56DE\u5B83\u7684\u6210\u5458\u3002\u5B83\u7ED9\u4E86\u4E00\u4E9B\u4F8B\u5B50\uFF0C\u5BF9\u5427\uFF1F\u6BD4\u5982\u8BF4 list\u3001string\u3001tuple\uFF0C\u5305\u62EC dictionary\u3002\u7136\u540E\u5B83\u4E5F\u7279\u522B\u5F3A\u8C03\u4E86\uFF0C\u5BF9\u5427\uFF0C\u8FD9\u4E2A iterable \u53EF\u4EE5\u5728 for loop \u91CC\u9762\u4F7F\u7528\u3002"]}),"\n",(0,s.jsxs)(t.p,{children:["\u5F53\u7136\u786E\u5207\u5730\u8BF4\u5462\uFF0C\u662F for loop \u91CC\u9762 ",(0,s.jsx)(t.code,{children:"in"})," \u540E\u9762\u90A3\u4E2A\u4E1C\u897F\u5FC5\u987B\u662F\u4E00\u4E2A iterable\uFF0C\u4E5F\u5C31\u662F\u5FC5\u987B\u662F\u4E00\u4E2A\u53EF\u8FED\u4EE3\u5BF9\u8C61\u3002\u8FD9\u4EF6\u4E8B\u513F\u4E0D\u96BE\u7406\u89E3\uFF0C\u5BF9\u5427\uFF1F\u56E0\u4E3A for loop \u5C31\u662F\u5728\u90A3\u4E2A\u5BF9\u8C61\u91CC\u9762\u4E00\u4E2A\u4E00\u4E2A\u62FF\u51FA\u5B83\u7684\u6210\u5458\u6765\u3002\u5B83\u4EEC\u4E24\u4E2A\u5B9A\u4E49\u51E0\u4E4E\u662F\u5B8C\u5168\u91CD\u5408\u7684\u3002\u8FD9\u4E5F\u662F\u4E3A\u4EC0\u4E48\u6211\u4EEC\u8981\u628A for loop \u8DDF\u8FD9\u4E2A\u53EF\u8FED\u4EE3\u5BF9\u8C61\u653E\u5230\u4E00\u8D77\u8BB2\u3002"]}),"\n",(0,s.jsxs)(t.p,{children:["\u90A3\u6211\u4EEC\u518D\u770B ",(0,s.jsx)(t.a,{href:"https://docs.python.org/3.10/glossary.html#term-iterator",children:"iterator"}),"\uFF0C\u4E5F\u5C31\u662F\u8FED\u4EE3\u5668\u3002iterator \u662F\u4E00\u4E2A\u8868\u793A\u6570\u636E\u6D41\u7684\u5BF9\u8C61\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528 ",(0,s.jsx)(t.code,{children:"next"})," \u51FD\u6570\u4E0D\u65AD\u5730\u4ECE\u8FD9\u4E2A\u5BF9\u8C61\u91CC\u9762\u83B7\u53D6\u65B0\u7684\u6570\u636E\u3002\u90A3\u8FD9\u4E24\u4E2A\u6982\u5FF5\u786E\u5B9E\u6709\u5F88\u591A\u76F8\u4F3C\u7684\u5730\u65B9\uFF0C\u4F46\u662F\u5982\u679C\u4F60\u60F3\u628A\u8FD9\u5757\u7684\u7406\u8BBA\u5168\u90FD\u641E\u660E\u767D\u7684\u8BDD\uFF0C\u4F60\u5C31\u5FC5\u987B\u8981\u5206\u6E05\u5B83\u4EEC\u4FE9\u6709\u4EC0\u4E48\u533A\u522B\u3002"]}),"\n",(0,s.jsx)(t.h3,{id:"\u6570\u636E\u4E0E\u72B6\u6001",children:"\u6570\u636E\u4E0E\u72B6\u6001"}),"\n",(0,s.jsx)(t.p,{children:"\u4ECE\u4E00\u4E2A high level \u7684\u89D2\u5EA6\u770B\uFF0C\u4E00\u4E2A iterable \u66F4\u50CF\u662F\u4E00\u4E2A\u6570\u636E\u7684\u4FDD\u5B58\u8005\uFF0C\u4E00\u4E2A container\u3002\u5B83\u662F\u53EF\u4EE5\u6CA1\u6709\u72B6\u6001\u7684\uFF0C\u5B83\u53EF\u4EE5\u5B8C\u5168\u4E0D\u77E5\u9053\u4F60\u8FD9\u4E2A iterator \u6570\u5230\u54EA\u4E86\u3002\u5B83\u9700\u8981\u6709\u80FD\u529B\u4EA7\u751F\u4E00\u4E2A iterator\uFF0C\u800C iterator \u4E00\u5B9A\u662F\u6709\u72B6\u6001\u7684\uFF0C\u4F46\u662F\u5B83\u5E76\u4E0D\u9700\u8981\u5B9E\u73B0\u4E00\u4E2A container\u3002\u5B83\u5F53\u7136\u5185\u90E8\u80AF\u5B9A\u77E5\u9053\u5B83\u4EE3\u8868\u8FD9\u4E2A iterable \u91CC\u9762\u662F\u4EC0\u4E48\u6570\u636E\uFF0C\u4F46\u662F\u5B83\u4E0D\u7528\u5B9E\u73B0\u4E00\u4E2A interface\uFF0C\u4E0D\u7528\u5B9E\u73B0\u4E00\u4E2A\u63A5\u53E3\u6765\u4FEE\u6539\u8FD9\u4E2A iterable \u91CC\u9762\u7684\u6570\u636E\u3002"}),"\n",(0,s.jsxs)(t.h3,{id:"__iter__-\u4E0E-__next__",children:[(0,s.jsx)(t.code,{children:"__iter__()"})," \u4E0E ",(0,s.jsx)(t.code,{children:"__next__()"})]}),"\n",(0,s.jsxs)(t.p,{children:["\u4ECE\u5B9E\u73B0\u4E0A\u770B\uFF0C\u4E00\u4E2A iterable \u8981\u4E48\u5C31\u6709 ",(0,s.jsx)(t.code,{children:"__iter__()"}),"\uFF0C\u8981\u4E48\u5C31\u6709 ",(0,s.jsx)(t.code,{children:"__getitem__()"}),"\u3002\u8FD9\u4E24\u8005\u90FD\u662F\u4E3A\u4E86\u4FDD\u8BC1\u5B83\u53EF\u4EE5\u5728 ",(0,s.jsx)(t.a,{href:"https://docs.python.org/3.10/library/functions.html#iter",children:(0,s.jsx)(t.code,{children:"iter"})})," \u8FD9\u4E2A\u51FD\u6570\u7684\u4F5C\u7528\u4E0B\u8FD4\u56DE\u4E00\u4E2A iterator\u3002\u800C iterator \u5FC5\u987B\u8981\u6709 ",(0,s.jsx)(t.code,{children:"__next__()"})," \u8FD9\u4E2A method\uFF0C\u8FD9\u4E2A method \u4FDD\u8BC1\u5B83\u5728\u88AB ",(0,s.jsx)(t.a,{href:"https://docs.python.org/3.10/library/functions.html#next",children:(0,s.jsx)(t.code,{children:"next"})})," \u4F5C\u7528\u7684\u65F6\u5019\u53EF\u4EE5\u8FD4\u56DE\u4E0B\u4E00\u4E2A iterable \u91CC\u9762\u7684\u503C\u3002"]}),"\n",(0,s.jsx)(t.h2,{id:"get_iter-\u4E0E-for-loop",children:"GET_ITER \u4E0E for loop"}),"\n",(0,s.jsx)(t.p,{children:"\u6211\u4EEC\u770B\u4E00\u4E0B\u8FD9\u6BB5\u7A0B\u5E8F\u7684 bytecode\u3002"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python","data-output":"  2           0 BUILD_LIST               0\n              2 LOAD_CONST               0 ((1, 3, 5))\n              4 LIST_EXTEND              1\n              6 STORE_NAME               0 (lst)\n\n  3           8 LOAD_NAME                0 (lst)\n             10 GET_ITER\n        >>   12 FOR_ITER                 6 (to 26)\n             14 STORE_NAME               1 (i)\n\n  4          16 LOAD_NAME                2 (print)\n             18 LOAD_NAME                1 (i)\n             20 CALL_FUNCTION            1\n             22 POP_TOP\n             24 JUMP_ABSOLUTE            6 (to 12)\n\n  3     >>   26 LOAD_CONST               1 (None)\n             28 RETURN_VALUE","data-output-status":"exit:0","data-output-highlight":"6,7,8",metastring:"run",children:'import dis\n\ns = """\nlst = [1, 3, 5]\nfor i in lst:\n    print(i)\n"""\ndis.dis(s)\n'})}),"\n",(0,s.jsxs)(t.p,{children:["\u5728 ",(0,s.jsx)(t.code,{children:"LOAD_NAME"})," \u4E4B\u540E\uFF0C\u5B83\u505A\u4E86\u4E00\u4E2A ",(0,s.jsx)(t.a,{href:"https://docs.python.org/3.10/library/dis.html#opcode-GET_ITER",children:(0,s.jsx)(t.code,{children:"GET_ITER"})}),"\uFF0C\u800C ",(0,s.jsx)(t.code,{children:"GET_ITER"})," \u8FD9\u4E2A bytecode\uFF0C\u5C31\u662F\u4ECE\u6808\u9876\u7684\u8FD9\u4E2A iterable \u91CC\u9762\u62FF\u51FA\u6765\u5B83\u6240\u5BF9\u5E94\u7684 iterator\u3002\u6240\u6709\u7684 for loop \u7684\u5B9E\u73B0\u90FD\u662F\u8FD9\u6837\u7684\u3002"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-c",metastring:"{4,6}",children:"case TARGET(GET_ITER): {\n    /* before: [obj]; after [getiter(obj)] */\n    PyObject *iterable = TOP();\n    PyObject *iter = PyObject_GetIter(iterable);\n    Py_DECREF(iterable);\n    SET_TOP(iter);\n    if (iter == NULL)\n        goto error;\n    PREDICT(FOR_ITER);\n    PREDICT(CALL_FUNCTION);\n    DISPATCH();\n}\n"})}),"\n",(0,s.jsxs)(t.p,{children:["\u6240\u4EE5\u4F60\u53EF\u4EE5\u7406\u89E3\u4E3A\uFF0C\u5F53\u4F60\u5199\u4E00\u4E2A ",(0,s.jsx)(t.code,{children:"for"})," \u4EC0\u4E48 ",(0,s.jsx)(t.code,{children:"in"})," \u4E00\u4E2A iterable \u7684\u65F6\u5019\uFF0Cfor loop \u9996\u5148\u6084\u6084\u5730\u505A\u4E86\u4E00\u4E2A\u4ECE iterable \u91CC\u9762\u62FF\u5230 iterator \u7684\u64CD\u4F5C\u3002\u4F60\u53EF\u4EE5\u628A\u5B83\u60F3\u8C61\u6210\u4E0B\u9762\u8FD9\u4E2A\u6837\u5B50\u3002"]}),"\n",(0,s.jsx)(i.A,{variant:"iteratorLoop",step:2}),"\n",(0,s.jsxs)(t.p,{children:["\u5F53\u7136\u5B9E\u9645\u4E0A\u4E0D\u662F\u8FD9\u6837\u7684\uFF0C\u56E0\u4E3A\u4F60\u5728\u505A\u8FD9\u4E2A for loop \u7684\u65F6\u5019\uFF0C\u5B83\u8FD8\u4F1A\u5BF9\u8FD9\u4E2A ",(0,s.jsx)(t.code,{children:"it"})," \u8FDB\u884C\u4E00\u6B21 ",(0,s.jsx)(t.code,{children:"iter"})," \u7684\u8FD9\u4E48\u4E00\u4E2A\u64CD\u4F5C\u3002\u4F46\u4F60\u8111\u5B50\u91CC\u8981\u6709\u4E2A\u6982\u5FF5\uFF0C\u5728\u8FDB\u884C for loop \u4E4B\u524D\uFF0C\u8FD9\u4E2A iterable \u4F1A\u5148\u88AB\u53D6\u4E00\u4E2A iterator \u7684\u503C\uFF0C\u7136\u540E\u8FD9\u4E2A for loop \u662F\u6839\u636E\u8FD9\u4E2A iterator \u6765\u8FDB\u884C\u64CD\u4F5C\u7684\u3002"]}),"\n",(0,s.jsx)(t.h2,{id:"\u94FE\u8868\u7684\u8FED\u4EE3\u5668",children:"\u94FE\u8868\u7684\u8FED\u4EE3\u5668"}),"\n",(0,s.jsx)(t.p,{children:"\u90A3\u6709\u7684\u4EBA\u53EF\u80FD\u4F1A\u95EE\uFF0C\u5BF9\u5427\uFF0C\u8BF4\u6211\u77E5\u9053\u8FD9\u4E2A\u6709\u4EC0\u4E48\u7528\u5462\uFF1F\u9664\u4E86\u8BA9\u4F60\u7406\u89E3 Python \u7A76\u7ADF\u5728\u5E95\u5C42\u662F\u600E\u4E48\u5DE5\u4F5C\u7684\u4E4B\u5916\uFF0C\u4F60\u6709\u7684\u65F6\u5019\u6709\u53EF\u80FD\u4F1A\u9700\u8981\u81EA\u5DF1\u5199\u4E00\u4E2A iterable \u6216\u8005 iterator\u3002\u6211\u4EEC\u4E3E\u4E00\u4E2A\u5F88\u7B80\u5355\u7684\u4F8B\u5B50\uFF0C\u5C31\u662F\u94FE\u8868\uFF0Clinked list\u3002\u90A3\u6211\u4EEC\u77E5\u9053 Python \u91CC\u662F\u6CA1\u6709\u8FD9\u79CD\u5185\u7F6E\u7684\u6570\u636E\u7ED3\u6784\u7684\uFF0C\u4F46\u662F\u8FD9\u79CD\u6570\u636E\u7ED3\u6784\u53C8\u975E\u5E38\u5E38\u89C1\u3002\u5982\u679C\u6211\u4EEC\u60F3\u5728 for loop \u91CC\u9762\u4F7F\u7528\u94FE\u8868\u7684\u8BDD\uFF0C\u90A3\u6211\u4EEC\u5C31\u8981\u81EA\u5DF1\u628A\u94FE\u8868\u53D8\u6210\u4E00\u4E2A iterable\u3002"}),"\n",(0,s.jsx)(t.h3,{id:"node-\u4E0E-nodeiter",children:"Node \u4E0E NodeIter"}),"\n",(0,s.jsxs)(t.p,{children:["\u90A3\u4E0B\u9762\u5C31\u5B9E\u73B0\u4E86\u4E00\u4E2A\u6700\u7B80\u5355\u7684\u94FE\u8868\u8DDF\u5B83\u7684 iterator\u3002\u8FD9\u4E2A\u94FE\u8868\u5C31\u662F\u6709\u4E00\u4E2A\u540D\u5B57\uFF0C\u7136\u540E\u6709\u4E00\u4E2A ",(0,s.jsx)(t.code,{children:"next"})," \u6307\u9488\uFF0C\u5BF9\u5427\uFF1F\u7136\u540E\u6211\u7ED9\u5B83\u5199\u4E86\u4E00\u4E2A iterator class\u3002\u5927\u5BB6\u8FD8\u8BB0\u5F97\u6211\u4EEC\u4E4B\u524D\u8BB2\u7684\u5427\uFF1Fiterator class \u6700\u6838\u5FC3\u7684\u90E8\u5206\u662F\u8981\u6709\u8FD9\u4E2A ",(0,s.jsx)(t.code,{children:"__next__()"})," \u51FD\u6570\u3002\u6BCF\u6B21\u8C03\u7528\u8FD9\u4E2A ",(0,s.jsx)(t.code,{children:"__next__()"})," \u51FD\u6570\u7684\u65F6\u5019\uFF0C\u4F60\u9700\u8981\u5728\u4E24\u4EF6\u4E8B\u4E2D\u9009\u62E9\u4E00\u4E2A\u3002\u7B2C\u4E00\uFF0C\u5982\u679C\u4F60\u8FD9\u4E2A iterator \u5DF2\u7ECF\u5230\u5934\u4E86\uFF0C\u6CA1\u6709\u529E\u6CD5\u518D\u7ED9\u51FA\u6570\u636E\u4E86\uFF0C\u4F60\u9700\u8981 raise \u4E00\u4E2A ",(0,s.jsx)(t.a,{href:"https://docs.python.org/3.10/library/exceptions.html#StopIteration",children:(0,s.jsx)(t.code,{children:"StopIteration"})})," \u8FD9\u4E2A exception\u3002\u7B2C\u4E8C\uFF0C\u5982\u679C\u4F60\u8FD8\u6709\u6570\u636E\u7684\u8BDD\uFF0C\u628A\u8FD9\u4E2A\u6570\u636E return \u56DE\u53BB\u3002"]}),"\n",(0,s.jsx)(i.A,{variant:"iterator",step:1}),"\n",(0,s.jsxs)(t.p,{children:["\u90A3\u5728\u6211\u7684\u8FD9\u4E2A\u5B9E\u73B0\u91CC\u5462\uFF0C\u6211\u7528 ",(0,s.jsx)(t.code,{children:"self.curr_node"})," \u8868\u793A\u73B0\u5728\u5DF2\u7ECF\u6570\u5230\u54EA\u4E00\u4E2A node \u4E86\u3002\u5982\u679C ",(0,s.jsx)(t.code,{children:"self.curr_node"})," \u662F ",(0,s.jsx)(t.code,{children:"None"})," \u7684\u8BDD\uFF0C\u5C31\u8BF4\u660E\u5DF2\u7ECF\u6CA1\u4E86\uFF0C\u6211\u5C31 raise \u8FD9\u4E2A ",(0,s.jsx)(t.code,{children:"StopIteration"}),"\u3002\u5426\u5219\u7684\u8BDD\u6211\u5C31\u5F80\u524D\u8FDB\u4E00\u4E2A\uFF0C\u7136\u540E\u628A\u73B0\u5728\u8FD9\u4E2A node \u8FD4\u56DE\u56DE\u53BB\u3002"]}),"\n",(0,s.jsxs)(t.p,{children:["\u6211\u4EEC\u770B\u8FD9\u4E2A ",(0,s.jsx)(t.code,{children:"NodeIter"})," \u5C31\u662F\u4E00\u4E2A iterator\uFF0C\u5B83\u5B9E\u73B0\u4E86 ",(0,s.jsx)(t.code,{children:"__next__()"})," \u51FD\u6570\u3002\u90A3 ",(0,s.jsx)(t.code,{children:"Node"})," \u5462\uFF0C\u5C31\u662F\u4E00\u4E2A iterable\uFF0C\u5B83\u5B9E\u73B0\u4E86\u8FD9\u4E2A ",(0,s.jsx)(t.code,{children:"__iter__()"})," \u51FD\u6570\uFF0C\u8FD4\u56DE ",(0,s.jsx)(t.code,{children:"NodeIter"})," \u7684\u4E00\u4E2A object\u3002"]}),"\n",(0,s.jsxs)(t.p,{children:["\u90A3\u5728\u4E0B\u9762\u6211\u4E5F\u505A\u4E86\u4E00\u4E2A\u7B80\u5355\u7684\u6D4B\u8BD5\uFF0C\u5EFA\u7ACB\u4E86\u4E09\u4E2A node\uFF0C\u7136\u540E ",(0,s.jsx)(t.code,{children:"node1"})," \u7684\u4E0B\u4E00\u4E2A\u662F ",(0,s.jsx)(t.code,{children:"node2"}),"\uFF0C",(0,s.jsx)(t.code,{children:"node2"})," \u7684\u4E0B\u4E00\u4E2A\u662F ",(0,s.jsx)(t.code,{children:"node3"}),"\u3002\u8FD9\u91CC\u6211\u7528\u4E86 ",(0,s.jsx)(t.code,{children:"for node in node1"}),"\uFF0C\u56E0\u4E3A\u6BCF\u4E00\u4E2A node \u90FD\u662F iterable\u3002\u90A3\u6700\u5F00\u59CB\u90A3\u4E2A node \u5462\uFF0C\u5C31\u662F\u94FE\u8868\u7684\u8868\u5934\u3002\u7136\u540E\u6211 ",(0,s.jsx)(t.code,{children:"for node in node1"}),"\uFF0C\u7136\u540E\u6211\u6253\u5370 ",(0,s.jsx)(t.code,{children:"node.name"}),"\u3002\u8FD0\u884C\u4E00\u4E0B\uFF0C\u6211\u4EEC\u770B\u5B83\u5F88\u6210\u529F\u5730\u6253\u5370\u51FA\u4E86 ",(0,s.jsx)(t.code,{children:"node1"}),"\u3001",(0,s.jsx)(t.code,{children:"node2"}),"\u3001",(0,s.jsx)(t.code,{children:"node3"}),"\u3002\u8FD9\u5C31\u662F\u6211\u4EEC\u81EA\u5DF1\u5B9E\u73B0\u7684\u4E00\u4E2A\u6BD4\u8F83\u7B80\u5355\u7684 iterable \u7684\u4E00\u4E2A\u6570\u636E\u7ED3\u6784\u3002"]}),"\n",(0,s.jsx)(t.h2,{id:"\u8BA9-iterator-\u4E5F\u662F-iterable",children:"\u8BA9 iterator \u4E5F\u662F iterable"}),"\n",(0,s.jsxs)(t.p,{children:["\u597D\uFF0C\u90A3\u53EF\u80FD\u5F88\u591A\u4EBA\u770B\u5230\u8FD9\u91CC\u4F1A\u4EA7\u751F\u4E00\u4E2A\u7591\u95EE\uFF0C\u5C31\u662F\u6211\u770B\u5230\u7684\u6240\u6709\u6559\u7A0B\u91CC\uFF0C\u8FD9\u4E2A iterator \u9664\u4E86 ",(0,s.jsx)(t.code,{children:"__next__()"})," \u51FD\u6570\u4E4B\u5916\uFF0C\u8FD8\u8981\u5B9E\u73B0\u8FD9\u4E2A ",(0,s.jsx)(t.code,{children:"__iter__()"})," \u51FD\u6570\uFF0C\u4E3A\u4EC0\u4E48\u4F60\u8FD9\u91CC\u6CA1\u5B9E\u73B0\u5462\uFF1F\u6211\u4EEC\u770B\u56DE Python \u7684",(0,s.jsx)(t.a,{href:"https://docs.python.org/3.10/library/stdtypes.html#iterator-types",children:"\u5B98\u65B9\u6587\u6863"}),"\uFF0C\u5B98\u65B9\u6587\u6863\u8FD9\u4E5F\u8BF4\uFF0C\u8BF4 iterator \u5FC5\u987B\u8981\u6709\u8FD9\u4E2A ",(0,s.jsx)(t.code,{children:"__iter__()"})," method\u3002\u5F53\u7136\u5B83\u4E5F\u628A\u8FD9\u4E48\u89C4\u5B9A\u7684\u539F\u56E0\u5199\u660E\u767D\u4E86\u3002\u5B83\u8BF4\u8FD9\u4E48\u505A\u662F\u4E3A\u4E86\u8BA9\u6BCF\u4E00\u4E2A iterator \u4E5F\u662F iterable\uFF0C\u5C31\u662F\u8BA9\u6BCF\u4E00\u4E2A\u8FED\u4EE3\u5668\u4E5F\u662F\u53EF\u8FED\u4EE3\u7684\u3002"]}),"\n",(0,s.jsx)(t.h3,{id:"\u663E\u5F0F\u83B7\u53D6-iterator",children:"\u663E\u5F0F\u83B7\u53D6 iterator"}),"\n",(0,s.jsxs)(t.p,{children:["\u6211\u4EEC\u6765\u770B\u4E00\u4E0B\u4E3A\u4EC0\u4E48\u5B83\u8FD9\u4E48\u8981\u6C42\u3002\u6211\u4EEC\u56DE\u5230\u521A\u624D\u7684\u4EE3\u7801\uFF0C\u73B0\u5728\u7B2C 27 \u884C\u662F ",(0,s.jsx)(t.code,{children:"for node in node1"}),"\uFF0C\u5BF9\u5427\uFF1F\u90A3\u6211\u4EEC\u521A\u624D\u8BF4\u8FC7\uFF0C\u5B9E\u9645\u4E0A\u5B83\u662F\u5148\u7BA1 ",(0,s.jsx)(t.code,{children:"node1"})," \u8981\u4E86\u4E00\u4E2A iterator\uFF0C\u4F46\u662F\u6709\u7684\u65F6\u5019\u6709\u4EBA\u53EF\u80FD\u8FD9\u4E48\u5199\uFF0C\u4ED6\u76F4\u63A5\u628A\u8FD9\u4E2A ",(0,s.jsx)(t.code,{children:"node1"})," \u663E\u5F0F\u5730\u6C42\u4E86\u5B83\u7684 iterator\u3002"]}),"\n",(0,s.jsx)(i.A,{variant:"iterator",step:2}),"\n",(0,s.jsx)(t.p,{children:"\u5F53\u7136\u8FD9\u4E48\u770B\u53EF\u80FD\u6709\u4E9B\u522B\u626D\uFF0C\u5BF9\u5427\uFF1F\u6211\u4EEC\u6362\u4E00\u4E2A\u5B9E\u9645\u4E0A\u6709\u53EF\u80FD\u771F\u7684\u4F1A\u51FA\u73B0\u7684\u5199\u6CD5\u3002"}),"\n",(0,s.jsx)(t.h3,{id:"\u4ECE\u7B2C\u4E8C\u4E2A\u8282\u70B9\u5F00\u59CB",children:"\u4ECE\u7B2C\u4E8C\u4E2A\u8282\u70B9\u5F00\u59CB"}),"\n",(0,s.jsxs)(t.p,{children:["\u6211\u4EEC\u770B\u4E00\u4E0B\u8FD9\u6BB5\u7A0B\u5E8F\u554A\uFF0C\u5B83\u662F\u60F3\u7B2C\u4E00\u4E2A node \u4E0D\u8981\uFF0C\u4ECE\u7B2C\u4E8C\u4E2A\u5F00\u59CB\u6253\u3002\u5F53\u7136\u5B83\u4E5F\u53EF\u4EE5\u901A\u8FC7\u521A\u624D\u7684 for loop \u5B9E\u73B0\uFF0C\u5F53\u7136\u5B83\u5C31\u60F3\u7528 iterator\u3002\u5B83\u5148\u62FF\u5230\u4E86 ",(0,s.jsx)(t.code,{children:"node1"})," \u7684 iterator\uFF0C\u7136\u540E\u4ECE\u91CC\u9762\u62FF\u5230\u4E86\u4E00\u4E2A\u503C\uFF0C\u518D\u5BF9\u8FD9\u4E2A iterator \u505A\u4E00\u4E2A for loop\u3002\u770B\u8D77\u6765\u5E94\u8BE5\u662F\u4E00\u4E2A\u633A\u5408\u7406\u7684\u903B\u8F91\uFF0C\u5BF9\u4E0D\u5BF9\uFF1F"]}),"\n",(0,s.jsx)(i.A,{variant:"iterator",step:3}),"\n",(0,s.jsxs)(t.p,{children:["\u6211\u4EEC\u8FD0\u884C\u4E00\u4E0B\uFF0C\u53EF\u4EE5\u770B\u5230\u8FD9\u5757\u5C31\u62A5\u9519\u4E86\u3002\u4E3A\u4EC0\u4E48\u4F1A\u62A5\u9519\u5462\uFF1F\u56E0\u4E3A\u5728\u6211\u4EEC\u505A ",(0,s.jsx)(t.code,{children:"for node in it"})," \u7684\u65F6\u5019\uFF0C\u8FD9\u4E2A ",(0,s.jsx)(t.code,{children:"it"})," \u672C\u8EAB\u867D\u7136\u5B83\u662F\u4E2A iterator\uFF0C\u4F46\u5B83\u4E0D\u662F\u4E00\u4E2A iterable\uFF0C\u6240\u4EE5\u5B83\u4E0D\u80FD\u653E\u5230 for loop \u91CC\u3002\u53EF\u662F\u8FD9\u4EF6\u4E8B\u8BF4\u5B9E\u8BDD\u6BD4\u8F83\u53CD\u76F4\u89C9\uFF0C\u5C31\u662F\u4F60\u600E\u4E48\u7422\u78E8\u600E\u4E48\u90FD\u4E0D\u5BF9\u3002"]}),"\n",(0,s.jsxs)(t.p,{children:["\u56E0\u6B64\u5462\uFF0CPython \u5B98\u65B9\u89C4\u5B9A\u8BF4\u4F60\u8FD9\u4E2A iterator \u672C\u8EAB\u5FC5\u987B\u8981\u662F\u4E00\u4E2A iterable\uFF0C\u8FD9\u6837\u4F60\u628A\u5B83\u653E\u5230 for loop \u91CC\uFF0C\u6216\u8005\u653E\u5230\u4E00\u4E9B\u5176\u4ED6\u7684\u9700\u8981 iterable\uFF0C\u50CF ",(0,s.jsx)(t.code,{children:"zip"})," \u548C ",(0,s.jsx)(t.code,{children:"map"})," \u8FD9\u4E9B\u51FD\u6570\u91CC\u9762\uFF0C\u8FD9\u90FD\u80FD\u7528\u3002\u8FD9\u624D\u662F\u4E00\u4E2A\u6BD4\u8F83\u7B26\u5408\u76F4\u89C9\u7684\u6982\u5FF5\u3002"]}),"\n",(0,s.jsx)(t.h3,{id:"\u8FD4\u56DE-self",children:"\u8FD4\u56DE self"}),"\n",(0,s.jsxs)(t.p,{children:["\u90A3\u5B9E\u73B0\u7684\u65B9\u5F0F\u5176\u5B9E\u4E5F\u5F88\u7B80\u5355\u3002\u5BF9\u4E8E iterator \u672C\u8EAB\u6765\u8BF4\uFF0C\u51E0\u4E4E\u6240\u6709\u60C5\u51B5\u4E0B\uFF0C\u4F60\u53EA\u9700\u8981\u5B9A\u4E49\u4E00\u4E2A ",(0,s.jsx)(t.code,{children:"__iter__()"})," \u51FD\u6570\uFF0C\u8FD4\u56DE ",(0,s.jsx)(t.code,{children:"self"})," \u5C31\u53EF\u4EE5\u4E86\u3002\u5C31\u662F\u5F53\u4F60\u5BF9\u8FD9\u4E2A iterator \u6C42\u5B83\u7684 iterator \u7684\u65F6\u5019\uFF0C\u5C31\u662F\u5B83\u81EA\u5DF1\u3002\u90A3\u8BA9\u6211\u4EEC\u518D\u8FD0\u884C\u4E00\u4E0B\u521A\u624D\u4E00\u6BB5\u7A0B\u5E8F\uFF0C\u6211\u4EEC\u770B\u7ED3\u679C\u5DF2\u7ECF\u548C\u6211\u4EEC\u60F3\u8981\u7684\u4E00\u6837\u4E86\u3002"]}),"\n",(0,s.jsx)(i.A,{variant:"iterator",step:4,nav:!0}),"\n",(0,s.jsx)(t.h3,{id:"cpython-\u7684\u5B9E\u73B0\u7EC6\u8282",children:"CPython \u7684\u5B9E\u73B0\u7EC6\u8282"}),"\n",(0,s.jsxs)(t.p,{children:["\u5F53\u7136\u4E86\uFF0C\u5982\u679C\u4F60\u770B\u56DE ",(0,s.jsx)(t.a,{href:"https://docs.python.org/3.10/glossary.html#term-iterator",children:"CPython \u6587\u6863"}),"\u7684\u8BDD\uFF0C\u4F60\u4F1A\u53D1\u73B0\u5B83\u4E0B\u9762\u5199\u4E86\u4E00\u884C\u8BDD\uFF0C\u53EB\u505A CPython \u672C\u8EAB\u4E5F\u5E76\u4E0D\u603B\u662F\u9075\u5FAA\u6BCF\u4E00\u4E2A iterator \u90FD\u662F iterable \u7684\u8981\u6C42\u3002\u4F60\u8BF4\u8FD9\u4E9B\u4EBA\u8BA8\u538C\u4E0D\u8BA8\u538C\uFF0C\u81EA\u5DF1\u5B9A\u4E86\u4E00\u4E2A\u8981\u6C42\uFF0C\u81EA\u5DF1\u4E0D\u9075\u5B88\u3002"]}),"\n",(0,s.jsxs)(t.p,{children:["\u90A3\u5BF9\u4E8E iterator \u5230\u5E95\u9700\u4E0D\u9700\u8981\u6709 ",(0,s.jsx)(t.code,{children:"__iter__()"})," \u8FD9\u4E2A\u51FD\u6570\uFF0C\u6216\u8005\u662F\u9700\u4E0D\u9700\u8981 iterable \u8FD9\u4E2A\u4E8B\uFF0C\u6211\u7684\u89C2\u70B9\u662F\uFF0C\u9996\u5148\u6700\u597D\u5199\uFF0C\u56E0\u4E3A\u8FD9\u4EF6\u4E8B\u5F88\u7B80\u5355\uFF0C\u5C31\u4E24\u884C\u4EE3\u7801\u3002\u4F46\u662F\u66F4\u91CD\u8981\u7684\u5E94\u8BE5\u662F\uFF0C\u4F60\u5E94\u8BE5\u77E5\u9053 ",(0,s.jsx)(t.code,{children:"__iter__()"})," \u8FD9\u4E2A\u51FD\u6570\u662F\u5E72\u561B\u7684\uFF0C",(0,s.jsx)(t.code,{children:"__next__()"})," \u8FD9\u4E2A\u51FD\u6570\u662F\u5E72\u561B\u7684\uFF0C\u5B83\u4EEC\u4FE9\u6709\u4EC0\u4E48\u533A\u522B\u3002\u4E5F\u5C31\u662F\u4F60\u8981\u5206\u6E05\u4EC0\u4E48\u662F iterable\uFF0C\u4EC0\u4E48\u662F iterator\uFF0C\u8FD9\u4E24\u4E2A\u4E1C\u897F\u662F\u4E0D\u4E00\u6837\u7684\u3002\u5982\u679C\u4F60\u80FD\u7406\u89E3\u5B83\u4EEC\u4E24\u4E2A\u6709\u4EC0\u4E48\u533A\u522B\uFF0C\u90A3\u5230\u5E95\u8C01\u8981\u5199 ",(0,s.jsx)(t.code,{children:"__next__()"})," \u51FD\u6570\uFF0C\u8C01\u8981\u5199 ",(0,s.jsx)(t.code,{children:"__iter__()"})," \u51FD\u6570\uFF0C\u5C31\u975E\u5E38\u4E00\u76EE\u4E86\u7136\u4E86\u3002"]}),"\n",(0,s.jsx)(t.p,{children:"\u597D\uFF0C\u90A3\u6211\u4EEC\u8FD9\u7BC7\u6587\u7AE0\u5C31\u5230\u8FD9\u91CC\u3002\u5E0C\u671B\u5927\u5BB6\u6709\u6240\u6536\u83B7\u3002"})]})}function f(e={}){let{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},83573(e,t,r){r.d(t,{A:()=>l});var n=r(96540);let s=(...e)=>e.filter((e,t,r)=>!!e&&""!==e.trim()&&r.indexOf(e)===t).join(" ").trim(),o=e=>{let t=e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,r)=>r?r.toUpperCase():t.toLowerCase());return t.charAt(0).toUpperCase()+t.slice(1)};var i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let a=(0,n.forwardRef)(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:o,className:a="",children:l,iconNode:c,...d},p)=>(0,n.createElement)("svg",{ref:p,...i,width:t,height:t,stroke:e,strokeWidth:o?24*Number(r)/Number(t):r,className:s("lucide",a),...!l&&!(e=>{for(let t in e)if(t.startsWith("aria-")||"role"===t||"title"===t)return!0;return!1})(d)&&{"aria-hidden":"true"},...d},[...c.map(([e,t])=>(0,n.createElement)(e,t)),...Array.isArray(l)?l:[l]])),l=(e,t)=>{let r=(0,n.forwardRef)(({className:r,...i},l)=>(0,n.createElement)(a,{ref:l,iconNode:t,className:s(`lucide-${o(e).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,r),...i}));return r.displayName=o(e),r}},45773(e,t,r){r.d(t,{A:()=>n});let n=(0,r(83573).A)("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]])},35404(e,t,r){r.d(t,{A:()=>n});let n=(0,r(83573).A)("copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]])},85731(e,t,r){r.d(t,{A:()=>n});let n=(0,r(83573).A)("play",[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]])},67810(e,t,r){r.d(t,{A:()=>o});var n=r(83941),s=r(61022);function o(){let{prism:e}=(0,s.p)(),{colorMode:t}=(0,n.G)(),r=e.theme,o=e.darkTheme||r;return"dark"===t?o:r}},85421(e,t,r){r.d(t,{A:()=>S});var n=r(74848),s=r(96540),o=r(34164),i=r(67810);let a=[{title:"\u642D\u597D\u9879\u76EE\u9AA8\u67B6",body:["\u6838\u5FC3\u4EE3\u7801\u653E\u8FDB `vector/` \u5305\uFF0C\u6D4B\u8BD5\u653E\u8FDB `tests/` \u5305\uFF0C\u4E24\u4E2A\u6587\u4EF6\u5939\u90FD\u6709 `__init__.py`\uFF0C\u6839\u76EE\u5F55\u53EA\u7559\u4E00\u4E2A\u5165\u53E3\u6587\u4EF6\u3002","\u5728\u6839\u76EE\u5F55\u8FD0\u884C `python -m unittest`\uFF0Cunittest \u4F1A\u81EA\u52A8\u627E\u5230 `tests/test_vector.py` \u91CC\u7684 `test_init` \u5E76\u8FD0\u884C\u3002\u70B9\u5DE6\u4FA7\u6587\u4EF6\u6811\u53EF\u4EE5\u770B\u6BCF\u4E2A\u6587\u4EF6\u3002"],file:"tests/test_vector.py",files:{"examply.py":"",".gitignore":`# Python-generated files
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
`},runs:[{cmd:"python main.py",exit:0,output:"/private/tmp/blog-frame-demo/main.py\n11\n"}]}];var d=r(17181);let p=[{title:"\u7B2C\u4E00\u6B21 API \u8C03\u7528",body:["\u6211\u4EEC\u5148\u5199\u4E00\u4E2A\u6700\u7B80\u5355\u7684\u811A\u672C\uFF1A\u7528 `Anthropic()` \u521B\u5EFA\u5BA2\u6237\u7AEF\uFF0C\u8C03\u7528 `messages.create()` \u53D1\u9001\u4E00\u53E5\u7CFB\u7EDF\u63D0\u793A\u8BCD\u548C\u4E00\u6761\u7528\u6237\u6D88\u606F\uFF0C\u7136\u540E\u628A\u56DE\u590D\u91CC\u7684 text \u5757\u6253\u5370\u51FA\u6765\u3002\u8FD9\u91CC\u6CA1\u6709\u5DE5\u5177\uFF0C\u4E5F\u6CA1\u6709\u5FAA\u73AF\uFF0C\u6A21\u578B\u53EA\u80FD\u804A\u5929\u3002","\u8FD9\u4E2A\u811A\u672C\u8D70\u7684\u662F DeepSeek \u7684 Anthropic \u517C\u5BB9\u63A5\u53E3\uFF0C\u6240\u4EE5 `base_url` \u548C `model` \u586B\u7684\u662F DeepSeek \u7684\u503C\u3002\u5982\u679C\u6362\u56DE\u5B98\u65B9\u63A5\u53E3\uFF0C\u53EA\u9700\u8981\u5220\u6389 `base_url` \u5E76\u6539\u6A21\u578B\u540D\u3002"],file:"agent.py",files:{"agent.py":d.A.s00["agent.py"]}},{title:"\u52A0\u5165 search_products \u5DE5\u5177",body:["\u8FD9\u4E00\u6B65\u4E00\u6B21\u52A0\u5165\u4E86\u56DB\u6837\u4E1C\u897F\uFF1A\u5047\u5546\u54C1\u5217\u8868\u3001\u5DE5\u5177 schema\u3001\u641C\u7D22\u51FD\u6570\u548C\u5BF9\u8BDD\u5FAA\u73AF\u3002\u7EFF\u5E95\u7684\u884C\u662F\u76F8\u5BF9\u4E0A\u4E00\u6B65\u65B0\u589E\u7684\u5185\u5BB9\uFF0C\u53F3\u4E0A\u89D2\u53EF\u4EE5\u5207\u6362\u5230\u201C\u53EA\u770B\u5F53\u524D\u201D\u67E5\u770B\u5B8C\u6574\u6587\u4EF6\u3002","\u63A5\u4E0B\u6765\u7684\u4E09\u6B65\uFF0C\u6211\u4EEC\u628A\u8FD9\u56DB\u6837\u4E1C\u897F\u62C6\u5F00\u9010\u6BB5\u6765\u770B\u3002"],file:"agent.py",files:{"agent.py":d.A.s01["agent.py"]}},{title:"\u5DE5\u5177 schema \u5C31\u662F\u7ED9\u6A21\u578B\u7684\u8BF4\u660E\u4E66",body:["`description` \u4E0D\u662F\u6CE8\u91CA\uFF0C\u800C\u662F\u7ED9\u6A21\u578B\u7684\u4F7F\u7528\u8BF4\u660E\uFF1A\u4EC0\u4E48\u65F6\u5019\u8BE5\u641C\u3001\u600E\u4E48\u641C\u3001\u987E\u5BA2\u63D0\u5230\u591A\u4E2A\u5546\u54C1\u65F6\u8981\u5206\u5F00\u641C\u3002`input_schema` \u91CC\u6BCF\u4E2A\u5B57\u6BB5\u7684 description \u4E5F\u662F\u540C\u6837\u7684\u9053\u7406\u3002","\u6A21\u578B\u53EA\u80FD\u770B\u5230\u8FD9\u6BB5\u6587\u5B57\uFF0C\u770B\u4E0D\u5230\u51FD\u6570\u4F53\u3002\u56E0\u6B64\u51FD\u6570\u5199\u5F97\u518D\u597D\uFF0C\u5982\u679C description \u6CA1\u6709\u8BF4\u6E05\u695A\uFF0C\u6A21\u578B\u7167\u6837\u4E0D\u4F1A\u7528\uFF0C\u6216\u8005\u7528\u9519\u3002"],file:"agent.py",lines:[[49,72]]},{title:"\u641C\u7D22\u51FD\u6570\u4E0E\u5206\u53D1\u8868",body:["\u641C\u7D22\u51FD\u6570\u53EA\u505A\u5173\u952E\u8BCD\u5339\u914D\uFF0C\u5E76\u8FD4\u56DE JSON \u5B57\u7B26\u4E32\u3002\u8FD9\u662F\u56E0\u4E3A\u5DE5\u5177\u7ED3\u679C\u6700\u7EC8\u8981\u4F5C\u4E3A\u6587\u672C\u653E\u8FDB messages\uFF0C\u6240\u4EE5\u6211\u4EEC\u5728\u8FD9\u91CC\u76F4\u63A5\u5E8F\u5217\u5316\u3002","`TOOL_MAP` \u628A\u5DE5\u5177\u540D\u6620\u5C04\u5230\u5BF9\u5E94\u7684\u51FD\u6570\u3002\u4EE5\u540E\u52A0\u65B0\u5DE5\u5177\u65F6\uFF0C\u53EA\u9700\u8981\u5F80\u8FD9\u5F20\u8868\u91CC\u6DFB\u4E00\u884C\uFF0C\u5FAA\u73AF\u672C\u8EAB\u4E0D\u7528\u6539\u52A8\u3002"],file:"agent.py",lines:[[75,87]]},{title:"\u4E24\u5C42 while",body:["\u5916\u5C42 `while` \u8D1F\u8D23\u7B49\u5F85\u7528\u6237\u8F93\u5165\uFF0C\u9047\u5230\u7A7A\u8F93\u5165\u5C31\u9000\u51FA\u3002\u5185\u5C42 `while` \u624D\u662F agent \u5FAA\u73AF\u7684\u672C\u4F53\uFF1A\u8C03\u7528\u6A21\u578B\uFF0C\u628A assistant \u7684\u56DE\u590D\u6574\u4E2A\u8FFD\u52A0\u8FDB messages\uFF1B\u5982\u679C `stop_reason` \u4E0D\u662F `tool_use` \u5C31\u8DF3\u51FA\uFF1B\u5426\u5219\u6267\u884C\u6BCF\u4E00\u4E2A tool_use \u5757\uFF0C\u628A `tool_result` \u6253\u5305\u6210\u4E00\u6761 user \u6D88\u606F\u8FFD\u52A0\u8FDB\u53BB\uFF0C\u7136\u540E\u518D\u5FAA\u73AF\u4E00\u6B21\u3002","\u6709\u4E00\u4E2A\u7EC6\u8282\u9700\u8981\u6CE8\u610F\uFF1Aassistant \u7684 `response.content` \u8981\u539F\u6837\u8FFD\u52A0\uFF0C\u5305\u62EC\u5176\u4E2D\u7684 tool_use \u5757\uFF1B\u4E0B\u4E00\u6761 user \u6D88\u606F\u91CC\u7684 `tool_use_id` \u5FC5\u987B\u4E0E\u4E4B\u5BF9\u5E94\uFF0C\u6A21\u578B\u624D\u77E5\u9053\u54EA\u4E2A\u7ED3\u679C\u5C5E\u4E8E\u54EA\u6B21\u8C03\u7528\u3002"],file:"agent.py",lines:[[102,139]]}],f="\u8FD0\u884C",_="\u81EA\u52A8\u6362\u884C",u="\u53D6\u6D88\u81EA\u52A8\u6362\u884C",m="\u6536\u8D77",h={unittest:{steps:a},codeObject:{steps:l},frame:{steps:c},commerce:{steps:p},iterator:{steps:[{title:"\u904D\u5386\u94FE\u8868",body:[],file:"main.py",files:{"main.py":`class NodeIter:
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
`}]}]}};var y=r(51507),x=r(82387);let b="btn_JmFc",v="btnPrimary_x2Yk",g="termBtn_CC8E",j="termBtnOpen_rzSH",w="termIcon_Zbcm";function A(e,t){return e.replace(/\{(\w+)\}/g,(e,r)=>void 0!==t[r]?String(t[r]):`{${r}}`)}function E({text:e}){return e.split(/(`[^`]+`)/g).map((e,t)=>e.startsWith("`")&&e.endsWith("`")&&e.length>=2?(0,n.jsx)("code",{className:"inlineCode_AI70",children:e.slice(1,-1)},t):(0,n.jsx)(s.Fragment,{children:e},t))}function N(e){return(0,n.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",...e,children:(0,n.jsx)("polygon",{points:"6 3 20 12 6 21 6 3"})})}function T(e){return(0,n.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",...e,children:[(0,n.jsx)("rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}),(0,n.jsx)("path",{d:"m7 11 2-2-2-2"}),(0,n.jsx)("path",{d:"M11 13h4"})]})}function k(e){return(0,n.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",...e,children:[(0,n.jsx)("path",{d:"M3 6h18"}),(0,n.jsx)("path",{d:"M3 12h15a3 3 0 1 1 0 6h-4"}),(0,n.jsx)("path",{d:"m16 16-2 2 2 2"}),(0,n.jsx)("path",{d:"M3 18h7"})]})}function O(e){return(0,n.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",...e,children:(0,n.jsx)("rect",{x:"4",y:"4",width:"16",height:"16",rx:"2"})})}function R({run:e,wrap:t}){let r=(0,s.useMemo)(()=>e.output.replace(/\n$/,"").split("\n"),[e.output]),{shown:i,started:a,done:l}=(0,y.A)(r,!0);return(0,n.jsxs)("div",{className:(0,o.A)("termOutput_aJer",t&&"termOutputWrap_ZhlF"),"aria-live":"polite",children:[(0,n.jsxs)("div",{className:"termOutputRow_eFC7",children:[(0,n.jsx)("span",{className:"termMark_yyoX",title:"\u9884\u5148\u5F55\u5236\u7684\u8FD0\u884C\u7ED3\u679C\uFF0C\u4E0D\u662F\u6D4F\u89C8\u5668\u5B9E\u65F6\u6267\u884C",children:(0,n.jsx)(T,{className:"termMarkIcon_o1H5","aria-label":"\u7EC8\u7AEF",role:"img"})}),(0,n.jsxs)("div",{className:"termOutputBody_dl5T",children:[!a&&(0,n.jsx)("div",{className:"termRunning_L5SW",children:"\u8FD0\u884C\u4E2D\u2026"}),r.slice(0,i).map((e,t)=>(0,n.jsx)("div",{className:(0,o.A)("run-output__line","termLine_seW0"),children:""===e?" ":e},t)),a&&!l&&(0,n.jsx)("span",{className:"run-output__cursor"})]})]}),l&&(0,n.jsx)("div",{className:(0,o.A)("termFoot_BTl4",0!==e.exit&&"termFootFail_H1CC"),children:A("\u8FDB\u7A0B\u9000\u51FA\uFF0C\u9000\u51FA\u7801 {code}",{code:e.exit})})]})}function S({variant:e,step:t=1,nav:r=!1}){let s=h[e];if(!s)throw Error(`CodeWalkthrough: unknown variant "${e}"`);return(0,n.jsx)(L,{data:s,initialStep:t,nav:r},e)}function L({data:e,initialStep:t,nav:r}){let a,{steps:l}=e,c=(0,i.A)(),d=(0,s.useMemo)(()=>(function(e){let t=[],r={};for(let n of e){for(let[e,t]of(r={...r},Object.entries(n.files||{})))null===t?delete r[e]:r[e]=t;t.push(r)}return t})(l),[l]),p=(0,s.useMemo)(()=>1===new Set(d.flatMap(Object.keys)).size,[d]),[h,y]=(0,s.useState)(()=>Math.min(Math.max(t-1,0),l.length-1)),[T,S]=(0,s.useState)(null),[C,M]=(0,s.useState)(!1),F=l[h],D=d[h],V=h>0?d[h-1]:null,I=c.plain.backgroundColor,P=F.runs||[],U=p&&1===P.length?{output:P[0].output,status:`exit:${P[0].exit}`}:null,B=e=>{l[e]&&(y(e),S(null))};return(0,n.jsxs)("div",{className:"root_lC3A",children:[(0,n.jsxs)("div",{className:"stepsPanel_A8J6",children:[(0,n.jsxs)("div",{className:"stepHead_rWEC",children:[(0,n.jsx)("span",{className:"stepTitle_eRCc",children:A("\u7B2C {n} \u6B65 \xb7 {title}",{n:h+1,title:F.title})}),(0,n.jsx)("span",{className:"stepCounter_d1xs",children:A("{n} / {total}",{n:h+1,total:l.length})})]}),(0,n.jsx)("div",{className:"stepBody_xfZr",children:F.body.map((e,t)=>(0,n.jsx)("p",{children:(0,n.jsx)(E,{text:e})},t))}),r&&(0,n.jsxs)("div",{className:"navButtons_ENqt",children:[(0,n.jsx)("button",{type:"button",disabled:0===h,onClick:()=>B(h-1),className:(0,o.A)(b,v),children:"\u4E0A\u4E00\u6B65"}),(0,n.jsx)("button",{type:"button",disabled:h===l.length-1,onClick:()=>B(h+1),className:(0,o.A)(b,v),children:"\u4E0B\u4E00\u6B65"})]})]}),(0,n.jsx)(x.A,{files:D,previousFiles:V,stepKey:h,preferredFiles:(a=Object.keys(F.files||{}).filter(e=>Object.hasOwn(D,e)),(F.file?[F.file,...a.filter(e=>e!==F.file)]:a).filter(e=>Object.hasOwn(D,e))),focusFile:F.file,focusRanges:F.lines,single:p,run:U}),P.length>0&&!U&&(0,n.jsx)("div",{className:"terminal_x6YH",style:{backgroundColor:I,color:c.plain.color},children:P.map((e,t)=>{let r=T===t;return(0,n.jsxs)("div",{className:"termRun_pPQl",children:[(0,n.jsxs)("div",{className:"termPrompt__Qbi",children:[(0,n.jsx)("span",{className:"termDollar_FMaj","aria-hidden":"true",children:"$"}),(0,n.jsx)("code",{className:"termCmd_KH0y",children:e.cmd}),r&&(0,n.jsx)("button",{type:"button","aria-pressed":C,"aria-label":C?u:_,title:C?u:_,onClick:()=>M(!C),className:(0,o.A)(g,C&&j),children:(0,n.jsx)(k,{className:w})}),(0,n.jsx)("button",{type:"button","aria-expanded":r,"aria-label":r?m:f,title:r?m:f,onClick:()=>S(r?null:t),className:(0,o.A)(g,r&&j),children:r?(0,n.jsx)(O,{className:w}):(0,n.jsx)(N,{className:w})})]}),r&&(0,n.jsx)(R,{run:e,wrap:C})]},`${h}-${t}`)})})]})}},82387(e,t,r){r.d(t,{A:()=>en});var n,s,o,i,a,l,c,d,p,f,_,u,m,h,y=r(74848),x=r(96540),b=r(34164),v=r(83573);let g=(0,v.A)("square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);var j=r(85731);let w=(0,v.A)("file-diff",[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M9 10h6",key:"9gxzsh"}],["path",{d:"M12 13V7",key:"h0r20n"}],["path",{d:"M9 17h6",key:"r8uit2"}]]),A=(0,v.A)("file-code-corner",[["path",{d:"M4 12.15V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3.35",key:"1wthlu"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"m5 16-3 3 3 3",key:"331omg"}],["path",{d:"m9 22 3-3-3-3",key:"lsp7cz"}]]);var E=r(71765),N=r(67810);let T={"files.heading":"\u6587\u4EF6","copy.idle":"\u590D\u5236\u4EE3\u7801","copy.copying":"\u590D\u5236\u4E2D\u2026","copy.copied":"\u5DF2\u590D\u5236","copy.error":"\u590D\u5236\u5931\u8D25","copy.hint":"\u590D\u5236\u5F53\u524D\u6B65\u9AA4\u4E2D {path} \u7684\u5B8C\u6574\u4EE3\u7801","copy.empty":"\u8BF7\u5148\u9009\u62E9\u4E00\u4E2A\u6587\u4EF6","copy.errorHint":"\u590D\u5236\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\u6216\u624B\u52A8\u9009\u62E9\u4EE3\u7801\u590D\u5236","run.show":"\u8FD0\u884C\uFF08\u663E\u793A\u9884\u5F55\u8F93\u51FA\uFF09","run.hide":"\u6536\u8D77\u8F93\u51FA","diff.show":"\u663E\u793A\u6539\u52A8","diff.hide":"\u53EA\u770B\u5F53\u524D","badge.new":"\u65B0\u6587\u4EF6","badge.changed":"\u5DF2\u4FEE\u6539","aria.codeActions":"\u4EE3\u7801\u64CD\u4F5C","aria.openFiles":"\u5DF2\u6253\u5F00\u7684\u6587\u4EF6","aria.closeTab":"\u5173\u95ED {path}","empty.title":"\u6CA1\u6709\u6253\u5F00\u7684\u6587\u4EF6","empty.body":"\u4ECE\u6587\u4EF6\u5217\u8868\u6253\u5F00\u4E00\u4E2A\u6587\u4EF6\uFF0C\u6216\u901A\u8FC7\u6F14\u7EC3\u6B65\u9AA4\u8FDB\u884C\u5BFC\u822A"};var k=r(99920),O=r(14529);let R=(e,t)=>null!=t&&Object.hasOwn(e,t);function S(e,t,r,n){let s=!e||!Object.is(e.stepKey,n),o=[...new Set(r)].filter(e=>R(t,e)),i=(e?.tabs||[]).filter(e=>R(t,e)),a=s?[...o,...i.filter(e=>!o.includes(e))]:i,l=s&&o[0]||(a.includes(e?.activeFile)?e.activeFile:a[0])||null;return{files:t,stepKey:n,tabs:a,activeFile:l}}var L=r(45773);let C=(0,v.A)("circle-alert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);var M=r(35404);let F="treeItem_xqPD",D="treeName_oNgA",V="codeActionButton_f4xz",I="codeActionIcon_Y_2N";function P({text:e,path:t}){let[r,n]=(0,x.useState)("idle"),s=(0,x.useRef)(null),o=(0,x.useRef)(0),i=(0,x.useRef)(!1),a="string"==typeof e;(0,x.useEffect)(()=>()=>{clearTimeout(s.current),o.current+=1},[]);let l=async()=>{if(!a||i.current)return;let t=++o.current;i.current=!0,clearTimeout(s.current),n("copying");try{if(await navigator.clipboard.writeText(e),t!==o.current)return;n("copied"),s.current=setTimeout(()=>n("idle"),2e3)}catch{if(t!==o.current)return;n("error")}finally{t===o.current&&(i.current=!1)}},c=T[`copy.${r}`],d=a?"error"===r?T["copy.errorHint"]:"idle"===r?T["copy.hint"].replace("{path}",t):c:T["copy.empty"],p="copied"===r?L.A:"error"===r?C:M.A;return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("button",{type:"button",className:(0,b.A)(V,"copied"===r&&"codeActionCopied_IhRM","error"===r&&"codeActionError_O3I0"),disabled:!a||"copying"===r,onClick:l,title:d,"aria-label":d,"aria-busy":"copying"===r,children:(0,y.jsx)(p,{className:I,"aria-hidden":"true",focusable:"false"})}),(0,y.jsx)("span",{className:"copyStatus_X_3r",role:"status","aria-live":"polite","aria-atomic":"true",children:"copied"===r?T["copy.copied"]:"error"===r?T["copy.errorHint"]:""})]})}function U(){return(U=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(null,arguments)}function B(){return(B=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(null,arguments)}function q(){return(q=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(null,arguments)}function H(){return(H=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(null,arguments)}function W(){return(W=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(null,arguments)}function z(){return(z=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(null,arguments)}function $(){return($=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(null,arguments)}function K(){return(K=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(null,arguments)}function G(){return(G=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(null,arguments)}let J=new Map([[".gitignore","git"],[".gitignore-global","git"],[".gitignore_global","git"],[".git-blame-ignore","git"],[".gitconfig","git"],[".gitattributes","git"],[".gitmodules","git"],[".gitkeep","git"],[".gitinclude","git"],["requirements.txt","python"],["pipfile","python"],[".python-version","python"],["manifest.in","python"],["pylintrc","python"],[".pylintrc","python"],["setup.cfg","python"],["pyproject.toml","gear"],[".env","gear"]]),Q=new Map([["py","python"],["python","python"],["pyi","python"],["pyw","python"],["toml","gear"],["env","gear"],["json","brackets-yellow"],["jsonc","brackets-yellow"],["json5","brackets-yellow"],["md","markdown"],["markdown","markdown"],["txt","text"]]),Y=new Set(["test","tests","spec","specs"]),Z="chevron_lDAJ",X={python:({title:e,titleId:t,...r})=>x.createElement("svg",U({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24","aria-labelledby":t},r),e?x.createElement("title",{id:t},e):null,n||(n=x.createElement("path",{fill:"#14B8A6",fillRule:"evenodd",d:"M14.622 21.322c-.6.11-1.284.174-1.999.178a12.5 12.5 0 0 1-2.179-.178c-1.136-.198-2.092-1.086-2.092-2.269v-4.156c0-1.217.93-2.217 2.092-2.217h4.178c1.418 0 2.613-1.271 2.613-2.712V7.974h1.438c1.216 0 1.926.92 2.223 2.213.401 1.735.384 2.773 0 4.435-.332 1.45-1.398 2.212-2.613 2.212h-5.752v.555h4.183v1.664c0 1.26-.322 1.942-2.092 2.269m-.176-2.837c-.532 0-.963.45-.963 1.005s.43 1.005.963 1.005.963-.45.963-1.005-.43-1.005-.963-1.005",clipRule:"evenodd"})),s||(s=x.createElement("path",{fill:"#14B8A6",fillRule:"evenodd",d:"M9.378 2.678c.6-.11 1.284-.174 1.999-.178.715-.003 1.46.053 2.179.178 1.136.198 2.092 1.086 2.092 2.269v4.156c0 1.217-.93 2.217-2.092 2.217H9.378c-1.418 0-2.613 1.271-2.613 2.712v1.994H5.327c-1.216 0-1.926-.92-2.223-2.213-.401-1.735-.384-2.773 0-4.435.332-1.45 1.397-2.213 2.613-2.213h5.752v-.554H7.286V4.947c0-1.26.322-1.942 2.092-2.269m.176 2.838c.532 0 .963-.45.963-1.005s-.43-1.006-.963-1.006-.964.45-.964 1.006c0 .555.432 1.005.964 1.005",clipRule:"evenodd"}))),git:({title:e,titleId:t,...r})=>x.createElement("svg",B({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24","aria-labelledby":t},r),e?x.createElement("title",{id:t},e):null,o||(o=x.createElement("path",{fill:"#F87171",d:"m20.661 11.198-7.86-7.859a1.16 1.16 0 0 0-1.639 0L9.53 4.972l2.07 2.07a1.376 1.376 0 0 1 1.744 1.755l1.995 1.995a1.377 1.377 0 0 1 1.425 2.278 1.38 1.38 0 0 1-2.251-1.5l-1.86-1.861-.001 4.897q.198.097.365.26a1.38 1.38 0 1 1-1.5-.3V9.623a1.379 1.379 0 0 1-.749-1.809l-2.04-2.04-5.388 5.388a1.16 1.16 0 0 0 0 1.64l7.859 7.858a1.16 1.16 0 0 0 1.64 0l7.822-7.821a1.16 1.16 0 0 0 0-1.64"}))),gear:({title:e,titleId:t,...r})=>x.createElement("svg",q({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24","aria-labelledby":t},r),e?x.createElement("title",{id:t},e):null,i||(i=x.createElement("path",{fill:"#64748B",d:"M5.939 5.37a3.763 3.763 0 0 1-2.712 4.696l-1.099.272a10.8 10.8 0 0 0 .012 3.4l1.015.244a3.763 3.763 0 0 1 2.728 4.723l-.35 1.187a10 10 0 0 0 2.792 1.734l.928-.976a3.763 3.763 0 0 1 5.454.001l.938.987a10 10 0 0 0 2.79-1.717l-.373-1.29a3.763 3.763 0 0 1 2.712-4.697l1.098-.271a10.8 10.8 0 0 0-.012-3.4l-1.014-.245a3.763 3.763 0 0 1-2.728-4.723l.35-1.186a10 10 0 0 0-2.792-1.735l-.928.976a3.76 3.76 0 0 1-5.454-.001l-.938-.987a10 10 0 0 0-2.79 1.717zM12 14.822c-1.506 0-2.727-1.263-2.727-2.822 0-1.558 1.22-2.822 2.727-2.822s2.727 1.264 2.727 2.822-1.22 2.822-2.727 2.822"}))),document:({title:e,titleId:t,...r})=>x.createElement("svg",H({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24","aria-labelledby":t},r),e?x.createElement("title",{id:t},e):null,a||(a=x.createElement("path",{stroke:"#64748B",strokeLinejoin:"round",strokeWidth:2,d:"M6 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8a1 1 0 0 0-.375-.78l-5-4A1 1 0 0 0 13 3z"})),l||(l=x.createElement("path",{stroke:"#64748B",strokeLinejoin:"round",strokeWidth:2,d:"M12 4v5h6"}))),text:({title:e,titleId:t,...r})=>x.createElement("svg",W({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24","aria-labelledby":t},r),e?x.createElement("title",{id:t},e):null,c||(c=x.createElement("rect",{width:16,height:2,x:4,y:6,fill:"#64748B",rx:1})),d||(d=x.createElement("rect",{width:12,height:2,x:4,y:11,fill:"#64748B",rx:1})),p||(p=x.createElement("rect",{width:16,height:2,x:4,y:16,fill:"#64748B",rx:1}))),markdown:({title:e,titleId:t,...r})=>x.createElement("svg",z({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24","aria-labelledby":t},r),e?x.createElement("title",{id:t},e):null,f||(f=x.createElement("path",{fill:"#60A5FA",d:"M3 15.714V8h2.323l2.322 2.836L9.968 8h2.322v7.714H9.968V11.29l-2.323 2.836-2.322-2.836v4.424zm14.516 0-3.484-3.743h2.323V8h2.322v3.97H21z"}))),"brackets-yellow":({title:e,titleId:t,...r})=>x.createElement("svg",$({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24","aria-labelledby":t},r),e?x.createElement("title",{id:t},e):null,_||(_=x.createElement("path",{fill:"#F59E0B",d:"M4.778 6.667A2.667 2.667 0 0 1 7.444 4a.889.889 0 0 1 0 1.778.89.89 0 0 0-.888.889v3.5c0 .701-.273 1.35-.73 1.833.457.483.73 1.132.73 1.832v3.501c0 .491.398.89.888.89a.889.889 0 0 1 0 1.777 2.667 2.667 0 0 1-2.666-2.667v-3.5a.89.89 0 0 0-.674-.863l-.43-.108a.889.889 0 0 1 0-1.724l.43-.108a.89.89 0 0 0 .674-.862zm14.222 0A2.667 2.667 0 0 0 16.333 4a.889.889 0 0 0 0 1.778c.491 0 .89.398.89.889v3.5c0 .701.272 1.35.729 1.833a2.66 2.66 0 0 0-.73 1.832v3.501a.89.89 0 0 1-.889.89.889.889 0 0 0 0 1.777A2.667 2.667 0 0 0 19 17.333v-3.5c0-.408.278-.764.673-.863l.431-.108a.889.889 0 0 0 0-1.724l-.43-.108a.89.89 0 0 1-.674-.862z"}))),folder:({title:e,titleId:t,...r})=>x.createElement("svg",K({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24","aria-labelledby":t},r),e?x.createElement("title",{id:t},e):null,u||(u=x.createElement("path",{stroke:"#64748B",strokeWidth:2,d:"M7.784 5H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9.875a2 2 0 0 0-2-2h-6.284a2 2 0 0 1-1.27-.455L9.054 5.455A2 2 0 0 0 7.783 5Z"}))),"folder-red-code":({title:e,titleId:t,...r})=>x.createElement("svg",G({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24","aria-labelledby":t},r),e?x.createElement("title",{id:t},e):null,m||(m=x.createElement("path",{fill:"#64748B",fillRule:"evenodd",d:"M5 4a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h5v-2H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h2.784a1 1 0 0 1 .635.227l2.393 1.966a3 3 0 0 0 1.904.682H19a1 1 0 0 1 1 1V10h2v-.125a3 3 0 0 0-3-3h-6.284a1 1 0 0 1-.635-.227L9.688 4.682A3 3 0 0 0 7.784 4z",clipRule:"evenodd"})),h||(h=x.createElement("path",{stroke:"#F87171",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M15.146 13.797 13 15.943l2.146 2.146M21.077 13.797l2.145 2.146-2.145 2.146M16.561 19.52l3.1-7.153"})))};function ee({path:e,folder:t=!1,tree:r=!1,expanded:n=!1}){let s=function(e,{folder:t=!1}={}){let r="string"==typeof e?e.replace(/\\/g,"/").replace(/\/+$/,"").split("/").pop().toLowerCase():"";if(t)return Y.has(r)?"folder-red-code":"folder";if(J.has(r))return J.get(r);if(r.startsWith(".env.")||r.endsWith(".env.example"))return"gear";let n=r.lastIndexOf("."),s=n>=0?r.slice(n+1):"";return Q.get(s)||"document"}(e,{folder:t}),o=X[s],i=(0,y.jsx)(o,{className:"icon_KnjF",width:16,height:16,"aria-hidden":"true",focusable:"false","data-symbols-icon":s});return r?(0,y.jsxs)("span",{className:"treeIcon_sP4w","aria-hidden":"true",children:[t?(0,y.jsx)("svg",{className:(0,b.A)(Z,n&&"expanded_mogG"),width:10,height:10,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",focusable:"false",children:(0,y.jsx)("path",{d:"m9 5 7 7-7 7"})}):(0,y.jsx)("span",{className:Z}),i]}):i}let et=[],er=[];function en({files:e,previousFiles:t=null,preferredFiles:r=et,stepKey:n=0,focusFile:s,focusRanges:o=er,onFileSelect:i,className:a,single:l=!1,run:c=null}){let d=(0,N.A)(),[p,f]=(0,x.useState)(()=>S(null,e,r,n)),[_,u]=(0,x.useState)(()=>new Set),[m,h]=(0,x.useState)(!0),v=(0,x.useRef)(null),[L,C]=(0,x.useState)(null),M=null!=c&&null!==L&&Object.is(L.stepKey,n),U=()=>C(M?null:{stepKey:n});p.files===e&&Object.is(p.stepKey,n)||f(S(p,e,r,n));let{activeFile:B,tabs:q}=p,H=(0,x.useMemo)(()=>(function(e){let t={children:[]};for(let r of e){let e=t,n=r.split("/");n.forEach((t,s)=>{let o=n.slice(0,s+1).join("/");if(s===n.length-1)e.children.push({type:"file",name:t,path:r});else{let r=e.children.find(e=>"folder"===e.type&&e.path===o);r||(r={type:"folder",name:t,path:o,children:[]},e.children.push(r)),e=r}})}let r=e=>[...e].sort((e,t)=>e.type===t.type?e.name.localeCompare(t.name):"folder"===e.type?-1:1).map(e=>"folder"===e.type?{...e,children:r(e.children)}:e);return r(t.children)})(Object.keys(e)),[e]),W=r=>t&&R(e,r)?R(t,r)?t[r]===e[r]?"same":"changed":"new":"same",z=W(B),$=R(e,B)?e[B]:void 0,K=(0,x.useMemo)(()=>void 0===$?[]:m&&"changed"===z?function(e,t){let r=e.replace(/\n$/,"").split("\n"),n=t.replace(/\n$/,"").split("\n"),s=r.length,o=n.length,i=Array.from({length:s+1},()=>new Uint32Array(o+1));for(let e=s-1;e>=0;e-=1)for(let t=o-1;t>=0;t-=1)i[e][t]=r[e]===n[t]?i[e+1][t+1]+1:Math.max(i[e+1][t],i[e][t+1]);let a=[],l=0,c=0,d=0;for(;l<s||c<o;)l<s&&c<o&&r[l]===n[c]?(d+=1,a.push({type:"same",text:n[c],newNo:d}),l+=1,c+=1):c<o&&(l>=s||i[l][c+1]>=i[l+1][c])?(d+=1,a.push({type:"add",text:n[c],newNo:d}),c+=1):(a.push({type:"del",text:r[l],newNo:null}),l+=1);return a}(t[B],$):$.replace(/\n$/,"").split("\n").map((e,t)=>({type:"same",text:e,newNo:t+1})),[$,t,B,z,m]),G=null==s||s===B?o:er,J=d.plain.backgroundColor;(0,x.useEffect)(()=>{let e=v.current;if(!e)return;let t=e.querySelector("[data-change]")||e.querySelector("[data-focus]"),r=t?Math.max(0,t.offsetTop-e.clientHeight/2+t.offsetHeight/2):0,n=window.matchMedia("(prefers-reduced-motion: reduce)").matches;e.scrollTo({top:r,behavior:t&&!n?"smooth":"auto"})},[n,B,m,$,s,o]);let Q=e=>{f(t=>R(t.files,e)?{...t,activeFile:e,tabs:t.tabs.includes(e)?t.tabs:[...t.tabs,e]}:t),i?.(e)},Y=(e,t)=>e.map(e=>{let r={paddingLeft:`${8+14*t}px`};if("file"===e.type){let t=W(e.path);return(0,y.jsxs)("button",{type:"button",onClick:()=>Q(e.path),"aria-pressed":e.path===B,style:r,title:e.path,className:(0,b.A)(F,e.path===B&&"treeItemActive_NYmV"),children:[(0,y.jsx)(ee,{path:e.path,tree:!0}),(0,y.jsx)("span",{className:D,children:e.name}),"same"!==t&&(0,y.jsx)("span",{className:(0,b.A)("treeDot_jdw0","new"===t&&"treeDotNew_M1tN"),title:T[`badge.${t}`]})]},e.path)}let n=_.has(e.path);return(0,y.jsxs)("div",{children:[(0,y.jsxs)("button",{type:"button","aria-expanded":!n,onClick:()=>{let t;return t=e.path,u(e=>{let r=new Set(e);return r.has(t)?r.delete(t):r.add(t),r})},style:r,className:F,title:e.path,children:[(0,y.jsx)(ee,{path:e.path,folder:!0,tree:!0,expanded:!n}),(0,y.jsx)("span",{className:D,children:e.name})]}),!n&&Y(e.children,t+1)]},e.path)});return(0,y.jsx)(k._,{output:c?.output,status:c?.status,open:M,onToggle:U,children:(0,y.jsxs)("div",{className:(0,b.A)("editor_dHJE",l&&"single_ZkL0",a),"data-project-code-viewer":"",children:[!l&&(0,y.jsxs)("aside",{className:"fileTree_hRoX","aria-label":T["files.heading"],children:[(0,y.jsx)("h4",{className:"fileTreeHeading_mHQH",children:T["files.heading"]}),(0,y.jsx)("div",{className:"treeScroll_sHHt",children:Y(H,0)})]}),(0,y.jsxs)("div",{className:"editorMain_jUUV",children:[!l&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)("label",{className:"mobilePicker_UzrQ",children:[(0,y.jsx)("span",{children:T["files.heading"]}),(0,y.jsxs)("select",{"aria-label":T["files.heading"],value:B??"",onChange:e=>Q(e.target.value),children:[(0,y.jsx)("option",{value:"",disabled:!0,children:T["copy.empty"]}),Object.keys(e).map(e=>(0,y.jsx)("option",{value:e,children:e},e))]})]}),(0,y.jsx)("div",{className:"editorToolbar_UlPB",children:(0,y.jsx)("div",{className:"tabs_VF_n","aria-label":T["aria.openFiles"],children:q.map(e=>{let t=e===B,r=W(e);return(0,y.jsxs)("div",{className:(0,b.A)("tab_qFmb",t&&"tabActive_DCji"),style:t?{backgroundColor:J}:void 0,children:[(0,y.jsxs)("button",{type:"button","aria-pressed":t,onClick:()=>Q(e),className:"tabBtn_ulEc",title:e,children:[(0,y.jsx)(ee,{path:e}),e.split("/").pop(),"same"!==r&&(0,y.jsx)("span",{className:(0,b.A)("badge_Q6dE","new"===r&&"badgeNew_H9yP"),children:T[`badge.${r}`]})]}),(0,y.jsx)("button",{type:"button","aria-label":T["aria.closeTab"].replace("{path}",e),onClick:()=>f(t=>{let r;return r=t.tabs.filter(t=>t!==e),{...t,tabs:r,activeFile:t.activeFile===e?r.at(-1)??null:t.activeFile}}),className:"tabClose_i338",children:"\xd7"})]},e)})})})]}),l&&B&&(0,y.jsxs)("div",{className:"fileHeader_vfdp",title:B,children:[(0,y.jsx)(ee,{path:B}),(0,y.jsx)("span",{className:"fileHeaderName_Hj_1",children:B})]}),(0,y.jsxs)("div",{className:"codeShell_uOkt",style:{backgroundColor:J,"--cw-editor-bg":J},children:[void 0!==$&&(0,y.jsxs)("div",{className:"codeActions_eYDy",role:"group","aria-label":T["aria.codeActions"],children:[c&&(0,y.jsx)("button",{type:"button",className:(0,b.A)(V,M&&"codeActionOn_PMcY"),"aria-expanded":M,"aria-label":M?T["run.hide"]:T["run.show"],title:M?T["run.hide"]:T["run.show"],onClick:U,children:M?(0,y.jsx)(g,{className:I,"aria-hidden":"true",focusable:"false"}):(0,y.jsx)(j.A,{className:I,"aria-hidden":"true",focusable:"false"})}),"changed"===z&&(0,y.jsx)("button",{type:"button",className:V,"aria-label":T["diff.show"],"aria-pressed":m,title:m?T["diff.hide"]:T["diff.show"],onClick:()=>h(e=>!e),children:m?(0,y.jsx)(w,{className:I,"aria-hidden":"true",focusable:"false"}):(0,y.jsx)(A,{className:I,"aria-hidden":"true",focusable:"false"})}),(0,y.jsx)(P,{text:$,path:B},JSON.stringify([n,B,$]))]}),void 0!==$?(0,y.jsx)("div",{ref:v,className:"codeScroll_KvdC",style:{backgroundColor:J},children:(0,y.jsx)(E.f4,{theme:d,code:K.map(e=>e.text).join("\n"),language:{py:"python",md:"markdown",json:"json",toml:"toml",txt:"text"}[B.split(".").pop()?.toLowerCase()]||"text",children:({tokens:e,getLineProps:t,getTokenProps:r})=>(0,y.jsx)("pre",{className:"pre_WKm3",style:{color:d.plain.color},children:e.map((e,n)=>{var s;let o=K[n]||{type:"same",newNo:n+1},i=t({line:e}),a="same"!==o.type,l=!a&&(s=o.newNo,null!=s&&G.some(([e,t=e])=>s>=e&&s<=t));return(0,y.jsxs)("div",{...i,"data-line":o.newNo??void 0,"data-change":a?o.type:void 0,"data-focus":l?"":void 0,className:(0,b.A)(i.className,"line_aw8y","add"===o.type&&"lineAdd_mE7J","del"===o.type&&"lineDel_abp0",l&&"lineFocus_Glcn"),children:[(0,y.jsx)("span",{"aria-hidden":"true",className:"lineNo_EtU5",children:o.newNo??""}),(0,y.jsx)("span",{"aria-hidden":"true",className:"lineSign_UgAc",children:"add"===o.type?"+":"del"===o.type?"\u2212":""}),(0,y.jsx)("span",{className:"lineContent_fkoz",children:e.map((e,t)=>(0,y.jsx)("span",{...r({token:e})},t))})]},n)})})})}):(0,y.jsx)("div",{className:"empty_oOnL",style:{backgroundColor:J},children:(0,y.jsxs)("div",{children:[(0,y.jsx)("p",{children:T["empty.title"]}),(0,y.jsx)("p",{className:"emptySub_bQnk",children:T["empty.body"]})]})})]}),c&&(0,y.jsx)(O.A,{})]})]})})}},17181(e,t,r){r.d(t,{A:()=>n});let n={s00:{"agent.py":`if __name__ == "__main__":
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
`}}},14529(e,t,r){r.d(t,{A:()=>d});var n=r(74848),s=r(96540),o=r(34164),i=r(99920),a=r(51507);function l(e){return(0,n.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",...e,children:[(0,n.jsx)("rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}),(0,n.jsx)("path",{d:"m7 11 2-2-2-2"}),(0,n.jsx)("path",{d:"M11 13h4"})]})}function c(e){return(0,n.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",...e,children:[(0,n.jsx)("path",{d:"M3 6h18"}),(0,n.jsx)("path",{d:"M3 12h15a3 3 0 1 1 0 6h-4"}),(0,n.jsx)("path",{d:"m16 16-2 2 2 2"}),(0,n.jsx)("path",{d:"M3 18h7"})]})}function d(){let e=(0,i.H)(),[t,r]=(0,s.useState)(!1),d=!!(e&&e.open&&null!==e.output),p=d&&"empty"!==e.status?e.output.replace(/\n$/,"").split("\n"):[],{shown:f,started:_,done:u}=(0,a.A)(p,d);return d?(0,n.jsxs)("div",{className:"run-output",role:"region","aria-label":"\u8FD0\u884C\u8F93\u51FA",children:[(0,n.jsxs)("div",{className:"run-output__row",children:[(0,n.jsx)("span",{className:"run-output__mark",title:"\u9884\u5148\u5F55\u5236\u7684\u8FD0\u884C\u7ED3\u679C\uFF0C\u4E0D\u662F\u6D4F\u89C8\u5668\u5B9E\u65F6\u6267\u884C",children:(0,n.jsx)(l,{"aria-label":"\u8F93\u51FA",role:"img"})}),(0,n.jsxs)("pre",{className:(0,o.A)("run-output__body",t&&"run-output__body--wrap"),"aria-live":"polite",children:[!_&&(0,n.jsx)("span",{className:"run-output__running",children:"\u8FD0\u884C\u4E2D\u2026"}),p.slice(0,f).map((t,r)=>(0,n.jsx)("div",{className:(0,o.A)("run-output__line",e.highlight.has(r+1)&&"run-output__line--highlight"),children:""===t?" ":t},r)),_&&!u&&(0,n.jsx)("span",{className:"run-output__cursor"})]})]}),u&&(0,n.jsxs)("div",{className:(0,o.A)("run-output__foot",`run-output__foot--${e.status.split(":")[0]}`),children:[(0,n.jsxs)("span",{children:["hang"===e.status&&(0,n.jsx)("span",{className:"run-output__cursor"}),function(e){if("hang"===e)return"\u8FDB\u7A0B\u672A\u9000\u51FA\uFF0C\u9700\u8981 Ctrl + C \u7EC8\u6B62";if("empty"===e)return"\u6CA1\u6709\u4EFB\u4F55\u8F93\u51FA\uFF0C\u8FDB\u7A0B\u9000\u51FA";let t=e.startsWith("exit:")?e.slice(5):"0";return`\u{8FDB}\u{7A0B}\u{9000}\u{51FA}\u{FF0C}\u{9000}\u{51FA}\u{7801} ${t}`}(e.status)]}),(0,n.jsx)("button",{type:"button",className:"run-output__wrap","aria-pressed":t,"aria-label":t?"\u53D6\u6D88\u81EA\u52A8\u6362\u884C":"\u81EA\u52A8\u6362\u884C",title:t?"\u53D6\u6D88\u81EA\u52A8\u6362\u884C":"\u81EA\u52A8\u6362\u884C",onClick:()=>r(!t),children:(0,n.jsx)(c,{"aria-hidden":"true"})})]})]}):null}},99920(e,t,r){r.d(t,{H:()=>a,_:()=>i});var n=r(74848),s=r(96540);let o=(0,s.createContext)(null);function i({output:e,status:t,highlight:r,blockId:a,open:l,onToggle:c,children:d}){let[p,f]=(0,s.useState)(!1),_=l??p,u=(0,s.useMemo)(()=>({output:"string"==typeof e?e:t?"":null,status:t||"exit:0",highlight:new Set((r||"").split(",").map(e=>Number(e)).filter(e=>e>0)),blockId:a||null,open:_,toggle:c??(()=>f(e=>!e))}),[e,t,r,a,_,c]);return(0,n.jsx)(o.Provider,{value:u,children:d})}function a(){return(0,s.useContext)(o)}},51507(e,t,r){r.d(t,{A:()=>s});var n=r(96540);function s(e,t){let r=e.length,[s,o]=(0,n.useState)(0),[i,a]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{if(!t){o(0),a(!1);return}if("u">typeof window&&window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches){a(!0),o(r);return}let e=window.setTimeout(()=>{a(!0),e=window.setInterval(()=>{o(t=>t+1>=r?(window.clearInterval(e),r):t+1)},80)},350);return()=>{window.clearTimeout(e),window.clearInterval(e)}},[t,r]),{shown:s,started:i,done:i&&s>=r}}},28453(e,t,r){r.d(t,{R:()=>i,x:()=>a});var n=r(96540);let s={},o=n.createContext(s);function i(e){let t=n.useContext(o);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);