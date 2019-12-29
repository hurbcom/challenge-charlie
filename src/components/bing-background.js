import React, { useState, useEffect } from "react";

import axios from "axios";

import styled from "styled-components";

const Background = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
`;

export default ({ currentColor }) => {
    const [bingHomepageImage, setImage] = useState();

    const bingURL = "https://www.bing.com";

    // useEffect(() => {
    //     fetchBingHomepageImage();

    //     axios
    //         .get(`https://api.uticket.com.br/eventsearch?city=&p=next`, {
    //             crossdomain: true
    //         })
    //         .then(res => console.log(res.data));
    // }, []);

    const fetchBingHomepageImage = async () => {
        try {
            const req = await axios.get(
                `${bingURL}/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR`,
                {
                    crossdomain: true,
                    headers: { "Access-Control-Allow-Origin": "*" }
                }
            );

            setImage(bingURL + req.data.images[0].url);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Background
            style={{
                backgroundImage: `url(${bingHomepageImage})`
            }}
        />
    );
};
