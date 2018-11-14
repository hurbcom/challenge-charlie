
var path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        app: [
            './src/index.js'
        ],
    },
    target: 'web',
    output: {
        filename: '[name].[hash].bundle.js',
        path: path.join(__dirname, 'build'),
        publicPath: '/'
    },
    plugins: [
        new CleanWebpackPlugin([
            'build/',
        ]),
        new HtmlWebpackPlugin({
            title: 'Weather | SPA',
            filename: 'index.html',
            template: 'src/index.html',
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    module: {
        rules: [
            {
              test: /\.html$/,
              include: path.join(__dirname, 'source'),
              loaders: ['html-loader'],
            },
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /(node_modules|bower_components)/,
            },
            {
                test   : /(\.scss)$/,
                loaders: ['style-loader', 'css-loader', 'resolve-url-loader', 'sass-loader?sourceMap']
            },
            {
                test: /(\.css)$/,
                loaders: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpg|svg)$/,
                loader: 'url-loader?limit=8192'
            },
        ]
    },
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        dns: 'empty'
    }
}
