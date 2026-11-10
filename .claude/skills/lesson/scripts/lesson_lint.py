#!/usr/bin/env python3
"""课文读感检查：拿 academy.claude.com 课文的篇幅和密度当基线，检查 /lesson 写出的页面。

用法（在仓库根目录）：
    python3 .claude/skills/lesson/scripts/lesson_lint.py <课文.md|mdx> [...]
    python3 .claude/skills/lesson/scripts/lesson_lint.py --stats <课文.mdx> ~/workspace/academy-research/api-tool-schemas.txt [...]
    python3 .claude/skills/lesson/scripts/lesson_lint.py --fix <课文.mdx> [...]   # 把标题下的 <LessonMeta> 写好或更新数字

--stats 不判对错，只把几篇课文的字数、段落、图和密度并排列成表，用来和选好的 Academy 原文对照；
Academy 的抓取稿（*.txt，每行开头是元素类型）会先转成 Markdown 再量。

按页面自动分类：
- 概念课：正文篇幅、导语、段落长度、行内代码和数字密度、表格、提示块、配图数量，
  正文里不该出现的交叉引用和“引证”句式；页面里 <Diagram variant="x" /> 的 SVG 会顺带做文字溢出检查。
- 演练页：页面只有一句话加一个演练组件；<McpWalkthrough variant="x" /> 的数据会用 node 读出来，
  检查步数、每步说明的长度、高亮行数和同样的禁用句式。
- 课程索引页、分组页、概念评估页：跳过。

FAIL 必须改；WARN 是提醒，确认是有意为之可以保留。退出码：有 FAIL 为 1，否则为 0。
阈值来自 Academy 五类课文的实测：MCP 两门课（docs/MCP 中译）、《使用 Claude API 构建》工具与智能体两章、
Claude Code 101 与子代理 / 技能课、AI 能力与局限。正文 500–1600 字（多数 600–1100），段落平均 30–75 字、
最长 124 字，没有一张 Markdown 表格，没有“规则 N”“指南里说过”这类要读者去别处查的引用；
提到下一课、别的课只出现在收尾那一节。这些课文除缺 `<LessonMeta>`（这些课文早于 /lesson）外不出 FAIL
（纯视频文字稿页除外），偏离常态才出 WARN。
"""
import json
import math
import re
import subprocess
import sys
import xml.etree.ElementTree as ET
from pathlib import Path

ROOT = Path.cwd()
CJK = re.compile(r'[一-鿿]')

# 要读者跳出这一页去查的引用：Academy 全站都没有，哪里都不写。
LOOKUP = re.compile(r'规则 ?\d|第[一二三四五六七八九]条规则|商务指南|指南(?:里|中)(?:说|写|提到)|Stage [A-Z]|路线到|本专题|这个专题')
# 指向别的课：Academy 只在收尾一节（回顾 / 接下来 / 想深入了解）点一次，导语里至多半句承接。
POINTER = re.compile(r'下一课|上一课|下一节|上一节|后面几课|前面几课|后面的课|下一篇|上一篇|《[^》]+》')
# 讲“它怎么工作”，不讲“我从哪里看出来的”：核对代码是写之前的事，不写进正文。
EVIDENCE = re.compile(
    r'代码注释|注释(?:说|写|里)|文档字符串|docstring|测试(?:里|中)|断言了|参考实现'
    r'|源码(?:里|中)|在代码里可以看到|代码里写着')
OBJECTIVES = re.compile(r'读完这一[节课篇]|您将能够|这一[节课]我们|本课将|本节将')
TEMPLATE = re.compile(r'显著的权衡|不过，有一个好处')
FIGURE = re.compile(r'<(?:Diagram|MessageFlow|AgentLoopViz)\b|!\[')
# 打断大段文字的东西：图、交互组件、代码块
BREAK = re.compile(r'<(?:Diagram|MessageFlow|AgentLoopViz|QuickCheck|ReadMore)\b|!\[|^```', re.M)
WALKTHROUGH = re.compile(r'<(McpWalkthrough|CodeWalkthrough)\b[^>]*variant="(\w+)"')

