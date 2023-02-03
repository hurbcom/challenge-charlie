import { httpService } from './_http';
import { OpenCageApi } from '../helpers/contracts';
import { UserCoordinates, UserLocation } from '../helpers/models';

const openCageApiUrl = process.env.OPEN_CAGE_API_URL;
const openCageApiKey = process.env.OPEN_CAGE_API_KEY;

type CityByCoordinatesResultService = UserLocation | null;

const mapOpenCageApiResult = (data: OpenCageApi.CityByCoordinatesResult) => {
  return {
    city: data.results[0].components.city,
    state: data.results[0].components.state,
  };
};

export const findCityByCoordinates = async (
  coordinates: UserCoordinates
): Promise<CityByCoordinatesResultService> => {
  const geocodeUrl = `${openCageApiUrl}?q=${coordinates.latitude},%2B${coordinates.longitude}&key=${openCageApiKey}`;
  const result = await httpService.get<OpenCageApi.CityByCoordinatesResult>(geocodeUrl);

  if (!result) return null;

  return mapOpenCageApiResult(result);
};
