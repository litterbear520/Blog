"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([["8104"],{54177(e,t,s){s.r(t),s.d(t,{metadata:()=>r,default:()=>u,frontMatter:()=>a,contentTitle:()=>o,toc:()=>d,assets:()=>c});var r=JSON.parse('{"id":"python/unittest","title":"unittest","description":"\u8FD9\u7BC7\u6587\u7AE0\u6211\u4EEC\u8BB2\u4E00\u4E0B\u6D4B\u8BD5\u3002\u6211\u53D1\u73B0\u5F88\u591A\u4EBA\u4E0D\u77E5\u9053\u5982\u4F55\u5BF9\u81EA\u5DF1\u7684\u4EE3\u7801\u5B8C\u6210\u4E00\u4E2A\u6BD4\u8F83\u57FA\u7840\u7684\u6D4B\u8BD5\uFF0C\u6216\u8005\u8BF4\uFF0C\u4ED6\u4EEC\u53EF\u80FD\u4E0D\u77E5\u9053\u4E00\u4E2A\u6BD4\u8F83\u597D\u7684\u5DE5\u7A0B\u5B9E\u8DF5\u662F\u4EC0\u4E48\u6837\u7684\u3002\u6240\u4EE5\u8FD9\u6B21\u6211\u4EEC\u63D0\u4F9B\u4E00\u4E2A\u53EF\u4EE5\u76F4\u63A5\u6284\u8FC7\u53BB\u7528\u7684\u5B9E\u8DF5\u65B9\u5F0F\uFF0C\u6765\u5E2E\u52A9\u5927\u5BB6\u5B8C\u6210\u4E00\u4E2A\u66F4\u6B63\u89C4\u7684\u7F16\u7A0B\u9879\u76EE\u3002\u5E9F\u8BDD\u4E0D\u591A\u8BF4\uFF0C\u6211\u4EEC\u76F4\u63A5\u5F00\u59CB\u3002","source":"@site/docs/python/unittest.mdx","sourceDirName":"python","slug":"/python/unittest","permalink":"/docs/python/unittest","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"queue","permalink":"/docs/python/queue"},"next":{"title":"\u5168\u5C40\u548C\u95ED\u5305\u53D8\u91CF","permalink":"/docs/python/\u5168\u5C40\u548C\u95ED\u5305\u53D8\u91CF"}}'),n=s(74848),i=s(28453),l=s(87096);let a={},o="unittest",c={},d=[{value:"\u6587\u4EF6\u7ED3\u6784",id:"\u6587\u4EF6\u7ED3\u6784",level:2},{value:"\u6D4B\u8BD5\u662F\u4EC0\u4E48",id:"\u6D4B\u8BD5\u662F\u4EC0\u4E48",level:2},{value:"\u6D4B\u8BD5\u6587\u4EF6\u600E\u4E48\u5199",id:"\u6D4B\u8BD5\u6587\u4EF6\u600E\u4E48\u5199",level:2},{value:"assertEqual \u8FD8\u662F assertTrue",id:"assertequal-\u8FD8\u662F-asserttrue",level:2},{value:"\u7528 assertRaises \u6D4B\u5F02\u5E38",id:"\u7528-assertraises-\u6D4B\u5F02\u5E38",level:2},{value:"setUp \u4E0E tearDown",id:"setup-\u4E0E-teardown",level:2},{value:"setUpClass \u4E0E tearDownClass",id:"setupclass-\u4E0E-teardownclass",level:2},{value:"\u7528 skipIf \u8DF3\u8FC7\u6D4B\u8BD5",id:"\u7528-skipif-\u8DF3\u8FC7\u6D4B\u8BD5",level:2},{value:"\u8FD0\u884C\u6307\u5B9A\u7684\u6D4B\u8BD5",id:"\u8FD0\u884C\u6307\u5B9A\u7684\u6D4B\u8BD5",level:2}];function p(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"unittest",children:"unittest"})}),"\n",(0,n.jsx)(t.p,{children:"\u8FD9\u7BC7\u6587\u7AE0\u6211\u4EEC\u8BB2\u4E00\u4E0B\u6D4B\u8BD5\u3002\u6211\u53D1\u73B0\u5F88\u591A\u4EBA\u4E0D\u77E5\u9053\u5982\u4F55\u5BF9\u81EA\u5DF1\u7684\u4EE3\u7801\u5B8C\u6210\u4E00\u4E2A\u6BD4\u8F83\u57FA\u7840\u7684\u6D4B\u8BD5\uFF0C\u6216\u8005\u8BF4\uFF0C\u4ED6\u4EEC\u53EF\u80FD\u4E0D\u77E5\u9053\u4E00\u4E2A\u6BD4\u8F83\u597D\u7684\u5DE5\u7A0B\u5B9E\u8DF5\u662F\u4EC0\u4E48\u6837\u7684\u3002\u6240\u4EE5\u8FD9\u6B21\u6211\u4EEC\u63D0\u4F9B\u4E00\u4E2A\u53EF\u4EE5\u76F4\u63A5\u6284\u8FC7\u53BB\u7528\u7684\u5B9E\u8DF5\u65B9\u5F0F\uFF0C\u6765\u5E2E\u52A9\u5927\u5BB6\u5B8C\u6210\u4E00\u4E2A\u66F4\u6B63\u89C4\u7684\u7F16\u7A0B\u9879\u76EE\u3002\u5E9F\u8BDD\u4E0D\u591A\u8BF4\uFF0C\u6211\u4EEC\u76F4\u63A5\u5F00\u59CB\u3002"}),"\n",(0,n.jsx)(t.h2,{id:"\u6587\u4EF6\u7ED3\u6784",children:"\u6587\u4EF6\u7ED3\u6784"}),"\n",(0,n.jsx)(t.p,{children:"\u9996\u5148\u8BB2\u4E00\u4E0B\u6587\u4EF6\u7ED3\u6784\u3002\u6211\u4EEC\u770B\u5DE6\u8FB9\uFF0C\u6211\u63A8\u8350\u7684\u6587\u4EF6\u7ED3\u6784\u662F\u8FD9\u6837\u7684\uFF1A\u5728\u6839\u76EE\u5F55\u4E0B\uFF0C\u53EA\u9700\u8981\u4E00\u4E2A\u5165\u53E3\u6587\u4EF6\u5373\u53EF\u3002\u90A3\u5982\u679C\u4F60\u662F\u5F00\u53D1\u4E00\u4E9B\u5305\u6216\u8005\u67D0\u4E00\u4E9B\u540E\u7AEF\u7684\u8BDD\uFF0C\u8FDE\u8FD9\u4E2A\u5165\u53E3\u6587\u4EF6\u90FD\u53EF\u4EE5\u4E0D\u8981\u3002"}),"\n",(0,n.jsxs)(t.p,{children:["\u90A3\u8FD9\u6B21\u6211\u4EEC\u7684\u4F8B\u5B50\u5462\uFF0C\u662F\u5199\u4E86\u4E00\u4E2A\u975E\u5E38\u7B80\u5355\u7684\u4E8C\u7EF4\u5411\u91CF\u7684\u8FD9\u4E48\u4E00\u4E2A\u5E93\u3002\u4F60\u6240\u6709\u7684\u6838\u5FC3\u4EE3\u7801\u90FD\u5E94\u8BE5\u653E\u5230\u4E00\u4E2A\u6587\u4EF6\u5939\u91CC\u3002\u5728\u8FD9\u4E2A\u4F8B\u5B50\u91CC\uFF0C\u6211\u4EEC\u653E\u5230 vector \u8FD9\u4E2A\u6587\u4EF6\u5939\u91CC\u3002\u6211\u4EEC\u8981\u628A\u8FD9\u4E2A\u6587\u4EF6\u5939\u53D8\u6210\u4E00\u4E2A package\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u8FD9\u4E2A\u6587\u4EF6\u5939\u91CC\u9762\u6211\u4EEC\u9700\u8981\u8FD9\u4E2A ",(0,n.jsx)(t.code,{children:"__init__.py"}),"\u3002\u8FD9\u4E2A ",(0,n.jsx)(t.code,{children:"__init__.py"})," \u91CC\u9762\u53EF\u4EE5\u653E\u4E00\u4E9B\u63A5\u53E3\uFF0C\u4E5F\u53EF\u4EE5\u538B\u6839\u4EC0\u4E48\u90FD\u6CA1\u6709\u3002\u8FD9\u4E2A vector \u6587\u4EF6\u5939\u91CC\u9762\u7684 vector.py \u5C31\u662F\u6211\u4EEC\u6838\u5FC3\u4EE3\u7801\u4FDD\u5B58\u7684\u5730\u65B9\u3002\u5F53\u7136\uFF0C\u4F60\u8FD9\u4E2A\u6587\u4EF6\u5939\u91CC\u9762\u53EF\u80FD\u6709\u5F88\u591A\u6587\u4EF6\uFF0C\u5BF9\u5427\uFF0C\u4E0D\u540C\u7684\u529F\u80FD\u3002"]}),"\n",(0,n.jsxs)(t.p,{children:["\u5728\u6839\u76EE\u5F55\u4E0B\u653E\u4E00\u4E2A\u53EB\u505A test \u7684\u6587\u4EF6\u5939\uFF0C\u8FD9\u91CC\u9762\u4E13\u95E8\u653E\u6211\u4EEC\u7684\u6D4B\u8BD5\u3002\u540C\u6837\u7684\uFF0C\u6D4B\u8BD5\u6587\u4EF6\u5939\u4E5F\u628A\u5B83\u53D8\u6210\u4E00\u4E2A package\uFF0C\u4E5F\u5C31\u662F\u91CC\u9762\u653E\u4E00\u4E2A ",(0,n.jsx)(t.code,{children:"__init__.py"}),"\u3002\u8FD9\u4E2A ",(0,n.jsx)(t.code,{children:"__init__.py"})," \u91CC\u53EF\u4EE5\u4EC0\u4E48\u90FD\u6CA1\u6709\u3002\u90A3\u8FD9\u4E2A\u6587\u4EF6\u5939\u91CC\u9762\u5176\u4ED6\u7684\u6587\u4EF6\u5C31\u90FD\u662F\u6211\u4EEC\u5199\u7684\u6D4B\u8BD5\u6587\u4EF6\u3002"]}),"\n",(0,n.jsx)(t.p,{children:"\u6211\u4EEC\u8FD9\u6B21\u7ED9\u5927\u5BB6\u8BB2\u7684\u6D4B\u8BD5\u7684\u6846\u67B6\u5462\uFF0C\u662F unittest\uFF0C\u662F Python \u81EA\u5E26\u7684\u4E00\u4E2A\u6D4B\u8BD5\u6846\u67B6\u3002\u6211\u672C\u4EBA\u662F\u975E\u5E38\u559C\u6B22\u7528\u6807\u51C6\u5E93\u7684\uFF0C\u6240\u4EE5\u4E00\u76F4\u5728\u7528 unittest\u3002\u5927\u5BB6\u5148\u628A unittest \u5B66\u660E\u767D\u4E86\uFF0C\u4EE5\u540E\u5982\u679C\u4F60\u60F3\u7528\u5176\u4ED6\u7684 framework\uFF0C\u4E5F\u5DEE\u4E0D\u591A\u3002"}),"\n",(0,n.jsxs)(t.p,{children:["\u5F53\u4F60\u50CF\u6211\u4ECB\u7ECD\u7684\u8FD9\u6837\u628A\u9879\u76EE\u6574\u7406\u597D\u4E4B\u540E\uFF0C\u4F60\u53EA\u9700\u8981\u5728\u6839\u76EE\u5F55\u4E0B\u8FD0\u884C ",(0,n.jsx)(t.code,{children:"python -m unittest"}),"\uFF0CPython \u5C31\u4F1A\u81EA\u52A8\u53BB\u5BFB\u627E\u4F60\u7684\u6D4B\u8BD5\uFF0C\u5E76\u4E14\u8FD0\u884C\u6D4B\u8BD5\u3002\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\uFF0C\u8FD9\u91CC\u5B83\u8FD0\u884C\u4E86\u4E00\u4E2A\u6D4B\u8BD5\uFF0C\u7136\u540E\u6CA1\u6709\u4EFB\u4F55\u6D4B\u8BD5 fail \u4E86\u3002"]}),"\n",(0,n.jsx)(l.A,{variant:"unittest",step:1}),"\n",(0,n.jsx)(t.h2,{id:"\u6D4B\u8BD5\u662F\u4EC0\u4E48",children:"\u6D4B\u8BD5\u662F\u4EC0\u4E48"}),"\n",(0,n.jsx)(t.p,{children:"\u6211\u4EEC\u63A5\u4E0B\u6765\u5C31\u4ECB\u7ECD\u4E00\u4E0B\u6D4B\u8BD5\u600E\u4E48\u5199\uFF0C\u7ED9\u5927\u5BB6\u4E00\u4E9B\u57FA\u7840\u7684\u77E5\u8BC6\uFF0C\u8BA9\u4F60\u53EF\u4EE5\u7ED9\u81EA\u5DF1\u7684\u9879\u76EE\u5199\u6D4B\u8BD5\u3002"}),"\n",(0,n.jsx)(t.p,{children:"\u9996\u5148\uFF0C\u6D4B\u8BD5\u662F\u4EC0\u4E48\uFF1F\u6D4B\u8BD5\u662F\u68C0\u67E5\u4F60\u7A0B\u5E8F\u7684\u8FD0\u884C\u7ED3\u679C\u662F\u4E0D\u662F\u4F60\u7684\u671F\u5F85\u7ED3\u679C\u3002\u6362\u8A00\u4E4B\uFF0C\u5728\u5199\u6D4B\u8BD5\u7684\u65F6\u5019\uFF0C\u4F60\u5FC5\u987B\u8981\u77E5\u9053\u6B63\u786E\u7B54\u6848\u3002\u5B83\u662F\u4E00\u4E2A\u5224\u5377\u5B50\u7684\u8FC7\u7A0B\uFF0C\u6240\u4EE5\u8BF4\uFF0C\u4F60\u8981\u77E5\u9053\u4F60\u7684\u4EE3\u7801\u5E94\u8BE5\u505A\u4EC0\u4E48\u3002"}),"\n",(0,n.jsx)(t.p,{children:"\u90A3\u6211\u4EEC\u6765\u770B\u4E00\u4E0B\u6211\u4EEC\u7684\u6E90\u4EE3\u7801\u3002\u6211\u4EEC\u5199\u7684\u662F\u4E00\u4E2A\u975E\u5E38\u975E\u5E38\u7B80\u5355\u7684\u4E8C\u7EF4\u5411\u91CF\u7C7B\u3002\u90A3\u5728 initialization \u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u4F20\u4E00\u4E2A x\uFF0C\u4F20\u4E00\u4E2A y\u3002\u7136\u540E\u6211\u4EEC\u505A\u4E86\u5411\u91CF\u7684\u52A0\u6CD5\u3001\u5411\u91CF\u7684\u6570\u4E58\uFF0C\u5411\u91CF\u7684\u70B9\u4E58\uFF0C\u8FD8\u6709\u4E00\u4E2A\u5411\u91CF\u7684\u6A21\u3002\u90A3\u8FD9\u4E9B\u5185\u5BB9\u90FD\u5F88\u7B80\u5355\uFF0C\u6211\u4EEC\u4E0D\u8D58\u8FF0\u554A\u3002\u6211\u4EEC\u8FD9\u7BC7\u6587\u7AE0\u7684\u6838\u5FC3\u662F\u8C08\u6D4B\u8BD5\u3002"}),"\n",(0,n.jsx)(t.h2,{id:"\u6D4B\u8BD5\u6587\u4EF6\u600E\u4E48\u5199",children:"\u6D4B\u8BD5\u6587\u4EF6\u600E\u4E48\u5199"}),"\n",(0,n.jsx)(t.p,{children:"\u597D\uFF0C\u6211\u4EEC\u770B\u56DE\u6211\u4EEC\u7684\u6D4B\u8BD5\u6587\u4EF6\u5939\u3002\u9996\u5148\uFF0C\u6BCF\u4E00\u4E2A\u6D4B\u8BD5\u6587\u4EF6\u5FC5\u987B\u8981\u662F test \u4E0B\u5212\u7EBF\u5F00\u5934\uFF0C\u5C31\u662F\u5B83\u5FC5\u987B\u5F97\u53EB test \u4E0B\u5212\u7EBF\u4EC0\u4E48\u4EC0\u4E48\u4E1C\u897F\u3002\u8FD9\u4E2A\u662F unittest \u672C\u8EAB\u7684\u89C4\u5B9A\u554A\u3002"}),"\n",(0,n.jsx)(t.p,{children:"\u90A3\u5728\u6D4B\u8BD5\u6587\u4EF6\u91CC\u5462\uFF0C\u6211\u4EEC\u8981\u5E72\u8FD9\u4E48\u51E0\u4EF6\u4E8B\u513F\u3002\u9996\u5148\uFF0C\u6211\u4EEC\u8981\u628A\u8FD9\u4E2A unittest \u7ED9 import \u8FDB\u6765\uFF0C\u56E0\u4E3A\u6211\u4EEC\u9700\u8981\u7EE7\u627F\u5B83\u7684 TestCase \u8FD9\u4E2A\u7C7B\u3002\u7B2C\u4E8C\uFF0C\u628A\u6211\u4EEC\u8981\u6D4B\u8BD5\u7684\u5185\u5BB9\u7ED9 import \u8FDB\u6765\u3002\u4E4B\u524D\u4E3A\u4EC0\u4E48\u6211\u5F3A\u8C03\u60F3\u628A\u5B83\u505A\u6210\u4E00\u4E2A package\uFF1F\u56E0\u4E3A\u8FD9\u6837\u7684\u8BDD\uFF0C\u4F60\u5728 import \u7684\u65F6\u5019\u6BD4\u8F83\u65B9\u4FBF\u3002\u4F60\u53EF\u4EE5\u76F4\u63A5\u505A from vector import vector\uFF0C\u6211\u4EEC\u5C31\u628A\u8FD9\u4E2A vector \u7C7B\u7ED9 import \u8FDB\u6765\u4E86\u3002"}),"\n",(0,n.jsx)(t.p,{children:"\u63A5\u4E0B\u6765\u5C31\u662F\u5199 test class\u3002\u8FD9\u4E2A test class \u9996\u5148\u5FC5\u987B\u8981\u7EE7\u627F\u8FD9\u4E2A unittest \u91CC\u9762\u7684 TestCase \u8FD9\u4E2A\u7C7B\u3002\u5176\u6B21\uFF0C\u4E00\u822C\u6765\u8BF4\uFF0C\u8FD9\u4E2A class \u662F test \u5F00\u5934\u6216\u8005 test \u7ED3\u5C3E\u3002\u8FD9\u662F\u4E00\u4E2A\u4E60\u60EF\u95EE\u9898\u3002"}),"\n",(0,n.jsx)(t.p,{children:"\u6BCF\u4E00\u4E2A test class \u91CC\u9762\u53EF\u4EE5\u6709\u82E5\u5E72\u4E2A test method\uFF0C\u800C\u8FD9\u4E9B test method \u5FC5\u987B\u4EE5 test \u4E0B\u5212\u7EBF\u5F00\u5934\uFF0C\u5426\u5219 unittest \u4F1A\u68C0\u6D4B\u4E0D\u5230\u3002"}),"\n",(0,n.jsx)(t.p,{children:"\u90A3\u5728\u6BCF\u4E00\u4E2A test method \u91CC\u9762\uFF0C\u6211\u4EEC\u5C31\u8981\u8FDB\u884C\u6B63\u5F0F\u7684\u6D4B\u8BD5\u4E86\u3002\u6240\u8C13\u6D4B\u8BD5\uFF0C\u5C31\u662F\u6211\u505A\u4E00\u4E2A\u6211\u5DF2\u7ECF\u77E5\u9053\u7ED3\u679C\u7684\u4E8B\u60C5\uFF0C\u7136\u540E\u9A8C\u8BC1\u5F97\u5230\u7684\u7ED3\u679C\u662F\u4E0D\u662F\u6211\u5DF2\u7ECF\u77E5\u9053\u7684\u7ED3\u679C\u3002\u6BD4\u5982\u8BF4\uFF0C\u5F53\u6211\u4EEC\u65B0\u5EFA\u4E86\u4E00\u4E2A vector\uFF0C\u7136\u540E\u628A 1\u30012 \u7ED9\u5F53\u4F5C argument \u4F20\u8FDB\u53BB\u7684\u65F6\u5019\uFF0C\u8FD9\u4E2A vector \u91CC\u9762\u7684 x \u548C y \u8FD9\u4E24\u4E2A attribute \u5E94\u8BE5\u5206\u522B\u88AB\u8D4B\u503C\u6210 1 \u548C 2\u3002"}),"\n",(0,n.jsxs)(t.p,{children:["\u800C\u5728 unittest \u91CC\u9762\uFF0C\u6709\u4E00\u7EC4\u53BB\u68C0\u9A8C\u6211\u4EEC\u5B9E\u9645\u5F97\u5230\u7684\u7ED3\u679C\uFF0C\u662F\u4E0D\u662F\u7406\u8BBA\u7ED3\u679C\u7684\u51FD\u6570\u3002\u5B83\u4EEC\u90FD\u662F self.assert \u5F00\u5934\u7684\u3002\u6BD4\u5982\u5728\u8FD9\u91CC\uFF0C\u6211\u4EEC\u5C31\u7528\u5230\u4E86 self.assertEqual\u3002\u90A3\u5982\u679C\u4F60\u6253\u5F00 ",(0,n.jsx)(t.a,{href:"https://docs.python.org/zh-cn/3/library/unittest.html#assert-methods",children:"Python unittest \u7684\u5B98\u65B9\u6587\u6863"}),"\uFF0C\u4F60\u53EF\u4EE5\u770B\u5230\uFF0C\u8FD9\u91CC\u9762\u6709\u5F88\u591A\u7684 assert \u4EC0\u4E48\u7684\u51FD\u6570\u3002\u5F53\u7136\uFF0C\u8FD9\u4E9B\u53EA\u662F\u76F8\u5BF9\u5E38\u7528\u7684\uFF0C\u8FD8\u6709\u5F88\u591A\u6CA1\u6709\u90A3\u4E48\u5E38\u7528\u7684\uFF0C\u6BD4\u5982\u8BF4\u8FD9\u4E9B\u3002"]}),"\n",(0,n.jsx)(t.p,{children:"\u90A3\u5F53\u4F60\u60F3\u5224\u65AD\u4E00\u4E2A\u7ED3\u679C\u7684\u65F6\u5019\uFF0C\u9996\u5148\u8981\u67E5\u4E00\u4E0B\uFF0Cunittest \u5B98\u65B9\u6709\u6CA1\u6709\u7ED9\u51FA\u8FD9\u79CD\u7ED3\u679C\u7684\u5224\u65AD\u65B9\u5F0F\u3002"}),"\n",(0,n.jsx)(t.h2,{id:"assertequal-\u8FD8\u662F-asserttrue",children:"assertEqual \u8FD8\u662F assertTrue"}),"\n",(0,n.jsx)(t.p,{children:"\u90A3\u4E48\uFF0C\u65E2\u7136\u5B83\u63D0\u4F9B\u4E86 assertTrue \u8FD9\u4E2A\u65B9\u5F0F\uFF0C\u4E3A\u4EC0\u4E48\u6211\u4EEC\u4E0D\u6240\u6709\u7684\u5730\u65B9\u90FD\u7528 assertTrue \u5462\uFF1F\u6BD4\u5982\u8BF4\uFF0C\u8FD9\u91CC\u6211\u4EEC\u7528 assertEqual(v.x, 0) \u548C assertTrue(v.x == 0)\uFF0C\u5B83\u4EEC\u4FE9\u662F\u7B49\u4EF7\u7684\u3002"}),"\n",(0,n.jsx)(t.p,{children:"\u90A3\u8FD9\u91CC\u6211\u4EEC\u4E4B\u6240\u4EE5\u8981\u7528 assertEqual\uFF0C\u662F\u56E0\u4E3A assertEqual \u5728 fail \u7684\u65F6\u5019\u53EF\u4EE5\u7ED9\u51FA\u66F4\u591A\u7684\u4FE1\u606F\u3002\u6211\u4EEC\u770B\uFF0C\u5728\u8FD9\u4E2A\u4F8B\u5B50\u91CC\u9762\uFF0Cv.x \u663E\u7136\u662F 1\uFF0C\u5BF9\u5427\uFF1F\u90A3\u4E48\u8FD9\u4E24\u4E2A\u4E1C\u897F\u90FD\u4F1A fail \u6389\u3002\u5982\u679C\u8FD9\u91CC\u662F assertEqual fail \u6389\uFF0C\u5B83\u4F1A\u544A\u8BC9\u4F60 1 \u4E0D\u7B49\u4E8E 0\uFF0C\u4F60\u5C31\u77E5\u9053 v.x \u662F 1 \u4E86\u3002"}),"\n",(0,n.jsx)(t.p,{children:"\u8FD9\u91CC\u6CE8\u610F\u4E00\u4E0B\uFF0C\u6BCF\u4E2A test method\uFF0C\u5F53\u5B83\u6709\u4E00\u4E2A\u5730\u65B9 fail \u7684\u65F6\u5019\uFF0C\u5B83\u5C31\u4E0D\u4F1A\u7EE7\u7EED\u5F80\u4E0B\u8FD0\u884C\u4E86\u3002"}),"\n",(0,n.jsx)(t.p,{children:"\u90A3\u5047\u8BBE\u6211\u4EEC\u7528 assertTrue \u7684\u8BDD\uFF0C\u5B83\u53EA\u4F1A\u8DDF\u4F60\u8BF4 False is not true\u3002\u6211\u4EEC\u53EA\u77E5\u9053 v.x \u4E0D\u662F 0\uFF0C\u4F46\u6211\u4EEC\u4E0D\u77E5\u9053\u5B83\u662F\u4EC0\u4E48\u3002\u6240\u4EE5\u8BF4\uFF0C\u5F53\u6211\u4EEC\u660E\u786E\u5730\u77E5\u9053\u8981\u5224\u65AD\u4EC0\u4E48\u4E1C\u897F\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u5E94\u8BE5\u5C3D\u91CF\u907F\u514D\u4F7F\u7528 assertTrue \u548C assertFalse\u3002"}),"\n",(0,n.jsx)(l.A,{variant:"unittest",step:2}),"\n",(0,n.jsx)(l.A,{variant:"unittest",step:3}),"\n",(0,n.jsx)(t.h2,{id:"\u7528-assertraises-\u6D4B\u5F02\u5E38",children:"\u7528 assertRaises \u6D4B\u5F02\u5E38"}),"\n",(0,n.jsxs)(t.p,{children:["\u90A3\u8FD9\u91CC\u6211\u4EEC\u8981\u5355\u72EC\u62FF\u51FA\u6765\u8BF4\u4E00\u4E0B\uFF0C\u662F\u8FD9\u4E2A assertRaises\u3002\u8FD9\u91CC\u6BD4\u5982\u8BF4\uFF0C\u6211\u4EEC\u628A\u8FD9\u4E2A vector ",(0,n.jsx)(t.code,{children:"__init__"})," \u51FD\u6570\u6539\u4E00\u4E0B\u3002\u6211\u4EEC\u9996\u5148\u8981\u786E\u8BA4\u8FD9\u4E2A x\u3001y\uFF0C\u5FC5\u987B\u8981\u662F\u6570\u624D\u53EF\u4EE5\u3002\u5426\u5219\u7684\u8BDD\uFF0C\u6211\u4EEC raise \u4E00\u4E2A ValueError\u3002"]}),"\n",(0,n.jsxs)(t.p,{children:["\u8FD9\u4E2A\u65F6\u5019\uFF0C\u6211\u4EEC\u60F3\u6D4B\u8BD5\u6211\u4EEC\u8FD9\u4E2A ",(0,n.jsx)(t.code,{children:"__init__"})," \u51FD\u6570\u662F\u4E0D\u662F\u6210\u529F\u5730 raise \u4E86\u8FD9\u4E2A error\u3002\u90A3\u6211\u4EEC\u7684\u5199\u6CD5\u5462\uFF0C\u5C31\u662F with self.assertRaises\uFF0C\u7136\u540E\u628A\u8FD9\u4E2A exception \u653E\u8FDB\u53BB\uFF0C\u5728\u8FD9\u4E2A with \u91CC\u9762\u53BB\u505A raise \u8FD9\u4E2A exception \u7684\u4E8B\u3002\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\u53F3\u8FB9\uFF0C\u6211\u4EEC\u8FD0\u884C\u4E00\u4E0B\u8FD9\u4E2A unittest\uFF0C\u5B83\u5C31 pass \u4E86\uFF0C\u56E0\u4E3A\u6211\u4EEC\u4F20\u8FDB\u53BB\u8FD9\u4E24\u4E2A\u503C\u4E0D\u662F\u6B63\u5E38\u7684 value\u3002\u76F8\u53CD\u7684\uFF0C\u5982\u679C\u6211\u4EEC\u4F20\u8FDB\u53BB\u7684\u503C\u662F\u5408\u6CD5\u503C\u7684\u8BDD\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u6D4B\u8BD5\u5C31\u4F1A fail\u3002\u5B83\u5C31\u4F1A\u5199 ValueError not raised\u3002"]}),"\n",(0,n.jsx)(l.A,{variant:"unittest",step:4}),"\n",(0,n.jsx)(l.A,{variant:"unittest",step:5}),"\n",(0,n.jsx)(t.h2,{id:"setup-\u4E0E-teardown",children:"setUp \u4E0E tearDown"}),"\n",(0,n.jsx)(t.p,{children:"\u597D\uFF0C\u90A3\u63A5\u4E0B\u6765\u6211\u4EEC\u6765\u4ECB\u7ECD\u51E0\u4E2A\u975E\u5E38\u5E38\u7528\u7684 unittest \u7684\u4E00\u4E9B feature\u3002\u9996\u5148\uFF0C\u6211\u4EEC\u6709\u53EF\u80FD\u4F1A\u5728\u8FD0\u884C\u6BCF\u4E00\u4E2A test method \u4E4B\u524D\u6216\u8005\u4E4B\u540E\u505A\u4E00\u4E9B\u4E8B\u513F\u3002"}),"\n",(0,n.jsx)(t.p,{children:"\u6211\u4EEC\u4E3E\u4E2A\u6700\u7B80\u5355\u7684\u4F8B\u5B50\u3002\u5047\u8BBE\u6211\u4EEC\u5728\u8FD0\u884C\u6BCF\u4E00\u4E2A\u6D4B\u8BD5\u4E4B\u524D\u3001\u4E4B\u540E\uFF0C\u90FD\u8981\u6253\u5370\u8FD9\u4E2A\u201C\u6D4B\u8BD5\u5F00\u59CB\u4E86\u201D\uFF0C\u201C\u6D4B\u8BD5\u7ED3\u675F\u4E86\u201D\u3002\u90A3\u6211\u4EEC\u53EF\u4EE5\u5728\u8FD9\u4E2A test class \u4E4B\u5185\uFF0C\u901A\u8FC7\u5B9A\u4E49 setUp \u51FD\u6570\u548C tearDown \u51FD\u6570\u6765\u5B8C\u6210\u3002\u6211\u4EEC\u770B\uFF0C\u5728 setUp \u51FD\u6570\u91CC\u9762\uFF0C\u6211\u4EEC\u6253\u5370\u4E86\u4E00\u4E2A start\uFF0C\u7136\u540E\u5728 tearDown \u51FD\u6570\u91CC\u9762\uFF0C\u6211\u4EEC\u6253\u5370\u4E86\u4E00\u4E2A end\u3002\u4E8E\u662F\u6211\u4EEC\u5728\u8FD0\u884C unittest \u7684\u65F6\u5019\uFF0C\u8F93\u51FA\u91CC\u9762\u5C31\u4F1A\u6709\u4E00\u4E2A start \u8DDF\u4E00\u4E2A end\u3002\u90A3\u5982\u679C\u6211\u4EEC\u53C8\u589E\u52A0\u4E86\u4E00\u4E2A test method\uFF0C\u5C31\u53EF\u4EE5\u770B\u5230 start \u8DDF end \u88AB\u6253\u5370\u4E86\u4E24\u6B21\u3002"}),"\n",(0,n.jsx)(l.A,{variant:"unittest",step:6}),"\n",(0,n.jsx)(l.A,{variant:"unittest",step:7}),"\n",(0,n.jsx)(t.h2,{id:"setupclass-\u4E0E-teardownclass",children:"setUpClass \u4E0E tearDownClass"}),"\n",(0,n.jsx)(t.p,{children:"\u90A3\u5982\u679C\u6211\u4EEC\u60F3\u6BCF\u4E00\u4E2A test class \u8FD0\u884C\u4E4B\u524D\u548C\u7ED3\u675F\u4E4B\u540E\u505A\u4E00\u4E9B\u4E8B\u513F\u7684\u8BDD\uFF0C\u6211\u4EEC\u7528\u5230\u7684\u51FD\u6570\u5C31\u662F setUpClass \u8DDF tearDownClass\u3002\u6CE8\u610F\uFF0C\u8FD9\u4E24\u4E2A\u4E1C\u897F\u5FC5\u987B\u8981\u7528 classmethod \u8FD9\u4E2A\u88C5\u9970\u5668\u88C5\u9970\u4E00\u4E0B\u3002"}),"\n",(0,n.jsx)(l.A,{variant:"unittest",step:8}),"\n",(0,n.jsx)(t.h2,{id:"\u7528-skipif-\u8DF3\u8FC7\u6D4B\u8BD5",children:"\u7528 skipIf \u8DF3\u8FC7\u6D4B\u8BD5"}),"\n",(0,n.jsx)(t.p,{children:"\u90A3\u8FD8\u6709\u4E00\u4E2A\u5F88\u5E38\u89C1\u7684\u9700\u6C42\uFF0C\u5C31\u662F\u6211\u5E0C\u671B\u6211\u7684\u6D4B\u8BD5\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\u4E0D\u8FD0\u884C\u3002\u8FD9\u65F6\u5019\u6211\u4EEC\u5C31\u8981\u7528\u5230\u4E00\u4E2A decorator\uFF0C\u662F unittest.skipIf\u3002\u6211\u4EEC\u770B\uFF0C\u8FD9\u91CC\u8FD9\u4E2A decorator take \u4E86\u4E24\u4E2A argument\u3002\u7B2C\u4E00\u4E2A\u662F\u4E00\u4E2A boolean\uFF0C\u5728\u8FD9\u4E2A boolean evaluate \u6210 True \u7684\u65F6\u5019\uFF0C\u8FD9\u4E2A\u6D4B\u8BD5\u5C31\u4E0D\u8FD0\u884C\u3002\u90A3\u7B2C\u4E8C\u4E2A\u5462\uFF0C\u662F\u4E00\u4E2A message\u3002"}),"\n",(0,n.jsx)(t.p,{children:"\u5728\u8FD9\u4E2A\u4F8B\u5B50\u91CC\u9762\uFF0C\u6211\u6D4B\u8BD5\u4E86\u4E00\u4E0B\uFF0C\u5982\u679C\u6211 sys.platform \u662F win32 \u7684\u8BDD\uFF0C\u5C31\u4E0D\u8FD0\u884C\u8FD9\u4E2A\u6D4B\u8BD5\uFF0C\u4E5F\u5C31\u662F\u8FD9\u4E2A\u6D4B\u8BD5\u4E0D\u5728 Windows \u4E0A\u8FD0\u884C\u3002"}),"\n",(0,n.jsx)(t.p,{children:"\u90A3\u8FD8\u6709\u4E00\u4E2A\u6BD4\u8F83\u5E38\u89C1\u7684\u6761\u4EF6\u5462\uFF0C\u5C31\u662F version_info\uFF0C\u5C31\u662F\u8FD9\u4E2A Python \u7684\u7248\u672C\u3002\u6BD4\u5982\u8FD9\u91CC\u6211\u5199\u7684 sys.version_info \u5C0F\u4E8E 3.7\uFF0C\u5C31\u662F\u8BF4\u5B83\u53EA\u652F\u6301 3.7 \u53CA\u4EE5\u4E0A\u7684\u7248\u672C\u3002"}),"\n",(0,n.jsx)(l.A,{variant:"unittest",step:9}),"\n",(0,n.jsx)(t.h2,{id:"\u8FD0\u884C\u6307\u5B9A\u7684\u6D4B\u8BD5",children:"\u8FD0\u884C\u6307\u5B9A\u7684\u6D4B\u8BD5"}),"\n",(0,n.jsx)(t.p,{children:"\u597D\uFF0C\u90A3\u6700\u540E\u5462\uFF0C\u6211\u4EEC\u4ECB\u7ECD\u4E00\u4E0B\u600E\u4E48\u8FD0\u884C\u6307\u5B9A\u7684\u6D4B\u8BD5\u3002\u6211\u4EEC\u73B0\u5728\u6240\u6709\u7684\u6D4B\u8BD5\u88AB\u5206\u6210\u4E86\u4E09\u7EA7\u3002\u7B2C\u4E00\u4E2A\u5462\uFF0C\u662F module level\uFF0C\u4E5F\u5C31\u662F\u67D0\u4E2A\u6587\u4EF6\uFF0C\u6BD4\u5982\u8BF4 test_vector.py\u3002\u5728\u4E00\u4E2A\u6587\u4EF6\u91CC\u9762\uFF0C\u6211\u4EEC\u53EF\u80FD\u6709\u82E5\u5E72\u4E2A test class\uFF0C\u6BD4\u5982\u8BF4\u8FD9\u4E2A test vector class\u3002\u5728\u6BCF\u4E00\u4E2A test class \u91CC\u9762\uFF0C\u6211\u4EEC\u53EF\u80FD\u6709\u82E5\u5E72\u4E2A test method\uFF0C\u6BD4\u5982\u8BF4\u6211\u4EEC\u73B0\u5728\u7684 test_init \u8DDF test_add\u3002"}),"\n",(0,n.jsx)(t.p,{children:"\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u63A7\u5236 unittest command line \u7684 argument\uFF0C\u6765\u544A\u8BC9 unittest \u8FD0\u884C\u54EA\u4E9B test\u3002\u6BD4\u5982\u5728\u8FD9\u91CC\uFF0C\u6211\u4EEC\u8FD0\u884C\u7684\u662F\uFF0Ctests \u8FD9\u4E2A\u6587\u4EF6\u5939\u4E0B\u7684 test_vector \u8FD9\u4E2A module\uFF0C\u91CC\u9762\u7684 test vector \u8FD9\u4E2A class \u91CC\u9762\u7684 test_add \u8FD9\u4E2A method\u3002\u53EF\u4EE5\u770B\u5230\uFF0C\u5B83\u53EA\u8FD0\u884C\u4E86\u4E00\u4E2A test\u3002"}),"\n",(0,n.jsx)(t.p,{children:"\u90A3\u5982\u679C\u6211\u4EEC\u628A\u6761\u4EF6\u653E\u5BBD\u4E00\u4E9B\uFF0C\u6211\u4EEC\u8FD0\u884C test \u8FD9\u4E2A\u6587\u4EF6\u5939\u91CC\u9762\u7684 test_vector \u8FD9\u4E2A file\uFF0C\u5B83\u5C31\u4F1A\u8FD0\u884C\u4E24\u4E2A test \u4E86\u3002"}),"\n",(0,n.jsx)(l.A,{variant:"unittest",step:10,nav:!0}),"\n",(0,n.jsx)(t.p,{children:"\u6211\u4EEC\u4ECA\u5929\u8BB2\u7684\u662F unittest \u7684\u4E00\u4E9B\u6700\u6700\u57FA\u7840\u7684\u529F\u80FD\uFF0C\u4F46\u662F\u5C31\u662F\u8FD9\u4E9B\u6700\u57FA\u7840\u7684\u529F\u80FD\uFF0C\u5DF2\u7ECF\u6DB5\u76D6\u4E86\u81F3\u5C11 90% \u5230 95% \u7684\u4F7F\u7528\u60C5\u51B5\u4E86\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u5BF9\u4E8E\u4F60\u81EA\u5DF1\u7684\u9879\u76EE\uFF0C\u8FD9\u4E00\u5957\u6D41\u7A0B\u5DF2\u7ECF\u57FA\u672C\u8DB3\u591F\u7528\u4E86\u3002"}),"\n",(0,n.jsx)(t.p,{children:"\u4F60\u5E94\u8BE5\u53EF\u4EE5\u611F\u53D7\u5230\uFF0C\u7ED9\u81EA\u5DF1\u7684\u9879\u76EE\u5199\u6D4B\u8BD5\uFF0C\u5176\u5B9E\u4E0D\u662F\u4E00\u4E2A\u975E\u5E38\u8D39\u52B2\u7684\u4E8B\u3002\u5B83\u7684 overhead \u8FD8\u662F\u633A\u4F4E\u7684\u3002"}),"\n",(0,n.jsx)(t.p,{children:"\u597D\uFF0C\u90A3\u8FD9\u7BC7\u6587\u7AE0\u5C31\u5230\u8FD9\u91CC\u3002\u5E0C\u671B\u5BF9\u5927\u5BB6\u6709\u6240\u5E2E\u52A9\u3002"})]})}function u(e={}){let{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},83573(e,t,s){s.d(t,{A:()=>o});var r=s(96540);let n=(...e)=>e.filter((e,t,s)=>!!e&&""!==e.trim()&&s.indexOf(e)===t).join(" ").trim(),i=e=>{let t=e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,s)=>s?s.toUpperCase():t.toLowerCase());return t.charAt(0).toUpperCase()+t.slice(1)};var l={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let a=(0,r.forwardRef)(({color:e="currentColor",size:t=24,strokeWidth:s=2,absoluteStrokeWidth:i,className:a="",children:o,iconNode:c,...d},p)=>(0,r.createElement)("svg",{ref:p,...l,width:t,height:t,stroke:e,strokeWidth:i?24*Number(s)/Number(t):s,className:n("lucide",a),...!o&&!(e=>{for(let t in e)if(t.startsWith("aria-")||"role"===t||"title"===t)return!0;return!1})(d)&&{"aria-hidden":"true"},...d},[...c.map(([e,t])=>(0,r.createElement)(e,t)),...Array.isArray(o)?o:[o]])),o=(e,t)=>{let s=(0,r.forwardRef)(({className:s,...l},o)=>(0,r.createElement)(a,{ref:o,iconNode:t,className:n(`lucide-${i(e).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,s),...l}));return s.displayName=i(e),s}},45773(e,t,s){s.d(t,{A:()=>r});let r=(0,s(83573).A)("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]])},35404(e,t,s){s.d(t,{A:()=>r});let r=(0,s(83573).A)("copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]])},67810(e,t,s){s.d(t,{A:()=>i});var r=s(83941),n=s(61022);function i(){let{prism:e}=(0,n.p)(),{colorMode:t}=(0,r.G)(),s=e.theme,i=e.darkTheme||s;return"dark"===t?i:s}},87096(e,t,s){s.d(t,{A:()=>k});var r=s(74848),n=s(96540),i=s(34164),l=s(67810);let a=[{title:"\u642D\u597D\u9879\u76EE\u9AA8\u67B6",body:["\u6838\u5FC3\u4EE3\u7801\u653E\u8FDB `vector/` \u5305\uFF0C\u6D4B\u8BD5\u653E\u8FDB `tests/` \u5305\uFF0C\u4E24\u4E2A\u6587\u4EF6\u5939\u90FD\u6709 `__init__.py`\uFF0C\u6839\u76EE\u5F55\u53EA\u7559\u4E00\u4E2A\u5165\u53E3\u6587\u4EF6\u3002","\u5728\u6839\u76EE\u5F55\u8FD0\u884C `python -m unittest`\uFF0Cunittest \u4F1A\u81EA\u52A8\u627E\u5230 `tests/test_vector.py` \u91CC\u7684 `test_init` \u5E76\u8FD0\u884C\u3002\u70B9\u5DE6\u4FA7\u6587\u4EF6\u6811\u53EF\u4EE5\u770B\u6BCF\u4E2A\u6587\u4EF6\u3002"],file:"tests/test_vector.py",files:{"examply.py":"",".gitignore":`# Python-generated files
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
`}]}];var o=s(17181);let c=[{title:"\u7B2C\u4E00\u6B21 API \u8C03\u7528",body:["\u6211\u4EEC\u5148\u5199\u4E00\u4E2A\u6700\u7B80\u5355\u7684\u811A\u672C\uFF1A\u7528 `Anthropic()` \u521B\u5EFA\u5BA2\u6237\u7AEF\uFF0C\u8C03\u7528 `messages.create()` \u53D1\u9001\u4E00\u53E5\u7CFB\u7EDF\u63D0\u793A\u8BCD\u548C\u4E00\u6761\u7528\u6237\u6D88\u606F\uFF0C\u7136\u540E\u628A\u56DE\u590D\u91CC\u7684 text \u5757\u6253\u5370\u51FA\u6765\u3002\u8FD9\u91CC\u6CA1\u6709\u5DE5\u5177\uFF0C\u4E5F\u6CA1\u6709\u5FAA\u73AF\uFF0C\u6A21\u578B\u53EA\u80FD\u804A\u5929\u3002","\u8FD9\u4E2A\u811A\u672C\u8D70\u7684\u662F DeepSeek \u7684 Anthropic \u517C\u5BB9\u63A5\u53E3\uFF0C\u6240\u4EE5 `base_url` \u548C `model` \u586B\u7684\u662F DeepSeek \u7684\u503C\u3002\u5982\u679C\u6362\u56DE\u5B98\u65B9\u63A5\u53E3\uFF0C\u53EA\u9700\u8981\u5220\u6389 `base_url` \u5E76\u6539\u6A21\u578B\u540D\u3002"],file:"agent.py",files:{"agent.py":o.A.s00["agent.py"]}},{title:"\u52A0\u5165 search_products \u5DE5\u5177",body:["\u8FD9\u4E00\u6B65\u4E00\u6B21\u52A0\u5165\u4E86\u56DB\u6837\u4E1C\u897F\uFF1A\u5047\u5546\u54C1\u5217\u8868\u3001\u5DE5\u5177 schema\u3001\u641C\u7D22\u51FD\u6570\u548C\u5BF9\u8BDD\u5FAA\u73AF\u3002\u7EFF\u5E95\u7684\u884C\u662F\u76F8\u5BF9\u4E0A\u4E00\u6B65\u65B0\u589E\u7684\u5185\u5BB9\uFF0C\u53F3\u4E0A\u89D2\u53EF\u4EE5\u5207\u6362\u5230\u201C\u53EA\u770B\u5F53\u524D\u201D\u67E5\u770B\u5B8C\u6574\u6587\u4EF6\u3002","\u63A5\u4E0B\u6765\u7684\u4E09\u6B65\uFF0C\u6211\u4EEC\u628A\u8FD9\u56DB\u6837\u4E1C\u897F\u62C6\u5F00\u9010\u6BB5\u6765\u770B\u3002"],file:"agent.py",files:{"agent.py":o.A.s01["agent.py"]}},{title:"\u5DE5\u5177 schema \u5C31\u662F\u7ED9\u6A21\u578B\u7684\u8BF4\u660E\u4E66",body:["`description` \u4E0D\u662F\u6CE8\u91CA\uFF0C\u800C\u662F\u7ED9\u6A21\u578B\u7684\u4F7F\u7528\u8BF4\u660E\uFF1A\u4EC0\u4E48\u65F6\u5019\u8BE5\u641C\u3001\u600E\u4E48\u641C\u3001\u987E\u5BA2\u63D0\u5230\u591A\u4E2A\u5546\u54C1\u65F6\u8981\u5206\u5F00\u641C\u3002`input_schema` \u91CC\u6BCF\u4E2A\u5B57\u6BB5\u7684 description \u4E5F\u662F\u540C\u6837\u7684\u9053\u7406\u3002","\u6A21\u578B\u53EA\u80FD\u770B\u5230\u8FD9\u6BB5\u6587\u5B57\uFF0C\u770B\u4E0D\u5230\u51FD\u6570\u4F53\u3002\u56E0\u6B64\u51FD\u6570\u5199\u5F97\u518D\u597D\uFF0C\u5982\u679C description \u6CA1\u6709\u8BF4\u6E05\u695A\uFF0C\u6A21\u578B\u7167\u6837\u4E0D\u4F1A\u7528\uFF0C\u6216\u8005\u7528\u9519\u3002"],file:"agent.py",lines:[[49,72]]},{title:"\u641C\u7D22\u51FD\u6570\u4E0E\u5206\u53D1\u8868",body:["\u641C\u7D22\u51FD\u6570\u53EA\u505A\u5173\u952E\u8BCD\u5339\u914D\uFF0C\u5E76\u8FD4\u56DE JSON \u5B57\u7B26\u4E32\u3002\u8FD9\u662F\u56E0\u4E3A\u5DE5\u5177\u7ED3\u679C\u6700\u7EC8\u8981\u4F5C\u4E3A\u6587\u672C\u653E\u8FDB messages\uFF0C\u6240\u4EE5\u6211\u4EEC\u5728\u8FD9\u91CC\u76F4\u63A5\u5E8F\u5217\u5316\u3002","`TOOL_MAP` \u628A\u5DE5\u5177\u540D\u6620\u5C04\u5230\u5BF9\u5E94\u7684\u51FD\u6570\u3002\u4EE5\u540E\u52A0\u65B0\u5DE5\u5177\u65F6\uFF0C\u53EA\u9700\u8981\u5F80\u8FD9\u5F20\u8868\u91CC\u6DFB\u4E00\u884C\uFF0C\u5FAA\u73AF\u672C\u8EAB\u4E0D\u7528\u6539\u52A8\u3002"],file:"agent.py",lines:[[75,87]]},{title:"\u4E24\u5C42 while",body:["\u5916\u5C42 `while` \u8D1F\u8D23\u7B49\u5F85\u7528\u6237\u8F93\u5165\uFF0C\u9047\u5230\u7A7A\u8F93\u5165\u5C31\u9000\u51FA\u3002\u5185\u5C42 `while` \u624D\u662F agent \u5FAA\u73AF\u7684\u672C\u4F53\uFF1A\u8C03\u7528\u6A21\u578B\uFF0C\u628A assistant \u7684\u56DE\u590D\u6574\u4E2A\u8FFD\u52A0\u8FDB messages\uFF1B\u5982\u679C `stop_reason` \u4E0D\u662F `tool_use` \u5C31\u8DF3\u51FA\uFF1B\u5426\u5219\u6267\u884C\u6BCF\u4E00\u4E2A tool_use \u5757\uFF0C\u628A `tool_result` \u6253\u5305\u6210\u4E00\u6761 user \u6D88\u606F\u8FFD\u52A0\u8FDB\u53BB\uFF0C\u7136\u540E\u518D\u5FAA\u73AF\u4E00\u6B21\u3002","\u6709\u4E00\u4E2A\u7EC6\u8282\u9700\u8981\u6CE8\u610F\uFF1Aassistant \u7684 `response.content` \u8981\u539F\u6837\u8FFD\u52A0\uFF0C\u5305\u62EC\u5176\u4E2D\u7684 tool_use \u5757\uFF1B\u4E0B\u4E00\u6761 user \u6D88\u606F\u91CC\u7684 `tool_use_id` \u5FC5\u987B\u4E0E\u4E4B\u5BF9\u5E94\uFF0C\u6A21\u578B\u624D\u77E5\u9053\u54EA\u4E2A\u7ED3\u679C\u5C5E\u4E8E\u54EA\u6B21\u8C03\u7528\u3002"],file:"agent.py",lines:[[102,139]]}],d="\u8FD0\u884C",p="\u6536\u8D77",u={unittest:{steps:a},commerce:{steps:c}};var h=s(51507),f=s(67564);let m="btn_JmFc",v="btnPrimary_x2Yk",y="termIcon_Zbcm";function x(e,t){return e.replace(/\{(\w+)\}/g,(e,s)=>void 0!==t[s]?String(t[s]):`{${s}}`)}function _({text:e}){return e.split(/(`[^`]+`)/g).map((e,t)=>e.startsWith("`")&&e.endsWith("`")&&e.length>=2?(0,r.jsx)("code",{className:"inlineCode_AI70",children:e.slice(1,-1)},t):(0,r.jsx)(n.Fragment,{children:e},t))}function g(e){return(0,r.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",...e,children:(0,r.jsx)("polygon",{points:"6 3 20 12 6 21 6 3"})})}function j(e){return(0,r.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",...e,children:[(0,r.jsx)("rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}),(0,r.jsx)("path",{d:"m7 11 2-2-2-2"}),(0,r.jsx)("path",{d:"M11 13h4"})]})}function w(e){return(0,r.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",...e,children:(0,r.jsx)("rect",{x:"4",y:"4",width:"16",height:"16",rx:"2"})})}function b({run:e}){let t=(0,n.useMemo)(()=>e.output.replace(/\n$/,"").split("\n"),[e.output]),{shown:s,started:l,done:a}=(0,h.A)(t,!0);return(0,r.jsxs)("div",{className:"termOutput_aJer","aria-live":"polite",children:[(0,r.jsxs)("div",{className:"termOutputRow_eFC7",children:[(0,r.jsx)("span",{className:"termMark_yyoX",title:"\u9884\u5148\u5F55\u5236\u7684\u8FD0\u884C\u7ED3\u679C\uFF0C\u4E0D\u662F\u6D4F\u89C8\u5668\u5B9E\u65F6\u6267\u884C",children:(0,r.jsx)(j,{className:"termMarkIcon_o1H5","aria-label":"\u7EC8\u7AEF",role:"img"})}),(0,r.jsxs)("div",{className:"termOutputBody_dl5T",children:[!l&&(0,r.jsx)("div",{className:"termRunning_L5SW",children:"\u8FD0\u884C\u4E2D\u2026"}),t.slice(0,s).map((e,t)=>(0,r.jsx)("div",{className:(0,i.A)("run-output__line","termLine_seW0"),children:""===e?" ":e},t)),l&&!a&&(0,r.jsx)("span",{className:"run-output__cursor"})]})]}),a&&(0,r.jsx)("div",{className:(0,i.A)("termFoot_BTl4",0!==e.exit&&"termFootFail_H1CC"),children:x("\u8FDB\u7A0B\u9000\u51FA\uFF0C\u9000\u51FA\u7801 {code}",{code:e.exit})})]})}function k({variant:e,step:t=1,nav:s=!1}){let n=u[e];if(!n)throw Error(`CodeWalkthrough: unknown variant "${e}"`);return(0,r.jsx)(A,{data:n,initialStep:t,nav:s},e)}function A({data:e,initialStep:t,nav:s}){let a,{steps:o}=e,c=(0,l.A)(),u=(0,n.useMemo)(()=>(function(e){let t=[],s={};for(let r of e){for(let[e,t]of(s={...s},Object.entries(r.files||{})))null===t?delete s[e]:s[e]=t;t.push(s)}return t})(o),[o]),[h,j]=(0,n.useState)(()=>Math.min(Math.max(t-1,0),o.length-1)),[k,E]=(0,n.useState)(null),N=o[h],C=u[h],V=h>0?u[h-1]:null,T=c.plain.backgroundColor,O=N.runs||[],R=e=>{o[e]&&(j(e),E(null))};return(0,r.jsxs)("div",{className:"root_lC3A",children:[(0,r.jsxs)("div",{className:"stepsPanel_A8J6",children:[(0,r.jsxs)("div",{className:"stepHead_rWEC",children:[(0,r.jsx)("span",{className:"stepTitle_eRCc",children:x("\u7B2C {n} \u6B65 \xb7 {title}",{n:h+1,title:N.title})}),(0,r.jsx)("span",{className:"stepCounter_d1xs",children:x("{n} / {total}",{n:h+1,total:o.length})})]}),(0,r.jsx)("div",{className:"stepBody_xfZr",children:N.body.map((e,t)=>(0,r.jsx)("p",{children:(0,r.jsx)(_,{text:e})},t))}),s&&(0,r.jsxs)("div",{className:"navButtons_ENqt",children:[(0,r.jsx)("button",{type:"button",disabled:0===h,onClick:()=>R(h-1),className:(0,i.A)(m,v),children:"\u4E0A\u4E00\u6B65"}),(0,r.jsx)("button",{type:"button",disabled:h===o.length-1,onClick:()=>R(h+1),className:(0,i.A)(m,v),children:"\u4E0B\u4E00\u6B65"})]})]}),(0,r.jsx)(f.A,{files:C,previousFiles:V,stepKey:h,preferredFiles:(a=Object.keys(N.files||{}).filter(e=>Object.hasOwn(C,e)),(N.file?[N.file,...a.filter(e=>e!==N.file)]:a).filter(e=>Object.hasOwn(C,e))),focusFile:N.file,focusRanges:N.lines}),O.length>0&&(0,r.jsx)("div",{className:"terminal_x6YH",style:{backgroundColor:T,color:c.plain.color},children:O.map((e,t)=>{let s=k===t;return(0,r.jsxs)("div",{className:"termRun_pPQl",children:[(0,r.jsxs)("div",{className:"termPrompt__Qbi",children:[(0,r.jsx)("span",{className:"termDollar_FMaj","aria-hidden":"true",children:"$"}),(0,r.jsx)("code",{className:"termCmd_KH0y",children:e.cmd}),(0,r.jsx)("button",{type:"button","aria-expanded":s,"aria-label":s?p:d,title:s?p:d,onClick:()=>E(s?null:t),className:(0,i.A)("termBtn_CC8E",s&&"termBtnOpen_rzSH"),children:s?(0,r.jsx)(w,{className:y}):(0,r.jsx)(g,{className:y})})]}),s&&(0,r.jsx)(b,{run:e})]},`${h}-${t}`)})})]})}},67564(e,t,s){s.d(t,{A:()=>X});var r,n,i,l,a,o,c,d,p,u,h,f,m,v,y=s(74848),x=s(96540),_=s(34164),g=s(83573);let j=(0,g.A)("file-diff",[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M9 10h6",key:"9gxzsh"}],["path",{d:"M12 13V7",key:"h0r20n"}],["path",{d:"M9 17h6",key:"r8uit2"}]]),w=(0,g.A)("file-code-corner",[["path",{d:"M4 12.15V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3.35",key:"1wthlu"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"m5 16-3 3 3 3",key:"331omg"}],["path",{d:"m9 22 3-3-3-3",key:"lsp7cz"}]]);var b=s(71765),k=s(67810);let A={"files.heading":"\u6587\u4EF6","copy.idle":"\u590D\u5236\u4EE3\u7801","copy.copying":"\u590D\u5236\u4E2D\u2026","copy.copied":"\u5DF2\u590D\u5236","copy.error":"\u590D\u5236\u5931\u8D25","copy.hint":"\u590D\u5236\u5F53\u524D\u6B65\u9AA4\u4E2D {path} \u7684\u5B8C\u6574\u4EE3\u7801","copy.empty":"\u8BF7\u5148\u9009\u62E9\u4E00\u4E2A\u6587\u4EF6","copy.errorHint":"\u590D\u5236\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\u6216\u624B\u52A8\u9009\u62E9\u4EE3\u7801\u590D\u5236","diff.show":"\u663E\u793A\u6539\u52A8","diff.hide":"\u53EA\u770B\u5F53\u524D","badge.new":"\u65B0\u6587\u4EF6","badge.changed":"\u5DF2\u4FEE\u6539","aria.codeActions":"\u4EE3\u7801\u64CD\u4F5C","aria.openFiles":"\u5DF2\u6253\u5F00\u7684\u6587\u4EF6","aria.closeTab":"\u5173\u95ED {path}","empty.title":"\u6CA1\u6709\u6253\u5F00\u7684\u6587\u4EF6","empty.body":"\u4ECE\u6587\u4EF6\u5217\u8868\u6253\u5F00\u4E00\u4E2A\u6587\u4EF6\uFF0C\u6216\u901A\u8FC7\u6F14\u7EC3\u6B65\u9AA4\u8FDB\u884C\u5BFC\u822A"},E=(e,t)=>null!=t&&Object.hasOwn(e,t);function N(e,t,s,r){let n=!e||!Object.is(e.stepKey,r),i=[...new Set(s)].filter(e=>E(t,e)),l=(e?.tabs||[]).filter(e=>E(t,e)),a=n?[...i,...l.filter(e=>!i.includes(e))]:l,o=n&&i[0]||(a.includes(e?.activeFile)?e.activeFile:a[0])||null;return{files:t,stepKey:r,tabs:a,activeFile:o}}var C=s(45773);let V=(0,g.A)("circle-alert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);var T=s(35404);let O="treeItem_xqPD",R="treeName_oNgA",M="codeActionButton_f4xz",q="codeActionIcon_Y_2N";function F({text:e,path:t}){let[s,r]=(0,x.useState)("idle"),n=(0,x.useRef)(null),i=(0,x.useRef)(0),l=(0,x.useRef)(!1),a="string"==typeof e;(0,x.useEffect)(()=>()=>{clearTimeout(n.current),i.current+=1},[]);let o=async()=>{if(!a||l.current)return;let t=++i.current;l.current=!0,clearTimeout(n.current),r("copying");try{if(await navigator.clipboard.writeText(e),t!==i.current)return;r("copied"),n.current=setTimeout(()=>r("idle"),2e3)}catch{if(t!==i.current)return;r("error")}finally{t===i.current&&(l.current=!1)}},c=A[`copy.${s}`],d=a?"error"===s?A["copy.errorHint"]:"idle"===s?A["copy.hint"].replace("{path}",t):c:A["copy.empty"],p="copied"===s?C.A:"error"===s?V:T.A;return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("button",{type:"button",className:(0,_.A)(M,"copied"===s&&"codeActionCopied_IhRM","error"===s&&"codeActionError_O3I0"),disabled:!a||"copying"===s,onClick:o,title:d,"aria-label":d,"aria-busy":"copying"===s,children:(0,y.jsx)(p,{className:q,"aria-hidden":"true",focusable:"false"})}),(0,y.jsx)("span",{className:"copyStatus_X_3r",role:"status","aria-live":"polite","aria-atomic":"true",children:"copied"===s?A["copy.copied"]:"error"===s?A["copy.errorHint"]:""})]})}function S(){return(S=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var r in s)({}).hasOwnProperty.call(s,r)&&(e[r]=s[r])}return e}).apply(null,arguments)}function L(){return(L=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var r in s)({}).hasOwnProperty.call(s,r)&&(e[r]=s[r])}return e}).apply(null,arguments)}function B(){return(B=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var r in s)({}).hasOwnProperty.call(s,r)&&(e[r]=s[r])}return e}).apply(null,arguments)}function D(){return(D=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var r in s)({}).hasOwnProperty.call(s,r)&&(e[r]=s[r])}return e}).apply(null,arguments)}function P(){return(P=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var r in s)({}).hasOwnProperty.call(s,r)&&(e[r]=s[r])}return e}).apply(null,arguments)}function I(){return(I=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var r in s)({}).hasOwnProperty.call(s,r)&&(e[r]=s[r])}return e}).apply(null,arguments)}function U(){return(U=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var r in s)({}).hasOwnProperty.call(s,r)&&(e[r]=s[r])}return e}).apply(null,arguments)}function H(){return(H=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var r in s)({}).hasOwnProperty.call(s,r)&&(e[r]=s[r])}return e}).apply(null,arguments)}function W(){return(W=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var r in s)({}).hasOwnProperty.call(s,r)&&(e[r]=s[r])}return e}).apply(null,arguments)}let z=new Map([[".gitignore","git"],[".gitignore-global","git"],[".gitignore_global","git"],[".git-blame-ignore","git"],[".gitconfig","git"],[".gitattributes","git"],[".gitmodules","git"],[".gitkeep","git"],[".gitinclude","git"],["requirements.txt","python"],["pipfile","python"],[".python-version","python"],["manifest.in","python"],["pylintrc","python"],[".pylintrc","python"],["setup.cfg","python"],["pyproject.toml","gear"],[".env","gear"]]),$=new Map([["py","python"],["python","python"],["pyi","python"],["pyw","python"],["toml","gear"],["env","gear"],["json","brackets-yellow"],["jsonc","brackets-yellow"],["json5","brackets-yellow"],["md","markdown"],["markdown","markdown"],["txt","text"]]),K=new Set(["test","tests","spec","specs"]),J="chevron_lDAJ",Q={python:({title:e,titleId:t,...s})=>x.createElement("svg",S({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24","aria-labelledby":t},s),e?x.createElement("title",{id:t},e):null,r||(r=x.createElement("path",{fill:"#14B8A6",fillRule:"evenodd",d:"M14.622 21.322c-.6.11-1.284.174-1.999.178a12.5 12.5 0 0 1-2.179-.178c-1.136-.198-2.092-1.086-2.092-2.269v-4.156c0-1.217.93-2.217 2.092-2.217h4.178c1.418 0 2.613-1.271 2.613-2.712V7.974h1.438c1.216 0 1.926.92 2.223 2.213.401 1.735.384 2.773 0 4.435-.332 1.45-1.398 2.212-2.613 2.212h-5.752v.555h4.183v1.664c0 1.26-.322 1.942-2.092 2.269m-.176-2.837c-.532 0-.963.45-.963 1.005s.43 1.005.963 1.005.963-.45.963-1.005-.43-1.005-.963-1.005",clipRule:"evenodd"})),n||(n=x.createElement("path",{fill:"#14B8A6",fillRule:"evenodd",d:"M9.378 2.678c.6-.11 1.284-.174 1.999-.178.715-.003 1.46.053 2.179.178 1.136.198 2.092 1.086 2.092 2.269v4.156c0 1.217-.93 2.217-2.092 2.217H9.378c-1.418 0-2.613 1.271-2.613 2.712v1.994H5.327c-1.216 0-1.926-.92-2.223-2.213-.401-1.735-.384-2.773 0-4.435.332-1.45 1.397-2.213 2.613-2.213h5.752v-.554H7.286V4.947c0-1.26.322-1.942 2.092-2.269m.176 2.838c.532 0 .963-.45.963-1.005s-.43-1.006-.963-1.006-.964.45-.964 1.006c0 .555.432 1.005.964 1.005",clipRule:"evenodd"}))),git:({title:e,titleId:t,...s})=>x.createElement("svg",L({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24","aria-labelledby":t},s),e?x.createElement("title",{id:t},e):null,i||(i=x.createElement("path",{fill:"#F87171",d:"m20.661 11.198-7.86-7.859a1.16 1.16 0 0 0-1.639 0L9.53 4.972l2.07 2.07a1.376 1.376 0 0 1 1.744 1.755l1.995 1.995a1.377 1.377 0 0 1 1.425 2.278 1.38 1.38 0 0 1-2.251-1.5l-1.86-1.861-.001 4.897q.198.097.365.26a1.38 1.38 0 1 1-1.5-.3V9.623a1.379 1.379 0 0 1-.749-1.809l-2.04-2.04-5.388 5.388a1.16 1.16 0 0 0 0 1.64l7.859 7.858a1.16 1.16 0 0 0 1.64 0l7.822-7.821a1.16 1.16 0 0 0 0-1.64"}))),gear:({title:e,titleId:t,...s})=>x.createElement("svg",B({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24","aria-labelledby":t},s),e?x.createElement("title",{id:t},e):null,l||(l=x.createElement("path",{fill:"#64748B",d:"M5.939 5.37a3.763 3.763 0 0 1-2.712 4.696l-1.099.272a10.8 10.8 0 0 0 .012 3.4l1.015.244a3.763 3.763 0 0 1 2.728 4.723l-.35 1.187a10 10 0 0 0 2.792 1.734l.928-.976a3.763 3.763 0 0 1 5.454.001l.938.987a10 10 0 0 0 2.79-1.717l-.373-1.29a3.763 3.763 0 0 1 2.712-4.697l1.098-.271a10.8 10.8 0 0 0-.012-3.4l-1.014-.245a3.763 3.763 0 0 1-2.728-4.723l.35-1.186a10 10 0 0 0-2.792-1.735l-.928.976a3.76 3.76 0 0 1-5.454-.001l-.938-.987a10 10 0 0 0-2.79 1.717zM12 14.822c-1.506 0-2.727-1.263-2.727-2.822 0-1.558 1.22-2.822 2.727-2.822s2.727 1.264 2.727 2.822-1.22 2.822-2.727 2.822"}))),document:({title:e,titleId:t,...s})=>x.createElement("svg",D({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24","aria-labelledby":t},s),e?x.createElement("title",{id:t},e):null,a||(a=x.createElement("path",{stroke:"#64748B",strokeLinejoin:"round",strokeWidth:2,d:"M6 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8a1 1 0 0 0-.375-.78l-5-4A1 1 0 0 0 13 3z"})),o||(o=x.createElement("path",{stroke:"#64748B",strokeLinejoin:"round",strokeWidth:2,d:"M12 4v5h6"}))),text:({title:e,titleId:t,...s})=>x.createElement("svg",P({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24","aria-labelledby":t},s),e?x.createElement("title",{id:t},e):null,c||(c=x.createElement("rect",{width:16,height:2,x:4,y:6,fill:"#64748B",rx:1})),d||(d=x.createElement("rect",{width:12,height:2,x:4,y:11,fill:"#64748B",rx:1})),p||(p=x.createElement("rect",{width:16,height:2,x:4,y:16,fill:"#64748B",rx:1}))),markdown:({title:e,titleId:t,...s})=>x.createElement("svg",I({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24","aria-labelledby":t},s),e?x.createElement("title",{id:t},e):null,u||(u=x.createElement("path",{fill:"#60A5FA",d:"M3 15.714V8h2.323l2.322 2.836L9.968 8h2.322v7.714H9.968V11.29l-2.323 2.836-2.322-2.836v4.424zm14.516 0-3.484-3.743h2.323V8h2.322v3.97H21z"}))),"brackets-yellow":({title:e,titleId:t,...s})=>x.createElement("svg",U({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24","aria-labelledby":t},s),e?x.createElement("title",{id:t},e):null,h||(h=x.createElement("path",{fill:"#F59E0B",d:"M4.778 6.667A2.667 2.667 0 0 1 7.444 4a.889.889 0 0 1 0 1.778.89.89 0 0 0-.888.889v3.5c0 .701-.273 1.35-.73 1.833.457.483.73 1.132.73 1.832v3.501c0 .491.398.89.888.89a.889.889 0 0 1 0 1.777 2.667 2.667 0 0 1-2.666-2.667v-3.5a.89.89 0 0 0-.674-.863l-.43-.108a.889.889 0 0 1 0-1.724l.43-.108a.89.89 0 0 0 .674-.862zm14.222 0A2.667 2.667 0 0 0 16.333 4a.889.889 0 0 0 0 1.778c.491 0 .89.398.89.889v3.5c0 .701.272 1.35.729 1.833a2.66 2.66 0 0 0-.73 1.832v3.501a.89.89 0 0 1-.889.89.889.889 0 0 0 0 1.777A2.667 2.667 0 0 0 19 17.333v-3.5c0-.408.278-.764.673-.863l.431-.108a.889.889 0 0 0 0-1.724l-.43-.108a.89.89 0 0 1-.674-.862z"}))),folder:({title:e,titleId:t,...s})=>x.createElement("svg",H({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24","aria-labelledby":t},s),e?x.createElement("title",{id:t},e):null,f||(f=x.createElement("path",{stroke:"#64748B",strokeWidth:2,d:"M7.784 5H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9.875a2 2 0 0 0-2-2h-6.284a2 2 0 0 1-1.27-.455L9.054 5.455A2 2 0 0 0 7.783 5Z"}))),"folder-red-code":({title:e,titleId:t,...s})=>x.createElement("svg",W({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24","aria-labelledby":t},s),e?x.createElement("title",{id:t},e):null,m||(m=x.createElement("path",{fill:"#64748B",fillRule:"evenodd",d:"M5 4a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h5v-2H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h2.784a1 1 0 0 1 .635.227l2.393 1.966a3 3 0 0 0 1.904.682H19a1 1 0 0 1 1 1V10h2v-.125a3 3 0 0 0-3-3h-6.284a1 1 0 0 1-.635-.227L9.688 4.682A3 3 0 0 0 7.784 4z",clipRule:"evenodd"})),v||(v=x.createElement("path",{stroke:"#F87171",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M15.146 13.797 13 15.943l2.146 2.146M21.077 13.797l2.145 2.146-2.145 2.146M16.561 19.52l3.1-7.153"})))};function Y({path:e,folder:t=!1,tree:s=!1,expanded:r=!1}){let n=function(e,{folder:t=!1}={}){let s="string"==typeof e?e.replace(/\\/g,"/").replace(/\/+$/,"").split("/").pop().toLowerCase():"";if(t)return K.has(s)?"folder-red-code":"folder";if(z.has(s))return z.get(s);if(s.startsWith(".env.")||s.endsWith(".env.example"))return"gear";let r=s.lastIndexOf("."),n=r>=0?s.slice(r+1):"";return $.get(n)||"document"}(e,{folder:t}),i=Q[n],l=(0,y.jsx)(i,{className:"icon_KnjF",width:16,height:16,"aria-hidden":"true",focusable:"false","data-symbols-icon":n});return s?(0,y.jsxs)("span",{className:"treeIcon_sP4w","aria-hidden":"true",children:[t?(0,y.jsx)("svg",{className:(0,_.A)(J,r&&"expanded_mogG"),width:10,height:10,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",focusable:"false",children:(0,y.jsx)("path",{d:"m9 5 7 7-7 7"})}):(0,y.jsx)("span",{className:J}),l]}):l}let Z=[],G=[];function X({files:e,previousFiles:t=null,preferredFiles:s=Z,stepKey:r=0,focusFile:n,focusRanges:i=G,onFileSelect:l,className:a}){let o=(0,k.A)(),[c,d]=(0,x.useState)(()=>N(null,e,s,r)),[p,u]=(0,x.useState)(()=>new Set),[h,f]=(0,x.useState)(!0),m=(0,x.useRef)(null);c.files===e&&Object.is(c.stepKey,r)||d(N(c,e,s,r));let{activeFile:v,tabs:g}=c,C=(0,x.useMemo)(()=>(function(e){let t={children:[]};for(let s of e){let e=t,r=s.split("/");r.forEach((t,n)=>{let i=r.slice(0,n+1).join("/");if(n===r.length-1)e.children.push({type:"file",name:t,path:s});else{let s=e.children.find(e=>"folder"===e.type&&e.path===i);s||(s={type:"folder",name:t,path:i,children:[]},e.children.push(s)),e=s}})}let s=e=>[...e].sort((e,t)=>e.type===t.type?e.name.localeCompare(t.name):"folder"===e.type?-1:1).map(e=>"folder"===e.type?{...e,children:s(e.children)}:e);return s(t.children)})(Object.keys(e)),[e]),V=s=>t&&E(e,s)?E(t,s)?t[s]===e[s]?"same":"changed":"new":"same",T=V(v),S=E(e,v)?e[v]:void 0,L=(0,x.useMemo)(()=>void 0===S?[]:h&&"changed"===T?function(e,t){let s=e.replace(/\n$/,"").split("\n"),r=t.replace(/\n$/,"").split("\n"),n=s.length,i=r.length,l=Array.from({length:n+1},()=>new Uint32Array(i+1));for(let e=n-1;e>=0;e-=1)for(let t=i-1;t>=0;t-=1)l[e][t]=s[e]===r[t]?l[e+1][t+1]+1:Math.max(l[e+1][t],l[e][t+1]);let a=[],o=0,c=0,d=0;for(;o<n||c<i;)o<n&&c<i&&s[o]===r[c]?(d+=1,a.push({type:"same",text:r[c],newNo:d}),o+=1,c+=1):c<i&&(o>=n||l[o][c+1]>=l[o+1][c])?(d+=1,a.push({type:"add",text:r[c],newNo:d}),c+=1):(a.push({type:"del",text:s[o],newNo:null}),o+=1);return a}(t[v],S):S.replace(/\n$/,"").split("\n").map((e,t)=>({type:"same",text:e,newNo:t+1})),[S,t,v,T,h]),B=null==n||n===v?i:G,D=o.plain.backgroundColor;(0,x.useEffect)(()=>{let e=m.current;if(!e)return;let t=e.querySelector("[data-change]")||e.querySelector("[data-focus]"),s=t?Math.max(0,t.offsetTop-e.clientHeight/2+t.offsetHeight/2):0,r=window.matchMedia("(prefers-reduced-motion: reduce)").matches;e.scrollTo({top:s,behavior:t&&!r?"smooth":"auto"})},[r,v,h,S,n,i]);let P=e=>{d(t=>E(t.files,e)?{...t,activeFile:e,tabs:t.tabs.includes(e)?t.tabs:[...t.tabs,e]}:t),l?.(e)},I=(e,t)=>e.map(e=>{let s={paddingLeft:`${8+14*t}px`};if("file"===e.type){let t=V(e.path);return(0,y.jsxs)("button",{type:"button",onClick:()=>P(e.path),"aria-pressed":e.path===v,style:s,title:e.path,className:(0,_.A)(O,e.path===v&&"treeItemActive_NYmV"),children:[(0,y.jsx)(Y,{path:e.path,tree:!0}),(0,y.jsx)("span",{className:R,children:e.name}),"same"!==t&&(0,y.jsx)("span",{className:(0,_.A)("treeDot_jdw0","new"===t&&"treeDotNew_M1tN"),title:A[`badge.${t}`]})]},e.path)}let r=p.has(e.path);return(0,y.jsxs)("div",{children:[(0,y.jsxs)("button",{type:"button","aria-expanded":!r,onClick:()=>{let t;return t=e.path,u(e=>{let s=new Set(e);return s.has(t)?s.delete(t):s.add(t),s})},style:s,className:O,title:e.path,children:[(0,y.jsx)(Y,{path:e.path,folder:!0,tree:!0,expanded:!r}),(0,y.jsx)("span",{className:R,children:e.name})]}),!r&&I(e.children,t+1)]},e.path)});return(0,y.jsxs)("div",{className:(0,_.A)("editor_dHJE",a),"data-project-code-viewer":"",children:[(0,y.jsxs)("aside",{className:"fileTree_hRoX","aria-label":A["files.heading"],children:[(0,y.jsx)("h4",{className:"fileTreeHeading_mHQH",children:A["files.heading"]}),(0,y.jsx)("div",{className:"treeScroll_sHHt",children:I(C,0)})]}),(0,y.jsxs)("div",{className:"editorMain_jUUV",children:[(0,y.jsxs)("label",{className:"mobilePicker_UzrQ",children:[(0,y.jsx)("span",{children:A["files.heading"]}),(0,y.jsxs)("select",{"aria-label":A["files.heading"],value:v??"",onChange:e=>P(e.target.value),children:[(0,y.jsx)("option",{value:"",disabled:!0,children:A["copy.empty"]}),Object.keys(e).map(e=>(0,y.jsx)("option",{value:e,children:e},e))]})]}),(0,y.jsx)("div",{className:"editorToolbar_UlPB",children:(0,y.jsx)("div",{className:"tabs_VF_n","aria-label":A["aria.openFiles"],children:g.map(e=>{let t=e===v,s=V(e);return(0,y.jsxs)("div",{className:(0,_.A)("tab_qFmb",t&&"tabActive_DCji"),style:t?{backgroundColor:D}:void 0,children:[(0,y.jsxs)("button",{type:"button","aria-pressed":t,onClick:()=>P(e),className:"tabBtn_ulEc",title:e,children:[(0,y.jsx)(Y,{path:e}),e.split("/").pop(),"same"!==s&&(0,y.jsx)("span",{className:(0,_.A)("badge_Q6dE","new"===s&&"badgeNew_H9yP"),children:A[`badge.${s}`]})]}),(0,y.jsx)("button",{type:"button","aria-label":A["aria.closeTab"].replace("{path}",e),onClick:()=>d(t=>{let s;return s=t.tabs.filter(t=>t!==e),{...t,tabs:s,activeFile:t.activeFile===e?s.at(-1)??null:t.activeFile}}),className:"tabClose_i338",children:"\xd7"})]},e)})})}),(0,y.jsxs)("div",{className:"codeShell_uOkt",style:{backgroundColor:D,"--cw-editor-bg":D},children:[void 0!==S&&(0,y.jsxs)("div",{className:"codeActions_eYDy",role:"group","aria-label":A["aria.codeActions"],children:["changed"===T&&(0,y.jsx)("button",{type:"button",className:M,"aria-label":A["diff.show"],"aria-pressed":h,title:h?A["diff.hide"]:A["diff.show"],onClick:()=>f(e=>!e),children:h?(0,y.jsx)(j,{className:q,"aria-hidden":"true",focusable:"false"}):(0,y.jsx)(w,{className:q,"aria-hidden":"true",focusable:"false"})}),(0,y.jsx)(F,{text:S,path:v},JSON.stringify([r,v,S]))]}),void 0!==S?(0,y.jsx)("div",{ref:m,className:"codeScroll_KvdC",style:{backgroundColor:D},children:(0,y.jsx)(b.f4,{theme:o,code:L.map(e=>e.text).join("\n"),language:{py:"python",md:"markdown",json:"json",toml:"toml",txt:"text"}[v.split(".").pop()?.toLowerCase()]||"text",children:({tokens:e,getLineProps:t,getTokenProps:s})=>(0,y.jsx)("pre",{className:"pre_WKm3",style:{color:o.plain.color},children:e.map((e,r)=>{var n;let i=L[r]||{type:"same",newNo:r+1},l=t({line:e}),a="same"!==i.type,o=!a&&(n=i.newNo,null!=n&&B.some(([e,t=e])=>n>=e&&n<=t));return(0,y.jsxs)("div",{...l,"data-line":i.newNo??void 0,"data-change":a?i.type:void 0,"data-focus":o?"":void 0,className:(0,_.A)(l.className,"line_aw8y","add"===i.type&&"lineAdd_mE7J","del"===i.type&&"lineDel_abp0",o&&"lineFocus_Glcn"),children:[(0,y.jsx)("span",{"aria-hidden":"true",className:"lineNo_EtU5",children:i.newNo??""}),(0,y.jsx)("span",{"aria-hidden":"true",className:"lineSign_UgAc",children:"add"===i.type?"+":"del"===i.type?"\u2212":""}),(0,y.jsx)("span",{className:"lineContent_fkoz",children:e.map((e,t)=>(0,y.jsx)("span",{...s({token:e})},t))})]},r)})})})}):(0,y.jsx)("div",{className:"empty_oOnL",style:{backgroundColor:D},children:(0,y.jsxs)("div",{children:[(0,y.jsx)("p",{children:A["empty.title"]}),(0,y.jsx)("p",{className:"emptySub_bQnk",children:A["empty.body"]})]})})]})]})]})}},17181(e,t,s){s.d(t,{A:()=>r});let r={s00:{"agent.py":`if __name__ == "__main__":
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
`}}},51507(e,t,s){s.d(t,{A:()=>n});var r=s(96540);function n(e,t){let s=e.length,[n,i]=(0,r.useState)(0),[l,a]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{if(!t){i(0),a(!1);return}if("u">typeof window&&window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches){a(!0),i(s);return}let e=window.setTimeout(()=>{a(!0),e=window.setInterval(()=>{i(t=>t+1>=s?(window.clearInterval(e),s):t+1)},80)},350);return()=>{window.clearTimeout(e),window.clearInterval(e)}},[t,s]),{shown:n,started:l,done:l&&n>=s}}},28453(e,t,s){s.d(t,{R:()=>l,x:()=>a});var r=s(96540);let n={},i=r.createContext(n);function l(e){let t=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);