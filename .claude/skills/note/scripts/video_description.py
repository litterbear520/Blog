"""把 YouTube 视频的简介原样转成笔记开头的 <ReadMore id="简介"> 折叠块，打印到标准输出。

用法：python3 .claude/skills/note/scripts/video_description.py <视频 ID>

用 agent-browser 打开视频页、展开简介，再按页面上 <a> 的真实 href 补全截断的链接
（显示文字相同的截断链接按出现顺序依次对应），视频卡片换成完整标题，章节时间戳链到对应时刻。
"""
import json
import re
import subprocess
import sys
import urllib.request

READ_JS = r"""(() => {
  document.querySelector('#description-inline-expander #expand')?.click();
  const box = document.querySelector('#description-inline-expander');
  const links = [...box.querySelectorAll('a')].map(a => {
    let h = a.href;
    try { const u = new URL(h); if (u.pathname === '/redirect') h = u.searchParams.get('q'); } catch (e) {}
    return [a.innerText.trim(), h];
  });
  const text = (box.querySelector('yt-attributed-string') || box).innerText;
  return JSON.stringify({text, links});
})()"""


def browser(*args):
    return subprocess.run(['agent-browser', *args], capture_output=True, text=True, check=True).stdout


def video_title(vid):
    url = f'https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v={vid}&format=json'
    return json.load(urllib.request.urlopen(url, timeout=20))['title']


def main(vid):
    browser('open', f'https://www.youtube.com/watch?v={vid}')
    browser('wait', '4000')
    browser('eval', READ_JS)  # 第一次点开“展开”
    browser('wait', '1500')
    raw = json.loads(json.loads(browser('eval', READ_JS)))
    browser('close')

    hrefs = {}
    for k, h in raw['links']:
        # 去掉 YouTube 加的 pp 跟踪参数
        hrefs.setdefault(k.replace('\xa0', ' '), []).append(re.sub(r'[&?]pp=[^&]*', '', h))
    used = {}

    def href(k):
        i = used.get(k, 0)
        used[k] = i + 1
        return hrefs[k][min(i, len(hrefs[k]) - 1)]

    lines = []
    for line in raw['text'].replace('\xa0', ' ').splitlines():
        t = line.strip()
        if m := re.fullmatch(r'(\d{1,2}:\d{2})\s+(.*)', t):
            lines.append(f'[{m[1]}]({href(m[1])}) {m[2]}')
        elif t.startswith('•') and t in hrefs:
            v = re.search(r'v=([\w-]+)', href(t))[1]
            lines.append(f'• [{video_title(v)}](https://www.youtube.com/watch?v={v})')
        elif re.match(r'https?://', t):
            u = href(t) if t in hrefs else t
            lines.append(f'[{u}]({u})')
        else:
            t = re.sub(r'(https?://\S+)', lambda mm: f'[{mm[1]}]({mm[1]})', t)
            if re.search(r'[{}<>]', t):
                sys.exit(f'这一行有 MDX 特殊字符，手动转义：{t}')
            lines.append(t)

    # 段内用反斜杠硬换行，原简介里的空行分段
    paras, cur = [], []
    for l in lines + ['']:
        if l:
            cur.append(l)
        elif cur:
            paras.append('\\\n'.join(cur))
            cur = []
    print(f'<ReadMore id="简介" label="简介" title="{video_title(vid)}">\n\n' + '\n\n'.join(paras) + '\n\n</ReadMore>')


if __name__ == '__main__':
    main(sys.argv[1])
