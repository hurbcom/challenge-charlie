import { WIND_DIRECTIONS } from '@/common'
import { IWind, TWindDirection } from '@/interfaces'

export class Wind implements IWind {
  direction: TWindDirection
  degrees: number
  speed: number

  constructor({ degrees, speed }: { degrees: number; speed: number }) {
    this.degrees = degrees
    this.speed = speed
    this.direction = this.getDirection(degrees)
  }

  private getDirection(degrees: number) {
    const index = Math.round(Math.floor(degrees / 45))

    const direction =
      WIND_DIRECTIONS[(index * 45) as keyof typeof WIND_DIRECTIONS]

    return direction
  }
}
