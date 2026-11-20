/**
 * remark 插件：开头那张图不懒加载。
 *
 * Docusaurus 给 markdown 图片统一加 loading="lazy"。文章开头的头图往往是首屏最大的元素
 * （LCP），懒加载会让它等排完版才开始下载。这里找全文第一张图，它落在正文前
 * LEAD_BLOCKS 个块之内时，改成立即加载并提高下载优先级；后面的图保持懒加载。
 *
 * 插件排在 Docusaurus 默认插件之后，本地图片已被 transformImage 换成 JSX 的 <img>，
 * 外链图片仍是 image 节点，两种都处理。
 */

export const LEAD_BLOCKS = 4;

// 不算正文块的顶层节点：import/export、页面大标题、注释
const isSkipped = (node) =>
  node.type === 'mdxjsEsm' ||
  node.type === 'mdxFlowExpression' ||
  node.type === 'yaml' ||
  (node.type === 'heading' && node.depth === 1);

const isImage = (node) =>
  node.type === 'image' ||
  ((node.type === 'mdxJsxTextElement' || node.type === 'mdxJsxFlowElement') && node.name === 'img');

function findImage(node) {
  if (isImage(node)) return node;
  for (const child of node.children || []) {
    const found = findImage(child);
    if (found) return found;
  }
  return null;
}

function markEager(node) {
  if (node.type === 'image') {
    node.data = node.data || {};
    node.data.hProperties = { ...node.data.hProperties, loading: 'eager', fetchPriority: 'high' };
    return;
  }
  const attrs = node.attributes.filter((a) => a.name !== 'loading' && a.name !== 'fetchPriority');
  attrs.push(
    { type: 'mdxJsxAttribute', name: 'loading', value: 'eager' },
    { type: 'mdxJsxAttribute', name: 'fetchPriority', value: 'high' },
  );
  node.attributes = attrs;
}

export default function remarkEagerLeadImage() {
  return (tree) => {
    let blocks = 0;
    for (const node of tree.children) {
      if (isSkipped(node)) continue;
      blocks += 1;
      if (blocks > LEAD_BLOCKS) return;
      const image = findImage(node);
      if (image) {
        markEager(image);
        return;
      }
    }
  };
}
