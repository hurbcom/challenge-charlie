export type WeatherContentPayload = {
  geolocation: {
    'ISO_3166-1_alpha-2': any;
    'ISO_3166-1_alpha-3': any;
    'ISO_3166-2': any;
    _category: string;
    _type: string;
    city: string;
    city_district: string;
    continent: string;
    country: string;
    country_code: string;
    county: string;
    municipality: string;
    postcode: string;
    region: string;
    road: string;
    road_type: string;
    state: string;
    state_code: string;
    state_district: string;
    suburb: string;
    formatted: string;
  };
  forecast: Array<{
    dayText: string;
    unixTime: number;
    date: string;
    temp: string;
    tempColor: string;
    temp_min: string;
    temp_max: string;
    feels_like: string;
    pressure: string;
    humidity: string;
    windSpeed: number;
    windDirection: string;
    windFull: string;
    icon: string;
    description: string;
  }>;
};

export type LocationResultsPayload = [
  {
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
      'ISO_3166-1_alpha-2': any;
      'ISO_3166-1_alpha-3': any;
      'ISO_3166-2': any;
      _category: string;
      _type: string;
      city: string;
      city_district: string;
      continent: string;
      country: string;
      country_code: string;
      county: string;
      municipality: string;
      postcode: string;
      region: string;
      road: string;
      road_type: string;
      state: string;
      state_code: string;
      state_district: string;
      suburb: string;
    };
    confidence: number;
    formatted: string;
    geometry: {
      lat: number;
      lng: number;
    };
  }
];
export type LocationResultsPayloadReduced = {
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
    'ISO_3166-1_alpha-2': any;
    'ISO_3166-1_alpha-3': any;
    'ISO_3166-2': any;
    _category: string;
    _type: string;
    city: string;
    city_district: string;
    continent: string;
    country: string;
    country_code: string;
    county: string;
    municipality: string;
    postcode: string;
    region: string;
    road: string;
    road_type: string;
    state: string;
    state_code: string;
    state_district: string;
    suburb: string;
  };
  confidence: number;
  formatted: string;
  geometry: {
    lat: number;
    lng: number;
  };
};
