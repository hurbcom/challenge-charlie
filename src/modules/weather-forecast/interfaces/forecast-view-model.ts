import { IForecast, IGeoLocation } from '@/interfaces'

export interface State extends IForecast {
  geolocation: IGeoLocation
}

export interface IForecastViewModel {
  state: State | null
  unit: string
  className: {
    today: string
    tomorrow: string
    dayAfterTomorrow: string
  }
  searchForecast: (query: string) => Promise<void>
  toggleUnit: () => void
}
