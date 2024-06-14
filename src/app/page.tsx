import WeatherWidget from '@/components/WeatherWidget';
import { fetchForecastData } from '@/services/forecast';

export default async function Home() {
  const city = 'Rio de Janeiro';
  const defaultForecast = await fetchForecastData(city);

  return <WeatherWidget data={defaultForecast} city={city} />;
}
