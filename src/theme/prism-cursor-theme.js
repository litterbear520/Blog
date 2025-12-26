/**
 * Cursor-inspired Prism theme for Docusaurus
 * Based on VS Code Cursor theme colors
 */

const theme = {
    plain: {
        color: '#D6D6DD',
        backgroundColor: '#1a1a1a',
    },
    styles: [
        {
            types: ['comment', 'prolog', 'doctype', 'cdata'],
            style: {
                color: '#FFFFFF5C',
                fontStyle: 'italic',
            },
        },
        {
            types: ['namespace'],
            style: {
                opacity: 0.7,
            },
        },
        {
            types: ['string', 'attr-value', 'template-string'],
            style: {
                color: '#E394DC',
            },
        },
        {
            types: ['punctuation'],
            style: {
                color: '#D6D6DD',
            },
        },
        {
            types: ['operator'],
            style: {
                color: '#D6D6DD',
            },
        },
        {
            types: ['entity', 'url', 'symbol', 'number', 'boolean', 'variable', 'constant', 'regex', 'inserted'],
            style: {
                color: '#EBC88D',
            },
        },
        {
            types: ['property'],
            style: {
                color: '#AA9BF5',
            },
        },
        {
            types: ['atrule', 'keyword', 'attr-name'],
            style: {
                color: '#83D6C5',
            },
        },
        {
            types: ['function'],
            style: {
                color: '#EFB080',
            },
        },
        {
            types: ['deleted', 'tag'],
            style: {
                color: '#87C3FF',
            },
        },
        {
            types: ['selector'],
            style: {
                color: '#F8C762',
            },
        },
        {
            types: ['builtin', 'class-name', 'tag'],
            style: {
                color: '#87C3FF',
            },
        },
        {
            types: ['char'],
            style: {
                color: '#A8CC7C',
            },
        },
        {
            types: ['important', 'bold'],
            style: {
                fontWeight: 'bold',
            },
        },
        {
            types: ['italic'],
            style: {
                fontStyle: 'italic',
            },
        },
        // Python specific
        {
            types: ['decorator', 'annotation'],
            style: {
                color: '#A8CC7C',
            },
        },
        // JavaScript/TypeScript specific
        {
            types: ['module', 'control-flow'],
            style: {
                color: '#83D6C5',
                fontStyle: 'italic',
            },
        },
        // Type annotations
        {
            types: ['type', 'type-annotation'],
            style: {
                color: '#82D2CE',
            },
        },
        // Parameter
        {
            types: ['parameter'],
            style: {
                color: '#F8C762',
            },
        },
        // Self, this
        {
            types: ['self', 'this', 'language-variable'],
            style: {
                color: '#EFB080',
            },
        },
        // Import/Export
        {
            types: ['imports', 'exports'],
            style: {
                color: '#AAA0FA',
            },
        },
    ],
};

export default theme;
