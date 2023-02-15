import Axios from 'axios';

async function fetchCity (latitude, longitude) {
  const APP_OPEN_CAGE_KEY = 'c63386b4f77e46de817bdf94f552cddf';

  const OPEN_WEATHER_URL = `https://api.opencagedata.com/geocode/v1/json?q=${latitude},${longitude}&key=${APP_OPEN_CAGE_KEY}&language=en`;

  return await Axios.get(OPEN_WEATHER_URL)
  .then(response => {
    return response;
  })
  .catch(err => {
    console.log(err);
  }); }

export default fetchCity;
