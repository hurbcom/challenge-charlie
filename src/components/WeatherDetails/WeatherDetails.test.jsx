import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import WeatherDetails from './WeatherDetails'

const props = {
  day: 'Tomorrow',
  description: 'Cloudy',
  humidity: 40,
  pressure: 1019,
  temperature: 14,
  windDegrees: 130,
  windSpeed: 4,
}

beforeEach(() => {
  render(<WeatherDetails {...props} />)
})

it('renders without crashing', () => {
  expect(screen.getByTestId('details-wrapper')).toBeInTheDocument()
})

it('renders the expected description', () => {
  expect(screen.getByRole('heading').textContent).toEqual(props.description)
})

it('renders the expected wind information', () => {
  const target = 'Wind: SE 1.0 km/h'
  expect(screen.getByText(target).textContent).toEqual(target)
})

it('renders the expected humidity information', () => {
  const target = 'Humidity: 40 %'
  expect(screen.getByText(target).textContent).toEqual(target)
})

it('renders the expected pressure information', () => {
  const target = 'Pressure: 1019 hPA'
  expect(screen.getByText(target).textContent).toEqual(target)
})
