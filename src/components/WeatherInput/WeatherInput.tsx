import React from "react";

import CompassIcon from "assets/compass.svg";
import "components/WeatherInput/WeatherInput.scss";

const WeatherInput = () => {
  return (
    <div className="input">
      <img src={CompassIcon} alt="icone-bussola" className="input__icon" />

      <input
        name="input-search"
        type="text"
        value=""
        onChange={() => {}}
        className="input__value"
        placeholder="Digite para buscar uma cidade"
      />
    </div>
  );
};

export default WeatherInput;
