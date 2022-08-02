import config from "../../src/config.json";
import forecast from "../fixtures/forecast.json";
import locationName from "../fixtures/locationName.json";
describe("get location gps ,made requests and show info correctly", () => {
    beforeEach(() => {
        cy.intercept("GET", `${config.apis.bing}/*`, {
            images: [
                {
                    url: "/th?id=OHR.LavaTube_PT-BR3691169289_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
                },
            ],
        }).as("requestBg");
        cy.intercept("GET", `${config.apis.weather}/forecast*`, forecast).as(
            "requestForecast"
        );

        cy.visit("http://localhost:3000").then((window) =>
            cy.mockLocation(window, -22.7931, -43.1833)
        );
    });
    it("should send requests correctly with gps", () => {
        cy.wait("@requestBg").then(({ request }) => {
            expect(request.url).to.eq(
                `${config.proxy}/${config.apis.bing}/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR`
            );
        });
        cy.wait("@requestForecast").then(({ request }) => {
            expect(request.url).to.eq(
                `${config.apis.weather}/forecast?lat=-22.7931&lon=-43.1833&units=metric&APPID=e02bf3477d43c045a77ac25fe51bdd34&lang=pt_br&cnt=3`
            );
        });
    });
    it("show all forecasts temp correctly", () => {
        cy.get("[data-cy='main-success']").within(() => {
            forecast.list.map((day) => {
                cy.contains(day.main.temp);
            });
        });
    });
});
describe("get location by input, made requests and show info corectly", () => {
    beforeEach(() => {
        cy.intercept("GET", `${config.apis.bing}/*`, {}).as("requestBg");
        cy.intercept("GET", `${config.apis.weather}/forecast*`, forecast).as(
            "requestForecast"
        );
        cy.intercept("GET", `${config.apis.locationName}*`, locationName).as(
            "requestCoords"
        );
    });
    it("should send requests correctly with input", () => {
        cy.visit("http://localhost:3000");
        cy.wait("@requestBg").then(({ request }) => {
            expect(request.url).to.eq(
                `${config.proxy}/${config.apis.bing}/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR`
            );
        });
        cy.get("[data-cy='main-error']").within(() => {
            cy.contains(
                "ops! Permita acesso a localização ou informe sua cidade no campo acima"
            );
        });
        cy.get("[data-cy='inputLocation']").type("Londres").blur();
        cy.wait("@requestCoords").then(({ request }) => {
            expect(request.url).to.eq(
                `${config.apis.locationName}?q=Londres&key=c63386b4f77e46de817bdf94f552cddf&language=pt_br`
            );
        });
        const { lat, lng } = locationName.results[0].geometry;
        cy.wait("@requestForecast").then(({ request }) => {
            expect(request.url).to.eq(
                `${config.apis.weather}/forecast?lat=${lat}&lon=${lng}&units=metric&APPID=e02bf3477d43c045a77ac25fe51bdd34&lang=pt_br&cnt=3`
            );
        });
        cy.get("[data-cy='main-success']").within(() => {
            forecast.list.map((day) => {
                cy.contains(day.main.temp);
            });
        });
    });
});
