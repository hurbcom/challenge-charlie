import "@testing-library/jest-dom";
import { mswServer } from "./__mocks__/msw-server";

beforeAll(() => mswServer.listen());
afterEach(() => mswServer.resetHandlers());
afterAll(() => mswServer.close());

const mockGeolocation = {
  getCurrentPosition: jest.fn(),
  watchPosition: jest.fn(),
};

(global as any).navigator.geolocation = mockGeolocation;
