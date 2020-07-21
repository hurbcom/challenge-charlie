import React from "react";

import * as S from "./styles";
import ScaleSelector from "../ScaleSelector";

const ReducedWeather = (props) => {
  return (
    <S.Container className={props.day.label}>
      <h1>
        {props.title} <br/>
        <ScaleSelector day={props.day} />
      </h1>
    </S.Container>
  )
}

export default ReducedWeather;