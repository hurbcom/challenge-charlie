import { StateContext } from '@challenge-charlie/frontend/weather-forecast/framework/presentation/contexts';
import classNames from 'classnames';
import { useContext } from 'react';
import { DayForecastItemDetailComponent } from '../day-forecast-item-detail.component';

const icons: Record<string, JSX.Element> = {
  '01d': <i className="fa-solid fa-7x fa-sun"></i>,
  '02d': <i className="fa-solid fa-7x fa-cloud-sun"></i>,
  '03d': <i className="fa-solid fa-7x fa-cloud"></i>,
  '04d': <i className="fa-solid fa-7x fa-cloud"></i>,
  '09d': <i className="fa-solid fa-7x fa-cloud-showers-heavy"></i>,
  '10d': <i className="fa-solid fa-7x fa-cloud-sun-rain"></i>,
  '11d': <i className="fa-solid fa-7x fa-cloud-bolt"></i>,
  '13d': <i className="fa-solid fa-7x fa-snowflake"></i>,
  '50d': <i className="fa-solid fa-7x fa-smog"></i>,
};

function CurrentForecastOverviewComponent() {
  const { location, celciusToFahrenheitToggle } = useContext(StateContext);

  if (!location || !location.weatherForecast) return null;

  const props = location.weatherForecast;

  return (
    <div
      className={`grid grid-cols-2 grid-rows-auto p-2 gap-2 text-white ${classNames(
        {
          'bg-yellow-300/60': props.today.color === 'yellow',
          'bg-blue-300/60': props.today.color === 'blue',
          'bg-red-300/60': props.today.color === 'red',
        }
      )}`}
    >
      <div className="grid place-items-center">{icons[props.today.icon]}</div>
      <div className="grid grid-rows-auto gap-4">
        <div className="grid grid-rows-auto gap-1">
          <div className="text-gray-50 font-bold">HOJE</div>
          <DayForecastItemDetailComponent
            icon="fa-temperature-three-quarters"
            text={`${props.today.temp}${props.today.tempSymbol}`}
            action={celciusToFahrenheitToggle}
          />
        </div>
        <div className="grid grid-rows-auto gap-1">
          <div className="uppercase text-gray-50 font-bold">
            {props.today.description}
          </div>
          <div className="grid grid-rows-3 gap-1">
            <DayForecastItemDetailComponent
              icon="fa-wind"
              text={`${props.today.wind}km/h`}
            />

            <DayForecastItemDetailComponent
              icon="fa-droplet"
              text={`${props.today.humidity}%`}
            />

            <DayForecastItemDetailComponent
              icon="fa-exclamation"
              text={`${props.today.pressure}hPA`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export { CurrentForecastOverviewComponent };
