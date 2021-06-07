const { merge } = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    port: 3000,
    hotOnly: true,
  },
  optimization: {
    runtimeChunk: 'single',
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
});
