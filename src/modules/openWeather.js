import axios from "axios";

const apiKey = "772920597e4ec8f00de8d376dfb3f094";

export async function getWeather(cityName) {
  return await axios(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&lang=pt_br&appid=${apiKey}`
  );
}

export async function getForecastWeather(cityName) {
  return await axios(
    `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&lang=pt_br&appid=${apiKey}`
  );
}

export function openWeather(cityName) {
  return Promise.all([getWeather(cityName), getForecastWeather(cityName)]);
}

if (process.env.NODE_ENV === "development") {
  window.getWeather = getWeather;
  window.getForecastWeather = getForecastWeather;
  window.openWeather = openWeather;
}
