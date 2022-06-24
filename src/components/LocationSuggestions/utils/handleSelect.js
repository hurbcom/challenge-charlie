import { getGeocode, getLatLng } from 'use-places-autocomplete';

export const handleSelect = async (setValue, clearSuggestions, address) => {
  setValue(address, false);
  clearSuggestions();

  const results = await getGeocode({ address });
  const { lat, lng } = await getLatLng(results[0]);

  // eslint-disable-next-line
  console.log('lat: ', lat, 'lng: ', lng);
};
