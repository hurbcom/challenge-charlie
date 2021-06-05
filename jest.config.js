module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleDirectories: ['node_modules'],
  transform: {
    '^.+\\.svg$': 'jest-transform-stub',
  },
};
