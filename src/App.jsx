import React from "react";
import AppProvider from "./hooks/AppProvider";
import Appcontainer from "./components/AppContainer";
import MainCard from "./components/MainCard";
import "./styles/main.scss";

const App = () => {
    return (
        <AppProvider>
            <Appcontainer>
                <MainCard />
            </Appcontainer>
        </AppProvider>
    );
};

export default App;
