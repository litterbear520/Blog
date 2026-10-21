"""按文档顺序打印 Notion 公开页里的文字和代码块：notion_code.py <页面链接或 ID>

视频简介里的“搭建节点代码”“测试脚本”多是 Notion 公开页。用浏览器打开会撞上 Cloudflare 人机验证，
这里改走 Notion 自己的 loadPageChunk 接口，直接拿到代码块原文，照抄进笔记的代码块（shell 命令标 bash）。
"""
import json
import re
import sys
import urllib.request

API = 'https://www.notion.so/api/v3/loadPageChunk'


def page_id(arg):
    # ID 是链接最后一段末尾的 32 位十六进制；前面的标题片段（如 Code-）里也可能有 a–f，
    # 所以先去掉 ?pvs=74 这类参数，再取最后 32 位
    seg = arg.split('?')[0].split('#')[0].rstrip('/').rsplit('/', 1)[-1]
    h = re.sub(r'[^0-9a-f]', '', seg.lower())[-32:]
    if len(h) != 32:
        sys.exit(f'认不出页面 ID：{arg}')
    return f'{h[:8]}-{h[8:12]}-{h[12:16]}-{h[16:20]}-{h[20:]}'


def load(pid, max_chunks=20):
    """一次最多拿 200 个块；返回的 cursor.stack 不空说明还有，接着按 chunkNumber 往下取。"""
    blocks, cursor = {}, {'stack': []}
    for chunk in range(max_chunks):
        body = json.dumps({'pageId': pid, 'limit': 200, 'cursor': cursor,
                           'chunkNumber': chunk, 'verticalColumns': False}).encode()
        req = urllib.request.Request(API, body, {'content-type': 'application/json'})
        data = json.load(urllib.request.urlopen(req, timeout=30))
        # 新版接口把块包了两层 value
        blocks.update({k: v['value'].get('value', v['value'])
                       for k, v in data['recordMap'].get('block', {}).items() if 'value' in v})
        cursor = data.get('cursor') or {}
        if not cursor.get('stack'):
            return blocks
    print(f'页面超过 {max_chunks} 块 × 200，后面的内容没取', file=sys.stderr)
    return blocks


def text(block):
    return ''.join(seg[0] for seg in block.get('properties', {}).get('title', []))


def walk(blocks, bid, depth=0):
    b = blocks.get(bid)
    if not b:
        return
    if depth:
        t = text(b)
        if b.get('type') == 'code':
            # 作者常把 shell 命令标成 powershell，语言交给写笔记的人按内容标
            print(f'```\n{t}\n```')
        elif t:
            print(t)
    for child in b.get('content', []):
        walk(blocks, child, depth + 1)


if __name__ == '__main__':
    if len(sys.argv) != 2:
        sys.exit(__doc__)
    pid = page_id(sys.argv[1])
    walk(load(pid), pid)
