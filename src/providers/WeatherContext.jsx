import { createContext, useState } from "react";

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  return <WeatherContext.Provider>{children}</WeatherContext.Provider>;
};
