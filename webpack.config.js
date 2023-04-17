const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
var webpack = require('webpack');

require('dotenv').config();

const path = require('path');


module.exports = () => {
    const prod = process.env.NODE_ENV === 'production';
    const urls = {
        bingWallpapper: process.env.BING_WALLPAPPER_API,
        openCage: process.env.REACT_APP_OPENCAGE_BASE_URL,
        weather: process.env.REACT_APP_WEATHER_API_BASE_URL
    }

    console.log(urls)
    return {
        entry: path.resolve(__dirname, './src/index.tsx'),
        devtool: prod ? undefined : 'inline-source-map',
        mode: prod ? 'production' : 'development',
        output: {
            filename: 'index_bundle.js',
            path: path.resolve(__dirname, './dist')
        },
        target: 'web',
        devServer: {
            host: '0.0.0.0',
            https: true,
            allowedHosts: [
                '.local'
            ],
            port: 3000,
            static: {
                directory: path.resolve(__dirname, './public')
            },
            open: true,
            hot: true,
            liveReload: true,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
            },
            proxy: {
                '/bing-wallpapper': {
                    target: urls.bingWallpapper,
                    secure: false,
                    changeOrigin: true
                }
            }
        },
        resolve: {
            extensions: ['.js', '.tsx', '.ts', '.json'],
            modules: [path.resolve(__dirname, "src"), "node_modules"],
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
            new webpack.DefinePlugin({
                "process.env": JSON.stringify(process.env),
            }),
            new MiniCssExtractPlugin()
        ]
    }
};