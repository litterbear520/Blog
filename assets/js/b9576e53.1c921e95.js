"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([["9116"],{80073(t,e,s){s.r(e),s.d(e,{metadata:()=>r,default:()=>k,frontMatter:()=>w,contentTitle:()=>b,toc:()=>j,assets:()=>f});var r=JSON.parse('{"id":"commerce-agents/\u5DE5\u7A0B\u5316Agent\u5DE5\u5177/tool-boundaries","title":"\u5DE5\u5177\u8FB9\u754C","description":"\u5DE5\u5177\u628A\u5546\u5E97\u5DF2\u6709\u7684\u7CFB\u7EDF\u63A5\u7ED9\u6A21\u578B\uFF1A\u6A21\u578B\u53EA\u51B3\u5B9A\u641C\u4EC0\u4E48\uFF0C\u68C0\u7D22\u3001\u6392\u5E8F\u548C\u6821\u9A8C\u90FD\u7559\u5728\u7CFB\u7EDF\u4E00\u4FA7\u3002","source":"@site/roadmap/commerce-agents/\u5DE5\u7A0B\u5316Agent\u5DE5\u5177/01-tool-boundaries.mdx","sourceDirName":"commerce-agents/\u5DE5\u7A0B\u5316Agent\u5DE5\u5177","slug":"/commerce-agents/\u5DE5\u7A0B\u5316Agent\u5DE5\u5177/tool-boundaries","permalink":"/roadmap/commerce-agents/\u5DE5\u7A0B\u5316Agent\u5DE5\u5177/tool-boundaries","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"description":"\u5DE5\u5177\u628A\u5546\u5E97\u5DF2\u6709\u7684\u7CFB\u7EDF\u63A5\u7ED9\u6A21\u578B\uFF1A\u6A21\u578B\u53EA\u51B3\u5B9A\u641C\u4EC0\u4E48\uFF0C\u68C0\u7D22\u3001\u6392\u5E8F\u548C\u6821\u9A8C\u90FD\u7559\u5728\u7CFB\u7EDF\u4E00\u4FA7\u3002"},"sidebar":"roadmapSidebar","previous":{"title":"\u5DE5\u7A0B\u5316 Agent \u5DE5\u5177","permalink":"/roadmap/commerce-agents/\u5DE5\u7A0B\u5316Agent\u5DE5\u5177/"},"next":{"title":"\u5199\u7ED9\u6A21\u578B\u7684\u5DE5\u5177\u5B9A\u4E49","permalink":"/roadmap/commerce-agents/\u5DE5\u7A0B\u5316Agent\u5DE5\u5177/tool-definitions"}}'),l=s(74848),a=s(28453),o=s(3251),n=s(96540),i=s(34164);let x={toolBoundarySearch:{title:"\u4E00\u6B21\u641C\u7D22\u600E\u6837\u7A7F\u8FC7\u5DE5\u5177\u8FB9\u754C\uFF1F",summary:"\u8FD9\u5F20\u56FE\u8BF4\u660E\u4E00\u6B21\u5546\u54C1\u641C\u7D22\u7684\u5F80\u8FD4\uFF1A\u6A21\u578B\u8C03\u7528 search_products\uFF0C\u5E26\u4E0A\u5173\u952E\u8BCD\u548C\u4EF7\u683C\u4E0A\u9650\uFF1B\u6267\u884C\u5668\u6574\u7406\u53C2\u6570\u540E\u4EA4\u7ED9\u540E\u7AEF\uFF1B\u540E\u7AEF\u4EA4\u56DE\u6309\u76F8\u5173\u5EA6\u6392\u597D\u5E8F\u7684\u5546\u54C1\uFF1B\u6267\u884C\u5668\u8BB0\u4E0B\u8FD9\u6B21\u4F1A\u8BDD\u89C1\u8FC7\u7684\u5546\u54C1\uFF0C\u518D\u628A\u7ED3\u679C\u8FDE\u540C\u4E00\u884C\u8BF4\u660E\u4EA4\u56DE\u6A21\u578B\u3002",participants:[{id:"model",name:"\u6A21\u578B",sub:"\u51B3\u5B9A\u641C\u4EC0\u4E48",role:"process"},{id:"executor",name:"\u6267\u884C\u5668",sub:"\u68C0\u67E5\u3001\u6574\u7406\u3001\u8BB0\u5F55",role:"process"},{id:"backend",name:"\u540E\u7AEF",sub:"\u5546\u5E97\u7684\u641C\u7D22\u7CFB\u7EDF",role:"external"}],items:[{from:"model",to:"executor",label:"\u8C03\u7528 `search_products`",rows:[["assistant","tool_use",'`{"query": "\u5E10\u7BF7", "filters": {"max_price": 200}}`']]},{note:"executor",text:"\u6E05\u6D17\u5173\u952E\u8BCD\uFF0C\u6821\u9A8C\u7B5B\u9009\u6761\u4EF6\uFF0C\u9650\u5236\u6761\u6570"},{from:"executor",to:"backend",label:"\u6309\u6574\u7406\u597D\u7684\u53C2\u6570\u641C\u7D22"},{from:"backend",to:"executor",label:"\u6309\u76F8\u5173\u5EA6\u6392\u597D\u5E8F\u7684\u5546\u54C1",focal:!0},{note:"executor",text:"\u8BB0\u4E0B\u8FD9\u6B21\u4F1A\u8BDD\u89C1\u8FC7\u7684\u5546\u54C1"},{from:"executor",to:"model",label:"\u4EA4\u56DE\u7ED3\u679C",rows:[["user","tool_result","\u4E00\u884C\u8BF4\u660E\uFF0C\u52A0\u4E0A\u90A3\u9876\u5E10\u7BF7\u7684\u8BB0\u5F55"]]}]}},c=["neutral","process","done","external"],d=["primary","secondary"];function h(t){throw Error(`MessageFlow: ${t}`)}let m={figure:"figure_bz3k",srOnly:"srOnly_NmTo",scroller:"scroller_xYZo",flow:"flow_Z3QG",row:"row_yrRS",tail:"tail_QNuL",lane:"lane_C6aB",actor:"actor_rW4v",actorName:"actorName_UsG8",actorSub:"actorSub_Fy4f",message:"message_HVjh",body:"body_FYdE",label:"label_mAi9",secondary:"secondary_toV2",collapsed:"collapsed_p8tO",arrow:"arrow_t9Jk",toLeft:"toLeft_rc22",head:"head_wSAC",note:"note_KjPP",focal:"focal_o23b",rows:"rows_zD78",rowRole:"rowRole_PuRR",rowBlock:"rowBlock_K2Tb",rowContent:"rowContent_rGHM"};function y({text:t}){return t.split(/(`[^`]+`)/g).map((t,e)=>t.length>2&&t.startsWith("`")&&t.endsWith("`")?(0,l.jsx)("code",{children:t.slice(1,-1)},e):(0,l.jsx)(n.Fragment,{children:t},e))}function u({count:t}){return Array.from({length:t},(t,e)=>(0,l.jsx)("span",{"aria-hidden":"true",className:m.lane,style:{gridColumn:e+1}},e))}function g({rows:t}){return(0,l.jsx)("table",{className:m.rows,children:(0,l.jsx)("tbody",{children:t.map(([t,e,s],r)=>{let a;return(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{scope:"row",className:m.rowRole,"data-tone":(a=String(t).trim().toLowerCase()).startsWith("user")?"external":a.startsWith("assistant")?"process":"neutral",children:t}),(0,l.jsx)("td",{className:m.rowBlock,children:e}),(0,l.jsx)("td",{className:m.rowContent,children:(0,l.jsx)(y,{text:s})})]},r)})})})}function p({variant:t,flow:e,upTo:s}){let r=e??x[t];if(!r)throw Error(`MessageFlow: unknown variant "${t}"`);let a=function(t,e){t&&"object"==typeof t||h("flow data is missing");let{participants:s,items:r,summary:l}=t;"string"==typeof l&&l.trim()||h("summary is required (screen readers read it instead of the drawing)"),(!Array.isArray(s)||s.length<2)&&h("need at least two participants");let a=new Map,o=s.map((t,e)=>{t&&"string"==typeof t.id&&t.id&&"string"==typeof t.name&&t.name.trim()||h(`participant ${e+1} needs an id and a name`),a.has(t.id)&&h(`duplicate participant id "${t.id}"`);let s=t.role??"neutral";return c.includes(s)||h(`participant "${t.id}" has unknown role "${s}"`),a.set(t.id,e),{...t,role:s}}),n=(t,e)=>(a.has(t)||h(`${e} refers to unknown participant "${t}"`),a.get(t));Array.isArray(r)&&0!==r.length||h("items must be a non-empty array");let i=r.map((t,e)=>{var s;let r=`item ${e+1}`;if("note"in t){let e=Array.isArray(t.note)?t.note:[t.note];(e.length<1||e.length>2)&&h(`${r} note covers one or two participants`);let s=e.map(t=>n(t,r));return"string"==typeof t.text&&t.text.trim()||h(`${r} note needs text`),{type:"note",start:Math.min(...s),end:Math.max(...s),text:t.text,focal:!!t.focal}}let l=n(t.from,r),a=n(t.to,r);l===a&&h(`${r} goes from "${t.from}" to itself; use a note instead`);let i="string"==typeof t.label&&t.label.trim();i||void 0!==t.rows||h(`${r} needs a label or rows`),void 0!==t.rows&&(s=t.rows,Array.isArray(s)&&0!==s.length||h(`${r} rows must be a non-empty array`),s.forEach((t,e)=>{(!Array.isArray(t)||3!==t.length||t.some(t=>"string"!=typeof t||!t.trim()))&&h(`${r} row ${e+1} must be [role, block, content] with three non-empty strings`)}));let x=t.collapsed?"collapsed":t.kind??"primary";return t.collapsed||d.includes(x)||h(`${r} has unknown kind "${x}"`),{type:"message",start:Math.min(l,a),end:Math.max(l,a),direction:a>l?"right":"left",fromName:o[l].name,toName:o[a].name,label:i?t.label:null,rows:t.rows??null,kind:x,focal:!!t.focal}});i.filter(t=>t.focal).length>1&&h("at most one focal item per flow");let x=void 0===e?i.length:e;return(!Number.isInteger(x)||x<1||x>i.length)&&h(`upTo must be an integer from 1 to ${i.length}, got ${e}`),{title:"string"==typeof t.title&&t.title.trim()?t.title:null,summary:l,participants:o,items:i.slice(0,x),total:i.length}}(r,s),o=(0,n.useId)(),w=a.participants.length,b=t=>({gridColumn:`${t.start+1} / ${t.end+2}`,"--span":t.end-t.start+1});return(0,l.jsxs)("figure",{className:m.figure,"aria-label":a.title??void 0,"aria-describedby":o,children:[(0,l.jsx)("p",{id:o,className:m.srOnly,children:a.summary}),(0,l.jsx)("div",{className:m.scroller,children:(0,l.jsxs)("div",{className:m.flow,style:{"--cols":w},children:[(0,l.jsx)("div",{className:m.row,children:a.participants.map((t,e)=>(0,l.jsxs)("div",{className:m.actor,"data-role":t.role,style:{gridColumn:e+1},children:[(0,l.jsx)("span",{className:m.actorName,children:t.name}),t.sub&&(0,l.jsx)("span",{className:m.actorSub,children:t.sub})]},t.id))}),a.items.map((t,e)=>(0,l.jsxs)("div",{className:m.row,children:[(0,l.jsx)(u,{count:w}),"note"===t.type?(0,l.jsx)("div",{className:(0,i.A)(m.note,t.focal&&m.focal),style:b(t),children:(0,l.jsx)(y,{text:t.text})}):(0,l.jsxs)("div",{className:(0,i.A)(m.message,m[t.kind]),style:b(t),children:[(0,l.jsxs)("div",{className:(0,i.A)(m.body,t.focal&&m.focal),children:[(0,l.jsxs)("span",{className:m.srOnly,children:[t.fromName," \u2192 ",t.toName,"\uFF1A"]}),t.label&&(0,l.jsx)("span",{className:m.label,children:(0,l.jsx)(y,{text:t.label})}),t.rows&&(0,l.jsx)(g,{rows:t.rows})]}),(0,l.jsx)("span",{"aria-hidden":"true",className:(0,i.A)(m.arrow,"left"===t.direction&&m.toLeft),children:(0,l.jsx)("svg",{className:m.head,viewBox:"0 0 8 12",children:(0,l.jsx)("path",{d:"M1 1 L7 6 L1 11"})})})]})]},e)),(0,l.jsx)("div",{className:(0,i.A)(m.row,m.tail),children:(0,l.jsx)(u,{count:w})})]})})]})}let w={description:"\u5DE5\u5177\u628A\u5546\u5E97\u5DF2\u6709\u7684\u7CFB\u7EDF\u63A5\u7ED9\u6A21\u578B\uFF1A\u6A21\u578B\u53EA\u51B3\u5B9A\u641C\u4EC0\u4E48\uFF0C\u68C0\u7D22\u3001\u6392\u5E8F\u548C\u6821\u9A8C\u90FD\u7559\u5728\u7CFB\u7EDF\u4E00\u4FA7\u3002"},b="\u5DE5\u5177\u8FB9\u754C",f={},j=[{value:"\u5DE5\u5177\u8FB9\u754C\u89E3\u51B3\u7684\u95EE\u9898",id:"\u5DE5\u5177\u8FB9\u754C\u89E3\u51B3\u7684\u95EE\u9898",level:2},{value:"\u5DE5\u5177\u8FB9\u754C\u7684\u5DE5\u4F5C\u539F\u7406",id:"\u5DE5\u5177\u8FB9\u754C\u7684\u5DE5\u4F5C\u539F\u7406",level:2},{value:"\u5DE5\u5177\u8FB9\u754C\u7684\u4F18\u52BF",id:"\u5DE5\u5177\u8FB9\u754C\u7684\u4F18\u52BF",level:2},{value:"\u4F55\u65F6\u628A\u903B\u8F91\u7559\u5728\u7CFB\u7EDF\u4E00\u4FA7",id:"\u4F55\u65F6\u628A\u903B\u8F91\u7559\u5728\u7CFB\u7EDF\u4E00\u4FA7",level:2}];function v(t){let e={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...t.components},{LessonMeta:s,QuickCheck:r,Term:n}=e;return s||_("LessonMeta",!0),r||_("QuickCheck",!0),n||_("Term",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.header,{children:(0,l.jsx)(e.h1,{id:"\u5DE5\u5177\u8FB9\u754C",children:"\u5DE5\u5177\u8FB9\u754C"})}),"\n",(0,l.jsx)(s,{lesson:1,minutes:5}),"\n",(0,l.jsx)(e.p,{children:"\u5DE5\u5177\u628A\u5546\u5E97\u5DF2\u6709\u7684\u7CFB\u7EDF\u63A5\u7ED9\u6A21\u578B\u3002\u6A21\u578B\u53EA\u51B3\u5B9A\u641C\u4EC0\u4E48\uFF0C\u68C0\u7D22\u3001\u6392\u5E8F\u548C\u6821\u9A8C\u90FD\u7559\u5728\u7CFB\u7EDF\u4E00\u4FA7\u3002\u8FD9\u6761\u5206\u5DE5\u7EBF\u5C31\u662F\u5DE5\u5177\u8FB9\u754C\u3002"}),"\n",(0,l.jsx)(e.h2,{id:"\u5DE5\u5177\u8FB9\u754C\u89E3\u51B3\u7684\u95EE\u9898",children:"\u5DE5\u5177\u8FB9\u754C\u89E3\u51B3\u7684\u95EE\u9898"}),"\n",(0,l.jsx)(e.p,{children:"\u5047\u8BBE\u987E\u5BA2\u95EE\uFF1A\u201C\u6709\u6CA1\u6709 200 \u7F8E\u5143\u4EE5\u5185\u7684\u53CC\u4EBA\u5E10\u7BF7\uFF1F\u201DAgent \u5F97\u5148\u627E\u51FA\u5E10\u7BF7\uFF0C\u518D\u53BB\u6389\u8D85\u9884\u7B97\u7684\u3002\u60A8\u6709\u4E24\u4E2A\u9009\u62E9\uFF1A"}),"\n",(0,l.jsx)(o.A,{variant:"toolBoundaryOption1"}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"\u9009\u9879 1\uFF1A"})," \u628A\u6574\u4E2A\u76EE\u5F55\u653E\u8FDB\u4E0A\u4E0B\u6587\uFF0C\u8BA9\u6A21\u578B\u81EA\u5DF1\u7B5B\u3002\u51E0\u4EF6\u5546\u54C1\u65F6\u53EF\u884C\uFF0C\u4F46\u771F\u5B9E\u5546\u5E97\u7684\u76EE\u5F55\u653E\u4E0D\u8FDB\u4E0A\u4E0B\u6587\uFF0C\u6A21\u578B\u4E5F\u770B\u4E0D\u5230\u5546\u5E97\u7684\u6392\u5E8F\u4FE1\u53F7\u3002"]}),"\n",(0,l.jsx)(o.A,{variant:"toolBoundaryOption2"}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"\u9009\u9879 2\uFF1A"})," \u7ED9\u6A21\u578B\u4E00\u4E2A\u641C\u7D22\u5DE5\u5177\u3002\u6A21\u578B\u53EA\u51B3\u5B9A\u641C\u4EC0\u4E48\uFF0C\u627E\u5546\u54C1\u3001\u6392\u987A\u5E8F\u4EA4\u7ED9\u5546\u5E97\u81EA\u5DF1\u7684\u641C\u7D22\u7CFB\u7EDF\u3002"]}),"\n",(0,l.jsx)(e.h2,{id:"\u5DE5\u5177\u8FB9\u754C\u7684\u5DE5\u4F5C\u539F\u7406",children:"\u5DE5\u5177\u8FB9\u754C\u7684\u5DE5\u4F5C\u539F\u7406"}),"\n",(0,l.jsx)(e.p,{children:"\u4E00\u6B21\u641C\u7D22\u662F\u8FD9\u6837\u7A7F\u8FC7\u5DE5\u5177\u8FB9\u754C\u7684\uFF1A"}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsxs)(e.li,{children:["\u6A21\u578B\u8BFB\u5B8C\u5DE5\u5177\u5B9A\u4E49\uFF0C\u8C03\u7528\u641C\u7D22\u5DE5\u5177\uFF08",(0,l.jsx)(e.code,{children:"search_products"}),"\uFF09\uFF0C\u5173\u952E\u8BCD\u662F\u201C\u5E10\u7BF7\u201D\uFF0C\u4EF7\u683C\u4E0A\u9650 200 \u7F8E\u5143\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(n,{tip:"Agent \u91CC\u8D1F\u8D23\u6267\u884C\u5DE5\u5177\u8C03\u7528\u7684\u90A3\u90E8\u5206\u4EE3\u7801\uFF1A\u6536\u5230\u6A21\u578B\u7684\u8C03\u7528\uFF0C\u68C0\u67E5\u3001\u6574\u7406\u53C2\u6570\uFF0C\u518D\u4EA4\u7ED9\u5546\u5E97\u7684\u7CFB\u7EDF",children:"\u6267\u884C\u5668"}),"\u6536\u5230\u8C03\u7528\uFF0C\u5148\u6574\u7406\u53C2\u6570\uFF1A\u6E05\u6D17\u5173\u952E\u8BCD\uFF0C\u6821\u9A8C\u7B5B\u9009\u6761\u4EF6\uFF0C\u628A\u6761\u6570\u9650\u5236\u5728\u4E0A\u9650\u4EE5\u5185\u3002"]}),"\n",(0,l.jsx)(e.li,{children:"\u5546\u5E97\u7684\u540E\u7AEF\u6309\u81EA\u5DF1\u7684\u903B\u8F91\u68C0\u7D22\u3001\u8FC7\u6EE4\u548C\u6392\u5E8F\uFF0C\u4EA4\u56DE\u90A3\u9876\u53CC\u4EBA\u5F92\u6B65\u5E10\u7BF7\u3002"}),"\n",(0,l.jsx)(e.li,{children:"\u6267\u884C\u5668\u8BB0\u4E0B\u8FD9\u6B21\u4F1A\u8BDD\u89C1\u8FC7\u7684\u5546\u54C1\uFF0C\u518D\u628A\u7ED3\u679C\u8FDE\u540C\u4E00\u884C\u8BF4\u660E\u4EA4\u56DE\u6A21\u578B\u3002"}),"\n",(0,l.jsx)(e.li,{children:"\u6A21\u578B\u8BFB\u5B8C\u7ED3\u679C\uFF0C\u51B3\u5B9A\u5411\u987E\u5BA2\u63A8\u8350\u4EC0\u4E48\u3001\u600E\u4E48\u8BF4\u3002"}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"\u4E0B\u9762\u7684\u56FE\u628A\u8FD9\u4E94\u6B65\u753B\u6210\u4E00\u6B21\u5F80\u8FD4\uFF1A"}),"\n",(0,l.jsx)(p,{variant:"toolBoundarySearch"}),"\n",(0,l.jsx)(e.p,{children:"\u6A21\u578B\u53EA\u51FA\u73B0\u5728\u8FD9\u6B21\u5F80\u8FD4\u7684\u4E24\u7AEF\uFF1A\u5B83\u51B3\u5B9A\u641C\u4EC0\u4E48\uFF0C\u4E5F\u8BFB\u53D6\u641C\u5230\u4E86\u4EC0\u4E48\u3002\u4E2D\u95F4\u7684\u68C0\u67E5\u3001\u68C0\u7D22\u548C\u8BB0\u5F55\uFF0C\u90FD\u53D1\u751F\u5728\u5DE5\u5177\u8FB9\u754C\u7684\u53E6\u4E00\u4FA7\u3002"}),"\n",(0,l.jsx)(r,{question:"\u987E\u5BA2\u95EE\uFF1A\u201C\u6709\u6CA1\u6709 200 \u7F8E\u5143\u4EE5\u5185\u7684\u53CC\u4EBA\u5E10\u7BF7\uFF1F\u201D\u4E0B\u9762\u54EA\u4EF6\u4E8B\u4EA4\u7ED9\u5546\u5E97\u7684\u641C\u7D22\u7CFB\u7EDF\uFF1F",options:[{text:"\u51B3\u5B9A\u8FD9\u6B21\u641C\u201C\u5E10\u7BF7\u201D",explain:"\u8FD9\u662F\u6A21\u578B\u7684\u4E8B\uFF1A\u5B83\u8BFB\u61C2\u987E\u5BA2\u7684\u8BDD\uFF0C\u51B3\u5B9A\u641C\u4EC0\u4E48\u3002"},{text:"\u6309\u4EF7\u683C\u7B5B\u51FA\u5E10\u7BF7\uFF0C\u518D\u6309\u76F8\u5173\u5EA6\u6392\u597D",correct:!0,explain:"\u68C0\u7D22\u3001\u8FC7\u6EE4\u548C\u6392\u5E8F\u7528\u7684\u662F\u5546\u5E97\u81EA\u5DF1\u7684\u903B\u8F91\u548C\u4FE1\u53F7\uFF0C\u6A21\u578B\u53EA\u8BFB\u4EA4\u56DE\u7684\u7ED3\u679C\u3002"},{text:"\u51B3\u5B9A\u5411\u987E\u5BA2\u63A8\u8350\u54EA\u4E00\u9876",explain:"\u8FD9\u662F\u6A21\u578B\u7684\u4E8B\uFF1A\u8BFB\u5B8C\u641C\u7D22\u7ED3\u679C\uFF0C\u5B83\u51B3\u5B9A\u63A8\u8350\u4EC0\u4E48\u3001\u600E\u4E48\u8BF4\u3002"}]}),"\n",(0,l.jsx)(e.h2,{id:"\u5DE5\u5177\u8FB9\u754C\u7684\u4F18\u52BF",children:"\u5DE5\u5177\u8FB9\u754C\u7684\u4F18\u52BF"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"\u76EE\u5F55\u591A\u5927\u90FD\u884C\uFF1A"})," \u6A21\u578B\u53EA\u8BFB\u641C\u7D22\u4EA4\u56DE\u7684\u51E0\u4EF6\u5546\u54C1\uFF0C\u4E0D\u5FC5\u8BFB\u6574\u4E2A\u76EE\u5F55\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"\u6392\u5E8F\u542C\u5546\u5E97\u7684\uFF1A"})," \u68C0\u7D22\u548C\u6392\u5E8F\u7528\u7684\u662F\u5546\u5E97\u641C\u7D22\u7CFB\u7EDF\u81EA\u5DF1\u7684\u903B\u8F91\u548C\u4FE1\u53F7\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"\u68C0\u67E5\u6BCF\u6B21\u90FD\u505A\uFF1A"})," \u53C2\u6570\u8303\u56F4\u548C\u6761\u6570\u4E0A\u9650\u7531\u6267\u884C\u5668\u628A\u5173\uFF0C\u4E0D\u9760\u6A21\u578B\u81EA\u89C9\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"\u6362\u4E00\u5BB6\u5546\u5E97\u4E5F\u80FD\u7528\uFF1A"})," \u53EA\u8981\u5B9E\u73B0\u540C\u4E00\u4E2A\u540E\u7AEF\u63A5\u53E3\uFF0C\u5DE5\u5177\u5B9A\u4E49\u548C\u6267\u884C\u5668\u90FD\u4E0D\u7528\u6539\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u4F55\u65F6\u628A\u903B\u8F91\u7559\u5728\u7CFB\u7EDF\u4E00\u4FA7",children:"\u4F55\u65F6\u628A\u903B\u8F91\u7559\u5728\u7CFB\u7EDF\u4E00\u4FA7"}),"\n",(0,l.jsx)(e.p,{children:"\u5728\u4EE5\u4E0B\u60C5\u51B5\u4E0B\uFF0C\u628A\u903B\u8F91\u7559\u5728\u7CFB\u7EDF\u4E00\u4FA7\uFF1A"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u5B83\u9700\u8981\u6A21\u578B\u770B\u4E0D\u5230\u7684\u6570\u636E\uFF0C\u6BD4\u5982\u6392\u5E8F\u4FE1\u53F7\u3001\u5E93\u5B58\u548C\u4EF7\u683C\uFF1B"}),"\n",(0,l.jsx)(e.li,{children:"\u5B83\u5FC5\u987B\u6BCF\u6B21\u90FD\u6210\u7ACB\uFF0C\u6BD4\u5982\u53C2\u6570\u8303\u56F4\u548C\u6761\u6570\u4E0A\u9650\uFF1B"}),"\n",(0,l.jsx)(e.li,{children:"\u5546\u5E97\u7684\u7CFB\u7EDF\u91CC\u5DF2\u7ECF\u6709\u5B83\uFF0C\u6BD4\u5982\u68C0\u7D22\u548C\u6392\u5E8F\u3002"}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"\u540E\u7AEF\u7B54\u4E0D\u597D\u7684\u95EE\u9898\uFF0C\u5DE5\u5177\u4E5F\u7B54\u4E0D\u597D\u3002\u8FD9\u65F6\u8BE5\u5728\u540E\u7AEF\u52A0\u4E00\u4E2A\u80FD\u76F4\u63A5\u56DE\u7B54\u5B83\u7684\u63A5\u53E3\uFF0C\u800C\u4E0D\u662F\u5728\u5DE5\u5177\u91CC\u591A\u8C03\u51E0\u4E2A\u670D\u52A1\u3001\u628A\u7B54\u6848\u62FC\u51FA\u6765\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u987E\u5BA2\u66F4\u5728\u610F\u4EF7\u683C\u8FD8\u662F\u8BC4\u5206\u3001\u54EA\u51E0\u4EF6\u503C\u5F97\u63A8\u8350\uFF0C\u8FD9\u7C7B\u8981\u8BFB\u61C2\u5BF9\u8BDD\u624D\u80FD\u505A\u7684\u5224\u65AD\uFF0C\u7559\u7ED9\u6A21\u578B\u3002\u5DE5\u5177\u8FB9\u754C\u672C\u8D28\u4E0A\u628A\u201C\u600E\u4E48\u627E\u201D\u4EA4\u7ED9\u5546\u5E97\u7684\u7CFB\u7EDF\uFF0C\u628A\u201C\u627E\u4EC0\u4E48\u3001\u63A8\u8350\u54EA\u4EF6\u201D\u7559\u7ED9\u6A21\u578B\u3002"})]})}function k(t={}){let{wrapper:e}={...(0,a.R)(),...t.components};return e?(0,l.jsx)(e,{...t,children:(0,l.jsx)(v,{...t})}):v(t)}function _(t,e){throw Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}},3251(t,e,s){s.d(e,{A:()=>x});var r=s(74848),l=s(96540),a=s(34164);let o={toolBoundaryOption1:`<svg viewBox="0 0 768 432" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="tool-boundary-option-1-title tool-boundary-option-1-desc">
  <title id="tool-boundary-option-1-title">\u{9009}\u{9879} 1\u{FF1A}\u{6574}\u{4E2A}\u{76EE}\u{5F55}\u{653E}\u{8FDB}\u{4E0A}\u{4E0B}\u{6587}</title>
  <desc id="tool-boundary-option-1-desc">\u{8FD9}\u{5F20}\u{56FE}\u{8BF4}\u{660E}\u{7B2C}\u{4E00}\u{4E2A}\u{9009}\u{9879}\u{FF1A}\u{987E}\u{5BA2}\u{5728}\u{5BF9}\u{8BDD}\u{91CC}\u{95EE}\u{6709}\u{6CA1}\u{6709} 200 \u{7F8E}\u{5143}\u{4EE5}\u{5185}\u{7684}\u{53CC}\u{4EBA}\u{5E10}\u{7BF7}\u{FF0C}Agent \u{6253}\u{7B97}\u{5148}\u{628A}\u{6574}\u{4E2A}\u{5546}\u{54C1}\u{76EE}\u{5F55}\u{8BFB}\u{4E00}\u{904D}\u{FF0C}\u{518D}\u{81EA}\u{5DF1}\u{6311}\u{51FA}\u{5408}\u{9002}\u{7684}\u{3002}</desc>
  <defs>
    <marker id="tool-boundary-option-1-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="10" markerHeight="10" markerUnits="userSpaceOnUse" orient="auto"><path class="mk-accent" d="M1,1 L9,5 L1,9"/></marker>
  </defs>

  <!-- \u{5DE6}\u{FF1A}\u{5BF9}\u{8BDD}\u{7A97}\u{53E3} -->
  <rect class="s-window" x="40" y="40" width="320" height="300" rx="12"/>
  <path class="s-bar" d="M40.5,72 V52 Q40.5,40.5 52,40.5 H348 Q359.5,40.5 359.5,52 V72 Z"/>
  <line class="divider" x1="40" y1="72" x2="360" y2="72"/>
  <text class="t-who" x="56" y="61">\u{5BF9}\u{8BDD}</text>

  <rect class="s-bubble-user" x="136" y="88" width="208" height="68" rx="10"/>
  <text class="t-who" x="152" y="110">\u{987E}\u{5BA2}</text>
  <text class="t-msg" x="152" y="130">\u{6709}\u{6CA1}\u{6709} 200 \u{7F8E}\u{5143}\u{4EE5}\u{5185}\u{7684}</text>
  <text class="t-msg" x="152" y="148">\u{53CC}\u{4EBA}\u{5E10}\u{7BF7}\u{FF1F}</text>

  <rect class="s-bubble-agent" x="56" y="172" width="232" height="68" rx="10"/>
  <text class="t-who" x="72" y="194">Agent</text>
  <text class="t-msg" x="72" y="214">\u{6211}\u{5148}\u{628A}\u{6574}\u{4E2A}\u{76EE}\u{5F55}\u{8BFB}\u{4E00}\u{904D}\u{FF0C}</text>
  <text class="t-msg" x="72" y="232">\u{518D}\u{6311}\u{51FA}\u{5408}\u{9002}\u{7684}\u{3002}</text>

  <rect class="s-card" x="56" y="288" width="288" height="36" rx="8"/>
  <text class="t-note" x="72" y="311">\u{8F93}\u{5165}\u{6D88}\u{606F}\u{2026}</text>

  <!-- \u{53F3}\u{FF1A}\u{5546}\u{54C1}\u{76EE}\u{5F55}\u{FF0C}\u{5361}\u{7247}\u{5199}\u{771F}\u{5B9E}\u{7684}\u{5546}\u{54C1}\u{540D}\u{548C}\u{4EF7}\u{683C}\u{3002}\u{7B2C}\u{516D}\u{5F20}\u{5361}\u{6DE1}\u{5316}\u{FF0C}\u{8868}\u{793A}\u{76EE}\u{5F55}\u{8FDC}\u{4E0D}\u{6B62}\u{8FD9}\u{51E0}\u{4EF6} -->
  <rect class="s-window" x="440" y="40" width="288" height="300" rx="12"/>
  <path class="s-bar" d="M440.5,72 V52 Q440.5,40.5 452,40.5 H716 Q727.5,40.5 727.5,52 V72 Z"/>
  <line class="divider" x1="440" y1="72" x2="728" y2="72"/>
  <text class="t-who" x="456" y="61">\u{5546}\u{54C1}\u{76EE}\u{5F55}</text>

  <rect class="s-card" x="456" y="88" width="120" height="64" rx="8"/>
  <text class="t-who" x="468" y="114">\u{53CC}\u{4EBA}\u{5F92}\u{6B65}\u{5E10}\u{7BF7}</text>
  <text class="t-sub" x="468" y="134">149 \u{7F8E}\u{5143}</text>
  <rect class="s-card" x="592" y="88" width="120" height="64" rx="8"/>
  <text class="t-who" x="604" y="114">\u{53CC}\u{7076}\u{5934}\u{9732}\u{8425}\u{7089}</text>
  <text class="t-sub" x="604" y="134">64.5 \u{7F8E}\u{5143}</text>
  <rect class="s-card" x="456" y="168" width="120" height="64" rx="8"/>
  <text class="t-who" x="468" y="194">\u{4FDD}\u{6696}\u{7761}\u{888B}</text>
  <text class="t-sub" x="468" y="214">89 \u{7F8E}\u{5143}</text>
  <rect class="s-card" x="592" y="168" width="120" height="64" rx="8"/>
  <text class="t-who" x="604" y="194">\u{81EA}\u{5145}\u{6C14}\u{7761}\u{57AB}</text>
  <text class="t-sub" x="604" y="214">59 \u{7F8E}\u{5143}</text>
  <rect class="s-card" x="456" y="248" width="120" height="64" rx="8"/>
  <text class="t-who" x="468" y="274">\u{9732}\u{8425}\u{676F}</text>
  <text class="t-sub" x="468" y="294">9 \u{7F8E}\u{5143}</text>
  <rect class="s-card s-dim" x="592" y="248" width="120" height="64" rx="8"/>
  <text class="t-sub" x="652" y="284" text-anchor="middle">\u{8FD8}\u{6709}\u{5F88}\u{591A}\u{2026}</text>

  <!-- \u{552F}\u{4E00}\u{7684}\u{5F3A}\u{8C03}\u{FF1A}Agent \u{7684}\u{6253}\u{7B97}\u{8FDE}\u{5230}\u{6574}\u{4E2A}\u{76EE}\u{5F55}\u{FF0C}\u{5E95}\u{90E8}\u{6807}\u{7B7E}\u{5199}\u{8FD9}\u{662F}\u{54EA}\u{4E2A}\u{9009}\u{9879} -->
  <path class="s-leader" d="M288,206 C344,206 380,190 432,190" marker-end="url(#tool-boundary-option-1-arrow)"/>
  <rect class="n-option" x="184" y="364" width="400" height="40" rx="8"/>
  <text class="t-name" x="384" y="390" text-anchor="middle">\u{9009}\u{9879} 1\u{FF1A}\u{6574}\u{4E2A}\u{76EE}\u{5F55}\u{653E}\u{8FDB}\u{4E0A}\u{4E0B}\u{6587}</text>
