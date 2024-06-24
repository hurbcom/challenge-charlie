import React from 'react';
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import { useWeatherForecastContext } from "../../stores/WeatherForecastProvider"
import Icon from "../Icon";

jest.mock('../../stores/WeatherForecastProvider');

const mockUseWeatherForecastContext = useWeatherForecastContext as jest.Mock;

describe('Icon component', () => {
    it('should render correctly', () => {
        mockUseWeatherForecastContext.mockReturnValue({ weatherIcon: '13' });
        const { container } = render(<Icon />);
        expect(container.firstChild).toBeInTheDocument();
    });

    it('should render default icon when weatherIcon is not provided', () => {
        mockUseWeatherForecastContext.mockReturnValue({ weatherIcon: undefined });
        const { container } = render(<Icon />);
        expect(container.firstChild).toBeInTheDocument();
    });
})