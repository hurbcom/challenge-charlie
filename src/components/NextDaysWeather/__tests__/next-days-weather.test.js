import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'

import NextDaysWeather from '../index'

const setup = () => {
  const utils = render(
    <NextDaysWeather
      dayName={"Depois de Amanhã"}
      temperature={20}
      temperatureScale={'ºC'}
      isLocationExists={true}
    />
  )
  const dayname = utils.getByTestId('dayname')
  const temperature = utils.getByTestId('temperature')
  return {
    dayname,
    temperature,
    ...utils,
  }
}

test('It should render correct temperature', () => {
  const { getByTestId, rerender } = 
    render(<NextDaysWeather temperature={25} temperatureScale={'ºC'} isLocationExists={true} />)
  expect(getByTestId('temperature').textContent).toBe('25ºC')

  rerender(<NextDaysWeather temperature={15} temperatureScale={'ºC'} isLocationExists={true} />)
  expect(getByTestId('temperature').textContent).toBe('15ºC')
})

test('It should render correct dayname', () => {
  const { getByTestId, rerender } = 
    render(<NextDaysWeather dayName={"Amanhã"} temperature={25} isLocationExists={true} />)
  expect(getByTestId('dayname').textContent).toBe('Amanhã')

  rerender(<NextDaysWeather dayName={"Depois de Amanhã"} />)
  expect(getByTestId('dayname').textContent).toBe('Depois de Amanhã')
})

test('It should render a not found content and after one with data', () => {
  const { getByTestId, rerender } = 
    render(<NextDaysWeather isLocationExists={false} />)
  expect(getByTestId('not-found').textContent).toBe('Não encontrada')

  rerender(<NextDaysWeather dayName={"Depois de Amanhã"} temperature={15} temperatureScale={'ºC'} isLocationExists={true} />)
  expect(getByTestId('dayname').textContent).toBe('Depois de Amanhã')
  expect(getByTestId('temperature').textContent).toBe('15ºC')
})

test('It should match the component snapshot', () => {
  const { dayname, temperature } = setup()
  expect(dayname).toMatchInlineSnapshot(`
  <p
    data-testid="dayname"
  >
    Depois de Amanhã
  </p>
  `)
  expect(temperature).toMatchInlineSnapshot(`
  <p
    class="clickable"
    data-testid="temperature"
  >
    20
    ºC
  </p>
  `)
})