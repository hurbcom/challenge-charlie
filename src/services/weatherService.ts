import { IWeather, IWeatherRawData } from "./../interfaces/IWeather";
import axios from "axios";

export const getWeather = async (loc: string): Promise<IWeather> => {
  const { data }: { data: IWeatherRawData } = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${loc}` +
      `&APPID=${process.env.REACT_APP_OPEN_WEATHER_KEY}&units=metric&lang=pt_br&cnt=24`
  );

  return {
    temperature: data.main.temp,
    weather: data.weather[0].description,
    wind: data.wind.speed,
    humidity: data.main.humidity,
    pressure: data.main.pressure,
    weatherType: data.weather[0].main,
  };
};

export const getForecast = async (loc: string) => {
  const { data } = await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?q=${loc}` +
      `&APPID=${process.env.REACT_APP_OPEN_WEATHER_KEY}&units=metric&lang=pt_br&cnt=24`
  );

  console.log(data);
};
