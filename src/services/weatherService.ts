import axios from "axios";
import { IForecast, IForecastRaw } from "./../interfaces/IForecast";
import { IWeather, IWeatherRawData } from "./../interfaces/IWeather";

export const getWeather = async (loc: string): Promise<IWeather> => {
  const { data }: { data: IWeatherRawData } = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${loc}` +
      `&APPID=${process.env.REACT_APP_OPEN_WEATHER_KEY}&units=metric&lang=pt_br&cnt=24`
  );

  const forecast = await getForecast(data.coord.lat, data.coord.lon);

  return {
    temperature: data.main.temp,
    weather: data.weather[0].description,
    wind: data.wind.speed,
    humidity: data.main.humidity,
    pressure: data.main.pressure,
    weatherType: data.weather[0].main,
    forecast,
  };
};

const getForecast = async (latitude: number, longitude: number): Promise<IForecast[]> => {
  const { data }: { data: IForecastRaw } = await axios.get(
    `https://api.openweathermap.org/data/2.5/onecall?` +
      `lat=${latitude}&lon=${longitude}` +
      `&exclude=current,hourly,minutely,alerts&units=metric&lang=pt_br&appid=${process.env.REACT_APP_OPEN_WEATHER_KEY}`
  );

  return [
    { max: data.daily[1].temp.max, min: data.daily[1].temp.min, dayAfter: 1 },
    { max: data.daily[2].temp.max, min: data.daily[2].temp.min, dayAfter: 2 },
  ];
};
