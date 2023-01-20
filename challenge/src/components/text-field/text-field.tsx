import React, { useEffect, useState } from "react";
import TextFieldModel from "./text-field-model";
import CidadeIcon from "./../../assets/img/44.svg";
import "./text-field.css";

/**
 * Componente de card de texto
 * @param props - TextFieldModel
 * @returns 
 */
function TextField(props: TextFieldModel) {
    const { id, onChange, stopTyping, value } = props;
    const [timer, setTimer] = useState<NodeJS.Timeout>();

    return (
        <div className="card">
            <div className="card-icon">
                <img src={CidadeIcon} alt={"place"} className="icon" />
            </div>
            <input
                className="input"
                id={id}
                value={value}
                onChange={onChange}
                onKeyUp={(e) => getStopTypping(e.currentTarget.value)}
            />
        </div>
    );

    /**
     * Verifica se o usuário parou de digitar
     * @param text - texto do input
     */
    function getStopTypping(text: string) {
        const timeToWait = 2000;

        clearTimeout(timer);

        setTimer(
            setTimeout(() => {
                stopTyping(text);
            }, timeToWait)
        );
    }
}

export default TextField;
