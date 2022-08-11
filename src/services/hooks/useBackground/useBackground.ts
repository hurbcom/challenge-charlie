import axios from 'axios';
import { useEffect, useState } from 'react';

export const CORS_URL = 'https://thingproxy.freeboard.io/fetch/';

export const useBackground = () => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    getImageOfTheDay().then(url => setImageUrl(url));
  }, []);

  return { imageUrl };
};

const getImageOfTheDay = async () => {
  const baseUrl = 'https://www.bing.com';
  const endpoint = '/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-US';

  const { data } = await axios.get(`${CORS_URL}${baseUrl}${endpoint}`);

  const dailyImgUrl = `${baseUrl}${data.images[0].url}`;
  return dailyImgUrl;
};
