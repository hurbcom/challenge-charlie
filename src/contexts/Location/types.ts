export type HandleLocationReturn = {
  latitude: number;
  longitude: number;
};

export type Geolocalization = {
  city: string;
  country: string;
  postcode?: string;
  state?: string;
  suburb?: string;
};

export type LocationContextPayload = {
  // eslint-disable-next-line
  coords: GeolocationPosition['coords'] | null;
  geolocalization?: Geolocalization;
};
