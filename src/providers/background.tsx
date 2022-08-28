import React, { ReactNode, useEffect, useState } from "react";
import { getBackgroundFromAPI } from "../services/getBackgroundFromAPI";

type BackgroundContextType = {
    background: string;
};

const BackgroundContext = React.createContext<BackgroundContextType>(
    {} as BackgroundContextType
);

export const BackgroundProvider = ({ children }: { children: ReactNode }) => {
    const [background, setBackground] = useState("");

    useEffect(() => {
        getBackground();
    }, []);

    async function getBackground() {
        const bg = await getBackgroundFromAPI();
        setBackground(bg);
    }

    return (
        <BackgroundContext.Provider value={{ background }}>
            {children}
        </BackgroundContext.Provider>
    );
};

export const useBackground = () => React.useContext(BackgroundContext);
