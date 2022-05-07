import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './styles.scss';
import { update as updateNotification } from '../../store/slices/notificationSlice';

function ToastNotification() {
    const notification = useSelector((state) => state.notification.value);
    const dispatch = useDispatch();

    function handleClick() {
        dispatch(updateNotification(null));
    }

    return (
        notification && (
        <div id="toast-notification">
            <div className="text">
                { notification }
            </div>
            <button
              title="Fechar"
              type="button"
              onClick={handleClick}
            >
                <span className="material-symbols-outlined icon-temp">
                    close
                </span>
            </button>
        </div>
        )
    );
}

export default ToastNotification;