</svg>
`,toolBoundaryOption2:`<svg viewBox="0 0 768 432" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="tool-boundary-option-2-title tool-boundary-option-2-desc">
  <title id="tool-boundary-option-2-title">\u{9009}\u{9879} 2\u{FF1A}\u{7ED9}\u{6A21}\u{578B}\u{4E00}\u{4E2A}\u{641C}\u{7D22}\u{5DE5}\u{5177}</title>
  <desc id="tool-boundary-option-2-desc">\u{8FD9}\u{5F20}\u{56FE}\u{8BF4}\u{660E}\u{7B2C}\u{4E8C}\u{4E2A}\u{9009}\u{9879}\u{FF1A}\u{987E}\u{5BA2}\u{95EE}\u{6709}\u{6CA1}\u{6709} 200 \u{7F8E}\u{5143}\u{4EE5}\u{5185}\u{7684}\u{53CC}\u{4EBA}\u{5E10}\u{7BF7}\u{FF0C}Agent \u{53EA}\u{53D1}\u{51FA}\u{4E00}\u{6B21}\u{641C}\u{7D22}\u{FF0C}\u{5546}\u{5E97}\u{7684}\u{641C}\u{7D22}\u{7CFB}\u{7EDF}\u{4ECE}\u{76EE}\u{5F55}\u{91CC}\u{627E}\u{51FA}\u{90A3}\u{9876}\u{5E10}\u{7BF7}\u{4EA4}\u{56DE}\u{FF0C}\u{5176}\u{4F59}\u{5546}\u{54C1}\u{4E0D}\u{8FDB}\u{4E0A}\u{4E0B}\u{6587}\u{3002}</desc>
  <defs>
    <marker id="tool-boundary-option-2-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="10" markerHeight="10" markerUnits="userSpaceOnUse" orient="auto"><path class="mk-accent" d="M1,1 L9,5 L1,9"/></marker>
  </defs>

  <!-- \u{5DE6}\u{FF1A}\u{5BF9}\u{8BDD}\u{7A97}\u{53E3}\u{FF0C}\u{53EA}\u{6362}\u{4E86} Agent \u{7684}\u{6253}\u{7B97} -->
  <rect class="s-window" x="40" y="40" width="320" height="300" rx="12"/>
  <path class="s-bar" d="M40.5,72 V52 Q40.5,40.5 52,40.5 H348 Q359.5,40.5 359.5,52 V72 Z"/>
  <line class="divider" x1="40" y1="72" x2="360" y2="72"/>
  <text class="t-who" x="56" y="61">\u{5BF9}\u{8BDD}</text>

  <rect class="s-bubble-user" x="136" y="88" width="208" height="68" rx="10"/>
  <text class="t-who" x="152" y="110">\u{987E}\u{5BA2}</text>
  <text class="t-msg" x="152" y="130">\u{6709}\u{6CA1}\u{6709} 200 \u{7F8E}\u{5143}\u{4EE5}\u{5185}\u{7684}</text>
  <text class="t-msg" x="152" y="148">\u{53CC}\u{4EBA}\u{5E10}\u{7BF7}\u{FF1F}</text>

  <rect class="s-bubble-agent" x="56" y="172" width="232" height="68" rx="10"/>
  <text class="t-who" x="72" y="194">Agent</text>
  <text class="t-msg" x="72" y="214">\u{6211}\u{641C}\u{4E00}\u{4E0B}\u{5E10}\u{7BF7}\u{FF0C}</text>
  <text class="t-msg" x="72" y="232">\u{4EF7}\u{683C}\u{4E0A}\u{9650} 200 \u{7F8E}\u{5143}\u{3002}</text>

  <rect class="s-card" x="56" y="288" width="288" height="36" rx="8"/>
  <text class="t-note" x="72" y="311">\u{8F93}\u{5165}\u{6D88}\u{606F}\u{2026}</text>

  <!-- \u{53F3}\u{FF1A}\u{540C}\u{4E00}\u{4E2A}\u{5546}\u{54C1}\u{76EE}\u{5F55}\u{3002}\u{641C}\u{7D22}\u{53EA}\u{4EA4}\u{56DE}\u{5E10}\u{7BF7}\u{FF0C}\u{5176}\u{4F59}\u{5546}\u{54C1}\u{6DE1}\u{5316} -->
  <rect class="s-window" x="440" y="40" width="288" height="300" rx="12"/>
  <path class="s-bar" d="M440.5,72 V52 Q440.5,40.5 452,40.5 H716 Q727.5,40.5 727.5,52 V72 Z"/>
  <line class="divider" x1="440" y1="72" x2="728" y2="72"/>
  <text class="t-who" x="456" y="61">\u{5546}\u{54C1}\u{76EE}\u{5F55}</text>

  <rect class="s-card" x="456" y="88" width="120" height="64" rx="8"/>
  <text class="t-who" x="468" y="114">\u{53CC}\u{4EBA}\u{5F92}\u{6B65}\u{5E10}\u{7BF7}</text>
  <text class="t-sub" x="468" y="134">149 \u{7F8E}\u{5143}</text>
  <g class="s-dim">
    <rect class="s-card" x="592" y="88" width="120" height="64" rx="8"/>
    <text class="t-who" x="604" y="114">\u{53CC}\u{7076}\u{5934}\u{9732}\u{8425}\u{7089}</text>
    <text class="t-sub" x="604" y="134">64.5 \u{7F8E}\u{5143}</text>
    <rect class="s-card" x="456" y="168" width="120" height="64" rx="8"/>
    <text class="t-who" x="468" y="194">\u{4FDD}\u{6696}\u{7761}\u{888B}</text>
    <text class="t-sub" x="468" y="214">89 \u{7F8E}\u{5143}</text>
    <rect class="s-card" x="592" y="168" width="120" height="64" rx="8"/>
    <text class="t-who" x="604" y="194">\u{81EA}\u{5145}\u{6C14}\u{7761}\u{57AB}</text>
    <text class="t-sub" x="604" y="214">59 \u{7F8E}\u{5143}</text>
    <rect class="s-card" x="456" y="248" width="120" height="64" rx="8"/>
    <text class="t-who" x="468" y="274">\u{9732}\u{8425}\u{676F}</text>
    <text class="t-sub" x="468" y="294">9 \u{7F8E}\u{5143}</text>
  </g>
  <rect class="s-card s-dim" x="592" y="248" width="120" height="64" rx="8"/>
  <text class="t-sub" x="652" y="284" text-anchor="middle">\u{8FD8}\u{6709}\u{5F88}\u{591A}\u{2026}</text>

  <!-- \u{552F}\u{4E00}\u{7684}\u{5F3A}\u{8C03}\u{FF1A}Agent \u{7684}\u{641C}\u{7D22}\u{53EA}\u{8FDE}\u{5230}\u{5E10}\u{7BF7}\u{FF0C}\u{5E95}\u{90E8}\u{6807}\u{7B7E}\u{5199}\u{8FD9}\u{662F}\u{54EA}\u{4E2A}\u{9009}\u{9879} -->
  <path class="s-leader" d="M288,206 C368,206 376,120 448,120" marker-end="url(#tool-boundary-option-2-arrow)"/>
  <rect class="n-option" x="184" y="364" width="400" height="40" rx="8"/>
  <text class="t-name" x="384" y="390" text-anchor="middle">\u{9009}\u{9879} 2\u{FF1A}\u{7ED9}\u{6A21}\u{578B}\u{4E00}\u{4E2A}\u{641C}\u{7D22}\u{5DE5}\u{5177}</text>
