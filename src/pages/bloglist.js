import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import React, { useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import { useBaseUrlUtils } from '@docusaurus/useBaseUrl';
import styles from './bloglist.module.css';
import SWATCHES from '../data/swatches.json';

const POSTS = [
  {
    title: '语音代理中的记忆问题比你想的更难',
    date: '2026-09-09',
    slug: 'voice-agent-memory',
    category: 'AI',
    swatch: 'plum',
    cover: '/img/blog/cover-voice-agent-memory.svg',
  },
  {
    title: 'HTML 的惊人效果',
    date: '2026-07-08',
    slug: 'html-effectiveness',
    category: 'AI',
    swatch: 'oat',
    cover: '/img/blog/cover-html-effectiveness.svg',
  },
  {
    title: '探索你的未知领域',
    date: '2026-07-04',
    slug: 'fable-guide',
    category: 'AI',
    swatch: 'mineral',
    cover: '/img/blog/cover-fable-guide.svg',
  },
  {
    title: '如何自己订阅Claude',
    date: '2026-05-08',
    slug: 'subscribe-claude',
    category: '教程',
    swatch: 'peach',
    cover: '/img/blog/cover-subscribe-claude.svg',
  },
  {
    title: '善用工具弥补技术深度',
    date: '2026-03-13',
    slug: 'ai-and-depth',
    category: 'AI',
    swatch: 'sky',
    cover: '/img/blog/cover-ai-and-depth.svg',
  },
  {
    title: '阿里天池二手车价格预测Top2分享',
    date: '2025-07-04',
    slug: 'tianchi-top2',
    category: '比赛',
    swatch: 'cactus',
    cover: '/img/blog/cover-tianchi-top2.svg',
  },
];

const CATEGORIES = ['全部', '教程', 'AI', '比赛'];

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogListPage() {
  const [activeFilter, setActiveFilter] = useState('全部');
  const { withBaseUrl } = useBaseUrlUtils();

  const filtered =
    activeFilter === '全部'
      ? POSTS
      : POSTS.filter((p) => p.category === activeFilter);

  return (
    <Layout title="博客" description="记录技术探索与成长的旅程">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className={styles.page}>
        <header className={styles.hero}>
          <span className={styles.heroLabel}>Blog</span>
          <h1 className={styles.heroTitle}>博客</h1>
          <p className={styles.heroSubtitle}>记录技术探索与成长的旅程</p>
          <div className={styles.heroDivider} />
        </header>

        <nav className={styles.filters}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={clsx(
                styles.filterBtn,
                activeFilter === cat && styles.filterActive,
              )}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </nav>

        <section className={styles.grid}>
          {filtered.map((post, i) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className={styles.card}
              style={{ '--delay': `${i * 120}ms` }}
            >
              <div
                className={styles.cardVisual}
                style={{ background: SWATCHES[post.swatch] }}
              >
                <CoverImage src={withBaseUrl(post.cover)} alt={post.title} />
              </div>
              <div className={styles.cardContent}>
                <time className={styles.cardDate}>
                  {formatDate(post.date)}
                </time>
                <h2 className={styles.cardTitle}>{post.title}</h2>
                <div className={styles.cardFooter}>
                  <span className={styles.cardTag}>{post.category}</span>
                  <span className={styles.cardArrow}>→</span>
                </div>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </Layout>
  );
}

function CoverImage({ src, alt }) {
  const [error, setError] = React.useState(false);

  if (error) return null;

  return (
    <img
      className={styles.coverImg}
      src={src}
      alt={alt}
      loading="eager"
      fetchPriority="high"
      onError={() => setError(true)}
    />
  );
}
