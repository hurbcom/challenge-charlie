/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { formatWeatherDescription, getWindDirection } from '../../utils';

const initialState = {
    isEmpty: true,
    temperature: null,
    pressure: '',
    humidity: '',
    wind: {
        speed: '',
        direction: '',
    },
    icon: null,
    description: null,
    forecast: [],
};

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
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
            state.isEmpty = false;
        },
        reset: (state) => {
            Object.keys(initialState).forEach((key) => {
                state[key] = initialState[key];
            });
        },
    },
});

// Action creators are generated for each case reducer function
export const { update, reset } = weatherSlice.actions;

export default weatherSlice.reducer;
