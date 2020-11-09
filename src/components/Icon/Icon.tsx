import React, { FunctionComponent } from 'react';

import { getWeatherIcon } from '../../helpers/weather';

import { IIcon } from './interface';
import { SIcon } from './styled';

const Icon: FunctionComponent<IIcon> = ({ sunset, weatherId }) => {
  return (
    <SIcon
      className={getWeatherIcon({
        sunset,
        weatherId
      })}
    />
  );
};

export default Icon;
