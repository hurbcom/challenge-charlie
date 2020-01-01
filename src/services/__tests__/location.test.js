import axios from "axios";

import {
    getCurrentLocation,
    cityNameToCoordinates,
    coordinatesToCityName
} from "../location";

jest.mock("axios");

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

    const mocked_city_name_response = {
        results: [
            {
                components: {
                    city: "Campos dos Goytacazes",
                    state: "Rio de Janeiro"
                }
            }
        ]
    };

    const mocked_city_location_response = {
        results: [
            {
                geometry: {
                    lat: 52,
                    lng: 13
                }
            }
        ]
    };

    const mocked_no_city_found_response = {
        results: []
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
        axios.get.mockImplementationOnce(() =>
            Promise.resolve({ data: mocked_city_location_response })
        );
        return cityNameToCoordinates("Moabit, Berlin").then(coords =>
            expect(coords).toStrictEqual({
                lat: 52,
                lng: 13
            })
        );
    });

    it("Should get return null when no city is found", () => {
        axios.get.mockImplementationOnce(() =>
            Promise.resolve({ data: mocked_no_city_found_response })
        );
        return cityNameToCoordinates("heusheuheuhhsue").then(coords =>
            expect(coords).toBe(null)
        );
    });

    it("Should get return the city name", () => {
        axios.get.mockImplementationOnce(() =>
            Promise.resolve({ data: mocked_city_name_response })
        );
        return coordinatesToCityName(52.5301017, 13.3425422).then(name =>
            expect(name).toBe("Campos dos Goytacazes, Rio de Janeiro")
        );
    });
});
