import React from "react";
import { render, unmountComponentAtNode } from "react-dom";

import { act } from "react-dom/test-utils";
import pretty from "pretty";

import BoxTemp from "../Molecules/BoxTemp";

let container = null;
const PropsTypes = {
    setClass: "cold",
    status: "neve",
    temp: -10,
};

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

it("should render BoxTemp with no props", () => {
    act(() => {
        render(<BoxTemp />, container);
    });
    expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
        "<div class=\\"boxTemp boxTemp--undefined\\">
          <div class=\\"boxTemp__wrapper\\"><span class=\\"boxTemp__box-info\\"> </span>
            <div class=\\"meters\\"><span class=\\"meters__box-info\\">NaN<span class=\\"meters__unit meters__unit--undefined\\"><span class=\\"meters__celsius\\"> °C</span> | <span class=\\"meters__fahrenheit\\">°F</span></span></span></div>
          </div>
        </div>"
    `); /* ... gets filled automatically by jest ... */
});

it("should render BoxTemp has props", () => {
    act(() => {
        render(
            <BoxTemp
                setClass={PropsTypes.setClass}
                status={PropsTypes.status}
                temp={PropsTypes.temp}
            />,
            container
        );
    });

    expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
        "<div class=\\"boxTemp boxTemp--cold\\">
          <div class=\\"boxTemp__wrapper\\"><span class=\\"boxTemp__box-info\\">neve </span>
            <div class=\\"meters\\"><span class=\\"meters__box-info\\">-10<span class=\\"meters__unit meters__unit--undefined\\"><span class=\\"meters__celsius\\"> °C</span> | <span class=\\"meters__fahrenheit\\">°F</span></span></span></div>
          </div>
        </div>"
    `); /* ... gets filled automatically by jest ... */
});

it("renders BoxTemps data", () => {
    act(() => {
        render(
            <BoxTemp
                setClass={PropsTypes.setClass}
                status={PropsTypes.status}
                temp={PropsTypes.temp}
            />,
            container
        );
    });

    expect(container.querySelector(".boxTemp").textContent).toBe(
        `${PropsTypes.status} ${PropsTypes.temp} °C | °F`
    );
});
