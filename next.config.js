const withBundleAnalyzer = require('@zeit/next-bundle-analyzer');
const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');

const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

const nextConfig = {
  cssLoaderOptions: {
    url: false,
  },
  sassLoaderOptions: {
    includePaths: ['.'],
  },
  analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
  analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
  bundleAnalyzerConfig: {
    server: {
      analyzerMode: 'static',
      reportFilename: '../bundles/server.html',
    },
    browser: {
      analyzerMode: 'static',
      reportFilename: '../bundles/client.html',
    },
  },
  webpack(config) {
    config.resolve.alias['react'] = path.resolve('./node_modules/react');
    config.resolve.alias['react-dom'] = path.resolve('./node_modules/react-dom');
    config.resolve.alias['styled-components'] = path.resolve('./node_modules/styled-components');
    return config;
  },
  webpackDevMiddleware: config => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };

    return config;
  },
};

module.exports = withBundleAnalyzer(withSass(withCSS(nextConfig)));
