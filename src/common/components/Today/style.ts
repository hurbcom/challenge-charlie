import styled, { css } from "styled-components";
import rainIcon from "../../icons/rain.svg";
import snowIcon from "../../icons/snow.svg";
import clearIcon from "../../icons/clear.svg";
import { motion } from "framer-motion";
import cloudsIcon from "../../icons/clouds.svg";
import breakpoints from "../../breakpoints";
import drizzleIcon from "../../icons/drizzle.svg";
import atmosphereIcon from "../../icons/atmosphere.svg";
import thunderstormIcon from "../../icons/thunderstorm.svg";
import { IWeatherTypes } from "../../../interfaces/IWeatherTypes";

interface IconWrapperProps {
  weather: IWeatherTypes;
}

interface ContainerProps {
  temperature?: number;
}

export const Container = styled(motion.section)<ContainerProps>`
  height: 50vh;
  background-color: var(--yellow-100);
  display: flex;

  ${(props) =>
    props.temperature &&
    props.temperature < 15 &&
    css`
      background-color: var(--blue-100);
    `};

  ${(props) =>
    props.temperature &&
    props.temperature > 35 &&
    css`
      background-color: var(--red-100);
    `};

  @media only screen and (${breakpoints.device.xs}) {
    flex-direction: column;
    height: 55vh;
  }
`;

export const Wrapper = styled.div`
  overflow: hidden;
`;

export const IconWrapper = styled.div<IconWrapperProps>`
  flex: 1;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  margin: 5%;

  background-image: url(${(props) =>
    props.weather === "Clear"
      ? clearIcon
      : props.weather === "Atmosphere"
      ? atmosphereIcon
      : props.weather === "Clouds"
      ? cloudsIcon
      : props.weather === "Drizzle"
      ? drizzleIcon
      : props.weather === "Rain"
      ? rainIcon
      : props.weather === "Snow"
      ? snowIcon
      : thunderstormIcon});
`;

export const DataContainer = styled.article`
  width: 45%;
  margin-left: 5%;
  color: white;
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and (${breakpoints.device.xs}) {
    width: 100%;
    margin: 0rem 0 2rem 0;
    align-items: center;
    font-size: 1.5rem;
  }
`;

export const Line = styled.p`
  display: flex;
  align-items: flex-end;
`;

export const Label = styled.span`
  font-weight: 500;
  padding-right: 0.5ch;
  margin-top: 0.5rem;
`;

export const Data = styled.span``;

export const Weather = styled(Line)`
  text-transform: capitalize;
  font-size: 3rem;
  margin: 3% 0;

  @media only screen and (${breakpoints.device.xs}) {
    margin: 0.2rem 0;
    font-size: 2rem;
  }
`;
