import React, { ChangeEvent, useState } from "react";

import CompassIcon from "assets/compass.svg";
import "components/WeatherInput/WeatherInput.scss";
import useDebounce from "hooks/useDebounce";

type ownProps = {
  location: string;
  handleInputChange: Function;
};

const WeatherInput = (props: ownProps) => {
  const [displayValue, setDisplayValue] = useState(props.location ?? "");
  const debouncedChange = useDebounce(props.handleInputChange, 1000);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDisplayValue(event.target.value);
    debouncedChange(event.target.value);
  };

  return (
    <div className="input">
      <img src={CompassIcon} alt="icone-bussola" className="input__icon" />
      <input
        name="input"
        value={displayValue}
        onChange={handleChange}
        className="input__value"
        placeholder="Digite para buscar uma cidade"
      />
    </div>
  );
};

export default WeatherInput;
