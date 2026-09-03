/**
 * 让 Prism 的切分更接近 Cursor（TextMate 语法）的粒度。
 * 由 prism-include-languages.js 在加载完 additionalLanguages 之后调用；只改语法，颜色在 prism-cursor-theme.js。
 */
export default function refinePrismGrammars(Prism) {
  const py = Prism.languages.python;
  if (py) {
    // print 在 Prism 里是 py2 关键字，Cursor 把它当内置函数（橙色）
    py.keyword = /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|raise|return|try|while|with|yield)\b/;
    py.builtin = /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|buffer|callable|chr|cmp|coerce|compile|delattr|dir|divmod|enumerate|eval|execfile|file|filter|format|getattr|globals|hasattr|hash|help|hex|id|input|intern|isinstance|issubclass|iter|len|locals|long|map|max|min|next|oct|open|ord|pow|print|raw_input|reduce|reload|repr|reversed|round|setattr|sorted|sum|super|unichr|unicode|vars|xrange|zip)\b/;
    // Cursor 把 int / str / list 这类内置类型标成 support.type（青色），和内置函数分开
    Prism.languages.insertBefore('python', 'builtin', {
      'builtin-type': {
        pattern: /\b(?:bool|bytearray|bytes|classmethod|complex|dict|float|frozenset|int|list|memoryview|object|property|range|set|slice|staticmethod|str|tuple|type)\b/,
        alias: 'type',
      },
    });
    // 调用：Cursor 的 meta.function-call 是紫色。放在 keyword / builtin 之后，if( 和 len( 已被前面的规则消费，不会误伤
    Prism.languages.insertBefore('python', 'boolean', {
      'function-call': /\b[a-zA-Z_]\w*(?=\s*\()/,
      'self': /\bself\b/,
    });
  }

  // C / C++：#include 这类预处理指令在 Cursor 里是绿色。Prism 给 directive 加了 keyword 别名，颜色会被 keyword 盖掉，去掉别名
  for (const lang of ['c', 'cpp']) {
    const g = Prism.languages[lang];
    const directive = g && g.macro && g.macro.inside && g.macro.inside.directive;
    if (directive) directive.alias = 'directive';
  }
}
