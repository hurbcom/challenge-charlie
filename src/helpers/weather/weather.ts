import { ILocationName, IWeatherColor, IWeatherIcon } from './interface';

export const getWeatherColor = ({ day, tempToday }: IWeatherColor): string => {
  switch (day) {
    case 'Hoje': {
      switch (true) {
        case !tempToday: {
          return '#616161f2';
        }
        case tempToday < 15: {
          return '#1858b5f2';
        }
        case tempToday > 35: {
          return '#f95b3ff2';
        }
        default: {
          return '#ffbf38f2';
        }
      }
    }
    case 'Amanhã': {
      switch (true) {
        case !tempToday: {
          return '#575757f5';
        }
        case tempToday < 15: {
          return '#154fa2f5';
        }
        case tempToday > 35: {
          return '#e05138f5';
        }
        default: {
          return '#e5ab32f5';
        }
      }
    }
    default: {
      switch (true) {
        case !tempToday: {
          return '#4d4d4dfa';
        }
        case tempToday < 15: {
          return '#134690fa';
        }
        case tempToday > 35: {
          return '#c74832fa';
        }
        default: {
          return '#cc982cfa';
        }
      }
    }
  }
};

export const getWeatherIcon = ({ sunset, weatherId }: IWeatherIcon): string => {
  const nowDate = new Date();
  const sunsetDate = new Date(sunset * 1000);

  if (nowDate.getHours() >= sunsetDate.getHours()) {
    return `wi wi-owm-night-${weatherId}`;
  } else {
    return `wi wi-owm-day-${weatherId}`;
  }
};

export const formatCelsiusToFahrenheit = (temp: number): number => {
  return (temp * 9) / 5 + 32;
};

export const formatDegreesToDirection = (degrees: number): string => {
  const directions = ['N', 'NE', 'L', 'SE', 'S', 'SO', 'O', 'NO', 'N'];
  const val = Math.floor(degrees / 45 + 0.5);
  return directions[val % 8];
};

export const formatLocationName = ({
  city,
  country,
  formatted,
  state
}: ILocationName) => {
  return city && state ? `${city}, ${state}, ${country}` : formatted;
};
