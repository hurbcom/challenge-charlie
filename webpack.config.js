const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/js/index.js',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"},
        compress: true,
        host: '0.0.0.0',
        disableHostCheck: true,
        watchOptions: {
            poll: true},
        port: 3000,
      },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),

        },
    module: {
        rules: [{
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            
            
            {
                test: /\.css$/i,
                use: ['style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        })
    ]
}

function customizer(objValue, srcValue) {
    if (isArray(objValue)) {
      return objValue.concat(srcValue)
    }
    return undefined
  }
  


