import React, { useState, useEffect } from "react";
import { StyledBackground } from "./BackgroundStyles";
import Loader from "../Loader";

const Background = (props) => {
    const [background, setBackground] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        //Pega a imagem de fundo da api do Bing
        async function getBackground() {
            const corsUrl = "https://api.allorigins.win/get?url=";
            const bingUrl = "https://www.bing.com";
            const url =
                corsUrl +
                encodeURIComponent(
                    bingUrl +
                        "/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR"
                );
            setIsLoading(true);
            try {
                const response = await fetch(url);
                const data = await response.json();
                const JSONdata = JSON.parse(data.contents);
                const imageUrl = bingUrl + JSONdata.images[0].url;
                setBackground(imageUrl);
            } catch {
                //Colocando cor de fundo caso haja algum erro na requisição da imagem do Bing
                setHasError(true);
                setBackground("#969696");
            } finally {
                setIsLoading(false);
            }
        }
        getBackground();
    }, []);

    return (
        <>
            <Loader visible={isLoading} />
            <StyledBackground
                style={{
                    background: !hasError ? `url(${background})` : background,
                }}
            >
                {props.children}
            </StyledBackground>
        </>
    );
};

export default Background;
