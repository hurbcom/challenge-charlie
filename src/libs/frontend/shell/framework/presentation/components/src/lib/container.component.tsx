import { GetBackgroundControllerFactory } from '@challenge-charlie/frontend/utility/framework/factories/controllers';
import * as React from 'react';
import { useEffect, useState } from 'react';

const CurrencyExchange = React.lazy(
  () => import('frontend-mfes-currency-exchange/Module')
);

const WeatherForecast = React.lazy(
  () => import('frontend-mfes-weather-forecast/Module')
);

export function ContainerComponent() {
  const [url, setUrl] = useState('');

  useEffect(() => {
    const getBackgroundController = GetBackgroundControllerFactory.execute();
    getBackgroundController.execute().then(({ url }) => {
      setUrl(url);
    });
  }, []);

  return (
    <div className='w-full h-full' style={{
      backgroundImage: `url(${url})`,
      backgroundPosition: 'center center',
      objectFit: 'cover'
    }}>
      <div className={'grid grid-rows-auto gap-3 max-w-md mr-auto ml-auto p-2'}>
        <WeatherForecast />
        <CurrencyExchange />
      </div>
    </div>
  );
}
