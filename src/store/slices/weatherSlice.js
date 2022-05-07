/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

function getWindDirection(deg) {
    const val = Math.floor((deg / 22.5) + 0.5);
    const arr = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSO', 'SO', 'OSO', 'O', 'ONO', 'NO', 'NNO'];
    return arr[(val % 16)];
}
function formatDescription(desc) {
    return desc.charAt(0).toUpperCase() + desc.slice(1);
}

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
            state.wind.direction = getWindDirection(state.wind.deg);
            state.icon = action.payload.weather[0].icon;
            state.description = formatDescription(action.payload.weather[0].description);
        },
    },
});

// Action creators are generated for each case reducer function
export const { update } = weatherSlice.actions;

export default weatherSlice.reducer;
