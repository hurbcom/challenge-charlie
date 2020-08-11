import React from 'react';
import { render, screen, wait, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import Weather from './Weather';
import themes from '../themes';

function mockWeather(temp, icon, condition) {
    return {
        temp: {
            day: temp
        },
        weather: [{
            icon: icon,
            description: condition,

        }],
        wind_deg: 190,
        wind_speed: 2,
        humidity: 90,
        pressure: 1000
    }
}


class OpenCageMock {
    getGeoCode(city, callback) {
        if (city === 'Curitiba') {
            callback({lat: -25.4284, lng: -49.2733});
        } else {
            callback({lat: -23.0126811, lgn: -43.454839});
        }
    }

    getCityName(lat, lng, callback) {
        if (lat === -25.4284) {
            callback('Curitiba')
        } else {
            callback('Rio de Janeiro');
        }
    }
}

class OpenWeatherMock {
    getWeatherByGeoCode(geocode, callback) {
        if (geocode.lat === -25.4284) {
            callback([
                mockWeather(15, '03d', 'Nublado'),
                mockWeather(13, '03d', 'Nublado'),
                mockWeather(11, '03d', 'Nublado')
            ]);
        } else {
            callback([
                mockWeather(32, '02d', 'Ensolarado'),
                mockWeather(25, '03d', 'Nublado'),
                mockWeather(18, '04d', 'Chuvoso')
            ]);
        }
    }
}

const opencage = new OpenCageMock();
const openweather = new OpenWeatherMock();

test('renders city from current geolocation', () => {
    render(<Weather themes={themes} opencage={opencage} openweather={openweather} />);

    const inputNode = screen.getByDisplayValue('Rio de Janeiro');
    expect(inputNode).toBeInTheDocument();
});


test('renders days', () => {
    render(<Weather themes={themes} opencage={opencage} openweather={openweather} />);

    const today = screen.getByText('Hoje');
    expect(today).toBeInTheDocument();

    const tomorrow = screen.getByText('Amanhã');
    expect(tomorrow).toBeInTheDocument();

    const next = screen.getByText('Depois de Amanhã');
    expect(next).toBeInTheDocument();
});

test('renders tempreatures from current geolocation', () => {
    render(<Weather themes={themes} opencage={opencage} openweather={openweather} />);

    const todayTempreature = screen.getByText('32°C');
    expect(todayTempreature).toBeInTheDocument();

    const tomorrowTemperature = screen.getByText('25°C');
    expect(tomorrowTemperature).toBeInTheDocument();

    const nextTemperature = screen.getByText('18°C');
    expect(nextTemperature).toBeInTheDocument();
});

test('renders today condition from current geolocation', () => {
    render(<Weather themes={themes} opencage={opencage} openweather={openweather} />);

    const todayCondition = screen.getByText('Ensolarado');
    expect(todayCondition).toBeInTheDocument();
});

test('change city should return weather of new location', () => {
    render(<Weather themes={themes} opencage={opencage} openweather={openweather} />);

    const input = screen.getByRole('textbox');
    userEvent.type(input, 'Curitiba')
    fireEvent.submit(input);

    const todayTempreature = screen.getByText('15°C');
    expect(todayTempreature).toBeInTheDocument();

    const todayCondition = screen.getByText('Nublado');
    expect(todayCondition).toBeInTheDocument();
});

test('click on tempreature should convert to fahrenheit', () => {
    render(<Weather themes={themes} opencage={opencage} openweather={openweather} />);

    const todayTempreature = screen.getByText('32°C');
    todayTempreature.click();

    const todayTempreatureInF = screen.getByText('90°F');
    expect(todayTempreatureInF).toBeInTheDocument();
});

test('click two times on tempreature should convert to celsius', () => {
    render(<Weather themes={themes} opencage={opencage} openweather={openweather} />);

    const todayTempreature = screen.getByText('32°C');
    todayTempreature.click();
    todayTempreature.click();

    expect(todayTempreature).toBeInTheDocument();
});