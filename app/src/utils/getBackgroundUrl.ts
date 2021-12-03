import axios from 'axios';

const getBackgroundUrl = (setBackgroundUrl: Function) => {
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
  const url = `${process.env.API_BASE_URL}/background`;
  axios.get(url, { headers }).then((res) => setBackgroundUrl(res.data));
};
export default getBackgroundUrl;
