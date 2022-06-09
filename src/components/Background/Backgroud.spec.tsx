import React from "react";
import Background from "./Background";
import { render } from "@testing-library/react";
import "whatwg-fetch";

test("renders background component", () => {
  const { container } = render(<Background />);
  expect(container.getElementsByClassName("background")).toBeTruthy();
});
