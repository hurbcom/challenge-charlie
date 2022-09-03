import React, { useEffect, useState } from "react";
import { useLocation } from "../../providers/location";
import { useWeather } from "../../providers/weather";
import styles from "./styles.module.scss";

const SearchLocation: React.FC = () => {
    const [input, setInput] = useState("");
    const { location } = useLocation();
    const { getWeather } = useWeather()

    useEffect(() => {
        if (location) setInput(location);
    }, [location]);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        getWeather(input);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Pesquisar por cidade"
                className={styles.input}
                aria-label="location"
                type="text"
            />
        </form>
    );
};

export default SearchLocation;