results = []  # (level, file, message)

# 标题下的课序和时长：<LessonMeta lesson={N} minutes={M} />，数字由这里算，课文照抄
META = re.compile(r'<LessonMeta\s+lesson=\{(\d+)\}\s+minutes=\{(\d+)\}\s*/>')


def lesson_number(path):
    # 第几课：同一目录里带两位编号的课文和演练页按文件名排序，从 1 数起
    # 文件名不带两位编号时返回 None，由调用方报 FAIL
    names = sorted(p.name for p in Path(path).parent.iterdir() if re.match(r'\d\d-.+\.mdx?$', p.name))
    name = Path(path).name
    return names.index(name) + 1 if name in names else None


def opens_with_options(raw):
    # 第一个二级标题那一节用“两个选项”对照图开头（variant 名以 Option1 结尾）
    sections = re.split(r'^## ', strip_page(raw), flags=re.M)
    return len(sections) > 1 and bool(re.search(r'<Diagram\s+variant="\w+Option1"', sections[1]))


def previous_lesson(path):
    names = sorted(p.name for p in Path(path).parent.iterdir()
                   if re.match(r'\d\d-.+\.mdx?$', p.name) and not p.name.endswith('-walkthrough.mdx'))
    name = Path(path).name
    if name not in names:
        return None
    i = names.index(name)
    return Path(path).parent / names[i - 1] if i > 0 else None


def concept_minutes(raw):
    # 大约几分钟：每分钟读 300 字，一张图或一道快速检查各加半分钟，至少 2 分钟
    body = strip_page(raw)
    total = cjk_len(re.sub(r'<[^>]+>', '', body))
    figures = len(FIGURE.findall(body))
    interactive = len(re.findall(r'<QuickCheck\b', body))
    return max(2, math.ceil(total / 300 + 0.5 * figures + 0.5 * interactive))


def walkthrough_minutes(steps):
    # 演练每步一分半，至少 5 分钟
    return max(5, math.ceil(len(steps) * 1.5))


def check_meta(path, raw, minutes):
    # minutes 为 None（算不出时长，比如 CodeWalkthrough 演练页）时只查课序、有没有、在不在 H1 下一行
    where = str(path)
    number = lesson_number(path)
    if number is None:
        report('FAIL', where, '文件名要以两位编号开头（01-xxx.mdx）')
    expect = f'<LessonMeta lesson={{{number or "N"}}} minutes={{{"M" if minutes is None else minutes}}} />'
    body = strip_page(raw)
    after_h1 = re.search(r'^# .+\n+(.*)$', body, flags=re.M)
    m = META.search(raw)
    if not m:
        report('FAIL', where, f'标题下缺课序和时长：H1 下一行写 {expect}')
    elif number is not None and int(m.group(1)) != number:
        report('FAIL', where, f'课序对不上：改成 {expect}')
    elif minutes is not None and int(m.group(2)) != minutes:
        report('FAIL', where, f'时长和篇幅对不上：改成 {expect}')
    elif not after_h1 or not META.match(after_h1.group(1)):
        report('FAIL', where, f'{expect} 要紧跟在 H1 下一行')


def report(level, where, message):
    results.append((level, where, message))


def cjk_len(text):
    return len(CJK.findall(text))


def strip_page(raw):
    text = re.sub(r'^---\n.*?\n---\n', '', raw, flags=re.S)
    text = re.sub(r'^import .*$', '', text, flags=re.M)
    text = re.sub(r'^(`{3,}).*?^\1\s*$', '', text, flags=re.S | re.M)
    return text


def untag(text):
    # 段落里的 <Term tip="…">词</Term> 只留词：提示文字不算正文
    return re.sub(r'<[^>]+>', '', text)


