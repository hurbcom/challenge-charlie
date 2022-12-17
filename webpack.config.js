const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = env => {
    const mode = env.development ? 'development' : 'production'
    return {
        mode,
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: {
            filename: '[name]-[chunkhash].js',
            path: path.resolve(__dirname, 'dist'),
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.css'],
        },
        module: {
            rules: [{
                test: /\.ts(x?)$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            }, {
                test: /\.css$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader',
                    options: {
                        modules: true
                    }
                }]
            }]
        },
        devServer: {
            static: {
                directory: path.join(__dirname, 'public'),

            },
            port: 3000,
            hot: true
        },
        plugins: [
            new CleanWebpackPlugin(),
            new HTMLWebpackPlugin({
                template: path.resolve(
                    __dirname,
                    'public',
                    'index.html'
                )
            })
        ],
        target: 'web',
    }
}
