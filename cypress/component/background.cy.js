import { Background } from "../../src/components/background";
import config from "../../src/config.json";

describe("Background component success", () => {
    beforeEach(() => {
        cy.intercept("GET", `${config.proxy}/${config.apis.bing}/*`, {
            images: [
                {
                    url: "/th?id=OHR.LavaTube_PT-BR3691169289_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
                },
            ],
        }).as("bgRequest");
    });
    it("should send request correcty", async () => {
        cy.mount(<Background />);
        cy.wait("@bgRequest").then(({ request }) => {
            expect(request.url).to.eq(
                "http://localhost:9090/https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR"
            );
        });
    });
    it("should apply response to background-image", () => {
        cy.mount(<Background />);
        cy.wait("@bgRequest");
        cy.get(`[data-cy="bg-wrapper"]`).should(
            "to.have.css",
            "background-image",
            `url("${config.apis.bing}/th?id=OHR.LavaTube_PT-BR3691169289_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp")`
        );
    });
});
describe("Background component error", () => {
    beforeEach(() => {
        cy.intercept("GET", `${config.proxy}/${config.apis.bing}/*`, {}).as(
            "bgRequest"
        );
    });

    it("should show default background-image", () => {
        cy.mount(<Background />);
        cy.wait("@bgRequest");
        cy.get(`[data-cy="bg-wrapper"]`).should(
            "to.have.css",
            "background-image",
            `linear-gradient(rgb(67, 206, 162), rgb(24, 90, 157))`
        );
    });
});
