import Layout from '@theme/Layout';
import React from 'react';
import clsx from 'clsx';
import styles from './index.module.css';
import Link from '@docusaurus/Link';

function HomepageHeader() {
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">我的博客</h1>
        {/* <p className="hero__subtitle">真实的记录自己，比获得他人的认同感更重要</p> */}
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

export default function Home() {
  return (
    <Layout>
      <HomepageHeader />
      <main>
        <BlogSection />
      </main>
    </Layout>
  );
}
