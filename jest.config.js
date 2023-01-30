const nextJest = require("next/jest");

const createJestConfig = nextJest({
    dir: "./",
});

const customJestConfig = {
    collectCoverage: true,
    coverageProvider: "v8",
    collectCoverageFrom: [
        "<rootDir>/src/components/**/*.{js,jsx,ts,tsx}",
        "!**/*.d.ts",
        "!**/node_modules/**",
        "!<rootDir>/out/**",
        "!<rootDir>/.next/**",
        "!<rootDir>/*.config.js",
        "!<rootDir>/coverage/**",
    ],
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
    moduleDirectories: ["node_modules", "<rootDir>/"],

    moduleNameMapper: {
        "@/(.*)$": "<rootDir>/src/$1",
    },
    testEnvironment: "jest-environment-jsdom",
};

module.exports = createJestConfig(customJestConfig);
