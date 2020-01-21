import axios from "axios";
import GeoService from '../';

jest.mock("axios");

describe("GeoService", () => {

  describe("Result Normalizer", () => {

    const mockedLocation1 =   {
      "formatted": "Location 1",
      "geometry": {
        "lat": -6.9690271,
        "lng": -37.6082611
      }
    };

    const mockedLocation2 =   {
      "formatted": "Location 2",
      "geometry": {
        "lat": -5.9690271,
        "lng": -35.6082611
      }
    };

    it("should return 2 locations", () => {
      expect(new GeoService().normalizeResults([mockedLocation1, mockedLocation2])).toHaveLength(2);
    });

    it("should return location in valid schema", () => {
      expect(new GeoService().normalizeResults([mockedLocation1, mockedLocation2])).toMatchObject([
        {
          formatted: mockedLocation1.formatted,
          lat: mockedLocation1.geometry.lat,
          lng: mockedLocation1.geometry.lng
        },
        {
          formatted: mockedLocation2.formatted,
          lat: mockedLocation2.geometry.lat,
          lng: mockedLocation2.geometry.lng
        }
      ]);
    });
  });

  describe("Browser Coords", () => {
    const originalGeolocation = navigator.geolocation;

    const mockedLocation = {
      formatted: "Location name formatted",
      coords: {
        latitude: 25.2,
        longitude: 24.2
      }
    };

    beforeAll(() => {
      const mockedGeolocation = {
        getCurrentPosition: jest.fn().mockImplementationOnce(success =>
          Promise.resolve(
            success({
              coords: mockedLocation.coords
            })
          )
        )
      };
      
      global.navigator.geolocation = mockedGeolocation;
    });

    afterAll(() => {
      // removendo mock para garantir que os outros testes fiquem completamente isolados
      global.navigator.geolocation = originalGeolocation;
    });
    
    it("should return the current coords", () => {
      new GeoService().getCurrentCoords().then(coords => {
        expect(coords).toStrictEqual(mockedLocation.coords);
      })
    });

    it("should return the current location", () => {
      const mockCityResponse = {
        results: [
          {
            formatted: mockedLocation.formatted,
            geometry: {
              lat: mockedLocation.coords.latitude,
              lng: mockedLocation.coords.longitude 
            }
          }
        ]
      };

      axios.get.mockImplementationOnce(() =>
        Promise.resolve({ data :mockCityResponse })
      );
      
      new GeoService().getCurrentLocation().then(location => {
        expect(location).toStrictEqual({
          formatted: mockedLocation.results[0].formatted,
          lat: mockedLocation.results[0].geometry.lat,
          lng: mockedLocation.results[0].geometry.lng
        });
      })
    });

  })
});


