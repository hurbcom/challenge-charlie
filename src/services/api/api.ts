import axios from 'axios';

import { IAPI } from './interface';

export const get = ({ baseUrl, url }: IAPI) =>
  axios
    .get(url, { baseURL: baseUrl })
    .then((resolve) => resolve?.data)
    .catch((err) => err);
