// __tests__/WeatherBox.test.js
import React from 'react'
import { render, screen } from '@testing-library/react'
import WeatherBox from '@/components/WeatherBox/weather.box'
import * as utils from '@/utils/utils'

jest.mock('@/utils/utils')
jest.mock('@/components/Icons/icons', () => ({
  Icons: {
    clearSky: () => <div data-testid="clearSky">clearSky</div>,
    fewClouds: () => <div data-testid="fewClouds">fewClouds</div>,
    scatteredClouds: () => <div data-testid="scatteredClouds">scatteredClouds</div>,
    brokenClouds: () => <div data-testid="brokenClouds">brokenClouds</div>,
    showerRain: () => <div data-testid="showerRain">showerRain</div>,
    rain: () => <div data-testid="rain">rain</div>,
    thunderstorm: () => <div data-testid="thunderstorm">thunderstorm</div>,
    snow: () => <div data-testid="snow">snow</div>,
    mist: () => <div data-testid="mist">mist</div>,
  },
}))

describe('WeatherBox', () => {
  const mockWeatherData = [
    {
      dt_txt: '2024-05-29 09:00:00',
      weather: [{ id: 1, main: 'Clear', description: 'clear sky', icon: '01d' }],
      main: { temp: 20, feels_like: 19, temp_min: 18, temp_max: 22, pressure: 1012, humidity: 60 },
      wind: { speed: 5, deg: 180 },
      sys: { country: 'BR', sunrise: 1600416000, sunset: 1600459200 },
      name: 'Rio de Janeiro',
    },
    {
      dt_txt: '2024-05-30 09:00:00',
      weather: [{ id: 1, main: 'Clear', description: 'clear sky', icon: '01d' }],
      main: { temp: 20, feels_like: 19, temp_min: 18, temp_max: 22, pressure: 1012, humidity: 60 },
      wind: { speed: 5, deg: 180 },
      sys: { country: 'BR', sunrise: 1600416000, sunset: 1600459200 },
      name: 'Rio de Janeiro',
    },
    {
      dt_txt: '2024-05-31 09:00:00',
      weather: [{ id: 1, main: 'Clear', description: 'clear sky', icon: '01d' }],
      main: { temp: 20, feels_like: 19, temp_min: 18, temp_max: 22, pressure: 1012, humidity: 60 },
      wind: { speed: 5, deg: 180 },
      sys: { country: 'BR', sunrise: 1600416000, sunset: 1600459200 },
      name: 'Rio de Janeiro',
    },
  ]

  beforeEach(() => {
    jest.spyOn(utils, 'handleTodaysWeather').mockReturnValue(mockWeatherData[0])
    jest.spyOn(utils, 'handleBackgroundColor').mockReturnValue('linear-gradient(to bottom, rgba(250, 204, 21, 0.9), rgba(250, 204, 21, 0.7))')
    jest.spyOn(utils, 'handleNextDaysWeather').mockReturnValue([mockWeatherData[1], mockWeatherData[2]])
    jest.spyOn(utils, 'handleTipOrError').mockReturnValue('Dica: Não encontrou a cidade que procura? Experimente separar a cidade e o estado por vírgula.')
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  it('should render current weather', () => {
    render(<WeatherBox weather={mockWeatherData} error={false} />)

    expect(screen.getByText('HOJE')).toBeInTheDocument()
    expect(screen.getByText('Vento: 5 km/h')).toBeInTheDocument()
    expect(screen.getByText('Umidade: 60%')).toBeInTheDocument()
    expect(screen.getByText('Pressão: 1012hPa')).toBeInTheDocument()
  })

  it('should render next days weather', () => {
    render(<WeatherBox weather={mockWeatherData} error={false} />)

    expect(screen.getByText('AMANHÃ')).toBeInTheDocument()
    expect(screen.getByText('DEPOIS DE AMANHÃ')).toBeInTheDocument()
  })

  it('should render error message', () => {
    jest.spyOn(utils, 'handleTipOrError').mockReturnValue('Sua busca não retornou resultados. Que tal tentar novamente?')
    render(<WeatherBox weather={mockWeatherData} error={true} />)

    expect(screen.getByText('Sua busca não retornou resultados. Que tal tentar novamente?')).toBeInTheDocument()
  })
})
