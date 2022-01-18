// / <reference types="cypress" />

import { fakeLocation } from '../support/mocks'

describe('Test getting browser geolocation', () => {
    it('should show permission denied warning', () => {
        cy.visit('/', fakeLocation(1))
        cy.get('[class^="Snackbar_snackbar__text"]').contains(
            'Você precisa permitir acesso a sua localização para carregamento dos dados iniciais.'
        )
        cy.verifyEmptyContent()
    })

    it('should show not found location warning', () => {
        cy.visit('/', fakeLocation(2))
        cy.get('[class^="Snackbar_snackbar__text"]').contains(
            'Não conseguimos carregar sua localização atual. Tente buscar abaixo.'
        )
        cy.verifyEmptyContent()
    })

    it('should see correct information with coordinates', () => {
        cy.visit('/', fakeLocation(0, -12.9828845, -38.4873361))
        cy.get('[class^="Snackbar_snackbar__text"]').should('not.exist')
        cy.get('[data-cy="title-Hoje"]').should('be.visible')
    })
})
