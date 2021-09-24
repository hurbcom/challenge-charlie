import React, {useEffect} from 'react';
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

//Redux
import {useAppSelector} from "../../redux/hooks";
import {selectSnack} from "../../redux/features/snack";

//Interfaces
import {ToastInterface} from "../../interfaces/snack";

const ToastMessage = ({ type, message }: ToastInterface) => {
    switch (type) {
        case 'success':
            toast.success(message);
            break;
        case 'warn':
            toast.warn(message);
            break;
        case 'error':
            toast.error(message);
            break;
        default:
            toast.info(message);
    }
}

export default function CustomizedSnackbars (){
    const state = useAppSelector(selectSnack);

    const notify = React.useCallback((type, message) => {
        ToastMessage({ type, message });
    }, []);

    useEffect(()=>{
        if(state.open){
            notify(state.type, state.message)
        }
    },[state])

    return (
        <ToastContainer
            position="top-right"
            autoClose={10000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            theme={'colored'}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
    );
}


