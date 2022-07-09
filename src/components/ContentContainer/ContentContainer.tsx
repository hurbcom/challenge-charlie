import React, { useEffect } from "react";
import { fetchWeather } from "../../services/fetchService";
import { useStore } from "../../store/store";
import Search from "../Search/Search";
import Today from "../Days/Today/Today";
import Tomorrow from "../Days/Tomorrow/Tomorrow";
import Overmorrow from "../Days/Overmorrow/Overmorrow";

const ContentContainer = () => {
  const coords = useStore((state) => state.coords);
  const forecast = useStore((state) => state.forecast);
  const setForecast = useStore((state) => state.setForecast);
  const setTheme = useStore((state) => state.setGlobalTheme);

  const weatherEffect = () => {
    if (coords.latitude && !forecast.today?.temp) {
      fetchWeather(coords.latitude, coords.longitude).then((data) => {
        setForecast(data);
        setTheme(data.today.temp);
      });
    }
  };

  useEffect(weatherEffect, [coords]);

  return (
    <div className="flex flex-col mx-[30%] items-center my-[5vh] rounded-xl drop-shadow-md">
      <Search />
      {forecast.today.temp ? <Today /> : null}
      {forecast.tomorrow.temp.max ? <Tomorrow /> : null}
      {forecast.afterTomorrow.temp.max ? <Overmorrow /> : null}
    </div>
  );
};

export default ContentContainer;
