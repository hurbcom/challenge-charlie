import React from "react";
import styled from "styled-components";

const BackgroundWithImage = styled.div<{ image: string }>`
    width: 100%;
    height: 100vh;
    position: relative;
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

const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 2;
    height: 100vh;
    flex-direction: column;
`;

export default ({
    image,
    children,
}: {
    image: string;
    children: React.ReactNode;
}) => {
    return (
        <BackgroundWithImage image={image}>
            <Overlay />
            <Content>{children}</Content>
        </BackgroundWithImage>
    );
};
