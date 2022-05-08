const { mockGeoLocation } = require('../stubs/geolocation.stubs');

describe('Input search', () => {
    it('should show error when city not found', () => {
        cy.visit('/', mockGeoLocation({ disabled: true }));
        cy.get('#location-input > input').type('test');
        cy.get('button[title="Buscar"]').click();
        cy.get('#toast-notification').contains('Cidade não encontrada.');
        cy.get('#today-panel').contains('HOJE');
        cy.get('.weather-info-content').invoke('height').should('eq', 0);
        cy.shouldBeGray();
    });

    it('should show information based on location', () => {
        cy.visit('/');
        cy.get('#location-input > input').type('Rio de Janeiro');
        cy.get('button[title="Buscar"]').click();
        cy.get('#location-input > input').should('have.value', 'Rio de Janeiro, RJ, Brasil');
        cy.get('#today-panel').contains('HOJE');
        cy.get('#today-panel').contains('HOJE');
        cy.get('.weather-info-content').invoke('height').should('gt', 0);
        cy.shouldNotBeGray();
    });
});
