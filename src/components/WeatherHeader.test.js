import React from 'react';
import { render, screen } from '@testing-library/react';
import WeatherHeader from './WeatherHeader';


test('renders input of city', () => {
    render(<WeatherHeader handleChange={jest.fn()} />);

    const inputNode = screen.getByPlaceholderText('Digite sua cidade');
    expect(inputNode).toBeInTheDocument();
});

test('renders location icon', () => {
    render(<WeatherHeader handleChange={jest.fn()} />);

    const icon = screen.getByAltText('Localização Atual');
    expect(icon).toBeInTheDocument();
});

test('renders input with value', () => {
    render(<WeatherHeader city="Test" handleChange={jest.fn()} />);

    const inputNode = screen.getByDisplayValue('Test');
    expect(inputNode).toBeInTheDocument();
});