import React from 'react';
import styles from './CsvTable.module.css';

export default function CsvTable({ data }) {
  if (!data || typeof data !== 'string') {
    return <div>无效的 CSV 数据</div>;
  }

  const lines = data.trim().split('\n');
  if (lines.length === 0) {
    return <div>CSV 数据为空</div>;
  }

  const rows = lines.map(line => {
    // 处理 CSV 中可能包含逗号的字段（用引号包裹）
    const regex = /(".*?"|[^,]+)(?=\s*,|\s*$)/g;
    const matches = line.match(regex);
    return matches ? matches.map(cell => cell.replace(/^"|"$/g, '').trim()) : [];
  });

  const headers = rows[0];
  const bodyRows = rows.slice(1);

  return (
    <div className={styles.tableWrapper}>
      <table className={styles.csvTable}>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {bodyRows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
