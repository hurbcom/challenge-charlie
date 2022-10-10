
export interface OpenWeatherReverseGeocodingResponse {
    name:    string;
    lat:     number;
    lon:     number;
    country: string;
    state:   string;
    local_names: any;
}

export type OpenWeatherReverseGeocodingResponses = OpenWeatherReverseGeocodingResponse[];