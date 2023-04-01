export type LocalityType = { latitude: string; longitude: string };

interface OpenCageInterface {
  apiKey?: string;
  url?: string;
  queryString: string;
  retrieveLocation: (locality: LocalityType) => Promise<JSON>;
}

class OpenCageService implements OpenCageInterface {
  apiKey?: string = process.env.OPENCAGE_API_KEY;
  url?: string = 'https://api.opencagedata.com/geocode/v1/json?';
  queryString: string = `no_annotations=1&key=${this.apiKey}&q=`;

  constructor(args?: OpenCageInterface) {
    this.apiKey = args?.apiKey || this.apiKey;
    this.url = args?.url || this.url;
  }

  async retrieveLocation(locality: { longitude: string; latitude: string }): Promise<JSON> {
    const fullUrl = this.url + this.queryString + `${locality.latitude}','${locality.longitude}`;
    return await fetch(fullUrl).then(async (res) => {
      return await res.json();
    });
  }
}

export default OpenCageService;
