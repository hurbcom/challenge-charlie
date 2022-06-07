import React from "react";

import "components/WeatherToday/WeatherToday.scss";
import { Weather } from "interfaces/Weather";
import { iconList } from "utils/iconList";

type ownProps = {
  weather: Weather;
  color: string;
  isCelsius: boolean;
  toggleCelsius: Function;
};

const WeatherToday = (props: ownProps) => {
  return (
    <div className="today" style={{ backgroundColor: props.color }}>
      <div className="today__left">
        <img
          className="today__left__icon"
          src={iconList[props.weather.icon]}
          alt="icon-sun"
        />
      </div>
      <div className="today__right">
        <p className="today__right__day">Hoje</p>
        <p
          className="today__right__temperature"
          onClick={() => {
            props.toggleCelsius();
          }}
        >
          {`${props.weather.temperature} ${props.isCelsius ? "C" : "F"}`}
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
