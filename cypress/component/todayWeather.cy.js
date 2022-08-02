import { TodayWeather } from "../../src/components/todayWeather";
import config from "../../src/config.json";
import { getColorByTemperature, getWindDirection } from "../../src/helpers";
import forecast from "../fixtures/forecast.json";
describe("TodayWeather component success", () => {
    it("should show info correctly", async () => {
        cy.mount(<TodayWeather forecast={forecast.list[0]} />);
        cy.get("[data-cy='today']").within(() => {
            const { temp, humidity, pressure } = forecast.list[0].main;
            cy.contains(temp);
            cy.contains("HOJE");
            cy.contains(humidity);
            cy.contains(pressure);
            cy.contains(getWindDirection(forecast.list[0].wind.deg));
            cy.contains(forecast.list[0].wind.speed);
        });
    });
    it("should show yellow background when temperature >15 and <35", () => {
        cy.mount(<TodayWeather forecast={forecast.list[0]} />);
        const expectedColor = getColorByTemperature(forecast.list[0].main.temp);
        cy.get("[data-cy='today']").should(
            "to.have.css",
            "background-color",
            `rgba(${expectedColor}, 0.8)`
        );
    });
    it("should show red background when temperature >35", () => {
        cy.mount(
            <TodayWeather
                forecast={{
                    ...forecast.list[0],
                    main: {
                        ...forecast.list[0].main,
                        temp: 40,
                    },
                }}
            />
        );
        const expectedColor = getColorByTemperature(40);
        cy.get("[data-cy='today']").should(
            "to.have.css",
            "background-color",
            `rgba(${expectedColor}, 0.8)`
        );
    });
    it("should show blue background when temperature >15", () => {
        cy.mount(
            <TodayWeather
                forecast={{
                    ...forecast.list[0],
                    main: {
                        ...forecast.list[0].main,
                        temp: 12,
                    },
                }}
            />
        );
        const expectedColor = getColorByTemperature(12);
        cy.get("[data-cy='today']").should(
            "to.have.css",
            "background-color",
            `rgba(${expectedColor}, 0.8)`
        );
    });
});
