// Flow
import axios from 'axios';

const image =
  'https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR';
const cors = 'https://cors-anywhere.herokuapp.com/';

const api = axios.create({
  baseURL: `${cors}${image}`,
});

export function getBackground() {
  const request = api.get('/').then(({ data }) => {
    const bingUrl = 'https://www.bing.com/';
    return bingUrl + data.images[0].url;
  });
  return {
    type: 'BACKGROUND_FETCHED',
    payload: request,
  };
}
