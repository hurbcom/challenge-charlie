import { createContext, useState } from "react";

export const CustomerContext = createContext();

export const CustomerProvider = ({ children }) => {
  const [city, setCity] = useState();
  const [coordinate, setCoordinate] = useState([]);
  const [fahrenheit, setFahrenheit] = useState(false);

  return (
    <CustomerContext.Provider
      value={{
        city,
        setCity,
        coordinate,
        setCoordinate,
        fahrenheit,
        setFahrenheit,
      }}
    >
      {children}
    </CustomerContext.Provider>
  );
};
