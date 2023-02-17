import { IForecast } from '@/interfaces'

export interface IForecastViewModel {
  forecast: IForecast | null
  unit: string
  className: {
    today: string
    tomorrow: string
    dayAfterTomorrow: string
  }
  getForecast: (query: string) => Promise<void>
  toggleUnit: () => void
}
