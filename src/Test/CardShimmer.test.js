import React from "react";
import { render, unmountComponentAtNode } from "react-dom";

import { act } from "react-dom/test-utils";
import pretty from "pretty";

import CardShimmer from "../Molecules/CardShimmer";

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

it("should render CardShimmer estruture", () => {
    act(() => {
        render(<CardShimmer />, container);
    });
    expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
        "<div class=\\"card-shimmer\\">
          <div class=\\"card-shimmer__wrapper\\">
            <div class=\\"card-shimmer__city-info animate\\"></div>
            <div class=\\"card-shimmer__content-info\\">
              <div class=\\"card-shimmer__icon animate\\"></div>
              <div class=\\"card-shimmer__text-box\\">
                <div class=\\"card-shimmer__today\\"><span class=\\"card-shimmer__today-info animate\\"> </span><span class=\\"card-shimmer__today-info animate\\"></span></div>
                <div class=\\"card-shimmer__status-box\\"><span class=\\"card-shimmer__status-info animate\\"> </span><span class=\\"card-shimmer__status-air animate\\"></span><span class=\\"card-shimmer__status-air animate\\"> </span><span class=\\"card-shimmer__status-air animate\\"></span></div>
              </div>
            </div>
            <div class=\\"card-shimmer__box card-shimmer__box--tomorrow\\">
              <div class=\\"card-shimmer__box-wrapper\\"><span class=\\"card-shimmer__box-info animate\\"> </span><span class=\\"card-shimmer__box-info animate\\"></span></div>
            </div>
            <div class=\\"card-shimmer__box card-shimmer__box--after\\">
              <div class=\\"card-shimmer__box-wrapper\\"><span class=\\"card-shimmer__box-info animate\\"></span><span class=\\"card-shimmer__box-info animate\\"></span></div>
            </div>
          </div>
        </div>"
    `); /* ... gets filled automatically by jest ... */
});
