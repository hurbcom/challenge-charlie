import { Environment } from '@challenge-charlie/frontend/environments';

export const environment: Environment = {
  production: false,
  bffs: {
    weatherForecast: {
      baseUrl: '',
      endpoints: {
        locationDetailsByCoordinates: '',
        locationDetailsByAddress: '',
        locationForecast: '',
      },
    },
    currencyExchange: {
      baseUrl: '',
      endpoints: {
        getCurrencies: '',
        getQuotation: '',
      },
    },
  },
};
