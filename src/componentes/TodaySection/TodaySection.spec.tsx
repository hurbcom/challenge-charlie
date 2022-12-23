import React from 'react'
import { screen } from '@testing-library/react'
import { TodaySection } from './TodaySection'
import { contextProvider } from '../../helpers/test.utils';



describe('Today section component', () => {
    it('should render the content correctly', () => {
        contextProvider(<TodaySection onclick={() => { }}></TodaySection>)
        const day = screen.getByText("Hoje")
        const description = screen.getByText("Ensolarado")
        const temp = screen.getByText("12ºC")
        const wind = screen.getByText("Vento: 38.6 Km/h")

        expect(day).toBeVisible()
        expect(description).toBeVisible()
        expect(temp).toBeVisible()
        expect(wind).toBeVisible()
    })
})