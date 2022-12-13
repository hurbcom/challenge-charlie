import React from "react";
import TempItem from "./TempItem";

interface Props {
  maxTemp: number;
  minTemp: number;
}

export default function Temp(props: Props) {
  return (
    <ul>
      <TempItem temperature={props.maxTemp}></TempItem>
      <TempItem temperature={props.minTemp}></TempItem>
    </ul>
  );
}
