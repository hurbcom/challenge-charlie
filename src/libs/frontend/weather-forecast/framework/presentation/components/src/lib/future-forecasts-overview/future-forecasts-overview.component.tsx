import classNames from 'classnames';
import { useContext } from 'react';
import { StateContext } from '../../../../contexts/src/lib/state.context';

function FutureForecastsOverviewComponent() {
  const { location, getColorByTemp } = useContext(StateContext);

  if (!location || !location.weatherForecast) return null;

  const props = location.weatherForecast;

  const tomorrowColor = getColorByTemp(props.tomorrow.temp);
  const afterTomorrowColor = getColorByTemp(props.afterTomorrow.temp);

  return (
    <div className="grid grid-cols-1 grid-rows-2 text-white">
      <div
        className={`p-2 grid grid-cols-2 gap-2 ${classNames({
          'bg-yellow-400': tomorrowColor === 'yellow',
          'bg-blue-400': tomorrowColor === 'blue',
          'bg-red-400': tomorrowColor === 'red',
        })}`}
      >
        <div></div>
        <div>
          <div className="text-gray-50 font-bold">AMANHÃ</div>
          <div className="grid grid-cols-[20px_auto]">
            <div className="grid place-items-center">
              <i className="fa-solid fa-temperature-three-quarters"></i>
            </div>
            <div>{props.tomorrow.temp}°C</div>
          </div>
        </div>
      </div>
      <div className={`p-2 grid grid-cols-2 gap-2 ${classNames({
          'bg-yellow-500': afterTomorrowColor === 'yellow',
          'bg-blue-500': afterTomorrowColor === 'blue',
          'bg-red-500': afterTomorrowColor === 'red',
        })}`}>
        <div></div>
        <div>
          <div className="text-gray-50 font-bold">DEPOIS DE AMANHÃ</div>
          <div className="grid grid-cols-[20px_auto]">
            <div className="grid place-items-center">
              <i className="fa-solid fa-temperature-three-quarters"></i>
            </div>
            <div>{props.afterTomorrow.temp}°C</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { FutureForecastsOverviewComponent };
