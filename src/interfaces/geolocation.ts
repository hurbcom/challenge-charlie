export interface IGeoLocation {
  latitude: number
  longitude: number
  city: string
}

export interface IGeoLocationApiResponse {
  results: Array<{
    formatted: string
    geometry: {
      lat: number
      lng: number
    }
  }>
}
