import React from 'react';

export const TemperatureContext = React.createContext();

export const TemperatureStore = ({ children }) => {
  const [isFarenheit, setIsFarenheit] = React.useState(false);

  return (
    <TemperatureContext.Provider value={{ isFarenheit, setIsFarenheit }}>
      {children}
    </TemperatureContext.Provider>
  );
};
