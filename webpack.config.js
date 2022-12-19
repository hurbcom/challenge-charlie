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
            extensions: ['.ts', '.tsx', '.js', '.jsx'],
        },
        module: {
            rules: [
                {
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                    test: /\.ts$/
                },
                {
                    test: /\.css$/,
                    use: [
                        'style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: false,
                            },
                        },
                    ]
                },
                {
                    test: /\.ts(x?)$/,
                    loader: 'ts-loader',
                    exclude: /node_modules/
                }

            ]
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
