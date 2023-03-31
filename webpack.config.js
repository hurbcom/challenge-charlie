const path = require('path');
const nodeExternals = require('webpack-node-externals');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const webpack = require('webpack');

require('dotenv').config({ path: './.env' });

const NODE_ENV =
  process.env.NODE_ENV === 'production' ? 'production' : 'development';

module.exports = [
  {
    mode: NODE_ENV,
    target: 'web',
    entry: { client: './src/pages/_document.tsx' },
    output: {
      filename: '[name]/bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    devtool: 'inline-source-map',
    resolve: {
      extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
      alias: {
        '@': '../',
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
          options: {
            minimize: true,
          },
        },
        {
          test: /\.(mov|mp4|jpg|svg|gif|png|ico)$/,
          loader: 'file-loader',
        },
        {
          test: /\.(woff|woff2|ttf|svg|eot)$/,
          loader: 'file-loader',
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: path.resolve(__dirname, 'dist/client/index.html'),
        template: 'src/public/template.html',
        minify: true
      }),
      new MiniCssExtractPlugin({
        filename: 'styles.css',
      }),
      new ForkTsCheckerWebpackPlugin(),
      new webpack.HotModuleReplacementPlugin(),
    ],
    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
    },
  },
  {
    mode: NODE_ENV,
    target: 'node',
    entry: './src/main.tsx',
    externals: [nodeExternals()], // ignore modules in node_modules
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          use: 'ts-loader',
          exclude: /(node_modules|public|dist)/,
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
      alias: {
        '@': '../',
      },
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'server.js',
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'styles.css',
      }),
      new ForkTsCheckerWebpackPlugin(),
    ],
    watchOptions: {
      ignored: /node_modules/,
    },
    optimization: {
      minimize: true,
    },
  },
];
