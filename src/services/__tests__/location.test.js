import {
    getCurrentLocation,
    cityNameToCoordinates,
    coordinatesToCityName
} from "../location";

describe("getting the current location", () => {
    const original_geolocation = navigator.geolocation;

    const mocked_geolocation = {
        getCurrentPosition: jest.fn().mockImplementationOnce(success =>
            Promise.resolve(
                success({
                    coords: {
                        latitude: 51.1,
                        longitude: 45.3
                    }
                })
            )
        )
    };

    beforeAll(() => {
        global.navigator.geolocation = mocked_geolocation;
    });

    afterAll(() => {
        global.navigator.geolocation = original_geolocation;
    });

    it("Should get the current location", () => {
        return getCurrentLocation().then(coords =>
            expect(coords).toStrictEqual({
                latitude: 51.1,
                longitude: 45.3
            })
        );
    });

    it("Should get return the city coordinates", () => {
        return cityNameToCoordinates("Moabit, Berlin").then(coords =>
            expect(coords).toStrictEqual({
                lat: 52.5301017,
                lng: 13.3425422
            })
        );
    });

    it("Should get return null when no city is found", () => {
        return cityNameToCoordinates("heusheuheuhhsue").then(coords =>
            expect(coords).toBe(null)
        );
    });

    it("Should get return the city name", () => {
        return coordinatesToCityName(52.5301017, 13.3425422).then(name =>
            expect(name).toBe("Berlin, Berlin")
        );
    });
});
