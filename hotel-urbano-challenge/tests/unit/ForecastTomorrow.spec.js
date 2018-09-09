import Vue from "vue";
import { expect } from "chai";
import ForecastTomorrow from "@/components/Forecast/ForecastTomorrow.vue";

function getMountedComponent(Component, propsData) {
    const Constructor = Vue.extend(Component);
    const vm = new Constructor({propsData}).$mount();
    return vm.$props;
}

describe("ForecastTomorrow.vue", () => {
    it("should render correct contents", () => {
        //assert if the temperature is rendered
        expect(getMountedComponent(ForecastTomorrow, {
            temperature: "Testing temperature prop!"
        }).temperature).to.equal("Testing temperature prop!");

        //assert if the lat is rendered
        expect(getMountedComponent(ForecastTomorrow, {
            lat: "Testing lat prop!"
        }).lat).to.equal("Testing lat prop!");

        //assert if the long is rendered
        expect(getMountedComponent(ForecastTomorrow, {
            long: "Testing long prop!"
        }).long).to.equal("Testing long prop!");

        //assert if the unit is rendered
        expect(getMountedComponent(ForecastTomorrow, {
            unit: "Testing unit prop!"
        }).unit).to.equal("Testing unit prop!");
    });
});