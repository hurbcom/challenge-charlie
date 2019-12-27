import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'

import WeatherIcon from '../index'

const setup = () => {
  const utils = render(
    <WeatherIcon
      isLocationExists={true}
      weather={''}
    />
  )
  const weatherIcon = utils.getByTestId('weatherIcon')

  return {
    ...utils,
    weatherIcon
  }
}

test('It should match the correct component', () => {
  const weather = {
    main: 'Snow',
    description: ''
  }
  const { getByTestId, rerender } =
    render(<WeatherIcon weather={weather} isLocationExists={true} />)
  expect(getByTestId('weatherIcon').textContent).toBe('snow.svg')

  weather.main = 'Mist'
  rerender(<WeatherIcon weather={weather} isLocationExists={true} />)
  expect(getByTestId('weatherIcon').textContent).toBe('mist.svg')
})

test('It should match the empty component snapshot', () => {
  const { weatherIcon } = setup()
  expect(weatherIcon).toMatchInlineSnapshot(`
    <div
      data-testid="weatherIcon"
    >
      <svg>
        not-applicable.svg
      </svg>
    </div>
  `)
})