import axios from 'axios';
import applicationConfig from './config';
import getDynamicBackground from './getDynamicBackground';
import getLocation from './getLocation';
import getGeolocalization from './getGeolocalization';

const client = axios.create({
  headers: {
    'Content-Type': applicationConfig.api.headers.contentType,
  },
});

export default {
  getDynamicBackground,
  getGeolocalization,
  getLocation,
  client,
};