</svg>
`,toolDefinitionOption1:`<svg viewBox="0 0 768 432" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="tool-definition-option-1-title tool-definition-option-1-desc">
  <title id="tool-definition-option-1-title">\u{9009}\u{9879} 1\u{FF1A}\u{5B9A}\u{4E49}\u{53EA}\u{5199}\u{540D}\u{5B57}\u{548C}\u{7C7B}\u{578B}</title>
  <desc id="tool-definition-option-1-desc">\u{8FD9}\u{5F20}\u{56FE}\u{8BF4}\u{660E}\u{7B2C}\u{4E00}\u{4E2A}\u{9009}\u{9879}\u{FF1A}\u{5DE5}\u{5177}\u{5B9A}\u{4E49}\u{91CC}\u{53EA}\u{6709}\u{540D}\u{5B57}\u{548C}\u{53C2}\u{6570}\u{7C7B}\u{578B}\u{FF0C}\u{6A21}\u{578B}\u{53EA}\u{597D}\u{731C}\u{7B5B}\u{9009}\u{6761}\u{4EF6}\u{600E}\u{4E48}\u{7528}\u{FF0C}\u{628A}\u{987E}\u{5BA2}\u{6CA1}\u{63D0}\u{7684}\u{201C}\u{8BC4}\u{5206} 4.8 \u{4EE5}\u{4E0A}\u{201D}\u{4E5F}\u{5199}\u{8FDB}\u{4E86}\u{7B5B}\u{9009}\u{FF0C}\u{90A3}\u{9876}\u{8BC4}\u{5206} 4.6 \u{7684}\u{53CC}\u{4EBA}\u{5F92}\u{6B65}\u{5E10}\u{7BF7}\u{56E0}\u{6B64}\u{88AB}\u{7B5B}\u{6389}\u{3002}</desc>
  <defs>
    <marker id="tool-definition-option-1-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="10" markerHeight="10" markerUnits="userSpaceOnUse" orient="auto"><path class="mk-accent" d="M1,1 L9,5 L1,9"/></marker>
  </defs>

  <!-- \u{4E0A}\u{FF1A}\u{987E}\u{5BA2}\u{7684}\u{95EE}\u{9898} -->
  <rect class="s-bubble-user" x="264" y="40" width="240" height="64" rx="10"/>
  <text class="t-who" x="280" y="62">\u{987E}\u{5BA2}</text>
  <text class="t-msg" x="280" y="88">\u{6709}\u{6CA1}\u{6709} 200 \u{7F8E}\u{5143}\u{4EE5}\u{5185}\u{7684}\u{53CC}\u{4EBA}\u{5E10}\u{7BF7}\u{FF1F}</text>

  <!-- \u{5DE6}\u{FF1A}\u{6A21}\u{578B}\u{8BFB}\u{5230}\u{7684}\u{5B9A}\u{4E49}\u{FF0C}\u{53EA}\u{6709}\u{540D}\u{5B57}\u{548C}\u{7C7B}\u{578B} -->
  <text class="t-who" x="40" y="140">\u{6A21}\u{578B}\u{8BFB}\u{5230}\u{7684}\u{5B9A}\u{4E49}</text>
  <rect class="s-panel" x="40" y="152" width="320" height="188" rx="8"/>
  <text class="t-panel" x="60" y="184">search_products</text>
  <text class="t-panel" x="76" y="244">query</text>
  <text class="t-panel" x="148" y="244">string</text>
  <text class="t-panel" x="76" y="272">filters</text>
  <text class="t-panel" x="148" y="272">object</text>
  <text class="t-panel" x="76" y="324">limit</text>
  <text class="t-panel" x="148" y="324">integer</text>

  <!-- \u{53F3}\u{FF1A}\u{6A21}\u{578B}\u{53D1}\u{51FA}\u{7684}\u{641C}\u{7D22}\u{FF0C}\u{548C}\u{641C}\u{5230}\u{7684}\u{5546}\u{54C1} -->
  <text class="t-who" x="440" y="140">\u{6A21}\u{578B}\u{53D1}\u{51FA}\u{7684}\u{641C}\u{7D22}</text>
  <rect class="s-card" x="440" y="152" width="288" height="116" rx="8"/>
  <text class="t-msg" x="460" y="188">\u{5173}\u{952E}\u{8BCD}</text>
  <text class="t-msg" x="548" y="188">\u{5E10}\u{7BF7}</text>
  <text class="t-msg" x="460" y="216">\u{4EF7}\u{683C}</text>
  <text class="t-msg" x="548" y="216">\u{2264} 200</text>
  <text class="t-msg" x="460" y="244">\u{8BC4}\u{5206}</text>
  <text class="t-msg" x="548" y="244">\u{2265} 4.8</text>

  <text class="t-who" x="440" y="292">\u{641C}\u{5230}\u{7684}\u{5546}\u{54C1}</text>
  <g class="s-dim">
    <rect class="s-card" x="440" y="300" width="288" height="40" rx="8"/>
    <text class="t-sub" x="456" y="324">\u{53CC}\u{4EBA}\u{5F92}\u{6B65}\u{5E10}\u{7BF7} \xb7 4.6 \u{5206}</text>
  </g>
  <text class="t-note" x="712" y="324" text-anchor="end">\u{88AB}\u{7B5B}\u{6389}\u{4E86}</text>

  <!-- \u{552F}\u{4E00}\u{7684}\u{5F3A}\u{8C03}\u{FF1A}\u{6CA1}\u{6709}\u{8BF4}\u{660E}\u{7684} filters \u{8FDE}\u{5230}\u{6A21}\u{578B}\u{731C}\u{51FA}\u{6765}\u{7684}\u{90A3}\u{4E00}\u{6761} -->
  <rect class="s-hl" x="68" y="256" width="136" height="24" rx="4"/>
  <rect class="s-hl" x="452" y="224" width="264" height="28" rx="4"/>
  <path class="s-leader" d="M204,268 C300,268 372,238 444,238" marker-end="url(#tool-definition-option-1-arrow)"/>
  <rect class="n-option" x="184" y="364" width="400" height="40" rx="8"/>
  <text class="t-name" x="384" y="390" text-anchor="middle">\u{9009}\u{9879} 1\u{FF1A}\u{5B9A}\u{4E49}\u{53EA}\u{5199}\u{540D}\u{5B57}\u{548C}\u{7C7B}\u{578B}</text>
