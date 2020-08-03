import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Weather from './Weather'

const props = {
  day: 'Tomorrow',
  weather: { temperature: 14 },
}

it('renders without crashing', () => {
  render(<Weather {...props} />)
  expect(screen.getByTestId('weather-wrapper')).toBeInTheDocument()
})

describe('without weather details', () => {
  it('renders main weather', () => {
    render(<Weather {...props} />)
    expect(screen.getByTestId('main-weather-wrapper')).toBeInTheDocument()
  })

  it('does not render details section', () => {
    render(<Weather {...props} />)
    expect(screen.queryByTestId('details-wrapper')).not.toBeInTheDocument()
  })
})

describe('with weather details', () => {
  const withDetailsProps = {
    day: 'Tomorrow',
    weather: {
      description: 'Cloudy',
      humidity: 40,
      pressure: 1019,
      temperature: 14,
      wind: {
        degrees: 130,
        speed: 4,
      },
    },
  }

  it('renders details section', () => {
    render(<Weather {...withDetailsProps} />)
    expect(screen.getByTestId('details-wrapper')).toBeInTheDocument()
  })
})
