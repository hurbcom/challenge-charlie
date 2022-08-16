import axios from "axios";
import { IOpenCageResponse } from "../interfaces/IOpenCageResponse";

const FALLBACK_LOCATION = "Rio de Janeiro, Rio de Janeiro";

const reverseGeocode = async (coords: GeolocationCoordinates) => {
  try {
    const { data }: { data: IOpenCageResponse } = await axios.get(
      "https://api.opencagedata.com/geocode/v1/json?q=" +
        `${coords.latitude}+${coords.longitude}` +
        `&key=${process.env.REACT_APP_OPEN_CAGE_KEY}&limit=1&no_annotations=1`
    );

    if (data.results.length === 0) throw new Error();

    const location = `${data.results[0].components.city}, ${data.results[0].components.state}`;
    localStorage.setItem("@challenge-charlie:location", location);

    return location;
  } catch (err) {
    console.error("Erro ao buscar localização no OpenCage.");
    return localStorage.getItem("@challenge-charlie:location") ?? FALLBACK_LOCATION;
  }
};

const getGeolocation = (): Promise<GeolocationPosition> => {
  return new Promise((res, rej) => {
    navigator.geolocation.getCurrentPosition(res, rej);
  });
};

export const getCurrentLocation = async () => {
  if (!navigator.geolocation) {
    console.error("API de geolocalização não disponível no dispositivo.");
    return localStorage.getItem("@challenge-charlie:location") ?? FALLBACK_LOCATION;
  }

  try {
    const { coords } = await getGeolocation();
    return reverseGeocode(coords);
  } catch (err) {
    console.error("Erro ao buscar geolocalização.");
    return localStorage.getItem("@challenge-charlie:location") ?? FALLBACK_LOCATION;
  }
};
