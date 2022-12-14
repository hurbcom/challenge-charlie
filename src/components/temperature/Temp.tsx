import React from "react";
import TempItem from "./TempItem";

interface Props {
  maxTemp: number;
  minTemp: number;
  title: string;
}

export default function Temp(props: Props) {
  return (
    <ul>
      <li>
        <p>{props.title}</p>
      </li>
      <TempItem temperature={props.maxTemp}></TempItem>
      <TempItem temperature={props.minTemp}></TempItem>
    </ul>
  );
}
