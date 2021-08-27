import React from "react";
import Home from "../src/Components/Home";
import CreateGlobalStyle from "../src/assets/styles/global";
import "../src/assets/fonts/stylesheet.css";
function App() {
    return (
        <>
            <CreateGlobalStyle />
            <Home />
        </>
    );
}

export default App;
