import React, { useState, useEffect } from "react";
import { StyledBackground } from "./BackgroundStyles";
const Background = (props) => {
    const [backgroundImage, setBackgroundImage] = useState();

    useEffect(() => {
        async function getBackgroundImage() {
            const corsUrl = "https://api.allorigins.win/get?url=";
            const bingUrl = "https://www.bing.com";
            const url =
                corsUrl +
                encodeURIComponent(
                    bingUrl +
                        "/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR"
                );
            const response = await fetch(url);
            const data = await response.json();
            const convertedData = JSON.parse(data.contents);
            const imageUrl = bingUrl + convertedData.images[0].url;
            setBackgroundImage(imageUrl);
        }
        getBackgroundImage();
    }, []);

    return (
        <StyledBackground
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            {props.children}
        </StyledBackground>
    );
};

export default Background;
