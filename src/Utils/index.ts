import { ISystemState } from "../types";
import { IForecast, ILocation } from "../types/api-types";
import { FORWARD_GEOCODE, REVERSE_GEOCODE, WEATHER_FORECAST } from "./urls";

export function getCoordinates() {
  return new Promise(function (
    resolve: PositionCallback,
    reject: PositionErrorCallback
  ) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

export async function fetchUserLocation(
  latitude: number,
  longitude: number
): Promise<any> {
  try {
    const data = await apiFetch(REVERSE_GEOCODE(latitude, longitude))
      .get()
      .then((res) => res.json());

    return data.results[0];
  } catch (error) {
    console.log(error);
  }
}

export async function fetchForecast(
  latitude: number,
  longitude: number,
  system: ISystemState
): Promise<IForecast> {
  try {
    const forecast = apiFetch(WEATHER_FORECAST(latitude, longitude, system))
      .get()
      .then((res) => res.json());

    return forecast;
  } catch (error) {
    return error;
  }
}

export function fetchLocations(query: string): Promise<ILocation> {
  try {
    const locations = apiFetch(FORWARD_GEOCODE(query))
      .get()
      .then((locations) => locations.json());

    return locations;
  } catch (error) {
    return error;
  }
}

export function apiFetch(url: string) {
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  return {
    get: () =>
      fetch(url, {
        method: "GET",
        headers,
      }),
  };
}

export function getTempColor(
  temp: number | null | undefined,
  lightness: number,
  system: ISystemState
) {
  const highTemp = system === "metric" ? 35 : 95;
  const lowTemp = system === "metric" ? 15 : 59;

  if (temp) {
    if (temp > highTemp) {
      return `hsla(0, 100%, ${lightness}%, 0.8)`;
    } else if (temp < lowTemp) {
      return `hsla(240, 100%, ${lightness}%, 0.8)`;
    } else {
      return `hsla(45, 100%, ${lightness}%, 0.8)`;
    }
  }

  return `hsla(0, 0%, ${lightness}%, 0.8)`;
}

export function getWindDirection(degree: number | null | undefined) {
  if (!degree) {
    return;
  }

  degree = degree % 360;

  const SECTORS = [
    "N",
    "NNE",
    "NE",
    "ENE",
    "E",
    "ESE",
    "SE",
    "SSE",
    "S",
    "SSW",
    "SW",
    "WSW",
    "W",
    "WNW",
    "NW",
    "NNW",
  ];

  const DEGREES_PER_SECTOR = 360 / SECTORS.length;

  return SECTORS[Math.round(degree / DEGREES_PER_SECTOR) % 16];
}

export function getUnit(attr: string, system: string) {
  const UNITS_OF_MEASUREMENT: any = {
    wind: system === "metric" ? "km/h" : "mph",
    pressure: system === "metric" ? "hPA" : "hPA",
    temperature: system === "metric" ? `\u00B0C` : "F",
  };

  return `${UNITS_OF_MEASUREMENT[attr]}`;
}

export function formatTemperature(
  temp: number | null | undefined,
  system: ISystemState
) {
  if (temp) {
    return `${temp.toFixed()} ${getUnit("temperature", system)}`;
  } else {
    return "";
  }
}

export function convertWindSpeed(
  value: number | null | undefined,
  system: ISystemState
) {
  if (value) {
    if (system === "metric") {
      return (value * 3.6).toFixed(2);
    } else {
      return value;
    }
  } else {
    return "";
  }
}
