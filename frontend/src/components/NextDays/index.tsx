import { useWeather } from "../../hooks/Weather";
import './style.css';

export function NextDays() {
  const {
    nextWeather,
    units,
    convertTemperature,
  } = useWeather();
  return (
    <>
      <div className="tomorrow">
        <div className="content">
          <h2>Amanhã</h2>
          <button className="btn" onClick={() => convertTemperature(units.metricLetter)}>
            {`${Math.round((nextWeather?.tomorrow))} ${units.metricLetter}`}
          </button>
        </div>
      </div>
      <div className="after-tomorrow">
        <div className="content">
          <h2>Depois de Amanhã</h2>
          <button className="btn" onClick={() => convertTemperature(units.metricLetter)}>
            {`${Math.round((nextWeather?.afterTomorrow))} ${units.metricLetter}`}
          </button>
        </div>
      </div></>
  );
}
