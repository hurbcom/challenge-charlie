import { WeatherClassifications } from 'src/interfaces/WeatherClassifications';

export default function getIconByClassificationAndPeriod(
  classification?: string,
): WeatherClassifications {
  const hour = new Date().getHours();

  const period = hour < 6 && hour > 20 ? 'night' : 'day';

  const icons: any = {
    Clear: { night: 'C', day: 'B' },
    Thunderstorm: { night: 'P', day: 'P' },
    Drizzle: { night: 'X', day: 'X' },
    Rain: { night: 'R', day: 'R' },
    Snow: { night: 'W', day: 'W' },
    Clouds: { night: 'I', day: 'H' },
    Mist: { night: 'K', day: 'J' },
    Smoke: { night: 'K', day: 'J' },
    Haze: { night: 'K', day: 'J' },
    Dust: { night: 'K', day: 'J' },
    Fog: { night: 'K', day: 'J' },
    Sand: { night: 'K', day: 'J' },
    Ash: { night: 'K', day: 'J' },
    Squall: { night: 'K', day: 'J' },
    Tornado: { night: 'K', day: 'J' },
  };

  if (!classification || !icons[classification]) {
    return icons.Clear[period];
  }

  return icons[classification][period];
}
