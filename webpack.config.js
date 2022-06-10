const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const Dotenv = require('dotenv-webpack');

module.exports = env => {
    return {
        mode: env.file === 'prod' ? 'production' : 'development',
        devServer: {
            historyApiFallback: true,
            static: {
                directory: path.join(__dirname, "dist")
            },
            open: true,
            compress: true,
            hot: true,
            port: 3005,
        },
        entry: {
            main: path.resolve(__dirname, './src/index.js')
        },
        output: {
            path: path.resolve(__dirname, './dist'),
            filename: '[name].bundle.js',
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: 'Challenge Chalie - Lucas Monteiro',
                template: path.resolve(__dirname, './src/html/template.html'),
                filename: 'index.html',
            }),
            new CleanWebpackPlugin(),
            new webpack.HotModuleReplacementPlugin(),
            new Dotenv({
                path: path.resolve(__dirname, `src/environments/.env${env.file ? `.${env.file}` : ''}`)
            })
        ],
        module: {
            rules: [
                {
                    test: /\.js$|jsx/,
                    exclude: /node_modules/,
                    use: ['babel-loader'],
                },
                {
                    test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                    type: 'asset/resource',
                },
                {
                    test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                    type: 'asset/inline',
                },
                {
                    test: /\.(scss|css)$/,
                    use: ['style-loader', 'css-loader', 'sass-loader'],
                }
            ],
        },
        resolve:{
            extensions: ['.js', '.jsx']
        }

    }
}