/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const notificationSlice = createSlice({
    name: 'notification',
    initialState: {
        value: null,
    },
    reducers: {
        update: (state, action) => {
            console.log(action.payload);
            state.value = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { update } = notificationSlice.actions;

export default notificationSlice.reducer;
