import React from "react";

import { BackgroundProvider } from "./backgroundBing";
import { GeoProvider } from "./geolocation";
import { WeatherProvider } from "./weather";

// Each provider has its own variables and functions related to the feature on its name.
//This file are assembling all providers into one single JSX Element.

const AppProvider = ({ children }) => (
    <BackgroundProvider>
        <GeoProvider>
            <WeatherProvider>{children}</WeatherProvider>
        </GeoProvider>
    </BackgroundProvider>
);

export default AppProvider;
