export default class NominatimServiceAdapter {
  getCurrentLocation(payload: any) {
    return {
      city: payload.address.city,
      state: payload.address.state,
      country: payload.address.country,
    };
  }
}
