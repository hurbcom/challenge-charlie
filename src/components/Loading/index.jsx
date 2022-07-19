import React from "react";
import { WeatherIcons } from "../WeatherIcons";
import P from "prop-types";
import * as S from "./styles";

export const Loading = ({ height }) => {
  return (
    <S.Loading aria-label="loading" height={height}>
      <WeatherIcons />
    </S.Loading>
  );
};

Loading.propTypes = {
  height: P.number,
};
