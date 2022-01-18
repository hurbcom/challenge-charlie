// / <reference types="cypress" />

import { fakeLocation } from '../support/mocks'

describe('Test language change', () => {
    it('should load pt_br initially', () => {
        cy.visit('/', fakeLocation(1))
        cy.get('[data-cy="languageSelector"]').should('be.visible')
        cy.get('[data-cy="languageSelector"]').contains('Idioma')
        cy.verifyEmptyContent()
    })

    it('should change language on click', () => {
        cy.get('[data-cy="languageSelector"]').click()
        cy.get('[data-cy="languageSelector"]').contains('Language')
        cy.verifyEmptyContent('en')
    })
})
