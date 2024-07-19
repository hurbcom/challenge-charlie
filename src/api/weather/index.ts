import { QueryKey, QueryOptions } from "react-query";

const axios = require("axios").default;

export type Weather = {
  weatherId: number;
  temp: number;
  unit: string;
  description: string;
  wind: string;
  humidity: string;
  pressure: string;
};

export type WeatherList = {
  weathers: Array<Weather>;
};

const getWeathers = ({ queryKey }: QueryOptions): Promise<WeatherList> => {
  const [_, query, unit] = queryKey as QueryKey;
  return new Promise<WeatherList>((resolve, reject) => {
    return axios
      .get(
        `${
          process.env.REACT_APP_API_BASE_URL as string
        }/weather?query=${query}&unit=${unit}`
      )
      .then((res: { data: any }) => {
        return res.data;
      })
      .then((weathers: WeatherList | PromiseLike<WeatherList>) => {
        return resolve(weathers);
      })
      .catch((error: any) => {
        if (axios.isAxiosError(error)) {
          if (error.response?.status === 404) {
            return reject(new Error("Cidade não encontrada!"));
          } else {
            return reject(error);
          }
        } else if (error instanceof Error) {
          return reject(error);
        } else {
          return reject("Unexpected error");
        }
      });
  });
};

export default getWeathers;