def blocks(text):
    return [b.strip() for b in re.split(r'\n\s*\n', text) if b.strip()]


# 块级组件：这些标签开头（含闭合标签）的块不是正文段落；<Term>、<strong> 这类行内标签开头的段落照常算
BLOCK_COMPONENT = re.compile(
    r'^</?(?:Diagram|MessageFlow|AgentLoopViz|QuickCheck|ReadMore|LessonMeta|McpWalkthrough|CodeWalkthrough'
    r'|CardGrid|Card|CourseHero|McpQuiz|DocCardList|VideoFigure)\b')


def is_prose(block):
    return not (re.match(r'^(#|\||:::|!\[|(\d+\.|[-*]) )', block) or BLOCK_COMPONENT.match(block))


# ── 概念课 ──────────────────────────────────────────────────────────────────

def lint_lesson(path, raw):
    body = strip_page(raw)
    where = str(path)
    # 数数字时去掉行内代码、列表序号、图片和组件标签，只数正文里的数字
    no_code = re.sub(r'`[^`\n]+`|!\[[^\]]*\]\([^)]*\)|<[^>]+>|^\s*\d+\.\s', '', body, flags=re.M)
    total = cjk_len(re.sub(r'<[^>]+>', '', body))
    h2 = re.findall(r'^## .+$', body, flags=re.M)

    if total > 1700:
        report('FAIL', where, f'正文 {total} 字，超过 1700（Academy 最长的课约 1600 字）：一课只讲一个概念，细节挪进演练或删掉')
    elif total > 1100 or total < 450:
        report('WARN', where, f'正文 {total} 字，Academy 多数课在 600–1100 字')
    if not 3 <= len(h2) <= 9:
        report('WARN', where, f'{len(h2)} 个二级标题，Academy 多在 3–9 个')

    intro_part = re.split(r'^## ', body, maxsplit=1, flags=re.M)[0]
    intro = [untag(b) for b in blocks(intro_part) if is_prose(b)]
    intro_len = cjk_len(' '.join(intro))
    if len(intro) > 3 or intro_len > 230:
        report('FAIL', where, f'导语 {len(intro)} 段 {intro_len} 字：H1 下一段话、两三句，直接进第一个二级标题')
    elif len(intro) > 2 or intro_len > 120:
        report('WARN', where, f'导语 {len(intro)} 段 {intro_len} 字，Academy 的导语多是一段，至多三个短段')

    paras = [untag(b) for b in blocks(body) if is_prose(b)]
    for p in paras:
        for m in OBJECTIVES.finditer(p):
            report('FAIL', where, f'本课目标写进了正文段落：“{m.group(0)}”。要写就照 Academy 做成开头的“学完后，您将能够”清单卡')
    lengths = [cjk_len(p) for p in paras]
    for p, n in zip(paras, lengths):
        if n > 130:
            report('FAIL', where, f'段落 {n} 字（Academy 原文最长 124）：一段只讲一个意思 →「{p[:24]}…」')
        elif n > 110:
            report('WARN', where, f'段落 {n} 字，偏长 →「{p[:24]}…」')
    if lengths and sum(lengths) / len(lengths) > 70:
        report('WARN', where, f'段落平均 {sum(lengths) / len(lengths):.0f} 字，Academy 多在 30–75')

    per_k = lambda n: n * 1000 / max(total, 1)
    code = len(re.findall(r'`[^`\n]+`', body))
    numbers = len(re.findall(r'(?<![A-Za-z0-9_.-])\d+(?:\.\d+)?', no_code))
    if per_k(code) > 12:
        report('FAIL', where, f'行内代码每千字 {per_k(code):.1f} 个（基线中位数约 4）：正文讲道理，代码名留给演练')
    elif per_k(code) > 8:
        report('WARN', where, f'行内代码每千字 {per_k(code):.1f} 个，偏密')
    if per_k(numbers) > 15:
        report('FAIL', where, f'数字每千字 {per_k(numbers):.1f} 个（基线中位数 0）：只留本身就是重点的数字')
    elif per_k(numbers) > 8:
        report('WARN', where, f'数字每千字 {per_k(numbers):.1f} 个，偏密')

    if re.search(r'^\|\s*-{3,}', body, flags=re.M):
        report('FAIL', where, '课文里有表格（Academy 课文一张都没有）：改成“**标签：** 一句解释”的列表、成对小节，或画成图')
    admonitions = len(re.findall(r'^:::(note|info|tip|important|warning|danger)', body, flags=re.M))
    if admonitions > 2:
        report('WARN', where, f'{admonitions} 个提示块，Academy 一课至多一两个（小提示、关键要点）')
    if WALKTHROUGH.search(raw):
        report('FAIL', where, '概念课里嵌了演练：演练单独一页，排在概念课后面')

    for m in LOOKUP.finditer(body):
        report('FAIL', where, f'要读者去别处查的引用：“{m.group(0)}”，直接把要用的那句话说出来')
    sections = re.split(r'^## ', body, flags=re.M)
    closing = sections[-1] if len(sections) > 1 else ''
    middle = '## '.join(sections[1:-1]) if len(sections) > 2 else ''
    in_middle = [m.group(0) for m in POINTER.finditer(middle)]
    if len(in_middle) >= 2:
        report('FAIL', where, f'正文中段提到别的课 {len(in_middle)} 次（{"、".join(in_middle)}）：Academy 只在收尾一节点一次下一课，导语里至多半句承接')
    elif in_middle:
        report('WARN', where, f'正文中段提到了别的课：“{in_middle[0]}”，确认读者不回去翻也能懂')
    pointers = len(POINTER.findall(intro_part)) + len(POINTER.findall(closing))
    if pointers > 2:
        report('WARN', where, f'导语和收尾一共提到别的课 {pointers} 次，Academy 通常只有一处')
    for m in EVIDENCE.finditer(body):
        report('FAIL', where, f'引证口吻：“{m.group(0)}”，直接讲它怎么工作')
    for m in TEMPLATE.finditer(body):
        report('WARN', where, f'套用句式“{m.group(0)}”：只有真有这样一组得失时才用，否则用平常话说')

    figures = len(FIGURE.findall(body))
    interactive = len(re.findall(r'<QuickCheck\b', body))
    if figures + interactive == 0 and total > 400:
        report('WARN', where, '没有图也没有交互：Academy 课文每课 1–4 张图，或一个让读者动手的组件')
    longest = max((cjk_len(re.sub(r'<[^>]+>', '', run)) for run in BREAK.split(body)), default=0)
    if longest > 700:
        report('WARN', where, f'连续 {longest} 字没有图、代码或交互：讲问题和机制时，每一两段配一张图')

    prev = previous_lesson(path)
    if prev and opens_with_options(raw) and opens_with_options(prev.read_text()):
        report('WARN', where, f'和上一课 {prev.name} 一样用“两个选项”开头：相邻两课换一种讲法，见讲法目录')

    check_meta(path, raw, concept_minutes(raw))

    for variant in re.findall(r'<Diagram\s+variant="(\w+)"', raw):
        lint_svg(variant)


