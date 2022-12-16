// @ts-check

/**
 * @type {import('@nrwl/devkit').ModuleFederationConfig}
 **/
const moduleFederationConfig = {
  name: 'frontend-shell',
  remotes: ['frontend-mfes-weather-forecast', 'frontend-mfes-currency-exchange'],
};

module.exports = moduleFederationConfig;
