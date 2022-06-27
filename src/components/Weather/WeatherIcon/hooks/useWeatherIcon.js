import { useState, useEffect } from 'react';
import SunSVG from '../../../../assets/svg/sun.svg';
import MistSVG from '../../../../assets/svg/mist.svg';
import RainSVG from '../../../../assets/svg/rain.svg';
import SnowSVG from '../../../../assets/svg/snow.svg';
import CloudsSVG from '../../../../assets/svg/clouds.svg';
import ThunderStormSVG from '../../../../assets/svg/thunderstorm.svg';

export const useWeatherIcon = weatherId => {
  const [iconKey, setIconKey] = useState(0);

  const icons = {
    0: SunSVG,
    2: ThunderStormSVG,
    3: RainSVG,
    5: RainSVG,
    6: SnowSVG,
    7: MistSVG,
    8: CloudsSVG,
  };

  const handleIcon = weatherId => {
    const module = weatherId % 100;
    const division = parseInt(weatherId / 100);
    const clearSkyCase = division === 8 && module === 0;
    const newKey = clearSkyCase ? module : division;

    setIconKey(newKey);
  };

  useEffect(() => {
    handleIcon(weatherId);
  }, [weatherId]);

  return { icons, iconKey };
};
