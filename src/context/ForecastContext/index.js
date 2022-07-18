import React, { createContext, useContext, useEffect, useState } from "react";
import { getWeather } from "../../services/api";
import P from "prop-types";

export const ForecastContext = createContext();

export const ForecastProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [sucess, setSucess] = useState(false);
  const [currentPlace, setCurrentPlace] = useState("false");

  const getForecastByParams = async (params) => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await getWeather(params);
      const { coord, name } = data;
      localStorage.setItem("currentPlace", JSON.stringify({ coord, name }));
      setCurrentPlace({ coord, name });
      setSucess(true);
      setData({ ...data });
      setError(false);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setSucess(false);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const currentPlaceLocalStringify = localStorage.getItem("currentPlace");
    const currentPlaceLocal = JSON.parse(currentPlaceLocalStringify);
    if (currentPlaceLocal) {
      getForecastByParams({ q: currentPlaceLocal.name });
      setCurrentPlace(currentPlaceLocal);
    }
  }, []);

  return (
    <ForecastContext.Provider
      value={{
        isLoading,
        error,
        data,
        getForecastByParams,
        currentPlace,
        sucess,
      }}
    >
      {children}
    </ForecastContext.Provider>
  );
};

ForecastProvider.propTypes = {
  children: P.node,
};

export const useForecastContext = () => {
  return useContext(ForecastContext);
};
