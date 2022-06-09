import { render, screen } from "@testing-library/react";
import React from "react";
import WeatherInput from "./WeatherInput";

const myMock = jest.fn();
myMock.mockReturnValue(false);

const props = {
  location: "Niterói",
  handleInputChange: myMock,
};

test("component is rendered", async () => {
  const { container } = render(
    <WeatherInput
      location={props.location}
      handleInputChange={props.handleInputChange}
    />
  );
  expect(container.getElementsByClassName("input")).toBeTruthy();
});

test("input renders location name prop", async () => {
  render(
    <WeatherInput
      location={props.location}
      handleInputChange={props.handleInputChange}
    />
  );
  expect(screen.getByRole("textbox")).toHaveValue(props.location);
});

test("input renders blank without location", async () => {
  render(
    <WeatherInput
      location={undefined}
      handleInputChange={props.handleInputChange}
    />
  );
  expect(screen.getByRole("textbox")).toHaveValue("");
});
