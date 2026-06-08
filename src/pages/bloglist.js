import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import React, { useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import { useBaseUrlUtils } from '@docusaurus/useBaseUrl';
import styles from './bloglist.module.css';

const POSTS = [
  {
    title: '如何自己订阅Claude',
    date: '2026-05-08',
    slug: 'how-to-subscribe-claude',
    description:
      '使用国内银行卡通过 Google Play 订阅 Claude Pro / ChatGPT Plus，两种方案分别适合不同用户。',
    category: '教程',
    accent: 'amber',
    cover: '/img/blog/cover-subscribe-claude.png',
  },
  {
    title: '善用工具弥补技术深度',
    date: '2026-03-13',
    slug: 'ai-collaboration-and-technical-depth',
    description:
      '探讨在没有技术深度但善于使用AI工具的情况下，能否弥补技术深度鸿沟。',
    category: 'AI',
    accent: 'sage',
    cover: '/img/blog/cover-ai-tools.png',
  },
  {
    title: '阿里天池二手车价格预测Top2分享',
    date: '2025-07-04',
    slug: 'mdx-blog-post',
    description:
      '从迷茫到第二名，分享比赛中一步步提升分数的方案与心得。',
    category: '比赛',
    accent: 'terra',
    cover: '/img/blog/cover-tianchi.png',
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
              <div className={clsx(styles.cardVisual, styles[post.accent])}>
                <CoverImage src={withBaseUrl(post.cover)} alt={post.title} />
              </div>
              <div className={styles.cardContent}>
                <time className={styles.cardDate}>
                  {formatDate(post.date)}
                </time>
                <h2 className={styles.cardTitle}>{post.title}</h2>
                <p className={styles.cardDesc}>{post.description}</p>
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
