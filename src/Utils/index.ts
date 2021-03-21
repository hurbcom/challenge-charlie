import { USER_LOCATION } from "./urls";

export function getCoordinates() {
  return new Promise(function (
    resolve: PositionCallback,
    reject: PositionErrorCallback
  ) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

export async function getUsersCityName(): Promise<string | undefined> {
  let cityName: string | undefined = undefined;
  if ("geolocation" in navigator) {
    try {
      const position = await getCoordinates();
      const { latitude, longitude } = position.coords;

      const data = await apiFetch(USER_LOCATION(latitude, longitude))
        .get()
        .then((res) => res.json());

      cityName = data.results[0].components.city;
    } catch (error) {
      console.log(error);
    }
  }
  return cityName;
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
