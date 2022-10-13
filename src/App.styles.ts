import styled from "styled-components";

interface ContainerProps {
    imgUrl: string
}

export const Container = styled.div<ContainerProps>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;

    background-image: url(${props => props.imgUrl});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`;

export const PredictionCard = styled.div`
`;