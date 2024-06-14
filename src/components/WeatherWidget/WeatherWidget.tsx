'use client';

import { useState } from 'react';
import { Weather } from '@/components/Weather';
import { Response as WeatherResponse, Forecast } from '@/services/forecast';
import useForecast from '@/hooks/useForecast';
import { sanitizeString } from '@/utils/sanitize';

interface RootProps {
  city: string;
  data: WeatherResponse;
}

function WeatherWidget({ city: initialCity, data: initialData }: RootProps) {
  const [city, setCity] = useState(initialCity);
  const [data, setData] = useState(initialData);
  const { fetchForecast, loading } = useForecast();
  const days: Forecast[] = Object.values(data);

  const onChangeInputText = (value: string) => setCity(value);
  const onFormSubmit = async (city: string) => {
    const forecast = await fetchForecast(sanitizeString(city));
    setData(forecast);
  };

  return (
    <Weather.Root>
      <Weather.Input value={city} onChange={onChangeInputText} onSubmit={onFormSubmit} loading={loading} />
      {days.map((day, index) => (
        <Weather.Content temperature={day.temperatureInCelcius} key={index}>
          {index === 0 && (
            <>
              <Weather.Icon name={day.icon} />
              <Weather.Forecast
                title='Hoje'
                celsius={day.temperatureInCelcius}
                fahrenheit={day.temperatureInFahrenheit}
                description={day.description}
                wind={day.wind}
                windDirection={day.windDirection}
                pressure={day.pressure}
                humidity={day.humidity}
              />
            </>
          )}
          {index !== 0 && (
            <Weather.Forecast
              title={index === 1 ? 'Amanhã' : 'Depois de amanhã'}
              celsius={day.temperatureInCelcius}
              fahrenheit={day.temperatureInFahrenheit}
              lite
            />
          )}
        </Weather.Content>
      ))}
    </Weather.Root>
  );
}

export default WeatherWidget;
