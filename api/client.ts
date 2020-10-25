import AxiosRx from 'axios-observable';

export const Api = AxiosRx.create({
  timeout: 5000,
});
