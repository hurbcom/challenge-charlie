import React, { useState, useEffect } from "react";
import { StyledBackground } from "./BackgroundStyles";
import Loader from "../Loader";

const Background = (props) => {
    const [backgroundImage, setBackgroundImage] = useState();
    const [isLoading, setIsLoading] = useState(false);

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
            setIsLoading(true);
            const response = await fetch(url);
            const data = await response.json();
            const convertedData = JSON.parse(data.contents);
            const imageUrl = bingUrl + convertedData.images[0].url;
            setBackgroundImage(imageUrl);
            setIsLoading(false);
        }
        getBackgroundImage();
    }, []);

    return (
        <React.Fragment>
            <Loader visible={isLoading} />
            <StyledBackground
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >
                {props.children}
            </StyledBackground>
        </React.Fragment>
    );
};

export default Background;
