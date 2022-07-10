import React from "react";
import { useStore } from "../../../store/store";
import { windDirection } from "../../../Utilities/windDirection";
import Icon from "../../Auxiliary/Icons/IconRenderer/Icon";
import Temperature from "../../Auxiliary/Temperature/Temperature";
import { translateCondition } from "../../../Utilities/translateCondition";

const Today = () => {
  const forecast = useStore((state) => state.forecast.today);
  const theme = useStore((state) => state.globaltheme);
  const location = useStore((state) => state.location);

  return (
    //Show today's forecast results
    <section className={`bg-${theme}-100 w-full h-[50vh] flex flex-row`}>
      {/*First horizontal half of the result block*/}
      <div className="w-[50%] h-full flex relative flex-col">
        {/*Show the current weather icon*/}
        <Icon
          style={`fill-${theme}-200 w-[90%] ml-[auto] my-[auto]`}
          code={forecast.weather.icon}
        />
        {/*"Hoje" tag*/}
        <p className="absolute bottom-4 left-4 font-montserrat font-light text-2xl text-dark">
          Hoje
        </p>
      </div>
      {/*Second horizontal half of the result block*/}
      <div className="w-[50%] h-full flex relative flex-col py-[3%] items-center overflow-hidden justify-between">
        {/*Location name*/}
        <div>
          <h2 className="text-center font-montserrat font-normal text-xl text-dark leading-7">
            {location.state}
          </h2>
          <h1 className="text-center font-montserrat font-normal text-3xl text-dark leading-7">
            {location.city}
          </h1>
        </div>
        {/*Temperature display/switcher*/}
        <Temperature
          temp={forecast.temp}
          style={"text-[5rem] mt-3"}
        ></Temperature>
        {/*Current weather condition*/}
        <h1 className="font-montserrat font-medium text-[2rem] text-dark">
          {translateCondition(forecast.weather.main)}
        </h1>
        {/*Extra information container*/}
        <div className="flex flex-row justify-between w-[90%] h-[30%] items-start">
          {/*Humidity*/}
          <div className="mx-[1.5%] flex flex-col">
            <svg
              className="fill-dark w-[1.8rem] mx-[auto]"
              viewBox="0 0 512 512"
            >
              <path
                className="w-[140%]"
                fillRule="evenodd"
                d="M238.6 144.5c0 43-23.5 78.7-74.6 78.7-51.2 0-75.7-35.8-75.7-78.7C88.3 81 164 5.4 164 5.4s74.6 75.7 74.6 139Zm185.1-47c0 22.4-13.3 41.9-41.9 41.9-28.6 0-42-19.5-42-43 0-46 41-74.6 41-74.6s43 28.6 43 74.6v1Zm-28.6 287.3c0 70.6-39.9 123.8-114.6 121.7-73.6-4-102.2-61.3-102.2-129.8 0-78.8 118.6-214.8 118.6-214.8s98.2 146.2 98.2 225v-2Z"
              />
            </svg>
            <p className="text-center text-sm font-montserrat text-dark font-semibold leading-tight mt-1">
              humidade
            </p>
            <p className="text-center text-sm font-montserrat text-dark font-semibold leading-tight">{`${forecast.humidity}%`}</p>
          </div>
          {/*Wind*/}
          <div className="mx-[1.5%] flex flex-col">
            <svg
              className="fill-dark w-[1.8rem] mx-[auto]"
              viewBox="0 0 512 512"
            >
              <path
                fillRule="evenodd"
                d="M383.8 379.2c14.4-17.5 25.7-36 31.9-53.5l2-41.2-43.2-43.2v12.4c-6.2 24.7-22.6 56.6-44.2 85.4a251.1 251.1 0 0 1-72 66.9L249 410l58.6 33 32-16.5a239.5 239.5 0 0 0 44.2-46.3Zm-87.5-64.8a214.4 214.4 0 0 0 37-68l2.1-45.2-83.4-82.4-6.1-5.1c-11.4-9.3-26.8-8.2-43.3-2H71V29.2a20.6 20.6 0 1 0-41.2 0v432.3a20.6 20.6 0 0 0 0 41.1H71a20.6 20.6 0 1 0 0-41.1V264l5.1 17.5c-2 21.6 6.2 32.9 14.5 39l6.1 4.2 107 60.7 37.1-16.5c17.5-10.3 38.1-30.8 56.6-54.5ZM79 152.8h70a337.6 337.6 0 0 0-48.4 65.9l-20.5-65.9Zm140 3v2.2l-2 5.1v3l-3.1 6.3-2.1 4-3 6.3-2.1 5.1-4.2 7.2c0 2-2 3-3 5.1l-5.2 8.3c0 2-2 3-3 4.1a298.5 298.5 0 0 1-20.7 27.8l-3 4.1-7.3 7.2c0 2-2 3.1-3 4.1l-6.2 6.2-4.1 3a202.7 202.7 0 0 1-13.4 11.4l-3.1 2-5.2 3.2-2 1-2 1-2.1-5.1a201 201 0 0 1 37-70c22.7-30.9 43.3-47.4 56.6-55.6h7.2v3Zm269.7 197.7-31-30.9-1 9.3-1 6.2a287.9 287.9 0 0 1-39 66.9 284 284 0 0 1-56.7 57.6l-10.3 5.1 38 20.6c4.2 3.1 11.4 6.2 20.7 6.2 16.4 0 39-9.3 66.9-45.3 14.4-20.6 23.6-38 26.7-52.5 3.1-17.5-1-33-13.3-43.2Z"
              />
            </svg>
            <p className="text-center text-sm font-montserrat text-dark font-semibold leading-tight mt-1">
              ventos
            </p>
            <p className="text-center text-sm font-montserrat text-dark font-semibold leading-tight">{`${forecast.windSpeed} km/h`}</p>
            <p className="text-center text-xs font-montserrat text-dark font-semibold leading-tight">
              {windDirection(forecast.windDirection)}
            </p>
          </div>
          {/*Pressure*/}
          <div className="mx-[1.5%]  flex flex-col">
            <svg
              className="fill-dark w-[1.8rem] mx-[auto]"
              viewBox="0 0 512 512"
            >
              <path
                fillRule="evenodd"
                d="M305.8 367.3A49.4 49.4 0 1 1 214 342l42.4-73.4 42.3 73.4c4.5 7.4 7 16.1 7 25.4ZM256 95.3a247 247 0 0 1 247 247v37H379.5v-37a123.5 123.5 0 0 0-247 0v37H9v-37a247 247 0 0 1 247-247Zm210 247a209 209 0 0 0-53-139.4l-35 35a160 160 0 0 1 38.5 104.4H466Zm-349.4-157 35 35a159.8 159.8 0 0 1 91.8-38.1v-49.5a209 209 0 0 0-126.8 52.5Zm244 35.2 35-35a209 209 0 0 0-127.5-52.8v49.5a159.8 159.8 0 0 1 92.5 38.3ZM46.1 342.3h49.4a160 160 0 0 1 38.7-104.6l-35-35c-33 37-53.1 86-53.1 139.6Z"
              />
            </svg>
            <p className="text-center text-sm font-montserrat text-dark font-semibold leading-tight mt-1">
              pressão
            </p>
            <p className="text-center text-sm font-montserrat text-dark font-semibold leading-tight">{`${forecast.pressure}hPa`}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Today;
