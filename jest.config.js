module.exports = {
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  setupFilesAfterEnv: ['<rootDir>/src/tests/setupTests.ts'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },
  moduleNameMapper: {
    '~/(.*)': '<rootDir>/src/$1',
  },

  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.tsx',
    '!src/**/*.test.{tsx}',
    '!src/**/_app.tsx',
    '!src/**/_document.tsx',
  ],
  coverageReporters: ['json', 'lcov'],
  testEnvironment: 'jsdom',
}
