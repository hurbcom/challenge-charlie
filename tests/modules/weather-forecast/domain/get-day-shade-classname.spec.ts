import { DAY_DESCRIPTIONS } from '@/common'
import { getShadeClassName } from '@/modules/weather-forecast/domain/get-day-shade-classname'

import { describe } from '@jest/globals'

describe('getDayShadeClassName', () => {
  it('should return `normal` for today', () => {
    const result = getShadeClassName(DAY_DESCRIPTIONS.TODAY)

    expect(result).toBe('normal')
  })

  it('should return `medium` for tomorrow', () => {
    const result = getShadeClassName(DAY_DESCRIPTIONS.TOMORROW)

    expect(result).toBe('medium')
  })

  it('should return `dark` for day after tomorrow', () => {
    const result = getShadeClassName(DAY_DESCRIPTIONS.DAY_AFTER_TOMORROW)

    expect(result).toBe('dark')
  })
})
