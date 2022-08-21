import client from '../../api';

export const PROXY_BASE_URL = 'https://thingproxy.freeboard.io/fetch';

export const API_BASE_URL = 'https://www.bing.com/HPImageArchive.aspx';

const getDynamicBackground = async () => {
  try {
    const { data } = await client.get(`${PROXY_BASE_URL}/${API_BASE_URL}`, {
      params: {
        format: 'js',
        mkt: 'pt-br',
        idx: 0,
        n: 1,
      },
    });

    return data;
  } catch (error) {
    return error;
  }
};

export default { getDynamicBackground };
