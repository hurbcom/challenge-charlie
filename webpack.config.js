/**
 *  Webpack main configuration.
 */

const { merge } = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

require('dotenv').config({ path: './.env' });

const NODE_ENV = process.env.NODE_ENV === 'production' ? 'production' : 'development';

const commonConfig = {
  mode: NODE_ENV,
  devtool: NODE_ENV === 'production' ? 'source-map' : 'eval',
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    alias: {
      '@': '/src',
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader',
        exclude: /(node_modules|public|dist)/,
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(mov|mp4|jpg|svg|gif|png|ico)$/,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|ttf|svg|eot)$/,
        type: 'asset/resource',
      },
      {
        test: /\.css$/,
        use: [ MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
    ],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'client/styles.css',
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
    usedExports: true,
  },
};

module.exports = [
  merge(commonConfig, {
    target: 'web',
    entry: {
      client: './src/pages/_app.tsx',
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name]/bundle.js',
    },
    devServer: {
      port: 3000,
      hot: true,
      proxy: {
        '/': {
          target: 'http://localhost:8000',
        },
      },
      historyApiFallback: true,
    },
  }),
  merge(commonConfig, {
    target: 'node',
    entry: [
      './src/main.tsx',
    ],
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'server.js',
    },
    externals: [nodeExternals()],
  }),
];
