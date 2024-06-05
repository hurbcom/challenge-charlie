import { useState, useEffect } from "react";
import "./InputLocation.css";

export default function InputLocation({ city, onSubmit }) {
    const [inputValue, setInputValue] = useState(city);

    useEffect(() => {
        setInputValue(city);
    }, [city]);

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            onSubmit(inputValue);
        }
    };

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleFocus = () => {
        setInputValue("");
    };

    const handleBlur = () => {
        if (inputValue === "") {
            setInputValue(city);
        }
    };

    return (
        <div className="location-container">
            <a className="icon" data-icon="("></a>

            <input
                value={inputValue}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
        </div>
    );
}
