const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  devServer: {
    contentBase: './dist',
    port: 3000,
  },
  mode: 'development',
  devtool: 'inline-source-map',
})
