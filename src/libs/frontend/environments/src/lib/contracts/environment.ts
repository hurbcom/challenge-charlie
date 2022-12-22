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
    utility: {
      baseUrl: string;
      endpoints: {
        background: string;
      }
    }
  };
  production: boolean;
};

export const defaultValue: Environment = {
  bffs: {
    weatherForecast: {
      baseUrl: "",
      endpoints: {
        locationDetailsByCoordinates: "",
        locationDetailsByAddress: "",
        locationForecast: ""
      }
    },
    currencyExchange: {
      baseUrl: "",
      endpoints: {
        getCurrencies: "",
        getQuotation: ""
      }
    },
    utility: {
      baseUrl: "",
      endpoints: {
        background: ""
      }
    }
  },
  production: false
}
