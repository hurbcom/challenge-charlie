const path = require('path');
const webpack = require('webpack');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
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
    plugins: [new TsconfigPathsPlugin()],
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
      favicon: './src/assets/images/hurb.ico',
    }),
    new webpack.ProvidePlugin({
      React: 'react',
    }),
  ],
};
