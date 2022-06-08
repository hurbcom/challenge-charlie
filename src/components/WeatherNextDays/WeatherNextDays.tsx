import React from "react";

import "components/WeatherNextDays/WeatherNextDays.scss";
import { WeatherForecast } from "interfaces/Weather";

type ownProps = {
  weather: WeatherForecast;
  day: number;
  color: string;
  isCelsius: boolean;
  toggleCelsius: Function;
  location: string;
};

const WeatherNextDays = (props: ownProps) => {
  return (
    <div className="nextdays" style={{ backgroundColor: props.color }}>
      <div className="nextdays__wrapper">
        <p>{props.day === 0 ? "Amanhã" : "Depois de amanhã"}</p>
        <p
          className="nextdays__wrapper__temperature"
          onClick={() => {
            props.toggleCelsius();
          }}
        >
          {`${props.location !== undefined ? props.weather.temperature : 0} ${
            props.isCelsius ? "°C" : "°F"
          }`}
        </p>
      </div>
    </div>
  );
};

export default WeatherNextDays;
