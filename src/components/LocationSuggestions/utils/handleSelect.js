import { getGeocode, getLatLng } from 'use-places-autocomplete';

export const handleSelect = async (
  address,
  setValue,
  clearSuggestions,
  setCoordinates,
) => {
  setValue(address, false);
  clearSuggestions();

  const results = await getGeocode({ address });
  const { lat, lng } = getLatLng(results[0]);

  setCoordinates({ lat: lat, lng: lng });
};
