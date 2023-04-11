import React, { Suspense } from "react";
import ErrorBoundary from "./ErrorBoundary";
import { GlobalStyle } from "./styles/global";
import HeroImage from "@components/HeroImage";
import WeatherAccordeon from "@components/WeatherAccordeon";

const App: React.FC = () => {
    return (
        <Suspense fallback={<div>Suspending...</div>}>
            <ErrorBoundary>
                <GlobalStyle />
                <HeroImage
                    image={
                        "https://www.bing.com/th?id=OHR.KitsAspen_PT-BR8299899730_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp"
                    }
                >
                    <WeatherAccordeon />
                </HeroImage>
            </ErrorBoundary>
        </Suspense>
    );
};

export default App;
