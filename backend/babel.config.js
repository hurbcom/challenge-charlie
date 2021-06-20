const { compilerOptions } = require('./tsconfig.json')

const pathsConfig = compilerOptions.paths

const pathsKeysForTsConfig = Object.keys(pathsConfig)

const pathsToBabel = Object.values(pathsConfig).reduce((paths, path, index) => ({
  ...paths,
  [pathsKeysForTsConfig[index].split('/*')[0]]: path[0].split('/*')[0]
}), {})

module.exports = {
  presets: [
    [
      '@babel/preset-env', {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    [
      'module-resolver', {
        alias: pathsToBabel
      }
    ]
  ],
  ignore: [
    '**/*.spec.ts'
  ]
}
