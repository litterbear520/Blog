"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([["8104"],{74683(e,t,s){s.r(t),s.d(t,{metadata:()=>r,default:()=>F,frontMatter:()=>q,contentTitle:()=>R,toc:()=>D,assets:()=>A});var r=JSON.parse('{"id":"python/unittest","title":"unittest","description":"\u8FD9\u7BC7\u6587\u7AE0\u6211\u4EEC\u8BB2\u4E00\u4E0B\u6D4B\u8BD5\u3002\u6211\u53D1\u73B0\u5F88\u591A\u4EBA\u4E0D\u77E5\u9053\u5982\u4F55\u5BF9\u81EA\u5DF1\u7684\u4EE3\u7801\u5B8C\u6210\u4E00\u4E2A\u6BD4\u8F83\u57FA\u7840\u7684\u6D4B\u8BD5\uFF0C\u6216\u8005\u8BF4\uFF0C\u4ED6\u4EEC\u53EF\u80FD\u4E0D\u77E5\u9053\u4E00\u4E2A\u6BD4\u8F83\u597D\u7684\u5DE5\u7A0B\u5B9E\u8DF5\u662F\u4EC0\u4E48\u6837\u7684\u3002\u6240\u4EE5\u8FD9\u6B21\u6211\u4EEC\u63D0\u4F9B\u4E00\u4E2A\u53EF\u4EE5\u76F4\u63A5\u6284\u8FC7\u53BB\u7528\u7684\u5B9E\u8DF5\u65B9\u5F0F\uFF0C\u6765\u5E2E\u52A9\u5927\u5BB6\u5B8C\u6210\u4E00\u4E2A\u66F4\u6B63\u89C4\u7684\u7F16\u7A0B\u9879\u76EE\u3002\u5E9F\u8BDD\u4E0D\u591A\u8BF4\uFF0C\u6211\u4EEC\u76F4\u63A5\u5F00\u59CB\u3002","source":"@site/docs/python/unittest.mdx","sourceDirName":"python","slug":"/python/unittest","permalink":"/docs/python/unittest","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"queue","permalink":"/docs/python/queue"},"next":{"title":"\u5168\u5C40\u548C\u95ED\u5305\u53D8\u91CF","permalink":"/docs/python/\u5168\u5C40\u548C\u95ED\u5305\u53D8\u91CF"}}'),n=s(74848),l=s(28453),a=s(96540),i=s(34164),o=s(71765),c=s(67810);let d="\u65B0\u6587\u4EF6",u="\u5DF2\u4FEE\u6539",p="\u8FD0\u884C",h="\u6536\u8D77",f={unittest:{steps:[{title:"\u642D\u597D\u9879\u76EE\u9AA8\u67B6",body:["\u6838\u5FC3\u4EE3\u7801\u653E\u8FDB `vector/` \u5305\uFF0C\u6D4B\u8BD5\u653E\u8FDB `tests/` \u5305\uFF0C\u4E24\u4E2A\u6587\u4EF6\u5939\u90FD\u6709 `__init__.py`\uFF0C\u6839\u76EE\u5F55\u53EA\u7559\u4E00\u4E2A\u5165\u53E3 `main.py`\u3002","\u5728\u6839\u76EE\u5F55\u8FD0\u884C `python -m unittest`\uFF0Cunittest \u4F1A\u81EA\u52A8\u627E\u5230 `tests/test_vector.py` \u91CC\u7684 `test_init` \u5E76\u8FD0\u884C\u3002\u70B9\u5DE6\u4FA7\u6587\u4EF6\u6811\u53EF\u4EE5\u770B\u6BCF\u4E2A\u6587\u4EF6\u3002"],file:"tests/test_vector.py",files:{"main.py":`from vector import Vector

v = Vector(1, 2)
w = Vector(3, 4)
print(v + w)
`,"vector/__init__.py":`from .vector import Vector
`,"vector/vector.py":`import math


class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __add__(self, other):
        return Vector(self.x + other.x, self.y + other.y)

    def __mul__(self, k):
        return Vector(self.x * k, self.y * k)

    def dot(self, other):
        return self.x * other.x + self.y * other.y

    def __abs__(self):
        return math.hypot(self.x, self.y)

    def __repr__(self):
        return f"Vector({self.x}, {self.y})"
`,"tests/__init__.py":"","tests/test_vector.py":`import unittest

from vector import Vector


class TestVector(unittest.TestCase):
    def test_init(self):
        v = Vector(1, 2)
        self.assertEqual(v.x, 1)
        self.assertEqual(v.y, 2)
`},runs:[{cmd:"python -m unittest",exit:0,output:`.
----------------------------------------------------------------------
Ran 1 test in 0.002s

OK
`}]},{title:"\u6545\u610F\u5199\u9519\uFF0C\u770B\u4E24\u79CD\u5931\u8D25\u4FE1\u606F",body:["\u4E34\u65F6\u52A0\u4E24\u4E2A\u5FC5\u7136\u5931\u8D25\u7684\u65B9\u6CD5\uFF1A`assertEqual(v.x, 0)` \u5931\u8D25\u65F6\u544A\u8BC9\u4F60 `1 != 0`\uFF0C`assertTrue(v.x == 0)` \u53EA\u8BF4 `False is not true`\u3002"],files:{"tests/test_vector.py":`import unittest

from vector import Vector


class TestVector(unittest.TestCase):
    def test_init(self):
        v = Vector(1, 2)
        self.assertEqual(v.x, 1)
        self.assertEqual(v.y, 2)

    def test_equal(self):
        v = Vector(1, 2)
        self.assertEqual(v.x, 0)

    def test_true(self):
        v = Vector(1, 2)
        self.assertTrue(v.x == 0)
`},runs:[{cmd:"python -m unittest",exit:1,output:`F.F
======================================================================
FAIL: test_equal (tests.test_vector.TestVector.test_equal)
----------------------------------------------------------------------
Traceback (most recent call last):
  File "/home/user/unittest_example/tests/test_vector.py", line 14, in test_equal
    self.assertEqual(v.x, 0)
AssertionError: 1 != 0

======================================================================
FAIL: test_true (tests.test_vector.TestVector.test_true)
----------------------------------------------------------------------
Traceback (most recent call last):
  File "/home/user/unittest_example/tests/test_vector.py", line 18, in test_true
    self.assertTrue(v.x == 0)
AssertionError: False is not true

----------------------------------------------------------------------
Ran 3 tests in 0.002s

FAILED (failures=2)
`}]},{title:"\u7528 assertRaises \u6D4B\u5F02\u5E38",body:["`__init__` \u52A0\u4E0A\u7C7B\u578B\u68C0\u67E5\uFF0C\u4E0D\u662F\u6570\u5C31\u629B `ValueError`\u3002\u6D4B\u8BD5\u91CC\u628A\u4F1A\u629B\u5F02\u5E38\u7684\u8C03\u7528\u653E\u8FDB `with self.assertRaises(ValueError)` \u5757\u3002\u4E0A\u4E00\u6B65\u6545\u610F\u5199\u9519\u7684\u4E24\u4E2A\u65B9\u6CD5\u987A\u624B\u5220\u6389\u3002"],file:"vector/vector.py",files:{"vector/vector.py":`import math


class Vector:
    def __init__(self, x, y):
        if not isinstance(x, (int, float)) or not isinstance(y, (int, float)):
            raise ValueError("x and y must be numbers")
        self.x = x
        self.y = y

    def __add__(self, other):
        return Vector(self.x + other.x, self.y + other.y)

    def __mul__(self, k):
        return Vector(self.x * k, self.y * k)

    def dot(self, other):
        return self.x * other.x + self.y * other.y

    def __abs__(self):
        return math.hypot(self.x, self.y)

    def __repr__(self):
        return f"Vector({self.x}, {self.y})"
`,"tests/test_vector.py":`import unittest

from vector import Vector


class TestVector(unittest.TestCase):
    def test_init(self):
        v = Vector(1, 2)
        self.assertEqual(v.x, 1)
        self.assertEqual(v.y, 2)
        with self.assertRaises(ValueError):
            Vector("a", "b")
`},runs:[{cmd:"python -m unittest",exit:0,output:`.
----------------------------------------------------------------------
Ran 1 test in 0.001s

OK
`}]},{title:"setUp \u4E0E tearDown",body:["\u8FD9\u4E24\u4E2A\u65B9\u6CD5\u5728\u6BCF\u4E2A\u6D4B\u8BD5\u65B9\u6CD5\u8FD0\u884C\u524D\u540E\u5404\u8C03\u7528\u4E00\u6B21\uFF0C\u6240\u4EE5\u8F93\u51FA\u91CC\u51FA\u73B0\u4E00\u5BF9 start / end\u3002"],files:{"tests/test_vector.py":`import unittest

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
            Vector("a", "b")
