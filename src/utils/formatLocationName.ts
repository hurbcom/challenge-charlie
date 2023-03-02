import GeoLocation, { GeoLocationInfoInterface } from '@interfaces/GeoLocationInterface';

export default function useFormattedLocationName(data: GeoLocationInfoInterface): Pick<GeoLocation, 'locationName'> {
  const mainResult = data.results[0];

  console.log(`mainResult.formatted.length`, mainResult.formatted.length);
  console.log(`mainResult.formatted`, data.results);

  if (mainResult.formatted.length <= 35) {
    return { locationName: `${mainResult.formatted}` };
  }

  if (mainResult.components.state) {
    if (mainResult.components.city) {
      return { locationName: `${mainResult.components.city}, ${mainResult.components.state}` };
    }

    if (mainResult.components.town) {
      return {
        locationName: `${mainResult.components.town}, ${mainResult.components.state}, ${mainResult.components.country}`
      };
    }
  }

  if (mainResult.components.county) {
    if (mainResult.components.city) {
      return {
        locationName: `${mainResult.components.city}, ${mainResult.components.county}, ${mainResult.components.country}`
      };
    }

    if (mainResult.components.town) {
      return {
        locationName: `${mainResult.components.town}, ${mainResult.components.county}, ${mainResult.components.country}`
      };
    }
  }

  return { locationName: `${mainResult.formatted}` };
}
