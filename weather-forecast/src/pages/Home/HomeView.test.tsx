import React from "react";
import { render, screen } from "@testing-library/react";
import { HomeView } from "./HomeView";

test("renders weather component with props", () => {
    const inputValue = "Rio de Janeiro, Rio de Janeiro";
    const today = {
        temperature: "32°C",
        weather: "Ensolarado",
        wind: "NO 6.4km/h",
        humidity: "78%",
        pressure: "1003 hPa",
        icon: "1",
    };
    const tomorrow = {
        temperature: "25°C",
    };
    const afterTomorrow = {
        temperature: "22°C",
    };

    render(
        <HomeView
            afterTomorrow={afterTomorrow.temperature}
            error={false}
            handleInputChange={() => jest.fn}
            handleKeyDown={() => jest.fn}
            humidity={today.humidity}
            icon={today.icon}
            inputValue={inputValue}
            isCelsius={false}
            loading={false}
            pressure={today.pressure}
            temperature={today.temperature}
            toggleTemperatureUnit={() => jest.fn}
            tomorrow={tomorrow.temperature}
            weather={today.weather}
            wind={today.wind}
            todayColor={"blue-today"}
            tomorrowColor={"blue-tomorrow"}
            afterTomorrowColor={"blue-after-tomorrow"}
        />
    );

    expect(screen.getByText("32°C")).toBeInTheDocument();
    expect(screen.getByText("Ensolarado")).toBeInTheDocument();
    expect(screen.getByText("Vento: NO 6.4km/h")).toBeInTheDocument();
    expect(screen.getByText("Humidade: 78%")).toBeInTheDocument();
    expect(screen.getByText("Pressão: 1003 hPa")).toBeInTheDocument();
    expect(screen.getByText("25°C")).toBeInTheDocument();
    expect(screen.getByText("22°C")).toBeInTheDocument();
});
