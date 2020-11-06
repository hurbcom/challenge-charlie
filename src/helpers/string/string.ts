import { ILocationName } from './interface';

export const formatLocationName = ({ city, country, state }: ILocationName) => {
  return `${city ? `${city}, ` : ''}${state ? `${state}, ` : ''}${country}`;
};
