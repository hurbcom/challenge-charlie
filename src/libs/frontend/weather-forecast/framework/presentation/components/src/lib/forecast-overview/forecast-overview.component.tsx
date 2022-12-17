import { LocationOverview } from '@challenge-charlie/frontend/weather-forecast/enterprise/entities';
import {
  ControllersContext,
  ControllersContextProvider,
} from '@challenge-charlie/frontend/weather-forecast/framework/presentation/contexts';
import { useContext, useEffect, useState } from 'react';
import { CurrentForecastOverviewComponent } from '../current-forecast-details/current-forecast-details.component';
import { FutureForecastsOverviewComponent } from '../future-forecasts-overview/future-forecasts-overview.component';
import { GeolocationComponent } from '../geolocation/geolocation.component';

function ForecastOverviewComponent() {
  const { getCurrentUserLocationController } = useContext(ControllersContext);

  const [location, setLocation] = useState<LocationOverview>()

  useEffect(() => {
    getCurrentUserLocationController.execute().then((output) => {
      setLocation(output.location)
    });
  }, [getCurrentUserLocationController]);

  return (
    <ControllersContextProvider>
      <div className="grid grid-rows-[50px_400px_150px] grid-cols-1 rounded-xl overflow-hidden">
        <GeolocationComponent address={location?.address} />
        <CurrentForecastOverviewComponent />
        <FutureForecastsOverviewComponent />
      </div>
    </ControllersContextProvider>
  );
}

export { ForecastOverviewComponent };
