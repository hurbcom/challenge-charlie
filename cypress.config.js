const { defineConfig } = require("cypress");

module.exports = defineConfig({
  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },

  e2e: {
    baseUrl: 'http://localhost:3000',
    // supportFile: 'cypress/support/index.js',
    specPattern: '**/*.test.js',
    env: {
      CYPRESS_webpackConfig: '@next/react-scripts/config/webpack.config.js',
      baseUrl: 'http://localhost:3000',
      NODE_PATH: './'
    },
    include: [
      './src/**/*'
    ],
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

});
