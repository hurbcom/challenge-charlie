import React from "react";
import useImageUrl from "../hooks/useImageurl";
import styled from "styled-components";

const BackgroundWithImage = styled.div<{ image: string }>`
    width: 100%;
    height: 100vh;
    position: absolute;
    background-image: url(${(props) => props.image});
    background-size: cover;
`;

const Overlay = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100vh;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.5);
`;

export default () => {
    const { src } = useImageUrl();

    return (
        <BackgroundWithImage role="aria-hidden" image={src}>
            <Overlay />
        </BackgroundWithImage>
    );
};
