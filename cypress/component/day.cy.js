import { Day } from "../../src/components/day";
import { getColorByTemperature, getWindDirection } from "../../src/helpers";
import forecast from "../fixtures/forecast.json";
describe("Day component success", () => {
    it("should show info and yellow background correctly", async () => {
        cy.mount(<Day temp={forecast.list[1].main.temp} day={1} />);
        const expectedColor = getColorByTemperature(forecast.list[1].main.temp);
        cy.get("[data-cy='day']")
            .should(
                "to.have.css",
                "background-color",
                `rgba(${expectedColor}, 0.9)`
            )
            .within(() => {
                const { temp } = forecast.list[1].main;
                cy.contains(temp);
                cy.contains("AMANHÃ");
            });
    });
    it("should show info and blue background correctly", async () => {
        const temp = 12;
        cy.mount(<Day temp={temp} day={1} />);
        const expectedColor = getColorByTemperature(temp);
        cy.get("[data-cy='day']")
            .should(
                "to.have.css",
                "background-color",
                `rgba(${expectedColor}, 0.9)`
            )
            .within(() => {
                cy.contains(temp);
                cy.contains("AMANHÃ");
            });
    });
    it("should show info and red background correctly", async () => {
        const temp = 40;
        cy.mount(<Day temp={temp} day={2} />);
        const expectedColor = getColorByTemperature(temp);
        cy.get("[data-cy='day']")
            .should(
                "to.have.css",
                "background-color",
                `rgba(${expectedColor}, 0.9)`
            )
            .within(() => {
                cy.contains(temp);
                cy.contains("DEPOIS AMANHÃ");
            });
    });
});
