/* eslint-disable */
export default {
  displayName: 'frontend-utility-framework-adapter-contracts-controllers',
  preset: '../../../../../../../../jest.preset.js',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory:
    '../../../../../../../../coverage/src/libs/frontend/utility/framework/adapter/contracts/controllers',
};
