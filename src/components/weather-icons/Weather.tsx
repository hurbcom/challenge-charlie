import React from "react";
import {
  ClearSky,
  BrokenClouds,
  FewClouds,
  ScatteredClouds,
  ShowerRain,
  Rain,
  Thunderstorm,
  Snow,
  Mist,
} from "./index";

interface Props {
  weather: string;
  width: string;
  height: string;
  color: string;
}

export default function Weather(props: Props) {
  const getIcon = (
    weatherIcon: string,
    widthIcon: string,
    heightIcon: string,
    colorIcon: string
  ) => {
    return /([0][1][d|n])/g.test(weatherIcon) ? (
      <ClearSky color={colorIcon} width={widthIcon} height={heightIcon} />
    ) : /([0][2][d|n])/g.test(weatherIcon) ? (
      <FewClouds color={colorIcon} width={widthIcon} height={heightIcon} />
    ) : /([0][3][d|n])/g.test(weatherIcon) ? (
      <ScatteredClouds
        color={colorIcon}
        width={widthIcon}
        height={heightIcon}
      />
    ) : /([0][4][d|n])/g.test(weatherIcon) ? (
      <BrokenClouds color={colorIcon} width={widthIcon} height={heightIcon} />
    ) : /([0][9][d|n])/g.test(weatherIcon) ? (
      <ShowerRain color={colorIcon} width={widthIcon} height={heightIcon} />
    ) : /([1][0][d|n])/g.test(weatherIcon) ? (
      <Rain color={colorIcon} width={widthIcon} height={heightIcon} />
    ) : /([1][1][d|n])/g.test(weatherIcon) ? (
      <Thunderstorm color={colorIcon} width={widthIcon} height={heightIcon} />
    ) : /([1][3][d|n])/g.test(weatherIcon) ? (
      <Snow color={colorIcon} width={widthIcon} height={heightIcon} />
    ) : /([5][0][d|n])/g.test(weatherIcon) ? (
      <Mist color={colorIcon} width={widthIcon} height={heightIcon} />
    ) : (
      <p>No Icon</p>
    );
  };

  return getIcon(props.weather, props.width, props.height, props.color);
}
