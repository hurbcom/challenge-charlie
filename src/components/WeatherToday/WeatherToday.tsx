import React from "react";

import "components/WeatherToday/WeatherToday.scss";
import { Weather } from "interfaces/Weather";
import { iconList } from "utils/iconList";

type ownProps = {
  weather: Weather;
  color: string;
  isCelsius: boolean;
  toggleCelsius: Function;
  location: string;
};

const WeatherToday = (props: ownProps) => {
  return (
    <>
      {props.location !== undefined ? (
        <div className="today" style={{ backgroundColor: props.color }}>
          <div className="today__featured">
            <h1 className="today__featured__title">
              Tempo agora em{" "}
              {props.location ? props.location.split(",")[0] : ""}
            </h1>
            <p className="today__featured__mood">{props.weather.mood}</p>
            <div className="today__featured__temperature">
              <img src={iconList[props.weather.icon]} alt="icon-sun" />
              <p
                onClick={() => {
                  props.toggleCelsius();
                }}
              >
                {`${
                  props.weather.temperature ? props.weather.temperature : 0
                } ${props.isCelsius ? "°C" : "°F"}`}
              </p>
            </div>
          </div>
          <div className="today__details">
            <div className="today__details__item">
              <p>Vento: </p>
              <p>{`${props.weather.windDirection} ${
                props.weather.windSpeed ?? 0
              }km/h`}</p>
            </div>
            <div className="today__details__item">
              <p>Humidade: </p>
              <p>{props.weather.humidity ?? 0}%</p>
            </div>
            <div className="today__details__item">
              <p>Pressão:</p>
              <p>{props.weather.pressure ?? 0}hPA</p>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="today-undefined"
          style={{ backgroundColor: props.color }}
        >
          <p>Desculpa, não encontramos resultados para a sua busca</p>
        </div>
      )}
    </>
  );
};

export default WeatherToday;