</svg>
`,toolDefinitionOption2:`<svg viewBox="0 0 768 432" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="tool-definition-option-2-title tool-definition-option-2-desc">
  <title id="tool-definition-option-2-title">\u{9009}\u{9879} 2\u{FF1A}\u{628A}\u{7528}\u{6CD5}\u{5199}\u{8FDB}\u{5B9A}\u{4E49}</title>
  <desc id="tool-definition-option-2-desc">\u{8FD9}\u{5F20}\u{56FE}\u{8BF4}\u{660E}\u{7B2C}\u{4E8C}\u{4E2A}\u{9009}\u{9879}\u{FF1A}\u{5DE5}\u{5177}\u{5B9A}\u{4E49}\u{5199}\u{660E}\u{8FD4}\u{56DE}\u{4EC0}\u{4E48}\u{FF0C}\u{5E76}\u{8BF4}\u{660E}\u{7B5B}\u{9009}\u{6761}\u{4EF6}\u{53EA}\u{653E}\u{987E}\u{5BA2}\u{660E}\u{786E}\u{63D0}\u{51FA}\u{7684}\u{6761}\u{4EF6}\u{FF0C}\u{6A21}\u{578B}\u{7684}\u{641C}\u{7D22}\u{91CC}\u{4E8E}\u{662F}\u{53EA}\u{6709}\u{5173}\u{952E}\u{8BCD}\u{201C}\u{5E10}\u{7BF7}\u{201D}\u{548C}\u{4EF7}\u{683C}\u{4E0A}\u{9650} 200 \u{7F8E}\u{5143}\u{FF0C}\u{90A3}\u{9876}\u{53CC}\u{4EBA}\u{5F92}\u{6B65}\u{5E10}\u{7BF7}\u{88AB}\u{641C}\u{4E86}\u{51FA}\u{6765}\u{3002}</desc>
  <defs>
    <marker id="tool-definition-option-2-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="10" markerHeight="10" markerUnits="userSpaceOnUse" orient="auto"><path class="mk-accent" d="M1,1 L9,5 L1,9"/></marker>
  </defs>

  <!-- \u{4E0A}\u{FF1A}\u{987E}\u{5BA2}\u{7684}\u{95EE}\u{9898} -->
  <rect class="s-bubble-user" x="264" y="40" width="240" height="64" rx="10"/>
  <text class="t-who" x="280" y="62">\u{987E}\u{5BA2}</text>
  <text class="t-msg" x="280" y="88">\u{6709}\u{6CA1}\u{6709} 200 \u{7F8E}\u{5143}\u{4EE5}\u{5185}\u{7684}\u{53CC}\u{4EBA}\u{5E10}\u{7BF7}\u{FF1F}</text>

  <!-- \u{5DE6}\u{FF1A}\u{6A21}\u{578B}\u{8BFB}\u{5230}\u{7684}\u{5B9A}\u{4E49}\u{FF0C}\u{591A}\u{4E86}\u{63CF}\u{8FF0}\u{548C}\u{5B57}\u{6BB5}\u{8BF4}\u{660E} -->
  <text class="t-who" x="40" y="140">\u{6A21}\u{578B}\u{8BFB}\u{5230}\u{7684}\u{5B9A}\u{4E49}</text>
  <rect class="s-panel" x="40" y="152" width="320" height="188" rx="8"/>
  <text class="t-panel" x="60" y="184">search_products</text>
  <text class="t-panel" x="60" y="212">\u{201C}\u{8FD4}\u{56DE} id\u{3001}\u{4EF7}\u{683C}\u{3001}\u{8BC4}\u{5206}\u{548C}\u{5E93}\u{5B58}\u{201D}</text>
  <text class="t-panel" x="76" y="244">query</text>
  <text class="t-panel" x="148" y="244">\u{8981}\u{641C}\u{7D22}\u{7684}\u{5173}\u{952E}\u{8BCD}</text>
  <text class="t-panel" x="76" y="272">filters</text>
  <text class="t-panel" x="148" y="272">\u{987E}\u{5BA2}\u{660E}\u{786E}\u{63D0}\u{51FA}\u{7684}\u{6761}\u{4EF6}\u{FF1B}</text>
  <text class="t-panel" x="148" y="296">\u{731C}\u{6D4B}\u{7684}\u{653E}\u{8FDB} query</text>
  <text class="t-panel" x="76" y="324">limit</text>
  <text class="t-panel" x="148" y="324">1 \u{5230} 8 \u{6761}</text>

  <!-- \u{53F3}\u{FF1A}\u{6A21}\u{578B}\u{53D1}\u{51FA}\u{7684}\u{641C}\u{7D22}\u{FF0C}\u{548C}\u{641C}\u{5230}\u{7684}\u{5546}\u{54C1} -->
  <text class="t-who" x="440" y="140">\u{6A21}\u{578B}\u{53D1}\u{51FA}\u{7684}\u{641C}\u{7D22}</text>
  <rect class="s-card" x="440" y="152" width="288" height="116" rx="8"/>
  <text class="t-msg" x="460" y="188">\u{5173}\u{952E}\u{8BCD}</text>
  <text class="t-msg" x="548" y="188">\u{5E10}\u{7BF7}</text>
  <text class="t-msg" x="460" y="216">\u{4EF7}\u{683C}</text>
  <text class="t-msg" x="548" y="216">\u{2264} 200</text>

  <text class="t-who" x="440" y="292">\u{641C}\u{5230}\u{7684}\u{5546}\u{54C1}</text>
  <rect class="s-card" x="440" y="300" width="288" height="40" rx="8"/>
  <text class="t-sub" x="456" y="324">\u{53CC}\u{4EBA}\u{5F92}\u{6B65}\u{5E10}\u{7BF7} \xb7 4.6 \u{5206}</text>

  <!-- \u{552F}\u{4E00}\u{7684}\u{5F3A}\u{8C03}\u{FF1A}filters \u{7684}\u{8BF4}\u{660E}\u{8FDE}\u{5230}\u{987E}\u{5BA2}\u{660E}\u{786E}\u{8BF4}\u{7684}\u{90A3}\u{4E00}\u{6761} -->
  <rect class="s-hl" x="68" y="256" width="280" height="48" rx="4"/>
  <rect class="s-hl" x="452" y="196" width="264" height="28" rx="4"/>
  <path class="s-leader" d="M348,280 C396,280 400,210 444,210" marker-end="url(#tool-definition-option-2-arrow)"/>
  <rect class="n-option" x="184" y="364" width="400" height="40" rx="8"/>
  <text class="t-name" x="384" y="390" text-anchor="middle">\u{9009}\u{9879} 2\u{FF1A}\u{628A}\u{7528}\u{6CD5}\u{5199}\u{8FDB}\u{5B9A}\u{4E49}</text>
