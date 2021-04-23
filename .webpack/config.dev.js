const webpack = require('webpack')
const path = require('path')

module.exports = {
  mode: 'development',
  entry: ['./src/index.tsx'],
  output: {
    path: path.resolve('', 'dist'),
    filename: 'project-weather.js',
  },
  devServer: {
    compress: true,
    port: 8000,
    inline: true,
    host: '0.0.0.0',
    contentBase: path.resolve(__dirname, '../public'),
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: require.resolve('babel-loader'),
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    symlinks: false, // https://github.com/babel/babel-loader/issues/149
    alias: {
      react: path.resolve('./node_modules/react'),
      'react-dom': path.resolve('./node_modules/react-dom'),
    },
  },
}
