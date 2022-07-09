import React from "react";
import { useStore } from "../../../store/store";
import Icon from "../../Auxiliary/Icons/IconRenderer/Icon";
import Temperature from "../../Auxiliary/Temperature/Temperature";

const Overmorrow = () => {
  const theme = useStore((state) => state.globaltheme);
  const forecast = useStore((state) => state.forecast.afterTomorrow);
  return (
    <div
      className={`bg-${theme}-300 w-full h-[15vh] rounded-b-xl flex flex-row-reverse items-center`}
    >
      <Icon code={forecast.weather.icon} style="fill-dark w-[3rem] mr-6"></Icon>
      <div className="flex flex-row mx-5">
        <Temperature
          key="min"
          temp={forecast.temp.min}
          style="text-[2rem] w-6 mr-8"
        ></Temperature>
        <svg viewBox="0 0 1792 1792" className="w-4">
          <path
            className="fill-dark"
            d="M1604.2 132.9 896 1659 187.8 132.9 896 506.4l708.2-373.5z"
          />
        </svg>
      </div>
      <div className="flex flex-row mx-5">
        <svg viewBox="0 0 1792 1792" className="w-4 mx-1">
          <path
            className="fill-dark"
            d="M187.8 1659 896 132.9 1604.2 1659 896 1285.5 187.8 1659z"
          />
        </svg>
        <Temperature
          key="max"
          temp={forecast.temp.max}
          style="text-[2rem] w-6"
        ></Temperature>
      </div>

      <h1 className="left-4 font-montserrat font-light text-2xl text-dark absolute">
        Depois de Amanhã
      </h1>
    </div>
  );
};

export default Overmorrow;
