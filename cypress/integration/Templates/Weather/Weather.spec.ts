describe('E2E: Weather Template - Geolocation Allowed', () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: 'GET',
      url: 'https://api.opencagedata.com/geocode/v1/json?q=-22.9068+-43.1729&**',
      response: 'fixture:reverseGeocoding/rio_de_janeiro.json',
      status: 200,
    }).as('rjReverseGeocodingRequest');

    cy.route({
      method: 'GET',
      url: 'http://api.openweathermap.org/data/2.5/onecall?lat=-22.9068&lon=-43.1729&**',
      response: 'fixture:openWeather/rio_de_janeiro.json',
      status: 200,
    }).as('rjOpenWeatherRequest');

    cy.route({
      method: 'GET',
      url: 'https://api.opencagedata.com/geocode/v1/json?q=kiev&**',
      response: 'fixture:forwardGeocoding/kiev.json',
      status: 200,
    }).as('kievForwardGeocodingRequest');

    cy.route({
      method: 'GET',
      url: 'http://api.openweathermap.org/data/2.5/onecall?lat=50.4500336&lon=30.5241361&**',
      response: 'fixture:openWeather/kiev.json',
      status: 200,
    }).as('kievOpenWeatherRequest');

    cy.route({
      method: 'GET',
      url: 'https://api.opencagedata.com/geocode/v1/json?q=bangkok&**',
      response: 'fixture:forwardGeocoding/bangkok.json',
      status: 200,
    }).as('bangkokForwardGeocodingRequest');

    cy.route({
      method: 'GET',
      url: 'http://api.openweathermap.org/data/2.5/onecall?lat=13.7542529&lon=100.493087&**',
      response: 'fixture:openWeather/bangkok.json',
      status: 200,
    }).as('bangkokOpenWeatherRequest');
  });

  it('Visit Weather Template', () => {
    cy.visit('http://localhost:3002', {
      onBeforeLoad(win) {
        // force Rio de Janeiro geolocation
        const latitude = -22.9068;
        const longitude = -43.1729;
        cy.stub(win.navigator.geolocation, 'getCurrentPosition').callsFake(cb => {
          return cb({ coords: { latitude, longitude } });
        });
      },
    });
  });

  it('should show rio de janeiro weather by geolocation and have yellow card bg color', () => {
    cy.visit('http://localhost:3002', {
      onBeforeLoad(win) {
        // force Rio de Janeiro geolocation
        const latitude = -22.9068;
        const longitude = -43.1729;
        cy.stub(win.navigator.geolocation, 'getCurrentPosition').callsFake(cb => {
          return cb({ coords: { latitude, longitude } });
        });
      },
    });

    cy.wait('@rjReverseGeocodingRequest');

    cy.get('[data-cy=search-input]')
      .as('searchInput')
      .should('have.value', 'Rio de Janeiro, Rio de Janeiro, Brasil');

    cy.wait('@rjOpenWeatherRequest');

    cy.get('[data-cy=big-card]')
      .should('have.css', 'background-color')
      .and('equal', 'rgba(234, 192, 39, 0.8)');
    cy.get('[data-cy=top-small-card]')
      .should('have.css', 'background-color')
      .and('equal', 'rgba(250, 204, 5, 0.9)');
    cy.get('[data-cy=bottom-small-card]')
      .should('have.css', 'background-color')
      .and('equal', 'rgba(182, 149, 3, 0.9)');

    cy.get('.cy-today-temperature').should('have.text', '24ºC');
    cy.get('[data-cy=weather-description]').should('have.text', 'céu limpo');
    cy.get('[data-cy=wind-description]').should('have.text', 'Vento: NNW 2.1km/h');
    cy.get('[data-cy=humidity-description]').should('have.text', 'Humidade: 78%');
    cy.get('[data-cy=pressure-description]').should('have.text', 'Pressão: 1007hPA');
    cy.get('.cy-tomorrow-temperature').should('have.text', '23ºC');
    cy.get('.cy-after-tomorrow-temperature').should('have.text', '21ºC');
  });

  it('should search for kiev, show kiev weather and have blue card bg color', () => {
    cy.visit('http://localhost:3002', {
      onBeforeLoad(win) {
        // force Rio de Janeiro geolocation
        const latitude = -22.9068;
        const longitude = -43.1729;
        cy.stub(win.navigator.geolocation, 'getCurrentPosition').callsFake(cb => {
          return cb({ coords: { latitude, longitude } });
        });
      },
    });

    cy.wait('@rjOpenWeatherRequest').then(() => {
      cy.get('[data-cy=search-input]')
        .as('searchInput')
        .clear()
        .type('kiev{enter}');

      cy.wait('@kievOpenWeatherRequest');

      cy.get('@searchInput').should('have.value', 'Kiev, Ucrânia');

      cy.get('[data-cy=big-card]')
        .should('have.css', 'background-color')
        .and('equal', 'rgba(38, 56, 255, 0.8)');
      cy.get('[data-cy=top-small-card]')
        .should('have.css', 'background-color')
        .and('equal', 'rgba(64, 80, 255, 0.9)');
      cy.get('[data-cy=bottom-small-card]')
        .should('have.css', 'background-color')
        .and('equal', 'rgba(13, 27, 179, 0.9)');

      cy.get('.cy-today-temperature').should('have.text', '7ºC');
      cy.get('[data-cy=weather-description]').should('have.text', 'chuva leve');
      cy.get('[data-cy=wind-description]').should('have.text', 'Vento: NW 4km/h');
      cy.get('[data-cy=humidity-description]').should('have.text', 'Humidade: 93%');
      cy.get('[data-cy=pressure-description]').should('have.text', 'Pressão: 1016hPA');
      cy.get('.cy-tomorrow-temperature').should('have.text', '8ºC');
      cy.get('.cy-after-tomorrow-temperature').should('have.text', '9ºC');
    });
  });

  it('should search for bangkok, show bangkok weather and have red card bg color', () => {
    cy.visit('http://localhost:3002', {
      onBeforeLoad(win) {
        // force Rio de Janeiro geolocation
        const latitude = -22.9068;
        const longitude = -43.1729;
        cy.stub(win.navigator.geolocation, 'getCurrentPosition').callsFake(cb => {
          return cb({ coords: { latitude, longitude } });
        });
      },
    });

    cy.wait('@rjOpenWeatherRequest').then(() => {
      cy.get('[data-cy=search-input]')
        .as('searchInput')
        .clear()
        .type('bangkok{enter}');

      cy.wait('@bangkokOpenWeatherRequest');

      cy.get('@searchInput').should('have.value', 'Banguecoque, Banguecoque, Tailândia');

      cy.get('[data-cy=big-card]')
        .should('have.css', 'background-color')
        .and('equal', 'rgba(181, 25, 11, 0.8)');
      cy.get('[data-cy=top-small-card]')
        .should('have.css', 'background-color')
        .and('equal', 'rgba(214, 30, 13, 0.9)');
      cy.get('[data-cy=bottom-small-card]')
        .should('have.css', 'background-color')
        .and('equal', 'rgba(148, 20, 9, 0.9)');

      cy.get('.cy-today-temperature').should('have.text', '36ºC');
      cy.get('[data-cy=weather-description]').should('have.text', 'nublado');
      cy.get('[data-cy=wind-description]').should('have.text', 'Vento: ESE 4.28km/h');
      cy.get('[data-cy=humidity-description]').should('have.text', 'Humidade: 63%');
      cy.get('[data-cy=pressure-description]').should('have.text', 'Pressão: 1009hPA');
      cy.get('.cy-tomorrow-temperature').should('have.text', '33ºC');
      cy.get('.cy-after-tomorrow-temperature').should('have.text', '34ºC');
    });
  });

  it('should be able to switch between celsius and fahrenheit', () => {
    cy.visit('http://localhost:3002', {
      onBeforeLoad(win) {
        // force Rio de Janeiro geolocation
        const latitude = -22.9068;
        const longitude = -43.1729;
        cy.stub(win.navigator.geolocation, 'getCurrentPosition').callsFake(cb => {
          return cb({ coords: { latitude, longitude } });
        });
      },
    });

    cy.get('[data-cy=search-input]')
      .as('searchInput')
      .should('have.value', 'Rio de Janeiro, Rio de Janeiro, Brasil');

    cy.wait('@rjOpenWeatherRequest');

    cy.get('.cy-today-temperature')
      .as('todayTemperature')
      .should('have.text', '24ºC');
    cy.get('@todayTemperature')
      .click()
      .then(todayTemperatureF => {
        cy.wrap(todayTemperatureF).should('have.text', '75ºF');
        cy.get('.cy-tomorrow-temperature')
          .as('tomorrowTemperature')
          .should('have.text', '74ºF');

        cy.get('.cy-after-tomorrow-temperature')
          .as('afterTomorrowTemperature')
          .should('have.text', '70ºF');

        cy.wrap(todayTemperatureF)
          .click()
          .then(todayTemperatureC => {
            cy.wrap(todayTemperatureC).should('have.text', '24ºC');
            cy.get('@tomorrowTemperature').should('have.text', '23ºC');

            cy.get('@afterTomorrowTemperature').should('have.text', '21ºC');
          });
      });
  });
});

