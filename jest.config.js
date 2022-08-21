module.exports = {
  verbose: true,
  modulePaths: ['<rootDir>/src'],
  globals: {
    NODE_ENV: 'test',
  },
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
    './env/test': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./test/setup.ts'],
  setupFiles: ['jest-prop-type-error', './test/helpers.ts'],
  moduleFileExtensions: ['js', 'json', 'ts', 'tsx', 'node'],
  coverageDirectory: 'coverage',
  coverageReporters: ['json-summary', 'text', 'html', 'lcov'],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!**/vendor/**',
    '!**/src/**/**/*{types}.ts',
  ],
  testPathIgnorePatterns: ['/public/', '/.vscode/', '/.build/', '/node_modules/'],
};
