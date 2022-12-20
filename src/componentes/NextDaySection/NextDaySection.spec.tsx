import React from 'react'
import { screen } from '@testing-library/react'
import { NextDaySection } from './NextDaySection'
import { contextProvider } from '../../helpers/test.utils';

const props = {
    onclick: () => { },
    title: "Amanhã",
    weatherInformations: {
        tempMax: 13,
        tempMin: 12,
        icon: '022d'
    }
}



describe('Next day section component', () => {
    it('should render the content correctly', () => {
        contextProvider(<NextDaySection  {...props}></NextDaySection>)
        screen.debug()
        const day = screen.getByText("Amanhã")
        const max = screen.getByText("Máx: 13ºC")
        const min = screen.getByText("Mín: 12ºC")

        expect(day).toBeVisible()
        expect(max).toBeVisible()
        expect(min).toBeVisible()
    })
})