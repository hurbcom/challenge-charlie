import React from "react";
import { useStore } from "../../../store/store";
import Icon from "../../Auxiliary/Icons/IconRenderer/Icon";
import Temperature from "../../Auxiliary/Temperature/Temperature";

const Tomorrow = () => {
  const forecast = useStore((state) => state.forecast.tomorrow);
  const theme = useStore((state) => state.globaltheme);
  return (
    <div
      className={`bg-${theme}-200 w-full h-[20vh] md:h-[10vh] lg:h-[15vh] flex flex-row-reverse items-center`}
    >
      <Icon
        code={forecast.weather.icon}
        style="fill-dark w-[15vw] md:w-[3rem] mr-12 md:mr-6"
      ></Icon>
      {/*Max temp*/}
      <div className="flex flex-row mr-[1vw] md:mx-5">
        <Temperature
          key="min"
          temp={forecast.temp.min}
          style="md:text-[2rem] text-[6vw] md:w-6 md:mr-8"
        ></Temperature>
        <svg viewBox="0 0 1792 1792" className="w-10 md:w-4">
          <path
            className="fill-dark"
            d="M1604.2 132.9 896 1659 187.8 132.9 896 506.4l708.2-373.5z"
          />
        </svg>
      </div>
      {/*Min temp*/}
      <div className="flex flex-row mr-[2vw] md:mx-5">
        <svg viewBox="0 0 1792 1792" className="w-10 md:w-4">
          <path
            className="fill-dark"
            d="M187.8 1659 896 132.9 1604.2 1659 896 1285.5 187.8 1659z"
          />
        </svg>
        <Temperature
          key="max"
          temp={forecast.temp.max}
          style="md:text-[2rem] text-[6vw] md:w-6"
        ></Temperature>
      </div>

      <h1 className="left-4 font-montserrat font-light text-[6vw] md:text-2xl text-dark absolute">
        Amanhã
      </h1>
    </div>
  );
};

export default Tomorrow;
