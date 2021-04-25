import { DayType } from './day'
import { CityType } from './city'

export type GlobalContextType = {
  info?: CityType
  weatherPerDay?: Array<DayType>
}
