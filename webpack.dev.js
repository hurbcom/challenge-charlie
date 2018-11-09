const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        historyApiFallback: true,
        contentBase: '/build',
        hot: true,
        inline: true,
        port: 3000,
    },
});
