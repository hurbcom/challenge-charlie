import axios from "axios";
import { ICoordinate } from "../interfaces/ICoordinate";
import { IOpenCageResponse } from "../interfaces/IOpenCageResponse";

const FALLBACK_COORDINATES: ICoordinate = {
  latitude: -22.908333,
  longitude: -43.196388,
};

const getCurrentPositionAsync = (): Promise<GeolocationPosition> => {
  return new Promise((res, rej) => {
    navigator.geolocation.getCurrentPosition(res, rej);
  });
};

export const getCurrentLocation = async (): Promise<ICoordinate> => {
  try {
    const { coords } = await getCurrentPositionAsync();

    return {
      latitude: coords.latitude,
      longitude: coords.longitude,
    };
  } catch (err) {
    console.error("Não foi possível carregar geolocalização.");
    return FALLBACK_COORDINATES;
  }
};

export const getLocationByCoordinate = async ({ latitude, longitude }: ICoordinate): Promise<string> => {
  try {
    const { data }: { data: IOpenCageResponse } = await axios.get(
      "https://api.opencagedata.com/geocode/v1/json?q=" +
        `${latitude}+${longitude}` +
        `&key=${process.env.REACT_APP_OPEN_CAGE_KEY}&limit=1&no_annotations=1`
    );

    if (data.results.length === 0) throw new Error();

    const location = `${data.results[0].components.city}, ${data.results[0].components.state}`;

    return location;
  } catch (err) {
    console.error("Erro ao buscar localização no OpenCage.");
    return "";
  }
};

export const getInitialLocation = async () => {
  return await getLocationByCoordinate(await getCurrentLocation());
};
