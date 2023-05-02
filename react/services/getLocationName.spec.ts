import getLocationName from "./getLocationName";


const mocks = {
    latitude: 100,
    longitude: 101,
    response: { city: "maringá", state: "paraná" }
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

describe("Testing the getLocationName service", () => {
    it("should throw error if no coordinates are given",  async () => {
        try {
            await getLocationName(null, null);
            // Fail test if above expression doesn't throw anything
            expect(true).toBe(false);
        } catch (error: any) {
            expect(error.message).toBe("invalid coordinates lat: null long: null");
        }
    });


    it("should return the mocked fetch response if a location is given", async () => {
        const locationName = await getLocationName(mocks.latitude, mocks.longitude)
        expect(locationName).toBe(`${mocks.response.city}, ${mocks.response.state}`);
    });


    it("should throw an error if the response is somehow not ok", async () => {
        (global.fetch as jest.Mock).mockImplementationOnce(() => Promise.resolve({ok: false}))
        try {
            await getLocationName(mocks.latitude, mocks.longitude);
            // Fail test if above expression doesn't throw anything
            expect(true).toBe(false);
        } catch (error: any) {
            expect(error.message).toBe("Can't query for location");
        }
    });

});
