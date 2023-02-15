import Axios from 'axios';

async function fetchBackground () {
  const URL_BASE = 'https://www.bing.com/';
  const COMPLETE_URL = 'https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR';

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
