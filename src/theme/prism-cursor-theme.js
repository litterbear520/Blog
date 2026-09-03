/**
 * Cursor Dark 代码高亮主题（prism-react-renderer 格式）
 *
 * 颜色取自 Cursor 内置 "Cursor Dark" 主题的 tokenColors / editor.* 值，按 Prism token 就近映射；
 * 有语言差异的项用 languages 字段单独指定（Cursor 里 JS 函数名是黄色、Python 参数是黄色等）。
 * 暗色代码块的全部配色只在这里定义，custom.css 不再覆盖 .token。
 */

const INK = '#D6D6DD'; // variable / punctuation / operator 的正文色
const FG = '#F0F0F0'; // editor.foreground

const theme = {
    plain: {
        color: INK,
        backgroundColor: '#181818', // editor.background
    },
    styles: [
        // comment
        {
            types: ['comment', 'prolog', 'doctype', 'cdata'],
            style: { color: '#F0F0F099', fontStyle: 'italic' },
        },
        // variable / punctuation / keyword.operator / string.regexp / constant.character.entity
        {
            types: ['punctuation', 'operator', 'variable', 'regex', 'entity', 'symbol', 'url', 'deleted'],
            style: { color: INK },
        },
        // string（含引号、模板串反引号）/ markup.inserted.diff
        {
            types: ['string', 'char', 'attr-value', 'template-string', 'template-punctuation', 'inserted'],
            style: { color: '#E394DC' },
        },
        // constant.numeric / keyword.other.unit / constant.other.color
        {
            types: ['number', 'unit', 'hexcode', 'color'],
            style: { color: '#EBC88D' },
        },
        // constant.language（true/false/None）没有专门规则，跟 editor.foreground
        {
            types: ['boolean'],
            style: { color: FG },
        },
        // variable.other.constant（全大写常量）
        {
            types: ['constant'],
            style: { color: '#AAA0FA' },
        },
        // keyword / storage / 模板串的 ${ }
        {
            types: ['keyword', 'atrule', 'storage', 'interpolation-punctuation'],
            style: { color: '#82D2CE' },
        },
        // keyword.control.import / keyword.control.flow 在 Python 里是斜体
        {
            types: ['keyword'],
            languages: ['python', 'py'],
            style: { fontStyle: 'italic' },
        },
        // entity.name.function / support.function
        {
            types: ['function', 'function-variable'],
            style: { color: '#EFB080' },
        },
        // entity.name.function.js 单独是黄色
        {
            types: ['function', 'function-variable'],
            languages: ['js', 'javascript', 'jsx'],
            style: { color: '#EBC88D' },
        },
        // support.class / entity.name.type.class / entity.name.tag.html / variable.other.readwrite（大写标识符）
        {
            types: ['class-name', 'builtin', 'tag', 'maybe-class-name'],
            style: { color: '#87C3FF' },
        },
        // support.function.builtin.python（print / len ...）
        {
            types: ['builtin'],
            languages: ['python', 'py'],
            style: { color: '#EFB080' },
        },
        // support.type.primitive.ts（string / number / boolean 类型）
        {
            types: ['builtin'],
            languages: ['typescript', 'ts', 'tsx'],
            style: { color: '#82D2CE' },
        },
        // meta.object-literal.key（对象字面量的 key 跟正文色）
        {
            types: ['property'],
            style: { color: INK },
        },
        // support.type.property-name.json
        {
            types: ['property'],
            languages: ['json', 'json5'],
            style: { color: '#82D2CE' },
        },
        // meta.property-name.css
        {
            types: ['property'],
            languages: ['css', 'scss', 'less'],
            style: { color: '#87C3FF' },
        },
        // variable.other.property（obj.prop 访问）
        {
            types: ['property-access'],
            style: { color: '#AAA0FA' },
        },
        // entity.other.attribute-name；JSX 属性名斜体
        {
            types: ['attr-name'],
            style: { color: '#AAA0FA' },
        },
        {
            types: ['attr-name'],
            languages: ['jsx', 'tsx'],
            style: { fontStyle: 'italic' },
        },
        // meta.selector；.class 黄 / #id 紫 / 伪类跟正文色
        {
            types: ['selector'],
            style: { color: '#82D2CE' },
        },
        {
            types: ['class'],
            languages: ['css', 'scss', 'less'],
            style: { color: '#F8C762' },
        },
        {
            types: ['id'],
            languages: ['css', 'scss', 'less'],
            style: { color: '#AAA0FA' },
        },
        {
            types: ['pseudo-class', 'pseudo-element'],
            style: { color: INK },
        },
        // meta.function.decorator.python；Java 注解跟 storage.type.annotation.java
        {
            types: ['decorator', 'annotation'],
            style: { color: '#A8CC7C' },
        },
        {
            types: ['annotation'],
            languages: ['java'],
            style: { color: '#EFB080' },
        },
        // variable.parameter：斜体、跟正文色；Python 参数黄色
        {
            types: ['parameter'],
            style: { color: INK, fontStyle: 'italic' },
        },
        {
            types: ['parameter'],
            languages: ['python', 'py'],
            style: { color: '#F8C762' },
        },
        // 类型注解
        {
            types: ['type', 'type-annotation'],
            style: { color: '#82D2CE' },
        },
        // variable.language（this / super）；Python self 是橙色
        {
            types: ['this', 'language-variable'],
            style: { color: '#CC7C8A' },
        },
        {
            types: ['self'],
            style: { color: '#EFB080' },
        },
        // import { a, b } 里的名字：variable.other.readwrite.alias
        {
            types: ['imports', 'exports'],
            style: { color: '#87C3FF' },
        },
        // entity.name.namespace
        {
            types: ['namespace'],
            style: { color: '#CCCCCC' },
        },
        {
            types: ['important', 'bold'],
            style: { fontWeight: 'bold' },
        },
        {
            types: ['italic'],
            style: { fontStyle: 'italic' },
        },
        // Markdown
        {
            types: ['title'],
            languages: ['markdown', 'md'],
            style: { color: '#88C0D0' },
        },
        {
            types: ['bold'],
            languages: ['markdown', 'md'],
            style: { color: '#F8C762' },
        },
        {
            types: ['italic', 'url'],
            languages: ['markdown', 'md'],
            style: { color: '#82D2CE' },
        },
        {
            types: ['code'],
            languages: ['markdown', 'md'],
            style: { color: '#E394DC' },
        },
        {
            types: ['blockquote'],
            languages: ['markdown', 'md'],
            style: { color: '#4FC3F7' },
        },
    ],
};

export default theme;
