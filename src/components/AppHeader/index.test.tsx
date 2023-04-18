import { act, fireEvent, render, screen } from "@testing-library/react";
import AppHeader from ".";

const handleChange = jest.fn();

jest.mock("../../hooks/useDailyForecast", () => {
    return jest.fn(() => ({
        result: {
            latitude: -27.1,
        },
        loadForecast: jest.fn().mockImplementation(() => Promise.resolve()),
    }));
});

jest.mock("../../hooks/useGeocode", () => {
    return jest
        .fn()
        .mockImplementation(() => ({
            result: {},
            translate: jest.fn(),
        }))
        .mockImplementationOnce(() => ({
            result: {
                latitude: -27.1,
            },
            translate: jest.fn().mockImplementation(() =>
                Promise.resolve({
                    latitude: 27.5,
                    longitude: 48.5,
                    city: "Florianópolis",
                    state: "Santa Catarina",
                })
            ),
        }))
        .mockImplementationOnce(() => ({
            result: {
                latitude: -27.1,
                longitude: -48.5,
            },
            translate: jest.fn().mockImplementation(() =>
                Promise.resolve({
                    latitude: -27.5,
                    longitude: -48.5,
                    city: "Florianópolis",
                    state: "Santa Catarina",
                })
            ),
        }));
});

jest.mock("../../hooks/useGeolocation", () => {
    return jest.fn().mockImplementation(() => ({
        coords: {
            latitude: 27.5,
            longitude: 48.5,
        },
    }));
});

describe("<AppHeader />", () => {
    test("renders the <AppHeader/> component with users location", async () => {
        const { asFragment, rerender } = render(
            <AppHeader onChange={handleChange} />
        );
        expect(asFragment).toMatchSnapshot();
    });

    test("renders the <AppHeader/> component", async () => {
        const { asFragment } = render(<AppHeader onChange={handleChange} />);
        expect(asFragment).toMatchSnapshot();
        const input =
            screen.getByPlaceholderText<HTMLInputElement>("Buscar um lugar...");
        expect(input).toBeInTheDocument();

        await act(async () => {
            fireEvent.change(input, { target: { value: "floripa" } });
        });

        expect(input.value).toEqual("floripa");
    });
});
