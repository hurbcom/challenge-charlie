import type { NextApiRequest, NextApiResponse } from "next";
import IForecastWeatherResponse from "./interfaces/IForecastWeatherResponse";
import IGeolocationOptionsResponse from "./interfaces/IGeolocationOptionsResponse";
import IWeatherResponse from "./interfaces/IWeatherResponse";
import DataMounter from "./models/DataMounter";
import URLMounter from "./models/URLMounter";

const fetchInfo = async (apiName: string, cityName: string) => {
  const url = new URLMounter({ urlType: apiName }).getURL(cityName);
  const response = await fetch(url);
  const data = await response.json();

  if (!data) {
    console.error("No data here!");
    return null;
  }

  return data;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { q },
  } = req;

  const geoLocationResult: IGeolocationOptionsResponse = (await fetchInfo(
    "geolocation",
    q as string
  )) as IGeolocationOptionsResponse;
  const weatherResult: IWeatherResponse = (await fetchInfo(
    "weather",
    q as string
  )) as IWeatherResponse;
  const forecastWeatherResult: IForecastWeatherResponse = (await fetchInfo(
    "forecastWeather",
    q as string
  )) as IForecastWeatherResponse;
  const bingImageResult = await fetchInfo("bingImage", q as string);

  const data = new DataMounter({
    weatherResult,
    geoLocationResult,
    forecastWeatherResult,
    bingImageResult,
  }).getData();

  res.status(200).json(data);
}
