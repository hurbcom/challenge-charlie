import { createContext, useState } from "react";

export const CustomerContext = createContext();

export const CustomerProvider = ({ children }) => {
  const [city, setCity] = useState();
  const [coordinate, setCoordinate] = useState([]);

  return (
    <CustomerContext.Provider
      value={{ city, setCity, coordinate, setCoordinate }}
    >
      {children}
    </CustomerContext.Provider>
  );
};
