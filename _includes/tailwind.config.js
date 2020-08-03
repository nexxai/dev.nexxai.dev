module.exports = {
    purge: [],
    theme: {
        fontFamily: {
            'body': ['Fira Mono', 'mono']
        },
        extend: {
            colors: {
                'morpheus': '#30cfd0',
                'nexxai': '#005bea',
                'github': '#24292e',
                'den': '#6e45e2',
                'laravel': '#ff2d20',
                'terraform': '#623ce4',
                'azure': '#0066B8',
                'aws': '#e47911',
                'phpstorm': '#e8198b',
                'vscode': '',
            },
        },
    },
    variants: {},
    plugins: [
        require('tailwindcss-webgradients'),
    ],
}
