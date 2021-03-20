export function apiFetch(url){
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
    post: body =>
      fetch(url, {
        method: 'POST',
        headers,
        body: JSON.stringify(body)
      }),
    patch: body =>
      fetch(url, {
        method: 'PATCH',
        headers,
        body: JSON.stringify(body)
      }),
    put: body =>
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
