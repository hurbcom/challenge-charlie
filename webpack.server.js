const path = require('path');
const nodeExternals = require('webpack-node-externals');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV === 'production' ? 'production' : 'development';

module.exports = {
  entry: './src/index.tsx',
  mode: NODE_ENV,
  target: 'node',
  externals: [nodeExternals()], // ignore modules in node_modules
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /(node_modules|public|dist)/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  },
  output: {
    filename: '[name].js',
    chunkFilename: "[name].chunk.js",
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [new ForkTsCheckerWebpackPlugin()],
  watchOptions: {
    ignored: /node_modules/,
  },
  optimization: {
    minimize: true,
    runtimeChunk: true,
    chunkIds: 'named'
  },
};