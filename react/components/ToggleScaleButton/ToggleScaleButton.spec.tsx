import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ToggleScaleButton from ".";

describe("Testing the ToggleScaleButton component", () => {
    it("should return the temperature with the default scale (C°)", () => {
        render(<ToggleScaleButton temperature={14} />);
        expect(screen.getByRole("button")).toHaveTextContent("14°C");
    });

    it("should return the temperature with the second available scale (F°) when clicked", async () => {
        render(<ToggleScaleButton temperature={14} />);

        await userEvent.click(screen.getByRole("button"));

        expect(screen.getByRole("button")).toHaveTextContent("57°F");
    });

    it("should return the temperature with the default scale (C°) when clicked twice", async () => {
        render(<ToggleScaleButton temperature={14} />);
        await userEvent.click(screen.getByRole("button"));
        await userEvent.click(screen.getByRole("button"));
        expect(screen.getByRole("button")).toHaveTextContent("14°C");
    });
});
