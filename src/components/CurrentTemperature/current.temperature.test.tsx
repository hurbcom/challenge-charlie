import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import CurrentTemperature from '@/components/CurrentTemperature/current.temperature'

describe('test for CurrentTemperature component', () => {
  it('should render correct temperature, label and opposite unit button', () => {
    const setShowCelsius = jest.fn()
    render(
      <CurrentTemperature
        temperature={25}
        label="HOJE"
        showCelsius={true}
        setShowCelsius={setShowCelsius}
      />
    )

    expect(screen.getByText('HOJE')).toBeInTheDocument()
    expect(screen.getByText('25°C')).toBeInTheDocument()
    expect(screen.getByText('Fahrenheit')).toBeInTheDocument()
  })

  it('should display the temperature in Fahrenheit when showCelsius is false', () => {
    const setShowCelsius = jest.fn()
    render(
      <CurrentTemperature
        temperature={25}
        label="HOJE"
        showCelsius={false}
        setShowCelsius={setShowCelsius}
      />
    )

    expect(screen.getByText('HOJE')).toBeInTheDocument()
    expect(screen.getByText('77°F')).toBeInTheDocument()
    expect(screen.getByText('Celsius')).toBeInTheDocument()
  })

  it('should call setShowCelsius when the button is clicked', () => {
    const setShowCelsius = jest.fn()
    render(
      <CurrentTemperature
        temperature={25}
        label="Current Temp"
        showCelsius={true}
        setShowCelsius={setShowCelsius}
      />
    )

    fireEvent.click(screen.getByText('Fahrenheit'))
    expect(setShowCelsius).toHaveBeenCalledWith(false)
  })
})
