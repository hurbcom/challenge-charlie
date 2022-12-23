import React from 'react'
import { screen, fireEvent } from '@testing-library/react'
import { Home } from './Home'
import { contextProvider, weatherContextProps } from '../../helpers/test.utils';

describe('Home component', () => {
    it('should render the content correctly', () => {
        contextProvider(<Home />)

        const cityName = screen.getByText("Rio de Janeiro")
        const day = screen.getByText("Hoje")
        const tomorrow = screen.getByText("Amanhã")
        const afterTomorrow = screen.getByText("Depois de amanhã")
        const description = screen.getByText("Ensolarado")
        const wind = screen.getByText("Vento: 38.6 Km/h")

        expect(day).toBeVisible()
        expect(cityName).toBeVisible()
        expect(description).toBeVisible()
        expect(tomorrow).toBeVisible()
        expect(afterTomorrow).toBeVisible()
        expect(wind).toBeVisible()
    })

    it("deve chamar a função set farenheit", () => {
        contextProvider(<Home />)

        const today = screen.getByTestId('today-section')
        fireEvent.click(today)
        expect(weatherContextProps.setIsFahrenheit).toHaveBeenCalled()
    })

})