import React, { Suspense } from "react";
import ErrorBoundary from "./ErrorBoundary";
import { GlobalStyle } from "./styles/global";
import HeroImage from "@components/HeroImage";
import MainPage from "@pages/main";

const App: React.FC = () => {
    return (
        <Suspense fallback={<div>Suspending...</div>}>
            <ErrorBoundary>
                <GlobalStyle />
                <MainPage />
            </ErrorBoundary>
        </Suspense>
    );
};

export default App;
