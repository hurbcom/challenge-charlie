import React, { useEffect, useState } from 'react';
import { useLocation, useWeather } from 'hooks';
import AfterTomorrow from './AfterTomorrow';
import Today from './Today';
import Tomorrow from './Tomorrow';

import { Styles } from './styles';

const Stages = () => {
  const [stageLoading, setStageLoading] = useState(true);

  const { geolocalization } = useLocation();

  const { current, name, loading } = useWeather();

  const currentLocation = name ?? `${geolocalization?.city ?? ''}, ${geolocalization?.state ?? ''}`;

  useEffect(() => {
    if (current?.weather) {
      setStageLoading(loading);
    }
  }, [current, loading]);

  return (
    <Styles.Container>
      <Styles.CurrentLocation loading={stageLoading}>
        Resultados de: {currentLocation}
      </Styles.CurrentLocation>

      <div className='content'>
        <Today loading={stageLoading} />
        <Tomorrow loading={stageLoading} />
        <AfterTomorrow loading={stageLoading} />
      </div>
    </Styles.Container>
  );
};

export default Stages;
