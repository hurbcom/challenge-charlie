// @ts-check
const { merge } = require('webpack-merge');
const { withModuleFederation } = require('@nrwl/react/module-federation');
const baseConfig = require('./module-federation.config');

const defaultConfig = {
  ...baseConfig,
};

/**
 * @type {import('@nrwl/devkit').ModuleFederationConfig}
 **/
// co6

if (process.env.CONTAINERIZED) {
  module.exports = async (config, context) => {
    const federatedModules = await withModuleFederation(defaultConfig);

    return merge(federatedModules(config), {
      watchOptions: {
        aggregateTimeout: 600, // delay before reloading
        poll: 1000, // enable polling since fsevents are not supported in docker
      },
    });
  };
} else {
  module.exports = withModuleFederation(defaultConfig);
}
