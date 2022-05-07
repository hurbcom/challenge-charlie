const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
    mode: 'development',
    watchOptions: {
        aggregateTimeout: 500, // delay before reloading
        poll: 1000, // enable polling since fsevents are not supported in docker
    },
    devServer: {
        historyApiFallback: true,
        static: {
            directory: path.resolve(__dirname, './dist'),
        },
        open: true,
        compress: true,
        hot: true,
        port: process.env.PORT,
        proxy: {
            '/HPImageArchive': {
                target: process.env.REACT_APP_BING_URL,
                changeOrigin: true,
            },
            '/geocode/v1/json': {
                target: process.env.REACT_APP_LOCATION_URL,
                changeOrigin: true,
            },
            '/data/2.5/weather': {
                target: process.env.REACT_APP_WEATHER_URL,
                changeOrigin: true,
            },
            '/data/2.5/daily': {
                target: process.env.REACT_APP_WEATHER_URL,
                changeOrigin: true,
            },
        },
    },
});
