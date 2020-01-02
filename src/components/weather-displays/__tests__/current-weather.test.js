import React from "react";
import renderer from "react-test-renderer";
import { mount } from "enzyme";
import Weather from "../current-weather";

describe("weather display", () => {
    const props = {
        temp_max: 30,
        humidity: 78,
        pressure: 1003,
        speed: 12,
        deg: 80,
        main: "Clear",
        unit: "C",
        toggleUnit: () => {}
    };

    it("matches snapshot", () => {
        const component = renderer.create(<Weather {...props} />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("shows correct information", () => {
        const wrapper = mount(<Weather {...props} />);

        expect(wrapper.find("span.temperature").text()).toBe("30 ºC");
        expect(wrapper.find("span.wind").text()).toBe("Vento: Leste 12 Kmph");
        expect(wrapper.find("span.humidity").text()).toBe("Humidade: 78 %");
        expect(wrapper.find("span.pressure").text()).toBe("Pressão: 1003 hPA");
    });
});
