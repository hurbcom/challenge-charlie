import React from "react";

import "components/WeatherNextDays/WeatherNextDays.scss";

const WeatherNextDays = () => {
  return (
    <div className="nextdays">
      <div className="nextdays__right">
        <p className="nextdays__right__day">Hoje</p>
        <p className="nextdays__right__temperature">35</p>
      </div>
    </div>
  );
};

export default WeatherNextDays;
