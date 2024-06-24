import React from "react";
import { render, screen } from "@testing-library/react"
import Home from '../Home/index'
import { useWeatherForecastContext } from "../../stores/WeatherForecastProvider";
import { useBackgroundImageContext } from "../../stores/HomeBackgroundProvider";
import { useLocationContext } from "../../stores/LocationProvider";
import { useLoadingContext } from "../../stores/LoadingProvider";

jest.mock('../../stores/WeatherForecastProvider');
jest.mock('../../stores/HomeBackgroundProvider');
jest.mock('../../stores/LocationProvider');
jest.mock('../../stores/LoadingProvider');

const mockUseWeatherForecastContext = useWeatherForecastContext as jest.Mock;
const mockUseBackgroundImageContext = useBackgroundImageContext as jest.Mock;
const mockLocationContext = useLocationContext as jest.Mock;
const mockLoadingContext = useLoadingContext as jest.Mock;

describe('Home page', () => {
    beforeEach(() => {
        mockUseWeatherForecastContext.mockReturnValue({
            temperature: {
                "fahrenheit": 60,
                "celsius": 16
            },
            weather: 'Clouds',
            humidity: 83,
            pressure: 1019,
            windSpeed: 5.8,
            windDirection: 'N',
            tomorowTemperature: {
                "fahrenheit": 61,
                "celsius": 16
            },
            "afterTomorrowTemperature": {
                "fahrenheit": 57,
                "celsius": 14
            },
            colorTheme: 'yellow',
            fetchWeatherForecast: jest.fn().mockReturnValueOnce(null)
        });

        mockUseBackgroundImageContext.mockReturnValue({ backgroundImage: 'https://mockedimage.com/image.jpeg' });
        mockLocationContext.mockReturnValue({ city: 'Ouro Branco', fetchLocation: jest.fn().mockReturnValueOnce(null) });
        mockLoadingContext.mockReturnValue({ loading: false, setLoading: jest.fn().mockReturnValueOnce(null) });
    });

    it('should render city name from context', () => {
        render(<Home />);


    })
})