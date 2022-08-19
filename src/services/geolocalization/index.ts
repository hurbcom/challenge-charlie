import client from '../../api';
import { TLocation } from '../location/types';

const API_BASE_URL = 'https://api.opencagedata.com/geocode/v1/json';

const getGeolocalization = async (
  latitude: TLocation['latitude'],
  longitude: TLocation['latitude'],
) => {
  try {
    const { data } = await client.get(API_BASE_URL, {
      params: {
        q: `${latitude}, ${longitude}`,
        key: process.env.OPEN_CAGE_API_KEY,
        language: 'pt_br',
        noAnnotations: 1,
        roadinfo: 1,
        pretty: 0,
        abbrv: 1,
      },
    });

    return data;
  } catch (error) {
    return error;
  }
};

export default { getGeolocalization };
