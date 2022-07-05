import React, { useEffect } from "react";
import { fetchWeather } from "../../../services/fetchService";
import { useStore } from "../../../store/store";
import LocationSearch from "../LocationSearch/LocationSearch";
import WeatherFuture from "../WeatherFuture/WeatherFuture";
import WeatherToday from "../WeatherToday/WeatherToday";

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
    <div className="flex flex-col bg-white mx-[30vw] items-center my-[5vh]">
      <LocationSearch />
      <WeatherToday />
      <WeatherFuture key={"tomorrow"} />
      <WeatherFuture key={"aftertomorrow"} />
    </div>
  );
};

export default ContentCard;
