import React, { createContext, useCallback, useState, useContext } from "react";
import axios from "axios";

// Context about the background image, serving the image, the function to fetch the image, and a load boolean to support the component who is using the context.

// Instantiating the context
const BackgroundContext = createContext({});

// The creation of variables and functions for the context.
export const BackgroundProvider = ({ children }) => {
    const [backgroundImage, setBackgroundImage] = useState();
    const [loading, setLoading] = useState(true);

    const getBackground = useCallback(async () => {
        const response = await axios.get(
            "https://cors-anywhere.herokuapp.com/www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR"
        );
        setBackgroundImage(
            `https://www.bing.com${response.data.images[0].url}`
        );
        setLoading(false);
    }, [setBackgroundImage]);

    return (
        <BackgroundContext.Provider
            value={{ backgroundImage, getBackground, loading }}
        >
            {children}
        </BackgroundContext.Provider>
    );
};

// the function that will be called on the component to release access to the variables and functions written above.
export function useBackground() {
    const context = useContext(BackgroundContext);
    if (!context) {
        throw new Error("useBackground is missing");
    }
    return context;
}
