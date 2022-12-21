// This file can be replaced during build by using the `fileReplacements` array.
// When building for production, this file is replaced with `environment.prod.ts`.

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
