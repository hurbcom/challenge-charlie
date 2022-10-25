import { createContext, useState } from "react";

export const CustomerContext = createContext();

export const CustomerProvider = ({ children }) => {
  const [city, setCity] = useState();

  return (
    <CustomerContext.Provider value={{ city, setCity }}>
      {children}
    </CustomerContext.Provider>
  );
};
