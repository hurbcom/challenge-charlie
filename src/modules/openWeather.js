const apiKey = "772920597e4ec8f00de8d376dfb3f094";

export async function getWeather(cityName) {
  const resp = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&lang=pt_br&appid=${apiKey}`
  );
  return await resp.json();
}

export async function getForecastWeather(cityName) {
  const resp = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&lang=pt_br&appid=${apiKey}`
  );
  return await resp.json();
}

if (process.env.NODE_ENV === "development") {
  window.getWeather = getWeather;
  window.getForecastWeather = getForecastWeather;
}
