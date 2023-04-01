interface OpenCageInterface {
  longitude: string;
  latitude: string;
  apiKey?: string;
  url?: string;
}

class OpenCageService implements OpenCageInterface {
  longitude: string;
  latitude: string;
  apiKey = process.env.OPENCAGE_API_KEY;
  url = `https://api.opencagedata.com/geocode/v1/json?no_annotations=1&key=${this.apiKey}&q=`;

  constructor({ latitude, longitude }: OpenCageInterface) {
    this.longitude = longitude;
    this.latitude = latitude;
    this.url += `${this.latitude},${this.longitude}`;
    try {
      if (!!this.apiKey === false) {
        throw new Error(
          '[OpenCageService] No OpenCage API key found. Provide a key as an env var.'
        );
      }
    } catch (error) {
      console.error(error);
    }
  }

  public async retrieveLocation(): Promise<JSON> {
    return await fetch(this.url).then(async (res) => {
      const { results } = await res.json();
      return results;
    });
  }
}

export default OpenCageService;
