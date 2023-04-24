import { mocked } from 'jest-mock'
import { render, screen } from '@testing-library/react'

import { useLocation } from '~/hooks/useLocation'

import { Tomorrow } from '.'

import { LocationContextDataProps } from '~/contexts/LocationContext'

jest.mock('../../../hooks/useLocation')

const TomorrowData = [
  { temp: 10, tempC: '10 °C', tempF: '50 °F', dt_txt: '21/04/2023' },
  { temp: 13, tempC: '13 °C', tempF: '55 °F', dt_txt: '22/04/2023' },
]

describe('Tomorrow component', () => {
  it('Correctly renders temperature in °C', () => {
    const useLocationMocked = mocked(useLocation)
    useLocationMocked.mockReturnValue({
      tempType: 'tempC',
    } as LocationContextDataProps)

    render(<Tomorrow data={TomorrowData} />)

    expect(screen.getByText('AMANHÃ')).toBeInTheDocument()
    expect(screen.getByText('10 °C')).toBeInTheDocument()
  })

  it('Correctly renders temperature in °F', () => {
    const useLocationMocked = mocked(useLocation)
    useLocationMocked.mockReturnValue({
      tempType: 'tempF',
    } as LocationContextDataProps)

    render(<Tomorrow data={TomorrowData} />)

    expect(screen.getByText('AMANHÃ')).toBeInTheDocument()
    expect(screen.getByText('50 °F')).toBeInTheDocument()
  })
})
