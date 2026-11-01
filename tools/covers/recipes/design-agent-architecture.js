// 设计 Agent 架构：三层同心剪纸圆是领域层、应用层、适配层（纸白 / tint / 纸白交替）；
// 右边一进一出两支墨线箭头穿过外圈，是适配层在系统和外部之间来回翻译
module.exports = {
  swatch: 'oat',
  seed: 5,
  draw(d, m) {
    const cx = 420;
    const cy = 500;
    // 纸片：三层，由外到内
    d.disc(cx, cy, 345, { sides: 11 });
    d.disc(cx, cy, 228, { sides: 10, color: d.tint });
    d.disc(cx, cy, 112, { sides: 9 });
    // 墨线：外部进来、翻译后出去
    d.arrow([[935, 330], [575, 440]], { head: 42 });
    d.arrow([[575, 565], [935, 675]], { head: 42 });
  },
};
