import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../src/components/Header";
import { useGeo } from "../src/hooks/geolocation";
import { useWeather } from "../src/hooks/weather";

jest.mock("../src/hooks/geolocation");
jest.mock("../src/hooks/weather");

describe("Header", () => {
    beforeEach(() => {
        useGeo.mockImplementation(() => {
            return {
                locationString: "Rio de janeiro, Rio de Janeiro",
                getUserCurrentLocation: () => null,
                loading: false,
                getInputLocation: () => null,
                lat: 15.15,
                long: 15.15,
            };
        });
        useWeather.mockImplementation(() => {
            return { getWeatherInfo: () => null };
        });
    });

    describe("when there's loading", () => {
        it("renders the loading component", () => {
            useGeo.mockImplementation(() => {
                return {
                    locationString: "Rio de janeiro, Rio de Janeiro",
                    getUserCurrentLocation: () => null,
                    loading: true,
                    getInputLocation: () => null,
                    lat: 15.15,
                    long: 15.15,
                };
            });
            const { getByText } = render(<Header />);
            expect(getByText("Aguarde...")).toBeTruthy();
        });
    });

    describe("when render for the fist time", () => {
        it("renders ReactLoading", () => {
            const { getByDisplayValue } = render(<Header />);
            expect(
                getByDisplayValue("Rio de janeiro, Rio de Janeiro")
            ).toBeTruthy();
        });
    });
});
