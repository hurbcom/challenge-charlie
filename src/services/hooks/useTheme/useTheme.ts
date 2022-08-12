import { useEffect } from 'react';
import { Theme } from '../../../styles/theme';
import { defaultTheme, cold, normal, warm } from '../../../styles/theme';

interface ThemeInput {
  temperature: string | undefined;
  setTheme: (theme: Theme) => void;
}

export const useTheme = ({ temperature, setTheme }: ThemeInput) => {
  let temperatureTheme: Theme;
  if (temperature) {
    const parsedTemperature = parseFloat(temperature);
    if (parsedTemperature >= 20 && parsedTemperature <= 35) {
      temperatureTheme = normal;
    } else if (parsedTemperature > 35) {
      temperatureTheme = warm;
    } else if (parsedTemperature < 20) {
      temperatureTheme = cold;
    }
  } else {
    temperatureTheme = defaultTheme;
  }

  useEffect(() => {
    setTheme(temperatureTheme);
  }, [temperature]);
};
