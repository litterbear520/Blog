#!/usr/bin/env python3
"""渲染一张配图：python3 -I render.py <slug>/figNN [--debug] [--orig] [--crop x0,y0,x1,y1] [-o 输出.png] [--port 0]
默认输出到 out/<slug>/figNN.png（带 --crop 时是 figNN-crop.png），并打印每个替换项的字迹框和颜色。
Chrome 路径取环境变量 CHROME；本机 CPU 紧张时用 ./rmac 在 Mac 上跑。本地 http 服务默认由系统分一个空闲端口，多个进程同时跑也不会撞端口。"""
import argparse, base64, functools, html, http.server, json, os, re, subprocess, sys, threading

HERE = os.path.dirname(os.path.abspath(__file__))
ap = argparse.ArgumentParser()
ap.add_argument('fig'); ap.add_argument('--debug', action='store_true'); ap.add_argument('--orig', action='store_true')
ap.add_argument('--crop'); ap.add_argument('-o'); ap.add_argument('--port', type=int, default=0)
ap.add_argument('--quiet', action='store_true')
a = ap.parse_args()

out = a.o or os.path.join(HERE, 'out', a.fig + ('-crop' if a.crop else '') + ('-debug' if a.debug else '') + ('-orig' if a.orig else '') + '.png')
# 先删掉上一次的成品：这次渲染失败时不会留下旧图冒充新图
if os.path.exists(out):
    os.remove(out)

class Quiet(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *args): pass

# 端口 0 让系统分一个空闲端口，不会把端口上别的进程当成自己的服务；--port 指定的端口被占用时直接报错
srv = http.server.ThreadingHTTPServer(('127.0.0.1', a.port), functools.partial(Quiet, directory=HERE))
port = srv.server_address[1]
threading.Thread(target=srv.serve_forever, daemon=True).start()
try:
    qs = f'fig={a.fig}' + ('&debug=1' if a.debug else '') + ('&orig=1' if a.orig else '') + (f'&crop={a.crop}' if a.crop else '')
    url = f'http://127.0.0.1:{port}/render.html?{qs}'
    r = subprocess.run([os.environ.get('CHROME', '/opt/google/chrome/chrome'), '--headless=new', '--no-proxy-server', '--disable-gpu', '--no-sandbox',
                        '--disable-dev-shm-usage', '--hide-scrollbars', '--virtual-time-budget=60000', '--dump-dom', url],
                       capture_output=True, text=True, timeout=180)
    dom = r.stdout
finally:
    srv.shutdown()
    srv.server_close()

m = re.search(r'<pre id="rep">(.*?)</pre>', dom, re.S)
o = re.search(r'<pre id="out">data:image/png;base64,(.*?)</pre>', dom, re.S)
repo = html.unescape(m.group(1)) if m else 'NO REPORT'
if not o:
    print('渲染失败:', repo[:2000]); print(r.stderr[-2000:]); sys.exit(1)
os.makedirs(os.path.dirname(os.path.abspath(out)), exist_ok=True)
with open(out, 'wb') as f:
    f.write(base64.b64decode(o.group(1)))
print('写出', os.path.abspath(out))
if not a.quiet:
    for it in json.loads(repo):
        print(json.dumps(it, ensure_ascii=False))
