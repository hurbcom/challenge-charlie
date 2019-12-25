import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Layout from "./styles/layout";
import Input from "./components/input";
import BingBackground from "./components/bing-background";

const App = () => {
    return (
        <>
            <BingBackground />
            <Layout>
                <Input />
            </Layout>
        </>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
