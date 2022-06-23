import axios from 'axios';
import { useState } from 'react';
import { useQuery } from 'react-query';

const baseUrl = 'https://www.bing.com';
const endpoint = '/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-US';

const getBackgroundUrl = setBackgroundUrl => () => {
  axios.get(endpoint).then(response => {
    setBackgroundUrl(`${baseUrl}${response.data.images[0].url}`);
  });
};

export const useBackground = () => {
  const [backgroundImage, setBackgroundUrl] = useState();

  const { isLoading, isSuccess, isError } = useQuery(
    'background',
    getBackgroundUrl(setBackgroundUrl),
  );

  return { backgroundImage, isLoading, isSuccess, isError };
};
