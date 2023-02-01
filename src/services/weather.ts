import { httpService } from './http';

interface CurrentWeatherResultApi {
  weather: [
    {
      description: string;
      icon: string;
    }
  ];
  main: {
    temp: number;
    pressure: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
  dt: number;
}

interface CurrentWeatherResultService {
  day: string;
  temperature: string;
  description: string;
  wind: string;
  humidity: string;
  pressure: string;
}

function mapCurrentWeatherResult(
  data: CurrentWeatherResultApi
): CurrentWeatherResultService {
  return {
    day: new Date(data.dt * 1000).toISOString(),
    temperature: `${data.main.temp}`,
    description: data.weather[0].description,
    wind: `${data.wind.speed}`,
    humidity: `${data.main.humidity}`,
    pressure: `${data.main.pressure}`,
  };
}

const currentWeatherUrl =
  'http://api.openweathermap.org/data/2.5/weather?q=goiania&appid=772920597e4ec8f00de8d376dfb3f094&units=metric&lang=pt_br';

const currentWeather = async (): Promise<
  CurrentWeatherResultService | string
> => {
  const { success, data } = await httpService.get<CurrentWeatherResultApi>({
    url: currentWeatherUrl,
  });

  if (!success) {
    return 'Não foi possível obter os dados do dia';
  }
  return mapCurrentWeatherResult(data);
};

const forecast = async () => {};

export const weatherService = {
  currentWeather,
  forecast,
};
