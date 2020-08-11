import React from 'react';
import { render, screen } from '@testing-library/react';
import WeatherDayExtraInfo from './WeatherDayExtraInfo';


test('renders label and value', () => {
    render(<WeatherDayExtraInfo label="label" value="value" />);

    const label = screen.getByText('label');
    expect(label).toBeInTheDocument();

    const value = screen.getByText('value');
    expect(value).toBeInTheDocument();
});