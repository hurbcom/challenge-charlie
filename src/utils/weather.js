import { getThemeByTemp } from './weatherTheme';
import ClearIcon from '../../assets/icons/weather/clear.svg';
import ThunderstormIcon from '../../assets/icons/weather/thunderstorm.svg';
import SnowIcon from '../../assets/icons/weather/snow.svg';
import CloudsIcon from '../../assets/icons/weather/clouds.svg';
import DrizzleIcon from '../../assets/icons/weather/drizzle.svg';
import MistIcon from '../../assets/icons/weather/mist.svg';
import RainIcon from '../../assets/icons/weather/rain.svg';


const weathers = {
  thunderstorm: {
    label: 'Tempestade',
    icon: ThunderstormIcon
  },
  clear: {
    label: 'Ensolarado',
    icon: ClearIcon
  },
  drizzle: {
    label: 'Chuvisco',
    icon: DrizzleIcon
  },
  clouds: {
    label: 'Nuvens',
    icon: CloudsIcon
  },
  snow: {
    label: 'Neve',
    icon: SnowIcon
  },
  mist: {
    label: 'Nevoeiro',
    icon: MistIcon
  },
  rain: {
    label: 'Chuva',
    icon: RainIcon
  }
};


const kelvinToCelsius = kelvin => kelvin - 273.15;
const kelvinToFahrenheit = kelvin => (kelvin - 273.15) * 9/5 + 32;

const getWeatherIcon = weather => {
  if(!weather) return undefined;
  weather = weathers[weather.toLowerCase()];
  if(!weather) return undefined;
  return weather.icon;
};

const getWeatherLabel = weather => {
  if(!weather) return undefined;
  weather = weathers[weather.toLowerCase()];
  if(!weather) return undefined;
  return weather.label;
};

const getWindDegreesText = deg => {
  var directions = [
    'N',
    'NE',
    'L',
    'SE',
    'S',
    'SO',
    'O',
    'NO'
  ];
  const index = Math.round(((deg %= 360) < 0 ? deg + 360 : deg) / 45) % 8;
  return directions[index] || '-';
};

export default {
  kelvinToCelsius, 
  kelvinToFahrenheit,
  getWeatherLabel,
  getWindDegreesText,
  getWeatherIcon,
  getThemeByTemp
}