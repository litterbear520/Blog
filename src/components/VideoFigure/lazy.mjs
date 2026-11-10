// VideoFigure 的加载逻辑，纯 DOM，不依赖 React，可以在浏览器里单独验证。
//
// 标记里写的是 preload="none"，也不带 poster：页面打开时，视口外的视频连封面图都不请求。
// 滚到离视口 POSTER_MARGIN 以内先加载封面图；再近到 NEAR_MARGIN 以内才改成 preload="metadata"，
// 浏览器这时取文件开头的索引，读者滚到跟前时封面、时长和进度条都已就绪，点播放才下载正片。
// 首屏就能看到的视频由组件直接把 poster 写进标记（eager），不走这里，免得封面等脚本加载完才出现。
// 循环短片（loop）进入视口才播放，离开就暂停；系统开了“减少动态效果”时不自动播，改成显示控件。

export const POSTER_MARGIN = '1200px 0px';
export const NEAR_MARGIN = '600px 0px';

// 浏览器在 preload 从 none 改成 metadata 后会自己恢复被推迟的加载；
// 个别实现不恢复，这里补一次 load()。已经在加载、已有数据或已经播过的都不碰。
function resumeDeferredLoad(video) {
  const idle = video.networkState === 0 || video.networkState === 1; // EMPTY / IDLE
  if (idle && video.readyState === 0 && video.paused && video.played.length === 0) {
    video.load();
  }
}

export function attachLazyVideo(video, { loop = false, preload = 'near', poster } = {}) {
  const cleanups = [];
  const hasObserver = typeof IntersectionObserver !== 'undefined';
  const reducedMotion =
    typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches;
  const autoplay = loop && !reducedMotion;

  const warmUp = () => {
    video.preload = 'metadata';
    // 等一帧：给浏览器自己恢复加载的机会，免得重复请求
    requestAnimationFrame(() => resumeDeferredLoad(video));
  };

  // 只在进入范围时触发一次
  const once = (rootMargin, run) => {
    if (!hasObserver) {
      run();
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          observer.disconnect();
          run();
        }
      },
      { rootMargin },
    );
    observer.observe(video);
    cleanups.push(() => observer.disconnect());
  };

  if (poster && !video.poster) {
    once(POSTER_MARGIN, () => {
      video.poster = poster;
    });
  }

  if (preload !== 'none') once(NEAR_MARGIN, warmUp);

  if (loop) {
    // 服务端渲染出的 HTML 里没有 muted 属性，不手动静音浏览器不肯自动播放
    video.muted = true;
    if (!autoplay) {
      video.controls = true;
    } else if (!hasObserver) {
      video.play()?.catch(() => {});
    } else {
      const visible = new IntersectionObserver(
        (entries) => {
          const entry = entries[entries.length - 1];
          if (entry.isIntersecting) video.play()?.catch(() => {});
          else video.pause();
        },
        { threshold: 0.25 },
      );
      visible.observe(video);
      cleanups.push(() => visible.disconnect());
    }
  }

  return () => cleanups.forEach((fn) => fn());
}