# ── 结构图 / 场景图：文字有没有超出它所在的框 ─────────────────────────────

SIZE = {'t-name': 16, 't-band': 14, 't-msg': 14}
MONO = {'t-mono', 't-mono-strong', 't-panel', 't-code'}
SERIF = {'t-name'}
# 拉丁字符的估宽（em）：在 Chrome 里按图里的实际字号实测站点字体的逐字符宽度，向上取到 0.05em 分档，宁可略宽
# （取 0.1em 分档时 16px 的长英文串会多估 10% 以上，贴边的框会误报）。
# t-name 是 Source Serif 4 600 / 16px，其余是 Inter 400–600 / 12–14px（取各字重里最宽的）；两者都带光学尺寸轴，
# 小字号下字形比大字号宽，要按实际字号量。等宽字按 0.6em，中文按 1em，表外的符号（× → … 等）按 1em。
LATIN_EM = {
    'serif': {
        0.25: " '",
        0.3: ',./[\\]',
        0.35: '!()-:;fijl{|}',
        0.4: 'IJ`t',
        0.45: '"?',
        0.5: '*rsz',
        0.55: '#$+0123456789<=>S^_aceg~',
        0.6: 'FLZkoqvxy',
        0.65: 'BCEPTbdhnpu',
        0.7: 'RVXY',
        0.75: '&ADGKNOQU',
        0.8: 'H',
        0.85: 'w',
        0.9: '@',
        0.95: '%Mm',
        1.05: 'W',
    },
    'sans': {
        0.3: ' Iijl',
        0.35: "!',.:;\\ft",
        0.4: '()/[]`|',
        0.45: '1r',
        0.5: '-^_{}',
        0.55: '"*?s',
        0.6: '7FJLacekvxyz',
        0.65: '#235689EPbdghnopqu',
        0.7: '$&+04<=>BRSTZ~',
        0.75: 'ACDGHKUVXY',
        0.8: 'NOQ',
        0.85: 'w',
        0.95: 'Mm',
        1.0: '@',
        1.05: '%W',
    },
}
LATIN = {font: {ch: em for em, chars in table.items() for ch in chars} for font, table in LATIN_EM.items()}


