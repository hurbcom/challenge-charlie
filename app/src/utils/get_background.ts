import axios from 'axios';

const { API_BASE_URL } = process.env;

const getBackgroundUrl = (setBackgroundUrl: Function) => {
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
  axios
    .get(API_BASE_URL + '/background', { headers })
    .then((res) => setBackgroundUrl(res.data));
};
export default getBackgroundUrl;
