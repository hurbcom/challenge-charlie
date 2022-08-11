import { useEffect } from 'react';
import { Theme } from '../../../styles/theme';
import { defaultTheme, cold, normal, warm } from '../../../styles/theme';

interface ThemeInput {
  temperature: number;
  setTheme: (theme: Theme) => void;
}

export const useTheme = ({ temperature, setTheme }: ThemeInput) => {
  let temperatureTheme: Theme;
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
    setTheme(temperatureTheme);
  }, [temperature]);
};
