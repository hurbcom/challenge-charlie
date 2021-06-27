import { WeatherClassifications } from 'src/interfaces/WeatherClassifications';

/**
 * @see https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2
 */
export default function getClassificationTranslation(
  weather: string,
): WeatherClassifications {
  const translates: any = {
    Thunderstorm: 'Trovoada',
    Drizzle: 'Chuvisco',
    Rain: 'Chuva',
    Snow: 'Neve',
    Clear: 'Claro',
    Clouds: 'Nuvens',
    Mist: 'Névoa',
    Smoke: 'Fumaça',
    Haze: 'Confusão',
    Dust: 'Pó',
    Fog: 'Névoa',
    Sand: 'Areia',
    Ash: 'Cinzas',
    Squall: 'Squall',
    Tornado: 'Tornado',
  };

  return translates[weather] || '';
}
