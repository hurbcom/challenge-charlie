module.exports = {
    root: true,
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
    },
    settings: {
        react: {
            version: "detect",
        },
    },
    env: {
        jest: true,
        browser: true,
        amd: true,
        node: true,
    },
    extends: ["eslint:recommended", "plugin:react/recommended","plugin:react/jsx-runtime"],
    rules: {
        "no-unused-vars": [
            "warn",
            { vars: "all", args: "after-used", ignoreRestSiblings: false },
        ],
        "react/prop-types": "off",
        "no-inline-comments": "warn"
    },
};