def text_width(text, size, font):
    width = 0.0
    for ch in text:
        if CJK.match(ch) or ord(ch) > 0x2E80:
            width += 1.0
        elif font == 'mono':
            width += 0.6
        else:
            width += LATIN[font].get(ch, 1.0)
    # 再放宽 2%：13 张图 224 段文字里，实测最多比查表结果宽 1.1%（字距微调），放宽到 3% 起贴边的框开始误报
    return width * size * 1.02


def text_runs(el, size, font):
    """把 <text> 拆成 (文字, 字号, 字体) 几段：<tspan class="t-mono"> 这类换字体的片段按它自己的类估宽。"""
    if el.text:
        yield el.text, size, font
    for child in el:
        classes = set(child.get('class', '').split())
        csize, cfont = size, font
        if classes & MONO:
            cfont, csize = 'mono', 12
        elif classes & SERIF:
            cfont = 'serif'
        if classes & SIZE.keys():
            csize = max(SIZE[c] for c in classes & SIZE.keys())
        yield from text_runs(child, csize, cfont)
        if child.tail:
            yield child.tail, size, font


def lint_svg(variant):
    path = ROOT / 'src/data/diagrams' / f'{variant}.js'
    where = str(path.relative_to(ROOT))
    if not path.exists():
        report('FAIL', where, '找不到这张图的数据文件')
        return
    source = path.read_text()
    svg = source[source.index('`') + 1:source.rindex('`')]
    try:
        root = ET.fromstring(svg)
    except ET.ParseError as error:
        report('FAIL', where, f'SVG 解析失败：{error}')
        return
    ns = '{http://www.w3.org/2000/svg}'
    _, _, vw, vh = (float(v) for v in (root.get('viewBox') or '0 0 768 0').split())
    if vh < 360:
        report('WARN', where, f'画布 {vw:.0f}×{vh:.0f} 偏扁：课文配图用 768×432（16:9）或 768×480（8:5），留白要够')
    rects = []
    for r in root.iter(f'{ns}rect'):
        x, y, w, h = (float(r.get(k, 0)) for k in ('x', 'y', 'width', 'height'))
        rects.append((x, y, w, h, r.get('class', '')))
    for t in root.iter(f'{ns}text'):
        content = ''.join(t.itertext()).strip()
        if not content:
            continue
        classes = set(t.get('class', '').split())
        size = max([SIZE.get(c, 12) for c in classes] or [12])
        font = 'mono' if classes & MONO else 'serif' if classes & SERIF else 'sans'
        runs = list(text_runs(t, size, font))
        runs[0] = (runs[0][0].lstrip(), *runs[0][1:])
        runs[-1] = (runs[-1][0].rstrip(), *runs[-1][1:])
        width = sum(text_width(*run) for run in runs)
        x, y = float(t.get('x', 0)), float(t.get('y', 0))
        anchor = t.get('text-anchor', 'start')
        left = x - width / 2 if anchor == 'middle' else x - width if anchor == 'end' else x
        right, top, bottom = left + width, y - 0.8 * size, y + 0.2 * size
        cy = y - 0.3 * size
        inside = [r for r in rects if r[0] <= x <= r[0] + r[2] and r[1] <= cy <= r[1] + r[3]]
        if inside:
            bx, by, bw, bh, cls = min(inside, key=lambda r: r[2] * r[3])
            pad = 0 if 'mask' in cls else 4
            if left < bx + pad - 1 or right > bx + bw - pad + 1 or top < by - 1 or bottom > by + bh + 1:
                report('FAIL', where, f'“{content}”约 {width:.0f}px 宽，超出它所在的框（x {bx:.0f}–{bx + bw:.0f}）')
        elif left < 8 or right > vw - 8 or top < 0 or bottom > vh:
            report('FAIL', where, f'“{content}”超出画布')


