import path from 'path';
import merge from 'webpack-merge';
import { Configuration } from 'webpack';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

import common from './webpack.common';

const config: Configuration = merge(common, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[contenthash].js',
    publicPath: '',
  },
  plugins: [new CleanWebpackPlugin()],
});

export default config;
