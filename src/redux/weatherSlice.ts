import { createSlice } from '@reduxjs/toolkit';

export const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    weather: {}
  },
  reducers: {
    insertWeather: (state, action) => {
      state.weather = action.payload;
    },
    deleteWeather: (state) => {
      state.weather = {};
    }
  }
});

export const { insertWeather, deleteWeather } = weatherSlice.actions;

export const selectWeather = (state) => state.weather.weather;

export default weatherSlice.reducer;
