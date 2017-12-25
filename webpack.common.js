const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    ga: [
      './source/ga.js',
    ],
    app: [
      './source/index.js',
    ],
  },
  target: 'web',
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, 'build'),
  },
  module: {
    loaders: [
        {
          test: /\.html$/,
          include: path.join(__dirname, 'source'),
          loaders: ['html-loader'],
        },
        {
          test: /\.js$/,
          include: path.join(__dirname, 'source'),
          loaders: ['babel-loader'],
        },
        {
          test: /(\.css)$/,
          loaders: [
            'style-loader',
            // CSS Modules support
            // eslint-disable-next-line
            'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
          ],
        },
        {
          test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'file-loader'},
        {
          test: /\.(woff|woff2)$/,
          loader: 'url-loader?prefix=font/&limit=5000'},
        {
          test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
          // eslint-disable-next-line
          loader: 'url-loader?limit=10000&mimetype=application/octet-stream',
        },
        {
          test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url-loader?limit=10000&mimetype=image/svg+xml',
        },
        {
          test: /(\.scss)$/,
          loaders: ['style-loader', 'css-loader', 'sass-loader'],
        },
    ],
  },
  plugins: [
    new CleanWebpackPlugin([
      'build/',
    ]),
    new HtmlWebpackPlugin({
      title: 'Desafio Charlie',
      filename: 'index.html',
      template: 'source/index.html',
    }),
  ],
};
