import React, { useState, useEffect } from "react";

import axios from "axios";

import styled from "styled-components";
import { fetchBingImage } from "../services/bingImage";

const Background = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
`;

export default ({ currentColor }) => {
    const [bingHomepageImage, setImage] = useState();

    useEffect(() => {
        fetchBingImage().then(setImage);
    }, []);

    return (
        <Background
            style={{
                backgroundImage: `url(${bingHomepageImage})`
            }}
        />
    );
};
