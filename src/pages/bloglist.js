import Layout from '@theme/Layout';
import React from 'react';
import clsx from 'clsx';
import styles from './bloglist.module.css';
import Link from '@docusaurus/Link';

function BlogListHeader() {
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">我的博客</h1>
      </div>
    </header>
  );
}

function BlogSection() {
  return (
    <section className={clsx('container', styles.blogSection)}>
      <div className="row">
        <div className="col col--4">
          <h2>2025</h2>
          <ul>
            <li><Link to="/blog/mdx-blog-post">阿里天池二手车价格预测Top2分享</Link></li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default function BlogListPage() {
  return (
    <Layout>
      <BlogListHeader />
      <main>
        <BlogSection />
      </main>
    </Layout>
  );
} 