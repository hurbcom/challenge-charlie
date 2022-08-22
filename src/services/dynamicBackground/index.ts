import client from '../../api';

export const PROXY_BASE_URL = 'http://api.allorigins.win/get?url=';

export const API_BASE_URL =
  'https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR';

const getDynamicBackground = async () => {
  try {
    const { data } = await client.get(`${PROXY_BASE_URL}${encodeURIComponent(API_BASE_URL)}`);

    console.log(data.contents);

    return JSON.parse(data.contents);
  } catch (error) {
    return error;
  }
};

export default { getDynamicBackground };
