export const translateWeather = (weather: string) => ({
  Atmosphere: 'atmosférico',
  Clear: 'limpo',
  Clouds: 'nublado',
  Drizzle: 'garoando',
  Rain: 'chovendo',
  Snow: 'nevando',
  Thunderstorm: 'tempestade',
}[weather])
