import { render } from "@testing-library/react";
import Weather from ".";

jest.useFakeTimers();

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
                latitude: -27.5,
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

jest.mock("../../hooks/useDailyForecast", () => {
    return jest.fn(() => ({
        forecast: [],
        loadForecast: jest
            .fn()
            .mockImplementation(() => Promise.resolve({ daily: [] })),
    }));
});

describe("<Weather />", () => {
    test("renders the weather app without data", () => {
        const { asFragment } = render(<Weather />);
        expect(asFragment).toMatchSnapshot();
        jest.runAllTimers();
    });
});
