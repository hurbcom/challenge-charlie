const { ANALYZE } = process.env;

module.exports = {
  distDir: '.build',
  webpack: config => {
    if (ANALYZE) {
      const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'server',
          analyzerPort: 8888,
          openAnalyzer: true
        })
      )
    }
    return config;
  },
  env: {}
}