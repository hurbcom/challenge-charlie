import React from "react";

import "components/WeatherNextDays/WeatherNextDays.scss";
import { WeatherForecast } from "interfaces/Weather";

type ownProps = {
  weather: WeatherForecast;
  day: number;
  color: string;
  isCelsius: boolean;
  toggleCelsius: Function;
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
          {`${props.weather.temperature} ${props.isCelsius ? "C" : "F"}`}
        </p>
      </div>
    </div>
  );
};

export default WeatherNextDays;
