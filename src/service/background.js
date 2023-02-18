import axios from 'axios';

export const getBackground = () => {
  const URL_BASE =  process.env.REACT_APP_BACKGROUND_BASE_URL;
  const COMPLETE_URL =  process.env.REACT_APP_BACKGROUND_COMPLETE_URL;

  const URL = `${ process.env.REACT_APP_BACKGROUND_URL}${encodeURIComponent(String(COMPLETE_URL))}`;

  return axios.get(URL)
  .then(response => {
    const data = JSON.parse(response.data.contents)
    const imagePath = data.images[0].url;
    return URL_BASE + imagePath;
  })
  .catch(err => {
    console.log(err);
    return [];
  });
}