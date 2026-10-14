import React from 'react';

/**
 * markdown 表格外套一层 .md-table：外框、圆角、底色和窄屏横向滚动都在这层，
 * 样式见 custom.css「表格」一节。组件里手写的 <table>（CsvTable、MessageFlow）不经过这里。
 */
export default function Table(props) {
  return (
    <div className="md-table">
      <table {...props} />
    </div>
  );
}
