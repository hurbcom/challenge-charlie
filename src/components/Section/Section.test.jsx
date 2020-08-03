import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Section from './Section'

describe('initial rendering', () => {
  it('renders without crashing', () => {
    render(<Section temperatureBasedClassName='unset-light' />)
    expect(screen.getByTestId('section-wrapper')).toBeInTheDocument()
  })

  it('renders the loading icon initially', () => {
    render(<Section temperatureBasedClassName='unset-light' />)
    expect(screen.getByTestId('loading-icon')).toBeInTheDocument()
  })
})

describe('with weather', () => {
  const props = {
    temperatureBasedClassName: 'unset-light',
    weather: {
      description: 'Cloudy',
      descriptionId: 801,
      day: 'Today',
      humidity: 70,
      pressure: 1013,
      wind: {
        degrees: 123,
        speed: 3,
      },
    },
  }

  it('renders the expected icon', () => {
    render(<Section {...props} />)

    expect(screen.getByTestId('clouds-icon')).toBeInTheDocument()
  })

  it('renders the expected weather wrapper', () => {
    render(<Section {...props} />)

    expect(screen.getByTestId('weather-wrapper')).toBeInTheDocument()
  })
})

describe('with error', () => {
  it('renders the corresponding error message', () => {
    render(<Section errorMessage='City not found' temperatureBasedClassName='unset-light' />)

    expect(screen.getByRole('heading').textContent).toEqual('City not found')
  })
})
