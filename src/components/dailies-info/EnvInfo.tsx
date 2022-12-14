import React from "react";
import degreeToDirection from "../../utils/DegreeToDirection";

interface Props {
  humidity: number;
  windDegree: number;
  windSpeed: number;
}

export default function EnvInfo(props: Props) {
  const msToKmh = (ms: number) => {
    return Math.round(ms * 3.6);
  };
  return (
    <ul>
      <li>Umidade: {props.humidity}%</li>
      <li>
        Vento: {degreeToDirection(props.windDegree)} {msToKmh(props.windSpeed)}
        km/h
      </li>
    </ul>
  );
}
