import styled from "styled-components";

type BackgroundImgProps = {
    img?: string;
};

export const BackgroundImg = styled.div<BackgroundImgProps>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-image: url(${(props) => props.img});
`;
