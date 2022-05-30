import { useWeather } from "../../hooks/Weather";
import './style.css';

export function Today() {
  const {
    todayWeather,
    weatherCondition,
    skyWeather,
    units,
    convertTemperature,
  } = useWeather();
  return (
    <div className="today">
      {weatherCondition && <img src={require(`../../assets/${weatherCondition}.svg`)} alt="" />}
      <div className="today-info">
        <h2>Hoje</h2>
        <button className="btn" onClick={() => convertTemperature(units.metricLetter)}>
          {`${Math.round((todayWeather?.temperature))} ${units.metricLetter}`}
        </button>
        <h3>{weatherCondition && skyWeather[(weatherCondition as keyof typeof skyWeather)]}</h3>
        <p>{`Vento: ${todayWeather?.wind} ${units.speed}`}</p>
        <p>{`Humidade: ${todayWeather.humidity}%`}</p>
        <p>{`Pressão: ${todayWeather?.pressure}hPA`}</p>
      </div>
    </div>
  );
}
