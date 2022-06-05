import React from "react";

import CompassIcon from "assets/compass.svg";
import "components/WeatherInput/WeatherInput.scss";

type ownProps = {
  location: string;
};

const WeatherInput = (props: ownProps) => {
  return (
    <div className="input">
      <img src={CompassIcon} alt="icone-bussola" className="input__icon" />
      <input
        name="input-search"
        type="text"
        value={props.location ? props.location : ""}
        onChange={() => {}}
        className="input__value"
        placeholder="Digite para buscar uma cidade"
      />
    </div>
  );
};

export default WeatherInput;
