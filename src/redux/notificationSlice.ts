import { createSlice } from '@reduxjs/toolkit';

export const notificationSlice = createSlice({
  name: 'notification',
  initialState: {
    isError: false,
    isLoading: false
  },
  reducers: {
    insertError: (state, action) => {
      state.isError = action.payload;
    },
    insertLoading: (state, action) => {
      state.isLoading = action.payload;
    }
  }
});

export const { insertError, insertLoading } = notificationSlice.actions;

export const selectError = (state) => state.notification.isError;
export const selectLoading = (state) => state.notification.isLoading;

export default notificationSlice.reducer;
