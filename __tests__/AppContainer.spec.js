import React from "react";
import { render, screen } from "@testing-library/react";
import AppContainer from "../src/components/AppContainer";
import { useBackground } from "../src/hooks/backgroundBing";

jest.mock("../src/hooks/backgroundBing");

describe("AppContainer", () => {
    beforeEach(() => jest.resetModules());

    describe("when there's no loading", () => {
        it("renders the image component", () => {
            useBackground.mockImplementation(() => {
                return {
                    backgroundImage:
                        "https://avatars2.githubusercontent.com/u/42251824?v=4",
                    getBackground: () => {
                        return null;
                    },
                    loading: false,
                };
            });
            const { getByTestId } = render(<AppContainer />);
            expect(getByTestId("AppContainer-loaded")).toBeTruthy();
        });
    });

    describe("when there's a loading", () => {
        it("renders ReactLoading", () => {
            useBackground.mockImplementation(() => {
                return {
                    backgroundImage:
                        "https://avatars2.githubusercontent.com/u/42251824?v=4",
                    getBackground: () => {
                        return null;
                    },
                    loading: true,
                };
            });
            const { getByTestId } = render(<AppContainer />);
            expect(getByTestId("AppContainer-onLoading")).toBeTruthy();
        });
    });
});
