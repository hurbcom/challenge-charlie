import getForecastData from "./getForecastData.service";

const mocks = {
    response: [
        {day: "HOJE", forecast: 1 },
        {day: "AMANHÃ", forecast: 2 },
        {day: "DEPOIS DE AMANHÃ", forecast: 3 },
    ],
    weatherForecasts: { list: [{forecast: 1},{forecast: 2},{forecast: 3}] }
}

global.fetch = jest.fn(() =>
    Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mocks.weatherForecasts),
    })
) as jest.Mock;

beforeEach(() => {
    (fetch as jest.Mock).mockClear();
    jest.resetModules(); // clear the cache
    process.env = {
        ...process.env,
        OPEN_WEATHER_API_URL: "open_weather_url",
        OPEN_WEATHER_API_KEY: "open_weather_api_key"
    };
});

describe("Testing the forecast data backend service", () => {
    describe("getForecastData()", () => {
        it("should throw an error if no location is given", async () => {
            try {
                await getForecastData("");
                // Fail test if above expression doesn't throw anything
                expect(true).toBe(false);
            } catch (error: any) {
                expect(error.message).toBe("Invalid location");
            }
        });

        it("should return a list of weather forecasts in case of success", async () => {
            const list = await getForecastData("Maringá");
            expect(list).toEqual(mocks.response);
        });
        
        it("should throw an error if the response.ok is falsy", async () => {
            (global.fetch as jest.Mock).mockImplementationOnce(() => Promise.resolve({ok: false, json: () => Promise.resolve(":P")}))
            try {
                await getForecastData("maringá");
                // Fail test if above expression doesn't throw anything
                expect(true).toBe(false);
            } catch (error: any) {
                expect(error.message).toBe(":P");
            }
        });

        it("should throw an error if the forecast list is empty or undefined", async () => {
            (global.fetch as jest.Mock).mockImplementationOnce(() => Promise.resolve({
                ok: true, json: () => Promise.resolve({list: []})
            }))
            try {
                await getForecastData("maringá");
                // Fail test if above expression doesn't throw anything
                expect(true).toBe(false);
            } catch (error: any) {
                expect(error.message).toBe("Forecast not found. Searched location: maringá");
            }
        });

        it("should return a list of ONLY 3 weather forecasts in case of success", async () => {
            mocks.weatherForecasts.list.push({forecast: 4});
            (global.fetch as jest.Mock).mockImplementationOnce(() => Promise.resolve({
                ok: true, json: () => Promise.resolve(mocks.weatherForecasts)
            }))
            const list = await getForecastData("Maringá");
            expect(list).toEqual(mocks.response);
        });


    });
});