# ── 演练页 ──────────────────────────────────────────────────────────────────

def load_steps(component, variant):
    if component != 'McpWalkthrough':
        return None
    registry = (ROOT / 'src/data/mcpWalkthroughs/index.js').read_text()
    m = re.search(rf"^import {variant} from '([^']+)';", registry, flags=re.M)
    if not m:
        report('FAIL', 'src/data/mcpWalkthroughs/index.js', f'演练 {variant} 没有登记')
        return None
    target = (ROOT / 'src/data/mcpWalkthroughs' / m.group(1)).resolve()
    if target.suffix != '.js':
        target = target.with_suffix('.js')
    script = (f"const m = await import({json.dumps(str(target))});"
              "console.log(JSON.stringify(m.default.steps));")
    out = subprocess.run(['node', '--no-warnings', '--input-type=module', '-e', script],
                         capture_output=True, text=True, cwd=ROOT)
    if out.returncode:
        report('FAIL', str(target.relative_to(ROOT)), f'node 读不出演练数据：{out.stderr.strip()[:200]}')
        return None
    return target, json.loads(out.stdout)


def lint_walkthrough_page(path, raw, found):
    where = str(path)
    if len(found) != 1:
        report('FAIL', where, f'演练页里有 {len(found)} 个演练组件，应当正好一个')
    body = strip_page(raw)
    prose = [b for b in blocks(body) if is_prose(b)]
    n = cjk_len(' '.join(prose))
    if n > 120 or len(prose) > 1:
        report('FAIL', where, f'演练页正文 {len(prose)} 段 {n} 字：只写一句“对照……逐步查看……”，操作方法引导卡会讲')
    if re.search(r'^## ', body, flags=re.M):
        report('FAIL', where, '演练页不分小节')
    meta_checked = False
    if any(component == 'CodeWalkthrough' for component, _ in found):
        report('WARN', where, 'CodeWalkthrough 演练页的步骤和 LessonMeta 没有自动检查，手动核对')
    for component, variant in found:
        if component == 'CodeWalkthrough':
            continue
        loaded = load_steps(component, variant)
        if not loaded:
            continue
        target, steps = loaded
        data = str(target.relative_to(ROOT))
        if not meta_checked:
            check_meta(path, raw, walkthrough_minutes(steps))
            meta_checked = True
        if not 3 <= len(steps) <= 9:
            report('WARN', data, f'{len(steps)} 步，基线 6–7 步')
        for i, step in enumerate(steps, 1):
            texts = []
            for part in step.get('body', []):
                texts += part.get('items', []) if part.get('type') == 'list' else [part.get('text', '')]
            joined = ' '.join(texts)
            length = cjk_len(joined)
            label = f'第 {i} 步「{step.get("title", "")}」'
            if length > 160:
                report('FAIL', data, f'{label}说明 {length} 字：每步一两句，只说这几行在做什么、为什么')
            elif length > 120:
                report('WARN', data, f'{label}说明 {length} 字，偏长')
            for t in texts:
                if cjk_len(t) > 90:
                    report('FAIL', data, f'{label}有一段 {cjk_len(t)} 字，拆短')
            if len(re.findall(r'`[^`]+`', joined)) > 3:
                report('WARN', data, f'{label}提到 {len(re.findall(r"`[^`]+`", joined))} 个代码名，挑最要紧的一两个')
            lines = step.get('endLine', step.get('line', 0)) - step.get('line', 0) + 1
            if lines > 40:
                report('FAIL', data, f'{label}高亮 {lines} 行：只框住这一步讲的那几行')
            elif lines > 20:
                report('WARN', data, f'{label}高亮 {lines} 行，偏多')
            if cjk_len(step.get('title', '')) > 10:
                report('WARN', data, f'{label}标题偏长，照“启动采样”“采样回调”写成短语')
            for pattern, what in ((LOOKUP, '要读者去别处查的引用'), (POINTER, '提到了别的课'), (EVIDENCE, '引证口吻')):
                for m in pattern.finditer(joined):
                    report('FAIL', data, f'{label}{what}：“{m.group(0)}”')
    if not meta_checked:
        # 读不出步骤时算不出时长，和步数无关的几项照常查
        check_meta(path, raw, None)


