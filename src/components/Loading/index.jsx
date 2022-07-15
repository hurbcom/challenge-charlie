import React from "react";
import { WeatherIcons } from "../WeatherIcons";
import * as S from "./styles";

export const Loading = () => {
  return (
    <S.Loading aria-label="loading">
      <WeatherIcons />
    </S.Loading>
  );
};
