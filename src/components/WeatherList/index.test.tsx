import { render, screen } from "@testing-library/react";
import WeatherList from ".";

describe("<WeatherList />", () => {
    test("render the weather list with 1 item", () => {
        const { asFragment } = render(
            <WeatherList
                data={[
                    {
                        day: "Hoje ",
                        humidity: 70,
                        pressure: 1015,
                        temperature: 24.28,
                        windDirection: "SW",
                        windSpeed: 3.39,
                        weatherDescription: "chuva leve",
                    },
                ]}
            />
        );

        expect(asFragment).toMatchSnapshot();
        expect(screen.queryAllByRole("presentation").length).toEqual(1);
    });
    test("render the weather list with 5 item", () => {
        const { asFragment } = render(
            <WeatherList
                data={[
                    {
                        day: "Hoje ",
                        humidity: 70,
                        pressure: 1015,
                        temperature: 24.28,
                        windDirection: "SW",
                        windSpeed: 3.39,
                        weatherDescription: "chuva leve",
                    },
                    {
                        day: "Amanhã ",
                        humidity: 70,
                        pressure: 1015,
                        temperature: 24.28,
                        windDirection: "SW",
                        windSpeed: 3.39,
                        weatherDescription: "ensolarado",
                    },
                    {
                        day: "15 de abril ",
                        humidity: 70,
                        pressure: 1015,
                        temperature: 24.28,
                        windDirection: "SW",
                        windSpeed: 3.39,
                        weatherDescription: "poucas nuvens",
                    },
                    {
                        day: "16 de abril ",
                        humidity: 70,
                        pressure: 1015,
                        temperature: 24.28,
                        windDirection: "SW",
                        windSpeed: 3.39,
                        weatherDescription: "chuva leve",
                    },
                    {
                        day: "17 de abril ",
                        humidity: 70,
                        pressure: 1015,
                        temperature: 24.28,
                        windDirection: "SW",
                        windSpeed: 3.39,
                        weatherDescription: "chuva leve",
                    },
                ]}
            />
        );

        expect(asFragment).toMatchSnapshot();
        expect(screen.queryAllByRole("presentation").length).toEqual(5);
        expect(screen.queryByText(/ensolarado/)).not.toBeInTheDocument();
        expect(screen.queryByText(/Amanhã/)).toBeInTheDocument();
        expect(screen.queryByText(/poucas nuvens/)).not.toBeInTheDocument();
    });
});
