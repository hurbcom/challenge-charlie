import { renderHook, act } from "@testing-library/react-hooks";
import useGeocode from "./useGeocode";

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () =>
            Promise.resolve({
                results: [
                    {
                        components: {
                            city: "Florianópolis",
                            state: "Santa Catarina",
                        },
                        geometry: {
                            lat: -27.5659296,
                            lng: -48.5023212,
                        },
                    },
                ],
            }),
    })
) as jest.Mock;

describe("hooks/usGeocode", () => {
    test("reverse geocode", async () => {
        const { result, rerender, waitForNextUpdate } = renderHook(() =>
            useGeocode()
        );
        expect(result.current.translate).toBeDefined();

        await act(
            async () =>
                await result.current.translate({
                    search: {
                        latitude: -27.5,
                        longitude: -48.5,
                    },
                })
        );

        expect(fetch).toHaveBeenCalledWith("undefined&q=-27.5+-48.5");
        rerender();
        expect(result.current.result?.city).toEqual("Florianópolis");
    });

    test("forward geocode", async () => {
        const { result, rerender } = renderHook(() => useGeocode());
        expect(result.current.translate).toBeDefined();

        await act(
            async () =>
                await result.current.translate({
                    search: "floripa",
                })
        );

        expect(fetch).toHaveBeenCalledWith("undefined&q=floripa");
        rerender();
        expect(result.current.result?.city).toEqual("Florianópolis");
    });

    test("return a error", async () => {
        global.fetch = jest
            .fn()
            .mockRejectedValueOnce({ message: "Generic testing error" });
        const { result, rerender } = renderHook(() => useGeocode());
        expect(result.current.translate).toBeDefined();

        await act(
            async () =>
                await result.current.translate({
                    search: "floripa",
                })
        );

        expect(fetch).toHaveBeenCalledWith("undefined&q=floripa");
        rerender();
        expect(result.current.error).toStrictEqual({
            message: "Generic testing error",
        });
    });
});
