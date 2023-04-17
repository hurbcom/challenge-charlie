import { render, screen } from "@testing-library/react";
import WeatherListItem from ".";

const data = {
    day: "Hoje ",
    humidity: 70,
    pressure: 1015,
    temperature: 24.28,
    windDirection: "SW",
    windSpeed: 3.39,
    weatherDescription: "chuva leve",
};

describe("<WeatherListItem />", () => {
    test("render compact weather item", () => {
        const { asFragment } = render(<WeatherListItem data={data} />);
        expect(asFragment).toMatchSnapshot();

        expect(screen.getByRole("list")).toBeInTheDocument();
        expect(screen.getByText(/Hoje/)).toBeInTheDocument();
        expect(screen.queryByText(/chuva leve/)).not.toBeInTheDocument();
    });
    test("render full weather item", () => {
        const { asFragment } = render(
            <WeatherListItem data={data} compact={false} />
        );
        expect(asFragment).toMatchSnapshot();

        expect(screen.getByRole("list")).toBeInTheDocument();
        expect(screen.getByText(/Hoje/)).toBeInTheDocument();
        expect(screen.getByText(/chuva leve/)).toBeInTheDocument();
    });

    test("render weather item with zero temperature", () => {
        const { asFragment } = render(
            <WeatherListItem
                data={{
                    ...data,
                    temperature: 0,
                }}
            />
        );
        expect(asFragment).toMatchSnapshot();

        expect(screen.getByRole("list")).toBeInTheDocument();
        expect(screen.getByText(/Hoje/)).toBeInTheDocument();
        expect(screen.queryByText(/chuva leve/)).not.toBeInTheDocument();
        expect(screen.getByRole("presentation")).toHaveStyleRule(
            "background-color",
            "#002e3c"
        );
    });

    test("render weather item with yellow range temperature deg", () => {
        const { asFragment } = render(
            <WeatherListItem
                data={{
                    ...data,
                    temperature: 20,
                }}
            />
        );
        expect(asFragment).toMatchSnapshot();

        expect(screen.getByRole("list")).toBeInTheDocument();
        expect(screen.getByText(/Hoje/)).toBeInTheDocument();
        expect(screen.queryByText(/chuva leve/)).not.toBeInTheDocument();
        expect(screen.getByRole("presentation")).toHaveStyleRule(
            "background-color",
            "#fed233"
        );
    });

    test("render weather item with 44 temperature render last red color", () => {
        const { asFragment } = render(
            <WeatherListItem
                data={{
                    ...data,
                    temperature: 44,
                }}
            />
        );
        expect(asFragment).toMatchSnapshot();

        expect(screen.getByRole("list")).toBeInTheDocument();
        expect(screen.getByText(/Hoje/)).toBeInTheDocument();
        expect(screen.queryByText(/chuva leve/)).not.toBeInTheDocument();
        expect(screen.getByRole("presentation")).toHaveStyleRule(
            "background-color",
            "#8c230a"
        );
    });

    test("render weather item with 40 temperature render second-last red color", () => {
        const { asFragment } = render(
            <WeatherListItem
                data={{
                    ...data,
                    temperature: 40,
                }}
            />
        );
        expect(asFragment).toMatchSnapshot();

        expect(screen.getByRole("list")).toBeInTheDocument();
        expect(screen.getByText(/Hoje/)).toBeInTheDocument();
        expect(screen.queryByText(/chuva leve/)).not.toBeInTheDocument();
        expect(screen.getByRole("presentation")).toHaveStyleRule(
            "background-color",
            "#b52d0d"
        );
    });
});
