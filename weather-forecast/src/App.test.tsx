import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom/extend-expect"; // for the extra matchers

jest.mock("./pages/Home", () => ({
    Home: () => <div>Home Component</div>,
}));

test("renders Home component inside App", () => {
    render(<App />);
    const homeElement = screen.getByText("Home Component");
    expect(homeElement).toBeInTheDocument();
});
