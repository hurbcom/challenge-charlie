export function client(url) {
  return fetch(url)
    .then(r => r.json())
    .then(json => {
      if (+json.cod === 404) {
        return Promise.reject(json.message)
      }

      return json
    })
}
