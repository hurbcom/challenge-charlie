export default interface GeoLocation {
  loading: boolean;
  latitude: number;
  longitude: number;
  locationName: string | undefined;
}

export interface GeoLocationInfoInterface {
  results: Array<{
    components: LocationDetails;
    geometry: {
      lat: number;
      lng: number;
    };
    formatted: string;
  }>;
}

export interface LocationDetails {
  city: string;
  state: string;
  town: string;
  county: string;
  country: string;
}