# ── --stats：并排对照 ─────────────────────────────────────────────────────

def academy_txt_to_md(text):
    # 抓取稿里正文段落和列表项带 leading-relaxed 类；图、视频记成一张图，代码块记成一个空代码块
    out = []
    seen = set()
    for line in text.splitlines():
        if line.startswith('== ') and out and 'INVENTORY' not in line:
            break
        if re.match(r'^(IMG|IFRAME)', line):
            # “IMG y=…”是抓取稿末尾的版面清单，同一张图又记了一遍；同一张图（src 相同）只记一次
            if re.match(r'^(IMG|IFRAME) y=', line):
                continue
            src = re.search(r'\bsrc=(\S+)', line)
            if src:
                if src.group(1) in seen:
                    continue
                seen.add(src.group(1))
            out.append('![](x.png)\n')
            continue
        if line.startswith('PRE'):
            out.append('```text\ncode\n```\n')
            continue
        m = re.match(r'^(P|LI|H1|H2|H3) (\S*) :: (.*)$', line)
        if not m or not m.group(3).strip():
            continue
        tag, cls, content = m.groups()
        if tag in ('P', 'LI') and 'leading-relaxed' not in cls:
            continue
        prefix = {'H1': '# ', 'H2': '## ', 'H3': '### ', 'LI': '- '}.get(tag, '')
        out.append(prefix + content.strip() + ('' if tag == 'LI' else '\n'))
    return re.sub(r'(\n- [^\n]*)\n\n(?=- )', r'\1\n', '\n'.join(out))


def measure(raw):
    body = strip_page(raw)
    total = cjk_len(re.sub(r'<[^>]+>', '', body))
    paras = [cjk_len(untag(b)) for b in blocks(body) if is_prose(b)]
    no_code = re.sub(r'`[^`\n]+`|!\[[^\]]*\]\([^)]*\)|<[^>]+>|^\s*\d+\.\s', '', body, flags=re.M)
    per_k = lambda n: round(n * 1000 / max(total, 1), 1)
    return {
        '字数': total,
        'H2': len(re.findall(r'^## ', body, flags=re.M)),
        '段落': len(paras),
        '段均': round(sum(paras) / len(paras)) if paras else 0,
        '最长段': max(paras, default=0),
        '图': len(FIGURE.findall(body)),
        '交互': len(re.findall(r'<(?:QuickCheck|ReadMore)\b', body)),
        '代码/千字': per_k(len(re.findall(r'`[^`\n]+`', body))),
        '数字/千字': per_k(len(re.findall(r'(?<![A-Za-z0-9_.-])\d+(?:\.\d+)?', no_code))),
    }


