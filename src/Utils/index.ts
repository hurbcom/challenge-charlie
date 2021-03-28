import { IForecast } from "../types/api-types";
import { REVERSE_GEOCODE, USER_LOCATION, WEATHER_FORECAST } from "./urls";

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
    const data = await apiFetch(USER_LOCATION(latitude, longitude))
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
  system: "metric" | "imperial"
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

export function fetchLocations(query: string): Promise<any> {
  try {
    const locations = apiFetch(REVERSE_GEOCODE(query))
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
    post: (body: any) =>
      fetch(url, {
        method: "POST",
        headers,
        body: JSON.stringify(body),
      }),
    patch: (body: any) =>
      fetch(url, {
        method: "PATCH",
        headers,
        body: JSON.stringify(body),
      }),
    put: (body: any) =>
      fetch(url, {
        method: "PUT",
        headers,
        body: JSON.stringify(body),
      }),
    delete: () =>
      fetch(url, {
        method: "DELETE",
        headers,
      }),
  };
}

export function getTempColor(
  temp: number | null | undefined,
  lightness: number,
  system: "imperial" | "metric"
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
    wind: system === "metric" ? "km/h" : "m/h",
    pressure: system === "metric" ? "hPA" : "hPA",
    temperature: system === "metric" ? `\u00B0C` : "F",
  };

  return `${UNITS_OF_MEASUREMENT[attr]}`;
}
