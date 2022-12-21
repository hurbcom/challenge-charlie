import { DayForecast } from '@challenge-charlie/frontend/weather-forecast/enterprise/entities';
import classNames from 'classnames';
import { useContext } from 'react';
import { StateContext } from '../../../../contexts/src/lib/state.context';

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
  const { location, getColorByTemp } = useContext(StateContext);

  if (!location || !location.weatherForecast) return null;

  const props = location.weatherForecast;

  const color = getColorByTemp(props.today.temp)

  return (
    <div className={`grid grid-cols-2 grid-rows-auto p-2 gap-2 text-white ${classNames({
        'bg-yellow-300': color === 'yellow',
        'bg-blue-300': color === 'blue',
        'bg-red-300': color === 'red',
    })}`}>
      <div className="grid place-items-center">{icons[props.today.icon]}</div>
      <div className="grid grid-rows-auto gap-4">
        <div className="grid grid-rows-auto gap-1">
          <div className="text-gray-50 font-bold">HOJE</div>
          <div className="grid grid-cols-[20px_auto]">
            <div className="grid place-items-center">
              <i className="fa-solid fa-temperature-three-quarters"></i>
            </div>
            <div>{props.today.temp}°C</div>
          </div>
        </div>
        <div className="grid grid-rows-auto gap-1">
          <div className="uppercase text-gray-50 font-bold">
            {props.today.description}
          </div>
          <div className="grid grid-rows-3 grid-cols-[20px_auto] gap-1">
            <div className="grid place-items-center">
              <i className="fa-solid fa-wind"></i>
            </div>
            <div>{props.today.wind}km/h</div>

            <div className="grid place-items-center">
              <i className="fa-solid fa-droplet"></i>
            </div>
            <div>{props.today.humidity}%</div>

            <div className="grid place-items-center">
              <i className="fa-solid fa-exclamation"></i>
            </div>
            <div>{props.today.pressure}hPA</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { CurrentForecastOverviewComponent };
