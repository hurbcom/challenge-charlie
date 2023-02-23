export interface OpenCageAPIResponse {
  results: {
    components: {
      city: string;
      state: string;
    };
    geometry: {
      lat: number;
      lng: number;
    };
  }[];
}

export interface Location {
  city: string;
  state: string;
  latitude: number;
  longitude: number;
}
