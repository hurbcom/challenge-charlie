import {
  StateContext,
} from '@challenge-charlie/frontend/weather-forecast/framework/presentation/contexts';
import { useContext } from 'react';
import { CurrentForecastOverviewComponent } from '../current-forecast-details/current-forecast-details.component';
import { ForecastOverviewSekeletonComponent } from '../forecast-overview-skeleton/forecast-overview-skeleton.component';
import { FutureForecastsOverviewComponent } from '../future-forecasts-overview/future-forecasts-overview.component';
import { GeolocationComponent } from '../geolocation/geolocation.component';
import { SearchLocationByAddressComponent } from '../search-location-by-address/search-location-by-address.component';
import './nice-styles.css'

function ForecastOverviewComponent() {
  const { fetchingLocation, location } = useContext(StateContext);

  if (fetchingLocation) {
    return <ForecastOverviewSekeletonComponent />;
  }

  if (location) {
    return (
      <div className='rounded-lg overflow-hidden shadow-lg'>
        <GeolocationComponent />
        <CurrentForecastOverviewComponent />
        <FutureForecastsOverviewComponent />
      </div>
    );
  }

  return <SearchLocationByAddressComponent />;
}

export { ForecastOverviewComponent };
