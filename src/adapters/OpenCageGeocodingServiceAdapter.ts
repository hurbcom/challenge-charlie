export default class OpenCageGeocodingServiceAdapter {
  getCurrentLocation(payload: any) {
    return {
      city: payload.results[0].components.city,
      state: payload.results[0].components.state,
      country: payload.results[0].components.country,
    };
  }
}
