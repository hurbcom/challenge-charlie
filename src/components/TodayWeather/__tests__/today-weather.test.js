import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'

import TodayWeather from '../index'

const setup = () => {
  const weather = {
    main: {
      temp: 20,
      humidity: 12,
      pressure: 12
    },
    weather: [{
      description: "Nuvens Dispersas"
    }],
    wind: {
      speed: 20
    }
  }
  const utils = render(
    <TodayWeather
      backgroundColor={"rgba(241, 196, 15, .7)"}
      isLocationExists={true}
      todayWeather={weather}
      temperatureScale={"Celsius"}
    />
  )
  const temperatureScale = utils.getByTestId('temperature-scale')
  const temperatureDescription = utils.getByTestId('temperature-description')
  const wind = utils.getByTestId('wind')
  const humidity = utils.getByTestId('humidity')
  const pressure = utils.getByTestId('pressure')

  return {
    temperatureScale,
    temperatureDescription,
    wind,
    humidity,
    pressure,
    ...utils,
  }
}

test('It should match the component snapshot', () => {
  const { temperatureScale, temperatureDescription, wind, humidity, pressure } = setup()
  expect(temperatureScale).toMatchInlineSnapshot(`
    <p
      class="clickable"
      data-testid="temperature-scale"
    >
      20
      Celsius
    </p>
  `)

  expect(temperatureDescription).toMatchInlineSnapshot(`
    <h2
      class="sc-bxivhb EhmsT"
      data-testid="temperature-description"
    >
      Nuvens Dispersas
    </h2>
  `)

  expect(wind).toMatchInlineSnapshot(`
    <p
      data-testid="wind"
    >
      Vento: NO 
      20
      km/h
    </p>
  `)

  expect(humidity).toMatchInlineSnapshot(`
    <p
      data-testid="humidity"
    >
      Humidade: 
      12
      %
    </p>
  `)

  expect(pressure).toMatchInlineSnapshot(`
  <p
    data-testid="pressure"
  >
    Pressão: 
    12
    hPA
  </p>
  `)
})