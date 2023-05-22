enum HttpVerbs {
  Get = 'GET',
  Post = 'POST',
  Delete = 'DELETE',
  Put ='PUT'
}

export interface Response<T> {
  data?: T,
  code: number,
  message?: string,
}

const handleErrors = (response) => {
  if (!response.ok) throw new Error(response.statusText)
  return response
}

const call = <T>(
  method: HttpVerbs,
  url: string,
  query?: object,
  body?: object): Promise<Response<T>> => {
  const queryString = new URLSearchParams({ ...query })
  return fetch(`${url}?${queryString}`, {
    method,
    body: JSON.stringify(body),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then(handleErrors)
    .then((response) => response.json())
}

const callImage = <T>(url: string): Promise<Response<T>> => {
  return fetch(`${url}`, {
    method: HttpVerbs.Get,
  })
    .then(handleErrors)
    .then((response) => response.arrayBuffer())
}

export default {
  get: <T>(url: string, query?: object) => call<T>(HttpVerbs.Get, url, query),
  post: <T>(url: string, data?: object) => call<T>(HttpVerbs.Post, url, null, data),
  delete: <T>(url: string, query?: object) => call<T>(HttpVerbs.Delete, url, query),
  put: <T>(url: string, data?: object) => call<T>(HttpVerbs.Put, url, null, data),
  getImage: <T>(url: string) => callImage<T>(url),

}
