import { IGeoLocation } from '@/interfaces'

export class GeoLocation implements IGeoLocation {
  latitude: number
  longitude: number
  city: string

  constructor({ latitude, longitude, city }: IGeoLocation) {
    this.latitude = latitude
    this.longitude = longitude
    this.city = city
  }
}
