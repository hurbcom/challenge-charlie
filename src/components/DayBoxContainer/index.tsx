import './styles.css';
import { WeatherDetail } from '../WeatherDetail';
import { WeatherInformation } from '../../helpers/models';

interface DayBoxContainerPros {
  colors: { bgColor: string; textColor: string };
  weather: WeatherInformation;
  showDetail?: boolean;
}

function WeatherIcon(props: { icon: string }) {
  return (
    <div className="day-box__icon">
      <img src={props.icon} alt="" />
    </div>
  );
}

export function DayBoxContainer({ colors, weather, showDetail }: DayBoxContainerPros) {
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
          <button type="button">{weather.day}</button>
          <span>{weather.temperature}</span>
        </div>

        {weatherDetails}
      </div>
    </div>
  );
}
