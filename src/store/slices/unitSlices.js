/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const unitSlice = createSlice({
    name: 'unit',
    initialState: {
        value: 'celsius',
    },
    reducers: {
        toggle: (state) => {
            state.value = state.value === 'celsius' ? 'fahrenheit' : 'celsius';
        },
    },
});

// Action creators are generated for each case reducer function
export const { toggle } = unitSlice.actions;

export default unitSlice.reducer;