`},runs:[{cmd:"python -m unittest",exit:0,output:`start
end
.
----------------------------------------------------------------------
Ran 1 test in 0.001s

OK
`}]},{title:"\u518D\u52A0\u4E00\u4E2A\u6D4B\u8BD5\u65B9\u6CD5",body:["\u591A\u4E86 `test_add` \u4E4B\u540E\uFF0Cstart / end \u5404\u6253\u5370\u4E24\u6B21\u3002\u6CE8\u610F\u7B2C\u4E8C\u4E2A start \u7D27\u8DDF\u5728\u4E0A\u4E00\u4E2A\u6D4B\u8BD5\u7684\u70B9\u53F7\u540E\u9762\uFF0C\u8FD9\u662F unittest \u628A\u70B9\u53F7\u5199\u5230 stderr \u4E14\u4E0D\u6362\u884C\u7684\u7F18\u6545\u3002"],files:{"tests/test_vector.py":`import unittest

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
            Vector("a", "b")

    def test_add(self):
        v = Vector(1, 2) + Vector(3, 4)
        self.assertEqual(v.x, 4)
        self.assertEqual(v.y, 6)
`},runs:[{cmd:"python -m unittest",exit:0,output:`start
end
.start
end
.
----------------------------------------------------------------------
Ran 2 tests in 0.001s

OK
`}]},{title:"setUpClass \u4E0E tearDownClass",body:["\u6574\u4E2A\u6D4B\u8BD5\u7C7B\u8FD0\u884C\u524D\u540E\u53EA\u8C03\u7528\u4E00\u6B21\uFF0C\u5FC5\u987B\u7528 `@classmethod` \u88C5\u9970\uFF0C\u53C2\u6570\u662F `cls`\u3002"],files:{"tests/test_vector.py":`import unittest

from vector import Vector


