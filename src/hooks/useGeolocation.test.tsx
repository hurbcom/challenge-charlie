import { act, renderHook } from "@testing-library/react-hooks";
import useGeolocation from "./useGeolocation";

const geoMock = {
    getCurrentPosition: jest
        .fn()
        .mockImplementationOnce((success) => {
            success({
                coords: {
                    latitude: 27.5,
                    longitude: 48.5,
                },
            });
        })
        .mockImplementationOnce((success, rejected) =>
            rejected({ message: "A unhandled error" })
        ),
};

describe("hooks/useGeolocation", () => {
    test("geolocation is not supported", () => {
        const { result } = renderHook(() => useGeolocation());
        expect(result.current.error).toEqual(
            "Geolocation isn't supported on this device."
        );
    });

    test("geolocation onSuccess", () => {
        Object.defineProperty(global.navigator, "geolocation", {
            value: geoMock,
        });

        const { result } = renderHook(() => useGeolocation());

        expect(geoMock.getCurrentPosition).toHaveBeenCalled();
        expect(result.current.coords).toStrictEqual({
            latitude: 27.5,
            longitude: 48.5,
        });
    });

    test("geolocation onError", () => {
        const { result, rerender } = renderHook(() => useGeolocation());
        expect(geoMock.getCurrentPosition).toHaveBeenCalled();
        rerender();
        expect(result.current.error).toEqual("A unhandled error");
    });
});
