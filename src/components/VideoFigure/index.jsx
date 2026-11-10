import React, { useEffect, useRef, useState } from 'react';
import { attachLazyVideo } from './lazy.mjs';
import styles from './styles.module.css';

// 正文里的视频：浏览器原生 <video>，外面一层 <figure>，可带编号图注。
//
//   <VideoFigure src={clip} poster={clipPoster} fig="A" label="画面里有什么（给读屏）">
//     图注文字
//   </VideoFigure>
//
// - 必须给 poster 和画面的 width / height（默认 1920×1080）：封面先出，位置提前留好，页面不跳动。
// - 视频滚到视口附近才取索引，之前只加载封面图；逻辑见 lazy.mjs。
// - preload="none"：始终不预取，点播放才发请求。索引很大的长视频用。
// - loop：无声循环短片，当动图用。进视口自动播、出视口暂停，不显示控件。
// - 不写图注时只有视频本身，可以放进 Tabs，图注另写在下面。
// - 视频文件用 H.264 MP4，导出时把索引放在文件开头（ffmpeg 的 -movflags +faststart）。

const typeOf = (src) => (/\.webm(\?|$)/.test(src) ? 'video/webm' : 'video/mp4');

export default function VideoFigure({
  src,
  poster,
  label,
  fig,
  width = 1920,
  height = 1080,
  loop = false,
  preload = 'near',
  children,
}) {
  const videoRef = useRef(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (!videoRef.current) return undefined;
    return attachLazyVideo(videoRef.current, { loop, preload });
  }, [src, loop, preload]);

  return (
    <figure className={styles.figure}>
      <video
        ref={videoRef}
        className={styles.video}
        controls={!loop}
        loop={loop}
        muted={loop}
        playsInline
        preload="none"
        poster={poster}
        width={width}
        height={height}
        aria-label={label}
        style={{ aspectRatio: `${width} / ${height}` }}
      >
        <source src={src} type={typeOf(src)} onError={() => setFailed(true)} />
        <a href={src}>下载视频</a>
      </video>
      {failed && (
        <p className={styles.failed}>
          视频没能加载，可以<a href={src}>直接下载</a>后观看。
        </p>
      )}
      {children && (
        <figcaption className={styles.cap}>
          {fig && <b>图 {fig}</b>}
          <div>{children}</div>
        </figcaption>
      )}
    </figure>
  );
}
