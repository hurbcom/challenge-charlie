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
  env: {
    bingUrl: process.env.BING_URL,
    openCageUrl: process.env.OPEN_CAGE_URL,
    openCageKey: process.env.OPEN_CAGE_KEY,
    openWeatherUrl: process.env.OPEN_WEATHER_URL,
    openWeatherKey: process.env.OPEN_WEATHER_KEY
  }
}