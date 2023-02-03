import './styles.css';
import { useState } from 'react';
import { SearchField } from '../../components/SearchField';
import { DayBoxContainer } from '../../components/DayBoxContainer';
import { DayBoxFallback } from '../../components/DayBoxFallback';
import { UserLocation } from '../../helpers/models';
import { useWeatherForecast } from '../../hooks/useWeatherForecast';
import CompassIcon from '../../assets/icons/compass.svg';

interface WeatherPageProps {
  location: UserLocation | undefined;
}

export function WeatherPage({ location }: WeatherPageProps) {
  const [cityName, setCityName] = useState(location?.city || '');
  const { weatherForecast, loading } = useWeatherForecast(cityName);

  return (
    <div className="page-weather__container">
      <header className="page-weather__header">
        <CompassIcon />
        <SearchField initialValue={cityName} onSearch={setCityName} />
      </header>

      {loading && <p className="page-weather__message">carregando..</p>}

      <main className="page-weather__content">
        {weatherForecast.length === 0 && <DayBoxFallback />}

        {weatherForecast.map((weatherForecast, i) => (
          <DayBoxContainer
            key={weatherForecast.day}
            colors={weatherForecast.colors}
            weather={weatherForecast}
            showDetail={i === 0}
          />
        ))}
      </main>
    </div>
  );
}
