module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleDirectories: ['node_modules', 'src'],
  transform: {
    '^.+\\.svg$': 'jest-transform-stub',
  },
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10,
    },
  },
  moduleNameMapper: {
    '@external/(.*)': '<rootDir>/src/external/$1',
    '@hooks/(.*)': '<rootDir>/src/hooks/$1',
    '@infrastructure/(.*)': '<rootDir>/src/infrastructure/$1',
    '@adapters/(.*)': '<rootDir>/src/adapters/$1',
    '@components/(.*)': '<rootDir>/src/components/$1',
    '@helpers/(.*)': '<rootDir>/src/helpers/$1',
    '@assets/(.*)': '<rootDir>/src/assets/$1',
  },
};
