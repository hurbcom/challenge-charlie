const path = require('path');
const paths = require('./paths');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [paths.public + '/index.js'],
  resolve: {
    extensions: ['.js']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true
        },
        exclude: /dist/
      },
      { test: /\.(js)$/, use: 'babel-loader' },
      /**
       * Styles
       *
       * Inject CSS into the head with source maps.
       */
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { sourceMap: true, importLoaders: 1 }
          },
          { loader: 'postcss-loader', options: { sourceMap: true } }
        ]
      }
    ]
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    })
  ]
};
