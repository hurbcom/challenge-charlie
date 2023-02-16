import { WIND_DIRECTIONS } from '@/common'

export function getWindDirection(degree: number) {
  const index = Math.round(Math.floor(degree / 45))

  return WIND_DIRECTIONS[(index * 45) as keyof typeof WIND_DIRECTIONS]
}
