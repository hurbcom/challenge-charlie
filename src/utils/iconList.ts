//list based on https://openweathermap.org/weather-conditions

import ClearSky from "assets/ClearSky.svg";
import FewClouds from "assets/FewClouds.svg";
import ScatteredClouds from "assets/ScatteredClouds.svg";
import BrokenClouds from "assets/BrokenClouds.svg";
import ShowerRain from "assets/ShowerRain.svg";
import Rain from "assets/Rain.svg";
import Thunderstorm from "assets/Thunderstorm.svg";
import Snow from "assets/Snow.svg";
import Mist from "assets/Mist.svg";

export const iconList: { [key: string]: string } = {
  "01d": ClearSky,
  "01n": ClearSky,
  "02d": FewClouds,
  "02n": FewClouds,
  "03d": ScatteredClouds,
  "03n": ScatteredClouds,
  "04d": BrokenClouds,
  "04n": BrokenClouds,
  "09d": ShowerRain,
  "09n": ShowerRain,
  "10d": Rain,
  "10n": Rain,
  "11d": Thunderstorm,
  "11n": Thunderstorm,
  "13d": Snow,
  "13n": Snow,
  "50d": Mist,
  "50n": Mist,
};
