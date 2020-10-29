describe('E2E: Weather Template - Geolocation Allowed', () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: 'GET',
      url: 'https://api.opencagedata.com/geocode/v1/json?q=-22.9068+-43.1729&language=pt-BR&limit=1&key=*',
      response: 'fixture:reverseGeocoding/rio_de_janeiro.json',
      status: 200,
    }).as('reverseGeocodingRequest');

    cy.route({
      method: 'GET',
      url: 'http://api.openweathermap.org/data/2.5/onecall?lat=-22.9068&lon=-43.1729&*',
      response: 'fixture:openWeather/rio_de_janeiro.json',
      status: 200,
    }).as('openWeatherRequest');
  });

  it('Visit Weather Template', () => {
    cy.visit('http://localhost:3002');
  });

  it('should show rio de janeiro weather by geolocation', () => {
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

    cy.wait('@reverseGeocodingRequest');

    cy.get('[data-cy=search-input]')
      .as('searchInput')
      .should('have.value', 'Rio de Janeiro, Rio de Janeiro, Brasil');

    cy.wait('@openWeatherRequest');
  });
});

// https://api.opencagedata.com/geocode/v1/json?q=-22…t-BR&limit=1&key=c63386b4f77e46de817bdf94f552cddf
//"http://api.openweathermap.org/data/2.5/onecall?lat=-22.9068&lon=-43.1729&exclude=hourly,minutely,alerts&lang=pt_br&APPID=7ba73e0eb8efe773ed08bfd0627f07b8"
