import React, { useEffect, useState } from 'react';
import { useLocation, useWeather } from 'hooks';
import AfterTomorrow from './AfterTomorrow';
import Today from './Today';
import Tomorrow from './Tomorrow';

import { Styles } from './styles';

const Stages = () => {
  const [loading, setLoading] = useState(true);

  const { geolocalization } = useLocation();
  const { current, name } = useWeather();

  const currentLocation = name ?? `${geolocalization?.city ?? ''}, ${geolocalization?.state ?? ''}`;

  useEffect(() => {
    console.log(current);

    if (current?.weather) {
      setLoading(false);
    }
  }, [current]);

  return (
    <Styles.Container>
      <Styles.CurrentLocation>Resultados de: {currentLocation}</Styles.CurrentLocation>
      <div className='content'>
        <Today loading={loading} />
        <Tomorrow loading={loading} />
        <AfterTomorrow loading={loading} />
      </div>
    </Styles.Container>
  );
};

export default Stages;
