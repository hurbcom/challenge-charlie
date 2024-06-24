import { merge } from 'webpack-merge';
import common from './webpack.common.config';
import webpack from 'webpack';
import 'webpack-dev-server'

const devConfig: webpack.Configuration = {
    mode: "development",
    devServer: {
        historyApiFallback: true,
        hot: true,
        host: '0.0.0.0'
    },
    devtool: 'inline-source-map',
    watchOptions: {
        poll: 1000,
        aggregateTimeout: 300
    },
    stats: 'minimal'
};

export default merge(common, devConfig);
