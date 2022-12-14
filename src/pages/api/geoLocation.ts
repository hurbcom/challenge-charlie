import type { NextApiRequest, NextApiResponse } from "next";
import IGeolocationResponse from "./interfaces/IGeolocationResponse";
import URLMounter from "./models/URLMounter";

const fetchInfo = async (apiName: string, { latitude, longitude }: any) => {
  const url = new URLMounter({
    urlType: apiName,
  }).getGeoLocationURL(latitude, longitude);
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
    query: { latitude, longitude },
  } = req;

  const geoLocationResult: IGeolocationResponse = (await fetchInfo(
    "geolocation",
    { latitude, longitude }
  )) as IGeolocationResponse;

  res.status(200).json(geoLocationResult);
}
