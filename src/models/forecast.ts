import { IForecast, IForecastDay } from '@/interfaces'

export class Forecast implements IForecast {
  today: IForecastDay
  tomorrow: IForecastDay
  dayAfterTomorrow: IForecastDay

  constructor({ today, tomorrow, dayAfterTomorrow }: IForecast) {
    this.today = today
    this.tomorrow = tomorrow
    this.dayAfterTomorrow = dayAfterTomorrow
  }
}
