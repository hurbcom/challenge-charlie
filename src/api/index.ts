import axios from 'axios';
import applicationConfig from './config';

const client = axios.create({
  headers: {
    'Content-Type': applicationConfig.api.headers.contentType,
  },
});

export default client;
