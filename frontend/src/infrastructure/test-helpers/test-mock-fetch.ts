const apis = {
  starwars: 'http://foo.com',
}

export const responseTypes = {
  ok: { ok: true, statusText: 'Ok', statusCode: 200 },
  notFound: { ok: false, statusText: 'Not Found', statusCode: 404 },
  badRequest: { ok: false, statusText: 'Bad Request', statusCode: 500 },
}

export const mockFetch = (fetchMock: Promise<any> = Promise.resolve()) => {
  (window as any).apis = apis
  const fetch = jest.fn(() => fetchMock);
  (window as any).fetch = fetch
  return fetch
}

export const createFetchPromise = (
  expectedResult: any,
  responseType = responseTypes.ok,
): Promise<any> => Promise.resolve({
  ...responseType,
  json: () => Promise.resolve({ results: expectedResult }),
})
