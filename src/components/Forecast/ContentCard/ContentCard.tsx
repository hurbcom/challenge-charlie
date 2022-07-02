import React from "react";
import { fetchWeather } from "../../../services/fetchService";
import Search from "../Search/Search";
import WeatherFuture from "../WeatherFuture/WeatherFuture";
import WeatherToday from "../WeatherToday/WeatherToday";
import { useStore } from "../../../store/store";

const ContentCard = () => {
const weather= useStore((state)=> state.)

  const weatherEffect = () => {
    fetchWeather();
  };

  return (
    <div className="my-[4%]">
      <Search />
      <WeatherToday />
      <WeatherFuture key={"tomorrow"} />
      <WeatherFuture key={"aftermorrow"} />
    </div>
  );
};

export default ContentCard;
