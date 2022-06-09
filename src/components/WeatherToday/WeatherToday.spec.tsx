import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import React from "react";
import WeatherToday from "./WeatherToday";

const myMock = jest.fn();
myMock.mockReturnValue(false);

const props = {
  weather: {
    temperature: 22,
    mood: "Nublado",
    windSpeed: 32,
    windDirection: "S",
    humidity: 97,
    pressure: 32,
    icon: "01d",
  },
  color: "#ffffff",
  isCelsius: true,
  toggleIsCelsius: myMock,
  location: "Niterói",
};

test("component is rendered", async () => {
  const { container } = render(
    <WeatherToday
      weather={props.weather}
      color={props.color}
      isCelsius={props.isCelsius}
      toggleCelsius={props.toggleIsCelsius}
      location={props.location}
    />
  );
  expect(container.getElementsByClassName("today")).toBeTruthy();
});

test("component is rendered differently without location", async () => {
  const { container } = render(
    <WeatherToday
      weather={props.weather}
      color={props.color}
      isCelsius={props.isCelsius}
      toggleCelsius={props.toggleIsCelsius}
      location={undefined}
    />
  );
  expect(container.getElementsByClassName("today-undefined")).toBeTruthy();
});

test("component renders humidity correctly", async () => {
  render(
    <WeatherToday
      weather={props.weather}
      color={props.color}
      isCelsius={props.isCelsius}
      toggleCelsius={props.toggleIsCelsius}
      location={props.location}
    />
  );
  expect(screen.getByText(/97/i)).toHaveTextContent(/97/i);
});

test("component call toggleFunction when we click right div", async () => {
  render(
    <WeatherToday
      weather={props.weather}
      color={props.color}
      isCelsius={props.isCelsius}
      toggleCelsius={props.toggleIsCelsius}
      location={props.location}
    />
  );
  const divToBeClicked = screen.getByText(/°C/);
  fireEvent.click(divToBeClicked);
  expect(myMock).toBeCalled();
});
