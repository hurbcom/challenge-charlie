import { GeocodingLocation } from './interfaces';

export const formatUserLocation = (data: GeocodingLocation) => {
  let userLocation;
  const suburb = data?.data.results[0].components.suburb;
  const city = data?.data.results[0].components.city;
  const state = data?.data.results[0].components.state;
  const country = data?.data.results[0].components.country;

  if (suburb) {
    userLocation = suburb && city ? `${suburb}, ${city}` : '';
  } else {
    userLocation = state && country ? `${state}, ${country}` : '';
  }

  return { userLocation };
};
