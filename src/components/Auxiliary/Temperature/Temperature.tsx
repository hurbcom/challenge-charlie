import React from "react";
import { useStore } from "../../../store/store";
import { celsiusToFahrenheit } from "../../../utilities/tempConverter";

interface TemperatureProps {
  temp: number;
  style?: string;
}

interface SelectorInterface {
  [key: number]: () => JSX.Element;
}

const Temperature = ({ temp, style }: TemperatureProps) => {
  const scale = useStore((state) => state.temperatureScale);
  const setTemperatureScale = useStore((state) => state.setTemperatureScale);

  const tempSelector: SelectorInterface = {
    0() {
      return (
        <button
          title="Clique para mudar a unidade."
          onClick={setTemperatureScale}
          className={`${style} flex flex-row font-montserrat font-semibold text-dark leading-[0.73]`}
        >
          {temp}
          <p className="text-[40%]">°C</p>
        </button>
      );
    },
    1() {
      return (
        <button
          title="Clique para mudar a unidade."
          onClick={setTemperatureScale}
          className={`${style} flex flex-row font-montserrat font-semibold text-dark leading-[0.73]`}
        >
          {celsiusToFahrenheit(temp)}
          <p className="text-[40%]">°F</p>
        </button>
      );
    },
  };
  return <>{tempSelector[scale]()}</>;
};

export default Temperature;
