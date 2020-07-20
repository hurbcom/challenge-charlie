import React from "react";

import * as S from "./styles";

const ReducedWeather = (props) => {
  return (
    <S.Container className={props.day.label}>
      <h1>
        {props.title} <br/>
        <span>{props.day.celcius}</span>
      </h1>
    </S.Container>
  )
}

export default ReducedWeather;