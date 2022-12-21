export type Environment = {
  bffs: {
    weatherForecast: {
      baseUrl: string;
      endpoints: {
        locationDetailsByCoordinates: string;
        locationDetailsByAddress: string;
        locationForecast: string;
      };
    };
    currencyExchange: {
      baseUrl: string;
      endpoints: {
        getCurrencies: string;
        getQuotation: string;
      };
    };
  };
  production: boolean;
};
