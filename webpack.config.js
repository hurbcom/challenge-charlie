const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const nodeExternals = require('webpack-node-externals');

const path = require('path');

let serverConfig = {
  target: 'node',
  entry: './src/main.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.js',
  },
  externals: [nodeExternals()],
};

let clientConfig = {
  target: 'web',
  entry: {
    client: './src/pages/_app.tsx',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]/bundle.js',
  },
};

serverConfig = merge(common, serverConfig);
clientConfig = merge(common, clientConfig);

module.exports = [clientConfig, serverConfig];
