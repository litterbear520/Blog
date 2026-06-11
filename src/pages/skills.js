// src/pages/skills.js
import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import clsx from 'clsx';
import SkillCard from '@site/src/components/SkillCard';
import { SKILLS } from '@site/src/data/skills';
import styles from './skills.module.css';

// 筛选标签从数据动态生成：加入首个 source='自建' 的技能后「自建」自动出现
const SOURCES = ['全部', ...new Set(SKILLS.map((s) => s.source))];

export default function SkillsPage() {
  const [activeSource, setActiveSource] = useState('全部');
  const [expandedId, setExpandedId] = useState(null); // accordion：只记录一个展开 id

  const filtered =
    activeSource === '全部'
      ? SKILLS
      : SKILLS.filter((s) => s.source === activeSource);

  return (
    <Layout title="Skills" description="我常用的和自己创建的 Claude 技能">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className={styles.page}>
        <header className={styles.hero}>
          <span className={styles.heroLabel}>Skill Hub</span>
          <h1 className={styles.heroTitle}>Skills</h1>
          <p className={styles.heroSubtitle}>我常用的和自己创建的 Claude 技能</p>
          <div className={styles.heroDivider} />
        </header>

        <nav className={styles.filters}>
          {SOURCES.map((src) => (
            <button
              key={src}
              className={clsx(
                styles.filterBtn,
                activeSource === src && styles.filterActive,
              )}
              onClick={() => setActiveSource(src)}
            >
              {src}
            </button>
          ))}
        </nav>

        <section className={styles.grid}>
          {filtered.map((skill, i) => (
            <SkillCard
              key={skill.id}
              skill={skill}
              expanded={expandedId === skill.id}
              onToggle={() =>
                setExpandedId(expandedId === skill.id ? null : skill.id)
              }
              delay={i * 120}
            />
          ))}
        </section>
      </div>
    </Layout>
  );
}
