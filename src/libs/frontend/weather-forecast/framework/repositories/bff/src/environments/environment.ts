import { Environment } from 'src/libs/frontend/shared/environments/src';

export const environment: Environment = {
  production: false,
  bffs: {
    weatherForecast: {
      baseUrl: '',
      endpoints: {
        locationDetails: '',
        locationForecast: ''
      },
    },
  },
};
