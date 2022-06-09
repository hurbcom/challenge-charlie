import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import React from "react";
import WeatherNextDays from "./WeatherNextDays";

const myMock = jest.fn();
myMock.mockReturnValue(false);

const props = {
  weather: {
    temperature: 22,
    id: 1,
  },
  day: 1,
  color: "#ffffff",
  isCelsius: true,
  toggleCelsius: myMock,
  location: "Niterói",
};

test("component is rendered", async () => {
  const { container } = render(
    <WeatherNextDays
      weather={props.weather}
      day={props.day}
      color={props.color}
      isCelsius={props.isCelsius}
      toggleCelsius={props.toggleCelsius}
      location={props.location}
    />
  );
  expect(container.getElementsByClassName("nextdays")).toBeTruthy();
});

test("component renders temperature correctly", async () => {
  render(
    <WeatherNextDays
      weather={props.weather}
      day={props.day}
      color={props.color}
      isCelsius={props.isCelsius}
      toggleCelsius={props.toggleCelsius}
      location={props.location}
    />
  );
  expect(screen.getByText(/22/i)).toHaveTextContent(/22/i);
});

test("component call toggleFunction when we click right div", async () => {
  render(
    <WeatherNextDays
      weather={props.weather}
      day={props.day}
      color={props.color}
      isCelsius={props.isCelsius}
      toggleCelsius={props.toggleCelsius}
      location={props.location}
    />
  );
  const divToBeClicked = screen.getByText(/°C/);
  fireEvent.click(divToBeClicked);
  expect(myMock).toBeCalled();
});

test("component render with amanhã text", async () => {
  render(
    <WeatherNextDays
      weather={props.weather}
      day={0}
      color={props.color}
      isCelsius={props.isCelsius}
      toggleCelsius={props.toggleCelsius}
      location={props.location}
    />
  );
  expect(screen.getByText("Amanhã")).toHaveTextContent("Amanhã");
});

test("component render with depois de amanhã text", async () => {
  render(
    <WeatherNextDays
      weather={props.weather}
      day={props.day}
      color={props.color}
      isCelsius={props.isCelsius}
      toggleCelsius={props.toggleCelsius}
      location={props.location}
    />
  );
  expect(screen.getByText("Depois de amanhã")).toHaveTextContent(
    "Depois de amanhã"
  );
});
