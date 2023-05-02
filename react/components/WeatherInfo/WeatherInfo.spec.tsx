import React from "react";
import { render, screen } from "@testing-library/react";

import WeatherInfo from '.';

const mock = {
    day: "HOJE",
    main: {
        temp: 14,
        humidity: 0,
        pressure: 0,
    },
    weather: [{icon: "01d", description: "test"}],
    wind: {
        deg: 0,
        speed: 0,
    }
}

describe("Testing the WeatherInfo component", () => {
    it("should render the day and not the icon when isOpen=false", () => {
        
        render(<WeatherInfo
            weather={mock.weather}
            day={mock.day}
            main={mock.main}
            wind={mock.wind}
            isOpen={false}
            position={0} />);

        expect(screen.getByText('HOJE')).toBeInTheDocument();
        expect(screen.queryByTestId('weather-icon')).not.toBeInTheDocument();
    });

    it("should render the day and the icon when isOpen=false", () => {
        
        render(<WeatherInfo
            weather={mock.weather}
            day={mock.day}
            main={mock.main}
            wind={mock.wind}
            isOpen={true}
            position={0} />);

        expect(screen.getByText('HOJE')).toBeInTheDocument();
        expect(screen.getByTestId('weather-icon')).toBeInTheDocument();
    });

    it("should render a message if the given temperature is 0", () => {

        mock.main.temp = 0;
        
        render(<WeatherInfo
            weather={mock.weather}
            day={mock.day}
            main={mock.main}
            wind={mock.wind}
            isOpen={true}
            position={0} />);

        expect(screen.getByText('Sem informações de previsão, busque por uma cidade')).toBeInTheDocument();
    });

    
});
