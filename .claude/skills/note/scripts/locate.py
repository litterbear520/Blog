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
    text = re.sub(r'!\[[^\]]*\]\([^)]*\)|\]\([^)]*\)|^#+ .*$', '', text, flags=re.M)
    return text.replace('`', '')  # 行内代码的反引号不算字，短语里写不写都能找到


def find(text, phrase):
    phrase = phrase.replace('`', '')
    i = text.find(phrase)
    if i < 0:
        sys.exit(f'正文里找不到：{phrase}')
    return i


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument('note')
    ap.add_argument('phrases', nargs='+')
    ap.add_argument('--end', type=float, help='视频总秒数（可选，不给就按语速外推最后一章）')
    ap.add_argument('--at', action='append', default=[], help='锚点，写成 "正文里的短语=秒数"')
    ap.add_argument('--video', help='视频 ID，给了就顺带打印带时间的链接')
    args = ap.parse_args()

    text = body(args.note)
    pts = [(0, 0.0)]
    for a in args.at:
        if '=' not in a:
            sys.exit(f'--at 要写成 "正文里的短语=秒数"：{a}')
        phrase, sec = a.rsplit('=', 1)
        pts.append((find(text, phrase), float(sec)))
    pts.sort()
    if args.end is not None:
        pts.append((len(text), args.end))
    elif pts[-1][1] > 0:
        rate = pts[-1][1] / max(pts[-1][0], 1)  # 每个字多少秒
        pts.append((len(text), pts[-1][1] + rate * (len(text) - pts[-1][0])))
    else:
        sys.exit('至少给一个 --at 锚点或 --end')

    for ph in args.phrases:
        i = find(text, ph)
        t = pts[-1][1]
        for (p0, t0), (p1, t1) in zip(pts, pts[1:]):
            if p0 <= i <= p1:
                t = t0 + (t1 - t0) * (i - p0) / max(p1 - p0, 1)
                break
        link = f'  https://www.youtube.com/watch?v={args.video}&t={max(int(t) - 10, 0)}s' if args.video else ''
        print(f'{ph[:20]:<22} ~{int(t)}s（{int(t) // 60}:{int(t) % 60:02d}）{link}')


if __name__ == '__main__':
    main()
