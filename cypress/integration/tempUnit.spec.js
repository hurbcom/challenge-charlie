// / <reference types="cypress" />

import { fakeLocation, weatherData } from '../support/mocks'

describe('Test change temperature unit', () => {
    it('should show correct temperatures before and after click', () => {
        cy.visit('/', fakeLocation(0, -12.9828845, -38.4873361))
        cy.intercept('GET', 'http://api.openweathermap.org/data/2.5/onecall*', {
            statusCode: 200,
            body: weatherData(304, 302, 300),
        }).as('weatherUrl')

        cy.get('[data-cy="temperature-Hoje"]').contains('31 °C')
        cy.get('[data-cy="temperature-Amanhã"]').contains('29 °C')
        cy.get('[data-cy="temperature-Depois de amanhã"]').contains('27 °C')

        cy.get('[data-cy="temperature-Hoje"]').click()

        cy.get('[data-cy="temperature-Hoje"]').should('not.contain', '31 °C')
        cy.get('[data-cy="temperature-Amanhã"]').should('not.contain', '29 °C')
        cy.get('[data-cy="temperature-Depois de amanhã"]').should(
            'not.contain',
            '27 °C'
        )

        cy.get('[data-cy="temperature-Hoje"]').contains('88 °F')
        cy.get('[data-cy="temperature-Amanhã"]').contains('84 °F')
        cy.get('[data-cy="temperature-Depois de amanhã"]').contains('81 °F')
    })
})
