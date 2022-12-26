import { StateContext } from '@challenge-charlie/frontend/weather-forecast/framework/presentation/contexts';
import classNames from 'classnames';
import { useContext } from 'react';
import { DayForecastItemDetailComponent } from '../day-forecast-item-detail.component';

function FutureForecastsOverviewComponent() {
  const { location } = useContext(StateContext);

  if (!location || !location.weatherForecast) return null;

  const props = location.weatherForecast;

  return (
    <div className="grid grid-cols-1 grid-rows-2 text-white">
      <div
        className={`p-2 grid grid-cols-2 gap-2 ${classNames({
          'bg-yellow-400/60': props.tomorrow.color === 'yellow',
          'bg-blue-400/60': props.tomorrow.color === 'blue',
          'bg-red-400/60': props.tomorrow.color === 'red',
        })}`}
      >
        <div></div>
        <div>
          <div className="text-gray-50 font-bold">AMANHÃ</div>
          <div className="grid grid-cols-[20px_auto]">
            <DayForecastItemDetailComponent
              icon="fa-temperature-three-quarters"
              text={`${props.tomorrow.temp}°C`}
            />
          </div>
        </div>
      </div>
      <div
        className={`p-2 grid grid-cols-2 gap-2 ${classNames({
          'bg-yellow-500/60': props.afterTomorrow.color === 'yellow',
          'bg-blue-500/60': props.afterTomorrow.color === 'blue',
          'bg-red-500/60': props.afterTomorrow.color === 'red',
        })}`}
      >
        <div></div>
        <div>
          <div className="text-gray-50 font-bold">DEPOIS DE AMANHÃ</div>
          <div className="grid grid-cols-[20px_auto]">
            <DayForecastItemDetailComponent
              icon="fa-temperature-three-quarters"
              text={`${props.afterTomorrow.temp}°C`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export { FutureForecastsOverviewComponent };
