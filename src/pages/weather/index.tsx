import './styles.css';
import { useState } from 'react';
import { SearchField } from '../../components/SearchField';
import { DayBoxContainer } from '../../components/DayBoxContainer';
import { DayBoxFallback } from '../../components/DayBoxFallback';
import { TemperatureScales, UserLocation } from '../../helpers/models';
import { useWeatherForecast } from '../../hooks/useWeatherForecast';
import CompassIcon from '../../assets/icons/compass.svg';

interface WeatherPageProps {
  location: UserLocation | undefined;
}

export function WeatherPage({ location }: WeatherPageProps) {
  const [cityName, setCityName] = useState(location?.city || '');
  const [scale, setScale] = useState(TemperatureScales.DEFAULT);

  const { weatherForecastFormatted, loading } = useWeatherForecast(scale, cityName);

  const toogleTemperatureScale = () => {
    const nextScale =
      scale === TemperatureScales.CELSIUS
        ? TemperatureScales.FAHRENHEIT
        : TemperatureScales.CELSIUS;
    setScale(nextScale);
  };

  return (
    <div className="page-weather__container">
      <header className="page-weather__header">
        <CompassIcon />
        <SearchField initialValue={cityName} onSearch={setCityName} />
      </header>

      {loading && <p className="page-weather__message">carregando..</p>}

      <main className="page-weather__content">
        {weatherForecastFormatted.length === 0 && <DayBoxFallback />}

        {weatherForecastFormatted.map((weatherForecast, i) => (
          <DayBoxContainer
            key={weatherForecast.day}
            colors={weatherForecast.colors}
            weather={weatherForecast}
            toogleScale={toogleTemperatureScale}
            showDetail={i === 0}
          />
        ))}
      </main>
    </div>
  );
}
