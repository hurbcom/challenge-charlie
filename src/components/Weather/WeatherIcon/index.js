import React, { useEffect, useState } from 'react';
import { IconWrapper } from './styles';
import SunSVG from '../../../assets/svg/sun.svg';
import MistSVG from '../../../assets/svg/mist.svg';
import RainSVG from '../../../assets/svg/rain.svg';
import SnowSVG from '../../../assets/svg/snow.svg';
import CloudsSVG from '../../../assets/svg/clouds.svg';
import ThunderStormSVG from '../../../assets/svg/thunderstorm.svg';

export const WeatherIcon = ({ isOpen, weatherId }) => {
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
    const clearSkyCase = weatherId / 100 === 8 && weatherId % 100;
    const division = (weatherId / 100).toFixed(0);
    const newKey = clearSkyCase === 0 ? clearSkyCase : division;

    setIconKey(newKey);
  };

  useEffect(() => {
    handleIcon(weatherId);
  }, [weatherId]);

  return (
    <IconWrapper isOpen={isOpen}>
      {isOpen && <img src={icons[iconKey]} alt="weather icon" />}
    </IconWrapper>
  );
};
