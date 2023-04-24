import { mocked } from 'jest-mock'
import { render, screen } from '@testing-library/react'

import { useLocation } from '~/hooks/useLocation'

import { Today } from '.'

import { LocationContextDataProps } from '~/contexts/LocationContext'

jest.mock('../../../hooks/useLocation')

const TodayData = {
  main: {
    temp: 10,
    tempC: '10 °C',
    tempF: '50 °F',
    pressure: 1,
    humidity: 1,
  },

  wind: {
    speed: 1,
    deg: 1,
  },

  weather: {
    icon: '01',
    description: 'Céu Limpo',
  },
}

describe('Today component', () => {
  it('Correctly renders temperature in °C', () => {
    const useLocationMocked = mocked(useLocation)
    useLocationMocked.mockReturnValue({
      tempType: 'tempC',
    } as LocationContextDataProps)

    render(<Today data={TodayData} />)

    expect(screen.getByText('HOJE')).toBeInTheDocument()
    expect(screen.getByText('10 °C')).toBeInTheDocument()
  })

  it('Correctly renders temperature in °F', () => {
    const useLocationMocked = mocked(useLocation)
    useLocationMocked.mockReturnValue({
      tempType: 'tempF',
    } as LocationContextDataProps)

    render(<Today data={TodayData} />)

    expect(screen.getByText('HOJE')).toBeInTheDocument()
    expect(screen.getByText('50 °F')).toBeInTheDocument()
  })

  it('Correct rendering of weather description', () => {
    render(<Today data={TodayData} />)

    expect(screen.getByText('Céu Limpo')).toBeInTheDocument()
  })

  it('Correct rendering of other information', () => {
    render(<Today data={TodayData} />)

    expect(screen.getByText('Vento: NO 1 km/h')).toBeInTheDocument()
    expect(screen.getByText('Humidade: 1%')).toBeInTheDocument()
    expect(screen.getByText('Pressão: 1hPA')).toBeInTheDocument()
  })
})
