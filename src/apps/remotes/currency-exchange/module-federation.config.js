// @ts-check

/**
 * @type {import('@nrwl/devkit').ModuleFederationConfig}
 **/
const moduleFederationConfig = {
  name: 'remotes-currency-exchange',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

module.exports = moduleFederationConfig;
