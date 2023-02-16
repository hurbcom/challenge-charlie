import { DAY_DESCRIPTIONS } from '@/common'

export function getShadeClassName(temperature: string) {
  const SHADES = {
    [DAY_DESCRIPTIONS.TODAY]: 'normal',
    [DAY_DESCRIPTIONS.TOMORROW]: 'medium',
    [DAY_DESCRIPTIONS.DAY_AFTER_TOMORROW]: 'dark',
  }

  return SHADES[temperature]
}
