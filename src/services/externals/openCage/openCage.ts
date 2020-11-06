import { get } from '../../api';
import { formatLocationName } from '../../../helpers/string';

import { IOpenCage, ICoordinates, ILocation } from './interface';

export const getGeoLocationCoordinates = ({ locationName }: ILocation) => {
  return get({
    url: `geocode/v1/json?q=${locationName}&key=${process.env.openCageKey}&language=pt-BR&limit=1`,
    baseUrl: process.env.openCageUrl
  })
    .then((data: IOpenCage) => {
      const { city, country, state } = data?.results?.[0]?.components;
      const { lat, lng } = data?.results?.[0]?.geometry;

      const nameFormated = formatLocationName({ city, country, state });

      return {
        coordinates: {
          lat,
          lng
        },
        locationName: nameFormated
      };
    })
    .catch((err) => err);
};

export const getGeoLocationName = ({ lat, lng }: ICoordinates) => {
  return get({
    url: `geocode/v1/json?q=${lat},${lng}&key=${process.env.openCageKey}&language=pt-BR`,
    baseUrl: process.env.openCageUrl
  })
    .then((data: IOpenCage) => {
      const { city, country, state } = data?.results?.[0]?.components;

      const nameFormated = formatLocationName({ city, country, state });

      return {
        locationName: nameFormated
      };
    })
    .catch((err) => err);
};
