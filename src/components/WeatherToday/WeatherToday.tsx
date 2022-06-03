import React from "react";

import "components/WeatherToday/WeatherToday.scss";
import SunIcon from "assets/sun.svg";

const WeatherToday = () => {
  return (
    <div className="today">
      <div className="today__left">
        <img className="today__left__icon" src={SunIcon} alt="icon-sun"></img>
      </div>
      <div className="today__right">
        <p className="today__right__day">Hoje</p>
        <p className="today__right__temperature">32</p>
        <p className="today__right__mood">Ensolarado</p>
        <p className="today__right__wind">Vento: </p>
        <p className="today__right__humidity">Humidade</p>
        <p className="today__right__pressure">Pressão</p>
      </div>
    </div>
  );
};

export default WeatherToday;
