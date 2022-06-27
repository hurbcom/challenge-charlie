import { useEffect } from 'react';
import { defaultTheme, cold, normal, warm } from '../index';

export const useTheme = (temperature, theme, setTheme) => {
  let temperatureTheme;
  if (temperature >= 15 && temperature <= 35) {
    temperatureTheme = normal;
  } else if (temperature > 35) {
    temperatureTheme = warm;
  } else if (temperature < 15) {
    temperatureTheme = cold;
  } else {
    temperatureTheme = defaultTheme;
  }

  useEffect(() => {
    setTheme(theme);
  }, [temperature]);

  return { temperatureTheme };
};
