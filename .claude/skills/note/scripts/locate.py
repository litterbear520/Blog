"""估算笔记里的句子出现在视频第几秒，给截帧核对字幕、请用户去听原声用。

用法：python3 locate.py <笔记> [--at "短语=秒"]... [--end <视频总秒数>] [--video <视频 ID>] <要找的短语>...

--at 是锚点：取简介里每个章节时间戳，配上该章节在正文里的头一句。锚点之间按字数线性插值，
有章节锚点时误差一般在 10 秒内（2026-10-21 实测：估 746 秒，实际 752 秒）。
最后一章之后没有锚点：给了 --end 就插值到结尾，没给就按前面各章的平均语速外推。
"""
import argparse
import re
import sys


def body(note):
    text = open(note, encoding='utf-8').read()
    text = text.split('</ReadMore>', 1)[-1]  # 简介块不算正文
    text = re.sub(r'```.*?```', '', text, flags=re.S)
    text = re.sub(r'!\[[^\]]*\]\([^)]*\)|^#+ .*$', '', text, flags=re.M)  # 图片、小标题
    text = re.sub(r'\[([^\]]*)\]\([^)]*\)', r'\1', text)  # 链接只留文字：“打开[搬瓦工官网](…)”按“打开搬瓦工官网”找
    text = re.sub(r'<[^>]+>', '', text)  # <Term …>、<ReadMore> 这类标签
    # 行内代码的反引号和加粗记号不算字，短语里写不写都能找到
    return text.replace('`', '').replace('**', '')


def find(text, phrase):
    """短语在正文里的位置，找不到返回 -1。出现不止一次时取第一处并提醒：疑点多是短词，容易指到别处。"""
    phrase = phrase.replace('`', '').replace('**', '')
    i = text.find(phrase)
    n = text.count(phrase)
    if n > 1:
        print(f'“{phrase}”在正文里出现 {n} 次，取第一处；把短语写长一点能定位得更准', file=sys.stderr)
    return i


def seconds(s):
    """锚点时间：写秒数（434）或 mm:ss / h:mm:ss（7:14），和简介里的时间戳同一种写法也行。"""
    try:
        parts = [float(p) for p in s.strip().split(':')]
    except ValueError:
        sys.exit(f'锚点时间看不懂：{s}（写秒数或 7:14 这样的时间戳）')
    total = 0.0
    for p in parts:
        total = total * 60 + p
    return total


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument('note')
    ap.add_argument('phrases', nargs='+')
    ap.add_argument('--end', type=float, help='视频总秒数（可选，不给就按语速外推最后一章）')
    ap.add_argument('--at', action='append', default=[], help='锚点，写成 "正文里的短语=秒数" 或 "短语=7:14"')
    ap.add_argument('--video', help='视频 ID，给了就顺带打印带时间的链接')
    args = ap.parse_args()

    text = body(args.note)
    pts = [(0, 0.0)]
    for a in args.at:
        if '=' not in a:
            sys.exit(f'--at 要写成 "正文里的短语=秒数"：{a}')
        phrase, sec = a.rsplit('=', 1)
        i = find(text, phrase)
        if i < 0:
            sys.exit(f'锚点在正文里找不到：{phrase}')
        pts.append((i, seconds(sec)))
    pts.sort()
    # 正文越往后，时间应该越晚；对不上多半是锚点短语找错了地方或时间写错了
    for (p0, t0), (p1, t1) in zip(pts, pts[1:]):
        if t1 < t0:
            sys.exit(f'锚点顺序和时间对不上：正文第 {p0} 字在 {t0:g} 秒，后面第 {p1} 字反而在 {t1:g} 秒，检查 --at')
    if args.end is not None:
        pts.append((len(text), args.end))
    elif pts[-1][1] > 0:
        rate = pts[-1][1] / max(pts[-1][0], 1)  # 每个字多少秒
        pts.append((len(text), pts[-1][1] + rate * (len(text) - pts[-1][0])))
    else:
        sys.exit('至少给一个 --at 锚点或 --end')

    missing = []
    for ph in args.phrases:
        i = find(text, ph)
        if i < 0:
            missing.append(ph)
            continue
        t = pts[-1][1]
        for (p0, t0), (p1, t1) in zip(pts, pts[1:]):
            if p0 <= i <= p1:
                t = t0 + (t1 - t0) * (i - p0) / max(p1 - p0, 1)
                break
        link = f'  https://www.youtube.com/watch?v={args.video}&t={max(int(t) - 10, 0)}s' if args.video else ''
        print(f'{ph[:20]:<22} ~{int(t)}s（{int(t) // 60}:{int(t) % 60:02d}）{link}')
    # 找不到的放最后统一报，前面找到的照常输出
    for ph in missing:
        print(f'正文里找不到：{ph}', file=sys.stderr)
    if missing:
        sys.exit(1)


if __name__ == '__main__':
    main()
