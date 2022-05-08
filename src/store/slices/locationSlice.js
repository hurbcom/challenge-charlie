/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const locationSlice = createSlice({
    name: 'location',
    initialState: {
        value: '',
    },
    reducers: {
        update: (state, action) => {
            state.value = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { update } = locationSlice.actions;

export default locationSlice.reducer;
