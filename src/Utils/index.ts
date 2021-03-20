export function getCoordinates() {
  return new Promise(function (resolve: PositionCallback, reject: PositionErrorCallback) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

export function apiFetch(url: string){
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };

  return {
    get: () =>
      fetch(url, {
        method: 'GET',
        headers
      }),
    post: (body: any) =>
      fetch(url, {
        method: 'POST',
        headers,
        body: JSON.stringify(body)
      }),
    patch: (body: any) =>
      fetch(url, {
        method: 'PATCH',
        headers,
        body: JSON.stringify(body)
      }),
    put: (body: any) =>
      fetch(url, {
        method: 'PUT',
        headers,
        body: JSON.stringify(body)
      }),
    delete: () =>
      fetch(url, {
        method: 'DELETE',
        headers
      })
  };
}
