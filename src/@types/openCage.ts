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

export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface Location extends Coordinates {
  city: string;
  state: string;
}
