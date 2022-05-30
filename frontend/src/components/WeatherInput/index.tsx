import { useWeather } from '../../hooks/Weather';
import Compass from '../../assets/compass.svg';
import './style.css';
export function WeatherInput() {
  const {
    inputValue,
    inputChanged
  } = useWeather();
  return (
    <div className="input-area">
      <img src={Compass} alt="Pesquisar" />
      <input className="weather-input" type="text" value={inputValue} placeholder={"Cidade"} onChange={inputChanged} />
    </div>
  );
}
