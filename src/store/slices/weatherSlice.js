/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { formatWeatherDescription, getWindDirection } from '../../utils';

export const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        temperature: {
            celsius: null,
            fahrenheit: null,
        },
        pressure: null,
        humidity: null,
        wind: {
            speed: null,
            direction: null,
        },
        icon: null,
        description: null,
    },
    reducers: {
        update: (state, action) => {
            state.temperature.celsius = action.payload.main.temp;
            state.temperature.fahrenheit = action.payload.main.temp * (9 / 5) + 32;
            state.pressure = action.payload.main.pressure;
            state.humidity = action.payload.main.humidity;
            state.wind.speed = (action.payload.wind.speed * 3.6).toFixed(1);
            state.wind.direction = getWindDirection(action.payload.wind.deg);
            state.icon = action.payload.weather[0].icon;
            state.description = formatWeatherDescription(action.payload.weather[0].description);
        },
    },
});

// Action creators are generated for each case reducer function
export const { update } = weatherSlice.actions;

export default weatherSlice.reducer;
