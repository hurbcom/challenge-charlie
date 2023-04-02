interface LocalityInterface {
  latitude: string;
  longitude: string;
  apiKey: string;
}

class LocationService implements LocalityInterface {
  latitude: string;
  longitude: string;
  apiKey: string;
  constructor({ latitude, longitude, apiKey }: LocalityInterface) {
    this.latitude = latitude;
    this.longitude = longitude;
    this.apiKey = apiKey;
    try {
      if (!!this.apiKey === false && this.constructor !== LocationService) {
        throw new Error(
          `[${this.constructor.name}] API key not found. Provide a key as an env var.`
        );
      }
    } catch (error) {
      console.error(error);
    }
  }
}

export default LocationService;
