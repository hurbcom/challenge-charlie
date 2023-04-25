import { render } from '@config/tests/render'
import { screen, fireEvent } from '@testing-library/react'
import { celsiusToFahrenheit } from '@utils/temperature.utils'
import { TemperatureText } from './temperature-text.comp'

describe('TemperatureText', () => {
    it('shows temperature in celsius by default', () => {
        const temperature = 20
        render(
            <TemperatureText
                temperature={temperature}
                color="red"
                showInCelcius
                onClick={() => {}}
            />
        )
        const temperatureText = screen.getByText(`${temperature} °C`)
        expect(temperatureText).toBeInTheDocument()
    })

    it('shows temperature in fahrenheit', () => {
        const temperature = 20

        render(
            <TemperatureText
                temperature={temperature}
                color="red"
                showInCelcius={false}
                onClick={() => {}}
            />
        )

        expect(
            screen.getByText(
                `${Math.round(celsiusToFahrenheit(temperature))} °F`
            )
        ).toBeInTheDocument()
    })

    it('calls onClick when the temperature is clicked', () => {
        const temperature = 20
        const onClick = jest.fn()
        render(
            <TemperatureText
                temperature={temperature}
                color="red"
                showInCelcius
                onClick={onClick}
            />
        )
        const temperatureText = screen.getByText(
            `${Math.round(temperature)} °C`
        )
        fireEvent.click(temperatureText)
        expect(onClick).toHaveBeenCalledTimes(1)
        fireEvent.click(temperatureText)
        expect(onClick).toHaveBeenCalledTimes(2)
    })
})
