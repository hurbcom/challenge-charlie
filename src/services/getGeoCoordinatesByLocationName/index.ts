import axios from 'axios';

import type GeoLocation from '@interfaces/GeoLocationInterface';

export interface LocationNameByGeoCoordinatesInterface {
  results: Array<{
    components: LocationDetails;
  }>;
}

export interface LocationDetails {
  city: string;
  state: string;
}

export default async function getLocationNameByGeoCoordinates({
  locationName
}: Pick<GeoLocation, 'locationName'>): Promise<LocationDetails> {
  try {
    const response = await axios.get<LocationNameByGeoCoordinatesInterface>(
      `${process.env.REACT_APP_OPENCAGE_API_URL}/json`,
      {
        params: {
          key: `${process.env.REACT_APP_OPENCAGE_API_KEY}`,
          q: `${locationName}`,
          language: 'pt-BR'
        }
      }
    );

    const geoLocationDetails = response.data.results[0].components;
    console.log(`getLocationNameByGeoCoordinates`, geoLocationDetails);
    return geoLocationDetails;
  } catch (error) {
    throw new Error('Faleid to fetch data from Open Cage api.');
  }
}
