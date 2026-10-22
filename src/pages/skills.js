// src/pages/skills.js
import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import clsx from 'clsx';
import SkillCard from '@site/src/components/SkillCard';
import { CATEGORIES, SKILLS } from '@site/src/data/skills';
import styles from './skills.module.css';

// 「个人」按来源筛：自建技能除了出现在自己的用途分类里，也都收在这一栏
const FILTERS = ['全部', ...CATEGORIES, '个人'];
const matches = (skill, filter) =>
  filter === '全部' ||
  (filter === '个人' ? skill.source === '自建' : skill.category === filter);
const countOf = (filter) => SKILLS.filter((s) => matches(s, filter)).length;

export default function SkillsPage() {
  const [activeFilter, setActiveFilter] = useState('全部');
  const [expandedId, setExpandedId] = useState(null); // accordion：只记录一个展开 id

  const filtered = SKILLS.filter((s) => matches(s, activeFilter));

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
          {FILTERS.map((filter) => (
            <button
              key={filter}
              type="button"
              className={clsx(
                styles.filterBtn,
                activeFilter === filter && styles.filterActive,
              )}
              onClick={() => {
                setActiveFilter(filter);
                setExpandedId(null); // 切换筛选时收起已展开卡片，避免"幽灵展开"
              }}
            >
              {filter}
              <span className={styles.filterCount}>{countOf(filter)}</span>
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
              delay={Math.min(i, 5) * 100} // 封顶，卡片多了后面的不用干等
            />
          ))}
        </section>
      </div>
    </Layout>
  );
}
