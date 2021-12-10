var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var { EnvironmentPlugin } = require('webpack')

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { test: /\.(js)$/, use: 'babel-loader' },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'svg-url-loader',
                        options: {
                            limit: 10000,
                        },
                    },
                ],
            }
        ]
    },
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            name: 'index.html',
            inject: false,
            template: './public/index.html'
        }),
        new EnvironmentPlugin({
            OPENCAGE_KEY: 'c63386b4f77e46de817bdf94f552cddf',
            OPENWEATHER_KEY: '7ba73e0eb8efe773ed08bfd0627f07b8'
        })

    ]
}