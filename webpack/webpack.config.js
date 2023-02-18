/* eslint-disable @typescript-eslint/no-var-requires */
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = (envVars) => {
  const { env } = envVars

  const envConfig = require(`./webpack.${env}.js`)

  const config = merge(common, envConfig)

  return config
}
