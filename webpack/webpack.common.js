/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { DefinePlugin } = require('webpack')
const dotenv = require('dotenv')

module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.tsx'),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '..', './src'),
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader' }],
      },
      {
        test: /\.(css|sass|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, '..', './dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, '..', './src/index.html'),
    }),
    new DefinePlugin({
      'process.env': JSON.stringify(dotenv.config().parsed),
    }),
  ],
}