</svg>
`,toolListRounds:`<svg viewBox="0 0 768 432" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="tool-list-rounds-title tool-list-rounds-desc">
  <title id="tool-list-rounds-title">\u{6BCF}\u{6B21}\u{8BF7}\u{6C42}\u{90FD}\u{4EE5}\u{540C}\u{4E00}\u{4EFD}\u{5DE5}\u{5177}\u{5217}\u{8868}\u{5F00}\u{5934}</title>
  <desc id="tool-list-rounds-desc">\u{8FD9}\u{5F20}\u{56FE}\u{8BF4}\u{660E}\u{8FDE}\u{7EED}\u{4E09}\u{6B21}\u{8BF7}\u{6C42}\u{7684}\u{7EC4}\u{6210}\u{FF1A}\u{6BCF}\u{6B21}\u{90FD}\u{4EE5}\u{540C}\u{4E00}\u{4EFD}\u{5DE5}\u{5177}\u{5217}\u{8868}\u{5F00}\u{5934}\u{FF0C}\u{540E}\u{9762}\u{662F}\u{63D0}\u{793A}\u{8BCD}\u{548C}\u{4E00}\u{6B21}\u{6BD4}\u{4E00}\u{6B21}\u{957F}\u{7684}\u{5BF9}\u{8BDD}\u{FF0C}\u{4E09}\u{4EFD}\u{5DE5}\u{5177}\u{5217}\u{8868}\u{9010}\u{5B57}\u{8282}\u{76F8}\u{540C}\u{3002}</desc>

  <text class="t-msg" x="136" y="135" text-anchor="end">\u{7B2C} 1 \u{6B21}\u{8BF7}\u{6C42}</text>
  <rect class="n-neutral" x="164" y="104" width="200" height="52" rx="6"/>
  <text class="t-name" x="264" y="136" text-anchor="middle">\u{5DE5}\u{5177}\u{5217}\u{8868}</text>
  <rect class="n-neutral" x="392" y="104" width="120" height="52" rx="6"/>
  <text class="t-name" x="452" y="136" text-anchor="middle">\u{63D0}\u{793A}\u{8BCD}</text>
  <rect class="n-external" x="520" y="104" width="64" height="52" rx="6"/>
  <text class="t-name" x="552" y="136" text-anchor="middle">\u{5BF9}\u{8BDD}</text>

  <text class="t-msg" x="136" y="207" text-anchor="end">\u{7B2C} 2 \u{6B21}\u{8BF7}\u{6C42}</text>
  <rect class="n-neutral" x="164" y="176" width="200" height="52" rx="6"/>
  <text class="t-name" x="264" y="208" text-anchor="middle">\u{5DE5}\u{5177}\u{5217}\u{8868}</text>
  <rect class="n-neutral" x="392" y="176" width="120" height="52" rx="6"/>
  <text class="t-name" x="452" y="208" text-anchor="middle">\u{63D0}\u{793A}\u{8BCD}</text>
  <rect class="n-external" x="520" y="176" width="128" height="52" rx="6"/>
  <text class="t-name" x="584" y="208" text-anchor="middle">\u{5BF9}\u{8BDD}</text>

  <text class="t-msg" x="136" y="279" text-anchor="end">\u{7B2C} 3 \u{6B21}\u{8BF7}\u{6C42}</text>
  <rect class="n-neutral" x="164" y="248" width="200" height="52" rx="6"/>
  <text class="t-name" x="264" y="280" text-anchor="middle">\u{5DE5}\u{5177}\u{5217}\u{8868}</text>
  <rect class="n-neutral" x="392" y="248" width="120" height="52" rx="6"/>
  <text class="t-name" x="452" y="280" text-anchor="middle">\u{63D0}\u{793A}\u{8BCD}</text>
  <rect class="n-external" x="520" y="248" width="192" height="52" rx="6"/>
  <text class="t-name" x="616" y="280" text-anchor="middle">\u{5BF9}\u{8BDD}</text>

  <!-- \u{552F}\u{4E00}\u{7684}\u{5F3A}\u{8C03}\u{FF1A}\u{6846}\u{4F4F}\u{4E09}\u{4EFD}\u{76F8}\u{540C}\u{7684}\u{5DE5}\u{5177}\u{5217}\u{8868}\u{FF0C}\u{8BF4}\u{660E}\u{5199}\u{5728}\u{6846}\u{4E0B} -->
  <rect class="s-hl" x="152" y="88" width="224" height="228" rx="8"/>
  <text class="t-label" x="264" y="344" text-anchor="middle">\u{9010}\u{5B57}\u{8282}\u{76F8}\u{540C}</text>
