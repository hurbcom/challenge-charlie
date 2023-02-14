// jest.config.js
const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

/** @type {import('jest').Config} */
const customJestConfig = {
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "~/(.*)": "<rootDir>/src/$1",
  },
  collectCoverage: true,
  collectCoverageFrom: [
    "<rootDir>/src/components/**/*.{ts, tsx}",
    "<rootDir>/src/hooks/**/*.{ts, tsx}",
    "<rootDir>/src/utils/**/*.{ts, tsx}",
  ],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};

module.exports = createJestConfig(customJestConfig);
