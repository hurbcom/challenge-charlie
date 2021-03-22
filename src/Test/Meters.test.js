import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { ThemeContext } from "../Molecules/ThemeContext";
import { act } from "react-dom/test-utils";
import pretty from "pretty";

import Meters from "../Atons/Meters";

let container = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("should render Meters with no props", () => {
    act(() => {
        render(<Meters />, container);
    });
    expect(pretty(container.innerHTML)).toMatchInlineSnapshot(
        `"<div class=\\"meters\\"><span class=\\"meters__box-info\\">NaN<span class=\\"meters__unit meters__unit--undefined\\"><span class=\\"meters__celsius\\"> °C</span> | <span class=\\"meters__fahrenheit\\">°F</span></span></span></div>"`
    ); /* ... gets filled automatically by jest ... */
});

it("should render Meters props temp, whitchUnit", () => {
    const propsTypes = {
        temp: 32,
    };

    const whitchUnit = "celsius";

    act(() => {
        render(
            <ThemeContext.Provider value={{ whitchUnit }}>
                <Meters temp={propsTypes.temp} />
            </ThemeContext.Provider>,
            container
        );
    });
    expect(pretty(container.innerHTML)).toMatchInlineSnapshot(
        `"<div class=\\"meters\\"><span class=\\"meters__box-info\\">32<span class=\\"meters__unit meters__unit--celsius\\"><span class=\\"meters__celsius\\"> °C</span> | <span class=\\"meters__fahrenheit\\">°F</span></span></span></div>"`
    ); /* ... gets filled automatically by jest ... */
});