</svg>
`,toolOutcomeReaders:`<svg viewBox="0 0 768 212" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="tool-outcome-readers-title tool-outcome-readers-desc">
  <title id="tool-outcome-readers-title">\u{5DE5}\u{5177}\u{7ED3}\u{679C}\u{7684}\u{4E24}\u{4E2A}\u{8BFB}\u{8005}</title>
  <desc id="tool-outcome-readers-desc">\u{8FD9}\u{5F20}\u{56FE}\u{8BF4}\u{660E}\u{4E00}\u{6B21}\u{5DE5}\u{5177}\u{8C03}\u{7528}\u{7684}\u{7ED3}\u{679C} ToolOutcome \u{5206}\u{7ED9}\u{4E24}\u{4E2A}\u{8BFB}\u{8005}\u{FF1A}result_text \u{4F5C}\u{4E3A} tool_result \u{8FDB}\u{5165}\u{6A21}\u{578B}\u{7684}\u{4E0A}\u{4E0B}\u{6587}\u{FF0C}events \u{4F5C}\u{4E3A} SSE \u{4E8B}\u{4EF6}\u{4EA4}\u{7ED9}\u{754C}\u{9762}\u{6E32}\u{67D3}\u{FF0C}is_error \u{548C} blocked \u{6807}\u{8BB0}\u{5931}\u{8D25}\u{4E0E}\u{62E6}\u{622A}\u{3002}</desc>
  <defs>
    <marker id="tool-outcome-readers-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="10" markerHeight="10" markerUnits="userSpaceOnUse" orient="auto"><path class="mk" d="M1,1 L9,5 L1,9"/></marker>
    <marker id="tool-outcome-readers-arrow-loop" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="10" markerHeight="10" markerUnits="userSpaceOnUse" orient="auto"><path class="mk-loop" d="M1,1 L9,5 L1,9"/></marker>
  </defs>

  <line class="arrow" x1="120" y1="88" x2="168" y2="88" marker-end="url(#tool-outcome-readers-arrow)"/>
  <rect class="mask" x="132" y="64" width="24" height="16" rx="2"/>
  <text class="t-label" x="144" y="76" text-anchor="middle">\u{8FD4}\u{56DE}</text>

  <line class="arrow" x1="352" y1="88" x2="464" y2="88" marker-end="url(#tool-outcome-readers-arrow)"/>
  <rect class="mask" x="364" y="64" width="88" height="16" rx="2"/>
  <text class="t-mono" x="408" y="76" text-anchor="middle">tool_result</text>

  <line class="arrow" x1="352" y1="168" x2="464" y2="168" marker-end="url(#tool-outcome-readers-arrow)"/>
  <rect class="mask" x="376" y="144" width="64" height="16" rx="2"/>
  <text class="t-label" x="408" y="156" text-anchor="middle">SSE \u{4E8B}\u{4EF6}</text>

  <rect class="n-process" x="24" y="60" width="96" height="56" rx="6"/>
  <text class="t-name" x="72" y="84" text-anchor="middle">\u{6267}\u{884C}\u{5668}</text>
  <text class="t-mono" x="72" y="104" text-anchor="middle">handler</text>

  <rect class="n-focal" x="168" y="24" width="184" height="164" rx="6"/>
  <text class="t-name" x="260" y="46" text-anchor="middle">\u{5DE5}\u{5177}\u{7ED3}\u{679C}</text>
  <text class="t-mono" x="260" y="62" text-anchor="middle">ToolOutcome</text>
  <line class="divider" x1="168" y1="68" x2="352" y2="68"/>
  <text class="t-mono-strong" x="184" y="92">result_text</text>
  <line class="divider" x1="168" y1="108" x2="352" y2="108"/>
  <text class="t-mono" x="184" y="132">is_error \xb7 blocked</text>
  <line class="divider" x1="168" y1="148" x2="352" y2="148"/>
  <text class="t-mono-strong" x="184" y="172">events</text>

  <rect class="n-process" x="464" y="60" width="96" height="56" rx="6"/>
  <text class="t-name" x="512" y="84" text-anchor="middle">\u{6A21}\u{578B}</text>
  <text class="t-sub" x="512" y="104" text-anchor="middle">\u{8BFB}\u{8FDB}\u{4E0A}\u{4E0B}\u{6587}</text>

  <rect class="n-external" x="464" y="140" width="96" height="56" rx="6"/>
  <text class="t-name" x="512" y="164" text-anchor="middle">\u{754C}\u{9762}</text>
  <text class="t-sub" x="512" y="184" text-anchor="middle">\u{8C03}\u{7528}\u{65B9}\u{6E32}\u{67D3}</text>

  <text class="t-note" x="576" y="76">\u{201C}\u{5DF2}\u{52A0}\u{8D2D} p-100 x1\u{3002}</text>
  <text class="t-note" x="576" y="92">\u{8D2D}\u{7269}\u{8F66}\u{73B0}\u{6709} 1 \u{4EF6}\u{5546}\u{54C1}\u{FF0C}</text>
  <text class="t-note" x="576" y="108">\u{5C0F}\u{8BA1} 149.00 USD\u{3002}\u{201D}</text>
  <text class="t-note" x="576" y="156"><tspan class="t-code">cart_update</tspan> \u{4E8B}\u{4EF6}</text>
  <text class="t-note" x="576" y="172">\u{5E26}\u{5B8C}\u{6574}\u{8D2D}\u{7269}\u{8F66}\u{FF1A}</text>
  <text class="t-note" x="576" y="188">\u{6BCF}\u{4E00}\u{884C}\u{3001}\u{4EF6}\u{6570}\u{3001}\u{5C0F}\u{8BA1}</text>
