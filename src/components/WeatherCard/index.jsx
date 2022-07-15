import React, { useState } from "react";
import P from "prop-types";
import * as S from "./styles";
import { WeatherIcons } from "../WeatherIcons";
import celsiusToFahrenheit from "../../utils/celsiusToFahrenheit";
export const WeatherCard = ({
  temperature,
  wind,
  humidity,
  presure,
  description,
  smallCard = false,
  label,
  iconCode,
}) => {
  const [metric, setMetric] = useState("celsius");

  const toggleMetric = () => {
    setMetric((prev) => (prev === "celsius" ? "fahrenheit" : "celsius"));
  };

  return (
    <S.Wrapper temperature={temperature}>
      <S.Icon smallCard={smallCard}>
        <WeatherIcons label={description} code={iconCode} />
      </S.Icon>
      <S.Content>
        <S.Mesure aria-label="Temperatures">
          <span>{label}</span>
          <S.Temperature>
            {temperature && (
              <span onClick={() => toggleMetric()}>
                {metric === "fahrenheit"
                  ? `${celsiusToFahrenheit(temperature)}°F`
                  : `${temperature}°C`}
              </span>
            )}
          </S.Temperature>
        </S.Mesure>
        {!smallCard && (
          <div aria-label="mesures">
            <S.Description>{description}</S.Description>
            <S.Mesures>
              <S.MesureItem>Vento: {wind}km/h</S.MesureItem>
              <S.MesureItem>Humidade: {humidity}%</S.MesureItem>
              <S.MesureItem>Pressão: {presure}poe</S.MesureItem>
            </S.Mesures>
          </div>
        )}
      </S.Content>
    </S.Wrapper>
  );
};

WeatherCard.propTypes = {
  temperature: P.number,
  wind: P.number,
  humidity: P.number,
  iconCode: P.number,
  presure: P.number,
  description: P.string,
  label: P.string,
  smallCard: P.bool,
};
