import axios, { AxiosError } from 'axios';
import * as Sentry from '@sentry/browser';
import applicationConfig from './config';

const client = axios.create({
  headers: {
    'Content-Type': applicationConfig.api.headers.contentType,
  },
});

client.interceptors.response.use(
  res => res,
  (error: AxiosError) => {
    Sentry.captureException({
      response: JSON.stringify(error.response),
      request: JSON.stringify(error.request),
    });
  },
);

export default client;
