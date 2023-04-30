import getLocationData from "./getLocationData.service";

const mocks = {
    response: {"city": "maringá", "state": "paraná"},
    latitude: "11.0000",
    longitude: "22.000",
    openCageResponse: {results: [{components: {city:"maringá", state: "paraná"}}]}
}

global.fetch = jest.fn(() =>
    Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mocks.openCageResponse),
    })
) as jest.Mock;

beforeEach(() => {
    (fetch as jest.Mock).mockClear();
    jest.resetModules(); // clear the cache
    process.env = {
        ...process.env,
        OPEN_CAGE_API_URL: "open_cage_url",
        OPEN_CAGE_API_KEY: "open_cage_api_key"
    };
});

describe("Testing the location data backend service", () => {
    describe("getLocationData()", () => {
        it("should throw an error if no location is given", async () => {
            try {
                await getLocationData("", "");
                // Fail test if above expression doesn't throw anything
                expect(true).toBe(false);
            } catch (error: any) {
                expect(error.message).toBe("Invalid coordinates");
            }
        });

        it("should return a list of weather forecasts in case of success", async () => {
            const list = await getLocationData(mocks.latitude, mocks.longitude);
            expect(list).toEqual(mocks.response);
        });
        
        it("should throw an error if the response.ok is falsy", async () => {
            (global.fetch as jest.Mock).mockImplementationOnce(() => Promise.resolve({ok: false, json: () => Promise.resolve(":P")}))
            try {
                await getLocationData(mocks.latitude, mocks.longitude);
                // Fail test if above expression doesn't throw anything
                expect(true).toBe(false);
            } catch (error: any) {
                expect(error.message).toBe(":P");
            }
        });

        it("should throw an error if the forecast result list is empty or undefined", async () => {
            (global.fetch as jest.Mock).mockImplementationOnce(() => Promise.resolve({
                ok: true, json: () => Promise.resolve({results: []})
            }))
            try {
                await getLocationData(mocks.latitude, mocks.longitude);
                // Fail test if above expression doesn't throw anything
                expect(true).toBe(false);
            } catch (error: any) {
                expect(error.message).toBe("Coordinates not found");
            }
        });
    });
});
