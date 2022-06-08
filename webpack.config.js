const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
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
    ]
}