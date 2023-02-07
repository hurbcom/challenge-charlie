require('dotenv').config();
import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  roots: ['<rootDir>/tests'],
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest',
  },
  testMatch: ['**/*.test.ts'],
  setupFiles: ['dotenv/config'],
};

export default config;
