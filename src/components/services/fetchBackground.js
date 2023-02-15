import Axios from 'axios';

async function fetchBackground () {
  const URL_BASE = process.env.REACT_APP_BING_URL;
  const COMPLETE_URL = process.env.REACT_APP_BING_COMPLETE_URL;

  const URL = `http://api.allorigins.win/get?url=${encodeURIComponent(String(COMPLETE_URL))}`;

  return await Axios.get(URL)
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

export default fetchBackground;
