import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {RootState} from "../../store";

//Interfaces
import { SnackState } from "../../../interfaces/snackState";

const initialState: SnackState = {
    message: '',
    type: 'success',
    open: false
};

export const snackSlice = createSlice({
    name: 'snack',
    initialState,
    reducers: {
        open: (state ,action: PayloadAction<SnackState>) => {
            state.message = action.payload.message;
            state.type = action.payload.type;
            state.open = true;
        },
        close: (state ,action: PayloadAction<SnackState>) => {
            state.message = '';
            state.type = action.payload.type;
            state.open = false;
        },
    },
});

export const { open, close } = snackSlice.actions;

export const selectSnack = (state: RootState) => state.snack;

export default snackSlice.reducer;