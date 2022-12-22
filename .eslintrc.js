module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "standard",
    "react-app",
    "react-app/jest",
    "plugin:react/jsx-runtime",
    "plugin:prettier/recommended",
    "plugin:import/recommended",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "unused-imports", "simple-import-sort"],
  settings: {
    "import/resolver": {
      node: {
        moduleDirectory: [".", "node_modules"],
      },
    },
  },
  rules: {
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "unused-imports/no-unused-imports": "error",
  },
};
