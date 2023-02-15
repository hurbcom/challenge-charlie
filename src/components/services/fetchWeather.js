import Axios from 'axios';

const APP_OPEN_WEATHER_KEY = '772920597e4ec8f00de8d376dfb3f094';
async function fetchTodayWeather (city) {

  const OPEN_WEATHER_URL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${APP_OPEN_WEATHER_KEY}&lang=pt_br&units=metric`;

  return await Axios.get(OPEN_WEATHER_URL)
  .then(response => {
    return response;
  })
  .catch(err => {
    console.log(err);
  });
}

async function fetchNextDaysWeather (city) {

  const OPEN_WEATHER_URL = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${APP_OPEN_WEATHER_KEY}&lang=pt_br&units=metric`;

  return await Axios.get(OPEN_WEATHER_URL)
  .then(response => {
    return response;
  })
  .catch(err => {
    console.log(err);
  });
}

export {
  fetchTodayWeather,
  fetchNextDaysWeather
}
