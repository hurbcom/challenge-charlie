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
  longitude: number
): Promise<any> {
  try {
    const forecast = apiFetch(WEATHER_FORECAST(latitude, longitude))
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

export function getTempColor(temp: number, lightness: number) {
  if (temp) {
    if (temp > 35) {
      return `hsla(0, 100%, ${lightness}%, 0.8)`;
    } else if (temp < 15) {
      return `hsla(240, 100%, ${lightness}%, 0.8)`;
    } else {
      return `hsla(45, 100%, ${lightness}%, 0.8)`;
    }
  }

  return `hsla(0, 0%, ${lightness}%, 0.7)`;
}

export function getWindDirection(degree: number) {
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
