const { readFileSync } = require("node:fs");
const path = require("node:path");

const config = JSON.parse(
    readFileSync(path.join(__dirname, "swc.config.json"), "utf-8")
);

const mainConfig = {
    setupFilesAfterEnv: ["<rootDir>/jest-setup.ts"],
    moduleNameMapper: {
        "@constants": "<rootDir>/shared/constants/index.ts",
        "@interfaces/(.*)": "<rootDir>/shared/interfaces/$1",
        "@hooks/(.*)": "<rootDir>/react/hooks/$1",
        "@components/(.*)": "<rootDir>/react/components/$1",
        "@pages/(.*)": "<rootDir>/react/pages/$1",
    },
    transform: {
        "^.+\\.(t|j)sx?$": ["@swc/jest", config],
    },
};

const clientTestConfig = {
    ...mainConfig,
    displayName: "client",
    testEnvironment: "jest-environment-jsdom",
    testMatch: ["<rootDir>/react/**/*.(spec|test).[jt]s?(x)"],
};

const serverTestConfig = {
    ...mainConfig,
    displayName: "server",
    testEnvironment: "node",
    testMatch: ["<rootDir>/server/**/*.(spec|test).[jt]s?(x)"],
};

module.exports = {
    projects: [clientTestConfig, serverTestConfig],
};
