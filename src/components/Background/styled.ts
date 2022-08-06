import styled from "styled-components";

type BackgroundImgProps = {
    img?: string;
};

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`;

export const BackgroundImg = styled.div<BackgroundImgProps>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: -1;

    background-image: url(${(props) => props.img});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;

    display: flex;
    align-items: center;
    justify-content: center;

    overflow: hidden;
`;
