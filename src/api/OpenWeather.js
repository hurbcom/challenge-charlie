import axios from 'axios';

export const getWeatherByLatLong = (lat, long) => {
  return axios.create({
    baseURL: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=772920597e4ec8f00de8d376dfb3f094&units=metric&lang=pt_br`
  });
};

export const getForecastNextDaysByLatLong = (lat, long) => {
  return axios.create({
    baseURL: `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=772920597e4ec8f00de8d376dfb3f094&units=metric&lang=pt_br`
  });
};