</svg>
`};var n=s(90733);let i="figure_Strg";function x({variant:t}){var e;let[s,c]=(0,l.useState)(!1),d=(0,l.useCallback)(()=>c(!1),[]),h=o[t];if(!h)throw Error(`Diagram: unknown variant "${t}"`);let m=h.match(/<title[^>]*>([^<]*)<\/title>/)?.[1];return(0,r.jsxs)("figure",{className:i,children:[(0,r.jsx)("div",{className:"scroller_tRJ9",dangerouslySetInnerHTML:{__html:h}}),(0,r.jsx)(n.U,{label:"\u653E\u5927\u67E5\u770B\u8FD9\u5F20\u56FE",onClick:()=>c(!0)}),s&&(0,r.jsx)(n.A,{label:m?`\u{653E}\u{5927}\u{67E5}\u{770B}\u{FF1A}${m}`:"\u653E\u5927\u67E5\u770B\u8FD9\u5F20\u56FE",onClose:d,children:(0,r.jsx)("div",{className:(0,a.A)(i,"zoomed_oZKA"),dangerouslySetInnerHTML:{__html:(e="-zoom",h.replace(/\bid="([^"]+)"/g,`id="$1${e}"`).replace(/url\(#([^)]+)\)/g,`url(#$1${e})`).replace(/aria-labelledby="([^"]+)"/g,(t,s)=>`aria-labelledby="${s.split(/\s+/).map(t=>t+e).join(" ")}"`))}})})]})}},90733(t,e,s){s.d(e,{A:()=>c,U:()=>x});var r=s(74848),l=s(96540),a=s(40961);let o="content_q9nX";function n(){return(0,r.jsxs)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,r.jsx)("polyline",{points:"15 3 21 3 21 9"}),(0,r.jsx)("line",{x1:"21",y1:"3",x2:"14",y2:"10"}),(0,r.jsx)("polyline",{points:"9 21 3 21 3 15"}),(0,r.jsx)("line",{x1:"3",y1:"21",x2:"10",y2:"14"})]})}function i(){return(0,r.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,r.jsx)("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),(0,r.jsx)("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})}function x({label:t,onClick:e}){return(0,r.jsx)("button",{type:"button",className:"zoom_Thnl",onClick:e,"aria-label":t,title:t,children:(0,r.jsx)(n,{})})}function c({label:t,onClose:e,children:s}){let n=(0,l.useRef)(null);return(0,l.useEffect)(()=>{let t=n.current;if(!t)return;t.open||t.showModal();let e=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=e,t.open&&t.close()}},[]),(0,a.createPortal)((0,r.jsxs)("dialog",{ref:n,className:"dialog_e02_",onClose:e,onClick:t=>{t.target.closest(`.${o}`)||e()},"aria-label":t,children:[(0,r.jsx)("button",{type:"button",className:"close_Ugse",onClick:e,"aria-label":"\u5173\u95ED",children:(0,r.jsx)(i,{})}),(0,r.jsx)("div",{className:"scroller_UQxW",children:(0,r.jsx)("div",{className:o,children:s})})]}),document.body)}},28453(t,e,s){s.d(e,{R:()=>o,x:()=>n});var r=s(96540);let l={},a=r.createContext(l);function o(t){let e=r.useContext(a);return r.useMemo(function(){return"function"==typeof t?t(e):{...e,...t}},[e,t])}function n(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(l):t.components||l:o(t.components),r.createElement(a.Provider,{value:e},t.children)}}}]);