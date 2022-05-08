/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const loadingSlice = createSlice({
    name: 'loading',
    initialState: {
        value: false,
    },
    reducers: {
        update: (state, action) => {
            state.value = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { update } = loadingSlice.actions;

export default loadingSlice.reducer;
