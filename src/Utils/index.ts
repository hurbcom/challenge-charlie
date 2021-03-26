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

export function getTempColor(temp: number) {
  if (temp) {
    if (temp > 35) {
      return "hsla(0, 100%, 50%, 0.6)";
    } else if (temp < 15) {
      return "hsla(240, 100%, 50%, 0.6)";
    } else {
      return "hsla(50, 100%, 50%, 0.6)";
    }
  }
  console.log(temp);
  return "hsla(0, 0%, 70%, 0.6)";
}
