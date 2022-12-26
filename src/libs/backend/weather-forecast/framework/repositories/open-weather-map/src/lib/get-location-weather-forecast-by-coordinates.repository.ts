import { GetLocationWeatherForecastByCoordinatesRepositoryContract, GetLocationWeatherForecastByCoordinatesRepositoryInput, GetLocationWeatherForecastByCoordinatesRepositoryOutput } from "@challenge-charlie/backend/weather-forecast/application/contracts/repositories";

export class GetLocationWeatherForecastByCoordinatesRepository
  implements GetLocationWeatherForecastByCoordinatesRepositoryContract {
  public async execute({
    latitude, longitude,
  }: GetLocationWeatherForecastByCoordinatesRepositoryInput): Promise<GetLocationWeatherForecastByCoordinatesRepositoryOutput> {
    const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly,alerts&lang=pt_br&units=metric&appid=f7582f1c0659a741e71ecb5e18f11497`;

    const weatherResponse = await fetch(url);

    const { daily } = await weatherResponse.json();

    const [today, tomorrow, afterTomorrow] = daily;

    return {
      forecast: {
        today: {
          title: today.weather[0].main,
          temp: Math.round(today.temp.max),
          tempSymbol: '°C',
          description: today.weather[0].description,
          wind: Number.parseFloat(today.wind_speed).toFixed(1),
          humidity: today.humidity,
          pressure: today.pressure,
          icon: today.weather[0].icon,
        },
        tomorrow: {
          title: tomorrow.weather[0].main,
          temp: Math.round(tomorrow.temp.max),
          tempSymbol: '°C',
          description: tomorrow.weather[0].description,
          wind: Number.parseFloat(tomorrow.wind_speed).toFixed(1),
          humidity: tomorrow.humidity,
          pressure: tomorrow.pressure,
          icon: tomorrow.weather[0].icon,
        },
        afterTomorrow: {
          title: afterTomorrow.weather[0].main,
          temp: Math.round(afterTomorrow.temp.max),
          tempSymbol: '°C',
          description: afterTomorrow.weather[0].description,
          wind: Number.parseFloat(afterTomorrow.wind_speed).toFixed(1),
          humidity: afterTomorrow.humidity,
          pressure: afterTomorrow.pressure,
          icon: afterTomorrow.weather[0].icon,
        },
      },
    };
  }
}
