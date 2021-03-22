import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import CityInfo from "../Molecules/CityInfo";
import { ThemeContext } from "../Molecules/ThemeContext";
import pretty from "pretty";

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

it("should render CityInfo if has city name", () => {
  const city = "rio de janeiro";

  act(() => {
    render(
      <ThemeContext.Provider value={{ city }}>
        <CityInfo />
      </ThemeContext.Provider>,
      container
    );
  });

  expect(container.textContent).toBe(city);
  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<div class=\\"cityInfo\\">
      <div class=\\"cityInfo__wrapper\\"><span class=\\"cityInfo__icon\\"></span>
        <h2 class=\\"cityInfo__title\\">rio de janeiro</h2>
      </div>
    </div>"
  `); /* ... gets filled automatically by jest ... */
});
