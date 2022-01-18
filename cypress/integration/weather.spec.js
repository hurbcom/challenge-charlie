// / <reference types="cypress" />

import { fakeLocation, weatherData } from '../support/mocks'

describe('Test render correct weather information', () => {
    it('should show correct infos with medium temperature', () => {
        cy.visit('/', fakeLocation(0, -12.9828845, -38.4873361))
        cy.intercept('GET', 'http://api.openweathermap.org/data/2.5/onecall*', {
            statusCode: 200,
            body: weatherData(304, 302, 300),
        }).as('weatherUrl')

        cy.get('div[color="#f5ee0be6"]').should('be.visible')
        cy.get('[data-cy="title-Hoje"]').contains('Salvador - Hoje')
        cy.get('[data-cy="temperature-Hoje"]').contains('31 °C')
        cy.get('[data-cy="description-Hoje"]').contains('Nuvens dispersas')

        cy.get('[data-cy="weatherInformation"]').contains('Vento: SE 18.0km/h')
        cy.get('[data-cy="weatherInformation"]').contains('Humidade: 55%')
        cy.get('[data-cy="weatherInformation"]').contains('Pressão: 1015 hPA')

        cy.get('div[color="#dcbe1ae3"]').should('be.visible')
        cy.get('[data-cy="title-Amanhã"]').contains('Amanhã')
        cy.get('[data-cy="temperature-Amanhã"]').contains('29 °C')
        cy.get('[data-cy="description-Amanhã"]').contains('Chuva leve')

        cy.get('div[color="#b09914e3"]').should('be.visible')
        cy.get('[data-cy="title-Depois de amanhã"]').contains(
            'Depois de amanhã'
        )
        cy.get('[data-cy="temperature-Depois de amanhã"]').contains('27 °C')
        cy.get('[data-cy="description-Depois de amanhã"]').contains('Céu limpo')
    })

    it('should show correct infos with low temperature', () => {
        cy.visit('/', fakeLocation(0, 40.7127281, -74.0060152))
        cy.intercept('GET', 'http://api.openweathermap.org/data/2.5/onecall*', {
            statusCode: 200,
            body: weatherData(275, 271, 266),
        }).as('weatherUrl')

        cy.get('div[color="#0bc1eed1"]').should('be.visible')
        cy.get('[data-cy="title-Hoje"]').contains('Nova Iorque - Hoje')
        cy.get('[data-cy="temperature-Hoje"]').contains('2 °C')

        cy.get('div[color="#1583a5d6"]').should('be.visible')
        cy.get('[data-cy="temperature-Amanhã"]').contains('-2 °C')

        cy.get('div[color="#13548ce0"]').should('be.visible')
        cy.get('[data-cy="temperature-Depois de amanhã"]').contains('-7 °C')
    })

    it('should show correct infos with high temperature', () => {
        cy.visit('/', fakeLocation(0, -8.7494525, -63.8735438))
        cy.intercept('GET', 'http://api.openweathermap.org/data/2.5/onecall*', {
            statusCode: 200,
            body: weatherData(310, 308, 306),
        }).as('weatherUrl')

        cy.get('div[color="#ef1c1cc7"]').should('be.visible')
        cy.get('[data-cy="title-Hoje"]').contains('Porto Velho - Hoje')
        cy.get('[data-cy="temperature-Hoje"]').contains('37 °C')

        cy.get('div[color="#7e2121d9"]').should('be.visible')
        cy.get('[data-cy="temperature-Amanhã"]').contains('35 °C')

        cy.get('div[color="#451212ed"]').should('be.visible')
        cy.get('[data-cy="temperature-Depois de amanhã"]').contains('33 °C')
    })
})
