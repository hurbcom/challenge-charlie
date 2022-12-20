import React from 'react';
import {
    useWeatherContext,
    WeatherContextProvider,
    WeatherContextProviderProps
} from './WeatherContext';

import { renderHook } from '@testing-library/react-hooks';
import { act } from 'react-dom/test-utils'

const weatherInformations = {
    city: 'Rio de Janeiro',
    today: {
        temp: 12,
        description: 'Ensolarado',
        humidity: 123,
        wind: 13,
        pressure: 1324,
        icon: '044d'
    },
    tomorrow: {
        tempMax: 23,
        tempMin: 23,
        icon: '044d'
    },
    afterTomorrow: {
        tempMax: 12,
        tempMin: 12,
        icon: '044d'
    }
}


describe('WeatherContext', () => {
    it('should update Background Image', () => {
        const wrapper = ({ children }: WeatherContextProviderProps) => (
            <WeatherContextProvider>{children}</WeatherContextProvider>
        );

        const { result } = renderHook(() => useWeatherContext(), {
            wrapper
        });

        act(() => {
            result.current.setBackgroundImage('URL Imagem');
        });

        expect(result.current.backgroundImage).toStrictEqual('URL Imagem');
    });

    it('should update weather informations', () => {
        const wrapper = ({ children }: WeatherContextProviderProps) => (
            <WeatherContextProvider>{children}</WeatherContextProvider>
        );

        const { result } = renderHook(() => useWeatherContext(), {
            wrapper
        });

        act(() => {
            result.current.setWeatherInformations(weatherInformations);
        });

        expect(result.current.weatherInformations).toStrictEqual(weatherInformations);
    });
});