// / <reference types="cypress" />

Cypress.Commands.add('verifyEmptyContent', (lang = 'pt') => {
    const today = cy.get('div[color="#596364de"]')
    today.should('be.visible')
    today.contains(lang === 'pt' ? 'Hoje' : 'Today')
    const tomorrow = cy.get('div[color="#3f4447eb"]')
    tomorrow.should('be.visible')
    tomorrow.contains(lang === 'pt' ? 'Amanhã' : 'Tomorrow')
    const dayAfterTomorrow = cy.get('div[color="#303437e0"]')
    dayAfterTomorrow.should('be.visible')
    dayAfterTomorrow.contains(
        lang === 'pt' ? 'Depois de amanhã' : 'Day after tomorrow'
    )
})

// // create this custom get to avoid timeout since the application has asynchronous requests
// Cypress.Commands.add('customGet', (element) => {
//     cy.get(element, { timeout: 5000 })
// })
