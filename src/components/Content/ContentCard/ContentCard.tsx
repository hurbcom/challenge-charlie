import React, { useEffect } from "react";
import { fetchWeather } from "../../../services/fetchService";
import { useStore } from "../../../store/store";
import Search from "../../Search/Search";
import Today from "../Today/Today";
import Tomorrow from "../Tomorrow/Tomorrow";
import Overmorrow from "../Overmorrow/Overmorrow";

const ContentCard = () => {
  const coords = useStore((state) => state.coords);
  const forecast = useStore((state) => state.forecast);
  const setForecast = useStore((state) => state.setForecast);

  const weatherEffect = () => {
    if (coords.latitude && !forecast.today?.temp) {
      fetchWeather(coords.latitude, coords.longitude).then((data) => {
        setForecast(data);
      });
    }
  };

  useEffect(weatherEffect, [coords]);

  return (
    <div className="flex flex-col mx-[30vw] items-center my-[5vh] rounded-xl drop-shadow-md">
      <Search />
      <Today />
      <Tomorrow />
      <Overmorrow />
    </div>
  );
};

export default ContentCard;
