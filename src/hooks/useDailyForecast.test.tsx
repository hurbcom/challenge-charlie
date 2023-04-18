import { act, renderHook } from "@testing-library/react-hooks";
import useDailyForecast from "./useDailyForecast";

const forecast = {
    daily: [
        {
            dt: 1681657200,
            temp: {
                day: 23.83,
            },
            pressure: 1015,
            humidity: 77,
            wind_speed: 5.64,
            wind_deg: 36,
            weather: [
                {
                    id: 502,
                    main: "Rain",
                    description: "chuva forte",
                    icon: "10d",
                },
            ],
        },
        {
            dt: 1681743600,
            temp: {
                day: 23.95,
            },
            pressure: 1007,
            humidity: 78,
            wind_speed: 5.28,
            wind_deg: 189,
            weather: [
                {
                    id: 503,
                    main: "Rain",
                    description: "chuva muito forte",
                    icon: "10d",
                },
            ],
        },
        {
            dt: 1681830000,
            temp: {
                day: 19.69,
            },
            pressure: 1006,
            humidity: 94,
            wind_speed: 5.56,
            wind_deg: 174,
            weather: [
                {
                    id: 502,
                    main: "Rain",
                    description: "chuva forte",
                    icon: "10d",
                },
            ],
        },
    ],
};

global.fetch = jest
    .fn()
    .mockImplementationOnce(() =>
        Promise.resolve({
            json: () => Promise.resolve(forecast),
        })
    )
    .mockImplementationOnce(() => Promise.reject({ message: "api error" }));

describe("hoooks/useDailyForecast", () => {
    test("fetch forecast data", async () => {
        const { result, rerender } = renderHook(() => useDailyForecast());
        await act(async () => {
            result.current.loadForecast({
                latitude: 25.7,
                longitude: 48.5,
            });
        });
        expect(result.current.forecast).toBeDefined();
        expect(result.current.forecast).toHaveLength(3);
        expect(result.current.forecast?.shift()?.windDirection).toEqual("NE");
        expect(result.current.forecast?.shift()?.windDirection).toEqual("S");
        expect(result.current.forecast?.shift()?.windDirection).toEqual("S");
        expect(result.current.forecast?.shift()?.windDirection).toBeUndefined();
    });

    test("fetch forecast data throws an arror", async () => {
        const { result } = renderHook(() => useDailyForecast());
        await act(async () => {
            result.current.loadForecast({
                latitude: 25.7,
                longitude: 48.5,
            });
        });
        expect(result.current.forecast).toBeUndefined();
        expect(result.current.error).toBeDefined();
        expect(result.current.error).toStrictEqual("api error");
    });
});
