const mockNoop = () => new Promise(() => {});

export default {
  get: jest.fn(() => Promise.resolve({ data: { images: [ { url: '/value' } ] }})),
  default: mockNoop,
  post: mockNoop,
  put: mockNoop,
  delete: mockNoop,
  patch: mockNoop
};
