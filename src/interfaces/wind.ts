export type TWindDirection = 'N' | 'NE' | 'E' | 'SE' | 'S' | 'SW' | 'W' | 'NW'

export interface IWind {
  direction: TWindDirection
  degrees: number
  speed: number
}
