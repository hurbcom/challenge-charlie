import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Temperature from "./Temperature";

it("should use the current temperature in the button text", () => {
  render(<Temperature temp={40} style="" />);
  expect(screen.getByText("40")).toBeInTheDocument();
});

it("should change temperature scales when clicked", () => {
  render(<Temperature temp={26} style="" />);
  expect(screen.getByText("26")).toBeInTheDocument();
  const changeButton = screen.getByTitle("Clique para mudar a unidade.");
  fireEvent.click(changeButton);
  expect(screen.getByText("79")).toBeInTheDocument();
});
