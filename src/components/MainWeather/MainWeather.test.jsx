import React from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import MainWeather from './MainWeather'

const temperature = 30

beforeEach(() => {
  render(<MainWeather day='Today' temperature={temperature} />)
})

it('renders without crashing', () => {
  expect(screen.getByTestId('main-weather-wrapper')).toBeInTheDocument()
})

it('renders the expected day', () => {
  expect(screen.getByRole('heading').textContent).toEqual('Today')
})

it('renders the expected temperature', () => {
  const target = `${temperature} ºC`
  expect(screen.getByText(target)).toBeInTheDocument()
})

it('toggles temperature on click', () => {
  const initialTemperature = `${temperature} ºC`
  const targetValue = '86 ºF'

  waitFor(() => {
    const temperatureText = screen.getByText(initialTemperature)
    fireEvent.click(temperatureText)
    expect(screen.getByText(targetValue)).toBeInTheDocument()
  })
})
