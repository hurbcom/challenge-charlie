import React from "react";
import renderer from "react-test-renderer";
import { mount } from "enzyme";
import Forecast from "../future-weather";

describe("Forecast display", () => {
    const props = {
        temperature: 30,
        unit: "C",
        day: "Amanhã"
    };

    it("matches snapshot", () => {
        const component = renderer.create(<Forecast {...props} />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("shows correct information", () => {
        const wrapper = mount(<Forecast {...props} />);

        expect(wrapper.find("h2").text()).toBe("Amanhã");
        expect(wrapper.find("span.temperature").text()).toBe("30 ºC");
    });
});
