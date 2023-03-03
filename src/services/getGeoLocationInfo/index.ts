import axios from 'axios';

import GeoLocation, { GeoLocationInfoInterface } from '@interfaces/GeoLocationInterface';

export async function getLocationNameByGeoCoordinates({
  latitude,
  longitude
}: Pick<GeoLocation, 'latitude' | 'longitude'>): Promise<GeoLocationInfoInterface> {
  try {
    const response = await axios.get<GeoLocationInfoInterface>(`${process.env.REACT_APP_OPENCAGE_API_URL}/json`, {
      params: {
        key: `${process.env.REACT_APP_OPENCAGE_API_KEY}`,
        q: `${latitude},${longitude}`,
        language: 'pt-BR'
      }
    });

    const geoLocationDetails = response.data;

    return geoLocationDetails;
  } catch (error) {
    throw new Error('Faleid to fetch locationName data from Open Cage api.');
  }
}

export async function getGeoCoordinatesByLocationName({
  locationName
}: Pick<GeoLocation, 'locationName'>): Promise<GeoLocationInfoInterface> {
  try {
    console.log('locationName - request', locationName);
    const response = await axios.get<GeoLocationInfoInterface>(`${process.env.REACT_APP_OPENCAGE_API_URL}/json`, {
      params: {
        key: `${process.env.REACT_APP_OPENCAGE_API_KEY}`,
        q: `${locationName}`,
        language: 'pt-BR'
      }
    });

    console.log('response', response);
    const geoLocationDetails = response.data;
    return geoLocationDetails;
  } catch (error) {
    console.log('error', error);
    throw new Error('Faleid to fetch Geo Coordinates data from Open Cage api.');
  }
}
