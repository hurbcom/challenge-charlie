import './styles.css';
import { WeatherDetail } from '../WeatherDetail';
import { WeatherInformationFormatted } from '../../helpers/models';
import { WeatherIcon } from '../WeatherIcon';

interface DayBoxContainerPros {
  colors: { bgColor: string; textColor: string };
  weather: WeatherInformationFormatted;
  toogleScale: () => void;
  showDetail?: boolean;
}

export function DayBoxContainer({
  colors,
  weather,
  toogleScale,
  showDetail,
}: DayBoxContainerPros) {
  const weatherIcon = showDetail && <WeatherIcon icon={weather.icon} />;
  const weatherDetails = showDetail && <WeatherDetail details={weather!} />;

  return (
    <div
      className={`day-box__container ${showDetail && '--expanded'}`}
      style={{
        backgroundColor: colors.bgColor,
        color: colors.textColor,
        fill: colors.textColor,
      }}
    >
      {weatherIcon}

      <div className="day-box__info">
        <div className="day-box__temperature">
          <span>{weather.day}</span>
          <button type="button" onClick={toogleScale}>
            {weather.temperature.label}
          </button>
        </div>

        {weatherDetails}
      </div>
    </div>
  );
}
