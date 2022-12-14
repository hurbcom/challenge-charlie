interface IGeolocationOptionsResponse {
  documentation: string;
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
  results: [
    {
      annotations: {
        DMS: {
          lat: string;
          lng: string;
        };
        FIPS: {
          county: string;
          state: string;
        };
        MGRS: string;
        Maidenhead: string;
        Mercator: {
          x: number;
          y: number;
        };
        OSM: {
          edit_url: string;
          note_url: string;
          url: string;
        };
        UN_M49: {
          regions: {
            AMERICAS: string;
            AMERICAS_NORTHERN: string;
            AMERICAS_SOUTHERN: string;
            CARIBBEAN: string;
            CENTRAL_AMERICA: string;
            NORTHERN_AMERICA: string;
            SOUTH_AMERICA: string;
            WORLD: string;
          };
          statistical_groupings: string[];
        };
        callingcode: number;
        currency: {
          alternate_symbols: string[];
          decimal_mark: string;
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
          offset_string: number;
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
        _category: string;
        _type: string;
        city: string;
        city_district: string;
        continent: string;
        country: string;
        country_code: string;
        county: string;
        postcode: string;
        state: string;
        state_code: string;
        suburb: string;
        town: string;
        village: string;
      };
      confidence: number;
      formatted: string;
      geometry: {
        lat: number;
        lng: number;
      };
    }
  ];
}

export default IGeolocationOptionsResponse;
