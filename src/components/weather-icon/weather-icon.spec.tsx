import { screen } from '@testing-library/react'
import { WeatherIcon } from './weather-icon.comp'
import { render } from '@config/tests/render'

describe('WeatherIcon', () => {
    it('renders the Thunderstorm icon when weather is Thunderstorm', () => {
        render(<WeatherIcon weather="Thunderstorm" color="gray" />)
        const thunderstormIcon = screen.getByTestId('thunderstorm-icon')
        expect(thunderstormIcon).toBeInTheDocument()
    })

    it('renders the Drizzle icon when weather is Drizzle', () => {
        render(<WeatherIcon weather="Drizzle" color="blue" />)
        const drizzleIcon = screen.getByTestId('drizzle-icon')
        expect(drizzleIcon).toBeInTheDocument()
    })

    it('renders the Rain icon when weather is Rain', () => {
        render(<WeatherIcon weather="Rain" color="blue" />)
        const rainIcon = screen.getByTestId('rain-icon')
        expect(rainIcon).toBeInTheDocument()
    })

    it('renders the Snow icon when weather is Snow', () => {
        render(<WeatherIcon weather="Snow" color="white" />)
        const snowIcon = screen.getByTestId('snow-icon')
        expect(snowIcon).toBeInTheDocument()
    })

    it('renders the Mist icon when weather is Mist', () => {
        render(<WeatherIcon weather="Mist" color="gray" />)
        const mistIcon = screen.getByTestId('mist-icon')
        expect(mistIcon).toBeInTheDocument()
    })

    it('renders the Smoke icon when weather is Smoke', () => {
        render(<WeatherIcon weather="Smoke" color="gray" />)
        const smokeIcon = screen.getByTestId('smoke-icon')
        expect(smokeIcon).toBeInTheDocument()
    })

    it('renders the Wind icon when weather is Dust', () => {
        render(<WeatherIcon weather="Dust" color="gray" />)
        const windIcon = screen.getByTestId('wind-icon')
        expect(windIcon).toBeInTheDocument()
    })

    it('renders the Wind icon when weather is Sand', () => {
        render(<WeatherIcon weather="Sand" color="gray" />)
        const windIcon = screen.getByTestId('wind-icon')
        expect(windIcon).toBeInTheDocument()
    })

    it('renders the Wind icon when weather is Ash', () => {
        render(<WeatherIcon weather="Ash" color="gray" />)
        const windIcon = screen.getByTestId('wind-icon')
        expect(windIcon).toBeInTheDocument()
    })

    it('renders the Wind icon when weather is Squall', () => {
        render(<WeatherIcon weather="Squall" color="gray" />)
        const windIcon = screen.getByTestId('wind-icon')
        expect(windIcon).toBeInTheDocument()
    })

    it('renders the Clouds icon when weather is Clouds', () => {
        render(<WeatherIcon weather="Clouds" color="gray" />)
        const cloudsIcon = screen.getByTestId('clouds-icon')
        expect(cloudsIcon).toBeInTheDocument()
    })
})
