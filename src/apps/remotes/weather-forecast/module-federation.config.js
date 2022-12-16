// @ts-check

/**
 * @type {import('@nrwl/devkit').ModuleFederationConfig}
 **/
const moduleFederationConfig = {
  name: 'remotes-weather-forecast',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

module.exports = moduleFederationConfig;
