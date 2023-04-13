import { useState } from "react";

const useLocalStorage = (key: string, initialValue: string) => {
    const [value, setValue] = useState(() => {
        try {
            const storedValue = localStorage.getItem(key);
            return storedValue !== null ? JSON.parse(storedValue) : initialValue;
        } catch (error) {
            console.warn(`Error using localStorage: ${error}`);
            return initialValue;
        }
    });

    const setLocalStorageValue = (newValue: string) => {
        try {
            setValue(newValue);
            localStorage.setItem(key, JSON.stringify(newValue));
        } catch (error) {
            console.warn(`Error using localStorage: ${error}`);
        }
    };


    return [value, setLocalStorageValue];
};

export default useLocalStorage