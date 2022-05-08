const { mockGeoLocation } = require('../stubs/geolocation.stubs');

describe('Browser geolocation', () => {
    it('should show error when permission is denied', () => {
        cy.visit('/', mockGeoLocation({ disabled: true }));
        cy.get('#toast-notification').contains('Geolocalização não está ativada.');
        cy.get('#location-input > input').should('have.value', '');
        cy.get('#today-panel').contains('HOJE');
        cy.get('.weather-info-content').invoke('height').should('eq', 0);
        cy.shouldBeGray();
    });

    it('should show information based on location', () => {
        cy.visit('/', mockGeoLocation({ latitude: -22.9120952, longitude: -43.2345094 }));
        cy.get('#toast-notification').should('not.exist');
        cy.get('#location-input > input').should('have.value', 'Rio de Janeiro, RJ, Brasil');
        cy.get('#today-panel').contains('HOJE');
        cy.get('.weather-info-content').invoke('height').should('gt', 0);
        cy.shouldNotBeGray();
    });
});
