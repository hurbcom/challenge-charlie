import axios from "axios";
const API_KEY = "772920597e4ec8f00de8d376dfb3f094";
export const OpenWeatherMetricAPI = (lat, long) => {
  return axios.create({
    baseURL: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric&lang=pt_br`,
  });
};

export const OpenWeatherCityApi = (city) => {
  return axios.create({
    baseURL: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=pt_br`,
  });
};

export const OpenWeatherGeoApi = (city) => {
  return axios.create({
    baseURL: `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${API_KEY}&units=metric&lang=pt_br`,
  });
};

export const OpenWeatherForecastApi = (lat, long) => {
  return axios.create({
    baseURL: `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric&lang=pt_br`,
  });
};
