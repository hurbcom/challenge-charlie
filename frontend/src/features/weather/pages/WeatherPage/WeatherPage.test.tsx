// import mockApi from '../../../../infrastructure/test-helpers/mock-api'
import userEvent from '@testing-library/user-event'
import locationBuilder from '../../../../infrastructure/builders/location.builder'
import weatherBuilder from '../../../../infrastructure/builders/weather.builder'
import mockApi from '../../../../infrastructure/test-helpers/mock-api'
import { render, screen } from '../../../../infrastructure/test-helpers/test-renderer'
import WeatherApi from '../../WeatherApi'
import { DayTypes, Weather } from '../../WeatherTypes'
import WeatherPage from './WeatherPage'
import convertToFarenheit from '../../../../infrastructure/convert-to-farenheit'

jest.mock('../../WeatherApi')

const position = {
  coords: {
    latitude: 1,
    longitude: 1,
  },
}

function mockGeoCodeOnce() {
  (navigator.geolocation.getCurrentPosition as jest.Mock).mockImplementationOnce(
    (callback) => callback(position),
  )
}

describe('WeatherPage', () => {
  test('deve exibir placeholder padrão da tela', async () => {
    render(<WeatherPage />)

    expect(await screen.findByTestId('http://bgimage.jpg')).toBeInTheDocument()
    expect(screen.getAllByText(/0 °C/i)).toHaveLength(3)
    expect(screen.getAllByText('-')).toHaveLength(4)
    expect(screen.getAllByAltText('clima')).toHaveLength(3)
    expect(screen.getByText('Vento: - /-km/h')).toBeVisible()
    expect(screen.getByText('Humidade: -%')).toBeVisible()
    expect(screen.getByText('Pressão: -hPA')).toBeVisible()
    expect(screen.getByPlaceholderText('Digite sua cidade')).toBeVisible()
  })

  test('deve exibir clima corretamente ao obter pela geolocalização', async () => {
    const location = locationBuilder().create()
    const forecast = [
      weatherBuilder().withDay(DayTypes.Today).create() as Weather,
      weatherBuilder().withDay(DayTypes.Tomorrow).create() as Weather,
      weatherBuilder().withDay(DayTypes.AfterTomorrow).create() as Weather,
    ]
    mockGeoCodeOnce()
    mockApi(WeatherApi.getLocationByLatAndLng).mockResolvedValueOnce({ data: location })
    mockApi(WeatherApi.getForecastByCity).mockResolvedValueOnce({ data: forecast })

    render(<WeatherPage />)

    const today = forecast[0]
    const tomorrow = forecast[1]
    const afterTomorrow = forecast[2]
    expect(await screen.findByText(DayTypes.Today)).toBeVisible()
    expect(screen.getByText(new RegExp(`${today.temperature} °C`, 'i'))).toBeVisible()
    expect(screen.getByText(today.description)).toBeVisible()
    expect(screen.getByText(`Vento: ${today.windDirection} ${today.windSpeed}km/h`)).toBeVisible()
    expect(screen.getByText(`Humidade: ${today.humidity}%`)).toBeVisible()
    expect(screen.getByText(`Pressão: ${today.pressure}hPA`)).toBeVisible()

    expect(screen.getByText(new RegExp(`${tomorrow.temperature} °C`, 'i'))).toBeVisible()
    expect(screen.getByText(DayTypes.Tomorrow)).toBeVisible()

    expect(screen.getByText(new RegExp(`${afterTomorrow.temperature} °C`, 'i'))).toBeVisible()
    expect(screen.getByText(DayTypes.AfterTomorrow)).toBeVisible()
  })

  test('deve exibir clima após digitar cidade no input', async () => {
    const forecast = [
      weatherBuilder().withDay(DayTypes.Today).create() as Weather,
      weatherBuilder().withDay(DayTypes.Tomorrow).create() as Weather,
      weatherBuilder().withDay(DayTypes.AfterTomorrow).create() as Weather,
    ]
    mockApi(WeatherApi.getForecastByCity).mockResolvedValueOnce({ data: forecast })

    render(<WeatherPage />)

    userEvent.click(screen.getByPlaceholderText('Digite sua cidade'))
    userEvent.type(screen.getByPlaceholderText('Digite sua cidade'), 'Foo Bar')
    await screen.findByDisplayValue('Foo Bar')

    const today = forecast[0]
    const tomorrow = forecast[1]
    const afterTomorrow = forecast[2]
    expect(await screen.findByText(DayTypes.Today)).toBeVisible()
    expect(screen.getByText(new RegExp(`${today.temperature} °C`, 'i'))).toBeVisible()
    expect(screen.getByText(today.description)).toBeVisible()
    expect(screen.getByText(`Vento: ${today.windDirection} ${today.windSpeed}km/h`)).toBeVisible()
    expect(screen.getByText(`Humidade: ${today.humidity}%`)).toBeVisible()
    expect(screen.getByText(`Pressão: ${today.pressure}hPA`)).toBeVisible()

    expect(screen.getByText(new RegExp(`${tomorrow.temperature} °C`, 'i'))).toBeVisible()
    expect(screen.getByText(DayTypes.Tomorrow)).toBeVisible()

    expect(screen.getByText(new RegExp(`${afterTomorrow.temperature} °C`, 'i'))).toBeVisible()
    expect(screen.getByText(DayTypes.AfterTomorrow)).toBeVisible()
  })

  test('deve alterar tipo temperatura de celsius para farenheit ao clicar', async () => {
    const location = locationBuilder().create()
    const forecast = [
      weatherBuilder().withDay(DayTypes.Today).create() as Weather,
      weatherBuilder().withDay(DayTypes.Tomorrow).create() as Weather,
      weatherBuilder().withDay(DayTypes.AfterTomorrow).create() as Weather,
    ]
    mockGeoCodeOnce()
    mockApi(WeatherApi.getLocationByLatAndLng).mockResolvedValueOnce({ data: location })
    mockApi(WeatherApi.getForecastByCity).mockResolvedValueOnce({ data: forecast })

    render(<WeatherPage />)

    const today = forecast[0]
    const tomorrow = forecast[1]
    const afterTomorrow = forecast[2]
    userEvent.click(await screen.findByText(new RegExp(`${today.temperature} °C`, 'i')))

    const convert = (temperature) => Math.round(convertToFarenheit(temperature))
    expect(await screen.findByText(new RegExp(`${convert(today.temperature)} °F`, 'i'))).toBeVisible()
    expect(screen.getByText(new RegExp(`${convert(tomorrow.temperature)} °F`, 'i'))).toBeVisible()
    expect(screen.getByText(new RegExp(`${convert(afterTomorrow.temperature)} °F`, 'i'))).toBeVisible()
  })
})
