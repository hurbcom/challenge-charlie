import axios from 'axios';
import type GeoLocation from '../../interfaces/GeoLocationInterface';

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
  latitude,
  longitude,
}: Omit<GeoLocation, 'locationName'>): Promise<LocationDetails> {
  try {
    const response = await axios.get<LocationNameByGeoCoordinatesInterface>(
      `https://api.opencagedata.com/geocode/v1/json`,
      {
        params: {
          key: 'dbc0e41288af4c2987cd5c5e5f658f55',
          q: `${latitude},${longitude}`,
          language: 'pt-BR',
        },
      },
    );

    const geoLocationDetails = response.data.results[0].components;
    console.log(`getLocationNameByGeoCoordinates`, geoLocationDetails);
    return geoLocationDetails;
  } catch (error) {
    throw new Error('Faleid fetch background from api.');
  }
}
