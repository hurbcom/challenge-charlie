import React from "react";
import './style.scss'

const Modal = props => {

    const { children } = props
    return (
        <div className="modal-container">
            {children}
        </div>

    )
}

export default Modal