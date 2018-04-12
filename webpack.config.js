const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/public',
    filename: './app.js',
  },
  devServer: {
    port: 8000,
    contentBase: './public',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [new ExtractTextPlugin('app.css')],
  module: {
    exclude: ['node_modules'],
    loader: 'babel',
    test: /\.jsx?$/,
    loaders: [
      {
        test: /.js[x]?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
          plugins: ['transform-object-rest-spread'],
        },
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader',
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
      },
      {
        test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/,
        loader: 'file',
      },
    ],
  },
};
