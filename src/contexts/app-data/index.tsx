import React, { createContext, ReactNode, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { useGeolocation } from '../../services/hooks/useGeolocation';
import { useTheme } from '../../services/hooks/useTheme/useTheme';
import { useWeather } from '../../services/hooks/useWeather';
import { defaultTheme, Theme } from '../../styles/theme';
import { IFormattedDailyWeather } from './interfaces';

interface Props {
  children: ReactNode;
}

interface ContextProps {
  userLocation?: string;
  dailyWeather?: IFormattedDailyWeather[];
  setDailyWeather: (data: IFormattedDailyWeather[]) => void;
}

export const AppDataContext = createContext<ContextProps>({} as ContextProps);

const AppDataProvider: React.FC<Props> = ({ children }) => {
  const [dailyWeather, setDailyWeather] = useState<IFormattedDailyWeather[]>();

  const { latitude, longitude, userLocation } = useGeolocation();

  const userDailyWeather = useWeather({ latitude, longitude }, setDailyWeather);

  const [theme, setTheme] = useState<Theme>(defaultTheme);
  useTheme({ temperature: userDailyWeather?.[0]?.temperature, setTheme });

  return (
    <AppDataContext.Provider value={{ userLocation, dailyWeather, setDailyWeather }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </AppDataContext.Provider>
  );
};

export default AppDataProvider;
