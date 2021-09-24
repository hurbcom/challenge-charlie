import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

//Reducers
import SnackReducer from './features/snack';

export const store = configureStore({
    reducer: {
        snack: SnackReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
    >;