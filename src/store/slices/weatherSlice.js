/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { formatWeatherDescription, getWindDirection } from '../../utils';

export const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        temperature: null,
        pressure: null,
        humidity: null,
        wind: {
            speed: null,
            direction: null,
        },
        icon: null,
        description: null,
        forecast: [],
    },
    reducers: {
        update: (state, action) => {
            state.temperature = action.payload.main.temp;
            state.pressure = action.payload.main.pressure;
            state.humidity = action.payload.main.humidity;
            state.wind.speed = (action.payload.wind.speed * 3.6).toFixed(1);
            state.wind.direction = getWindDirection(action.payload.wind.deg);
            state.icon = action.payload.weather[0].icon;
            state.description = formatWeatherDescription(action.payload.weather[0].description);
            state.forecast = [action.payload.daily[1].temp, action.payload.daily[2].temp];
        },
    },
});

// Action creators are generated for each case reducer function
export const { update } = weatherSlice.actions;

export default weatherSlice.reducer;
