import React from "react";
import CurrentTemp from "../temperature/CurrentTemp";
import Temp from "../temperature/Temp";
import EnvInfo from "./EnvInfo";

interface ICurrentInfoProps {
  temp: number;
  maximumTemp: number;
  minimumTemp: number;
  humidity: number;
  weather: string;
  description: string;
  windDegree: number;
  windSpeed: number;
}

export default function CurrentInfo(props: ICurrentInfoProps) {
  return (
    <>
      <span>
        <CurrentTemp
          weather={props.weather}
          description={props.description}
          temp={props.temp}
        />
      </span>

      <Temp
        title="Máx/Min"
        maxTemp={props.maximumTemp}
        minTemp={props.minimumTemp}
      ></Temp>
      <EnvInfo
        humidity={props.humidity}
        windDegree={props.windDegree}
        windSpeed={props.windSpeed}
      ></EnvInfo>
    </>
  );
}
