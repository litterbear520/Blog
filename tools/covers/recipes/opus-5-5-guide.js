// 把整个任务交给它：张开的手在左下把任务放出去，墨线一跳一跳沿纸白长台阶往上，落到顶上的终点旗
module.exports = {
  swatch: 'heather',
  seed: 55,
  draw(d, m) {
    // 纸白长台阶（主物件）：四级，从左下铺到右上
    const x0 = 270, x1 = 900, base = 900, n = 4;
    const sw = (x1 - x0) / n, rise = 165;
    const poly = [[x0, base]];
    for (let i = 0; i < n; i++) {
      const y = base - 150 - rise * i + (i === 0 ? 0 : 0);
      poly.push([x0 + sw * i, y], [x0 + sw * (i + 1), y]);
    }
    poly.push([x1, base]);
    d.cut(poly, { amp: 5 });
    // 终点旗：纸白三角旗面离台阶足够远，不会粘连
    const fx = x1 - 40, top = base - 150 - rise * (n - 1);
    d.cut([[fx - 8, 50], [fx + 90, 95], [fx - 8, 150]], { amp: 3 });
    // 手：张开，四指朝右上伸向台阶，刚把任务放出去
    m.handAt(d, { to: [330, 575], pose: 'open', s: 1.0, rot: -8 });
    d.brush([[fx, top - 30], [fx + 2, 40]], { amp: 1 });
    // 一跳一跳往上：从指尖上方起跳，依次落在第二、三、四级
    const land = (i) => [x0 + sw * i + sw * 0.3, base - 150 - rise * i];
    // 起跳点在指尖 (330, 575) 上方，留一个线宽以上
    let from = [345, 525];
    [1, 2, 3].forEach((i) => {
      const to = land(i);
      const peak = Math.min(from[1], to[1]) - 150;
      d.brush([from, [from[0] + 20, peak + 30], [(from[0] + to[0]) / 2 + 20, peak], [to[0] - 10, peak + 50], [to[0], to[1] - 30]], { amp: 1.5, taper: 0.05 });
      from = [to[0], to[1] - 30];
    });
  },
};
