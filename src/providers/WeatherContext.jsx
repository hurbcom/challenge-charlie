import { createContext, useState } from "react";

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [currentCity, setCurrentCity] = useState();

  return <WeatherContext.Provider>{children}</WeatherContext.Provider>;
};
