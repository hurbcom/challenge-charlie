import Axios, { AxiosResponse } from 'axios';

const openCageGeocodingApi = async (
  latitude: number,
  longitude: number,
): Promise<AxiosResponse> => {
  return Axios.get(
    `https://api.opencagedata.com/geocode/v1/json?key=${process.env.REACT_APP_OPEN_CAGE_KEY}&q=${latitude}+${longitude}&pretty=1&no_annotations=1`,
  );
};

const openWeatherApi = async (
  searchedCity: string,
  searchedState: string,
): Promise<AxiosResponse> => {
  return Axios.get(
    `https://api.openweathermap.org/data/2.5/forecast/daily?q=${searchedCity},${searchedState}&units=metric&cnt=3&lang=pt_br&appid=${process.env.REACT_APP_WEATHER_KEY}`,
  );
};

const bingImageApi = async (): Promise<AxiosResponse> => {
  return Axios.get(
    'https://cors-anywhere.herokuapp.com/https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR',
  );
};

export { openCageGeocodingApi, openWeatherApi, bingImageApi };
