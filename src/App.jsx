import React from "react";
import Appcontainer from "./components/AppContainer";
import MainCard from "./components/MainCard";
import "./styles/main.scss";

const App = () => {
    return (
        <Appcontainer>
            <MainCard />
        </Appcontainer>
    );
};

export default App;
