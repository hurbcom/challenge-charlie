const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
    mode: 'development',
    devServer: {
        historyApiFallback: true,
        static: {
            directory: path.resolve(__dirname, './dist'),
        },
        open: true,
        compress: true,
        hot: true,
        port: process.env.PORT,
        https: true,
        proxy: {
            '/HPImageArchive': {
                target: process.env.REACT_APP_BING_URL,
                changeOrigin: true,
            },
        },
    },
});
