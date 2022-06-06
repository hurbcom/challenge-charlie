import React from "react";

import "components/WeatherNextDays/WeatherNextDays.scss";
import { WeatherForecast } from "interfaces/Weather";

type ownProps = {
  weather: WeatherForecast;
  day: number;
};

const WeatherNextDays = (props: ownProps) => {
  return (
    <div className="nextdays">
      <div className="nextdays__right">
        <p className="nextdays__right__day">
          {props.day === 0 ? "Amanhã" : "Depois de amanhã"}
        </p>
        <p className="nextdays__right__temperature">
          {props.weather.temperature}
        </p>
      </div>
    </div>
  );
};

export default WeatherNextDays;
