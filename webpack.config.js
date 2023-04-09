const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require('path');

const prod = process.env.NODE_ENV === 'production';

module.exports = {
    entry: './src/index.tsx',
    devtool: prod ? undefined : 'inline-source-map',
    mode: prod ? 'production' : 'development',
    output: {
        filename: 'index_bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    target: 'web',
    devServer: {
        port: 3000,
        static: {
            directory: path.resolve(__dirname, './public')
        },
        open: true,
        hot: true,
        liveReload: true
    },
    resolve: {
        extensions: ['.js', '.tsx', '.ts', '.json'],
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx|js)$/,
                exclude: /node_modules/,
                resolve: {
                    extensions: ['.ts', '.tsx', ".js", ".json"]
                },
                use: "ts-loader"
            }, {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public', 'index.html'),
        }),
        new MiniCssExtractPlugin()
    ]
};