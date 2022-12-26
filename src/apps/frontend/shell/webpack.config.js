// @ts-check
const { merge } = require('webpack-merge');
const { withModuleFederation } = require('@nrwl/react/module-federation');
const baseConfig = require('./module-federation.config');

const coreLibraries = new Set([
  'react',
  'react-dom',
  'react-router-dom',
  '@challenge-charlie/frontend/remote-mfe-loader',
]);

const defaultConfig = {
  ...baseConfig,
  shared: (libraryName, defaultConfig) => {
    if (coreLibraries.has(libraryName)) {
      return {
        ...defaultConfig,
        eager: true,
      };
    }

    // Returning false means the library is not shared.
    return false;
  }
};

/**
 * @type {import('@nrwl/devkit').ModuleFederationConfig}
 **/
if (process.env.CONTAINERIZED) {
  module.exports = async (config, context) => {
    const federatedModules = await withModuleFederation(defaultConfig);
  
    return merge(federatedModules(config), {
      watchOptions: {
        aggregateTimeout: 600, // delay before reloading
        poll: 1000, // enable polling since fsevents are not supported in docker
      },
      optimization: {
        runtimeChunk: 'single'
      }
    });
  };
} else {
  module.exports = withModuleFederation(defaultConfig);
}
