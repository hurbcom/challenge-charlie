module.exports = {
  moduleFileExtensions: ['js', 'jsx'],
  moduleNameMapper: {
    '^helpers(.*)': '<rootDir>/src/helpers/$1',
    '^services(.*)': '<rootDir>/src/services/$1',
    '^hooks(.*)': '<rootDir>/src/hooks/$1',
    '^utils(.*)': '<rootDir>/src/utils/$1',
    '^components(.*)': '<rootDir>/src/components/$1',
    '\\.svg$': '<rootDir>/__mocks__/svgrMock.js',
    '^icons(.*)': '<rootDir>/src/icons/$1',
    '^@/(.*)$': '<rootDir>/src$1',
  },
  testMatch: [
    '<rootDir>/**/*.test.(js|jsx)',
    '<rootDir>/(tests/unit/**/*.spec.(js|jsx)|**/__tests__/*.(js|jsx))',
  ],
  transform: {
    '^.+\\.(js|jsx)?$': 'babel-jest',
    '.+\\.(css|style|less|sass|scss)$': 'jest-css-modules-transform',
    '^.+\\.svg$': '<rootDir>/svgTransform.js',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  verbose: true,
}
