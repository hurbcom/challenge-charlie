import React from "react";
import * as S from "./styles";
import P from "prop-types";
export const WeatherIcons = ({ label, code }) => {
  if (code >= 200 && code < 300) {
    //Thunderstorm
    return <S.Icon title={label} data-icon="0"></S.Icon>;
  }
  if (code >= 300 && code < 400) {
    //Drizzle
    return <S.Icon title={label} data-icon="X"></S.Icon>;
  }
  if (code >= 500 && code < 600) {
    //Rain
    return <S.Icon title={label} data-icon="R"></S.Icon>;
  }
  if (code >= 600 && code < 700) {
    //Snow
    return <S.Icon title={label} data-icon="U"></S.Icon>;
  }
  if (code >= 700 && code < 800) {
    // Atmosphere
    return <S.Icon title={label} data-icon="M"></S.Icon>;
  }
  if (code === 800) {
    // Atmosphere
    return <S.Icon title={label} data-icon="B"></S.Icon>;
  }
  if (code >= 801 && code < 900) {
    // Atmosphere
    return <S.Icon title={label} data-icon="H"></S.Icon>;
  }
  return <S.Icon title="not found" data-icon="("></S.Icon>;
};

WeatherIcons.propTypes = {
  label: P.string,
  code: P.number,
};
