import Vue from "vue";
import { expect } from "chai";
import ForecastToday from "@/components/Forecast/ForecastToday.vue";

function getMountedComponent(Component, propsData) {
    const Constructor = Vue.extend(Component);
    const vm = new Constructor({propsData}).$mount();
    return vm.$props;
}

describe("ForecastToday.vue", () => {
    it("should render correct contents", () => {
        //assert if the temp is rendered
        expect(getMountedComponent(ForecastToday, {
            temp: "Testing temp prop!"
        }).temp).to.equal("Testing temp prop!");

        //assert if the lat is rendered
        expect(getMountedComponent(ForecastToday, {
            lat: "Testing lat prop!"
        }).lat).to.equal("Testing lat prop!");

        //assert if the long is rendered
        expect(getMountedComponent(ForecastToday, {
            long: "Testing long prop!"
        }).long).to.equal("Testing long prop!");

        //assert if the unit is rendered
        expect(getMountedComponent(ForecastToday, {
            unit: "Testing unit prop!"
        }).unit).to.equal("Testing unit prop!");

        //assert if the humidity is rendered
        expect(getMountedComponent(ForecastToday, {
            humidity: "Testing humidity prop!"
        }).humidity).to.equal("Testing humidity prop!");

        //assert if the pressure is rendered
        expect(getMountedComponent(ForecastToday, {
            pressure: "Testing pressure prop!"
        }).pressure).to.equal("Testing pressure prop!");

        //assert if the wind is rendered
        expect(getMountedComponent(ForecastToday, {
            wind: "Testing wind prop!"
        }).wind).to.equal("Testing wind prop!");

        //assert if the condition is rendered
        expect(getMountedComponent(ForecastToday, {
            condition: "Testing condition prop!"
        }).condition).to.equal("Testing condition prop!");
    });
});