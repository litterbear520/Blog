/**
 * Cursor-inspired Light Prism theme for Docusaurus
 * A lighter variant based on the Cursor aesthetic
 */

const theme = {
    plain: {
        color: '#24292e',
        backgroundColor: '#f6f8fa',
    },
    styles: [
        {
            types: ['comment', 'prolog', 'doctype', 'cdata'],
            style: {
                color: '#6a737d',
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
                color: '#c41d7f',
            },
        },
        {
            types: ['punctuation'],
            style: {
                color: '#24292e',
            },
        },
        {
            types: ['operator'],
            style: {
                color: '#24292e',
            },
        },
        {
            types: ['entity', 'url', 'symbol', 'number', 'boolean', 'variable', 'constant', 'regex', 'inserted'],
            style: {
                color: '#b5641a',
            },
        },
        {
            types: ['property'],
            style: {
                color: '#6f42c1',
            },
        },
        {
            types: ['atrule', 'keyword', 'attr-name'],
            style: {
                color: '#1890ff',
            },
        },
        {
            types: ['function'],
            style: {
                color: '#d46b08',
            },
        },
        {
            types: ['deleted', 'tag'],
            style: {
                color: '#0969da',
            },
        },
        {
            types: ['selector'],
            style: {
                color: '#b5641a',
            },
        },
        {
            types: ['builtin', 'class-name', 'tag'],
            style: {
                color: '#0969da',
            },
        },
        {
            types: ['char'],
            style: {
                color: '#50a14f',
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
                color: '#50a14f',
            },
        },
        // JavaScript/TypeScript specific
        {
            types: ['module', 'control-flow'],
            style: {
                color: '#1890ff',
                fontStyle: 'italic',
            },
        },
        // Type annotations
        {
            types: ['type', 'type-annotation'],
            style: {
                color: '#13a8a8',
            },
        },
        // Parameter
        {
            types: ['parameter'],
            style: {
                color: '#b5641a',
            },
        },
        // Self, this
        {
            types: ['self', 'this', 'language-variable'],
            style: {
                color: '#d46b08',
            },
        },
        // Import/Export
        {
            types: ['imports', 'exports'],
            style: {
                color: '#6f42c1',
            },
        },
    ],
};

export default theme;
