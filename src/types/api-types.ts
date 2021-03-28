interface IForecastBaseData {
  dt: number;
  sunrise: number;
  sunset: number;
  feels_like: {
    day: number;
    night: number;
    eve: number;
    morn: number;
  };
  pressure: number;
  humidity: number;
  dew_point: number;
  wind_speed: number;
  wind_deg: number;
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  clouds: number;
  pop: number;
  uvi: number;
}

export interface ICurrent extends IForecastBaseData {
  temp: number;
}

export interface IDaily extends IForecastBaseData {
  temp: {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
  };
}

export interface IForecast {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current: ICurrent;
  daily: IDaily[];
}

export interface IReverseLocation {
  documentation: string;
  features: [
    {
      geometry: {
        coordinates: [latitude: number, longitude: number];
        type: string;
      };
      properties: {
        annotations: {
          DMS: {
            lat: string;
            lng: string;
          };
          MGRS: string;
          Maidenhead: string;
          Mercator: {
            x: string;
            y: string;
          };
          OSM: {
            edit_url: string;
            note_url: string;
            url: string;
          };
          UN_M49: {
            regions: { [region: string]: string };
            statistical_groupings: string[];
          };
          callingcode: number;
          currency: {
            alternate_symbols: string[];
            decimal_mark: string;
            disambiguate_symbol: string;
            format: string;
            html_entity: string;
            iso_code: string;
            iso_numeric: string;
            name: string;
            smallest_denomination: number;
            subunit: string;
            subunit_to_unit: number;
            symbol: string;
            symbol_first: number;
            thousands_separator: string;
          };
          flag: string;
          geohash: string;
          qibla: number;
          roadinfo: {
            drive_on: string;
            road: string;
            speed_in: string;
          };
          sun: {
            rise: {
              apparent: number;
              astronomical: number;
              civil: number;
              nautical: number;
            };
            set: {
              apparent: number;
              astronomical: number;
              civil: number;
              nautical: number;
            };
          };
          timezone: {
            name: string;
            now_in_dst: number;
            offset_sec: number;
            offset_string: string;
            short_name: string;
          };
          what3words: {
            words: string;
          };
        };
        bounds: {
          northeast: {
            lat: number;
            lng: number;
          };
          southwest: {
            lat: number;
            lng: number;
          };
        };
        components: {
          "ISO_3166-1_alpha-2": string;
          "ISO_3166-1_alpha-3": string;
          _category: string;
          _type: string;
          city: string;
          continent: string;
          country: string;
          country_code: string;
          postcode: string;
          restaurant: string;
          road: string;
          state: string;
          suburb: string;
        };
        confidence: number;
        formatted: string;
      };
      type: string;
    }
  ];
  licenses: [
    {
      name: string;
      url: string;
    }
  ];
  rate: {
    limit: number;
    remaining: number;
    reset: number;
  };
  status: {
    code: number;
    message: string;
  };
  stay_informed: {
    blog: string;
    twitter: string;
  };
  thanks: string;
  timestamp: {
    created_http: string;
    created_unix: number;
  };
  total_results: number;
  type: string;
}