def stats(paths):
    rows = []
    for name in paths:
        raw = Path(name).expanduser().read_text()
        m = measure(academy_txt_to_md(raw) if name.endswith('.txt') else raw)
        if name.endswith('.txt'):
            if m['字数'] == 0:
                print(f'{name} 不是可解析的抓取稿，跳过')
                continue
            m['代码/千字'] = '-'  # 抓取稿不保留行内代码
        rows.append((Path(name).name, m))
    if not rows:
        return 0
    cols = list(rows[0][1])
    width = max([len(n) for n, _ in rows] + [4])
    print('文件'.ljust(width), *[c.rjust(8) for c in cols])
    for n, m in rows:
        print(n.ljust(width), *[str(m[c]).rjust(8) for c in cols])
    return 0


def fix_meta(path):
    raw = path.read_text()
    if re.search(r'<DocCardList|<McpQuiz', raw):
        return
    found = WALKTHROUGH.findall(raw)
    if found and cjk_len(re.sub(r'<[^>]+>', '', strip_page(raw))) < 200:
        if found[0][0] == 'CodeWalkthrough':
            report('WARN', str(path), 'CodeWalkthrough 演练页的步骤和 LessonMeta 没有自动检查，手动核对')
            return
        loaded = load_steps(*found[0])
        if not loaded:
            return
        minutes = walkthrough_minutes(loaded[1])
    else:
        minutes = concept_minutes(raw)
    number = lesson_number(path)
    if number is None:
        report('FAIL', str(path), '文件名要以两位编号开头（01-xxx.mdx）')
        return
    tag = f'<LessonMeta lesson={{{number}}} minutes={{{minutes}}} />'
    # 已有的标签不管在哪，连同紧随的空行先删掉，再统一插到 H1 下一行
    stripped = re.sub(r'^[ \t]*<LessonMeta\b[^>]*/>[ \t]*(?:\n|\Z)(?:[ \t]*\n)?', '', raw, count=1, flags=re.M)
    new, n = re.subn(r'^(# .+\n)', lambda m: m.group(1) + '\n' + tag + '\n', stripped, count=1, flags=re.M)
    if not n:
        report('FAIL', str(path), '找不到 H1，没法写课序和时长')
        return
    if new != raw:
        path.write_text(new)
    print(f'{path}  {tag}')


def main(paths):
    if not paths:
        print(__doc__)
        return 2
    if paths[0] == '--stats':
        return stats(paths[1:])
    if paths[0] == '--fix':
        for name in paths[1:]:
            fix_meta(Path(name))
        for level, where, message in results:
            print(f'{level}  {where}  {message}')
        return 1 if results else 0
    for name in paths:
        path = Path(name)
        raw = path.read_text()
        found = WALKTHROUGH.findall(raw)
        if re.search(r'<DocCardList|<McpQuiz', raw):
            print(f'跳过 {path}（索引页或评估页）')
            continue
        prose = cjk_len(re.sub(r'<[^>]+>', '', strip_page(raw)))
        if found and prose < 200:
            lint_walkthrough_page(path, raw, found)
        else:
            lint_lesson(path, raw)
    for level, where, message in results:
        print(f'{level}  {where}  {message}')
    fails = sum(1 for level, _, _ in results if level == 'FAIL')
    warns = len(results) - fails
    print(f'\n{fails} 个 FAIL，{warns} 个 WARN')
    return 1 if fails else 0


if __name__ == '__main__':
    sys.exit(main(sys.argv[1:]))
