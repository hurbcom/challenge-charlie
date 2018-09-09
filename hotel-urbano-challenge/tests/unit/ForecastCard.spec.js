import Vue from "vue";
import { expect } from "chai";
import ForecastCard from "@/components/Forecast/ForecastCard.vue";

function getMountedComponent(Component, propsData) {
    const Constructor = Vue.extend(Component);
    const vm = new Constructor({ propsData }).$mount();
    return vm.$props;
}

describe("ForecastCard.vue", () => {
    it("should render correct contents", () => {
        //assert if the weather is rendered
        expect(
            getMountedComponent(ForecastCard, {
                weather: "Testing Weather prop!"
            }).weather
        ).to.equal("Testing Weather prop!");

        //assert if the lat is rendered
        expect(
            getMountedComponent(ForecastCard, {
                lat: "Testing lat prop!"
            }).lat
        ).to.equal("Testing lat prop!");

        //assert if the long is rendered
        expect(
            getMountedComponent(ForecastCard, {
                long: "Testing long prop!"
            }).long
        ).to.equal("Testing long prop!");

        //assert if the loading is rendered
        expect(
            getMountedComponent(ForecastCard, {
                loading: "Testing loading prop!"
            }).loading
        ).to.equal("Testing loading prop!");
    });
});
