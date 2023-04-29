import getForecast, {initialForecastState} from "./getForecast";


const mocks = {
    location: "Itapuã",
    response: { forecast: "forecast" }
}

global.fetch = jest.fn(() =>
    Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mocks.response),
    })
) as jest.Mock;

beforeEach(() => {
    (fetch as jest.Mock).mockClear();
    jest.resetModules(); // clear the cache
});


describe("Testing the getForecast service", () => {
    it("should return the initial state if no location is given",  async () => {
        const forecast = await getForecast("")
        expect(forecast).toEqual(initialForecastState);
    });


    it("should return the mocked fetch response if a location is given", async () => {
        const forecast = await getForecast(mocks.location)
        expect(forecast).toEqual(mocks.response);
    });


    it("should throw an error if the response is somehow not ok", async () => {
        (global.fetch as jest.Mock).mockImplementationOnce(() => Promise.resolve({ok: false}))
        try {
            await getForecast(mocks.location);
            // Fail test if above expression doesn't throw anything
            expect(true).toBe(false);
        } catch (error: any) {
            expect(error.message).toBe("Can't get forecast info");
        }
    });

});
