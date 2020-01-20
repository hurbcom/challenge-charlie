import OpenCageService from "../external/OpenCageService";

export default class GeoService {
  constructor() {
    this.openCageService = new OpenCageService();
  }

  async getCurrentLocation() {
    return this.getCurrentCoords().then(({ latitude, longitude }) => {
      return this.openCageService
        .getLocation(latitude, longitude)
        .then(data => this.normalizeResults(data.results))
        .then(data => data[0]);
    });
  }

  async findLocationByName(locationName) {
    return this.openCageService
      .findLocationByName(locationName)
      .then(data => this.normalizeResults(data.results));
  }

  async getCurrentCoords() {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) return reject("unavailable");

      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          resolve(coords);
        },
        error => {
          reject(error);
        }
      );
    });
  }

  normalizeResults(results) {
    return results.map(locationData => {
      return {
        location: locationData.components.location,
        countryCode: String(locationData.components.country_code).toUpperCase(),
        stateCode: String(locationData.components.state_code).toUpperCase(),
        type: locationData.components._type,
        formatted: locationData.formatted,
        lat: locationData.geometry.lat,
        lng: locationData.geometry.lng
      };
    });
  }
}