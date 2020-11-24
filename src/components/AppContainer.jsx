import React, { useEffect, useState } from "react";
import axios from "axios";

const AppContainer = ({ children }) => {
    const [backgroundImage, setBackgroundImage] = useState("");
    useEffect(() => {
        axios
            .get(
                "https://cors-anywhere.herokuapp.com/www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR"
            )
            .then((response) => {
                console.log(response);
                setBackgroundImage(
                    `https://www.bing.com${response.data.images[0].url}`
                );
            });
    }, []);

    return (
        <div
            className="app_container"
            style={{
                backgroundImage: `url(${backgroundImage})`,
            }}
        >
            {children}
        </div>
    );
};

export default AppContainer;
