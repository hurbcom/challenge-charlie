module.exports = {
  env: {
    jest: true,
    es2021: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'import/extensions': [0],
    'import/prefer-default-export': [0],
    'max-len': ['error', { code: 110, ignoreStrings: true }],
    'no-console': ['error', { allow: ['info'] }],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts'],
      },
    },
  },
}
