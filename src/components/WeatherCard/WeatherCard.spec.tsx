import { render } from "@testing-library/react";
import React from "react";
import WeatherCard from "./WeatherCard";

test("component is rendered", async () => {
  const { container } = render(<WeatherCard />);
  expect(container.getElementsByClassName("card")).toBeTruthy();
});

test("should render spinner load on first call of component", async () => {
  const { container } = render(<WeatherCard />);
  expect(container.getElementsByClassName("spinner")).toBeTruthy();
});
