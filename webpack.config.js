const { resolve, join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';

console.log('ENVIRONMENT: ', process.env.NODE_ENV);
console.log('CHOKIDAR_USEPOLLING: ', !!process.env.CHOKIDAR_USEPOLLING);

const config = {
  mode: isProd ? 'production' : 'development',
  entry: {
    index: './src/index.tsx',
  },
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    plugins: [
      new TsconfigPathsPlugin({
        configFile: './tsconfig.json',
        logLevel: 'info',
        extensions: ['.ts', '.tsx'],
        mainFields: ['browser', 'main'],
      }),
    ],
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 100000,
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      inject: 'body',
    }),
    new ESLintPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx'],
    }),
  ],
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000,
  },
};

if (isProd) {
  config.optimization = {
    minimizer: [new TerserWebpackPlugin()],
  };
} else {
  config.devServer = {
    host: process.env.CHOKIDAR_USEPOLLING ? '0.0.0.0' : 'localhost',
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    stats: 'errors-only',
    overlay: true,
    contentBase: resolve(__dirname, './public'),
  };
}

module.exports = config;

/**
 * @see https://www.skcript.com/svr/using-webpack-with-react-typescript/
 * @see https://www.npmjs.com/package/tsconfig-paths-webpack-plugin
 * @see https://webpack.js.org/loaders/sass-loader/
 */
