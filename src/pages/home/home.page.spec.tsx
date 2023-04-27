import { screen, fireEvent, waitFor } from '@testing-library/react'
import { requests } from '@services'
import { Home } from './home.page'
import { render } from '@config/tests/render'

jest.mock('@services')

describe('Home', () => {
    const mockThreeDaysWeather = [
        {
            temp: 25,
            description: 'Sunny',
            humidity: 80,
            pressure: 1000,
            wind: 2,
            windDirection: 'NE',
        },
        {
            temp: 22,
            description: 'Cloudy',
            humidity: 85,
            pressure: 990,
            wind: 3,
            windDirection: 'E',
        },
        {
            temp: 23,
            description: 'Rainy',
            humidity: 90,
            pressure: 1010,
            wind: 4,
            windDirection: 'SE',
        },
    ]

    beforeEach(() => {
        Object.defineProperty(navigator, 'geolocation', {
            value: {
                getCurrentPosition: jest
                    .fn()
                    .mockImplementationOnce((success) =>
                        Promise.resolve(
                            success({
                                coords: {
                                    latitude: 51.1,
                                    longitude: 45.3,
                                },
                            })
                        )
                    ),
            },
            writable: true,
        })
    })

    afterEach(() => {
        jest.clearAllMocks()
    })

    it('renders the component', async () => {
        render(<Home />)

        expect(screen.getByTestId('select')).toBeInTheDocument()
    })

    it('fetches the weather for a city and displays the temperature', async () => {
        const mockGetWeather = requests.openWeather.getWeather as jest.Mock
        mockGetWeather.mockResolvedValueOnce(mockThreeDaysWeather)

        render(<Home />)

        const input = screen.getByTestId('input') as HTMLInputElement
        fireEvent.change(input, { target: { value: 'London' } })
        fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' })

        expect(input.value).toBe('London')

        await waitFor(() => {
            expect(screen.getByText('25 °C')).toBeInTheDocument()
        })
        expect(screen.getByText('Sunny')).toBeInTheDocument()
        expect(screen.getByText('wind: NE 7.2km/h')).toBeInTheDocument()
        expect(screen.getByText('humidity: 80%')).toBeInTheDocument()
        expect(screen.getByText('pressure: 1000hPA')).toBeInTheDocument()

        expect(requests.openWeather.getWeather).toHaveBeenCalledTimes(1)
        expect(requests.openWeather.getWeather).toHaveBeenCalledWith('London')
    })

    it('fetches the weather for a city and displays the temperature for tomorrow', async () => {
        const mockGetWeather = requests.openWeather.getWeather as jest.Mock
        mockGetWeather.mockResolvedValueOnce(mockThreeDaysWeather)

        render(<Home />)

        const input = screen.getByTestId('input') as HTMLInputElement
        fireEvent.change(input, { target: { value: 'London' } })
        fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' })

        await waitFor(() => {
            expect(screen.getByText('22 °C')).toBeInTheDocument()
        })

        expect(requests.openWeather.getWeather).toHaveBeenCalledTimes(1)
        expect(requests.openWeather.getWeather).toHaveBeenCalledWith('London')
    })

    it('fetches the weather for a city and displays the temperature for the day after tomorrow', async () => {
        const mockGetWeather = requests.openWeather.getWeather as jest.Mock
        mockGetWeather.mockResolvedValueOnce(mockThreeDaysWeather)

        render(<Home />)

        const input = screen.getByTestId('input') as HTMLInputElement
        fireEvent.change(input, { target: { value: 'London' } })
        fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' })

        await waitFor(() => {
            expect(screen.getByText('23 °C')).toBeInTheDocument()
        })

        expect(requests.openWeather.getWeather).toHaveBeenCalledTimes(1)
        expect(requests.openWeather.getWeather).toHaveBeenCalledWith('London')
    })
})
