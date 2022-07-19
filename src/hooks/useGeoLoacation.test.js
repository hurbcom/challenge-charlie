import { renderHook } from "@testing-library/react";
import useGeoLocation from "./useGeoLocation";

const mockGeolocation = {
  getCurrentPosition: jest.fn(),
  watchPosition: jest.fn(),
};

global.navigator.geolocation = mockGeolocation;

describe("useGeoLocation", () => {
  it("should return the coords correctly", () => {
    mockGeolocation.getCurrentPosition.mockImplementationOnce((success) =>
      Promise.resolve(
        success({
          coords: {
            latitude: 51.1,
            longitude: 45.3,
          },
        })
      )
    );

    const { result } = renderHook(() => useGeoLocation());
    expect(result.current.coordinates).toEqual({
      lat: 51.1,
      lon: 45.3,
    });
    expect(result.current.loaded).toBeTruthy();
  });
  it("should return error in request", () => {
    mockGeolocation.getCurrentPosition.mockImplementationOnce(
      (success, error) =>
        Promise.resolve(
          error({
            code: 0,
            message: "not found",
          })
        )
    );
    const { result } = renderHook(() => useGeoLocation());

    expect(result.current.loaded).toBeTruthy();
    expect(result.current.error.code).toEqual(0);
  });
});
