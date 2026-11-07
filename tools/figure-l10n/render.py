#!/usr/bin/env python3
"""渲染一张配图：python3 -I render.py <slug>/figNN [--debug] [--orig] [--crop x0,y0,x1,y1] [-o 输出.png] [--port 8765]
默认输出到 out/<slug>/figNN.png（带 --crop 时是 figNN-crop.png），并打印每个替换项的字迹框和颜色。
Chrome 路径取环境变量 CHROME；本机 CPU 紧张时用 ./rmac 在 Mac 上跑。多个进程同时跑时各自用不同 --port。"""
import argparse, base64, html, json, os, re, socket, subprocess, sys, time

HERE = os.path.dirname(os.path.abspath(__file__))
ap = argparse.ArgumentParser()
ap.add_argument('fig'); ap.add_argument('--debug', action='store_true'); ap.add_argument('--orig', action='store_true')
ap.add_argument('--crop'); ap.add_argument('-o'); ap.add_argument('--port', type=int, default=8765)
ap.add_argument('--quiet', action='store_true')
a = ap.parse_args()

def up(port):
    with socket.socket() as s:
        return s.connect_ex(('127.0.0.1', port)) == 0

srv = None
if not up(a.port):
    srv = subprocess.Popen([sys.executable, '-m', 'http.server', str(a.port), '--bind', '127.0.0.1'], cwd=HERE,
                           stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    for _ in range(50):
        if up(a.port): break
        time.sleep(0.1)
try:
    qs = f'fig={a.fig}' + ('&debug=1' if a.debug else '') + ('&orig=1' if a.orig else '') + (f'&crop={a.crop}' if a.crop else '')
    url = f'http://127.0.0.1:{a.port}/render.html?{qs}'
    r = subprocess.run([os.environ.get('CHROME', '/opt/google/chrome/chrome'), '--headless=new', '--no-proxy-server', '--disable-gpu', '--no-sandbox',
                        '--disable-dev-shm-usage', '--hide-scrollbars', '--virtual-time-budget=60000', '--dump-dom', url],
                       capture_output=True, text=True, timeout=180)
    dom = r.stdout
finally:
    if srv: srv.terminate()

m = re.search(r'<pre id="rep">(.*?)</pre>', dom, re.S)
o = re.search(r'<pre id="out">data:image/png;base64,(.*?)</pre>', dom, re.S)
repo = html.unescape(m.group(1)) if m else 'NO REPORT'
if not o:
    print('渲染失败:', repo[:2000]); print(r.stderr[-2000:]); sys.exit(1)
out = a.o or os.path.join(HERE, 'out', a.fig + ('-crop' if a.crop else '') + ('-debug' if a.debug else '') + ('-orig' if a.orig else '') + '.png')
os.makedirs(os.path.dirname(os.path.abspath(out)), exist_ok=True)
with open(out, 'wb') as f:
    f.write(base64.b64decode(o.group(1)))
print('写出', os.path.abspath(out))
if not a.quiet:
    for it in json.loads(repo):
        print(json.dumps(it, ensure_ascii=False))
