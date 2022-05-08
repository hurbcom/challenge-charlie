const { mockGeoLocation } = require('../stubs/geolocation.stubs');
const weatherYellow = require('../fixtures/weatherYellow.json');
const forecastYellow = require('../fixtures/forecastYellow.json');

describe('Temperature changing', () => {
    it('should change from Celsius to Fahrenheit and vice versa', () => {
        cy.visit('/', mockGeoLocation({ latitude: -22.911, longitude: -43.2094 }));
        cy.intercept('GET', 'http://localhost:8080/data/2.5/weather*', {
            statusCode: 200,
            body: weatherYellow,
        }).as('weatherUrl');
        cy.intercept('GET', 'http://localhost:8080/data/2.5/onecall*', {
            statusCode: 200,
            body: forecastYellow,
        }).as('weatherUrl');
        cy.get('#today-panel .temperature').contains('23°C');
        cy.get('#today-panel .temperature').click();
        cy.get('#today-panel .temperature').contains('73°F');
        cy.get('#today-panel .temperature').click();
        cy.get('#today-panel .temperature').contains('23°C');
    });
});
