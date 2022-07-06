import React from "react";
import Cloud from "../Icons/Cloud";
import CloudMoon from "../Icons/CloudMoon";
import CloudSun from "../Icons/CloudSun";
import Mist from "../Icons/Mist";
import Moon from "../Icons/Moon";
import Rain from "../Icons/Rain";
import Snow from "../Icons/Snow";
import SparseRainMoon from "../Icons/SparseRainMoon";
import SparseRainSun from "../Icons/SparseRainSun";
import Sun from "../Icons/Sun";
import Thunderstorm from "../Icons/Thunderstorm";
import TwoClouds from "../Icons/TwoClouds";

interface IconRenderProps {
  color?: string;
  size?: string;
  code: string;
}

interface SelectorInterface {
  [key: string]: () => JSX.Element;
}

const Icon = ({ color, code, size }: IconRenderProps) => {
  const iconSelector: SelectorInterface = {
    code01d() {
      return <Sun />;
    },
    code01n() {
      return <Moon color={color} size={size} />;
    },
    code02d() {
      return <CloudSun color={color} />;
    },
    code02n() {
      return <CloudMoon color={color} />;
    },
    code03d() {
      return <Cloud color={color} />;
    },
    code03n() {
      return <Cloud color={color} />;
    },
    code04d() {
      return <TwoClouds color={color} />;
    },
    code04n() {
      return <TwoClouds color={color} />;
    },
    code09d() {
      return <Rain color={color} />;
    },
    code09n() {
      return <Rain color={color} />;
    },
    code10d() {
      return <SparseRainSun color={color} />;
    },
    code10n() {
      return <SparseRainMoon color={color} />;
    },
    code11d() {
      return <Thunderstorm color={color} />;
    },
    code11n() {
      return <Thunderstorm color={color} />;
    },
    code13d() {
      return <Snow color={color} />;
    },
    code13n() {
      return <Snow color={color} />;
    },
    code50d() {
      return <Mist color={color} />;
    },
    code50n() {
      return <Mist color={color} />;
    },
  };

  return <>{iconSelector[code]()}</>;
};
export default Icon;
