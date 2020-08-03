import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import WeatherSection from './WeatherSection'
import { weatherStub } from './__stubs__/weatherStub'
import { forecastStub } from './__stubs__/forecastsStub'

beforeAll(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          ...weatherStub,
          ...forecastStub,
        }),
    }),
  )
})

beforeEach(() => {
  render(<WeatherSection city='New York' />)
})

it('renders without crashing', () => {
  waitFor(() => {
    const wrapper = screen.getAllByTestId('section-wrapper')
    expect(wrapper).toBeInTheDocument()
    expect(wrapper).toHaveLength(3)
  })
})
