import Vue from "vue";
import { expect } from "chai";
import ForecastHeader from "@/components/Forecast/ForecastHeader.vue";

function getMountedComponent(Component, propsData) {
    const Constructor = Vue.extend(Component);
    const vm = new Constructor({propsData}).$mount();
    return vm.$props;
}

describe("ForecastHeader.vue", () => {
    it("should render correct contents", () => {
        //assert if the location is rendered
        expect(getMountedComponent(ForecastHeader, {
            location: "Testing location prop!"
        }).location).to.equal("Testing location prop!");
    });
});