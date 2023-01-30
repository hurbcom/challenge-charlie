import { screen } from "@testing-library/react";
import { renderWithTheme } from "@/utils/tests";

import { DailyWeatherProps } from "@/types";
import ForecastInfo from ".";

const weatherData: DailyWeatherProps[] = [
    {
        dt: 1675004400,
        temp: {
            day: 29.77,
        },
        pressure: 1011,
        humidity: 61,
        wind_speed: 3.42,
        wind_deg: 122,
        weather: [
            {
                id: 501,
                main: "Rain",
                description: "moderate rain",
                icon: "10d",
            },
        ],
    },
    {
        dt: 1675090800,

        temp: {
            day: 29.28,
        },
        pressure: 1010,
        humidity: 63,
        wind_speed: 3.8,
        wind_deg: 90,
        weather: [
            {
                id: 804,
                main: "Clouds",
                description: "overcast clouds",
                icon: "04d",
            },
        ],
    },
    {
        dt: 1675177200,
        temp: {
            day: 31.91,
        },
        pressure: 1011,
        humidity: 54,
        wind_speed: 2.93,
        wind_deg: 137,
        weather: [
            {
                id: 500,
                main: "Rain",
                description: "light rain",
                icon: "10d",
            },
        ],
    },
];

describe("<ForecastInfo />", () => {
    it("should display weather information for today", () => {
        renderWithTheme(
            <ForecastInfo day="today" weatherData={weatherData[0]} />
        );

        expect(screen.getByText("today")).toBeInTheDocument();
        expect(screen.getByText("29ºC")).toBeInTheDocument();
        expect(screen.getByText("moderate rain")).toBeInTheDocument();
        expect(screen.getByText("Wind: SE 3.42km/h")).toBeInTheDocument();
        expect(screen.getByText("Pressure: 1011hPa")).toBeInTheDocument();
        expect(screen.getByRole("img")).toHaveAttribute(
            "src",
            "/icons/rain.svg"
        );
    });
    it("should display the right information for tomorrow", () => {
        renderWithTheme(
            <ForecastInfo day="tomorrow" weatherData={weatherData[1]} />
        );

        expect(screen.getByText("tomorrow")).toBeInTheDocument();
        expect(screen.getByText("29ºC")).toBeInTheDocument();
        expect(screen.queryByText("overcast clouds")).not.toBeInTheDocument();
        expect(screen.queryByText(/^wind/i)).not.toBeInTheDocument();
        expect(screen.queryByText(/^pressure/i)).not.toBeInTheDocument();
        expect(screen.queryByRole("img")).not.toBeInTheDocument();
    });
    it("should display the right information for the day after tomorrow", () => {
        renderWithTheme(
            <ForecastInfo day="afterTomorrow" weatherData={weatherData[2]} />
        );

        expect(screen.getByText("After Tomorrow")).toBeInTheDocument();
        expect(screen.getByText("31ºC")).toBeInTheDocument();
        expect(screen.queryByText("light rain")).not.toBeInTheDocument();
        expect(screen.queryByText(/^wind/i)).not.toBeInTheDocument();
        expect(screen.queryByText(/^pressure/i)).not.toBeInTheDocument();
        expect(screen.queryByRole("img")).not.toBeInTheDocument();
    });
});
