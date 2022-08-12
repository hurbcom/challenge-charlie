export interface GeocodingLocation {
  data: {
    results: [
      {
        components: {
          city: string;
          country: string;
          state: string;
          suburb: string;
          state_code: string;
          road: string;
        };
      },
    ];
  };
}

export interface GeolocationCoordinates {
  coords: {
    latitude: number | undefined;
    longitude: number | undefined;
  };
}
