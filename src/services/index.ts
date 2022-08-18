import axios from 'axios';
import applicationConfig from './config';
import getDynamicBackground from './getDynamicBackground';
import getLocation from './getLocation';

const client = axios.create({
  headers: {
    'Content-Type': applicationConfig.api.headers.contentType,
  },
});

export default { client, getDynamicBackground, getLocation };
