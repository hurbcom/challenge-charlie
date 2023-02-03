import { httpService } from './_http';
import { OpenCageApi } from '../helpers/contracts';
import { UserCoordinates, UserLocation } from '../helpers/models';

const openCageKey = '702ce6a0e9ae481b81e26693edb22926';

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
  const geocodeUrl = `https://api.opencagedata.com/geocode/v1/json?q=${coordinates.latitude},%2B${coordinates.longitude}&key=${openCageKey}`;
  const result = await httpService.get<OpenCageApi.CityByCoordinatesResult>(
    geocodeUrl
  );

  if (!result) return null;

  return mapOpenCageApiResult(result);
};
