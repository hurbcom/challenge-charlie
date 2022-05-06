/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        value: {},
    },
    reducers: {
        update: (state, action) => {
            state.value = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { update } = weatherSlice.actions;

export default weatherSlice.reducer;
