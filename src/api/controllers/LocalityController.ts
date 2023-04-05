import dayjs from 'dayjs';

import OpenCageService from '@/api/services/OpenCagesService';
import OpenWeatherService from '@/api/services/OpenWeatherService';

import { LocalityType } from '@/types/global';
import {
  WeatherContentPayload,
  LocationResultsPayload,
  LocationResultsPayloadReduced,
} from '@/types/payload';
import {
  WeatherForecastParams,
  LocationResultsParams,
  BuildWeatherContentParams,
} from '@/types/params';

const getLocationResults = async (
  params: LocationResultsParams
): Promise<LocationResultsPayloadReduced> => {
  const locationResults = await new OpenCageService(params).retrieveLocation();
  const reducedResults = locationResults.reduce(
    (acc, cur) => {
      if (cur.components._type !== 'country' && cur.confidence < acc.confidence) {
        return cur;
      }
      return acc;
    },
    { confidence: Infinity }
  );
  return reducedResults as LocationResultsPayloadReduced;
};

const getWeatherForecast = async (
  params: WeatherForecastParams
): Promise<WeatherContentPayload> => {
  const locationResults = await getLocationResults(params as LocalityType);
  const { components, formatted } = locationResults;
  const weatherList = await new OpenWeatherService(params as LocalityType).retrieveForecast();
  const forecast = _buildForecastPayload({
    weatherList: weatherList.list,
    browserDate: params.browserDate!,
    count: params.count!,
  });
  return { geolocation: { ...components, formatted }, forecast } as WeatherContentPayload;
};

const _buildForecastPayload = ({
  weatherList,
  count,
  browserDate,
}: BuildWeatherContentParams): Array<Object> => {
  return weatherList.reduce((acc: Array<Object>, cur: any) => {
    if (acc.length <= parseInt(count) && dayjs(cur.dt_txt).isAfter(browserDate)) {
      let dayText = 'HOJE';
      if (acc.length === 1) dayText = 'AMANHÃ';
      if (acc.length === 2) dayText = 'DEPOIS DE AMANHÃ';
      acc.push({
        dayText,
        unixTime: cur.dt,
        date: cur.dt_txt,
        tempColor: getTemperatureColor(cur.main.temp),
        temp: `${Math.round(cur.main.temp)}°C`,
        temp_min: `${Math.round(cur.main.temp_min)}°C`,
        temp_max: `${Math.round(cur.main.temp_max)}°C`,
        feels_like: `${Math.round(cur.main.feels_like)}°C`,
        pressure: cur.main.pressure + 'hPA',
        humidity: cur.main.humidity + '%',
        windSpeed: cur.wind.speed,
        windDirection: OpenWeatherService.windDegreeToDirection(cur.wind.deg),
        windFull: `${OpenWeatherService.windDegreeToDirection(cur.wind.deg)} ${cur.wind.speed}km/h`,
        icon: cur.weather[0].icon,
        description:
          cur.weather[0].description.charAt(0).toUpperCase() + cur.weather[0].description.slice(1),
      });
      browserDate = dayjs(browserDate).add(1, 'day').toString();
    }
    return acc;
  }, []);
};

const getTemperatureColor = (temperature: number) => {
  const roundedTemp = Math.round(temperature);
  if (roundedTemp <= 15) return 'blue';
  if (roundedTemp >= 35) return 'red';
  return 'yellow';
};

export { getLocationResults, getWeatherForecast };
