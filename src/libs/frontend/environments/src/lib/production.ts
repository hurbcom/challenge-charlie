import { Environment } from './contracts/environment';

export const environment: Environment = {
  production: true,
  bffs: {
    weatherForecast: {
      baseUrl: 'http://localhost:3331',
      endpoints: {
        locationDetailsByCoordinates: '/api/location/details',
        locationForecast: '/api/location/forecast',
      },
    },
  },
};
