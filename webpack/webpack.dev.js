/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, '..', 'public'),
    },
    compress: true,
    port: 3000,
    open: true,
  },
}
