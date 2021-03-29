export function mockFetchPromise(payload) {
  const mockJsonPromise = Promise.resolve(payload);
  const mockFetchPromise = Promise.resolve({
    json: () => mockJsonPromise,
  });

  return mockFetchPromise;
}
