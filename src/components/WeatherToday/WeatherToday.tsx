import React from "react";

import "components/WeatherToday/WeatherToday.scss";
import SunIcon from "assets/sun.svg";
import { Weather } from "interfaces/Weather";

type ownProps = {
  weather: Weather;
  color: string;
};

const WeatherToday = (props: ownProps) => {
  return (
    <div className="today" style={{ backgroundColor: props.color }}>
      <div className="today__left">
        <img className="today__left__icon" src={SunIcon} alt="icon-sun"></img>
      </div>
      <div className="today__right">
        <p className="today__right__day">Hoje</p>
        <p className="today__right__temperature">
          {props.weather.temperature} C
        </p>
        <p className="today__right__mood">{props.weather.mood}</p>
        <p className="today__right__wind">{`Vento: ${props.weather.windDirection} ${props.weather.windSpeed}km/h`}</p>
        <p className="today__right__humidity">
          Humidade: {props.weather.humidity}
        </p>
        <p className="today__right__pressure">
          Pressão: {props.weather.pressure}
        </p>
      </div>
    </div>
  );
};

export default WeatherToday;
