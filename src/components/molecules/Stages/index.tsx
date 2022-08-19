import React, { useEffect, useState } from 'react';
import { useLocation, useWeather } from 'hooks';
import AfterTomorrow from './AfterTomorrow';
import Today from './Today';
import Tomorrow from './Tomorrow';

import { Styles } from './styles';
import { TWeatherEnum } from './types';

const Stages = () => {
  const [stageLoading, setStageLoading] = useState<boolean>(true);

  const { geolocalization } = useLocation();

  const { current, name, loading } = useWeather();

  const currentLocation = name ?? `${geolocalization?.city ?? ''}, ${geolocalization?.state ?? ''}`;

  useEffect(() => {
    if (current?.weather) {
      setStageLoading(loading);
    }
  }, [current, loading]);

  const weatherColor = (function getWeatherColor() {
    if (current?.temperature) {
      if (current.temperature < 15) {
        return TWeatherEnum.Cold;
      } else if (current.temperature > 35) {
        return TWeatherEnum.Warm;
      } else {
        return TWeatherEnum.Normal;
      }
    }

    return TWeatherEnum.Undefined;
  })() as TWeatherEnum;

  return (
    <Styles.Container>
      <Styles.CurrentLocation loading={stageLoading}>
        Resultados de: {currentLocation}
      </Styles.CurrentLocation>

      <div className='content'>
        <Today
          loading={stageLoading}
          humidity={current?.humidity}
          pressure={current?.pressure}
          temperature={current?.temperature}
          weatherColor={weatherColor}
          weatherType={current?.weatherType}
          wind={current?.wind}
        />
        <Tomorrow loading={stageLoading} weatherColor={weatherColor} />
        <AfterTomorrow loading={stageLoading} weatherColor={weatherColor} />
      </div>
    </Styles.Container>
  );
};

export default Stages;
