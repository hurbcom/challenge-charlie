export type HandleLocationReturn = {
  latitude: number;
  longitude: number;
};

export type LocationContextPayload = {
  // eslint-disable-next-line
  coords: GeolocationPosition['coords'] | null;
};
