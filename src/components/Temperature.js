import { celsiusToFahrenheit } from "modules/celsiusToFahrenheit";
import PropTypes from "prop-types";
import create from "zustand";

const useTemperatureMode = create(() => ({
  temperatureMode: "C",
}));

export function Temperature({ celsius }) {
  const temperatureMode = useTemperatureMode((state) => state.temperatureMode);

  return (
    <span
      style={{ cursor: "pointer" }}
      onClick={() =>
        useTemperatureMode.setState({
          temperatureMode: temperatureMode === "C" ? "F" : "C",
        })
      }
    >
      {temperatureMode === "C"
        ? `${celsius}ºC`
        : `${celsiusToFahrenheit(celsius)}ºF`}
    </span>
  );
}

Temperature.propTypes = {
  celsius: PropTypes.number.isRequired,
};
