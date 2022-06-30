import React from "react";
import Search from "../Search/Search";
import WeatherFuture from "../WeatherFuture/WeatherFuture";
import WeatherToday from "../WeatherToday/WeatherToday";

const ContentCard = () => {
  return (
    <>
      <Search />
      <WeatherToday />
      <WeatherFuture />
    </>
  );
};

export default ContentCard;
