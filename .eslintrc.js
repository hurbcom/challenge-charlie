module.exports = {
    env: {
        browser: true,
        es2021: true,
        'cypress/globals': true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'plugin:cypress/recommended',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        'cypress',
    ],
    rules: {
        'no-console': 'error',
        indent: ['error', 4, { ignoredNodes: ['JSXElement', 'JSXElement *'] }],
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
        'react/jsx-indent': ['error', 4],
        'import/no-extraneous-dependencies': ['error', { devDependencies: ['**/webpack.*.js'] }],
    },
};
