const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
      },
      {
        test: /\.svg$/,
        type: 'asset/inline',
        use: 'svgo-loader',
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '.',
    filename: '[name].bundle.js',
    clean: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
  },
  experiments: {
    asset: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
      title: 'Hurb Challenge :)',
      meta: { description: 'Hurb Challenge - Jonas Emanuel' },
    }),
    new webpack.ProvidePlugin({
      React: 'react',
    }),
  ],
};
