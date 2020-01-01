import axios from "axios";

import { fetchWeather, fetchForecast } from "../weather";

jest.mock("axios");

describe("testing weather services", () => {
    const data = { data: {} };

    beforeAll(() => {
        axios.get.mockImplementation(() => Promise.resolve(data));
    });

    describe("fetching current weather", () => {
        it("should return the fetched data", async () => {
            expect(await fetchWeather(0, 0)).toBe(data);
        });
    });

    describe("fetching forecast", () => {
        it("should return the fetched data", async () => {
            expect(await fetchForecast(0, 0)).toBe(data);
        });
    });
});
