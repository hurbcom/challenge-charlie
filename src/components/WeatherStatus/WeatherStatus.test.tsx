import React from 'react';
import { render, screen } from '@testing-library/react';
import { returnDailyWeather } from 'services/WeatherService';
import userEvent from '@testing-library/user-event';
import WeatherStatus from '.';

describe('<WeatherStatus />', () => {
    const mockData = {
        today: {
            temp: 12,
            pressure: 1019,
            humidity: 77,
            wind_speed: 3.13,
            wind_deg: 200,
            weather: [
                {
                    main: 'Rain',
                    description: 'chuva forte'
                }
            ]
        },
        tomorrow: {
            temp: {
                day: 30
            },
            pressure: 123,
            humidity: 456,
            wind_speed: 2,
            wind_deg: 4.54,
            weather: [
                {
                    main: 'Clear',
                    description: 'céu limpo'
                }
            ]
        },
        afterTomorrow: {
            temp: {
                day: 35
            },
            pressure: 123,
            humidity: 456,
            wind_speed: 2,
            wind_deg: 4.54,
            weather: [
                {
                    main: 'Clouds',
                    description: 'nublado'
                }
            ]
        }
    } as returnDailyWeather;

    it('should be rendered', () => {
        const { container } = render(<WeatherStatus dailyWeather={mockData} />);
        expect(container.firstChild).toBeTruthy();
        expect(container.firstChild).toMatchSnapshot();
    });

    it('should be rendered without props', () => {
        const { container } = render(<WeatherStatus dailyWeather={null} />);
        expect(container.firstChild).toBeTruthy();
        expect(container.firstChild).toMatchSnapshot();
    });

    it('should have background color', () => {
        render(<WeatherStatus dailyWeather={mockData} />);
        expect(screen.getByTestId('today-weather')).toHaveStyle({
            background: '#6497b1'
        });
        expect(screen.getByTestId('tomorrow-weather')).toHaveStyle({
            background: '#005b96'
        });
        expect(screen.getByTestId('aftertomorrow-weather')).toHaveStyle({
            background: '#011f4b'
        });
    });

    it('should render icon', () => {
        render(<WeatherStatus dailyWeather={mockData} />);
        expect(screen.getByTestId('weather-icon').firstChild).toBeTruthy();
    });

    it('should render today temperature', () => {
        render(<WeatherStatus dailyWeather={mockData} />);
        expect(screen.getByTestId('temperature').firstChild?.nodeValue).toBe(
            '12ºC'
        );
    });

    it('should render tomorow temperature', () => {
        render(<WeatherStatus dailyWeather={mockData} />);
        expect(
            screen.getByTestId('tomorrow-weather').childNodes[1].firstChild
                ?.nodeValue
        ).toBe('30ºC');
    });

    it('should render after tomorow temperature', () => {
        render(<WeatherStatus dailyWeather={mockData} />);
        expect(
            screen.getByTestId('aftertomorrow-weather').childNodes[1].firstChild
                ?.nodeValue
        ).toBe('35ºC');
    });

    it('should render temperature in fahrenheit', () => {
        render(<WeatherStatus dailyWeather={mockData} />);
        const temperatureWrapper = screen.getByTestId('temperature');
        userEvent.click(temperatureWrapper);
        expect(temperatureWrapper.firstChild?.nodeValue).toBe('53ºF');
    });

    it('should render wind', () => {
        render(<WeatherStatus dailyWeather={mockData} />);
        setTimeout(() => {
            expect(screen.getByTestId('wind').firstChild?.nodeValue).toBe(
                'Vento: S 3.13Km/h'
            );
        }, 1000);
    });

    it('should render humidity', () => {
        render(<WeatherStatus dailyWeather={mockData} />);
        setTimeout(() => {
            expect(screen.getByTestId('humidity').firstChild?.nodeValue).toBe(
                'Humidade: 77%'
            );
        }, 1000);
    });

    it('should render pressure', () => {
        render(<WeatherStatus dailyWeather={mockData} />);
        setTimeout(() => {
            expect(screen.getByTestId('pressure').firstChild?.nodeValue).toBe(
                'Pressão: 1019hPA'
            );
        }, 1000);
    });
});
