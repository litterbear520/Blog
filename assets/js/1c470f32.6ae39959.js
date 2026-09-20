"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([["7134"],{17616(e,t,s){s.r(t),s.d(t,{metadata:()=>r,default:()=>g,frontMatter:()=>u,contentTitle:()=>h,toc:()=>f,assets:()=>m});var r=JSON.parse('{"id":"commerce-agents/\u4E00\u4E2A\u6587\u4EF6\uFF0C\u4E00\u6BB5\u5BF9\u8BDD/the-agent-loop","title":"\u5FAA\u73AF\u4E0E\u7B2C\u4E00\u4E2A\u5DE5\u5177","description":"\u4EE5\u5546\u54C1\u641C\u7D22\u4E3A\u4F8B\uFF0C\u7406\u89E3\u6A21\u578B\u5982\u4F55\u8BF7\u6C42\u5DE5\u5177\uFF0C\u4EE5\u53CA\u7A0B\u5E8F\u4E3A\u4EC0\u4E48\u8981\u628A\u7ED3\u679C\u9001\u56DE\u5BF9\u8BDD\u3002","source":"@site/roadmap/commerce-agents/\u4E00\u4E2A\u6587\u4EF6\uFF0C\u4E00\u6BB5\u5BF9\u8BDD/01-the-agent-loop.mdx","sourceDirName":"commerce-agents/\u4E00\u4E2A\u6587\u4EF6\uFF0C\u4E00\u6BB5\u5BF9\u8BDD","slug":"/commerce-agents/\u4E00\u4E2A\u6587\u4EF6\uFF0C\u4E00\u6BB5\u5BF9\u8BDD/the-agent-loop","permalink":"/roadmap/commerce-agents/\u4E00\u4E2A\u6587\u4EF6\uFF0C\u4E00\u6BB5\u5BF9\u8BDD/the-agent-loop","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"description":"\u4EE5\u5546\u54C1\u641C\u7D22\u4E3A\u4F8B\uFF0C\u7406\u89E3\u6A21\u578B\u5982\u4F55\u8BF7\u6C42\u5DE5\u5177\uFF0C\u4EE5\u53CA\u7A0B\u5E8F\u4E3A\u4EC0\u4E48\u8981\u628A\u7ED3\u679C\u9001\u56DE\u5BF9\u8BDD\u3002"},"sidebar":"roadmapSidebar","previous":{"title":"\u4E00\u4E2A\u6587\u4EF6\uFF0C\u4E00\u6BB5\u5BF9\u8BDD","permalink":"/roadmap/commerce-agents/\u4E00\u4E2A\u6587\u4EF6\uFF0C\u4E00\u6BB5\u5BF9\u8BDD/"}}'),n=s(74848),l=s(28453),a=s(51493),i=s(12153),o=s(87096);function c(e,t,s){let r=e.split("\n"),n=r.findIndex(e=>e.trimStart().startsWith(t)),l=s?r.findIndex((e,t)=>t>n&&e.trimStart().startsWith(s)):r.length;if(n<0||l<=n)throw Error(`Commerce lesson: cannot locate source excerpt "${t}" \u{2192} "${s||"EOF"}"`);let a=r.slice(n,l),i=Math.min(...a.filter(e=>e.trim()).map(e=>e.match(/^\s*/)[0].length));return a.map(e=>e.slice(i)).join("\n").trimEnd()}let d=s(17181).A.s01["agent.py"],p={search:c(d,"def search_products(","# \u2500\u2500 \u5DE5\u5177\u8C03\u7528\u5206\u53D1"),schema:c(d,"search_products_schema =","# \u2500\u2500 \u641C\u7D22\u51FD\u6570"),results:c(d,"tool_results = []"),stop:c(d,"if response.stop_reason !=","tool_results = []")},u={description:"\u4EE5\u5546\u54C1\u641C\u7D22\u4E3A\u4F8B\uFF0C\u7406\u89E3\u6A21\u578B\u5982\u4F55\u8BF7\u6C42\u5DE5\u5177\uFF0C\u4EE5\u53CA\u7A0B\u5E8F\u4E3A\u4EC0\u4E48\u8981\u628A\u7ED3\u679C\u9001\u56DE\u5BF9\u8BDD\u3002"},h="\u5FAA\u73AF\u4E0E\u7B2C\u4E00\u4E2A\u5DE5\u5177",m={},f=[{value:"\u4E3A\u4EC0\u4E48\u9700\u8981\u5DE5\u5177",id:"\u4E3A\u4EC0\u4E48\u9700\u8981\u5DE5\u5177",level:2},{value:"\u5B9A\u4E49\u5546\u54C1\u641C\u7D22",id:"\u5B9A\u4E49\u5546\u54C1\u641C\u7D22",level:2},{value:"\u6267\u884C\u5DE5\u5177\u5E76\u8FD4\u56DE\u7ED3\u679C",id:"\u6267\u884C\u5DE5\u5177\u5E76\u8FD4\u56DE\u7ED3\u679C",level:2},{value:"\u4E3A\u4EC0\u4E48\u9700\u8981\u5FAA\u73AF",id:"\u4E3A\u4EC0\u4E48\u9700\u8981\u5FAA\u73AF",level:2}];function x(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,l.R)(),...e.components},{Details:s}=t;return s||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"\u5FAA\u73AF\u4E0E\u7B2C\u4E00\u4E2A\u5DE5\u5177",children:"\u5FAA\u73AF\u4E0E\u7B2C\u4E00\u4E2A\u5DE5\u5177"})}),"\n",(0,n.jsx)(t.p,{children:"\u5DE5\u5177\u8BA9\u6A21\u578B\u80FD\u591F\u53D6\u5F97\u5BF9\u8BDD\u4E4B\u5916\u7684\u4FE1\u606F\u3002\u4EE5\u8D2D\u7269\u52A9\u624B\u4E3A\u4F8B\uFF0C\u6211\u4EEC\u53EF\u4EE5\u63D0\u4F9B\u4E00\u4E2A\u5546\u54C1\u641C\u7D22\u5DE5\u5177\uFF0C\u8BA9\u6A21\u578B\u5148\u67E5\u8BE2\u5546\u54C1\u76EE\u5F55\uFF0C\u518D\u6839\u636E\u7ED3\u679C\u56DE\u7B54\u7528\u6237\u3002"}),"\n",(0,n.jsx)(t.h2,{id:"\u4E3A\u4EC0\u4E48\u9700\u8981\u5DE5\u5177",children:"\u4E3A\u4EC0\u4E48\u9700\u8981\u5DE5\u5177"}),"\n",(0,n.jsx)(t.p,{children:"\u5047\u8BBE\u7528\u6237\u95EE\uFF1A\u201C\u5E97\u91CC\u6709\u6CA1\u6709\u964D\u566A\u8033\u673A\uFF1F\u201D\u6A21\u578B\u53EF\u4EE5\u4ECB\u7ECD\u964D\u566A\u8033\u673A\uFF0C\u5374\u65E0\u6CD5\u4EC5\u51ED\u5DF2\u6709\u77E5\u8BC6\u786E\u8BA4\u8FD9\u5BB6\u5E97\u7684\u5546\u54C1\u548C\u5E93\u5B58\u3002\u8981\u56DE\u7B54\u8FD9\u4E2A\u95EE\u9898\uFF0C\u5B83\u9700\u8981\u53D6\u5F97\u5546\u5E97\u7684\u6570\u636E\u3002"}),"\n",(0,n.jsxs)(t.p,{children:["\u6211\u4EEC\u53EF\u4EE5\u8BA9\u7A0B\u5E8F\u67E5\u8BE2\u5546\u54C1\u76EE\u5F55\uFF0C\u518D\u628A\u7ED3\u679C\u4EA4\u7ED9\u6A21\u578B\u3002\u8FD9\u91CC\u6709\u4E00\u4E2A\u91CD\u8981\u7684\u5206\u5DE5\uFF1A",(0,n.jsx)(t.strong,{children:"\u6A21\u578B\u51B3\u5B9A\u9700\u8981\u67E5\u8BE2\u4EC0\u4E48\uFF0C\u7A0B\u5E8F\u8D1F\u8D23\u6267\u884C\u67E5\u8BE2\uFF0C\u6A21\u578B\u518D\u6839\u636E\u7ED3\u679C\u56DE\u7B54\u3002"})," \u6A21\u578B\u53D1\u51FA\u5DE5\u5177\u8C03\u7528\u8BF7\u6C42\uFF0C\u5E76\u4E0D\u4EE3\u8868 Python \u51FD\u6570\u5DF2\u7ECF\u6267\u884C\u3002"]}),"\n",(0,n.jsx)(t.h2,{id:"\u5B9A\u4E49\u5546\u54C1\u641C\u7D22",children:"\u5B9A\u4E49\u5546\u54C1\u641C\u7D22"}),"\n",(0,n.jsxs)(t.p,{children:["\u5148\u4E3A\u7A0B\u5E8F\u51C6\u5907\u4E00\u4E2A\u666E\u901A\u7684 Python \u51FD\u6570\u3002\u4E3A\u4E86\u4E13\u6CE8\u4E8E\u5DE5\u5177\u8C03\u7528\uFF0C\u6211\u4EEC\u7528\u5185\u5B58\u4E2D\u7684 ",(0,n.jsx)(t.code,{children:"PRODUCTS"})," \u5217\u8868\u4EE3\u66FF\u6570\u636E\u5E93\uFF0C\u6309\u5546\u54C1\u540D\u79F0\u5339\u914D\u5173\u952E\u8BCD\uFF1A"]}),"\n",(0,n.jsx)(a.A,{language:"python",title:"\u641C\u7D22\u51FD\u6570\uFF08\u8282\u9009\uFF09",children:p.search}),"\n",(0,n.jsxs)(t.p,{children:["\u8C03\u7528 ",(0,n.jsx)(t.code,{children:'search_products("\u8033\u673A")'}),"\uFF0C\u5C31\u4F1A\u627E\u5230\u540D\u79F0\u4E2D\u5305\u542B\u201C\u8033\u673A\u201D\u7684\u5546\u54C1\uFF0C\u5E76\u628A\u7ED3\u679C\u8F6C\u6362\u4E3A JSON \u5B57\u7B26\u4E32\u3002\u6B64\u65F6\uFF0C\u641C\u7D22\u5DF2\u7ECF\u80FD\u5728 Python \u4E2D\u72EC\u7ACB\u5DE5\u4F5C\uFF0C\u4F46\u6A21\u578B\u8FD8\u4E0D\u77E5\u9053\u600E\u6837\u8BF7\u6C42\u5B83\u3002"]}),"\n",(0,n.jsxs)(t.p,{children:["\u6211\u4EEC\u8FD8\u9700\u8981\u4E00\u4EFD\u5DE5\u5177\u5B9A\u4E49\uFF0C\u4E5F\u5C31\u662F Schema\u3002\u5B83\u901A\u8FC7 ",(0,n.jsx)(t.code,{children:"name"})," \u6807\u8BC6\u5DE5\u5177\uFF0C\u901A\u8FC7 ",(0,n.jsx)(t.code,{children:"description"})," \u8BF4\u660E\u7528\u9014\uFF0C\u518D\u7528 ",(0,n.jsx)(t.code,{children:"input_schema"})," \u63CF\u8FF0\u53C2\u6570\u3002\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C",(0,n.jsx)(t.code,{children:"query"})," \u662F\u5FC5\u586B\u7684\u5173\u952E\u8BCD\uFF0C",(0,n.jsx)(t.code,{children:"limit"})," \u662F\u53EF\u9009\u7684\u7ED3\u679C\u6570\u91CF\u3002"]}),"\n",(0,n.jsxs)(s,{children:[(0,n.jsx)("summary",{children:"\u67E5\u770B\u641C\u7D22\u5DE5\u5177\u7684\u5B9A\u4E49"}),(0,n.jsx)(a.A,{language:"python",title:"\u5DE5\u5177 Schema",children:p.schema})]}),"\n",(0,n.jsxs)(t.p,{children:["\u628A\u8FD9\u4EFD\u5B9A\u4E49\u653E\u8FDB\u8BF7\u6C42\u7684 ",(0,n.jsx)(t.code,{children:"tools=[search_products_schema]"})," \u540E\uFF0C\u6A21\u578B\u5C31\u53EF\u4EE5\u63D0\u51FA\u641C\u7D22\u8BF7\u6C42\u3002\u4F8B\u5982\uFF0C\u9488\u5BF9\u7528\u6237\u7684\u95EE\u9898\uFF0C\u5B83\u53EF\u4EE5\u9009\u62E9 ",(0,n.jsx)(t.code,{children:"search_products"}),"\uFF0C\u5E76\u63D0\u4F9B\u53C2\u6570 ",(0,n.jsx)(t.code,{children:'{"query": "\u8033\u673A"}'}),"\u3002",(0,n.jsx)(t.strong,{children:"\u5DE5\u5177\u5B9A\u4E49\u63CF\u8FF0\u8C03\u7528\u65B9\u5F0F\uFF0C\u51FD\u6570\u8D1F\u8D23\u5B9E\u9645\u641C\u7D22\u3002"})]}),"\n",(0,n.jsx)(t.h2,{id:"\u6267\u884C\u5DE5\u5177\u5E76\u8FD4\u56DE\u7ED3\u679C",children:"\u6267\u884C\u5DE5\u5177\u5E76\u8FD4\u56DE\u7ED3\u679C"}),"\n",(0,n.jsxs)(t.p,{children:["\u6A21\u578B\u9700\u8981\u641C\u7D22\u65F6\uFF0C\u56DE\u590D\u4E2D\u4F1A\u51FA\u73B0 ",(0,n.jsx)(t.code,{children:"tool_use"})," \u5185\u5BB9\u5757\uFF0C\u5305\u542B\u5DE5\u5177\u540D\u79F0\u3001\u53C2\u6570\u548C\u8C03\u7528 ID\u3002\u7A0B\u5E8F\u5148\u628A\u5B8C\u6574\u7684 ",(0,n.jsx)(t.code,{children:"response.content"})," \u4F5C\u4E3A ",(0,n.jsx)(t.code,{children:"assistant"})," \u6D88\u606F\u8FFD\u52A0\u5230 ",(0,n.jsx)(t.code,{children:"messages"}),"\uFF0C\u518D\u5904\u7406\u5176\u4E2D\u7684\u5DE5\u5177\u8C03\u7528\u3002"]}),"\n",(0,n.jsxs)(t.p,{children:["\u4E0B\u9762\u7684\u4EE3\u7801\u7528 ",(0,n.jsx)(t.code,{children:"TOOL_MAP"})," \u6309\u540D\u79F0\u627E\u5230\u641C\u7D22\u51FD\u6570\uFF0C\u6267\u884C\u540E\u628A\u7ED3\u679C\u5305\u88C5\u6210 ",(0,n.jsx)(t.code,{children:"tool_result"}),"\uFF1A"]}),"\n",(0,n.jsx)(a.A,{language:"python",title:"\u6267\u884C\u5DE5\u5177\u5E76\u8FFD\u52A0\u7ED3\u679C\uFF08\u8282\u9009\uFF09",children:p.results}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"tool_use_id"})," \u5BF9\u5E94\u8FD9\u6B21\u8BF7\u6C42\u7684 ",(0,n.jsx)(t.code,{children:"block.id"}),"\uFF0C\u7528\u6765\u8BF4\u660E\u201C\u8FD9\u662F\u54EA\u4E00\u6B21\u8C03\u7528\u7684\u7ED3\u679C\u201D\uFF0C\u800C\u4E0D\u662F\u641C\u7D22\u5230\u7684\u5546\u54C1 ID\u3002\u7ED3\u679C\u653E\u5728\u4E00\u6761 ",(0,n.jsx)(t.code,{children:"user"})," \u6D88\u606F\u4E2D\uFF1B\u8FD9\u91CC\u7684 ",(0,n.jsx)(t.code,{children:"user"})," \u662F Messages API \u7684\u89D2\u8272\uFF0C\u5E76\u4E0D\u8868\u793A\u7528\u6237\u53C8\u8F93\u5165\u4E86\u4E00\u53E5\u8BDD\u3002"]}),"\n",(0,n.jsx)(t.p,{children:"\u53EA\u6709\u628A\u8FD9\u4E9B\u6D88\u606F\u5E26\u5165\u4E0B\u4E00\u6B21\u6A21\u578B\u8BF7\u6C42\uFF0C\u6A21\u578B\u624D\u80FD\u8BFB\u5230\u641C\u7D22\u7ED3\u679C\u3002\u4EC5\u5728\u7EC8\u7AEF\u6253\u5370\u7ED3\u679C\uFF0C\u5E76\u4E0D\u4F1A\u628A\u6570\u636E\u4EA4\u7ED9\u6A21\u578B\u3002"}),"\n",(0,n.jsx)(t.h2,{id:"\u4E3A\u4EC0\u4E48\u9700\u8981\u5FAA\u73AF",children:"\u4E3A\u4EC0\u4E48\u9700\u8981\u5FAA\u73AF"}),"\n",(0,n.jsx)(t.p,{children:"\u7B2C\u4E00\u6B21\u8BF7\u6C42\u8BA9\u6A21\u578B\u63D0\u51FA\u641C\u7D22\uFF0C\u4E0B\u4E00\u6B21\u8BF7\u6C42\u624D\u8BA9\u5B83\u8BFB\u5230\u7ED3\u679C\u3002\u5982\u679C\u4FE1\u606F\u8FD8\u4E0D\u591F\uFF0C\u6A21\u578B\u4E5F\u53EF\u4EE5\u7EE7\u7EED\u8BF7\u6C42\u5DE5\u5177\u3002\u56E0\u6B64\uFF0C\u7A0B\u5E8F\u9700\u8981\u91CD\u590D\u201C\u8BF7\u6C42\u6A21\u578B\u2014\u6267\u884C\u5DE5\u5177\u2014\u56DE\u4F20\u7ED3\u679C\u201D\uFF0C\u800C\u4E0D\u662F\u8C03\u7528\u4E00\u6B21 API \u5C31\u7ED3\u675F\u3002"}),"\n",(0,n.jsxs)(t.p,{children:["\u6A21\u578B\u56DE\u590D\u4E2D\u7684 ",(0,n.jsx)(t.code,{children:"stop_reason"})," \u7528\u6765\u533A\u5206\u8FD9\u4E9B\u60C5\u51B5\uFF1A",(0,n.jsx)(t.code,{children:"tool_use"})," \u8868\u793A\u9700\u8981\u6267\u884C\u5DE5\u5177\u5E76\u7EE7\u7EED\uFF1B",(0,n.jsx)(t.code,{children:"end_turn"})," \u8868\u793A\u5F53\u524D\u8FD9\u4E00\u8F6E\u56DE\u7B54\u6B63\u5E38\u7ED3\u675F\u3002\u793A\u4F8B\u4E2D\u7684\u5185\u5C42\u5FAA\u73AF\u7528\u4E0B\u9762\u7684\u6761\u4EF6\u51B3\u5B9A\u662F\u5426\u7EE7\u7EED\uFF1A"]}),"\n",(0,n.jsx)(a.A,{language:"python",title:"\u5FAA\u73AF\u4E2D\u7684\u5224\u65AD\uFF08\u8282\u9009\uFF09",children:p.stop}),"\n",(0,n.jsxs)(t.p,{children:["\u8FD9\u6BB5\u6700\u5C0F\u5B9E\u73B0\u9047\u5230\u975E ",(0,n.jsx)(t.code,{children:"tool_use"})," \u7684\u60C5\u51B5\u90FD\u4F1A\u9000\u51FA\uFF1B\u5B9E\u9645\u5E94\u7528\u8FD8\u9700\u8981\u5355\u72EC\u5904\u7406 ",(0,n.jsx)(t.code,{children:"max_tokens"})," \u7B49\u505C\u6B62\u539F\u56E0\uFF0C\u4E0D\u80FD\u628A\u9000\u51FA\u90FD\u5F53\u6210\u6B63\u5E38\u5B8C\u6210\u3002"]}),"\n",(0,n.jsxs)(t.p,{children:["\u4E0B\u9762\u7528\u4E00\u6B21\u627E\u8033\u673A\u7684\u8FC7\u7A0B\u4E32\u8D77\u8FD9\u4E9B\u6B65\u9AA4\u3002\u7559\u610F\u641C\u7D22\u7ED3\u675F\u540E\uFF0C\u7A0B\u5E8F\u4E3A\u4EC0\u4E48\u8FD8\u8981\u8BF7\u6C42\u4E00\u6B21\u6A21\u578B\uFF0C\u4EE5\u53CA ",(0,n.jsx)(t.code,{children:"messages"})," \u4E2D\u589E\u52A0\u4E86\u54EA\u4E9B\u6D88\u606F\u3002\u6F14\u793A\u662F\u9884\u8BBE\u8FC7\u7A0B\u7684\u56DE\u653E\uFF0C\u4E0D\u4F1A\u53D1\u9001\u771F\u5B9E API \u8BF7\u6C42\u3002"]}),"\n",(0,n.jsx)(i.A,{variant:"commerceLoop"}),"\n",(0,n.jsxs)(t.p,{children:["\u5B8C\u6574\u811A\u672C\u7684\u5916\u5C42\u5FAA\u73AF\u8D1F\u8D23\u7B49\u5F85\u7528\u6237\u8F93\u5165\uFF0C\u5185\u5C42\u5FAA\u73AF\u8D1F\u8D23\u5B8C\u6210\u5F53\u524D\u95EE\u9898\u6240\u9700\u7684\u5DE5\u5177\u8C03\u7528\u3002\u5916\u5C42\u4FDD\u7559 ",(0,n.jsx)(t.code,{children:"messages"}),"\uFF0C\u6240\u4EE5\u7528\u6237\u7EE7\u7EED\u8FFD\u95EE\u65F6\uFF0C\u6A21\u578B\u4ECD\u80FD\u770B\u5230\u524D\u9762\u7684\u5BF9\u8BDD\u3002"]}),"\n",(0,n.jsxs)(s,{children:[(0,n.jsx)("summary",{children:"\u67E5\u770B\u5B8C\u6574\u4EE3\u7801\u4E0E\u8FD0\u884C\u65B9\u5F0F"}),(0,n.jsx)(t.p,{children:"\u4E0B\u9762\u7684\u6F14\u7EC3\u9ED8\u8BA4\u5B9A\u4F4D\u5230\u5B8C\u6574\u5FAA\u73AF\uFF0C\u4E5F\u53EF\u4EE5\u56DE\u770B\u641C\u7D22\u51FD\u6570\u548C\u5DE5\u5177\u5B9A\u4E49\u3002\u6B63\u6587\u4E2D\u7684\u4EE3\u7801\u8282\u9009\u6765\u81EA\u540C\u4E00\u4EFD\u5FEB\u7167\u3002"}),(0,n.jsx)(o.A,{variant:"commerce",step:5,nav:!0}),(0,n.jsxs)(t.p,{children:["\u5C06\u6700\u7EC8\u7248\u672C\u4FDD\u5B58\u4E3A ",(0,n.jsx)(t.code,{children:"agent.py"}),"\uFF0C\u5728\u865A\u62DF\u73AF\u5883\u4E2D\u5B89\u88C5\u4F9D\u8D56\uFF1A"]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"python -m pip install anthropic python-dotenv\n"})}),(0,n.jsxs)(t.p,{children:["\u5F53\u524D\u4EE3\u7801\u5FEB\u7167\u4F7F\u7528 DeepSeek \u7684 Anthropic \u517C\u5BB9\u63A5\u53E3\u3002\u5728\u672C\u5730 ",(0,n.jsx)(t.code,{children:".env"})," \u4E2D\u914D\u7F6E\u8BE5\u670D\u52A1\u7684 ",(0,n.jsx)(t.code,{children:"ANTHROPIC_API_KEY"}),"\uFF0C\u4E0D\u8981\u628A\u771F\u5B9E\u5BC6\u94A5\u63D0\u4EA4\u5230\u4ED3\u5E93\uFF1B\u4F7F\u7528\u5176\u4ED6\u670D\u52A1\u65F6\uFF0C\u9700\u8981\u4E00\u5E76\u6838\u5BF9\u63A5\u53E3\u5730\u5740\u3001\u6A21\u578B\u540D\u548C\u5BC6\u94A5\u3002"]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"python agent.py\n"})}),(0,n.jsx)(t.p,{children:"\u8F93\u5165\u201C\u6211\u60F3\u627E\u8033\u673A\u201D\uFF0C\u89C2\u5BDF\u641C\u7D22\u7ED3\u679C\u5982\u4F55\u8FDB\u5165\u540E\u7EED\u56DE\u7B54\u3002\u4E5F\u53EF\u4EE5\u8F93\u5165\u76EE\u5F55\u4E2D\u4E0D\u5B58\u5728\u7684\u201C\u671B\u8FDC\u955C\u201D\uFF0C\u89C2\u5BDF\u6A21\u578B\u600E\u6837\u5904\u7406\u7A7A\u7ED3\u679C\u3002\u771F\u5B9E\u6A21\u578B\u7684\u63AA\u8F9E\u548C\u8C03\u7528\u6B21\u6570\u53EF\u80FD\u4E0D\u540C\uFF0C\u8FD9\u91CC\u5173\u6CE8\u7684\u662F\u8C03\u7528\u4E0E\u56DE\u4F20\u7684\u8FC7\u7A0B\u3002"})]}),"\n",(0,n.jsx)(t.p,{children:"\u8FD9\u5C31\u662F\u8D2D\u7269\u52A9\u624B\u7684\u57FA\u672C\u5FAA\u73AF\uFF1A\u6A21\u578B\u63D0\u51FA\u5DE5\u5177\u8BF7\u6C42\uFF0C\u7A0B\u5E8F\u6267\u884C\u5E76\u9001\u56DE\u7ED3\u679C\uFF0C\u6A21\u578B\u7EE7\u7EED\u56DE\u7B54\u3002\u4EE5\u540E\u52A0\u5165\u5546\u54C1\u8BE6\u60C5\u548C\u8D2D\u7269\u8F66\u65F6\uFF0C\u6211\u4EEC\u4ECD\u4F1A\u6CBF\u7528\u8FD9\u4E2A\u8FC7\u7A0B\uFF0C\u53EA\u662F\u8BA9\u6A21\u578B\u53EF\u4EE5\u9009\u62E9\u66F4\u591A\u5DE5\u5177\u3002"}),"\n",(0,n.jsxs)(s,{children:[(0,n.jsx)("summary",{children:"\u53C2\u8003\u8D44\u6599"}),(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://academy.claude.com/courses/building-with-the-claude-api/introducing-tool-use",children:"\u5DE5\u5177\u8C03\u7528\u5165\u95E8 \xb7 Claude Academy"})," \xb7 ",(0,n.jsx)(t.a,{href:"https://platform.claude.com/docs/en/agents-and-tools/tool-use/handle-tool-calls",children:"\u5904\u7406\u5DE5\u5177\u8C03\u7528\u4E0E\u7ED3\u679C \xb7 Claude API \u6587\u6863"})]})]})]})}function g(e={}){let{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},83573(e,t,s){s.d(t,{A:()=>o});var r=s(96540);let n=(...e)=>e.filter((e,t,s)=>!!e&&""!==e.trim()&&s.indexOf(e)===t).join(" ").trim(),l=e=>{let t=e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,s)=>s?s.toUpperCase():t.toLowerCase());return t.charAt(0).toUpperCase()+t.slice(1)};var a={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let i=(0,r.forwardRef)(({color:e="currentColor",size:t=24,strokeWidth:s=2,absoluteStrokeWidth:l,className:i="",children:o,iconNode:c,...d},p)=>(0,r.createElement)("svg",{ref:p,...a,width:t,height:t,stroke:e,strokeWidth:l?24*Number(s)/Number(t):s,className:n("lucide",i),...!o&&!(e=>{for(let t in e)if(t.startsWith("aria-")||"role"===t||"title"===t)return!0;return!1})(d)&&{"aria-hidden":"true"},...d},[...c.map(([e,t])=>(0,r.createElement)(e,t)),...Array.isArray(o)?o:[o]])),o=(e,t)=>{let s=(0,r.forwardRef)(({className:s,...a},o)=>(0,r.createElement)(i,{ref:o,iconNode:t,className:n(`lucide-${l(e).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,s),...a}));return s.displayName=l(e),s}},45773(e,t,s){s.d(t,{A:()=>r});let r=(0,s(83573).A)("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]])},35404(e,t,s){s.d(t,{A:()=>r});let r=(0,s(83573).A)("copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]])},7611(e,t,s){s.d(t,{A:()=>r});let r=(0,s(83573).A)("pause",[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]])},85731(e,t,s){s.d(t,{A:()=>r});let r=(0,s(83573).A)("play",[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]])},59492(e,t,s){s.d(t,{A:()=>r});let r=(0,s(83573).A)("rotate-ccw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]])},78396(e,t,s){s.d(t,{A:()=>r});let r=(0,s(83573).A)("skip-back",[["path",{d:"M17.971 4.285A2 2 0 0 1 21 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z",key:"15892j"}],["path",{d:"M3 20V4",key:"1ptbpl"}]])},48858(e,t,s){s.d(t,{A:()=>r});let r=(0,s(83573).A)("skip-forward",[["path",{d:"M21 4v16",key:"7j8fe9"}],["path",{d:"M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z",key:"zs4d6"}]])},12153(e,t,s){s.d(t,{A:()=>m});var r=s(74848),n=s(96540),l=s(34164),a=s(59492),i=s(78396),o=s(7611),c=s(85731),d=s(48858);let p={claudeCode:{loopLabel:'while (stop_reason === "tool_use")',nodes:[{id:"start",label:"Start",x:160,y:30,w:120,h:40},{id:"api_call",label:"API Call",x:160,y:110,w:120,h:40},{id:"check",label:"stop_reason?",x:160,y:200,w:140,h:50,shape:"diamond"},{id:"execute",label:"Execute Tool",x:160,y:300,w:120,h:40},{id:"append",label:"Append Result",x:160,y:380,w:120,h:40},{id:"end",label:"Break / Done",x:380,y:200,w:120,h:40,tone:"end"}],edges:[{from:"start",to:"api_call"},{from:"api_call",to:"check"},{from:"check",to:"execute",label:"tool_use",labelAt:[235,250]},{from:"execute",to:"append"},{from:"append",to:"api_call",fromSide:"left",toSide:"left",via:[[50,380],[50,110]]},{from:"check",to:"end",fromSide:"right",toSide:"left",label:"end_turn",labelAt:[270,190]}],frames:[{title:"The While Loop",desc:"\u6BCF\u4E2A Agent \u90FD\u662F\u4E00\u4E2A while \u5FAA\u73AF\uFF0C\u6301\u7EED\u8C03\u7528\u6A21\u578B\u76F4\u5230\u5B83\u8BF4\u300C\u505C\u6B62\u300D\u3002",nodes:[],edges:[],messages:[]},{title:"\u7528\u6237\u8F93\u5165",desc:"\u5FAA\u73AF\u4ECE\u7528\u6237\u53D1\u9001\u6D88\u606F\u5F00\u59CB\u3002",nodes:["start"],edges:[],messages:[{role:"user",detail:"Fix the login bug",tone:"user"}]},{title:"\u8C03\u7528\u6A21\u578B",desc:"\u5C06\u6240\u6709\u6D88\u606F\u53D1\u7ED9 LLM\uFF0C\u5B83\u770B\u5230\u5168\u90E8\u4E0A\u4E0B\u6587\u540E\u51B3\u5B9A\u4E0B\u4E00\u6B65\u3002",nodes:["api_call"],edges:["start->api_call"],messages:[]},{title:"stop_reason: tool_use",desc:"\u6A21\u578B\u60F3\u4F7F\u7528\u5DE5\u5177\uFF0C\u5FAA\u73AF\u7EE7\u7EED\u3002",nodes:["check","execute"],edges:["api_call->check","check->execute"],messages:[{role:"assistant",detail:"tool_use: read_file",tone:"assistant"}]},{title:"\u6267\u884C\u5E76\u8FFD\u52A0",desc:"\u8FD0\u884C\u5DE5\u5177\uFF0C\u5C06\u7ED3\u679C\u8FFD\u52A0\u5230 messages[]\uFF0C\u518D\u6B21\u5582\u7ED9\u6A21\u578B\u3002",nodes:["execute","append"],edges:["execute->append"],messages:[{role:"tool_result",detail:"auth.ts contents...",tone:"tool"}]},{title:"\u518D\u6B21\u5FAA\u73AF",desc:"\u540C\u6837\u7684\u4EE3\u7801\u8DEF\u5F84\uFF0C\u7B2C\u4E8C\u6B21\u8FED\u4EE3\u3002\u6A21\u578B\u51B3\u5B9A\u7F16\u8F91\u6587\u4EF6\u3002",nodes:["api_call","check","execute","append"],edges:["append->api_call","api_call->check","check->execute","execute->append"],messages:[{role:"assistant",detail:"tool_use: edit_file",tone:"assistant"},{role:"tool_result",detail:"file updated",tone:"tool"}],tag:{x:60,y:130,text:"iter #2"}},{title:"stop_reason: end_turn",desc:"\u6A21\u578B\u5B8C\u6210\u4EFB\u52A1\uFF0C\u5FAA\u73AF\u9000\u51FA\u3002\u8FD9\u5C31\u662F\u6574\u4E2A Agent\u3002",nodes:["check","end"],edges:["api_call->check","check->end"],messages:[{role:"assistant",detail:"end_turn: Done!",tone:"end"}],tag:{x:60,y:130,text:"iter #2"}}]},commerceLoop:{loopLabel:'while True:  # \u5916\u5C42\u7B49\u8F93\u5165\uFF0C\u5185\u5C42 stop_reason == "tool_use" \u5C31\u7EE7\u7EED',nodes:[{id:"input",label:"input()",x:160,y:30,w:120,h:40},{id:"api",label:"messages.create",x:160,y:110,w:140,h:40},{id:"check",label:"stop_reason?",x:160,y:200,w:140,h:50,shape:"diamond"},{id:"tool",label:"search_products",x:160,y:300,w:140,h:40},{id:"append",label:"\u8FFD\u52A0 tool_result",x:160,y:380,w:140,h:40},{id:"print",label:"\u6253\u5370\u56DE\u590D",x:380,y:200,w:120,h:40,tone:"end"}],edges:[{from:"input",to:"api"},{from:"api",to:"check"},{from:"check",to:"tool",label:"tool_use",labelAt:[235,250]},{from:"tool",to:"append"},{from:"append",to:"api",fromSide:"left",toSide:"left",via:[[50,380],[50,110]]},{from:"check",to:"print",fromSide:"right",toSide:"left",label:"end_turn",labelAt:[270,190]},{from:"print",to:"input",fromSide:"top",toSide:"right",via:[[380,30]],label:"\u7B49\u4E0B\u4E00\u53E5",labelAt:[300,22]}],frames:[{title:"\u4E24\u5C42\u5FAA\u73AF",desc:"\u8FD9\u662F\u6211\u4EEC\u8FD9\u4E00\u6B65\u7684\u7ED3\u6784\uFF1A\u5916\u5C42\u5FAA\u73AF\u7B49\u5F85\u7528\u6237\u8F93\u5165\uFF0C\u5185\u5C42\u5FAA\u73AF\u53EA\u8981\u6A21\u578B\u8FD8\u60F3\u4F7F\u7528\u5DE5\u5177\u5C31\u7EE7\u7EED\u3002\u6574\u4E2A agent \u5C31\u662F\u8FD9\u4E00\u5F20\u56FE\u3002",nodes:[],edges:[],messages:[]},{title:"\u7528\u6237\u8F93\u5165",desc:"\u7528\u6237\u8BF4\u4E86\u4E00\u53E5\u8BDD\u3002\u6211\u4EEC\u628A\u5B83\u8FFD\u52A0\u8FDB messages\uFF0C\u5916\u5C42\u5FAA\u73AF\u5F00\u59CB\u65B0\u7684\u4E00\u8F6E\u3002",nodes:["input"],edges:[],messages:[{role:"user",detail:"\u6211\u60F3\u627E\u8033\u673A",tone:"user"}]},{title:"\u8C03\u6A21\u578B",desc:"\u6211\u4EEC\u628A messages \u548C tools=[search_products_schema] \u4E00\u8D77\u53D1\u7ED9\u6A21\u578B\u3002\u6A21\u578B\u770B\u5230\u6709\u5DE5\u5177\u53EF\u7528\u3002",nodes:["api"],edges:["input->api"],messages:[]},{title:"stop_reason: tool_use",desc:"\u6A21\u578B\u6CA1\u6709\u76F4\u63A5\u56DE\u7B54\uFF0C\u800C\u662F\u8FD4\u56DE\u4E86\u4E00\u4E2A tool_use \u5757\uFF0C\u8868\u793A\u5B83\u60F3\u641C\u7D22\u3002\u6211\u4EEC\u628A\u6574\u4E2A assistant \u56DE\u590D\u539F\u6837\u8FFD\u52A0\u8FDB messages\u3002",nodes:["check","tool"],edges:["api->check","check->tool"],messages:[{role:"assistant",detail:'tool_use: search_products({"query": "\u8033\u673A"})',tone:"assistant"}]},{title:"\u6267\u884C\u5E76\u8FFD\u52A0",desc:"\u6211\u4EEC\u5728 TOOL_MAP \u91CC\u627E\u5230\u5BF9\u5E94\u7684\u51FD\u6570\uFF0C\u8FD0\u884C\u4E00\u6B21\u5173\u952E\u8BCD\u5339\u914D\uFF0C\u518D\u628A\u7ED3\u679C\u6253\u5305\u6210 tool_result\uFF0C\u4F5C\u4E3A\u4E00\u6761 user \u6D88\u606F\u8FFD\u52A0\u8FDB\u53BB\u3002",nodes:["tool","append"],edges:["tool->append"],messages:[{role:"tool_result",detail:'[{"id": "AR-1105", "title": "ACME Select \u4E3B\u52A8\u964D\u566A\u8033\u673A", "price": 249.0, \u2026}]',tone:"tool"}]},{title:"\u518D\u8F6C\u4E00\u5708",desc:"\u540C\u6837\u7684\u4EE3\u7801\u8DEF\u5F84\uFF0C\u7B2C\u4E8C\u6B21\u8C03\u7528\u6A21\u578B\u3002\u4E0D\u540C\u7684\u662F\uFF0C\u8FD9\u4E00\u6B21\u6A21\u578B\u624B\u91CC\u5DF2\u7ECF\u6709\u641C\u7D22\u7ED3\u679C\u4E86\u3002",nodes:["api","check"],edges:["append->api","api->check"],messages:[],tag:{x:60,y:130,text:"iter #2"}},{title:"stop_reason: end_turn",desc:"\u6A21\u578B\u7528\u641C\u7D22\u7ED3\u679C\u7EC4\u7EC7\u51FA\u56DE\u7B54\uFF0C\u5185\u5C42\u5FAA\u73AF\u8DF3\u51FA\uFF0C\u6211\u4EEC\u628A\u6587\u672C\u6253\u5370\u51FA\u6765\u3002",nodes:["check","print"],edges:["check->print"],messages:[{role:"assistant",detail:"end_turn: ACME Select \u4E3B\u52A8\u964D\u566A\u8033\u673A\uFF0C\xa5249\uFF0C\u8BC4\u5206 4.8\uFF0C\u6709\u8D27\u3002",tone:"end"}],tag:{x:60,y:130,text:"iter #2"}},{title:"\u7B49\u4E0B\u4E00\u53E5",desc:"\u56DE\u5230\u5916\u5C42\u5FAA\u73AF\u7B49\u5F85\u8F93\u5165\u3002\u6CE8\u610F messages \u5E76\u4E0D\u4F1A\u6E05\u7A7A\uFF0C\u4E0B\u4E00\u53E5\u4F1A\u63A5\u7740\u8FD9\u6BB5\u4E0A\u4E0B\u6587\u7EE7\u7EED\u5BF9\u8BDD\uFF1B\u8F93\u5165\u4E3A\u7A7A\u65F6\u7A0B\u5E8F\u9000\u51FA\u3002",nodes:["input"],edges:["print->input"],messages:[]}]}},u={container:"container_zkbZ",panels:"panels_WwMO",leftPanel:"leftPanel_lakP",rightPanel:"rightPanel_7QQv",panelLabel:"panelLabel_Vh7H",svg:"svg_Gbeo",edge:"edge_LEdR",edgeActive:"edgeActive_xBwc",arrowHead:"arrowHead_rSDQ",arrowHeadActive:"arrowHeadActive_WRZB",edgeLabel:"edgeLabel_yZRy",node:"node_Xtc6",nodeActive:"nodeActive_B12t",nodeEnd:"nodeEnd_MrMV",nodeText:"nodeText_V_ks",nodeTextActive:"nodeTextActive_C3_O",tag:"tag_xMW_",messageList:"messageList_nsEa",emptyMsg:"emptyMsg_mAcP",messageItem:"messageItem_KG9q",slideIn:"slideIn_YpGc",tone_user:"tone_user_GWeI",tone_assistant:"tone_assistant_TwH6",tone_tool:"tone_tool_MB14",tone_end:"tone_end_PwGp",messageRole:"messageRole_ajDd",messageDetail:"messageDetail_zgNY",messageCount:"messageCount_RNQU",annotation:"annotation_I9Ze",annotationTitle:"annotationTitle_YVsP",annotationDesc:"annotationDesc_ozme",controls:"controls_HTL3",buttons:"buttons_qxdK",btn:"btn_ApGo",stepIndicator:"stepIndicator_ly4B",dots:"dots_cCiq",dot:"dot_vheH",dotPast:"dotPast_vLxS",dotCurrent:"dotCurrent_Qu7l",stepCount:"stepCount_dI9y"};function h(e,t){let s=e.w/2,r=e.h/2;return"top"===t?[e.x,e.y-r]:"bottom"===t?[e.x,e.y+r]:"left"===t?[e.x-s,e.y]:[e.x+s,e.y]}function m({variant:e="claudeCode"}){let t=p[e];if(!t)throw Error(`AgentLoopViz: unknown variant "${e}"`);return(0,r.jsx)(f,{run:t},e)}function f({run:e}){let{nodes:t,edges:s,frames:p}=e,m=Object.fromEntries(t.map(e=>[e.id,e])),x=p.length,[g,y]=(0,n.useState)(0),[v,_]=(0,n.useState)(!1),j=(0,n.useRef)(null);(0,n.useEffect)(()=>(v&&(j.current=setInterval(()=>{y(e=>e>=x-1?(_(!1),e):e+1)},2500)),()=>clearInterval(j.current)),[v,x]);let b=p[g],w=b.nodes||[],k=b.edges||[],A=p.slice(0,g+1).flatMap(e=>e.messages||[]),N=[{icon:(0,r.jsx)(a.A,{size:16}),title:"\u91CD\u7F6E",onClick:()=>{y(0),_(!1)},disabled:!1},{icon:(0,r.jsx)(i.A,{size:16}),title:"\u4E0A\u4E00\u5E27",onClick:()=>y(e=>Math.max(0,e-1)),disabled:0===g},{icon:v?(0,r.jsx)(o.A,{size:16}):(0,r.jsx)(c.A,{size:16}),title:v?"\u6682\u505C":"\u64AD\u653E",onClick:()=>_(e=>!e),disabled:!1},{icon:(0,r.jsx)(d.A,{size:16}),title:"\u4E0B\u4E00\u5E27",onClick:()=>y(e=>Math.min(x-1,e+1)),disabled:g===x-1}];return(0,r.jsxs)("div",{className:u.container,children:[(0,r.jsxs)("div",{className:u.panels,children:[(0,r.jsxs)("div",{className:u.leftPanel,children:[(0,r.jsx)("div",{className:u.panelLabel,children:e.loopLabel}),(0,r.jsxs)("svg",{viewBox:"0 0 500 440",className:u.svg,role:"img","aria-label":b.title,children:[(0,r.jsxs)("defs",{children:[(0,r.jsx)("marker",{id:"alv-arrow",markerWidth:"8",markerHeight:"6",refX:"8",refY:"3",orient:"auto",children:(0,r.jsx)("polygon",{points:"0 0, 8 3, 0 6",className:u.arrowHead})}),(0,r.jsx)("marker",{id:"alv-arrow-active",markerWidth:"8",markerHeight:"6",refX:"8",refY:"3",orient:"auto",children:(0,r.jsx)("polygon",{points:"0 0, 8 3, 0 6",className:u.arrowHeadActive})})]}),s.map(e=>{let t=`${e.from}->${e.to}`,s=k.includes(t),{d:n,labelAt:a}=function(e,t){let s=t[e.from],r=t[e.to],[n,l]=r.y-r.h/2>=s.y+s.h/2?["bottom","top"]:s.y-s.h/2>=r.y+r.h/2?["top","bottom"]:r.x>s.x?["right","left"]:["left","right"],a=h(s,e.fromSide||n),i=h(r,e.toSide||l),o=[a,...e.via||[],i],c=o.map(([e,t],s)=>`${0===s?"M":"L"} ${e} ${t}`).join(" "),d=e.labelAt;if(!d&&e.label){let[e,t]=o[0],[s,r]=o[o.length-1];d=1>Math.abs(e-s)?[e+44,(t+r)/2+4]:[(e+s)/2,Math.min(t,r)-10]}return{d:c,labelAt:d}}(e,m);return(0,r.jsxs)("g",{children:[(0,r.jsx)("path",{d:n,className:(0,l.A)(u.edge,s&&u.edgeActive),markerEnd:s?"url(#alv-arrow-active)":"url(#alv-arrow)"}),e.label&&(0,r.jsx)("text",{x:a[0],y:a[1],textAnchor:"middle",className:u.edgeLabel,children:e.label})]},t)}),t.map(e=>{let t=w.includes(e.id),s=(0,l.A)(u.node,t&&("end"===e.tone?u.nodeEnd:u.nodeActive)),n=(0,l.A)(u.nodeText,t&&u.nodeTextActive);if("diamond"===e.shape){let t=e.w/2,l=e.h/2;return(0,r.jsxs)("g",{children:[(0,r.jsx)("polygon",{points:`${e.x},${e.y-l} ${e.x+t},${e.y} ${e.x},${e.y+l} ${e.x-t},${e.y}`,className:s}),(0,r.jsx)("text",{x:e.x,y:e.y+4,textAnchor:"middle",fontSize:11,className:n,children:e.label})]},e.id)}return(0,r.jsxs)("g",{children:[(0,r.jsx)("rect",{x:e.x-e.w/2,y:e.y-e.h/2,width:e.w,height:e.h,rx:8,className:s}),(0,r.jsx)("text",{x:e.x,y:e.y+4,textAnchor:"middle",fontSize:12,className:n,children:e.label})]},e.id)}),b.tag&&(0,r.jsx)("text",{x:b.tag.x,y:b.tag.y,textAnchor:"middle",className:u.tag,children:b.tag.text})]})]}),(0,r.jsxs)("div",{className:u.rightPanel,children:[(0,r.jsx)("div",{className:u.panelLabel,children:"messages[]"}),(0,r.jsxs)("div",{className:u.messageList,children:[0===A.length&&(0,r.jsx)("div",{className:u.emptyMsg,children:"[ empty ]"}),A.map((e,t)=>(0,r.jsxs)("div",{className:(0,l.A)(u.messageItem,u[`tone_${e.tone||"assistant"}`]),children:[(0,r.jsx)("div",{className:u.messageRole,children:e.role}),(0,r.jsx)("div",{className:u.messageDetail,children:e.detail})]},t)),A.length>0&&(0,r.jsxs)("div",{className:u.messageCount,children:["length: ",A.length]})]})]})]}),(0,r.jsxs)("div",{className:u.annotation,children:[(0,r.jsx)("div",{className:u.annotationTitle,children:b.title}),(0,r.jsx)("div",{className:u.annotationDesc,children:b.desc})]}),(0,r.jsxs)("div",{className:u.controls,children:[(0,r.jsx)("div",{className:u.buttons,children:N.map(e=>(0,r.jsx)("button",{type:"button",onClick:e.onClick,disabled:e.disabled,title:e.title,"aria-label":e.title,className:u.btn,children:e.icon},e.title))}),(0,r.jsxs)("div",{className:u.stepIndicator,children:[(0,r.jsx)("div",{className:u.dots,children:p.map((e,t)=>(0,r.jsx)("div",{className:(0,l.A)(u.dot,t===g&&u.dotCurrent,t<g&&u.dotPast)},t))}),(0,r.jsxs)("span",{className:u.stepCount,children:[g+1,"/",x]})]})]})]})}},87096(e,t,s){s.d(t,{A:()=>k});var r=s(74848),n=s(96540),l=s(34164),a=s(67810);let i=[{title:"\u642D\u597D\u9879\u76EE\u9AA8\u67B6",body:["\u6838\u5FC3\u4EE3\u7801\u653E\u8FDB `vector/` \u5305\uFF0C\u6D4B\u8BD5\u653E\u8FDB `tests/` \u5305\uFF0C\u4E24\u4E2A\u6587\u4EF6\u5939\u90FD\u6709 `__init__.py`\uFF0C\u6839\u76EE\u5F55\u53EA\u7559\u4E00\u4E2A\u5165\u53E3\u6587\u4EF6\u3002","\u5728\u6839\u76EE\u5F55\u8FD0\u884C `python -m unittest`\uFF0Cunittest \u4F1A\u81EA\u52A8\u627E\u5230 `tests/test_vector.py` \u91CC\u7684 `test_init` \u5E76\u8FD0\u884C\u3002\u70B9\u5DE6\u4FA7\u6587\u4EF6\u6811\u53EF\u4EE5\u770B\u6BCF\u4E2A\u6587\u4EF6\u3002"],file:"tests/test_vector.py",files:{"examply.py":"",".gitignore":`# Python-generated files
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
`}]}];var o=s(17181);let c=[{title:"\u7B2C\u4E00\u6B21 API \u8C03\u7528",body:["\u6211\u4EEC\u5148\u5199\u4E00\u4E2A\u6700\u7B80\u5355\u7684\u811A\u672C\uFF1A\u7528 `Anthropic()` \u521B\u5EFA\u5BA2\u6237\u7AEF\uFF0C\u8C03\u7528 `messages.create()` \u53D1\u9001\u4E00\u53E5\u7CFB\u7EDF\u63D0\u793A\u8BCD\u548C\u4E00\u6761\u7528\u6237\u6D88\u606F\uFF0C\u7136\u540E\u628A\u56DE\u590D\u91CC\u7684 text \u5757\u6253\u5370\u51FA\u6765\u3002\u8FD9\u91CC\u6CA1\u6709\u5DE5\u5177\uFF0C\u4E5F\u6CA1\u6709\u5FAA\u73AF\uFF0C\u6A21\u578B\u53EA\u80FD\u804A\u5929\u3002","\u8FD9\u4E2A\u811A\u672C\u8D70\u7684\u662F DeepSeek \u7684 Anthropic \u517C\u5BB9\u63A5\u53E3\uFF0C\u6240\u4EE5 `base_url` \u548C `model` \u586B\u7684\u662F DeepSeek \u7684\u503C\u3002\u5982\u679C\u6362\u56DE\u5B98\u65B9\u63A5\u53E3\uFF0C\u53EA\u9700\u8981\u5220\u6389 `base_url` \u5E76\u6539\u6A21\u578B\u540D\u3002"],file:"agent.py",files:{"agent.py":o.A.s00["agent.py"]}},{title:"\u52A0\u5165 search_products \u5DE5\u5177",body:["\u8FD9\u4E00\u6B65\u4E00\u6B21\u52A0\u5165\u4E86\u56DB\u6837\u4E1C\u897F\uFF1A\u5047\u5546\u54C1\u5217\u8868\u3001\u5DE5\u5177 schema\u3001\u641C\u7D22\u51FD\u6570\u548C\u5BF9\u8BDD\u5FAA\u73AF\u3002\u7EFF\u5E95\u7684\u884C\u662F\u76F8\u5BF9\u4E0A\u4E00\u6B65\u65B0\u589E\u7684\u5185\u5BB9\uFF0C\u53F3\u4E0A\u89D2\u53EF\u4EE5\u5207\u6362\u5230\u201C\u53EA\u770B\u5F53\u524D\u201D\u67E5\u770B\u5B8C\u6574\u6587\u4EF6\u3002","\u63A5\u4E0B\u6765\u7684\u4E09\u6B65\uFF0C\u6211\u4EEC\u628A\u8FD9\u56DB\u6837\u4E1C\u897F\u62C6\u5F00\u9010\u6BB5\u6765\u770B\u3002"],file:"agent.py",files:{"agent.py":o.A.s01["agent.py"]}},{title:"\u5DE5\u5177 schema \u5C31\u662F\u7ED9\u6A21\u578B\u7684\u8BF4\u660E\u4E66",body:["`description` \u4E0D\u662F\u6CE8\u91CA\uFF0C\u800C\u662F\u7ED9\u6A21\u578B\u7684\u4F7F\u7528\u8BF4\u660E\uFF1A\u4EC0\u4E48\u65F6\u5019\u8BE5\u641C\u3001\u600E\u4E48\u641C\u3001\u987E\u5BA2\u63D0\u5230\u591A\u4E2A\u5546\u54C1\u65F6\u8981\u5206\u5F00\u641C\u3002`input_schema` \u91CC\u6BCF\u4E2A\u5B57\u6BB5\u7684 description \u4E5F\u662F\u540C\u6837\u7684\u9053\u7406\u3002","\u6A21\u578B\u53EA\u80FD\u770B\u5230\u8FD9\u6BB5\u6587\u5B57\uFF0C\u770B\u4E0D\u5230\u51FD\u6570\u4F53\u3002\u56E0\u6B64\u51FD\u6570\u5199\u5F97\u518D\u597D\uFF0C\u5982\u679C description \u6CA1\u6709\u8BF4\u6E05\u695A\uFF0C\u6A21\u578B\u7167\u6837\u4E0D\u4F1A\u7528\uFF0C\u6216\u8005\u7528\u9519\u3002"],file:"agent.py",lines:[[49,72]]},{title:"\u641C\u7D22\u51FD\u6570\u4E0E\u5206\u53D1\u8868",body:["\u641C\u7D22\u51FD\u6570\u53EA\u505A\u5173\u952E\u8BCD\u5339\u914D\uFF0C\u5E76\u8FD4\u56DE JSON \u5B57\u7B26\u4E32\u3002\u8FD9\u662F\u56E0\u4E3A\u5DE5\u5177\u7ED3\u679C\u6700\u7EC8\u8981\u4F5C\u4E3A\u6587\u672C\u653E\u8FDB messages\uFF0C\u6240\u4EE5\u6211\u4EEC\u5728\u8FD9\u91CC\u76F4\u63A5\u5E8F\u5217\u5316\u3002","`TOOL_MAP` \u628A\u5DE5\u5177\u540D\u6620\u5C04\u5230\u5BF9\u5E94\u7684\u51FD\u6570\u3002\u4EE5\u540E\u52A0\u65B0\u5DE5\u5177\u65F6\uFF0C\u53EA\u9700\u8981\u5F80\u8FD9\u5F20\u8868\u91CC\u6DFB\u4E00\u884C\uFF0C\u5FAA\u73AF\u672C\u8EAB\u4E0D\u7528\u6539\u52A8\u3002"],file:"agent.py",lines:[[75,87]]},{title:"\u4E24\u5C42 while",body:["\u5916\u5C42 `while` \u8D1F\u8D23\u7B49\u5F85\u7528\u6237\u8F93\u5165\uFF0C\u9047\u5230\u7A7A\u8F93\u5165\u5C31\u9000\u51FA\u3002\u5185\u5C42 `while` \u624D\u662F agent \u5FAA\u73AF\u7684\u672C\u4F53\uFF1A\u8C03\u7528\u6A21\u578B\uFF0C\u628A assistant \u7684\u56DE\u590D\u6574\u4E2A\u8FFD\u52A0\u8FDB messages\uFF1B\u5982\u679C `stop_reason` \u4E0D\u662F `tool_use` \u5C31\u8DF3\u51FA\uFF1B\u5426\u5219\u6267\u884C\u6BCF\u4E00\u4E2A tool_use \u5757\uFF0C\u628A `tool_result` \u6253\u5305\u6210\u4E00\u6761 user \u6D88\u606F\u8FFD\u52A0\u8FDB\u53BB\uFF0C\u7136\u540E\u518D\u5FAA\u73AF\u4E00\u6B21\u3002","\u6709\u4E00\u4E2A\u7EC6\u8282\u9700\u8981\u6CE8\u610F\uFF1Aassistant \u7684 `response.content` \u8981\u539F\u6837\u8FFD\u52A0\uFF0C\u5305\u62EC\u5176\u4E2D\u7684 tool_use \u5757\uFF1B\u4E0B\u4E00\u6761 user \u6D88\u606F\u91CC\u7684 `tool_use_id` \u5FC5\u987B\u4E0E\u4E4B\u5BF9\u5E94\uFF0C\u6A21\u578B\u624D\u77E5\u9053\u54EA\u4E2A\u7ED3\u679C\u5C5E\u4E8E\u54EA\u6B21\u8C03\u7528\u3002"],file:"agent.py",lines:[[102,139]]}],d="\u8FD0\u884C",p="\u6536\u8D77",u={unittest:{steps:i},commerce:{steps:c}};var h=s(51507),m=s(67564);let f="btn_JmFc",x="btnPrimary_x2Yk",g="termIcon_Zbcm";function y(e,t){return e.replace(/\{(\w+)\}/g,(e,s)=>void 0!==t[s]?String(t[s]):`{${s}}`)}function v({text:e}){return e.split(/(`[^`]+`)/g).map((e,t)=>e.startsWith("`")&&e.endsWith("`")&&e.length>=2?(0,r.jsx)("code",{className:"inlineCode_AI70",children:e.slice(1,-1)},t):(0,r.jsx)(n.Fragment,{children:e},t))}function _(e){return(0,r.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",...e,children:(0,r.jsx)("polygon",{points:"6 3 20 12 6 21 6 3"})})}function j(e){return(0,r.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",...e,children:[(0,r.jsx)("rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}),(0,r.jsx)("path",{d:"m7 11 2-2-2-2"}),(0,r.jsx)("path",{d:"M11 13h4"})]})}function b(e){return(0,r.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",...e,children:(0,r.jsx)("rect",{x:"4",y:"4",width:"16",height:"16",rx:"2"})})}function w({run:e}){let t=(0,n.useMemo)(()=>e.output.replace(/\n$/,"").split("\n"),[e.output]),{shown:s,started:a,done:i}=(0,h.A)(t,!0);return(0,r.jsxs)("div",{className:"termOutput_aJer","aria-live":"polite",children:[(0,r.jsxs)("div",{className:"termOutputRow_eFC7",children:[(0,r.jsx)("span",{className:"termMark_yyoX",title:"\u9884\u5148\u5F55\u5236\u7684\u8FD0\u884C\u7ED3\u679C\uFF0C\u4E0D\u662F\u6D4F\u89C8\u5668\u5B9E\u65F6\u6267\u884C",children:(0,r.jsx)(j,{className:"termMarkIcon_o1H5","aria-label":"\u7EC8\u7AEF",role:"img"})}),(0,r.jsxs)("div",{className:"termOutputBody_dl5T",children:[!a&&(0,r.jsx)("div",{className:"termRunning_L5SW",children:"\u8FD0\u884C\u4E2D\u2026"}),t.slice(0,s).map((e,t)=>(0,r.jsx)("div",{className:(0,l.A)("run-output__line","termLine_seW0"),children:""===e?" ":e},t)),a&&!i&&(0,r.jsx)("span",{className:"run-output__cursor"})]})]}),i&&(0,r.jsx)("div",{className:(0,l.A)("termFoot_BTl4",0!==e.exit&&"termFootFail_H1CC"),children:y("\u8FDB\u7A0B\u9000\u51FA\uFF0C\u9000\u51FA\u7801 {code}",{code:e.exit})})]})}function k({variant:e,step:t=1,nav:s=!1}){let n=u[e];if(!n)throw Error(`CodeWalkthrough: unknown variant "${e}"`);return(0,r.jsx)(A,{data:n,initialStep:t,nav:s},e)}function A({data:e,initialStep:t,nav:s}){let i,{steps:o}=e,c=(0,a.A)(),u=(0,n.useMemo)(()=>(function(e){let t=[],s={};for(let r of e){for(let[e,t]of(s={...s},Object.entries(r.files||{})))null===t?delete s[e]:s[e]=t;t.push(s)}return t})(o),[o]),[h,j]=(0,n.useState)(()=>Math.min(Math.max(t-1,0),o.length-1)),[k,N]=(0,n.useState)(null),E=o[h],C=u[h],V=h>0?u[h-1]:null,M=c.plain.backgroundColor,O=E.runs||[],T=e=>{o[e]&&(j(e),N(null))};return(0,r.jsxs)("div",{className:"root_lC3A",children:[(0,r.jsxs)("div",{className:"stepsPanel_A8J6",children:[(0,r.jsxs)("div",{className:"stepHead_rWEC",children:[(0,r.jsx)("span",{className:"stepTitle_eRCc",children:y("\u7B2C {n} \u6B65 \xb7 {title}",{n:h+1,title:E.title})}),(0,r.jsx)("span",{className:"stepCounter_d1xs",children:y("{n} / {total}",{n:h+1,total:o.length})})]}),(0,r.jsx)("div",{className:"stepBody_xfZr",children:E.body.map((e,t)=>(0,r.jsx)("p",{children:(0,r.jsx)(v,{text:e})},t))}),s&&(0,r.jsxs)("div",{className:"navButtons_ENqt",children:[(0,r.jsx)("button",{type:"button",disabled:0===h,onClick:()=>T(h-1),className:(0,l.A)(f,x),children:"\u4E0A\u4E00\u6B65"}),(0,r.jsx)("button",{type:"button",disabled:h===o.length-1,onClick:()=>T(h+1),className:(0,l.A)(f,x),children:"\u4E0B\u4E00\u6B65"})]})]}),(0,r.jsx)(m.A,{files:C,previousFiles:V,stepKey:h,preferredFiles:(i=Object.keys(E.files||{}).filter(e=>Object.hasOwn(C,e)),(E.file?[E.file,...i.filter(e=>e!==E.file)]:i).filter(e=>Object.hasOwn(C,e))),focusFile:E.file,focusRanges:E.lines}),O.length>0&&(0,r.jsx)("div",{className:"terminal_x6YH",style:{backgroundColor:M,color:c.plain.color},children:O.map((e,t)=>{let s=k===t;return(0,r.jsxs)("div",{className:"termRun_pPQl",children:[(0,r.jsxs)("div",{className:"termPrompt__Qbi",children:[(0,r.jsx)("span",{className:"termDollar_FMaj","aria-hidden":"true",children:"$"}),(0,r.jsx)("code",{className:"termCmd_KH0y",children:e.cmd}),(0,r.jsx)("button",{type:"button","aria-expanded":s,"aria-label":s?p:d,title:s?p:d,onClick:()=>N(s?null:t),className:(0,l.A)("termBtn_CC8E",s&&"termBtnOpen_rzSH"),children:s?(0,r.jsx)(b,{className:g}):(0,r.jsx)(_,{className:g})})]}),s&&(0,r.jsx)(w,{run:e})]},`${h}-${t}`)})})]})}},67564(e,t,s){s.d(t,{A:()=>X});var r,n,l,a,i,o,c,d,p,u,h,m,f,x,g=s(74848),y=s(96540),v=s(34164),_=s(83573);let j=(0,_.A)("file-diff",[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M9 10h6",key:"9gxzsh"}],["path",{d:"M12 13V7",key:"h0r20n"}],["path",{d:"M9 17h6",key:"r8uit2"}]]),b=(0,_.A)("file-code-corner",[["path",{d:"M4 12.15V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3.35",key:"1wthlu"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"m5 16-3 3 3 3",key:"331omg"}],["path",{d:"m9 22 3-3-3-3",key:"lsp7cz"}]]);var w=s(71765),k=s(67810);let A={"files.heading":"\u6587\u4EF6","copy.idle":"\u590D\u5236\u4EE3\u7801","copy.copying":"\u590D\u5236\u4E2D\u2026","copy.copied":"\u5DF2\u590D\u5236","copy.error":"\u590D\u5236\u5931\u8D25","copy.hint":"\u590D\u5236\u5F53\u524D\u6B65\u9AA4\u4E2D {path} \u7684\u5B8C\u6574\u4EE3\u7801","copy.empty":"\u8BF7\u5148\u9009\u62E9\u4E00\u4E2A\u6587\u4EF6","copy.errorHint":"\u590D\u5236\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\u6216\u624B\u52A8\u9009\u62E9\u4EE3\u7801\u590D\u5236","diff.show":"\u663E\u793A\u6539\u52A8","diff.hide":"\u53EA\u770B\u5F53\u524D","badge.new":"\u65B0\u6587\u4EF6","badge.changed":"\u5DF2\u4FEE\u6539","aria.codeActions":"\u4EE3\u7801\u64CD\u4F5C","aria.openFiles":"\u5DF2\u6253\u5F00\u7684\u6587\u4EF6","aria.closeTab":"\u5173\u95ED {path}","empty.title":"\u6CA1\u6709\u6253\u5F00\u7684\u6587\u4EF6","empty.body":"\u4ECE\u6587\u4EF6\u5217\u8868\u6253\u5F00\u4E00\u4E2A\u6587\u4EF6\uFF0C\u6216\u901A\u8FC7\u6F14\u7EC3\u6B65\u9AA4\u8FDB\u884C\u5BFC\u822A"},N=(e,t)=>null!=t&&Object.hasOwn(e,t);function E(e,t,s,r){let n=!e||!Object.is(e.stepKey,r),l=[...new Set(s)].filter(e=>N(t,e)),a=(e?.tabs||[]).filter(e=>N(t,e)),i=n?[...l,...a.filter(e=>!l.includes(e))]:a,o=n&&l[0]||(i.includes(e?.activeFile)?e.activeFile:i[0])||null;return{files:t,stepKey:r,tabs:i,activeFile:o}}var C=s(45773);let V=(0,_.A)("circle-alert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);var M=s(35404);let O="treeItem_xqPD",T="treeName_oNgA",L="codeActionButton_f4xz",S="codeActionIcon_Y_2N";function R({text:e,path:t}){let[s,r]=(0,y.useState)("idle"),n=(0,y.useRef)(null),l=(0,y.useRef)(0),a=(0,y.useRef)(!1),i="string"==typeof e;(0,y.useEffect)(()=>()=>{clearTimeout(n.current),l.current+=1},[]);let o=async()=>{if(!i||a.current)return;let t=++l.current;a.current=!0,clearTimeout(n.current),r("copying");try{if(await navigator.clipboard.writeText(e),t!==l.current)return;r("copied"),n.current=setTimeout(()=>r("idle"),2e3)}catch{if(t!==l.current)return;r("error")}finally{t===l.current&&(a.current=!1)}},c=A[`copy.${s}`],d=i?"error"===s?A["copy.errorHint"]:"idle"===s?A["copy.hint"].replace("{path}",t):c:A["copy.empty"],p="copied"===s?C.A:"error"===s?V:M.A;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("button",{type:"button",className:(0,v.A)(L,"copied"===s&&"codeActionCopied_IhRM","error"===s&&"codeActionError_O3I0"),disabled:!i||"copying"===s,onClick:o,title:d,"aria-label":d,"aria-busy":"copying"===s,children:(0,g.jsx)(p,{className:S,"aria-hidden":"true",focusable:"false"})}),(0,g.jsx)("span",{className:"copyStatus_X_3r",role:"status","aria-live":"polite","aria-atomic":"true",children:"copied"===s?A["copy.copied"]:"error"===s?A["copy.errorHint"]:""})]})}function I(){return(I=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var r in s)({}).hasOwnProperty.call(s,r)&&(e[r]=s[r])}return e}).apply(null,arguments)}function B(){return(B=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var r in s)({}).hasOwnProperty.call(s,r)&&(e[r]=s[r])}return e}).apply(null,arguments)}function P(){return(P=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var r in s)({}).hasOwnProperty.call(s,r)&&(e[r]=s[r])}return e}).apply(null,arguments)}function F(){return(F=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var r in s)({}).hasOwnProperty.call(s,r)&&(e[r]=s[r])}return e}).apply(null,arguments)}function q(){return(q=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var r in s)({}).hasOwnProperty.call(s,r)&&(e[r]=s[r])}return e}).apply(null,arguments)}function D(){return(D=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var r in s)({}).hasOwnProperty.call(s,r)&&(e[r]=s[r])}return e}).apply(null,arguments)}function H(){return(H=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var r in s)({}).hasOwnProperty.call(s,r)&&(e[r]=s[r])}return e}).apply(null,arguments)}function $(){return($=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var r in s)({}).hasOwnProperty.call(s,r)&&(e[r]=s[r])}return e}).apply(null,arguments)}function W(){return(W=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var r in s)({}).hasOwnProperty.call(s,r)&&(e[r]=s[r])}return e}).apply(null,arguments)}let z=new Map([[".gitignore","git"],[".gitignore-global","git"],[".gitignore_global","git"],[".git-blame-ignore","git"],[".gitconfig","git"],[".gitattributes","git"],[".gitmodules","git"],[".gitkeep","git"],[".gitinclude","git"],["requirements.txt","python"],["pipfile","python"],[".python-version","python"],["manifest.in","python"],["pylintrc","python"],[".pylintrc","python"],["setup.cfg","python"],["pyproject.toml","gear"],[".env","gear"]]),U=new Map([["py","python"],["python","python"],["pyi","python"],["pyw","python"],["toml","gear"],["env","gear"],["json","brackets-yellow"],["jsonc","brackets-yellow"],["json5","brackets-yellow"],["md","markdown"],["markdown","markdown"],["txt","text"]]),K=new Set(["test","tests","spec","specs"]),J="chevron_lDAJ",Q={python:({title:e,titleId:t,...s})=>y.createElement("svg",I({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24","aria-labelledby":t},s),e?y.createElement("title",{id:t},e):null,r||(r=y.createElement("path",{fill:"#14B8A6",fillRule:"evenodd",d:"M14.622 21.322c-.6.11-1.284.174-1.999.178a12.5 12.5 0 0 1-2.179-.178c-1.136-.198-2.092-1.086-2.092-2.269v-4.156c0-1.217.93-2.217 2.092-2.217h4.178c1.418 0 2.613-1.271 2.613-2.712V7.974h1.438c1.216 0 1.926.92 2.223 2.213.401 1.735.384 2.773 0 4.435-.332 1.45-1.398 2.212-2.613 2.212h-5.752v.555h4.183v1.664c0 1.26-.322 1.942-2.092 2.269m-.176-2.837c-.532 0-.963.45-.963 1.005s.43 1.005.963 1.005.963-.45.963-1.005-.43-1.005-.963-1.005",clipRule:"evenodd"})),n||(n=y.createElement("path",{fill:"#14B8A6",fillRule:"evenodd",d:"M9.378 2.678c.6-.11 1.284-.174 1.999-.178.715-.003 1.46.053 2.179.178 1.136.198 2.092 1.086 2.092 2.269v4.156c0 1.217-.93 2.217-2.092 2.217H9.378c-1.418 0-2.613 1.271-2.613 2.712v1.994H5.327c-1.216 0-1.926-.92-2.223-2.213-.401-1.735-.384-2.773 0-4.435.332-1.45 1.397-2.213 2.613-2.213h5.752v-.554H7.286V4.947c0-1.26.322-1.942 2.092-2.269m.176 2.838c.532 0 .963-.45.963-1.005s-.43-1.006-.963-1.006-.964.45-.964 1.006c0 .555.432 1.005.964 1.005",clipRule:"evenodd"}))),git:({title:e,titleId:t,...s})=>y.createElement("svg",B({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24","aria-labelledby":t},s),e?y.createElement("title",{id:t},e):null,l||(l=y.createElement("path",{fill:"#F87171",d:"m20.661 11.198-7.86-7.859a1.16 1.16 0 0 0-1.639 0L9.53 4.972l2.07 2.07a1.376 1.376 0 0 1 1.744 1.755l1.995 1.995a1.377 1.377 0 0 1 1.425 2.278 1.38 1.38 0 0 1-2.251-1.5l-1.86-1.861-.001 4.897q.198.097.365.26a1.38 1.38 0 1 1-1.5-.3V9.623a1.379 1.379 0 0 1-.749-1.809l-2.04-2.04-5.388 5.388a1.16 1.16 0 0 0 0 1.64l7.859 7.858a1.16 1.16 0 0 0 1.64 0l7.822-7.821a1.16 1.16 0 0 0 0-1.64"}))),gear:({title:e,titleId:t,...s})=>y.createElement("svg",P({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24","aria-labelledby":t},s),e?y.createElement("title",{id:t},e):null,a||(a=y.createElement("path",{fill:"#64748B",d:"M5.939 5.37a3.763 3.763 0 0 1-2.712 4.696l-1.099.272a10.8 10.8 0 0 0 .012 3.4l1.015.244a3.763 3.763 0 0 1 2.728 4.723l-.35 1.187a10 10 0 0 0 2.792 1.734l.928-.976a3.763 3.763 0 0 1 5.454.001l.938.987a10 10 0 0 0 2.79-1.717l-.373-1.29a3.763 3.763 0 0 1 2.712-4.697l1.098-.271a10.8 10.8 0 0 0-.012-3.4l-1.014-.245a3.763 3.763 0 0 1-2.728-4.723l.35-1.186a10 10 0 0 0-2.792-1.735l-.928.976a3.76 3.76 0 0 1-5.454-.001l-.938-.987a10 10 0 0 0-2.79 1.717zM12 14.822c-1.506 0-2.727-1.263-2.727-2.822 0-1.558 1.22-2.822 2.727-2.822s2.727 1.264 2.727 2.822-1.22 2.822-2.727 2.822"}))),document:({title:e,titleId:t,...s})=>y.createElement("svg",F({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24","aria-labelledby":t},s),e?y.createElement("title",{id:t},e):null,i||(i=y.createElement("path",{stroke:"#64748B",strokeLinejoin:"round",strokeWidth:2,d:"M6 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8a1 1 0 0 0-.375-.78l-5-4A1 1 0 0 0 13 3z"})),o||(o=y.createElement("path",{stroke:"#64748B",strokeLinejoin:"round",strokeWidth:2,d:"M12 4v5h6"}))),text:({title:e,titleId:t,...s})=>y.createElement("svg",q({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24","aria-labelledby":t},s),e?y.createElement("title",{id:t},e):null,c||(c=y.createElement("rect",{width:16,height:2,x:4,y:6,fill:"#64748B",rx:1})),d||(d=y.createElement("rect",{width:12,height:2,x:4,y:11,fill:"#64748B",rx:1})),p||(p=y.createElement("rect",{width:16,height:2,x:4,y:16,fill:"#64748B",rx:1}))),markdown:({title:e,titleId:t,...s})=>y.createElement("svg",D({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24","aria-labelledby":t},s),e?y.createElement("title",{id:t},e):null,u||(u=y.createElement("path",{fill:"#60A5FA",d:"M3 15.714V8h2.323l2.322 2.836L9.968 8h2.322v7.714H9.968V11.29l-2.323 2.836-2.322-2.836v4.424zm14.516 0-3.484-3.743h2.323V8h2.322v3.97H21z"}))),"brackets-yellow":({title:e,titleId:t,...s})=>y.createElement("svg",H({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24","aria-labelledby":t},s),e?y.createElement("title",{id:t},e):null,h||(h=y.createElement("path",{fill:"#F59E0B",d:"M4.778 6.667A2.667 2.667 0 0 1 7.444 4a.889.889 0 0 1 0 1.778.89.89 0 0 0-.888.889v3.5c0 .701-.273 1.35-.73 1.833.457.483.73 1.132.73 1.832v3.501c0 .491.398.89.888.89a.889.889 0 0 1 0 1.777 2.667 2.667 0 0 1-2.666-2.667v-3.5a.89.89 0 0 0-.674-.863l-.43-.108a.889.889 0 0 1 0-1.724l.43-.108a.89.89 0 0 0 .674-.862zm14.222 0A2.667 2.667 0 0 0 16.333 4a.889.889 0 0 0 0 1.778c.491 0 .89.398.89.889v3.5c0 .701.272 1.35.729 1.833a2.66 2.66 0 0 0-.73 1.832v3.501a.89.89 0 0 1-.889.89.889.889 0 0 0 0 1.777A2.667 2.667 0 0 0 19 17.333v-3.5c0-.408.278-.764.673-.863l.431-.108a.889.889 0 0 0 0-1.724l-.43-.108a.89.89 0 0 1-.674-.862z"}))),folder:({title:e,titleId:t,...s})=>y.createElement("svg",$({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24","aria-labelledby":t},s),e?y.createElement("title",{id:t},e):null,m||(m=y.createElement("path",{stroke:"#64748B",strokeWidth:2,d:"M7.784 5H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9.875a2 2 0 0 0-2-2h-6.284a2 2 0 0 1-1.27-.455L9.054 5.455A2 2 0 0 0 7.783 5Z"}))),"folder-red-code":({title:e,titleId:t,...s})=>y.createElement("svg",W({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24","aria-labelledby":t},s),e?y.createElement("title",{id:t},e):null,f||(f=y.createElement("path",{fill:"#64748B",fillRule:"evenodd",d:"M5 4a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h5v-2H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h2.784a1 1 0 0 1 .635.227l2.393 1.966a3 3 0 0 0 1.904.682H19a1 1 0 0 1 1 1V10h2v-.125a3 3 0 0 0-3-3h-6.284a1 1 0 0 1-.635-.227L9.688 4.682A3 3 0 0 0 7.784 4z",clipRule:"evenodd"})),x||(x=y.createElement("path",{stroke:"#F87171",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M15.146 13.797 13 15.943l2.146 2.146M21.077 13.797l2.145 2.146-2.145 2.146M16.561 19.52l3.1-7.153"})))};function Y({path:e,folder:t=!1,tree:s=!1,expanded:r=!1}){let n=function(e,{folder:t=!1}={}){let s="string"==typeof e?e.replace(/\\/g,"/").replace(/\/+$/,"").split("/").pop().toLowerCase():"";if(t)return K.has(s)?"folder-red-code":"folder";if(z.has(s))return z.get(s);if(s.startsWith(".env.")||s.endsWith(".env.example"))return"gear";let r=s.lastIndexOf("."),n=r>=0?s.slice(r+1):"";return U.get(n)||"document"}(e,{folder:t}),l=Q[n],a=(0,g.jsx)(l,{className:"icon_KnjF",width:16,height:16,"aria-hidden":"true",focusable:"false","data-symbols-icon":n});return s?(0,g.jsxs)("span",{className:"treeIcon_sP4w","aria-hidden":"true",children:[t?(0,g.jsx)("svg",{className:(0,v.A)(J,r&&"expanded_mogG"),width:10,height:10,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",focusable:"false",children:(0,g.jsx)("path",{d:"m9 5 7 7-7 7"})}):(0,g.jsx)("span",{className:J}),a]}):a}let G=[],Z=[];function X({files:e,previousFiles:t=null,preferredFiles:s=G,stepKey:r=0,focusFile:n,focusRanges:l=Z,onFileSelect:a,className:i}){let o=(0,k.A)(),[c,d]=(0,y.useState)(()=>E(null,e,s,r)),[p,u]=(0,y.useState)(()=>new Set),[h,m]=(0,y.useState)(!0),f=(0,y.useRef)(null);c.files===e&&Object.is(c.stepKey,r)||d(E(c,e,s,r));let{activeFile:x,tabs:_}=c,C=(0,y.useMemo)(()=>(function(e){let t={children:[]};for(let s of e){let e=t,r=s.split("/");r.forEach((t,n)=>{let l=r.slice(0,n+1).join("/");if(n===r.length-1)e.children.push({type:"file",name:t,path:s});else{let s=e.children.find(e=>"folder"===e.type&&e.path===l);s||(s={type:"folder",name:t,path:l,children:[]},e.children.push(s)),e=s}})}let s=e=>[...e].sort((e,t)=>e.type===t.type?e.name.localeCompare(t.name):"folder"===e.type?-1:1).map(e=>"folder"===e.type?{...e,children:s(e.children)}:e);return s(t.children)})(Object.keys(e)),[e]),V=s=>t&&N(e,s)?N(t,s)?t[s]===e[s]?"same":"changed":"new":"same",M=V(x),I=N(e,x)?e[x]:void 0,B=(0,y.useMemo)(()=>void 0===I?[]:h&&"changed"===M?function(e,t){let s=e.replace(/\n$/,"").split("\n"),r=t.replace(/\n$/,"").split("\n"),n=s.length,l=r.length,a=Array.from({length:n+1},()=>new Uint32Array(l+1));for(let e=n-1;e>=0;e-=1)for(let t=l-1;t>=0;t-=1)a[e][t]=s[e]===r[t]?a[e+1][t+1]+1:Math.max(a[e+1][t],a[e][t+1]);let i=[],o=0,c=0,d=0;for(;o<n||c<l;)o<n&&c<l&&s[o]===r[c]?(d+=1,i.push({type:"same",text:r[c],newNo:d}),o+=1,c+=1):c<l&&(o>=n||a[o][c+1]>=a[o+1][c])?(d+=1,i.push({type:"add",text:r[c],newNo:d}),c+=1):(i.push({type:"del",text:s[o],newNo:null}),o+=1);return i}(t[x],I):I.replace(/\n$/,"").split("\n").map((e,t)=>({type:"same",text:e,newNo:t+1})),[I,t,x,M,h]),P=null==n||n===x?l:Z,F=o.plain.backgroundColor;(0,y.useEffect)(()=>{let e=f.current;if(!e)return;let t=e.querySelector("[data-change]")||e.querySelector("[data-focus]"),s=t?Math.max(0,t.offsetTop-e.clientHeight/2+t.offsetHeight/2):0,r=window.matchMedia("(prefers-reduced-motion: reduce)").matches;e.scrollTo({top:s,behavior:t&&!r?"smooth":"auto"})},[r,x,h,I,n,l]);let q=e=>{d(t=>N(t.files,e)?{...t,activeFile:e,tabs:t.tabs.includes(e)?t.tabs:[...t.tabs,e]}:t),a?.(e)},D=(e,t)=>e.map(e=>{let s={paddingLeft:`${8+14*t}px`};if("file"===e.type){let t=V(e.path);return(0,g.jsxs)("button",{type:"button",onClick:()=>q(e.path),"aria-pressed":e.path===x,style:s,title:e.path,className:(0,v.A)(O,e.path===x&&"treeItemActive_NYmV"),children:[(0,g.jsx)(Y,{path:e.path,tree:!0}),(0,g.jsx)("span",{className:T,children:e.name}),"same"!==t&&(0,g.jsx)("span",{className:(0,v.A)("treeDot_jdw0","new"===t&&"treeDotNew_M1tN"),title:A[`badge.${t}`]})]},e.path)}let r=p.has(e.path);return(0,g.jsxs)("div",{children:[(0,g.jsxs)("button",{type:"button","aria-expanded":!r,onClick:()=>{let t;return t=e.path,u(e=>{let s=new Set(e);return s.has(t)?s.delete(t):s.add(t),s})},style:s,className:O,title:e.path,children:[(0,g.jsx)(Y,{path:e.path,folder:!0,tree:!0,expanded:!r}),(0,g.jsx)("span",{className:T,children:e.name})]}),!r&&D(e.children,t+1)]},e.path)});return(0,g.jsxs)("div",{className:(0,v.A)("editor_dHJE",i),"data-project-code-viewer":"",children:[(0,g.jsxs)("aside",{className:"fileTree_hRoX","aria-label":A["files.heading"],children:[(0,g.jsx)("h4",{className:"fileTreeHeading_mHQH",children:A["files.heading"]}),(0,g.jsx)("div",{className:"treeScroll_sHHt",children:D(C,0)})]}),(0,g.jsxs)("div",{className:"editorMain_jUUV",children:[(0,g.jsxs)("label",{className:"mobilePicker_UzrQ",children:[(0,g.jsx)("span",{children:A["files.heading"]}),(0,g.jsxs)("select",{"aria-label":A["files.heading"],value:x??"",onChange:e=>q(e.target.value),children:[(0,g.jsx)("option",{value:"",disabled:!0,children:A["copy.empty"]}),Object.keys(e).map(e=>(0,g.jsx)("option",{value:e,children:e},e))]})]}),(0,g.jsx)("div",{className:"editorToolbar_UlPB",children:(0,g.jsx)("div",{className:"tabs_VF_n","aria-label":A["aria.openFiles"],children:_.map(e=>{let t=e===x,s=V(e);return(0,g.jsxs)("div",{className:(0,v.A)("tab_qFmb",t&&"tabActive_DCji"),style:t?{backgroundColor:F}:void 0,children:[(0,g.jsxs)("button",{type:"button","aria-pressed":t,onClick:()=>q(e),className:"tabBtn_ulEc",title:e,children:[(0,g.jsx)(Y,{path:e}),e.split("/").pop(),"same"!==s&&(0,g.jsx)("span",{className:(0,v.A)("badge_Q6dE","new"===s&&"badgeNew_H9yP"),children:A[`badge.${s}`]})]}),(0,g.jsx)("button",{type:"button","aria-label":A["aria.closeTab"].replace("{path}",e),onClick:()=>d(t=>{let s;return s=t.tabs.filter(t=>t!==e),{...t,tabs:s,activeFile:t.activeFile===e?s.at(-1)??null:t.activeFile}}),className:"tabClose_i338",children:"\xd7"})]},e)})})}),(0,g.jsxs)("div",{className:"codeShell_uOkt",style:{backgroundColor:F,"--cw-editor-bg":F},children:[void 0!==I&&(0,g.jsxs)("div",{className:"codeActions_eYDy",role:"group","aria-label":A["aria.codeActions"],children:["changed"===M&&(0,g.jsx)("button",{type:"button",className:L,"aria-label":A["diff.show"],"aria-pressed":h,title:h?A["diff.hide"]:A["diff.show"],onClick:()=>m(e=>!e),children:h?(0,g.jsx)(j,{className:S,"aria-hidden":"true",focusable:"false"}):(0,g.jsx)(b,{className:S,"aria-hidden":"true",focusable:"false"})}),(0,g.jsx)(R,{text:I,path:x},JSON.stringify([r,x,I]))]}),void 0!==I?(0,g.jsx)("div",{ref:f,className:"codeScroll_KvdC",style:{backgroundColor:F},children:(0,g.jsx)(w.f4,{theme:o,code:B.map(e=>e.text).join("\n"),language:{py:"python",md:"markdown",json:"json",toml:"toml",txt:"text"}[x.split(".").pop()?.toLowerCase()]||"text",children:({tokens:e,getLineProps:t,getTokenProps:s})=>(0,g.jsx)("pre",{className:"pre_WKm3",style:{color:o.plain.color},children:e.map((e,r)=>{var n;let l=B[r]||{type:"same",newNo:r+1},a=t({line:e}),i="same"!==l.type,o=!i&&(n=l.newNo,null!=n&&P.some(([e,t=e])=>n>=e&&n<=t));return(0,g.jsxs)("div",{...a,"data-line":l.newNo??void 0,"data-change":i?l.type:void 0,"data-focus":o?"":void 0,className:(0,v.A)(a.className,"line_aw8y","add"===l.type&&"lineAdd_mE7J","del"===l.type&&"lineDel_abp0",o&&"lineFocus_Glcn"),children:[(0,g.jsx)("span",{"aria-hidden":"true",className:"lineNo_EtU5",children:l.newNo??""}),(0,g.jsx)("span",{"aria-hidden":"true",className:"lineSign_UgAc",children:"add"===l.type?"+":"del"===l.type?"\u2212":""}),(0,g.jsx)("span",{className:"lineContent_fkoz",children:e.map((e,t)=>(0,g.jsx)("span",{...s({token:e})},t))})]},r)})})})}):(0,g.jsx)("div",{className:"empty_oOnL",style:{backgroundColor:F},children:(0,g.jsxs)("div",{children:[(0,g.jsx)("p",{children:A["empty.title"]}),(0,g.jsx)("p",{className:"emptySub_bQnk",children:A["empty.body"]})]})})]})]})]})}},17181(e,t,s){s.d(t,{A:()=>r});let r={s00:{"agent.py":`if __name__ == "__main__":
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
`}}},92600(e,t,s){s.d(t,{A:()=>V});var r=s(74848),n=s(96540),l=s(61022),a=s(71643),i=s(86270),o=s(34164),c=s(55916),d=s(66697),p=s(92949),u=s(64560),h=s(9526),m=s(37245),f=s(95662),x=s(42979);let g=(0,n.createContext)(null);function y({output:e,status:t,highlight:s,blockId:l,children:a}){let[i,o]=(0,n.useState)(!1),c=(0,n.useMemo)(()=>({output:"string"==typeof e?e:t?"":null,status:t||"exit:0",highlight:new Set((s||"").split(",").map(e=>Number(e)).filter(e=>e>0)),blockId:l||null,open:i,toggle:()=>o(e=>!e)}),[e,t,s,l,i]);return(0,r.jsx)(g.Provider,{value:c,children:a})}function v(){return(0,n.useContext)(g)}let _={runButtonOpen:"runButtonOpen_RH63",runButtonIcons:"runButtonIcons_MJHI",runButtonIcon:"runButtonIcon_KVfb"};function j(e){return(0,r.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",...e,children:(0,r.jsx)("polygon",{points:"6 3 20 12 6 21 6 3"})})}function b(e){return(0,r.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",...e,children:(0,r.jsx)("rect",{x:"4",y:"4",width:"16",height:"16",rx:"2"})})}function w({className:e}){let t=v();if(!t||null===t.output)return null;let s=t.open?"\u6536\u8D77\u8F93\u51FA":"\u8FD0\u884C\uFF08\u663E\u793A\u9884\u5F55\u8F93\u51FA\uFF09";return(0,r.jsx)(x.A,{"aria-label":s,"aria-expanded":t.open,title:s,className:(0,o.A)(e,_.runButton,t.open&&_.runButtonOpen),onClick:t.toggle,children:(0,r.jsx)("span",{className:_.runButtonIcons,"aria-hidden":"true",children:t.open?(0,r.jsx)(b,{className:_.runButtonIcon}):(0,r.jsx)(j,{className:_.runButtonIcon})})})}function k({className:e}){return(0,r.jsx)(h.A,{children:()=>(0,r.jsxs)("div",{className:(0,o.A)(e,"buttonGroup_VWRw"),children:[(0,r.jsx)(w,{}),(0,r.jsx)(f.A,{}),(0,r.jsx)(m.A,{})]})})}var A=s(51507);function N(e){return(0,r.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",...e,children:[(0,r.jsx)("rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}),(0,r.jsx)("path",{d:"m7 11 2-2-2-2"}),(0,r.jsx)("path",{d:"M11 13h4"})]})}function E(){let e=v(),t=!!(e&&e.open&&null!==e.output),s=t&&"empty"!==e.status?e.output.replace(/\n$/,"").split("\n"):[],{shown:n,started:l,done:a}=(0,A.A)(s,t);return t?(0,r.jsxs)("div",{className:"run-output",role:"region","aria-label":"\u8FD0\u884C\u8F93\u51FA",children:[(0,r.jsxs)("div",{className:"run-output__row",children:[(0,r.jsx)("span",{className:"run-output__mark",title:"\u9884\u5148\u5F55\u5236\u7684\u8FD0\u884C\u7ED3\u679C\uFF0C\u4E0D\u662F\u6D4F\u89C8\u5668\u5B9E\u65F6\u6267\u884C",children:(0,r.jsx)(N,{"aria-label":"\u8F93\u51FA",role:"img"})}),(0,r.jsxs)("pre",{className:"run-output__body","aria-live":"polite",children:[!l&&(0,r.jsx)("span",{className:"run-output__running",children:"\u8FD0\u884C\u4E2D\u2026"}),s.slice(0,n).map((t,s)=>(0,r.jsx)("div",{className:(0,o.A)("run-output__line",e.highlight.has(s+1)&&"run-output__line--highlight"),children:""===t?" ":t},s)),l&&!a&&(0,r.jsx)("span",{className:"run-output__cursor"})]})]}),a&&(0,r.jsxs)("div",{className:(0,o.A)("run-output__foot",`run-output__foot--${e.status.split(":")[0]}`),children:["hang"===e.status&&(0,r.jsx)("span",{className:"run-output__cursor"}),function(e){if("hang"===e)return"\u8FDB\u7A0B\u672A\u9000\u51FA\uFF0C\u9700\u8981 Ctrl + C \u7EC8\u6B62";if("empty"===e)return"\u6CA1\u6709\u4EFB\u4F55\u8F93\u51FA\uFF0C\u8FDB\u7A0B\u9000\u51FA";let t=e.startsWith("exit:")?e.slice(5):"0";return`\u{8FDB}\u{7A0B}\u{9000}\u{51FA}\u{FF0C}\u{9000}\u{51FA}\u{7801} ${t}`}(e.status)]})]}):null}function C({className:e}){let{metadata:t}=(0,a.Ph)(),s=v(),n=!!(s&&s.open),l=s?.blockId||void 0,i=(0,c.A)();return l&&i.collectAnchor(l),(0,r.jsxs)(d.A,{as:"div",id:l,className:(0,o.A)(e,t.className,n&&"run-output-open"),children:[t.title&&(0,r.jsx)("div",{className:"codeBlockTitle_d3dP",children:(0,r.jsx)(p.A,{children:t.title})}),(0,r.jsxs)("div",{className:"codeBlockContent_bxn0",children:[(0,r.jsx)(u.A,{}),(0,r.jsx)(k,{})]}),(0,r.jsx)(E,{})]})}function V(e){var t;let s=function(e){let{prism:t}=(0,l.p)();return(0,a.mU)({code:e.children,className:e.className,metastring:e.metastring,magicComments:t.magicComments,defaultLanguage:t.defaultLanguage,language:e.language,title:e.title,showLineNumbers:e.showLineNumbers})}(e),n=(0,i.f)();return(0,r.jsx)(y,{output:e["data-output"],status:e["data-output-status"],highlight:e["data-output-highlight"],blockId:(t=e.metastring,t?.match(/(?:^|\s)id=([\w-]+)/)?.[1]),children:(0,r.jsx)(a.l8,{metadata:s,wordWrap:n,children:(0,r.jsx)(C,{})})})}},51507(e,t,s){s.d(t,{A:()=>n});var r=s(96540);function n(e,t){let s=e.length,[n,l]=(0,r.useState)(0),[a,i]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{if(!t){l(0),i(!1);return}if("u">typeof window&&window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches){i(!0),l(s);return}let e=window.setTimeout(()=>{i(!0),e=window.setInterval(()=>{l(t=>t+1>=s?(window.clearInterval(e),s):t+1)},80)},350);return()=>{window.clearTimeout(e),window.clearInterval(e)}},[t,s]),{shown:n,started:a,done:a&&n>=s}}}}]);