describe('E2E: Weather Template - Geolocation Not Allowed', () => {
  beforeEach(() => {
    cy.server();

    cy.route({
      method: 'GET',
      url: 'https://api.opencagedata.com/geocode/v1/json?q=kiev&**',
      response: 'fixture:forwardGeocoding/kiev.json',
      status: 200,
    }).as('kievForwardGeocodingRequest');

    cy.route({
      method: 'GET',
      url: 'http://api.openweathermap.org/data/2.5/onecall?lat=50.4500336&lon=30.5241361&**',
      response: 'fixture:openWeather/kiev.json',
      status: 200,
    }).as('kievOpenWeatherRequest');
  });
  it('should have grey card bg and be able to search after denying location', () => {
    cy.visit('http://localhost:3002', {
      onBeforeLoad(win) {
        // force denied callback
        cy.stub(win.navigator.geolocation, 'getCurrentPosition').callsFake((cb, err) => {
          return err({ error: 'error' });
        });
      },
    });

    cy.get('[data-cy=big-card]')
      .should('have.css', 'background-color')
      .and('equal', 'rgba(116, 116, 116, 0.8)');
    cy.get('[data-cy=top-small-card]')
      .should('have.css', 'background-color')
      .and('equal', 'rgba(163, 163, 163, 0.8)');
    cy.get('[data-cy=bottom-small-card]')
      .should('have.css', 'background-color')
      .and('equal', 'rgba(79, 79, 79, 0.9)');

    cy.get('[data-cy=compass-icon]')
      .should('have.css', 'animation')
      .and('equal', 'none 0s ease 0s 1 normal none running')
      .then(() => {
        cy.get('[data-cy=search-input]')
          .as('searchInput')
          .clear()
          .type('kiev{enter}');

        cy.wait('@kievOpenWeatherRequest');

        cy.get('@searchInput').should('have.value', 'Kiev, Ucrânia');

        cy.get('[data-cy=big-card]')
          .should('have.css', 'background-color')
          .and('equal', 'rgba(38, 56, 255, 0.8)');
        cy.get('[data-cy=top-small-card]')
          .should('have.css', 'background-color')
          .and('equal', 'rgba(64, 80, 255, 0.9)');
        cy.get('[data-cy=bottom-small-card]')
          .should('have.css', 'background-color')
          .and('equal', 'rgba(13, 27, 179, 0.9)');

        cy.get('.cy-today-temperature').should('have.text', '7ºC');
        cy.get('[data-cy=weather-description]').should('have.text', 'chuva leve');
        cy.get('[data-cy=wind-description]').should('have.text', 'Vento: NW 4km/h');
        cy.get('[data-cy=humidity-description]').should('have.text', 'Humidade: 93%');
        cy.get('[data-cy=pressure-description]').should('have.text', 'Pressão: 1016hPA');
        cy.get('.cy-tomorrow-temperature').should('have.text', '8ºC');
        cy.get('.cy-after-tomorrow-temperature').should('have.text', '9ºC');
      });
  });
});

// https://api.opencagedata.com/geocode/v1/json?q=-22…t-BR&limit=1&key=c63386b4f77e46de817bdf94f552cddf
//"http://api.openweathermap.org/data/2.5/onecall?lat=-22.9068&lon=-43.1729&exclude=hourly,minutely,alerts&lang=pt_br&APPID=7ba73e0eb8efe773ed08bfd0627f07b8"
