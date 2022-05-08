// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('shouldBeGray', () => {
    const grey = [
        'rgba(189, 189, 189, 0.85)',
        'rgba(224, 224, 224, 0.85)',
        'rgba(158, 158, 158, 0.85)',
    ];
    cy.get('#today-panel').should('have.css', 'background-color').and('eq', grey[0]);
    cy.get('.forecast-panel').first().should('have.css', 'background-color').and('eq', grey[1]);
    cy.get('.forecast-panel').last().should('have.css', 'background-color').and('eq', grey[2]);
});
Cypress.Commands.add('shouldNotBeGray', (color) => {
    const todayColors = [];
    const tomorrowColors = [];
    const afterTomorrowColors = [];

    if (!color || color === 'yellow') {
        todayColors.push('rgba(255, 202, 40, 0.85)');
        tomorrowColors.push('rgba(255, 213, 79, 0.85)');
        afterTomorrowColors.push('rgba(255, 193, 7, 0.85)');
    } else if (!color || color === 'red') {
        todayColors.push('rgba(239, 83, 80, 0.85)');
        tomorrowColors.push('rgba(229, 115, 115, 0.85)');
        afterTomorrowColors.push('rgba(244, 67, 54, 0.85)');
    } else if ((!color || color === 'blue')) {
        todayColors.push('rgba(41, 182, 246, 0.85)');
        tomorrowColors.push('rgba(79, 195, 247, 0.85)');
        afterTomorrowColors.push('rgba(41, 182, 246, 0.85)');
    }
    cy.get('#today-panel').should('have.css', 'background-color').and('be.oneOf', todayColors);
    cy.get('.forecast-panel').first().should('have.css', 'background-color').and('be.oneOf', tomorrowColors);
    cy.get('.forecast-panel').last().should('have.css', 'background-color').and('be.oneOf', afterTomorrowColors);
});
