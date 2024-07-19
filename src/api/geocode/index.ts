import { QueryKey, QueryOptions } from "react-query";

export type PlaceName = {
  city: string;
  state: string;
  country: string;
};

const getPlaceName = ({ queryKey }: QueryOptions): Promise<PlaceName> => {
  const [_, latitude, longitude] = queryKey as QueryKey;
  return new Promise<PlaceName>((resolve, reject) => {
    return fetch(
      `${
        process.env.REACT_APP_API_BASE_URL as string
      }/geocode?latitude=${latitude}&longitude=${longitude}`
    )
      .then((res) => {
        return res.json();
      })
      .then((placeName) => {
        return resolve(placeName);
      })
      .catch((error) => {
        return reject(error);
      });
  });
};

export default getPlaceName;
