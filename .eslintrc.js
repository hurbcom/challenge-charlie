module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    extends: [
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
        'prettier',
        'prettier/react',
    ],
    rules: {
        'prettier/prettier': 'error',
        'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.ts', '.tsx'] }],
        'import/prefer-default-export': 'off',
        // 'jsx-quotes': ['error', 'prefer-single'],
    },
};
