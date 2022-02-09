import React from 'react'
import { render } from '@testing-library/react'
import { Template } from '../../UI'
import WeatherHeader from './WeatherHeader'

describe('WeatherHeader', () => {
  test('matches snapshot', () => {
    const { container } = render(
      <Template>
        <WeatherHeader cityName="Rio de Janeiro" stateName="Rio de Janeiro" />
      </Template>
    )
    expect(container).toMatchSnapshot()
  })
})
