import { renderHook } from '@testing-library/react-hooks';
import { useGeolocation, GeolocationProvider } from '../../hooks/geolocation';

const mockGeolocation = {
  getCurrentPosition: jest.fn().mockImplementationOnce(success =>
    Promise.resolve(
      success({
        coords: {
          latitude: 51.1,
          longitude: 45.3,
        },
      }),
    ),
  ),
  clearWatch: jest.fn(),
  watchPosition: jest.fn(),
};

// @ts-ignore: Unreachable code error
global.navigator.geolocation = mockGeolocation;

describe('Geolocation Hook', () => {
  it('should be able to call geolocation and set the coordinates', () => {
    const { result } = renderHook(() => useGeolocation(), {
      wrapper: GeolocationProvider,
    });

    expect(mockGeolocation.getCurrentPosition).toBeCalled();

    expect(result.current.coords?.latitude).toBe(51.1);
    expect(result.current.coords?.longitude).toBe(45.3);
  });
});
