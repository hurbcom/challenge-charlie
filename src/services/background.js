import axios from 'axios';

export const getBackgroundImage = async setBackgroundImage => {
  const baseUrl = `https://www.bing.com`;
  const getImage = await axios.get(
    '/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-US',
  );

  setBackgroundImage(`${baseUrl}${getImage.data.images[0].url}`);
};
