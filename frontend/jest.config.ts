export default {
  displayName: 'test',
  roots: ['<rootDir>/src'],
  testEnvironment: 'jsdom',
  resolver: '<rootDir>/config/resolver.cjs',
  setupFiles:[
    '<rootDir>/config/setup.cjs'
  ],
  transform: {
    '^.+\\.[tj]s[x]?$': ['ts-jest', {
      useESM: true,
      diagnostics: {
        ignoreCodes: [1343]
      },
      astTransformers: {
        before: [
          {
              path: 'node_modules/ts-jest-mock-import-meta',
              options: { metaObjectReplacement: { env: { PROD: false, DEV: false } } }
          }
        ],
      }
    }],
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|)$': 'jest-transform-stub',
  },
  coveragePathIgnorePatterns: [
    '/index.ts',
    '/init-redux.ts',
    '/init-env.ts',
    '/test-mock-fetch.ts',
    '/test-renderer.ts',
    '/test-run-saga.ts',
  ],
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
}
