export function client(url) {
  return fetch(url).then(r => r.json())
}
