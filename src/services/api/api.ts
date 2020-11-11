import axios from 'axios';
import useSWR from 'swr';

import { IAPI } from './interface';

export const get = ({ baseURL, url }: IAPI) =>
  axios
    .get(url, { baseURL })
    .then((resolve) => resolve?.data)
    .catch((err) => err);

/* eslint-disable  @typescript-eslint/no-explicit-any */
export function useFetch<Data = any, Error = any>({ baseURL, url }: IAPI) {
  const { data, error, isValidating } = useSWR<Data, Error>(
    url,
    async (url) => {
      const response = await axios.get(url, { baseURL });

      return response.data;
    }
  );

  return { data, error, isValidating };
}
