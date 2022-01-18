// / <reference types="cypress" />

import { fakeLocation } from '../support/mocks'

describe('Test search for new locations', () => {
    it('should see error snackbar if there are no results', () => {
        cy.visit('/', fakeLocation(0, -12.9828845, -38.4873361))
        cy.get('[data-cy="title-Hoje"]').contains('Salvador - Hoje')
        cy.get('[data-cy="searchInput"]').type('Qualquer coisa, Teste Errado')
        cy.get('[data-cy="searchButton"]').click() // valid button click
        cy.get('[class^="Snackbar_snackbar__text"]').contains(
            'Não encontramos resultado para sua busca.'
        )
        cy.get('[class^="Snackbar_snackbar__close"]').click()
        cy.verifyEmptyContent()
    })

    it('should load new data with valid result', () => {
        cy.get('[data-cy="searchInput"]').type('Alasca')
        cy.get('[data-cy="searchInput"]').type('{enter}') // valid press enter
        cy.get('[class^="Snackbar_snackbar__text"]').should('not.exist')
        cy.get('[data-cy="title-Hoje"]').should(
            'not.contain',
            'Salvador - Hoje'
        )
        cy.get('[data-cy="title-Hoje"]').contains('Alasca - Hoje')
    })
})
