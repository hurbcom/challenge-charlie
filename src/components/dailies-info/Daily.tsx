import React from "react";
import Temp from "../temperature/Temp";
import Weather from "../weather-icons/Weather";

interface Props {
  weather: string;
  maxTemp: number;
  minTemp: number;
  width: string;
  height: string;
  color: string;
}

export default function Daily(props: Props) {
  return (
    <div>
      <Weather
        weather={props.weather}
        width={props.width}
        height={props.height}
        color={props.color}
      ></Weather>
      <Temp maxTemp={props.maxTemp} minTemp={props.minTemp}></Temp>
    </div>
  );
}
