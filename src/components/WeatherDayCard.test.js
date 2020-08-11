import React from 'react';
import { render, screen } from '@testing-library/react';
import WeatherDayCard from './WeatherDayCard';

const dayWeather = {
    temp: {
        day: 32
    },
    weather: [{
        icon: '02d',
        description: 'Ensolarado',

    }],
    wind_deg: 190,
    wind_speed: 2,
    humidity: 90,
    pressure: 1000
}


test('renders day name', () => {
    render(<WeatherDayCard dayName="Hoje" dayWeather={dayWeather} isCelsius expanded />);

    const name = screen.getByText('Hoje');
    expect(name).toBeInTheDocument();
});

test('renders day temperature', () => {
    render(<WeatherDayCard dayName="Hoje" dayWeather={dayWeather} isCelsius expanded />);

    const temperature = screen.getByText('32°C');
    expect(temperature).toBeInTheDocument();
});

test('renders day temperature in fahrenheit', () => {
    render(<WeatherDayCard dayName="Hoje" dayWeather={dayWeather} expanded />);

    const temperature = screen.getByText('90°F');
    expect(temperature).toBeInTheDocument();
});

test('renders day condition', () => {
    render(<WeatherDayCard dayName="Hoje" dayWeather={dayWeather} isCelsius expanded />);

    const condition = screen.getByText('Ensolarado');
    expect(condition).toBeInTheDocument();
});

test('renders day humidity', () => {
    render(<WeatherDayCard dayName="Hoje" dayWeather={dayWeather} isCelsius expanded />);

    const humidity = screen.getByText('90%');
    expect(humidity).toBeInTheDocument();
});

test('renders day pressure', () => {
    render(<WeatherDayCard dayName="Hoje" dayWeather={dayWeather} isCelsius expanded />);

    const pressure = screen.getByText('1000hPA');
    expect(pressure).toBeInTheDocument();
});