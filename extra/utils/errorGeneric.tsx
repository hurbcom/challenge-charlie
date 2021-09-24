import {open} from "../redux/features/snack";
import {AppThunk} from "../redux/store";

export const ErrorGeneric = (e: string): AppThunk => (
    dispatch
) => {
    dispatch(open({message:e,type:'error',open: true}));
};