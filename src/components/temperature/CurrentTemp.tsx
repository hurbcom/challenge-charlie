import React from "react";
import Weather from "../weather-icons/Weather";
import TempItem from "./TempItem";

interface Props {
  weather: string;
  description: string;
  temp: number;
}

export default function CurrentTemp(props: Props) {
  return (
    <div>
      <Weather
        weather={props.weather}
        width={"100"}
        height={"100"}
        color={"#000"}
      ></Weather>
      <p>{props.description}</p>
      <span>
        <TempItem temperature={props.temp}></TempItem>
      </span>
    </div>
  );
}
