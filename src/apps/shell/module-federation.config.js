// @ts-check

/**
 * @type {import('@nrwl/devkit').ModuleFederationConfig}
 **/
const moduleFederationConfig = {
  name: 'shell',
  remotes: ['remotes-weather-forecast', 'remotes-currency-exchange'],
};

module.exports = moduleFederationConfig;
