import OpenCageService from '@/api/services/OpenCagesService';
import OpenWeatherService from '@/api/services/OpenWeatherService';
import { LocalityType } from '@/types/global';

const getLocationResults = async ({ latitude, longitude }: LocalityType) => {
  const { results } = await new OpenCageService({ latitude, longitude }).retrieveLocation();
  return results;
};

const getWeatherForecast = async ({ latitude, longitude }: LocalityType) => {
  return await new OpenWeatherService({ latitude, longitude }).retrieveForecast();
};

export { getLocationResults, getWeatherForecast };
