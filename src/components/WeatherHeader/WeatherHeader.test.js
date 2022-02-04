import React from 'react'
import { render } from '@testing-library/react'
import WeatherHeader from './WeatherHeader'

describe('WeatherHeader', () => {
  test('matches snapshot', () => {
    const { conatiner } = render(
      <WeatherHeader cityName="Rio de Janeiro" stateName="Rio de Janeiro" />
    )
    expect(conatiner).toMatchSnapshot()
  })
})
