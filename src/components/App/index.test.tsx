import { render, screen } from "@testing-library/react";
import App from ".";
import React from "react";

describe("<App />", () => {
    test("renders the <App/> component", async () => {
        const { asFragment } = render(<App />);
        expect(
            await screen.findByText("Hello World! Jest is working fine!")
        ).toBeInTheDocument();
        expect(asFragment).toMatchSnapshot();
    });
});
