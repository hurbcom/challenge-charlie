import './styles.css';
import './styles.media.css';
import { WeatherInformationFormatted } from '../../helpers/models';

interface DayBoxContainerPros {
  colors: { bgColor: string; textColor: string };
  weather: WeatherInformationFormatted;
  toogleScale: () => void;
  showDetails?: boolean;
}

export function DayBoxContainer({
  colors,
  weather,
  toogleScale,
  showDetails,
}: DayBoxContainerPros) {
  const WeatherIcon = weather.icon;

  const styles = {
    backgroundColor: colors.bgColor,
    color: colors.textColor,
    fill: colors.textColor,
  };

  return (
    <div className="day-box__container" style={styles} data-expanded={showDetails}>
      <div className="day-box__weather-icon">
        <WeatherIcon />
      </div>

      <div className="day-box__info">
        <div className="day-box__temperature">
          <span>{weather.day}</span>
          <button type="button" onClick={toogleScale}>
            {weather.temperature.label}
          </button>
        </div>

        <div className="day-box__details">
          <strong>{weather.description}</strong>
          <p>Vento: {weather.wind}</p>
          <p>Humidade: {weather.humidity}</p>
          <p>Pressão: {weather.pressure}</p>
        </div>
      </div>
    </div>
  );
}
