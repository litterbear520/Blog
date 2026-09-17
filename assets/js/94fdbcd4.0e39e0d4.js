"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([["8104"],{74683(e,t,s){s.r(t),s.d(t,{metadata:()=>r,default:()=>I,frontMatter:()=>q,contentTitle:()=>A,toc:()=>F,assets:()=>D});var r=JSON.parse('{"id":"python/unittest","title":"unittest","description":"\u8FD9\u7BC7\u6587\u7AE0\u6211\u4EEC\u8BB2\u4E00\u4E0B\u6D4B\u8BD5\u3002\u6211\u53D1\u73B0\u5F88\u591A\u4EBA\u4E0D\u77E5\u9053\u5982\u4F55\u5BF9\u81EA\u5DF1\u7684\u4EE3\u7801\u5B8C\u6210\u4E00\u4E2A\u6BD4\u8F83\u57FA\u7840\u7684\u6D4B\u8BD5\uFF0C\u6216\u8005\u8BF4\uFF0C\u4ED6\u4EEC\u53EF\u80FD\u4E0D\u77E5\u9053\u4E00\u4E2A\u6BD4\u8F83\u597D\u7684\u5DE5\u7A0B\u5B9E\u8DF5\u662F\u4EC0\u4E48\u6837\u7684\u3002\u6240\u4EE5\u8FD9\u6B21\u6211\u4EEC\u63D0\u4F9B\u4E00\u4E2A\u53EF\u4EE5\u76F4\u63A5\u6284\u8FC7\u53BB\u7528\u7684\u5B9E\u8DF5\u65B9\u5F0F\uFF0C\u6765\u5E2E\u52A9\u5927\u5BB6\u5B8C\u6210\u4E00\u4E2A\u66F4\u6B63\u89C4\u7684\u7F16\u7A0B\u9879\u76EE\u3002\u5E9F\u8BDD\u4E0D\u591A\u8BF4\uFF0C\u6211\u4EEC\u76F4\u63A5\u5F00\u59CB\u3002","source":"@site/docs/python/unittest.mdx","sourceDirName":"python","slug":"/python/unittest","permalink":"/docs/python/unittest","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"queue","permalink":"/docs/python/queue"},"next":{"title":"\u5168\u5C40\u548C\u95ED\u5305\u53D8\u91CF","permalink":"/docs/python/\u5168\u5C40\u548C\u95ED\u5305\u53D8\u91CF"}}'),n=s(74848),i=s(28453),l=s(96540),a=s(34164),o=s(71765),c=s(67810);let d="\u65B0\u6587\u4EF6",u="\u5DF2\u4FEE\u6539",p="\u8FD0\u884C",h="\u6536\u8D77",f={unittest:{steps:[{title:"\u642D\u597D\u9879\u76EE\u9AA8\u67B6",body:["\u6838\u5FC3\u4EE3\u7801\u653E\u8FDB `vector/` \u5305\uFF0C\u6D4B\u8BD5\u653E\u8FDB `tests/` \u5305\uFF0C\u4E24\u4E2A\u6587\u4EF6\u5939\u90FD\u6709 `__init__.py`\uFF0C\u6839\u76EE\u5F55\u53EA\u7559\u4E00\u4E2A\u5165\u53E3\u6587\u4EF6\u3002","\u5728\u6839\u76EE\u5F55\u8FD0\u884C `python -m unittest`\uFF0Cunittest \u4F1A\u81EA\u52A8\u627E\u5230 `tests/test_vector.py` \u91CC\u7684 `test_init` \u5E76\u8FD0\u884C\u3002\u70B9\u5DE6\u4FA7\u6587\u4EF6\u6811\u53EF\u4EE5\u770B\u6BCF\u4E2A\u6587\u4EF6\u3002"],file:"tests/test_vector.py",files:{"examply.py":"",".gitignore":`# Python-generated files
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
`}]}]}};var m=s(51507);let x="btn_JmFc",v="btnPrimary_x2Yk",y="treeItem_H3my",_="treeName_gOPr",j="termIcon_Zbcm",w={py:"python",md:"markdown",json:"json",toml:"toml",txt:"text"};function b(e,t){return e.replace(/\{(\w+)\}/g,(e,s)=>void 0!==t[s]?String(t[s]):`{${s}}`)}function g({text:e}){return e.split(/(`[^`]+`)/g).map((e,t)=>e.startsWith("`")&&e.endsWith("`")&&e.length>=2?(0,n.jsx)("code",{className:"inlineCode_AI70",children:e.slice(1,-1)},t):(0,n.jsx)(l.Fragment,{children:e},t))}function V(e){return(0,n.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",...e,children:(0,n.jsx)("polygon",{points:"6 3 20 12 6 21 6 3"})})}function C(e){return(0,n.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",...e,children:[(0,n.jsx)("rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}),(0,n.jsx)("path",{d:"m7 11 2-2-2-2"}),(0,n.jsx)("path",{d:"M11 13h4"})]})}function E(e){return(0,n.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",...e,children:(0,n.jsx)("rect",{x:"4",y:"4",width:"16",height:"16",rx:"2"})})}function N({run:e}){let t=(0,l.useMemo)(()=>e.output.replace(/\n$/,"").split("\n"),[e.output]),{shown:s,started:r,done:i}=(0,m.A)(t,!0);return(0,n.jsxs)("div",{className:"termOutput_aJer","aria-live":"polite",children:[!r&&(0,n.jsx)("div",{className:"termRunning_L5SW",children:"\u8FD0\u884C\u4E2D\u2026"}),t.slice(0,s).map((e,t)=>(0,n.jsx)("div",{className:(0,a.A)("run-output__line","termLine_seW0"),children:""===e?" ":e},t)),r&&!i&&(0,n.jsx)("span",{className:"run-output__cursor"}),i&&(0,n.jsx)("div",{className:(0,a.A)("termFoot_BTl4",0!==e.exit&&"termFootFail_H1CC"),children:b("\u8FDB\u7A0B\u9000\u51FA\uFF0C\u9000\u51FA\u7801 {code}",{code:e.exit})})]})}function k({variant:e,step:t=1,nav:s=!1}){let r=f[e];if(!r)throw Error(`CodeWalkthrough: unknown variant "${e}"`);return(0,n.jsx)(R,{data:r,initialStep:t,nav:s},e)}function T(e,t){let s=Object.keys(e.files||{}).filter(e=>e in t);return(e.file?[e.file,...s.filter(t=>t!==e.file)]:s).filter(e=>e in t)}function R({data:e,initialStep:t,nav:s}){let{steps:r}=e,i=(0,c.A)(),f=(0,l.useMemo)(()=>(function(e){let t=[],s={};for(let r of e){for(let[e,t]of(s={...s},Object.entries(r.files||{})))null===t?delete s[e]:s[e]=t;t.push(s)}return t})(r),[r]),m=Math.min(Math.max(t-1,0),r.length-1),[k,q]=(0,l.useState)(m),[A,D]=(0,l.useState)(()=>T(r[m],f[m])),[F,S]=(0,l.useState)(()=>T(r[m],f[m])[0]??null),[I,L]=(0,l.useState)(!0),[O,U]=(0,l.useState)(()=>new Set),[M,z]=(0,l.useState)(null),P=(0,l.useRef)(null),W=r[k],H=f[k],K=k>0?f[k-1]:null,B=(0,l.useMemo)(()=>(function(e){let t={type:"folder",name:"",path:"",children:[]};for(let s of e){let e=s.split("/"),r=t;e.forEach((t,n)=>{if(n===e.length-1)return void r.children.push({type:"file",name:t,path:s});let i=e.slice(0,n+1).join("/"),l=r.children.find(e=>"folder"===e.type&&e.path===i);l||(l={type:"folder",name:t,path:i,children:[]},r.children.push(l)),r=l})}let s=e=>[...e].sort((e,t)=>e.type===t.type?e.name.localeCompare(t.name):"folder"===e.type?-1:1).map(e=>"folder"===e.type?{...e,children:s(e.children)}:e);return s(t.children)})(Object.keys(H)),[H]),$=e=>K?e in K?K[e]!==H[e]?"changed":"same":"new":"same",J=e=>{if(!r[e])return;let t=f[e],s=T(r[e],t);q(e),z(null),D(e=>{let r=e.filter(e=>e in t&&!s.includes(e));return s.length>0?[...s,...r]:r}),S(e=>s[0]??(e&&e in t?e:null))},G=e=>{S(e),D(t=>t.includes(e)?t:[...t,e])},Y=F?$(F):"same",X=(0,l.useMemo)(()=>null!==F&&F in H?I&&"changed"===Y?function(e,t){let s=e.replace(/\n$/,"").split("\n"),r=t.replace(/\n$/,"").split("\n"),n=s.length,i=r.length,l=Array.from({length:n+1},()=>new Uint32Array(i+1));for(let e=n-1;e>=0;e-=1)for(let t=i-1;t>=0;t-=1)l[e][t]=s[e]===r[t]?l[e+1][t+1]+1:Math.max(l[e+1][t],l[e][t+1]);let a=[],o=0,c=0,d=0;for(;o<n||c<i;)o<n&&c<i&&s[o]===r[c]?(d+=1,a.push({type:"same",text:r[c],newNo:d}),o+=1,c+=1):c<i&&(o>=n||l[o][c+1]>=l[o+1][c])?(d+=1,a.push({type:"add",text:r[c],newNo:d}),c+=1):(a.push({type:"del",text:s[o],newNo:null}),o+=1);return a}(K[F],H[F]):H[F].replace(/\n$/,"").split("\n").map((e,t)=>({type:"same",text:e,newNo:t+1})):[],[F,H,K,I,Y]);(0,l.useEffect)(()=>{let e=P.current;if(!e)return;let t=e.querySelector("[data-change]");if(!t)return void e.scrollTo({top:0});let s=t.offsetTop-e.clientHeight/2+t.offsetHeight/2;e.scrollTo({top:Math.max(s,0),behavior:"smooth"})},[k,F,I]);let Z=(e,t)=>e.map(e=>{let s={paddingLeft:`${8+14*t}px`};if("file"===e.type){let t=e.path===F,r=$(e.path);return(0,n.jsxs)("button",{type:"button",onClick:()=>G(e.path),"aria-pressed":t,style:s,className:(0,a.A)(y,t&&"treeItemActive_J3RB"),children:[(0,n.jsx)("span",{"aria-hidden":"true",children:"\u{1F4C4}"}),(0,n.jsx)("span",{className:_,children:e.name}),"same"!==r&&(0,n.jsx)("span",{className:(0,a.A)("treeDot_LDfP","new"===r&&"treeDotNew_x66i"),title:"new"===r?d:u})]},e.path)}let r=O.has(e.path);return(0,n.jsxs)("div",{children:[(0,n.jsxs)("button",{type:"button","aria-expanded":!r,onClick:()=>{var t;return t=e.path,void U(e=>{let s=new Set(e);return s.has(t)?s.delete(t):s.add(t),s})},style:s,className:y,children:[(0,n.jsx)("span",{"aria-hidden":"true",children:r?"\u{1F4C1}":"\u{1F4C2}"}),(0,n.jsx)("span",{className:_,children:e.name})]}),!r&&Z(e.children,t+1)]},e.path)}),Q=i.plain.backgroundColor,ee=X.map(e=>e.text).join("\n"),et=W.runs||[];return(0,n.jsxs)("div",{className:"root_lC3A",children:[(0,n.jsxs)("div",{className:"stepsPanel_A8J6",children:[(0,n.jsxs)("div",{className:"stepHead_rWEC",children:[(0,n.jsx)("span",{className:"stepTitle_eRCc",children:b("\u7B2C {n} \u6B65 \xb7 {title}",{n:k+1,title:W.title})}),(0,n.jsx)("span",{className:"stepCounter_d1xs",children:b("{n} / {total}",{n:k+1,total:r.length})})]}),(0,n.jsx)("div",{className:"stepBody_xfZr",children:W.body.map((e,t)=>(0,n.jsx)("p",{children:(0,n.jsx)(g,{text:e})},t))}),s&&(0,n.jsxs)("div",{className:"navButtons_ENqt",children:[(0,n.jsx)("button",{type:"button",disabled:0===k,onClick:()=>J(k-1),className:(0,a.A)(x,v),children:"\u4E0A\u4E00\u6B65"}),(0,n.jsx)("button",{type:"button",disabled:k===r.length-1,onClick:()=>J(k+1),className:(0,a.A)(x,v),children:"\u4E0B\u4E00\u6B65"})]})]}),(0,n.jsxs)("div",{className:"editor_qYbS",children:[(0,n.jsxs)("aside",{className:"fileTree_JOD2",children:[(0,n.jsx)("h4",{className:"fileTreeHeading_Y6Lw",children:"\u6587\u4EF6"}),(0,n.jsx)("div",{className:"treeScroll_n0Wz",children:Z(B,0)})]}),(0,n.jsxs)("div",{className:"editorMain_i2Rz",children:[(0,n.jsxs)("div",{className:"tabs_tXbO","aria-label":"\u5DF2\u6253\u5F00\u7684\u6587\u4EF6",children:[A.map(e=>{let t=e===F,s=$(e);return(0,n.jsxs)("div",{className:(0,a.A)("tab_xRRt",t&&"tabActive_aLPS"),style:t?{backgroundColor:Q}:void 0,children:[(0,n.jsxs)("button",{type:"button","aria-pressed":t,onClick:()=>G(e),className:"tabBtn_eZA1",children:[e.split("/").pop(),"same"!==s&&(0,n.jsx)("span",{className:(0,a.A)("badge_LVSu","new"===s&&"badgeNew_XShG"),children:"new"===s?d:u})]}),(0,n.jsx)("button",{type:"button","aria-label":b("\u5173\u95ED {path}",{path:e}),onClick:()=>{let t;D(t=A.filter(t=>t!==e)),F===e&&S(t.length>0?t[t.length-1]:null)},className:"tabClose_O9Id",children:"\xd7"})]},e)}),"changed"===Y&&(0,n.jsx)("button",{type:"button","aria-pressed":I,onClick:()=>L(e=>!e),className:"diffToggle_l4yF",children:I?"\u53EA\u770B\u5F53\u524D":"\u663E\u793A\u6539\u52A8"})]}),null!==F&&X.length>0?(0,n.jsx)("div",{ref:P,className:"codeScroll_IkCA",style:{backgroundColor:Q},children:(0,n.jsx)(o.f4,{theme:i,code:ee,language:w[F.split(".").pop()]||"text",children:({tokens:e,getLineProps:t,getTokenProps:s})=>(0,n.jsx)("pre",{className:"pre_KPR6",style:{color:i.plain.color},children:e.map((e,r)=>{let i=X[r]||{type:"same",newNo:r+1},l=t({line:e}),o="same"!==i.type;return(0,n.jsxs)("div",{...l,"data-change":o?i.type:void 0,className:(0,a.A)(l.className,"line_V6Xs","add"===i.type&&"lineAdd_r_VM","del"===i.type&&"lineDel_hneO"),children:[(0,n.jsx)("span",{"aria-hidden":"true",className:"lineNo_RmKD",children:i.newNo??""}),(0,n.jsx)("span",{"aria-hidden":"true",className:"lineSign_o58z",children:"add"===i.type?"+":"del"===i.type?"\u2212":""}),(0,n.jsx)("span",{className:"lineContent_h7_E",children:e.map((e,t)=>(0,n.jsx)("span",{...s({token:e})},t))})]},r)})})})}):(0,n.jsx)("div",{className:"empty_rG8E",style:{backgroundColor:Q},children:(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{children:"\u6CA1\u6709\u6253\u5F00\u7684\u6587\u4EF6"}),(0,n.jsx)("p",{className:"emptySub_uyFT",children:"\u5728\u5DE6\u4FA7\u6587\u4EF6\u6811\u91CC\u9009\u62E9\u4E00\u4E2A\u6587\u4EF6"})]})})]})]}),et.length>0&&(0,n.jsxs)("div",{className:"terminal_x6YH",style:{backgroundColor:Q,color:i.plain.color},children:[(0,n.jsx)("div",{className:"termHead_Wogc",title:"\u9884\u5148\u5F55\u5236\u7684\u8FD0\u884C\u7ED3\u679C\uFF0C\u4E0D\u662F\u6D4F\u89C8\u5668\u5B9E\u65F6\u6267\u884C",children:(0,n.jsx)(C,{className:"termHeadIcon_kENG","aria-label":"\u7EC8\u7AEF",role:"img"})}),et.map((e,t)=>{let s=M===t;return(0,n.jsxs)("div",{className:"termRun_pPQl",children:[(0,n.jsxs)("div",{className:"termPrompt__Qbi",children:[(0,n.jsx)("span",{className:"termDollar_FMaj","aria-hidden":"true",children:"$"}),(0,n.jsx)("code",{className:"termCmd_KH0y",children:e.cmd}),(0,n.jsx)("button",{type:"button","aria-expanded":s,"aria-label":s?h:p,title:s?h:p,onClick:()=>z(s?null:t),className:(0,a.A)("termBtn_CC8E",s&&"termBtnOpen_rzSH"),children:s?(0,n.jsx)(E,{className:j}):(0,n.jsx)(V,{className:j})})]}),s&&(0,n.jsx)(N,{run:e})]},`${k}-${t}`)})]})]})}let q={},A="unittest",D={},F=[{value:"\u6587\u4EF6\u7ED3\u6784",id:"\u6587\u4EF6\u7ED3\u6784",level:2},{value:"\u6D4B\u8BD5\u662F\u4EC0\u4E48",id:"\u6D4B\u8BD5\u662F\u4EC0\u4E48",level:2},{value:"\u6D4B\u8BD5\u6587\u4EF6\u600E\u4E48\u5199",id:"\u6D4B\u8BD5\u6587\u4EF6\u600E\u4E48\u5199",level:2},{value:"assertEqual \u8FD8\u662F assertTrue",id:"assertequal-\u8FD8\u662F-asserttrue",level:2},{value:"assertRaises",id:"assertraises",level:2},{value:"setUp \u4E0E tearDown",id:"setup-\u4E0E-teardown",level:2},{value:"setUpClass \u4E0E tearDownClass",id:"setupclass-\u4E0E-teardownclass",level:2},{value:"skipIf",id:"skipif",level:2},{value:"\u8FD0\u884C\u6307\u5B9A\u7684\u6D4B\u8BD5",id:"\u8FD0\u884C\u6307\u5B9A\u7684\u6D4B\u8BD5",level:2}];function S(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"unittest",children:"unittest"})}),"\n",(0,n.jsx)(t.p,{children:"\u8FD9\u7BC7\u6587\u7AE0\u6211\u4EEC\u8BB2\u4E00\u4E0B\u6D4B\u8BD5\u3002\u6211\u53D1\u73B0\u5F88\u591A\u4EBA\u4E0D\u77E5\u9053\u5982\u4F55\u5BF9\u81EA\u5DF1\u7684\u4EE3\u7801\u5B8C\u6210\u4E00\u4E2A\u6BD4\u8F83\u57FA\u7840\u7684\u6D4B\u8BD5\uFF0C\u6216\u8005\u8BF4\uFF0C\u4ED6\u4EEC\u53EF\u80FD\u4E0D\u77E5\u9053\u4E00\u4E2A\u6BD4\u8F83\u597D\u7684\u5DE5\u7A0B\u5B9E\u8DF5\u662F\u4EC0\u4E48\u6837\u7684\u3002\u6240\u4EE5\u8FD9\u6B21\u6211\u4EEC\u63D0\u4F9B\u4E00\u4E2A\u53EF\u4EE5\u76F4\u63A5\u6284\u8FC7\u53BB\u7528\u7684\u5B9E\u8DF5\u65B9\u5F0F\uFF0C\u6765\u5E2E\u52A9\u5927\u5BB6\u5B8C\u6210\u4E00\u4E2A\u66F4\u6B63\u89C4\u7684\u7F16\u7A0B\u9879\u76EE\u3002\u5E9F\u8BDD\u4E0D\u591A\u8BF4\uFF0C\u6211\u4EEC\u76F4\u63A5\u5F00\u59CB\u3002"}),"\n",(0,n.jsx)(t.h2,{id:"\u6587\u4EF6\u7ED3\u6784",children:"\u6587\u4EF6\u7ED3\u6784"}),"\n",(0,n.jsx)(t.p,{children:"\u9996\u5148\u8BB2\u4E00\u4E0B\u6587\u4EF6\u7ED3\u6784\u3002\u6211\u4EEC\u770B\u5DE6\u8FB9\uFF0C\u6211\u63A8\u8350\u7684\u6587\u4EF6\u7ED3\u6784\u662F\u8FD9\u6837\u7684\uFF1A\u5728\u6839\u76EE\u5F55\u4E0B\uFF0C\u53EA\u9700\u8981\u4E00\u4E2A\u5165\u53E3\u6587\u4EF6\u5373\u53EF\u3002\u90A3\u5982\u679C\u4F60\u662F\u5F00\u53D1\u4E00\u4E9B\u5305\u6216\u8005\u67D0\u4E00\u4E9B\u540E\u7AEF\u7684\u8BDD\uFF0C\u8FDE\u8FD9\u4E2A\u5165\u53E3\u6587\u4EF6\u90FD\u53EF\u4EE5\u4E0D\u8981\u3002"}),"\n",(0,n.jsxs)(t.p,{children:["\u90A3\u8FD9\u6B21\u6211\u4EEC\u7684\u4F8B\u5B50\u5462\uFF0C\u662F\u5199\u4E86\u4E00\u4E2A\u975E\u5E38\u7B80\u5355\u7684\u4E8C\u7EF4\u5411\u91CF\u7684\u8FD9\u4E48\u4E00\u4E2A\u5E93\u3002\u4F60\u6240\u6709\u7684\u6838\u5FC3\u4EE3\u7801\u90FD\u5E94\u8BE5\u653E\u5230\u4E00\u4E2A\u6587\u4EF6\u5939\u91CC\u3002\u5728\u8FD9\u4E2A\u4F8B\u5B50\u91CC\uFF0C\u6211\u4EEC\u653E\u5230 vector \u8FD9\u4E2A\u6587\u4EF6\u5939\u91CC\u3002\u6211\u4EEC\u8981\u628A\u8FD9\u4E2A\u6587\u4EF6\u5939\u53D8\u6210\u4E00\u4E2A package\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u8FD9\u4E2A\u6587\u4EF6\u5939\u91CC\u9762\u6211\u4EEC\u9700\u8981\u8FD9\u4E2A ",(0,n.jsx)(t.code,{children:"__init__.py"}),"\u3002\u8FD9\u4E2A ",(0,n.jsx)(t.code,{children:"__init__.py"})," \u91CC\u9762\u53EF\u4EE5\u653E\u4E00\u4E9B\u63A5\u53E3\uFF0C\u4E5F\u53EF\u4EE5\u538B\u6839\u4EC0\u4E48\u90FD\u6CA1\u6709\u3002\u8FD9\u4E2A vector \u6587\u4EF6\u5939\u91CC\u9762\u7684 vector.py \u5C31\u662F\u6211\u4EEC\u6838\u5FC3\u4EE3\u7801\u4FDD\u5B58\u7684\u5730\u65B9\u3002\u5F53\u7136\uFF0C\u4F60\u8FD9\u4E2A\u6587\u4EF6\u5939\u91CC\u9762\u53EF\u80FD\u6709\u5F88\u591A\u6587\u4EF6\uFF0C\u5BF9\u5427\uFF0C\u4E0D\u540C\u7684\u529F\u80FD\u3002"]}),"\n",(0,n.jsxs)(t.p,{children:["\u5728\u6839\u76EE\u5F55\u4E0B\u653E\u4E00\u4E2A\u53EB\u505A test \u7684\u6587\u4EF6\u5939\uFF0C\u8FD9\u91CC\u9762\u4E13\u95E8\u653E\u6211\u4EEC\u7684\u6D4B\u8BD5\u3002\u540C\u6837\u7684\uFF0C\u6D4B\u8BD5\u6587\u4EF6\u5939\u4E5F\u628A\u5B83\u53D8\u6210\u4E00\u4E2A package\uFF0C\u4E5F\u5C31\u662F\u91CC\u9762\u653E\u4E00\u4E2A ",(0,n.jsx)(t.code,{children:"__init__.py"}),"\u3002\u8FD9\u4E2A ",(0,n.jsx)(t.code,{children:"__init__.py"})," \u91CC\u53EF\u4EE5\u4EC0\u4E48\u90FD\u6CA1\u6709\u3002\u90A3\u8FD9\u4E2A\u6587\u4EF6\u5939\u91CC\u9762\u5176\u4ED6\u7684\u6587\u4EF6\u5C31\u90FD\u662F\u6211\u4EEC\u5199\u7684\u6D4B\u8BD5\u6587\u4EF6\u3002"]}),"\n",(0,n.jsxs)(t.p,{children:["\u6211\u4EEC\u8FD9\u6B21\u7ED9\u5927\u5BB6\u8BB2\u7684\u6D4B\u8BD5\u7684\u6846\u67B6\u5462\uFF0C\u662F ",(0,n.jsx)(t.a,{href:"https://docs.python.org/zh-cn/3/library/unittest.html",children:"unittest"}),"\uFF0C\u662F Python \u81EA\u5E26\u7684\u4E00\u4E2A\u6D4B\u8BD5\u6846\u67B6\u3002\u6211\u672C\u4EBA\u662F\u975E\u5E38\u559C\u6B22\u7528\u6807\u51C6\u5E93\u7684\uFF0C\u6240\u4EE5\u4E00\u76F4\u5728\u7528 unittest\u3002\u5927\u5BB6\u5148\u628A unittest \u5B66\u660E\u767D\u4E86\uFF0C\u4EE5\u540E\u5982\u679C\u4F60\u60F3\u7528\u5176\u4ED6\u7684 framework\uFF0C\u4E5F\u5DEE\u4E0D\u591A\u3002"]}),"\n",(0,n.jsxs)(t.p,{children:["\u5F53\u4F60\u50CF\u6211\u4ECB\u7ECD\u7684\u8FD9\u6837\u628A\u9879\u76EE\u6574\u7406\u597D\u4E4B\u540E\uFF0C\u4F60\u53EA\u9700\u8981\u5728\u6839\u76EE\u5F55\u4E0B\u8FD0\u884C ",(0,n.jsx)(t.code,{children:"python -m unittest"}),"\uFF0CPython \u5C31\u4F1A\u81EA\u52A8\u53BB\u5BFB\u627E\u4F60\u7684\u6D4B\u8BD5\uFF0C\u5E76\u4E14\u8FD0\u884C\u6D4B\u8BD5\u3002\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\uFF0C\u8FD9\u91CC\u5B83\u8FD0\u884C\u4E86\u4E00\u4E2A\u6D4B\u8BD5\uFF0C\u7136\u540E\u6CA1\u6709\u4EFB\u4F55\u6D4B\u8BD5 fail \u4E86\u3002"]}),"\n",(0,n.jsx)(k,{variant:"unittest",step:1}),"\n",(0,n.jsx)(t.h2,{id:"\u6D4B\u8BD5\u662F\u4EC0\u4E48",children:"\u6D4B\u8BD5\u662F\u4EC0\u4E48"}),"\n",(0,n.jsx)(t.p,{children:"\u6211\u4EEC\u63A5\u4E0B\u6765\u5C31\u4ECB\u7ECD\u4E00\u4E0B\u6D4B\u8BD5\u600E\u4E48\u5199\uFF0C\u7ED9\u5927\u5BB6\u4E00\u4E9B\u57FA\u7840\u7684\u77E5\u8BC6\uFF0C\u8BA9\u4F60\u53EF\u4EE5\u7ED9\u81EA\u5DF1\u7684\u9879\u76EE\u5199\u6D4B\u8BD5\u3002"}),"\n",(0,n.jsx)(t.p,{children:"\u9996\u5148\uFF0C\u6D4B\u8BD5\u662F\u4EC0\u4E48\uFF1F\u6D4B\u8BD5\u662F\u68C0\u67E5\u4F60\u7A0B\u5E8F\u7684\u8FD0\u884C\u7ED3\u679C\u662F\u4E0D\u662F\u4F60\u7684\u671F\u5F85\u7ED3\u679C\u3002\u6362\u8A00\u4E4B\uFF0C\u5728\u5199\u6D4B\u8BD5\u7684\u65F6\u5019\uFF0C\u4F60\u5FC5\u987B\u8981\u77E5\u9053\u6B63\u786E\u7B54\u6848\u3002\u5B83\u662F\u4E00\u4E2A\u5224\u5377\u5B50\u7684\u8FC7\u7A0B\uFF0C\u6240\u4EE5\u8BF4\uFF0C\u4F60\u8981\u77E5\u9053\u4F60\u7684\u4EE3\u7801\u5E94\u8BE5\u505A\u4EC0\u4E48\u3002"}),"\n",(0,n.jsx)(t.p,{children:"\u90A3\u6211\u4EEC\u6765\u770B\u4E00\u4E0B\u6211\u4EEC\u7684\u6E90\u4EE3\u7801\u3002\u6211\u4EEC\u5199\u7684\u662F\u4E00\u4E2A\u975E\u5E38\u975E\u5E38\u7B80\u5355\u7684\u4E8C\u7EF4\u5411\u91CF\u7C7B\u3002\u90A3\u5728 initialization \u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u4F20\u4E00\u4E2A x\uFF0C\u4F20\u4E00\u4E2A y\u3002\u7136\u540E\u6211\u4EEC\u505A\u4E86\u5411\u91CF\u7684\u52A0\u6CD5\u3001\u5411\u91CF\u7684\u6570\u4E58\uFF0C\u5411\u91CF\u7684\u70B9\u4E58\uFF0C\u8FD8\u6709\u4E00\u4E2A\u5411\u91CF\u7684\u6A21\u3002\u90A3\u8FD9\u4E9B\u5185\u5BB9\u90FD\u5F88\u7B80\u5355\uFF0C\u6211\u4EEC\u4E0D\u8D58\u8FF0\u554A\u3002\u6211\u4EEC\u8FD9\u7BC7\u6587\u7AE0\u7684\u6838\u5FC3\u662F\u8C08\u6D4B\u8BD5\u3002"}),"\n",(0,n.jsx)(t.h2,{id:"\u6D4B\u8BD5\u6587\u4EF6\u600E\u4E48\u5199",children:"\u6D4B\u8BD5\u6587\u4EF6\u600E\u4E48\u5199"}),"\n",(0,n.jsx)(t.p,{children:"\u597D\uFF0C\u6211\u4EEC\u770B\u56DE\u6211\u4EEC\u7684\u6D4B\u8BD5\u6587\u4EF6\u5939\u3002\u9996\u5148\uFF0C\u6BCF\u4E00\u4E2A\u6D4B\u8BD5\u6587\u4EF6\u5FC5\u987B\u8981\u662F test \u4E0B\u5212\u7EBF\u5F00\u5934\uFF0C\u5C31\u662F\u5B83\u5FC5\u987B\u5F97\u53EB test \u4E0B\u5212\u7EBF\u4EC0\u4E48\u4EC0\u4E48\u4E1C\u897F\u3002\u8FD9\u4E2A\u662F unittest \u672C\u8EAB\u7684\u89C4\u5B9A\u554A\u3002"}),"\n",(0,n.jsx)(t.p,{children:"\u90A3\u5728\u6D4B\u8BD5\u6587\u4EF6\u91CC\u5462\uFF0C\u6211\u4EEC\u8981\u5E72\u8FD9\u4E48\u51E0\u4EF6\u4E8B\u513F\u3002\u9996\u5148\uFF0C\u6211\u4EEC\u8981\u628A\u8FD9\u4E2A unittest \u7ED9 import \u8FDB\u6765\uFF0C\u56E0\u4E3A\u6211\u4EEC\u9700\u8981\u7EE7\u627F\u5B83\u7684 TestCase \u8FD9\u4E2A\u7C7B\u3002\u7B2C\u4E8C\uFF0C\u628A\u6211\u4EEC\u8981\u6D4B\u8BD5\u7684\u5185\u5BB9\u7ED9 import \u8FDB\u6765\u3002\u4E4B\u524D\u4E3A\u4EC0\u4E48\u6211\u5F3A\u8C03\u60F3\u628A\u5B83\u505A\u6210\u4E00\u4E2A package\uFF1F\u56E0\u4E3A\u8FD9\u6837\u7684\u8BDD\uFF0C\u4F60\u5728 import \u7684\u65F6\u5019\u6BD4\u8F83\u65B9\u4FBF\u3002\u4F60\u53EF\u4EE5\u76F4\u63A5\u505A from vector import vector\uFF0C\u6211\u4EEC\u5C31\u628A\u8FD9\u4E2A vector \u7C7B\u7ED9 import \u8FDB\u6765\u4E86\u3002"}),"\n",(0,n.jsx)(t.p,{children:"\u63A5\u4E0B\u6765\u5C31\u662F\u5199 test class\u3002\u8FD9\u4E2A test class \u9996\u5148\u5FC5\u987B\u8981\u7EE7\u627F\u8FD9\u4E2A unittest \u91CC\u9762\u7684 TestCase \u8FD9\u4E2A\u7C7B\u3002\u5176\u6B21\uFF0C\u4E00\u822C\u6765\u8BF4\uFF0C\u8FD9\u4E2A class \u662F test \u5F00\u5934\u6216\u8005 test \u7ED3\u5C3E\u3002\u8FD9\u662F\u4E00\u4E2A\u4E60\u60EF\u95EE\u9898\u3002"}),"\n",(0,n.jsx)(t.p,{children:"\u6BCF\u4E00\u4E2A test class \u91CC\u9762\u53EF\u4EE5\u6709\u82E5\u5E72\u4E2A test method\uFF0C\u800C\u8FD9\u4E9B test method \u5FC5\u987B\u4EE5 test \u4E0B\u5212\u7EBF\u5F00\u5934\uFF0C\u5426\u5219 unittest \u4F1A\u68C0\u6D4B\u4E0D\u5230\u3002"}),"\n",(0,n.jsx)(t.p,{children:"\u90A3\u5728\u6BCF\u4E00\u4E2A test method \u91CC\u9762\uFF0C\u6211\u4EEC\u5C31\u8981\u8FDB\u884C\u6B63\u5F0F\u7684\u6D4B\u8BD5\u4E86\u3002\u6240\u8C13\u6D4B\u8BD5\uFF0C\u5C31\u662F\u6211\u505A\u4E00\u4E2A\u6211\u5DF2\u7ECF\u77E5\u9053\u7ED3\u679C\u7684\u4E8B\u60C5\uFF0C\u7136\u540E\u9A8C\u8BC1\u5F97\u5230\u7684\u7ED3\u679C\u662F\u4E0D\u662F\u6211\u5DF2\u7ECF\u77E5\u9053\u7684\u7ED3\u679C\u3002\u6BD4\u5982\u8BF4\uFF0C\u5F53\u6211\u4EEC\u65B0\u5EFA\u4E86\u4E00\u4E2A vector\uFF0C\u7136\u540E\u628A 1\u30012 \u7ED9\u5F53\u4F5C argument \u4F20\u8FDB\u53BB\u7684\u65F6\u5019\uFF0C\u8FD9\u4E2A vector \u91CC\u9762\u7684 x \u548C y \u8FD9\u4E24\u4E2A attribute \u5E94\u8BE5\u5206\u522B\u88AB\u8D4B\u503C\u6210 1 \u548C 2\u3002"}),"\n",(0,n.jsxs)(t.p,{children:["\u800C\u5728 unittest \u91CC\u9762\uFF0C\u6709\u4E00\u7EC4\u53BB\u68C0\u9A8C\u6211\u4EEC\u5B9E\u9645\u5F97\u5230\u7684\u7ED3\u679C\uFF0C\u662F\u4E0D\u662F\u7406\u8BBA\u7ED3\u679C\u7684\u51FD\u6570\u3002\u5B83\u4EEC\u90FD\u662F self.assert \u5F00\u5934\u7684\u3002\u6BD4\u5982\u5728\u8FD9\u91CC\uFF0C\u6211\u4EEC\u5C31\u7528\u5230\u4E86 self.assertEqual\u3002\u90A3\u5982\u679C\u4F60\u6253\u5F00 ",(0,n.jsx)(t.a,{href:"https://docs.python.org/zh-cn/3/library/unittest.html#assert-methods",children:"Python unittest \u7684\u5B98\u65B9\u6587\u6863"}),"\uFF0C\u4F60\u53EF\u4EE5\u770B\u5230\uFF0C\u8FD9\u91CC\u9762\u6709\u5F88\u591A\u7684 assert \u4EC0\u4E48\u7684\u51FD\u6570\u3002\u5F53\u7136\uFF0C\u8FD9\u4E9B\u53EA\u662F\u76F8\u5BF9\u5E38\u7528\u7684\uFF0C\u8FD8\u6709\u5F88\u591A\u6CA1\u6709\u90A3\u4E48\u5E38\u7528\u7684\uFF0C\u6BD4\u5982\u8BF4\u8FD9\u4E9B\u3002"]}),"\n",(0,n.jsx)(t.p,{children:"\u90A3\u5F53\u4F60\u60F3\u5224\u65AD\u4E00\u4E2A\u7ED3\u679C\u7684\u65F6\u5019\uFF0C\u9996\u5148\u8981\u67E5\u4E00\u4E0B\uFF0Cunittest \u5B98\u65B9\u6709\u6CA1\u6709\u7ED9\u51FA\u8FD9\u79CD\u7ED3\u679C\u7684\u5224\u65AD\u65B9\u5F0F\u3002"}),"\n",(0,n.jsx)(t.h2,{id:"assertequal-\u8FD8\u662F-asserttrue",children:"assertEqual \u8FD8\u662F assertTrue"}),"\n",(0,n.jsx)(t.p,{children:"\u90A3\u4E48\uFF0C\u65E2\u7136\u5B83\u63D0\u4F9B\u4E86 assertTrue \u8FD9\u4E2A\u65B9\u5F0F\uFF0C\u4E3A\u4EC0\u4E48\u6211\u4EEC\u4E0D\u6240\u6709\u7684\u5730\u65B9\u90FD\u7528 assertTrue \u5462\uFF1F\u6BD4\u5982\u8BF4\uFF0C\u8FD9\u91CC\u6211\u4EEC\u7528 assertEqual(v.x, 0) \u548C assertTrue(v.x == 0)\uFF0C\u5B83\u4EEC\u4FE9\u662F\u7B49\u4EF7\u7684\u3002"}),"\n",(0,n.jsx)(t.p,{children:"\u90A3\u8FD9\u91CC\u6211\u4EEC\u4E4B\u6240\u4EE5\u8981\u7528 assertEqual\uFF0C\u662F\u56E0\u4E3A assertEqual \u5728 fail \u7684\u65F6\u5019\u53EF\u4EE5\u7ED9\u51FA\u66F4\u591A\u7684\u4FE1\u606F\u3002\u6211\u4EEC\u770B\uFF0C\u5728\u8FD9\u4E2A\u4F8B\u5B50\u91CC\u9762\uFF0Cv.x \u663E\u7136\u662F 1\uFF0C\u5BF9\u5427\uFF1F\u90A3\u4E48\u8FD9\u4E24\u4E2A\u4E1C\u897F\u90FD\u4F1A fail \u6389\u3002\u5982\u679C\u8FD9\u91CC\u662F assertEqual fail \u6389\uFF0C\u5B83\u4F1A\u544A\u8BC9\u4F60 1 \u4E0D\u7B49\u4E8E 0\uFF0C\u4F60\u5C31\u77E5\u9053 v.x \u662F 1 \u4E86\u3002"}),"\n",(0,n.jsx)(t.p,{children:"\u8FD9\u91CC\u6CE8\u610F\u4E00\u4E0B\uFF0C\u6BCF\u4E2A test method\uFF0C\u5F53\u5B83\u6709\u4E00\u4E2A\u5730\u65B9 fail \u7684\u65F6\u5019\uFF0C\u5B83\u5C31\u4E0D\u4F1A\u7EE7\u7EED\u5F80\u4E0B\u8FD0\u884C\u4E86\u3002"}),"\n",(0,n.jsx)(t.p,{children:"\u90A3\u5047\u8BBE\u6211\u4EEC\u7528 assertTrue \u7684\u8BDD\uFF0C\u5B83\u53EA\u4F1A\u8DDF\u4F60\u8BF4 False is not true\u3002\u6211\u4EEC\u53EA\u77E5\u9053 v.x \u4E0D\u662F 0\uFF0C\u4F46\u6211\u4EEC\u4E0D\u77E5\u9053\u5B83\u662F\u4EC0\u4E48\u3002\u6240\u4EE5\u8BF4\uFF0C\u5F53\u6211\u4EEC\u660E\u786E\u5730\u77E5\u9053\u8981\u5224\u65AD\u4EC0\u4E48\u4E1C\u897F\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u5E94\u8BE5\u5C3D\u91CF\u907F\u514D\u4F7F\u7528 assertTrue \u548C assertFalse\u3002"}),"\n",(0,n.jsx)(k,{variant:"unittest",step:2}),"\n",(0,n.jsx)(k,{variant:"unittest",step:3}),"\n",(0,n.jsx)(t.h2,{id:"assertraises",children:"assertRaises"}),"\n",(0,n.jsxs)(t.p,{children:["\u90A3\u8FD9\u91CC\u6211\u4EEC\u8981\u5355\u72EC\u62FF\u51FA\u6765\u8BF4\u4E00\u4E0B\uFF0C\u662F\u8FD9\u4E2A ",(0,n.jsx)(t.a,{href:"https://docs.python.org/zh-cn/3/library/unittest.html#unittest.TestCase.assertRaises",children:"assertRaises"}),"\u3002\u8FD9\u91CC\u6BD4\u5982\u8BF4\uFF0C\u6211\u4EEC\u628A\u8FD9\u4E2A vector ",(0,n.jsx)(t.code,{children:"__init__"})," \u51FD\u6570\u6539\u4E00\u4E0B\u3002\u6211\u4EEC\u9996\u5148\u8981\u786E\u8BA4\u8FD9\u4E2A x\u3001y\uFF0C\u5FC5\u987B\u8981\u662F\u6570\u624D\u53EF\u4EE5\u3002\u5426\u5219\u7684\u8BDD\uFF0C\u6211\u4EEC raise \u4E00\u4E2A ValueError\u3002"]}),"\n",(0,n.jsxs)(t.p,{children:["\u8FD9\u4E2A\u65F6\u5019\uFF0C\u6211\u4EEC\u60F3\u6D4B\u8BD5\u6211\u4EEC\u8FD9\u4E2A ",(0,n.jsx)(t.code,{children:"__init__"})," \u51FD\u6570\u662F\u4E0D\u662F\u6210\u529F\u5730 raise \u4E86\u8FD9\u4E2A error\u3002\u90A3\u6211\u4EEC\u7684\u5199\u6CD5\u5462\uFF0C\u5C31\u662F with self.assertRaises\uFF0C\u7136\u540E\u628A\u8FD9\u4E2A exception \u653E\u8FDB\u53BB\uFF0C\u5728\u8FD9\u4E2A with \u91CC\u9762\u53BB\u505A raise \u8FD9\u4E2A exception \u7684\u4E8B\u3002\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\u53F3\u8FB9\uFF0C\u6211\u4EEC\u8FD0\u884C\u4E00\u4E0B\u8FD9\u4E2A unittest\uFF0C\u5B83\u5C31 pass \u4E86\uFF0C\u56E0\u4E3A\u6211\u4EEC\u4F20\u8FDB\u53BB\u8FD9\u4E24\u4E2A\u503C\u4E0D\u662F\u6B63\u5E38\u7684 value\u3002\u76F8\u53CD\u7684\uFF0C\u5982\u679C\u6211\u4EEC\u4F20\u8FDB\u53BB\u7684\u503C\u662F\u5408\u6CD5\u503C\u7684\u8BDD\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u6D4B\u8BD5\u5C31\u4F1A fail\u3002\u5B83\u5C31\u4F1A\u5199 ValueError not raised\u3002"]}),"\n",(0,n.jsx)(k,{variant:"unittest",step:4}),"\n",(0,n.jsx)(k,{variant:"unittest",step:5}),"\n",(0,n.jsx)(t.h2,{id:"setup-\u4E0E-teardown",children:"setUp \u4E0E tearDown"}),"\n",(0,n.jsx)(t.p,{children:"\u597D\uFF0C\u90A3\u63A5\u4E0B\u6765\u6211\u4EEC\u6765\u4ECB\u7ECD\u51E0\u4E2A\u975E\u5E38\u5E38\u7528\u7684 unittest \u7684\u4E00\u4E9B feature\u3002\u9996\u5148\uFF0C\u6211\u4EEC\u6709\u53EF\u80FD\u4F1A\u5728\u8FD0\u884C\u6BCF\u4E00\u4E2A test method \u4E4B\u524D\u6216\u8005\u4E4B\u540E\u505A\u4E00\u4E9B\u4E8B\u513F\u3002"}),"\n",(0,n.jsxs)(t.p,{children:["\u6211\u4EEC\u4E3E\u4E2A\u6700\u7B80\u5355\u7684\u4F8B\u5B50\u3002\u5047\u8BBE\u6211\u4EEC\u5728\u8FD0\u884C\u6BCF\u4E00\u4E2A\u6D4B\u8BD5\u4E4B\u524D\u3001\u4E4B\u540E\uFF0C\u90FD\u8981\u6253\u5370\u8FD9\u4E2A\u201C\u6D4B\u8BD5\u5F00\u59CB\u4E86\u201D\uFF0C\u201C\u6D4B\u8BD5\u7ED3\u675F\u4E86\u201D\u3002\u90A3\u6211\u4EEC\u53EF\u4EE5\u5728\u8FD9\u4E2A test class \u4E4B\u5185\uFF0C\u901A\u8FC7\u5B9A\u4E49 ",(0,n.jsx)(t.a,{href:"https://docs.python.org/zh-cn/3/library/unittest.html#unittest.TestCase.setUp",children:"setUp"})," \u51FD\u6570\u548C ",(0,n.jsx)(t.a,{href:"https://docs.python.org/zh-cn/3/library/unittest.html#unittest.TestCase.tearDown",children:"tearDown"})," \u51FD\u6570\u6765\u5B8C\u6210\u3002\u6211\u4EEC\u770B\uFF0C\u5728 setUp \u51FD\u6570\u91CC\u9762\uFF0C\u6211\u4EEC\u6253\u5370\u4E86\u4E00\u4E2A start\uFF0C\u7136\u540E\u5728 tearDown \u51FD\u6570\u91CC\u9762\uFF0C\u6211\u4EEC\u6253\u5370\u4E86\u4E00\u4E2A end\u3002\u4E8E\u662F\u6211\u4EEC\u5728\u8FD0\u884C unittest \u7684\u65F6\u5019\uFF0C\u8F93\u51FA\u91CC\u9762\u5C31\u4F1A\u6709\u4E00\u4E2A start \u8DDF\u4E00\u4E2A end\u3002\u90A3\u5982\u679C\u6211\u4EEC\u53C8\u589E\u52A0\u4E86\u4E00\u4E2A test method\uFF0C\u5C31\u53EF\u4EE5\u770B\u5230 start \u8DDF end \u88AB\u6253\u5370\u4E86\u4E24\u6B21\u3002"]}),"\n",(0,n.jsx)(k,{variant:"unittest",step:6}),"\n",(0,n.jsx)(k,{variant:"unittest",step:7}),"\n",(0,n.jsx)(t.h2,{id:"setupclass-\u4E0E-teardownclass",children:"setUpClass \u4E0E tearDownClass"}),"\n",(0,n.jsxs)(t.p,{children:["\u90A3\u5982\u679C\u6211\u4EEC\u60F3\u6BCF\u4E00\u4E2A test class \u8FD0\u884C\u4E4B\u524D\u548C\u7ED3\u675F\u4E4B\u540E\u505A\u4E00\u4E9B\u4E8B\u513F\u7684\u8BDD\uFF0C\u6211\u4EEC\u7528\u5230\u7684\u51FD\u6570\u5C31\u662F ",(0,n.jsx)(t.a,{href:"https://docs.python.org/zh-cn/3/library/unittest.html#unittest.TestCase.setUpClass",children:"setUpClass"})," \u8DDF ",(0,n.jsx)(t.a,{href:"https://docs.python.org/zh-cn/3/library/unittest.html#unittest.TestCase.tearDownClass",children:"tearDownClass"}),"\u3002\u6CE8\u610F\uFF0C\u8FD9\u4E24\u4E2A\u4E1C\u897F\u5FC5\u987B\u8981\u7528 classmethod \u8FD9\u4E2A\u88C5\u9970\u5668\u88C5\u9970\u4E00\u4E0B\u3002"]}),"\n",(0,n.jsx)(k,{variant:"unittest",step:8}),"\n",(0,n.jsx)(t.h2,{id:"skipif",children:"skipIf"}),"\n",(0,n.jsxs)(t.p,{children:["\u90A3\u8FD8\u6709\u4E00\u4E2A\u5F88\u5E38\u89C1\u7684\u9700\u6C42\uFF0C\u5C31\u662F\u6211\u5E0C\u671B\u6211\u7684\u6D4B\u8BD5\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\u4E0D\u8FD0\u884C\u3002\u8FD9\u65F6\u5019\u6211\u4EEC\u5C31\u8981\u7528\u5230\u4E00\u4E2A decorator\uFF0C\u662F ",(0,n.jsx)(t.a,{href:"https://docs.python.org/zh-cn/3/library/unittest.html#unittest.skipIf",children:"unittest.skipIf"}),"\u3002\u6211\u4EEC\u770B\uFF0C\u8FD9\u91CC\u8FD9\u4E2A decorator take \u4E86\u4E24\u4E2A argument\u3002\u7B2C\u4E00\u4E2A\u662F\u4E00\u4E2A boolean\uFF0C\u5728\u8FD9\u4E2A boolean evaluate \u6210 True \u7684\u65F6\u5019\uFF0C\u8FD9\u4E2A\u6D4B\u8BD5\u5C31\u4E0D\u8FD0\u884C\u3002\u90A3\u7B2C\u4E8C\u4E2A\u5462\uFF0C\u662F\u4E00\u4E2A message\u3002"]}),"\n",(0,n.jsxs)(t.p,{children:["\u5728\u8FD9\u4E2A\u4F8B\u5B50\u91CC\u9762\uFF0C\u6211\u6D4B\u8BD5\u4E86\u4E00\u4E0B\uFF0C\u5982\u679C\u6211 ",(0,n.jsx)(t.a,{href:"https://docs.python.org/zh-cn/3/library/sys.html#sys.platform",children:"sys.platform"})," \u662F win32 \u7684\u8BDD\uFF0C\u5C31\u4E0D\u8FD0\u884C\u8FD9\u4E2A\u6D4B\u8BD5\uFF0C\u4E5F\u5C31\u662F\u8FD9\u4E2A\u6D4B\u8BD5\u4E0D\u5728 Windows \u4E0A\u8FD0\u884C\u3002"]}),"\n",(0,n.jsxs)(t.p,{children:["\u90A3\u8FD8\u6709\u4E00\u4E2A\u6BD4\u8F83\u5E38\u89C1\u7684\u6761\u4EF6\u5462\uFF0C\u5C31\u662F ",(0,n.jsx)(t.a,{href:"https://docs.python.org/zh-cn/3/library/sys.html#sys.version_info",children:"version_info"}),"\uFF0C\u5C31\u662F\u8FD9\u4E2A Python \u7684\u7248\u672C\u3002\u6BD4\u5982\u8FD9\u91CC\u6211\u5199\u7684 sys.version_info \u5C0F\u4E8E 3.7\uFF0C\u5C31\u662F\u8BF4\u5B83\u53EA\u652F\u6301 3.7 \u53CA\u4EE5\u4E0A\u7684\u7248\u672C\u3002"]}),"\n",(0,n.jsx)(k,{variant:"unittest",step:9}),"\n",(0,n.jsx)(t.h2,{id:"\u8FD0\u884C\u6307\u5B9A\u7684\u6D4B\u8BD5",children:"\u8FD0\u884C\u6307\u5B9A\u7684\u6D4B\u8BD5"}),"\n",(0,n.jsx)(t.p,{children:"\u597D\uFF0C\u90A3\u6700\u540E\u5462\uFF0C\u6211\u4EEC\u4ECB\u7ECD\u4E00\u4E0B\u600E\u4E48\u8FD0\u884C\u6307\u5B9A\u7684\u6D4B\u8BD5\u3002\u6211\u4EEC\u73B0\u5728\u6240\u6709\u7684\u6D4B\u8BD5\u88AB\u5206\u6210\u4E86\u4E09\u7EA7\u3002\u7B2C\u4E00\u4E2A\u5462\uFF0C\u662F module level\uFF0C\u4E5F\u5C31\u662F\u67D0\u4E2A\u6587\u4EF6\uFF0C\u6BD4\u5982\u8BF4 test_vector.py\u3002\u5728\u4E00\u4E2A\u6587\u4EF6\u91CC\u9762\uFF0C\u6211\u4EEC\u53EF\u80FD\u6709\u82E5\u5E72\u4E2A test class\uFF0C\u6BD4\u5982\u8BF4\u8FD9\u4E2A test vector class\u3002\u5728\u6BCF\u4E00\u4E2A test class \u91CC\u9762\uFF0C\u6211\u4EEC\u53EF\u80FD\u6709\u82E5\u5E72\u4E2A test method\uFF0C\u6BD4\u5982\u8BF4\u6211\u4EEC\u73B0\u5728\u7684 test_init \u8DDF test_add\u3002"}),"\n",(0,n.jsxs)(t.p,{children:["\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u63A7\u5236 ",(0,n.jsx)(t.a,{href:"https://docs.python.org/zh-cn/3/library/unittest.html#command-line-interface",children:"unittest command line \u7684 argument"}),"\uFF0C\u6765\u544A\u8BC9 unittest \u8FD0\u884C\u54EA\u4E9B test\u3002\u6BD4\u5982\u5728\u8FD9\u91CC\uFF0C\u6211\u4EEC\u8FD0\u884C\u7684\u662F\uFF0Ctests \u8FD9\u4E2A\u6587\u4EF6\u5939\u4E0B\u7684 test_vector \u8FD9\u4E2A module\uFF0C\u91CC\u9762\u7684 test vector \u8FD9\u4E2A class \u91CC\u9762\u7684 test_add \u8FD9\u4E2A method\u3002\u53EF\u4EE5\u770B\u5230\uFF0C\u5B83\u53EA\u8FD0\u884C\u4E86\u4E00\u4E2A test\u3002"]}),"\n",(0,n.jsx)(t.p,{children:"\u90A3\u5982\u679C\u6211\u4EEC\u628A\u6761\u4EF6\u653E\u5BBD\u4E00\u4E9B\uFF0C\u6211\u4EEC\u8FD0\u884C test \u8FD9\u4E2A\u6587\u4EF6\u5939\u91CC\u9762\u7684 test_vector \u8FD9\u4E2A file\uFF0C\u5B83\u5C31\u4F1A\u8FD0\u884C\u4E24\u4E2A test \u4E86\u3002"}),"\n",(0,n.jsx)(k,{variant:"unittest",step:10,nav:!0}),"\n",(0,n.jsx)(t.p,{children:"\u6211\u4EEC\u4ECA\u5929\u8BB2\u7684\u662F unittest \u7684\u4E00\u4E9B\u6700\u6700\u57FA\u7840\u7684\u529F\u80FD\uFF0C\u4F46\u662F\u5C31\u662F\u8FD9\u4E9B\u6700\u57FA\u7840\u7684\u529F\u80FD\uFF0C\u5DF2\u7ECF\u6DB5\u76D6\u4E86\u81F3\u5C11 90% \u5230 95% \u7684\u4F7F\u7528\u60C5\u51B5\u4E86\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u5BF9\u4E8E\u4F60\u81EA\u5DF1\u7684\u9879\u76EE\uFF0C\u8FD9\u4E00\u5957\u6D41\u7A0B\u5DF2\u7ECF\u57FA\u672C\u8DB3\u591F\u7528\u4E86\u3002"}),"\n",(0,n.jsx)(t.p,{children:"\u4F60\u5E94\u8BE5\u53EF\u4EE5\u611F\u53D7\u5230\uFF0C\u7ED9\u81EA\u5DF1\u7684\u9879\u76EE\u5199\u6D4B\u8BD5\uFF0C\u5176\u5B9E\u4E0D\u662F\u4E00\u4E2A\u975E\u5E38\u8D39\u52B2\u7684\u4E8B\u3002\u5B83\u7684 overhead \u8FD8\u662F\u633A\u4F4E\u7684\u3002"}),"\n",(0,n.jsx)(t.p,{children:"\u597D\uFF0C\u90A3\u8FD9\u7BC7\u6587\u7AE0\u5C31\u5230\u8FD9\u91CC\u3002\u5E0C\u671B\u5BF9\u5927\u5BB6\u6709\u6240\u5E2E\u52A9\u3002"})]})}function I(e={}){let{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(S,{...e})}):S(e)}},67810(e,t,s){s.d(t,{A:()=>i});var r=s(83941),n=s(61022);function i(){let{prism:e}=(0,n.p)(),{colorMode:t}=(0,r.G)(),s=e.theme,i=e.darkTheme||s;return"dark"===t?i:s}},51507(e,t,s){s.d(t,{A:()=>n});var r=s(96540);function n(e,t){let s=e.length,[n,i]=(0,r.useState)(0),[l,a]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{if(!t){i(0),a(!1);return}if("u">typeof window&&window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches){a(!0),i(s);return}let e=window.setTimeout(()=>{a(!0),e=window.setInterval(()=>{i(t=>t+1>=s?(window.clearInterval(e),s):t+1)},80)},350);return()=>{window.clearTimeout(e),window.clearInterval(e)}},[t,s]),{shown:n,started:l,done:l&&n>=s}}},28453(e,t,s){s.d(t,{R:()=>l,x:()=>a});var r=s(96540);let n={},i=r.createContext(n);function l(e){let t=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);