import React from "react";

import WeatherInput from "components/WeatherInput/WeatherInput";
import WeatherToday from "components/WeatherToday/WeatherToday";
import "components/WeatherCard/WeatherCard.scss";
import WeatherNextDays from "components/WeatherNextDays/WeatherNextDays";

const WeatherCard = () => {
  return (
    <div className="card">
      <WeatherInput />
      <WeatherToday />
      <WeatherNextDays />
      <WeatherNextDays />
    </div>
  );
};

export default WeatherCard;
