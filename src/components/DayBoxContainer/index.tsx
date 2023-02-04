import './styles.css';
import { WeatherDetail } from '../WeatherDetail';
import { WeatherInformationFormatted } from '../../helpers/models';

interface DayBoxContainerPros {
  colors: { bgColor: string; textColor: string };
  weather: WeatherInformationFormatted;
  toogleScale: () => void;
  showDetail?: boolean;
}

function WeatherIcon(props: { icon: string }) {
  return (
    <div className="day-box__icon">
      <img src={props.icon} alt="" />
    </div>
  );
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
      style={{ backgroundColor: colors.bgColor, color: colors.textColor }}
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
