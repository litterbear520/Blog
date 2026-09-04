/**
 * 覆盖 Docusaurus 的 DocCard/Heading/Icon：DocCardList 卡片标题前默认会带 🗃️（分类）/ 📄️（文档）emoji，
 * 这里返回 null 把它去掉，只保留标题文字。
 */
export default function DocCardHeadingIcon() {
  return null;
}
