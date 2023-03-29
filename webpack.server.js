const path = require('path');
const nodeExternals = require('webpack-node-externals');
const NODE_ENV = process.env.NODE_ENV === 'production' ? 'production' : 'development';

module.exports = {
  entry: './src/index.tsx',
  mode: NODE_ENV,
  devtool: 'inline-source-map',
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
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};