import React from "react";
import Home from "../src/Components/Home";
import CreateGlobalStyle from "../src/assets/styles/global";
import "../src/assets/fonts/stylesheet.css";
function App() {
    return (
        <React.Fragment>
            <CreateGlobalStyle></CreateGlobalStyle>
            <Home></Home>
        </React.Fragment>
    );
}

export default App;
