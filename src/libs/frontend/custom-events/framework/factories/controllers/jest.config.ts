/* eslint-disable */
export default {
  displayName: 'frontend-shared-custom-events-framework-factories-controllers',
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
    '../../../../../../../../coverage/src/libs/frontend/custom-events/framework/factories/controllers',
};
