import { IDailyWeatherData } from './interfaces';

const windDirections = ['N', 'NE', 'L', 'SE', 'S', 'SO', 'O', 'NO', 'N'];

export const formatData = (data: IDailyWeatherData) => {
  const currentDay = {
    day: 'hoje',
    weatherId: data.current.weather[0].id,
    iconId: data.current.weather[0].icon,
    temperature: data.current.temp.toFixed(0),
    description: data.current.weather[0].description,
    wind: {
      direction: windDirections[Math.floor(data.current.wind_deg / 45)],
      speed: (data.current.wind_speed * 3.6).toFixed(1),
    },
    humidity: data.current.humidity.toString(),
    pressure: data.current.pressure.toString(),
  };

  const dailyWeather = [currentDay];

  data.daily.forEach((curr, index) => {
    const formattedData = {
      day: index === 0 ? 'amanhã' : 'depois de amanhã',
      weatherId: curr.weather[0].id,
      iconId: curr.weather[0].icon,
      temperature: curr.temp.day.toFixed(0),
      description: curr.weather[0].description,
      wind: {
        direction: windDirections[Math.floor(curr.wind_deg / 45)],
        speed: (curr.wind_speed * 3.6).toFixed(1),
      },
      humidity: curr.humidity.toString(),
      pressure: curr.pressure.toString(),
    };

    dailyWeather.push(formattedData);
  });

  return { dailyWeather: dailyWeather.slice(0, 3) };
};
