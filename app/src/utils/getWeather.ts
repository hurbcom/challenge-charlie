import axios from 'axios';
import ForecastProps from './types';

interface Props {
  latitude: number;
  longitude: number;
  setWeathers: Function;
}

interface TempProps {
  C: number;
  F: number;
}

interface WeatherDataProps {
  label?: string;
  temp: TempProps;
  windSpeed?: number;
  humidity?: number;
  pressure?: number;
  description: string;
  icon: string;
}

const getIcon = (key: string) => {
  console.log('key', key);
  switch (key) {
    case '01d':
    case '01n':
      return { day: 'B', night: '1' };
    case '02d':
    case '02n':
      return { day: 'H', night: '3' };
    case '03d':
    case '03n':
      return { day: 'N', night: '5' };
    case '04d':
    case '04n':
      return { day: 'Y', night: '%' };
    case '09d':
      return { day: 'R', night: '8' };
    case '10d':
      return { day: 'Q', night: '7' };
    case '11d':
      return { day: '0', night: '&' };
    case '13d':
      return { day: 'G', night: 'G' };
    case '50d':
      return { day: 'M', night: 'M' };
    default:
      return { day: ')', night: ')' };
  }
};
const convertToF = (celsius: number) => {
  return (celsius * 9) / 5 + 32;
};
const labels = ['Hoje', 'Amanhã', 'Depois de Amanhã'];

const getWeather = ({ latitude, longitude, setWeathers }: Props) => {
  const urls = `${process.env.OPEN_WEATHER_URL}?lat=${latitude}&lon=${longitude}&appid=${process.env.OPEN_WEATHER_API_KEY}&exclude=minutely,hourly,alerts&lang=pt_BR&units=metric`;
  axios.get(urls).then((res) => {
    const data: ForecastProps = res.data;
    if (!data.daily) return setWeathers([]);
    const daily = data.daily
      .slice(0, 2)
      .map((d) => ({ ...d, temp: d.temp.day }));
    if (!data.current) return setWeathers([]);
    const weathers: WeatherDataProps[] = [data.current, ...daily].map(
      (d, i) => ({
        ...d,
        temp: { C: Math.floor(d.temp), F: convertToF(Math.floor(d.temp)) },
        humidity: Math.floor(d.humidity),
        windSpeed: d.wind_speed,
        description: d.weather[0].description,
        icon: getIcon(d.weather[0].icon).day,
      })
    );
    setWeathers(weathers);
  });
};
export default getWeather;
