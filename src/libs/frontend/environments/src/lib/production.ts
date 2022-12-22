import { Environment } from './contracts/environment';

export const environment: Environment = {
  production: true,
  bffs: {
    weatherForecast: {
      baseUrl: 'http://localhost:3331',
      endpoints: {
        locationDetailsByCoordinates: '/api/location/details/coordinates',
        locationDetailsByAddress: '/api/location/details/address',
        locationForecast: '/api/location/forecast',
      },
    },
    currencyExchange: {
      baseUrl: 'http://localhost:3332',
      endpoints: {
        getCurrencies: '/api/currencies',
        getQuotation: '/api/quotation',
      },
    },
    utility: {
      baseUrl: 'http://localhost:3333',
      endpoints: {
        background: '/api/background'
      }
    }
  },
};