class TestVector(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        print("class start")

    @classmethod
    def tearDownClass(cls):
        print("class end")

    def setUp(self):
        print("start")

    def tearDown(self):
        print("end")

    def test_init(self):
        v = Vector(1, 2)
        self.assertEqual(v.x, 1)
        self.assertEqual(v.y, 2)
        with self.assertRaises(ValueError):
            Vector("a", "b")

    def test_add(self):
        v = Vector(1, 2) + Vector(3, 4)
        self.assertEqual(v.x, 4)
        self.assertEqual(v.y, 6)
`},runs:[{cmd:"python -m unittest",exit:0,output:`class start
start
end
.start
end
.class end

----------------------------------------------------------------------
Ran 2 tests in 0.001s

OK
`}]},{title:"\u7528 skipIf \u8DF3\u8FC7\u6D4B\u8BD5",body:["\u7B2C\u4E00\u4E2A\u53C2\u6570\u4E3A\u771F\u65F6\u8DF3\u8FC7\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u8DF3\u8FC7\u539F\u56E0\u3002\u8FD9\u91CC\u4E24\u4E2A\u6761\u4EF6\u5728 Linux \u52A0 Python 3.12 \u4E0A\u90FD\u4E0D\u6210\u7ACB\uFF0C\u6240\u4EE5\u4E24\u4E2A\u6D4B\u8BD5\u7167\u5E38\u8FD0\u884C\uFF1B\u6362\u5230 Windows \u4E0A `test_add` \u4F1A\u663E\u793A\u6210 s\uFF08skipped\uFF09\u3002"],files:{"tests/test_vector.py":`import sys
import unittest

from vector import Vector


class TestVector(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        print("class start")

    @classmethod
    def tearDownClass(cls):
        print("class end")

    def setUp(self):
        print("start")

    def tearDown(self):
        print("end")

    @unittest.skipIf(sys.version_info < (3, 7), "requires Python 3.7+")
    def test_init(self):
        v = Vector(1, 2)
        self.assertEqual(v.x, 1)
        self.assertEqual(v.y, 2)
        with self.assertRaises(ValueError):
            Vector("a", "b")

    @unittest.skipIf(sys.platform == "win32", "not supported on Windows")
    def test_add(self):
        v = Vector(1, 2) + Vector(3, 4)
        self.assertEqual(v.x, 4)
        self.assertEqual(v.y, 6)
`},runs:[{cmd:"python -m unittest",exit:0,output:`class start
start
end
.start
end
.class end

----------------------------------------------------------------------
Ran 2 tests in 0.001s

OK
`}]},{title:"\u53EA\u8FD0\u884C\u6307\u5B9A\u7684\u6D4B\u8BD5",body:["\u6587\u4EF6\u4E0D\u53D8\u3002\u7528\u70B9\u53F7\u8DEF\u5F84\u9010\u7EA7\u7F29\u5C0F\u8303\u56F4\uFF1A\u6A21\u5757 `tests.test_vector` \u2192 \u7C7B `TestVector` \u2192 \u65B9\u6CD5 `test_add`\u3002\u4E24\u6761\u547D\u4EE4\u5404\u8DD1\u4E00\u6B21\uFF0C\u770B Ran \u540E\u9762\u7684\u6570\u91CF\u3002"],file:"tests/test_vector.py",files:{},runs:[{cmd:"python -m unittest tests.test_vector.TestVector.test_add",exit:0,output:`class start
start
end
.class end

----------------------------------------------------------------------
Ran 1 test in 0.001s

OK
`},{cmd:"python -m unittest tests.test_vector",exit:0,output:`class start
start
end
.start
end
.class end

----------------------------------------------------------------------
Ran 2 tests in 0.002s

OK
`}]}]}};var m=s(51507);let x="btn_JmFc",_="btnPrimary_x2Yk",y="treeItem_H3my",v="treeName_gOPr",j="termIcon_Zbcm",b={py:"python",md:"markdown",json:"json",toml:"toml",txt:"text"};function w(e,t){return e.replace(/\{(\w+)\}/g,(e,s)=>void 0!==t[s]?String(t[s]):`{${s}}`)}function g({text:e}){return e.split(/(`[^`]+`)/g).map((e,t)=>e.startsWith("`")&&e.endsWith("`")&&e.length>=2?(0,n.jsx)("code",{className:"inlineCode_AI70",children:e.slice(1,-1)},t):(0,n.jsx)(a.Fragment,{children:e},t))}function V(e){return(0,n.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",...e,children:(0,n.jsx)("polygon",{points:"6 3 20 12 6 21 6 3"})})}function C(e){return(0,n.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",...e,children:(0,n.jsx)("rect",{x:"4",y:"4",width:"16",height:"16",rx:"2"})})}function N({run:e}){let t=(0,a.useMemo)(()=>e.output.replace(/\n$/,"").split("\n"),[e.output]),{shown:s,started:r,done:l}=(0,m.A)(t,!0);return(0,n.jsxs)("div",{className:"termOutput_aJer","aria-live":"polite",children:[!r&&(0,n.jsx)("div",{className:"termRunning_L5SW",children:"\u8FD0\u884C\u4E2D\u2026"}),t.slice(0,s).map((e,t)=>(0,n.jsx)("div",{className:(0,i.A)("run-output__line","termLine_seW0"),children:""===e?" ":e},t)),r&&!l&&(0,n.jsx)("span",{className:"run-output__cursor"}),l&&(0,n.jsx)("div",{className:(0,i.A)("termFoot_BTl4",0!==e.exit&&"termFootFail_H1CC"),children:w("\u8FDB\u7A0B\u9000\u51FA\uFF0C\u9000\u51FA\u7801 {code}",{code:e.exit})})]})}function k({variant:e,step:t=1}){let s=f[e];if(!s)throw Error(`CodeWalkthrough: unknown variant "${e}"`);return(0,n.jsx)(T,{data:s,initialStep:t},e)}function E(e,t){let s=Object.keys(e.files||{}).filter(e=>e in t);return(e.file?[e.file,...s.filter(t=>t!==e.file)]:s).filter(e=>e in t)}function T({data:e,initialStep:t}){let{steps:s}=e,r=(0,c.A)(),l=(0,a.useMemo)(()=>(function(e){let t=[],s={};for(let r of e){for(let[e,t]of(s={...s},Object.entries(r.files||{})))null===t?delete s[e]:s[e]=t;t.push(s)}return t})(s),[s]),f=Math.min(Math.max(t-1,0),s.length-1),[m,k]=(0,a.useState)(f),[q,R]=(0,a.useState)(()=>E(s[f],l[f])),[A,D]=(0,a.useState)(()=>E(s[f],l[f])[0]??null),[S,F]=(0,a.useState)(!0),[I,O]=(0,a.useState)(()=>new Set),[L,U]=(0,a.useState)(null),z=(0,a.useRef)(null),M=s[m],P=l[m],W=m>0?l[m-1]:null,K=(0,a.useMemo)(()=>(function(e){let t={type:"folder",name:"",path:"",children:[]};for(let s of e){let e=s.split("/"),r=t;e.forEach((t,n)=>{if(n===e.length-1)return void r.children.push({type:"file",name:t,path:s});let l=e.slice(0,n+1).join("/"),a=r.children.find(e=>"folder"===e.type&&e.path===l);a||(a={type:"folder",name:t,path:l,children:[]},r.children.push(a)),r=a})}let s=e=>[...e].sort((e,t)=>e.type===t.type?e.name.localeCompare(t.name):"folder"===e.type?-1:1).map(e=>"folder"===e.type?{...e,children:s(e.children)}:e);return s(t.children)})(Object.keys(P)),[P]),H=e=>W?e in W?W[e]!==P[e]?"changed":"same":"new":"same",$=e=>{if(!s[e])return;let t=l[e],r=E(s[e],t);k(e),U(null),R(e=>{let s=e.filter(e=>e in t&&!r.includes(e));return r.length>0?[...r,...s]:s}),D(e=>r[0]??(e&&e in t?e:null))},B=e=>{D(e),R(t=>t.includes(e)?t:[...t,e])},J=A?H(A):"same",Y=(0,a.useMemo)(()=>null!==A&&A in P?S&&"changed"===J?function(e,t){let s=e.replace(/\n$/,"").split("\n"),r=t.replace(/\n$/,"").split("\n"),n=s.length,l=r.length,a=Array.from({length:n+1},()=>new Uint32Array(l+1));for(let e=n-1;e>=0;e-=1)for(let t=l-1;t>=0;t-=1)a[e][t]=s[e]===r[t]?a[e+1][t+1]+1:Math.max(a[e+1][t],a[e][t+1]);let i=[],o=0,c=0,d=0;for(;o<n||c<l;)o<n&&c<l&&s[o]===r[c]?(d+=1,i.push({type:"same",text:r[c],newNo:d}),o+=1,c+=1):c<l&&(o>=n||a[o][c+1]>=a[o+1][c])?(d+=1,i.push({type:"add",text:r[c],newNo:d}),c+=1):(i.push({type:"del",text:s[o],newNo:null}),o+=1);return i}(W[A],P[A]):P[A].replace(/\n$/,"").split("\n").map((e,t)=>({type:"same",text:e,newNo:t+1})):[],[A,P,W,S,J]);(0,a.useEffect)(()=>{let e=z.current;if(!e)return;let t=e.querySelector("[data-change]");if(!t)return void e.scrollTo({top:0});let s=t.offsetTop-e.clientHeight/2+t.offsetHeight/2;e.scrollTo({top:Math.max(s,0),behavior:"smooth"})},[m,A,S]);let G=(e,t)=>e.map(e=>{let s={paddingLeft:`${8+14*t}px`};if("file"===e.type){let t=e.path===A,r=H(e.path);return(0,n.jsxs)("button",{type:"button",onClick:()=>B(e.path),"aria-pressed":t,style:s,className:(0,i.A)(y,t&&"treeItemActive_J3RB"),children:[(0,n.jsx)("span",{"aria-hidden":"true",children:"\u{1F4C4}"}),(0,n.jsx)("span",{className:v,children:e.name}),"same"!==r&&(0,n.jsx)("span",{className:(0,i.A)("treeDot_LDfP","new"===r&&"treeDotNew_x66i"),title:"new"===r?d:u})]},e.path)}let r=I.has(e.path);return(0,n.jsxs)("div",{children:[(0,n.jsxs)("button",{type:"button","aria-expanded":!r,onClick:()=>{var t;return t=e.path,void O(e=>{let s=new Set(e);return s.has(t)?s.delete(t):s.add(t),s})},style:s,className:y,children:[(0,n.jsx)("span",{"aria-hidden":"true",children:r?"\u{1F4C1}":"\u{1F4C2}"}),(0,n.jsx)("span",{className:v,children:e.name})]}),!r&&G(e.children,t+1)]},e.path)}),X=r.plain.backgroundColor,Z=Y.map(e=>e.text).join("\n"),Q=M.runs||[];return(0,n.jsxs)("div",{className:"root_lC3A",children:[(0,n.jsxs)("div",{className:"stepsPanel_A8J6",children:[(0,n.jsxs)("div",{className:"stepHead_rWEC",children:[(0,n.jsx)("span",{className:"stepTitle_eRCc",children:w("\u7B2C {n} \u6B65 \xb7 {title}",{n:m+1,title:M.title})}),(0,n.jsx)("span",{className:"stepCounter_d1xs",children:w("{n} / {total}",{n:m+1,total:s.length})})]}),(0,n.jsx)("div",{className:"stepBody_xfZr",children:M.body.map((e,t)=>(0,n.jsx)("p",{children:(0,n.jsx)(g,{text:e})},t))}),(0,n.jsxs)("div",{className:"navButtons_ENqt",children:[(0,n.jsx)("button",{type:"button",disabled:0===m,onClick:()=>$(m-1),className:(0,i.A)(x,_),children:"\u4E0A\u4E00\u6B65"}),(0,n.jsx)("button",{type:"button",disabled:m===s.length-1,onClick:()=>$(m+1),className:(0,i.A)(x,_),children:"\u4E0B\u4E00\u6B65"})]})]}),(0,n.jsxs)("div",{className:"editor_qYbS",children:[(0,n.jsxs)("aside",{className:"fileTree_JOD2",children:[(0,n.jsx)("h4",{className:"fileTreeHeading_Y6Lw",children:"\u6587\u4EF6"}),(0,n.jsx)("div",{className:"treeScroll_n0Wz",children:G(K,0)})]}),(0,n.jsxs)("div",{className:"editorMain_i2Rz",children:[(0,n.jsxs)("div",{className:"tabs_tXbO","aria-label":"\u5DF2\u6253\u5F00\u7684\u6587\u4EF6",children:[q.map(e=>{let t=e===A,s=H(e);return(0,n.jsxs)("div",{className:(0,i.A)("tab_xRRt",t&&"tabActive_aLPS"),style:t?{backgroundColor:X}:void 0,children:[(0,n.jsxs)("button",{type:"button","aria-pressed":t,onClick:()=>B(e),className:"tabBtn_eZA1",children:[e.split("/").pop(),"same"!==s&&(0,n.jsx)("span",{className:(0,i.A)("badge_LVSu","new"===s&&"badgeNew_XShG"),children:"new"===s?d:u})]}),(0,n.jsx)("button",{type:"button","aria-label":w("\u5173\u95ED {path}",{path:e}),onClick:()=>{let t;R(t=q.filter(t=>t!==e)),A===e&&D(t.length>0?t[t.length-1]:null)},className:"tabClose_O9Id",children:"\xd7"})]},e)}),"changed"===J&&(0,n.jsx)("button",{type:"button","aria-pressed":S,onClick:()=>F(e=>!e),className:"diffToggle_l4yF",children:S?"\u53EA\u770B\u5F53\u524D":"\u663E\u793A\u6539\u52A8"})]}),null!==A&&Y.length>0?(0,n.jsx)("div",{ref:z,className:"codeScroll_IkCA",style:{backgroundColor:X},children:(0,n.jsx)(o.f4,{theme:r,code:Z,language:b[A.split(".").pop()]||"text",children:({tokens:e,getLineProps:t,getTokenProps:s})=>(0,n.jsx)("pre",{className:"pre_KPR6",style:{color:r.plain.color},children:e.map((e,r)=>{let l=Y[r]||{type:"same",newNo:r+1},a=t({line:e}),o="same"!==l.type;return(0,n.jsxs)("div",{...a,"data-change":o?l.type:void 0,className:(0,i.A)(a.className,"line_V6Xs","add"===l.type&&"lineAdd_r_VM","del"===l.type&&"lineDel_hneO"),children:[(0,n.jsx)("span",{"aria-hidden":"true",className:"lineNo_RmKD",children:l.newNo??""}),(0,n.jsx)("span",{"aria-hidden":"true",className:"lineSign_o58z",children:"add"===l.type?"+":"del"===l.type?"\u2212":""}),(0,n.jsx)("span",{className:"lineContent_h7_E",children:e.map((e,t)=>(0,n.jsx)("span",{...s({token:e})},t))})]},r)})})})}):(0,n.jsx)("div",{className:"empty_rG8E",style:{backgroundColor:X},children:(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{children:"\u6CA1\u6709\u6253\u5F00\u7684\u6587\u4EF6"}),(0,n.jsx)("p",{className:"emptySub_uyFT",children:"\u5728\u5DE6\u4FA7\u6587\u4EF6\u6811\u91CC\u9009\u62E9\u4E00\u4E2A\u6587\u4EF6"})]})})]})]}),Q.length>0&&(0,n.jsxs)("div",{className:"terminal_x6YH",style:{backgroundColor:X,color:r.plain.color},children:[(0,n.jsx)("div",{className:"termHead_Wogc",children:(0,n.jsx)("span",{className:"termLabel_wjlw",title:"\u9884\u5148\u5F55\u5236\u7684\u8FD0\u884C\u7ED3\u679C\uFF0C\u4E0D\u662F\u6D4F\u89C8\u5668\u5B9E\u65F6\u6267\u884C",children:"\u7EC8\u7AEF"})}),Q.map((e,t)=>{let s=L===t;return(0,n.jsxs)("div",{className:"termRun_pPQl",children:[(0,n.jsxs)("div",{className:"termPrompt__Qbi",children:[(0,n.jsx)("span",{className:"termDollar_FMaj","aria-hidden":"true",children:"$"}),(0,n.jsx)("code",{className:"termCmd_KH0y",children:e.cmd}),(0,n.jsx)("button",{type:"button","aria-expanded":s,"aria-label":s?h:p,title:s?h:p,onClick:()=>U(s?null:t),className:(0,i.A)("termBtn_CC8E",s&&"termBtnOpen_rzSH"),children:s?(0,n.jsx)(C,{className:j}):(0,n.jsx)(V,{className:j})})]}),s&&(0,n.jsx)(N,{run:e})]},`${m}-${t}`)})]})]})}let q={},R="unittest",A={},D=[{value:"\u6587\u4EF6\u7ED3\u6784",id:"\u6587\u4EF6\u7ED3\u6784",level:2},{value:"\u6D4B\u8BD5\u662F\u4EC0\u4E48",id:"\u6D4B\u8BD5\u662F\u4EC0\u4E48",level:2},{value:"\u6D4B\u8BD5\u6587\u4EF6\u600E\u4E48\u5199",id:"\u6D4B\u8BD5\u6587\u4EF6\u600E\u4E48\u5199",level:2},{value:"assertEqual \u8FD8\u662F assertTrue",id:"assertequal-\u8FD8\u662F-asserttrue",level:2},{value:"assertRaises",id:"assertraises",level:2},{value:"setUp \u4E0E tearDown",id:"setup-\u4E0E-teardown",level:2},{value:"setUpClass \u4E0E tearDownClass",id:"setupclass-\u4E0E-teardownclass",level:2},{value:"skipIf",id:"skipif",level:2},{value:"\u8FD0\u884C\u6307\u5B9A\u7684\u6D4B\u8BD5",id:"\u8FD0\u884C\u6307\u5B9A\u7684\u6D4B\u8BD5",level:2}];function S(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"unittest",children:"unittest"})}),"\n",(0,n.jsx)(t.p,{children:"\u8FD9\u7BC7\u6587\u7AE0\u6211\u4EEC\u8BB2\u4E00\u4E0B\u6D4B\u8BD5\u3002\u6211\u53D1\u73B0\u5F88\u591A\u4EBA\u4E0D\u77E5\u9053\u5982\u4F55\u5BF9\u81EA\u5DF1\u7684\u4EE3\u7801\u5B8C\u6210\u4E00\u4E2A\u6BD4\u8F83\u57FA\u7840\u7684\u6D4B\u8BD5\uFF0C\u6216\u8005\u8BF4\uFF0C\u4ED6\u4EEC\u53EF\u80FD\u4E0D\u77E5\u9053\u4E00\u4E2A\u6BD4\u8F83\u597D\u7684\u5DE5\u7A0B\u5B9E\u8DF5\u662F\u4EC0\u4E48\u6837\u7684\u3002\u6240\u4EE5\u8FD9\u6B21\u6211\u4EEC\u63D0\u4F9B\u4E00\u4E2A\u53EF\u4EE5\u76F4\u63A5\u6284\u8FC7\u53BB\u7528\u7684\u5B9E\u8DF5\u65B9\u5F0F\uFF0C\u6765\u5E2E\u52A9\u5927\u5BB6\u5B8C\u6210\u4E00\u4E2A\u66F4\u6B63\u89C4\u7684\u7F16\u7A0B\u9879\u76EE\u3002\u5E9F\u8BDD\u4E0D\u591A\u8BF4\uFF0C\u6211\u4EEC\u76F4\u63A5\u5F00\u59CB\u3002"}),"\n",(0,n.jsx)(t.h2,{id:"\u6587\u4EF6\u7ED3\u6784",children:"\u6587\u4EF6\u7ED3\u6784"}),"\n",(0,n.jsx)(t.p,{children:"\u9996\u5148\u8BB2\u4E00\u4E0B\u6587\u4EF6\u7ED3\u6784\u3002\u6211\u4EEC\u770B\u5DE6\u8FB9\uFF0C\u6211\u63A8\u8350\u7684\u6587\u4EF6\u7ED3\u6784\u662F\u8FD9\u6837\u7684\uFF1A\u5728\u6839\u76EE\u5F55\u4E0B\uFF0C\u53EA\u9700\u8981\u4E00\u4E2A\u5165\u53E3\u6587\u4EF6\u5373\u53EF\u3002\u90A3\u5982\u679C\u4F60\u662F\u5F00\u53D1\u4E00\u4E9B\u5305\u6216\u8005\u67D0\u4E00\u4E9B\u540E\u7AEF\u7684\u8BDD\uFF0C\u8FDE\u8FD9\u4E2A\u5165\u53E3\u6587\u4EF6\u90FD\u53EF\u4EE5\u4E0D\u8981\u3002"}),"\n",(0,n.jsxs)(t.p,{children:["\u90A3\u8FD9\u6B21\u6211\u4EEC\u7684\u4F8B\u5B50\u5462\uFF0C\u662F\u5199\u4E86\u4E00\u4E2A\u975E\u5E38\u7B80\u5355\u7684\u4E8C\u7EF4\u5411\u91CF\u7684\u8FD9\u4E48\u4E00\u4E2A\u5E93\u3002\u4F60\u6240\u6709\u7684\u6838\u5FC3\u4EE3\u7801\u90FD\u5E94\u8BE5\u653E\u5230\u4E00\u4E2A\u6587\u4EF6\u5939\u91CC\u3002\u5728\u8FD9\u4E2A\u4F8B\u5B50\u91CC\uFF0C\u6211\u4EEC\u653E\u5230 vector \u8FD9\u4E2A\u6587\u4EF6\u5939\u91CC\u3002\u6211\u4EEC\u8981\u628A\u8FD9\u4E2A\u6587\u4EF6\u5939\u53D8\u6210\u4E00\u4E2A package\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u8FD9\u4E2A\u6587\u4EF6\u5939\u91CC\u9762\u6211\u4EEC\u9700\u8981\u8FD9\u4E2A ",(0,n.jsx)(t.code,{children:"__init__.py"}),"\u3002\u8FD9\u4E2A ",(0,n.jsx)(t.code,{children:"__init__.py"})," \u91CC\u9762\u53EF\u4EE5\u653E\u4E00\u4E9B\u63A5\u53E3\uFF0C\u4E5F\u53EF\u4EE5\u538B\u6839\u4EC0\u4E48\u90FD\u6CA1\u6709\u3002\u8FD9\u4E2A vector \u6587\u4EF6\u5939\u91CC\u9762\u7684 vector.py \u5C31\u662F\u6211\u4EEC\u6838\u5FC3\u4EE3\u7801\u4FDD\u5B58\u7684\u5730\u65B9\u3002\u5F53\u7136\uFF0C\u4F60\u8FD9\u4E2A\u6587\u4EF6\u5939\u91CC\u9762\u53EF\u80FD\u6709\u5F88\u591A\u6587\u4EF6\uFF0C\u5BF9\u5427\uFF0C\u4E0D\u540C\u7684\u529F\u80FD\u3002"]}),"\n",(0,n.jsxs)(t.p,{children:["\u5728\u6839\u76EE\u5F55\u4E0B\u653E\u4E00\u4E2A\u53EB\u505A test \u7684\u6587\u4EF6\u5939\uFF0C\u8FD9\u91CC\u9762\u4E13\u95E8\u653E\u6211\u4EEC\u7684\u6D4B\u8BD5\u3002\u540C\u6837\u7684\uFF0C\u6D4B\u8BD5\u6587\u4EF6\u5939\u4E5F\u628A\u5B83\u53D8\u6210\u4E00\u4E2A package\uFF0C\u4E5F\u5C31\u662F\u91CC\u9762\u653E\u4E00\u4E2A ",(0,n.jsx)(t.code,{children:"__init__.py"}),"\u3002\u8FD9\u4E2A ",(0,n.jsx)(t.code,{children:"__init__.py"})," \u91CC\u53EF\u4EE5\u4EC0\u4E48\u90FD\u6CA1\u6709\u3002\u90A3\u8FD9\u4E2A\u6587\u4EF6\u5939\u91CC\u9762\u5176\u4ED6\u7684\u6587\u4EF6\u5C31\u90FD\u662F\u6211\u4EEC\u5199\u7684\u6D4B\u8BD5\u6587\u4EF6\u3002"]}),"\n",(0,n.jsxs)(t.p,{children:["\u6211\u4EEC\u8FD9\u6B21\u7ED9\u5927\u5BB6\u8BB2\u7684\u6D4B\u8BD5\u7684\u6846\u67B6\u5462\uFF0C\u662F ",(0,n.jsx)(t.a,{href:"https://docs.python.org/zh-cn/3/library/unittest.html",children:"unittest"}),"\uFF0C\u662F Python \u81EA\u5E26\u7684\u4E00\u4E2A\u6D4B\u8BD5\u6846\u67B6\u3002\u6211\u672C\u4EBA\u662F\u975E\u5E38\u559C\u6B22\u7528\u6807\u51C6\u5E93\u7684\uFF0C\u6240\u4EE5\u4E00\u76F4\u5728\u7528 unittest\u3002\u5927\u5BB6\u5148\u628A unittest \u5B66\u660E\u767D\u4E86\uFF0C\u4EE5\u540E\u5982\u679C\u4F60\u60F3\u7528\u5176\u4ED6\u7684 framework\uFF0C\u4E5F\u5DEE\u4E0D\u591A\u3002"]}),"\n",(0,n.jsxs)(t.p,{children:["\u5F53\u4F60\u50CF\u6211\u4ECB\u7ECD\u7684\u8FD9\u6837\u628A\u9879\u76EE\u6574\u7406\u597D\u4E4B\u540E\uFF0C\u4F60\u53EA\u9700\u8981\u5728\u6839\u76EE\u5F55\u4E0B\u8FD0\u884C ",(0,n.jsx)(t.code,{children:"python -m unittest"}),"\uFF0CPython \u5C31\u4F1A\u81EA\u52A8\u53BB\u5BFB\u627E\u4F60\u7684\u6D4B\u8BD5\uFF0C\u5E76\u4E14\u8FD0\u884C\u6D4B\u8BD5\u3002\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\uFF0C\u8FD9\u91CC\u5B83\u8FD0\u884C\u4E86\u4E00\u4E2A\u6D4B\u8BD5\uFF0C\u7136\u540E\u6CA1\u6709\u4EFB\u4F55\u6D4B\u8BD5 fail \u4E86\u3002"]}),"\n",(0,n.jsx)(k,{variant:"unittest",step:1}),"\n",(0,n.jsx)(t.h2,{id:"\u6D4B\u8BD5\u662F\u4EC0\u4E48",children:"\u6D4B\u8BD5\u662F\u4EC0\u4E48"}),"\n",(0,n.jsx)(t.p,{children:"\u6211\u4EEC\u63A5\u4E0B\u6765\u5C31\u4ECB\u7ECD\u4E00\u4E0B\u6D4B\u8BD5\u600E\u4E48\u5199\uFF0C\u7ED9\u5927\u5BB6\u4E00\u4E9B\u57FA\u7840\u7684\u77E5\u8BC6\uFF0C\u8BA9\u4F60\u53EF\u4EE5\u7ED9\u81EA\u5DF1\u7684\u9879\u76EE\u5199\u6D4B\u8BD5\u3002"}),"\n",(0,n.jsx)(t.p,{children:"\u9996\u5148\uFF0C\u6D4B\u8BD5\u662F\u4EC0\u4E48\uFF1F\u6D4B\u8BD5\u662F\u68C0\u67E5\u4F60\u7A0B\u5E8F\u7684\u8FD0\u884C\u7ED3\u679C\u662F\u4E0D\u662F\u4F60\u7684\u671F\u5F85\u7ED3\u679C\u3002\u6362\u8A00\u4E4B\uFF0C\u5728\u5199\u6D4B\u8BD5\u7684\u65F6\u5019\uFF0C\u4F60\u5FC5\u987B\u8981\u77E5\u9053\u6B63\u786E\u7B54\u6848\u3002\u5B83\u662F\u4E00\u4E2A\u5224\u5377\u5B50\u7684\u8FC7\u7A0B\uFF0C\u6240\u4EE5\u8BF4\uFF0C\u4F60\u8981\u77E5\u9053\u4F60\u7684\u4EE3\u7801\u5E94\u8BE5\u505A\u4EC0\u4E48\u3002"}),"\n",(0,n.jsx)(t.p,{children:"\u90A3\u6211\u4EEC\u6765\u770B\u4E00\u4E0B\u6211\u4EEC\u7684\u6E90\u4EE3\u7801\u3002\u6211\u4EEC\u5199\u7684\u662F\u4E00\u4E2A\u975E\u5E38\u975E\u5E38\u7B80\u5355\u7684\u4E8C\u7EF4\u5411\u91CF\u7C7B\u3002\u90A3\u5728 initialization \u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u4F20\u4E00\u4E2A x\uFF0C\u4F20\u4E00\u4E2A y\u3002\u7136\u540E\u6211\u4EEC\u505A\u4E86\u5411\u91CF\u7684\u52A0\u6CD5\u3001\u5411\u91CF\u7684\u6570\u4E58\uFF0C\u5411\u91CF\u7684\u70B9\u4E58\uFF0C\u8FD8\u6709\u4E00\u4E2A\u5411\u91CF\u7684\u6A21\u3002\u90A3\u8FD9\u4E9B\u5185\u5BB9\u90FD\u5F88\u7B80\u5355\uFF0C\u6211\u4EEC\u4E0D\u8D58\u8FF0\u554A\u3002\u6211\u4EEC\u8FD9\u7BC7\u6587\u7AE0\u7684\u6838\u5FC3\u662F\u8C08\u6D4B\u8BD5\u3002"}),"\n",(0,n.jsx)(t.h2,{id:"\u6D4B\u8BD5\u6587\u4EF6\u600E\u4E48\u5199",children:"\u6D4B\u8BD5\u6587\u4EF6\u600E\u4E48\u5199"}),"\n",(0,n.jsx)(t.p,{children:"\u597D\uFF0C\u6211\u4EEC\u770B\u56DE\u6211\u4EEC\u7684\u6D4B\u8BD5\u6587\u4EF6\u5939\u3002\u9996\u5148\uFF0C\u6BCF\u4E00\u4E2A\u6D4B\u8BD5\u6587\u4EF6\u5FC5\u987B\u8981\u662F test \u4E0B\u5212\u7EBF\u5F00\u5934\uFF0C\u5C31\u662F\u5B83\u5FC5\u987B\u5F97\u53EB test \u4E0B\u5212\u7EBF\u4EC0\u4E48\u4EC0\u4E48\u4E1C\u897F\u3002\u8FD9\u4E2A\u662F unittest \u672C\u8EAB\u7684\u89C4\u5B9A\u554A\u3002"}),"\n",(0,n.jsx)(t.p,{children:"\u90A3\u5728\u6D4B\u8BD5\u6587\u4EF6\u91CC\u5462\uFF0C\u6211\u4EEC\u8981\u5E72\u8FD9\u4E48\u51E0\u4EF6\u4E8B\u513F\u3002\u9996\u5148\uFF0C\u6211\u4EEC\u8981\u628A\u8FD9\u4E2A unittest \u7ED9 import \u8FDB\u6765\uFF0C\u56E0\u4E3A\u6211\u4EEC\u9700\u8981\u7EE7\u627F\u5B83\u7684 TestCase \u8FD9\u4E2A\u7C7B\u3002\u7B2C\u4E8C\uFF0C\u628A\u6211\u4EEC\u8981\u6D4B\u8BD5\u7684\u5185\u5BB9\u7ED9 import \u8FDB\u6765\u3002\u4E4B\u524D\u4E3A\u4EC0\u4E48\u6211\u5F3A\u8C03\u60F3\u628A\u5B83\u505A\u6210\u4E00\u4E2A package\uFF1F\u56E0\u4E3A\u8FD9\u6837\u7684\u8BDD\uFF0C\u4F60\u5728 import \u7684\u65F6\u5019\u6BD4\u8F83\u65B9\u4FBF\u3002\u4F60\u53EF\u4EE5\u76F4\u63A5\u505A from vector import vector\uFF0C\u6211\u4EEC\u5C31\u628A\u8FD9\u4E2A vector \u7C7B\u7ED9 import \u8FDB\u6765\u4E86\u3002"}),"\n",(0,n.jsx)(t.p,{children:"\u63A5\u4E0B\u6765\u5C31\u662F\u5199 test class\u3002\u8FD9\u4E2A test class \u9996\u5148\u5FC5\u987B\u8981\u7EE7\u627F\u8FD9\u4E2A unittest \u91CC\u9762\u7684 TestCase \u8FD9\u4E2A\u7C7B\u3002\u5176\u6B21\uFF0C\u4E00\u822C\u6765\u8BF4\uFF0C\u8FD9\u4E2A class \u662F test \u5F00\u5934\u6216\u8005 test \u7ED3\u5C3E\u3002\u8FD9\u662F\u4E00\u4E2A\u4E60\u60EF\u95EE\u9898\u3002"}),"\n",(0,n.jsx)(t.p,{children:"\u6BCF\u4E00\u4E2A test class \u91CC\u9762\u53EF\u4EE5\u6709\u82E5\u5E72\u4E2A test method\uFF0C\u800C\u8FD9\u4E9B test method \u5FC5\u987B\u4EE5 test \u4E0B\u5212\u7EBF\u5F00\u5934\uFF0C\u5426\u5219 unittest \u4F1A\u68C0\u6D4B\u4E0D\u5230\u3002"}),"\n",(0,n.jsx)(t.p,{children:"\u90A3\u5728\u6BCF\u4E00\u4E2A test method \u91CC\u9762\uFF0C\u6211\u4EEC\u5C31\u8981\u8FDB\u884C\u6B63\u5F0F\u7684\u6D4B\u8BD5\u4E86\u3002\u6240\u8C13\u6D4B\u8BD5\uFF0C\u5C31\u662F\u6211\u505A\u4E00\u4E2A\u6211\u5DF2\u7ECF\u77E5\u9053\u7ED3\u679C\u7684\u4E8B\u60C5\uFF0C\u7136\u540E\u9A8C\u8BC1\u5F97\u5230\u7684\u7ED3\u679C\u662F\u4E0D\u662F\u6211\u5DF2\u7ECF\u77E5\u9053\u7684\u7ED3\u679C\u3002\u6BD4\u5982\u8BF4\uFF0C\u5F53\u6211\u4EEC\u65B0\u5EFA\u4E86\u4E00\u4E2A vector\uFF0C\u7136\u540E\u628A 1\u30012 \u7ED9\u5F53\u4F5C argument \u4F20\u8FDB\u53BB\u7684\u65F6\u5019\uFF0C\u8FD9\u4E2A vector \u91CC\u9762\u7684 x \u548C y \u8FD9\u4E24\u4E2A attribute \u5E94\u8BE5\u5206\u522B\u88AB\u8D4B\u503C\u6210 1 \u548C 2\u3002"}),"\n",(0,n.jsxs)(t.p,{children:["\u800C\u5728 unittest \u91CC\u9762\uFF0C\u6709\u4E00\u7EC4\u53BB\u68C0\u9A8C\u6211\u4EEC\u5B9E\u9645\u5F97\u5230\u7684\u7ED3\u679C\uFF0C\u662F\u4E0D\u662F\u7406\u8BBA\u7ED3\u679C\u7684\u51FD\u6570\u3002\u5B83\u4EEC\u90FD\u662F self.assert \u5F00\u5934\u7684\u3002\u6BD4\u5982\u5728\u8FD9\u91CC\uFF0C\u6211\u4EEC\u5C31\u7528\u5230\u4E86 self.assertEqual\u3002\u90A3\u5982\u679C\u4F60\u6253\u5F00 ",(0,n.jsx)(t.a,{href:"https://docs.python.org/zh-cn/3/library/unittest.html#assert-methods",children:"Python unittest \u7684\u5B98\u65B9\u6587\u6863"}),"\uFF0C\u4F60\u53EF\u4EE5\u770B\u5230\uFF0C\u8FD9\u91CC\u9762\u6709\u5F88\u591A\u7684 assert \u4EC0\u4E48\u7684\u51FD\u6570\u3002\u5F53\u7136\uFF0C\u8FD9\u4E9B\u53EA\u662F\u76F8\u5BF9\u5E38\u7528\u7684\uFF0C\u8FD8\u6709\u5F88\u591A\u6CA1\u6709\u90A3\u4E48\u5E38\u7528\u7684\uFF0C\u6BD4\u5982\u8BF4\u8FD9\u4E9B\u3002"]}),"\n",(0,n.jsx)(t.p,{children:"\u90A3\u5F53\u4F60\u60F3\u5224\u65AD\u4E00\u4E2A\u7ED3\u679C\u7684\u65F6\u5019\uFF0C\u9996\u5148\u8981\u67E5\u4E00\u4E0B\uFF0Cunittest \u5B98\u65B9\u6709\u6CA1\u6709\u7ED9\u51FA\u8FD9\u79CD\u7ED3\u679C\u7684\u5224\u65AD\u65B9\u5F0F\u3002"}),"\n",(0,n.jsx)(t.h2,{id:"assertequal-\u8FD8\u662F-asserttrue",children:"assertEqual \u8FD8\u662F assertTrue"}),"\n",(0,n.jsx)(t.p,{children:"\u90A3\u4E48\uFF0C\u65E2\u7136\u5B83\u63D0\u4F9B\u4E86 assertTrue \u8FD9\u4E2A\u65B9\u5F0F\uFF0C\u4E3A\u4EC0\u4E48\u6211\u4EEC\u4E0D\u6240\u6709\u7684\u5730\u65B9\u90FD\u7528 assertTrue \u5462\uFF1F\u6BD4\u5982\u8BF4\uFF0C\u8FD9\u91CC\u6211\u4EEC\u7528 assertEqual(v.x, 0) \u548C assertTrue(v.x == 0)\uFF0C\u5B83\u4EEC\u4FE9\u662F\u7B49\u4EF7\u7684\u3002"}),"\n",(0,n.jsx)(t.p,{children:"\u90A3\u8FD9\u91CC\u6211\u4EEC\u4E4B\u6240\u4EE5\u8981\u7528 assertEqual\uFF0C\u662F\u56E0\u4E3A assertEqual \u5728 fail \u7684\u65F6\u5019\u53EF\u4EE5\u7ED9\u51FA\u66F4\u591A\u7684\u4FE1\u606F\u3002\u6211\u4EEC\u770B\uFF0C\u5728\u8FD9\u4E2A\u4F8B\u5B50\u91CC\u9762\uFF0Cv.x \u663E\u7136\u662F 1\uFF0C\u5BF9\u5427\uFF1F\u90A3\u4E48\u8FD9\u4E24\u4E2A\u4E1C\u897F\u90FD\u4F1A fail \u6389\u3002\u5982\u679C\u8FD9\u91CC\u662F assertEqual fail \u6389\uFF0C\u5B83\u4F1A\u544A\u8BC9\u4F60 1 \u4E0D\u7B49\u4E8E 0\uFF0C\u4F60\u5C31\u77E5\u9053 v.x \u662F 1 \u4E86\u3002"}),"\n",(0,n.jsx)(t.p,{children:"\u8FD9\u91CC\u6CE8\u610F\u4E00\u4E0B\uFF0C\u6BCF\u4E2A test method\uFF0C\u5F53\u5B83\u6709\u4E00\u4E2A\u5730\u65B9 fail \u7684\u65F6\u5019\uFF0C\u5B83\u5C31\u4E0D\u4F1A\u7EE7\u7EED\u5F80\u4E0B\u8FD0\u884C\u4E86\u3002"}),"\n",(0,n.jsx)(t.p,{children:"\u90A3\u5047\u8BBE\u6211\u4EEC\u7528 assertTrue \u7684\u8BDD\uFF0C\u5B83\u53EA\u4F1A\u8DDF\u4F60\u8BF4 False is not true\u3002\u6211\u4EEC\u53EA\u77E5\u9053 v.x \u4E0D\u662F 0\uFF0C\u4F46\u6211\u4EEC\u4E0D\u77E5\u9053\u5B83\u662F\u4EC0\u4E48\u3002\u6240\u4EE5\u8BF4\uFF0C\u5F53\u6211\u4EEC\u660E\u786E\u5730\u77E5\u9053\u8981\u5224\u65AD\u4EC0\u4E48\u4E1C\u897F\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u5E94\u8BE5\u5C3D\u91CF\u907F\u514D\u4F7F\u7528 assertTrue \u548C assertFalse\u3002"}),"\n",(0,n.jsx)(k,{variant:"unittest",step:2}),"\n",(0,n.jsx)(t.h2,{id:"assertraises",children:"assertRaises"}),"\n",(0,n.jsxs)(t.p,{children:["\u90A3\u8FD9\u91CC\u6211\u4EEC\u8981\u5355\u72EC\u62FF\u51FA\u6765\u8BF4\u4E00\u4E0B\uFF0C\u662F\u8FD9\u4E2A ",(0,n.jsx)(t.a,{href:"https://docs.python.org/zh-cn/3/library/unittest.html#unittest.TestCase.assertRaises",children:"assertRaises"}),"\u3002\u8FD9\u91CC\u6BD4\u5982\u8BF4\uFF0C\u6211\u4EEC\u628A\u8FD9\u4E2A vector ",(0,n.jsx)(t.code,{children:"__init__"})," \u51FD\u6570\u6539\u4E00\u4E0B\u3002\u6211\u4EEC\u9996\u5148\u8981\u786E\u8BA4\u8FD9\u4E2A x\u3001y\uFF0C\u5FC5\u987B\u8981\u662F\u6570\u624D\u53EF\u4EE5\u3002\u5426\u5219\u7684\u8BDD\uFF0C\u6211\u4EEC raise \u4E00\u4E2A ValueError\u3002"]}),"\n",(0,n.jsxs)(t.p,{children:["\u8FD9\u4E2A\u65F6\u5019\uFF0C\u6211\u4EEC\u60F3\u6D4B\u8BD5\u6211\u4EEC\u8FD9\u4E2A ",(0,n.jsx)(t.code,{children:"__init__"})," \u51FD\u6570\u662F\u4E0D\u662F\u6210\u529F\u5730 raise \u4E86\u8FD9\u4E2A error\u3002\u90A3\u6211\u4EEC\u7684\u5199\u6CD5\u5462\uFF0C\u5C31\u662F with self.assertRaises\uFF0C\u7136\u540E\u628A\u8FD9\u4E2A exception \u653E\u8FDB\u53BB\uFF0C\u5728\u8FD9\u4E2A with \u91CC\u9762\u53BB\u505A raise \u8FD9\u4E2A exception \u7684\u4E8B\u3002\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\u53F3\u8FB9\uFF0C\u6211\u4EEC\u8FD0\u884C\u4E00\u4E0B\u8FD9\u4E2A unittest\uFF0C\u5B83\u5C31 pass \u4E86\uFF0C\u56E0\u4E3A\u6211\u4EEC\u4F20\u8FDB\u53BB\u8FD9\u4E24\u4E2A\u503C\u4E0D\u662F\u6B63\u5E38\u7684 value\u3002\u76F8\u53CD\u7684\uFF0C\u5982\u679C\u6211\u4EEC\u4F20\u8FDB\u53BB\u7684\u503C\u662F\u5408\u6CD5\u503C\u7684\u8BDD\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u6D4B\u8BD5\u5C31\u4F1A fail\u3002\u5B83\u5C31\u4F1A\u5199 ValueError not raised\u3002"]}),"\n",(0,n.jsx)(k,{variant:"unittest",step:3}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-text",children:'F\n======================================================================\nFAIL: test_init (tests.test_vector.TestVector.test_init)\n----------------------------------------------------------------------\nTraceback (most recent call last):\n  File "/home/user/unittest_example/tests/test_vector.py", line 11, in test_init\n    with self.assertRaises(ValueError):\nAssertionError: ValueError not raised\n\n----------------------------------------------------------------------\nRan 1 test in 0.001s\n\nFAILED (failures=1)\n'})}),"\n",(0,n.jsx)(t.h2,{id:"setup-\u4E0E-teardown",children:"setUp \u4E0E tearDown"}),"\n",(0,n.jsx)(t.p,{children:"\u597D\uFF0C\u90A3\u63A5\u4E0B\u6765\u6211\u4EEC\u6765\u4ECB\u7ECD\u51E0\u4E2A\u975E\u5E38\u5E38\u7528\u7684 unittest \u7684\u4E00\u4E9B feature\u3002\u9996\u5148\uFF0C\u6211\u4EEC\u6709\u53EF\u80FD\u4F1A\u5728\u8FD0\u884C\u6BCF\u4E00\u4E2A test method \u4E4B\u524D\u6216\u8005\u4E4B\u540E\u505A\u4E00\u4E9B\u4E8B\u513F\u3002"}),"\n",(0,n.jsxs)(t.p,{children:["\u6211\u4EEC\u4E3E\u4E2A\u6700\u7B80\u5355\u7684\u4F8B\u5B50\u3002\u5047\u8BBE\u6211\u4EEC\u5728\u8FD0\u884C\u6BCF\u4E00\u4E2A\u6D4B\u8BD5\u4E4B\u524D\u3001\u4E4B\u540E\uFF0C\u90FD\u8981\u6253\u5370\u8FD9\u4E2A\u201C\u6D4B\u8BD5\u5F00\u59CB\u4E86\u201D\uFF0C\u201C\u6D4B\u8BD5\u7ED3\u675F\u4E86\u201D\u3002\u90A3\u6211\u4EEC\u53EF\u4EE5\u5728\u8FD9\u4E2A test class \u4E4B\u5185\uFF0C\u901A\u8FC7\u5B9A\u4E49 ",(0,n.jsx)(t.a,{href:"https://docs.python.org/zh-cn/3/library/unittest.html#unittest.TestCase.setUp",children:"setUp"})," \u51FD\u6570\u548C ",(0,n.jsx)(t.a,{href:"https://docs.python.org/zh-cn/3/library/unittest.html#unittest.TestCase.tearDown",children:"tearDown"})," \u51FD\u6570\u6765\u5B8C\u6210\u3002\u6211\u4EEC\u770B\uFF0C\u5728 setUp \u51FD\u6570\u91CC\u9762\uFF0C\u6211\u4EEC\u6253\u5370\u4E86\u4E00\u4E2A start\uFF0C\u7136\u540E\u5728 tearDown \u51FD\u6570\u91CC\u9762\uFF0C\u6211\u4EEC\u6253\u5370\u4E86\u4E00\u4E2A end\u3002\u4E8E\u662F\u6211\u4EEC\u5728\u8FD0\u884C unittest \u7684\u65F6\u5019\uFF0C\u8F93\u51FA\u91CC\u9762\u5C31\u4F1A\u6709\u4E00\u4E2A start \u8DDF\u4E00\u4E2A end\u3002\u90A3\u5982\u679C\u6211\u4EEC\u53C8\u589E\u52A0\u4E86\u4E00\u4E2A test method\uFF0C\u5C31\u53EF\u4EE5\u770B\u5230 start \u8DDF end \u88AB\u6253\u5370\u4E86\u4E24\u6B21\u3002"]}),"\n",(0,n.jsx)(k,{variant:"unittest",step:4}),"\n",(0,n.jsx)(k,{variant:"unittest",step:5}),"\n",(0,n.jsx)(t.h2,{id:"setupclass-\u4E0E-teardownclass",children:"setUpClass \u4E0E tearDownClass"}),"\n",(0,n.jsxs)(t.p,{children:["\u90A3\u5982\u679C\u6211\u4EEC\u60F3\u6BCF\u4E00\u4E2A test class \u8FD0\u884C\u4E4B\u524D\u548C\u7ED3\u675F\u4E4B\u540E\u505A\u4E00\u4E9B\u4E8B\u513F\u7684\u8BDD\uFF0C\u6211\u4EEC\u7528\u5230\u7684\u51FD\u6570\u5C31\u662F ",(0,n.jsx)(t.a,{href:"https://docs.python.org/zh-cn/3/library/unittest.html#unittest.TestCase.setUpClass",children:"setUpClass"})," \u8DDF ",(0,n.jsx)(t.a,{href:"https://docs.python.org/zh-cn/3/library/unittest.html#unittest.TestCase.tearDownClass",children:"tearDownClass"}),"\u3002\u6CE8\u610F\uFF0C\u8FD9\u4E24\u4E2A\u4E1C\u897F\u5FC5\u987B\u8981\u7528 classmethod \u8FD9\u4E2A\u88C5\u9970\u5668\u88C5\u9970\u4E00\u4E0B\u3002"]}),"\n",(0,n.jsx)(k,{variant:"unittest",step:6}),"\n",(0,n.jsx)(t.h2,{id:"skipif",children:"skipIf"}),"\n",(0,n.jsxs)(t.p,{children:["\u90A3\u8FD8\u6709\u4E00\u4E2A\u5F88\u5E38\u89C1\u7684\u9700\u6C42\uFF0C\u5C31\u662F\u6211\u5E0C\u671B\u6211\u7684\u6D4B\u8BD5\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\u4E0D\u8FD0\u884C\u3002\u8FD9\u65F6\u5019\u6211\u4EEC\u5C31\u8981\u7528\u5230\u4E00\u4E2A decorator\uFF0C\u662F ",(0,n.jsx)(t.a,{href:"https://docs.python.org/zh-cn/3/library/unittest.html#unittest.skipIf",children:"unittest.skipIf"}),"\u3002\u6211\u4EEC\u770B\uFF0C\u8FD9\u91CC\u8FD9\u4E2A decorator take \u4E86\u4E24\u4E2A argument\u3002\u7B2C\u4E00\u4E2A\u662F\u4E00\u4E2A boolean\uFF0C\u5728\u8FD9\u4E2A boolean evaluate \u6210 True \u7684\u65F6\u5019\uFF0C\u8FD9\u4E2A\u6D4B\u8BD5\u5C31\u4E0D\u8FD0\u884C\u3002\u90A3\u7B2C\u4E8C\u4E2A\u5462\uFF0C\u662F\u4E00\u4E2A message\u3002"]}),"\n",(0,n.jsxs)(t.p,{children:["\u5728\u8FD9\u4E2A\u4F8B\u5B50\u91CC\u9762\uFF0C\u6211\u6D4B\u8BD5\u4E86\u4E00\u4E0B\uFF0C\u5982\u679C\u6211 ",(0,n.jsx)(t.a,{href:"https://docs.python.org/zh-cn/3/library/sys.html#sys.platform",children:"sys.platform"})," \u662F win32 \u7684\u8BDD\uFF0C\u5C31\u4E0D\u8FD0\u884C\u8FD9\u4E2A\u6D4B\u8BD5\uFF0C\u4E5F\u5C31\u662F\u8FD9\u4E2A\u6D4B\u8BD5\u4E0D\u5728 Windows \u4E0A\u8FD0\u884C\u3002"]}),"\n",(0,n.jsxs)(t.p,{children:["\u90A3\u8FD8\u6709\u4E00\u4E2A\u6BD4\u8F83\u5E38\u89C1\u7684\u6761\u4EF6\u5462\uFF0C\u5C31\u662F ",(0,n.jsx)(t.a,{href:"https://docs.python.org/zh-cn/3/library/sys.html#sys.version_info",children:"version_info"}),"\uFF0C\u5C31\u662F\u8FD9\u4E2A Python \u7684\u7248\u672C\u3002\u6BD4\u5982\u8FD9\u91CC\u6211\u5199\u7684 sys.version_info \u5C0F\u4E8E 3.7\uFF0C\u5C31\u662F\u8BF4\u5B83\u53EA\u652F\u6301 3.7 \u53CA\u4EE5\u4E0A\u7684\u7248\u672C\u3002"]}),"\n",(0,n.jsx)(k,{variant:"unittest",step:7}),"\n",(0,n.jsx)(t.h2,{id:"\u8FD0\u884C\u6307\u5B9A\u7684\u6D4B\u8BD5",children:"\u8FD0\u884C\u6307\u5B9A\u7684\u6D4B\u8BD5"}),"\n",(0,n.jsx)(t.p,{children:"\u597D\uFF0C\u90A3\u6700\u540E\u5462\uFF0C\u6211\u4EEC\u4ECB\u7ECD\u4E00\u4E0B\u600E\u4E48\u8FD0\u884C\u6307\u5B9A\u7684\u6D4B\u8BD5\u3002\u6211\u4EEC\u73B0\u5728\u6240\u6709\u7684\u6D4B\u8BD5\u88AB\u5206\u6210\u4E86\u4E09\u7EA7\u3002\u7B2C\u4E00\u4E2A\u5462\uFF0C\u662F module level\uFF0C\u4E5F\u5C31\u662F\u67D0\u4E2A\u6587\u4EF6\uFF0C\u6BD4\u5982\u8BF4 test_vector.py\u3002\u5728\u4E00\u4E2A\u6587\u4EF6\u91CC\u9762\uFF0C\u6211\u4EEC\u53EF\u80FD\u6709\u82E5\u5E72\u4E2A test class\uFF0C\u6BD4\u5982\u8BF4\u8FD9\u4E2A test vector class\u3002\u5728\u6BCF\u4E00\u4E2A test class \u91CC\u9762\uFF0C\u6211\u4EEC\u53EF\u80FD\u6709\u82E5\u5E72\u4E2A test method\uFF0C\u6BD4\u5982\u8BF4\u6211\u4EEC\u73B0\u5728\u7684 test_init \u8DDF test_add\u3002"}),"\n",(0,n.jsxs)(t.p,{children:["\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u63A7\u5236 ",(0,n.jsx)(t.a,{href:"https://docs.python.org/zh-cn/3/library/unittest.html#command-line-interface",children:"unittest command line \u7684 argument"}),"\uFF0C\u6765\u544A\u8BC9 unittest \u8FD0\u884C\u54EA\u4E9B test\u3002\u6BD4\u5982\u5728\u8FD9\u91CC\uFF0C\u6211\u4EEC\u8FD0\u884C\u7684\u662F\uFF0Ctests \u8FD9\u4E2A\u6587\u4EF6\u5939\u4E0B\u7684 test_vector \u8FD9\u4E2A module\uFF0C\u91CC\u9762\u7684 test vector \u8FD9\u4E2A class \u91CC\u9762\u7684 test_add \u8FD9\u4E2A method\u3002\u53EF\u4EE5\u770B\u5230\uFF0C\u5B83\u53EA\u8FD0\u884C\u4E86\u4E00\u4E2A test\u3002"]}),"\n",(0,n.jsx)(t.p,{children:"\u90A3\u5982\u679C\u6211\u4EEC\u628A\u6761\u4EF6\u653E\u5BBD\u4E00\u4E9B\uFF0C\u6211\u4EEC\u8FD0\u884C test \u8FD9\u4E2A\u6587\u4EF6\u5939\u91CC\u9762\u7684 test_vector \u8FD9\u4E2A file\uFF0C\u5B83\u5C31\u4F1A\u8FD0\u884C\u4E24\u4E2A test \u4E86\u3002"}),"\n",(0,n.jsx)(k,{variant:"unittest",step:8}),"\n",(0,n.jsx)(t.p,{children:"\u6211\u4EEC\u4ECA\u5929\u8BB2\u7684\u662F unittest \u7684\u4E00\u4E9B\u6700\u6700\u57FA\u7840\u7684\u529F\u80FD\uFF0C\u4F46\u662F\u5C31\u662F\u8FD9\u4E9B\u6700\u57FA\u7840\u7684\u529F\u80FD\uFF0C\u5DF2\u7ECF\u6DB5\u76D6\u4E86\u81F3\u5C11 90% \u5230 95% \u7684\u4F7F\u7528\u60C5\u51B5\u4E86\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u5BF9\u4E8E\u4F60\u81EA\u5DF1\u7684\u9879\u76EE\uFF0C\u8FD9\u4E00\u5957\u6D41\u7A0B\u5DF2\u7ECF\u57FA\u672C\u8DB3\u591F\u7528\u4E86\u3002"}),"\n",(0,n.jsx)(t.p,{children:"\u4F60\u5E94\u8BE5\u53EF\u4EE5\u611F\u53D7\u5230\uFF0C\u7ED9\u81EA\u5DF1\u7684\u9879\u76EE\u5199\u6D4B\u8BD5\uFF0C\u5176\u5B9E\u4E0D\u662F\u4E00\u4E2A\u975E\u5E38\u8D39\u52B2\u7684\u4E8B\u3002\u5B83\u7684 overhead \u8FD8\u662F\u633A\u4F4E\u7684\u3002"}),"\n",(0,n.jsx)(t.p,{children:"\u597D\uFF0C\u90A3\u8FD9\u7BC7\u6587\u7AE0\u5C31\u5230\u8FD9\u91CC\u3002\u5E0C\u671B\u5BF9\u5927\u5BB6\u6709\u6240\u5E2E\u52A9\u3002"})]})}function F(e={}){let{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(S,{...e})}):S(e)}},67810(e,t,s){s.d(t,{A:()=>l});var r=s(83941),n=s(61022);function l(){let{prism:e}=(0,n.p)(),{colorMode:t}=(0,r.G)(),s=e.theme,l=e.darkTheme||s;return"dark"===t?l:s}},51507(e,t,s){s.d(t,{A:()=>n});var r=s(96540);function n(e,t){let s=e.length,[n,l]=(0,r.useState)(0),[a,i]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{if(!t){l(0),i(!1);return}if("u">typeof window&&window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches){i(!0),l(s);return}let e=window.setTimeout(()=>{i(!0),e=window.setInterval(()=>{l(t=>t+1>=s?(window.clearInterval(e),s):t+1)},80)},350);return()=>{window.clearTimeout(e),window.clearInterval(e)}},[t,s]),{shown:n,started:a,done:a&&n>=s}}},28453(e,t,s){s.d(t,{R:()=>a,x:()=>i});var r=s(96540);let n={},l=r.createContext(n);function a(e){let t=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);