import React, { useEffect } from "react";
import { Home } from "./pages/Home";

function App() {
    useEffect(() => {
        document.title = "Clima Tempo";
    }, []);

    return <Home />;
}

export default App;
