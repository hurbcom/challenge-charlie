import React, { useEffect, useState } from 'react';
import { useLocation, useWeather } from 'hooks';
import AfterTomorrow from './AfterTomorrow';
import Today from './Today';
import Tomorrow from './Tomorrow';

import { Styles } from './styles';
import { ScaleEnum, TWeatherEnum } from './types';

const Stages = () => {
  const [stageLoading, setStageLoading] = useState(true);

  const [scale, setScale] = useState<ScaleEnum>(ScaleEnum.C);

  const { geolocalization } = useLocation();

  const { current, otherDays, name, loading } = useWeather();

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

  const handleChangeScale = () => {
    setScale(scale === ScaleEnum.C ? ScaleEnum.F : ScaleEnum.C);
  };

  return (
    <Styles.Container>
      <Styles.CurrentLocation loading={stageLoading ? 1 : 0}>
        Resultados de: {currentLocation}
      </Styles.CurrentLocation>

      <div className='content'>
        <Today
          scale={scale}
          loading={stageLoading}
          humidity={current?.humidity}
          pressure={current?.pressure}
          temperature={current?.temperature}
          weatherColor={weatherColor}
          weatherType={current?.weatherType}
          onChangeScale={handleChangeScale}
          wind={current?.wind}
        />

        <Tomorrow
          scale={scale}
          loading={stageLoading}
          weatherColor={weatherColor}
          onChangeScale={handleChangeScale}
          weatherType={otherDays?.[0].weatherType}
          max={otherDays?.[0].max || 0}
          min={otherDays?.[0].min || 0}
        />

        <AfterTomorrow
          scale={scale}
          loading={stageLoading}
          weatherColor={weatherColor}
          onChangeScale={handleChangeScale}
          weatherType={otherDays?.[1].weatherType}
          max={otherDays?.[1].max || 0}
          min={otherDays?.[1].min || 0}
        />
      </div>
    </Styles.Container>
  );
};

export default Stages;
