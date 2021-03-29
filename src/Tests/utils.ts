export function mockFetchPromise(payload: any): Promise<any> {
  const mockJsonPromise = Promise.resolve(payload);
  const mockFetchPromise = Promise.resolve({
    json: () => mockJsonPromise,
  });

  return mockFetchPromise;
}
