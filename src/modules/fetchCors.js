export function fetchCors(url, ...args) {
  return fetch(
    `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`,
    ...args
  )
    .then((response) => {
      if (response.ok) return response.json();
      throw response;
    })
    .then((data) => data.contents);
}

if (process.env.NODE_ENV === "development") {
  window.fetchCors = fetchCors;
}
