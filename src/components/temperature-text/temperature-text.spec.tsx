import { render } from '@config/tests/render'
import { screen, fireEvent } from '@testing-library/react'
import { TemperatureText } from './temperature-text.comp'

describe('TemperatureText', () => {
    it('shows temperature in celsius by default', () => {
        const temperature = 20
        render(<TemperatureText temperature={temperature} color="red" />)
        const temperatureText = screen.getByText(
            `${Math.round(temperature)} °C`
        )
        expect(temperatureText).toBeInTheDocument()
    })

    it('converts temperature to farenheit when clicked', () => {
        const temperature = 20
        render(<TemperatureText temperature={temperature} color="red" />)
        const temperatureText = screen.getByText(
            `${Math.round(temperature)} °C`
        )
        fireEvent.click(temperatureText)
        expect(screen.getByText(`${Math.round(68)} °F`)).toBeInTheDocument()
        fireEvent.click(temperatureText)
        expect(
            screen.getByText(`${Math.round(temperature)} °C`)
        ).toBeInTheDocument()
    })
})
