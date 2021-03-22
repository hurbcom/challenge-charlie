import React from "react";
import { render, unmountComponentAtNode } from "react-dom";

import { act } from "react-dom/test-utils";
import pretty from "pretty";

import StatusItem from "../Atons/StatusItem";

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

it("should render StatusItem with no props classInfo", () => {
    act(() => {
        render(<StatusItem />, container);
    });
    expect(pretty(container.innerHTML)).toMatchInlineSnapshot(
        `""`
    ); /* ... gets filled automatically by jest ... */
});

it("should render StatusItem has props classInfo", () => {
    const PropsTypes = {
        classInfo: "info",
    };
    act(() => {
        render(
            <StatusItem
                classInfo={PropsTypes.classInfo}
                name={PropsTypes.name}
            />,
            container
        );
    });
    expect(pretty(container.innerHTML)).toMatchInlineSnapshot(
        `"<span class=\\"status__info\\">   </span>"`
    ); /* ... gets filled automatically by jest ... */
});

it("renders StatusItems data", () => {
    const PropsTypes = {
        classInfo: "info",
        name: "Vento",
        type: 23,
        unit: "km/h",
        info: ''
    };

    act(() => {
        render(<StatusItem classInfo={PropsTypes.classInfo} name={PropsTypes.name} type={PropsTypes.type} unit={PropsTypes.unit} info={PropsTypes.info} />, container);
    });

    expect(container.querySelector(".status__info").textContent).toBe(
       `${PropsTypes.name} ${PropsTypes.type} ${PropsTypes.info}${PropsTypes.unit} `
    );
});
