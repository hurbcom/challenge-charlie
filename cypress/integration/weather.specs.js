const { mockGeoLocation } = require('../stubs/geolocation.stubs');
const weatherBlue = require('../fixtures/weatherBlue.json');
const forecastBlue = require('../fixtures/forecastBlue.json');
const weatherRed = require('../fixtures/weatherRed.json');
const forecastRed = require('../fixtures/forecastRed.json');
const weatherYellow = require('../fixtures/weatherYellow.json');
const forecastYellow = require('../fixtures/forecastYellow.json');

describe('Weather information', () => {
    it('should show blue for cold temperatures', () => {
        cy.visit('/', mockGeoLocation({ latitude: 53.55, longitude: 10 }));
        cy.intercept('GET', 'http://localhost:8080/data/2.5/weather*', {
            statusCode: 200,
            body: weatherBlue,
        }).as('weatherUrl');
        cy.intercept('GET', 'http://localhost:8080/data/2.5/onecall*', {
            statusCode: 200,
            body: forecastBlue,
        }).as('weatherUrl');
        cy.get('#location-input > input').should('have.value', 'Hamburgo, Alemanha');
        cy.shouldNotBeGray('blue');
        cy.get('#today-panel').contains('5°C');
        cy.get('#today-panel').contains('Céu limpo');
        cy.get('#today-panel').contains('Vento: NO 5.5 km/h');
        cy.get('#today-panel').contains('Humidade: 89%');
        cy.get('#today-panel').contains('Pressão: 1026 hPA');
        cy.get('.forecast-panel').first().contains('10°C');
        cy.get('.forecast-panel').first().contains('1°C');
        cy.get('.forecast-panel').last().contains('11°C');
        cy.get('.forecast-panel').last().contains('5°C');
    });
    it('should show red for hot temperatures', () => {
        cy.visit('/', mockGeoLocation({ latitude: 27.85, longitude: -101.1167 }));
        cy.intercept('GET', 'http://localhost:8080/data/2.5/weather*', {
            statusCode: 200,
            body: weatherRed,
        }).as('weatherUrl');
        cy.intercept('GET', 'http://localhost:8080/data/2.5/onecall*', {
            statusCode: 200,
            body: forecastRed,
        }).as('weatherUrl');
        cy.get('#location-input > input').should('have.value', 'Sabinas, México');
        cy.shouldNotBeGray('red');
        cy.get('#today-panel').contains('38°C');
        cy.get('#today-panel').contains('Céu limpo');
        cy.get('#today-panel').contains('Vento: ESE 32.0 km/h');
        cy.get('#today-panel').contains('Humidade: 17%');
        cy.get('#today-panel').contains('Pressão: 1000 hPA');
        cy.get('.forecast-panel').first().contains('41°C');
        cy.get('.forecast-panel').first().contains('24°C');
        cy.get('.forecast-panel').last().contains('40°C');
        cy.get('.forecast-panel').last().contains('25°C');
    });
    it('should show yellow for middle temperatures', () => {
        cy.visit('/', mockGeoLocation({ latitude: -22.911, longitude: -43.2094 }));
        cy.intercept('GET', 'http://localhost:8080/data/2.5/weather*', {
            statusCode: 200,
            body: weatherYellow,
        }).as('weatherUrl');
        cy.intercept('GET', 'http://localhost:8080/data/2.5/onecall*', {
            statusCode: 200,
            body: forecastYellow,
        }).as('weatherUrl');
        cy.get('#location-input > input').should('have.value', 'Rio de Janeiro, RJ, Brasil');
        cy.shouldNotBeGray('yellow');
        cy.get('#today-panel').contains('23°C');
        cy.get('#today-panel').contains('Nublado');
        cy.get('#today-panel').contains('Vento: O 5.5 km/h');
        cy.get('#today-panel').contains('Humidade: 73%');
        cy.get('#today-panel').contains('Pressão: 1021 hPA');
        cy.get('.forecast-panel').first().contains('24°C');
        cy.get('.forecast-panel').first().contains('21°C');
        cy.get('.forecast-panel').last().contains('24°C');
        cy.get('.forecast-panel').last().contains('19°C');
    });
});
