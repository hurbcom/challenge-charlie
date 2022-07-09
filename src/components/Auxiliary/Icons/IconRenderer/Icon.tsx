import React from "react";
import Cloud from "../Cloud";
import CloudMoon from "../CloudMoon";
import CloudSun from "../CloudSun";
import Mist from "../Mist";
import Moon from "../Moon";
import Rain from "../Rain";
import RainMoon from "../RainMoon";
import RainSun from "../RainSun";
import Snow from "../Snow";
import Sun from "../Sun";
import Thunderstorm from "../Thunderstorm";
import TwoClouds from "../TwoClouds";

interface IconRenderProps {
  code: string;
  style: string;
}

interface SelectorInterface {
  [key: string]: () => JSX.Element;
}

/*The icons were made into separate components to avoid clutter on this
selector object and to ease the process of making changes to each one */

const Icon = ({ code, style }: IconRenderProps) => {
  const iconSelector: SelectorInterface = {
    code01d() {
      return <Sun style={style} />;
    },
    code01n() {
      return <Moon style={style} />;
    },
    code02d() {
      return <CloudSun style={style} />;
    },
    code02n() {
      return <CloudMoon style={style} />;
    },
    code03d() {
      return <Cloud style={style} />;
    },
    code03n() {
      return <Cloud style={style} />;
    },
    code04d() {
      return <TwoClouds style={style} />;
    },
    code04n() {
      return <TwoClouds style={style} />;
    },
    code09d() {
      return <Rain style={style} />;
    },
    code09n() {
      return <Rain style={style} />;
    },
    code10d() {
      return <RainSun style={style} />;
    },
    code10n() {
      return <RainMoon style={style} />;
    },
    code11d() {
      return <Thunderstorm style={style} />;
    },
    code11n() {
      return <Thunderstorm style={style} />;
    },
    code13d() {
      return <Snow style={style} />;
    },
    code13n() {
      return <Snow style={style} />;
    },
    code50d() {
      return <Mist style={style} />;
    },
    code50n() {
      return <Mist style={style} />;
    },
  };

  return <>{iconSelector[code]()}</>;
};
export default Icon;
